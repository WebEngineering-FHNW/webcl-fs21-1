# webcl-fs21-1

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
