export type Postup = {
  nazev: string,
  popis: string,
  videoUrl: string,
  pouzijeme: string
}

 export type Vyrobek = {
   nazev: string,
   kroky: Array<Postup>,
   popis: string,
 }