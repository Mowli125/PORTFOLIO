# 🚀 Modern Animated 3D Portfolio Website

A stunning, highly interactive, dark-themed personal portfolio website built with React.js, Framer Motion, Three.js, and Particles.js.

## ✨ Features

- **🎨 Dark Theme with Neon Gradients** - Beautiful dark UI with neon blue, purple, and pink accents
- **🎭 Smooth Animations** - Framer Motion powered page transitions and entrance animations
- **🌐 3D Graphics** - Three.js for interactive 3D elements and models
- **✨ Particle Effects** - Interactive particle backgrounds using Particles.js
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **💼 Project Showcase** - Beautiful project cards with 3D hover effects
- **📧 Contact Form** - EmailJS integration for contact form
- **🔗 Social Links** - Animated social media links
- **📄 Resume Section** - Downloadable resume with timeline

## 🛠️ Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Particles.js (react-tsparticles)** - Particle effects
- **TailwindCSS** - Styling
- **EmailJS** - Email service
- **Lucide React** - Icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-mowli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### EmailJS Setup

To enable the contact form, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the Contact component (`src/components/Contact.jsx`) with your credentials:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'
   const templateId = 'YOUR_TEMPLATE_ID'
   const publicKey = 'YOUR_PUBLIC_KEY'
   ```

### Customization

1. **Update Personal Information**
   - Edit `src/components/Hero.jsx` for hero section
   - Edit `src/components/About.jsx` for about section
   - Edit `src/components/Contact.jsx` for contact information

2. **Add Your Projects**
   - Edit the `projects` array in `src/components/Projects.jsx`

3. **Update Skills**
   - Edit the `skillCategories` array in `src/components/Skills.jsx`

4. **Add Articles**
   - Edit the `articles` array in `src/components/Articles.jsx`

5. **Update Social Links**
   - Edit the `socialLinks` array in `src/components/SocialLinks.jsx`

6. **Add Resume PDF**
   - Place your resume PDF in the `public` folder
   - Update the path in `src/components/Resume.jsx`

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  neon: {
    blue: '#00d4ff',
    purple: '#b026ff',
    pink: '#ff006e',
    green: '#00ff88',
  }
}
```

### Animations

All animations are powered by Framer Motion. You can customize them in each component file.

## 📁 Project Structure

```
portfolio-mowli/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Articles.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Skills.jsx
│   │   └── SocialLinks.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspired by modern portfolio websites
- Icons from [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)

---

Built with ❤️ by Mowli


