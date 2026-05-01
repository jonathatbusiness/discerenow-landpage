import { createContext, useContext, useMemo, useState } from "react";

const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "pt-BR"];

function detectInitialLanguage() {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  const hasBrazilianPortuguese = browserLanguages.some(
    (language) => language?.toLowerCase() === "pt-br"
  );

  return hasBrazilianPortuguese ? "pt-BR" : DEFAULT_LANGUAGE;
}

const translations = {
  en: {
    languageName: "English",
    header: {
      toggleNavigation: "Toggle navigation menu",
      about: "About",
      addin: "Add-in",
      studio: "Studio",
      gallery: "Gallery",
      download: "Download",
      privacy: "Privacy",
    },
    footer: {
      tagline: "Structured learning content. Faster course production.",
      home: "Home",
      privacy: "Privacy Policy",
      contact: "Contact",
    },
    hero: {
      eyebrow: "E-learning Authoring Reimagined for Microsoft Word",
      title:
        "Your knowledge, your course. Effortlessly transform Word into interactive e-learning.",
      description:
        "DiscereNow empowers instructional designers, educators, and experts to structure learning content in Microsoft Word, refine it in DiscereNow Studio, and export it as polished SCORM or web-ready courses.",
      primaryCta: "Get Beta Access",
      secondaryCta: "Discover How It Works",
      flowWord: "Author Content in Microsoft Word",
      flowStudio: "Refine & Design in DiscereNow Studio",
      flowExport: "Launch as SCORM or Web Experience",
    },
    about: {
      kicker: "About DiscereNow",
      title: "A smarter, streamlined workflow for modern learning teams.",
      description:
        "DiscereNow was meticulously designed for instructional designers, learning experience designers, and corporate training teams who demand speed and structure. It transforms Microsoft Word into the foundational step of an intelligent, automated course production pipeline, empowering you to focus on content, not complexity.",
      cards: [
        {
          title: "Structured by Design",
          description:
            "Craft content with clear hierarchy, predictable formatting, and reusable learning patterns, ensuring consistency and quality from the start.",
        },
        {
          title: "Built for Repeatability",
          description:
            "Minimize manual reconstruction and ensure consistent interpretation by preparing documents that seamlessly translate into diverse learning experiences.",
        },
        {
          title: "Ready for Automation",
          description:
            "Integrate content writing, course generation, translation, and SCORM export into one powerful, automated pipeline, accelerating your entire production cycle.",
        },
      ],
    },
    addin: {
      kicker: "Microsoft Word Add-in",
      title: "Author in Word. Preserve structure for intelligent processing.",
      description:
        "The DiscereNow Template Builder empowers authors to format learning documents according to predefined, intelligent rules. The result is a Word file that remains perfectly human-readable, yet is simultaneously optimized for automated processing by DiscereNow Studio.",
      cards: [
        {
          title: "Intuitive Authoring Templates",
          description:
            "Apply consistent styles for titles, lessons, sections, activities, and diverse learning content blocks with ease, ensuring uniformity across your courses.",
        },
        {
          title: "Seamless Handoffs",
          description:
            "Produce documents that drastically reduce ambiguity and enhance clarity between content writers, reviewers, and developers, streamlining collaboration.",
        },
        {
          title: "Word-Native Workflow",
          description:
            "Leverage your familiar Microsoft Word environment to build robust content that effortlessly evolves into engaging, interactive e-learning courses.",
        },
      ],
    },
    studio: {
      kicker: "DiscereNow Studio",
      title: "From structured documents to publishable learning experiences.",
      description:
        "DiscereNow Studio is your production powerhouse. It intelligently reads structured content created with the Word add-in and transforms it into dynamic, responsive course experiences. This is the layer where your content truly comes alive, ready to be packaged as a web-based or SCORM-compliant learning module.",
      cards: [
        {
          title: "Effortless Course Assembly",
          description:
            "Intuitively organize chapters, lessons, text blocks, images, and interactive learning sections into a cohesive and engaging course structure.",
        },
        {
          title: "Translation-Ready Workflows",
          description:
            "Seamlessly support multilingual content strategies by structuring your learning material for easy translation and global deployment before export.",
        },
        {
          title: "SCORM & Web Export",
          description:
            "Generate industry-standard SCORM packages for seamless LMS delivery or create standalone, responsive web-based learning experiences for broader reach.",
        },
      ],
    },
    gallery: {
      kicker: "Product Gallery",
      title: "See structured content become a polished learning experience.",
      description:
        "Explore how DiscereNow transforms authored content into clean, branded and ready-to-distribute digital courses.",
      images: [
        "Clean content presentation",
        "Structured course layout",
        "Interactive learning flow",
        "SCORM-ready experience",
        "SCORM-ready experience",
        "SCORM-ready experience",
      ],
    },
    download: {
      kicker: "Beta Access",
      title: "Start building transformative courses with DiscereNow.",
      description:
        "Install the DiscereNow Word add-in to structure your learning content with precision. Then, utilize DiscereNow Studio Beta to effortlessly generate and export your dynamic course as SCORM or a web-ready package.",
      addinTitle: "DiscereNow Template Builder (Word Add-in)",
      addinDescription:
        "Download the manifest XML and integrate the add-in into Microsoft Word to begin structuring your learning content with intelligent templates.",
      addinCta: "Download Add-in XML",
      studioTitle: "DiscereNow Studio (Beta)",
      studioDescription:
        "Import your structured Word documents, apply stunning themes, and export your complete course as SCORM or a standalone web experience.",
      studioCta: "Download Studio Beta",
      releasesDescription:
        "Need detailed setup instructions or wish to explore all available versions? Visit our comprehensive releases page.",
      releasesCta: "View Releases & Instructions",
    },
    privacy: {
      kicker: "Privacy Policy",
      title: "Privacy Policy for DiscereNow",
      updated: "Last updated: April 2026",
      intro:
        "DiscereNow is designed to help users structure learning content in Microsoft Word and transform that content into web-based or SCORM-ready learning experiences using DiscereNow Studio.",
      sections: [
        {
          title: "DiscereNow Template Builder Add-in",
          body: "DiscereNow Template Builder does not collect, store, sell, or transmit personal data. The add-in operates inside Microsoft Word and is used to apply structured formatting to course documents according to predefined authoring rules.",
        },
        {
          title: "Document content",
          body: "The add-in does not send document content to external servers. Any document created or edited by the user remains under the user's control within their Microsoft Word environment.",
        },
        {
          title: "DiscereNow Studio Beta",
          body: "DiscereNow Studio may process files selected by the user in order to generate course outputs such as web packages or SCORM packages. During the beta stage, processing is intended to happen as part of the user's local or explicitly initiated workflow.",
        },
        {
          title: "Analytics and tracking",
          body: "DiscereNow Template Builder does not include analytics, advertising trackers, or third-party tracking integrations.",
        },
        {
          title: "Third-party services",
          body: "The Microsoft Word add-in runs within the Microsoft Office environment. Use of Microsoft products and services may be subject to Microsoft's own terms and privacy policies.",
        },
        {
          title: "Data sharing",
          body: "We do not sell, rent, or share user personal information with advertisers or data brokers.",
        },
      ],
      contactTitle: "Contact",
      contactText:
        "For privacy questions, support requests, or product inquiries, contact us at:",
    },
  },
  "pt-BR": {
    languageName: "Português",
    header: {
      toggleNavigation: "Alternar menu de navegação",
      about: "Sobre",
      addin: "Add-in",
      studio: "Studio",
      gallery: "Galeria",
      download: "Download",
      privacy: "Privacidade",
    },
    footer: {
      tagline: "Conteúdo de aprendizagem estruturado. Produção de cursos mais rápida.",
      home: "Início",
      privacy: "Política de Privacidade",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Autoria de E-learning repensada para o Microsoft Word",
      title:
        "Seu conhecimento, seu curso. Transforme Word em e-learning interativo com facilidade.",
      description:
        "O DiscereNow ajuda designers instrucionais, educadores e especialistas a estruturar conteúdos de aprendizagem no Microsoft Word, refiná-los no DiscereNow Studio e exportá-los como cursos SCORM ou pacotes prontos para web.",
      primaryCta: "Acessar Beta",
      secondaryCta: "Ver como funciona",
      flowWord: "Crie conteúdo no Microsoft Word",
      flowStudio: "Refine e personalize no DiscereNow Studio",
      flowExport: "Publique como SCORM ou experiência web",
    },
    about: {
      kicker: "Sobre o DiscereNow",
      title: "Um fluxo mais inteligente e direto para equipes modernas de aprendizagem.",
      description:
        "O DiscereNow foi desenhado para designers instrucionais, learning experience designers e equipes de treinamento corporativo que precisam de velocidade e estrutura. Ele transforma o Microsoft Word na etapa inicial de um pipeline inteligente e automatizado de produção de cursos, permitindo que você foque no conteúdo, não na complexidade.",
      cards: [
        {
          title: "Estruturado desde a origem",
          description:
            "Crie conteúdo com hierarquia clara, formatação previsível e padrões de aprendizagem reutilizáveis, garantindo consistência e qualidade desde o início.",
        },
        {
          title: "Criado para repetibilidade",
          description:
            "Reduza reconstruções manuais e garanta interpretação consistente ao preparar documentos que podem ser transformados em diferentes experiências de aprendizagem.",
        },
        {
          title: "Pronto para automação",
          description:
            "Integre escrita de conteúdo, geração de cursos, tradução e exportação SCORM em um pipeline automatizado, acelerando todo o ciclo de produção.",
        },
      ],
    },
    addin: {
      kicker: "Add-in para Microsoft Word",
      title: "Crie no Word. Preserve a estrutura para processamento inteligente.",
      description:
        "O DiscereNow Template Builder permite que autores formatem documentos de aprendizagem seguindo regras inteligentes e predefinidas. O resultado é um arquivo Word legível para pessoas e, ao mesmo tempo, otimizado para processamento automatizado pelo DiscereNow Studio.",
      cards: [
        {
          title: "Templates de autoria intuitivos",
          description:
            "Aplique estilos consistentes para títulos, lições, seções, atividades e diversos blocos de conteúdo com facilidade, mantendo uniformidade entre seus cursos.",
        },
        {
          title: "Handoff mais claro",
          description:
            "Produza documentos que reduzem ambiguidades e melhoram a clareza entre redatores, revisores e desenvolvedores, tornando a colaboração mais fluida.",
        },
        {
          title: "Fluxo nativo no Word",
          description:
            "Use o ambiente familiar do Microsoft Word para criar conteúdos robustos que evoluem com facilidade para cursos de e-learning interativos.",
        },
      ],
    },
    studio: {
      kicker: "DiscereNow Studio",
      title: "De documentos estruturados a experiências de aprendizagem publicáveis.",
      description:
        "O DiscereNow Studio é a camada de produção do fluxo. Ele lê conteúdos estruturados com o add-in do Word e os transforma em experiências responsivas e dinâmicas. É nessa etapa que o conteúdo ganha forma para ser empacotado como módulo web ou SCORM.",
      cards: [
        {
          title: "Montagem de curso simplificada",
          description:
            "Organize capítulos, lições, blocos de texto, imagens e seções interativas em uma estrutura de curso coesa e envolvente.",
        },
        {
          title: "Fluxos preparados para tradução",
          description:
            "Apoie estratégias de conteúdo multilíngue ao estruturar o material para facilitar tradução, adaptação e distribuição global antes da exportação.",
        },
        {
          title: "Exportação SCORM e Web",
          description:
            "Gere pacotes SCORM para entrega em LMS ou crie experiências web responsivas e independentes para distribuição mais ampla.",
        },
      ],
    },
    gallery: {
      kicker: "Galeria do produto",
      title: "Veja conteúdo estruturado se tornar uma experiência de aprendizagem polida.",
      description:
        "Explore como o DiscereNow transforma conteúdo autorado em cursos digitais limpos, com identidade visual e prontos para distribuição.",
      images: [
        "Apresentação limpa de conteúdo",
        "Layout de curso estruturado",
        "Fluxo de aprendizagem interativo",
        "Experiência pronta para SCORM",
        "Experiência pronta para SCORM",
        "Experiência pronta para SCORM",
      ],
    },
    download: {
      kicker: "Acesso Beta",
      title: "Comece a criar cursos transformadores com o DiscereNow.",
      description:
        "Instale o add-in do DiscereNow para Word e estruture seu conteúdo de aprendizagem com precisão. Depois, use o DiscereNow Studio Beta para gerar e exportar seu curso como SCORM ou pacote pronto para web.",
      addinTitle: "DiscereNow Template Builder (Add-in para Word)",
      addinDescription:
        "Baixe o XML de manifesto e integre o add-in ao Microsoft Word para começar a estruturar seu conteúdo com templates inteligentes.",
      addinCta: "Baixar XML do Add-in",
      studioTitle: "DiscereNow Studio (Beta)",
      studioDescription:
        "Importe seus documentos Word estruturados, aplique temas visuais e exporte o curso completo como SCORM ou experiência web independente.",
      studioCta: "Baixar Studio Beta",
      releasesDescription:
        "Precisa de instruções detalhadas de instalação ou quer explorar todas as versões disponíveis? Acesse a página de releases.",
      releasesCta: "Ver Releases e Instruções",
    },
    privacy: {
      kicker: "Política de Privacidade",
      title: "Política de Privacidade do DiscereNow",
      updated: "Última atualização: abril de 2026",
      intro:
        "O DiscereNow foi criado para ajudar usuários a estruturar conteúdo de aprendizagem no Microsoft Word e transformar esse conteúdo em experiências web ou pacotes SCORM usando o DiscereNow Studio.",
      sections: [
        {
          title: "DiscereNow Template Builder Add-in",
          body: "O DiscereNow Template Builder não coleta, armazena, vende nem transmite dados pessoais. O add-in funciona dentro do Microsoft Word e é usado para aplicar formatação estruturada a documentos de curso conforme regras de autoria predefinidas.",
        },
        {
          title: "Conteúdo dos documentos",
          body: "O add-in não envia o conteúdo dos documentos para servidores externos. Qualquer documento criado ou editado pelo usuário permanece sob controle do usuário dentro do ambiente do Microsoft Word.",
        },
        {
          title: "DiscereNow Studio Beta",
          body: "O DiscereNow Studio pode processar arquivos selecionados pelo usuário para gerar saídas de curso, como pacotes web ou pacotes SCORM. Durante a fase beta, o processamento deve acontecer como parte do fluxo local ou explicitamente iniciado pelo usuário.",
        },
        {
          title: "Analytics e rastreamento",
          body: "O DiscereNow Template Builder não inclui analytics, rastreadores de publicidade ou integrações de rastreamento de terceiros.",
        },
        {
          title: "Serviços de terceiros",
          body: "O add-in para Microsoft Word funciona dentro do ambiente Microsoft Office. O uso de produtos e serviços da Microsoft pode estar sujeito aos próprios termos e políticas de privacidade da Microsoft.",
        },
        {
          title: "Compartilhamento de dados",
          body: "Não vendemos, alugamos nem compartilhamos informações pessoais de usuários com anunciantes ou corretores de dados.",
        },
      ],
      contactTitle: "Contato",
      contactText:
        "Para dúvidas sobre privacidade, solicitações de suporte ou assuntos relacionados ao produto, entre em contato pelo e-mail:",
    },
  },
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(detectInitialLanguage);

  const value = useMemo(() => {
    const activeLanguage = SUPPORTED_LANGUAGES.includes(language)
      ? language
      : DEFAULT_LANGUAGE;

    return {
      language: activeLanguage,
      setLanguage,
      t: translations[activeLanguage],
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
