export type Pomucka =  {
  nazev: string,
  titulek: string,
  kroky: Array<PopisPomucek>,
  videoURL: string,
}

export type PopisPomucek =  {
  popis: string,
  obrazek: string,
  exist: boolean,
} 