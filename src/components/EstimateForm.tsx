import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

const referralSources = [
  "Google", "Facebook", "Magazine", "Saw The Truck", "ChatGPT", "Postcard", "Friend/Family", "Other"
];

const EstimateForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    zipcode: "",
    state: "",
    locationType: "",
    referralSource: "",
    smsOptIn: false,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track lead conversion in Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: formData.locationType,
        content_category: 'estimate_form',
      });
    }
    toast({
      title: "Request Submitted!",
      description: "We'll contact you soon to schedule your free estimate.",
    });
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      address: "",
      address2: "",
      city: "",
      zipcode: "",
      state: "",
      locationType: "",
      referralSource: "",
      smsOptIn: false,
      message: "",
    });
  };

  return (
    <section id="estimate" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center text-foreground mb-2">
            Request your Free Estimate
          </h2>
          <p className="text-center text-primary font-heading text-xl mb-8">
            Sunmasters of Dallas
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Your Name (required)</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border text-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Company Name</label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-card border-border text-foreground"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Phone Number (required)</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-card border-border text-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Your Email (required)</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border text-foreground"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Street Address (required)</label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="bg-card border-border text-foreground"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1 block">2nd Line</label>
              <Input
                value={formData.address2}
                onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                className="bg-card border-border text-foreground"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">City (required)</label>
                <Input
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="bg-card border-border text-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Zipcode (required)</label>
                <Input
                  value={formData.zipcode}
                  onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
                  required
                  className="bg-card border-border text-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">State (required)</label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => setFormData({ ...formData, state: value })}
                >
                  <SelectTrigger className="bg-card border-border text-foreground">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Location Type</label>
                <div className="flex gap-4">
                  {["Residential", "Commercial", "Retail"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="locationType"
                        value={type}
                        checked={formData.locationType === type}
                        onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
                        className="accent-primary"
                      />
                      <span className="text-sm text-foreground">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">How did you find us?</label>
                <Select
                  value={formData.referralSource}
                  onValueChange={(value) => setFormData({ ...formData, referralSource: value })}
                >
                  <SelectTrigger className="bg-card border-border text-foreground">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {referralSources.map((source) => (
                      <SelectItem key={source} value={source}>{source}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="sms"
                checked={formData.smsOptIn}
                onCheckedChange={(checked) => setFormData({ ...formData, smsOptIn: checked as boolean })}
              />
              <label htmlFor="sms" className="text-xs text-muted-foreground cursor-pointer">
                I agree to receive marketing text messages from Sunmasters. Msg/data rates may apply. Reply STOP to opt out.
              </label>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Your Message (required)</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-card border-border text-foreground"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider py-6"
            >
              Submit Information
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;
