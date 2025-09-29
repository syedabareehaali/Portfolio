import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React JS", "Angular", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node JS", "C++", "Java", "C#", ".NET"]
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Dart", "C++", "Java", "C#", "SQL"]
  },
  {
    category: "Databases",
    skills: ["SQL Server", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Tools & Frameworks",
    skills: ["MERN Stack", "MEAN Stack", "Meteor", "Git", "REST APIs"]
  }
];

const certifications = [
  { name: "Frontend Dev With React", issuer: "Coursera" },
  { name: "Machine Learning", issuer: "NCAI Lab, NEDUET" },
  { name: "Microsoft Power-BI", issuer: "NCAI Lab, NEDUET" },
  { name: "Python for Everybody", issuer: "University of Michigan, Coursera" },
  { name: "Flutter Application Development", issuer: "Smart City Lab, NEDUET" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive full-stack development expertise with diverse technology proficiency
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-muted text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          <Card className="border-primary/10">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
