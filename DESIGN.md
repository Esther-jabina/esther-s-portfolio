# Design Brief

## Direction
Warm Professional Serene — Modern portfolio for a fresh graduate web developer combining professional credibility with approachable warmth through light backgrounds, deep teal accents, and smooth micro-animations.

## Tone
Polished yet personable — crisp whites and soft greys with strategic teal accents create professional confidence without coldness; smooth animations add personality without distracting from content.

## Differentiation
Gradient text accent on hero name (teal-to-lighter-teal), staggered section fade-in animations on scroll, and elevated card hover states create a cohesive, memorable motion system throughout.

## Color Palette

| Token       | OKLCH              | Role                              |
| ----------- | ------------------ | --------------------------------- |
| background  | 0.98 0.004 230     | Cool off-white, primary surface   |
| foreground  | 0.18 0.012 230     | Dark slate, high contrast text    |
| card        | 1.0 0.002 230      | Pure white, elevated surfaces     |
| primary     | 0.45 0.16 200      | Deep teal, primary actions & hero |
| accent      | 0.6 0.15 170       | Lighter teal, secondary accents   |
| muted       | 0.94 0.008 230     | Light grey, section alternation   |
| destructive | 0.55 0.22 25       | Red, warning/error states         |

## Typography
- Display: Space Grotesk — bold headlines, hero name with gradient, section titles
- Body: Figtree — readable, friendly body copy and labels
- Scale: Hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, h3 `text-2xl md:text-3xl font-semibold`, body `text-base leading-relaxed`

## Elevation & Depth
Cards on white surface with subtle shadows (0 4px 12px teal-tinted); elevated on hover (0 8px 20px); no hard shadows — all softness maintains approachability.

## Structural Zones

| Zone    | Background         | Border              | Notes                               |
| ------- | ------------------ | ------------------- | ----------------------------------- |
| Header  | card (white)       | border-b, 1px light | Minimal, clean navbar               |
| Hero    | background         | —                   | Full-width gradient text on name    |
| Sections| alternating bg/muted| —                   | Content/muted/content for rhythm    |
| Cards   | card (white)       | subtle inner shadow | Hover: shadow-hover, scale 1.02     |
| Footer  | background         | border-t, 1px light | Centered, muted text                |

## Spacing & Rhythm
Spacious breathing room: `gap-8` between sections, `gap-4` within cards; micro-spacing `gap-2` for list items; section padding `py-16 md:py-20` maintains rhythm across responsive sizes.

## Component Patterns
- Buttons: bg-primary text-primary-foreground, rounded-md, hover:shadow-hover transition-smooth
- Cards: bg-card rounded-lg shadow-elevated hover:shadow-hover hover:scale-102, transition-smooth
- Badges: bg-accent/20 text-accent rounded-full px-3 py-1 text-xs font-semibold

## Motion
- Entrance: fade-in-up (0.6s staggered per section)
- Hover: card scale 1.02 + shadow elevation (0.3s smooth)
- Link hover: text-color → primary, underline appears (0.2s smooth)
- No bounce, no jank — all easing via cubic-bezier(0.4, 0, 0.2, 1)

## Constraints
- No gradients on backgrounds — only on text accents (hero name)
- No dark mode toggle until explicitly requested — light mode is primary
- All animations use transition-smooth class or keyframes
- Never override primary/accent colors with arbitrary hex values

## Signature Detail
Gradient text effect on the hero name creates immediate visual hierarchy and memorable brand moment; paired with staggered section animations, it establishes a smooth, premium feel for a fresh graduate portfolio.
