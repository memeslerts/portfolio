
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPost() {
  const { postId } = useParams<{ postId: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', postId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', postId)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <article className="prose prose-lg dark:prose-invert max-w-none">
            {isLoading ? (
              <>
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/2 mb-6" />
                <div className="flex gap-2 mb-8">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-40 w-full" />
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span>{new Date(post?.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  {post?.read_time && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{post.read_time}</span>
                    </>
                  )}
                </div>
                
                {post?.tags && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                )}
                
                <div dangerouslySetInnerHTML={{ __html: post?.content }} />
              </>
            )}
          </article>
        </div>
      </div>
    </PageTransition>
  );
}
