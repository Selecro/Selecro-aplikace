export type Postup = {
  nazev: string,
  popis: string,
  videoUrl: string,
  pouzijeme: string
}

 export type Navod={
   nazev: string,
   kroky: Array<Postup>,
   popis: string,
 }