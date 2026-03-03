export interface Project {
    id: string;
    title: string;
    codename: string;
    status: "deployed" | "archived" | "concept";
    classification: "flagship" | "standard" | "utility" | "experimental";
    problem: string;
    systemDesign: string;
    architecture: string;
    tools: string[];
    skills: string[];
    whatILearned: string;
    liveUrl?: string;
    githubUrl?: string;
    color: string;
    icon: string;
    skillsRole: string;
}

export const projects: Project[] = [
    // ═══════════════════════════════════════════
    //  DEPLOYED / BUILT PROJECTS
    // ═══════════════════════════════════════════
    {
        id: "forensic-lens-v2",
        title: "ForensicLens V2",
        codename: "CASE-FL2",
        status: "deployed",
        classification: "flagship",
        problem:
            "Digital forensic investigations lack structured frameworks for log analysis, event correlation, and attack timeline reconstruction. Most tools detect attacks but fail to explain attacker behavior or model end-to-end investigation workflows used in Security Operations Centers.",
        systemDesign:
            "Built a modular investigation framework with pipeline architecture: log ingestion → event normalization → behavioral correlation engine → timeline reconstruction → structured report generation. Each module operates independently but feeds into a unified investigation dashboard.",
        architecture:
            "Microservice-inspired architecture with dedicated modules for log parsing, event correlation using temporal and behavioral analysis, and visual timeline reconstruction. Uses a graph-based approach to map relationships between security events, reflecting how real SOC analysts trace incidents.",
        tools: ["HTML", "CSS", "JS", "Flask", "SQLite", "Python"],
        skills: [
            "Cybersecurity",
            "Log Analysis",
            "Incident Response Modeling",
            "Backend Architecture",
            "Behavioral Correlation",
        ],
        whatILearned:
            "Deepened my understanding of forensic investigation methodology and how to translate manual investigation processes into automated workflows. Learned the importance of data normalization in multi-source log analysis and how behavioral correlation can reveal attack patterns invisible in isolated log entries.",
        liveUrl: "https://forensiclens.vercel.app/",
        githubUrl: "https://github.com/mishu1507/ForensicLensV2",
        color: "#2F80ED",
        icon: "🔍",
        skillsRole: "⭐ Flagship cybersecurity project - Investigation Systems",
    },
    {
        id: "mernverse-os",
        title: "MERNVerseOS",
        codename: "CASE-MV1",
        status: "deployed",
        classification: "flagship",
        problem:
            "Learning system architecture concepts through theory alone is ineffective. Engineers need simulation-based environments to understand how frontend, backend, and infrastructure components interact as a connected ecosystem.",
        systemDesign:
            "Created an OS-like simulation environment that visualizes real software engineering workflows. Models how system components interact, helping learners understand architecture as a connected ecosystem rather than isolated tutorials.",
        architecture:
            "Single-page application with OS-simulation layer built on React. Implements virtual filesystem, process manager, and task scheduler components. Uses state machines to manage application lifecycle. Treats learning like an operating system experience.",
        tools: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        skills: [
            "Full-Stack Development",
            "System Design",
            "Educational Engineering",
            "State Machines",
            "Architecture Abstraction",
        ],
        whatILearned:
            "Gained deep understanding of operating system concepts by simulating them in the browser. Learned about state machine design patterns, complex UI state management, and how systems visualization can make abstract concepts tangible and interactive.",
        liveUrl: "https://mernverseos.vercel.app/",
        githubUrl: "https://github.com/mishu1507",
        color: "#00B894",
        icon: "💻",
        skillsRole: "⭐ Systems thinking showcase - Simulation",
    },
    {
        id: "brainsparkz",
        title: "BrainSparkz",
        codename: "CASE-BS1",
        status: "deployed",
        classification: "flagship",
        problem:
            "Traditional learning platforms focus on content delivery rather than cognitive development. They fail to engage users in analytical reasoning through interactive, gamified experiences that actually improve thinking ability.",
        systemDesign:
            "Designed a gamified learning engine with progressive difficulty scaling, real-time feedback loops, and cognitive challenge modules. The system explores how engagement and game mechanics can enhance technical learning outcomes.",
        architecture:
            "Full-stack Flask application with SQLite database engine. Implements modular cognitive challenge logic and user progress analytics. Uses Python for backend processing and session management to ensure a structured learning experience.",
        tools: ["HTML", "CSS", "SQLite", "Flask", "Python"],
        skills: [
            "Full-Stack Development",
            "Backend Integration",
            "UX Design",
            "Database Management",
            "Gamification",
        ],
        whatILearned:
            "Learned how to design systems that balance engagement with educational value. Understood the psychology behind gamification mechanics and cognitive learning engineering. Gained experience in full-stack deployment and building human-centered technology.",
        liveUrl: "https://brainsparkz.onrender.com/",
        githubUrl: "https://github.com/mishu1507",
        color: "#FFD400",
        icon: "🧠",
        skillsRole: "⭐ Human-centered technology project - Learning Engineering",
    },
    {
        id: "screenshot-action-ai",
        title: "Screenshot_Action_AI",
        codename: "CASE-SAI",
        status: "deployed",
        classification: "experimental",
        problem:
            "Traditional UI interactions require manual navigation and interpretation. Users spend time decoding what's on screen instead of acting on it. There's no bridge between visual context and executable workflows.",
        systemDesign:
            "An intelligent automation tool that interprets screenshots and generates actionable insights or operations using AI assistance. Screenshot → AI detects intent → suggests actions. Transforms visual inputs into executable workflows.",
        architecture:
            "AI pipeline combining image analysis with context-aware action generation. Uses AI integration to interpret screen content (error screenshots → debugging suggestions, dashboard screenshots → anomaly detection) and generate relevant workflow recommendations.",
        tools: ["Python", "AI APIs", "Image Processing", "Automation"],
        skills: [
            "AI Integration",
            "Automation Thinking",
            "UX Innovation",
            "Human-Computer Interaction",
            "Context-Aware Interfaces",
        ],
        whatILearned:
            "Explored how visual inputs can be transformed into executable workflows, reducing manual interaction. Learned about intent-driven computing and how AI can bridge the gap between what a user sees and what they need to do.",
        githubUrl: "https://github.com/mishu1507",
        color: "#FF5C8A",
        icon: "📸",
        skillsRole: "⭐ Experimental future-facing project - Automation",
    },
    {
        id: "zip-unzip",
        title: "Zip_Unzip",
        codename: "CASE-ZU1",
        status: "archived",
        classification: "utility",
        problem:
            "Understanding file compression algorithms and system-level I/O operations requires hands-on implementation. Shows interest in low-level functionality, not just web applications.",
        systemDesign:
            "Built a lightweight file compression and decompression utility exploring how operating systems manage files and data packaging through scripting logic and command-line workflows.",
        architecture:
            "Command-line utility with modular compression/decompression engines. Implements buffered I/O for handling large files and explores automation fundamentals in system-level operations.",
        tools: ["Python", "File I/O", "Compression Algorithms"],
        skills: [
            "Python",
            "File Systems",
            "Automation Logic",
            "System Programming",
        ],
        whatILearned:
            "Understood how compression algorithms work at a fundamental level. Gained experience in byte-level file manipulation, command-line workflows, and system utility development.",
        githubUrl: "https://github.com/mishu1507",
        color: "#AAAAAA",
        icon: "📦",
        skillsRole: "Supporting engineering fundamentals - Utilities",
    },
    {
        id: "help-you-study",
        title: "HelpYouStudy",
        codename: "CASE-HYS",
        status: "archived",
        classification: "utility",
        problem:
            "Students struggle with organizing study workflows. Most solutions treat studying as a motivation problem rather than a system problem that can be optimized through structured planning.",
        systemDesign:
            "Designed a productivity-focused platform to help students organize study sessions, manage learning workflows, and maintain structured academic progress. Emphasizes clarity, planning, and efficiency.",
        architecture:
            "Web application with local-first data storage, task scheduling engine, and study session analytics dashboard. Treats studying as a system problem with workflow optimization.",
        tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        skills: [
            "Web Development",
            "UX Thinking",
            "Problem Modeling",
            "Workflow Design",
        ],
        whatILearned:
            "Learned about user workflow analysis and how to design tools that enhance productivity. Gained experience in local-first application architecture and productivity engineering.",
        githubUrl: "https://github.com/mishu1507",
        color: "#00B894",
        icon: "📚",
        skillsRole: "Learning systems experimentation - Productivity",
    },

    // ═══════════════════════════════════════════
    //  CONCEPT PROJECTS (Future / In-Progress)
    // ═══════════════════════════════════════════
    {
        id: "threat-scope",
        title: "ThreatScope",
        codename: "CASE-TS1",
        status: "concept",
        classification: "flagship",
        problem:
            "Security tools show alerts and logs, but rarely tell the story of an attack. Analysts need visual attack path reconstruction to understand how an attacker moved through a system.",
        systemDesign:
            "A platform that converts raw security logs into interactive visual attack paths - parsing logs, building attacker journey graphs, visualizing lateral movement, and highlighting compromised nodes.",
        architecture:
            "Graph-based visualization engine with log parsing pipeline, attacker behavior modeling, and interactive node-link diagrams showing the full attack narrative rather than isolated alerts.",
        tools: ["React", "D3.js", "Python", "Graph Database"],
        skills: [
            "Graph Visualization",
            "Security Analytics",
            "Data Modeling",
            "Attack Storytelling",
        ],
        whatILearned:
            "Natural evolution of ForensicLens - moving from investigation to visualization of investigation. Exploring how attack storytelling creates deeper understanding than alert dashboards.",
        githubUrl: "https://github.com/mishu1507",
        color: "#2F80ED",
        icon: "🎯",
        skillsRole: "Investigation → Visualization evolution - Visualization",
    },
    {
        id: "auto-soc-lite",
        title: "AutoSOC Lite",
        codename: "CASE-SOC",
        status: "concept",
        classification: "flagship",
        problem:
            "Students learning cybersecurity rarely get hands-on SOC experience. There's no accessible way to simulate real security operations center workflows with alert investigation and incident closure.",
        systemDesign:
            "A mini Security Operations Center simulator where alerts appear and users investigate incidents - implementing severity scoring, investigation workflows, and incident closure procedures.",
        architecture:
            "Dashboard-based simulation with alert generation engine, severity scoring system, guided investigation workflow, and incident lifecycle management. Directly connects to SOC training experience.",
        tools: ["React", "Node.js", "WebSockets", "Simulation Engine"],
        skills: [
            "SOC Operations",
            "Alert Investigation",
            "Incident Management",
            "Security Simulation",
        ],
        whatILearned:
            "Exploring educational SOC simulation as a bridge between academic learning and industry-ready skills. Directly informed by Quick Heal Academy training experience.",
        githubUrl: "https://github.com/mishu1507",
        color: "#FFD400",
        icon: "🖥️",
        skillsRole: "Educational SOC simulation - Simulation",
    },
    {
        id: "prompt-shield",
        title: "PromptShield",
        codename: "CASE-PS1",
        status: "concept",
        classification: "experimental",
        problem:
            "AI systems are increasingly vulnerable to prompt injection and unsafe outputs. There's a need for tools that test AI prompts for security vulnerabilities.",
        systemDesign:
            "An AI security testing toolkit that runs prompt attack simulations, scores output risk levels, and performs AI safety checks - combining cybersecurity investigation with modern AI security.",
        architecture:
            "Testing pipeline with prompt injection simulation engine, output risk scoring module, and AI safety validation framework.",
        tools: ["Python", "AI APIs", "Security Testing"],
        skills: [
            "AI Security",
            "Prompt Engineering",
            "Risk Assessment",
            "Security Testing",
        ],
        whatILearned:
            "Exploring the intersection of AI and cybersecurity - a modern security direction that combines investigation mindset with emerging AI threat landscape.",
        githubUrl: "https://github.com/mishu1507",
        color: "#FF5C8A",
        icon: "🤖",
        skillsRole: "AI Security research - AI Security",
    },
    {
        id: "system-mapper",
        title: "SystemMapper",
        codename: "CASE-SM1",
        status: "concept",
        classification: "standard",
        problem:
            "Understanding a project's architecture requires manual documentation that quickly becomes outdated. Developers need automated architecture visualization from their actual codebase.",
        systemDesign:
            "Upload a project → auto-generate system architecture diagram. Analyzes repository structure, dependency mapping, and component relationships to produce visual architecture documentation.",
        architecture:
            "Code analysis pipeline with repo parser, dependency graph builder, and auto-generated architecture diagram renderer. Extension of MERNVerseOS philosophy - explaining systems automatically.",
        tools: ["TypeScript", "AST Parsing", "D3.js", "Graph Algorithms"],
        skills: [
            "Architecture Analysis",
            "Code Parsing",
            "Visualization",
            "Developer Tools",
        ],
        whatILearned:
            "Exploring how systems can be explained automatically through code analysis and intelligent visualization.",
        githubUrl: "https://github.com/mishu1507",
        color: "#2F80ED",
        icon: "🧩",
        skillsRole: "Architecture visualization - Visualization",
    },
    {
        id: "log-mind",
        title: "LogMind",
        codename: "CASE-LM1",
        status: "concept",
        classification: "standard",
        problem:
            "Reading and interpreting security logs requires expertise that most students and junior analysts lack. There's no accessible tool that explains what happened, why it happened, and the risk level.",
        systemDesign:
            "An AI log explanation assistant - paste logs → AI explains what happened, why it happened, and assigns a risk level. Perfect companion to ForensicLens.",
        architecture:
            "AI-powered log analysis pipeline with natural language explanation engine, risk classification module, and contextual incident narrative generator.",
        tools: ["Python", "AI APIs", "Log Parsing", "NLP"],
        skills: [
            "AI Integration",
            "Log Analysis",
            "Natural Language Generation",
            "Risk Assessment",
        ],
        whatILearned:
            "Exploring how AI can make security analysis more accessible by translating technical log data into understandable narratives.",
        githubUrl: "https://github.com/mishu1507",
        color: "#FFD400",
        icon: "🔎",
        skillsRole: "AI-assisted investigation - Investigation Systems",
    },
];

export const projectSkillsSummary =
    "My projects explore how complex digital systems can be analyzed, simulated, or simplified through cybersecurity investigation frameworks, learning platforms, and automation-driven tools.";

export const projectPattern = {
    flow: "Complex System → Structured Model → Interactive Experience",
    categories: {
        "Investigation Systems": ["ForensicLens V2", "LogMind"],
        "Visualization": ["ThreatScope", "SystemMapper"],
        "Learning Engineering": ["BrainSparkz"],
        "Simulation": ["MERNVerseOS", "AutoSOC Lite"],
        "Automation": ["Screenshot_Action_AI"],
        "Utilities": ["Zip_Unzip"],
        "Productivity": ["HelpYouStudy"],
        "AI Security": ["PromptShield"],
    },
};
