import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_PHONE = '573208002736';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMessage = encodeURIComponent(
    '¡Hola! 👋 Vengo de la página web de SocialTrove. Me gustaría recibir asesoría sobre la automatización de WhatsApp con IA.'
  );

  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all transform hover:scale-110 active:scale-95"
        title="Chatear por WhatsApp"
      >
        <span className="sr-only">Contactar por WhatsApp</span>
        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        <span className="hidden sm:inline-block pr-2 font-bold text-sm tracking-wide text-white drop-shadow">
          ¿Dudas? Escríbenos
        </span>
      </a>
    </aside>
  );
};
