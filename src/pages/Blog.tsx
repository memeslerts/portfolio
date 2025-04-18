
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { CalendarDays } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  published_at: string;
  excerpt: string;
  read_time: string;
  tags: string[];
  slug: string;
}

export default function Blog() {
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Research Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Thoughts, tutorials, and insights from my research journey.
          </p>
          
          <div className="space-y-8">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-32 mb-3" />
                    <Skeleton className="h-8 w-3/4 mb-3" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : blogPosts?.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{new Date(post.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    {post.read_time && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{post.read_time}</span>
                      </>
                    )}
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary/80 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mb-4">{post.excerpt}</p>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Read more →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
