# UniPa — Noi siamo questi

Sito vetrina dell'Università degli Studi di Palermo su **Didattica**, **Ricerca** e **Terza Missione**.
Sito statico (HTML/CSS/JS, nessuna dipendenza da installare), pubblicabile gratuitamente con GitHub Pages.

## Struttura
- `index.html` — pagina e testi delle sezioni
- `js/data.js` — contenuti modificabili (IT): 12 aree di ricerca, dipartimenti, cluster, progetti in evidenza
- `en/index.html` + `js/data.en.js` — versione inglese (le modifiche ai testi vanno fatte in entrambe le lingue)
- `js/main.js` — interazioni (esploratore dipartimenti, schede, contatori)
- `css/style.css` — grafica
- `assets/` — favicon e immagine di anteprima per i social

## Anteprima locale
```
python -m http.server 8123
```
poi apri http://localhost:8123

## Pubblicazione su GitHub Pages
1. Crea un repository su github.com (es. `unipa`), pubblico.
2. Da questa cartella:
   ```
   git remote add origin https://github.com/<utente>/unipa.git
   git push -u origin main
   ```
3. Su GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.
4. Dopo 1–2 minuti il sito è online su `https://<utente>.github.io/unipa/`.

## Fonti dei contenuti
Presentazione "Ricerca Dipartimenti UniPa", sintesi per PIF Horizon Europe, mappa delle competenze sui progetti europei, unipa.it.
I numeri generali (studenti, corsi) vanno verificati e aggiornati periodicamente.

## Foto
Le foto in `assets/img/` provengono da Wikimedia Commons con licenze CC BY / CC BY-SA: i crediti sono nel piè di pagina del sito e in `assets/img/credits.json`. Per sostituirle con foto ufficiali dell'ateneo basta mantenere gli stessi nomi file (versioni 800 e 1600 px, formato .webp).
