const btn = document.getElementById("surpriseBtn");
const card = document.getElementById("nd1");
const card1 = document.getElementById("birthdayCard");
const text =
  " Hôm nay là một ngày đặc biệt. Chúc bản thân tuổi mới luôn kiên trì với mục tiêu của mình nhé!";
const Lay = document.querySelector(".nd p");
function startTyping() {
  Lay.innerHTML = " ";
  let i = 0;
  function Typing() {
    if (i < text.length) {
      Lay.innerHTML += text.charAt(i);
      i++;
      setTimeout(Typing, 100); // Tốc độ gõ chữ (miligiây)
    }
  }
  Typing();
}
btn.addEventListener("click", () => {
  card.classList.toggle("open");
  card1.classList.toggle("open");
  startTyping();
});
