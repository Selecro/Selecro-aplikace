export type Navod =  {
    nazev: string,
    title: string,
    pomucky: string,
    zkratky: string,
    popisy: Array<PopisNavodu>,
    obtiznost: Obtiznost,
  }
  
  export type PopisNavodu = {
    obrazek: boolean,
    nazevCasti: string,
    popis: string
  }
  
  export enum Obtiznost {
    tezky='tezky',
    stredni='stredni',
    lehky='lehky'
  }