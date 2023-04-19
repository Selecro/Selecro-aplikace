import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Vyrobek } from '../types'

const poleVyrobkuCZ: Array<Vyrobek> = [
  {
    nazev: "chobotnice",
    title: "Chobotnička",
    popis: "Navod na vytvoreni chobotnicky",
    pocet: "12",
    cas: "60min",
    kroky: [{
      cislo: "1.",
      styl: "Mk",
      pouzijeme: "Háček, značkovač",
      popis: "Nejdůležitější na tomto kroku je neutahovat, abyste byli schopni konečný výsledek utáhnout. Neustále si hlídám zadní nit, aby mi neutekla. Potřebujeme ji tam mít zaháčkovanou, abychom měli vůbec možnost utáhnout celý kroužek.</p><p>Postup na magický kroužek je uveden ve slovníku v jeho samostatné kapitole. Existuje však spousta způsobů, jak jej vytvořit. Ve většině způsobů se dostanete ke stejnému základu, jako ve videu (viz 35 vteřina). Můžeme k tomu však použít i pouhá 2 řetízková oka, vrátit se a udělat do toho prvního 6 ks.",
      videoUrl: "06DsV4I1fN8"
    },
    {
      cislo: "2.",
      styl: "V",
      pouzijeme: "Háček, značkovač",
      popis: "Tomuto kroku se říká rozháčkování, nebo-li rozšiřování. Díky němu budeme schopni náš výrobek zvětšovat. Rozháčkování lze aplikovat na skoro na každý styl. Nejčastěji je používám v souvislosti s krátkým, dlouhými, nebo polodlouhými sloupky.</p><p>Stále si budeme udržovat zadní nit v kroku, abychom mohli utáhnout a zbavit se tak případné mezery v magickém kroužku.",
      videoUrl: "TW0VbGVXBps"
    },
    {
      cislo: "3.",
      styl: "Ks, V",
      pouzijeme: "Háček, značkovač",
      popis: "Postupné rozšiřování. Pokud chceme tvořit pravidelný tvar, je potřeba pravidelně výrobek zvětšovat. Kvůli tomu budeme postupovat tak, že budeme stále používat rozháčkování, ale v kombinaci s krátkými sloupky. </p><p>Představte si to, jako by minulý krok byl 0ks, V a teď budeme pokračovat 1ks, V a pak 2ks, V.",
      videoUrl: "Ivyrl2Mb2o8"
    },
    {
      cislo: "4. a 5.",
      styl: "Ks",
      pouzijeme: "Háček, značkovač",
      popis: "Následující 2 řady budou stejné, abychom docílili nějakého tvaru. Rozšířili jsme dostatečně, ale za pomoci těchto řad se nám chobotnička ještě trošku zvětší. Kdybyste ji chtěli vyšší, musíte přidat více řad.",
      videoUrl: "WJJbSN6qTpc"
    },
    {
      cislo: "6.",
      styl: "Ks, A",
      pouzijeme: "Háček, značkovač",
      popis: "Stejně jako u kroku 3 jsme zvětšovali chobotničku, tak teď ji budeme pro změnu uzavírat. Opět to napomáhá k tvarování hlavičky chobotnice. Značka <i>A</i> je stažení, jinak řečeno sháčkování. Docílíme ho za pomoci spojení 2 krátkých sloupků.",
      videoUrl: "MwfZ48fExG0"
    },
    {
      cislo: "7.",
      styl: "A",
      pouzijeme: "Háček, značkovač",
      popis: "Tímto krokem pokračujeme v postupném sháčkování. U většiny výrobků by byl tohle poslední krok, ale tím, že mi děláme chapadla jednolitě s hlavičkou, budeme pokračovat. Je potřeba tento krok moc nestahovat. Snažit se dělat větší mezery, aby se dalo navázat chapadly.</p><p>Posledním pevným okem celý výrobek uzavřeme a je nutné nechat si delší konečnou nit, abychom měli po vyplnění, jak uzavřít spodek chobotničky.",
      videoUrl: "GAR5JQXzk88"
    },
    {
      cislo: "8.",
      styl: "Po, Pds, Ds",
      pouzijeme: "Háček, značkovač",
      popis: "Pevné očko, polodlouhý sloupek, dlouhý sloupek, polodlouhý. Tato kombinace půjde do každého jednoho oka. Čili v konečném výsledku budeme opakovat 6krát. Vytváříme tím obloučky, které v našem případě zastávají chapadla. </p><p>Pevné očko v tomto případě tvoří přechod mezi jednotlivými chapadly, dlouhé a polodlouhé sloupky naopak dodávají tvar.</p><p>Je to docela blízko sebe, tak dávejte pozor, ať nevynecháte.",
      videoUrl: "iXgXMEuX-HE"
    },
    {
      cislo: "9.",
      styl: null,
      pouzijeme: "Bezpečnostní očka",
      popis: " Přidělávání bezpečnostních oček není vždy úplně jednoduché. Je spousta z nás, co se dívají, aby očka nebyla křivě a dlouze si nad tím lámeme hlavu. Nebojte, mám to stejně.</p><p>Takovou malou pomůckou by nám mělo být počítání řad. Pak by se očka měla nacházet v rovině. </p><p>Vždy vyrovnání očí kontrolujte před použitím pojistky. Některá očka k sobě mají pojistky, které se dají horko těžko zacvaknout, natož oddělat.",
      videoUrl: "MPAzRwy3-g0"
    },
    {
      cislo: "10.",
      styl: null,
      pouzijeme: "Pojistka, výplň",
      popis: "Bezpečnostní očko se dá zacvaknout tolikrát, kolik máme závitů na očku. Ovšem čím větší je pojistka a tenčí je příze, tím více je pojistka znatelná. Někdy nám pomáhá v optickém zkrášlení obličeje (jako mělo zvířátko najednou hezčí očka). </p><p>Chobotničku si musíme samozřejmě vyplnit. Takže popadněte vadu, duté vlákno, staré odstřižky a jdeme na to. S vyplňováním to nemusíte moc přehánět, aby se vám povedlo zapošití.",
      videoUrl: "dBmU8n4AfDg"
    },
    {
      cislo: "11.",
      styl: null,
      pouzijeme: "Jehla",
      popis: "Zašíváme tak, že si na jehlu navlečeme přízi, kterou jsme ukončovali. Tu budeme nejprve provlékat všemi oky typu A. Tímto krokem docílíme stažení. Ovšem pokud to někdo při plnění trochu přehnal, tak nám stále zůstává otvor. </p><p>Šití je podle mého názoru hodně individuální, proto je čistě na vás, zda budete šít podle mého vzoru, nebo si najedete vlastní styl. Každopádně hodně utahujte. </p><p>Nejdůležitější je však zakončení celé práce tak, aby se vám výrobek nerozpletl. Respektive to šití se nevyvléklo.",
      videoUrl: "IwOXPcn8H3E"
    },
    {
      cislo: "12.",
      styl: null,
      pouzijeme: "Jehla, nůžky",
      popis: "Zakončení probíhá následovně. Vyberu si nějaké nahodilé místo, kde s nití vyjedu (většinou na zádech tvorečka), zabořím se do očka vedle s tím, že vyjedu ve stejném oku jako poprvé. Nestáhnu to úplně, ale tak, aby mi zůstal malinký oblouček, kterým konec protáhneme a stáhneme. Vznikne uzlík a na jehle zůstane nit. Tu nahodile zasuneme do výrobku a vynoříme se nejlépe na druhé straně. </p><p>Jehlu můžeme zahodit a vezmeme si nůžky. Nitku napneme a co nejblíže výrobku ustřihneme.",
      videoUrl: "70BrpsQ4lzo"
    }
    ]
  },

  {
    nazev: "ruze",
    title: "Růže",
    popis: "Vytvořme si společně okrasnou růži společně s listem.",
    cas: "60 min",
    pocet: "17",
    kroky: [{
      cislo: "1.",
      styl: null,
      pouzijeme: "Háček",
      popis: "Vytvoříme si základ pro tvoření řetízkového oka. Kolem ukazováčku a prostředníčku levé ruky obmotáme přízi. Položím na vnitřní stranu prstů a palcem přidržím, obtočím jednou, vytvořím na vnitřku kříž a rovnoběžně znovu obtočím kolem prstů. Přední nit podeberu spodem a druhou vrchem. Zaháknu se za ni a protáhnu ji přes tu první. ",
      videoUrl: "XL4ze9vLC3s"
    },
    {
      cislo: "2.",
      styl: "Řo",
      pouzijeme: "Háček",
      popis: "Teď máme na háčku vytvořený uzlík, nabereme přízi a protáhneme ji okem. Zase je jedno na háčku, naberu přízi a protáhnu. Takto celkem 27krát.",
      videoUrl: "jOlXPt2eARQ"
    },
    {
      cislo: "3.",
      styl: "Ds, Řo",
      pouzijeme: "Háček",
      popis: "Začneme odpočítáním třetího očka, a tam vytvoříme dlouhé sloupky, celkem 2 do jednoho oka. Přidáme řetízkové oko, které nám pomáhá vytvářet květy.",
      videoUrl: "X8WGTnnEC_A"
    },
    {
      cislo: "4.",
      styl: "Ds, Řo",
      pouzijeme: "Háček",
      popis: "Abychom vynahradili mezeru vzniklou řetízkovým okem, tak jedno oko na řetězu vynecháme. Další krok tedy bude ob jedno oko. 3 dlouhé sloupky do jednoho oka, řetízkové oko a takto pořád dokola, dokud nejsme na konci.",
      videoUrl: "Y_pbeKZayz8"
    },
    {
      cislo: "5.",
      styl: "Ds, Řo",
      pouzijeme: "Háček",
      popis: "Vytvoříme 2 řetízková oka, abych nám vznikla jakási nadstavba. Otočíme celý výrobek na druhou stranu (tzv. výrobek převrátíme) a pokračujeme druhou řadou.</p><p>Háčkujeme opakovaně dlouhý sloupek, do dalšího oka 2krát dlouhý sloupek, další oko opět jednou a 2 řetízková oka, která ukončíme v místě předešlého řetízkového očka z kroku 3 a 4.</p><p>Konkrétně si můžete vybrat mezi krátkým sloupkem, nebo pevným očkem (obojí ukázáno na videu), rozdíl je ve stažení a tedy i mezeře mezi listy.",
      videoUrl: "i67kKrqFqRY"
    },
    {
      cislo: "6.",
      styl: "Ds, Řo",
      pouzijeme: "Háček",
      popis: "Pokračujeme stejným způsobem. 2 řetízková oka, nahodím, vytvořím dlouhý sloupek do dalšího oka, pak 2 dlouhé sloupky do jednoho, v dalším bude opět jedno a pak 2 řetízková oka, ukončena krátkým sloupkem, nebo pevným očkem v místě řetízkového očka předešlé řady.",
      videoUrl: "oPUgWP9Lglw"
    },
    {
      cislo: "7.",
      styl: "Řo, Ds, Po",
      pouzijeme: "Háček",
      popis: "Poslední lístek se dělá stejně, jako ty doposud, jediný rozdíl je v tom, že poslední dvojice řetízkových oček se ukončí 2 očka dolů po straně. </p><p>Po zakončení pevným okem, máme kytičku hotovou a můžeme ji jít točit a tvarovat.",
      videoUrl: "p-SBATchhlo"
    },
    {
      cislo: "8.",
      styl: null,
      pouzijeme: "Jehla",
      popis: "Růži se snažím smotat, co nejvíc to jde, aby jako růže vypadala. Hodně tahám a tlačím při rolování. Pak to musíme podchytit tím, že to zašijeme. Šití je podle mě intuitivní, takže je to čistě na vás, já jen ukazuju příklad toho, jak to dělám já.",
      videoUrl: "vO_Qf_xJh9w"
    },
    {
      cislo: "9.",
      styl: null,
      pouzijeme: "Jehla",
      popis: "Zakončení je vždy to nejdůležitější a dělá se to poměrně jednoduše. Když jsme spokojená s šitím a drží mi výrobek tvar, tak mohu zakončit. Vyberu si bod, ve kterém vyjedu jehlou a protáhnu nit. Následně bodnu do očka vedle mého místa výsunu a mířím do očka, z něhož vychází nit. Opatrně utahuju, ale ne moc, potřebujeme se dostat do onoho oka, co se tvoří.</p><p>Opět je to individuální, jak to uděláte a tohle je jenom můj příklad.",
      videoUrl: "vELtmQHUzOM"
    },
    {
      cislo: "10.",
      styl: "Řo",
      pouzijeme: "Háček",
      popis: "Počneme si list. Můžete jich mít libovolné množství, ale musíte se vrátit zpět k tomuto kroku, abyste mohli podle videí tvořit znova. </p><p>Uděláme 13 řetízkových ok.",
      videoUrl: "oqk38lrk-JQ"
    },
    {
      cislo: "11.",
      styl: "Ds",
      pouzijeme: "Háček",
      popis: "Odpočítám si 3 očka a do toho třetího udělám 2 DS. Další oko je pro mě obohaceno dlouhými sloupky s rozdílem toho, že místo jednoho nahození nastanou dvě. Je to pořád to samé. Do jednoho oka celkem 2 krát.",
      videoUrl: "StfiMAJ2POc"
    },
    {
      cislo: "12.",
      styl: "Ds",
      pouzijeme: "Háček",
      popis: "Stejně pokračuju i nadále s rozdílem toho, že do každého jednoho oka padne jeden dlouhý sloupek s dvojitým nahozením. Do následujících 3 oček.",
      videoUrl: "fxHwZU5r5fw"
    },
    {
      cislo: "13.",
      styl: "Ds, Pds",
      pouzijeme: "Háček",
      popis: "Do dvou po sobě jdoucích ok uděláme klasický dlouhý sloupek, jednou nahodím, dvakrát protáhnu. Pak polodlouhý, jednou nahodím a jednou protáhnu.",
      videoUrl: "ebjvvrVYHnI"
    },
    {
      cislo: "14.",
      styl: "Pds, Ks",
      pouzijeme: "Háček",
      popis: "Jeden krátký sloupek, do dalšího oka 3 a zase jedno. Potom děláme to samé, co na druhé straně akorát obráceně. Tak pojďme na to. Jeden polodlouhý sloupek prosím!",
      videoUrl: "Qf99mIRTvas"
    },
    {
      cislo: "15.",
      styl: "Ds",
      pouzijeme: "Háček",
      popis: "Dva klasické dlouhé sloupky, jedno nahození a dvě protažení. Potom třikrát dlouhý sloupek po dvou nahozeních a 3 protaženích. Dva krát do jednoho očka ten dlouhý sloupek o dvou nahozeních. Předposlední očko si ponese 3 dlouhé sloupky.",
      videoUrl: "KYN4iC1lsKA"
    },
    {
      cislo: "16.",
      styl: "Po, Řo, Ks",
      pouzijeme: "Háček",
      popis: "Pevným okem propojíme náš konec se začátkem výrobku a pokračujeme 3 řetízkovými očky. Výrobek otočím a udělám 2 krátké sloupky. Pak pevným okem zakončím a mám list i s malým stonkem. Ovšem není nutný a pokud se vám nelíbí, nemusí tam vůbec být.</p><p>List přišijeme k růži.",
      videoUrl: "Rt7hW4sszoo"
    },
    {
      cislo: "17.",
      styl: null,
      pouzijeme: "Jehla",
      popis: "Dá se zakončit poměrně neviditelně, uvnitř jednoho kvítku, jako je ve videu.",
      videoUrl: "0eHFJNXWfUw"
    }
    ]
  },
  {
    nazev: "zalozka",
    title: "Záložka",
    popis: "Veselá záložka do knihy pro malé i velké.",
    cas: "60min",
    pocet: "18",
    kroky: [{
      cislo: "1.",
      styl: "Mk",
      pouzijeme: "Háček",
      popis: "Začneme jedním z nejtěžších stylů, a to je magický kroužek. Buď ho můžete dělat jako já na videu, nebo si práci zjednodušit za pomoci 2 řetízkových ok a následného píchnutí 6krát do prvního oka.",
      videoUrl: "NOXIskqmC0Q"
    },
    {
      cislo: "2.",
      styl: "V",
      pouzijeme: "Háček, značkovač",
      popis: "Označíme si nějakým způsobem začátek řady. Já mám značkovače, ale vám může stačit i nit jiné příze. Rozháčkování je o tom, že dělám 2 krátké sloupky do každého jednoho oka. </p><p>První očko není vždycky úplně zřetelné a mnohdy se do něj nedá ani dostat, to je ovšem ovlivněno samotným utahováním. </p><p>Nit, kterou jsem kroužek stahovala, si držím stále pod výrobkem, abych mohla mírně utáhnout.",
      videoUrl: "8COmvVjuNCI"
    },
    {
      cislo: "3.",
      styl: "Ks, V",
      pouzijeme: "Háček, značkovač",
      popis: "Postupné rozháčkování. Přidáváme mezi rozháčkování krátké sloupky. V tomto případě to bude jeden krátký sloupek, rozháčkování. Celkem 6krát. Kontrolou vám může být přepočítání ok. Vždycky se zvyšuje počet o 6, pokud nejedeme zrovna rovné řady, tam se nic nemění.",
      videoUrl: "s61YbmAz8ig"
    },
    {
      cislo: "4.",
      styl: "Ks, V",
      pouzijeme: "Háček, značkovač",
      popis: "Pokračujeme v postupném rozháčkování, takže už vás asi napadne, že budeme postupovat 2 krátké sloupky, rozháčkování. Na konci celkem 24 oček. </p><p> Už na konci tohoto kroku vidíte, jak se naše kolečko plynule zvětšuje.",
      videoUrl: "Eu2U2H1vOsM"
    },
    {
      cislo: "5.",
      styl: "Ks, V",
      pouzijeme: "Háček, značkovač",
      popis: "Co asi bude dál? Ano, správně! 3 krátké sloupky a rozháčkování, zase celkem 6krát a nakonec bude 30 oček k napočítání.</p><p>Naposledy se rozšíříme. 4 krátké sloupky a rozháčkování. Celkem 6krát, z toho plyne, že nakonec bude 36 oček.",
      videoUrl: "Soz8p-_p0gk"
    },
    {
      cislo: "6., 7. a 8.",
      styl: "ks",
      pouzijeme: "Háček, značkovač",
      popis: "Následující 3 řady budou stejné. Skládat je budeme pouze z krátkých sloupků, čili rovných řad, abychom výrobku dali nějakou velikost.",
      videoUrl: "nFvPTp6DPl0"
    },
    {
      cislo: "9.",
      styl: "Ks, A",
      pouzijeme: "Háček, značkovač",
      popis: "Vytvořenou kopuli budeme teď stahovat, abychom z ní udělali kouli. Stejně jako existuje postupné rozháčkování, tak teď se seznámíme s postupným sháčkováním. To funguje úplně stejně, ale s opačným pořadím. Rozháčkování přidává krátké sloupky do mezer, sháčkování ubírá. </p><p>Takže teď nás čekají 4 krátké sloupky, sháčkování. Celkem 6krát a budeme očka zase po 6 odebírat. Závěr této řady bude vyjádřen 30 očky.",
      videoUrl: "qKeh_ILkgm4"
    },
    {
      cislo: "10.",
      styl: "Ks, A",
      pouzijeme: "Háček, značkovač",
      popis: "Tentokrát 3 krátké sloupky a stažení. Už v tomto bodě jde hezky vidět, jak se nám výrobek stahuje a tvaruje. </p><p>Pokud vlastníte bezpečnostní očka, tak je teď můžete přidat a upevnit. Já je budu pro tento okamžik háčkovat.",
      videoUrl: "eM3djYCpFu0"
    },
    {
      cislo: "11. a 12.",
      styl: "Ks, A",
      pouzijeme: "Háček, značkovač",
      popis: "Postupně pokračujeme dolů s počtem krátkých sloupků. Teď 2 krátké sloupky a stáhnu.</p><p>Stažení na 1 krátký sloupek a sháčkování. Po tomto kroku budeme hlavičku vyplňovat a pro vás s bezpečnostními očky je tohle poslední možnost je přidat. </p><p>Vyplníme výrobek vatou, dutým vláknem, zbytky přízí, nebo výplní ze starých polštářů.",
      videoUrl: "oXCrwIgnyfE"
    },
    {
      cislo: "13. ",
      styl: "A",
      pouzijeme: "Háček, značkovač",
      popis: "Když jsme s vyplněním spokojeni, tak jednoduše po dvojicích stáhneme všech 12 současných oček. Bodneme do dalšího oka, jako když se začíná další řada a uděláme pevné očko, ukončíme, necháme nit delší na zapošití.",
      videoUrl: "LRfLBApNgvQ"
    },
    {
      cislo: "14.",
      styl: null,
      pouzijeme: "Jehla, nůžky",
      popis: "Zašijeme kouli tak, aby zmizela díra uprostřed a projedeme ji tak, aby se nám schovaly veškeré nedokonalosti. Zapošijeme, zakončíme. Upravíme kouli.",
      videoUrl: "BP8IxCX-xR4"
    },
    {
      cislo: "15.",
      styl: "Mk, Po",
      pouzijeme: "Háček, nůžky",
      popis: "Vytvoříme si spolu oči. Pokud se vám nechce je háčkovat, můžete si vzít filc a vystřihnout i oči. Pokud vás to háčkování zatím baví, pojďte si je se mnou uháčkovat. Magický kroužek, stejně jako v prvním kroku.</p><p>Do prvního oka uděláme pevné očko. Vytvoříme jen takto malinká očko. Postup opakujeme a vytvoříme si druhé.",
      videoUrl: "SyGaT44H728"
    },
    {
      cislo: "16.",
      styl: null,
      pouzijeme: "Jehla, nůžky",
      popis: "Našijeme očka. Opět je to na vás, video jen ukazuje, jak bych to dělala já.",
      videoUrl: "7VhN_yctywY"
    },
    {
      cislo: "17.",
      styl: null,
      pouzijeme: "Jehla",
      popis: "Našijeme pusinku, a to buď opět nějak individuálně, nebo podle mého typu z videa. Samozřejmě můžete mít i jiný výraz. Smajlík může být smutný, naštvaný… prostě jaký chcete.",
      videoUrl: "7iNCCeg7G1Q"
    },
    {
      cislo: "18.",
      styl: "Řo, ks",
      pouzijeme: "Háček",
      popis: "Teď k tomu té záložce. Buď uděláme řetízkové oko, nebo jenom natáhneme provázek, nebo podle videa můžeme vytvořit širší pruh. Řetízková oka podle šířky, udělám si jedno navíc. Výrobek otočím a vracím se krátkými sloupky, na konci si udělám jedno řetízkové a zase se vracím sloupky zpět. Takto opakuju, dokud nemám vyhovující délku.",
      videoUrl: "c0hboILLyRI"
    },
    {
      cislo: "17.",
      styl: "Po",
      pouzijeme: "Háček, nůžky",
      popis: "Připevníme pás k hlavičce. Naberu oko z pásu a zároveň z hlavičky, pevným okem spojím. Na konci po, ustřihnu a zakončím.",
      videoUrl: "6mgPGFgQMCg"
    },
    {
      cislo: "18.",
      styl: "Řo",
      pouzijeme: "Háček",
      popis: "Druhý způsob je udělat si jenom jeden jednoduchý řetízek, který se pak jedním jednoduchým utažením připevní k hlavičce smajlíka.",
      videoUrl: "JF-W5Dk3IE0"
    },

    ]
  }]
  const poleVyrobkuEN: Array<Vyrobek> = [
    {
      nazev: "chobotnice",
      title: "Octopus",
      popis: "Manual for creating an octopus",
      pocet: "12",
      cas: "60min",
      kroky: [
      {
        cislo: "1.",
        styl: "Mr",
        pouzijeme: "Hook, stitch marker",
        popis: "Most important thing in this step is not to tighten the magic ring too much, so you will be able to tighten the product. Always be sure to keep an eye out for the loose end, incorporate it into the ring, so you can tighten it.</p><p>You can see the reference page to see how to make a magic ring. There are many ways to create it. In most you will come to the same result, as shown in the video (via 0:35). You can create two chain stitches, put the hook through the first one and then make six single crochets into it.",
        videoUrl: "06DsV4I1fN8"
      },
      {
        cislo: "2.",
        styl: "Inc",
        pouzijeme: "Hook, stitch marker",
        popis: "This step is called increasing. Thanks to it you will be able to make your product bigger. You can increase almost any style you want. The most common is used with single, double and half double crochet.</p><p>Make sure you hold the loose end, so you can tighten the ring more and get rid of the gap in the ring.",
        videoUrl: "TW0VbGVXBps"
      },
      {
        cislo: "3.",
        styl: "Sc, Inc",
        pouzijeme: "Hook, stitch marker",
        popis: "Gradual increase. If you want an even shape, you have to increase it evenly. To do it, you have to increase and make single crochets in between. Imagine that the last step was 0Sc, Inc and now you will continue with 1Sc, Inc then 2Sc, Inc.",
        videoUrl: "Ivyrl2Mb2o8"
      },
      {
        cislo: "4. and 5.",
        styl: "Sc",
        pouzijeme: "Hook, stitch marker",
        popis: "The next two rows will be the same. To make an even shape. You’ve increased enough and thanks to these two steps the octopus will become a little bit bigger. If you want your octopus to be taller, make more of these rows.",
        videoUrl: "WJJbSN6qTpc"
      },
      {
        cislo: "6.",
        styl: "Sc,Dec",
        pouzijeme: "Hook, stitch marker",
        popis: "Step 3 included increasing the size of the octopus, step 6 includes decreasing the size. It will help to shape the octopus’ head. <i>Dec</i>  is decrease, which is connecting two single crochets. You can achieve it by putting two Sc into one stitch.",
        videoUrl: "MwfZ48fExG0"
      },
      {
        cislo: "7.",
        styl: "Dec",
        pouzijeme: "Hook, stitch marker",
        popis: "Continue decreasing the size of the product. In most products, this would be the last step but because we are making tentacles on the head, we will continue. Don’t decrease the head too much. Make bigger gaps so it’s easier to make the tentacles.</p><p>With the last slip stitch close off the head and leave a long loose end so you can close the bottom of the head up after filling it.",
        videoUrl: "GAR5JQXzk88"
      },
      {
        cislo: "8.",
        styl: "SlSt, Hdc, Dc",
        pouzijeme: "Hook, stitch marker",
        popis: "Slip stitch, half double, double and half double crochet. This combination will go into each one of the stitches. So, you will repeat this six times. You’re creating arches which are meant to be the tentacles.</p><p>The slip stitch makes a transition between the individual tentacles, half double and double crochets define the shape.</p><p>It’s close together, so be careful not to miss any.",
        videoUrl: "iXgXMEuX-HE"
      },
      {
        cislo: "9.",
        styl: null,
        pouzijeme: "Safety eyes",
        popis: "Putting on the safety eyes isn’t always the easiest task. There are many of us that look for the eyes to not be crooked and puzzle over it. Don’t worry, you’re not alone.</p><p>A little tip is to count the rows. Then the eyes should be in the same plane.</p><p>Before putting on the washer, be sure to check the positioning. Some safety eyes have washer that’s hard to put on, let alone take it off.",
        videoUrl: "MPAzRwy3-g0"
      },
      {
        cislo: "10.",
        styl: null,
        pouzijeme: "Safety eye washer, filling",
        popis: "The washer can be pushed as many times as there are threads. The bigger the washer is and the thinner the yarn is the more the washer is visible. Sometimes it helps us to make the face better.</p><p>We have to fill the octopus up, so take your cotton, hollow fiber or your failed attempts and start filling the head up. You don’t have to fill the product full to the brim, so you can sew the gap off.",
        videoUrl: "dBmU8n4AfDg"
      },
      {
        cislo: "11.",
        styl: null,
        pouzijeme: "Needle",
        popis: "To sew, pull through the loose end that you left and the end. You first sew into the stitches that you built on the tentacles. This will help to tighten the head. If you put too much filling into the head, you will still see a gap.</p><p>The sewing style is individual, so it’s up to you if you sew according to my description or make your own. The only thing to do is tighten it very hard.</p><p>Most important thing is to finish off the product so that it doesn’t unravel or so the loose end doesn’t unthread.",
        videoUrl: "IwOXPcn8H3E"
      },
      {
        cislo: "12.",
        styl: null,
        pouzijeme: "Needle, scissors",
        popis: "The ending is going to be like this: Choose a random place on the product, where you will thread through (mostly on the back of the product). Put the needle through a stitch and then come out the same stitch. Don’t tighten too much, only a little bit so an arch is created. Pull the thread through the arch you’ve made. You should create a knot and there will be a loose end left. Pull the loose end through the product and pull out the other side of it.</p><p>Take out the needle and take your scissors. Tense the yarn and cut the thread as close as possible to the product. Be careful not to cut the product open.",
        videoUrl: "70BrpsQ4lzo"
      },
    ]
    },
  
    {
      nazev: "ruze",
    title: "Rose",
    popis: "Create a beautiful rose with leaves",
    pocet: "17",
    cas: "60min",
    kroky: [
      {
        cislo: "1.",
        styl: null,
        pouzijeme: "Hook",
        popis: "Create a base for a chain stitch. Wind your yarn across your index and middle finger of your left hand. Lay it on the inside side of your fingers and hold it with your thumb. Turn it around once and create a cross on the inside and at the same time turn it around again. Pick up the front string through the bottom and the second one through the top. Hook behind the string and pull through the first one.",
        videoUrl: "XL4ze9vLC3s"
      },
      {
        cislo: "2.",
        styl: "Ch",
        pouzijeme: "Hook",
        popis: "Now that you have a slipknot on your hook, take yarn over your hook and pull through the loop. You have one loop on your hook. Take yarn over your hook and pull through. Do this 27 times.",
        videoUrl: "jOlXPt2eARQ"
      },
      {
        cislo: "3.",
        styl: "Dc, Ch",
        pouzijeme: "Hook",
        popis: "Count the third chain from the hook and start making double crochets. Make two into one chain. Add a chain stitch, it helps create the flower.",
        videoUrl: "X8WGTnnEC_A"
      },
      {
        cislo: "4.",
        styl: "Dc, Ch",
        pouzijeme: "Hook",
        popis: "To compensate for the gap created by the chain stitch, skip one chain stitch and pull the hook through the next one. So, you will always pull through the one after the next. Make three double crochets into one chain. Repeat this until you’re at the end.",
        videoUrl: "Y_pbeKZayz8"
      },
      {
        cislo: "5.",
        styl: "Dc, Ch",
        pouzijeme: "Hook",
        popis: "Create two chain stitches to make an extension. Turn the product over and continue with a second row.</p><p>Repeatedly make double crochets, in the first chain make one double crochet, in the second chain make two double crochets, in the third chain make one double crochet and two chain stitches, which you will end on the chain stitch from step three and four.</p><p>You can choose between a single crochet or a slip stitch (both shown in the video), the difference is in the tightening and the gap between the leaves.",
        videoUrl: "i67kKrqFqRY"
      },
      {
        cislo: "6.",
        styl: "Dc, Ch",
        pouzijeme: "Hook",
        popis: "Continue the same way. Two chain stitches, take yarn over your hook, create a double crochet into the next chain, two double crochets into the next chain, then one double crochet into the next chain, then two chains, ended with a single crochet or a slip stitch in place of the chain stitch in the row before.",
        videoUrl: "oPUgWP9Lglw"
      },
      {
        cislo: "7.",
        styl: "Ch, Dc, SlSt",
        pouzijeme: "Hook",
        popis: "The last leaf is the same as the ones before, only difference is that the last two chain stitches will be finished off two chains from the base.</p><p>Make a slip stitch and you have made your flower. Now we can curl and shape it.",
        videoUrl: "p-SBATchhlo"
      },
      {
        cislo: "8.",
        styl: null,
        pouzijeme: "Needle",
        popis: "Try to roll up the flower as much as you can, so it looks like a rose. Pull on it hard, push it while rolling it. Then we have to secure it by sewing. Sewing is intuitive, so it’s up to you how you do it. I will show an example of how I do it.",
        videoUrl: "vO_Qf_xJh9w"
      },
      {
        cislo: "9.",
        styl: null,
        pouzijeme: "Needle",
        popis: "Finishing off is the most important part and it’s easy to do. When you’re happy with the sewing and the flower is holding its shape, you can finish it off. Pick a place, which you’ll pull through the needle and thread. Then put the needle through the chain next to the one you’re in and pull through but not all the way, create an arch. Then pull the needle through.</p><p>This is also individual, I’m showing my way.",
        videoUrl: "vELtmQHUzOM"
      },
      {
        cislo: "10.",
        styl: "Ch",
        pouzijeme: "Hook",
        popis: "Start making a leaf, you can have a different amount, but you have to come back to this step, so you can create leaves.</p><p>Make thirteen chains.",
        videoUrl: "oqk38lrk-JQ"
      },
      {
        cislo: "11.",
        styl: "Dc",
        pouzijeme: "Hook",
        popis: "Count three chains and make three double crochets into the third chain. For the next chain, take the yarn over your hook two times instead of one. Make two of these double crochets into one chain.",
        videoUrl: "StfiMAJ2POc"
      },
      {
        cislo: "12.",
        styl: "Dc",
        pouzijeme: "Hook",
        popis: "For the next chain, take the yarn over the hook two times and make one double crochet into one chain. Go into the next chain and make one double crochet again. Do it three more times.",
        videoUrl: "fxHwZU5r5fw"
      },
      {
        cislo: "13.",
        styl: "Dc, Hdc",
        pouzijeme: "Hook",
        popis: "Make one normal double crochet into the next chain. Then make one half double crochet into another chain.",
        videoUrl: "ebjvvrVYHnI"
      },
      {
        cislo: "14.",
        styl: "Hdc, Sc",
        pouzijeme: "Hook",
        popis: "Make one single crochet into the next chain. Then make three single crochets into the next chain. And lastly make one single crochet into the next chain.  Now, let’s start making the same thing but backwards. So make a half double crochet.",
        videoUrl: "Qf99mIRTvas"
      },
      {
        cislo: "15.",
        styl: "Dc",
        pouzijeme: "Hook",
        popis: "Make two double crochets, take yarn over your hook and pull through two loops and then take yarn over the hook again and pull through two loops. Three double crochets where you take yarn over the hook two times. Second to last chain has three double crochets.",
        videoUrl: "KYN4iC1lsKA"
      },
      {
        cislo: "16.",
        styl: "SlSt, Ch, Sc",
        pouzijeme: "Hook",
        popis: "Connect your start and end with a slip stitch. Make three chain stitches, turn around the product and make two single crochets. Finish with a slip stitch and you’ve got a leaf with a stalk. The stalk is not necessary and if you don’t like it, don’t make it.</p><p>We will sew the leaf to the rose.",
        videoUrl: "Rt7hW4sszoo"
      },
      {
        cislo: "17.",
        styl: null,
        pouzijeme: "Needle",
        popis: "You can sew it so it’s invisible, poke only into one layer of the flower as shown in the video.",
        videoUrl: "0eHFJNXWfUw"
      },
    ]
    },
    {
      nazev: "zalozka",
    title: "Bookmark",
    popis: "Fun bookmark for people of all ages",
    pocet: "18",
    cas: "60min",
    kroky: [
      {
        cislo: "1.",
        styl: "Mr",
        pouzijeme: "Hook",
        popis: "We will start with the hardest type of stitch. The magic ring. You can create it like shown in the video or make it easier by making two chains and pulling through the first chain six times.",
        videoUrl: "NOXIskqmC0Q"
      },
      {
        cislo: "2.",
        styl: "Inc",
        pouzijeme: "Hook, stitch marker",
        popis: "Mark the start of the row. You can use markers or a piece of yarn. Increasing means making two double crochets into one stitch.</p><p>The first stitch isn’t the most visible so it’s hard to put the hook through it, its affected by how much you tighten.</p><p>Hold the string you used to tighten the ring under the item so you can tighten it more.",
        videoUrl: "8COmvVjuNCI"
      },
      {
        cislo: "3.",
        styl: "Sc, Inc",
        pouzijeme: "Hook, stitch marker",
        popis: "Gradual increase. Between the Inc, add a single crochet. This step will be Inc and one single crochet. Repeat it six times. To make sure you’ve made enough, count the stitches. The number is always +6 (18 in this step) but not when the row is made with one style.",
        videoUrl: "s61YbmAz8ig"
      },
      {
        cislo: "4.",
        styl: "Sc, Inc",
        pouzijeme: "Hook, stitch marker",
        popis: "Continue with the gradual increase, which means that now you’ll make two single crochets and then Inc. After you’re done with the row, you should count 24 stitches.</p><p>Now you’re going to start to see that the circle is getting bigger.",
        videoUrl: "Eu2U2H1vOsM"
      },
      {
        cislo: "5.",
        styl: "Sc, Inc",
        pouzijeme: "Hook, stitch marker",
        popis: "Now it’s three single crochets and Inc. Once again, repeat it six times and you should have 30 stitches.</p><p>Increase one more time. Four single crochets and Inc. Six times so you should have 36 stitches.",
        videoUrl: "Soz8p-_p0gk"
      },
      {
        cislo: "6., 7. a 8.",
        styl: "Sc",
        pouzijeme: "Hook, stitch marker",
        popis: "The next three rows will be the same. Make them all with single crochets, or straight rows, so the product increases in size a little bit.",
        videoUrl: "nFvPTp6DPl0"
      },
      {
        cislo: "9.",
        styl: "Sc, Dec",
        pouzijeme: "Hook, stitch marker",
        popis: "You will now start to tighten the hemisphere, so you can create a ball. Gradual decrease works the same as the gradual increase. The difference is you count down, not up. So, make four single crochets and Dec.</p><p>Do it six times and you’ll have 30 stitches.",
        videoUrl: "qKeh_ILkgm4"
      },
      {
        cislo: "10.",
        styl: "Sc, Dec",
        pouzijeme: "Hook, stitch marker",
        popis: "Three single crochets, Dec – now you can see how it’s tightening.</p><p>If you have safety eyes, this is the perfect moment to put them in, in the video there will be a crochet version of them.",
        videoUrl: "eM3djYCpFu0"
      },
      {
        cislo: "11. a 12.",
        styl: "Sc, Dec",
        pouzijeme: "Hook, stitch marker",
        popis: "Continue to decrease. Two single crochets and Dec.</p><p>One single crochet, Dec. Now we will fill the head with cotton. For those with safety eyes, add them in if you haven’t yet.</p><p>Fill it up with cotton, hollow fiber, scrap yarn or old pillow stuffing.",
        videoUrl: "oXCrwIgnyfE"
      },
      {
        cislo: "13. ",
        styl: "Dec",
        pouzijeme: "Hook, stitch marker",
        popis: "When you’re satisfied, tighten the 12 stitches in pairs put the hook through the next stitch as if you are starting a next row and make a slip stitch. Leave some yarn for sewing.",
        videoUrl: "LRfLBApNgvQ"
      },
      {
        cislo: "14.",
        styl: null,
        pouzijeme: "Needle, scissors",
        popis: "Sew the ball so the gap on the bottom is closed off. Correct the shape.",
        videoUrl: "BP8IxCX-xR4"
      },
      {
        cislo: "15.",
        styl: "Mr, SlSt",
        pouzijeme: "Hook, scissors",
        popis: "Now you will create the eyes. If you don’t want to crochet them, you can take felt and cut the eyes out of it. But if you’re still having fun crocheting, let’s create them. Create a magic ring, same as in the first step.</p><p> Into the first stitch, create a slip stitch. These eyes will be small. Repeat and create one more eye.",
        videoUrl: "SyGaT44H728"
      },
      {
        cislo: "16.",
        styl: null,
        pouzijeme: "Needle, scissord",
        popis: "Now sew on the eyes. It’s up to you where you sew them on, in the video is an example of sewing them on.",
        videoUrl: "7VhN_yctywY"
      },
      {
        cislo: "17.",
        styl: null,
        pouzijeme: "Needle",
        popis: "Sew on a mouth, by yourself or watching the video. You don’t have to make him smile. He can frown, be mad… or anything you want.",
        videoUrl: "7iNCCeg7G1Q"
      },
      {
        cislo: "18.",
        styl: "Ch, Sc",
        pouzijeme: "Hook",
        popis: "Now for the bookmark. You can create plain chains, put it on a loose string, or make it wider as shown in the video. Make chains for how thick you want it and add one more. Turn over the chain and you’ll be going backwards by making single crochets. After making single crochets add a chain again. Repeat until desired length.",
        videoUrl: "c0hboILLyRI"
      },
      {
        cislo: "17.",
        styl: "SlSt",
        pouzijeme: "Hook, scissors",
        popis: "Attach the bookmark to the head. Pull through one stitch on the bookmark and one stitch on the head and make a slip stitch. After attaching it whole, cut the excess yarn off and you’re done.",
        videoUrl: "6mgPGFgQMCg"
      },
      {
        cislo: "18.",
        styl: "Ch",
        pouzijeme: "Needle",
        popis: "Second method is to create a simple chain that you can easily attach to the head of the smiley face.",
        videoUrl: "JF-W5Dk3IE0"
      },
    ]
    }]
@Injectable({
  providedIn: 'root'
})
export class VyukaService {

  mapaVyrobku: Map<string, Vyrobek>;

  constructor(public translate: TranslateService ) {
    this.initMap();
  }

  public getVideoByName(name: string): Vyrobek {
    return this.mapaVyrobku.get(name);
  }

  private initMap() {
    this.mapaVyrobku = new Map();
    if (this.translate.currentLang === 'EN') {
      poleVyrobkuEN.forEach(vyuka => {
        this.mapaVyrobku.set(vyuka.nazev, vyuka);
      });
    }
    else {
      poleVyrobkuCZ.forEach(vyuka => {
        this.mapaVyrobku.set(vyuka.nazev, vyuka);
      });
    }
  }

  public getVyrobekByName(name: string): Vyrobek {
    return this.mapaVyrobku.get(name);
  }

  public getVsechnyVyrobky(): Array<Vyrobek> {
    if (this.translate.currentLang === 'EN') {
      return poleVyrobkuEN;
    }
    else {
      return poleVyrobkuCZ;
    }
  }
}
