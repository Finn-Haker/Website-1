function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Funktion, um Markdown zu HTML zu konvertieren
function renderMarkdown(md) {
  return new showdown.Converter().makeHtml(md);
}

// Lade den Inhalt von home.md dynamisch
fetch('content/home.md')
  .then(response => response.text())
  .then(data => {
    // Frontmatter entfernen (alles zwischen ---)
    const content = data.replace(/---[\s\S]*?---/, '');
    document.getElementById('content').innerHTML = renderMarkdown(content);
  })
  .catch(err => console.error('Fehler beim Laden der Inhalte:', err));