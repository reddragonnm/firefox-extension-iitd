function moodleFillTextbox() {
  console.log("Hello world");

  const form = document.querySelector("form#login");
  const textBox = form.querySelector("input[type='text']#valuepkg3");

  let text = "";
  for (let child of form.childNodes) {
    if (child.nodeType == Node.TEXT_NODE) {
      text += child.textContent.trim();
    }
  }

  const match = text.match(/\d+/g);
  const a = parseInt(match[0]);
  const b = parseInt(match[1]);
  let ans = null;

  if (text.includes("add")) ans = a + b;
  else if (text.includes("subtract")) ans = a - b;
  else if (text.includes("first")) ans = a;
  else if (text.includes("second")) ans = b;

  textBox.value = ans?.toString();
}

try {
  moodleFillTextbox();
} catch {
  window.onload = moodleFillTextbox;
}
