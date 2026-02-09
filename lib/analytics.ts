// lib/analytics.ts
// Sistema centralizado de tracking de eventos

type WhatsAppSource = 
  | 'hero_primary'
  | 'hero_secondary'
  | 'model_card_interno'
  | 'model_card_externo'
  | 'model_card_kit'
  | 'models_page_interno'
  | 'models_page_externo'
  | 'models_page_kit'
  | 'mobile_sticky_bar'
  | 'specialist_cta'
  | 'faq_section';

type LeadSource = 
  | 'hero_form'
  | 'middle_funnel_form';

interface AnalyticsEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// Google Analytics 4
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Meta Pixel
export const trackMetaEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

// Tracking de clique no WhatsApp
export const trackWhatsAppClick = (source: WhatsAppSource, modelName?: string) => {
  const label = modelName ? `${source}_${modelName}` : source;
  
  // Google Analytics
  trackEvent({
    action: 'whatsapp_click',
    category: 'engagement',
    label: label,
    value: 1,
  });

  // Meta Pixel
  trackMetaEvent('Contact', {
    content_name: modelName || 'Consulta Geral',
    content_category: 'whatsapp',
    source: source,
  });

  console.log('📊 WhatsApp Click Tracked:', { source, modelName });
};

// Tracking de envio de mensagem (quando possível detectar)
export const trackWhatsAppMessageSent = (source: WhatsAppSource, modelName?: string) => {
  trackEvent({
    action: 'whatsapp_message_sent',
    category: 'conversion',
    label: `${source}_${modelName || 'geral'}`,
    value: 5,
  });

  trackMetaEvent('Lead', {
    content_name: modelName || 'Consulta Geral',
    source: source,
  });
};

// Tracking de scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

// Tracking de submissão de formulário
export const trackLeadFormSubmit = (source: LeadSource, data: {
  name: string;
  phone: string;
  location: string;
}) => {
  trackEvent({
    action: 'lead_form_submit',
    category: 'conversion',
    label: source,
    value: 10,
  });

  trackMetaEvent('Lead', {
    content_name: 'Formulário de Captura',
    source: source,
    content_category: 'lead_form',
  });

  console.log('📊 Lead Form Submitted:', { source, ...data });
};

// Tracking de visualização de página
export const trackPageView = (path: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: path,
      page_title: title,
    });
  }
};

// Tracking de tempo na página
export const trackTimeOnPage = (seconds: number) => {
  if (seconds > 30) { // Só rastreia se ficou mais de 30s
    trackEvent({
      action: 'time_on_page',
      category: 'engagement',
      label: `${Math.floor(seconds)}s`,
      value: seconds,
    });
  }
};

// Tracking de visualização de vídeo
export const trackVideoView = (videoName: string, percentage: number) => {
  trackEvent({
    action: 'video_view',
    category: 'engagement',
    label: `${videoName}_${percentage}%`,
    value: percentage,
  });
};

// Declaração de tipos para window
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}