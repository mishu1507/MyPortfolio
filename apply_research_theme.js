const fs = require('fs');
const path = require('path');

const dirPath = path.join('d:', 'project', 'webapp for me', 'src');

const colorMap = [
    // Backgrounds
    { pattern: /#050505/gi, replacement: '#0F172A' },

    // Text colors
    { pattern: /#F8FAFC/gi, replacement: '#E6EDF7' },
    { pattern: /#94A3B8/gi, replacement: '#9FB0C9' },
    { pattern: /#64748B/gi, replacement: '#6B7C96' },

    // Accents
    { pattern: /#38BDF8/gi, replacement: '#3A7DFF' }, // Primary
    { pattern: /#2DD4BF/gi, replacement: '#6EC2B3' }, // Secondary
    { pattern: /#FBBF24/gi, replacement: '#E6A15A' }, // Highlight (was warning/accent)
    { pattern: /#F472B6/gi, replacement: '#D9A441' }, // Warning
    { pattern: /#34D399/gi, replacement: '#5FAF7A' }, // Success

    // Surface & Glass Backgrounds (converting Tailwind typicals to the requested hexes)
    // #162033 = rgb(22, 32, 51)
    // #1C2740 = rgb(28, 39, 64)
    // #2A3958 = rgb(42, 57, 88)

    { pattern: /rgba\(15,\s*23,\s*42,\s*0\.6\)/gi, replacement: 'rgba(22, 32, 51, 0.8)' },
    { pattern: /rgba\(15,\s*23,\s*42,\s*0\.5\)/gi, replacement: 'rgba(22, 32, 51, 0.6)' },
    { pattern: /rgba\(30,\s*41,\s*59,\s*0\.7\)/gi, replacement: 'rgba(28, 39, 64, 0.9)' },
    { pattern: /rgba\(30,\s*41,\s*59,\s*1\)/gi, replacement: 'rgba(28, 39, 64, 1)' },
    { pattern: /rgba\(51,\s*65,\s*85,\s*0\.5\)/gi, replacement: 'rgba(42, 57, 88, 0.6)' },
    { pattern: /rgba\(51,\s*65,\s*85,\s*0\.4\)/gi, replacement: 'rgba(42, 57, 88, 0.5)' },

    // Low opacity overlays (using #6B7C96 -> rgb(107, 124, 150) for white overlays)
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.03\)/gi, replacement: 'rgba(107, 124, 150, 0.05)' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.05\)/gi, replacement: 'rgba(107, 124, 150, 0.1)' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.06\)/gi, replacement: 'rgba(107, 124, 150, 0.12)' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.08\)/gi, replacement: 'rgba(107, 124, 150, 0.15)' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.12\)/gi, replacement: 'rgba(107, 124, 150, 0.2)' },
    { pattern: /rgba\(255,\s*255,\s*255,\s*0\.1[^\d]/gi, replacement: 'rgba(107, 124, 150, 0.15)' },

    // Also tone down remaining white text where appropriate
    { pattern: /text-white/gi, replacement: 'text-[#E6EDF7]' },
    { pattern: /text-gray-300/gi, replacement: 'text-[#9FB0C9]' },
    { pattern: /text-gray-400/gi, replacement: 'text-[#6B7C96]' },

    // Also remap the green output in BootScreen (old #10B981 to #5FAF7A)
    { pattern: /#10B981/gi, replacement: '#5FAF7A' },
];

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
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
console.log('Done applying Research Notebook theme.');
