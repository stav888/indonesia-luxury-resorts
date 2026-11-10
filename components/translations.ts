export type Language = 'en' | 'he';

export interface JourneyItem {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  badge: string;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
}

export interface VillaItem {
  id: string;
  name: string;
  location: string;
  rate: string;
  badge: string;
  image: string;
  tagline: string;
  bedrooms: string;
  guests: string;
  pool: string;
  service: string;
  amenities: string[];
}

export interface Translations {
  nav: {
    destinations: string;
    sanctuaries: string;
    journeys: string;
    villas: string;
    inquire: string;
    home: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    exploreBtn: string;
    expeditionsBtn: string;
    scrollText: string;
  };
  destinations: {
    tag: string;
    title: string;
    subtitle: string;
    discover: string;
    items: Array<{
      title: string;
      subtitle: string;
      tag: string;
      desc: string;
    }>;
  };
  resorts: {
    badge: string;
    title: string;
    subtitle: string;
    tariff: string;
    reserveBtn: string;
    items: Array<{
      name: string;
      location: string;
      tagline: string;
      rate: string;
      features: string[];
    }>;
  };
  journeysPage: {
    badge: string;
    title: string;
    subtitle: string;
    durationLabel: string;
    priceLabel: string;
    highlightsLabel: string;
    inclusionsLabel: string;
    bookBtn: string;
    items: JourneyItem[];
  };
  villasPage: {
    badge: string;
    title: string;
    subtitle: string;
    bedroomsLabel: string;
    guestsLabel: string;
    poolLabel: string;
    serviceLabel: string;
    amenitiesLabel: string;
    reserveBtn: string;
    items: VillaItem[];
  };
  booking: {
    badge: string;
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    destination: string;
    destOptions: string[];
    partySize: string;
    partyOptions: string[];
    notes: string;
    notesPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    submitAnother: string;
  };
  footer: {
    tagline: string;
    sanctuariesTitle: string;
    expeditionsTitle: string;
    liaisonTitle: string;
    rights: string;
    privacy: string;
    aviation: string;
    conservation: string;
  };
}

export const content: Record<Language, Translations> = {
  en: {
    nav: {
      destinations: 'Destinations',
      sanctuaries: 'Sanctuaries',
      journeys: 'Curated Journeys',
      villas: 'Private Villas',
      inquire: 'Inquire Stay',
      home: 'Overview',
    },
    hero: {
      eyebrow: 'The Archipelago of Pure Serenity',
      titleLine1: 'Where Untamed Nature',
      titleLine2: 'Meets Timeless Opulence',
      description: 'Immerse in private island sanctuaries, cliff-edge infinity villas, and secluded tropical rainforest retreats across the world’s most pristine Indonesian paradises.',
      exploreBtn: 'Explore Sanctuaries',
      expeditionsBtn: 'Private Expeditions',
      scrollText: 'Scroll to Discover',
    },
    destinations: {
      tag: 'Handpicked Paradises',
      title: 'Iconic Destinations',
      subtitle: 'Each enclave represents the pinnacle of architectural discretion, ecological guardianship, and heartfelt Indonesian hospitality.',
      discover: 'Discover Haven',
      items: [
        {
          title: 'Uluwatu & Ubud, Bali',
          subtitle: 'Cliff-edge Overlooks & Jungle Temples',
          tag: 'Spiritual Sanctuary',
          desc: 'Hanging villas suspended above cascading emerald ravines and dramatic ocean bluffs.',
        },
        {
          title: 'Raja Ampat Archipelago',
          subtitle: 'Overwater Marine Sanctuaries',
          tag: 'Private Atolls',
          desc: 'Secluded luxury stilt pavilions nestled amongst 1,500 biodiverse karst islands and crystal reefs.',
        },
        {
          title: 'Sumba Island Reserve',
          subtitle: 'Wild Equine Coastal Estates',
          tag: 'Untamed Frontier',
          desc: 'Raw untamed wilderness paired with private butler service, championship polo, and deserted shores.',
        },
        {
          title: 'Komodo National Park',
          subtitle: 'Pink Beaches & Luxury Phinisi Yachts',
          tag: 'Marine Expeditions',
          desc: 'Exclusive private island estates and handcrafted 60-meter ironwood charter vessels.',
        },
      ],
    },
    resorts: {
      badge: 'Ultra-Exclusive Portfolios',
      title: 'Signature Sanctuaries',
      subtitle: 'Architectural marvels engineered into raw topography, delivering privacy, bespoke gastronomy, and restorative seclusion beyond comparison.',
      tariff: 'Tariff Guarantee',
      reserveBtn: 'Reserve Villa',
      items: [
        {
          name: 'Amanjiwo Heritage Sanctuary',
          location: 'Borobudur, Central Java',
          tagline: 'Colonnaded temple suites facing sunrise over 9th-century stupas',
          rate: 'From $1,850 / night',
          features: ['Private Plunge Pool', 'Javanese Spa Rituals', 'Dedicated Butler', 'Sunrise Stupa Access'],
        },
        {
          name: 'Nihi Sumba Ocean Haven',
          location: 'Sumba Coastline',
          tagline: 'Voted #1 Hotel in the World — Treehouse villas overlooking Occy’s Left',
          rate: 'From $2,400 / night',
          features: ['Equestrian Center', 'Nihioka Spa Safari', 'Private Surfing Wave', 'Organic Farm Dining'],
        },
        {
          name: 'Misool Eco Private Atoll',
          location: 'Batbitim Island, Raja Ampat',
          tagline: 'Pristine overwater villa compound surrounded by an exclusive 300,000-acre marine reserve',
          rate: 'From $3,100 / night',
          features: ['Coral Reef Nursery', 'Overwater Hammocks', 'Marine Biologist Guides', 'Zero Carbon Footprint'],
        },
      ],
    },
    journeysPage: {
      badge: 'Archipelago Expeditions',
      title: 'Curated Private Journeys',
      subtitle: 'Transcendent adventures across Indonesia’s most remote frontiers. Handcrafted itineraries featuring private aviation, traditional ironwood yacht charters, and VIP wilderness escorts.',
      durationLabel: 'Expedition Duration',
      priceLabel: 'Charter Tariff',
      highlightsLabel: 'Journey Highlights',
      inclusionsLabel: 'Private Inclusions',
      bookBtn: 'Charter Journey',
      items: [
        {
          id: 'phinisi-yacht',
          title: 'Private Phinisi Superyacht Charter',
          location: 'Raja Ampat & Misool Seas',
          duration: '7 Days / 6 Nights',
          price: 'From $8,500 / day (Full Vessel)',
          badge: 'Maritime Sovereign',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80',
          description: 'Sail aboard a 65-meter handcrafted ironwood Phinisi schooner with master staterooms, onboard PADI dive center, private Michelin-trained chef, and 16 dedicated maritime crew.',
          highlights: ['Private dive master guiding virgin coral walls', 'Sunset champagne on deserted sandbars', 'Bespoke seafood gastronomy tailored daily'],
          inclusions: ['Helicopter transfers from Sorong', 'Full crew & private chef', 'Unlimited scuba diving & water sports equipment'],
        },
        {
          id: 'komodo-dragon',
          title: 'Komodo Dragon & Pink Beach Expedition',
          location: 'Komodo National Park & Rinca',
          duration: '4 Days / 3 Nights',
          price: 'From $5,200 / guest',
          badge: 'Wildlife Enclave',
          image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1400&q=80',
          description: 'Encounter prehistoric Komodo dragons with private national park rangers, followed by sunset picnics on solitary pastel pink sands and swimming with majestic manta rays.',
          highlights: ['VIP Ranger access to secluded mating valleys', 'Private catamaran anchorage at Pink Beach', 'Night snorkeling with bioluminescent plankton'],
          inclusions: ['Private speed vessels & tenders', 'National park ecological permits', 'Sommelier wine selection & beach banquets'],
        },
        {
          id: 'whale-shark',
          title: 'Whale Shark Marine Sanctuary Safari',
          location: 'Cenderawasih Bay & Triton',
          duration: '5 Days / 4 Nights',
          price: 'From $6,800 / guest',
          badge: 'Marine Wonder',
          image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1400&q=80',
          description: 'Private research boat escort to swim alongside gentle ocean giants in calm tropical bays, accompanied by leading Indonesian marine biologists and underwater photographers.',
          highlights: ['Daily private swimming with whale sharks', 'Pristine lagoon kayak expeditions', '4K underwater photography portfolio included'],
          inclusions: ['Hydroplane air transfer from Bali', 'Marine biologist private guide', 'Luxury liveaboard ocean suite'],
        },
        {
          id: 'volcano-helicopter',
          title: 'Volcanic Caldera & Heli-Safari',
          location: 'Mount Bromo, Ijen & Rinjani',
          duration: '3 Days / 2 Nights',
          price: 'From $4,900 / guest',
          badge: 'Aviation Luxury',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
          description: 'Fly by private twin-engine helicopter over turquoise sulfur crater lakes, smoking active calderas, and ancient highland cloud forests with exclusive rim landings.',
          highlights: ['Sunrise flyover of steaming Mount Bromo', 'Private crater landing with morning tea ceremony', 'Highland luxury glamping under equatorial stars'],
          inclusions: ['VIP twin-engine helicopter charter', 'Luxury expedition gear & personal butler', 'Aviation insurance & flight clearances'],
        },
        {
          id: 'spiritual-pilgrimage',
          title: 'Royal Temple & Sacred Healing Odyssey',
          location: 'Ubud, Besakih & Borobudur',
          duration: '6 Days / 5 Nights',
          price: 'From $5,500 / guest',
          badge: 'Sacred Heritage',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80',
          description: 'Private access to closed-door water purification ceremonies in ancient water temples, meditation with venerable Buddhist monks, and tailored Javanese Ayurvedic healing.',
          highlights: ['Private sunrise blessing at Borobudur stupa', 'Secret river gorge Melukat water ritual in Bali', 'Herbal healing sessions with master Jamu practitioners'],
          inclusions: ['Chauffeured luxury vintage vehicle', 'Personal spiritual historian & translator', 'Holistic wellness spa treatments'],
        },
      ],
    },
    villasPage: {
      badge: 'Unlisted Architectural Masterpieces',
      title: 'Private Estate Villas',
      subtitle: 'Stand-alone sanctuaries offering absolute discretion, private helipads, Michelin-trained private culinary brigades, and boundless panoramic ocean horizons.',
      bedroomsLabel: 'Suites / Bedrooms',
      guestsLabel: 'Capacity',
      poolLabel: 'Private Infinity Pool',
      serviceLabel: 'Dedicated Estate Team',
      amenitiesLabel: 'Estate Highlights',
      reserveBtn: 'Reserve Compound',
      items: [
        {
          id: 'the-cliff-uluwatu',
          name: 'The Cliff-Hanging Pavilion',
          location: 'Uluwatu Bluffs, Bali',
          rate: 'From $3,800 / night',
          badge: 'Ocean Cliff-Edge',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
          tagline: 'Perched 150 meters above the Indian Ocean with transparent infinity pool floors and private funicular access to the white sand cove.',
          bedrooms: '4 Master Suites',
          guests: 'Up to 8 Guests',
          pool: '30m Cliff-Edge Infinity Pool',
          service: 'Private Butler, Executive Chef, Chauffeur',
          amenities: ['Private Funicular to Beach', 'Sub-Zero Wine Cellar', 'Ocean Sunset Terrace', 'Outdoor Teppanyaki Counter'],
        },
        {
          id: 'raja-ampat-lagoon',
          name: 'Overwater Karst Lagoon Estate',
          location: 'Batbitim Atoll, Raja Ampat',
          rate: 'From $4,500 / night',
          badge: 'Overwater Private Sanctuary',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80',
          tagline: 'A stilt villa masterpiece built from salvaged ironwood over a private turquoise lagoon with living coral reef beneath your glass bedroom floor.',
          bedrooms: '3 Overwater Pavilions',
          guests: 'Up to 6 Guests',
          pool: 'Natural Ocean Plunge Lagoon',
          service: '24/7 Island Host, Marine Biologist, Chef',
          amenities: ['Direct Coral Ladder Access', 'Solar & Hydro Zero-Carbon', 'Private Catamaran & Captain', 'Overwater Stargazing Hammocks'],
        },
        {
          id: 'sumba-wild-ocean',
          name: 'The Raja Sumba Wild Ocean Compound',
          location: 'Nihi Coastal Reserve, Sumba',
          rate: 'From $5,200 / night',
          badge: 'Equine Wilderness Estate',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80',
          tagline: 'Set on 5 acres of private coconut groves and pristine coastal bluffs, featuring open-air teak architecture and private stables.',
          bedrooms: '5 Separate Teak Pavilions',
          guests: 'Up to 12 Guests',
          pool: 'Dual 25m Heated Mineral Pools',
          service: 'Estate Manager, 2 Butlers, Security Detail',
          amenities: ['Private Stable with 4 Sandalwood Horses', 'Direct Access to Occy’s Surf Wave', 'Private Open-Air Cinema', 'Organic Garden Dining'],
        },
        {
          id: 'borobudur-royal-stupa',
          name: 'Borobudur Royal Stupa Estate',
          location: 'Menoreh Hills, Central Java',
          rate: 'From $3,200 / night',
          badge: 'Imperial Heritage',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
          tagline: 'Inspired by ancient royal kratons, featuring limestone colonnades, private meditation pavilion, and unobstructed views of Borobudur.',
          bedrooms: '3 Royal Suites',
          guests: 'Up to 6 Guests',
          pool: '20m Green Sukabumi Stone Pool',
          service: 'Royal Butler, Classical Gamelan Musicians, Chef',
          amenities: ['Private Temple Access Pass', 'Javanese Herb Garden Spa', 'Bespoke Tea Sommelier Service', 'Pristine Rice Paddy Vistas'],
        },
      ],
    },
    booking: {
      badge: 'Bespoke Concierge',
      title: 'Curate Your Archipelago Voyage',
      subtitle: 'From private charter hydroplanes to dedicated island buyouts, our senior curators orchestrate every facet of your Indonesian sanctuary sojourn.',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Lord / Lady / Excellency...',
      email: 'Private Email / Concierge Desk',
      emailPlaceholder: 'liaison@familyoffice.com',
      destination: 'Desired Destination',
      destOptions: [
        'Raja Ampat Private Atolls',
        'Nihi Sumba Wilderness Estate',
        'Uluwatu Cliff Top Sanctuary, Bali',
        'Amanjiwo Borobudur Sanctuary',
        'Private Island Buyout (All Exclusive)',
      ],
      partySize: 'Estimated Party Size',
      partyOptions: [
        'Couples Haven (2 Guests)',
        'Intimate Family (3–5 Guests)',
        'Private Villa Compound (6–12 Guests)',
        'Full Island Seclusion (15+ Guests)',
      ],
      notes: 'Special Requests / Private Jet & Yacht Logistics',
      notesPlaceholder: 'E.g., Seaplane transfer from Denpasar, kosher/michelin chef requirement, helicopter pad clearance...',
      submitBtn: 'Dispatch Confidential Request',
      successTitle: 'Inquiry Received with Honour',
      successDesc: 'Your dedicated private island liaison will contact you within 4 hours with an unlisted itinerary proposal.',
      submitAnother: 'Submit Another Request',
    },
    footer: {
      tagline: 'Curators of transcendent luxury sanctuaries, private atolls, and royal Javanese heritage estates throughout the Indonesian archipelago.',
      sanctuariesTitle: 'Sanctuaries',
      expeditionsTitle: 'Expeditions',
      liaisonTitle: 'Global Liaison',
      rights: '© 2026 NUSANTARA SANCTUARY LTD. All Rights Reserved. Indonesia Sovereign Hospitality.',
      privacy: 'Privacy Charter',
      aviation: 'Aviation Guidelines',
      conservation: 'Marine Conservation Trust',
    },
  },
  he: {
    nav: {
      destinations: 'יעדים',
      sanctuaries: 'ריזורטים ומקדשים',
      journeys: 'מסעות מותאמים',
      villas: 'וילות פרטיות',
      inquire: 'שריון מקום',
      home: 'דף ראשי',
    },
    hero: {
      eyebrow: 'הארכיפלג של שלווה טהורה',
      titleLine1: 'המקום שבו טבע פראי',
      titleLine2: 'פוגש יוקרה על-זמנית',
      description: 'חוויית ריזורטים באיים פרטיים, וילות אינפיניטי תלויות על צוקים ומפלט יער גשם טרופי ברחבי גני העדן השמורים והמרהיבים ביותר באינדונזיה.',
      exploreBtn: 'גלו את הריזורטים',
      expeditionsBtn: 'משלחות פרטיות',
      scrollText: 'גללו לגילוי החוויה',
    },
    destinations: {
      tag: 'גני עדן נבחרים',
      title: 'יעדים איקוניים',
      subtitle: 'כל מתחם מייצג פסגה של דיסקרטיות ארכיטקטונית, שימור אקולוגי קפדני ואירוח אינדונזי חם ועילאי.',
      discover: 'גלו את המפלט',
      items: [
        {
          title: 'אולוואטו ואובוד, באלי',
          subtitle: 'צוקים פראיים ומקדשי יער',
          tag: 'מקדש רוחני',
          desc: 'וילות תלויות מעל קניוני אמרלד עוצרי נשימה ונופי אוקיינוס דרמטיים.',
        },
        {
          title: 'ארכיפלג ראג׳ה אמפאט',
          subtitle: 'מתחמי מים ומפרצים שמורים',
          tag: 'אטולים פרטיים',
          desc: 'ביתני יוקרה על המים בלב שמורת 1,500 איי קרסט ושוניות אלמוגים נדירות.',
        },
        {
          title: 'שמורת האי סומבה',
          subtitle: 'חופים מבודדים וחוות פרא',
          tag: 'טבע פראי בתולי',
          desc: 'מרחבים פראיים בשילוב שירות באטלר אישי, פולו על החוף ובידוד מוחלט.',
        },
        {
          title: 'הפארק הלאומי קומודו',
          subtitle: 'חופים ורודים ויאכטות פיניסי',
          tag: 'משלחות ימיות',
          desc: 'אחוזות באיים פרטיים לצד יאכטות עץ מסורתיות באורך 60 מטרים להפלגות פרטיות.',
        },
      ],
    },
    resorts: {
      badge: 'קולקציית עלית אקסקלוסיבית',
      title: 'ריזורטים ומקדשי יוקרה',
      subtitle: 'יצירות מופת ארכיטקטוניות המשתלבות בטבע הבתולי, ומציעות פרטיות מוחלטת, גסטרונומיה עילאית וניתוק מעורר השראה.',
      tariff: 'התחייבות לתעריף מיטבי',
      reserveBtn: 'הזמנת וילה',
      items: [
        {
          name: 'מקדש מורשת אמנג׳יבו (Amanjiwo)',
          location: 'בורובודור, מרכז ג׳אווה',
          tagline: 'סוויטות עמודים מלכותיות הצופות לזריחה מעל סטופות בנות המאה ה-9',
          rate: 'החל מ-$1,850 ללילה',
          features: ['בריכת צלילה פרטית', 'טיפולי ספא יאוואניים מסורתיים', 'באטלר צמוד', 'כניסה פרטית בלעדית לבורובודור'],
        },
        {
          name: 'אחוזת ניהי סומבה (Nihi Sumba)',
          location: 'רצועת החוף של סומבה',
          tagline: 'נבחר למלון הטוב בעולם — בתי עץ יוקרתיים מול גלי האוקיינוס המושלמים',
          rate: 'החל מ-$2,400 ללילה',
          features: ['מרכז רכיבה על סוסים בחופים', 'ספא ספארי Nihioka', 'גל גלישה פרטי ובלעדי', 'מטבח אורגני מן החווה לצלחת'],
        },
        {
          name: 'אטול פרטי מיסול (Misool Eco Resort)',
          location: 'האי באטביטים, ראג׳ה אמפאט',
          tagline: 'מתחם וילות מים עוצר נשימה בלב שמורה ימית בלעדית של 300,000 דונם',
          rate: 'החל מ-$3,100 ללילה',
          features: ['חממת אלמוגים פרטית', 'ערסלים מעל המים הצלולים', 'ביולוגים ימיים צמודים', 'איפוס פחמני מלא (Eco-Luxe)'],
        },
      ],
    },
    journeysPage: {
      badge: 'משלחות ומסעות בארכיפלג',
      title: 'מסעות פרטיים מותאמים אישית',
      subtitle: 'הרפתקאות נשגבות במחוזות הנידחים והפראיים ביותר של אינדונזיה. מסלולים המתוכננים בדיסקרטיות מלאה עם תעופה פרטית, יאכטות מפרש מסורתיות ומדריכי שטח בכירים.',
      durationLabel: 'משך המסע',
      priceLabel: 'תעריף משלחת',
      highlightsLabel: 'נקודות שיא במסע',
      inclusionsLabel: 'מה כלול במסע הפרטי',
      bookBtn: 'שריון ותיאום מסע',
      items: [
        {
          id: 'phinisi-yacht',
          title: 'שייט מפרשיות על פרטיות (Phinisi)',
          location: 'מימי ראג׳ה אמפאט ומיסול',
          duration: '7 ימים / 6 לילות',
          price: 'החל מ-$8,500 ליום (ספינה בלעדית)',
          badge: 'סובריין ימי',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80',
          description: 'הפלגה על יאכטת עץ מסורתית באורך 65 מטרים שנבנתה בעבודת יד מברזל עץ טיק, עם סוויטות מאסטר מפוארות, מועדון צלילה PADI צמוד, שף מישלן ו-16 אנשי צוות מסורים.',
          highlights: ['מדריך צלילה אישי לקירות אלמוגים בתוליים', 'שמפניה בשקיעה על שרטוני חול מבודדים', 'תפריטי גורמה ימיים שנבנים מדי יום עבורכם'],
          inclusions: ['העברות מוסקות או במטוס ימי מסורונג', 'צוות מלא ושף פרטי צמוד 24/7', 'ציוד צלילה וספורט ימי ללא הגבלה'],
        },
        {
          id: 'komodo-dragon',
          title: 'משלחת דרקוני קומודו והחופים הוורודים',
          location: 'הפארק הלאומי קומודו ורינצ׳ה',
          duration: '4 ימים / 3 לילות',
          price: 'החל מ-$5,200 לאורח',
          badge: 'מובלעת פרא',
          image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1400&q=80',
          description: 'מפגש נדיר עם דרקוני קומודו פרהיסטוריים בליווי ריינג׳רים בכירים של השמורה, ואחריו פיקניק שקיעה על חופים ורודים מבודדים ושחייה לצד חתולי ים ענקיים (מאנטות).',
          highlights: ['גישה בלעדית לעמקי קינון סגורים', 'עגינת קטמרן פרטית במפרצי החוף הוורוד', 'שנרקול לילי עם פלנקטון זוהר בחושך'],
          inclusions: ['סירות מנוע מהירות וסירות סיור צמודות', 'היתרים ואישורי כניסה אקולוגיים מיוחדים', 'ארוחות שף וסומלייה אישי על החוף'],
        },
        {
          id: 'whale-shark',
          title: 'ספארי שחייה עם כרישי לווייתן',
          location: 'מפרץ צ׳נדראוואסי וטריטון',
          duration: '5 ימים / 4 לילות',
          price: 'החל מ-$6,800 לאורח',
          badge: 'פלא ימי',
          image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1400&q=80',
          description: 'ליווי סירה פרטית לשחייה אינטימית ושלווה לצד ענקי האוקיינוס במפרצים טרופיים מוגנים, בליווי ביולוגים ימיים מובילים וצלם תת-ימי פרטי.',
          highlights: ['שחייה יומית פרטית עם כרישי לווייתן עדינים', 'מסעות קיאקים בלגונות טורקיז סודיות', 'אלבום צילום תת-ימי ברזולוציית 4K'],
          inclusions: ['טיסה ישירה במטוס מנהלים מבאלי', 'ביולוג ימי ומדריך צלילה בכיר צמודים', 'סוויטת אוקיינוס מפוארת על סיפון פרטי'],
        },
        {
          id: 'volcano-helicopter',
          title: 'ספארי מוסק מעל הרי געש פעילים',
          location: 'הר ברומו, איג׳ן ורינג׳אני',
          duration: '3 ימים / 2 לילות',
          price: 'החל מ-$4,900 לאורח',
          badge: 'תעופה יוקרתית',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
          description: 'טיסה במסוק מנהלים דו-מנועי מעל אגמי גופרית טורקיז, לועי הרי געש מעשנים ויערות עננים הרריים עתיקים, עם נחיתה ייעודית במכתש.',
          highlights: ['טיסת זריחה מרהיבה מעל לוע הר ברומו', 'נחיתת מכתש פרטית עם טקס תה מסורתי', 'גלמפינג אולטרה-יוקרתי תחת שמי כוכבים משווניים'],
          inclusions: ['חכירת מסוק VIP דו-מנועי', 'ציוד משלחות יוקרתי ובאטלר הרים צמוד', 'ביטוח תעופה מלא ואישורי טיסה מיוחדים'],
        },
        {
          id: 'spiritual-pilgrimage',
          title: 'מסע רוחני ומקדשי מורשת מלכותיים',
          location: 'אובוד, בסאקי ובורובודור',
          duration: '6 ימים / 5 לילות',
          price: 'החל מ-$5,500 לאורח',
          badge: 'מורשת קדושה',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80',
          description: 'כניסה בלעדית לטקסי טיהור מים במקדשים היסטוריים סגורים לקהל, מדיטציית שחר מודרכת עם נזירים בודהיסטים וטיפולי ריפוי יאוואניים עתיקים.',
          highlights: ['ברכת שחר פרטית במקדש בורובודור המלכותי', 'טקס מים קדוש (Melukat) בקניון נהר נסתר בבאלי', 'מפגשי צמחי מרפא מסורתיים עם מאסטר Jamu'],
          inclusions: ['רכב וינטג׳ מפואר עם נהג אישי צמוד', 'היסטוריון רוחני ומתורגמן פרטי', 'חבילת טיפולי ספא והבראה הוליסטיים'],
        },
      ],
    },
    villasPage: {
      badge: 'יצירות מופת ארכיטקטוניות דיסקרטיות',
      title: 'אחוזות ווילות פרטיות',
      subtitle: 'מתחמי מגורים בלעדיים המציעים פרטיות מלאה, מנחתי מסוקים פרטיים, צוותי קולינריה עילית אישיים ואופקי אוקיינוס אינסופיים.',
      bedroomsLabel: 'סוויטות / חדרים',
      guestsLabel: 'קיבולת אורחים',
      poolLabel: 'בריכת אינפיניטי פרטית',
      serviceLabel: 'צוות האחוזה הצמוד',
      amenitiesLabel: 'פיצ׳רים ומאפייני האחוזה',
      reserveBtn: 'שריון האחוזה',
      items: [
        {
          id: 'the-cliff-uluwatu',
          name: 'פביליון הצוק התלוי (The Cliff Pavilion)',
          location: 'צוקי אולוואטו, באלי',
          rate: 'החל מ-$3,800 ללילה',
          badge: 'צוק אוקיינוס פראי',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
          tagline: 'תלויה בגובה 150 מטר מעל האוקיינוס ההודי עם רצפת זכוכית שקופה בבריכת האינפיניטי ופוניקולר פרטי היורד למפרץ חול לבן מבודד.',
          bedrooms: '4 סוויטות מאסטר מלכותיות',
          guests: 'עד 8 אורחים',
          pool: 'בריכת אינפיניטי 30 מטר על שפת הצוק',
          service: 'באטלר צמוד, שף פרטי ונהג אישי',
          amenities: ['פוניקולר פרטי לחוף הים', 'מרתף יינות Sub-Zero מובחר', 'מרפסת שקיעה פנורמית', 'דלפק טפניאקי פתוח מול הים'],
        },
        {
          id: 'raja-ampat-lagoon',
          name: 'אחוזת לגונת הקרסט (Overwater Karst Estate)',
          location: 'אטול באטביטים, ראג׳ה אמפאט',
          rate: 'החל מ-$4,500 ללילה',
          badge: 'מקדש מים פרטי',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80',
          tagline: 'יצירת מופת בנויה על עמודים מעץ טיק ממוחזר מעל לגונת טורקיז פרטית, עם שונית אלמוגים חיה מתחת לרצפת הזכוכית של חדר השינה.',
          bedrooms: '3 ביתני מים מבודדים',
          guests: 'עד 6 אורחים',
          pool: 'לגונת שחייה וצלילה טבעית פרטית',
          service: 'מארח אי פרטי 24/7, ביולוג ימי ושף אישי',
          amenities: ['סולם צלילה ישיר לשונית האלמוגים', 'מערכת אנרגיה סולארית ואקולוגית 100%', 'קטמרן מפרש פרטית עם קפטן', 'ערסלי מנוחה תלויים לצפייה בכוכבים'],
        },
        {
          id: 'sumba-wild-ocean',
          name: 'מתחם האוקיינוס הפראי (Raja Sumba Estate)',
          location: 'שמורת החוף ניהי, סומבה',
          rate: 'החל מ-$5,200 ללילה',
          badge: 'אחוזת פרא וסוסים',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80',
          tagline: 'מתפרשת על פני 20 דונם של מטעי קוקוס פרטיים וצוקי חוף בתוליים, עם אדריכלות עץ פתוחה ואורוות סוסים פרטית לאחוזה.',
          bedrooms: '5 ביתני עץ נפרדים לאירוח מושלם',
          guests: 'עד 12 אורחים',
          pool: 'שתי בריכות מינרליות מחוממות באורך 25 מטר',
          service: 'מנהל אחוזה, 2 באטלרים, וצוות אבטחה דיסקרטי',
          amenities: ['אורווה פרטית עם 4 סוסי סנדלווד מאולפים', 'גישה פרטית בלעדית לגל הגלישה Occy’s', 'קולנוע פתוח תחת כיפת השמיים', 'מטבח חווה אורגני פרטי'],
        },
        {
          id: 'borobudur-royal-stupa',
          name: 'אחוזת הסטופה המלכותית (Royal Stupa Estate)',
          location: 'גבעות מנורה, מרכז ג׳אווה',
          rate: 'החל מ-$3,200 ללילה',
          badge: 'מורשת אימפריאלית',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
          tagline: 'בהשראת ארמונות הקראטון העתיקים, עם עמודי אבן גיר מגולפים, ביתן מדיטציה פרטי ותצפית ישירה ופתוחה לסטופות בורובודור.',
          bedrooms: '3 סוויטות מלכותיות',
          guests: 'עד 6 אורחים',
          pool: 'בריכת אבן ירוקה מסורתית (Sukabumi) באורך 20 מטר',
          service: 'באטלר מלכותי, נגני גמלאן קלאסיים ושף מורשת',
          amenities: ['כרטיס כניסה פרטי בלעדי למקדש לפני פתיחה', 'ספא צמחי מרפא ג׳אוואני פרטי', 'סומלייה תה מותאם אישית', 'נוף פנורמי בלתי מופרע לשדות אורז ירוקים'],
        },
      ],
    },
    booking: {
      badge: 'קונסיירז׳ אישי ודיסקרטי',
      title: 'תכנון המסע האישי שלכם',
      subtitle: 'ממטוסי ים פרטיים ועד סגירת איים שלמים עבורכם, מנהלי החוויות הבכירים שלנו יתפרו עבורכם כל פרט ופרט.',
      fullName: 'שם מלא',
      fullNamePlaceholder: 'כבוד השר / משפחת...',
      email: 'אימייל פרטי / משרד משפחתי',
      emailPlaceholder: 'concierge@familyoffice.com',
      destination: 'יעד מבוקש',
      destOptions: [
        'אטולים פרטיים בראג׳ה אמפאט',
        'אחוזת הטבע ניהי סומבה',
        'מקדש הצוקים אולוואטו, באלי',
        'מקדש בורובודור אמנג׳יבו',
        'סגירת אי פרטי מלאה (Buyout בלעדי)',
      ],
      partySize: 'הרכב האורחים המשוער',
      partyOptions: [
        'חופשה זוגית אינטימית (2 אורחים)',
        'חופשה משפחתית (3–5 אורחים)',
        'מתחם וילות פרטי (6–12 אורחים)',
        'סגירת אי מבודד מלאה (15+ אורחים)',
      ],
      notes: 'בקשות מיוחדות / לוגיסטיקת מטוסי מנהלים ויאכטות',
      notesPlaceholder: 'לדוגמה: טיסת ים מדנפסאר, שף מישלן / כשרות, הנחתת מסוק פרטי...',
      submitBtn: 'שליחת בקשה דיסקרטית',
      successTitle: 'הפנייה התקבלה בכבוד',
      successDesc: 'איש הקשר האישי שלכם לענייני איים ייצור עמכם קשר תוך 4 שעות עם הצעת מסלול בלעדית.',
      submitAnother: 'שליחת בקשה נוספת',
    },
    footer: {
      tagline: 'אוצרי מקדשי יוקרה יוצאי דופן, אטולים פרטיים ואחוזות מורשת מלכותיות ברחבי הארכיפלג האינדונזי.',
      sanctuariesTitle: 'ריזורטים',
      expeditionsTitle: 'משלחות ימיות',
      liaisonTitle: 'נציגות עולמית',
      rights: '© 2026 NUSANTARA SANCTUARY בע״מ. כל הזכויות שמורות. אירוח ריבוני אינדונזיה.',
      privacy: 'אמנת פרטיות',
      aviation: 'הנחיות תעופה פרטית',
      conservation: 'קרן שימור החיים הימיים',
    },
  },
};