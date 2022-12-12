export type Navod =  {
    nazev: string,
    titulek: string,
    pomucky: string,
    zkratky: string,
    popisy: Array<PopisNavodu>,
    obtiznost: Obtiznost
  }
  
  export type PopisNavodu = {
    nazevCasti: string,
    zkratkyCasti: string,
    titulekCasti: string,
    obrazek: boolean,
    popis: string
  }
  



export enum Obtiznost {
  tezky = 'tezky',
  stredni = 'stredni',
  lehky = 'lehky',
}