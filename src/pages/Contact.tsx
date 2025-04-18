
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Feel free to reach out if you have any questions or want to collaborate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground mt-1">mimi[dot]lertsaroj[dot]3[at]gmail[dot]com</p>
                  </div>
                </CardContent>
              </Card>
              
{/*               <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground mt-1">+1 (123) 456-7890</p>
                  </div>
                </CardContent>
              </Card> */}
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground mt-1">Amherst, MA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message" 
                        rows={6} 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
