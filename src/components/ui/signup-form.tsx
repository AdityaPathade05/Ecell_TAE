"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconRocket,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function AceternitySignupForm({
  onSuccess,
  className,
}: {
  onSuccess?: () => void;
  className?: string;
}) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    department: "Computer Engineering",
    interest: "Startup Incubation & Pitching",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 1200);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md w-full mx-auto rounded-2xl p-8 bg-neutral-950/90 border border-emerald-500/30 text-center space-y-4 backdrop-blur-xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
          <IconCheck className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white">
          Application Received!
        </h3>
        <p className="text-sm text-neutral-300">
          Welcome to the E-Cell Trinity Academy of Engineering entrepreneurship cohort. Our executive coordinators will reach out via WhatsApp and Email.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-amber-400 hover:underline"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "max-w-md w-full mx-auto rounded-2xl p-6 md:p-8 bg-neutral-950/95 border border-neutral-800 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <IconSparkles className="w-4 h-4" />
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
          Cohort 2026–2027 Registration
        </span>
      </div>

      <h2 className="font-heading font-bold text-xl md:text-2xl text-white">
        Join E-Cell TAE Community
      </h2>
      <p className="text-neutral-400 text-xs md:text-sm max-w-sm mt-1 mb-6">
        Register to access startup workshops, incubation mentorship, and national Eureka! & NEC competition tracks.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Aditya"
              type="text"
              required
              value={formData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Pathade"
              type="text"
              required
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="email">College / Personal Email</Label>
          <Input
            id="email"
            placeholder="student@kjei.edu.in"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="phone">WhatsApp Contact Number</Label>
          <Input
            id="phone"
            placeholder="+91 98765 43210"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="department">Department / Engineering Branch</Label>
          <select
            id="department"
            className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500"
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
          >
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics & Telecommunication">
              Electronics & Telecommunication (E&TC)
            </option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="First Year Engineering">First Year (FE)</option>
          </select>
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="interest">Primary Interest</Label>
          <select
            id="interest"
            className="flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500"
            value={formData.interest}
            onChange={(e) =>
              setFormData({ ...formData, interest: e.target.value })
            }
          >
            <option value="Startup Incubation & Pitching">
              Startup Incubation & Pitching
            </option>
            <option value="Technical & Web/App Development">
              Technical & Web/App Development
            </option>
            <option value="Design, Media & Social Outreach">
              Design, Media & Social Outreach
            </option>
            <option value="Event Operations & Sponsorship">
              Event Operations & Sponsorship
            </option>
            <option value="IIT Bombay NEC Competitions">
              IIT Bombay NEC Competitions
            </option>
          </select>
        </LabelInputContainer>

        <div className="pt-2">
          <ShimmerButton
            type="submit"
            className="w-full flex items-center justify-center gap-2 font-heading font-bold"
          >
            <IconRocket className="w-4 h-4 text-amber-400" />
            <span>Submit Membership Application &rarr;</span>
          </ShimmerButton>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
