import { Brain, Code2, Database, Cloud, GitBranch, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      icon: Brain,
      title: "AI & LLMOps",
      skills: ["RAG Pipelines", "Agents", "Prompt Engineering", "LangChain", "LangGraph", "Vector Search", "Cursor/Claude Code"]
    },
    {
      icon: Code2,
      title: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "React", "Angular", "Next.js", "Node.js", "Spring Boot", "Django", "FastAPI"]
    },
    {
      icon: Database,
      title: "Databases & Search",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "DynamoDB", "Supabase", "Pinecone", "TigerGraph"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: ["AWS (Lambda, S3, SageMaker, EKS, Bedrock)", "GCP", "Docker", "Kubernetes", "OpenShift", "Redis"]
    },
    {
      icon: Cpu,
      title: "AI Libraries",
      skills: ["Hugging Face Transformers", "AutoGen", "PydanticAI", "LangChain", "Redux", "GraphQL"]
    },
    {
      icon: GitBranch,
      title: "Development Practices",
      skills: ["Agile/Scrum", "CI/CD", "Git", "TDD (Jest, Pytest)", "Code Review", "SDLC"]
    }
  ];

  return (
    <section ref={ref} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 scroll-reveal ${isVisible ? 'visible' : ''}`}>
            Technical Skills
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main description */}
          <Card className={`gradient-card shadow-card hover-lift mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <CardContent className="p-8">
              <p className="text-lg md:text-xl leading-relaxed text-center">
                Full Stack AI and Software Engineer with expertise in building scalable AI-powered applications,
                modern web platforms, and cloud-native solutions. Passionate about leveraging cutting-edge technologies
                to solve complex problems and deliver exceptional user experiences.
              </p>
            </CardContent>
          </Card>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`gradient-card shadow-soft hover-lift scroll-reveal ${isVisible ? 'visible' : ''} group border-2 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10`}
                style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="hover-lift text-xs hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;