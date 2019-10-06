---
title: Leerzeichen
description: Leerzeichen
---

# Leerzeichen






## Leerzeichen
Je nach Anwendung müssen andere Leerzeichen zum Einsatz kommen.


<style>

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

</style>

<div class="spaces svg-export" data-svg-name="spaces.svg">



| Beispiel | Name | HTML |
|----|----|----|
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8203;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Breitenloses Leerzeichen</span><br/><span class="name-unicode">ZERO WIDTH SPACE</span> | Entitätenreferenz: `&ZeroWidthSpace;`<br/>Dezimal: `&#8203;`<br/>hexadezimal: `&#x200B;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#32;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Leerzeichen</span><br/><span class="name-unicode">SPACE</span> | Dezimal: `&#32;`<br/>hexadezimal: `&#x0020;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#160;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Leerzeichen ohne Umbruch</span><br/><span class="name-unicode">NO-BREAK SPACE</span> | Entitätenreferenz: `&nbsp;`<br/>Dezimal: `&#160;`<br/>hexadezimal: `&#x00A0;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8201;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">schmales Leerzeichen</span><br/><span class="name-unicode">THIN SPACE</span> | Entitätenreferenz: `&thinsp;`<br/>Dezimal: `&#8201;`<br/>hexadezimal: `&#x2009;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8239;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">schmales umbruchgeschütztes Leerzeichen</span><br/><span class="name-unicode">NARROW NO-BREAK SPACE</span> | Dezimal: `&#8239;`<br/>hexadezimal: `&#x202F;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8202;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Haarspatium</span><br/><span class="name-unicode">HAIR SPACE</span> | Entitätenreferenz: `&hairsp;`<br/>Dezimal: `&#8202;`<br/>hexadezimal: `&#x200A;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8198;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Sechstelgeviert-Leerzeichen</span><br/><span class="name-unicode">SIX-PER-EM SPACE</span> | Dezimal: `&#8198;`<br/>hexadezimal: `&#x2006;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8197;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Viertelgeviert-Leerzeichen</span><br/><span class="name-unicode">FOUR-PER-EM SPACE</span> | Entitätenreferenz: `&emsp14;`<br/>Dezimal: `&#8197;`<br/>hexadezimal: `&#x2005;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8196;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Drittelgeviert-Leerzeichen</span><br/><span class="name-unicode">THREE-PER-EM SPACE</span> | Entitätenreferenz: `&emsp13;`<br/>Dezimal: `&#8196;`<br/>hexadezimal: `&#x2004;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8194;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Halbgeviert-Leerzeichen</span><br/><span class="name-unicode">EN SPACE</span> | Entitätenreferenz: `&ensp;`<br/>Dezimal: `&#8194;`<br/>hexadezimal: `&#x2002;` |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8195;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | <span class="name-german">Geviert-Leerzeichen</span><br/><span class="name-unicode">EM SPACE</span> | Entitätenreferenz: `&emsp;`<br/>Dezimal: `&#8195;`<br/>hexadezimal: `&#x2003;` |
| <span class="example example--gray"><span class="filler filler--prefix"><span class="filler-char">0</span></span><span class="space">&#8199;</span><span class="filler-char"><span class="filler filler--postfix">0</span></span></span> | <span class="name-german">Ziffernleerzeichen</span><br/><span class="name-unicode">FIGURE SPACE</span> | Entitätenreferenz: `&numsp;`<br/>Dezimal: `&#8199;`<br/>hexadezimal: `&#x2007;` |
| <span class="example example--gray"><span class="filler filler--prefix"><span class="filler-char">.</span></span><span class="space">&#8200;</span><span class="filler-char"><span class="filler filler--postfix">.</span></span></span> | <span class="name-german">Interpunktionsleerzeichen</span><br/><span class="name-unicode">PUNCTUATION SPACE</span> | Entitätenreferenz: `&puncsp;`<br/>Dezimal: `&#8200;`<br/>hexadezimal: `&#x2008;` |





</div>



<br />
<br />
<br />


## Geschützte schmales Leerzeichen

<div class="box">

### Eingabe

####  schmales geschütztes Leerzeichen `¦`
Narrow No-break Space
* Text: '&#8239;'
* Unicode DEZ: `&#8239;`  
* Unicode HEX: `&#x202f;`

<!--
####  schmales Leerzeichen
(THIN SPACE)
* Text: '&thinsp;'
* HTML: `&thinsp;`
* Unicode DEZ: `&#8201;`
* Unicode HEX: `&#x2009;`
-->

</div>

### Datum
> 18.&#8239;August&nbsp;2018 <br>`18.¦August␣2018`

> 18.&#8239;8.&#8239;2018 <br>`18.¦8.¦2018`
### Telefonnummern
> +41&#8239;78&#8239;700&#8239;10&#8239;10 <br>`+41¦78¦700¦10¦10`
### Abkürzung
> z.&#8239;B. <br> `z.¦B.`

>  Nr.&#8239;1 <br> `Nr.¦1`
### Masseinheiten
> 100&#8239;km <br> `100¦km`

> 30&#8239;°C <br> `30¦°C`

Nicht bei Winkelgrad!
> 30°<br> `30°`

### Zifferngruppierung
> 20&#8239;000 <br> `20¦000`
### Gleichungen
> 1&#8239;+&#8239;2 = 3 <br> `1¦+¦2␣=␣3`

> 1&#8239;–&#8239;2 = –1  <br> `1¦–¦2␣=␣−1`
### Paragraf
> §&#8239;10 <br> `§¦10`
### Titel
> Prof.&#8239;Dr.&#8239;Moser <br> `Prof.¦Dr.¦Moser`

> Lic.&#8239;Jur.&#8239;Reto A.&#8239;Kramer <br>  `Lic.¦Jur.¦Reto␣A.¦Kramer`

## Geschütztes Leerzeichen

<div class="box">

### Eingabe
####  geschütztes Leerzeichen `␣`
no-break space
* Text: '&nbsp;'
* HTML: `&nbsp;`
* Unicode DEZ: `&#160;`
* Unicode HEX: `&#x00A0;`

</div>

### Wörter mit dazugehöriger Ziffer
> 10&nbsp;Liter <br/> `10␣Liter`

> Seite&nbsp;3 <br/> `Seite␣3`

> DIN&nbsp;7000 <br/> `DIN␣7000`
### Firmennamen
> Grau&nbsp;AG <br/> `Grau␣AG`

> Blau&nbsp;GmbH <br/> `Blau␣GmbH`

> McKinsey&nbsp;&amp;&nbsp;Co. <br/> `McKinsey␣&␣Co.`




## Ziffer-Leerzeichen


<div class="box">

### Eingabe
####  Ziffer-Leerzeichen
figure space
* Text: '&#8199;'
* Unicode DEZ: `&#8199;`
* Unicode HEX: `&#x2007;`
</div>


### Tabellendarstellung
Gleiche Breite wie eine Tabellenziffer.
> 0&#8199;0<br>000



## Quellen & Infos

<div class="box">

### Links
* [Wikipedia – Whitespace character](https://en.wikipedia.org/wiki/Whitespace_character)
* [typografie.info – Leerzeichen in Unicode – Deutsche Namen?](https://www.typografie.info/3/topic/24914-leerzeichen-in-unicode-%E2%80%93%C2%A0deutsche-namen/)

</div>
