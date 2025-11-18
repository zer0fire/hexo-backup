const brandCon = document.querySelector("#navbar .container");
if (brandCon) {
  const root = document.createElement("div");
  root.classList = ["intro"];
  root.id = "react-root";
  const firstChild = brandCon.firstElementChild;
  brandCon.insertBefore(root, firstChild.nextSibling);
}
