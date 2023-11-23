const circle = document.createElement("div");
document.body.appendChild(circle);
const header = document.querySelector("header");
circle.classList = ["circle"];
document.body.insertBefore(circle, header);

// circle.getClientRects();
window.addEventListener("mousemove", (e) => {
  //   circle.style.transform = `translate(${e.clientX - 20}px, ${
  //     e.clientY - 20
  //   }px)`;
  circle.style.top = `${e.clientX - 20}px`;
  circle.style.left = `${e.clientY - 20}px`;
  //   console.log(`translate(${e.clientX}, ${e.clientY})`);
});
// window.addEventListener("mouseleave", (e) => {
//   circle.style.opacity = 0;
// });
// window.addEventListener("mouseenter", (e) => {
//   circle.style.opacity = 255;
// });
