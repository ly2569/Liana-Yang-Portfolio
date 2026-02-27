/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight,
  ChevronLeft,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  BarChart3,
  Target,
  Palette,
  Layout,
  Globe,
  Plus,
  Minus,
  ArrowUpRight
} from 'lucide-react';

// --- Types ---
interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}

interface Education {
  degree: string;
  school: string;
  location: string;
  date: string;
  notes: string;
}

interface Project {
  title: string;
  desc: string;
  tools: string;
  impact: string;
  category: string;
  link: string;
  image?: string;
  gallery?: string[];
  imageFit?: 'cover' | 'contain';
}

interface CategoryGroup {
  category: string;
  projects: Project[];
}

// --- Data ---
const EXPERIENCE: Experience[] = [
  {
    role: 'Marketing and Communication Intern',
    company: 'FANG NYC',
    location: 'New York, NY',
    date: 'Sep 2025 - Dec 2025',
    bullets: [
      'Coordinated influencer collaborations, sponsorships, and photoshoots, aligning with the content calendar to expand brand visibility.',
      'Developed press materials and social media copy, leveraging analytics to refine messaging that boosted average post reach by 15% and strengthened overall brand storytelling.',
      'Created campaign decks and marketing proposals, integrating social media trend and competitor insights to propose 5+ innovative content strategies, two of which were adopted and resulted in a 10% lift in campaign performance.'
    ]
  },
  {
    role: 'Digital Marketing Intern (Team Lead)',
    company: 'A ROUND Entertainment',
    location: 'New York, NY',
    date: 'Jun 2025 - Sep 2025',
    bullets: [
      'Managed multi-platform content (Instagram, TikTok, YouTube, X, Threads, REDnote) using CapCut, Photoshop, and Canva; produced and edited weekly street interview/challenge videos that drove a 20% increase in total views and strengthened audience engagement.',
      'Conducted market and competitive research for Al dating app JOOPI, delivering 3+ feature proposals and actionable audience insights that informed product positioning and user acquisition strategies.',
      'Designed brand assets and style guide and built a go-to-market strategy that outlined launch timeline, key messaging, and acquisition channels contributing to a cohesive brand identity and measurable traction post-launch.'
    ]
  },
  {
    role: 'Student Ambassador Marketing Intern',
    company: 'YAMI',
    location: 'New York, NY',
    date: 'Oct 2024 - Sep 2025',
    bullets: [
      'Managed brand presence across Instagram, TikTok, and RED, posting 12+ pieces monthly to engage student audiences.',
      'Executed 3 themed digital campaigns (K-beauty, Asian snacks, festive), with the K-beauty campaign winning 1st place in the national program.',
      'Designed 20+ promotional materials including banners, mood boards, and webpages using Photoshop and Canva, aligning creative direction with brand identity to strengthen visual storytelling.',
      'Planned and hosted 7 campus promotional events with student orgs, each attracting 150+ new customers through immersive brand activations.'
    ]
  },
  {
    role: 'Director Intern in TV Show Hello Saturday',
    company: 'Hunan TV',
    location: 'Hunan, China',
    date: 'May 2024 - July 2024',
    bullets: [
      'Contributed to the creative development of 3 episodes, assisting with casting, theme ideation, scripting, and game design, leading to a 15% increase in viewership.',
      'Conducted competitive analysis and compiled 50+ pages of research on artist marketability and trending topics; presented insights to senior producers to inform casting and content strategy.',
      'Coordinated day-to-day production as on-set executive producer, streamlining workflows and collaborating across writers, editors, and marketing teams to ensure seamless execution.'
    ]
  },
  {
    role: 'Social Media Management Intern',
    company: 'Hunan TV',
    location: 'Hunan, China',
    date: 'Jun 2023 - Aug 2023',
    bullets: [
      'Produced and edited 10+ official TikTok videos for Hello Saturday, Chinese Restaurant 7, and Riding the Wind 2023, generating 100K+ cumulative views.',
      'Managed official social media channels, executing campaigns, drafting trending hashtags, and optimizing posts, resulting in a 25% engagement uplift.',
      'Analyzed campaign performance data to adjust strategy in real time, ensuring alignment with show promotion objectives and maximizing digital reach.'
    ]
  }
];

const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Science in Media, Culture, & Communications',
    school: 'New York University, Steinhardt',
    location: 'New York, NY',
    date: 'May 2026',
    notes: 'Minor in Business of Entertainment Industry and Technology'
  },
  {
    degree: 'Bachelor of Arts, Communication',
    school: 'University of California, Davis',
    location: 'Davis, CA',
    date: 'Aug 2021 - Jun 2023',
    notes: ''
  }
];

const PORTFOLIO_DATA: CategoryGroup[] = [
  {
    category: 'SOCIAL MEDIA CONTENT',
    projects: [
      { 
        category: 'SOCIAL MEDIA CONTENT', 
        title: 'FANG NYC', 
        desc: 'FANG NYC is a New York–based queer concept fashion brand. During my internship, I produced short-form video content covering runway shows, sponsorship collaborations, and influencer partnerships. I also managed monthly content planning using Planoly and ensured cross-platform consistency across Instagram and TikTok. By analyzing engagement patterns and audience behavior through Meta Business Suite and Google Analytics, I refined content angles and posting strategy to improve performance.', 
        tools: 'CapCut, Planoly, Meta Business Suite, Google Analytics, Canva', 
        impact: 'Produced Reels averaging 19–21K views, contributed to a 20% increase in engagement, and supported a 15% growth in overall campaign reach.',
        link: 'https://www.instagram.com/fang.nyc/?hl=en',
        image: 'https://lh3.googleusercontent.com/d/1AoZcpyXeBkpraBxo96q0879B6Q_dOaJ3'
      },
      { 
        category: 'SOCIAL MEDIA CONTENT', 
        title: 'JOOPI AI Dating App', 
        desc: 'JOOPI is an AI-powered dating app targeting Gen Z and young urban users. To grow brand awareness and drive account followers, we launched a weekly street interview and challenge-style video series in New York City.\n\nI led the project end-to-end, from concept planning and content scripting to on-site shooting, editing, and performance analysis. Each episode explored dating culture, relationship dynamics, and spontaneous social reactions in NYC. By analyzing platform insights, I optimized content hooks, pacing, and distribution timing.', 
        tools: 'CapCut, Photoshop, Canva, YouTube Analytics', 
        impact: 'Increased total video views by 20% and significantly boosted follower growth and local event visibility.',
        link: 'https://www.instagram.com/joopi.official/?hl=en',
        image: 'https://lh3.googleusercontent.com/d/1EjNDQ-zP1-Zik-8Mz_FUNlDKq_4lJyN2'
      }
    ]
  },
  {
    category: 'PRODUCTION',
    projects: [
      { 
        category: 'PRODUCTION', 
        title: 'Filmmaking Projects', 
        desc: 'This portfolio includes a collection of short films produced both in academic settings and on independent film sets. The projects focus on narrative structure, visual composition, and themes of identity, perception, and emotional tension.\n\nAcross different productions, I took on multiple roles including Director, Screenwriter, Director of Photography, Gaffer, Audio Operator, Assistant Director, and Editor. These experiences strengthened my ability to translate abstract concepts into visual language while collaborating closely within structured production teams.', 
        tools: 'Canon C200, Adobe Premiere Pro, professional lighting and audio equipment', 
        impact: 'Developed end-to-end production expertise from pre-production to post-editing.',
        link: 'https://drive.google.com/drive/folders/1QDR1RuehwAec_ZgdD7BqFtAcs4Q0GvRj?usp=sharing',
        gallery: [
          'https://lh3.googleusercontent.com/d/1qUIJx2L188Td7a17JxQFswPyicBMVTP0',
          'https://lh3.googleusercontent.com/d/1xfap8XIQzEBgu9gj2z29eIb5440Tiylo',
          'https://lh3.googleusercontent.com/d/133nUu-qur8UCCXS4qC6Ws_es-BvuN8mU',
          'https://lh3.googleusercontent.com/d/1OEiUEpYE3EmYP24sqstrA9Ssw20g3MGa'
        ]
      },
      { 
        category: 'PRODUCTION', 
        title: 'Hello Saturday TV (Hunan TV)', 
        desc: 'Hello Saturday is one of China’s leading national entertainment variety shows, produced by Hunan TV and broadcast to a nationwide audience.\n\nAs part of the production team, I participated in episode brainstorming, casting research, and entertainment trend analysis to align content with audience interests. I contributed to interview preparation, script refinement, and on-set coordination to ensure smooth execution. Notably, two game segment concepts I designed were successfully adopted and incorporated into the final broadcast episodes.', 
        tools: 'Competitive analysis research, scripting documents, production scheduling tools', 
        impact: 'Contributed to a 15% increase in episode viewership during the production period.',
        link: 'https://youtu.be/zc5ZXdq4rKA?si=MW_ikkSih5MiB0lN',
        gallery: [
          'https://lh3.googleusercontent.com/d/18qRfnDWf9wxKwCxY9DgpK0McZZAha9_R',
          'https://lh3.googleusercontent.com/d/1Qb1D0xJa43w6omQL7iGvYRkhSNbpvrni',
          'https://lh3.googleusercontent.com/d/1GcbnIdM0NWivOlEJ_RSXVu53mi34IY8h',
          'https://lh3.googleusercontent.com/d/1RHSR4kiwa7_V5E6K3eeAb-0q_Pf-ZbbB'
        ]
      }
    ]
  },
  {
    category: 'EVENTS',
    projects: [
      { 
        category: 'EVENTS', 
        title: 'Park Up Music Festival', 
        desc: 'Park Up was a campus music festival designed to bring together Chinese international students and celebrate shared cultural identity in New York. The event took place at Washington Square Park, a symbolic gathering space at the heart of campus life.\n\nFrom early planning to on-site execution, I was involved in structuring the event program, coordinating performers and hosts, and managing promotional rollout across social platforms. The festival featured New York–based REDnote and Douyin influencers, blending digital culture with live community engagement.', 
        tools: 'Event Logistics, Social Media Promotion, Talent Coordination', 
        impact: 'Attracted a massive turnout, generating 1.4M+ views online and amplifying event visibility across platforms.',
        link: '',
        gallery: [
          'https://lh3.googleusercontent.com/d/1PW1VL2SXa0pWmZBD1yaqi_BhAmX56rIz',
          'https://lh3.googleusercontent.com/d/1ibNkOMxhQrPCpsdIyjMXpoyn9Q9ngONT',
          'https://lh3.googleusercontent.com/d/1NFL8qa0-EV32_ThmVbr5wI6dXrjuFPJT',
          'https://lh3.googleusercontent.com/d/131vzR0Eh7VJDGFBIu3aFqkPhjMots4Rc',
          'https://lh3.googleusercontent.com/d/1uu29y_BEXOHPemwiop2gZ_LSHtpbIbD8',
          'https://lh3.googleusercontent.com/d/1PjKq0TM_DqPlgVR2J0weaezgswiwYn27',
          'https://lh3.googleusercontent.com/d/1phjfkEH7W9HSN4nzPaf5e8i5jIml9Se8'
        ]
      },
      { 
        category: 'EVENTS', 
        title: 'YAMI Offline Event', 
        desc: 'This project was an animation-themed pop-up event for YAMI, an Asian snack and beauty e-commerce platform. We targeted anime and Asian pop culture enthusiasts, recognizing their existing affinity for Asian snacks and beauty products.\n\nI helped develop the themed concept, pitch the idea, and secure a placement at Journal Squared for a curated market event. For conversion strategy, we designed a simple and low-friction process: participants scanned a QR code, signed up, and entered a raffle. Because the participation process was quick and incentive-driven, engagement felt organic rather than forced.', 
        tools: 'Canva, Photoshop, QR tracking system, on-site activation materials', 
        impact: 'Generated over 300 new registered users in a single activation.',
        link: '',
        gallery: [
          'https://lh3.googleusercontent.com/d/1KRiTD6Oyn76K6M-dLwwHYNKCUTuRhoXA',
          'https://lh3.googleusercontent.com/d/1YhL-N3-SNAx-8EoaVb1jNDy2_ISwLbpJ',
          'https://lh3.googleusercontent.com/d/1IMKMLuE6BjjEHBOR3Z-5r1XRu95oxtNH',
          'https://lh3.googleusercontent.com/d/1xsf6wEl6NYk801VkUD5oC5NOs3Kg1QoQ',
          'https://lh3.googleusercontent.com/d/1NS2sjhUVTkLcqIoKAxr98HNwXSvhbRjA'
        ]
      }
    ]
  },
  {
    category: 'MARKETING ANALYTICS',
    projects: [
      { 
        category: 'MARKETING ANALYTICS', 
        title: 'E-commerce Campaign Analysis', 
        desc: 'This Tableau case study analyzes how acquisition channels and customer touchpoints drive growth and revenue performance for an e-commerce company.\n\nI built interactive dashboards covering the full marketing funnel, from traffic acquisition to conversion and lifetime value. The analysis evaluated CAC, LTV, ROAS, media mix performance, attribution paths, and email engagement to identify optimization opportunities.', 
        tools: 'Tableau, SQL, Excel', 
        impact: 'Delivered actionable insights for funnel optimization and media mix efficiency.',
        link: 'https://public.tableau.com/app/profile/liana.yang',
        image: 'https://lh3.googleusercontent.com/d/19s2tnDaNK1hQ6A2BJNvMN0MmsmWeTDmt',
        imageFit: 'contain'
      }
    ]
  },
  {
    category: 'STRATEGY',
    projects: [
      { 
        category: 'STRATEGY', 
        title: 'JOOPI Pitch Deck (Market Research & Product Positioning)', 
        desc: 'JOOPI is an AI-powered dating app designed to make meaningful connections more accessible through affordable pricing, inclusive community positioning, and enhanced safety features.\n\nI conducted market research and competitive analysis to evaluate industry trends, pricing models, user demographics, and trust-related pain points. Based on these insights, I developed a comprehensive pitch deck outlining product positioning, monetization strategy, and go-to-market direction.', 
        tools: 'Market Research, Competitive Analysis, Keynote/PowerPoint', 
        impact: 'Delivered actionable audience insights informing product positioning and GTM strategy.',
        link: 'https://drive.google.com/file/d/1KEGpwfQlWhTfaLxiokpzryM_DOYjXpMj/view?usp=sharing',
        image: 'https://lh3.googleusercontent.com/d/1Dqr8dka5gJd6ndQedWqSyeTwAjSaWakT',
        imageFit: 'contain'
      },
      { 
        category: 'STRATEGY', 
        title: 'Winter Season Campaign Pitch Deck', 
        desc: 'We started with a simple question: how do people feel in winter? Instead of treating K-beauty and snacks as separate product categories, we looked at winter as an emotional and cultural moment.\n\nThrough trend research, we identified the rising influence of winter K-dramas, idol-inspired beauty routines, and cozy self-care culture. We developed a digital campaign that framed these products as part of a shared seasonal lifestyle, connecting products to familiar cultural references such as "K-drama winter glow".', 
        tools: 'Trend Research, Consumer Psychology, Campaign Pitching', 
        impact: 'Our pitch won 1st place in the national ambassador program and was later implemented as an official in-app campaign.',
        link: 'https://www.canva.com/design/DAGXuUq-ghs/zSsHz9ltOZSriGTbcqP_3Q/edit?utm_content=DAGXuUq-ghs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        image: 'https://lh3.googleusercontent.com/d/158Nc3wcDWeoYFEvz5IOKYHOC6lqrqpJ1',
        imageFit: 'contain'
      }
    ]
  }
];

const SKILLS = [
  {
    category: "Data Analysis",
    items: ["SQL", "Excel", "Tableau", "Google Analytics"],
    icon: BarChart3
  },
  {
    category: "Marketing Tools",
    items: ["Meta Business Suite", "TikTok Ads", "Mailchimp", "HubSpot"],
    icon: Target
  },
  {
    category: "Creative Design",
    items: ["Adobe Creative Suite", "Canva", "CapCut"],
    icon: Palette
  },
  {
    category: "Productivity & CMS",
    items: ["Microsoft Office", "Google Workspace", "Notion", "WordPress"],
    icon: Layout
  },
  {
    category: "Language",
    items: ["English", "Mandarin", "Korean"],
    icon: Globe
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-lightest/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-brand-darkest">
          LY.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-brand-dark hover:text-brand-darkest transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-darkest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-lightest border-b border-brand-light p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif italic text-brand-darkest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="font-serif text-4xl md:text-5xl text-brand-darkest mb-2">{title}</h2>
    {subtitle && <p className="text-brand-medium uppercase tracking-[0.2em] text-sm font-semibold">{subtitle}</p>}
    <div className="w-20 h-1 bg-brand-medium mt-4"></div>
  </div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image || `https://picsum.photos/seed/${project.title}/1200/1600`];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
    >
      <div className="absolute inset-0 bg-brand-darkest/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="relative w-full max-w-7xl h-full max-h-[90vh] bg-brand-lightest rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-brand-darkest hover:scale-110 transition-transform flex items-center space-x-2 text-xs font-bold tracking-widest uppercase bg-brand-lightest/80 backdrop-blur-sm px-3 py-1 rounded-full md:bg-transparent md:p-0"
        >
          <span>Close</span>
          <X size={20} />
        </button>

        {/* Visuals Column (Carousel) */}
        <div className="w-full md:w-1/2 h-full bg-brand-light relative overflow-hidden flex items-center justify-center p-4 md:p-8">
          <div className="w-full h-full rounded-sm overflow-hidden shadow-2xl relative group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={images[currentImageIndex]} 
                alt={`${project.title} - ${currentImageIndex + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'} ${project.imageFit === 'contain' ? '' : 'grayscale group-hover:grayscale-0'} transition-all duration-1000`}
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-brand-darkest/10"></div>

            {images.length > 1 && (
              <>
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-lightest/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-brand-lightest/40 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-lightest/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-brand-lightest/40 transition-all"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Context Column */}
        <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
          <div className="mb-12">
            <p className="text-brand-medium uppercase tracking-[0.2em] text-xs font-bold mb-4">{project.category}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-darkest leading-tight mb-8">{project.title}</h2>
            <div className="w-20 h-[1px] bg-brand-medium mb-12"></div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-medium mb-4">Description</h4>
                <div className="text-brand-dark leading-[1.8] text-lg whitespace-pre-wrap">
                  {project.desc}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-medium mb-4">Tools</h4>
                  <p className="text-sm text-brand-darkest font-medium">{project.tools}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-medium mb-4">Impact</h4>
                  <p className="text-sm text-brand-darkest font-medium">{project.impact}</p>
                </div>
              </div>

              <div className="pt-8">
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-brand-darkest text-brand-lightest px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] items-center space-x-3 hover:bg-brand-dark transition-colors shadow-lg"
                  >
                    <span>View Live Project</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section id="portfolio" className="py-32 px-6 bg-brand-lightest">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Selected Work" subtitle="Portfolio" />
        
        <div className="mt-20 border-t border-brand-medium/30">
          {PORTFOLIO_DATA.map((group) => (
            <div key={group.category} className="border-b border-brand-medium/30">
              <button 
                onClick={() => toggleCategory(group.category)}
                className="w-full py-10 flex justify-between items-center group text-left"
              >
                <h3 className="font-serif text-3xl md:text-5xl text-brand-darkest group-hover:translate-x-4 transition-transform duration-500 uppercase tracking-tighter">
                  {group.category}
                </h3>
                <div className="w-12 h-12 rounded-full border border-brand-medium/30 flex items-center justify-center group-hover:bg-brand-darkest group-hover:text-brand-lightest transition-all duration-500">
                  {expandedCategory === group.category ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>

              <AnimatePresence>
                {expandedCategory === group.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {group.projects.map((project, idx) => (
                        <motion.div
                          key={project.title}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => setSelectedProject(project)}
                          className="group cursor-pointer"
                        >
            <div className="aspect-[4/3] bg-brand-light rounded-sm overflow-hidden mb-6 relative shadow-sm">
              <img 
                src={project.image || (project.gallery && project.gallery[0]) || `https://picsum.photos/seed/${project.title}/800/600`} 
                alt={project.title}
                className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700`}
                referrerPolicy="no-referrer"
              />
                            <div className="absolute inset-0 bg-brand-darkest/0 group-hover:bg-brand-darkest/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="flex items-center space-x-2 text-brand-lightest text-xs font-bold uppercase tracking-[0.2em]">
                                <span>View Project</span>
                                <ArrowUpRight size={16} />
                              </div>
                            </div>
                          </div>
                          <h4 className="font-serif text-xl text-brand-darkest group-hover:text-brand-medium transition-colors">{project.title}</h4>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="py-32 px-6 bg-[#36302A] text-[#F6F3EC]">
      <div className="max-w-7xl mx-auto">
        {/* EDUCATION Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-4 uppercase tracking-wider">Education</h2>
              <div className="w-20 h-[1px] bg-[#B9A590]"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="https://drive.google.com/file/d/1_yqEbHWruwy-bdwpd9pow1tS9qbg9OS8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 md:mt-0 flex items-center space-x-2 border border-[#B9A590]/30 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F6F3EC] hover:text-[#36302A] transition-all duration-300"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white/0 border-l-2 border-transparent hover:border-[#B9A590] hover:bg-[#B9A590]/5 p-8 transition-all duration-300 rounded-r-xl"
              >
                <p className="text-[10px] text-[#B9A590] uppercase tracking-[0.2em] font-bold mb-3">{edu.date}</p>
                <h3 className="font-serif text-2xl mb-2">{edu.degree}</h3>
                <p className="text-lg text-[#B9A590]/80 mb-2">{edu.school}</p>
                <p className="text-sm text-[#F6F3EC]/60">{edu.location}</p>
                {edu.notes && <p className="text-sm italic text-[#B9A590]/60 mt-4">{edu.notes}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4 uppercase tracking-wider">Experience</h2>
            <div className="w-20 h-[1px] bg-[#B9A590]"></div>
          </motion.div>

          <div className="relative pl-8 md:pl-12">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#B9A590]/20"></div>

            <div className="space-y-20">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[33px] md:-left-[49px] top-2 w-2.5 h-2.5 rounded-full border border-[#B9A590]/40 bg-[#36302A] group-hover:bg-[#B9A590] group-hover:border-[#B9A590] transition-all duration-300 z-10"></div>
                  
                  <div className="bg-white/0 border-l-2 border-transparent hover:border-[#B9A590] hover:bg-[#B9A590]/5 p-8 -ml-8 transition-all duration-300 rounded-r-xl">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                      <div>
                        <h3 className="font-serif text-2xl mb-1">{exp.role}</h3>
                        <p className="text-lg text-[#B9A590]">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <p className="text-[10px] text-[#B9A590] uppercase tracking-[0.2em] font-bold">{exp.date}</p>
                        <p className="text-xs text-[#F6F3EC]/40 mt-1">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-[#F6F3EC]/80 leading-relaxed text-base font-light flex items-start">
                          <span className="mr-3 mt-2.5 w-1 h-1 rounded-full bg-[#B9A590]/40 flex-shrink-0"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-32 flex justify-center">
          <a 
            href="https://drive.google.com/file/d/1_yqEbHWruwy-bdwpd9pow1tS9qbg9OS8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 border border-[#B9A590]/30 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F6F3EC] hover:text-[#36302A] transition-all duration-500 group"
          >
            <Download size={18} className="group-hover:scale-110 transition-transform" />
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-medium selection:text-brand-lightest">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-10 order-2 md:order-1"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-brand-medium uppercase tracking-[0.2em] text-sm font-semibold mb-4 whitespace-nowrap"
            >
              HOME
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="font-serif text-6xl lg:text-8xl xl:text-9xl text-[#36302A] leading-[0.85] mb-4 tracking-tighter"
            >
              Liana Yang
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-brand-medium uppercase tracking-[0.2em] text-sm font-semibold mb-10"
            >
              CONTENT STRATEGY & MARKETING ANALYTICS
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="w-20 h-[1px] bg-[#B9A590] mb-10 origin-left"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="text-lg md:text-xl text-brand-dark max-w-md mb-12 leading-relaxed font-light"
            >
              Bridging creativity and data to build impactful brand stories. <br /> Based in New York City.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="flex items-center space-x-10"
            >
              <a href="#portfolio" className="text-xs font-bold uppercase tracking-[0.2em] text-[#36302A] border-b border-[#36302A] pb-2 hover:text-[#B9A590] hover:border-[#B9A590] hover:scale-[1.02] hover:shadow-sm transition-all duration-300">
                View Portfolio
              </a>
              <a href="#contact" className="text-xs font-bold uppercase tracking-[0.2em] text-[#36302A] border-b border-[#36302A] pb-2 hover:text-[#B9A590] hover:border-[#B9A590] hover:scale-[1.02] hover:shadow-sm transition-all duration-300">
                Contact
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] bg-brand-light rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(54,48,42,0.3)] relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/d/1whBI02FN7rrxsWYMC1Y_bPSgZK37BdZW" 
                alt="Liana Yang" 
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Editorial accents */}
            <div className="absolute -top-12 -left-12 text-[12rem] font-serif text-brand-light opacity-50 -z-0 select-none hidden lg:block">
              LY
            </div>
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-brand-medium/20 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionHeading title="About Me" subtitle="The Journey" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-[#574C3F] leading-[1.8] text-lg">
                {[
                  "I have always been fascinated by why certain stories stay with us, why some performances go viral, why some campaigns spark conversation, and why some brands feel personal.",
                  "As a Media, Culture, and Communications student at NYU, I have worked across both content production and digital marketing through my coursework and internship experiences. From shaping variety show content to leading digital teams and launching campaigns, I have learned that creativity becomes most powerful when it is supported by insight and guided by strategy.",
                  "I am passionate about building brands that resonate emotionally while remaining grounded in strategy and measurable impact."
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Strengths Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12"
              >
                <h4 className="text-[#B9A590] uppercase tracking-[0.2em] text-2xl font-bold mb-6">Strengths</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Strategic Storytelling",
                    "Creative Thinking",
                    "Fast Learner and Adaptable",
                    "Trend Awareness",
                    "Clear Communication"
                  ].map((tag, i) => (
                    <motion.span 
                      key={tag} 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                      className="px-5 py-2.5 bg-brand-lightest border border-brand-medium/20 rounded-full text-[11px] font-bold uppercase tracking-wider text-brand-darkest shadow-sm cursor-pointer hover:bg-[#B9A590] hover:text-[#F6F3EC] transition-all duration-400"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <div className="flex flex-col pt-0">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[#B9A590] uppercase tracking-[0.2em] text-2xl font-bold mb-8"
              >
                Skills
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((skillGroup, idx) => (
                  <motion.div 
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                    className="bg-brand-lightest p-6 rounded-xl shadow-sm border border-brand-medium/5 hover:shadow-md hover:-translate-y-1 transition-all duration-400 group"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <skillGroup.icon size={16} className="text-[#574C3F]" />
                      <h4 className="font-serif text-lg text-brand-darkest">{skillGroup.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skillGroup.items.map(skill => (
                        <li key={skill} className="text-xs text-brand-dark flex items-center">
                          <ChevronRight size={12} className="mr-1 text-brand-medium" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <Resume />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="Get In Touch" subtitle="Contact" />
              <p className="text-lg text-brand-dark mb-10 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:ly2569@nyu.edu" 
                  className="flex items-center space-x-4 group transition-opacity hover:opacity-80"
                >
                  <div className="w-12 h-12 rounded-full border border-brand-medium flex items-center justify-center group-hover:bg-brand-medium transition-all">
                    <Mail size={20} className="text-brand-darkest" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-medium uppercase tracking-widest">Email</p>
                    <p className="text-brand-darkest font-medium transition-colors group-hover:text-brand-medium">ly2569@nyu.edu</p>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/lianayang" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group transition-opacity hover:opacity-80"
                >
                  <div className="w-12 h-12 rounded-full border border-brand-medium flex items-center justify-center group-hover:bg-brand-medium transition-all">
                    <Linkedin size={20} className="text-brand-darkest" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-medium uppercase tracking-widest">LinkedIn</p>
                    <p className="text-brand-darkest font-medium transition-colors group-hover:text-brand-medium">Liana Yang</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 bg-brand-light p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-dark">Name</label>
                  <input type="text" className="w-full bg-brand-lightest border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-medium outline-none" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-dark">Email</label>
                  <input type="email" className="w-full bg-brand-lightest border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-medium outline-none" placeholder="Your Email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-dark">Message</label>
                <textarea rows={5} className="w-full bg-brand-lightest border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-medium outline-none resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-darkest text-brand-lightest py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-dark transition-all">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-brand-light text-center">
        <p className="font-serif text-2xl text-brand-darkest mb-4">LY.</p>
        <p className="text-xs text-brand-medium uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Liana Yang. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
