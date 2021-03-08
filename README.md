# webcl-fs21-1

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