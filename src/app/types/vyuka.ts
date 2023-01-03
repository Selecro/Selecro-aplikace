export type Vyrobek =  {
  nazev: string,
  title: string,
  kroky: Array<Postup>,
  cas: string,
  popis: string,
  pocet: string,
}

export type Postup =  {
  cislo: string,
  popis: string,
  videoUrl: string,
  styl: string,
  pouzijeme: string,
}