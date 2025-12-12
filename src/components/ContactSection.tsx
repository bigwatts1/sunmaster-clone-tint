import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
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
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Phone</p>
                <a href="tel:555-123-4567" className="text-muted-foreground hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Email</p>
                <a href="mailto:info@sunmasters.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@sunmasters.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-lg">Service Area</p>
                <p className="text-muted-foreground">Dallas, TX & Surrounding Counties</p>
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
