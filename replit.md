# Overview

This is a full-stack web application for Astrovoltra, a software engineering company based in Victoria, Vancouver Island. The application serves as a corporate website showcasing Astrovoltra's AI-powered products including Medi-sense (medical diagnostics), QMS AI (educational management), and LearnBot (interactive AI tutor). The site features a modern design with sections for company information, product showcases, careers, and contact forms.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client is built as a React single-page application using TypeScript and modern React patterns:
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Products, Careers, and Contact
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Component Library**: Shadcn/ui components built on Radix UI primitives for consistent, accessible UI components
- **Styling**: Tailwind CSS with custom CSS variables for theming, includes Material Design inspired elements and Google Fonts integration
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
The server follows a minimalist Express.js setup:
- **Framework**: Express.js with TypeScript for the API layer
- **Storage Interface**: Abstracted storage layer with in-memory implementation for users (MemStorage class)
- **Development Setup**: Vite integration for hot module replacement and development tooling
- **Route Structure**: Placeholder route registration system ready for API endpoint implementation

## Data Storage Solutions
Currently configured for PostgreSQL with Drizzle ORM:
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: Shared schema definitions in TypeScript with Zod validation
- **Database Provider**: Configured for Neon Database serverless PostgreSQL
- **Migrations**: Drizzle Kit for database schema migrations

## Authentication and Authorization
Basic user schema is defined but authentication is not yet implemented:
- **User Model**: Simple user table with id, username, and password fields
- **Session Storage**: Connect-pg-simple configured for PostgreSQL session storage
- **Security**: Prepared for session-based authentication implementation

## Development and Build System
- **Build Tool**: Vite for fast development builds and hot reloading
- **TypeScript**: Strict TypeScript configuration with path aliases for clean imports
- **Development Server**: Express server with Vite middleware integration
- **Production Build**: Separate client and server build processes with esbuild for server bundling

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle ORM**: Type-safe SQL toolkit and query builder

## UI and Styling
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Shadcn/ui**: Pre-built component library based on Radix UI
- **Google Fonts**: Roboto font family and Material Icons

## Development Tools
- **Vite**: Build tool with development server and HMR
- **React Query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **Zod**: Runtime type validation and schema definition
- **Wouter**: Minimalist router for React applications

## Runtime and Deployment
- **Node.js**: Server runtime environment
- **Replit Integration**: Development environment plugins and error handling