# webcl-fs21-1

# week9 Custom Elements, PEP Aufbau
[CustomElements](https://webengineering-fhnw.github.io/webcl-fs21-1/week9/custom-elements/CustomElement.html )

**Inhalt**
> - Signature
> - Custom Elements
> - Verfahren
> - Adoption
> - Alternativen
> - PEP
> - Aufgaben

**Signature sketch**

[SVGSignatureSketch](https://webengineering-fhnw.github.io/webcl-fs21-1/week9/svg-signature-sketch/Signature.html )

**Custom Elements**
> - Selbstgemachte HTML Elemente
> - Nutzung via Tags oder CreateElement
> - Grundlage für WebComponents / Polymer (lit.dev)
> 
> Verfahren
> - Erben von HTML Elementen
> - Lifecycle Methoden überschreiben
> - Registrieren
>
> Beachte!
> - Elemente haben sehr viele Eigenschaften:
> - aria-*, data-*, role, tabindex, focus, valid, hover, style, lang, .... die man spezifikationskonform bewirtschaften muss
> - Das Bauen von UI Toolkits ist eine eigene Disziplin! 
> 
> Adoption
> - Mit grossen Ambitionen und hoffnungen gestartet, aber häufig unpassend verwendet. 
> - Sehr viele Projekte haben es verworfen.
> - Somit hat der Ruf gelitten. Bsp in der Industrie, wollten die meisten Kunden keine Custom Components.
> - Element, widget, control, component dienen der Darstellung aber nicht der Applikationsstrukturierung.
> - Nicht geeignet für die Applikationsstrukturierung. 
> - Allgemein gilt, Vererbung für Kompositionsnutzung → schlechte Idee, nicht nutzen!
> 
> Alternativen
> - DIV
> - JSX, TSX (Funktionen in HTML Syntax)
> - Factories (Funktionen, die DIVs erzeugen)
> - Projektoren -> Woche 5-6 
> 
> PEP
> - Konzept rausfinden, technische Möglichkeit das Konzept zu Skizzieren
> [SketchPEP](https://webengineering-fhnw.github.io/webcl-fs21-1/week9/pep-sketch/PEP.html)
> - Personaleinsatzplanung
> - Lösung gemeinsam aufbauen
> - Wir schauen uns 2 Arten von UIs an.
> - Für anspruchsvolle Lösungen gibt es keine Vorlagen und keinen Prozess.
> 
> Resources
> - Mozilla Dev Network zu Web Components
> - [Web_Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

**Aufgaben**
> - Einbindung von SVG-Eyes oder Gauge in
> - Angular | VUE | Svelte | React | Polymer | HyperApp | Halogen | ...
> - View + Interaktion

# week8 Animation

**Inhalt**
> - CSS goodie
> - Bezierkurven
> - Animation
> - Aufgaben

**CSS goodie**
[Spotlight](https://webengineering-fhnw.github.io/webcl-fs21-1/week8/CssSpotlight.html)

**Bézierkurven Präsentation**
> - Bézi-was?
> - Problemstellung
> - Splines
> - Bézierkurven
> - Kubische Bézierkurve
> - Anwendung

**Animation**
> Canvas Wiederholung
> - "Paint" via JS
> - Hooks to react to resize events
> - Read CSS Properties
> - Mouse/gesture interaction
> 
> Prinzipielle Idee - Common Layers
> mehrere Ebenen zeichnen
> - Glasspane [Glow]
> - Control Elements
> - Background [Shadow]
> 
> Advanced Canvas
> - Canvas aus Ebenen aufbauen:
> paint(buffer), cache, ctx.drawImage()
    > [Spotlight](https://github.com/HanSolo/SteelSeries-Canvas)
> 
> SVG
> - Bézierkurven tauchen in beiden Varianten vor 
> - Painting tools -> program
> - Clean values
> - Clean structures
> - CSS-hooks
> - JS-hooks(resp.namespace)
> 
> Canvas or SVG?
> - Painting non-shapes? -> Canvas
> - Interaction with shapes? -> SVG
> - Resizing, Painting tool support, animation, styling, efficiency,... mit beiden Varianten ermöglicht
> 
> Declarative Animations
> - CSS transition, animation, @keyframes
> - SVG <animation> element
> - only for animatable properties like numeric values, transform, path (limited)
> 
> Programmed Animations: for much more control
> - setTimeout() with recursive call 
> - setInterval()
> - requestAnimationFrame()
> 
> 
> Beispiel: Bucket - [Spotlight](https://webengineering-fhnw.github.io/webcl-fs21-1/week8/svg-bucket-sketch/Bucket.html)
> - Figma: Design animation stops as layers in paint tool
> - Export & clean svg
> - Style in CSS
> - Animate in JS
> 
> Animation Frame
> - Rendering ist ~ 60 frames / sec
> - requestAnimationFrame(fn) ruft fn, wenn das UI bereit ist, übergibt die Zeit als Argument
> - [Tween](https://webengineering-fhnw.github.io/webcl-fs21-1/week8/tween/View.html)
> 
**Aufgaben**
> - CSS goodie
> - Ab nächste Woche mehr Aufgaben

# week7 SVG and Canvas

**Inhalt**
> - CSS goodie
> - Multi-Project
> - Projeziertes CSS
> - Canvas
> - Advanced Canvas
> - SVG
> - Aufgaben

**CSS goodie**
[Card](https://webengineering-fhnw.github.io/webcl-fs21-1/week7/css-goodie-zeltner/index.html)

**Projeziertes CSS Wiederholung**
> Summary:
> - statisch (nicht projeziert)
> @import von Projektor-spezifischen CSS
> - für ganze page
> document.head.addChild(pageStyle)
> - für spezifisches Element
> element.style[propname] = value

**Canvas**
[Canvas gauge](https://webengineering-fhnw.github.io/webcl-fs21-1/week7/canvas-gauge-sketch/View.html)
> - Canvas erlaubt es uns mit Javascript zu zeichen
> - Hooks für Reaktion auf Grössenänderung, wichtige Idee bei Canvas
> - Auslesen von CSS Eigenschaften
> - Interaktionen über Mouse Position, schwieriger als bei SVG

**Advanced Canvas**
> - Canvas aus Ebenen aufbauen: 
> paint(buffer), cache, ctx.drawImage()
> - Gut zum Merken mit einem buffer die Cachen, danach kann man wieder drüber zeichnen

**SVG**
[SVG Eyes](https://webengineering-fhnw.github.io/webcl-fs21-1/week7/svg-eyes-sketch/Eyes.html)

> Vorteil von Canvas:
> - Leichter mit Zeichentools arbeiten wie Figma und co. 
> - Aus den Zeichentools exportieren: Oftmals muss man das exportierte SVG nachbearbeiten
> 
> Exporte führen gelegentlich zu:
> - Wertebereinigung
> - Strukturbereinigung
> - CSS-hooks
> - JS-hooks (Namespace berücksichtigt)

**Aufgaben**
> - CSS goodie
> - Lidschlag animieren ("morphen")
> - Bezier-Kurven erklären (quad,cube)
 
# week6 CSS 
[CSS](https://webengineering-fhnw.github.io/webcl-fs21-1/week6/person/View.html)

**Inhalt**
>- CSS goodie
>- Projector 
>- CSS++ 
>- Aufgaben
 
**CSS goodie**
[Glitch](https://webengineering-fhnw.github.io/webcl-fs21-1/week6/css-glitch/index.html)

**Table projector**
[Projector](https://webengineering-fhnw.github.io/webcl-fs21-1/table/person/View.html)

**CSS++**
> - Agenda *Wiederholung
> - Make projector more generic
> Table 
> - Make projector replaceable
> - Allow for projector-specific CSS
> - Projector use (JavaScript)
> import {
>           projectFrame,
>           projectSimpleForm
> } from "xxxProjector.js"
> projectFrame(projectSimpleForm, ...)
> module interface und function composition
> - Spezifisches CSS
> Komponenten und Projektoren brauchen oft spezifische CSS Stile
> 
> CSS Issues
> - Fehlende CSS Stildeklarationen
> - Selektor-Konflikte
> - Bewirtschaften der Abhängigkeiten
> - (Schut vor | Erlauben von) Anpassungen
> Projeziertes CSS
> - @import von Projektor-spezifischen CSS
> - CSS direkt auf dem Element: rootElement.style[propname] = value document.head.addChild(pageStyle)
> - inline-style
> 
**Aufgaben**
> - CSS goodie 
> - Gestaltungskonzept (UI und UX) für Multi-Projekt Planning
> - Dimensionen: Entwickler,Projekte,Zeit

# week5 Projector Pattern
[Projector](https://webengineering-fhnw.github.io/webcl-fs21-1/week5/person/View.html)

**Inhalt**
> - CSS goodie
> - Projector Pattern
> - Aufgaben

**CSS goodie**
[BackBlur](https://webengineering-fhnw.github.io/webcl-fs21-1/week5/BackBlur.html)

**Projector Pattern**
> Context
> - User interfaces mit mehreren Screens, die Klassifiziert werden in typische Schemas
> - Widget Erstellung und die Bindung durch das UI Toolkit
> - Abstraktion des Präsentationsmodells 
>
> Problemstellung
> - Das Implementieren dedizierter Ansichten für viele Bildschirme, einschließlich der Modellbindung, führt zu viel Code, der erstellt, getestet und gewartet werden muss
> - Darüber hinaus ist dieser Code UI-Toolkit-spezifisch und muss bei jeder Änderung des Toolkits ersetzt werden. Die schiere Menge an Code kann dies unerschwinglich teuer machen.
>
> Forces
> - Statische Codegenerierung- und Vorlagenansätze bieten häufig nicht genügend Flexibilität bei der Ansichtskonstruktion
> - das Modellbindungs- und Interaktionsparadigma
> - dynamische Änderungen und Erweiterungen
> - Zusammensetzungsaggregate
> - Noch wichtiger ist, dass statisch erstellte Strukturen im Allgemeinen nur schwer erneut angewendet werden können, wenn die Struktur geändert werden muss
> 
> Solution
> - Reiche Präsentationsmodelle und Attribute
> - Abstract Factory (GOF): IProjector
> - Projektionsmethoden erstellen IPresentations
> - IPresentations sind zusammensetzbar
> - IPresentations enthüllen innere Widgets
> 
> Sample usage:
> - IProjector projector = new XXXProjector(controller, ...)
> - Projection: IPresentation form = projector.createSimpleForm(model)
> - Composition: IPresentation frame = projector.createFrame(form, 400, 200)
> - Composite Structure
> - Behavior: Validation
> - Flexibility
>
> Resulting Context:
> - Einfache Ansichtserstellung durch Auswahl einer Projektion aus einem Katalog
> - Austauschbare Projektoren ermöglichen eine schnelle und sichere Migration sowie Mehrkanalunterstützung
> - Dramatisch reduzierte Codegröße, weniger strukturelle Duplizierung, reduzierter Testaufwand und weniger Fehler
> - Allgemeine, parametrisierte Projektoren können komplexer zu implementieren und zu testen sein
> 
> Known Uses
> - OpenDolphin / Dolphin Platform
> - UBS STMP
> - KBS KKVS 4
> - Various P5/P6 Projects (GroupHub, DuploFX,..)
> - Eine Vielzahl von Kundenprojekten bei Ex-Canoo
> 
> Related Patterns
> - Die Abhängigkeit der Komponenten von Daten ist umgekehrt. Kann als Projektionsziel verwendet werden
> - Abstraktes UI-Toolkit. Anwendbar in einem begrenzten Kontext, in dem der kleinste gemeinsame Nenner aller UI-Technologien in Ordnung ist

**Aufgaben**
> - Baue einen Projektor, der die Lister der Personen als HTML table anzeigt mit Visualisierung der selektierten table row
> - CSS goodie

# week4 Master-Detail
[Person Master-Detail View](https://webengineering-fhnw.github.io/webcl-fs21-1/week4/person/View.html)

**Inhalt**
> - CSS goodie
> - Präsentation
> - Master-Detail
> - Aufgaben

**CSS goodie**

[CSSCollapse](https://webengineering-fhnw.github.io/webcl-fs21-1/week4/Goodie-4-CSSCollapse.html)

**Präsentation**
> Thema: Kurze Einführung und Präsentation von JSDoc
> - Installation
> - Tags / List of tags
> - Dokumentation
> - Demonstration

**Master-Detail**
> Was wir brauchen *Wiederholung
> - Observable, ObservableList, Scheduler, Testing und Classic MVC
> - Attribute, Converter, Validator, reichhaltige Attribute, spezialisierte Projektoren
> - Nun reichhaltige Attribute die wir nutzen, um sehr effiziente und ambitioniertem UIs umzusetzen.
> 
> Attribute
> - Attribute die nicht nur einen Wert haben
> - Validation und Konvertierungen
> - Beliebige Properties effizient unterstützen: value, valid, label, help, error(s), mandatory, readonly, enabled, visible, widget-hint, regex, qualifier,...
> 
> Master-Detail
> - Klassisch: Liste plus Formular
> - Unoffensichtliche Master-Detail Views
> - Wie mit der Selektion umgehen
> - todo: when a line in the master view is clicked, we have to set the selection
> - Gute Aufgabe: Beliebige Sachen löschen(gerade aus personProjector) und versuchen sie zu wiederherstellen

**Aufgaben**
> Aufgabe 1:
> - Wie kann man eine Dirty-State Visualisierung einbauen und wie kann man das selbst in direct-manipulation UIs sinnvoll nutzen?
> 
> Aufgabe 2:
> - Beliebigen Teil der Implementierung von Observable, Attribute, Modellen, Controllern oder Projektoren löschen und neu bauen bis die Tests wieder laufen.
> 

# week3 Attribute Projektor
[Todo App w3](https://webengineering-fhnw.github.io/webcl-fs21-1/week3/todo/View.html)

**Inhalt**
> - CSS goodie
> - Präsentation
> - Spezialaufgabe Master Detail View
> - Tests und Inhalt zu Projektor
> - Aufgaben

**CSS goodie**
[CSSTriangle](https://webengineering-fhnw.github.io/webcl-fs21-1/week3/CSSTriangle.html)
> - Dreiecke in zwei verschiedenen Varianten zeichnen

**Präsentation**
> Thema: Accessibility / A11y
> - WIA / Web Accessibility Initiative
> - How not to 
> - HTML5 Elemente
> - Attribute
> - Beispiel
> - Aussehen
> - Sonstiges

**Master-Detail View**
[MasterDetail](https://webengineering-fhnw.github.io/webcl-fs21-1/week2/todoMasterDetail/View.html)
> - Problemstellung: Bestehende Anwendung zu Master Detail View umbauen.
> - Neue ToDo Detail View dazugekommen, welche das Formular zum Bearbeiten enthält
> - ToDo Items View wird zu einer nicht editierbaren Tabelle mit auswählbaren Zeilen
> - ToDo Controller erhält einen Selection Observable welches sich die zurzeit selektierte Tabellenzeile merkt.

**Tests und Inhalt zu Projektor**
[Tests](https://webengineering-fhnw.github.io/webcl-fs21-1/week3/allTestsAsync.html)

>- Änderung durch den Status "done" wird die Editierbarkeit des Textfeldes hervorgerufen. 
> Feld nicht mehr editierbar. 
> - Der Projektor erzeugt Views und deren Bindings aus den Präsentationsmodellen.
> - Textfeld kann sich an die Editable-Property vom Text-Attribute dranhängen. 
> - Danach können wir das Readonly Attribute setzen.

**Aufgabe**
> - Kurzeinführung in JSDoc


# week2 Validationen, Konvertierungen, Attribute
[Todo App w2](https://webengineering-fhnw.github.io/webcl-fs21-1/week2/todo/View.html)

**Inhalt**
> - CSS goodie
> - Präsentation
> - MVC, classic version
> - Tests
> - Aufgaben

**CSS goodie**
[CSSValidation](https://webengineering-fhnw.github.io/webcl-fs21-1/week2/CSSValidation.html)

**Präsentation**
> Thema: Wie kann man Validation und Konvertierung einbauen?
> - Ziel bei der Verifikation von Daten
> - Wo verifiziert man? M/V oder C?
> - CSS Lösungsvorschlag
> - View Lösungsvorschlag 
> - Controller Lösungsvorschlag
> - Form Lösungsvorschlag

**MVC**

>- Klassisch kennt das Model den View "indirekt". 
>- View greift nach einer Änderung aufs Model zurück (Observer Pattern). Zugriff kommt über den Controller.
> Somit wird bei einer Änderung der Controller benachrichtigt. 
>- Der Controller liest das Model aus und schreibt daraufhin zurück. Somit bewirtschaftet der Controller das Model. 
> Insbesondere kein Rückgriff auf den View.  

**Beispiel IT Architektur der FHNW im MVC** 
>Model
>- Ist die Menge aller Datenbanken und Informationsquellen.
> 
> View  
>- Sind die verschiedenen Applikationen ProStud etc. Zugang von den Datenmodellen.
>
> Controller
>- Problematik IT Architektur: Fehlende Idee von Services, dienen als Controller um das Datenmodell zu bewirtschaften.
> Jede Unterkategorie gliedert sich wieder auf in Model View Controller. 
>- Beispiel: View gliedert sich "intern" wieder in einer MVC Struktur. Wobei das Model als Object model gilt, der View als Presentation und der Controller als Workflow usw.

**Tests**
>- Tests im Debugger laufen lassen [Tests](https://webengineering-fhnw.github.io/webcl-fs21-1/week2/allTestsAsync.html)
>- Tipp Shortcut zum Nachschlagen von usages: Alt+F7
>- setConverter
>- setValidator 
>- setConvertedValue
>- View testen, ob noch alles funktioniert.

**Aufgabe**
> Was braucht es für einen Master-Detail View wie [Youtube link 8 min](https://www.youtube.com/watch?v=-oGEnyWN9zM)
>- Überlegungen, Konzept
>- Umsetzungsversuch

# week1 Anschluss an WebPr finden
    
Einfache Todo App mit MVC

Github pages under https://webengineering-fhnw.github.io/webcl-fs21-1/week1/todo/View.html


**Inhalt**
> - Ambitionierte Web UIs
> - Classic MVC (Anschluss an WebPr)
> - Ziel 1: View, Controller und Modell vollständig voneinander getrennt
> - Ziel 2: Alle Views vollständig voneinander getrennt

**Bewertung**
> Punkte sammeln
> - Während jeder Vorlesung
> - Aufgaben + Präsentation
> - 50 Punkte / 60 % notwendig zum Bestehen
> - Selbst die Punkte in Teams unter "Notizen" eintragen
