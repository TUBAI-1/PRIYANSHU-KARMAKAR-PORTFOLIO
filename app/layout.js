import '../styles/globals.css';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

export const metadata = {
  title: 'Priyanshu Karmakar Portfolio',
  description: 'AI Engineering Expert | Award-Winning Innovator | Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
        <div className="bg-3d-shape shape1" />
        <div className="bg-3d-shape shape2" />
        <ThemeToggle />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
} 