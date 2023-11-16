fetch("https://picsum.photos/v2/list")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  });

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();

    data.forEach((item) => {
      const img = document.createElement("img");
      img.src = `https://picsum.photos/id/${item.id}/${item.width}/${item.height}`;
      img.alt = item.author;

      document.body.appendChild(img);
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
  }
});
