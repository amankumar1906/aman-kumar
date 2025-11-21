import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent shadow-glow animate-glow transition-transform group-hover:scale-105"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden bg-muted flex items-center justify-center ring-4 ring-background/50 transition-all group-hover:ring-primary/30">
              <img
                src={`${import.meta.env.BASE_URL}portfolio.jpg`}
                alt="Aman Kumar"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>


          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Aman Kumar
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-slide-in-right max-w-2xl mx-auto">
            Full Stack AI and Software Engineer
          </p>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="outline"
              size="lg"
              className="hover-lift hover-glow group border-2 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <a href="https://github.com/amankumar1906" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-lift hover-glow group border-2 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <a href="https://linkedin.com/in/aman-kumar-a993bb1bb/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <Button
          variant="ghost"
          size="lg"
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hover-glow"
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;