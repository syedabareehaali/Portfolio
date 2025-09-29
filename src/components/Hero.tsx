import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-float" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Syeda Bareeha Ali" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in-right">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Syeda Bareeha Ali
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Full Stack Software Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about building scalable full-stack applications with expertise in MERN & MEAN stacks. 
              Currently crafting innovative digital solutions at Meezan Bank Limited.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <a href="#projects">
                  View My Work
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Button size="icon" variant="ghost" asChild>
                <a href="https://github.com/syedabareeha-ali" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://linkedin.com/in/syedabareeha-ali" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="mailto:sbareeha19@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
