import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Heart, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-meditation.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful meditation in Ghana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full text-center">
          <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Restore Your
            <span className="block text-secondary">Natural Balance</span>
          </h1>

          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Experience the healing power of traditional Ghanaian naturopathy combined with modern wellness practices. 
            Discover your path to holistic health and spiritual harmony.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up justify-center">
            <Button
              onClick={scrollToContact}
              className="btn-hero text-lg px-8 py-4 group"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-hero text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Patients Healed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-secondary mb-2">15+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-primary-foreground/80">Natural Methods</div>
            </div>
          </div>
        </div>

        {/* Feature Cards - Below Hero Content */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in">
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-card/20 transition-all duration-300 scale-on-hover">
            <Heart className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-playfair font-semibold text-primary-foreground mb-2">
              Holistic Healing
            </h3>
            <p className="text-primary-foreground/80">
              Treating the whole person - mind, body, and spirit through traditional Ghanaian methods.
            </p>
          </div>

          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-card/20 transition-all duration-300 scale-on-hover">
            <Leaf className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-playfair font-semibold text-primary-foreground mb-2">
              Natural Remedies
            </h3>
            <p className="text-primary-foreground/80">
              Pure herbs and traditional medicines sourced from Ghana's rich natural heritage.
            </p>
          </div>

          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-card/20 transition-all duration-300 scale-on-hover">
            <Shield className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-playfair font-semibold text-primary-foreground mb-2">
              Safe & Proven
            </h3>
            <p className="text-primary-foreground/80">
              Time-tested treatments backed by generations of healing wisdom and modern safety standards.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;