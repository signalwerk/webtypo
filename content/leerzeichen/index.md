---
title: Leerzeichen
description: Leerzeichen
---

# Leerzeichen






## Leerzeichen
Je nach Anwendung müssen andere Leerzeichen zum Einsatz kommen.


<style>

  .spaces .example {
    white-space: pre;
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

<div class="spaces">

| Beispiel | Text | HTML · Entitätenreferenz | HTML · dezimal | HTML · hexadezimal | Unicode Name |
|----|----|----|----|----|----|
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8203;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8203;' | `&ZeroWidthSpace;` | `&#8203;` | `&#x200B;` | ZERO WIDTH SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#32;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#32;' | | `&#32;` | `&#x0020;` | SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#160;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#160;' | `&nbsp;` | `&#160;` | `&#x00A0;` | NO-BREAK SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8201;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8201;' | `&thinsp;` | `&#8201;` | `&#x2009;` | THIN SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8239;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8239;' | | `&#8239;` | `&#x202F;` | NARROW NO-BREAK SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8202;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8202;' | `&hairsp;` | `&#8202;` | `&#x200A;` | HAIR SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8198;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8198;' | | `&#8198;` | `&#x2006;` | SIX-PER-EM SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8197;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8197;' | `&emsp14;` | `&#8197;` | `&#x2005;` | FOUR-PER-EM SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8196;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8196;' | `&emsp13;` | `&#8196;` | `&#x2004;` | THREE-PER-EM SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8194;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8194;' | `&ensp;` | `&#8194;` | `&#x2002;` | EN SPACE |
| <span class="example example--default"><span class="filler filler--prefix"><span class="filler-char">M</span></span><span class="space">&#8195;</span><span class="filler-char"><span class="filler filler--postfix">M</span></span></span> | '&#8195;' | `&emsp;` | `&#8195;` | `&#x2003;` | EM SPACE |
| <span class="example example--gray"><span class="filler filler--prefix"><span class="filler-char">0</span></span><span class="space">&#8199;</span><span class="filler-char"><span class="filler filler--postfix">0</span></span></span> | '&#8199;' | `&numsp;` | `&#8199;` | `&#x2007;` | FIGURE SPACE |
| <span class="example example--gray"><span class="filler filler--prefix"><span class="filler-char">.</span></span><span class="space">&#8200;</span><span class="filler-char"><span class="filler filler--postfix">.</span></span></span> | '&#8200;' | `&puncsp;` | `&#8200;` | `&#x2008;` | PUNCTUATION SPACE |

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

</div>
