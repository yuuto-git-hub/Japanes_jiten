function search() {
  const key = document.getElementById("search").value.trim();
  const res = Object.entries(words)
    .filter(([k, v]) => k.includes(key) || v.yomi.includes(key) || v.imi.includes(key))
    .map(([k, v]) => `<div class='entry'><b>${k}${v.yomi ? "（" + v.yomi + "）" : ""}</b><br>意味：${v.imi}<br>例文：${v.rei || ""}${v.rui ? "<br>類義語：" + v.rui : ""}${v.tai ? "<br>対義語：" + v.tai : ""}</div>`)
    .join("");
  document.getElementById("result").innerHTML = res || "見つかりません";
}

function showAll() {
  const sorted = Object.entries(words).sort(([a], [b]) => a.localeCompare(b, "ja"));
  const html = sorted.map(([k, v]) => `<div class='entry'><b>${k}${v.yomi ? "（" + v.yomi + "）" : ""}</b><br>意味：${v.imi}<br>例文：${v.rei || ""}${v.rui ? "<br>類義語：" + v.rui : ""}${v.tai ? "<br>対義語：" + v.tai : ""}</div>`).join("");
  document.getElementById("result").innerHTML = html;
}

function startQuiz() {
  const keys = Object.keys(words);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  const ans = prompt("意味：" + words[randKey].imi + "\\nこの言葉は？");
  if (ans === randKey) {
    alert("正解！");
  } else {
    alert("不正解。正解は：" + randKey);
  }
}

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
});
