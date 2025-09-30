import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A detail-oriented software engineer with a passion for creating efficient, 
            scalable solutions and a proven track record in fintech innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <Card className="hover:shadow-xl transition-shadow border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">M.Engg. Software Engineering</p>
                  <p className="text-muted-foreground">NED University of Engineering & Technology</p>
                  <p className="text-muted-foreground text-xs">Final Semester</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">B.E. Computer & Information Systems</p>
                  <p className="text-muted-foreground">NED University of Engineering & Technology</p>
                  <p className="text-muted-foreground text-xs">CGPA: 3.47 | Graduated Oct 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="hover:shadow-xl transition-shadow border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Experience</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Software Engineer</p>
                  <p className="text-muted-foreground">Meezan Bank Limited</p>
                  <p className="text-muted-foreground text-xs">May 2024 – Present</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Junior Software Engineer</p>
                  <p className="text-muted-foreground">Reboot Technologies</p>
                  <p className="text-muted-foreground text-xs">Nov 2023 – April 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research */}
          <Card className="hover:shadow-xl transition-shadow border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Research</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Quantum Computing in Generative AI</p>
                  <p className="text-muted-foreground" style={{ textAlign: "justify" }}>The research examines the intersection of quantum computing and generative AI, synthesizing key methods, findings, and challenges. It highlights current trends, identifies research gaps, and outlines directions for future exploration in this emerging field.
                  </p>
                  <p className="text-accent text-xs font-medium mt-2">In Progress</p>
                </div>
                <div className="pt-2">
                  <p className="font-semibold text-foreground">Leadership</p>
                  <p className="text-muted-foreground text-xs">President, NED Girls Affairs Society (2022-23)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
