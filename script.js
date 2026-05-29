const pageOrder = ["index.html", "toc.html", "preface.html"];

function currentPageName() {
  const name = window.location.pathname.split("/").pop();
  return name || "index.html";
}

function movePage(direction) {
  const current = currentPageName();
  const currentIndex = pageOrder.indexOf(current);
  if (currentIndex === -1) return;

  const nextIndex = currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= pageOrder.length) return;
  window.location.href = pageOrder[nextIndex];
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") movePage(1);
  if (event.key === "ArrowLeft") movePage(-1);
});
