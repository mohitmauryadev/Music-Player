//  let newelement = document.createElement('h2');
//         newelement.innerHTML = "BBD University Lucknow";
//         newelement.style.cssText = "color:green;padding:10px;background-color:yellow";
//         let bodytag = document.querySelector('body');
//         bodytag.appendChild(newelement);
let trending = document.querySelector('.songslist1');
let trending_song = document.createElement('div');
trending_song.innerHTML = '<div id="card"><img src="img/home.png" id="playbutton"><img src="songs/cover (3).jpg" id="card_img"><h3 id="song_name">Song name</h3><p id="singer_name">Artist name</p></div>';
trending.appendChild(trending_song);
let card = document.getElementById('card');
// card.style.cssText = "margin:10px"

