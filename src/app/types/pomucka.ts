export type Pomucka =  {
  nazev: string,
  titulek: string,
  kroky: Array<PopisPomucek>,
  videoURL: string,
}

export type PopisPomucek =  {
  index: number;
  popis: string,
  obrazek: string,
  exist: boolean,
} 