let count = 0;

document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("count").innerText = count;
});
