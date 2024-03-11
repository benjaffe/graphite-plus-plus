// Add .extstyler and hostname as classes to <html> tag
document.documentElement.classList.add(
  "extstyler",
  ...location.hostname.split(".").reverse().slice(1).reverse()
);

// Graphite
function isGraphitePr() {
  return (
    window.location.hostname === "app.graphite.dev" &&
    window.location.pathname.includes("/github/pr/")
  );
}

function makeGithubPrUrl() {
  const pieces = window.location.pathname.replace("/github/pr/", "").split("/");
  return `https://github.com/${pieces[0]}/${pieces[1]}/pull/${
    pieces[2].split("/")[0]
  }/`;
}

function makeGithubMultiPrUrl() {
  return `[github PR](${makeGithubPrUrl()}) / [on graphite](${window.location.toString()})`;
}

// fn determines whether the element should hide itself
function renderButton(text, onclick, container, fn) {
  const existingElem = document.getElementById(`Button-${text}`);
  if (existingElem) {
    existingElem.style.display = fn() ? "block" : "none";
    return;
  }

  // If we're here, we need to make a new element
  const elem = document.createElement("a");
  elem.onclick = onclick;
  elem.textContent = text;
  elem.style.display = fn() ? "block" : "none";
  elem.style.padding = "0px 8px";
  elem.style.fontWeight = "normal";
  elem.style.fontSize = "12px";
  elem.style.opacity = 0.75;
  elem.id = `Button-${text}`;
  container.appendChild(elem);
}

function renderUI() {
  const outerWrapper = document.querySelector(".header__nav");
  if (!outerWrapper) {
    setTimeout(renderUI, 500);
    return;
  }

  let wrapper = document.getElementById("extra-ui-wrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = "extra-ui-wrapper";
    wrapper.style.display = "flex";
  }
  if (!outerWrapper.querySelector("#extra-ui-wrapper")) {
    outerWrapper.prepend(wrapper);
  }
  renderButton(
    "Copy Github Link",
    () => navigator.clipboard.writeText(makeGithubPrUrl()),
    wrapper,
    isGraphitePr
  );
  renderButton(
    "Open in Github",
    () => window.open(makeGithubPrUrl()),
    wrapper,
    isGraphitePr
  );
  renderButton(
    "Copy multi-link md",
    () => navigator.clipboard.writeText(makeGithubMultiPrUrl()),
    wrapper,
    isGraphitePr,
  );
  setTimeout(renderUI, 500); // rerender every second
}

if (window.location.host.includes("app.graphite.dev")) {
  renderUI();
}
