import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-playfair font-bold">
            <span className={isScrolled ? 'text-primary' : 'text-primary-foreground'}>
              Aseda Natural Healing
            </span>
          </div>

          {/* Toggle Menu Button */}
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Toggle Navigation Menu */}
        <nav
          className={`mt-4 transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-elegant">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-inter font-medium text-left py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-muted hover:text-secondary text-foreground"
              >
                {item.label}
              </button>
            ))}
            
            {/* CTA Button in Menu */}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="btn-hero mt-4"
            >
              Book Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;