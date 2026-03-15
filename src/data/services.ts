export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  benefits: string[];
  products: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "automotive-window-tint",
    title: "Automotive Window Tinting",
    shortTitle: "Auto Tint",
    description: "Professional automotive window tinting with XPEL ceramic films that block up to 98% of infrared heat while maintaining crystal-clear visibility.",
    icon: "Car",
    benefits: [
      "Up to 98% infrared heat rejection",
      "99% UV ray protection",
      "Reduced glare for safer driving",
      "Interior protection from fading",
      "Enhanced privacy and security",
      "Lifetime warranty on XPEL films"
    ],
    products: [
      "XPEL PRIME XR Plus ceramic film",
      "XPEL PRIME XR ceramic film",
      "XPEL PRIME CS carbon film",
      "Premium dyed films"
    ],
    faqs: [
      {
        question: "How long does automotive window tinting take?",
        answer: "Most vehicles can be completed in 2-4 hours depending on the number of windows and film type selected."
      },
      {
        question: "Is ceramic tint worth it for my car?",
        answer: "Yes! Ceramic tint provides superior heat rejection without signal interference, making it ideal for Texas heat and modern vehicles with electronic systems."
      },
      {
        question: "What is the darkest legal tint in Texas?",
        answer: "Texas law requires front side windows to allow at least 25% light transmission. Rear windows and back windshield can be any darkness."
      }
    ]
  },
  {
    slug: "ceramic-window-tint",
    title: "Ceramic Window Tint",
    shortTitle: "Ceramic Tint",
    description: "Premium ceramic window film technology that provides the ultimate heat rejection without interfering with electronic signals or reducing visibility.",
    icon: "Sparkles",
    benefits: [
      "Superior heat rejection technology",
      "No signal interference (GPS, cell, radio)",
      "Crystal-clear optical clarity",
      "Non-metallic, non-conductive",
      "Fade-resistant color stability",
      "Lifetime manufacturer warranty"
    ],
    products: [
      "XPEL PRIME XR Plus (top tier)",
      "XPEL PRIME XR ceramic",
      "3M Ceramic IR series",
      "Premium nano-ceramic films"
    ],
    faqs: [
      {
        question: "What makes ceramic tint better than regular tint?",
        answer: "Ceramic tint uses nano-ceramic particles instead of dyes or metals, providing better heat rejection, no signal interference, and longer-lasting performance."
      },
      {
        question: "Does ceramic tint really block more heat?",
        answer: "Yes, ceramic tint can reject up to 98% of infrared heat compared to 40-60% for standard films, significantly reducing interior temperatures."
      },
      {
        question: "Is ceramic tint worth the extra cost?",
        answer: "For Texas heat, absolutely. The superior heat rejection pays for itself in comfort and reduced A/C usage, plus it lasts longer than standard films."
      }
    ]
  },
  {
    slug: "residential-window-tint",
    title: "Residential Window Tinting",
    shortTitle: "Home Tint",
    description: "Energy-saving window film for homes that reduces heat, blocks UV rays, and protects your furniture while lowering energy costs.",
    icon: "Home",
    benefits: [
      "Up to 30% reduction in cooling costs",
      "99% UV protection for furnishings",
      "Reduced glare on screens and surfaces",
      "Enhanced daytime privacy",
      "Holds glass together if broken",
      "Maintains natural light and views"
    ],
    products: [
      "Solar control window films",
      "Dual-reflective films",
      "Neutral and low-reflectivity options",
      "Decorative and privacy films"
    ],
    faqs: [
      {
        question: "Will window film make my home too dark?",
        answer: "No, modern window films are designed to reduce heat and glare while maintaining natural light. We offer various shade levels to match your preferences."
      },
      {
        question: "How much can I save on energy bills?",
        answer: "Most homeowners see 20-30% reduction in cooling costs, especially during hot Texas summers when A/C usage is highest."
      },
      {
        question: "Does residential window film come with a warranty?",
        answer: "Yes, all our residential installations include manufacturer warranties ranging from 10 years to lifetime depending on the film selected."
      }
    ]
  },
  {
    slug: "commercial-window-tint",
    title: "Commercial Window Tinting",
    shortTitle: "Commercial Tint",
    description: "Professional window film solutions for offices, storefronts, and commercial buildings that improve comfort, reduce energy costs, and enhance aesthetics.",
    icon: "Building2",
    benefits: [
      "Significant energy cost reduction",
      "Improved employee comfort",
      "Reduced glare on computer screens",
      "Professional appearance",
      "UV protection for merchandise",
      "Enhanced building security"
    ],
    products: [
      "Solar control commercial films",
      "Safety and security films",
      "Anti-graffiti protection",
      "Decorative and branding films"
    ],
    faqs: [
      {
        question: "Can window film be applied to commercial high-rises?",
        answer: "Yes, we have experience with multi-story commercial buildings and can coordinate with building management for proper installation."
      },
      {
        question: "Will window film affect our building's appearance?",
        answer: "Modern commercial films are designed to enhance appearance while maintaining architectural integrity. We offer various aesthetic options."
      },
      {
        question: "How long does commercial installation take?",
        answer: "Timeline depends on project size. Most offices can be completed in 1-2 days with minimal disruption to operations."
      }
    ]
  },
  {
    slug: "storefront-window-tint",
    title: "Storefront & Office Window Tint",
    shortTitle: "Storefront Tint",
    description: "Specialized window film for retail storefronts and office spaces that controls heat, reduces glare, and protects merchandise while maintaining visibility.",
    icon: "Store",
    benefits: [
      "Protect merchandise from UV fading",
      "Reduce customer and employee discomfort",
      "Lower cooling costs significantly",
      "Maintain product visibility",
      "Professional storefront appearance",
      "Anti-graffiti options available"
    ],
    products: [
      "Retail display protection films",
      "Low-reflectivity options",
      "Anti-graffiti sacrificial films",
      "Decorative branding films"
    ],
    faqs: [
      {
        question: "Will window film affect how customers see my products?",
        answer: "No, we use low-reflectivity films designed for retail that maintain clear visibility while blocking heat and UV rays."
      },
      {
        question: "Can you install film on existing storefront glass?",
        answer: "Yes, window film can be applied to most existing glass types. We'll assess your glass to recommend the best film option."
      },
      {
        question: "Do you offer anti-graffiti film for storefronts?",
        answer: "Yes, our anti-graffiti film creates a sacrificial layer that can be removed and replaced if vandalized, protecting your glass investment."
      }
    ]
  },
  {
    slug: "privacy-window-film",
    title: "Privacy Window Film",
    shortTitle: "Privacy Film",
    description: "Transform your windows with privacy film that provides daytime privacy while maintaining natural light and views from inside.",
    icon: "Eye",
    benefits: [
      "Daytime privacy from outside",
      "Maintains natural light",
      "One-way mirror effect options",
      "Frosted and decorative styles",
      "UV protection included",
      "No permanent glass changes"
    ],
    products: [
      "One-way reflective privacy films",
      "Frosted and etched glass films",
      "Gradient privacy films",
      "Blackout privacy options"
    ],
    faqs: [
      {
        question: "Does privacy film work at night?",
        answer: "Reflective privacy film works best during daytime. At night when interior lights are on, the effect reverses. Frosted films provide 24/7 privacy."
      },
      {
        question: "Can I still see out with privacy film?",
        answer: "Yes, most privacy films allow clear views from inside while blocking views from outside during daylight hours."
      },
      {
        question: "Is privacy film permanent?",
        answer: "No, window film can be professionally removed without damaging the glass if you ever want to change it."
      }
    ]
  },
  {
    slug: "decorative-window-film",
    title: "Decorative Window Film",
    shortTitle: "Decorative Film",
    description: "Add style and functionality with decorative window films that create beautiful patterns, frosted effects, and custom designs for any space.",
    icon: "Palette",
    benefits: [
      "Custom designs and patterns",
      "Frosted glass appearance",
      "Brand logos and graphics",
      "Partition and conference room privacy",
      "Cost-effective alternative to etched glass",
      "Easy to update or change"
    ],
    products: [
      "Frosted and etched designs",
      "Custom printed graphics",
      "Geometric patterns",
      "Gradient and ombre effects"
    ],
    faqs: [
      {
        question: "Can you create custom designs?",
        answer: "Yes, we can create custom decorative films with your logo, patterns, or specific designs to match your brand or décor."
      },
      {
        question: "Is decorative film suitable for office partitions?",
        answer: "Absolutely! Decorative film is perfect for glass partitions, conference rooms, and office dividers to add privacy with style."
      },
      {
        question: "How long does decorative film last?",
        answer: "Quality decorative films typically last 10-15 years with proper care, and can be replaced if you want to update your design."
      }
    ]
  },
  {
    slug: "security-window-film",
    title: "Security & Safety Window Film",
    shortTitle: "Security Film",
    description: "Protect your property with security window film that holds glass together when broken, deterring break-ins and protecting against storm damage.",
    icon: "Shield",
    benefits: [
      "Holds shattered glass together",
      "Deters smash-and-grab break-ins",
      "Storm and debris protection",
      "UV protection included",
      "Clear or tinted options",
      "Meets safety glazing standards"
    ],
    products: [
      "Clear safety films (4-14 mil)",
      "Tinted security films",
      "Bomb blast mitigation films",
      "Hurricane protection films"
    ],
    faqs: [
      {
        question: "How does security film protect my property?",
        answer: "Security film holds glass fragments together when impacted, preventing easy entry through broken windows and protecting against flying glass."
      },
      {
        question: "Will security film stop a break-in?",
        answer: "While no film is burglar-proof, security film significantly delays entry by holding glass intact, often deterring criminals who want quick access."
      },
      {
        question: "Is security film visible?",
        answer: "Clear security film is virtually invisible. We also offer tinted security films that provide both protection and heat/glare reduction."
      }
    ]
  },
  {
    slug: "motorized-window-shades",
    title: "Motorized Window Shades",
    shortTitle: "Motorized Shades",
    description: "Experience the convenience of motorized window shades with smart home integration for effortless light control and energy savings.",
    icon: "Blinds",
    benefits: [
      "One-touch or automated control",
      "Smart home integration",
      "Energy-efficient scheduling",
      "Child and pet safe (no cords)",
      "Multiple fabric options",
      "Battery or hardwired options"
    ],
    products: [
      "Motorized roller shades",
      "Motorized cellular shades",
      "Motorized solar shades",
      "Motorized blackout shades"
    ],
    faqs: [
      {
        question: "Do motorized shades work with smart home systems?",
        answer: "Yes, our motorized shades integrate with popular systems like Alexa, Google Home, Apple HomeKit, and dedicated automation systems."
      },
      {
        question: "Are motorized shades battery or hardwired?",
        answer: "We offer both options. Battery-powered shades are easier to install, while hardwired provides consistent power for frequent use."
      },
      {
        question: "How long do motorized shade batteries last?",
        answer: "Battery life varies by usage, typically 1-2 years for average use. Many models include low-battery indicators."
      }
    ]
  },
  {
    slug: "solar-heat-rejection-film",
    title: "Solar & Heat Rejection Window Film",
    shortTitle: "Heat Rejection Film",
    description: "Combat Texas heat with advanced solar control films that reject up to 98% of infrared heat while maintaining your views and natural light.",
    icon: "Sun",
    benefits: [
      "Up to 98% infrared heat rejection",
      "Significant A/C cost reduction",
      "Eliminates hot spots",
      "Maintains natural light",
      "UV protection included",
      "Quick return on investment"
    ],
    products: [
      "Ceramic heat rejection films",
      "Spectrally selective films",
      "Dual-reflective technology",
      "High-performance solar films"
    ],
    faqs: [
      {
        question: "How much heat can solar film actually block?",
        answer: "Premium ceramic solar films can reject up to 98% of infrared heat, significantly reducing interior temperatures even on the hottest Texas days."
      },
      {
        question: "Will solar film make my home dark?",
        answer: "No, modern solar films are designed to reject heat while allowing visible light. We offer various options from nearly clear to medium tints."
      },
      {
        question: "How quickly will I see energy savings?",
        answer: "Most customers notice reduced A/C runtime immediately. The full energy savings become apparent within the first billing cycle during summer months."
      }
    ]
  },
  {
    slug: "motorized-patio-screens",
    title: "Motorized Patio Screens",
    shortTitle: "Patio Screens",
    description: "Transform your outdoor living space with retractable motorized screens that provide shade, insect protection, and weather resistance for year-round comfort.",
    icon: "PanelTop",
    benefits: [
      "Retractable for flexible use",
      "Block sun and reduce heat",
      "Insect and debris protection",
      "Weather-resistant materials",
      "Smart home integration",
      "Extends outdoor living season"
    ],
    products: [
      "Motorized retractable screens",
      "Solar shade screens",
      "Insect mesh screens",
      "Privacy screens"
    ],
    faqs: [
      {
        question: "How do motorized patio screens work?",
        answer: "Motorized patio screens operate via remote control, wall switch, or smart home integration. They roll down from a housing unit to provide shade and protection."
      },
      {
        question: "Can patio screens withstand Texas weather?",
        answer: "Yes, our screens are designed for Texas conditions with UV-resistant fabrics and durable motors rated for high temperatures and wind."
      },
      {
        question: "Do motorized screens work with smart home systems?",
        answer: "Absolutely! Our screens integrate with Alexa, Google Home, Apple HomeKit, and other automation systems for voice and app control."
      }
    ]
  },
  {
    slug: "smart-film",
    title: "Smart Film (Switchable Privacy Glass)",
    shortTitle: "Smart Film",
    description: "Transform any glass surface into switchable privacy glass with smart film technology. Instantly transition from clear to frosted with the flip of a switch.",
    icon: "Zap",
    benefits: [
      "Instant privacy on demand",
      "Clear to opaque in milliseconds",
      "Energy-efficient LED technology",
      "Smart home integration capable",
      "UV protection included",
      "Retrofit to existing glass"
    ],
    products: [
      "PDLC smart film",
      "Self-adhesive smart film",
      "Laminated smart glass",
      "Switchable projection film"
    ],
    faqs: [
      {
        question: "How does smart film work?",
        answer: "Smart film uses PDLC (Polymer Dispersed Liquid Crystal) technology. When electric current is applied, the crystals align to become transparent. When off, they scatter light creating a frosted appearance."
      },
      {
        question: "Can smart film be retrofitted to existing windows?",
        answer: "Yes! Our self-adhesive smart film can be applied to most existing glass surfaces without replacing the glass, making it a cost-effective privacy solution."
      },
      {
        question: "Does smart film work with smart home systems?",
        answer: "Absolutely! Smart film integrates with popular home automation systems for voice control, app control, and automated scheduling based on time or sensor input."
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find(service => service.slug === slug);
};

export const serviceCategories = {
  automotive: ["automotive-window-tint", "ceramic-window-tint"],
  residential: ["residential-window-tint", "privacy-window-film", "decorative-window-film", "solar-heat-rejection-film", "motorized-window-shades", "motorized-patio-screens", "smart-film"],
  commercial: ["commercial-window-tint", "storefront-window-tint", "security-window-film", "smart-film"],
};
