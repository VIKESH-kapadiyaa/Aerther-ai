import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: { home: 'Aether AI', book: 'Book Call' },
        hero: {
            title_prefix: 'THE',
            title_future: 'FUTURE',
            desc_part1: 'Constructing autonomous digital architectures for the',
            desc_part2: 'post-labor economy',
            cta_init: 'INITIALIZE SYSTEM',
            cta_view: 'VIEW ARCHITECTURE',
            status: 'System Online & Available'
        },
        work: {
            title: 'WORK',
            subtitle: 'Cutting-edge AI agents powering the future of automation',
            search_placeholder: 'Search agents...',
            no_results: 'No agents found matching your query.',
            portfolio_badge: 'AI Agent Portfolio',
            active_agents: 'Active Agents',
            comparison: {
                title_agent: 'AGENT',
                title_comparison: 'COMPARISON',
                personality: 'Personality',
                tags: 'Tags',
                integration: 'Integration',
                deploy: 'Deploy Agent',
                select_more: 'Select another agent to compare'
            }
        },
        pricing: {
            header_access: 'ACCESS',
            header_granted: 'GRANTED',
            subtitle: 'Transparent, usage-based scaling for any workload level.',
            root_access: '/ root_access_authorized',
            system_unlocked: 'System Unlocked',
            select_protocol: 'Select Protocol Level',
            solo: {
                title: 'Solo Founder',
                price: '₹30,000',
                upto: 'upto',
                monthly: '+ ₹15,000 / monthly',
                vibe: 'The vibe: For the solo operator needing extra hands.',
                btn: 'Deploy Solo'
            },
            company: {
                title: 'Company Systems',
                price: '₹50,000',
                upto: 'upto',
                monthly: '+ ₹40,000 / monthly',
                vibe: 'The vibe: For businesses replacing entire departments with AI.',
                recommended: 'Recommended Protocol',
                btn: 'Initialize Business'
            },
            enterprise: {
                title: 'Enterprise',
                price: 'FLEXIBLE',
                subtitle: 'Custom Pricing',
                vibe: 'The vibe: For industry leaders needing sovereign AI infrastructure.',
                btn: 'Contact Sales'
            },
            features: {
                compute: 'Compute',
                interface: 'Interface',
                memory: 'Memory',
                support: 'Support',
                license: 'License',
                architecture: 'Architecture'
            },
            disclaimer: '* Pricing is indicative. Complexity varies.'
        },
        services: {
            title_core: 'CORE',
            title_modules: 'MODULES.',
            module_details: 'Module Details',
            init_module: 'Initialize Module',
            system_id: 'SYSTEM ID',
            items: [
                {
                    title: "Personal AI Agent",
                    desc: "Your digital twin. Handles day-to-day scheduling, emails, and routine tasks autonomously.",
                    details: "A fully autonomous digital twin designed to mirror your decision-making patterns. It integrates directly with your calendar, email (Gmail/Outlook), and CRM. It can negotiate meeting times, draft responses to routine inquiries, and prioritize your daily task list based on your strategic goals. Built on a memory-augmented LLM architecture, it learns your preferences over time to become indistinguishable from you in digital communication."
                },
                {
                    title: "Multi-Modal Brains",
                    desc: "Chat + Voice Synthesis. Agents that speak, listen, and understand context deeply.",
                    details: "Next-generation agents capable of fluid interaction across text and voice. These systems utilize advanced whisper models for speech-to-text and neural voice synthesis to hold natural, low-latency conversations. Deeply context-aware, they can handle complex customer support calls, conduct sales qualification interviews, or act as an always-on executive receptionist."
                },
                {
                    title: "Custom Training",
                    desc: "Fine-tuning models on your proprietary data for 100% relevant outputs.",
                    details: "Proprietary model fine-tuning (LoRA/QLoRA) on your specific enterprise knowledge base. We take open-weight models and retrain them on your internal documents, slack history, and codebases. This ensures the AI understands your specific industry jargon, company policies, and historical context, delivering results that generic models cannot match."
                },
                {
                    title: "AI Infrastructure",
                    desc: "Scalable backend architecture to support high-volume automated workflows.",
                    details: "Robust, scalable backend architecture designed for high-concurrency automated workflows. We leverage Kubernetes clusters and serverless edge functions to ensure your AI agents operate with <100ms latency. Includes vector database integration for long-term memory recall and RAG pipelines to ground AI responses in truth."
                },
                {
                    title: "Live Developer Access",
                    desc: "Direct line to our engineers (12 PM - 9 PM) for real-time optimization.",
                    details: "This isn't just software; it's a partnership. You get a dedicated Slack channel with our engineering team. From 12 PM to 9 PM, our architects are available for real-time debugging, prompt optimization, and feature implementation. We act as an extension of your team, ensuring your automated systems evolve as fast as your business does."
                },
                {
                    title: "Custom Architectures",
                    desc: "Need something unique? We build bespoke neural networks tailored to your specific use case.",
                    details: "For unique use cases that defy standard categories. Whether it's computer vision for manufacturing quality control, predictive analytics for supply chain logistics, or autonomous agents for financial trading, we build bespoke neural networks from the ground up. We handle the entire lifecycle: data collection, model architecture design, training, and deployment.",
                    action: "Contact Us"
                }
            ]
        },
        footer: {
            title: 'Aether AI',
            subtitle: 'Automation Systems',
            desc_part1: 'We build the autonomous nervous systems for the next generation of enterprise.',
            desc_part2: 'Replace manual chaos with intelligent order.',
            inquiries: 'Business Inquiries',
            support: 'Support Desk',
            system_index: 'System Index',
            network: 'Network',
            status: 'SYSTEM STATUS',
            operational: 'OPERATIONAL',
            rights: '© 2026 AETHER AI AUTOMATION AGENCY',
            nav: {
                services: 'Services',
                architecture: 'Architecture',
                pricing: 'Pricing'
            }
        },
        architecture: {
            title_neural: 'NEURAL',
            title_flow: 'FLOW',
            subtitle: 'Autonomous Logic Processing',
            core: 'CORE',
            system_logic: 'SYSTEM.LOGIC',
            nodes: {
                ingestion: 'Ingestion',
                vector_db: 'Vector DB',
                context: 'Context',
                action: 'Action'
            }
        }
    },
    fr: {
        nav: { home: 'Aether IA', book: 'Réserver' },
        hero: {
            title_prefix: 'LE',
            title_future: 'FUTUR',
            desc_part1: 'Construction d\'architectures numériques autonomes pour',
            desc_part2: 'l\'économie post-travail',
            cta_init: 'INITIALISER SYSTÈME',
            cta_view: 'VOIR ARCHITECTURE',
            status: 'Système En Ligne'
        },
        architecture: {
            title_neural: 'FLUX',
            title_flow: 'NEURONAL',
            subtitle: 'Traitement Logique Autonome',
            core: 'CŒUR',
            system_logic: 'SYSTÈME.LOGIQUE',
            nodes: {
                ingestion: 'Ingestion',
                vector_db: 'Base Vectorielle',
                context: 'Contexte',
                action: 'Action'
            }
        },
        work: {
            title: 'PROJETS',
            subtitle: 'Agents IA de pointe propulsant l\'avenir de l\'automatisation',
            search_placeholder: 'Rechercher des agents...',
            no_results: 'Aucun agent trouvé.',
            portfolio_badge: 'Portefeuille Agents IA',
            active_agents: 'Agents Actifs',
            comparison: {
                title_agent: 'AGENT',
                title_comparison: 'COMPARAISON',
                personality: 'Personnalité',
                tags: 'Tags',
                integration: 'Intégration',
                deploy: 'Déployer Agent',
                select_more: 'Sélectionnez un autre agent pour comparer'
            }
        },
        pricing: {
            header_access: 'ACCÈS',
            header_granted: 'ACCORDÉ',
            subtitle: 'Mise à l\'échelle transparente basée sur l\'utilisation.',
            root_access: '/ accès_root_autorisé',
            system_unlocked: 'Système Déverrouillé',
            select_protocol: 'Sélectionner le Protocole',
            solo: {
                title: 'Fondateur Solo',
                price: '30 000 ₹',
                upto: 'jusqu\'à',
                monthly: '+ 15 000 ₹ / mois',
                vibe: 'L\'ambiance : Pour l\'opérateur solo ayant besoin d\'aide supplémentaire.',
                btn: 'Déployer Solo'
            },
            company: {
                title: 'Systèmes Entreprise',
                price: '50 000 ₹',
                upto: 'jusqu\'à',
                monthly: '+ 40 000 ₹ / mois',
                vibe: 'L\'ambiance : Pour remplacer des départements entiers par l\'IA.',
                recommended: 'Protocole Recommandé',
                btn: 'Initialiser Entreprise'
            },
            enterprise: {
                title: 'Grande Entreprise',
                price: 'FLEXIBLE',
                subtitle: 'Prix Personnalisé',
                vibe: 'L\'ambiance : Pour les leaders de l\'industrie nécessitant une infrastructure IA souveraine.',
                btn: 'Contacter Ventes'
            },
            features: {
                compute: 'Calcul',
                interface: 'Interface',
                memory: 'Mémoire',
                support: 'Support',
                license: 'Licence',
                architecture: 'Architecture'
            },
            disclaimer: '* Les prix sont indicatifs. La complexité varie.'
        },
        services: {
            title_core: 'MODULES',
            title_modules: 'CENTRAUX.',
            module_details: 'Détails du Module',
            init_module: 'Initialiser le Module',
            system_id: 'ID SYSTÈME',
            items: [
                {
                    title: "Agent IA Personnel",
                    desc: "Votre jumeau numérique. Gère l'agenda, les emails et les tâches routinières de manière autonome.",
                    details: "Un jumeau numérique entièrement autonome conçu pour refléter vos modèles de prise de décision. Il s'intègre directement à votre calendrier, vos emails et votre CRM."
                },
                {
                    title: "Cerveaux Multi-Modaux",
                    desc: "Chat + Synthèse Vocale. Des agents qui parlent, écoutent et comprennent le contexte.",
                    details: "Agents de nouvelle génération capables d'une interaction fluide par texte et voix."
                },
                {
                    title: "Entraînement Personnalisé",
                    desc: "Affinement de modèles sur vos données propriétaires.",
                    details: "Affinement de modèle propriétaire (LoRA/QLoRA) sur votre base de connaissances interne."
                },
                {
                    title: "Infrastructure IA",
                    desc: "Architecture backend évolutive pour les flux de travail automatisés.",
                    details: "Architecture backend robuste conçue pour des flux de travail automatisés à haute concurrence."
                },
                {
                    title: "Accès Développeur Live",
                    desc: "Ligne directe avec nos ingénieurs (12h - 21h).",
                    details: "Ce n'est pas juste un logiciel, c'est un partenariat. Vous obtenez un canal Slack dédié."
                },
                {
                    title: "Architectures Sur Mesure",
                    desc: "Besoin de quelque chose d'unique ? Nous construisons des réseaux de neurones sur mesure.",
                    details: "Pour des cas d'utilisation uniques. Vision par ordinateur, analyses prédictives, etc.",
                    action: "Contactez-nous"
                }
            ]
        },
        footer: {
            title: 'Aether IA',
            subtitle: 'Systèmes d\'Automatisation',
            desc_part1: 'Nous construisons les systèmes nerveux autonomes pour la prochaine génération d\'entreprises.',
            desc_part2: 'Remplacez le chaos manuel par un ordre intelligent.',
            inquiries: 'Demandes Commerciales',
            support: 'Bureau de Support',
            system_index: 'Index Système',
            network: 'Réseau',
            status: 'ÉTAT SYSTÈME',
            operational: 'OPÉRATIONNEL',
            rights: '© 2026 Agence d\'Automatisation AETHER IA',
            nav: {
                services: 'Services',
                architecture: 'Architecture',
                pricing: 'Tarification'
            }
        }
    },
    es: {
        nav: { home: 'Aether IA', book: 'Agendar' },
        hero: {
            title_prefix: 'EL',
            title_future: 'FUTURO',
            desc_part1: 'Construyendo arquitecturas digitales autónomas para la',
            desc_part2: 'economía post-laboral',
            cta_init: 'INICIAR SISTEMA',
            cta_view: 'VER ARQUITECTURA',
            status: 'Sistema En Línea'
        },
        architecture: {
            title_neural: 'FLUJO',
            title_flow: 'NEURONAL',
            subtitle: 'Procesamiento Lógico Autónomo',
            core: 'NÚCLEO',
            system_logic: 'SISTEMA.LÓGICO',
            nodes: {
                ingestion: 'Ingesta',
                vector_db: 'Base Vectorial',
                context: 'Contexto',
                action: 'Acción'
            }
        },
        work: {
            title: 'TRABAJO',
            subtitle: 'Agentes de IA de vanguardia que impulsan el futuro de la automatización',
            search_placeholder: 'Buscar agentes...',
            no_results: 'No se encontraron agentes.',
            portfolio_badge: 'Portafolio Agentes IA',
            active_agents: 'Agentes Activos',
            comparison: {
                title_agent: 'AGENTE',
                title_comparison: 'COMPARACIÓN',
                personality: 'Personalidad',
                tags: 'Etiquetas',
                integration: 'Integración',
                deploy: 'Desplegar Agente',
                select_more: 'Selecciona otro agente para comparar'
            }
        },
        pricing: {
            header_access: 'ACCESO',
            header_granted: 'CONCEDIDO',
            subtitle: 'Escalado transparente basado en el uso.',
            root_access: '/ acceso_root_autorizado',
            system_unlocked: 'Sistema Desbloqueado',
            select_protocol: 'Seleccionar Protocolo',
            solo: {
                title: 'Fundador Solo',
                price: '₹30,000',
                upto: 'hasta',
                monthly: '+ ₹15,000 / mes',
                vibe: 'El ambiente: Para el operador solitario que necesita manos extra.',
                btn: 'Desplegar Solo'
            },
            company: {
                title: 'Sistemas Empresariales',
                price: '₹50,000',
                upto: 'hasta',
                monthly: '+ ₹40,000 / mes',
                vibe: 'El ambiente: Para reemplazar departamentos enteros con IA.',
                recommended: 'Protocolo Recomendado',
                btn: 'Inicializar Empresa'
            },
            enterprise: {
                title: 'Corporativo',
                price: 'FLEXIBLE',
                subtitle: 'Precio Personalizado',
                vibe: 'El ambiente: Para líderes de la industria que necesitan infraestructura de IA soberana.',
                btn: 'Contactar Ventas'
            },
            features: {
                compute: 'Cómputo',
                interface: 'Interfaz',
                memory: 'Memoria',
                support: 'Soporte',
                license: 'Licencia',
                architecture: 'Arquitectura'
            },
            disclaimer: '* Los precios son indicativos. La complejidad varía.'
        },
        services: {
            title_core: 'MÓDULOS',
            title_modules: 'CENTRALES.',
            module_details: 'Detalles del Módulo',
            init_module: 'Inicializar Módulo',
            system_id: 'ID SISTEMA',
            items: [
                {
                    title: "Agente IA Personal",
                    desc: "Tu gemelo digital. Maneja la agenda, correos y tareas rutinarias autónomamente.",
                    details: "Un gemelo digital totalmente autónomo diseñado para reflejar tus patrones de toma de decisiones."
                },
                {
                    title: "Cerebros Multi-Modales",
                    desc: "Chat + Síntesis de Voz. Agentes que hablan, escuchan y entienden el contexto.",
                    details: "Agentes de próxima generación capaces de interacción fluida por texto y voz."
                },
                {
                    title: "Entrenamiento Personalizado",
                    desc: "Afinando modelos en tus datos propietarios.",
                    details: "Afinación de modelos propietarios (LoRA/QLoRA) en tu base de conocimientos interna."
                },
                {
                    title: "Infraestructura IA",
                    desc: "Arquitectura backend escalable para flujos de trabajo automatizados.",
                    details: "Arquitectura backend robusta y escalable diseñada para flujos de trabajo de alta concurrencia."
                },
                {
                    title: "Acceso Desarrollador Live",
                    desc: "Línea directa con nuestros ingenieros (12 PM - 9 PM).",
                    details: "Esto no es solo software; es una asociación. Obtienes un canal de Slack dedicado."
                },
                {
                    title: "Arquitecturas a Medida",
                    desc: "¿Necesitas algo único? Construimos redes neuronales a medida.",
                    details: "Para casos de uso únicos. Visión por computadora, análisis predictivo, etc.",
                    action: "Contáctanos"
                }
            ]
        },
        footer: {
            title: 'Aether IA',
            subtitle: 'Sistemas de Automatización',
            desc_part1: 'Construimos los sistemas nerviosos autónomos para la próxima generación de empresas.',
            desc_part2: 'Reemplaza el caos manual con orden inteligente.',
            inquiries: 'Consultas Comerciales',
            support: 'Mesa de Ayuda',
            system_index: 'Índice del Sistema',
            network: 'Red',
            status: 'ESTADO DEL SISTEMA',
            operational: 'OPERATIVO',
            rights: '© 2026 AGENCIA DE AUTOMATIZACIÓN AETHER IA',
            nav: {
                services: 'Servicios',
                architecture: 'Arquitectura',
                pricing: 'Precios'
            }
        }
    },
    hi: {
        nav: { home: 'एथर एआई', book: 'परामर्श बुक करें' },
        hero: {
            title_prefix: 'नया',
            title_future: 'भविष्य',
            desc_part1: 'श्रम-मुक्त अर्थव्यवस्था के लिए स्वायत्त',
            desc_part2: 'डिजिटल आर्किटेक्चर का निर्माण',
            cta_init: 'सिस्टम सक्रिय करें',
            cta_view: 'आर्किटेक्चर देखें',
            status: 'सिस्टम ऑनलाइन है'
        },
        architecture: {
            title_neural: 'न्यूरल',
            title_flow: 'प्रवाह',
            subtitle: 'स्वायत्त तर्क प्रसंस्करण',
            core: 'केंद्र',
            system_logic: 'प्रणाली.तर्क',
            nodes: {
                ingestion: 'ग्रहण',
                vector_db: 'वेक्टर डीबी',
                context: 'संदर्भ',
                action: 'क्रिया'
            }
        },
        work: {
            title: 'कार्य',
            subtitle: 'अत्याधुनिक एआई एजेंट्स जो स्वचालन के भविष्य को शक्ति दे रहे हैं',
            search_placeholder: 'एजेंट्स खोजें...',
            no_results: 'आपकी खोज से मेल खाने वाले कोई एजेंट नहीं मिले।',
            portfolio_badge: 'एआई एजेंट पोर्टफोलियो',
            active_agents: 'सक्रिय एजेंट्स',
            comparison: {
                title_agent: 'एजेंट',
                title_comparison: 'तुलना',
                personality: 'व्यक्तित्व',
                tags: 'टैग',
                integration: 'एकीकरण',
                deploy: 'एजेंट तैनात करें',
                select_more: 'तुलना करने के लिए एक और एजेंट चुनें'
            }
        },
        pricing: {
            header_access: 'पहुँच',
            header_granted: 'स्वीकृत',
            subtitle: 'पारदर्शी, उपयोग-आधारित स्केलिंग।',
            root_access: '/ रूट_एक्सेस_अधिकृत',
            system_unlocked: 'सिस्टम अनलॉक',
            select_protocol: 'प्रोटोकॉल स्तर चुनें',
            solo: {
                title: 'एकल उद्यमी',
                price: '₹30,000',
                upto: 'तक',
                monthly: '+ ₹15,000 / माह',
                vibe: 'माहौल: अतिरिक्त हाथों की आवश्यकता वाले एकल ऑपरेटर के लिए।',
                btn: 'एकल सक्रिय करें'
            },
            company: {
                title: 'कंपनी सिस्टम',
                price: '₹50,000',
                upto: 'तक',
                monthly: '+ ₹40,000 / माह',
                vibe: 'माहौल: व्यवसायों के लिए जो पूरे विभागों को एआई से बदल रहे हैं।',
                recommended: 'अनुशंसित प्रोटोकॉल',
                btn: 'व्यवसाय शुरू करें'
            },
            enterprise: {
                title: 'एंटरप्राइज़',
                price: 'लचीला',
                subtitle: 'कस्टम मूल्य',
                vibe: 'माहौल: उद्योग के नेताओं के लिए जिन्हें संप्रभु एआई बुनियादी ढांचे की आवश्यकता है।',
                btn: 'बिक्री से संपर्क करें'
            },
            features: {
                compute: 'कम्प्यूट',
                interface: 'इंटरफ़ेस',
                memory: 'मेमोरी',
                support: 'समर्थन',
                license: 'लाइसेंस',
                architecture: 'आर्किटेक्चर'
            },
            disclaimer: '* मूल्य निर्धारण सांकेतिक है। जटिलता भिन्न होती है।'
        },
        services: {
            title_core: 'कोर',
            title_modules: 'मॉड्यूल।',
            module_details: 'मॉड्यूल विवरण',
            init_module: 'मॉड्यूल शुरू करें',
            system_id: 'सिस्टम आईडी',
            items: [
                {
                    title: "व्यक्तिगत एआई एजेंट",
                    desc: "आपका डिजिटल जुड़वां। दिन-प्रतिदिन की शेड्यूलिंग और ईमेल को स्वायत्त रूप से संभालता है।",
                    details: "एक पूरी तरह से स्वायत्त डिजिटल जुड़वां जो आपके निर्णय लेने के पैटर्न को प्रतिबिंबित करने के लिए डिज़ाइन किया गया है।"
                },
                {
                    title: "मल्टी-मॉडल ब्रेन्स",
                    desc: "चैट + वॉयस सिंथेसिस। ऐसे एजेंट जो बोलते, सुनते और संदर्भ को गहराई से समझते हैं।",
                    details: "पाठ और आवाज के माध्यम से तरल बातचीत करने में सक्षम अगली पीढ़ी के एजेंट।"
                },
                {
                    title: "अनुकूलित प्रशिक्षण",
                    desc: "100% प्रासंगिक आउटपुट के लिए आपके डेटा पर मॉडल की फाइन-ट्यूनिंग।",
                    details: "आपके विशिष्ट उद्यम ज्ञान आधार पर प्रोप्राइटरी मॉडल फाइन-ट्यूनिंग।"
                },
                {
                    title: "एआई इंफ्रास्ट्रक्चर",
                    desc: "उच्च-मात्रा वाले स्वचालित वर्कफ़्लो का समर्थन करने के लिए स्केलेबल बैकएंड आर्किटेक्चर।",
                    details: "मजबूत, स्केलेबल बैकएंड आर्किटेक्चर।"
                },
                {
                    title: "लाइव डेवलपर एक्सेस",
                    desc: "वास्तविक समय के अनुकूलन के लिए हमारे इंजीनियरों के लिए सीधी रेखा (दोपहर 12 - रात 9)।",
                    details: "यह सिर्फ सॉफ्टवेयर नहीं है; यह एक साझेदारी है।"
                },
                {
                    title: "कस्टम आर्किटेक्चर",
                    desc: "कुछ अनोखा चाहिए? हम आपके विशिष्ट उपयोग के मामले के लिए तंत्रिका नेटवर्क बनाते हैं।",
                    details: "अद्वितीय उपयोग के मामलों के लिए।",
                    action: "संपर्क करें"
                }
            ]
        },
        footer: {
            title: 'एथर एआई',
            subtitle: 'स्वचालन प्रणालियाँ',
            desc_part1: 'हम उद्यम की अगली पीढ़ी के लिए स्वायत्त तंत्रिका तंत्र का निर्माण करते हैं।',
            desc_part2: 'मैन्युअल अराजकता को बुद्धिमान व्यवस्था से बदलें।',
            inquiries: 'व्यापार पूछताछ',
            support: 'सहायता डेस्क',
            system_index: 'सिस्टम इंडेक्स',
            network: 'नेटवर्क',
            status: 'सिस्टम स्थिति',
            operational: 'संचालित',
            rights: '© 2026 एथर एआई स्वचालन एजेंसी',
            nav: {
                services: 'सेवाएं',
                architecture: 'आर्किटेक्चर',
                pricing: 'मूल्य निर्धारण'
            }
        }
    },
    'hi-en': {
        nav: { home: 'Aether AI', book: 'Call Book Karein' },
        hero: {
            title_prefix: 'FUTURE',
            title_future: 'KA',
            desc_part1: 'Post-labor economy ke liye autonomous',
            desc_part2: 'digital architectures banana',
            cta_init: 'SYSTEM SHURU KAREIN',
            cta_view: 'ARCHITECTURE DEKHEIN',
            status: 'System Online Hai'
        },
        architecture: {
            title_neural: 'NEURAL',
            title_flow: 'FLOW',
            subtitle: 'Autonomous Logic Processing',
            core: 'CORE',
            system_logic: 'SYSTEM.LOGIC',
            nodes: {
                ingestion: 'Ingestion',
                vector_db: 'Vector DB',
                context: 'Context',
                action: 'Action'
            }
        },
        work: {
            title: 'KAAM',
            subtitle: 'Cutting-edge AI agents jo automation ke future ko power de rahe hain',
            search_placeholder: 'Agents dhundhein...',
            no_results: 'Koi agents nahi mile.',
            portfolio_badge: 'AI Agent Portfolio',
            active_agents: 'Active Agents',
            comparison: {
                title_agent: 'AGENT',
                title_comparison: 'COMPARISON',
                personality: 'Personality',
                tags: 'Tags',
                integration: 'Integration',
                deploy: 'Agent Deploy Karein',
                select_more: 'Compare karne ke liye dusra agent chunein'
            }
        },
        pricing: {
            header_access: 'ACCESS',
            header_granted: 'GRANTED',
            subtitle: 'Transparent, usage-based scaling.',
            root_access: '/ root_access_authorized',
            system_unlocked: 'System Unlocked',
            select_protocol: 'Protocol Level Chunein',
            solo: {
                title: 'Solo Founder',
                price: '₹30,000',
                upto: 'upto',
                monthly: '+ ₹15,000 / mahina',
                vibe: 'Vibe: Un solo operators ke liye jinhe extra help chahiye.',
                btn: 'Solo Deploy Karein'
            },
            company: {
                title: 'Company Systems',
                price: '₹50,000',
                upto: 'upto',
                monthly: '+ ₹40,000 / mahina',
                vibe: 'Vibe: Poore departments ko AI se replace karne wale businesses ke liye.',
                recommended: 'Recommended Protocol',
                btn: 'Business Shuru Karein'
            },
            enterprise: {
                title: 'Enterprise',
                price: 'FLEXIBLE',
                subtitle: 'Custom Pricing',
                vibe: 'Vibe: Industry leaders ke liye jinhe sovereign AI infrastructure chahiye.',
                btn: 'Sales Se Baat Karein'
            },
            features: {
                compute: 'Compute',
                interface: 'Interface',
                memory: 'Memory',
                support: 'Support',
                license: 'License',
                architecture: 'Architecture'
            },
            disclaimer: '* Pricing indicative hai. Complexity vary kar sakti hai.'
        },
        services: {
            title_core: 'CORE',
            title_modules: 'MODULES.',
            module_details: 'Module Details',
            init_module: 'Module Shuru Karein',
            system_id: 'SYSTEM ID',
            items: [
                {
                    title: "Personal AI Agent",
                    desc: "Aapka digital twin. Scheduling, emails aur routine tasks khud sambhalta hai.",
                    details: "Ek fully autonomous digital twin jo aapke decision-making patterns ko copy karta hai."
                },
                {
                    title: "Multi-Modal Brains",
                    desc: "Chat + Voice Synthesis. Agents jo bolte, sunte aur context samajhte hain.",
                    details: "Next-gen agents jo text aur voice dono me fluently interact kar sakte hain."
                },
                {
                    title: "Custom Training",
                    desc: "Aapke data par models ki fine-tuning 100% relevant outputs ke liye.",
                    details: "Proprietary model fine-tuning (LoRA/QLoRA) aapke internal knowledge base par."
                },
                {
                    title: "AI Infrastructure",
                    desc: "Scalable backend architecture high-volume workflows ke liye.",
                    details: "Robust, scalable backend architecture jo high-concurrency workflows ke liye designed hai."
                },
                {
                    title: "Live Developer Access",
                    desc: "Hamare engineers se seedhi baat (12 PM - 9 PM) real-time optimization ke liye.",
                    details: "Ye sirf software nahi, partnership hai. Aapko dedicated Slack channel milta hai."
                },
                {
                    title: "Custom Architectures",
                    desc: "Kuch unique chahiye? Hum bespoke neural networks banate hain.",
                    details: "Unique use cases ke liye. Computer vision, predictive analytics, etc.",
                    action: "Contact Karein"
                }
            ]
        },
        footer: {
            title: 'Aether AI',
            subtitle: 'Automation Systems',
            desc_part1: 'Hum next-gen enterprises ke liye autonomous nervous systems banate hain.',
            desc_part2: 'Manual chaos ko intelligent order se replace karein.',
            inquiries: 'Business Puch-taach',
            support: 'Support Desk',
            system_index: 'System Index',
            network: 'Network',
            status: 'SYSTEM STATUS',
            operational: 'CHAALU HAI',
            rights: '© 2026 AETHER AI AUTOMATION AGENCY',
            nav: {
                services: 'Services',
                architecture: 'Architecture',
                pricing: 'Pricing'
            }
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState('en');

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[locale];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
