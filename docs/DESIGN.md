---
name: Avant Print Studio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e9bcb8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#af8783'
  outline-variant: '#5e3f3c'
  surface-tint: '#ffb3ad'
  primary: '#ffb3ad'
  on-primary: '#680008'
  primary-container: '#ff544e'
  on-primary-container: '#5c0006'
  inverse-primary: '#c00019'
  secondary: '#eec068'
  on-secondary: '#412d00'
  secondary-container: '#755400'
  on-secondary-container: '#f9ca71'
  tertiary: '#6dd3fc'
  on-tertiary: '#003546'
  tertiary-container: '#289cc3'
  on-tertiary-container: '#002e3d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#930010'
  secondary-fixed: '#ffdea6'
  secondary-fixed-dim: '#eec068'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#bde9ff'
  tertiary-fixed-dim: '#6dd3fc'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#004d64'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-black: '#0A0A0A'
  surface-charcoal: '#121212'
  surface-card: '#181818'
  border-subtle: '#262626'
  border-strong: '#404040'
  pure-white: '#FFFFFF'
  text-muted: '#8E8E93'
  crimson-glow: rgba(255, 31, 45, 0.15)
  gold-badge: '#D4A853'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  metric-num:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-uppercase:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.14em
  button-text:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.06em
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system reimagines high-volume packaging manufacturing into an avant-garde printing atelier. It targets ambitious founders, creative directors, and corporate brand leaders seeking bespoke physical presence rather than generic commoditized print runs.

The aesthetic fuses modern industrial brutalism with hyper-contemporary digital craftsmanship. It replaces dated corporate print tropes with stark monochromatic foundations, razor-sharp architectural layout grids, high-impact mechanical typography, and electric crimson signals. The UI evokes factory-floor precision, intense focus, tangible paper weight, and uncompromising confidence.

## Colors

The color palette is rooted in absolute tonal contrast. The canvas relies on `#0A0A0A` and `#121212` to create an immersive, low-noise industrial dark room. 

- **Primary (`#FF1F2D`)**: An unapologetic electric crimson. Reserved for high-priority user actions, flash tags, status markers, and active interactive borders.
- **Secondary (`#D4A853`)**: A refined matte metallic gold applied exclusively to corporate gifting, luxury stock certifications, and premium tier signifiers.
- **Neutrals & Surfaces**: Structural tiers ascend from `#0A0A0A` (canvas base) to `#121212` (structural panels) and `#181818` (interactive cards and modules). Contrast is maintained through pure white (`#FFFFFF`) display text and disciplined `#8E8E93` secondary labels.
- **Borders**: Defined cleanly via `#262626` for background grids and `#404040` for card boundaries, establishing physical containment without gratuitous shadows.

## Typography

Typography establishes an intentional tension between expressive display geometry and technical utilitarian data:

- **Headlines (Syne)**: Selected for its sculptural curves, wide tracking stance, and avant-garde presence. Render primary headlines in tight tracking to mimic poster typography and hot-metal typesetting.
- **Body & Labels (Space Grotesk)**: Provides an engineered, precise monospaced-adjacent sensibility while maintaining optimal reading comfort. 
- **Industrial Metrics**: Numeric counters, dimensions, turnarounds, and unit pricing are rendered in bold Syne figures anchored by micro uppercase labels in Space Grotesk.
- **Case Rule**: Structural category headers, process sequence markers, and utility chips must be styled in full uppercase (`letter-spacing: 0.14em`).

## Layout & Spacing

The layout is built on an architectural 12-column modular grid with strict full-bleed border partitions.

- **Grid Architecture**: 12 columns on desktop (1280px+), 8 columns on tablet (768px - 1024px), and 4 columns on mobile (<768px). Outer canvas gutters are pinned strictly at `3rem` on desktop and compress to `1.25rem` on mobile devices.
- **Monolithic Framing**: Modules abut directly against each other separated by `1px` structural borders (`#262626`) rather than floating with standard card gutters, creating an industrial, print-press panel aesthetic.
- **Rhythm**: Vertical section spacing moves in deliberate intervals of `4rem` and `6rem`. Tight information groups (specs, pricing points, bullet metrics) rely on compact intervals (`0.5rem` to `1rem`).

## Elevation & Depth

This system intentionally rejects soft atmospheric shadows, skeuomorphic bevels, and blurry frosted glass. Depth is communicated strictly via tonal stepped layers and hard-edge linework:

1. **Base Layer (Ground)**: Deep matte `#0A0A0A`. Represents the unprinted press bed.
2. **Container Tier (Substrate)**: `#121212` with a mandatory `1px` continuous border in `#262626`.
3. **Hover & Interactive State**: Surfaces step to `#181818`, and the border shifts instantly to either crisp `#FFFFFF` or `#FF1F2D`. Zero box-shadow blur.
4. **Hard Accent Offset**: High-emphasis elements or floating tags use a brutalist `3px 3px 0px #FF1F2D` hard geometric drop block instead of feathered blur shadows.

## Shapes

The roundedness level is strictly **0 (Sharp)** across every element in the design system.

- Every button, input field, modal sheet, badge tag, image frame, and product showcase card features crisp 90-degree 0px corners.
- This zero-radius mandate echoes raw industrial sheet cutters, guillotine trimmers, and architectural print plates. Corner bevels or pill shapes are prohibited.

## Components

### Buttons
- **Primary Action**: Solid `#FF1F2D` background, `#FFFFFF` Space Grotesk text, uppercase with `0.06em` tracking. Sharp 0px corners. Padding: `14px 28px`. Hover state: background transforms to `#FFFFFF` with `#0A0A0A` text; transition is snappy (100ms linear).
- **Secondary / Ghost Action**: `#0A0A0A` background with a rigid `1px solid #404040` border and `#FFFFFF` text. Hover state: border color switches to `#FF1F2D` with subtle crimson flood glow (`#181818`).
- **Gifting / Luxury CTA**: Solid `#D4A853` with `#0A0A0A` text, used exclusively for executive gifting collections.

### Product & Showcase Cards
- Flat `#121212` surface bounded by a `1px solid #262626` outline.
- **Image Treatment**: Pure photography without simulated 3D perspectives or artificial phone mockups. Clean studio lighting showcasing raw box craft, foil stamps, spot UV, and die-cut edges.
- **Hover Motion**: The card outline snaps to `#FF1F2D` and the inner image scales subtly (`scale(1.02)`) within an `overflow: hidden` bounding box.

### Badges & Technical Chips
- Sharp rectangular chips (`padding: 4px 8px`).
- **Standard**: `#181818` background, `1px solid #333333`, `#8E8E93` Space Grotesk uppercase text (`11px`).
- **Signal / Urgency**: `#FF1F2D` background with `#FFFFFF` text.
- **Tier Label**: Outlined `#D4A853` border with `#D4A853` text.

### Metric Callouts
- Stacked structural blocks. Headline metric rendered in Syne `metric-num` (`56px`, `#FFFFFF`), accented by an electric red index marker (e.g., `01`, `02`) or a red decimal/symbol, anchored by a mono-styled uppercase description underneath in `#8E8E93`.

### Input Fields
- Dark input fields (`#0E0E0E`) with `1px solid #333333` border and zero radius.
- Height: `52px` with horizontal padding of `16px`.
- Active/Focus: Border snaps to `1px solid #FF1F2D`. Carat color is `#FF1F2D`. Placeholder text sits in `#555555` Space Grotesk.

### Checkbox & Radio Controls
- Rigid 16x16px boxes with `1px solid #404040` borders and 0px radius.
- Selected state fills completely with `#FF1F2D`, containing an unadorned square interior check or inner black solid mark.