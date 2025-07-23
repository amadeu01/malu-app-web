import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    'nav.privacy': 'Privacidade',
    'nav.backHome': 'Voltar ao Início',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.tagline': 'Capture, preserve e redescubra os momentos lindos que tornam a vida especial. Seu santuário pessoal para memórias que importam.',
    'hero.downloadButton': 'Baixar na App Store',
    'hero.availability': 'Disponível agora no iOS • Em breve no Android',
    
    // Features
    'features.title': 'Por que você vai amar o malu',
    'features.subtitle': 'Simples, lindo e projetado pensando na sua privacidade',
    'features.capture.title': 'Capture Momentos',
    'features.capture.description': 'Salve facilmente seus momentos lindos com fotos, pensamentos e memórias',
    'features.search.title': 'Encontre & Redescubra',
    'features.search.description': 'Busca poderosa para te ajudar a encontrar e reviver suas memórias favoritas',
    'features.private.title': 'Seu Espaço Privado',
    'features.private.description': 'Mantenha seus momentos seguros e privados, sem anúncios ou rastreamento de dados',
    
    // App Preview
    'preview.title': 'Design lindo, experiência cuidadosa',
    'preview.subtitle': 'Cada detalhe pensado para te ajudar a focar no que mais importa',
    'preview.quote': '"Hoje parecia um filme..."',
    'preview.description1': 'Escreva sobre encontros casuais na academia, brincadeiras de infância sob as estrelas, ou qualquer momento que te fez sorrir.',
    'preview.description2': 'Pesquise no seu histórico e redescubra a alegria em momentos simples.',
    
    // CTA
    'cta.title': 'Comece a colecionar seus momentos lindos',
    'cta.subtitle': 'Baixe o malu hoje e comece sua jornada de guardar memórias com atenção',
    'cta.button': 'Baixar malu na App Store',
    
    // Footer
    'footer.privacyPolicy': 'Política de Privacidade',
    'footer.contact': 'Contato',
    'footer.copyright': '© 2025 malu. Feito com amor para momentos lindos.',
    
    // Privacy Page
    'privacy.title': 'Política de Privacidade',
    'privacy.lastUpdated': 'Última atualização: Julho de 2025',
    'privacy.mainTitle': 'Sua Privacidade É Importante',
    'privacy.collect.title': 'Informações que Coletamos',
    'privacy.collect.intro': 'O malu foi projetado para ser seu espaço pessoal e privado para momentos lindos. Coletamos informações mínimas para te oferecer a melhor experiência:',
    'privacy.collect.item1': 'Os momentos, fotos e memórias que você escolhe salvar no app',
    'privacy.collect.item2': 'Informações básicas da conta (email) se você escolher criar uma conta para sincronização',
    'privacy.collect.item3': 'Análises de uso do app para melhorar a performance (anonimizadas)',
    'privacy.protect.title': 'Como Protegemos Seus Dados',
    'privacy.protect.intro': 'Seus momentos são preciosos para você, e são preciosos para nós também:',
    'privacy.protect.item1': 'Todos os seus momentos pessoais são criptografados e armazenados com segurança',
    'privacy.protect.item2': 'Nunca compartilhamos seu conteúdo pessoal com terceiros',
    'privacy.protect.item3': 'Você controla seus dados - exporte ou delete a qualquer momento',
    'privacy.protect.item4': 'Opção de armazenamento local disponível para privacidade completa',
    'privacy.dontDo.title': 'O que Não Fazemos',
    'privacy.dontDo.item1': 'Não vendemos seus dados para anunciantes',
    'privacy.dontDo.item2': 'Não escaneamos seu conteúdo para fins de marketing',
    'privacy.dontDo.item3': 'Não compartilhamos seus momentos com redes sociais',
    'privacy.dontDo.item4': 'Não te rastreamos em outros sites ou apps',
    'privacy.rights.title': 'Seus Direitos',
    'privacy.rights.intro': 'Você tem controle completo sobre seus dados:',
    'privacy.rights.item1': 'Solicitar uma cópia de seus dados a qualquer momento',
    'privacy.rights.item2': 'Deletar sua conta e todos os dados associados',
    'privacy.rights.item3': 'Optar por não participar da coleta de análises',
    'privacy.rights.item4': 'Entrar em contato conosco com qualquer preocupação sobre privacidade',
    'privacy.contact.title': 'Entre em Contato',
    'privacy.contact.text': 'Se você tiver dúvidas sobre esta Política de Privacidade ou como lidamos com seus dados, entre em contato conosco em',
    'privacy.updates': 'Esta política de privacidade pode ser atualizada periodicamente. Notificaremos você sobre mudanças significativas através do app ou por email, se você tiver fornecido um.',
  },
  en: {
    // Navigation
    'nav.privacy': 'Privacy',
    'nav.backHome': 'Back to Home',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.tagline': 'Capture, cherish, and rediscover the beautiful moments that make life special. Your personal sanctuary for memories that matter.',
    'hero.downloadButton': 'Download on App Store',
    'hero.availability': 'Available now on iOS • Coming soon to Android',
    
    // Features
    'features.title': 'Why you\'ll love malu',
    'features.subtitle': 'Simple, beautiful, and designed with your privacy in mind',
    'features.capture.title': 'Capture Moments',
    'features.capture.description': 'Easily save your beautiful moments with photos, thoughts, and memories',
    'features.search.title': 'Find & Rediscover',
    'features.search.description': 'Powerful search to help you find and relive your favorite memories',
    'features.private.title': 'Your Private Space',
    'features.private.description': 'Keep your moments safe and private, with no ads or data tracking',
    
    // App Preview
    'preview.title': 'Beautiful design, thoughtful experience',
    'preview.subtitle': 'Every detail crafted to help you focus on what matters most',
    'preview.quote': '"Today felt like a movie..."',
    'preview.description1': 'Write about serendipitous gym encounters, playing childhood games under the stars, or any moment that made you smile.',
    'preview.description2': 'Search through your history and rediscover the joy in simple moments.',
    
    // CTA
    'cta.title': 'Start collecting your beautiful moments',
    'cta.subtitle': 'Download malu today and begin your journey of mindful memory keeping',
    'cta.button': 'Get malu on App Store',
    
    // Footer
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 malu. Made with love for beautiful moments.',
    
    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: July 2025',
    'privacy.mainTitle': 'Your Privacy Matters',
    'privacy.collect.title': 'Information We Collect',
    'privacy.collect.intro': 'malu is designed to be your personal, private space for beautiful moments. We collect minimal information to provide you with the best experience:',
    'privacy.collect.item1': 'The moments, photos, and memories you choose to save in the app',
    'privacy.collect.item2': 'Basic account information (email) if you choose to create an account for syncing',
    'privacy.collect.item3': 'App usage analytics to improve performance (anonymized)',
    'privacy.protect.title': 'How We Protect Your Data',
    'privacy.protect.intro': 'Your moments are precious to you, and they\'re precious to us too:',
    'privacy.protect.item1': 'All your personal moments are encrypted and stored securely',
    'privacy.protect.item2': 'We never share your personal content with third parties',
    'privacy.protect.item3': 'You control your data - export or delete it anytime',
    'privacy.protect.item4': 'Local storage option available for complete privacy',
    'privacy.dontDo.title': 'What We Don\'t Do',
    'privacy.dontDo.item1': 'We don\'t sell your data to advertisers',
    'privacy.dontDo.item2': 'We don\'t scan your content for marketing purposes',
    'privacy.dontDo.item3': 'We don\'t share your moments with social media platforms',
    'privacy.dontDo.item4': 'We don\'t track you across other websites or apps',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.intro': 'You have complete control over your data:',
    'privacy.rights.item1': 'Request a copy of your data at any time',
    'privacy.rights.item2': 'Delete your account and all associated data',
    'privacy.rights.item3': 'Opt out of analytics collection',
    'privacy.rights.item4': 'Contact us with any privacy concerns',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.text': 'If you have any questions about this Privacy Policy or how we handle your data, please contact us at',
    'privacy.updates': 'This privacy policy may be updated from time to time. We will notify you of any significant changes through the app or via email if you have provided one.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};