import os
import re

dir_path = r'd:\project\webapp for me\src'

color_map = {
    r'(?i)#F4F8FF': '#050505',               # Background -> Pure black/dark grey
    r'(?i)#1A2238': '#F8FAFC',               # Dark text -> Very light grey
    r'(?i)#8896B3': '#94A3B8',               # Muted text
    r'(?i)#4A5568': '#94A3B8',               # Body text
    r'(?i)rgba\(255,\s*255,\s*255,\s*0\.85\)': 'rgba(15, 23, 42, 0.6)',      # Glass background
    r'(?i)rgba\(255,\s*255,\s*255,\s*0\.8\)': 'rgba(15, 23, 42, 0.5)',       # Glass background slightly transparent
    r'(?i)rgba\(238,\s*243,\s*255,\s*0\.95\)': 'rgba(30, 41, 59, 0.7)',      # Glass hover
    r'(?i)rgba\(214,\s*224,\s*245,\s*0\.6\)': 'rgba(51, 65, 85, 0.5)',       # Glass borders
    r'(?i)rgba\(214,\s*224,\s*245,\s*0\.4\)': 'rgba(51, 65, 85, 0.4)',       # Dividers
    r'(?i)rgba\(214,\s*224,\s*245,\s*0\.5\)': 'rgba(51, 65, 85, 0.5)',       # Border
    r'(?i)rgba\(26,\s*34,\s*56,\s*0\.03\)': 'rgba(255, 255, 255, 0.03)',     
    r'(?i)rgba\(26,\s*34,\s*56,\s*0\.05\)': 'rgba(255, 255, 255, 0.05)',
    r'(?i)rgba\(26,\s*34,\s*56,\s*0\.06\)': 'rgba(255, 255, 255, 0.06)',
    r'(?i)rgba\(26,\s*34,\s*56,\s*0\.08\)': 'rgba(255, 255, 255, 0.08)',
    r'(?i)rgba\(26,\s*34,\s*56,\s*0\.1\)': 'rgba(255, 255, 255, 0.1)',
    r'(?i)rgba\(26,\s*34,\s*56,\s*0\.12\)': 'rgba(255, 255, 255, 0.12)',
    r'(?i)rgba\(255,\s*255,\s*255,\s*0\.92\)': 'rgba(15, 23, 42, 0.85)',     # Navigation bg
    r'(?i)rgba\(255,\s*255,\s*255,\s*0\.95\)': 'rgba(15, 23, 42, 0.90)',     # Mobile Navigation bg
    r'(?i)#5B8CFF': '#38BDF8', # Brighter blue for dark mode
    r'(?i)#7ED7C1': '#2DD4BF', # Brighter teal 
    r'(?i)#FFB86B': '#FBBF24', # Brighter amber
    r'(?i)#FF6B9D': '#F472B6', # Brighter pink
    r'(?i)#6BCB77': '#34D399', # Brighter green
    r'(?i)#A0AEC0': '#64748B', 
}

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css')) and file != 'BootScreen.tsx':
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for pattern, replacement in color_map.items():
                new_content = re.sub(pattern, replacement, new_content)
                
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")
print("Done.")
