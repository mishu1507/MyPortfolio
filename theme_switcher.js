const fs = require('fs');
const path = require('path');

const dirPath = path.join('d:', 'project', 'webapp for me', 'src');

const colorMap = [
    { pattern: /#F4F8FF/gi, replacement: '#050505' },
    { pattern: /#1A2238/gi, replacement: '#F8FAFC' },
    { pattern: /#8896B3/gi, replacement: '#94A3B8' },
    { pattern: /#4A5568/gi, replacement: '#94A3B8' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.85\)/gi, replacement: 'rgba(15, 23, 42, 0.6)' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.8\)/gi, replacement: 'rgba(15, 23, 42, 0.5)' },
    { pattern: /rgba\(238,\s*243,\s*255,\s*0\.95\)/gi, replacement: 'rgba(30, 41, 59, 0.7)' },
    { pattern: /rgba\(214,\s*224,\s*245,\s*0\.6\)/gi, replacement: 'rgba(51, 65, 85, 0.5)' },
    { pattern: /rgba\(214,\s*224,\s*245,\s*0\.4\)/gi, replacement: 'rgba(51, 65, 85, 0.4)' },
    { pattern: /rgba\(214,\s*224,\s*245,\s*0\.5\)/gi, replacement: 'rgba(51, 65, 85, 0.5)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*0\.03\)/gi, replacement: 'rgba(255, 255, 255, 0.03)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*0\.05\)/gi, replacement: 'rgba(255, 255, 255, 0.05)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*0\.06\)/gi, replacement: 'rgba(255, 255, 255, 0.06)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*0\.08\)/gi, replacement: 'rgba(255, 255, 255, 0.08)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*0\.12\)/gi, replacement: 'rgba(255, 255, 255, 0.12)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*0\.1[^\d]/gi, replacement: 'rgba(255, 255, 255, 0.1)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*0\.95\)/gi, replacement: 'rgba(15, 23, 42, 0.85)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*0\.9\)/gi, replacement: 'rgba(15, 23, 42, 0.8)' },
    { pattern: /rgba\(26,\s*34,\s*56,\s*1\)/gi, replacement: 'rgba(30, 41, 59, 1)' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.92\)/gi, replacement: 'rgba(15, 23, 42, 0.85)' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.95\)/gi, replacement: 'rgba(15, 23, 42, 0.90)' },
    { pattern: /#5B8CFF/gi, replacement: '#38BDF8' },
    { pattern: /#7ED7C1/gi, replacement: '#2DD4BF' },
    { pattern: /#FFB86B/gi, replacement: '#FBBF24' },
    { pattern: /#FF6B9D/gi, replacement: '#F472B6' },
    { pattern: /#6BCB77/gi, replacement: '#34D399' },
    { pattern: /#A0AEC0/gi, replacement: '#64748B' },
];

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            if (path.basename(fullPath) === 'BootScreen.tsx') continue;

            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content;

            for (const { pattern, replacement } of colorMap) {
                newContent = newContent.replace(pattern, replacement);
            }

            if (newContent !== content) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated ' + fullPath);
            }
        }
    }
}

walkDir(dirPath);
console.log('Done.');
