document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.persistent-highlight').forEach(highlightEl => {
    const id = highlightEl.dataset.noteId;
    const noteContent = highlightEl.dataset.noteText;

    if (!highlightEl || !id || !noteContent) return;

    // --- Create and insert block note only on small screens ---
    let blockNote = null;
    blockNote = document.createElement('div');
    blockNote.className = 'persistent-note-block';
    blockNote.dataset.noteId = id;
    blockNote.innerHTML = `<p>${noteContent}</p>`;

    let parentParagraph = highlightEl.closest('p');
    if(parentParagraph === null){
      let current = highlightEl;
      while (current && current.nextElementSibling) {
        current = current.nextElementSibling;
        if (current.tagName === 'P'){
          parentParagraph = current;
          break
        }
      }
    }
    if (parentParagraph && parentParagraph.parentNode) {
      parentParagraph.parentNode.insertBefore(blockNote, parentParagraph.nextSibling);
    }

    // --- Hover Events ---

    highlightEl.addEventListener('mouseenter', () => {
        blockNote.classList.add('glow-active');
    });

    highlightEl.addEventListener('mouseleave', () => {
        blockNote.classList.remove('glow-active');
    });

    // Inline note hover effects (desktop only)
    blockNote.addEventListener('mouseenter', () => {
      highlightEl.classList.add('highlight-active');
      blockNote.classList.add('glow-active');
    });

    blockNote.addEventListener('mouseleave', () => {
      highlightEl.classList.remove('highlight-active');
      blockNote.classList.remove('glow-active');
    });
  });
});
