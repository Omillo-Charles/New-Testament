# New Testament Church of God Kenya - Official Website

## Overview

The official website for the New Testament Church of God Kenya (NTCG Kenya), a vibrant Pentecostal church serving communities across Kenya since 1977. This platform provides information about the church, its ministries, events, and resources for members and visitors.

## Project Information

**Organization:** New Testament Church of God Kenya  
**Established:** 1977  
**Headquarters:** Nairobi, Kenya  
**Technology Stack:** Next.js 15, React 19, Tailwind CSS  
**Developer:** OMYTECH Kenya

## Features

### Public Features

- **Home Page** - Welcome section with hero carousel, statistics, and call-to-action
- **About Us** - Church history, vision, mission, and leadership information
- **Resources Hub** - Access to church resources, gallery, beliefs, and FAQs
- **Ministry Portals** - Dedicated sections for Youth, Children, Adults, and Clergy
- **Programs** - Bible College, Discipleship Courses, and Events information
- **Contact** - Contact form and church location information
- **Church Locator Map** - Interactive map to find NTCG branches across Kenya

### User Features

- **User Authentication** - Secure login and registration system
- **User Profiles** - Personal profile management
- **Document Submissions** - Submit church documents and reports
- **Event Registration** - Register for church events and programs

### Admin Features

- **Admin Dashboard** - Comprehensive administrative control panel
- **User Management** - Manage user accounts and permissions
- **Submission Management** - Review and process document submissions
- **Content Management** - Update church information and resources

## Technology Stack

### Frontend

- **Framework:** Next.js 15.1.3 (App Router)
- **UI Library:** React 19.0.0
- **Styling:** Tailwind CSS 3.4.17
- **Icons:** React Icons 5.4.0
- **Image Optimization:** Next.js Image Component with Sharp

### Backend Integration

- **Authentication:** JWT-based authentication
- **API Communication:** Fetch API with custom error handling
- **State Management:** React Hooks (useState, useEffect)
- **Form Handling:** Native form handling with validation

### Development Tools

- **Linting:** ESLint with Next.js configuration
- **Code Quality:** TypeScript ESLint
- **Package Manager:** npm

## Project Structure

```
.
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── admin/                    # Admin dashboard
│   │   ├── submissions/          # Submission management
│   │   └── users/                # User management
│   ├── auth/                     # Authentication pages
│   ├── contact/                  # Contact page
│   ├── portals/                  # Ministry portals
│   │   ├── adults/               # Adult ministry
│   │   ├── children/             # Children ministry
│   │   ├── clergy/               # Clergy portal
│   │   ├── youth/                # Youth ministry
│   │   ├── giving/               # Giving portal
│   │   ├── shop/                 # Church shop
│   │   └── submissions/          # Document submissions
│   ├── programs/                 # Church programs
│   ├── profile/                  # User profile
│   ├── resources/                # Church resources
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Home page
├── components/                   # Reusable React components
│   ├── hero.jsx                  # Hero section
│   ├── nav.jsx                   # Navigation bar
│   ├── footer.jsx                # Footer
│   ├── stats-counter.jsx         # Statistics counter
│   └── herocarousel.jsx          # Hero carousel
├── public/                       # Static assets
│   ├── fonts/                    # Custom fonts
│   ├── heroImages/               # Hero section images
│   └── mainLogo.png              # Church logo
├── New-Testament-Backend/        # Backend services
│   └── submissions/              # Submissions microservice
├── .env                          # Environment variables
├── next.config.mjs               # Next.js configuration
├── tailwind.config.mjs           # Tailwind CSS configuration
└── package.json                  # Project dependencies
```

## Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-org/ntcg-kenya-website.git
cd ntcg-kenya-website
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SUBMISSIONS_API_URL=your_submissions_api_url
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and navigate to:

```
http://localhost:3000
```

## Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Configuration

### Environment Variables

| Variable                        | Description              | Required |
| ------------------------------- | ------------------------ | -------- |
| NEXT_PUBLIC_API_URL             | Main API endpoint        | Yes      |
| NEXT_PUBLIC_SUBMISSIONS_API_URL | Submissions API endpoint | Yes      |

### Tailwind CSS Configuration

The project uses a custom Tailwind configuration with:

- Custom color palette matching church branding
- Extended font families
- Custom animations and transitions
- Responsive breakpoints

### Next.js Configuration

Key configurations in `next.config.mjs`:

- Image optimization enabled
- Custom image domains configured
- Strict mode enabled
- App Router enabled

## Key Features Implementation

### Authentication System

- JWT-based authentication
- Secure token storage in localStorage
- Protected routes with middleware
- Role-based access control (User, Admin, Super Admin)

### Document Submission System

- Multi-step form with validation
- File upload with type and size restrictions
- Integration with Google Drive for storage
- Real-time submission tracking

### Church Locator

- Interactive map integration
- Region-based church filtering
- Searchable church directory
- 224+ churches across 6 regions

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation
- Accessible UI components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Next.js Image optimization
- Code splitting and lazy loading
- Static page generation where applicable
- Optimized font loading
- Compressed assets

## Security Features

- XSS protection through input sanitization
- CSRF protection
- Secure authentication flow
- Rate limiting on API endpoints
- Environment variable protection

## Deployment

### Production Build

```bash
npm run build
npm run start
```

### Deployment Platforms

- Vercel (Recommended)
- Netlify
- AWS Amplify
- Custom server with Node.js

### Environment Setup

Ensure all environment variables are configured in your deployment platform.

## Contributing

This is a private project for NTCG Kenya. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review
5. Merge after approval

## Support and Maintenance

**Developer:** OMYTECH Kenya  
**Website:** https://omytech.co.ke  
**Support:** For technical support, contact the development team

## Church Information

**New Testament Church of God Kenya**

- **Established:** 1977
- **Churches:** 224+ across Kenya
- **Members:** 15,000+
- **Regional Offices:** 6
- **Districts:** 28+

### Regional Structure

- North Central Region
- Nairobi Region
- Coast Region
- Western Region
- North Western Region
- Nyanza Region

## License

Copyright 2025 New Testament Church of God Kenya. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this software is strictly prohibited.

## Acknowledgments

- NTCG Kenya Leadership Team
- Church Members and Contributors
- OMYTECH Development Team
- All stakeholders involved in the project

## Version History

**Version 1.0.0** - Initial Release

- Complete website with all core features
- User authentication system
- Admin dashboard
- Document submission system
- Ministry portals
- Resources hub

---

**Built with dedication for the New Testament Church of God Kenya**  
**Developed by OMYTECH Kenya**
