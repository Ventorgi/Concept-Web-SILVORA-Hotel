# SILVORA Hotel

Site de prezentare pentru portofoliul VENTORGI, în HTML5, CSS și JavaScript vanilla. Exact cinci pagini, fără backend, framework sau build obligatoriu. Nu a fost publicat și nu au fost efectuate commit/push.

## Deschidere

Deschide acest folder în VS Code. Cu extensia **Live Server** instalată, click dreapta pe `index.html` → **Open with Live Server**. Navighează folosind meniul. Fișierele pot fi deschise și direct în browser; recomandarea pentru verificare este Live Server.

## Structură și editare

- `index.html`, `camere.html`, `hotelul.html`, `restaurant.html`, `contact.html`: conținut semantic complet, header și footer incluse în fiecare fișier.
- `assets/css/style.css`: stiluri responsive; paleta se schimbă din variabilele `:root`.
- `assets/js/script.js`: meniu mobil, header, video, taburi și lightbox.
- `assets/images/`: fotografii locale, variante de 640px, inventarul și dimensiunile lor.
- `assets/videos/forest.mp4`: videoclip local, folosit numai pe pagina Hotelul.
- `assets/fonts/`: Manrope și Cormorant Garamond, WOFF2 latin și latin-ext, cu licențele OFL.
- `assets/icons/`: logo original, variantă ivoire și favicon SVG.

Textele, contactele și tarifele pot fi schimbate direct în HTML. Păstrează aceleași tarife în categoriile de camere, cardurile camerelor și pagina Acasă. Datele de contact sunt prezente în Contact și în toate cele cinci footeruri. Emailul folosește domeniul rezervat `.example`; adresa este inventată pentru portofoliu.

`generate.cjs` este un utilitar opțional de autorare, nu o dependență de rulare. Generează cele cinci pagini; `enhance.cjs` adaugă dimensiunile reale și srcset. După schimbarea generatorului, rulează `node generate.cjs`, apoi `node enhance.cjs`. Schimbările manuale în HTML sunt înlocuite prin regenerare.

## Comportament

Toate butoanele de rezervare au `type="button"` și nu execută acțiuni. Telefonul, emailul, simbolurile sociale și informațiile juridice sunt elemente statice. Formularul nu transmite, nu stochează și nu înregistrează date; submit-ul este oprit, inclusiv Enter în câmpurile text. Controalele native date/select și textarea rămân utilizabile. Nu există endpointuri, analytics, embeduri sau cookie banner.

Meniul mobil este un panou de navigare nemodal, cu Escape și `aria-expanded`. Taburile folosesc săgeți, Home și End. Fără JavaScript, toate cele patru etaje sunt vizibile. Linkurile `camere.html#etaj-2` selectează etajul. Lightbox-ul folosește dialog nativ, captează focusul, permite Escape/săgeți și restaurează focusul. Fără JavaScript, imaginile galeriei pot fi deschise direct.

Primul ecran folosește `assets/videos/hotel-exterior.mp4`: 20 de secunde de filmare reală din dronă cu Grandhotel Starý Smokovec, Slovacia, ales ca hotel montan reprezentativ. Filmarea nu documentează SILVORA. Redare automată fără sunet, în buclă, cu buton de pauză; preferința reduced motion afișează posterul până la pornirea manuală. Pe mobil, clipul apare integral deasupra textului pentru a nu decupa clădirea. Poster local: `assets/images/hotel-video-poster.jpg`. Clipul de pădure rămâne numai pe pagina Hotelul.

## Verificări și limite

Executat: `node --check assets/js/script.js`, `node verify.cjs`. Verificarea statică acoperă exact cinci pagini, un H1/pagină, ID-uri unice, linkuri și ancore locale, imagini cu alt și dimensiuni, toate numerele camerelor, tarifele, butoanele și semnăturile MP4/WOFF2. Cele 20 de camere au distribuția 8 standard / 8 cu balcon / 4 deluxe. Fotografii inspectate prin planșă de contact; posterul video inspectat separat.

**Nu au fost executate verificări în browser sau prin Live Server:** instrumentul de browser nu a avut niciun browser disponibil, iar deschiderea previzualizării a fost respinsă cu „Browser is not available: iab”. Rămân de verificat vizual lățimile 360, 390, 430, 768, 1024 și 1440px, zoom 200%, contrastul în context, consola, redarea efectivă video, tastatura, lightbox-ul, meniul mobil, Enter și reduced motion. Nu sunt declarate ca teste trecute.

Nu lipsesc fișiere media referite în HTML. Clipul de pe Acasă este H.264/yuv420p, 1600×900, 24 fps, 20 secunde, fără audio, cu faststart, aproximativ 9,3 MB. Decodarea integrală cu FFmpeg a trecut; au fost inspectate cadrele la 0, 8, 16 și 24 de secunde din sursă. Filmarea de pădure (21,6 MB) se încarcă la cerere pe pagina Hotelul. Redarea și aspectul final în browser rămân neverificate: inventarul browserelor disponibil în sesiune este gol. Fotografiile de interior și culinare sunt reprezentative; nu documentează o proprietate reală și nu se pretinde că fiecare cameră are o fotografie unică.

## Animații și fotografii mărite

Toate cele cinci pagini încarcă `assets/css/animations.css` și `assets/js/animations.js`. Apariții la derulare, o singură dată, cu decalaje de maximum 225 ms; tranziții discrete pentru butoane, linkuri, meniul mobil și schimbarea etajului. Fotografiile au doar un zoom subtil de 2,5% la hover, depășind ușor chenarul inițial, fără decupare, deschidere la click sau galerie modală. Fundalul video rămâne separat. Preferința reduced motion dezactivează animațiile; fără JavaScript conținutul rămâne vizibil. `install-animations.cjs` sincronizează includerile și generatorul, eliminând implementarea veche a galeriei. După regenerare, rulează și `node update-hero.cjs` pentru posterul video actual.

Verificare: sintaxa celor două scripturi și a generatorului, cele cinci pagini și toate legăturile locale au trecut. Verificarea vizuală și interacțiunile în browser rămân de efectuat; nu există un browser disponibil în sesiune.

