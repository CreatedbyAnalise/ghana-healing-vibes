import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu} />
          <div className="fixed top-0 left-0 w-full h-full bg-gradient-hero p-6 animate-slide-in-top">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-playfair font-bold text-primary-foreground">
                Aseda Natural Healing
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <X size={24} />
              </Button>
            </div>
            
            <nav className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-xl font-inter font-medium text-primary-foreground hover:text-secondary transition-colors duration-300 py-3 border-b border-primary-foreground/20"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full btn-outline-hero text-lg py-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;