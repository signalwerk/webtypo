---
title: Leerzeichen
description: Leerzeichen
---




## Publisher 5 · 2019
Erscheinungsdatum · 14. 10. 2019

<hr class="thick"  />

## Lizenzen
Dieser Text ist von Stefan Huber unter der Lizenz [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) veröffentlicht. [Publisher](https://publisher.ch/) erhält das Recht die Inhalte ohne Copyleft (Share Alike) zu publizieren.

<!--
<hr class="thick"  />
[CMYK Bilder für Print (pdf)](./frontend-frameworks_graphics_cmyk.pdf)
 -->

<hr class="thick"  />


# Mikrotypografie im Web – Leerzeichen



<lead>

Die Zeichensetzung wird im Umfeld der Schweizer Typografie oft sorgsam und gekonnt eingesetzt. Während sich die Fachleute für Druckgrafik oftmals vertieft mit der Erscheinung und Technik in der Mikrotypografie auseinander gesetzt haben, gibt es im Web nicht immer die selbe Sorgfalt. Insbesondere Leerzeichen sind nicht immer gnaz einfach zu setzen…

</lead>

## Welches bloss?
Abhängig vom Kontext und Text müssen ganz verschiedene Leerzeichen verwendet werden. Obwohl die Leihen nicht auf Anhieb den Unterschied erkennen mögen, sollte beim «gepflegten Satz» doch darauf geachtet werden, dass sich eine professionelle Gestaltung auch bis in die Mikrotypografie und Zeichensetzung fortführt.

## Wie eingeben?
Üblicherweise werden Websites heute über CMS (Content Management Systems) mit Inhalt befüllt. Da sich fast alle modernen Systeme an den Unicode-Zeichensatz (UTF-8) halten, können auch typografisch korrekte Zeichen eingegeben werden. Da diverse Zeichen nicht einfach über die Tastatur zugänglich sind, empfiehlt es sich ein Snippets-Manager oder ein sonstiges Helfer-Programm zum abrufen von Textbausteinen zu benutzen. Alternativ kann natürlich auch die Zwischenablage bemüht werden. Wenn das CMS eine Eingabe als HTML erlaubt, so kann auch eine Entitätenreferenz (siehe Tabelle) oder der hex-/deximale Code eingegeben werden. Dies hat erst noch den Vorteil, dass man auch später besser sieht, welches Zeichen eingegeben wurde, da es oftmals schwierig ist in kleinen Schriftgrössen zu erkennen, welche breite das Zeichen nun hat.


## Breitenloses Leerzeichen
Das breitenlose Leerzeichen gehört [offiziell](http://unicode.org/notes/tn27/) nicht einmal zu den Leerzeichen. Es kann innerhalb von Wörtern gesetzt werden um dem Browser anzuzeigen, dass es sich um eine Trennstelle handelt (ähnlich der bedingten Trennung), diese jedoch nicht mit einem Trennstrich angezeigt werden soll.

<div class="example-big">

#### Wörter trennen – ohne Trennstrich
### DieNeue<br/>Typografie.ch
<code>DieNeue</code><code class="space">&amp;ZeroWidthSpace;</code><code>Typografie.ch</code>

</div>

## Leerzeichen ohne Umbruch
Immer wenn man sprachliche Einheiten nicht trennen möchte, kann man diese mit einem umbruchgeschützten Leerzeichen verbinden.

<div class="example-big">

#### Wörter mit dazugehöriger Ziffer
### Seite<span>&nbsp;</span>3
<code>Seite</code><code class="space">&amp;nbsp;</code><code>3</code>


### 10<span>&nbsp;</span>Liter
<code>10</code><code class="space">&amp;nbsp;</code><code>Liter</code>

### DIN<span>&nbsp;</span>9000
<code>DIN</code><code class="space">&amp;nbsp;</code><code>9000</code>

</div>



<div class="example-big">

#### Firmennamen
### Grau<span>&nbsp;</span>AG
<code>Grau</code><code class="space">&amp;nbsp;</code><code>AG</code>


### Blau<span>&nbsp;</span>GmbH
<code>Blau</code><code class="space">&amp;nbsp;</code><code>GmbH</code>

### Turing<span>&nbsp;</span>&amp;<span>&nbsp;</span>Co.
<code>Turing</code><code class="space">&amp;nbsp;</code><code>&amp;</code><code class="space">&amp;nbsp;</code><code>Co.</code>

</div>

## Schmales Leerzeichen
Das schmales Leerzeichen wird typografisch an diversen Stellen eingesetzt. Meist empfiehlt es sich die variante zu nehmen, welche gleichzeitig auch keinen Umbruch zulässt. Auch geschütztes schmales Leerzeichen genannt.

<div class="example-big">

#### Datum
### 18.<span>&#x202F;</span>August&nbsp;2018
<code>18.</code><code class="space">&amp;#x202F;</code><code>August&nbsp;2018</code>

### 18.<span>&#x202F;</span>8.<span>&#x202F;</span>2018

<code>18.</code><code class="space">&amp;#x202F;</code><code>8.</code><code class="space">&amp;#x202F;</code><code>2018</code>


</div>

<div class="example-big">

#### Masseinheiten

### 100<span>&#x202F;</span>km
<code>100</code><code class="space">&amp;#x202F;</code><code>km</code>

### 30<span>&#x202F;</span>°C
<code>30</code><code class="space">&amp;#x202F;</code><code>°C</code>

</div>

<div class="example-big">

#### Telefonnummern

### +41<span>&#x202F;</span>78<span>&#x202F;</span>700<span>&#x202F;</span>10<span>&#x202F;</span>10
<code>+41</code><code class="space">&amp;#x202F;</code><code>78</code><code class="space">&amp;#x202F;</code><code>700</code><code class="space">&amp;#x202F;</code><code>10</code><code class="space">&amp;#x202F;</code><code>10</code>

</div>

<div class="example-big">

#### Berufstitel

### Prof.<span>&#x202F;</span>Dr.<span>&#x202F;</span>Moser
<code>Prof.</code><code class="space">&amp;#x202F;</code><code>Dr.</code><code class="space">&amp;#x202F;</code><code>Moser</code>

### Lic.<span>&#x202F;</span>Jur.<span>&#x202F;</span>Tina&nbsp;A.<span>&#x202F;</span>Kramer
<code>Lic.</code><code class="space">&amp;#x202F;</code><code>Jur.</code><code class="space">&amp;#x202F;</code><code>Tina&amp;nbsp;A.</code><code class="space">&amp;#x202F;</code><code>Kramer</code>

</div>


<div class="example-big">

#### Mathematische Gleichungen

### 1<span>&#x202F;</span>+<span>&#x202F;</span>2&nbsp;=&nbsp;3
<code>1</code><code class="space">&amp;#x202F;</code><code>+</code><code class="space">&amp;#x202F;</code><code>2&amp;nbsp;=&amp;nbsp;3</code>

</div>




## Ziffernleerzeichen
Ziffernleerzeichen sind mit Vorsicht zu geniessen. Sie sollten nicht dazu dienen, ganze (Zahlen-)Blöcke von Text zu formatieren. Aber es kann nützlich sein, ein Leerzeichen zu haben, was genau so breit ist, wie die proportionalen Versalziffern.

<div class="example-big">

#### Alignierende Ziffern

### 100<br/><span>&numsp;</span>50
<code>100¶</code><code class="space">&amp;numsp;</code><code>50</code>

</div>

## Browser und Fonts
Wie jedes andere Zeichen müssen auch Leerzeichen über den Font kontrolliert werden. Leider haben nicht immer alle Schriften die benötigten Leerzeichen enthalten. Zum Beispiel ist das schmales Leerzeichen ohne Umbruch oft nicht in Fonts vorhanden, jedoch das normale schmale Leerzeichen. Um das nicht umbrechende Zeichen dennoch auf der Website benutzen zu können, kann man einen «Filler»-Font erzeugen. Dieser nimmt die breite des schmalen Leerzeichens und erzeugt einen neuen Font mit nur einem geschützten schmalen Leerzeichen, das dann nicht umbricht. So wurde weder das ursprüngliche Font-File modifiziert (kein Lizenzverstoss), noch muss man typografische Abstriche machen.


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
Es gibt diverse nicht druckende Zeichen im Unicode-Standard. Hier eine kleine – nicht abschliessende – Übersicht der wichtigsten Leerzeichen mit typografischer Relevanz.

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





<hr class="thick"  />

### Autor
Stefan Huber unterrichtet an der [Schule für Gestaltung Zürich](https://sfgz.ch/) im Lehrgang HF Interaction Design und ist als Web-Entwickler tätig.


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





.example-big {
  margin: 1rem 0;

  padding-top: 0.1rem;
    padding-right: 1em;
    padding-bottom: 1rem;
    padding-left: 1em;



  border-left: 0.25em solid var(--green-color);
  background-color: var(--gray-color);

}

.example-big h4 {
  font-size: 1.2rem;

color: var(--green-color);

  letter-spacing: 0.1em;
  text-transform: uppercase;
}
  .example-big h3 {
    font-size: 2rem;

    margin-top: 0.5em;
    margin-bottom: 0.5em;
    line-height: 1;
  }

  .example-big p em {
    font-size: 1rem;
  }
  .example-big pre {
    background-color: transparent;
    line-height: 1.2;

  }
  .example-big :not(pre) > code {
    font-size: 1rem;
    white-space: pre;
background-color: white;
position: relative;
z-index: 9;

  }

  .example-big h3 span {
    background-color: var(--blue-color);
  }



  .example-big code.space {
    background-color: var(--blue-color);
    color: white;


    margin-left: -0.2rem;
margin-right: -0.2rem;
z-index: 99;
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
