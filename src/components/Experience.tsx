import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Meezan Bank Limited",
    period: "May 2024 – Present",
    type: "Full Stack Developer | MERN | MEAN",
    description: [
      "Lead the design and development of scalable full-stack applications for digital financing and corporate lending platforms",
      "Integrate with core banking systems to automate high-volume workflows and improve operational transparency",
      "Prioritize optimization of user experience while maintaining industry-standard design practices"
    ],
    tags: ["React JS", "Node JS", "Angular", "SQL", "Full Stack"]
  },
  {
    title: "Junior Software Engineer",
    company: "Reboot Technologies",
    period: "November 2023 – April 2024",
    type: "Backend Developer",
    description: [
      "Contributed to the development and maintenance of TrafiX, a global trading platform",
      "Focused on optimizing order workflows and backend performance for Equities, Options, and Complex Options",
      "Utilized C++ for high-performance trading system development"
    ],
    tags: ["C++", "Trading Systems", "Backend", "Performance Optimization"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions in fintech and trading systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-sm font-medium text-accent mt-1">{exp.type}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
