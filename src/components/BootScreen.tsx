"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const kernelLogs = [
    "[    0.000000] Linux version 6.8.2-aditi-os (build@cybersystems) (gcc (Ubuntu 11.4.0-1ubuntu1) 11.4.0)",
    "[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-6.8.2 root=UUID=8a2b ro quiet console=tty1",
    "[    0.000000] BIOS-provided physical RAM map:",
    "[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable",
    "[    0.012351] secureboot: Secure boot could not be determined",
    "[    0.054321] smpboot: CPU0: Intel(R) Core(TM) i9-14900K CPU @ 3.20GHz",
    "[    0.103241] Performance Events: PEBS fmt4, Alderlake events, 32-deep LBR",
    "[    0.201452] rcu: Preemptible hierarchical RCU implementation.",
    "[    0.412351] PCI: Using ACPI for IRQ routing",
    "[    0.623121] net eth0: initializing hardware...",
    "[    0.835123] Loading digital forensics module [OK]",
    "[    0.912341] Initializing SOC logging service [OK]",
    "[    1.015231] systemd[1]: Loading kernel modules...",
    "[    1.231512] systemd[1]: Mounting Control Group Filesystem...",
    "[    1.501231] random: crng init done",
    "[    1.702315] usb 1-1: new high-speed USB device number 2 using xhci_hcd",
    "[  OK  ] Started Cryptography and Security Framework.",
    "[  OK  ] Started Network Defense Protocols.",
    "[  OK  ] Reached target System Architecture.",
    "[  OK  ] Initializing Aditi Borkar Portfolio Environment...",
    "[  OK  ] Preparing cognitive learning UI...",
];

interface BootScreenProps {
    onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
    const [logs, setLogs] = useState<string[]>([]);
    const [bootPhase, setBootPhase] = useState<"logging" | "ascii" | "done">("logging");

    useEffect(() => {
        let currentIndex = 0;

        // Rapidly print kernel logs
        const interval = setInterval(() => {
            if (currentIndex < kernelLogs.length) {
                setLogs(prev => [...prev, kernelLogs[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setBootPhase("done");
                    onComplete();
                }, 800);
            }
        }, 60); // Very fast, like a real boot

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[200] flex flex-col items-center justify-center font-mono overflow-hidden p-4"
                style={{ backgroundColor: "#0A0A0A" }}
            >
                {/* Subtle Scanline - Flat */}
                <div
                    className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(47, 128, 237, 0) 50%, rgba(47, 128, 237, 0.5) 50%)",
                        backgroundSize: "100% 4px",
                    }}
                />

                {bootPhase === "logging" && (
                    <div className="flex flex-col justify-end min-h-full pb-8">
                        {logs.map((log, i) => (
                            <div key={i} className="mb-0.5 opacity-90">
                                {log && log.includes("[  OK  ]") ? (
                                    <span>
                                        <span className="text-white">[</span>
                                        <span className="text-[#00B894] font-bold">  OK  </span>
                                        <span className="text-white">]</span>
                                        <span className="ml-2 text-[#FFFFFF]">{log.split("] ")[1]}</span>
                                    </span>
                                ) : (
                                    <span>
                                        <span className="text-[#2F80ED]">  *  </span>
                                        <span className="ml-2 text-[#FFFFFF]">{log}</span>
                                    </span>
                                )}
                            </div>
                        ))}
                        <motion.div
                            className="w-2 h-4 bg-[#00B894] mt-1"
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                        />
                    </div>
                )}



                {/* Skip Button - Bottom Right */}
                <button
                    onClick={onComplete}
                    className="absolute bottom-4 right-4 text-xs text-gray-600 hover:text-[#5FAF7A] transition-colors font-mono cursor-pointer z-50"
                >
                    [ SKIP BOOT_SEQ ]
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
