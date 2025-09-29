import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "QR Refund Transaction Portal",
    description: "Developed a secure portal enabling real-time QR-based refund processing for Meezan Bank, streamlining merchant transactions and enhancing customer service efficiency.",
    tags: ["React JS", "Node JS", "SQL", "QR Code", "Real-time Processing"]
  },
  {
    title: "Digital Bike Financing Platform",
    description: "Developed a secure admin dashboard for a Shariah-compliant financing program to manage dealer onboarding, asset maintenance, processing fees, and user roles.",
    tags: ["React JS", "Node JS", "SQL", "Admin Dashboard", "Fintech"]
  },
  {
    title: "Corporate Loan Origination System",
    description: "Developed a dynamic document automation system tailored for corporate clients, streamlining disbursement workflows and minimizing human error across high-volume financing operations.",
    tags: ["React JS", "Node JS", "SQL", "Document Automation", "Enterprise"]
  },
  {
    title: "E-Statement Subscription Platform",
    description: "Developed a secure Angular-based frontend with two-factor OTP authentication, enabling users to manage subscription preferences with flexibility and security.",
    tags: ["Angular", "Two-Factor Auth", "OTP", "Security"]
  },
  {
    title: "Digital Supply Chain Financing Platform",
    description: "Developed Meezan Bank's Shariah-compliant digital supply chain finance solution, automating invoice processing and connecting seamlessly with fintech infrastructure.",
    tags: ["React JS", "Node JS", "SQL", "Supply Chain", "Automation"]
  },
  {
    title: "WhatsApp Banking - E-Statement Feature",
    description: "Developed an E-Statement feature for WhatsApp Banking rendering API-driven transaction tables and PDF output secured via account-derived encryption.",
    tags: ["HTML", "CSS", "Node JS", "WhatsApp API", "PDF Generation"]
  },
  {
    title: "CDC Account Opening System",
    description: "Developed logic for the CDC Account Closure workflow, ensuring compliance with operational and regulatory requirements.",
    tags: ["Angular", "Meteor", "Compliance", "Workflow Management"]
  },
  {
    title: "Meezan Home Remittance System",
    description: "Developed the frontend of a remittance tracking platform enabling users to retrieve transaction details and display real-time status based on transfer types.",
    tags: [".NET", "Real-time Tracking", "Remittance"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative fintech solutions spanning digital banking, financing platforms, and secure transaction systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
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

export default Projects;
