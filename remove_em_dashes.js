const fs = require('fs');
const path = require('path');

const dirPath = path.join('d:', 'project', 'webapp for me', 'src');

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // Replace em dashes with en dashes or commas where appropriate
            let newContent = content
                .replace(/ —/g, " -") // Replace spaced em dash with spaced hyphen/en dash
                .replace(/— /g, "- ")
                .replace(/—/g, "-"); // Replace remaining em dashes with standard hyphens

            if (newContent !== content) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated ' + fullPath);
            }
        }
    }
}

walkDir(dirPath);
console.log('Done replacing em dashes.');
