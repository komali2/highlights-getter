(function(){

const highlights = [];
const ASINs = [];

const BASE_URL = 'https://read.amazon.com/kp/notebook';


function generateASINUrl(ASIN) {
  return `${BASE_URL}?asin=${ASIN}&contentLimitState=&`;
}

function scrapePage(virtualDocument) {
  virtualDocument.querySelectorAll('#highlight').forEach((el) => {
    const metadata = el.closest('.a-spacing-base').querySelector('#annotationNoteHeader').innerText;
    const highlightText = el.innerText;
    const title = virtualDocument.querySelector('h3.kp-notebook-metadata').textContent;
    const author = virtualDocument.querySelector('p.kp-notebook-metadata.a-spacing-none').textContent;
    highlights.push({ metadata, highlightText, title, author });
  });
};

function getAllASIN() {
  document.querySelectorAll('[data-get-annotations-for-asin]').forEach((el) => {
    ASINs.push(JSON.parse(el.dataset.getAnnotationsForAsin).asin);
  });
};

function createHtmlDocument(htmlString) {
  const htmlElem = document.createElement('html');
  htmlElem.innerHTML = htmlString;
  return htmlElem;
}

function getResponseForBook(ASIN) {
  return fetch(generateASINUrl(ASIN), { mode: 'no-cors' });
}

function getPageForResponse(response) {
  return response.text();
}

function getResponses() {
  return Promise.all(ASINs.map(async (ASIN) => {
    return getResponseForBook(ASIN);
  }));
}

function getPages(responses) {
  return Promise.all(responses.map(async (response) => {
    return getPageForResponse(response);
  }));
}

function copyToClipboard(str) {
  navigator.clipboard.writeText(str);
}

async function main() {
  getAllASIN();
  const pages = await getPages( await getResponses(ASINs));
  const virtualDocuments = pages.map(createHtmlDocument);
  virtualDocuments.forEach(scrapePage);
  copyToClipboard(JSON.stringify(highlights));
  alert('done! content is in your clipboard.');
}
  main();
})();
