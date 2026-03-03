"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { terminalCommands } from "@/data/terminal";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { X, Minus, Square } from "lucide-react";

interface TerminalLine {
    type: "input" | "output" | "system";
    content: string;
}

interface TerminalModeProps {
    isOpen: boolean;
    onClose: () => void;
}

const QUICK_COMMANDS = ["whoami", "projects", "skills", "certifications", "contact", "help"];

export default function TerminalMode({ isOpen, onClose }: TerminalModeProps) {
    const [lines, setLines] = useState<TerminalLine[]>([
        {
            type: "system",
            content:
                "Welcome to Aditi Borkar's Terminal v3.1.2\nSystem initialized. Type 'help' for available commands.\n",
        },
    ]);
    const [currentInput, setCurrentInput] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    const formatOutputLines = (text: string, width: number = 60) => {
        const words = text.split(" ");
        const lines: string[] = [];
        let currentLine = "";

        words.forEach(word => {
            if ((currentLine + word).length > width) {
                lines.push(currentLine.trim());
                currentLine = word + " ";
            } else {
                currentLine += word + " ";
            }
        });
        lines.push(currentLine.trim());
        return lines;
    };

    const handleCommand = useCallback(
        (cmd: string) => {
            const trimmed = cmd.trim().toLowerCase();
            const args = trimmed.split(" ");
            const command = args[0];

            if (!trimmed) return;

            const newLines: TerminalLine[] = [
                ...lines,
                { type: "input", content: `aditi@cybersystems:~$ ${cmd}` },
            ];

            setCommandHistory((prev) => [...prev, trimmed]);
            setHistoryIndex(-1);

            if (command === "clear") {
                setLines([
                    {
                        type: "system",
                        content: "Terminal cleared.\nType 'help' for available commands.\n",
                    },
                ]);
                setCurrentInput("");
                return;
            }

            if (command === "help") {
                newLines.push({
                    type: "output",
                    content: `+-- AVAILABLE COMMANDS ----------------------------------------+
|                                                              |
| whoami          - Display identity information               |
| projects        - List all projects with IDs                 |
| view <id>       - View deep specs of a project               |
| skills          - Display full technology ecosystem          |
| certifications  - List verified credentials                  |
| github          - Open GitHub profile                        |
| contact         - Display contact information                |
| help            - Show this help message                     |
| clear           - Clear terminal                             |
+--------------------------------------------------------------+`,
                });
            } else if (command === "skills") {
                let output = "+-- TECHNOLOGY ECOSYSTEM --------------------------------------+\n";
                skillCategories.forEach(cat => {
                    output += `|                                                              |\n`;
                    output += `| [ ${cat.title.toUpperCase()} ]\n`;
                    const skillsText = cat.skills.map(s => s.name).join(", ");
                    const wrapped = formatOutputLines(skillsText, 58);
                    wrapped.forEach(line => {
                        output += `| ${line.padEnd(60)} |\n`;
                    });
                });
                output += "|                                                              |\n";
                output += "+--------------------------------------------------------------+";
                newLines.push({ type: "output", content: output });
            } else if (command === "projects" || command === "ls") {
                let output = "+-- PROJECT INDEX ---------------------------------------------+\n";
                output += "| Use 'view <id>' to explore system specifications             |\n";
                output += "| ------------------------------------------------------------ |\n";
                projects.forEach(p => {
                    output += `| [${p.id}]`.padEnd(25) + `| ${p.title}\n`;
                    output += `| -> ${p.codename} | ${p.status.toUpperCase()}\n|\n`;
                });
                output += "+--------------------------------------------------------------+";
                newLines.push({ type: "output", content: output });
            } else if (command === "view" || command === "cat") {
                const id = args[1];
                if (!id) {
                    newLines.push({ type: "output", content: "Usage: view <project-id>\nExample: view forensic-lens-v2" });
                } else {
                    const project = projects.find(p => p.id === id || p.codename.toLowerCase() === id.toLowerCase());
                    if (project) {
                        let output = `+-- SYSTEM SPEC: ${project.title.toUpperCase()} --+\n`;
                        output += `| Codename: ${project.codename.padEnd(48)} |\n`;
                        output += `| Status: ${project.status.toUpperCase().padEnd(50)} |\n`;
                        output += `| Class: ${project.classification.toUpperCase().padEnd(51)} |\n`;
                        output += `| ------------------------------------------------------------ |\n`;

                        output += `| PROBLEM DEFINITION:\n`;
                        formatOutputLines(project.problem, 58).forEach(l => output += `| ${l.padEnd(60)} |\n`);
                        output += `|                                                              |\n`;

                        output += `| SYSTEM DESIGN:\n`;
                        formatOutputLines(project.systemDesign, 58).forEach(l => output += `| ${l.padEnd(60)} |\n`);
                        output += `|                                                              |\n`;

                        output += `| ARCHITECTURE:\n`;
                        formatOutputLines(project.architecture, 58).forEach(l => output += `| ${l.padEnd(60)} |\n`);
                        output += `|                                                              |\n`;

                        output += `| TOOLS: ${project.tools.join(", ")}\n`;
                        if (project.liveUrl) output += `| DEPLOYED AT: ${project.liveUrl}\n`;
                        if (project.githubUrl) output += `| REPOSITORY: ${project.githubUrl}\n`;
                        output += "+--------------------------------------------------------------+";
                        newLines.push({ type: "output", content: output });
                    } else {
                        newLines.push({ type: "output", content: `System Error: Node '${id}' not found in registry.` });
                    }
                }
            } else if (trimmed === "github") {
                newLines.push({
                    type: "output",
                    content: terminalCommands.github.output,
                });
                window.open("https://github.com/mishu1507", "_blank");
            } else if (terminalCommands[trimmed]) {
                newLines.push({
                    type: "output",
                    content: terminalCommands[trimmed].output,
                });
            } else {
                newLines.push({
                    type: "output",
                    content: `Command not found: '${trimmed}'\nType 'help' for available commands.`,
                });
            }

            setLines(newLines);
            setCurrentInput("");
        },
        [lines]
    );

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCommand(currentInput);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex =
                    historyIndex === -1
                        ? commandHistory.length - 1
                        : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setCurrentInput(commandHistory[newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex >= commandHistory.length) {
                    setHistoryIndex(-1);
                    setCurrentInput("");
                } else {
                    setHistoryIndex(newIndex);
                    setCurrentInput(commandHistory[newIndex]);
                }
            }
        } else if (e.key === "Escape") {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0"
                        style={{ backgroundColor: "rgba(26, 34, 56, 0.5)" }}
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Terminal Window */}
                    <motion.div
                        className="relative w-full md:max-w-3xl md:rounded-2xl overflow-hidden h-[80vh] md:h-[70vh] flex flex-col border-2"
                        style={{
                            backgroundColor: "var(--surface-hex)",
                            borderColor: "var(--border-hex)",
                            boxShadow: "var(--block-shadow)",
                        }}
                        initial={{ y: 100, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 100, opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        {/* Title Bar */}
                        <div
                            className="flex items-center justify-between px-4 py-3 shrink-0 border-b"
                            style={{ borderColor: "var(--border-hex)", backgroundColor: "var(--surface-hex)" }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex gap-2">
                                    <motion.button
                                        className="w-3 h-3 rounded-full cursor-pointer"
                                        style={{ backgroundColor: "#FF6B6B" }}
                                        onClick={onClose}
                                        whileHover={{ scale: 1.3 }}
                                    />
                                    <motion.button
                                        className="w-3 h-3 rounded-full cursor-pointer"
                                        style={{ backgroundColor: "#E6A15A" }}
                                        whileHover={{ scale: 1.3 }}
                                    >
                                        <Minus size={0} />
                                    </motion.button>
                                    <motion.button
                                        className="w-3 h-3 rounded-full cursor-pointer"
                                        style={{ backgroundColor: "#5FAF7A" }}
                                        whileHover={{ scale: 1.3 }}
                                    >
                                        <Square size={0} />
                                    </motion.button>
                                </div>
                                <span
                                    className="text-xs font-mono ml-3"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    aditi@cybersystems: ~/terminal
                                </span>
                            </div>
                            <motion.button
                                onClick={onClose}
                                className="p-1 rounded cursor-pointer transition-colors"
                                style={{ color: "var(--text-muted)" }}
                                whileHover={{ backgroundColor: "var(--accent-hex)", color: "#000000" }}
                            >
                                <X size={16} />
                            </motion.button>
                        </div>

                        {/* Terminal Content */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 font-mono text-sm terminal-scrollbar"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {lines.map((line, index) => (
                                <div key={index} className="mb-1">
                                    {line.type === "system" ? (
                                        <pre
                                            className="whitespace-pre-wrap text-xs"
                                            style={{
                                                color: "var(--blue-hex)",
                                                fontFamily: "var(--font-mono)",
                                                letterSpacing: "0",
                                                fontVariantLigatures: "none"
                                            }}
                                        >
                                            {line.content}
                                        </pre>
                                    ) : line.type === "input" ? (
                                        <div
                                            style={{
                                                color: "var(--primary-hex)",
                                                fontFamily: "var(--font-mono)"
                                            }}
                                        >
                                            {line.content}
                                        </div>
                                    ) : (
                                        <div className="overflow-x-auto terminal-scrollbar mt-1 mb-2">
                                            <pre
                                                className="whitespace-pre text-xs"
                                                style={{
                                                    color: "var(--text-primary)",
                                                    fontFamily: "var(--font-mono)",
                                                    letterSpacing: "0",
                                                    fontVariantLigatures: "none",
                                                    lineHeight: "1.25"
                                                }}
                                            >
                                                {line.content}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Input Line */}
                            <div className="flex items-center gap-0">
                                <span style={{ color: "var(--primary-hex)" }}>
                                    aditi@cybersystems:~${" "}
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={currentInput}
                                    onChange={(e) => setCurrentInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent border-none outline-none font-mono text-sm"
                                    style={{ color: "var(--text-primary)" }}
                                    autoFocus
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                                <motion.span
                                    className="w-2 h-5 ml-0.5"
                                    style={{ backgroundColor: "var(--primary-hex)" }}
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            </div>
                        </div>

                        {/* Quick Commands */}
                        <div
                            className="px-4 py-3 flex gap-2 flex-wrap shrink-0 border-t"
                            style={{
                                borderColor: "var(--border-hex)",
                                backgroundColor: "var(--surface-hex)",
                            }}
                        >
                            {QUICK_COMMANDS.map((cmd) => (
                                <motion.button
                                    key={cmd}
                                    onClick={() => handleCommand(cmd)}
                                    className="px-3 py-1 rounded text-xs font-mono cursor-pointer transition-all border"
                                    style={{
                                        backgroundColor: "var(--surface-hex)",
                                        color: "var(--primary-hex)",
                                        borderColor: "var(--border-hex)",
                                        boxShadow: "2px 2px 0px var(--shadow-color)",
                                    }}
                                    whileHover={{
                                        backgroundColor: "var(--primary-hex)",
                                        color: "#000000",
                                        transform: "translate(-1px, -1px)",
                                        boxShadow: "3px 3px 0px var(--shadow-color)",
                                    }}
                                    whileTap={{ scale: 0.95, transform: "translate(1px, 1px)", boxShadow: "0px 0px 0px transparent" }}
                                >
                                    {cmd}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
