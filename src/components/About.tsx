import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Leaf, Heart } from 'lucide-react';
import clinicImage from '@/assets/clinic-interior.jpg';
import doctorImage from '@/assets/doctor-portrait.jpg';

const About = () => {
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
              }, index * 200);
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-primary mb-6">
            About Aseda Natural Healing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where ancient Ghanaian wisdom meets modern wellness. 
            Discover the healing traditions that have restored balance for generations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Images */}
          <div className="reveal">
            <div className="relative">
              <img
                src={clinicImage}
                alt="Traditional Ghanaian healing clinic"
                className="rounded-3xl shadow-elegant w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={doctorImage}
                  alt="Dr. Kwame Asante - Traditional Healer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="text-3xl font-playfair font-semibold text-primary mb-4">
                Our Heritage of Healing
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by Dr. Kwame Asante, a 4th generation traditional healer from Kumasi, 
                Aseda Natural Healing bridges the gap between ancient Ghanaian medicinal practices 
                and contemporary wellness approaches.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our name "Aseda" means "thanksgiving" in Twi, reflecting our gratitude for the 
                healing gifts of nature and the wisdom passed down through generations of traditional healers.
              </p>
            </div>

            <div className="reveal">
              <h4 className="text-2xl font-playfair font-semibold text-primary mb-4">
                Our Philosophy
              </h4>
              <p className="text-lg text-muted-foreground">
                We believe true healing comes from restoring harmony between mind, body, and spirit. 
                Using Ghana's rich botanical heritage and time-honored healing rituals, we guide you 
                on a journey back to your natural state of wellness.
              </p>
            </div>

            <div className="reveal">
              <Button onClick={scrollToContact} className="btn-hero text-lg px-8 py-4">
                Start Your Healing Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Award, number: '15+', label: 'Years of Experience', color: 'text-primary' },
            { icon: Users, number: '500+', label: 'Patients Treated', color: 'text-secondary' },
            { icon: Leaf, number: '50+', label: 'Natural Remedies', color: 'text-primary' },
            { icon: Heart, number: '98%', label: 'Success Rate', color: 'text-secondary' },
          ].map((stat, index) => (
            <div key={index} className="text-center reveal">
              <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 scale-on-hover">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-4xl font-playfair font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-inter">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-card rounded-3xl p-12 shadow-elegant reveal">
          <h3 className="text-3xl font-playfair font-semibold text-primary mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "To preserve and share the healing wisdom of Ghana while providing accessible, 
            natural healthcare that honors both tradition and innovation. We are committed to 
            helping our community rediscover the profound healing power that lies within nature 
            and within themselves."
          </p>
          <div className="mt-8 text-lg font-playfair text-primary">
            - Dr. Kwame Asante, Founder & Traditional Healer
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;