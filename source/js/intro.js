if (window.location.pathname === "/") {
  const intro = document.createElement("div");
  intro.classList = ["intro"];

  intro.innerHTML = `
    <h1>Alex Wang</h1>
    <h3>A Software Developer who always wants to be better in tech and life.</h3>
    
    <a href="/about">About Me</a>
    <a href="https://github.com/zer0fire" target="_blank">Github</a>
    `;

  const container = document.querySelector(
    ".banner-text.text-center.fade-in-up .h2"
  );
  container.appendChild(intro);
}
