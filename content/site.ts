// ---------------------------------------------------------------
// DEMO SITE. Every piece of text on the site lives in this file.
// Edit here, redeploy, done. No need to touch page code.
// ---------------------------------------------------------------

export const site = {
  name: "Brownview Landscaping",
  short: "Brownview",
  tagline: "Beautiful outdoor spaces, built to last.",
  intro:
    "Brownview is a Sydney landscaping team that designs, builds and looks after outdoor spaces across the city. Gardens, paving, retaining walls, turf and outdoor living areas, handled properly from the first sketch to the final sweep.",

  phoneDisplay: "(02) 5550 1847",
  phoneE164: "+61255501847",
  email: "hello@brownviewlandscaping.com.au",

  address: {
    street: "42 Banksia Grove",
    suburb: "Ryde NSW 2112",
  },
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=42+Banksia+Grove+Ryde+NSW+2112",

  hours: [
    { day: "Monday to Friday", time: "7:00am – 5:00pm" },
    { day: "Saturday", time: "8:00am – 2:00pm" },
    { day: "Sunday", time: "Closed" },
  ],

  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },

  // Paste a free Web3Forms access key (web3forms.com) to receive real
  // enquiries by email. Leave "" and forms open the visitor's mail app.
  formAccessKey: "",

  url: "",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About us" },
  { href: "/contact/", label: "Contact" },
] as const;

// ---------------------------------------------------------------
// PHOTOS — every image slot on the site.
// Drop files into /public/photos/ then set src, e.g. "/photos/hero.jpg".
// Empty src shows a labelled placeholder instead, so nothing looks broken.
// Free sources: unsplash.com and pexels.com.
// ---------------------------------------------------------------

export type Img = { src?: string; label: string; alt?: string };

export const photos = {
  hero: { src: "", label: "Hero: finished garden, wide", alt: "A completed Brownview garden in Sydney" } as Img,
  introA: { src: "", label: "Team on site, planting", alt: "Brownview landscapers planting a garden bed" } as Img,
  introB: { src: "", label: "Close-up: paving detail", alt: "Sandstone paving detail" } as Img,
  aboutTeam: { src: "", label: "The Brownview team", alt: "The Brownview Landscaping team" } as Img,
  aboutFounder: { src: "", label: "Founder portrait", alt: "Brownview founder on site" } as Img,
  ctaBand: { src: "", label: "Wide: courtyard at dusk", alt: "A landscaped Sydney courtyard at dusk" } as Img,
};

// ---------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  includes: string[];
  image: Img;
};

export const services: Service[] = [
  {
    slug: "landscape-design",
    title: "Landscape design",
    short: "Plans and planting schemes drawn before a single sod is turned.",
    body:
      "Every build starts on paper. We measure the site, work out how you actually want to use the space, and draw a plan that accounts for drainage, sun, soil and access before anything gets quoted.",
    includes: ["Site measure and consultation", "Concept plan and revisions", "Planting schedule", "Materials and finishes selection", "Staged build options"],
    image: { src: "", label: "Design plan on site", alt: "Landscape design plan" },
  },
  {
    slug: "landscape-construction",
    title: "Landscape construction",
    short: "The full build, managed by one team from excavation to handover.",
    body:
      "Excavation, drainage, structures, paving, planting and finishing, run by the same crew that quoted the job. No subcontractor roulette, no gaps between trades where the schedule falls apart.",
    includes: ["Excavation and site prep", "Drainage and levels", "Structural work", "Paving and hardscaping", "Planting and turf", "Final clean and handover"],
    image: { src: "", label: "Construction in progress", alt: "Landscape construction underway" },
  },
  {
    slug: "garden-makeovers",
    title: "Garden makeovers",
    short: "Tired gardens brought back without starting from scratch.",
    body:
      "Not every garden needs demolishing. Often the bones are good and the planting, edging and surfaces just need rethinking. Makeovers are a smaller commitment with a fast, visible result.",
    includes: ["Clearing and pruning", "Soil improvement", "New planting", "Edging and mulch", "Feature areas"],
    image: { src: "", label: "Garden makeover, after", alt: "Refreshed garden bed" },
  },
  {
    slug: "paving-hardscaping",
    title: "Paving & hardscaping",
    short: "Patios, paths and driveways laid on a base that holds up.",
    body:
      "Most paving failures come from what is underneath, not the stone on top. We build the base properly, set the falls so water goes where it should, and finish edges so nothing creeps or sinks.",
    includes: ["Sandstone, travertine, concrete and pavers", "Correct base preparation", "Drainage falls", "Cut and edge detailing", "Sealing where required"],
    image: { src: "", label: "Paved patio, finished", alt: "Finished paved patio" },
  },
  {
    slug: "retaining-walls",
    title: "Retaining walls",
    short: "Engineered where they need to be, tidy where they show.",
    body:
      "Sydney blocks slope. Retaining walls hold that ground back for decades if the drainage and footings are right. Walls over one metre get engineering and, where required, council approval, which we handle.",
    includes: ["Sandstone, block and timber", "Drainage behind the wall", "Engineering for walls over 1m", "Council approval assistance", "Integrated steps and garden beds"],
    image: { src: "", label: "Retaining wall build", alt: "Sandstone retaining wall" },
  },
  {
    slug: "turf-lawns",
    title: "Turf & lawns",
    short: "Lawns that establish properly instead of patching out in a season.",
    body:
      "Good turf is mostly good preparation. We remove the old lawn, correct the levels, improve the soil and lay fresh turf with a watering plan you can actually follow for the first month.",
    includes: ["Old lawn removal", "Level correction", "Soil preparation and underlay", "Turf supply and laying", "Establishment plan"],
    image: { src: "", label: "Fresh turf laid", alt: "Newly laid lawn" },
  },
  {
    slug: "outdoor-living",
    title: "Outdoor living areas",
    short: "Decks, pergolas and courtyards built to be used year round.",
    body:
      "Outdoor rooms only work if they are comfortable at the times you actually want to sit outside. We plan shade, shelter, lighting and power alongside the structure, not after it.",
    includes: ["Decking and platforms", "Pergolas and shade structures", "Courtyard design", "Outdoor lighting", "Built-in seating and screening"],
    image: { src: "", label: "Deck and pergola", alt: "Outdoor living area with pergola" },
  },
  {
    slug: "garden-maintenance",
    title: "Garden maintenance",
    short: "Ongoing care so the garden still looks right in three years.",
    body:
      "A new garden is at its most vulnerable in the first two seasons. Scheduled maintenance keeps planting healthy, edges sharp and problems small, on a visit frequency that suits the site.",
    includes: ["Scheduled visits", "Pruning and hedging", "Mulching and feeding", "Weed and pest management", "Irrigation checks"],
    image: { src: "", label: "Maintenance visit", alt: "Gardener maintaining a garden bed" },
  },
];

// ---------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------

export type Project = {
  slug: string;
  name: string;
  suburb: string;
  category: string;
  scope: string[];
  body: string;
  before: Img;
  after: Img;
};

export const projectCategories = [
  "All",
  "Landscape design",
  "Garden makeovers",
  "Paving & hardscaping",
  "Retaining walls",
  "Turf & lawns",
  "Outdoor living",
];

export const projects: Project[] = [
  {
    slug: "banksia-courtyard",
    name: "Banksia courtyard",
    suburb: "Ryde",
    category: "Outdoor living",
    scope: ["Landscape design", "Paving", "Planting", "Lighting"],
    body:
      "A narrow, unused side courtyard turned into the part of the house they sit in most. Travertine underfoot, a raised planter along the boundary, and low lighting so it works after dark.",
    before: { src: "", label: "Before: bare side courtyard", alt: "Courtyard before landscaping" },
    after: { src: "", label: "After: finished courtyard", alt: "Courtyard after landscaping" },
  },
  {
    slug: "hillside-terraces",
    name: "Hillside terraces",
    suburb: "Hunters Hill",
    category: "Retaining walls",
    scope: ["Retaining walls", "Drainage", "Steps", "Turf"],
    body:
      "A steep back yard nobody could stand on, cut into three usable terraces. Sandstone walls, proper drainage behind each one, and steps that make the whole slope walkable.",
    before: { src: "", label: "Before: steep unusable slope", alt: "Sloped yard before terracing" },
    after: { src: "", label: "After: terraced garden", alt: "Terraced garden after landscaping" },
  },
  {
    slug: "willow-street-frontage",
    name: "Willow Street frontage",
    suburb: "Epping",
    category: "Garden makeovers",
    scope: ["Garden makeover", "Planting", "Edging", "Turf"],
    body:
      "The bones were good, the planting was not. We cleared thirty years of overgrowth, kept the two established trees worth keeping, and replanted around them with a scheme that suits the aspect.",
    before: { src: "", label: "Before: overgrown front garden", alt: "Front garden before makeover" },
    after: { src: "", label: "After: replanted frontage", alt: "Front garden after makeover" },
  },
  {
    slug: "north-ryde-poolside",
    name: "North Ryde poolside",
    suburb: "North Ryde",
    category: "Paving & hardscaping",
    scope: ["Paving", "Drainage", "Planting", "Screening"],
    body:
      "Old pool surrounds that had lifted and cracked, replaced with a properly based travertine surround. Screen planting along the fence line gives the whole area privacy it never had.",
    before: { src: "", label: "Before: cracked pool surround", alt: "Pool area before paving" },
    after: { src: "", label: "After: new pool surround", alt: "Pool area after paving" },
  },
  {
    slug: "carlingford-lawn",
    name: "Carlingford lawn",
    suburb: "Carlingford",
    category: "Turf & lawns",
    scope: ["Turf installation", "Levelling", "Irrigation"],
    body:
      "A back lawn that had turned to compacted clay and weeds. Stripped, re-levelled to fix a drainage problem at the back fence, then new turf with irrigation run underneath.",
    before: { src: "", label: "Before: patchy compacted lawn", alt: "Lawn before returfing" },
    after: { src: "", label: "After: established new lawn", alt: "Lawn after returfing" },
  },
  {
    slug: "gladesville-garden-rooms",
    name: "Gladesville garden rooms",
    suburb: "Gladesville",
    category: "Landscape design",
    scope: ["Landscape design", "Construction", "Decking", "Planting"],
    body:
      "One long flat block, designed as three connected spaces instead of one big empty rectangle. A deck off the house, a planted middle, and a screened work area at the rear.",
    before: { src: "", label: "Before: empty flat block", alt: "Yard before landscape design" },
    after: { src: "", label: "After: three garden rooms", alt: "Yard after landscape design" },
  },
];

// ---------------------------------------------------------------
// PROCESS, STATS, AREAS
// ---------------------------------------------------------------

export const process = [
  {
    title: "Get in touch",
    body: "Send through what you are thinking, along with any photos of the space. The more we can see up front, the more useful the first conversation is.",
  },
  {
    title: "On-site consultation",
    body: "We walk the site with you, talk through what you want, and check the practical things: access, drainage, levels, soil and what is worth keeping.",
  },
  {
    title: "Design and quote",
    body: "You get a plan and a fixed, itemised quote. Nothing starts until you have both in front of you and you are happy with them.",
  },
  {
    title: "Build",
    body: "The crew works to an agreed schedule with a single point of contact. You know what is happening on site each week and who to call.",
  },
  {
    title: "Handover and aftercare",
    body: "We walk the finished job with you, leave a care guide for the planting, and check back after the first season. Ongoing maintenance is available if you want it.",
  },
];

// Placeholder figures. Replace with real numbers before any live use.
export const stats = [
  { value: 12, suffix: "+", label: "Years landscaping in Sydney" },
  { value: 480, suffix: "+", label: "Projects completed" },
  { value: 35, suffix: "", label: "Sydney suburbs serviced" },
  { value: 98, suffix: "%", label: "Would recommend us" },
];

export const serviceAreas = [
  "Ryde", "North Ryde", "West Ryde", "Gladesville", "Hunters Hill",
  "Epping", "Eastwood", "Carlingford", "Marsfield", "Macquarie Park",
  "Chatswood", "Lane Cove", "Willoughby", "Hornsby", "Pennant Hills",
  "Beecroft", "Dundas", "Ermington", "Meadowbank", "Putney",
];

// ---------------------------------------------------------------
// TESTIMONIALS — placeholder copy for a fictional business.
// Replace entirely with real, permissioned reviews before live use.
// ---------------------------------------------------------------

export const testimonials = [
  {
    quote:
      "They were the only ones who came out, measured properly and explained why the drainage had to be sorted first. The quote matched the invoice at the end, which was not our experience with the other two we got.",
    name: "Rebecca T.",
    suburb: "Hunters Hill",
    stars: 5,
  },
  {
    quote:
      "Same crew the whole way through, and someone actually answered the phone when I had a question mid-build. The yard went from unusable to the best part of the house.",
    name: "Daniel M.",
    suburb: "Epping",
    stars: 5,
  },
  {
    quote:
      "We had a tight budget and said so early. They staged the work over two visits so we could do it properly rather than cheaply. Really appreciated that.",
    name: "Priya S.",
    suburb: "Carlingford",
    stars: 5,
  },
];

// ---------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------

export const faqs = [
  {
    q: "Do you provide free quotes?",
    a: "Yes. The site visit and written quote are free, with no obligation. For larger design work we will tell you up front if a design fee applies, and that fee comes off the build cost if you go ahead with us.",
  },
  {
    q: "What areas of Sydney do you service?",
    a: "Mostly the inner north west and lower north shore, based out of Ryde. If you are outside the suburbs listed on this page, call anyway and we will tell you honestly whether we are the right fit.",
  },
  {
    q: "How much does landscaping cost?",
    a: "It depends almost entirely on site access, levels and materials, which is why nobody can give you a real figure over the phone. A garden makeover is a very different number to a full construction with retaining and paving. The site visit is where you get a real answer.",
  },
  {
    q: "How long does a landscaping project take?",
    a: "A garden makeover is usually a few days. A full design and construction job typically runs three to six weeks on site, plus design time beforehand. Weather and council approvals are the two things that move timelines most.",
  },
  {
    q: "Can you help design my garden?",
    a: "Yes. Design is where most jobs start. You get a measured plan, a planting schedule and material selections before anything is built, so you are not making decisions on the fly while a crew waits.",
  },
  {
    q: "Do you handle both design and construction?",
    a: "Yes, and we would rather do both. When the people who drew the plan are the ones building it, the details that get lost in a handover between two companies do not get lost.",
  },
  {
    q: "Do I need council approval?",
    a: "Sometimes. Retaining walls over one metre, work near boundaries and anything affecting drainage or a heritage property often need approval. We will tell you at the quote stage whether your job needs it, and help with the paperwork.",
  },
  {
    q: "Can I stay within a specific budget?",
    a: "Yes, if you tell us the number early. We will either scope the job to fit it or stage the work so you can do it properly across two visits rather than compromise the build.",
  },
];
