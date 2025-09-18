import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Consultation Request Sent!",
      description: "We'll contact you within 24 hours to schedule your appointment.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Clinic',
      details: ['Aseda Natural Healing Center', 'Ring Road Central, Accra', 'Near Danquah Circle'],
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+233 24 123 4567', '+233 20 987 6543', 'WhatsApp Available'],
      color: 'text-secondary'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@asedahealing.com', 'appointments@asedahealing.com', 'emergency@asedahealing.com'],
      color: 'text-primary'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Emergency Only'],
      color: 'text-secondary'
    }
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
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-primary mb-6">
            Begin Your Healing Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards natural wellness. Schedule your consultation today 
            and discover how traditional Ghanaian healing can transform your health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="reveal">
            <Card className="shadow-elegant border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-3xl font-playfair text-primary">
                  Schedule Your Free Consultation
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours to schedule your personalized consultation.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-inter font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-inter font-medium">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-inter font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 24 123 4567"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="font-inter font-medium">Service of Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-primary/20 rounded-md focus:outline-none focus:border-primary bg-background"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-inter font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your health concerns or questions..."
                      rows={4}
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-hero text-lg py-4 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Consultation Request
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="reveal shadow-elegant border-2 border-primary/10 hover:shadow-glow transition-all duration-300 scale-on-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${info.color} bg-current/10 p-3 rounded-xl`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="reveal bg-gradient-hero border-0 shadow-glow">
              <CardContent className="p-6">
                <div className="text-center text-primary-foreground">
                  <Calendar className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold mb-2">
                    Emergency Consultations
                  </h3>
                  <p className="mb-4">
                    For urgent health matters, we offer same-day consultations
                  </p>
                  <Button className="btn-outline-hero">
                    Call Emergency Line: +233 24 911 1234
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Satisfaction Guarantee */}
            <Card className="reveal bg-secondary/10 border-2 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-12 h-12 text-secondary" />
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                      100% Satisfaction Guarantee
                    </h3>
                    <p className="text-muted-foreground">
                      If you're not completely satisfied with your consultation, 
                      we'll provide a full refund or alternative treatment approach.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;