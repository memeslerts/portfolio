
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  // {
  //   title: "Project One",
  //   description: "A brief description of your first project. Explain what it does, the technologies used, and your role in the project.",
  //   tags: ["React", "TypeScript", "Tailwind CSS"],
  //   links: {
  //     demo: "https://project-one.example.com",
  //     github: "https://github.com/yourusername/project-one"
  //   }
  // },
  // {
  //   title: "Project Two",
  //   description: "Description of your second project. Talk about the challenges you faced and how you overcame them.",
  //   tags: ["Vue.js", "Node.js", "MongoDB"],
  //   links: {
  //     demo: "https://project-two.example.com",
  //     github: "https://github.com/yourusername/project-two"
  //   }
  // },
  {
  title: "Reinforcement Learning for Wall Following Triton Robot",
  description: "Use Reinforcement Learning to train triton robot to learn to follow walls in a maze environment.",
  tags: ["ROS", "Gazebo", "Linux", "Python"],
  links: {
    github: "https://github.com/memeslerts/Wall-Following-Robot-with-RL"
    }
  },
  {
    title: "Arduino Tetris w/ ESP32",
    description: "A fully playable arcade-style tetris game made with an Arduino ESP32 microcontroller and a 16x16 LED board.",
    tags: ["C++", "Arduino", "ESP32"],
    links: {
      github: "https://github.com/memeslerts/Arduino-Tetris-Project"
    }
  },
  {
    title: "Campuswire Data Analytics Dashboard",
    description: "Tracking trends and analytics of a class forum.",
    tags: ["GoLang", "MongoDB", "Python", "FastAPI"],
    links: {
      github: "https://github.com/memeslerts/Campuswire-Data-Analytics-Dashboard",
    }
  }
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">A selection of my recent work and personal projects.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardContent className="p-6 flex-grow">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
                  {project.links.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
