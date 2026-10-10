export interface Plan {
  id: 'starter' | 'growth' | 'business_pro';
  name: string;
  badge?: string;
  isPopular?: boolean;
  subtitle: string;
  originalPrice?: string;
  regularPrice: string;
  discountedPrice: number;
  discountLabel: string;
  description: string;
  features: string[];
  bonus: {
    title: string;
    description: string;
    value: string;
    giftType: 'single' | 'triple' | 'pro';
  };
}

export interface BusinessInfo {
  fullName: string;
  businessName: string;
  activityOrNiche: string;
  clientPhone: string;
  countryCode?: string;
}

export interface FormErrors {
  fullName?: string;
  businessName?: string;
  activityOrNiche?: string;
  clientPhone?: string;
}
