function setItems() {
  let musicList = [
    {
      id: 0,
      img: "./imgs/img1.jpg",
      title: "cdg-marawan mousa",
      ssrc: "songs/cdg.mp3",
    },
    {
      id: 1,
      img: "./imgs/img2.jpg",
      title: "elgalah-marawan mousa",
      ssrc: "songs/galalh.mp3",
    },
    {
      id: 2,
      img: "./imgs/img3.jpg",
      title: "tesla-marawan mousa",
      ssrc: "songs/tesla.mp3",
    },
  ];
  let list = JSON.stringify(musicList);
  window.localStorage.setItem("songs", list);
}
window.onload = () => {
  setItems();
};
let songs = JSON.parse(window.localStorage.getItem("songs"));
let len = songs.length;
console.log(songs);
let song = document.getElementById("song");
let backBtn = document.getElementById("back");
let forwardBtn = document.getElementById("forward");
let playBtn = document.getElementById("play");
let img = document.getElementById("sImg");
let sname = document.getElementById("sname");
let volume = document.getElementById("volume");
let iconPlay = document.querySelector("#play ion-icon");
let audiosrc = document.getElementById("audioSource");
let isPlayed = true;
let cur = 0;
let lastPlayed =
  typeof window.localStorage.getItem("lastPlayes") == typeof null
    ? 0
    : window.localStorage.getItem("lastPlayed");
console.log(lastPlayed);
sname.innerHTML = songs[lastPlayed].title;
img.src = songs[lastPlayed].img;

volume.addEventListener("input", (e) => {
  song.volume = e.target.value;
});

playBtn.onclick = function () {
  if (isPlayed) {
    iconPlay.setAttribute("name", "play-circle-outline");
  } else {
    iconPlay.setAttribute("name", "play-outline");
  }
  isPlayed = !isPlayed;
  changeSong(lastPlayed);
  isPlayed ? song.pause() : song.play();
};

forwardBtn.onclick = () => {
  if (cur < len - 1) {
    cur++;
    changeSong(cur);
  }
};

backBtn.onclick = () => {
  if (cur > 0) {
    cur--;
    changeSong(cur);
  }
};

function changeSong(i) {
  sname.innerHTML = songs[i].title;
  img.setAttribute("src", songs[i].img);
  audiosrc.src = songs[i].ssrc;
  song.load();
  song.play();
  window.localStorage.setItem("lastPlayed", i);
}
