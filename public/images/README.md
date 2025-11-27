# Logo-Varianten

## Übersicht

Das Projekt verwendet mehrere Logo-Varianten für verschiedene Anwendungsfälle. Jede Variante ist für spezifische Hintergrundfarben und Kontexte optimiert, um eine optimale Lesbarkeit und visuelle Konsistenz zu gewährleisten.

## Logo-Varianten

Das Projekt verfügt über die folgenden Logo-Dateien:

- **`logo-white.png`**: Weißes/helles Logo für dunkle Hintergründe (Header, dunkle Bereiche)
- **`logo-black.png`**: Schwarzes Logo mit Text für helle Hintergründe (Footer, helle Bereiche)
- **`logo-black.jpg`**: JPG-Version des schwarzen Logos (Fallback/alternatives Format)
- **`logo-blue.png`**: Blaues Akzent-Logo für Hero-Bereiche, About-Seite und visuelle Hervorhebung

## Verwendungsrichtlinien

### Hintergrundfarbe
- **Dunkle Hintergründe**: Verwenden Sie `logo-white.png`
- **Helle Hintergründe**: Verwenden Sie `logo-black.png` oder `logo-black.jpg`
- **Akzente und Hervorhebungen**: Verwenden Sie `logo-blue.png` für visuelles Interesse

### Empfohlene Größen
- **Mindestgröße**: 200x200px für beste Qualität
- Größere Auflösungen werden für Retina-Displays und hochauflösende Bildschirme empfohlen

### Format-Empfehlungen
- **PNG mit Transparenz** wird bevorzugt, da es saubere Kanten und transparente Hintergründe ermöglicht
- **JPG** kann als Fallback oder für Kontexte verwendet werden, in denen JPG-Format bevorzugt wird

## Dateinamenskonvention

Die Logo-Dateien folgen dem Muster: `logo-{farbe}.{erweiterung}`

- `{farbe}`: Gibt die Hauptfarbe des Logos an (white, black, blue)
- `{erweiterung}`: Dateiformat (png, jpg)

Beispiele:
- `logo-white.png` - Weißes Logo im PNG-Format
- `logo-black.png` - Schwarzes Logo im PNG-Format
- `logo-black.jpg` - Schwarzes Logo im JPG-Format
- `logo-blue.png` - Blaues Logo im PNG-Format

## Integrationshinweise

Die Logo-Dateien werden in verschiedenen Komponenten der Anwendung verwendet:

- **Header**: Verwendet typischerweise `logo-white.png` für dunkle Header-Hintergründe
- **Footer**: Verwendet typischerweise `logo-black.png` für helle Footer-Hintergründe
- **HeroSplit**: Kann `logo-blue.png` für visuelle Hervorhebung verwenden

Stellen Sie sicher, dass die entsprechenden Logo-Varianten in den Komponenten referenziert werden, um eine konsistente Darstellung zu gewährleisten.
