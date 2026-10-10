import React, { useState, useEffect } from 'react';
import { Plan, BusinessInfo, FormErrors } from '../types';
import { X, ArrowLeft, Building2, User, Briefcase, Phone, AlertCircle, Gift, MessageCircle, ShieldCheck } from 'lucide-react';

interface WhatsAppModalProps {
  plan: Plan | null;
  isOpen: boolean;
  onClose: () => void;
}

// Receptor comercial oficial de SocialTrove
const SOCIALTROVE_RECEPTOR_PHONE = '573208002736';

const COUNTRIES = [
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+52', name: 'México', flag: '🇲🇽' },
  { code: '+34', name: 'España', flag: '🇪🇸' },
  { code: '+1', name: 'EE. UU. / Canadá', flag: '🇺🇸' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+51', name: 'Perú', flag: '🇵🇪' },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+507', name: 'Panamá', flag: '🇵🇦' },
  { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
  { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
  { code: '+1809', name: 'Rep. Dominicana', flag: '🇩🇴' },
  { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+', name: 'Otro país', flag: '🌐' },
];

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ plan, isOpen, onClose }) => {
  const [formData, setFormData] = useState<BusinessInfo>({
    fullName: '',
    businessName: '',
    activityOrNiche: '',
    clientPhone: '',
    countryCode: '+57',
  });

  const [touched, setTouched] = useState<{ [K in keyof BusinessInfo]?: boolean }>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const resetForm = () => {
    setFormData({
      fullName: '',
      businessName: '',
      activityOrNiche: '',
      clientPhone: '',
      countryCode: '+57',
    });
    setTouched({});
    setAttemptedSubmit(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, plan?.id]);

  if (!isOpen || !plan) return null;

  // Validación estricta de cada campo
  const validate = (): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Por favor, ingresa tu nombre completo.';
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!formData.businessName.trim()) {
      errors.businessName = 'Por favor, ingresa el nombre de tu empresa o negocio.';
    }

    if (!formData.activityOrNiche.trim()) {
      errors.activityOrNiche = 'Indica qué productos vendes o a qué se dedica tu negocio.';
    }

    const rawPhoneDigits = formData.clientPhone.replace(/\D/g, '');
    if (!formData.clientPhone.trim()) {
      errors.clientPhone = 'Por favor, ingresa tu número de WhatsApp.';
    } else if (rawPhoneDigits.length < 7 || rawPhoneDigits.length > 15) {
      errors.clientPhone = 'Ingresa un número válido (entre 7 y 15 dígitos numéricos).';
    }

    return errors;
  };

  const errors = validate();
  const isFormValid = Object.keys(errors).length === 0;

  const handleBlur = (field: keyof BusinessInfo) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field: keyof BusinessInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Generación automática del mensaje estructurado para WhatsApp
  const generateWhatsAppMessage = () => {
    const fullPhone = `${formData.countryCode || '+57'} ${formData.clientPhone.trim()}`.trim();

    let msg = `¡Hola! 👋 Vengo de la página web de SocialTrove.\n`;
    msg += `Deseo contratar el plan *${plan.name}* por *US$${plan.discountedPrice}/mes* (${plan.discountLabel}).\n\n`;

    msg += `📋 *Datos de mi negocio:*\n`;
    msg += `• *Contacto:* ${formData.fullName.trim()}\n`;
    msg += `• *Empresa / Negocio:* ${formData.businessName.trim()}\n`;
    msg += `• *Actividad / Servicios:* ${formData.activityOrNiche.trim()}\n`;
    msg += `• *WhatsApp del cliente:* ${fullPhone}\n\n`;

    msg += `🎁 *Bono Incluido:* ${plan.bonus.title} - ${plan.bonus.description} (Gratis, Valor ${plan.bonus.value})\n\n`;
    msg += `Por favor, indíquenme los pasos para iniciar la implementación de mi asistente inteligente. ¡Muchas gracias!`;

    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!isFormValid) {
      return;
    }

    // 1. Generar el mensaje completo con los datos introducidos
    const messageText = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${SOCIALTROVE_RECEPTOR_PHONE}?text=${encodeURIComponent(messageText)}`;

    // 2. Iniciar la apertura de WhatsApp mediante la interacción del usuario
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // 3. Una vez iniciado el proceso de navegación, limpiar los cuatro campos y restablecer validaciones
    resetForm();

    // 4. Cerrar el modal para que al regresar la experiencia sea limpia
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg my-auto bg-[#0d0922] border border-purple-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_0_40px_rgba(168,85,247,0.3)] text-white"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-plan-title"
      >
        {/* Encabezado Compacto: Volver + Título + Cerrar */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-purple-900/40 mb-3.5">
          <button
            type="button"
            onClick={handleClose}
            className="flex items-center gap-1 text-xs font-semibold text-purple-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Volver</span>
          </button>

          <div className="flex items-center gap-2 text-center">
            <h2 id="modal-plan-title" className="text-base sm:text-lg font-black text-white">
              Activar Plan <span className="text-fuchsia-400">{plan.name}</span>
            </h2>
            <span className="bg-[#facc15] text-[#171000] font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tight">
              {plan.discountLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-1 rounded-full bg-purple-900/30 hover:bg-purple-800/60 text-purple-200 transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Resumen Compacto de Plan, Precio y Bono */}
        <div className="mb-4 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-purple-950/60 to-[#120826] border border-purple-700/40 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-300 shrink-0">
              <Gift className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate">
                {plan.bonus.title}
              </p>
              <p className="text-[11px] text-emerald-400 font-medium truncate">
                Bono gratuito incluido (Valor {plan.bonus.value})
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-[11px] text-neutral-400">
              <del className="line-through decoration-red-400/80">
                {plan.originalPrice || (plan.id === 'starter' ? 'US$29/mes' : plan.id === 'growth' ? 'US$69/mes' : 'US$199/mes')}
              </del>
            </div>
            <span className="text-base sm:text-lg font-black text-white">
              US${plan.discountedPrice}
              <span className="text-[10px] text-purple-300 font-normal">/mes</span>
            </span>
          </div>
        </div>

        {/* Formulario de Contratación */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
          {/* Campo 1: Nombre completo del contacto */}
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-purple-200 mb-1">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-purple-400" />
                Tu nombre completo <span className="text-pink-400">*</span>
              </span>
              {(touched.fullName || attemptedSubmit) && errors.fullName && (
                <span className="text-[11px] text-pink-400 font-normal flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 inline" /> Requerido
                </span>
              )}
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Ej: Juan Pérez"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              onBlur={() => handleBlur('fullName')}
              className={`w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-purple-950/40 border text-white placeholder-purple-400/35 text-sm transition-all focus:outline-none ${
                (touched.fullName || attemptedSubmit) && errors.fullName
                  ? 'border-pink-500 focus:ring-1 focus:ring-pink-500 bg-pink-950/20'
                  : 'border-purple-800/60 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400'
              }`}
            />
            {(touched.fullName || attemptedSubmit) && errors.fullName && (
              <p className="text-[11px] text-pink-400 mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Campo 2: Nombre de la empresa o negocio */}
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-purple-200 mb-1">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-purple-400" />
                Nombre de tu empresa o negocio <span className="text-pink-400">*</span>
              </span>
              {(touched.businessName || attemptedSubmit) && errors.businessName && (
                <span className="text-[11px] text-pink-400 font-normal flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 inline" /> Requerido
                </span>
              )}
            </label>
            <input
              type="text"
              name="businessName"
              placeholder="Ej: Moda Urbana, Clínica Dental Plus..."
              value={formData.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              onBlur={() => handleBlur('businessName')}
              className={`w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-purple-950/40 border text-white placeholder-purple-400/35 text-sm transition-all focus:outline-none ${
                (touched.businessName || attemptedSubmit) && errors.businessName
                  ? 'border-pink-500 focus:ring-1 focus:ring-pink-500 bg-pink-950/20'
                  : 'border-purple-800/60 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400'
              }`}
            />
            {(touched.businessName || attemptedSubmit) && errors.businessName && (
              <p className="text-[11px] text-pink-400 mt-1">{errors.businessName}</p>
            )}
          </div>

          {/* Campo 3: Actividad comercial o qué productos/servicios vendes */}
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-purple-200 mb-1">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                ¿Qué vendes o a qué se dedica tu negocio? <span className="text-pink-400">*</span>
              </span>
              {(touched.activityOrNiche || attemptedSubmit) && errors.activityOrNiche && (
                <span className="text-[11px] text-pink-400 font-normal flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 inline" /> Requerido
                </span>
              )}
            </label>
            <input
              type="text"
              name="activityOrNiche"
              placeholder="Ej: Venta de calzado, Cursos online, Servicios médicos..."
              value={formData.activityOrNiche}
              onChange={(e) => handleChange('activityOrNiche', e.target.value)}
              onBlur={() => handleBlur('activityOrNiche')}
              className={`w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-purple-950/40 border text-white placeholder-purple-400/35 text-sm transition-all focus:outline-none ${
                (touched.activityOrNiche || attemptedSubmit) && errors.activityOrNiche
                  ? 'border-pink-500 focus:ring-1 focus:ring-pink-500 bg-pink-950/20'
                  : 'border-purple-800/60 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400'
              }`}
            />
            {(touched.activityOrNiche || attemptedSubmit) && errors.activityOrNiche && (
              <p className="text-[11px] text-pink-400 mt-1">{errors.activityOrNiche}</p>
            )}
          </div>

          {/* Campo 4: Selector de país y Número de WhatsApp */}
          <div>
            <label className="flex items-center justify-between text-xs font-semibold text-purple-200 mb-1">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                Tu número de WhatsApp <span className="text-pink-400">*</span>
              </span>
              {(touched.clientPhone || attemptedSubmit) && errors.clientPhone && (
                <span className="text-[11px] text-pink-400 font-normal flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 inline" /> Inválido
                </span>
              )}
            </label>
            <div className="flex gap-2">
              {/* Selector de País con Prefijo */}
              <div className="relative w-36 shrink-0">
                <select
                  value={formData.countryCode || '+57'}
                  onChange={(e) => handleChange('countryCode', e.target.value)}
                  className="w-full px-2.5 py-2 sm:py-2.5 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 cursor-pointer appearance-none pr-6"
                  aria-label="Selector de país"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code + c.name} value={c.code} className="bg-[#120826] text-white">
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-purple-400 text-[10px]">
                  ▼
                </div>
              </div>

              {/* Input de Teléfono Local */}
              <input
                type="tel"
                name="clientPhone"
                placeholder="300 123 4567"
                value={formData.clientPhone}
                onChange={(e) => handleChange('clientPhone', e.target.value)}
                onBlur={() => handleBlur('clientPhone')}
                className={`flex-1 min-w-0 px-3.5 py-2 sm:py-2.5 rounded-xl bg-purple-950/40 border text-white placeholder-purple-400/35 text-sm transition-all focus:outline-none ${
                  (touched.clientPhone || attemptedSubmit) && errors.clientPhone
                    ? 'border-pink-500 focus:ring-1 focus:ring-pink-500 bg-pink-950/20'
                    : 'border-purple-800/60 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400'
                }`}
              />
            </div>
            {(touched.clientPhone || attemptedSubmit) && errors.clientPhone && (
              <p className="text-[11px] text-pink-400 mt-1">{errors.clientPhone}</p>
            )}
          </div>

          {/* Botón Principal: Continuar por WhatsApp */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={attemptedSubmit && !isFormValid}
              className={`w-full py-3 sm:py-3.5 px-5 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                attemptedSubmit && !isFormValid
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-neutral-700'
                  : 'bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 active:scale-[0.99] text-white shadow-[0_0_25px_rgba(37,211,102,0.4)]'
              }`}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-transparent shrink-0" />
              <span>Continuar por WhatsApp</span>
            </button>

            {attemptedSubmit && !isFormValid && (
              <p className="text-[11px] text-center text-pink-400 font-medium mt-1.5">
                Por favor, completa los campos requeridos para abrir WhatsApp.
              </p>
            )}
          </div>

          {/* Nota de Privacidad */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-purple-300/70 text-center pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Tus datos son confidenciales y se usarán únicamente para coordinar tu activación por WhatsApp.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
