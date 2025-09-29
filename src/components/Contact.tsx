import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or opportunity. I'm always open to new challenges and collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/10 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <a 
                        href="mailto:sbareeha19@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium group-hover:text-primary transition-colors">sbareeha19@gmail.com</p>
                        </div>
                      </a>

                      <a 
                        href="tel:+923188801094"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium group-hover:text-primary transition-colors">+92 318 8801094</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-semibold mb-4">Connect With Me</h4>
                    <div className="flex gap-3">
                      <Button 
                        size="icon" 
                        variant="outline"
                        className="hover:bg-gradient-primary hover:text-white hover:border-primary transition-all"
                        asChild
                      >
                        <a href="https://linkedin.com/in/syedabareeha-ali" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button 
                        size="icon" 
                        variant="outline"
                        className="hover:bg-gradient-primary hover:text-white hover:border-primary transition-all"
                        asChild
                      >
                        <a href="https://github.com/syedabareeha-ali" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button 
                        size="icon" 
                        variant="outline"
                        className="hover:bg-gradient-primary hover:text-white hover:border-primary transition-all"
                        asChild
                      >
                        <a href="mailto:sbareeha19@gmail.com">
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col justify-center items-center text-center space-y-6 bg-gradient-primary/5 rounded-lg p-8">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Ready to collaborate?</h3>
                    <p className="text-muted-foreground">
                      I'm currently available for freelance projects and full-time opportunities.
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity"
                    asChild
                  >
                    <a href="mailto:sbareeha19@gmail.com">
                      Send Me an Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
