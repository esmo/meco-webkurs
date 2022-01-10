// let customElements = document.querySelectorAll('[href]');
let customElements = document.querySelectorAll('[data-src]');
console.log("customElements", customElements)
customElements.forEach((element) => {
  console.log("fetching", element.data-src)
  fetch(element.data-src)
    .then(response => response.text())
    .then((data) => {
      element.outerHTML = data;
    })
});
