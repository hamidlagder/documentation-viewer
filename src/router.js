export function loadSidebar() {
  const files = [
    { name: 'Introduction', path: './docs/introduction.md' },
    { name: 'Getting Started', path: './docs/getting-started.md' },
    { name: 'Advanced Topics', path: './docs/advanced-topics.md' },
  ];

  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = files
    .map(file => `<a href="#" data-file="${file.path}">${file.name}</a>`)
    .join('<br>');
}

export function loadContent(filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((markdown) => {
      const content = marked(markdown); // Convert markdown to HTML
      document.getElementById('content').innerHTML = content;
    })
    .catch((error) => {
      console.error('Error loading content:', error);
      document.getElementById('content').innerHTML = `<p>Failed to load content.</p>`;
    });
}

export function loadSidebar() {
  const files = [
    { name: 'Introduction', path: './docs/introduction.md' },
    { name: 'Getting Started', path: './docs/getting-started.md' },
    { name: 'Advanced Topics', path: './docs/advanced-topics.md' },
    { name: 'Project Plan', path: './docs/plan.md' },  // New link to the Plan page
  ];

  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = files
    .map(file => `<a href="#" data-file="${file.path}">${file.name}</a>`)
    .join('<br>');
}
