export type Locale = "en" | "pt";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      about: "About",
      addin: "Word Add-in",
      studio: "Studio",
      download: "Download",
      privacy: "Privacy",
    },

    privacy: {
      title: "Privacy Policy",
      updatedLabel: "Last updated",
      intro:
        "DiscereNow does not collect, store, or share personal data from users. All processing performed by the DiscereNow Template Builder and DiscereNow Studio happens locally on your machine.",
      sections: [
        {
          title: "1. Data Collection",
          body: "We do not collect personal data, usage data, or analytics information. The tools operate entirely within your local environment.",
        },
        {
          title: "2. File Processing",
          body: "Documents created and processed using DiscereNow remain on your device. No files are uploaded to external servers.",
        },
        {
          title: "3. Third-Party Services",
          body: "DiscereNow does not integrate with third-party tracking or analytics tools. Any external links provided, such as GitHub downloads, are subject to the policies of those platforms.",
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
  },

  pt: {
    nav: {
      about: "Sobre",
      addin: "Add-in do Word",
      studio: "Studio",
      download: "Download",
      privacy: "Privacidade",
    },

    privacy: {
      title: "Política de Privacidade",
      updatedLabel: "Última atualização",
      intro:
        "O DiscereNow não coleta, armazena ou compartilha dados pessoais dos usuários. Todo o processamento realizado pelo DiscereNow Template Builder e pelo DiscereNow Studio acontece localmente no seu computador.",
      sections: [
        {
          title: "1. Coleta de Dados",
          body: "Nós não coletamos dados pessoais, dados de uso ou informações de analytics. As ferramentas funcionam inteiramente no seu ambiente local.",
        },
        {
          title: "2. Processamento de Arquivos",
          body: "Documentos criados e processados com o DiscereNow permanecem no seu dispositivo. Nenhum arquivo é enviado para servidores externos.",
        },
        {
          title: "3. Serviços de Terceiros",
          body: "O DiscereNow não integra ferramentas de rastreamento ou analytics de terceiros. Links externos fornecidos, como downloads no GitHub, estão sujeitos às políticas dessas plataformas.",
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
  },
} as const;

export type Translations = typeof translations.en;
