
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

interface ResearchPaper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  links: {
    pdf?: string;
    doi?: string;
  };
}

const researchPapers: ResearchPaper[] = [
  {
    title: "A More Sustainable, Energy-Efficient, and Equitable strategy for Rooftop Solar Photovoltaics",
    authors: ["Cooper Sigrist", "Archimedes Li", "Mimi Lertsaroj", "Ryan Bahlous-Boldi"," Adam Lechowicz", "Noman Bashir", "Mohammad Hajiesmaili"],
    venue: "ACM Sigmetrics 2025 Workshop: AI Crossroads: Systems, Energy, and Applications",
    year: 2025,
    abstract: "Due to declining costs and increasing government incentives, residential rooftop photovoltaic (PV) installations are commonplace in electric grids worldwide. However, despite their potential for deployment on most homes, residential PV installations in the United States are heavily clustered in high-income neighborhoods. In addition to being a widely acknowledged social issue, recent work has shown that these existing installations are highly \emph{carbon-inefficient} -- that is, they are not optimally situated to effectively offset carbon emissions from traditional fossil fuel-based generators used in the electric grid. Prior work also shows that prioritizing simple metrics such as socioeconomic equity can significantly increase the carbon-efficiency of new installations. \nIn this paper, we formalize the problem of site selection for rooftop PV installations as a multi-objective optimization problem, where the objectives include metrics of interest such as energy generation, carbon offsetting, and equity along demographic lines. In doing so, we introduce two models, NEAT-Lexicase and NEAT-Tournament, which each use a neural network trained via evolutionary learning with either lexicase or tournament selection. We evaluate our models in a case study of the site selection problem using a data set of U.S. solar generation and demographic information, where they improve carbon-efficiency by 62\%, income equity by 41\%, and racial equity by 24\% while maintaining energy generation comparable to a status-quo projection. According to current projections, this optimized placement achieves the estimated carbon offset needed for \textit{net-zero} emissions (due to energy generation) by 2034, four years earlier than current trends, while also substantially improving both racial and income equity. ",
    tags: ["Machine Learning", "Multi-Objective Optimisation", "Evolutionary Learning"],
    links: {
      // pdf: "https://example.com/research-paper-1.pdf",
      // doi: "https://doi.org/10.1234/example.5678"
    }
  },
  // {
  //   title: "Title of Your Second Research Paper",
  //   authors: ["Your Name", "Co-Author Three"],
  //   venue: "Another Journal or Conference Name",
  //   year: 2022,
  //   abstract: "Abstract of your second research paper. Summarize the main contributions and implications of your research.",
  //   tags: ["Natural Language Processing", "Transformer Models"],
  //   links: {
  //     pdf: "https://example.com/research-paper-2.pdf",
  //     doi: "https://doi.org/10.1234/example.9012"
  //   }
  // },
  // {
  //   title: "Title of Your Third Research Paper",
  //   authors: ["Co-Author Four", "Your Name", "Co-Author Five"],
  //   venue: "Third Journal or Conference Name",
  //   year: 2021,
  //   abstract: "Abstract of your third research paper. Explain the significance and impact of your research findings.",
  //   tags: ["Reinforcement Learning", "Game Theory"],
  //   links: {
  //     doi: "https://doi.org/10.1234/example.3456"
  //   }
  // }
];

export default function Research() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Research Works</h1>
          <p className="text-lg text-muted-foreground mb-12">
            My published research papers and ongoing research projects.
          </p>
          
          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{paper.title}</h2>
                  <p className="text-muted-foreground mb-4">
                    {paper.authors.join(", ")}
                  </p>
                  <p className="font-medium mb-4">
                    {paper.venue} ({paper.year})
                  </p>
                  <p className="mb-4">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-2">
                  {paper.links.pdf && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        PDF
                      </a>
                    </Button>
                  )}
                  {paper.links.doi && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={paper.links.doi} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        DOI
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mt-16 mb-6">Current Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Exponential Temporal Sequential Hopfield Network</h3>
                <p className="mb-2">
                  Designing an exponential capacity Hopfield Neural Network with dynamic energy fields that is capable of 
                  learning sequences and patterns in real time.
                </p>
                <Badge variant="outline" className="mt-2">In Progress</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Biologically Plausible Unsupervised Spiking Neural Networks for Image Classification</h3>
                <p className="mb-2">
                  Researching STDP SNN for complex image classification tasks.
                </p>
                <Badge variant="outline" className="mt-2">In Progress</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Vision-based Learned Control Strategy for XY Inverted Pendulum Navigation</h4>
                <p className="mb-2">
                  Use deep reinforcement learning to train inverted pendulum system variants to 
                  learn balance and navigation with only visual information.
                </p>
                <Badge variant="outline" className="mt-2">In Progress</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
