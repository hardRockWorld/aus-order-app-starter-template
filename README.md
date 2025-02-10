# Aus Order Management App - starter template with Vue3 + TS + Shadcn-Vue UI
A modern order management application built with Vue 3 and TypeScript, featuring a robust tech stack for efficient order processing and management.

## Tech Stack

- **Framework:** Vue 3 with TypeScript
- **Build Tool:** Vite
- **State Management:** Pinia
- **Router:** Vue Router
- **UI Components:** shadcn-vue (uses RadixVue in background)
- **Backend:** PocketBase
- **Styling:** TailwindCSS with animations
- **Icons:** Lucide Vue
- **Utilities:**
	- VueUse
	- date-fns
	- class-variance-authority
	- tailwind-merge
	- clsx

## Features

- Type-safe development with TypeScript
- Component-driven UI with shadcn-vue (RadixVue)
- State management using Pinia stores
- Responsive and animated UI with TailwindCSS
- Backend integration with PocketBase (Please download the pocketbase executable based on your OS, place it in root of your project)
- Comprehensive routing system
- Modern utility-first CSS approach

## Getting Started

1. **Installation**
	 ```bash
	 npm install
	 ```

2. **Development**
	 ```bash
	 npm run dev
	 ```

3. **Build**
	 ```bash
	 npm run build
	 ```

4. **Preview Production Build**
	 ```bash
	 npm run preview
	 ```

5. **Linting**
	 ```bash
	 npm run lint
	 ```

6. **Fix Linting Issues**
	 ```bash
	 npm run lint:fix
	 ```

7. **Type Checking**
	 ```bash
	 npm run type-check
	 ```

8. **Format Code**
	 ```bash
	 npm run format
	 ```

9. **Check Code Formatting**
	 ```bash
	 npm run format:check
	 ```

10. **Clean Build Artifacts**
	 ```bash
	 npm run clean
	 ```

## Project Structure

- `src/` - Source files
	- `components/` - Vue components
	- `views/` - Page components
	- `stores/` - Pinia stores
	- `router/` - Vue Router configuration
	- `types/` - TypeScript type definitions
	- `utils/` - Utility functions
	- `assets/` - Static assets

## Development Tools

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking
- Vite for fast development and building
- PostCSS and Autoprefixer for CSS processing

## Scripts

- `dev`: Start the development server using Vite.
- `build`: Type-check and build the application for production.
- `preview`: Preview the production build locally.
- `lint`: Lint the codebase using ESLint.
- `lint:fix`: Automatically fix linting issues.
- `type-check`: Perform type checking with TypeScript.
- `format`: Format the code using Prettier.
- `format:check`: Check the code formatting without making changes.
- `clean`: Remove the `dist` directory to clean up the build artifacts.

## Requirements

- Node.js 16.x or higher
- npm 7.x or higher

## License

[MIT License](LICENSE)
