export type Navod = {
  nazev: string,
  title: string,
  pomucky: string,
  zkratky: string,
  popisy: Array<PopisNavodu>,
  obtiznost: Obtiznost,
  premiove: boolean,
}

export type PopisNavodu = {
  nazevCasti: string,
  zkratkyCasti: string,
  titulekCasti: string,
  obrazek: boolean,
  popis: Array<string>,
}

export enum Obtiznost {
  tezky = 'tezky',
  stredni = 'stredni',
  lehky = 'lehky',
}