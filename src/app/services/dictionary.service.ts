import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Styl } from '../types'

const poleStyluCZ: Array<Styl> = [
  {
    nazev: "retizkove-oko",
    title: "Řetízkové oko",
    zkratka: "Řo",
    popis: "Vytvoříme si jednoduchý uzlík, který upevníme přímo na háček. Utahujeme pouze tak, aby prošla další příze. Naberu na háček a přitáhnu vytvořeným okem. Opakováním tohoto tahu vytvářím řetěz."
  },
  {
    nazev: "pevne-oko",
    title: "Pevné oko",
    zkratka: "Po",
    popis: "Ve vytvořené řadě výrobku si mohu udělat pevná oka. Pomáhají tvarovat záhyby, lokty, kolena nebo zakončují výrobek. To oka zajedu háčkem a přitáhnu přízi na druhou stranu, ale tentokrát narozdíl od ks tu druhou přízi přitáhnu tou první. Čím více budu utahovat, tím hůř se do něj pak dostanu. Pokud zakončujete, tak se v tomto bodě už jen ustřihne dostatečně dlouhá část příze na přišití a protáhnete konec vytvořeným okem na háčku."
  },
  {
    nazev: "kratky-sloupek",
    title: "Krátký sloupek",
    zkratka: "Ks",
    popis: "Do vytvořené řady řo najdu první oko. Do oka zajedu háčkem a protáhnu přízí na druhou stranu. Na háčku se mi nyní objeví 2 nahozené provázky, znovu naberu přízi na háček a provleču ji těma dvěma, co už tam čekaly."
  },
  {
    nazev: "dlouhy-sloupek",
    title: "Dlouhý sloupek",
    zkratka: "Ds",
    popis: "Nabereme přízi na háček a teprve potom zajedeme do vytvořeného oka. Máme 3 příze na háčku. Naberu a protahuju po dvou. Takže první dvojicí protáhnu první nahození, pak zase naberu a protáhnu zbylými dvěma"
  },
  {
    nazev: "polodlouhy-sloupek",
    title: "Polodlouhý sloupek",
    zkratka: "Pds",
    popis: "Nabereme přízi na háček a teprve potom zajedeme do vytvořeného oka. Protáhnu a na háčku mám nyní 3krát ovinutou přízi. Naberu na háček a tuto přízi protáhnu všemi třemi."
  },
  {
    nazev: "rozhackovani",
    title: "Rozháčkování",
    zkratka: "V",
    popis: "Krátký sloupek tak, jak ho známe, ale uděláme ho dvakrát v jednom bodě"
  },
  {
    nazev: "shackovani",
    title: "Sháčkování",
    zkratka: "A",
    popis: "Jde to dvěma různými způsoby.</p> <p>1) Protáhnu přízi dvěma po sobě následujícími oky. Držím tedy na háčku 3 provázky příze. Jednou nahodím a přitáhnu všemitřemi najednou.</p><p>2) Zasunu háček za přední nic a hned jdu to toho dalšího, kde taky vezmu jen přední nit. Nahodím a protahuju po dvojicích.</p> <p>U druhého způsobu se docílí toho, že nevznikají mezery mezi oky, což je ne vždy vidět a jde i o to, jak moc člověk utahuje. Každopádně nevýhodou je menší stahování, které se dožene šitím."
  },
  {
    nazev: "magicky-krouzek",
    title: "Magický kroužek",
    zkratka: "Mk",
    popis: "Dostatečný kus příze si položím mezi prostředníček a ukazováček levé ruky (pokud jsem pravák). Omotám kolem vnější strany ukazováčku, celého palce a vracím se zpět tam, kde začíná příze. Mezi prostředníček a ukazováček. Vytvořím tak „znak nekonečna“.</p><p>Vezmu si háček a podeberu vnitřní u palce, vnější přízi za křížem a vnější před křížem. Pravým ukazováčkem si pak tyto tři přehozené části podržím a naberu si přízi na levou ruku, jako bych chtěla začít háčkovat. Pak naberu na háček a protáhnu všemi třemi oky, při tom levým palcem a prostředníčkem držím vznikající kruh.</p><p>V tomto okamžiku se dostáváme do pevného bodu. Máme kruh a máme volný „špagátek“. Háčkujeme směrem doleva, tedy v protisměru hodinových ručiček. Háčkem nabereme kruh tím, že půjdeme zevnitř ven. Společně s kruhem budeme nabírat i svěšený provázek, díky kterému nakonec kruh utáhneme, aby byl opravdu kruhem."
  },
];
const poleStyluEN: Array<Styl>= [
  {
    nazev: "retizkove-oko",
    title: "Chain stitch",
    zkratka: "Ch",
    popis: "Create a slip knot and leave it on your hook. Tighten only so much so that yarn can be pulled through. Take yarn over your hook and pull through. Repeat for a chain."
  },
  {
    nazev: "pevne-oko",
    title: "Slip stitch",
    zkratka: "SlSt",
    popis: "You can create slip stitches in the row you're working on. Slip stitches help to form folds, elbows, knees, or they can help finish off an item. Put the hook through the loop and take the yarn over it and instead of pulling through one, like making a Sc, pull through both loops. The more you tighten, the harder it will be to put the hook through it. If you're ending off an item, then you can cut excess yarn off, long enough to sew."
  },
  {
    nazev: "kratky-sloupek",
    title: "Single crochet",
    zkratka: "Sc",
    popis: "Insert your hook into the last stitch of the earlier row. Take the yarn over the hook and pull through one loop. You should have two loops on the hook. Take the yarn over the hook again and pull through both loops."
  },
  {
    nazev: "dlouhy-sloupek",
    title: "Double crochet",
    zkratka: "Dc",
    popis: "Insert the hook into the last stitch of the earlier row. Take yarn over the hook and pull through one loop. Take yarn over the hook. You should have three loops on your hook. Pull through two loops, take yarn over your hook again and pull through the remaining two again."
  },
  {
    nazev: "polodlouhy-sloupek",
    title: "Half double crochet",
    zkratka: "Hdc",
    popis: "Take the yarn over your hook and then insert your hook into the last stitch of the earlier row. Pull through. You should have three loops on your hook. Take yarn over your hook and pull through all three loops."
  },
  {
    nazev: "rozhackovani",
    title: "Increase",
    zkratka: "Inc",
    popis: "A single crochet as you know it but make two single crochets into one stitch."  
  },
  {
    nazev: "shackovani",
    title: "Decrease",
    zkratka: "Dec",
    popis: "There are two methods.</p> <p>1) Insert the hook through two stitches of the earlier row. You should have two loops on your hook. Take yarn over your hook and pull through all three.</p><p>2) Put the hook only through the front side of two stitches of the earlier row. Take yarn over the hook and pull through two loops, and then take yarn over the hook again and pull through remaining two loops.</p><p>The second method doesn't create such big gaps between the stitches, which is not always visible. It also depends on how much you tighten. The disadvantage is that it tightens slower, that you can fix with sewing."
  },
  {
    nazev: "magicky-krouzek",
    title: "Magic ring",
    zkratka: "Mr",
    popis: "Place the free end of your yarn in between your left index and middle finger so the ball end is at the top. If you’re left-handed, place the yarn in between your right index and middle finger. Wrap the yarn around the outside of your index (farther from the palm), inside your thumb, outside your thumb and put the yarn back between your index and middle finger. You’ve made a shape that looks like an infinity loop.</p><p>Insert the hook through the bottom of the left side of the infinity loop, then through the top right side and lastly through the top of the left side. You should have three loops on your hook. Carefully remove the yarn from your hook. Hold the three loops in place with your right index finger and thumb. To hold the yarn correctly, put it on your left pinky finger and wind it around your left index finger two times. The yarn should stay tense. Take the yarn over the hook. Pull through all three loops. Hold the ring with your thumb and middle finger. You should see a ring beginning to form.</p><p>Take the yarn over the hook. Pull through all three loops. Hold the ring with your thumb and middle finger. You should see a ring beginning to form. Repeat until you’ve worked one round of single crochet stitches. Pull the yarn to tighten the loop. Don’t be scared to pull hard."
  },
];

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(public translate: TranslateService) {
  }

  public getStylByName(name: string): Styl {
    if (this.translate.currentLang === 'EN') {
      return poleStyluEN.find(element => element.nazev == name);
    }
    else {
      return poleStyluCZ.find(element => element.nazev == name);
    }
  }
}
