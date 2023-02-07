export type Pomucka = {
  nazev: string,
  title: string,
  kroky: Array<PopisPomucek>,
  videoURL: string,
}

export type PopisPomucek = {
  popis: string,
  obrazek: string,
  exist: boolean,
}