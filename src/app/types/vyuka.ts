export type Vyrobek = {
   nazev: string,
   kroky: Array<Postup>,
   cas: string,
   popis: string,
   pocet: string,
 }

 export type Postup = {
  cislo: string,
  popis: string,
  videoUrl: string,
  styl: string,
  pouzijeme: string
}

 export type Navod =  {
  nazev: string,
  pomucky: string,
  zkratky: string,
  popisy: Array<PopisNavodu>
}

export type PopisNavodu = {
  obrazek: boolean,
  nazevCasti: string,
  popis: string
}
