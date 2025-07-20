
const songs = [
  {
    name: "Achhutam Keshvam",
    artist: "ALKA YAGNIK",
    img: "img/achhutam_kesh.jpg",
    src: "songs/achhutam_keshvam.mp3"
  },
  {
    name: "Chhatrapati Shivaji Maharaj",
    artist: "Mohit Parashar",
    img: "img/shivaji_maharaj.jpg",
    src: "songs/Chhatrapati_shiva_ji.mp3"
  },{
    name: "Shree Krishna flute sound",
    artist: "Unknown Artist",
    img: "img/flute.jpg",
    src: "songs/flute_sound.mp3"
  },
  {
    name: "Gyan Ke Parvat",
    artist: "Ravindra Jain",
    img: "img/babyRam.jpg",
    src: "songs/Gyan_ke_parvat.mp3"
  },
   {
    name: "Kab Te Niharat",
    artist: "Shreya Ghoshal",
    img: "img/v.jpg",
    src: "songs/kab_te_niharat.mp3"
  },
  {
    name: "Lake Yaari Na Ginaye",
    artist: "Dhanda Nyoliwala",
    img: "img/rasiyan_banda.jpg",
    src: "songs/lake_yaari_ginaye.mp3"
  },{
    name: "Shree Krishna flute sound",
    artist: "Unknown Artist",
    img: "img/ye_katha.jpeg",
    src: "songs/flute_sound.mp3"
  },
  {
    name: "Mahabharat Sound",
    artist: "Unknown Artist",
    img: "img/mahabharat_flute.jpg",
    src: "songs/mahabharat_sound.mp3"
  },
   {
    name: "Mujhe Aisa Mila Moti",
    artist: "Lata Mangeshkar",
    img: "img/mujhe_aisa_mila_moti.jpg",
    src: "songs/Mujhe_aisa_mila_moti.mp3"
  },
  {
    name: "Shyama Aan Baso ",
    artist: "Tripti Shakya",
    img: "img/shyama_aan_baso.jpg",
    src: "songs/radhe_krishna_hare_hare.mp3"
  },{
    name: "Ram Siya Ram",
    artist: "Sachet Tandon",
    img: "img/ram_siya_ram.jpg",
    src: "songs/ram_siya_ram.mp3"
  },
  {
    name: "Siva Mantra",
    artist: "Tanvi senjaliya",
    img: "img/shiva_mantra.webp",
    src: "songs/shiva_mantra.mp3"
  },
   {
    name: "Kab Te Niharat",
    artist: "Shreya Ghoshal",
    img: "img/kab_te_niharat.jpg",
    src: "songs/kab_te_niharat.mp3"
  },
  {
    name: "Teri Maya Ka Na Paya",
    artist: "Gopal Krishna",
    img: "img/teri_maya_ka_na.webp",
    src: "songs/teri_maya_ka_na_paya.mp3"
  },{
    name: "Tu Rooh Hai ",
    artist: "Neeti Mohan",
    img: "img/tu_rooh_hai_to.jpg",
    src: "songs/tu_rooh_hai_to.mp3"
  },
  {
    name: "Tu Nahi Jo In Lamho",
    artist: "Mohit Chauhan",
    img: "img/tu_nahi_jo.webp",
    src: "songs/tu_nahi_jo.mp3"
  },
   {
    name: "Zihal E Miskin",
    artist: "Lata Mangeshkar",
    img: "img/Zihal_e.jpg",
    src: "songs/Zihal_maski_makumbaranjis.mp3"
  }
];

let currentIndex = 0;

const songListDiv = document.getElementById("songList");
const audio = document.getElementById("audioPlayer");
const songImg = document.getElementById("songImg");
const songName = document.getElementById("songName");
const songArtist = document.getElementById("songArtist");

function loadSong(index) {
  const song = songs[index];
  songImg.src = song.img;
  songName.textContent = song.name;
  songArtist.textContent = song.artist;
  audio.src = song.src;
  audio.play();
}

function togglePlay() {
  if (audio.src === "") return;

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
}

// Create song list
songs.forEach((song, index) => {
  const card = document.createElement("div");
  card.className = "song-card";
  card.innerHTML = `
    <img src="${song.img}" alt="${song.name}">
    <h4>${song.name}</h4>
    <p>${song.artist}</p>
  `;
  card.onclick = () => {
    currentIndex = index;
    loadSong(index);
  };
  songListDiv.appendChild(card);
});
