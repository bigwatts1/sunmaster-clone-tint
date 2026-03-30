import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Automotive Tinting",
  "Residential Tinting",
  "Commercial Tinting",
  "Paint Protection Film",
  "Ceramic Coating",
  "Security Film",
  "Motorized Patio Screens",
];

const automotiveLocations = [
  "Greenville, TX",
  "Rockwall, TX",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
  });

  const isAutomotiveSelected = formData.service === "Automotive Tinting";

  const handleServiceChange = (value: string) => {
    setFormData({ 
      ...formData, 
      service: value,
      location: value === "Automotive Tinting" ? formData.location : ""
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track lead conversion in Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: formData.service,
        content_category: 'contact_form',
      });
    }
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", location: "" });
  };

  return (
    <section id="contact" className="relative -mt-24 z-20 px-4">
      <div className="container mx-auto">
        <div className="form-container max-w-5xl mx-auto rounded-sm p-8 md:p-12">
          <h2 className="section-title text-center text-foreground mb-8">
            Get In Touch Today!
          </h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Select
              value={formData.service}
              onValueChange={handleServiceChange}
            >
              <SelectTrigger className="bg-card border-border text-foreground">
                <SelectValue placeholder="Service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {isAutomotiveSelected ? (
              <Select
                value={formData.location}
                onValueChange={(value) =>
                  setFormData({ ...formData, location: value })
                }
                required
              >
                <SelectTrigger className="bg-card border-border text-foreground">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {automotiveLocations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
              >
                Submit
              </Button>
            )}
          </form>
          {isAutomotiveSelected && (
            <div className="mt-4 flex justify-end">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
