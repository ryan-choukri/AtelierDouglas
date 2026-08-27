/**
 * Toutes les données éditables du site.
 * Le lien de réservation pointe vers le moteur externe du camping :
 * il suffit de remplacer BOOKING_URL pour brancher le système actuel.
 */
export const BOOKING_URL = "#contact";

export const CAMPING = {
  name: "Camping Les Grands Chênes",
  shortName: "Les Grands Chênes",
  region: "la Dordogne",
  city: "Sarlat-la-Canéda",
  address: "1240 route des Chênes, 24200 Vitrac",
  phone: "+33 5 53 00 00 00",
  phoneDisplay: "05 53 00 00 00",
  email: "contact@campinglesgrandschenes.fr",
  rating: 4.6,
  reviews: 328,
} as const;
