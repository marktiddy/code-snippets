//Set up the menu

const menuObject = [
  {
    name: "Wordpress",
    link: "wordpress.html",
  },
  {
    name: "React",
    link: "react.html",
  },
];

const menuArea = document.getElementById("menu");
let menuContent = "";

menuObject.map((m) => {
  const newItem = `<li><a href="${m.link}">${m.name}</a></li>`;
  menuContent = menuContent + newItem;
});

menuArea.innerHTML = menuContent;

//Code for copying
const buttons = document.querySelectorAll("button");
const code = document.querySelectorAll("code");

buttons.forEach((b, index) => {
  b.addEventListener("click", () => {
    const copyText = code[index];
    const elem = document.createElement("textarea");
    elem.value = copyText.innerText;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    const success = document.createElement("p");
    success.classList.add("success");
    success.innerText = "Copied to Clipboard";
    b.appendChild(success);
    setTimeout(() => {
      b.removeChild(success);
    }, 2000);
  });
});
