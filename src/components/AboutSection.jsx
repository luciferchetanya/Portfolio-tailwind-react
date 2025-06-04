import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Developer | DSA Enthusiast | Tech Visionary
            </h3>

            <p className="text-muted-foreground">
              I’m Chetanya Jain, a Computer Engineering student at UPES specializing in Big Data (Honors), passionate
              about building smart, scalable, and creative tech solutions. With hands-on experience in full-stack web
              development, AI projects, and cloud tools, I thrive on solving real-world challenges.
            </p>

            <p className="text-muted-foreground">
              I've built a wide range of impactful projects — from a Netflix-inspired platform to a real-time event
              management system and a deep learning-based Deepfake Detection System using CNNs and EfficientNet. I'm
              also a certified DSA problem solver with 100+ questions solved on LeetCode and GeeksforGeeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Chetanya_Jain_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web & AI Projects</h4>
                  <p className="text-muted-foreground">
                    Developed full-stack solutions and deep learning applications like a Netflix Clone and Deepfake
                    Detection System using CNNs, TensorFlow, Django, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Structures & Algorithms</h4>
                  <p className="text-muted-foreground">
                    Solved 100+ problems across LeetCode, GFG, and more. Certified in DSA from Coding Blocks. Strong in
                    logic, optimization, and algorithm design.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Leadership & PR Strategy</h4>
                  <p className="text-muted-foreground">
                    Led MTC Chapter as Public Relations Head and Advisor. Orchestrated tech events, secured sponsorships,
                    and grew chapter visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
