# Priyanshu Karmakar - Portfolio Website

A modern, responsive portfolio website built with React and Node.js, showcasing Priyanshu Karmakar's expertise in AI Engineering, Stock Market Analysis, and Business Strategy.

## 🌟 Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Functional contact form with email integration
- **Interactive Elements**: Hover effects and smooth transitions
- **SEO Optimized**: Meta tags and proper structure for search engines

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Nodemailer** - Email functionality
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
priyanshu-portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Experience.js
│   │   │   ├── Education.js
│   │   │   ├── Skills.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Node.js backend
│   ├── index.js
│   ├── env.example
│   └── package.json
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd priyanshu-portfolio
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install all dependencies (root, server, and client)
npm run install-all
```

### 3. Environment Setup
```bash
# Navigate to server directory
cd server

# Copy environment example
cp env.example .env

# Edit .env file with your email credentials
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
# PORT=5000
```

**Note**: For Gmail, you'll need to use an App Password instead of your regular password. [Learn how to generate an App Password](https://support.google.com/accounts/answer/185833).

### 4. Start the development servers
```bash
# Start both frontend and backend (from root directory)
npm run dev

# Or start them separately:
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📱 Sections

### 1. **Home**
- Hero section with animated elements
- Contact information
- Call-to-action buttons

### 2. **About**
- Personal introduction
- Academic achievements
- Awards and recognition
- Statistics overview

### 3. **Experience**
- Professional timeline
- Company details and roles
- Key achievements
- Career highlights

### 4. **Education**
- Academic journey
- Institution details
- Certifications
- Academic highlights

### 5. **Skills**
- Top skills with progress bars
- Technical expertise by category
- Skills overview statistics

### 6. **Contact**
- Contact form with email integration
- Contact information
- Social links
- Collaboration reasons

## 🎨 Customization

### Colors
The primary color scheme uses:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Background: `#0a0a0a` (Dark)

### Content
Update the content in each component file to match your information:
- Personal details in `Home.js`
- About information in `About.js`
- Experience data in `Experience.js`
- Education details in `Education.js`
- Skills in `Skills.js`
- Contact information in `Contact.js`

## 🚀 Deployment

### Frontend (React)
```bash
# Build the production version
cd client
npm run build

# Deploy to platforms like Vercel, Netlify, or GitHub Pages
```

### Backend (Node.js)
```bash
# Deploy to platforms like Heroku, Railway, or DigitalOcean
# Make sure to set environment variables in your hosting platform
```

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails. Make sure to:

1. Set up your email credentials in the `.env` file
2. For Gmail, use App Passwords
3. Test the form functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 About Priyanshu Karmakar

- **AI Engineering Expert** with 3+ years of experience
- **Pratibha Samman Award** recipient
- **School Topper** in Higher Secondary education
- **BBA Student** at JIS College of Engineering
- **Founder** of CHANAKYA GPT
- **Google AI/ML Virtual Intern**
- **Stock Market Analysis** specialist

## 📞 Contact

- **Phone**: +91 7003123815
- **Email**: karmakarpriyanshu5@gmail.com
- **LinkedIn**: [Priyanshu Karmakar](https://www.linkedin.com/in/priyanshu-karmakar-6465262a5)
- **Location**: West Bengal, India

---

Made with ❤️ by Priyanshu Karmakar 