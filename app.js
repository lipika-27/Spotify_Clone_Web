const music = new Audio('audio/1.mp3');

const songs = [
    {
        id:'1',
        songName: ` on my way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName: ` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id:'3',
        songName: ` Cartoon- On & On <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/3.jpg"
    },
    {
        id:'4',
        songName: ` Warriya - Mortals <br>
        <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg"
    },
    {
        id:'5',
        songName: ` Ertugrul Gazi <br>
        <div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg"
    },
    {
        id:'6',
        songName: ` Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster: "img/6.jpg"
    },
    {
        id:'7',
        songName: ` Agar Tum Sath Ho <br>
        <div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg"
    },
    {
        id:'8',
        songName: ` Suna Hai <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "img/8.jpg"
    },
    {
        id:'9',
        songName: ` Dilbar <br>
        <div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg"
    },
    {
        id:'10',
        songName: ` Duniya <br>
        <div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg"
    },
    {
        id:'11',
        songName: ` Lagdi Lahore Di <br>
        <div class="subtitle">Street Dancer</div>`,
        poster: "img/11.jpg"
    },
    {
        id:'12',
        songName: ` Putt Jatt Da <br>
        <div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg"
    },
    {
        id:'13',
        songName: ` Baarishein <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg"
    },
    {
        id:'14',
        songName: ` Vaaste <br>
        <div class="subtitle">Dhavni Bhanushali</div>`,
        poster: "img/14.jpg"
    },
    {
        id:'15',
        songName: ` Luut Gaye<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg"
    },
    {
        id:'16',
        songName: ` Tu Meri Jindagi Hai <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpg"
    },
    {
        id:'17',
        songName: ` Batao Yaad Hai <br>
        <div class="subtitle">Rahat Fateh</div>`,
        poster: "img/17.jpg"
    },
    {
        id:'18',
        songName: ` Mere Dhol Judaiyan <br>
        <div class="subtitle">Ali Sethi</div>`,
        poster: "img/18.jpg"
    },
    {
        id:'19',
        songName: ` Eh Munde Pagal Na <br>
        <div class="subtitle">Ap Dhillon</div>`,
        poster: "img/19.jpg"
    },
    {
        id:'20',
        songName: ` Rozana <br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/20.jpg"
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
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
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

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
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

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
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
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
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

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
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

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
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