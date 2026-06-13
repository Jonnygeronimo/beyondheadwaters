# Drift & Rise

Eine atmosphärische, responsive Landingpage für ein unabhängiges
Flyfishing-Kollektiv aus dem Alpenraum.

![Drift & Rise Hero](assets/river-hero.png)

## Über das Projekt

**Drift & Rise** verbindet Menschen, die im Fliegenfischen mehr sehen als den
Fang. Die Website erzählt von gemeinsamen Tagen am Wasser, alpinen Flüssen und
dem Austausch innerhalb des Kollektivs.

Das visuelle Konzept kombiniert großflächige Naturfotografie mit einer
editorialen Typografie und einer zurückhaltenden, naturinspirierten Farbwelt.

## Features

- Responsive Design für Desktop, Tablet und Smartphone
- Großflächiger Hero-Bereich mit individuellem Bildmotiv
- Bereiche für Kollektiv, Gewässer und Field Notes
- Animierte Inhalte beim Scrollen
- Interaktive Gewässerauswahl
- Mobile Navigation
- Beitrittsformular mit direkter Rückmeldung
- Separate Seiten für Impressum und Datenschutz
- Berücksichtigung reduzierter Bewegungseinstellungen
- Semantisches HTML und zugängliche Beschriftungen

## Technologien

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: DM Sans und Instrument Serif

Das Projekt benötigt kein Framework, keine Paketinstallation und keinen
Build-Prozess.

## Lokal starten

Das Projekt kann direkt über die `index.html` geöffnet werden. Alternativ lässt
es sich mit einem lokalen Webserver starten:

```bash
python3 -m http.server 8000
```

Anschließend ist die Website unter
[http://localhost:8000](http://localhost:8000) erreichbar.

## Projektstruktur

```text
.
├── assets/
│   └── river-hero.png
├── datenschutz.html
├── impressum.html
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Anpassung

- Inhalte und Links befinden sich in `index.html`.
- Farben, Typografie und Layout werden in `styles.css` gesteuert.
- Navigation, Gewässerauswahl, Animationen und Formularlogik liegen in
  `script.js`.
- Das Hero-Motiv kann unter `assets/river-hero.png` ausgetauscht werden.

## Hinweise

Das Beitrittsformular demonstriert aktuell nur die Interaktion im Frontend und
sendet keine Daten an einen Server. Für den produktiven Einsatz muss es mit
einem Formular- oder Newsletter-Dienst verbunden werden.

Der Instagram-Link ist noch ein Platzhalter und sollte vor der Veröffentlichung
ersetzt werden.

Im Impressum und in der Datenschutzerklärung sind fehlende Betreiber- und
Hosting-Angaben deutlich als Platzhalter gekennzeichnet. Diese Angaben müssen
vor der Veröffentlichung durch die tatsächlichen Informationen ersetzt und die
Rechtstexte für den konkreten Einsatz geprüft werden.

## Lizenz

Vor einer öffentlichen Weiterverwendung sollten eine passende Lizenz ergänzt
und die Nutzungsrechte aller Inhalte und Bildmotive geprüft werden.
