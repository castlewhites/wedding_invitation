export type Guest = {
  name: string;
  slug: string;
  lang: 'es' | 'en' | 'pl'; 
  plusOne?: boolean;
};
export const guests: Guest[] = [
  { "name": "Magdalena & Jacek Gadowscy", "slug": "5407", lang: "pl" },
  { "name": "Luz López & Hernando Barliza", "slug": "5681", lang: "es" },
  { "name": "Aniela Gadowska", "slug": "998", lang: "pl" },
  { "name": "Paulina Krych & Piotr Martyka", "slug": "559", lang: "pl" },
  { "name": "Justyna Heinz-Zawalska & Matthias Heinz", "slug": "67", lang: "en" },
  { "name": "Judyta Janoschka-Bujkowska & Cedric Janoschka", "slug": "5682", lang: "en" },
  { "name": "Paola Marquez & Martin Gubsch", "slug": "7535", lang: "es" },
  { "name": "Julia Landrock & Leonardo Pineda", "slug": "1994", lang: "en" },
  { "name": "Irina Riascos", "slug": "3947", lang: "es" },
  { "name": "Margarita Morziello & Mario Cappiello", "slug": "2035", lang: "en" },
  { "name": "Miguel Freyle & Karem Sarmiento", "slug": "9120", lang: "es" },
  { "name": "Carlos Pérez", "slug": "1510", lang: "es" },
  { "name": "Kevin Castiblanco & Daniela Gaviria", "slug": "6537", lang: "es" },
  { "name": "Luis Avila & Vanessa Cardona", "slug": "8493", lang: "es" },
  { "name": "Raúl López & acompañante", "slug": "3597", lang: "es" },
  { "name": "Christian Torrico & Noelia Díaz", "slug": "2608", lang: "es" },
  { "name": "Julia Zaborowska & Wojciech Zaborowski", "slug": "6612", lang: "pl" },
  { "name": "Ahmed Homudi & Tobias", "slug": "461", lang: "en" },
  { "name": "Iwona & Paweł Klijewscy", "slug": "1290", lang: "pl" },
  { "name": "Monika Klijewska", "plusOne": true, "slug": "8723", lang: "pl" },
  { "name": "Alicja & Jarosław Pol", "slug": "9667", lang: "pl" },
  { "name": "Agata Pol-Zakręta & Marcin Zakręta", "slug": "3610", lang: "pl" },
  { "name": "Małgorzata & Marcin Pol", "slug": "1337", lang: "pl" },
  { "name": "Gabriela Lupa", "plusOne": true, "slug": "7606", lang: "pl" },
  { "name": "Barbara Kaczocha & Thomas Feldmeier", "slug": "676", lang: "en" },
  { "name": "Joanna Nawrocka & Paweł Połukord", "slug": "3592", lang: "pl" },
  { "name": "Joanna Lawda", "plusOne": true, "slug": "6909", lang: "pl" },
  { "name": "Sylwestra Koller", "slug": "7382", lang: "pl" },
  { "name": "Iwona Parkitna", "slug": "1154", lang: "pl" },
  { "name": "Mariola & Marcin Nawroccy", "slug": "6495", lang: "pl" },
  { "name": "Małgorzata, Zigniew & Jakub Łukowiakowie", "slug": "1194", lang: "pl" },
  { "name": "Doris Ballesteros", "slug": "9048", lang: "es" },
  { "name": "Amparo Gómez & Hernán Sarmiento", "slug": "4100", lang: "es" },
  { "name": "Belisario Gómez", "slug": "9645", lang: "es" },
];

