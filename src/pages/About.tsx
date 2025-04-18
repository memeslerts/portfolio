import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <Button 
              variant="outline" 
              asChild 
              className="ml-4"
            >
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <AspectRatio ratio={1} className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={`https://www.umass.edu/honors/sites/g/files/ijdqth221/files/2024-09/Mimi.png`} 
                  alt="Mimi Lertsaroj" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed mb-6">
                    Hello, I'm Mimi! I'm a senior Computer Science major with minors in Psychology and Maths. I'm a software engineer
                    and researcher who specialises in multidisciplinary artificial intelligence. I'm particularly passionate about 
                    biologically-inspired/biologically-plausible foundational machine learning models and developing brain-inspired 
                    intelligent systems. 
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    I have research experience in many different concentrations of AI/ML, including developing foundational artificial neural networks
                    for memory modelling, deep reinforcement learning for vision-based robotics control systems, and multi-objective optimisation for decision-making problems.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Outside of academics, I love fashion, art, and any colourful shape-related games (tetris, set, minecraft, etc).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">Technical Skills</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Machine Learning</li>
                  <li>Research</li>
                  <li>Software Engineering</li>
                  <li>Web Development</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-3">Research Interests</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Computational Neuroscience</li>
                  <li>Robotics</li>
                  <li>Computer Vision</li>
                  <li>Foundational Machine Learning Model</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium">Research Assistant</h3>
                <p className="text-muted-foreground mb-2">UMass Computer Vision Lab + DARoS Lab • 2024 - Present</p>
                <p>Studying learned vision-based control strategies for balance and complex terrain navigation of robots.</p>
              </CardContent>
            </Card>
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium">Previous Position</h3>
                <p className="text-muted-foreground mb-2">Previous Company • 2018 - 2020</p>
                <p>Description of your responsibilities and achievements.</p>
              </CardContent>
            </Card> */}
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium">Bachelor of Science in Computer Science, Minors in Psychology and Mathematics</h3>
              <p className="text-muted-foreground mb-2">University of Massachusetts Amherst • 2025</p>
              <p>Member of the Commonwealth Honors College</p>
              <p>Dean's List for F2021, S2022, F2023, S2024, F2024, S2025</p>
              <p>Chancellor's Award Recipient, Commonwealth Honors College Honors Thesis Grant Recipient</p>
              <p>President of the UMass Art Club</p>
              <p>Commonwealth Honors College Peer Ambassador and Social Media Coordinator</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}
