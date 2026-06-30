---
name: LoopCheck
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fd'
  surface-container: '#ededf8'
  surface-container-high: '#e7e7f2'
  surface-container-highest: '#e1e2ec'
  on-surface: '#191b23'
  on-surface-variant: '#434654'
  inverse-surface: '#2e3038'
  inverse-on-surface: '#f0f0fb'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#525f75'
  on-secondary: '#ffffff'
  secondary-container: '#d6e3fe'
  on-secondary-container: '#58657c'
  tertiary: '#7b2600'
  on-tertiary: '#ffffff'
  tertiary-container: '#a33500'
  on-tertiary-container: '#ffc6b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#d6e3fe'
  secondary-fixed-dim: '#bac7e1'
  on-secondary-fixed: '#0e1c2f'
  on-secondary-fixed-variant: '#3a475d'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812800'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ec'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  stack-sm: 0.25rem
  stack-md: 0.75rem
  stack-lg: 1.5rem
---

## Brand & Style

The design system is engineered for utility, precision, and high-density information management. It targets operations teams and technical stakeholders who require immediate, deterministic status updates without visual distraction. 

The aesthetic leans into **Modern Corporate Minimalism** with a focus on functional clarity. It prioritizes data legibility and system state over decorative elements. The emotional response is one of stability and reliability—using a structured grid and a disciplined color application to ensure that the UI feels like a professional tool rather than a consumer app.

## Colors

The palette is anchored by a trustworthy technical blue, used sparingly for primary actions and brand presence. The interface relies heavily on a range of cool neutrals to differentiate surface levels and secondary information.

- **Primary:** High-contrast blue for focus states and primary buttons.
- **Surface:** Light grays and whites to create a clean, layered environment.
- **Semantic:** Strict adherence to color meaning—Green (#1D893B) for "Ready/Active," Orange (#D97706) for "Paused/Warning," and Red (#D22D2D) for "Down/Error." 
- **Text:** Near-black (#172B4D) for high readability, with muted grays for metadata like timestamps.

## Typography

This design system utilizes **Inter** for its neutral, systematic qualities and exceptional legibility at small sizes. For technical strings, such as IDs or system logs, **JetBrains Mono** is introduced to provide clear character differentiation.

Hierarchy is established through weight and color rather than excessive scale. 
- Use `label-bold` for status indicators and table headers.
- Use `label-mono` for timestamps, version numbers, and hex codes.
- Ensure `body-md` is the default for all status descriptions and system notes.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a consistent dashboard feel, centering content within a 1280px max-width container. 

- **Grid:** 12-column layout with 16px (1rem) gutters.
- **Rhythm:** An 8px base unit (0.5rem) governs all padding and margin decisions.
- **Density:** Elements are packed with "Compact" density, reducing vertical whitespace to allow more data to be visible above the fold.
- **Mobile:** Reflows to a single column with 16px side margins. Cards span the full width of the screen minus margins.

## Elevation & Depth

To maintain a utilitarian feel, this design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and **Low-contrast Outlines**.

- **Level 0 (Background):** Used for the main application canvas (#F4F5F7).
- **Level 1 (Cards/Surface):** White (#FFFFFF) with a 1px solid border (#DFE1E6). No shadow.
- **Level 2 (Dropdowns/Modals):** White with a subtle, tight shadow (0px 4px 8px rgba(0,0,0,0.08)) to indicate interaction priority.
- **Active State:** Elements being dragged or interacted with receive a primary-colored 2px outline rather than a glow.

## Shapes

The shape language is "Soft" yet geometric. A consistent **4px (0.25rem)** corner radius is applied to almost all elements to provide a professional, modern finish without appearing overly "bubbly" or consumer-centric.

- **Buttons & Inputs:** 4px radius.
- **Status Chips:** 12px radius (semi-pill) to distinguish them from interactive buttons.
- **Cards:** 4px or 8px (0.5rem) radius depending on the visual hierarchy level.

## Components

### Buttons
- **Primary:** Solid #0052CC background, white text. Bold, 14px text.
- **Secondary:** Transparent background, 1px border (#DFE1E6), #172B4D text.
- **Ghost:** No border or background unless hovered. Use for low-priority actions in tables.

### Status Chips
- Small, non-interactive indicators. 
- **Ready:** Pale green background (#E3FCEF) with forest green text (#1D893B).
- **Warning:** Pale orange background (#FFFAE6) with dark orange text (#D97706).

### Compact Cards
- White background, 1px border (#DFE1E6).
- 16px internal padding.
- Use a 4px vertical color bar on the left edge to denote current status (Green, Orange, or Red).

### Input Fields
- 1px solid border (#DFE1E6).
- On focus: 2px solid #0052CC border.
- Background: #FFFFFF (Level 1) or #F4F5F7 (Level 0).

### Toggles
- Small, rectangular switches with 2px padding between the track and the thumb. 
- Track color: #DFE1E6 (Off), #0052CC (On).