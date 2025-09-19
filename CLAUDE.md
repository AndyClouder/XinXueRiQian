# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a "心学日签" (Heart Learning Daily Quote) website - a minimalist Chinese philosophy application that provides daily quotes from Wang Yangming's teachings based on the user's current mood/state of mind.

## Development Commands

### Local Development
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Testing
Open `test.html` in a browser to see completed features and testing information.

## Architecture & Code Structure

### Core Architecture
- **Pure frontend application**: No build tools, package.json, or dependencies
- **Vanilla JavaScript**: All functionality in single `script.js` file
- **CSS design system**: Comprehensive design tokens in `style.css`
- **Single-page application**: All content in `index.html`

### Key Components

**Data Structure** (`script.js:2-197`):
- `yangmingFortunes`: Main data object containing quotes organized by 6 moods
- Each quote contains: `text`, `source`, `explanation`, `application`
- 30 total quotes across 6 mood categories

**State Management** (`script.js:198-230`):
- `selectedMood`: Currently selected mood state
- `isDrawing`: Animation state
- DOM element references for all interactive components
- Canvas context for poster generation

**Core Functions**:
- `selectMood()`: Mood selection handling and visual feedback
- `drawFortune()`: Main fortune drawing animation logic
- `showFortune()`: Display selected fortune with writing animation
- `showExplanation()` / `showApplication()`: Progressive content reveal
- `generatePoster()` / `drawPoster()`: Canvas-based poster generation

### Design System (`style.css:1-50`)

**CSS Variables**:
- Color system with mood-specific gradients
- Typography stack using Chinese fonts (宋体, 楷体)
- Spacing and shadow systems
- Animation timing variables

**Mood-Based Theming**:
- Each mood has unique gradient colors
- Dynamic logo color updates based on selection
- Consistent visual language across all states

### Interaction Patterns

**Progressive Disclosure**: Fortune → Explanation → Application with progress indicators

**Keyboard Shortcuts**:
- Space: Draw fortune (after mood selection)
- R: Reset/Redraw
- 1-6: Quick mood selection

**Touch Support**: Swipe gestures for mobile navigation

## File Structure
```
├── index.html          # Main application
├── script.js           # All JavaScript logic (~900 lines)
├── style.css           # Complete styling system
├── test.html           # Feature testing page
├── phase1-demo.html    # Demo page
└── README.md           # Project documentation
```

## Development Notes

**No Build Process**: This is a static site with no compilation, bundling, or dependencies. Edit files directly and refresh the browser.

**Chinese Typography**: The design uses traditional Chinese fonts and cultural aesthetics. Maintain the scholarly, minimalist visual style.

**Accessibility**: The app includes keyboard navigation, touch support, and clear visual feedback for all interactions.

**Animation System**: Uses CSS classes for smooth transitions. Key animations include fortune stick drawing, text writing effects, and mood selection feedback.

**Canvas Integration**: Poster generation uses HTML5 Canvas with Chinese typography and traditional design elements.