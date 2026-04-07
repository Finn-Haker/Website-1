function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    // komplette HTML Seite laden (mit CMS Text oben)
    const res = await fetch(window.location.href);
    const text = await res.text();

    // Frontmatter erkennen
    const match = text.match(/---([\s\S]*?)---/);

    if (!match) return;

    const frontmatter = match[1];

    // Body Text aus Frontmatter holen
    const bodyMatch = frontmatter.match(/body:\s*([\s\S]*)/);

    if (!bodyMatch) return;

    const content = bodyMatch[1].trim();

    // In Website einsetzen
    document.getElementById("content").innerHTML = content;

  } catch (e) {
    console.log("CMS Loader Fehler", e);
  }
});

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