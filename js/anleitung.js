function ready(callbackFunction) {
  if (document.readyState != "loading") callbackFunction(event);
  else document.addEventListener("DOMContentLoaded", callbackFunction);
}
/* taken from https://fellowtuts.com/html-css/make-a-html-css-js-try-it-yourself-editor/*/
function runCode(sourceId, targetId) {
  var content = document.getElementById(sourceId).value;
  var iframe = document.getElementById(targetId);
  iframe = iframe.contentWindow
    ? iframe.contentWindow
    : iframe.contentDocument.document
    ? iframe.contentDocument.document
    : iframe.contentDocument;
  iframe.document.open();
  iframe.document.write(content);
  iframe.document.close();
  return false;
}

function readTemplates() {
  let customElements = document.querySelectorAll("[data-src]");
  console.log("customElements", customElements);
  customElements.forEach((element) => {
    fetch(element.getAttribute("data-src"))
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        element.outerHTML = data;
      });
  });
}

ready((event) => {
  readTemplates();
  let elements = document.querySelectorAll("code.language-html");
  elements.forEach((element) => {
    element.innerHTML = he.encode(element.innerHTML);
  });
});
