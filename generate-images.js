const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'lib', 'articles');
const outputDir = path.join(__dirname, 'public', 'images', 'articles');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Color schemes and themed icons by category
const categoryThemes = {
  'freelancing': {
    primary: '#3b82f6',
    secondary: '#1d4ed8',
    glow: '#60a5fa',
    badge: '💼 FREELANCING & CLIENTS',
    icon: '💼',
    graphic: 'portfolio'
  },
  'online-jobs': {
    primary: '#0ea5e9',
    secondary: '#0369a1',
    glow: '#38bdf8',
    badge: '🖥️ LEGITIMATE ONLINE JOBS',
    icon: '🖥️',
    graphic: 'desk'
  },
  'remote-work': {
    primary: '#10b981',
    secondary: '#047857',
    glow: '#34d399',
    badge: '🏠 REMOTE WORK & CAREERS',
    icon: '🏠',
    graphic: 'remote'
  },
  'paid-research': {
    primary: '#8b5cf6',
    secondary: '#6d28d9',
    glow: '#a78bfa',
    badge: '🔬 PAID SURVEYS & STUDIES',
    icon: '🔬',
    graphic: 'research'
  },
  'microtasks': {
    primary: '#14b8a6',
    secondary: '#0f766e',
    glow: '#2dd4bf',
    badge: '✅ MICROTASKS & REWARDS',
    icon: '✅',
    graphic: 'check'
  },
  'website-app-testing': {
    primary: '#f97316',
    secondary: '#c2410c',
    glow: '#fb923c',
    badge: '🧪 APP & USABILITY TESTING',
    icon: '🧪',
    graphic: 'test'
  },
  'digital-skills': {
    primary: '#6366f1',
    secondary: '#4338ca',
    glow: '#818cf8',
    badge: '🎓 MARKETABLE DIGITAL SKILLS',
    icon: '🎓',
    graphic: 'skills'
  },
  'ai-productivity': {
    primary: '#a855f7',
    secondary: '#7e22ce',
    glow: '#c084fc',
    badge: '🤖 AI TOOLS & PRODUCTIVITY',
    icon: '🤖',
    graphic: 'ai'
  },
  'side-hustles': {
    primary: '#f59e0b',
    secondary: '#b45309',
    glow: '#fbbf24',
    badge: '💡 SIDE HUSTLES & EARNING',
    icon: '💡',
    graphic: 'money'
  },
  'personal-finance': {
    primary: '#10b981',
    secondary: '#059669',
    glow: '#34d399',
    badge: '💰 FINANCE & PAYOUTS',
    icon: '💰',
    graphic: 'wallet'
  },
  'android-apps': {
    primary: '#22c55e',
    secondary: '#15803d',
    glow: '#4ade80',
    badge: '📱 ANDROID APPS & TOOLS',
    icon: '📱',
    graphic: 'phone'
  }
};

const defaultTheme = {
  primary: '#0284c7',
  secondary: '#0369a1',
  glow: '#38bdf8',
  badge: '📚 EARNWISEHUB GUIDE',
  icon: '📚',
  graphic: 'default'
};

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text, maxCharsPerLine = 38) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines.slice(0, 3); // Max 3 lines
}

function generateSvg({ title, category, featuredImage }) {
  const theme = categoryThemes[category] || defaultTheme;
  const safeTitle = escapeXml(title);
  const lines = wrapText(title, 34);

  let titleTspans = '';
  lines.forEach((line, index) => {
    const yOffset = index === 0 ? 0 : 52;
    titleTspans += `<tspan x="80" dy="${yOffset}">${escapeXml(line)}</tspan>\n`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f2937" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#111827" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${theme.primary}" />
      <stop offset="100%" stop-color="${theme.glow}" />
    </linearGradient>

    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.6"/>
    </filter>

    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" stroke-width="0.7" opacity="0.3" />
    </pattern>
  </defs>

  <!-- Deep Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Ambient Light Orbs -->
  <circle cx="200" cy="120" r="280" fill="${theme.primary}" opacity="0.12" filter="blur(80px)"/>
  <circle cx="1050" cy="500" r="300" fill="${theme.glow}" opacity="0.1" filter="blur(90px)"/>

  <!-- Main Showcase Container -->
  <g transform="translate(60, 50)" filter="url(#cardShadow)">
    <rect width="1080" height="530" rx="28" fill="url(#cardGrad)" stroke="#374151" stroke-width="1.5"/>

    <!-- Decorative Top Accent Line -->
    <rect x="0" y="0" width="1080" height="6" rx="3" fill="url(#brandGrad)"/>

    <!-- Top Badge Row -->
    <g transform="translate(80, 70)">
      <rect width="320" height="40" rx="20" fill="${theme.primary}" fill-opacity="0.15" stroke="${theme.primary}" stroke-opacity="0.4" stroke-width="1.5"/>
      <text x="25" y="25" fill="${theme.glow}" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="1">
        ${escapeXml(theme.badge)}
      </text>

      <!-- EarnWiseHub Brand Tag -->
      <g transform="translate(730, 6)">
        <text x="0" y="20" fill="#9ca3af" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">
          EarnWiseHub Official Guide
        </text>
      </g>
    </g>

    <!-- Headline (Title) -->
    <g transform="translate(0, 190)">
      <text fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="800" line-height="1.25">
        ${titleTspans}
      </text>
    </g>

    <!-- Visual Themed Footer Area -->
    <g transform="translate(80, 420)">
      <!-- Left Pill -->
      <rect width="190" height="42" rx="21" fill="#374151" fill-opacity="0.5" stroke="#4b5563" stroke-width="1"/>
      <circle cx="24" cy="21" r="6" fill="${theme.primary}"/>
      <text x="40" y="26" fill="#e5e7eb" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">
        100% Tested &amp; Free
      </text>

      <!-- Center Pill -->
      <g transform="translate(210, 0)">
        <rect width="180" height="42" rx="21" fill="#374151" fill-opacity="0.5" stroke="#4b5563" stroke-width="1"/>
        <text x="22" y="26" fill="#e5e7eb" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">
          Updated for 2026
        </text>
      </g>

      <!-- Right Themed Graphic / Icon Display -->
      <g transform="translate(720, -50)">
        <circle cx="80" cy="60" r="65" fill="${theme.primary}" fill-opacity="0.12" stroke="${theme.primary}" stroke-opacity="0.3" stroke-width="2"/>
        <text x="80" y="78" fill="#ffffff" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="48">
          ${theme.icon}
        </text>
      </g>
    </g>
  </g>
</svg>`;
}

// Read all articles
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.ts'));
let count = 0;

files.forEach(f => {
  const content = fs.readFileSync(path.join(articlesDir, f), 'utf8');
  const imgMatch = content.match(/featuredImage:\s*["']([^"']+)["']/);
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const catMatch = content.match(/category:\s*["']([^"']+)["']/);

  if (imgMatch && imgMatch[1]) {
    const imgPath = imgMatch[1];
    const fileName = path.basename(imgPath);
    const targetPath = path.join(outputDir, fileName);

    // If file already exists and was custom crafted (like the 2 we just made), preserve or skip if desired.
    // We will only generate if not existing, or update as needed.
    if (!fs.existsSync(targetPath)) {
      const title = titleMatch ? titleMatch[1] : path.basename(f, '.ts').replace(/-/g, ' ');
      const category = catMatch ? catMatch[1] : 'general';
      const svg = generateSvg({ title, category, featuredImage: imgPath });
      fs.writeFileSync(targetPath, svg, 'utf8');
      count++;
    }
  }
});

console.log(`Generated ${count} new SVG article images in ${outputDir}`);
