# CSS Refactor (branch: css-refactor)

## Summary
Refactored the main page styling to improve **visual hierarchy, responsiveness, and readability**.

## Changes

### Body
- Added `margin: 0` and `display: flex` for proper centering
- Used `justify-content` and `align-items` to center content vertically
- Added `position: relative` and a semi-transparent overlay (`body::before`) for better contrast with background image
- Added `backdrop-filter: blur(3px)` for a modern blurred overlay effect

### Container
- Made container semi-transparent with `rgba(255,255,255,0.88)`
- Added padding, width constraints, border-radius, and box-shadow for a card-like effect
- Added hover scale effect for subtle interactivity
- Adjusted positioning with `z-index` to stay above overlay

### Typography
- Updated `h1` and `h2` sizes and margins for better hierarchy
- Added color updates to improve contrast

### Buttons
- Changed buttons to `display: block` and width adjustments for responsiveness
- Added hover effects and smooth transitions
- Rounded corners and padding adjustments for better UX

### Save Element
- Adjusted margin, color, and line-height for readability

### Responsiveness
- Added `@media (max-width: 480px)` queries to adjust container padding, heading font sizes, and button widths for small screens

## Impact
- Improved visual appearance with modern UI effects
- Better readability and accessibility
- Fully responsive for mobile devices
