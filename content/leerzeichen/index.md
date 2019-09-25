---
title: Leerzeichen
description: Leerzeichen
---

# Leerzeichen






## Leerzeichen
Je nach Anwendung müssen andere Leerzeichen zum Einsatz kommen.

<style>
  ul.spaces  {
    list-style-type: none;
    <!-- font-size: 2rem; -->
    margin: 0;
    padding: 0;
  }

  ul.spaces > li::before {
    display: none;
  }
  ul.spaces li {
    margin-bottom: 1rem;
  }
  .spaces .show {
    white-space: pre;
    background-color: var(--green-color);
  }
  .spaces .example {
    width: 7rem;
    display: inline-block;
    font-size: 2rem;
  }
  .spaces .pre {
    display: inline-block;
    width: 2rem;
    text-align: right;
  }
  .spaces .bg {
    background-color: var(--gray-color);
  }
</style>




<ul class="spaces">
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show"></span><!--
 --><span class="after">M</span>
 </span><code>No space</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#32;</span><!--
 --><span class="after">M</span>
 </span><code>Space – U+0020</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#160;</span><!--
 --><span class="after">M</span>
 </span><code>No-break Space – U+00A0</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#8201;</span><!--
 --><span class="after">M</span>
 </span><code>Thin Space – U+2009</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#8239;</span><!--
 --><span class="after">M</span>
 </span><code>Narrow No-break Space – U+202F</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#8202;</span><!--
 --><span class="after">M</span>
 </span><code>Hair Space – U+200A</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#8198;</span><!--
 --><span class="after">M</span>
 </span><code>Six-Per-Em Space – U+2006</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#8197;</span><!--
 --><span class="after">M</span>
 </span><code>Four-Per-Em Space – U+2005</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#8196;</span><!--
 --><span class="after">M</span>
 </span><code>Three-Per-Em Space – U+2004</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#8194;</span><!--
 --><span class="after">M</span>
 </span><code>En Space – U+2002</code>
  </li>
  <li>
    <span class="example"><span class="pre">M</span><!--
 --><span class="show">&#8195;</span><!--
 --><span class="after">M</span>
 </span><code>Em Space – U+2003</code>
  </li>
  <li>
    <span class="example"><span class="pre"><span class="bg">0</span></span><!--
 --><span class="show">&#8199;</span><!--
 --><span class="after"><span class="bg">0</span></span>
 </span><code>Figure Space – U+2007</code>
  </li>
  <li>
    <span class="example"><span class="pre"><span class="bg">.</span></span><!--
 --><span class="show">&#8200;</span><!--
 --><span class="after"><span class="bg">.</span></span>
 </span><code>Punctuation Space – U+2008 </code>
  </li>
</ul>



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
