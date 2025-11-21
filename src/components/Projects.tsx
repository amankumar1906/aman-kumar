import { Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "VoyAIger",
      subtitle: "AI-Powered Travel Itinerary Generator",
      period: "Jul 2025 – Oct 2025",
      description: "Built an AI-powered travel planner using React, FastAPI, and PydanticAI, applying the ReAct pattern to interpret unstructured user input and orchestrate multi-API workflows with schema validation and structured error handling. Implemented authentication and RAG-based personalization, enabling personalized trip recommendations from user history with retry logic, API observability, and rate limiting using Redis.",
      technologies: ["React", "FastAPI", "PydanticAI", "ReAct", "RAG", "Redis", "Authentication", "API Orchestration"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "ApplyRight",
      subtitle: "AI-Driven Resume Optimizing Tool",
      period: "Feb 2025 – May 2025",
      description: "Designed an AI-powered resume optimization platform using Gemini and OpenAI APIs, combining prompt-engineered skill extraction, structured metadata parsing, and a RAG pipeline with Supabase vector search, achieving 85%+ match scores with target job descriptions. Delivered end-to-end full-stack system with FastAPI and React (TypeScript), creating a custom metadata extractor for skill scoring and tone preservation.",
      technologies: ["FastAPI", "React", "TypeScript", "OpenAI", "Gemini", "RAG", "Supabase", "Vector Search"],
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  return (
    <section ref={ref} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 scroll-reveal ${isVisible ? 'visible' : ''}`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`gradient-card shadow-card hover-lift transition-smooth group ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                } scroll-reveal ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.4 + index * 0.3}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                        {project.title}
                        {project.featured && (
                          <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary mb-2">{project.subtitle}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        {project.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="hover-lift"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                   <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover-glow" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className={`text-center mt-12 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1s' }}>
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-glow" 
              asChild
            >
              <a href="https://github.com/amankumar1906" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;