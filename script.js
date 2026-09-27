async function loadGames() {
  const grid = document.getElementById("game-grid");
  if (!grid) return;

  try {
    const res = await fetch("assets/data/games.json");
    if (!res.ok) throw new Error("تعذّر تحميل بيانات الألعاب");
    const games = await res.json();

    games
      .sort((a, b) => a.order - b.order)
      .forEach((game) => grid.appendChild(buildCard(game)));
  } catch (err) {
    grid.innerHTML = `<p class="load-error">تعذّر تحميل الألعاب الشعبية حاليًا. تأكد من فتح الموقع عبر خادم محلي وليس مباشرة من الملفات.</p>`;
    console.error(err);
  }
}

function buildCard(game) {
  const card = document.createElement("article");
  card.className = "game-card";
  card.id = game.id;

  const aliasHtml = (game.aliases || [])
    .map((a) => `<span>${escapeHtml(a)}</span>`)
    .join("");

  card.innerHTML = `
    <span class="order-tag">٠${toArabicDigits(game.order)}</span>
    <div class="game-media">
      <video
        src="${game.video}"
        poster="${game.poster}"
        controls
        preload="metadata"
        playsinline
        aria-label="مقطع فيديو للعبة ${escapeHtml(game.name)}"
      ></video>
    </div>
    <div class="game-body">
      <h3>${escapeHtml(game.name)}</h3>
      ${aliasHtml ? `<div class="aliases">${aliasHtml}</div>` : ""}
      <p class="summary">${escapeHtml(game.summary)}</p>
      <p class="description">${escapeHtml(game.description)}</p>
      <p class="skill">المهارة المكتسبة: ${escapeHtml(game.skill)}</p>
    </div>
  `;
  return card;
}

function toArabicDigits(num) {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(num).split("").map((d) => map[Number(d)] ?? d).join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", loadGames);
