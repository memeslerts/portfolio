
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </PageTransition>
  );
};

export default NotFound;
