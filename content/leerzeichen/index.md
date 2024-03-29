---
title: Leerzeichen
description: Leerzeichen
---


<header>

# {{process.content.frontmatter.title}}

</header>



<lead>

Die Zeichensetzung wird im Umfeld der Schweizer Typografie oft sorgsam und gekonnt eingesetzt. Während sich die Fachleute für Druckgrafik oftmals vertieft mit der Erscheinung und Technik in der Mikrotypografie auseinandergesetzt haben, herrscht im Web nicht immer dieselbe Sorgfalt. Insbesondere Leerzeichen sind nicht immer ganz einfach zu setzen …

</lead>

## Welches bloss?
Abhängig von Kontext und Text müssen ganz verschiedene Leerzeichen verwendet werden. Obwohl die Laien nicht auf Anhieb den Unterschied erkennen mögen, sollte beim «gepflegten Satz» doch darauf geachtet werden, dass sich eine professionelle Gestaltung auch bis in die Mikrotypografie und die Zeichensetzung fortführt.

## Wie eingeben?
Üblicherweise werden Websites heute über CMS (Content Management System) mit Inhalt befüllt. Da sich fast alle modernen Systeme an den Unicode-Zeichensatz (UTF-8) halten, können auch typografisch korrekte Zeichen eingegeben werden. Da diverse Zeichen nicht einfach über die Tastatur zugänglich sind, empfiehlt es sich, ein Snippets-Manager oder ein sonstiges Helferprogramm zum Abrufen von Textbausteinen zu benutzen. Alternativ kann natürlich auch die Zwischenablage bemüht werden. Wenn das CMS eine Eingabe als HTML erlaubt, so kann auch eine Entitätenreferenz (siehe Tabelle) oder der dezimale bzw. hexadezimale Code eingegeben werden. Dies hat erst noch den Vorteil, dass man auch später besser sieht, welches Zeichen eingegeben wurde, da es oftmals schwierig ist, in kleinen Schriftgrössen zu erkennen, welche Breite das Zeichen nun hat.


## Breitenloses Leerzeichen
Das breitenlose Leerzeichen gehört [offiziell](http://unicode.org/notes/tn27/) nicht einmal zu den Leerzeichen. Es kann innerhalb von Wörtern gesetzt werden, um dem Browser anzuzeigen, dass es sich um eine Trennstelle handelt (ähnlich der bedingten Trennung), diese jedoch nicht mit einem Trennstrich angezeigt werden soll.

<div class="example-big">

#### Wörter trennen – ohne Trennstrich

{{example "DieNeue\n|Typografie.ch" marker="|=&ZeroWidthSpace;=space"}}

</div>


## Leerzeichen ohne Umbruch
Immer wenn man sprachliche Einheiten nicht trennen möchte, kann man diese mit einem umbruchgeschützten Leerzeichen verbinden.

<div class="example-big">

#### Wörter mit dazugehöriger Ziffer


{{example "Seite|3" marker="|=&nbsp;=space"}}

{{example "10|Liter" marker="|=&nbsp;=space"}}

{{example "DIN|9000" marker="|=&nbsp;=space"}}

</div>



<div class="example-big">

#### Firmennamen


{{example "Grau|AG" marker="|=&nbsp;=space"}}

{{example "Blau|GmbH" marker="|=&nbsp;=space"}}

{{example "Turing|&amp;|Co." marker="|=&nbsp;=space"}}


</div>

## Schmales Leerzeichen
Das schmale Leerzeichen wird typografisch an diversen Stellen eingesetzt. Meist empfiehlt es sich, die Variante zu nehmen, welche gleichzeitig auch keinen Umbruch zulässt; auch geschütztes schmales Leerzeichen genannt.


<small class="small">

In Browser Safari gab es von der Version 10 – 13 einen Bug, so dass das geschützte schmale Leerzeichen ohne Breite dargestellt wurde.

</small>




<div class="example-big">

#### Datum
{{example "18.|August&nbsp;2018" marker="|=&#x202F;=space"}}

{{example "18.|8.|2018" marker="|=&#x202F;=space"}}


</div>

<div class="example-big">

#### Masseinheiten

{{example "100|km" marker="|=&#x202F;=space"}}

{{example "30|°C" marker="|=&#x202F;=space"}}

</div>

<div class="example-big">

#### Telefonnummern

{{example "+41|78|700|10|10" marker="|=&#x202F;=space"}}

</div>

<div class="example-big">

#### Berufstitel

{{example "Prof.|Dr.|Moser" marker="|=&#x202F;=space"}}

{{example "Lic.|Jur.|Tina&nbsp;A.|Kramer" marker="|=&#x202F;=space"}}

</div>


<div class="example-big">

#### Mathematische Notation

{{example "50¦✕¦50␣=␣250" marker="¦=&#x202F;=space,␣=​&nbsp;=space"}}

</div>



<div class="example-big">

#### Abkürzung

{{example "z.|B." marker="|=&#x202F;=space"}}

{{example "Nr.|1" marker="|=&#x202F;=space"}}



</div>


<div class="example-big">

#### Zifferngruppierung
{{example "20|000" marker="|=&#x202F;=space"}}

</div>

<div class="example-big">

#### Paragraf
{{example "§|10" marker="|=&#x202F;=space"}}

</div>




Aber nicht bei Winkelgrad!
<div class="example-big">

#### Winkelgrad

{{example "30°" marker="|=&#x202F;=space"}}


</div>



## Ziffernleerzeichen
Ziffernleerzeichen sind mit Vorsicht zu geniessen. Sie sollten nicht dazu dienen, ganze (Zahlen-)Blöcke von Text zu formatieren. Aber es kann nützlich sein, ein Leerzeichen zu haben, das genauso breit ist wie die proportionalen Versalziffern.

<div class="example-big">

#### Alignierende Ziffern


{{example "100<br/>|50" marker="|=&numsp;=space"}}


</div>


## Leerzeichen relativ zum Geviert
Es gibt diverse Leerzeichen, die als Bruchteil vom Geviert definiert sind. Diese Leerzeichen können in besonderen Fällen mal zur Anwendung kommen, sind jedoch nicht im Alltagsgebrauch und daher eher unwichtig.

## Browser und Fonts
Wie jedes andere Zeichen müssen auch Leerzeichen über den Font kontrolliert werden. Leider enthalten nicht immer alle Schriften die benötigten Leerzeichen. Zum Beispiel ist das schmale Leerzeichen ohne Umbruch oft nicht in Fonts vorhanden, jedoch das normale schmale Leerzeichen. Um das nicht umbrechende Zeichen dennoch auf der Website benutzen zu können, kann man einen Filler-Font erzeugen. Dieser nimmt die Breite des schmalen Leerzeichens und erzeugt einen neuen Font mit nur einem geschützten schmalen Leerzeichen, das dann nicht umbricht. So wurde weder das ursprüngliche Font-File modifiziert (kein Lizenzverstoss), noch muss man typografische Abstriche machen.


<div class="example-big">

#### Filler-Font <br/> mit nur einem Zeichen im CSS laden

```css
@font-face {
  font-family: 'FontFiller';
  font-style: normal;
  font-weight: 400;
  src: url("./FontFiller.woff2") format("woff2");
  unicode-range: U+202F;
}
```

</div>


<div class="example-big">

#### Filler-Font im CSS nutzen

```css
html {
  font-family: "FontFiller", "MyRegularFont", sans-serif;
}
```

</div>





## Die wichtigsten Leerzeichen
Es gibt diverse nicht druckende Zeichen im Unicode-Standard. Hier eine kleine – nicht abschliessende – Übersicht über die wichtigsten Leerzeichen mit typografischer Relevanz.

<div class="spaces svg-export" data-svg-name="spaces.svg">



| Beispiel | Name | HTML |
|----|----|----|
{{#json './data.json'}}
{{#each json}}
| <span class="example example--{{ this.class }}"><span class="filler filler--prefix"><span class="filler-char">{{ this.context }}</span></span><span class="space">&#{{ this.dec }};</span><span class="filler-char"><span class="filler filler--postfix">{{ this.context }}</span></span></span> | <span class="name-german">{{this.de}}</span><br/><span class="name-unicode">{{this.name}}</span> | {{#if this.html}}Entitätenreferenz: `{{{this.html}}}`<br/>{{/if}}dezimal: `&#{{this.dec}};`<br/>hexadezimal: `&#x{{this.hex}};` |
{{/each}}
{{/json}}



</div>


## Das «Gegenteil» von Leerzeichen
Technisch gesehen kein Leerzeichen, aber in diesem Zusammenhang erwähnenswert, ist das breitenloses Verbindungszeichen. Ein Zeichen, das anzeigt, dass eine Trennung an dieser Stelle nicht zulässig ist.


<div class="example-big">

#### Icon und Text


{{example "→|Link" marker="|=&#8288;=space"}}

{{example "Link|↗" marker="|=&#8288;=space"}}


</div>


<div class="spaces">
  
| Beispiel | Name | HTML |
|----|----|----|
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8288;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Breitenloses Verbindungszeichen</span><br/><span class="name-unicode">WORD JOINER</span> | dezimal: `&#8288;`<br/>hexadezimal: `&#x2060;` |

</div>


## Quellen & Infos

<div class="box">

### Links
* [Wikipedia – Whitespace character](https://en.wikipedia.org/wiki/Whitespace_character)
* [typografie.info – Leerzeichen in Unicode – Deutsche Namen?](https://www.typografie.info/3/topic/24914-leerzeichen-in-unicode-%E2%80%93%C2%A0deutsche-namen/)

</div>





<div class="box">

### Veröffentlichungen
* Publisher 5 · 2019

</div>






<style>


  .spaces {
    font-size: .8rem;
  }


  .spaces .example {
    --open-sans-fea-onum: "onum" off;
    --open-sans-fea-pnum: "pnum" off;

    --open-sans-fea-lnum: "lnum" on;
    --open-sans-fea-tnum: "tnum" on;

    font-feature-settings: var(--open-sans-fea-aalt), var(--open-sans-fea-dnom),
      var(--open-sans-fea-frac), var(--open-sans-fea-liga), var(
        --open-sans-fea-lnum
      ), var(--open-sans-fea-locl), var(--open-sans-fea-numr), var(
        --open-sans-fea-onum
      ), var(--open-sans-fea-ordn), var(--open-sans-fea-pnum), var(
        --open-sans-fea-salt
      ), var(--open-sans-fea-ss01), var(--open-sans-fea-ss02), var(
        --open-sans-fea-ss03
      ), var(--open-sans-fea-subs), var(--open-sans-fea-sups), var(
        --open-sans-fea-tnum
      ), var(--open-sans-fea-zero);
  }


  .spaces thead {
    font-size: .9rem;
  }

  .spaces .name-german {
    font-size: .9rem;
    font-weight: 700;
  }

  .spaces .name-unicode {
    letter-spacing: 0.04em;
  }

  .spaces td {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }

  .spaces .example--default  {
    white-space: pre;

  }

  .spaces .example {
    font-size: 2rem;
  }

  .spaces .space {
    background-color: var(--blue-color);
  }

  .spaces .filler--prefix {
    width: 2rem;
    display: inline-block;
    text-align: right;
  }
  .spaces .example--gray .filler-char {
    background-color: var(--gray-color);
  }

  lead p {
    font-weight: 700;
    color: var(--green-color);
    line-height: 1.7;
    margin: 2rem;
  }





  @media print {

    .svg-export, .example-big {page-break-after: always;}



.content > * {
  display: none;
}

.content > .svg-export ,
.content > .example-big {
  display: block;
}

}


</style>
