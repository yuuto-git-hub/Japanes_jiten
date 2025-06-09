function search() {
  const input = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  const result = dictionary.filter(item =>
    item.word.includes(input) || item.reading.includes(input)
  );
  if (result.length === 0) {
    resultDiv.innerHTML = "見つかりませんでした。";
  } else {
    result.forEach(item => {
      const entry = document.createElement("div");
      entry.innerHTML = `<strong>${item.word}</strong>（${item.reading}）<br>意味：${item.meaning}<br>例文：${item.example}<hr>`;
      resultDiv.appendChild(entry);
    });
  }
}