export type Locale = "en" | "pt";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      about: "About",
      addin: "Word Add-in",
      studio: "Studio",
      download: "Download",
      install: "Install Guide",
      privacy: "Privacy",
    },

    privacy: {
      title: "Privacy Policy",
      updatedLabel: "Last updated",
      intro:
        "DiscereNow separates the privacy behavior of its local tools from this website. The DiscereNow Template Builder for Word and DiscereNow Studio process files locally on your machine and do not collect, store, upload, or share your documents or personal data. This website uses analytics only to understand general site usage.",
      sections: [
        {
          title: "1. Local Tool Data Processing",
          body: "The DiscereNow Word add-in and DiscereNow Studio operate within your local environment. Documents created, structured, imported, or converted with these tools remain on your device and are not uploaded to DiscereNow servers.",
        },
        {
          title: "2. Website Analytics",
          body: "This website uses Google Analytics to understand general site usage, such as page views, traffic sources, and engagement. Analytics data is aggregated and does not directly identify individual visitors.",
        },
        {
          title: "3. Third-Party Services",
          body: "The DiscereNow local tools do not integrate with third-party tracking or analytics tools. This website uses Google Analytics, and external links such as GitHub downloads are subject to the policies of those platforms.",
        },
        {
          title: "4. Security",
          body: "Since all processing is local, the security of your data depends on your own system environment and practices.",
        },
        {
          title: "5. Changes to This Policy",
          body: "This policy may be updated to reflect improvements or changes in the product. Updates will be reflected on this page.",
        },
        {
          title: "6. Contact",
          body: "For any questions regarding this policy, please contact the project maintainer through the official GitHub repository.",
        },
      ],
    },
    hero: {
      badge: "Word-to-SCORM learning content pipeline",
      title:
        "Build structured learning content in Word. Export it as SCORM-ready digital courses.",
      description:
        "DiscereNow connects Microsoft Word, instructional design workflows, and course export into a practical authoring pipeline for e-learning teams.",
      primaryCta: "Download now",
      secondaryCta: "View privacy policy",
      previewCards: [
        {
          label: "Word Add-in",
          title: "Structure learning content",
        },
        {
          label: "DiscereNow Studio",
          title: "Convert content into SCORM/Web",
        },
        {
          label: "Output",
          title: "Ready-to-publish digital learning",
        },
      ],
    },
    about: {
      eyebrow: "About DiscereNow",
      title: "A practical pipeline for building learning experiences",
      description:
        "DiscereNow is designed to simplify how instructional designers structure, organize, and publish learning content — using tools they already know.",
      cards: [
        {
          title: "Familiar authoring environment",
          description:
            "Create and structure content directly in Microsoft Word using a guided and standardized approach.",
        },
        {
          title: "Structured learning blocks",
          description:
            "Organize content into reusable components like text, media, accordions, tabs, and quizzes.",
        },
        {
          title: "Seamless export pipeline",
          description:
            "Transform structured content into SCORM or web-ready learning experiences with minimal friction.",
        },
      ],
    },
    addin: {
      eyebrow: "Microsoft Word Add-in",
      title: "Structure learning content without leaving Word",
      description:
        "DiscereNow Template Builder helps instructional designers organize course content into standardized learning blocks directly inside Microsoft Word.",
      bullets: [
        "Create a consistent structure for e-learning content production.",
        "Use predefined blocks for text, media, tabs, accordions, quizzes, cards, and more.",
        "Prepare content for processing in DiscereNow Studio.",
      ],
      cards: [
        {
          title: "Guided content structure",
          description:
            "Transform raw learning material into a cleaner and more predictable instructional format.",
        },
        {
          title: "Reusable learning blocks",
          description:
            "Build content using recognizable block types that can later be converted into digital course components.",
        },
        {
          title: "Designed for production workflows",
          description:
            "Support scalable course creation by reducing formatting inconsistencies before the export stage.",
        },
      ],
    },
    studio: {
      eyebrow: "DiscereNow Studio",
      title: "Convert structured Word content into publishable courses",
      description:
        "After creating content with the Word Add-in, DiscereNow Studio reads the structured document, lets you review the course, apply visual themes, and export the final package.",
      preview: {
        eyebrow: "Studio workflow",
        title: "From document to course",
        status: "Beta",
        steps: [
          "Import structured .docx content",
          "Review the generated course structure",
          "Apply course and block themes",
          "Export as SCORM or Web",
        ],
      },
      cards: [
        {
          title: "Course structure review",
          description:
            "Inspect chapters, lessons, and learning blocks before generating the final output.",
        },
        {
          title: "Visual theme customization",
          description:
            "Apply course-level and block-level themes individually or across the whole project.",
        },
        {
          title: "SCORM and Web export",
          description:
            "Generate a SCORM package for LMS delivery or a web export for external hosting and preview.",
        },
      ],
    },
    download: {
      eyebrow: "Beta access",
      title: "Start building transformative courses with DiscereNow.",
      description:
        "Install the DiscereNow Word add-in to structure your learning content with precision. Then, utilize DiscereNow Studio Beta to effortlessly generate and export your dynamic course as SCORM or a web-ready package.",
      addinCard: {
        title: "DiscereNow Template Builder (Word Add-in)",
        description:
          "Download the installer and integrate the add-in into Microsoft Word to begin structuring your learning content with intelligent templates.",
        cta: "Download Add-in installer",
      },
      studioCard: {
        title: "DiscereNow Studio (Beta)",
        description:
          "Import your structured Word documents, apply stunning themes, and export your complete course as SCORM or a standalone web experience.",
        cta: "Download Studio Beta",
      },
      releasesText:
        "Need detailed setup instructions or wish to explore all available versions? Visit our comprehensive releases page.",
      releasesCta: "View Releases & Instructions",
    },
    install: {
      eyebrow: "Installation guide",
      title: "How to install the DiscereNow Template Builder for Word",
      description:
        "Install the DiscereNow Template Builder for Word. After installation, open Microsoft Word and follow the steps below to add the add-in to your workspace.",
      stepLabel: "Step",
      previous: "Previous installation step",
      next: "Next installation step",
      goToStep: "Go to installation step",
      steps: [
        {
          title: 'Open "Add-ins"',
          description: 'In the Home tab, click "Add-ins".',
          image: "/images/install/step-1.png",
          imageAlt:
            "Microsoft Word Home tab with the Add-ins button highlighted.",
        },
        {
          title: 'Select "+ More Add-ins"',
          description: 'Open the add-ins menu and select "+ More Add-ins".',
          image: "/images/install/step-2.png",
          imageAlt:
            "Microsoft Word add-ins menu with More Add-ins highlighted.",
        },
        {
          title: 'Open "Shared folder"',
          description: 'In the add-ins window, click "SHARED FOLDER".',
          image: "/images/install/step-3.png",
          imageAlt: "Office Add-ins window showing the Shared folder option.",
        },
        {
          title: "Add DiscereNow",
          description:
            'Select "DiscereNow Template Builder for Word" and click "Add".',
          image: "/images/install/step-4.png",
          imageAlt:
            "Shared folder list with DiscereNow Template Builder for Word selected.",
        },
        {
          title: "Start using the add-in",
          description:
            'Click the "DiscereNow" button to open the panel and start using the tool.',
          image: "/images/install/step-5.png",
          imageAlt:
            "Microsoft Word ribbon with the DiscereNow button available.",
        },
      ],
    },
  },

  pt: {
    nav: {
      about: "Sobre",
      addin: "Add-in do Word",
      studio: "Studio",
      download: "Download",
      install: "Guia de instalação",
      privacy: "Privacidade",
    },

    privacy: {
      title: "Política de Privacidade",
      updatedLabel: "Última atualização",
      intro:
        "O DiscereNow diferencia o comportamento de privacidade das ferramentas locais deste website. O DiscereNow Template Builder para Word e o DiscereNow Studio processam arquivos localmente no seu computador e não coletam, armazenam, enviam ou compartilham seus documentos ou dados pessoais. Este website usa analytics apenas para entender o uso geral do site.",
      sections: [
        {
          title: "1. Processamento de Dados nas Ferramentas Locais",
          body: "O add-in do Word do DiscereNow e o DiscereNow Studio funcionam no seu ambiente local. Documentos criados, estruturados, importados ou convertidos com essas ferramentas permanecem no seu dispositivo e não são enviados para servidores do DiscereNow.",
        },
        {
          title: "2. Analytics do Website",
          body: "Este website usa Google Analytics para entender o uso geral do site, como visualizações de páginas, origem do tráfego e engajamento. Os dados de analytics são agregados e não identificam diretamente visitantes individuais.",
        },
        {
          title: "3. Serviços de Terceiros",
          body: "As ferramentas locais do DiscereNow não integram ferramentas de rastreamento ou analytics de terceiros. Este website usa Google Analytics, e links externos, como downloads no GitHub, estão sujeitos às políticas dessas plataformas.",
        },
        {
          title: "4. Segurança",
          body: "Como todo o processamento é local, a segurança dos seus dados depende do seu próprio ambiente e das suas práticas de segurança.",
        },
        {
          title: "5. Alterações nesta Política",
          body: "Esta política pode ser atualizada para refletir melhorias ou mudanças no produto. As atualizações serão refletidas nesta página.",
        },
        {
          title: "6. Contato",
          body: "Para dúvidas sobre esta política, entre em contato com o mantenedor do projeto pelo repositório oficial no GitHub.",
        },
      ],
    },
    hero: {
      badge: "Pipeline de conteúdo educacional de Word para SCORM",
      title:
        "Crie conteúdos estruturados no Word. Exporte como cursos digitais prontos para SCORM.",
      description:
        "O DiscereNow conecta Microsoft Word, fluxos de design instrucional e exportação de cursos em um pipeline prático de autoria para equipes de e-learning.",
      primaryCta: "Baixar agora",
      secondaryCta: "Ver política de privacidade",
      previewCards: [
        {
          label: "Add-in do Word",
          title: "Estruture conteúdos educacionais",
        },
        {
          label: "DiscereNow Studio",
          title: "Converta conteúdo em SCORM/Web",
        },
        {
          label: "Saída",
          title: "Aprendizagem digital pronta para publicação",
        },
      ],
    },
    about: {
      eyebrow: "Sobre o DiscereNow",
      title: "Um pipeline prático para criar experiências de aprendizagem",
      description:
        "O DiscereNow foi projetado para simplificar como designers instrucionais estruturam, organizam e publicam conteúdos educacionais — usando ferramentas que já conhecem.",
      cards: [
        {
          title: "Ambiente de autoria familiar",
          description:
            "Crie e estruture conteúdo diretamente no Microsoft Word usando uma abordagem guiada e padronizada.",
        },
        {
          title: "Blocos de aprendizagem estruturados",
          description:
            "Organize o conteúdo em componentes reutilizáveis como texto, mídia, accordions, abas e quizzes.",
        },
        {
          title: "Pipeline de exportação fluido",
          description:
            "Transforme conteúdo estruturado em experiências SCORM ou web com o mínimo de esforço.",
        },
      ],
    },
    addin: {
      eyebrow: "Add-in para Microsoft Word",
      title: "Estruture conteúdos educacionais sem sair do Word",
      description:
        "O DiscereNow Template Builder ajuda designers instrucionais a organizar conteúdos de curso em blocos padronizados diretamente no Microsoft Word.",
      bullets: [
        "Crie uma estrutura consistente para produção de conteúdos de e-learning.",
        "Use blocos predefinidos para texto, mídia, abas, accordions, quizzes, cards e mais.",
        "Prepare o conteúdo para processamento no DiscereNow Studio.",
      ],
      cards: [
        {
          title: "Estrutura guiada de conteúdo",
          description:
            "Transforme materiais educacionais brutos em um formato instrucional mais limpo e previsível.",
        },
        {
          title: "Blocos de aprendizagem reutilizáveis",
          description:
            "Monte conteúdos usando tipos de blocos reconhecíveis que depois podem ser convertidos em componentes digitais de curso.",
        },
        {
          title: "Projetado para fluxos de produção",
          description:
            "Apoie a criação escalável de cursos reduzindo inconsistências de formatação antes da etapa de exportação.",
        },
      ],
    },
    studio: {
      eyebrow: "DiscereNow Studio",
      title: "Converta conteúdos estruturados no Word em cursos publicáveis",
      description:
        "Depois de criar o conteúdo com o Add-in do Word, o DiscereNow Studio lê o documento estruturado, permite revisar o curso, aplicar temas visuais e exportar o pacote final.",
      preview: {
        eyebrow: "Fluxo do Studio",
        title: "Do documento ao curso",
        status: "Beta",
        steps: [
          "Importar conteúdo .docx estruturado",
          "Revisar a estrutura gerada do curso",
          "Aplicar temas do curso e dos blocos",
          "Exportar como SCORM ou Web",
        ],
      },
      cards: [
        {
          title: "Revisão da estrutura do curso",
          description:
            "Inspecione capítulos, lições e blocos de aprendizagem antes de gerar a saída final.",
        },
        {
          title: "Personalização visual por temas",
          description:
            "Aplique temas em nível de curso e bloco, individualmente ou em todo o projeto.",
        },
        {
          title: "Exportação SCORM e Web",
          description:
            "Gere um pacote SCORM para LMS ou uma exportação Web para hospedagem externa e pré-visualização.",
        },
      ],
    },
    download: {
      eyebrow: "Acesso beta",
      title: "Comece a criar cursos transformadores com o DiscereNow.",
      description:
        "Instale o add-in do Word do DiscereNow para estruturar seu conteúdo educacional com precisão. Depois, use o DiscereNow Studio Beta para gerar e exportar seu curso dinâmico como SCORM ou pacote pronto para web.",
      addinCard: {
        title: "DiscereNow Template Builder (Add-in do Word)",
        description:
          "Baixe o instalador e integre o add-in ao Microsoft Word para começar a estruturar seu conteúdo educacional com templates inteligentes.",
        cta: "Baixar o instalador do Add-in",
      },
      studioCard: {
        title: "DiscereNow Studio (Beta)",
        description:
          "Importe documentos Word estruturados, aplique temas visuais e exporte seu curso completo como SCORM ou experiência web independente.",
        cta: "Baixar Studio Beta",
      },
      releasesText:
        "Precisa de instruções detalhadas de instalação ou quer explorar todas as versões disponíveis? Visite a página completa de releases.",
      releasesCta: "Ver releases e instruções",
    },
    install: {
      eyebrow: "Guia de instalação",
      title: "Como instalar o DiscereNow Template Builder for Word",
      description:
        "Instale o DiscereNow Template Builder for Word. Depois da instalação, abra o Microsoft Word e siga os passos abaixo para adicionar o suplemento ao seu ambiente de trabalho.",
      stepLabel: "Passo",
      previous: "Passo anterior da instalação",
      next: "Próximo passo da instalação",
      goToStep: "Ir para o passo de instalação",
      steps: [
        {
          title: 'Abra "Suplementos"',
          description: 'Na guia Página Inicial, clique em "Suplementos".',
          image: "/images/install/step-1.png",
          imageAlt:
            "Guia Página Inicial do Microsoft Word com o botão Suplementos destacado.",
        },
        {
          title: 'Selecione "Obter Suplementos"',
          description:
            'Clique em "Obter Suplementos" para abrir a loja de suplementos do Office.',
          image: "/images/install/step-2.png",
          imageAlt:
            "Menu de suplementos do Word com a opção Obter Suplementos destacada.",
        },
        {
          title: 'Acesse "Pastas Compartilhadas"',
          description:
            'Na janela de suplementos, clique na aba "Pastas Compartilhadas".',
          image: "/images/install/step-3.png",
          imageAlt:
            "Janela de suplementos do Office exibindo a aba Pastas Compartilhadas.",
        },
        {
          title: "Adicione o DiscereNow",
          description:
            'Selecione "DiscereNow Template Builder for Word" e clique em "Adicionar".',
          image: "/images/install/step-4.png",
          imageAlt:
            "Lista de suplementos nas Pastas Compartilhadas com o DiscereNow selecionado.",
        },
        {
          title: "Abra o DiscereNow",
          description:
            'Clique no botão "DiscereNow" na faixa de opções para abrir o painel e começar a usar.',
          image: "/images/install/step-5.png",
          imageAlt:
            "Faixa de opções do Microsoft Word com o botão DiscereNow disponível.",
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.en;
