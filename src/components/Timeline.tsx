import { Building, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Timeline = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      company: "Diamond Diagnostics",
      role: "Software Engineer",
      period: "Aug 2024 – Present",
      location: "Holliston, MA",
      description: "Engineered AI dispatch system with LLMs and Google Maps API reducing dispatch time by 30% and travel costs by 15%. Designed modular Angular ERP architecture cutting 40% redundant code. Deployed real-time WebSocket notification system with 99.9% delivery reliability. Optimized backend with Redis caching, AWS Lambda, and S3, cutting API latency by 25%.",
      technologies: ["Angular", "LLMs", "Google Maps API", "WebSocket", "AWS Lambda", "S3", "Redis", "OpenAI"],
      current: true
    },
    {
      company: "Venu",
      role: "AI Software Engineer Intern (Founding Team)",
      period: "Jan 2024 – Jul 2024",
      location: "Boston, MA",
      description: "Founded and architected cross-platform mobile app achieving App/Play Store launch with 4.8+ rating. Delivered AI recommendation engine in 2 weeks using AWS Bedrock and Google Places API, enabling successful pre-seed funding. Drove 25% retention improvement implementing Spring Boot microservices for behavioral analytics.",
      technologies: ["React Native", "Expo", "AWS Bedrock", "Google Places API", "Spring Boot", "Microservices"],
      current: false
    },
    {
      company: "READY.NET",
      role: "Software Engineer Intern",
      period: "May 2023 – Aug 2023",
      location: "Boston, MA",
      description: "Refactored 20+ Ant Design components in TypeScript/React into independent modules, reducing future development effort by 40%. Integrated GitHub Actions CI/CD pipeline enforcing 100% Jest and Storybook test coverage, eliminating frontend regressions.",
      technologies: ["TypeScript", "React", "Ant Design", "GitHub Actions", "Jest", "Storybook"],
      current: false
    },
    {
      company: "PAYBACK",
      role: "Software Engineer Intern",
      period: "Jun 2021 – Aug 2021",
      location: "Mumbai, India",
      description: "Developed production-grade RESTful APIs in Java (Spring Boot) with JWT authentication, data validation, and Swagger documentation, enabling secure backend services supporting India's largest multi-brand loyalty platform.",
      technologies: ["Java", "Spring Boot", "JWT", "Swagger", "REST APIs"],
      current: false
    }
  ];

  return (
    <section ref={ref} id="timeline" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 scroll-reveal ${isVisible ? 'visible' : ''}`}>
            Professional Timeline
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-12 flex items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 shadow-glow z-10 ring-4 ring-primary/20 animate-pulse"></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card
                    className={`gradient-card shadow-card hover-lift scroll-reveal-${index % 2 === 0 ? 'right' : 'left'} ${isVisible ? 'visible' : ''} group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10`}
                    style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold flex items-center gap-2">
                            <Building className="h-5 w-5 text-primary" />
                            {exp.company}
                            {exp.current && (
                              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                Current
                              </Badge>
                            )}
                          </CardTitle>
                          <p className="text-lg font-semibold text-primary mt-1">{exp.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="hover-lift"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;