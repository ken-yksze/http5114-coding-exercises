const url = "insult.php";
const insultText = document.getElementById("insult-text");
// const insultButton = document.querySelectorAll("#insult button")[0];
const loading = document.getElementById("loading");
const container = document.getElementById("container");

// insultButton.addEventListener("click", function () {
container.addEventListener("click", function () {
  loading.style.display = "block";
  insultText.style.display = "none";

  const fetchPromise = fetch(url, { mode: "no-cors" })
    .then((response) => response.json())
    .then((data) => {
      insultText.innerHTML = data.insult;
      loading.style.display = "none";
      insultText.style.display = "inline";
    });
});
