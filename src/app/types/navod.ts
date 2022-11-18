export type Navod =  {
    nazev: string,
    title: string,
    pomucky: string,
    zkratky: string,
    popisy: Array<PopisNavodu>,
    obtiznost: Obtiznost,
  }
  
  export type PopisNavodu = {
    nazevCasti: string,
    titulekCasti: string,
    obrazek: boolean,
    popis: string
  }
  
  export enum Obtiznost {
    tezky='tezky',
    stredni='stredni',
    lehky='lehky'
  }