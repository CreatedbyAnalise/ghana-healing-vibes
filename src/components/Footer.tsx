import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Leaf,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Traditional Herbal Medicine',
    'Holistic Health Assessment',
    'Mental Wellness Therapy',
    'Immune System Strengthening',
    'Fertility & Reproductive Health',
    'Spiritual Healing & Cleansing'
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-primary-foreground/10">
              <Leaf className="w-8 h-8 m-4 opacity-30" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Contact Section */}
        <div className="py-16 border-b border-primary-foreground/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to start your healing journey? Contact us today for your free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Visit Us</h3>
              <p className="text-primary-foreground/80">
                Ring Road Central, Accra<br />
                Near Danquah Circle<br />
                Ghana
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Call Us</h3>
              <p className="text-primary-foreground/80">
                +233 24 123 4567<br />
                +233 20 987 6543<br />
                Emergency: +233 24 911 1234
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Email Us</h3>
              <p className="text-primary-foreground/80">
                info@asedahealing.com<br />
                appointments@asedahealing.com<br />
                emergency@asedahealing.com
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary mb-4">
                  Aseda Natural Healing
                </h1>
                <div className="flex items-center space-x-2 mb-6">
                  <Heart className="w-6 h-6 text-secondary" />
                  <span className="text-lg font-inter">Traditional Ghanaian Wellness</span>
                </div>
              </div>
              
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Where ancient Ghanaian wisdom meets modern wellness. We honor the healing traditions 
                passed down through generations while embracing contemporary approaches to natural health. 
                Your journey to wellness starts here.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>15+ Years of Healing Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>500+ Satisfied Patients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>100% Natural Traditional Methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Licensed Traditional Healers</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-playfair font-semibold mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-secondary hover:text-primary hover:border-secondary"
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-secondary hover:text-primary hover:border-secondary"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-secondary hover:text-primary hover:border-secondary"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-secondary mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 font-inter"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="text-lg font-playfair font-semibold text-secondary mb-4">
                  Operating Hours
                </h4>
                <div className="space-y-2 text-primary-foreground/80">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency Only</p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-secondary mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start space-x-2">
                    <Leaf className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-primary-foreground/80 font-inter text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-outline-hero w-full"
                >
                  Book Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 Aseda Natural Healing. All rights reserved.</p>
              <p className="text-sm mt-1">
                Licensed Traditional Healing Practice | Ghana Traditional Medicine Practice Board
              </p>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-secondary hover:text-primary hover:border-secondary group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;