"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <FoxLogo size="md" />
        <a href="#signup" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
          Get Early Access
        </a>
      </nav>

      <section className="max-w-4xl mx-auto px-8 pt-20 pb-16 text-center">
        <div className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          Now in Early Access
        </div>
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-6">
          Estimates in <span className="text-orange-500">minutes,</span>
          <br />not hours.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
          Describe the job. Field Pro Builder generates a structured, professional estimate — organized by room and trade — ready to send to your client.
        </p>
        <div id="signup" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-orange-400 transition-colors"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          />
          <button
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
          >
            {status === "loading" ? "Joining..." : status === "success" ? "You're in ✓" : "Get Early Access"}
          </button>
        </div>
        {message && <p className={`mt-4 text-sm ${status === "success" ? "text-green-600" : "text-red-500"}`}>{message}</p>}
        <p className="text-gray-400 text-xs mt-4">No spam. Just early access when we're ready.</p>
      </section>

      <div className="max-w-6xl mx-auto px-8"><div className="border-t border-gray-100" /></div>

      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4">How it works</p>
        <h2 className="text-4xl font-black tracking-tight mb-16 max-w-lg">Three steps from job description to proposal.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="text-6xl font-black text-gray-100 leading-none mb-4 select-none">0{i + 1}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8"><div className="border-t border-gray-100" /></div>

      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4">Features</p>
        <h2 className="text-4xl font-black tracking-tight mb-16 max-w-lg">Built for the way contractors actually work.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8"><div className="border-t border-gray-100" /></div>

      <section className="max-w-4xl mx-auto px-8 py-24 text-center">
        <div className="flex justify-center mb-8"><FoxLogo size="lg" /></div>
        <h2 className="text-5xl font-black tracking-tight mb-6">Be first in line.</h2>
        <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
          We're onboarding our first contractors now. Join the waitlist for early access.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-orange-400 transition-colors"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          />
          <button
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
          >
            {status === "loading" ? "Joining..." : status === "success" ? "You're in ✓" : "Get Early Access"}
          </button>
        </div>
        {message && <p className={`mt-4 text-sm ${status === "success" ? "text-green-600" : "text-red-500"}`}>{message}</p>}
      </section>

      <footer className="border-t border-gray-100 px-8 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <FoxLogo size="sm" />
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Field Pro Builder. Northern California.</p>
      </footer>
    </main>
  );
}

function FoxLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-xs px-2.5 py-1", md: "text-sm px-3 py-1.5", lg: "text-xl px-5 py-2.5" };
  return (
    <div className={`bg-orange-500 text-white font-black tracking-tight rounded-lg ${sizes[size]}`}>
      FPB
    </div>
  );
}

const steps = [
  { title: "Describe the job", description: "Type or speak a description of the project. Upload blueprints if you have them. No forms, no templates — just plain language." },
  { title: "AI builds the estimate", description: "Field Pro Builder generates structured line items organized by room and trade. Review, edit, and price each item your way." },
  { title: "Send a professional proposal", description: "Export a client-ready proposal, spec sheet, or contract in seconds. Look like the pro you are." },
];

const features = [
  { icon: "🎙️", title: "Voice & text input", description: "Describe the job however it comes naturally — by voice or text. No rigid forms or complicated interfaces." },
  { icon: "📐", title: "Blueprint intelligence", description: "Upload a PDF blueprint and get a meaningful estimate draft automatically. The only tool that reads your plans." },
  { icon: "📋", title: "Organized by room & trade", description: "Line items are automatically structured by room and trade, making estimates easy to review and easy to explain to clients." },
  { icon: "📄", title: "Client-ready documents", description: "Export polished proposals, spec sheets, and contracts. Built for contractors who want to look sharp without the extra work." },
];