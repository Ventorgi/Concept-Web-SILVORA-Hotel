const fs = require('node:fs');
const video = '<video id="hero-video" muted loop playsinline preload="none" poster="assets/images/hotel-video-poster.jpg" data-src="assets/videos/hotel-exterior.mp4" aria-label="Filmare aeriană a unui hotel montan, văzut în întregime"></video>';
const button = '<button type="button" id="video-toggle" aria-controls="hero-video" hidden>Pornește video</button>';
for (const file of ['index.html', 'generate.cjs']) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<img class="hero-photo"[^>]*>|<video id="hero-video"[^>]*><\/video>/, video);
  content = content.replace(/<button type="button" id="video-toggle"[^>]*>[\s\S]*?<\/button>/, '');
  content = content.replace(/(<div class="hero-bottom">[\s\S]*?)(<\/div><\/section>)/, '$1' + button + '$2');
  content = content.replace(/<link rel="preload" as="image" href="assets\/images\/hotel-exterior-4-etaje.jpg"[^>]*>/, '<link rel="preload" as="image" href="assets/images/hotel-video-poster.jpg">');
  fs.writeFileSync(file, content);
}
