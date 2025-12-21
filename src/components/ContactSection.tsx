import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please call us instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="estimate" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Contact Us</span>
        </div>
        <h2 className="section-title text-foreground text-center mb-12">
          Get Your Free Estimate
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground"
                >
                  <option value="">Service Needed</option>
                  <option value="automotive">Automotive Tinting</option>
                  <option value="residential">Residential Tinting</option>
                  <option value="commercial">Commercial Tinting</option>
                  <option value="ppf">Paint Protection Film</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="security">Security Film</option>
                  <option value="smartfilm">Smart Film</option>
                  <option value="patio-screens">Motorized Patio Screens</option>
                </select>
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-background border-border"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-4">
                Call Today for a Free No-Obligation Quote
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to improve your comfort, privacy, and energy efficiency? Contact Sunmasters Window Tinting Rockwall today. Quick scheduling available for residential and commercial projects, with same-day service for most automotive tinting.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Phone</p>
                <a href="tel:+14697574325" className="text-primary text-xl font-bold hover:underline">
                  (469) 757-4325
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Email</p>
                <a href="mailto:aaron@sunmastersdfw.com" className="text-muted-foreground hover:text-primary transition-colors">
                  aaron@sunmastersdfw.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Location</p>
                <address className="text-muted-foreground not-italic">
                  4480 E Interstate 30, Ste 200<br />
                  Rockwall, TX 75087
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Hours</p>
                <p className="text-muted-foreground">Mon-Sat: 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
