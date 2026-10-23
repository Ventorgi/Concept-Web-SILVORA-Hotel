const fs=require('node:fs');
const css='<link rel="stylesheet" href="assets/css/animations.css">';
const js='<script src="assets/js/animations.js" defer></script>';
for(const file of [...fs.readdirSync('.').filter(name=>name.endsWith('.html')),'generate.cjs']){
  let content=fs.readFileSync(file,'utf8');
  if(!content.includes('assets/css/animations.css'))content=content.replace('</head>',css+js+'</head>');
  fs.writeFileSync(file,content);
}
// The shared viewer replaces the old Hotelul-only implementation.
const script=fs.readFileSync('assets/js/script.js','utf8').split(/\r?\n/).filter(line=>!line.startsWith("const dialog=document.querySelector('.lightbox')")&&!line.startsWith("if('IntersectionObserver'in window&&!motion.matches)")).join('\n');
fs.writeFileSync('assets/js/script.js',script);
