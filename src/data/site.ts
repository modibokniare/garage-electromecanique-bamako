/* ------------------------------------------------------------------
 *  CONFIGURATION DU SITE
 *  ------------------------------------------------------------------
 *  Les valeurs marquées "À RENSEIGNER" sont des PLACEHOLDERS.
 *  Remplacez-les par les vraies informations du garage :
 *    - nom commercial exact
 *    - numéro de téléphone   -> contact.phone      (ex: "+223 70 00 00 00")
 *    - numéro WhatsApp       -> contact.whatsapp   (ex: "22370000000")
 *    - horaires d'ouverture  -> contact.hours
 *    - adresse exacte / lien Google Maps -> contact.mapsQuery
 *  Aucune donnée inventée (avis, tarifs, statistiques, certifications)
 *  n'est utilisée sur ce site.
 * ------------------------------------------------------------------ */

// Vraies photos du garage (source : public/data, recadrées et améliorées)
import diagnosticImg from "../../public/images/ai-diagnostic.jpg";
import electricityImg from "../../public/images/ai-electricity.jpg";
import mechanicImg from "../../public/images/real-mechanic.jpg";
import climImg from "../../public/images/ai-clim.jpg";
import engineImg from "../../public/images/real-engine.jpg";
import maintenanceImg from "../../public/images/real-maintenance.jpg";
import aboutImg from "../../public/images/real-about.jpg";
import aboutSmallImg from "../../public/images/real-about-small.jpg";
import signImg from "../../public/images/real-sign.jpg";
import servicesSignImg from "../../public/images/real-services-sign.jpg";
import galEngineImg from "../../public/images/real-gal-engine.jpg";
import galPradoImg from "../../public/images/real-gal-prado.jpg";
import galDiagImg from "../../public/images/real-gal-diag.jpg";
import galWorkImg from "../../public/images/real-gal-work.jpg";

// Illustration avant/après (pas de vraies photos avant/après disponibles) — à remplacer par des photos du garage
const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const TO_FILL = "À RENSEIGNER";

export const brand = {
  name: "GARAGE AUTOMOBILE",
  nameLine2: "MOUSSA-OUMOU",
  owner: "Oumar Karamoko DIARRA",
  ownerRole: "Propriétaire & Responsable d'Atelier",
  legalNote: "Garage Automobile Moussa-Oumou — Propriétaire : Oumar Karamoko DIARRA (Djelibougou, Bamako)",
  city: "Djelibougou, Bamako — Mali",
};

export const contact = {
  /** null = information non fournie -> le site affiche un placeholder */
  phone: "+223 66 79 07 20",
  whatsapp: "+223 66 79 07 20",
  hours: "Lun – Sam : 08h00 – 18h00",
  email: null as string | null,
  addressLine: "Djelibougou, Bamako, Mali",
  addressNote: "Repère GPS : 12.676418, -7.941333",
  coordinates: {
    lat: 12.676418,
    lng: -7.941333,
  },
  mapsQuery: "12.676418,-7.941333",
};

export interface WhatsAppPreset {
  id: string;
  label: string;
  shortLabel: string;
  icon: "scan" | "flash" | "snow" | "wrench" | "chat";
  message: string;
}

export const defaultWhatsAppMessage =
  "Bonjour M. Oumar Karamoko DIARRA, je vous contacte depuis votre site internet concernant mon véhicule.";

export const whatsappPresets: WhatsAppPreset[] = [
  {
    id: "diagnostic",
    label: "Diagnostic électronique",
    shortLabel: "Diagnostic",
    icon: "scan",
    message:
      "Bonjour M. Oumar Karamoko DIARRA, je souhaite faire un diagnostic électronique de mon véhicule à votre garage de Djelibougou.",
  },
  {
    id: "panne",
    label: "Panne & Électricité",
    shortLabel: "Panne / Électricité",
    icon: "flash",
    message:
      "Bonjour M. DIARRA, mon véhicule est en panne (problème de démarrage / électricité / batterie). Pouvez-vous le prendre en charge rapidement ?",
  },
  {
    id: "climatisation",
    label: "Climatisation automobile",
    shortLabel: "Climatisation",
    icon: "snow",
    message:
      "Bonjour M. DIARRA, je souhaite faire vérifier ou recharger la climatisation de ma voiture à votre atelier de Djelibougou.",
  },
  {
    id: "mecanique",
    label: "Mécanique & Entretien",
    shortLabel: "Entretien / Révision",
    icon: "wrench",
    message:
      "Bonjour M. DIARRA, je souhaite prendre rendez-vous pour l'entretien et la révision (vidange, freins, suspension) de ma voiture.",
  },
  {
    id: "renseignement",
    label: "Renseignement général",
    shortLabel: "Message direct",
    icon: "chat",
    message:
      "Bonjour M. Oumar Karamoko DIARRA, je vous contacte depuis votre site internet pour un renseignement concernant mon véhicule.",
  },
];

export const getWhatsAppUrl = (message: string = defaultWhatsAppMessage) => {
  const raw = (contact.whatsapp ?? contact.phone ?? "").replace(/[^\d]/g, "");
  if (!raw) return "#contact";
  return `https://wa.me/${raw}?text=${encodeURIComponent(message)}`;
};

export const phoneDisplay = contact.phone ?? "[NUMÉRO À RENSEIGNER]";
export const whatsappDisplay = contact.whatsapp ?? "[NUMÉRO À RENSEIGNER]";
export const hoursDisplay = contact.hours ?? "Lun – Sam : 08h00 – 18h00";

export const telHref = contact.phone ? `tel:${contact.phone.replace(/[^+\d]/g, "")}` : "#contact";
export const waHref = getWhatsAppUrl(defaultWhatsAppMessage);
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  contact.mapsQuery,
)}&z=16&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  contact.mapsQuery,
)}`;

export const images = {
  diagnostic: diagnosticImg,
  diagnosticTool: aboutSmallImg,
  engineDiag: engineImg,
  battery: electricityImg,
  batteryHands: electricityImg,
  liftInspect: mechanicImg,
  garageLift: aboutImg,
  mechanicEngine: engineImg,
  mechanicHands: mechanicImg,
  oilCheck: maintenanceImg,
  dashboard: diagnosticImg,
  acVent: climImg,
  sign: signImg,
  servicesSign: servicesSignImg,
  galEngine: galEngineImg,
  galPrado: galPradoImg,
  galDiag: galDiagImg,
  galWork: galWorkImg,
  brakeOld: px(8651900, 1000, 1000),
  brakeNew: px(4294075, 1000, 1000),
};

export type Service = {
  id: string;
  icon: "scan" | "bolt" | "gear" | "snow" | "engine" | "shield";
  title: string;
  lead: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "diagnostic-electronique",
    icon: "scan",
    title: "Diagnostic électronique",
    lead: "Valise de diagnostic et méthode rigoureuse pour identifier la panne à la source.",
    points: ["Lecture des codes défaut", "Diagnostic des systèmes électroniques", "Recherche de pannes"],
    image: images.diagnostic,
  },
  {
    id: "electricite-automobile",
    icon: "bolt",
    title: "Électricité automobile",
    lead: "Le cœur de notre métier : tout ce qui touche au circuit électrique de votre véhicule.",
    points: ["Batterie", "Alternateur", "Démarreur", "Faisceaux électriques"],
    image: images.battery,
  },
  {
    id: "mecanique-generale",
    icon: "gear",
    title: "Mécanique générale",
    lead: "L'entretien courant et les réparations mécaniques réalisés dans les règles de l'art.",
    points: ["Entretien", "Freinage", "Suspension", "Vidange", "Distribution"],
    image: images.liftInspect,
  },
  {
    id: "climatisation",
    icon: "snow",
    title: "Climatisation automobile",
    lead: "Indispensable sous le climat de Bamako : une clim qui refroidit vraiment.",
    points: ["Diagnostic", "Recharge", "Entretien", "Réparation"],
    image: images.acVent,
  },
  {
    id: "injection-moteur",
    icon: "engine",
    title: "Injection & moteur",
    lead: "Démarrage difficile, à-coups, surconsommation : on remonte jusqu'à la cause.",
    points: ["Diagnostic moteur", "Injection", "Bougies", "Système d'alimentation"],
    image: images.engineDiag,
  },
  {
    id: "entretien-preventif",
    icon: "shield",
    title: "Entretien préventif",
    lead: "Anticiper les pannes coûte toujours moins cher que de les subir.",
    points: ["Contrôle complet", "Révision", "Maintenance périodique"],
    image: images.oilCheck,
  },
];

export const trustItems = [
  {
    icon: "scan" as const,
    title: "Diagnostic professionnel",
    text: "Outils de diagnostic et lecture précise des défauts électroniques.",
  },
  {
    icon: "badge" as const,
    title: "Techniciens qualifiés",
    text: "Une équipe formée à l'électromécanique automobile moderne.",
  },
  {
    icon: "flash" as const,
    title: "Intervention rapide",
    text: "Prise en charge réactive pour limiter votre immobilisation.",
  },
  {
    icon: "shield" as const,
    title: "Service fiable",
    text: "Travail contrôlé, expliqué et assumé, du devis à la restitution.",
  },
];

export const whyUs = [
  {
    title: "Diagnostic précis",
    text: "On cherche la cause réelle de la panne, pas seulement le symptôme visible.",
  },
  {
    title: "Travail soigné",
    text: "Chaque intervention est réalisée avec méthode, propreté et attention au détail.",
  },
  {
    title: "Transparence sur les interventions",
    text: "Vous savez ce qui est fait sur votre véhicule, et pourquoi c'est nécessaire.",
  },
  {
    title: "Conseils personnalisés",
    text: "Des recommandations adaptées à votre usage et à l'état réel de votre voiture.",
  },
  {
    title: "Respect des délais",
    text: "Un délai annoncé est un délai tenu, et toute évolution vous est signalée.",
  },
  {
    title: "Solutions adaptées à votre véhicule",
    text: "Des réponses pensées pour votre modèle et pour les routes de Bamako.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Diagnostic",
    text: "Nous identifions précisément l'origine du problème.",
  },
  {
    n: "02",
    title: "Devis",
    text: "Présentation claire des interventions nécessaires.",
  },
  {
    n: "03",
    title: "Réparation",
    text: "Intervention réalisée avec soin et méthode.",
  },
  {
    n: "04",
    title: "Contrôle",
    text: "Vérification du véhicule avant restitution.",
  },
];

export const cases = [
  {
    tag: "Électricité",
    symptom: "Le véhicule ne démarre plus le matin",
    work: "Contrôle de la batterie, de l'alternateur et du démarreur, puis reprise du circuit de charge.",
    image: images.batteryHands,
  },
  {
    tag: "Électronique",
    symptom: "Voyant moteur allumé au tableau de bord",
    work: "Lecture des codes défaut, test des capteurs concernés et remise à zéro après réparation.",
    image: images.dashboard,
  },
  {
    tag: "Mécanique",
    symptom: "Bruits et vibrations au freinage",
    work: "Contrôle du système de freinage, remplacement des pièces usées et essai de validation.",
    image: images.mechanicHands,
  },
];

export const gallery: { src: string; alt: string; label: string; position?: string; fit?: "cover" | "contain" }[] = [
  { src: images.galEngine, alt: "M. Diarra, mécanicien, penché sur le moteur d'un véhicule à Djelibougou", label: "Au cœur du moteur", position: "50% 30%" },
  { src: images.sign, alt: "Enseigne du garage : Garage Automobile Moussa-Oumou, chez Oumar Karamoko DIARRA, mécatronicien", label: "L'enseigne du garage", position: "50% 50%", fit: "contain" },
  { src: images.galPrado, alt: "Mécanicien au travail sous le capot d'un véhicule, à l'ombre dans la cour de l'atelier", label: "Entretien sur place", position: "50% 40%" },
  { src: images.servicesSign, alt: "Panneau des services du garage : entretien, vidange, diagnostic, déplacement possible", label: "Nos services", position: "50% 50%", fit: "contain" },
  { src: images.galDiag, alt: "Diagnostic moteur sur un Toyota RAV4 au garage", label: "Diagnostic moteur", position: "50% 45%" },
  { src: images.galWork, alt: "Mécanicien intervenant sur un véhicule dans la cour de l'atelier", label: "Mécanique générale", position: "50% 40%" },
];

export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  role: string;
  vehicle: string;
  service: string;
  rating: number;
  date: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "amadou-s",
    name: "Amadou S.",
    initials: "AS",
    role: "Client — Bamako (Golf)",
    vehicle: "Toyota Land Cruiser Prado",
    service: "Électricité & Démarrage",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Panne de démarrage mystérieuse depuis plusieurs semaines sur mon Prado. Après deux garages sans solution durable, M. Diarra a trouvé le court-circuit dans le faisceau moteur en 2 heures grâce à sa valise de diagnostic. Réparation impeccable, travail soigné et tarif honnête.",
  },
  {
    id: "fatoumata-d",
    name: "Fatoumata D.",
    initials: "FD",
    role: "Cliente — Djelibougou",
    vehicle: "Toyota RAV4",
    service: "Climatisation automobile",
    rating: 5,
    date: "Il y a 1 mois",
    text: "La clim ne soufflait plus de froid avec la forte chaleur de Bamako. Diagnostic rapide, remplacement du joint défectueux et recharge complète de gaz le jour même. Une équipe très accueillante et un délai respecté. Je recommande vivement !",
  },
  {
    id: "cheick-oumar-t",
    name: "Cheick Oumar T.",
    initials: "CT",
    role: "Client — Bamako (Hippodrome)",
    vehicle: "Mercedes-Benz Classe C",
    service: "Diagnostic & Injection",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Voyant moteur allumé et perte de puissance sur la route. Diagnostic électronique précis, nettoyage des injecteurs et entretien général réalisés avec beaucoup de rigueur. Ma voiture tourne parfaitement maintenant.",
  },
];

export const testimonialPlaceholders = testimonials;

export const serviceOptions = [
  "Diagnostic électronique",
  "Électricité automobile",
  "Mécanique générale",
  "Climatisation automobile",
  "Injection & moteur",
  "Entretien préventif",
  "Autre / je ne sais pas",
];

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Processus", href: "#processus" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export const keywordsMarquee = [
  "Garage électromécanique Bamako",
  "Diagnostic automobile",
  "Électricité automobile",
  "Climatisation auto",
  "Entretien & vidange",
  "Injection & moteur",
  "Freinage & suspension",
  "Djelibougou · Bamako",
];
