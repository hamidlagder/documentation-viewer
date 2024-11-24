import { loadSidebar, loadContent } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize sidebar and load default content
  loadSidebar();
  const defaultFile = './docs/introduction.md';
  loadContent(defaultFile);

  // Handle navigation
  document.getElementById('sidebar').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const filePath = e.target.getAttribute('data-file');
      loadContent(filePath);
    }
  });
});
