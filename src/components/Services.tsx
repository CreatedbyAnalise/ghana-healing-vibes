import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Leaf, 
  Heart, 
  Brain, 
  Shield, 
  Flower, 
  Sun,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((reveal, index) => {
              setTimeout(() => {
                reveal.classList.add('active');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Leaf,
      title: 'Traditional Herbal Medicine',
      description: 'Customized herbal remedies using indigenous Ghanaian plants and traditional preparation methods.',
      features: ['Digestive disorders', 'Immune system support', 'Chronic pain relief', 'Detoxification'],
      price: 'From GH₵150',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/20'
    },
    {
      icon: Heart,
      title: 'Holistic Health Assessment',
      description: 'Comprehensive evaluation of your physical, mental, and spiritual well-being using traditional diagnostic methods.',
      features: ['Full body assessment', 'Nutritional guidance', 'Lifestyle counseling', 'Treatment planning'],
      price: 'GH₵200',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary/20'
    },
    {
      icon: Brain,
      title: 'Mental Wellness Therapy',
      description: 'Traditional Ghanaian approaches to mental health, combining herbal medicine with spiritual healing.',
      features: ['Anxiety treatment', 'Depression support', 'Stress management', 'Spiritual cleansing'],
      price: 'From GH₵180',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/20'
    },
    {
      icon: Shield,
      title: 'Immune System Strengthening',
      description: 'Boost your natural defenses with powerful Ghanaian immune-enhancing herbs and practices.',
      features: ['Seasonal protection', 'Recovery support', 'Energy enhancement', 'Vitality restoration'],
      price: 'From GH₵120',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary/20'
    },
    {
      icon: Flower,
      title: 'Fertility & Reproductive Health',
      description: 'Natural fertility enhancement and reproductive health support using traditional Ghanaian wisdom.',
      features: ['Fertility optimization', 'Hormonal balance', 'Pregnancy support', 'Postpartum care'],
      price: 'From GH₵250',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/20'
    },
    {
      icon: Sun,
      title: 'Spiritual Healing & Cleansing',
      description: 'Traditional spiritual healing practices to restore balance and remove negative energies.',
      features: ['Energy cleansing', 'Spiritual protection', 'Chakra alignment', 'Ritual ceremonies'],
      price: 'From GH₵300',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary/20'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-primary mb-6">
            Our Healing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of traditional Ghanaian healing services, 
            each designed to restore your natural balance and promote lasting wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`reveal ${service.bgColor} ${service.borderColor} border-2 hover:shadow-elegant transition-all duration-300 scale-on-hover group`}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl font-playfair text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full ${service.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-playfair font-bold text-primary">
                      {service.price}
                    </span>
                    <Button 
                      onClick={scrollToContact}
                      variant="ghost" 
                      size="sm"
                      className={`${service.color} hover:bg-current/10 group/btn`}
                    >
                      Book Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 reveal">
          <h3 className="text-3xl font-playfair font-bold text-primary-foreground mb-4">
            Ready to Begin Your Healing Journey?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and discover how traditional Ghanaian healing 
            can transform your health and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} className="btn-outline-hero text-lg px-8 py-4">
              Book Free Consultation
            </Button>
            <Button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              variant="ghost" 
              className="text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;