# Portfolio - React + TypeScript (Vite)

A modern, responsive single-page portfolio application built with React, TypeScript, and Vite to present skills, experience, projects, and achievements.

## Overview

This portfolio is designed to provide a clean and professional user experience with smooth navigation, interactive UI components, and data-driven content sections.

## Live Demo

[View My Portfolio](https://aniruddha-25.github.io/Portfolio/)

## Technologies Used

### Core

- React
- TypeScript
- Vite

### UI and Styling

- CSS
- Font Awesome

### Integration

- EmailJS



## Why I Chose React and These Dependencies

### React

I chose React instead of plain HTML, CSS, and JavaScript because the project includes multiple reusable sections and interactive elements.

Key advantages:

- Reusable component architecture (Home, About, Skills, Projects, etc.)
- Cleaner state handling for modals, forms, and section navigation
- Better code organization and easier maintenance
- Scalable structure for future features
- Efficient UI rendering and updates




## React Built-In Functions Used

* **useState**: manages UI state (modal visibility, form fields, feedback status)
* **useEffect**: handles side effects (scroll behavior, navigation highlighting, lifecycle logic)
* **StrictMode**: helps surface development-time issues early


## Main Dependencies

```json
"version": "0.0.0",
"dependencies": {
  "@emailjs/browser": "^4.4.1",
  "@fortawesome/free-brands-svg-icons": "^7.2.0",
  "@fortawesome/free-regular-svg-icons": "^7.2.0",
  "@fortawesome/free-solid-svg-icons": "^7.2.0",
  "@fortawesome/react-fontawesome": "^3.3.0",
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```
## Dependency Roles (with Why Used)

* **@emailjs/browser**: sends feedback form submissions from frontend

    → Used to avoid building a backend and directly send emails from the client side

* **@fortawesome/react-fontawesome**: React wrapper for icons

    → Used to easily integrate icons as reusable React components

* **@fortawesome/free-solid-svg-icons**: UI/section/action icons

    → Used for consistent UI icons like navigation, buttons, and sections

* **@fortawesome/free-brands-svg-icons**: social and brand icons (GitHub, LinkedIn, Figma)

    → Used to represent social platforms clearly and professionally

* **@fortawesome/free-regular-svg-icons**: regular icon style set

    → Used to provide additional icon styles when needed

* **react**: component-based UI framework

    → Used to build a modular, scalable, and interactive frontend

* **react-dom**: mounts React into the browser DOM
  
  → Used to render the React application in the browser




## **Optimization & Advantages:**

* Only necessary images and assets are used (avoids unnecessary load)
* Reusable components reduce code duplication
* Faster load time and better performance
* Cleaner and more maintainable codebase
* Easy to scale by adding new sections/components
* Efficient re-rendering (updates only required parts of UI)
* Better user experience with smooth interactions
* Organized structure improves debugging and development speed




## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Aniruddha-25/Portfolio.git
```

2. Move into the project directory:

```bash
cd Portfolio
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Build and Deploy (GitHub Pages)

```bash
npm run build && npm run deploy
```

## Author

Aniruddha Salvankar
