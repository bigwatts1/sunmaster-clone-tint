import { Helmet } from "react-helmet";
import { MapPin, Phone, Car, Home, Building2, Shield, Sparkles, Sun, CheckCircle2, ArrowRight, Blinds, Thermometer, DollarSign, Clock, Award, Zap, Eye, Lock, PanelTop, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import { LocationData } from "@/data/locations";
import { Link } from "react-router-dom";
import locationHeroImage from "@/assets/dfw-window-tinting-service.jpeg";
import securityFilmImg from "@/assets/rockwall-security-window-film.jpg";

interface LocationPageProps {
  location: LocationData;
}

interface ServiceNavItem {
  icon: React.ElementType;
  title: string;
  slug: string;
  video?: string;
  image?: string;
}

const getServiceNavItems = (city: string): ServiceNavItem[] => [
  { icon: Car, title: `Automotive Tinting ${city} TX`, slug: "automotive-window-tint", video: "/videos/automotive-bg.mp4" },
  { icon: Home, title: `Residential Tinting ${city} TX`, slug: "residential-window-tint", video: "/videos/residential-bg.mp4" },
  { icon: Building2, title: `Commercial Tinting ${city} TX`, slug: "commercial-window-tint", video: "/videos/commercial-bg.mp4" },
  { icon: Sparkles, title: `Ceramic Tint ${city} TX`, slug: "ceramic-window-tint", video: "/videos/ceramic-bg.mov" },
  { icon: Shield, title: `Security Film ${city} TX`, slug: "security-window-film", image: securityFilmImg },
  { icon: ToggleRight, title: `Smart Film ${city} TX`, slug: "smart-film", video: "/videos/smartfilm-bg.mp4" },
  { icon: PanelTop, title: `Patio Screens ${city} TX`, slug: "motorized-patio-screens", video: "https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//copy_DF98BC66-AF50-462F-AE4A-29E0ECEA82E5.mov" },
];

const getServices = (city: string) => [
  {
    icon: Car,
    title: `Automotive Window Tinting ${city} TX`,
    description: `XPEL ceramic window film for cars, trucks, and SUVs in ${city} with up to 98% heat rejection.`,
    slug: "automotive-window-tint",
    video: "/videos/automotive-bg.mp4",
  },
  {
    icon: Home,
    title: `Residential Window Tinting ${city} TX`,
    description: `Energy-saving window film for ${city} homes that reduces heat, glare, and UV damage.`,
    slug: "residential-window-tint",
    video: "/videos/residential-bg.mp4",
  },
  {
    icon: Building2,
    title: `Commercial Window Tinting ${city} TX`,
    description: `Professional window film solutions for ${city} offices, storefronts, and commercial buildings.`,
    slug: "commercial-window-tint",
    video: "/videos/commercial-bg.mp4",
  },
  {
    icon: Sparkles,
    title: `Ceramic Window Tint ${city} TX`,
    description: `Premium ceramic technology for ${city} vehicles - superior heat rejection without signal interference.`,
    slug: "ceramic-window-tint",
    video: "/videos/ceramic-bg.mov",
  },
  {
    icon: Shield,
    title: `Security & Safety Film ${city} TX`,
    description: `Protect your ${city} property with film that holds glass together when broken.`,
    slug: "security-window-film",
  },
  {
    icon: Sun,
    title: `Solar Heat Rejection Film ${city} TX`,
    description: `Combat ${city} Texas heat with advanced films that reject up to 98% of infrared heat.`,
    slug: "solar-heat-rejection-film",
  },
  {
    icon: ToggleRight,
    title: `Smart Film ${city} TX`,
    description: `Switchable privacy glass for ${city} homes and businesses - transitions from clear to opaque instantly.`,
    slug: "smart-film",
    video: "/videos/smartfilm-bg.mp4",
  },
];

const getShadeTypes = (city: string) => [
  {
    icon: PanelTop,
    title: `Motorized Patio Screens ${city} TX`,
    description: `Transform your ${city} outdoor living space with retractable motorized screens that provide shade, insect protection, and weather resistance.`,
    slug: "motorized-patio-screens",
  },
  {
    icon: Blinds,
    title: `Motorized Blinds & Shades ${city} TX`,
    description: `Automated window treatments for ${city} homes with smart home integration for effortless light control and energy savings.`,
    slug: "motorized-window-shades",
  },
  {
    icon: Sun,
    title: `Solar Shades ${city} TX`,
    description: `Block harsh ${city} sunlight while maintaining your view with UV-filtering solar shade fabrics.`,
    slug: "motorized-window-shades",
  },
  {
    icon: Lock,
    title: `Blackout Shades ${city} TX`,
    description: `Complete light blocking for ${city} bedrooms, media rooms, and spaces requiring total darkness.`,
    slug: "motorized-window-shades",
  },
];

const tintingBenefits = [
  {
    icon: Thermometer,
    title: "Heat Reduction",
    description: "Block up to 98% of infrared heat, keeping your space significantly cooler during Texas summers.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "99% UV ray rejection protects your skin, furniture, flooring, and interior surfaces from sun damage.",
  },
  {
    icon: DollarSign,
    title: "Energy Savings",
    description: "Reduce cooling costs by up to 30% with professional window film that keeps heat out.",
  },
  {
    icon: Eye,
    title: "Glare Reduction",
    description: "Eliminate harsh glare on screens and surfaces for improved comfort and productivity.",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description: "Enhanced privacy during the day while security film holds glass together if broken.",
  },
  {
    icon: Award,
    title: "Lifetime Warranty",
    description: "All XPEL window film installations backed by manufacturer lifetime warranty.",
  },
];

const companyBenefits = [
  "Certified XPEL installers with factory training",
  "Lifetime warranty on all window film installations",
  "Free estimates with no obligation",
  "Same-day service available for most vehicles",
  "Mobile service options for your convenience",
  "Serving the entire DFW metroplex",
];

// Generate unique intro content based on location characteristics
const getUniqueIntroContent = (location: LocationData): { heroIntro: string; aboutIntro: string; servicesIntro: string } => {
  const { city, region, county, population, description } = location;
  
  // Population-based variations
  const popNum = population ? parseInt(population.replace(/,/g, '')) : 0;
  const isLargeCity = popNum > 200000;
  const isMediumCity = popNum > 50000 && popNum <= 200000;
  const isSmallCity = popNum <= 50000;
  
  // Region-based variations
  const isDallasMet = region === "Dallas Metro";
  const isNorthDFW = region === "North DFW";
  const isEastDFW = region === "East DFW";
  const isWestDFW = region === "West DFW";
  
  let heroIntro = "";
  let aboutIntro = "";
  let servicesIntro = "";
  
  if (isLargeCity) {
    heroIntro = `As one of the largest cities in Texas, ${city} demands top-tier window tinting solutions. Sunmasters delivers professional automotive, residential, and commercial window film installation to ${city}'s diverse neighborhoods and thriving business districts.`;
    aboutIntro = `${city}'s size and diversity create unique challenges for vehicle owners, homeowners, and businesses. From downtown high-rises to suburban developments, Sunmasters provides tailored window tinting solutions that address the specific needs of ${city} properties.`;
    servicesIntro = `With a population of ${population}, ${city} is a major hub for window tinting services. Our team handles everything from fleet vehicles and commercial buildings to luxury homes and daily drivers.`;
  } else if (isMediumCity) {
    heroIntro = `${city}'s growing community of ${population} residents deserves exceptional window tinting services. Sunmasters brings certified expertise and premium materials to ${city} homes, businesses, and vehicles throughout ${county || region}.`;
    aboutIntro = `${description} Our experienced installers understand the unique character of ${city} and provide customized solutions for every property type, from new construction to established neighborhoods.`;
    servicesIntro = `${city} homeowners and vehicle owners throughout ${county || region} trust Sunmasters for quality window film installation. We tailor our services to meet the specific needs of the ${city} community.`;
  } else {
    heroIntro = `${city}'s close-knit community values quality craftsmanship and personalized service. Sunmasters brings big-city expertise with small-town care to every window tinting project in ${city} and surrounding areas.`;
    aboutIntro = `${description} Whether you are protecting a family vehicle, reducing energy costs at home, or enhancing your business storefront, our team delivers exceptional results that ${city} residents can count on.`;
    servicesIntro = `Even in smaller communities like ${city}, Texas heat demands professional window tinting solutions. Sunmasters provides the same premium service and XPEL products to ${city} that we deliver throughout the DFW metroplex.`;
  }
  
  // Add region-specific context
  if (isEastDFW) {
    aboutIntro += ` Located in ${region}, ${city} enjoys a more relaxed pace while still facing the intense Texas sun that makes window tinting essential.`;
  } else if (isNorthDFW) {
    aboutIntro += ` As part of the rapidly growing ${region} corridor, ${city} represents the future of North Texas living, and our window solutions match that forward-thinking approach.`;
  } else if (isWestDFW) {
    aboutIntro += ` ${city}'s position in ${region} offers convenient access to both Dallas and Fort Worth, and our mobile service makes getting professional window tinting even easier.`;
  }
  
  return { heroIntro, aboutIntro, servicesIntro };
};

// Generate unique benefits content per city
const getUniqueBenefitsContent = (city: string, region: string): string => {
  const variations = [
    `Living in ${city} means dealing with Texas weather extremes—scorching summers that push air conditioning to its limits and intense UV exposure that damages interiors. Professional window tinting addresses these challenges while adding value to your property.`,
    `${city} residents face unique environmental challenges from the Texas climate. With summer temperatures regularly exceeding 100°F, quality window film is not a luxury but a necessity for comfort and protection.`,
    `The ${region} area experiences some of the most intense sun exposure in the country. For ${city} homeowners and vehicle owners, professional window tinting provides year-round protection and comfort.`,
    `From protecting your vehicle's interior to reducing home energy costs, ${city} residents discover that window tinting pays for itself through comfort, protection, and savings.`
  ];
  
  // Use city name hash to pick a consistent variation
  const hash = city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return variations[hash % variations.length];
};

// Generate deeply unique city-specific content paragraph for SEO differentiation
const getCitySpecificContent = (location: LocationData): { heading: string; paragraph: string } => {
  const { city, slug } = location;

  const cityContent: Record<string, { heading: string; paragraph: string }> = {
    'dallas': {
      heading: `Window Tinting for Dallas's Urban Landscape`,
      paragraph: `Dallas's sprawling urban core — from the glass towers of Uptown and the Arts District to Deep Ellum's storefronts and the master-planned communities of Lake Highlands — presents every type of window tinting challenge. Fortune 500 headquarters along the Dallas North Tollway need solar control film to manage heat gain across thousands of square feet of curtain wall glass. Meanwhile, homeowners in Preston Hollow, Lakewood, and Oak Cliff rely on residential tinting to protect hardwood floors and fine furnishings from relentless south-facing sun exposure. Dallas's booming construction pipeline means new commercial and residential glass is going in every week — and smart property owners are adding window film from day one to lock in energy savings and UV protection before damage starts.`
    },
    'plano': {
      heading: `Why Plano Homeowners & Businesses Invest in Window Film`,
      paragraph: `Plano's position as a corporate powerhouse — home to Toyota's North American HQ, Liberty Mutual, and JPMorgan Chase campuses along the Legacy West corridor — means thousands of square feet of commercial glass that benefit from solar control film. But it's Plano's residential side that drives the most tinting demand: neighborhoods like Willow Bend, Kings Ridge, and Deerfield feature large west-facing windows that take the brunt of afternoon Texas sun. Plano homeowners consistently report 25-35% cooling cost reductions after residential tinting. With property values among the highest in Collin County, protecting interiors from UV fading isn't optional — it's smart asset management.`
    },
    'frisco': {
      heading: `Window Tinting Solutions for Frisco's Rapid Growth`,
      paragraph: `Frisco has exploded from a small town to one of America's fastest-growing cities, and its luxury housing stock reflects that trajectory. Developments like Newman Village, Phillips Creek Ranch, and Lexington Country feature floor-to-ceiling windows and open floor plans that look stunning but invite massive solar heat gain. The PGA of America headquarters, Dallas Cowboys' The Star complex, and Universal Studios' coming development bring world-class commercial properties that demand premium window film. Frisco vehicle owners — many driving luxury SUVs and performance cars — choose ceramic tinting for maximum heat rejection without the dark, reflective look that doesn't match Frisco's upscale aesthetic.`
    },
    'mckinney': {
      heading: `Historic Charm Meets Modern Protection in McKinney`,
      paragraph: `McKinney's award-winning historic downtown square, lined with original brick buildings and plate glass storefronts, requires window tinting solutions that preserve architectural character while solving real comfort problems. Shop owners along Virginia Street deal with brutal west-facing afternoon sun that heats interiors and fades merchandise. Beyond downtown, McKinney's rapid expansion into master-planned communities like Trinity Falls, Erwin Farms, and Painted Tree means thousands of new homes with modern energy-efficient windows that still benefit from ceramic film for UV protection and additional heat rejection. McKinney homeowners are increasingly choosing residential tinting as a move-in priority rather than an afterthought.`
    },
    'fort-worth': {
      heading: `Fort Worth's Diverse Tinting Needs — From Stockyards to Skyline`,
      paragraph: `Fort Worth's identity blends western heritage with rapid urban growth, creating window tinting needs as diverse as the city itself. The Cultural District's museums require specialized UV-blocking film to protect priceless collections. Downtown's expanding skyline of mixed-use towers needs commercial solar control. West 7th's restaurants and bars want decorative and privacy film for ambiance. And Fort Worth's car culture — from lifted trucks to luxury sedans cruising Camp Bowie — fuels steady demand for automotive ceramic tinting. With temperatures regularly hitting 105°F in summer, Fort Worth vehicles without tint are genuinely uncomfortable, and interior damage from UV exposure accelerates fast.`
    },
    'arlington': {
      heading: `Window Tinting in Arlington's Entertainment Capital`,
      paragraph: `Arlington sits at the crossroads of DFW, hosting millions of visitors annually at AT&T Stadium, Globe Life Field, Six Flags Over Texas, and the soon-expanding entertainment district. This means commercial window tinting demand from hotels, restaurants, and retail spaces that want to manage glare, reduce cooling costs, and create comfortable guest experiences. Arlington's residential neighborhoods — from the established areas near UTA to newer developments along I-20 — face the same intense Texas sun. With no public transit system, Arlington residents spend more time in their vehicles than almost any other DFW city, making automotive tinting a quality-of-life upgrade that pays off on every commute.`
    },
    'irving': {
      heading: `Las Colinas & Beyond: Window Film Solutions for Irving`,
      paragraph: `Irving's Las Colinas is one of the largest mixed-use urban developments in the nation, with corporate towers, luxury apartments, and entertainment venues clustered around the Mandalay Canal. This dense commercial environment generates constant demand for commercial window tinting — from ExxonMobil's campus to the Irving Convention Center. South Irving's diverse residential neighborhoods and Valley Ranch's family-oriented communities both benefit from residential window film that combats the heat island effect common in heavily developed areas. Irving's proximity to DFW Airport also means many residents work in travel-intensive industries and want their vehicles tinted before long-term airport parking in the blazing sun.`
    },
    'garland': {
      heading: `Serving Garland's Diverse Neighborhoods & Lakefront Properties`,
      paragraph: `Garland's position along Lake Ray Hubbard gives it something many DFW cities lack: waterfront living with all the glare challenges that come with it. Homeowners on the lake's western shore deal with intense morning sun reflecting off the water directly into living spaces — residential window tinting is the most effective solution for maintaining views while eliminating unbearable glare. Garland's established neighborhoods feature mature trees that provide shade in some areas but leave south and west-facing windows fully exposed. The city's thriving commercial corridor along Garland Road and the International District's business community also drive steady demand for commercial and storefront window film.`
    },
    'grand-prairie': {
      heading: `Grand Prairie: Central Location, Complete Window Tinting Coverage`,
      paragraph: `Grand Prairie's position between Dallas and Fort Worth makes it a hub for commuters who log serious highway miles on I-30 and SH-360. That daily sun exposure through windshields and side windows makes automotive tinting essential for comfort and UV protection. Grand Prairie's growing residential footprint — particularly south of I-20 near Joe Pool Lake — features newer homes with large windows that benefit from solar control film. The Lone Star Park area and growing retail developments along I-30 create commercial tinting opportunities. Grand Prairie homeowners consistently cite energy savings as the primary reason for residential tinting, with many reporting payback periods under three years.`
    },
    'richardson': {
      heading: `Tech Corridor Expertise: Window Tinting in Richardson`,
      paragraph: `Richardson's Telecom Corridor — home to over 5,000 tech companies including AT&T, Cisco, Samsung, and Blue Cross Blue Shield — represents one of DFW's densest concentrations of commercial glass. These office buildings need solar film to manage heat gain, reduce glare on computer screens, and cut cooling costs in server-adjacent spaces. UT Dallas's expanding campus also brings institutional tinting projects. Richardson's residential areas — from the Canyon Creek and Prairie Creek neighborhoods to newer developments near CityLine — feature homes where afternoon sun creates significant hot spots. Richardson homeowners in the tech industry often request smart film for home offices, wanting privacy on demand for video calls.`
    },
    'allen': {
      heading: `Premium Window Tinting for Allen's Family-Focused Community`,
      paragraph: `Allen's reputation as one of DFW's best family communities — anchored by the award-winning Allen ISD and the massive Allen Event Center — attracts homeowners who invest seriously in their properties. The Twin Creeks, Montgomery Farm, and The Shores neighborhoods feature upscale homes where residential window tinting protects significant interior investments. Allen Premium Outlets and the Watters Creek development create commercial tinting demand from national retailers and local businesses. Allen families increasingly choose ceramic automotive tinting for UV protection — blocking 99% of harmful rays that reach children in car seats and back seats during the school drop-off and activity shuttle routine that defines suburban life.`
    },
    'carrollton': {
      heading: `Window Film Solutions for Carrollton's Connected Community`,
      paragraph: `Carrollton's unique position spanning three counties and its DART rail connectivity make it one of DFW's most accessible cities — and one where diverse architecture creates varied tinting needs. Historic downtown Carrollton's brick-and-glass storefronts need different solutions than the modern mixed-use developments near the transit stations. The Koreatown district along Old Denton Road features restaurants and shops where decorative and privacy window film helps create distinct brand experiences. Carrollton's residential neighborhoods range from established 1970s-80s homes (where window film dramatically improves aging single-pane windows) to newer Castle Hills developments where homeowners add tinting as a finishing touch.`
    },
    'lewisville': {
      heading: `Lakeside Living & Window Tinting in Lewisville`,
      paragraph: `Lewisville's position on the southern shore of Lewisville Lake creates unique residential tinting demands — lakefront and lake-view homes contend with sun reflecting off 29,000 acres of water surface. This amplified glare and UV exposure makes residential window tinting practically essential for lake-area properties. The Castle Hills master-planned community and Vista Ridge area feature newer luxury homes with expansive glass that benefits from ceramic solar film. Lewisville's growing Old Town entertainment district and the commercial corridor along I-35E bring storefront and office tinting projects. The city's marina community also sees high demand for automotive tinting among residents who want protection during long summer days on the water.`
    },
    'denton': {
      heading: `University Town Meets Growing Suburb: Window Tinting in Denton`,
      paragraph: `Denton's dual identity as a vibrant college town (UNT and TWU bring 50,000+ students) and a rapidly growing residential community creates distinct window tinting markets. The historic courthouse square's mix of restaurants, shops, and music venues needs commercial film for glare control and UV protection of interiors. Student housing and apartment complexes benefit from security film and solar tinting that reduces cooling costs — a selling point for property managers marketing to budget-conscious renters. Denton's expanding residential developments to the south and east feature new construction where homeowners are increasingly specifying window film during the build process rather than adding it later.`
    },
    'flower-mound': {
      heading: `Upscale Protection: Window Tinting in Flower Mound`,
      paragraph: `Flower Mound's reputation as one of DFW's most affluent communities — with median household incomes well above $150,000 — means homeowners here invest in premium everything, including window tinting. Master-planned neighborhoods like Wellington, Bridlewood, and River Walk feature custom homes with extensive glazing where XPEL ceramic film provides invisible heat rejection without altering the appearance of carefully chosen window packages. Flower Mound's emphasis on natural beauty and open spaces means many homes sit on exposed lots without mature tree canopy, making south and west-facing windows vulnerable to intense solar heat gain. Automotive tinting demand skews heavily toward premium ceramic film on luxury vehicles.`
    },
    'the-colony': {
      heading: `Window Tinting for The Colony's Lakeside & Retail Growth`,
      paragraph: `The Colony's transformation from a quiet lakeside community to a retail and entertainment destination — anchored by Grandscape and Nebraska Furniture Mart — has reshaped its window tinting landscape. New commercial developments need solar control and decorative film, while the wave of apartment complexes and townhomes being built to serve the area's growing workforce creates bulk residential tinting opportunities. The Colony's Lewisville Lake waterfront properties, particularly along Stewart Creek, face the same glare and UV challenges as other lakeside communities. Homeowners here consistently report that residential window tinting is one of the most impactful upgrades they've made for daily comfort and energy savings.`
    },
    'little-elm': {
      heading: `Growing Fast: Window Tinting Keeps Up with Little Elm`,
      paragraph: `Little Elm's population has tripled in the past decade, making it one of Texas's fastest-growing cities. That growth translates to thousands of new homes — in communities like Union Park, Wildridge, and Paloma Creek — where builders install energy-efficient windows but homeowners quickly discover they still need tinting for the intense south and west sun exposures that no Low-E coating fully addresses. Little Elm's Lewisville Lake frontage and the popular Little Elm Park beach attract outdoor-oriented families who value UV protection in their vehicles and homes. The city's expanding commercial footprint along FM 423 brings new retail and office tinting projects monthly.`
    },
    'mesquite': {
      heading: `Affordable Quality: Window Tinting Services in Mesquite`,
      paragraph: `Mesquite's position as one of DFW's most affordable cities means homeowners here are especially value-conscious — and window tinting delivers exceptional ROI through energy savings. Many Mesquite homes were built in the 1970s-90s with single-pane or early double-pane windows that benefit dramatically from solar control film, often reducing cooling costs by 30% or more. The Town East Mall commercial corridor and the revitalizing downtown area near the Mesquite Championship Rodeo arena create commercial tinting opportunities. Mesquite's diverse community includes many first-time homeowners who discover that window tinting is one of the most cost-effective home improvements available — far cheaper than window replacement with similar energy benefits.`
    },
    'rowlett': {
      heading: `Lakefront Protection: Window Tinting in Rowlett`,
      paragraph: `Rowlett's dramatic rebirth since the 2015 tornado has produced a wave of new construction, including the ambitious Sapphire Bay waterfront development on Lake Ray Hubbard. These new lakeside properties feature modern architectural glass that, while energy-efficient, still transmits enough solar heat and UV to warrant professional window tinting. Rowlett's older, established neighborhoods — many rebuilt or renovated post-tornado — combine updated construction with Texas heat exposure that makes window film a smart addition. The city's Main Street redevelopment and growing commercial areas create demand for storefront and office tinting. Rowlett's lake access also drives automotive tinting demand among boat owners who spend summer weekends under the Texas sun.`
    },
    'wylie': {
      heading: `Fast-Growing Wylie Discovers Window Tinting Benefits`,
      paragraph: `Wylie has transformed from a rural community to a thriving Collin County suburb, with new developments like Woodbridge, Park at Woodbridge, and Birmingham Farm attracting families from across DFW. These newer homes feature open floor plans with large windows — great for natural light but challenging for temperature control during seven months of Texas heat. Wylie's award-winning ISD makes it a magnet for families with young children, driving demand for automotive ceramic tinting that blocks 99% of UV rays reaching kids in car seats. The city's expanding commercial corridor along FM 544 and Highway 78 also brings new storefront and office tinting projects as businesses establish themselves in this growing market.`
    },
    'murphy': {
      heading: `Small City, High Standards: Window Tinting in Murphy`,
      paragraph: `Murphy may be one of DFW's smallest cities by area, but its residents maintain some of the highest standards in the metroplex. With median household incomes exceeding $130,000 and homes averaging well above the DFW median price, Murphy homeowners treat their properties as serious investments. That means premium window tinting with XPEL ceramic film — not bargain alternatives. Murphy's compact geography means most homes are in newer, well-maintained subdivisions where south-facing exposure is the primary concern. The city's family demographic, served by both Plano and Wylie ISDs, drives strong demand for UV-protective automotive tinting to safeguard children during daily school and activity transportation.`
    },
    'sachse': {
      heading: `Convenient Window Tinting for Sachse's Growing Community`,
      paragraph: `Sachse's rapid growth from a small rural community to a connected suburb has brought thousands of new homes where residents quickly learn that Texas heat demands window tinting. Located at the crossroads of highways 78 and 190, Sachse residents commute throughout DFW and spend significant time in their vehicles — making automotive tinting a comfort priority. Sachse's newer subdivisions feature homes with open-concept layouts and large windows where afternoon sun creates uncomfortable hot spots that residential tinting eliminates. The city's location between Garland's commercial density and Wylie's suburban growth means Sachse homeowners get the best of both worlds — and smart ones protect their investments with professional window film.`
    },
    'coppell': {
      heading: `Premium Window Film for Coppell's Affluent Community`,
      paragraph: `Coppell's consistently top-ranked ISD and proximity to DFW Airport make it one of DFW's most desirable — and expensive — places to live. Homeowners here expect premium quality in every home improvement, and window tinting is no exception. Coppell's tree-lined streets and established neighborhoods feature homes from the 1980s through today, many with original windows that benefit dramatically from modern ceramic film technology. The city's airline industry workforce — many employed at DFW Airport or American Airlines headquarters — often leave vehicles in airport parking for days, making UV-protective automotive tinting essential for preventing dashboard cracking and interior fading during extended sun exposure.`
    },
    'grapevine': {
      heading: `Historic Main Street to Lakefront: Window Tinting in Grapevine`,
      paragraph: `Grapevine's charming Main Street — home to tasting rooms, boutiques, and restaurants — creates unique commercial tinting needs where preserving historic aesthetics while managing heat and UV is essential. Decorative and low-reflectivity films let these businesses maintain their character while improving comfort. Grapevine Lake's northern shore features waterfront homes and the Grapevine Lake Overlook area where sun reflecting off the water doubles the UV and glare challenge. The Grapevine Mills outlet mall, Great Wolf Lodge, and SEA LIFE Aquarium bring major commercial tinting projects. Grapevine's wine country identity and tourism economy mean storefronts need to look inviting while keeping interiors comfortable for visitors browsing in summer heat.`
    },
    'southlake': {
      heading: `Luxury-Grade Window Tinting for Southlake's Finest Properties`,
      paragraph: `Southlake isn't just one of DFW's wealthiest cities — it's one of the wealthiest in Texas, with median household incomes exceeding $250,000. This translates to custom homes with architect-specified window packages that cost $50,000-$100,000+, making UV protection through window tinting not optional but essential for preserving that investment. Southlake Town Square's luxury retail tenants need commercial film that complements high-end brand experiences. The city's exotic and luxury vehicle population — Porsche, Ferrari, McLaren, and high-end Range Rovers are common sights — drives demand for premium XPEL ceramic tinting and PPF combinations. Southlake clients expect white-glove service and flawless installation, which is exactly what Sunmasters delivers.`
    },
    'greenville': {
      heading: `East Texas Expertise: Window Tinting in Greenville`,
      paragraph: `As Sunmasters' easternmost location with a physical shop at 2700 Mockingbird Ln, Greenville serves as the gateway to East Texas window tinting. The city's growing industrial base — anchored by L3Harris Technologies and manufacturing employers — creates commercial tinting demand for factories, warehouses, and office buildings. Greenville's historic downtown, undergoing revitalization, features older commercial buildings where window film provides an affordable alternative to full window replacement for improving energy efficiency. Lake Tawakoni's proximity draws outdoor enthusiasts who need automotive tinting for vehicles that spend weekends in direct sun at the lake. Hunt County's agricultural character means many properties have outbuildings and workshops that benefit from solar film.`
    },
    'caddo-mills': {
      heading: `Big-City Quality Window Tinting in Small-Town Caddo Mills`,
      paragraph: `Caddo Mills represents the expanding edge of DFW's eastern growth corridor, where families from Dallas and Rockwall counties are discovering affordable acreage and new-construction homes. These properties often sit on open land without the mature tree canopy that provides natural shade in older suburbs — making window tinting one of the first home improvements new residents request. Caddo Mills' small-town atmosphere means word-of-mouth drives business, and Sunmasters' reputation for quality work has made us the tinting provider that neighbors recommend to neighbors. With I-30 connecting Caddo Mills to both Rockwall and Greenville, our service team reaches Caddo Mills properties quickly for both estimates and installations.`
    },
    'commerce': {
      heading: `University Town Window Tinting: Serving Commerce & Hunt County`,
      paragraph: `Texas A&M University-Commerce's campus and its 12,000+ students create unique window tinting demand — from apartment complexes serving the student population to the university's own facilities. Commerce's historic downtown, centered around the town square, features older commercial buildings where window film provides modern comfort without altering the architectural character that gives Commerce its identity. The university's economic impact draws faculty and staff who purchase homes in Commerce's growing residential areas and seek the same quality window tinting they'd find in Dallas or Plano. Sunmasters brings that metropolitan-level service to Commerce through our nearby Greenville location, just 15 minutes away on Highway 69.`
    }
  };

  return cityContent[slug] || {
    heading: `Professional Window Tinting Solutions in ${city}`,
    paragraph: `${city} residents and businesses trust Sunmasters for professional window tinting that addresses the unique challenges of the Texas climate. Our certified XPEL installers deliver precision installation with premium materials and a lifetime warranty on every project in the ${city} area.`
  };
};

// Generate unique SEO meta title (50-60 chars) optimized for CTR
const getUniqueMetaTitle = (location: LocationData): string => {
  const { city, slug, population } = location;
  const popNum = population ? parseInt(population.replace(/,/g, '')) : 0;
  
  // Title variations based on city characteristics (all 50-60 chars)
  const titleVariations: Record<string, string> = {
    'dallas': `Window Tinting Dallas TX | Auto, Home & Office Film`,
    'plano': `Window Tinting Plano TX | Car, Home & Business Tint`,
    'frisco': `Window Tinting Frisco TX | Auto & Home Film Experts`,
    'mckinney': `Window Tinting McKinney TX | Car & Residential Film`,
    'fort-worth': `Window Tinting Fort Worth TX | Auto, Home & Commercial`,
    'arlington': `Window Tinting Arlington TX | Automotive & Home Film`,
    'irving': `Window Tinting Irving TX | Car, Home & Office Tint`,
    'garland': `Window Tinting Garland TX | Auto & Residential Film`,
    'grand-prairie': `Window Tinting Grand Prairie TX | Auto & Home Tint`,
    'richardson': `Window Tinting Richardson TX | Car & Home Film`,
    'allen': `Window Tinting Allen TX | Auto, Home & Commercial`,
    'carrollton': `Window Tinting Carrollton TX | Car & Home Experts`,
    'lewisville': `Window Tinting Lewisville TX | Auto & Home Film`,
    'denton': `Window Tinting Denton TX | Car, Home & Office Tint`,
    'flower-mound': `Window Tinting Flower Mound TX | Auto & Home Film`,
    'the-colony': `Window Tinting The Colony TX | Car & Home Experts`,
    'little-elm': `Window Tinting Little Elm TX | Auto & Residential`,
    'prosper': `Window Tinting Prosper TX | Luxury Auto & Home Film`,
    'mesquite': `Window Tinting Mesquite TX | Car, Home & Business`,
    'rockwall': `Window Tinting Rockwall TX | Auto, Home & Commercial`,
    'rowlett': `Window Tinting Rowlett TX | Car & Residential Film`,
    'wylie': `Window Tinting Wylie TX | Auto & Home Film Experts`,
    'murphy': `Window Tinting Murphy TX | Car & Residential Tint`,
    'sachse': `Window Tinting Sachse TX | Auto & Home Film Service`,
    'coppell': `Window Tinting Coppell TX | Car & Home Film Pros`,
    'grapevine': `Window Tinting Grapevine TX | Auto, Home & Office`,
    'southlake': `Window Tinting Southlake TX | Luxury Auto & Home`,
    'greenville': `Window Tinting Greenville TX | Auto & Home Experts`,
    'caddo-mills': `Window Tinting Caddo Mills TX | Car & Home Film`,
    'commerce': `Window Tinting Commerce TX | Auto & Residential Film`,
  };
  
  return titleVariations[slug] || `Window Tinting ${city} TX | Auto, Home & Commercial`;
};

// City center coordinates for GeoCoordinates schema
const getGeoCoordinates = (slug: string): object => {
  const coords: Record<string, { lat: number; lng: number }> = {
    'dallas': { lat: 32.7767, lng: -96.7970 },
    'plano': { lat: 33.0198, lng: -96.6989 },
    'frisco': { lat: 33.1507, lng: -96.8236 },
    'mckinney': { lat: 33.1972, lng: -96.6397 },
    'fort-worth': { lat: 32.7555, lng: -97.3308 },
    'arlington': { lat: 32.7357, lng: -97.1081 },
    'irving': { lat: 32.8140, lng: -96.9489 },
    'garland': { lat: 32.9126, lng: -96.6389 },
    'grand-prairie': { lat: 32.7459, lng: -96.9978 },
    'richardson': { lat: 32.9483, lng: -96.7299 },
    'allen': { lat: 33.1032, lng: -96.6706 },
    'carrollton': { lat: 32.9537, lng: -96.8903 },
    'lewisville': { lat: 33.0462, lng: -96.9942 },
    'denton': { lat: 33.2148, lng: -97.1331 },
    'flower-mound': { lat: 33.0146, lng: -97.0970 },
    'the-colony': { lat: 33.0807, lng: -96.8864 },
    'little-elm': { lat: 33.1626, lng: -96.9376 },
    'prosper': { lat: 33.2362, lng: -96.8011 },
    'mesquite': { lat: 32.7668, lng: -96.5992 },
    'rockwall': { lat: 32.9313, lng: -96.4597 },
    'rowlett': { lat: 32.9029, lng: -96.5639 },
    'wylie': { lat: 33.0151, lng: -96.5389 },
    'murphy': { lat: 33.0151, lng: -96.6131 },
    'sachse': { lat: 32.9762, lng: -96.5953 },
    'coppell': { lat: 32.9546, lng: -97.0150 },
    'grapevine': { lat: 32.9343, lng: -97.0781 },
    'southlake': { lat: 32.9412, lng: -97.1342 },
    'greenville': { lat: 33.1385, lng: -96.1108 },
    'caddo-mills': { lat: 32.9954, lng: -96.2280 },
    'commerce': { lat: 33.2470, lng: -95.8999 },
  };

  const c = coords[slug] || { lat: 32.9290, lng: -96.4594 };
  return {
    "@type": "GeoCoordinates",
    "latitude": c.lat,
    "longitude": c.lng
  };
};

// Generate JSON-LD structured data for LocalBusiness schema
const getLocalBusinessSchema = (location: LocationData): object => {
  const { city, state, county, slug, address: locAddress, phone: locPhone, businessName } = location;
  const websiteUrl = "https://www.sunmasterstintandshades.com";

  // Use location-specific address if available, otherwise use Rockwall HQ
  const hasLocalAddress = !!locAddress;
  const businessAddr = hasLocalAddress
    ? {
        "@type": "PostalAddress",
        "streetAddress": locAddress.split(',')[0],
        "addressLocality": city,
        "addressRegion": state,
        "postalCode": locAddress.match(/\d{5}/)?.[0] || "",
        "addressCountry": "US"
      }
    : {
        "@type": "PostalAddress",
        "streetAddress": "4480 E Interstate 30, Ste 200",
        "addressLocality": "Rockwall",
        "addressRegion": "TX",
        "postalCode": "75087",
        "addressCountry": "US"
      };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${websiteUrl}/locations/${slug}#localbusiness`,
    "name": businessName || "Sunmasters Window Tinting & Shades",
    "description": `Professional window tinting services in ${city}, ${state}. Automotive, residential, and commercial window film installation with lifetime warranty.`,
    "url": `${websiteUrl}/locations/${slug}`,
    "telephone": locPhone || "(469) 757-4325",
    "email": "aaron@sunmastersdfw.com",
    "address": businessAddr,
    "geo": getGeoCoordinates(slug),
    "areaServed": {
      "@type": "City",
      "name": city,
      "addressRegion": state
    },
    "priceRange": "$$",
    "image": `${websiteUrl}/og-image.png`,
    "logo": `${websiteUrl}/og-image.png`,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sunmasterswindowtinting",
      "https://www.instagram.com/sunmasters_tint"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Window Tinting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive Window Tinting",
            "description": `Professional car, truck, and SUV window tinting in ${city}, TX with XPEL ceramic film and lifetime warranty.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Window Tinting",
            "description": `Home window film installation in ${city}, TX for heat rejection, UV protection, and energy savings.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Window Tinting",
            "description": `Office and business window tinting in ${city}, TX for storefronts, buildings, and commercial properties.`
          }
        }
      ]
    }
  };
};

// Generate JSON-LD Service schema for all services
const getServiceSchema = (location: LocationData): object[] => {
  const { city, state, slug } = location;
  const websiteUrl = "https://www.sunmasterstintandshades.com";
  
  const services = [
    {
      name: "Automotive Window Tinting",
      description: `Professional automotive window tinting in ${city}, ${state}. XPEL ceramic film with 99% UV protection and lifetime warranty.`,
      slug: "automotive-window-tint"
    },
    {
      name: "Residential Window Tinting",
      description: `Home window tinting in ${city}, ${state}. Energy-saving film that blocks heat, UV rays, and glare.`,
      slug: "residential-window-tint"
    },
    {
      name: "Commercial Window Tinting",
      description: `Commercial window film installation in ${city}, ${state}. Professional solutions for offices, storefronts, and buildings.`,
      slug: "commercial-window-tint"
    },
    {
      name: "Ceramic Window Tint",
      description: `Premium ceramic window tinting in ${city}, ${state}. Superior heat rejection without signal interference.`,
      slug: "ceramic-window-tint"
    },
    {
      name: "Security Film",
      description: `Safety and security window film in ${city}, ${state}. Holds glass together when broken for protection.`,
      slug: "security-window-film"
    },
    {
      name: "Smart Film",
      description: `Switchable smart film installation in ${city}, ${state}. Transitions from clear to opaque instantly.`,
      slug: "smart-film"
    }
  ];
  
  return services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sunmasters Window Tinting & Shades",
      "telephone": "(469) 757-4325"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "addressRegion": state
    },
    "url": `${websiteUrl}/${slug}-tx/${service.slug}`
  }));
};

// Generate unique city-specific FAQs (5-7 per city)
interface FAQ {
  question: string;
  answer: string;
}

const getCityFAQs = (location: LocationData): FAQ[] => {
  const { city, slug, region, county, population, nearby } = location;
  const popNum = population ? parseInt(population.replace(/,/g, '')) : 0;
  const nearbyText = nearby && nearby.length > 0 ? nearby.slice(0, 3).join(', ') : region;
  
  // Base FAQs that all cities get (customized per city)
  const baseFAQs: FAQ[] = [
    {
      question: `How much does window tinting cost in ${city}, TX?`,
      answer: `Window tinting prices in ${city} depend on the service type. Automotive tinting ranges from $199-$599 based on vehicle size and film quality. Residential projects typically cost $6-$15 per square foot. Commercial tinting is quoted per project. Sunmasters offers free estimates for all ${city} customers.`
    },
    {
      question: `How long does window tint installation take in ${city}?`,
      answer: `Most automotive window tinting in ${city} takes 2-4 hours and can be completed same-day. Residential tinting for an average home takes 4-6 hours. Commercial projects vary based on scope. We work efficiently to minimize disruption to ${city} businesses and homeowners.`
    },
    {
      question: `Is window tint legal in ${city}, Texas?`,
      answer: `Yes, window tinting is legal in ${city} and throughout Texas. State law requires front side windows to allow at least 25% visible light transmission (VLT). Rear side windows and back windshield can be any darkness. Windshield tinting above the AS-1 line is permitted. Sunmasters ensures all ${city} installations meet Texas regulations.`
    },
    {
      question: `Do you offer residential window tinting in ${city}?`,
      answer: `Absolutely! Sunmasters provides comprehensive residential window tinting throughout ${city} and ${county || region}. Our home window films reduce heat by up to 98%, block 99% of UV rays, lower energy bills, and protect furniture from fading. We offer free in-home consultations for ${city} homeowners.`
    },
    {
      question: `What areas near ${city} do you serve?`,
      answer: `In addition to ${city}, Sunmasters provides window tinting services throughout the ${region} area including ${nearbyText}, and surrounding communities. We offer mobile service for automotive tinting and on-site installation for residential and commercial projects across the DFW metroplex.`
    }
  ];
  
  // City-specific additional FAQs based on characteristics
  const citySpecificFAQs: Record<string, FAQ[]> = {
    'dallas': [
      {
        question: "What types of commercial window tinting do you offer for Dallas businesses?",
        answer: "Sunmasters provides commercial window tinting for Dallas high-rises, office buildings, storefronts, and retail spaces. Our commercial solutions include solar control film, security film, decorative film, and privacy film. We serve Fortune 500 headquarters and small businesses alike throughout Dallas County."
      },
      {
        question: "Do you offer ceramic window tint for vehicles in Dallas?",
        answer: "Yes, we specialize in XPEL ceramic window tinting for Dallas vehicles. Ceramic tint provides superior heat rejection (up to 98%), 99% UV protection, and zero signal interference for GPS, phones, and radio. It's the premium choice for Dallas drivers seeking maximum comfort."
      }
    ],
    'plano': [
      {
        question: "Why choose ceramic window tint for my Plano vehicle?",
        answer: "Plano's hot Texas summers demand superior heat protection. XPEL ceramic tint blocks up to 98% of infrared heat while maintaining excellent visibility. Unlike metallic films, ceramic won't interfere with electronics—perfect for Plano's tech-savvy drivers."
      },
      {
        question: "Can window tinting help reduce energy costs for Plano homes?",
        answer: "Yes! Residential window tinting can reduce Plano home cooling costs by up to 30%. Our solar control films reject heat before it enters your home, reducing AC workload. Many Plano homeowners see ROI within 2-3 years through energy savings."
      }
    ],
    'frisco': [
      {
        question: "Do you provide window tinting for luxury vehicles in Frisco?",
        answer: "Absolutely! Sunmasters specializes in premium window tinting for Frisco's luxury vehicles including Tesla, Mercedes, BMW, Porsche, and exotic cars. Our XPEL ceramic film and meticulous installation protects your investment while enhancing appearance and comfort."
      },
      {
        question: "Can you install window tint on new construction homes in Frisco?",
        answer: "Yes, we work with Frisco homebuilders and new homeowners to install window film during or after construction. Early installation protects flooring and furniture from day one and can be coordinated with your builder's timeline."
      }
    ],
    'mckinney': [
      {
        question: "Do you offer window tinting for historic downtown McKinney buildings?",
        answer: "Yes! We provide specialized window film solutions for McKinney's historic downtown buildings that preserve architectural character while adding modern comfort and UV protection. Our films can match existing aesthetics while meeting energy efficiency goals."
      },
      {
        question: "What warranty comes with window tinting in McKinney?",
        answer: "All XPEL window film installations in McKinney include a lifetime manufacturer warranty covering bubbling, peeling, cracking, and color change. This transferable warranty covers both materials and Sunmasters' professional installation."
      }
    ],
    'fort-worth': [
      {
        question: "Do you provide commercial window tinting in downtown Fort Worth?",
        answer: "Yes, Sunmasters serves Fort Worth's growing downtown with commercial window tinting for office buildings, mixed-use developments, and cultural venues. We've installed films in various Fort Worth commercial properties and understand the unique needs of urban buildings."
      },
      {
        question: "Can window film protect my Fort Worth home from break-ins?",
        answer: "Our security window film helps deter Fort Worth break-ins by holding glass together when impacted. While it won't make glass unbreakable, it significantly slows intruder entry time—often enough to deter theft and protect occupants."
      }
    ],
    'rockwall': [
      {
        question: "Do you offer window tinting for lakefront homes in Rockwall?",
        answer: "Yes! Rockwall's Lake Ray Hubbard properties face intense sun exposure and glare. Our residential window films reduce heat, eliminate lake glare, protect interiors, and maintain your beautiful water views. We serve Heath, Rowlett, and all lakeside Rockwall communities."
      },
      {
        question: "Can you tint boat windows and marine vessels in Rockwall?",
        answer: "We specialize in automotive and architectural tinting. For Rockwall boat owners, we recommend consulting marine specialists for vessel-specific applications due to unique material and installation requirements."
      }
    ],
    'southlake': [
      {
        question: "Do you work with Southlake's luxury home builders?",
        answer: "Yes, Sunmasters partners with Southlake custom home builders to integrate window film into new construction. We can coordinate with your builder for seamless installation that protects your investment from day one."
      },
      {
        question: "What's the best window tint for high-end vehicles in Southlake?",
        answer: "For Southlake's luxury and exotic vehicles, we recommend XPEL Prime XR Plus ceramic film. It offers maximum heat rejection, crystal-clear visibility, and zero electronic interference—ideal for vehicles with advanced technology systems."
      }
    ],
    'prosper': [
      {
        question: "Do you service new home developments in Prosper?",
        answer: "Absolutely! We work throughout Prosper's new developments including Windsong Ranch, Star Trail, and Artesia. Early window film installation protects new home interiors before furniture even arrives and qualifies for our lifetime warranty."
      },
      {
        question: "What's the best window tint option for Prosper families?",
        answer: "Prosper families benefit from our ceramic window films that block 99% of harmful UV rays—protecting children's skin and eyes in vehicles and homes. The superior heat rejection also keeps car seats and interiors cooler for passenger comfort."
      }
    ],
    'greenville': [
      {
        question: "What's included in your Greenville window tinting warranty?",
        answer: "Our Greenville location offers the same lifetime XPEL warranty as all Sunmasters installations. This covers bubbling, peeling, fading, and cracking for as long as you own the vehicle or property. We stand behind every Greenville installation."
      },
      {
        question: "Do you offer same-day window tinting in Greenville?",
        answer: "Yes! Our Greenville location at 2700 Mockingbird Ln offers same-day automotive window tinting for most vehicles. Call (903) 453-1965 to check availability and schedule your appointment."
      }
    ],
    'arlington': [
      {
        question: "Do you provide window tinting near AT&T Stadium and the Arlington entertainment district?",
        answer: "Yes! Sunmasters serves the entire Arlington entertainment district area including businesses and residences near AT&T Stadium, Globe Life Field, and Six Flags Over Texas. Whether you need commercial tinting for a restaurant on Division Street or residential film for homes near UTA campus, we cover all of Arlington's 400,000+ residents."
      },
      {
        question: "Can window tinting help protect my vehicle during long Arlington stadium parking lot days?",
        answer: "Absolutely! Arlington's massive entertainment venues mean vehicles often sit in open parking lots for hours during Cowboys games, Rangers games, and concerts. Our XPEL ceramic tint blocks up to 98% of infrared heat and 99% of UV rays, keeping your interior significantly cooler and preventing dashboard and seat damage from prolonged sun exposure."
      }
    ],
    'irving': [
      {
        question: "Do you offer commercial window tinting for Las Colinas office buildings in Irving?",
        answer: "Yes! Sunmasters provides commercial window film solutions for Irving's Las Colinas business district, home to major corporate headquarters including ExxonMobil, Kimberly-Clark, and Fluor Corporation. Our commercial films reduce glare on computer screens, lower HVAC costs, and improve employee comfort in high-rise office environments."
      },
      {
        question: "Can you tint vehicles for DFW Airport employees and travelers in Irving?",
        answer: "Absolutely! Irving's proximity to DFW Airport means many residents and employees spend significant time commuting. Our ceramic window tinting keeps your vehicle cool during long airport parking stays and daily commutes along Highways 114 and 183. We offer convenient scheduling to work around shift schedules."
      }
    ],
    'garland': [
      {
        question: "Do you provide window tinting for lakefront homes along Lake Ray Hubbard in Garland?",
        answer: "Yes! Garland's Lake Ray Hubbard waterfront properties face intense afternoon sun glare reflected off the water. Our residential window films dramatically reduce glare while preserving your lake views, protect furniture and flooring from UV damage, and lower cooling costs for homes in established Garland neighborhoods along the waterfront."
      },
      {
        question: "Do you serve Garland's diverse business community with commercial window tinting?",
        answer: "Absolutely! Sunmasters provides commercial window tinting throughout Garland, from storefronts along Walnut Street and the Vietnamese-American business corridor to office buildings and restaurants across the city. Our films offer privacy, security, and energy savings for Garland's 240,000+ residents and diverse business community."
      }
    ],
    'grand-prairie': [
      {
        question: "Do you offer window tinting services to homes in Grand Prairie's growing residential areas?",
        answer: "Yes! Grand Prairie is one of the fastest-growing residential areas between Dallas and Fort Worth, and Sunmasters serves all neighborhoods across the city's Dallas and Tarrant County sides. Our residential window films are especially popular with new homeowners looking to reduce cooling costs and protect interiors from intense Texas sun."
      },
      {
        question: "Can you provide window tinting near Lone Star Park and the Grand Prairie entertainment areas?",
        answer: "Absolutely! We serve businesses and residences throughout Grand Prairie's entertainment corridor, including areas near Lone Star Park, Epic Waters Indoor Waterpark, and the Traders Village area. Whether you need commercial film for a business or automotive tinting for your daily driver, Sunmasters covers all 200,000+ Grand Prairie residents."
      }
    ],
    'richardson': [
      {
        question: "Do you provide commercial window tinting for Telecom Corridor businesses in Richardson?",
        answer: "Yes! Sunmasters serves Richardson's renowned Telecom Corridor with commercial window film solutions for tech offices, corporate campuses, and mixed-use buildings. Our films reduce glare on monitors, lower energy costs, and improve comfort for the hundreds of technology companies operating along the US-75 corridor."
      },
      {
        question: "Can you install window tinting near UT Dallas and Richardson's diverse neighborhoods?",
        answer: "Absolutely! We provide residential and automotive tinting throughout Richardson, from homes near the UT Dallas campus to the city's internationally diverse neighborhoods. Richardson's mix of established communities and modern developments all benefit from our heat-rejecting ceramic films during Texas summers."
      }
    ],
    'allen': [
      {
        question: "Do you provide window tinting for luxury homes in Allen's upscale neighborhoods?",
        answer: "Yes! Allen is known for its luxury neighborhoods, award-winning Allen ISD schools, and high property values. Sunmasters' premium residential window films protect your investment by reducing UV-caused fading of hardwood floors, furnishings, and artwork while lowering energy bills in Allen's larger custom homes."
      },
      {
        question: "Can you tint vehicles for Allen residents near Allen Premium Outlets?",
        answer: "Absolutely! We serve all of Allen's 110,000+ residents with premium XPEL ceramic automotive tinting. Whether you're shopping at Allen Premium Outlets or commuting along US-75, our window films keep your vehicle significantly cooler and protect your interior from the harsh Texas sun year-round."
      }
    ],
    'carrollton': [
      {
        question: "Do you serve Carrollton's historic downtown area with window tinting?",
        answer: "Yes! Sunmasters provides specialized window film solutions for Carrollton's charming historic downtown businesses and nearby residences. Our films can be selected to complement the architectural character of older buildings while adding modern energy efficiency, UV protection, and glare reduction."
      },
      {
        question: "Can window tinting help Carrollton commuters who use DART rail?",
        answer: "Absolutely! Many Carrollton residents drive to DART rail stations and leave their vehicles parked in open lots all day. Our ceramic window tint keeps your car significantly cooler during long park-and-ride days, blocks 99% of UV rays that damage interiors, and makes your return commute far more comfortable."
      }
    ],
    'lewisville': [
      {
        question: "Do you offer window tinting for homes near Lewisville Lake?",
        answer: "Yes! Lewisville Lake-area homes face strong sun exposure and water glare, especially properties in Castle Hills and other lakeside communities. Our residential window films cut glare dramatically, block 99% of UV rays, and reduce cooling costs—all while keeping your lake and nature views crystal clear."
      },
      {
        question: "Can you provide automotive tinting for Lewisville residents?",
        answer: "Absolutely! We serve all of Lewisville's 120,000+ residents with premium XPEL ceramic automotive tinting. Whether you're commuting along I-35E, shopping at Vista Ridge Mall, or heading to the lake, our window films block up to 98% of infrared heat for a dramatically cooler driving experience."
      }
    ],
    'denton': [
      {
        question: "Do you offer window tinting services for UNT and TWU students and staff in Denton?",
        answer: "Yes! Sunmasters serves the Denton university community with affordable automotive window tinting for students, faculty, and staff at both UNT and TWU. Vehicles parked in campus lots all day benefit enormously from ceramic tint that blocks heat and UV rays, keeping interiors cool between classes."
      },
      {
        question: "Can you tint storefronts and businesses around Denton's historic downtown square?",
        answer: "Absolutely! We provide commercial window film solutions for businesses around Denton's beloved downtown square and throughout the city's creative business districts. Our films reduce glare, lower energy costs, and can add privacy—all without altering the historic character of Denton's unique storefronts."
      }
    ],
    'flower-mound': [
      {
        question: "Do you provide premium window tinting for Flower Mound's master-planned community homes?",
        answer: "Yes! Flower Mound's upscale master-planned communities feature large windows and open floor plans that benefit tremendously from residential window film. Our premium ceramic films protect high-end furnishings from UV fading, reduce cooling costs in larger homes, and maintain the pristine appearance Flower Mound homeowners expect."
      },
      {
        question: "What window tint do you recommend for luxury vehicles in Flower Mound?",
        answer: "For Flower Mound's discerning vehicle owners, we recommend XPEL Prime XR Plus ceramic film. It delivers the highest heat rejection available, crystal-clear optical clarity, and zero interference with vehicle electronics—perfectly matching the premium lifestyle that Flower Mound's top-rated schools and high-income community are known for."
      }
    ],
    'the-colony': [
      {
        question: "Do you serve The Colony residents near Lewisville Lake and Grandscape?",
        answer: "Yes! Sunmasters provides automotive, residential, and commercial window tinting throughout The Colony, including homes along the Lewisville Lake waterfront and businesses in the Grandscape entertainment district near Nebraska Furniture Mart. Our films protect against the intense sun exposure that lakeside living brings."
      },
      {
        question: "Can window film help with sun glare in The Colony's waterfront properties?",
        answer: "Absolutely! The Colony's Lewisville Lake waterfront homes face significant sun glare reflected off the water. Our residential window films reduce glare by up to 85% while preserving your lake views, and they block 99% of UV rays that cause furniture fading and skin damage. Many Colony homeowners see noticeable energy savings too."
      }
    ],
    'little-elm': [
      {
        question: "Do you install window tinting in Little Elm's new master-planned communities?",
        answer: "Yes! As one of the fastest-growing cities in DFW, Little Elm has dozens of new master-planned communities with homes that benefit from early window film installation. We work with Little Elm homeowners to protect brand-new interiors from UV damage and reduce cooling costs from day one, backed by our lifetime warranty."
      },
      {
        question: "Can window tinting help keep my vehicle cool at Little Elm's Lewisville Lake beach areas?",
        answer: "Absolutely! Little Elm's popular lake beach and park areas mean vehicles often sit in open lots during summer outings. Our XPEL ceramic window tint blocks up to 98% of infrared heat, so you return to a dramatically cooler vehicle. It also prevents UV damage to seats, dashboards, and steering wheels during long beach days."
      }
    ],
    'mesquite': [
      {
        question: "Do you provide window tinting near the Mesquite Championship Rodeo and Town East Mall?",
        answer: "Yes! Sunmasters serves all of Mesquite's 150,000+ residents, including areas near the famous Mesquite Championship Rodeo arena, Town East Mall, and throughout the city's residential neighborhoods. Our automotive and residential tinting is popular with Mesquite families looking for quality UV protection at competitive prices."
      },
      {
        question: "Is window tinting a good investment for affordable homes in Mesquite?",
        answer: "Absolutely! Window tinting is one of the highest-ROI home improvements for Mesquite homeowners. Our residential films can reduce cooling costs by up to 30%, which adds up quickly during Texas summers. The energy savings typically pay for the installation within 2-3 years, plus you get lifetime UV protection for your furnishings."
      }
    ],
    'rowlett': [
      {
        question: "Do you offer window tinting for homes near Sapphire Bay and Lake Ray Hubbard in Rowlett?",
        answer: "Yes! Rowlett's Lake Ray Hubbard waterfront, including the exciting Sapphire Bay development, features homes with significant sun and water glare exposure. Our residential window films reduce glare while maintaining beautiful lake views, block 99% of UV rays, and help lower cooling costs for Rowlett's lakeside properties."
      },
      {
        question: "Can window film provide added protection for Rowlett homes given the area's storm history?",
        answer: "Great question! While window film isn't a substitute for storm shutters, our security and solar films do hold glass together upon impact, reducing the risk of dangerous shards during severe weather. For Rowlett homeowners who experienced the 2015 tornado, adding security film provides an extra layer of protection and peace of mind."
      }
    ],
    'wylie': [
      {
        question: "Do you provide window tinting for families in Wylie ISD neighborhoods?",
        answer: "Yes! Wylie's award-winning school district attracts families who value quality, and our window tinting reflects that same standard. We serve Wylie's fast-growing residential communities with premium ceramic films that protect children from UV exposure in vehicles and homes, while keeping interiors cooler during the school-year commute."
      },
      {
        question: "Can you tint vehicles and storefronts in historic downtown Wylie?",
        answer: "Absolutely! We provide both automotive and commercial window tinting throughout Wylie, including businesses in the charming historic downtown area. Our commercial films add privacy, reduce glare, and lower energy costs, while our automotive ceramic tint keeps Wylie's 55,000+ residents comfortable on the road."
      }
    ],
    'murphy': [
      {
        question: "Do you serve Murphy's small-town community with residential window tinting?",
        answer: "Yes! Despite Murphy's small-town feel, its residents enjoy premium services from Sunmasters. Our residential window films are ideal for Murphy's high-value homes, reducing energy costs and protecting interiors from UV damage. We serve families in both the Plano ISD and Wylie ISD portions of Murphy with the same lifetime-warranted XPEL products."
      },
      {
        question: "What window tint options work best for Murphy's upscale family homes?",
        answer: "Murphy's high-income households typically choose our XPEL Prime XR Plus ceramic films for both vehicles and homes. These premium films offer maximum heat rejection and UV protection without compromising visibility or aesthetics—perfectly suited for Murphy's well-maintained neighborhoods and family-oriented community."
      }
    ],
    'sachse': [
      {
        question: "Do you offer window tinting for homes in Sachse's growing suburban neighborhoods?",
        answer: "Yes! Sachse is growing rapidly, and Sunmasters serves all of its residential areas spanning both Dallas and Collin counties. Whether you're in the Garland ISD or Wylie ISD side of Sachse, our residential window films protect your home from heat and UV damage while reducing energy costs year-round."
      },
      {
        question: "Can you provide convenient automotive tinting for Sachse commuters?",
        answer: "Absolutely! Sachse residents commuting via Highways 78 and 190 spend significant time in their vehicles. Our XPEL ceramic window tint blocks up to 98% of infrared heat and 99% of UV rays, making your daily commute dramatically more comfortable. We offer flexible scheduling to work around your work hours."
      }
    ],
    'coppell': [
      {
        question: "Do you provide window tinting for Coppell's affluent homes and award-winning school district area?",
        answer: "Yes! Sunmasters serves Coppell's affluent community with premium residential window films. Coppell ISD families appreciate our XPEL ceramic films that protect children from UV exposure and keep homes cooler. Our lifetime-warranted products match the quality standards that Coppell's homeowners expect."
      },
      {
        question: "Can window tinting help Coppell residents who commute to DFW Airport or Las Colinas?",
        answer: "Absolutely! Many Coppell residents work at or near DFW Airport or commute to Las Colinas. Our ceramic automotive tint keeps your vehicle significantly cooler during long workdays in airport and office parking lots, reduces eye strain from glare on Highways 121 and 635, and protects your interior from daily UV exposure."
      }
    ],
    'grapevine': [
      {
        question: "Do you offer window tinting for businesses on Grapevine's historic Main Street?",
        answer: "Yes! Sunmasters provides commercial window film solutions for Grapevine's charming historic Main Street shops, wineries, restaurants, and tasting rooms. Our films reduce heat and glare while preserving the historic storefronts that make Grapevine's downtown a beloved Texas wine country destination."
      },
      {
        question: "Can you tint vehicles and homes near Grapevine Lake and Grapevine Mills?",
        answer: "Absolutely! We serve all of Grapevine's 55,000+ residents, from lakefront homes along Grapevine Lake to shoppers at Grapevine Mills Mall. Our residential films reduce lake glare and heat for waterfront properties, while our automotive ceramic tint keeps your vehicle cool during shopping trips and daily commutes near DFW Airport."
      }
    ],
    'caddo-mills': [
      {
        question: "Do you really serve a small town like Caddo Mills with window tinting?",
        answer: "Yes! Sunmasters is committed to serving the entire DFW metroplex, including growing bedroom communities like Caddo Mills. Small-town residents deserve the same premium XPEL window film products and lifetime warranties that larger cities receive. We provide mobile automotive tinting and on-site residential installation right in Caddo Mills."
      },
      {
        question: "Is window tinting worth it for affordable homes in Caddo Mills?",
        answer: "Absolutely! Window tinting is one of the smartest investments for Caddo Mills homeowners. With affordable housing attracting new families from the DFW area, our residential films reduce cooling costs by up to 30% and protect interiors from UV fading—savings that add up quickly and increase your home's comfort and value."
      }
    ],
    'commerce': [
      {
        question: "Do you provide window tinting for Texas A&M-Commerce students and campus-area businesses?",
        answer: "Yes! Sunmasters serves the Commerce college community with automotive window tinting that's perfect for students, faculty, and staff. Vehicles parked in campus lots all day benefit greatly from our ceramic tint that blocks 98% of heat and 99% of UV rays, keeping your car cool between classes and during the drive home."
      },
      {
        question: "Can you tint storefronts in Commerce's historic downtown?",
        answer: "Absolutely! We provide commercial window film for businesses throughout Commerce's historic downtown area. Our films reduce energy costs, add privacy, and decrease glare—all while maintaining the historic character of Commerce's small-town Main Street. We also serve residential properties across this tight-knit college town."
      }
    ]
  };

  // Default additional FAQs for cities without specific content
  const defaultAdditionalFAQs: FAQ[] = [
    {
      question: `What warranty do you offer on ${city} window tinting?`,
      answer: `All window film installations in ${city} include XPEL's lifetime manufacturer warranty covering bubbling, peeling, cracking, and color change. This transferable warranty provides peace of mind and covers both materials and our professional installation workmanship.`
    },
    {
      question: `Do you offer mobile window tinting service in ${city}?`,
      answer: `Yes! Sunmasters offers mobile automotive window tinting service throughout ${city} and ${region}. We can come to your home or workplace for added convenience. Contact us to schedule mobile service in ${city}.`
    }
  ];
  
  // Combine base FAQs with city-specific or default additional FAQs
  const additionalFAQs = citySpecificFAQs[slug] || defaultAdditionalFAQs;
  
  // Return 5-7 FAQs based on what's available
  return [...baseFAQs, ...additionalFAQs].slice(0, 7);
};

// Generate BreadcrumbList Schema for JSON-LD
const getBreadcrumbSchema = (location: LocationData): object => {
  const { city, slug } = location;
  const websiteUrl = "https://www.sunmasterstintandshades.com";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": websiteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": `${websiteUrl}/locations`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Window Tinting ${city}, TX`,
        "item": `${websiteUrl}/locations/${slug}`
      }
    ]
  };
};

// Generate FAQ Schema for JSON-LD
const getFAQSchema = (location: LocationData): object => {
  const faqs = getCityFAQs(location);
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate unique SEO meta description (150-160 chars) optimized for CTR
const getUniqueMetaDescription = (location: LocationData): string => {
  const { city, slug, county, region, population } = location;
  const popNum = population ? parseInt(population.replace(/,/g, '')) : 0;
  
  // Description variations based on city characteristics (all 150-160 chars)
  const descVariations: Record<string, string> = {
    'dallas': `Professional window tinting in Dallas, TX for cars, homes & businesses. XPEL certified. 99% UV block & lifetime warranty. Free estimates. Call today!`,
    'plano': `Expert window tinting in Plano, TX. Automotive, residential & commercial tint with 99% UV protection. XPEL certified installer. Free quotes available.`,
    'frisco': `Premium window tinting in Frisco, TX. Car, home & office tint with lifetime warranty. 98% heat rejection & 99% UV block. Get your free estimate now!`,
    'mckinney': `Window tinting services in McKinney, TX. Auto, home & commercial film with 99% UV protection. XPEL certified. Lifetime warranty. Free quotes today!`,
    'fort-worth': `Professional window tint in Fort Worth, TX. Automotive, residential & commercial film. 98% heat rejection & lifetime warranty. Get a free estimate!`,
    'arlington': `Window tinting in Arlington, TX for vehicles, homes & offices. XPEL ceramic film with 99% UV block. Lifetime warranty included. Free estimates today!`,
    'irving': `Expert window tinting services in Irving, TX. Auto, home & commercial tint with lifetime warranty. 99% UV protection. Call for your free quote now!`,
    'garland': `Professional window tinting in Garland, TX. Car & home film with 98% heat rejection. XPEL certified installer. Lifetime warranty. Free estimates!`,
    'grand-prairie': `Window tinting in Grand Prairie, TX for cars, homes & businesses. 99% UV protection & lifetime warranty. XPEL certified. Free quotes available!`,
    'richardson': `Expert window tinting in Richardson, TX. Auto, home & office film with 99% UV block. XPEL certified installer. Lifetime warranty. Free estimates!`,
    'allen': `Professional window tinting in Allen, TX. Automotive, home & commercial tint. 98% heat rejection & lifetime warranty. XPEL certified. Free quotes!`,
    'carrollton': `Window tinting services in Carrollton, TX. Car & home film with 99% UV protection. XPEL certified installer. Lifetime warranty. Free estimates!`,
    'lewisville': `Expert window tinting in Lewisville, TX for autos & homes. 98% heat rejection & 99% UV block. XPEL certified. Lifetime warranty. Free quotes today!`,
    'denton': `Professional window tinting in Denton, TX. Car, home & office tint with lifetime warranty. 99% UV protection. XPEL certified. Free estimates now!`,
    'flower-mound': `Premium window tinting in Flower Mound, TX. Auto & residential film with 99% UV block. XPEL certified installer. Lifetime warranty. Free quotes!`,
    'the-colony': `Window tinting in The Colony, TX for cars & homes. 98% heat rejection & lifetime warranty. XPEL certified installer. Get your free estimate today!`,
    'little-elm': `Expert window tinting services in Little Elm, TX. Auto & home film with 99% UV protection. XPEL certified. Lifetime warranty. Free quotes now!`,
    'prosper': `Luxury window tinting in Prosper, TX for high-end vehicles & homes. XPEL ceramic film with lifetime warranty. 99% UV block. Free estimates today!`,
    'mesquite': `Professional window tinting in Mesquite, TX. Car, home & business film with 98% heat rejection. XPEL certified. Lifetime warranty. Free quotes!`,
    'rockwall': `Expert window tinting in Rockwall, TX. Automotive, home & commercial tint. 99% UV block & lifetime warranty. XPEL certified. Free estimates today!`,
    'rowlett': `Window tinting services in Rowlett, TX for cars & homes. 98% heat rejection & 99% UV protection. XPEL certified. Lifetime warranty. Free quotes!`,
    'wylie': `Professional window tinting in Wylie, TX. Auto & residential film with lifetime warranty. XPEL certified installer. 99% UV block. Free estimates!`,
    'murphy': `Expert window tinting in Murphy, TX for vehicles & homes. 99% UV protection & 98% heat rejection. XPEL certified. Lifetime warranty. Free quotes!`,
    'sachse': `Window tinting services in Sachse, TX. Auto & home film with 99% UV block. XPEL certified installer. Lifetime warranty included. Free estimates today!`,
    'coppell': `Premium window tinting in Coppell, TX for cars & homes. 98% heat rejection & lifetime warranty. XPEL certified installer. Get your free quote now!`,
    'grapevine': `Professional window tinting in Grapevine, TX. Auto, home & office film. 99% UV protection & lifetime warranty. XPEL certified. Free estimates!`,
    'southlake': `Luxury window tinting in Southlake, TX. Premium auto & home film with 99% UV block. XPEL certified installer. Lifetime warranty. Free quotes now!`,
    'greenville': `Expert window tinting in Greenville, TX for cars & homes. 98% heat rejection & 99% UV protection. XPEL certified. Lifetime warranty. Free quotes!`,
    'caddo-mills': `Window tinting in Caddo Mills, TX for vehicles & homes. XPEL ceramic film with 99% UV block. Lifetime warranty included. Get a free estimate today!`,
    'commerce': `Professional window tinting in Commerce, TX. Auto & residential film with 98% heat rejection. XPEL certified. Lifetime warranty. Free estimates!`,
  };
  
  return descVariations[slug] || `Professional window tinting in ${city}, TX for vehicles, homes & businesses. 99% UV protection & lifetime warranty. Free quotes!`;
};

const LocationPage = ({ location }: LocationPageProps) => {
  const { city, state, region, county, population, nearby, description, localFacts, businessName, address, phone, heroVideo } = location;
  
  // Generate location-specific data
  const serviceNavItems = getServiceNavItems(city);
  const services = getServices(city);
  const shadeTypes = getShadeTypes(city);
  const uniqueContent = getUniqueIntroContent(location);
  const uniqueBenefits = getUniqueBenefitsContent(city, region);
  const cityContent = getCitySpecificContent(location);
  
  const pageTitle = getUniqueMetaTitle(location);
  const metaDescription = getUniqueMetaDescription(location);
  const canonicalUrl = `https://www.sunmasterstintandshades.com/locations/${location.slug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`window tinting ${city} TX, automotive window tinting ${city}, car tint ${city} Texas, home window tinting ${city} TX, residential window tinting ${city}, commercial window film ${city} TX, ceramic tint ${city}, security film ${city} TX, smart film ${city}, motorized shades ${city} TX, patio screens ${city}, XPEL installer ${city}, ${county} window tinting, window tinting near me ${city}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.sunmasterstintandshades.com/og-image.png" />
        <meta property="og:site_name" content="Sunmasters Window Tinting & Shades" />
        
        {/* LocalBusiness Schema - Comprehensive structured data for Google */}
        <script type="application/ld+json">
          {JSON.stringify(getLocalBusinessSchema(location))}
        </script>
        
        {/* Service Schemas - Individual service structured data */}
        {getServiceSchema(location).map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(getFAQSchema(location))}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema(location))}
        </script>
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav className="bg-secondary border-b border-border py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li className="text-muted-foreground/50">/</li>
            <li>
              <span className="text-muted-foreground">Locations</span>
            </li>
            <li className="text-muted-foreground/50">/</li>
            <li>
              <span className="text-foreground font-medium">{city}, TX</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Single H1 */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0">
          {heroVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={locationHeroImage} 
              alt={`Professional window tinting services in ${city}, ${state}`}
              className="w-full h-full object-cover"
              width={1200}
              height={600}
              loading="eager"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {region} Service Area
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Window Tinting {city}, TX
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
              {uniqueContent.heroIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactLink className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                Get Free Estimate
              </ContactLink>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card"
                asChild
              >
                <a href="tel:469-757-4325">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (469) 757-4325
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Services in {city}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceNavItems.map((svc) => (
              <Link
                key={svc.slug}
                to={`/${location.slug}-tx/${svc.slug}`}
                className="relative bg-card border border-border rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  {svc.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={svc.video} type={svc.video.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                    </video>
                  ) : svc.image ? (
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <svc.icon className="w-10 h-10 text-primary/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <h3 className="font-heading font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info Bar */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-primary-foreground/80 text-sm">City</p>
              <p className="text-primary-foreground font-bold text-lg">{city}, {state}</p>
            </div>
            {county && (
              <div>
                <p className="text-primary-foreground/80 text-sm">County</p>
                <p className="text-primary-foreground font-bold text-lg">{county}</p>
              </div>
            )}
            {population && (
              <div>
                <p className="text-primary-foreground/80 text-sm">Population</p>
                <p className="text-primary-foreground font-bold text-lg">{population}</p>
              </div>
            )}
            <div>
              <p className="text-primary-foreground/80 text-sm">Service Type</p>
              <p className="text-primary-foreground font-bold text-lg">Full Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Professional Window Tinting Services in {City}, Texas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Window Tinting {city} TX
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Professional Window Tinting Services in {city}, Texas
              </h2>
              <p className="text-muted-foreground mb-6">
                {uniqueContent.aboutIntro}
              </p>
              <p className="text-muted-foreground mb-6">
                Our certified XPEL installers bring decades of combined experience to every project in {city}. Whether you need heat-rejecting ceramic film for your vehicle, energy-saving residential tint for your home, or privacy film for your office, we deliver precision installation with a lifetime warranty.
              </p>
              <p className="text-muted-foreground mb-6">
                {uniqueContent.servicesIntro}
              </p>
              
              {localFacts.length > 0 && (
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                    About {city}, TX
                  </h3>
                  <ul className="space-y-3">
                    {localFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-heading font-bold text-foreground text-xl mb-6">
                  Sunmasters Advantage
                </h3>
                <ul className="space-y-4">
                  {companyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-4">
                    Ready to get started? Contact us today for a free estimate in {city}.
                  </p>
                  <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Your Free Estimate
                  </ContactLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Automotive, Residential & Commercial Window Tinting in {City} */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Complete Tinting Solutions
            </span>
            <h2 className="section-title text-foreground mt-2">
              Automotive, Residential & Commercial Window Tinting in {city}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              From vehicles to homes to businesses, Sunmasters provides comprehensive window film solutions throughout {city} and {county || region}. Each installation is backed by our lifetime warranty and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={`/${location.slug}-tx/${service.slug}`}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  {service.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={service.video} type={service.video.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                    </video>
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-primary/50" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City-Specific Deep Content Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              {cityContent.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {cityContent.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* H2: Benefits of Window Tinting in {City}, TX */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Window Tinting
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Window Tinting in {city}, TX
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
              {uniqueBenefits}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tintingBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Why Choose Sunmasters in {City}, TX */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                The Sunmasters Difference
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Why Choose Sunmasters in {city}, TX
              </h2>
              <p className="text-muted-foreground mb-6">
                Since 1979, Sunmasters has been the trusted name in window tinting throughout the Dallas-Fort Worth metroplex. Our reputation is built on quality materials, expert installation, and customer satisfaction that speaks for itself.
              </p>
              <p className="text-muted-foreground mb-6">
                When you choose Sunmasters for your {city} window tinting project, you get more than just film on glass. You get certified XPEL installers who take pride in their craft, premium materials that perform year after year, and a lifetime warranty that protects your investment.
              </p>
              <p className="text-muted-foreground mb-8">
                We understand that {city} residents and business owners have high standards. That is why we deliver the same exceptional quality to every project, whether it is a single vehicle or an entire commercial building.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactLink className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                  Get Free {city} Estimate
                </ContactLink>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-card"
                  asChild
                >
                  <a href="tel:469-757-4325">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">45+ Years</h3>
                <p className="text-muted-foreground text-sm">Serving DFW since 1979</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">Lifetime</h3>
                <p className="text-muted-foreground text-sm">Warranty on all work</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">XPEL</h3>
                <p className="text-muted-foreground text-sm">Certified installers</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">Same Day</h3>
                <p className="text-muted-foreground text-sm">Service available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shades Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Motorized Shades {city} TX
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Motorized Shades & Patio Screens in {city}
              </h2>
              <p className="text-muted-foreground mb-6">
                Complete your {city} home or business with professional motorized shade installation. Sunmasters offers motorized blinds, patio screens, and solar shades designed for the Texas climate.
              </p>
              <p className="text-muted-foreground mb-6">
                Our motorized shades integrate seamlessly with smart home systems like Amazon Alexa, Google Home, and Apple HomeKit. Control your window treatments with voice commands, smartphone apps, or automated schedules.
              </p>
              <p className="text-muted-foreground mb-8">
                For outdoor living spaces, our motorized patio screens transform your porch, deck, or pergola into a comfortable year-round retreat. Block the sun, keep out insects, and enjoy outdoor living in any weather.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/${location.slug}-tx/motorized-patio-screens`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
                >
                  Patio Screens {city} <ArrowRight className="w-4 h-4" />
                </Link>
                <ContactLink className="border border-border hover:bg-card">
                  Get Shade Quote
                </ContactLink>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shadeTypes.map((shade) => (
                <Link
                  key={shade.title}
                  to={`/${location.slug}-tx/${shade.slug}`}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                    <shade.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {shade.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{shade.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Film Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Smart Film {city} TX
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Smart Film in {city} - Switchable Privacy Glass
              </h2>
              <p className="text-muted-foreground mb-6">
                Experience the future of privacy with smart film in {city}. Transform any glass surface from completely clear to frosted white in milliseconds with the flip of a switch or tap of your phone.
              </p>
              <p className="text-muted-foreground mb-6">
                Smart film is perfect for homes, offices, conference rooms, medical facilities, and retail spaces. Create instant privacy when needed while maintaining an open, bright atmosphere when desired. Our PDLC technology is energy-efficient and easy to install.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Instant privacy on demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Retrofit to existing glass</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Smart home integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">99% UV protection</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/${location.slug}-tx/smart-film`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
                >
                  Smart Film {city} <ArrowRight className="w-4 h-4" />
                </Link>
                <ContactLink className="border border-border hover:bg-card">
                  Get Smart Film Quote
                </ContactLink>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <ToggleRight className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-4">
                Smart Film Applications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-medium">Conference Rooms</span>
                    <p className="text-muted-foreground text-sm">Instant privacy for meetings at the touch of a button</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-medium">Healthcare Facilities</span>
                    <p className="text-muted-foreground text-sm">Patient privacy without sacrificing natural light</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-medium">Bathroom Windows</span>
                    <p className="text-muted-foreground text-sm">Natural light when desired, complete privacy when needed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-medium">Retail Storefronts</span>
                    <p className="text-muted-foreground text-sm">After-hours privacy for security and visual merchandising</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Frequently Asked Questions
            </span>
            <h2 className="section-title text-foreground mt-2">
              Window Tinting FAQs for {city}, TX
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Find answers to common questions about window tinting services in {city} and the {region} area.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {getCityFAQs(location).map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Service Areas Near {City} */}
      {nearby && nearby.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-heading font-bold text-foreground text-2xl">
                Service Areas Near {city}
              </h2>
              <p className="text-muted-foreground mt-2">
                In addition to {city}, we provide window tinting and shade services throughout {county || region} and surrounding communities.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((area) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={area}
                    to={`/locations/${slug}`}
                    className="px-4 py-2 bg-secondary border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {area}, TX
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started in {city}?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact Sunmasters today for a free estimate on window tinting, motorized shades, paint protection, or ceramic coating services in {city} and the surrounding area.
          </p>
          
          {/* Location-specific contact info */}
          {(businessName || address || phone) && (
            <div className="bg-primary-foreground/10 rounded-lg p-6 max-w-md mx-auto mb-8">
              {businessName && (
                <p className="text-primary-foreground font-heading font-bold text-lg mb-2">
                  {businessName}
                </p>
              )}
              {address && (
                <p className="text-primary-foreground/80 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  {address}
                </p>
              )}
              {phone && (
                <p className="text-primary-foreground/80">
                  <Phone className="w-4 h-4 inline mr-2" />
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-primary-foreground transition-colors">
                    {phone}
                  </a>
                </p>
              )}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink className="bg-background text-foreground hover:bg-background/90 font-heading uppercase tracking-wider">
              Get Free Estimate
            </ContactLink>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href={`tel:${phone ? phone.replace(/\D/g, '') : '4697574325'}`}>
                <Phone className="w-4 h-4 mr-2" />
                {phone || "(469) 757-4325"}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LocationPage;