import { ServiceItem, GalleryItem } from '../types';
import glowTransformationImage from '../assets/images/gallery_glow_transformation_1791015597410.webp';
import hairTrichologyImage from '../assets/images/gallery_hair_trichology_1791015608979.webp';
import aestheticLoungeImage from '../assets/images/hero_luxe_aesthetic_lounge_1791015568296.webp';
import facialGlowImage from '../assets/images/hero_luxe_facial_glow_1791015551007.webp';
import receptionImage from '../assets/images/hero_luxury_reception_interior_1791017024309.webp';
import hairPrpImage from '../assets/images/service_hair_prp_therapy_1791016999123.webp';
import hydrafacialImage from '../assets/images/service_hydrafacial_md_1791016988207.webp';
import wellnessImage from '../assets/images/service_iv_wellness_lounge_1791017012692.webp';
import laserImage from '../assets/images/service_laser_hair_removal_1791016973021.webp';
import skinRejuvenationImage from '../assets/images/service_skin_rejuvenation_1791015581795.webp';

export const STUDIO_INFO = {
  name: "VELICS THE GLOW STUDIO",
  tagline: "One Destination for Complete Beauty Transformation",
  motto: "Look Good, Feel Better. Because You Deserve the Best.",
  pillars: "Skin • Hair • Aesthetics • Wellness",
  phone: "+916372889622",
  phoneDisplay: "063728 89622",
  whatsappNumber: "916372889622",
  address: "Tulasi Vihar Rd, Phase-VII, Rangeswar Nagar, Sailashree Vihar, Chandrasekharpur, Bhubaneswar, Odisha 751021",
  shortAddress: "Chandrasekharpur, Bhubaneswar",
  hours: "Monday – Sunday: 9:00 AM – 8:00 PM",
  googleMapsUrl: "https://www.google.com/maps/place/VELICS+THE+GLOW+STUDIO/@20.3381303,85.8138627,17z/data=!4m15!1m8!3m7!1s0x3a1909f578afd95b:0x247f96f1cce9084d!2sVELICS+THE+GLOW+STUDIO!8m2!3d20.3381303!4d85.8138627!10e5!16s%2Fg%2F11zdc_mqh2!3m5!1s0x3a1909f578afd95b:0x247f96f1cce9084d!8m2!3d20.3381303!4d85.8138627!16s%2Fg%2F11zdc_mqh2",
  officialGalleryUrl: "https://www.google.com/maps/place/VELICS+THE+GLOW+STUDIO/@20.3381303,85.8138627,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhCZVRB6aYzgwgElOuJd4GJh!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgrass-cs%2FAABkmLedpbL06zaG-Xy5dFtX1mJVDy8jOR2_PG4OUK755JKXXLHWetgyJO7GzH1nq-fa3GCcVNRycg_e1TTVOXeoME6Cgk0LrpHcm71fSU7VD6RpYPprnX4rQaoFd0kIGfde4mL-BSD6_YDcnGOc%3Dw152-h86-k-no!7i3840!8i2160!4m7!3m6!1s0x3a1909f578afd95b:0x247f96f1cce9084d!8m2!3d20.3381303!4d85.8138627!10e5!16s%2Fg%2F11zdc_mqh2?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  instagram: "https://instagram.com/velicsbbsr",
  facebook: "https://facebook.com",
  facebookReel: "https://www.facebook.com/reel/1105802945250936",
  twitter: "https://twitter.com",
  youtube: "https://www.facebook.com/reel/1105802945250936",
  developerName: "S K DAS",
  developerPhone: "07798977519",
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: receptionImage,
    title: "Flagship Sanctuary in Bhubaneswar",
    subtitle: "Architectural tranquility equipped with US-FDA approved technologies in Chandrasekharpur",
    badge: "Chandrasekharpur Flagship"
  },
  {
    id: 2,
    image: hydrafacialImage,
    title: "Clinical Radiance & Hydrafacial MD",
    subtitle: "Vortex acid peel, deep cellular antioxidant infusion for instant luminous glass skin",
    badge: "Signature Luminous Skin"
  },
  {
    id: 3,
    image: aestheticLoungeImage,
    title: "VIP Consultation Suites",
    subtitle: "Unhurried, personalized doctor consultations tailored to your individual aesthetic journey",
    badge: "Haute Aesthetic Sanctuary"
  },
  {
    id: 4,
    image: laserImage,
    title: "Triple-Wavelength Painless Laser",
    subtitle: "Advanced diode cooling technology for lifelong smooth, hair-free confidence",
    badge: "Advanced Laser Suites"
  },
  {
    id: 5,
    image: glowTransformationImage,
    title: "Complete Transformation Journeys",
    subtitle: "Skin • Hair • Aesthetics • Wellness curated under one bespoke, clinical roof",
    badge: "5.0 Google Verified Care"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "skincare",
    categoryLabel: "Skin / Laser",
    tagline: "Painless, permanent smoothness with advanced diode cooling technology",
    description: "Experience effortless, silky-smooth skin with our triple-wavelength laser hair reduction system. Engineered with integrated contact skin cooling for maximum comfort on all Indian skin types.",
    benefits: ["Zero razor bumps or ingrown hairs", "Clinically proven permanent reduction", "Virtually painless with sapphire contact chilling"],
    duration: "45–60 mins",
    image: laserImage,
    iconName: "Zap",
    popular: true
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial MD",
    category: "skincare",
    categoryLabel: "Clinical Skincare",
    tagline: "Vortex-fusion deep pore cleansing, gentle acid peel & serum infusion",
    description: "Our signature multi-stage medical hydrafacial deeply purifies, extracts stubborn impurities, and infuses active hyaluronic acid and peptide antioxidants for instant glass-skin radiance.",
    benefits: ["Instant luminous dewy glow", "Unclogs enlarged pores without irritation", "Intense cellular hydration barrier restoration"],
    duration: "60 mins",
    image: hydrafacialImage,
    iconName: "Droplets",
    popular: true
  },
  {
    id: "botox-fillers",
    title: "Botox & Dermal Fillers",
    category: "aesthetics",
    categoryLabel: "Facial Aesthetics",
    tagline: "Artisan physician-led facial sculpting & subtle line softening",
    description: "Master aesthetic treatments administered by certified specialists to subtly smooth expression lines, sculpt jawlines, and restore natural youthful volume with US-FDA approved formulations.",
    benefits: ["Preserves natural facial expressions", "Restores youthful facial contours", "Visible, refined results lasting 6–12 months"],
    duration: "30–45 mins",
    image: skinRejuvenationImage,
    iconName: "Sparkles",
    popular: true
  },
  {
    id: "prp-therapy",
    title: "PRP & GFC Therapy",
    category: "hair",
    categoryLabel: "Hair & Scalp",
    tagline: "Autologous growth factor concentrate for dormant follicle revival",
    description: "Harness the regenerative power of your own platelet growth factors. Stimulates micro-circulation, stops active hair fall, and triggers dense new follicle regrowth.",
    benefits: ["100% natural, biocompatible therapy", "Stimulates thicker hair shaft caliber", "Effective for male and female pattern thinning"],
    duration: "60 mins",
    image: hairPrpImage,
    iconName: "Activity",
    popular: true
  },
  {
    id: "hair-transplant",
    title: "Hair Transplant & Restoration",
    category: "hair",
    categoryLabel: "Hair Restoration",
    tagline: "Permanent, undetectable follicular unit extraction (FUE/DHI)",
    description: "State-of-the-art microsurgical follicular unit extraction ensuring natural hairline design, maximum graft survival, and high density with rapid recovery.",
    benefits: ["Lifelong natural hair growth", "Virtually scarless micro-punch extraction", "Custom artistic hairline alignment"],
    duration: "Half-day procedure",
    image: hairTrichologyImage,
    iconName: "Feather"
  },
  {
    id: "hair-extensions",
    title: "Luxury Hair Extensions",
    category: "hair",
    categoryLabel: "Hair Artistry",
    tagline: "100% Remy human hair extensions for volume and seamless length",
    description: "Weightless nano-ring, tape-in, and micro-keratin extensions customized to your exact hair tone and texture for breathtaking volume and length.",
    benefits: ["Zero damage to natural hair follicles", "Seamlessly blended and styled", "Heat-styleable and washable"],
    duration: "90–120 mins",
    image: hairTrichologyImage,
    iconName: "Scissors"
  },
  {
    id: "skin-rejuvenation",
    title: "Advanced Skin Rejuvenation",
    category: "skincare",
    categoryLabel: "Clinical Skincare",
    tagline: "Collagen induction, carbon laser peel & dermal remodeling",
    description: "Reawaken fatigued skin with customized clinical peels, microneedling RF, and carbon hollywood peels designed to reverse sun damage and texture irregularities.",
    benefits: ["Refines stubborn acne scars", "Tightens open pores and stimulates collagen", "Evens hyperpigmentation and melasma"],
    duration: "60 mins",
    image: skinRejuvenationImage,
    iconName: "Sun"
  },
  {
    id: "anti-aging-treatments",
    title: "Anti-Aging & Skin Tightening",
    category: "aesthetics",
    categoryLabel: "Facial Aesthetics",
    tagline: "Non-surgical lifting, HIFU & radiofrequency contouring",
    description: "Target deep SMAS tissue layers to lift sagging jowls, tighten neck contours, and stimulate long-term elastin without any surgical downtime.",
    benefits: ["Defines jawline and cheek contours", "Stimulates deep neocollagenesis", "Non-invasive with zero social downtime"],
    duration: "60–75 mins",
    image: laserImage,
    iconName: "ShieldCheck"
  },
  {
    id: "eyelash-extensions",
    title: "Bespoke Eyelash Extensions",
    category: "bridal",
    categoryLabel: "Beauty Artistry",
    tagline: "Featherlight silk lash mapping tailored to your eye shape",
    description: "Handcrafted classic, hybrid, and Russian volume lashes applied with medical-grade hypoallergenic bonding for captivating, weightless eye definition.",
    benefits: ["Customized curl, length, and density", "Completely mascara-free daily glamour", "Water-resistant with 4–6 week retention"],
    duration: "75–90 mins",
    image: glowTransformationImage,
    iconName: "Eye"
  },
  {
    id: "iv-wellness-drips",
    title: "IV Nutrient Wellness Drips",
    category: "wellness",
    categoryLabel: "Wellness & Glow",
    tagline: "Direct bio-available vitamin, mineral, and hydration infusions",
    description: "Relax in our private wellness lounge while nutrient-rich intravenous formulas replenish cellular vitality, elevate energy, and flush out metabolic toxins.",
    benefits: ["100% bio-availability bypassing digestion", "Instant energy revitalization & immunity surge", "Deep cellular hydration for inner luminescence"],
    duration: "45 mins",
    image: wellnessImage,
    iconName: "HeartPulse",
    popular: true
  },
  {
    id: "glutathione-therapy",
    title: "Master Glutathione Therapy",
    category: "wellness",
    categoryLabel: "Wellness & Glow",
    tagline: "Premier antioxidant infusion for systemic skin brightening & detox",
    description: "Medical-grade reduced glutathione paired with high-dose vitamin C to neutralize free radicals, inhibit excessive melanin synthesis, and restore a crystal-clear complexioned glow.",
    benefits: ["Systemic skin tone clarification", "Powerful hepatic liver detoxification", "Rejuvenates overall body vitality"],
    duration: "45 mins",
    image: facialGlowImage,
    iconName: "Gem",
    popular: true
  },
  {
    id: "nail-studio",
    title: "Luxury Nail Studio",
    category: "bridal",
    categoryLabel: "Hand & Foot Spa",
    tagline: "Gel extensions, French ombre, and revitalizing spa manicure-pedicures",
    description: "Pamper hands and feet with sterile European dry manicures, long-lasting builder gel sculpting, and nourishing cuticle botanical rituals.",
    benefits: ["Non-toxic chip-resistant formulas", "Sterilized medical-grade implements", "Custom bespoke nail art & chrome finishes"],
    duration: "60–90 mins",
    image: aestheticLoungeImage,
    iconName: "Smile"
  },
  {
    id: "bridal-makeover",
    title: "High-Definition Bridal Makeover",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    tagline: "Couture wedding day styling, airbrush makeup & skin prep",
    description: "Complete bridal radiance packages including pre-wedding skin brightening, HD airbrush makeup, couture hair sculpting, and veil draping for your unforgettable milestone.",
    benefits: ["Complete pre-bridal skin & body timeline", "Sweat-proof, 18-hour HD flawless camera wear", "Includes trial session and bespoke consultation"],
    duration: "Full bespoke session",
    image: glowTransformationImage,
    iconName: "Crown",
    popular: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: glowTransformationImage,
    title: "Glass-Skin Radiance Transformation",
    category: "Luminous Skincare",
    description: "Dermatological post-hydrafacial glow and even skin tone restoration."
  },
  {
    id: "g2",
    url: hydrafacialImage,
    title: "Hydrafacial MD Clinical Suite",
    category: "Advanced Skincare",
    description: "Triple-stage vortex infusion and active antioxidant dermal delivery."
  },
  {
    id: "g3",
    url: receptionImage,
    title: "Grand Reception & Lounge",
    category: "Studio Ambiance",
    description: "Serene architectural sanctuary on Tulasi Vihar Rd, Chandrasekharpur."
  },
  {
    id: "g4",
    url: laserImage,
    title: "Painless Diode Laser Technology",
    category: "Laser Aesthetics",
    description: "Triple-wavelength laser equipped with sapphire sub-zero contact cooling."
  },
  {
    id: "g5",
    url: hairPrpImage,
    title: "Trichology & PRP Follicle Suite",
    category: "Hair Restoration",
    description: "Precision scalp diagnostics and autologous platelet growth therapy."
  },
  {
    id: "g6",
    url: wellnessImage,
    title: "Private IV Wellness Lounge",
    category: "Holistic Wellness",
    description: "Deep cellular hydration, master glutathione and vitamin infusions."
  },
  {
    id: "g7",
    url: skinRejuvenationImage,
    title: "Precision Facial Contouring",
    category: "Facial Aesthetics",
    description: "Artisan physician line softening and natural volumetric sculpting."
  },
  {
    id: "g8",
    url: aestheticLoungeImage,
    title: "Bespoke Bridal Glamour Suite",
    category: "Bridal Artistry",
    description: "Couture wedding day skin prep, styling and luxury client hospitality."
  }
];
