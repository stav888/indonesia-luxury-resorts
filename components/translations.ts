export type Language = 'en' | 'he';

export interface Translations {
  nav: {
    destinations: string;
    sanctuaries: string;
    journeys: string;
    villas: string;
    inquire: string;
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
          rate: 'החל מ-$1,850 / לילה',
          features: ['בריכת צלילה פרטית', 'טיפולי ספא יאוואניים מסורתיים', 'באטלר צמוד', 'כניסה פרטית בלעדית לבורובודור'],
        },
        {
          name: 'אחוזת ניהי סומבה (Nihi Sumba)',
          location: 'רצועת החוף של סומבה',
          tagline: 'נבחר למלון הטוב בעולם — בתי עץ יוקרתיים מול גלי האוקיינוס המושלמים',
          rate: 'החל מ-$2,400 / לילה',
          features: ['מרכז רכיבה על סוסים בחופים', 'ספא ספארי Nihioka', 'גל גלישה פרטי ובלעדי', 'מטבח אורגני מן החווה לצלחת'],
        },
        {
          name: 'אטול פרטי מיסול (Misool Eco Resort)',
          location: 'האי באטביטים, ראג׳ה אמפאט',
          tagline: 'מתחם וילות מים עוצר נשימה בלב שמורה ימית בלעדית של 300,000 דונם',
          rate: 'החל מ-$3,100 / לילה',
          features: ['חממת אלמוגים פרטית', 'ערסלים מעל המים הצלולים', 'ביולוגים ימיים צמודים', 'איפוס פחמני מלא (Eco-Luxe)'],
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
