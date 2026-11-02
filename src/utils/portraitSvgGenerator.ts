import { EducatorProfile, ArchiveItem } from '../types/museum';

/**
 * Tạo hình ảnh chân dung nghệ thuật phong cách Bảo tàng Di sản (SVG Data URI chất lượng cao)
 * cho từng nhà giáo khi chưa có ảnh chụp lưu trữ hoặc dùng làm tranh sơn mài/khắc gỗ minh họa trang trọng.
 */
export function generateEducatorPortraitDataUri(educator: EducatorProfile): string {
  if (educator.customPortraitUrl) {
    return educator.customPortraitUrl;
  }

  const { bgPrimary, bgSecondary, accentColor, attireType, symbolIcon, inscription } = educator.portraitStyle;
  const initials = educator.fullName
    .split(' ')
    .slice(-2)
    .map((w) => w[0])
    .join('');

  // Silhouette & attire details based on historical era
  let attirePath = '';
  let headwearPath = '';

  if (attireType === 'confucian_scholar') {
    // Khăn đóng / mũ cánh chuồn / áo giao lĩnh truyền thống
    headwearPath = `
      <path d="M160 112 C160 82, 240 82, 240 112 L248 132 L152 132 Z" fill="#1C1917" stroke="${accentColor}" stroke-width="2"/>
      <path d="M168 96 L232 96" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="4 2"/>
    `;
    attirePath = `
      <path d="M95 380 C102 275, 145 242, 200 242 C255 242, 298 275, 305 380 Z" fill="#291D16" stroke="${accentColor}" stroke-width="2.5"/>
      <path d="M165 242 L200 315 L235 242" fill="none" stroke="${accentColor}" stroke-width="4"/>
      <path d="M175 242 L205 325" fill="none" stroke="#F8F5EC" stroke-width="2" opacity="0.7"/>
    `;
  } else if (attireType === 'resistance_educator') {
    // Áo kaki / sơ mi giản dị thời kỳ kháng chiến & kiến quốc
    headwearPath = `
      <path d="M162 122 C164 92, 236 92, 238 122 C230 108, 170 108, 162 122 Z" fill="#27272A"/>
    `;
    attirePath = `
      <path d="M105 380 C112 280, 150 246, 200 246 C250 246, 288 280, 295 380 Z" fill="#3F3F2C" stroke="${accentColor}" stroke-width="2"/>
      <path d="M172 246 L200 288 L228 246" fill="#E5D9BE" opacity="0.85"/>
      <line x1="200" y1="288" x2="200" y2="375" stroke="${accentColor}" stroke-width="2"/>
      <rect x="138" y="302" width="32" height="26" rx="2" fill="none" stroke="${accentColor}" stroke-width="1.5"/>
      <rect x="230" y="302" width="32" height="26" rx="2" fill="none" stroke="${accentColor}" stroke-width="1.5"/>
    `;
  } else if (attireType === 'academic_gown') {
    // Âu phục học giả / giáo sư cận hiện đại
    headwearPath = `
      <path d="M164 120 C166 90, 234 90, 236 120 Z" fill="#1E293B"/>
    `;
    attirePath = `
      <path d="M100 380 C110 278, 150 245, 200 245 C250 245, 290 278, 300 380 Z" fill="#0F172A" stroke="${accentColor}" stroke-width="2"/>
      <polygon points="175,245 200,320 225,245" fill="#F8F5EC"/>
      <polygon points="195,265 205,265 203,322 197,322" fill="#8C1D24"/>
      <path d="M162 245 L188 320 L200 320" fill="none" stroke="${accentColor}" stroke-width="2"/>
      <path d="M238 245 L212 320 L200 320" fill="none" stroke="${accentColor}" stroke-width="2"/>
    `;
  } else {
    // Trang phục nhà giáo hiện đại / truyền cảm hứng
    headwearPath = `
      <path d="M164 120 C168 92, 232 92, 236 120 Z" fill="#1E1B18"/>
    `;
    attirePath = `
      <path d="M105 380 C114 280, 152 246, 200 246 C248 246, 286 280, 295 380 Z" fill="#1E293B" stroke="${accentColor}" stroke-width="2"/>
      <polygon points="176,246 200,305 224,246" fill="#FCFBF7"/>
      <polygon points="196,262 204,262 202,315 198,315" fill="${accentColor}"/>
    `;
  }

  let motifSvg = '';
  if (symbolIcon === 'scroll') {
    motifSvg = `<path d="M315 65 H355 V115 H315 Z" fill="none" stroke="${accentColor}" stroke-width="2"/><line x1="323" y1="80" x2="347" y2="80" stroke="${accentColor}" stroke-width="1.5"/><line x1="323" y1="92" x2="347" y2="92" stroke="${accentColor}" stroke-width="1.5"/>`;
  } else if (symbolIcon === 'brush') {
    motifSvg = `<path d="M335 55 L342 105 L335 120 L328 105 Z" fill="none" stroke="${accentColor}" stroke-width="2"/>`;
  } else if (symbolIcon === 'lotus') {
    motifSvg = `<circle cx="335" cy="88" r="22" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M335 70 C343 82, 343 96, 335 106 C327 96, 327 82, 335 70 Z" fill="none" stroke="${accentColor}" stroke-width="2"/>`;
  } else {
    motifSvg = `<rect x="316" y="68" width="38" height="44" rx="3" fill="none" stroke="${accentColor}" stroke-width="2"/><line x1="335" y1="68" x2="335" y2="112" stroke="${accentColor}" stroke-width="1.5"/>`;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
    <defs>
      <radialGradient id="bgGrad" cx="50%" cy="38%" r="70%">
        <stop offset="0%" stop-color="${bgSecondary}" />
        <stop offset="100%" stop-color="${bgPrimary}" />
      </radialGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#DFC17B" />
        <stop offset="50%" stop-color="${accentColor}" />
        <stop offset="100%" stop-color="#8A6421" />
      </linearGradient>
    </defs>

    <!-- Background Canvas -->
    <rect width="400" height="500" fill="url(#bgGrad)" />

    <!-- Subtle Traditional Geometric Halo & Pattern -->
    <circle cx="200" cy="185" r="118" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" opacity="0.35" />
    <circle cx="200" cy="185" r="98" fill="none" stroke="url(#goldGrad)" stroke-width="0.8" stroke-dasharray="6 4" opacity="0.45" />

    <!-- Heritage Corner Ornaments -->
    <path d="M18 18 H68 M18 18 V68" stroke="url(#goldGrad)" stroke-width="3" fill="none" />
    <path d="M382 18 H332 M382 18 V68" stroke="url(#goldGrad)" stroke-width="3" fill="none" />
    <path d="M18 482 H68 M18 482 V432" stroke="url(#goldGrad)" stroke-width="3" fill="none" />
    <path d="M382 482 H332 M382 482 V432" stroke="url(#goldGrad)" stroke-width="3" fill="none" />
    <rect x="12" y="12" width="376" height="476" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" opacity="0.55" />

    <!-- Vertical Classical Inscription Calligraphic Seal -->
    <rect x="38" y="58" width="36" height="128" rx="4" fill="#8C1D24" opacity="0.88" stroke="url(#goldGrad)" stroke-width="1.2" />
    <text x="56" y="95" text-anchor="middle" fill="#FCFBF7" font-family="Playfair Display, Georgia, serif" font-size="13" font-weight="bold">${inscription.slice(0, 4)}</text>
    <text x="56" y="122" text-anchor="middle" fill="#DFC17B" font-family="Be Vietnam Pro, sans-serif" font-size="10">${initials}</text>
    <text x="56" y="165" text-anchor="middle" fill="#FCFBF7" font-family="Be Vietnam Pro, sans-serif" font-size="9" opacity="0.85">DI SẢN</text>

    <!-- Symbol Motif Top Right -->
    ${motifSvg}

    <!-- Portrait Bust & Attire -->
    ${attirePath}

    <!-- Neck & Head -->
    <rect x="184" y="215" width="32" height="36" rx="8" fill="#E6C699" />
    <ellipse cx="200" cy="170" rx="44" ry="54" fill="#EAD0A8" stroke="url(#goldGrad)" stroke-width="2" />

    <!-- Dignified Facial Features -->
    <path d="M178 156 Q186 151 194 156" fill="none" stroke="#3B281B" stroke-width="2.2" stroke-linecap="round" />
    <path d="M206 156 Q214 151 222 156" fill="none" stroke="#3B281B" stroke-width="2.2" stroke-linecap="round" />
    <circle cx="186" cy="164" r="3" fill="#261910" />
    <circle cx="214" cy="164" r="3" fill="#261910" />
    <path d="M200 164 L198 184 L204 186" fill="none" stroke="#6B4C35" stroke-width="1.8" stroke-linecap="round" />
    <path d="M188 198 Q200 204 212 198" fill="none" stroke="#523927" stroke-width="2" stroke-linecap="round" />

    ${headwearPath}

    <!-- Classical Beard for Ancient Scholars -->
    ${
      attireType === 'confucian_scholar'
        ? `<path d="M186 208 Q200 258 214 208" fill="none" stroke="#D6D3D1" stroke-width="3" opacity="0.85" />`
        : ''
    }

    <!-- Museum Brass Nameplate at Bottom -->
    <rect x="26" y="378" width="348" height="92" rx="6" fill="#0B1324" opacity="0.95" stroke="url(#goldGrad)" stroke-width="2" />
    <line x1="48" y1="418" x2="352" y2="418" stroke="url(#goldGrad)" stroke-width="0.8" opacity="0.5" />
    <text x="200" y="406" text-anchor="middle" fill="#FCFBF7" font-family="Playfair Display, Georgia, serif" font-size="18" font-weight="bold">${educator.fullName.toUpperCase()}</text>
    <text x="200" y="438" text-anchor="middle" fill="#DFC17B" font-family="Be Vietnam Pro, sans-serif" font-size="12" font-weight="600">${educator.birthDeathYears} • ${educator.hometown}</text>
    <text x="200" y="458" text-anchor="middle" fill="#CBD5E1" font-family="Be Vietnam Pro, sans-serif" font-size="11">${educator.honorificTitle.slice(0, 46)}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Tạo hình minh họa tư liệu lưu trữ (bia đá, sắc phong, trang sách cổ, ảnh tư liệu lớp học)
 */
export function generateArchiveVisualDataUri(item: ArchiveItem): string {
  const { bgColor, borderColor, caption } = item.visualTheme;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 320" width="480" height="320">
    <rect width="480" height="320" fill="${bgColor}" />
    <rect x="14" y="14" width="452" height="292" fill="none" stroke="${borderColor}" stroke-width="2" />
    <rect x="22" y="22" width="436" height="276" fill="none" stroke="${borderColor}" stroke-width="0.8" stroke-dasharray="5 3" />

    <!-- Archival Stamp -->
    <rect x="350" y="34" width="94" height="32" rx="4" fill="#8C1D24" opacity="0.9" />
    <text x="397" y="54" text-anchor="middle" fill="#FCFBF7" font-family="Be Vietnam Pro, sans-serif" font-size="10" font-weight="bold">TƯ LIỆU SỐ HÓA</text>

    <!-- Document Lines / Visual Representation -->
    <g opacity="0.22" stroke="${borderColor}" stroke-width="1.5">
      <line x1="48" y1="85" x2="290" y2="85" />
      <line x1="48" y1="108" x2="420" y2="108" />
      <line x1="48" y1="131" x2="395" y2="131" />
      <line x1="48" y1="154" x2="410" y2="154" />
      <line x1="48" y1="177" x2="340" y2="177" />
    </g>

    <!-- Title & Metadata Plate -->
    <text x="44" y="62" fill="#DFC17B" font-family="Be Vietnam Pro, sans-serif" font-size="11" font-weight="600">${item.yearOrPeriod}</text>
    <text x="240" y="145" text-anchor="middle" fill="#FCFBF7" font-family="Playfair Display, Georgia, serif" font-size="20" font-weight="bold">${item.title.slice(0, 38)}</text>
    <text x="240" y="175" text-anchor="middle" fill="#DFC17B" font-family="Be Vietnam Pro, sans-serif" font-size="13">${caption}</text>

    <rect x="36" y="228" width="408" height="54" rx="4" fill="#070C17" opacity="0.85" stroke="${borderColor}" stroke-width="1" />
    <text x="240" y="250" text-anchor="middle" fill="#E2E8F0" font-family="Be Vietnam Pro, sans-serif" font-size="11">Nguồn lưu trữ: ${item.authorOrRepository.slice(0, 52)}</text>
    <text x="240" y="269" text-anchor="middle" fill="#94A3B8" font-family="Be Vietnam Pro, sans-serif" font-size="10">Quyền sử dụng: ${item.usageRights.slice(0, 55)}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
