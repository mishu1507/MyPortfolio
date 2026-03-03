export interface TerminalCommand {
    command: string;
    description: string;
    output: string;
}

export const terminalCommands: Record<string, TerminalCommand> = {
    whoami: {
        command: "whoami",
        description: "Display identity information",
        output: `+--------------------------------------------------------------+
| ADITI BORKAR                                                 |
| ------------------------------------------------------------ |
| Role: Cybersecurity Engineering Student                      |
| Program: B.Tech CSE - Cybersecurity                          |
| University: Parul University (2023-2027)                     |
| Training: Quick Heal Academy                                 |
|                                                              |
| "Turning complex systems into understandable experiences."   |
|                                                              |
| Focus Areas:                                                 |
| -> Incident Response & Digital Forensics                     |
| -> Network Defense & VAPT                                    |
| -> SIEM Monitoring & Cloud Security                          |
| -> Full-Stack Development                                    |
| -> AI Security                                               |
|                                                              |
| Pattern: Complex System -> Structured Model                  |
|          -> Interactive Experience                           |
+--------------------------------------------------------------+`,
    },
    projects: {
        command: "projects",
        description: "List all projects",
        output: `+-- DEPLOYED PROJECTS -----------------------------------------+
|                                                              |
| [FLAGSHIP] ForensicLens V2                                   |
| Digital forensic investigation framework                      |
| -> Log ingestion, behavioral correlation, attack timeline    |
| -> forensic-lens-v2.vercel.app                               |
| -> github.com/mishu1507/ForensicLensV2                       |
|                                                              |
| [FLAGSHIP] MERNVerseOS                                       |
| Simulation-based engineering environment                     |
| -> Systems visualization, architecture abstraction           |
| -> mernverseos.vercel.app                                    |
|                                                              |
| [FLAGSHIP] BrainSparkz                                       |
| Gamified cognitive learning platform                         |
| -> Analytical reasoning, game mechanics                       |
| -> brainsparkz.onrender.com                                  |
|                                                              |
+-- CONCEPT LAB -----------------------------------------------+
|                                                              |
| [FLAGSHIP] ThreatScope       [FLAGSHIP] AutoSOC Lite         |
| [EXPERIMENTAL] PromptShield  [STANDARD] SystemMapper         |
| [STANDARD] LogMind                                           |
|                                                              |
+-- ARCHIVED --------------------------------------------------+
| Zip_Unzip | HelpYouStudy                                     |
+--------------------------------------------------------------+`,
    },
    skills: {
        command: "skills",
        description: "Display technology skills",
        output: `+-- TECHNOLOGY ECOSYSTEM -----------------------------------+
|                                                              |
| [ INVESTIGATION ]                                            |
| IBM QRadar, Wireshark, Burp Suite, Metasploit, OWASP ZAP     |
|                                                              |
| [ AUTOMATION ]                                               |
| Python, Bash, PowerShell                                     |
|                                                              |
| [ ENGINEERING ]                                              |
| React, Node.js, TypeScript, Express, MongoDB, Git, UML       |
|                                                              |
| [ CLOUD ]                                                    |
| AWS, Google Cloud, IAM, VPC, WAF                             |
|                                                              |
+--------------------------------------------------------------+`,
    },
    certifications: {
        command: "certifications",
        description: "List certifications",
        output: `+-- CERTIFICATE VAULT ------------------------------------------+
|                                                              |
| -> CYBERSECURITY (6)                                         |
|    IBM QRadar SIEM, Incident Response, Cisco Defense, CPPS   |
|                                                              |
| -> CLOUD (6)                                                 |
|    AWS Cloud Practitioner, Security Specialist, GCP Network  |
|                                                              |
| -> AI & DATA (5)                                             |
|    AI Engineer, Data Scientist, Data Viz, Design Thinking    |
|                                                              |
| -> DEVELOPMENT (5) / INDUSTRY (7)                            |
|    Full-Stack, Java, MongoDB, Quick Heal Academy Program     |
|                                                              |
| TOTAL: 29 VERIFIED CERTIFICATES                               |
+--------------------------------------------------------------+`,
    },
    github: {
        command: "github",
        description: "Open GitHub profile",
        output: `+-- GITHUB PROFILE --------------------------------------------+
|                                                              |
| URL: github.com/mishu1507                                    |
|                                                              |
| Notable Repos:                                               |
| -> ForensicLensV2                                            |
| -> BrainSparkz                                               |
| -> MERNVerseOS                                               |
|                                                              |
| [ ACTION: Opening in browser... ]                            |
+--------------------------------------------------------------+`,
    },
    contact: {
        command: "contact",
        description: "Display contact info",
        output: `+-- CONTACT INFORMATION ---------------------------------------+
|                                                              |
| EMAIL:    aditi.borkar1507@gmail.com                         |
| LINKEDIN: linkedin.com/in/mishuborkar-csa152006              |
| GITHUB:   github.com/mishu1507                               |
| CREDLY:   credly.com/users/aditi-borkar.0783ec0b             |
|                                                              |
| "Always open to discussing cybersecurity and systems."       |
+--------------------------------------------------------------+`,
    },
    help: {
        command: "help",
        description: "Show available commands",
        output: `+-- AVAILABLE COMMANDS ----------------------------------------+
|                                                              |
| whoami         - Display identity information                |
| projects       - List all projects with IDs                  |
| view <id>      - View deep specs of a project                |
| skills         - Display technology skills                   |
| certifications - List verified certificates                  |
| github         - Open GitHub profile                         |
| contact        - Display contact information                 |
| help           - Show this help message                      |
| clear          - Clear terminal                              |
+--------------------------------------------------------------+`,
    },
};
