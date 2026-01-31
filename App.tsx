import React from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { GrowthChart } from './components/GrowthChart';
import { 
  Rocket, 
  BarChart3, 
  Zap, 
  Target, 
  Search, 
  ArrowRight,
  BrainCircuit,
  Users,
  CheckCircle2,
  BookOpen,
  TrendingUp
} from 'lucide-react';
import { ServiceModule, TeamMember } from './types';

// Data Definition
const services: ServiceModule[] = [
  {
    id: 'audit',
    title: 'Product-Led Growth Audit',
    subtitle: 'Fixing the "Leaky Bucket"',
    description: 'Deep scanning of your internal growth infrastructure to optimize Activation, Retention, and Referral loops.',
    points: [
      'Growth Loops Audit vs. Paid Burn',
      'Activation & Retention Decomposition',
      'Email Sequence & Intent Optimization',
      'Standardized A/B Testing & Dashboarding'
    ],
    icon: <Search className="w-8 h-8 text-blue-400" />
  },
  {
    id: 'strategy',
    title: 'Strategy & Narrative',
    subtitle: 'From Technical Params to Business Value',
    description: 'Solving "Where to invest" and "How to communicate". We translate model capabilities into compelling B2B narratives.',
    points: [
      'High-ROI Channel Mix (SEO, Content, Paid)',
      'Technical to Commercial Translation',
      'B2B Sales & Content Marketing Loops',
      'Budget Allocation Advisory'
    ],
    icon: <Target className="w-8 h-8 text-purple-400" />
  },
  {
    id: 'ai-native',
    title: 'AI-Native Optimization',
    subtitle: 'Eval-Led Growth',
    description: 'Leveraging unique insights from Silicon Valley to optimize variables specific to AI products.',
    points: [
      'Eval-Driven Retention (Accuracy/Latency)',
      'AI UX Friction Removal (Prompting/Waiting)',
      'Community-Led GTM for Devs',
      'Model Performance <-> Growth Feedback Loops'
    ],
    icon: <BrainCircuit className="w-8 h-8 text-emerald-400" />
  }
];

const team: TeamMember[] = [
  {
    name: "Yuzheng (YZ) Sun",
    role: "AI Growth Narrative & Community Leader",
    bio: "Maven Top AI Instructor and Founder of Superlinear AI (10k+ members). A deep insider in Silicon Valley's AI scene.",
    tags: ["Ex-Facebook Marketplace", "Ex-Tencent Games", "Ex-Statsig"],
    experience: [
      "30x KPI Growth at FB Marketplace",
      "Managed 100M+ User Acquisition at Tencent",
      "Built B2B Narratives from 0-1 at Statsig",
      "Non-consensus insights from 100+ Unicorn Founder interviews"
    ],
    image: "https://picsum.photos/id/1/400/400" // Placeholder
  },
  {
    name: "Mengying Li",
    role: "PLG & AI Data Architecture Authority",
    bio: "Defining how AI quality correlates with growth. Author of 'Growth Data Analytics Playbook'.",
    tags: ["Braintrust Head of Data", "Ex-Notion Head of Growth DS", "Ex-Facebook DS Mgr"],
    experience: [
      "Led Growth Data Foundation at Notion (Global PLG Leader)",
      "Head of Data & PLG at Braintrust (AI Evals)",
      "Managed Core Growth Levers (Notifications) at FB",
      "Systematic approach to AI Measurement"
    ],
    image: "https://picsum.photos/id/64/400/400" // Placeholder
  }
];

const painPoints = [
  "Users are growing, but you don't know why or how to control it.",
  "Strong model performance, but high Day-1 churn due to 'Chatbox Anxiety'.",
  "Transitioning from B2C to B2B but lacking a convincing enterprise narrative."
];

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-300 selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
              For Post-PMF AI Companies (MRR &gt; $50k)
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                1-to-10 Growth Engine
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Stop burning cash on linear channels. We build systematic Model-User Feedback Loops and translate technical parameters into billion-dollar narratives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Strategy Call
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}>
                View Methodology
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <GrowthChart />
            <p className="text-center text-xs text-gray-500 mt-4 italic">
              "Traditional funnels are failing. The future is feedback loops."
            </p>
          </div>
        </div>
      </div>

      {/* Value Prop / Problem */}
      <Section background="darker">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Traditional Growth Fails in AI</h2>
            <div className="space-y-6">
              {[
                { title: "The Leaky Bucket", desc: "Acquiring users without fixing Activation/Retention loops is burning runway." },
                { title: "Technical Trap", desc: "Great models don't sell themselves. Tech parameters need business translation." },
                { title: "Broken Feedback", desc: "Growth metrics must be tied to Model Evals (Accuracy, Latency) to be sustainable." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-bold">✕</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">The Superlinear Approach</h3>
            <p className="text-gray-400 mb-6">
              We don't just give advice. We implement the systems used by Silicon Valley's fastest-growing AI unicorns.
            </p>
            <ul className="space-y-3">
              {[
                "Data-Driven Infrastructure Audit",
                "Model-User Feedback Loops",
                "Playbook-based Execution",
                "Deep Industry Benchmarking"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Advisory Modules</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A minimum 3-month engagement designed to overhaul your growth engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800/20 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all hover:bg-gray-800/40 group">
              <div className="mb-6 p-3 bg-gray-900 rounded-lg w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">{service.subtitle}</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1.5 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Methodology / Trust */}
      <Section id="methodology" background="darker">
        <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 md:p-12 border border-indigo-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-indigo-400" />
                <span className="text-indigo-300 font-semibold tracking-wide uppercase text-sm">Our Playbook</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Authors of "Growth Data Analytics Playbook"</h2>
              <p className="text-gray-300 mb-6">
                Our consultancy isn't based on gut feeling. It's built on a systematic methodology co-authored by our founders, applying proven data science principles to the chaotic world of AI growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <span className="block text-2xl font-bold text-white mb-1">Standardized</span>
                  <span className="text-xs text-gray-400">Audit Templates & Dashboards</span>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <span className="block text-2xl font-bold text-white mb-1">Actionable</span>
                  <span className="text-xs text-gray-400">Experimentation Lists</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
               {/* Visual representation of a book or method */}
               <div className="w-64 h-80 bg-gray-900 border border-gray-700 rounded-r-2xl rounded-l-md shadow-2xl flex flex-col items-center justify-center p-8 relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute left-2 top-0 bottom-0 w-2 bg-gray-800/50"></div>
                  <BarChart3 className="w-16 h-16 text-indigo-500 mb-4" />
                  <h3 className="text-xl font-bold text-white text-center">Growth Data<br/>Analytics<br/>Playbook</h3>
                  <div className="mt-8 text-xs text-gray-500">Systematic AI Growth</div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Led by AI Industry Insiders</h2>
          <p className="text-gray-400">Combining Growth Strategy, Data Science, and Silicon Valley Networks.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="bg-[#0F1623] rounded-2xl overflow-hidden border border-gray-800 flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-gray-800 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1623] to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-indigo-400 text-sm font-medium mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed italic">
                  "{member.bio}"
                </p>
                <ul className="space-y-1">
                  {member.experience.map((exp, eIdx) => (
                    <li key={eIdx} className="text-xs text-gray-500 flex items-start gap-2">
                      <Rocket className="w-3 h-3 mt-0.5 text-blue-500" />
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA / Contact */}
      <Section id="contact" background="darker">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 md:p-16 text-center border border-gray-700 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to Scale Superlinearly?
            </h2>
            
            <div className="max-w-2xl mx-auto mb-10 text-left relative z-10">
              <p className="text-gray-400 text-center mb-8 text-lg">
                If you are a post-PMF AI founder facing these challenges, let's talk:
              </p>
              <div className="grid gap-4">
                {painPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-black/20 p-4 rounded-lg border border-gray-700/50">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      ?
                    </div>
                    <span className="text-gray-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button className="w-full sm:w-auto text-lg px-8 py-4">
                Book Intro Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                Join Community
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#0B0F19] border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-white tracking-tight">Superlinear Growth Advisory</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Superlinear. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Maven</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;