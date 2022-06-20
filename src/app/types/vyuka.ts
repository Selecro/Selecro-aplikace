export type Vyrobek = {
   nazev: string,
   kroky: Array<Postup>,
   popis: string,
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
  cast1: string,
  cast2: string,
  cast3: string,
  cast4: string,
  cast5: string,
  cast6: string,
  cast7: string,
}
