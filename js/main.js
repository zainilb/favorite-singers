// JSON-style object containing my favorite singers.
const musicData = {
  singers: [
    { name: "Arijit Singh", hometown: "Jiaganj, India", songs: "Tum Hi Ho, Kesariya" },
    { name: "Diljit Dosanjh", hometown: "Dosanjh Kalan, India", songs: "Lover, G.O.A.T." },
    { name: "The Weeknd", hometown: "Toronto, Canada", songs: "Blinding Lights, Starboy" },
    { name: "Adele", hometown: "London, England", songs: "Hello, Rolling in the Deep" }
  ]
};

// Run this when the webpage finishes loading.
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("singerTable");

  // Loop through the singers and add one row for each singer.
  musicData.singers.forEach(function (singer) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${singer.name}</td><td>${singer.hometown}</td><td>${singer.songs}</td>`;
    tableBody.appendChild(row);
  });
});
