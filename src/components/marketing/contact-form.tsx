"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send } from "lucide-react";

type ContactRole =
  | ""
  | "patient-family"
  | "healthcare-facility"
  | "healthcare-professional"
  | "other";

interface FormData {
  name: string;
  email: string;
  phone: string;
  role: ContactRole;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 text-center space-y-4">
        <CheckCircle className="mx-auto h-12 w-12 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">
          Thank You for Reaching Out
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We have received your message and will respond within one business
          day. If your matter is urgent, please call us directly.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", role: "", message: "" });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        id="name"
        name="name"
        label="Full Name"
        placeholder="Your full name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="(555) 123-4567"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="role" className="text-sm font-medium text-foreground">
          I am a...
        </label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="patient-family">Patient / Family Member</option>
          <option value="healthcare-facility">Healthcare Facility</option>
          <option value="healthcare-professional">
            Healthcare Professional
          </option>
          <option value="other">Other</option>
        </select>
      </div>
      <Textarea
        id="message"
        name="message"
        label="Message"
        placeholder="How can we help you? Tell us about your needs or questions..."
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}
