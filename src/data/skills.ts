export interface Skill {
    name: string;
    context: string;
    proficiency: "core" | "proficient" | "familiar";
}

export interface SkillCategory {
    id: string;
    title: string;
    icon: string;
    color: string;
    description: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: "investigation",
        title: "Investigation",
        icon: "search",
        color: "#2F80ED",
        description: "Security analysis, forensics, and threat detection",
        skills: [
            { name: "SIEM Analysis", context: "Monitoring and analyzing security information and events for threat detection.", proficiency: "proficient" },
            { name: "Log Correlation", context: "Connecting disparate log events to identify complex attack patterns.", proficiency: "proficient" },
            { name: "Incident Response", context: "Executing structured workflows to contain and mitigate security breaches.", proficiency: "proficient" },
            { name: "Threat Intelligence", context: "Gathering and analyzing information about emerging cyber threats.", proficiency: "proficient" },
            { name: "Digital Forensics", context: "Analyzing digital media to reconstruct security incidents and gather evidence.", proficiency: "proficient" },
            { name: "Network Monitoring", context: "Observing network traffic for performance issues and security anomalies.", proficiency: "proficient" },
            { name: "Packet Analysis", context: "Deep inspection of network packets using tools like Wireshark.", proficiency: "proficient" },
            { name: "IBM QRadar", context: "SIEM monitoring and log correlation during Quick Heal Academy training.", proficiency: "proficient" },
            { name: "Wireshark", context: "Network packet analysis and protocol investigation.", proficiency: "proficient" },
            { name: "Burp Suite", context: "Web application security testing and vulnerability identification.", proficiency: "proficient" },
            { name: "Metasploit", context: "Exploitation and penetration testing framework.", proficiency: "proficient" },
            { name: "OWASP ZAP", context: "Automated web application security scanning.", proficiency: "familiar" },
        ],
    },
    {
        id: "automation",
        title: "Automation",
        icon: "zap",
        color: "#FFD400",
        description: "Scripting and task optimization",
        skills: [
            { name: "Python", context: "Core language for security automation and tool development.", proficiency: "core" },
            { name: "Bash", context: "Linux system automation and pipeline scripting.", proficiency: "proficient" },
            { name: "PowerShell", context: "Windows administration and security automation.", proficiency: "familiar" },
            { name: "Python Automation", context: "Developing end-to-end automation scripts for repetitive tasks.", proficiency: "core" },
            { name: "CLI Workflows", context: "Designing efficient command-line experiences.", proficiency: "proficient" },
            { name: "Task Automation", context: "Optimizing workflows through automated scheduling and triggers.", proficiency: "proficient" },
        ],
    },
    {
        id: "engineering",
        title: "Engineering",
        icon: "wrench",
        color: "#FF5C8A",
        description: "Software development and architecture",
        skills: [
            { name: "React", context: "Building interactive dashboards and complex UI systems.", proficiency: "core" },
            { name: "Node.js", context: "Scalable backend development and real-time processing.", proficiency: "core" },
            { name: "Express", context: "RESTful API design and middleware implementation.", proficiency: "core" },
            { name: "TypeScript", context: "Type-safe application development for reliability.", proficiency: "proficient" },
            { name: "MongoDB", context: "Flexible NoSQL database design for various projects.", proficiency: "proficient" },
            { name: "REST APIs", context: "Designing and consuming standard web services.", proficiency: "core" },
            { name: "MVC Architecture", context: "Structural patterns for organized application design.", proficiency: "proficient" },
            { name: "API Design", context: "Creating clean, documented, and reusable interfaces.", proficiency: "core" },
            { name: "Git Workflows", context: "Collaborative version control and branch management.", proficiency: "core" },
            { name: "System Modeling", context: "Representing system logic and data flow visually.", proficiency: "proficient" },
        ],
    },
    {
        id: "cloud",
        title: "Cloud",
        icon: "cloud",
        color: "#00B894",
        description: "Infrastructure and cloud security",
        skills: [
            { name: "AWS", context: "Infrastructure management and security configuration.", proficiency: "proficient" },
            { name: "Google Cloud", context: "Cloud networking and compute service deployment.", proficiency: "familiar" },
            { name: "IAM", context: "Identity management and access control policies.", proficiency: "proficient" },
            { name: "VPC", context: "Network isolation and subnet configuration.", proficiency: "proficient" },
            { name: "WAF", context: "Protecting applications against web-based attacks.", proficiency: "familiar" },
            { name: "Cloud Security Basics", context: "Understanding core tenets of secure cloud architecture.", proficiency: "proficient" },
            { name: "Infrastructure Concepts", context: "Foundational knowledge of compute, storage, and networking.", proficiency: "proficient" },
        ],
    },
    {
        id: "systems-thinking",
        title: "Systems Thinking",
        icon: "puzzle",
        color: "#A855F7",
        description: "High-level design and modeling",
        skills: [
            { name: "System Architecture", context: "Designing components and their high-level interactions.", proficiency: "proficient" },
            { name: "Workflow Modeling", context: "Mapping complex manual processes into systematic flows.", proficiency: "core" },
            { name: "Simulation Design", context: "Creating digital environments that mimic real-world systems.", proficiency: "core" },
            { name: "Investigation Framework Design", context: "Building structured methodologies for forensic analysis.", proficiency: "core" },
            { name: "Learning System Design", context: "Engineering educational tools through cognitive modeling.", proficiency: "proficient" },
        ],
    },

];
