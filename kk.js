const music = new Audio('audio/1.mp3');

const songs = [
    {
        id:'1',
        songName: ` Dil Ibaadat <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/1.jpeg"
    },
    {
        id:'2',
        songName: ` Om Shanti Om <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/2.jpeg"
    },
    {
        id:'3',
        songName: ` Beete Lamhe <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/3.jpeg"
    },
    {
        id:'4',
        songName: ` Tum se Milne <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/4.jpeg"
    },
    {
        id:'5',
        songName: ` Dil kyun <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/5.jpeg"
    },
    {
        id:'6',
        songName: ` Dus Bahane <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/6.jpeg"
    },
    {
        id:'7',
        songName: ` Gori Gori <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/7.jpeg"
    },
    {
        id:'8',
        songName: ` Hai Junoon <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/8.jpeg"
    },
    {
        id:'9',
        songName: ` Ready <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/9.jpeg"
    },
    {
        id:'10',
        songName: ` India Wale <br>
        <div class="subtitle">KK</div>`,
        poster:"img/kkimg/10.jpeg"
    },
    {
        id:'11',
        songName: `Khuda Jaane <br>
        <div class="subtitle">KK</div>`,
        poster:"img/kkimg/11.jpeg"
    },
    {
        id:'12',
        songName: ` Desi Boys <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/12.jpeg"
    },
    {
        id:'13',
        songName: ` Mat Aazma Re <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/13.jpeg"
    },
    {
        id:'14',
        songName: ` Meri Maa <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/14.jpeg"
    },
    {
        id:'15',
        songName: ` Raaz<br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/15.jpeg"
    },
    {
        id:'16',
        songName: ` Party On My Mind <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/16.jpeg"
    },
    {
        id:'17',
        songName: ` Aashiqui2 <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/17.jpeg"
    },
    {
        id:'18',
        songName: ` Jalebi <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/18.jpeg"
    },
    {
        id:'19',
        songName: ` Tu Hi Meri Shab Hai
         <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/19.jpeg"
    },
    {
        id:'20',
        songName: ` Tu Jo Mila <br>
        <div class="subtitle">KK</div>`,
        poster: "img/kkimg/20.jpeg"
    }
]

Array.from(document.getElementsByClassName('song_item')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=> {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-circle-fill');
        masterPlay.classList.add('bi-play-circle-fill');
        
    }
});

const makebackground = () => {
    Array.from(document.getElementsByClassName('song_item')).forEach((el) => {
        el.style.background = 'rgba(120, 120, 120, .0)';
        el.style.color = 'gray';

    })
}

const makeplay = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
        el.classList.remove('bi-pause-fill');
        el.classList.add('bi-play-fill');       
    })
}

const makeopac = () => {
    Array.from(document.getElementsByClassName('opac')).forEach((el)=> {
        el.style.opacity = 0.8;
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=> {
    e.addEventListener('click',(el) => {
        index = el.target.id;
        music.src = `audio/arijitaudi/${index}.mp3`;
        poster_master_play.src = `img/arijitimg/${index}.jpeg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        

        let songtitle = songs.filter((els) => {
            return index == els.id;
        });

        songtitle.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makebackground();
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.background= 'rgba(120, 120, 120, .2)';
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.color= '#fff';

        makeplay();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-fill')
        

        makeopac();
        el.target.style.opacity = 1;

    })
})

//music current time and end time

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',() => {
    let music_dur = music.duration;
    let music_curr = music.currentTime;

    let endmin = Math.floor(music_dur / 60);
    let endsec = Math.floor(music_dur % 60);

    let currmin = Math.floor(music_curr / 60);
    let currsec = Math.floor(music_curr % 60);

    if(endsec < 10) {
        endsec = `0${endsec}`;
    }

    if(currsec < 10) {
        currsec = `0${currsec}`;
    }
    currentstart.innerHTML = `${currmin}:${currsec}`;

    currentend.innerHTML = `${endmin}:${endsec}`;

    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`
});

seek.addEventListener('change',() => {
    music.currentTime = seek.value * music.duration / 100;
});

// volume bar 

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
//let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change',()=> {
    if(vol.value == 0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value >0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value >50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width =`${vol_a}%`;
    // vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a /100;
});


// next and previous song play

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=> {
    if(index == 1) {
        let currmin = 0;
        let currsec = 0;
        music.currentTime = 0.0;

        currentstart.innerHTML = `${currmin}:${currsec}`;
        bar2.style.width = `0%`;
        dot.style.left = `0%`;
    }
    if(index > 1) {
        index -= 1;

        music.src = `audio/arijitaudi/${index}.mp3`;
        poster_master_play.src = `img/arijitimg/${index}.jpeg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');

        let songtitle = songs.filter((els) => {
            return index == els.id;
        });

        songtitle.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makebackground();
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.background= 'rgba(120, 120, 120, .2)';
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.color= '#fff';

        makeplay();
        // el.target.classList.remove('bi-play-fill');
        // el.target.classList.add('bi-pause-fill')
        document.getElementsByClassName('playlistplay')[index-1].classList.remove('bi-play-fill');
        document.getElementsByClassName('playlistplay')[index-1].classList.add('bi-pause-fill');
        

        makeopac();
        el.target.style.opacity = 1;
    }
})

next.addEventListener('click',()=> {
    if(index == 20) {
        let currmin = 0;
        let currsec = 0;
        music.currentTime = 0.0;

        currentstart.innerHTML = `${currmin}:${currsec}`;
        bar2.style.width = `0%`;
        dot.style.left = `0%`;
    }
    if(index < 20) {
        index ++;

        music.src = `audio/arijitaudi/${index}.mp3`;
        poster_master_play.src = `img/arijitimg/${index}.jpeg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');

        let songtitle = songs.filter((els) => {
            return index == els.id;
        });

        songtitle.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makebackground();
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.background= 'rgba(120, 120, 120, .2)';
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.color= '#fff';

        makeplay();
        // el.target.classList.remove('bi-play-fill');
        // el.target.classList.add('bi-pause-fill')
        document.getElementsByClassName('playlistplay')[index-1].classList.remove('bi-play-fill');
        document.getElementsByClassName('playlistplay')[index-1].classList.add('bi-pause-fill');
        

        makeopac();
        el.target.style.opacity = 1;
    }
});

//shuffel repeat and next song play

let shuffel = document.getElementsByClassName('shuffel')[0];

shuffel.addEventListener('click',()=> {
    let a = shuffel.innerHTML;

    switch (a) {
        case "next":
            shuffel.classList.add('bi-arrow-repeat');
            shuffel.classList.remove('bi-music-note-beamed');
            shuffel.classList.remove('bi-shuffle'); 
            shuffel.innerHTML = 'repeat';
            break;
        
        case "repeat":
            shuffel.classList.remove('bi-arrow-repeat');
            shuffel.classList.remove('bi-music-note-beamed');
            shuffel.classList.add('bi-shuffle'); 
            shuffel.innerHTML = 'random';
            break;
    
        case "random":
            shuffel.classList.remove('bi-arrow-repeat');
            shuffel.classList.add('bi-music-note-beamed');
            shuffel.classList.remove('bi-shuffle'); 
            shuffel.innerHTML = 'next';
            break;
    }
})

const next_music = () => {
        if (index == songs.length) {
            index = 1;            
        } else {
            index++;
        }
        music.src = `audio/arijitaudi/${index}.mp3`;
        poster_master_play.src = `img/arijitimg/${index}.jpeg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        

        let songtitle = songs.filter((els) => {
            return index == els.id;
        });

        songtitle.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makebackground();
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.background= 'rgba(120, 120, 120, .2)';
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.color= '#fff';

        makeplay();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-fill')
        

        makeopac();
        el.target.style.opacity = 1;
}

const repeat_music = () => {
    index;

    music.src = `audio/arijitaudi/${index}.mp3`;
    poster_master_play.src = `img/arijitimg/${index}.jpeg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    

    let songtitle = songs.filter((els) => {
        return index == els.id;
    });

    songtitle.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    })

    makebackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background= 'rgba(120, 120, 120, .2)';
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.color= '#fff';

    makeplay();
    el.target.classList.remove('bi-play-fill');
    el.target.classList.add('bi-pause-fill')
    

    makeopac();
    el.target.style.opacity = 1;
}

const random_music = () => {
    index = Math.floor((Math.random() * songs.length) +1);

    music.src = `audio/arijitaudi/${index}.mp3`;
    poster_master_play.src = `img/arijitimg/${index}.jpeg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    

    let songtitle = songs.filter((els) => {
        return index == els.id;
    });

    songtitle.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    })

    makebackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background= 'rgba(120, 120, 120, .2)';
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.color= '#fff';

    makeplay();
    el.target.classList.remove('bi-play-fill');
    el.target.classList.add('bi-pause-fill')
    

    makeopac();
    el.target.style.opacity = 1;
}

music.addEventListener('ended',()=> {
    let b = shuffel.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'random' :
            random_music();
            break;
    
        default:
            next_music();
            break;
    }
})



//popular_song scroll left-right
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
     pop_song.scrollLeft += 310;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 310;
});

//popular_artist scroll left-right
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let items = document.getElementsByClassName('items')[0];

pop_art_right.addEventListener('click',()=>{
    items.scrollLeft += 310;
});

pop_art_left.addEventListener('click',()=>{
    items.scrollLeft -= 310;
});

let menu_active_button = document.getElementById('menu_active_button');
let menu_side = document.getElementsByClassName('menu_side')[0];

menu_active_button.addEventListener('click',() => {
    menu_side.style.transform = "unset";
    menu_active_button.style.opacity = 0;
})

let song_side = document.getElementsByClassName('song_side')[0];

function menuchange(x) {
    if (x.matches) {
        song_side.addEventListener('click',() => {
            menu_side.style.transform = "translateX(-103%)";
            menu_active_button.style.opacity = 1;
        })
    }
}

var x = window.matchMedia("(max-width: 900px)");
menuchange(x) // Call listener function at run time
x.addEventListener(menuchange);