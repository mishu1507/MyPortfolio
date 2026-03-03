"use client";

import {
    Search,
    Zap,
    Wrench,
    Cloud,
    Puzzle,
    Monitor,
    Brain,
    Camera,
    Package,
    BookOpen,
    Target,
    Terminal,
    Bot,
    FileSearch,
    Shield,
    AlertTriangle,
    Lock,
    Globe,
    ShieldAlert,
    ShieldCheck,
    Construction,
    BarChart,
    Radio,
    FlaskConical,
    TrendingUp,
    TrendingDown,
    Lightbulb,
    Palette,
    Smartphone,
    Coffee,
    Database,
    Sparkles,
    Activity,
    Microscope,
    Bug,
    Settings,
    Trophy,
    Factory,
    Cpu,
    ExternalLink,
    Github,
    ChevronDown,
    ChevronUp,
    Tag,
    Layers,
    AlertCircle,
    FileText,
    FolderKanban,
    LucideProps
} from "lucide-react";
import React from "react";

export const IconMap = {
    search: Search,
    zap: Zap,
    wrench: Wrench,
    cloud: Cloud,
    puzzle: Puzzle,
    monitor: Monitor,
    brain: Brain,
    camera: Camera,
    package: Package,
    bookOpen: BookOpen,
    target: Target,
    terminal: Terminal,
    bot: Bot,
    fileSearch: FileSearch,
    shield: Shield,
    alertTriangle: AlertTriangle,
    lock: Lock,
    globe: Globe,
    shieldAlert: ShieldAlert,
    shieldCheck: ShieldCheck,
    construction: Construction,
    barChart: BarChart,
    radio: Radio,
    flaskConical: FlaskConical,
    trendingUp: TrendingUp,
    trendingDown: TrendingDown,
    lightbulb: Lightbulb,
    palette: Palette,
    smartphone: Smartphone,
    coffee: Coffee,
    database: Database,
    sparkles: Sparkles,
    activity: Activity,
    microscope: Microscope,
    bug: Bug,
    settings: Settings,
    trophy: Trophy,
    factory: Factory,
    cpu: Cpu,
    externalLink: ExternalLink,
    github: Github,
    chevronDown: ChevronDown,
    chevronUp: ChevronUp,
    tag: Tag,
    layers: Layers,
    alertCircle: AlertCircle,
    fileText: FileText,
    folderKanban: FolderKanban,
};

export type IconName = keyof typeof IconMap;

interface DynamicIconProps extends LucideProps {
    name: string; // Allow string to be passed from data
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
    const IconComponent = IconMap[name as IconName];

    if (!IconComponent) {
        // Fallback or just return null if icon name is not found
        console.warn(`Icon "${name}" not found in IconMap`);
        return <HelpCircle {...props} />;
    }

    return <IconComponent {...props} />;
}

import { HelpCircle } from "lucide-react";
