chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleDebugCSS,
  });
});

function toggleDebugCSS() {
  const STYLE_ID = "__css_debugger__";
  const existing = document.getElementById(STYLE_ID);

  if (existing) {
    existing.remove();
    return;
  }

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    "*:not(path):not(g) {",
    "  color: hsla(210, 100%, 100%, 0.9) !important;",
    "  background: hsla(210, 100%, 50%, 0.5) !important;",
    "  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;",
    "  box-shadow: none !important;",
    "  filter: none !important;",
    "}",
  ].join("\n");
  document.head.appendChild(style);
}
