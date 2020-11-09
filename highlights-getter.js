const highlights = [];
const ASINs = new Set();



function scrapePage() {
  document.querySelectorAll('#highlight').forEach((el) => {
    const metadata = el.closest('.a-spacing-base').querySelector('#annotationNoteHeader').innerText;
    const highlightText = el.innerText;
    const title = document.querySelector('h3.kp-notebook-metadata').textContent;
    const author = document.querySelector('p.kp-notebook-metadata.a-spacing-none').textContent;
    highlights.push({ metadata, highlightText, title, author });
  });
};

function getAllASIN() {
  document.querySelectorAll('[data-get-annotations-for-asin]').forEach((el) => {
    ASINs.add(JSON.parse(el.dataset.getAnnotationsForAsin).asin);
  });
};
