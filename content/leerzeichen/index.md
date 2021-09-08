---
title: Leerzeichen
description: Leerzeichen
---


# Leerzeichen


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

In Browser Safari gibt es seit längerem einen Bug, wodurch das geschützte schmale Leerzeichen ohne Breite dargestellt wird:
* [WebKit Bug](https://bugs.webkit.org/show_bug.cgi?id=172205)
* [WebKit Bug](https://bugs.webkit.org/show_bug.cgi?id=180744)
* [WebKit Bug](https://bugs.webkit.org/show_bug.cgi?id=194985)


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
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8203;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Breitenloses Leerzeichen</span><br/><span class="name-unicode">ZERO WIDTH SPACE</span> | Entitätenreferenz: `&ZeroWidthSpace;`<br/>dezimal: `&#8203;`<br/>hexadezimal: `&#x200B;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#32;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Leerzeichen</span><br/><span class="name-unicode">SPACE</span> | Dezimal: `&#32;`<br/>hexadezimal: `&#x0020;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#160;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Leerzeichen ohne Umbruch</span><br/><span class="name-unicode">NO-BREAK SPACE</span> | Entitätenreferenz: `&nbsp;`<br/>dezimal: `&#160;`<br/>hexadezimal: `&#x00A0;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8201;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">schmales Leerzeichen</span><br/><span class="name-unicode">THIN SPACE</span> | Entitätenreferenz: `&thinsp;`<br/>dezimal: `&#8201;`<br/>hexadezimal: `&#x2009;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8239;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">schmales Leerzeichen ohne Umbruch</span><br/><span class="name-unicode">NARROW NO-BREAK SPACE</span> | Dezimal: `&#8239;`<br/>hexadezimal: `&#x202F;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8202;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Haarspatium</span><br/><span class="name-unicode">HAIR SPACE</span> | Entitätenreferenz: `&hairsp;`<br/>dezimal: `&#8202;`<br/>hexadezimal: `&#x200A;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8198;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Sechstelgeviert-Leerzeichen</span><br/><span class="name-unicode">SIX-PER-EM SPACE</span> | Dezimal: `&#8198;`<br/>hexadezimal: `&#x2006;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8197;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Viertelgeviert-Leerzeichen</span><br/><span class="name-unicode">FOUR-PER-EM SPACE</span> | Entitätenreferenz: `&emsp14;`<br/>dezimal: `&#8197;`<br/>hexadezimal: `&#x2005;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8196;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Drittelgeviert-Leerzeichen</span><br/><span class="name-unicode">THREE-PER-EM SPACE</span> | Entitätenreferenz: `&emsp13;`<br/>dezimal: `&#8196;`<br/>hexadezimal: `&#x2004;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8194;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Halbgeviert-Leerzeichen</span><br/><span class="name-unicode">EN SPACE</span> | Entitätenreferenz: `&ensp;`<br/>dezimal: `&#8194;`<br/>hexadezimal: `&#x2002;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8195;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Geviert-Leerzeichen</span><br/><span class="name-unicode">EM SPACE</span> | Entitätenreferenz: `&emsp;`<br/>dezimal: `&#8195;`<br/>hexadezimal: `&#x2003;` |
| <span class="example example--gray"><span class="filler filler--prefix"><span class="filler-char">0</span></span><span class="space">&#8199;</span><span class="filler-char"><span class="filler filler--postfix">0</span></span></span> | <span class="name-german">Ziffernleerzeichen</span><br/><span class="name-unicode">FIGURE SPACE</span> | Entitätenreferenz: `&numsp;`<br/>dezimal: `&#8199;`<br/>hexadezimal: `&#x2007;` |
| <span class="example example--gray"><span class="filler filler--prefix"><span class="filler-char">.</span></span><span class="space">&#8200;</span><span class="filler-char"><span class="filler filler--postfix">.</span></span></span> | <span class="name-german">Interpunktionsleerzeichen</span><br/><span class="name-unicode">PUNCTUATION SPACE</span> | Entitätenreferenz: `&puncsp;`<br/>dezimal: `&#8200;`<br/>hexadezimal: `&#x2008;` |





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
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8288;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Breitenloses Verbindungszeichen</span><br/><span class="name-unicode">WORD JOINER</span> | Entitätenreferenz: `&ZeroWidthSpace;`<br/>dezimal: `&#8288;`<br/>hexadezimal: `&#x2060;` |

</div>


## Quellen & Infos

<div class="box">

### Links
* [Wikipedia – Whitespace character](https://en.wikipedia.org/wiki/Whitespace_character)
* [typografie.info – Leerzeichen in Unicode – Deutsche Namen?](https://www.typografie.info/3/topic/24914-leerzeichen-in-unicode-%E2%80%93%C2%A0deutsche-namen/)

</div>



<hr class="thick"  />

### Veröffentlichungen
Dieser Text wurde in einer ursprünglichen Form in «Publisher 5 · 2019» publiziert.


<hr class="thick"  />









<style>


h1,
h2 {
  letter-spacing: 0;
  text-transform: none;
}


  .spaces {
    font-size: .8rem;
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
