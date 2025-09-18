import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Akosua Mensah',
      location: 'Accra, Ghana',
      condition: 'Chronic digestive issues',
      testimonial: 'After years of suffering with digestive problems, Dr. Asante\'s herbal treatments completely transformed my health. I feel like myself again after just 3 months of treatment.',
      rating: 5,
      image: '👩🏿‍💼'
    },
    {
      name: 'Kwaku Osei',
      location: 'Kumasi, Ghana',
      condition: 'Anxiety and stress',
      testimonial: 'The mental wellness therapy here saved my life. The combination of traditional healing and spiritual cleansing helped me overcome anxiety that conventional medicine couldn\'t touch.',
      rating: 5,
      image: '👨🏿‍💼'
    },
    {
      name: 'Ama Boateng',
      location: 'Tamale, Ghana',
      condition: 'Fertility challenges',
      testimonial: 'After 5 years of trying to conceive, Dr. Asante\'s fertility treatments helped us welcome our beautiful daughter. We are forever grateful for this gift.',
      rating: 5,
      image: '👩🏿‍⚕️'
    },
    {
      name: 'Kofi Asante',
      location: 'Cape Coast, Ghana',
      condition: 'Chronic pain',
      testimonial: 'The traditional pain relief treatments here are miraculous. After 2 years of back pain, I\'m now pain-free and able to enjoy life with my grandchildren again.',
      rating: 5,
      image: '👨🏿‍🦳'
    },
    {
      name: 'Efua Darko',
      location: 'Ho, Ghana',
      condition: 'Immune system weakness',
      testimonial: 'The immune strengthening herbs have completely changed my health. I haven\'t been sick once since starting treatment 8 months ago. Amazing results!',
      rating: 5,
      image: '👩🏿‍🎓'
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-primary mb-6">
            Healing Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through 
            traditional Ghanaian healing. Discover what's possible for your health journey.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto mb-12 reveal">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-card border-2 border-primary/10 shadow-elegant mx-4">
                    <CardContent className="p-12">
                      <div className="text-center">
                        {/* Quote Icon */}
                        <Quote className="w-12 h-12 text-secondary mx-auto mb-6" />
                        
                        {/* Stars */}
                        <div className="flex justify-center space-x-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-xl text-muted-foreground italic leading-relaxed mb-8 font-inter">
                          "{testimonial.testimonial}"
                        </blockquote>

                        {/* Patient Info */}
                        <div className="flex items-center justify-center space-x-4">
                          <div className="text-4xl">{testimonial.image}</div>
                          <div className="text-left">
                            <div className="font-playfair font-semibold text-xl text-primary">
                              {testimonial.name}
                            </div>
                            <div className="text-muted-foreground">
                              {testimonial.location}
                            </div>
                            <div className="text-sm text-secondary font-medium">
                              Treated for: {testimonial.condition}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card border-primary/20 hover:border-primary/40"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card border-primary/20 hover:border-primary/40"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary scale-125' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 reveal">
          <div className="text-center bg-card rounded-2xl p-8 shadow-elegant">
            <div className="text-4xl font-playfair font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Patient Satisfaction</div>
          </div>
          <div className="text-center bg-card rounded-2xl p-8 shadow-elegant">
            <div className="text-4xl font-playfair font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
          <div className="text-center bg-card rounded-2xl p-8 shadow-elegant">
            <div className="text-4xl font-playfair font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center reveal">
          <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
            Ready to Write Your Own Success Story?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have discovered the healing power 
            of traditional Ghanaian medicine.
          </p>
          <Button onClick={scrollToContact} className="btn-hero text-lg px-8 py-4">
            Begin Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;