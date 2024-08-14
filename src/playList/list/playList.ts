const collator = new Intl.Collator([], {numeric: true});

const audioSrc = require.context('../../assets/audio', false);
const postersSrc = require.context('../../assets/img/', false);
const backPostersSrc = require.context('../../assets/img/', false);

const audioArr:string[]= [];
const posterArr:string[]= [];
const backPosterArr:string[]= [];

audioSrc.keys().forEach((el, id) => {
    audioArr.push(`./${id}.mp3`);
});

postersSrc.keys().forEach((el, id) => {
    posterArr.push(`./${id}.jpg`);
});

backPostersSrc.keys().forEach((el, id) => {
    backPosterArr.push(`./${id}.jpg`);
});

const audio = audioArr.map((audio) => audioSrc(audio));
const posters = posterArr.map((img) => postersSrc(img));
const backPosters = backPosterArr.map((img) => backPostersSrc(img));

const infoData = {
    0: {
        artist: "Des Rocks",
        title: "Wayne"
    },
    1: {
        artist: "Анимация",
        title: "Родина"
    },
    2: {
        artist: "5sta Family",
        title: "Небо в огне"
    },
    3: {
        artist: "Грот",
        title: "Обитатели рая"
    },
    4: {
        artist: "Nickelback",
        title: "What are you waiting for"
    },
    5: {
        artist: "DEEP-EX-SENSE",
        title: "Инквизитор всегда прав"
    },
    6: {
        artist: "Nickelback",
        title: "If today was your last day"
    },
    7: {
        artist: "Oxxxymiron",
        title: "Колыбельная"
    },
    8: {
        artist: "Dean Levis",
        title: "Waves"
    },
    9: {
        artist: "Depeche Mode",
        title: "Enjoy The Silence"
    },
    10: {
        artist: "Joan Jett and the Blackhearts",
        title: "I Hate Myself For Loving You"
    },
    11: {
        artist: "Joan Jett and the Blackhearts",
        title: "I Love Rock N Roll"
    },
    12: {
        artist: "Joan Jett and the Blackhearts",
        title: "Bad reputation"
    },
    13: {
        artist: "Король и шут",
        title: "Кукла колдуна"
    },
    14: {
        artist: "Linkin Park",
        title: "In The End"
    },
    15: {
        artist: "NF",
        title: "If You Want Love"
    },
    16: {
        artist: "NF",
        title: "Let You Down"
    },
    17: {
        artist: "NF & Britt Nicole",
        title: "Can You Hold Me"
    },
    18: {
        artist: "Voicians",
        title: "Prayer"
    },
    19: {
        artist: "Woodkid",
        title: "Run Boy Run"
    },
    20: {
        artist: "Zemfira",
        title: "Хочешь"
    },
    21: {
        artist: "Lana_Del_Rey",
        title: "Born To Die"
    },
    22: {
        artist: "Lana_Del_Rey",
        title: "Video Games"
    },
    23: {
        artist: "The Killers",
        title: "Mr_Brightside"
    },
    24: {
        artist: "Gotye",
        title: "Somebody That I Used To Know"
    },
    25: {
        artist: "Pink Floyd",
        title: "Another Brick In The Wall"
    },
    26: {
        artist: "Nick Cave The Bad Seeds",
        title: "Brother My Cup Is Empty"
    },
    27: {
        artist: "Nick Cave The Bad Seeds",
        title: "Red Right Hand"
    },
    28: {
        artist: "Oxxxymiron",
        title: "Bashnya iz slonovojj kosti"
    },
    29: {
        artist: "Oxxxymiron",
        title: "Perepleteno"
    },
    30: {
        artist: "Oxxxymiron",
        title: "Privet so dna"
    },
    31: {
        artist: "The Rasmus",
        title: "Ten_Black_Roses"
    },
    32: {
        artist: "Eminem Skylar Grey",
        title: "Tragic Endings"
    },
    33: {
        artist: "Korol_i_SHut",
        title: "Durak i molniya"
    },
    34: {
        artist: "The Rasmus",
        title: "Livin_In_A_World_Without_You"
    },
    35: {
        artist: "Nickelback",
        title: "How_You_Remind_Me"
    },
    36: {
        artist: "Nickelback",
        title: "Next_Contestant"
    },
    37: {
        artist: "Imagine Dragons",
        title: "Natural"
    },
    38: {
        artist: "Persona_5_OST",
        title: "Beneath_the_Mask"
    },
    39: {
        artist: "Lyn",
        title: "Dark_Sun"
    },
    40: {
        artist: "TK_from_Ling_tosite_sigure",
        title: "Unravel"
    },
    41: {
        artist: "Green_Day",
        title: "21 Guns"
    },
    42: {
        artist: "DEEP-EX-SENSE",
        title: "Skazka_o_poteryannom_vremeni"
    },
    43: {
        artist: "GROT",
        title: "Solncu_navstrechu"
    },

}

const playlist = {};

for (let i = 0; i < audio.length; i+=1) {
    const data = oneAudio(i, infoData[i].artist, infoData[i].title);
    playlist[i] = data;
}

// console.log(playlist);

function oneAudio (index: number, artist: string, title:string) {
    return {
        src: audio[index], 
        artist: artist,
        title: title,
        poster: posters[index],
        backPoster: backPosters[index],
    }
}

// const playlist = {
//     0: {
//         src: audio[0], 
//         artist: "Des Rocks",
//         title: "Wayne",
//         poster: posters[0],
//         backPoster: backPosters[0],
//     },
//     1: {
//         src: audio[1], 
//         artist: "Анимация",
//         title: "Родина",
//         poster: posters[1],
//         backPoster: backPosters[1],
//     },
//     2: {
//         src: "./assets/audio/sky_in_fair.mp3", 
//         artist: "5sta Family",
//         title: "Небо в огне",
//         poster: "url(./assets/img/SkyInFair_poster.jpg)",
//         backPoster: "./assets/img/SkyInFair_backposter.jpg",
//     },
//     3: {
//         src: "./assets/audio/Obitateli_raya.mp3", 
//         artist: "Грот",
//         title: "Обитатели рая",
//         poster: "url(./assets/img/Grot_poster.jpg)",
//         backPoster: "./assets/img/Grot_backposter.jpg",
//     },
//     4: {
//         src: "./assets/audio/What_Are_You_Waiting_For.mp3", 
//         artist: "Nickelback",
//         title: "What are you waiting for",
//         poster: "url(./assets/img/What_Are_You_Waiting_For_poster.jpg)",
//         backPoster: "./assets/img/What_Are_You_Waiting_For_backposter.jpg",
//     },
//     5: {
//         src: "./assets/audio/Inkvizitor_vsegda_prav.mp3", 
//         artist: "DEEP-EX-SENSE",
//         title: "Инквизитор всегда прав",
//         poster: "url(./assets/img/deepexsense_poster.jpg)",
//         backPoster: "./assets/img/deepexsense_backposter.jpg",
//     },
//     6: {
//         src: "./assets/audio/If_Today_Was_Your_Last_Day.mp3", 
//         artist: "Nickelback",
//         title: "If today was your last day",
//         poster: "url(./assets/img/if_today_was_your_last_day_poster.jpg)",
//         backPoster: "./assets/img/if_today_was_your_last_day_poster.jpg",
//     },
//     7: {
//         src: "./assets/audio/lullaby.mp3", 
//         artist: "Oxxxymiron",
//         title: "Колыбельная",
//         poster: "url(./assets/img/oxy_poster.jpg)",
//         backPoster: "./assets/img/oxy_backposter.jpg",
//     },
//     8: {
//         src: "./assets/audio/Dean_Levis_-_Waves.mp3", 
//         artist: "Dean Levis",
//         title: "Waves",
//         poster: "url(./assets/img/waves.jpg)",
//         backPoster: "./assets/img/waves.jpg",
//     },
//     9: {
//         src: "./assets/audio/Depeche_Mode_-_Enjoy_The_Silence.mp3", 
//         artist: "Depeche Mode",
//         title: "Enjoy The Silence",
//         poster: "url(./assets/img/poster5.jpg)",
//         backPoster: "./assets/img/poster5.jpg",
//     },
//     10: {
//         src: "./assets/audio/Joan_Jett_and_the_Blackhearts_-_I_Hate_Myself_For_Loving_You.mp3", 
//         artist: "Joan Jett and the Blackhearts",
//         title: "I Hate Myself For Loving You",
//         poster: "url(./assets/img/poster4.jpg)",
//         backPoster: "./assets/img/poster4.jpg",
//     },
//     11: {
//         src: "./assets/audio/Joan_Jett_And_The_Blackhearts_-_I_Love_Rock_N_Roll.mp3", 
//         artist: "Joan Jett and the Blackhearts",
//         title: "I Love Rock N Roll",
//         poster: "url(./assets/img/poster4.jpg)",
//         backPoster: "./assets/img/poster4.jpg",
//     },
//     12: {
//         src: "./assets/audio/Joan_Jett_feat_Blackhearts_-_Bad_reputation.mp3", 
//         artist: "Joan Jett and the Blackhearts",
//         title: "Bad reputation",
//         poster: "url(./assets/img/poster4.jpg)",
//         backPoster: "./assets/img/poster4.jpg",
//     },
//     13: {
//         src: "./assets/audio/Korol_i_SHut_-_Kukla_kolduna.mp3", 
//         artist: "Король и шут",
//         title: "Кукла колдуна",
//         poster: "url(./assets/img/poster3.jpg)",
//         backPoster: "./assets/img/poster3.jpg",
//     },
//     14: {
//         src: "./assets/audio/Linkin_Park_-_In_The_End.mp3", 
//         artist: "Linkin Park",
//         title: "In The End",
//         poster: "url(./assets/img/poster1.jpg)",
//         backPoster: "./assets/img/poster1.jpg",
//     },
//     15: {
//         src: "./assets/audio/NF_-_If_You_Want_Love.mp3", 
//         artist: "NF",
//         title: "If You Want Love",
//         poster: "url(./assets/img/poster5.jpg)",
//         backPoster: "./assets/img/poster5.jpg",
//     },
//     16: {
//         src: "./assets/audio/NF_-_Let_You_Down.mp3", 
//         artist: "NF",
//         title: "Let You Down",
//         poster: "url(./assets/img/poster5.jpg)",
//         backPoster: "./assets/img/poster5.jpg",
//     },
//     17: {
//         src: "./assets/audio/NF_Britt_Nicole_-_Can_You_Hold_Me_.mp3", 
//         artist: "NF & Britt Nicole",
//         title: "Can You Hold Me",
//         poster: "url(./assets/img/poster5.jpg)",
//         backPoster: "./assets/img/poster5.jpg",
//     },
//     18: {
//         src: "./assets/audio/Voicians_-_Prayer.mp3", 
//         artist: "Voicians",
//         title: "Prayer",
//         poster: "url(./assets/img/poster2.jpg)",
//         backPoster: "./assets/img/poster2.jpg",
//     },
//     19: {
//         src: "./assets/audio/Woodkid_Bruno_Bertoli_-_Run_Boy_Run.mp3", 
//         artist: "Woodkid",
//         title: "Run Boy Run",
//         poster: "url(./assets/img/poster2.jpg)",
//         backPoster: "./assets/img/poster2.jpg",
//     },
//     20: {
//         src: "./assets/audio/Zemfira_-_KHochesh.mp3", 
//         artist: "Zemfira",
//         title: "Хочешь",
//         poster: "url(./assets/img/poster4.jpg)",
//         backPoster: "./assets/img/poster4.jpg",
//     },
//     21: {
//         src: "./assets/audio/Lana_Del_Rey_-_Born_To_Die.mp3", 
//         artist: "Lana_Del_Rey",
//         title: "Born To Die",
//         poster: "url(./assets/img/flowers.jpg)",
//         backPoster: "./assets/img/flowers.jpg",
//     },
//     22: {
//         src: "./assets/audio/Lana_Del_Rey_-_Video_Games.mp3", 
//         artist: "Lana_Del_Rey",
//         title: "Video Games",
//         poster: "url(./assets/img/rose.jpg)",
//         backPoster: "./assets/img/rose.jpg",
//     },
//     23: {
//         src: "./assets/audio/The_Killers_-_Mr_Brightside.mp3", 
//         artist: "The Killers",
//         title: "Mr_Brightside",
//         poster: "url(./assets/img/poster9.jpg)",
//         backPoster: "./assets/img/poster9.jpg",
//     },
//     24: {
//         src: "./assets/audio/Gotye_-_Somebody_That_I_Used_To_Know.mp3", 
//         artist: "Gotye",
//         title: "Somebody That I Used To Know",
//         poster: "url(./assets/img/poster9.jpg)",
//         backPoster: "./assets/img/poster9.jpg",
//     },
//     25: {
//         src: "./assets/audio/Pink_Floyd_-_Another_Brick_In_The_Wall_Pt_2.mp3", 
//         artist: "Pink Floyd",
//         title: "Another Brick In The Wall",
//         poster: "url(./assets/img/poster45.jpg)",
//         backPoster: "./assets/img/poster45.jpg",
//     },
//     26: {
//         src: "./assets/audio/Nick_Cave_The_Bad_Seeds_-_Brother_My_Cup_Is_Empty.mp3", 
//         artist: "Nick Cave The Bad Seeds",
//         title: "Brother My Cup Is Empty",
//         poster: "url(./assets/img/peaky-blind.jpg)",
//         backPoster: "./assets/img/peaky-blind.jpg",
//     },
//     27: {
//         src: "./assets/audio/Nick_Cave_The_Bad_Seeds_-_Red_Right_Hand.mp3", 
//         artist: "Nick Cave The Bad Seeds",
//         title: "Red Right Hand",
//         poster: "url(./assets/img/red-right-hands.jpg)",
//         backPoster: "./assets/img/peaky-blinders.jpg",
//     },
//     28: {
//         src: "./assets/audio/Oxxxymiron_-_Bashnya_iz_slonovojj_kosti.mp3", 
//         artist: "Oxxxymiron",
//         title: "Bashnya iz slonovojj kosti",
//         poster: "url(./assets/img/poster.jpg)",
//         backPoster: "./assets/img/poster.jpg",
//     },
//     29: {
//         src: "./assets/audio/Oxxxymiron_-_Perepleteno.mp3",
//         artist: "Oxxxymiron",
//         title: "Perepleteno",
//         poster: "url(./assets/img/poster-perepleteno.jpg)",
//         backPoster: "./assets/img/poster.jpg",
//     },
//     30: {
//         src: "./assets/audio/Oxxxymiron_-_Privet_so_dna.mp3", 
//         artist: "Oxxxymiron",
//         title: "Privet so dna",
//         poster: "url(./assets/img/ox-poster.jpg)",
//         backPoster: "./assets/img/ox-poster.jpg",
//     },
//     31: {
//         src: "./assets/audio/The_Rasmus_-_Ten_Black_Roses.mp3", 
//         artist: "The Rasmus",
//         title: "Ten_Black_Roses",
//         poster: "url(./assets/img/rose-black.jpg)",
//         backPoster: "./assets/img/black-roses.jpg",
//     },
//     32: {
//         src: "./assets/audio/Eminem_Skylar_Grey_-_Tragic_Endings.mp3", 
//         artist: "Eminem Skylar Grey",
//         title: "Tragic Endings",
//         poster: "url(./assets/img/tragic-endings.jpg)",
//         backPoster: "./assets/img/tragic-endings.jpg",
//     },
//     33: {
//         src: "./assets/audio/Korol_i_SHut_-_Durak_i_molniya.mp3", 
//         artist: "Korol_i_SHut",
//         title: "Durak i molniya",
//         poster: "url(./assets/img/korol-shut.jpg)",
//         backPoster: "./assets/img/durak-molnia.jpg",
//     },
//     34: {
//         src: "./assets/audio/The_Rasmus_-_Livin_In_A_World_Without_You.mp3", 
//         artist: "The Rasmus",
//         title: "Livin_In_A_World_Without_You",
//         poster: "url(./assets/img/word-without-you.jpg)",
//         backPoster: "./assets/img/rasmus.jpg",
//     },
//     35: {
//         src: "./assets/audio/Nickelback_-_How_You_Remind_Me.mp3", 
//         artist: "Nickelback",
//         title: "How_You_Remind_Me",
//         poster: "url(./assets/img/nickelback-post.jpg)",
//         backPoster: "./assets/img/8468.jpg",
//     },
//     36: {
//         src: "./assets/audio/Nickelback_-_Next_Contestant.mp3", 
//         artist: "Nickelback",
//         title: "Next_Contestant",
//         poster: "url(./assets/img/next-cont.jpg)",
//         backPoster: "./assets/img/8468.jpg",
//     },
//     37: {
//         src: "./assets/audio/Imagine_Dragons_-_Natural.mp3", 
//         artist: "Imagine Dragons",
//         title: "Natural",
//         poster: "url(./assets/img/natural2.jpg)",
//         backPoster: "./assets/img/natural3.jpg",
//     },
//     38: {
//         src: "./assets/audio/Persona_5_OST_-_Beneath_the_Mask.mp3", 
//         artist: "Persona_5_OST",
//         title: "Beneath_the_Mask",
//         poster: "url(./assets/img/mask.jpg)",
//         backPoster: "./assets/img/persona.jpg",
//     },
//     39: {
//         src: "./assets/audio/Lyn_-_Dark_Sun_Persona_5_the_Animation_OP2AnimeNewMusic.mp3", 
//         artist: "Lyn",
//         title: "Dark_Sun",
//         poster: "url(./assets/img/persona5_40.jpg)",
//         backPoster: "./assets/img/persona.jpg",
//     },
//     40: {
//         src: "./assets/audio/TK_from_Ling_tosite_sigure_-_Unravel.mp3", 
//         artist: "TK_from_Ling_tosite_sigure",
//         title: "Unravel",
//         poster: "url(./assets/img/tok-gul.jpg)",
//         backPoster: "./assets/img/gul.jpg",
//     },
//     41: {
//         src: "./assets/audio/Green_Day_-_21_Guns.mp3", 
//         artist: "Green_Day",
//         title: "21 Guns",
//         poster: "url(./assets/img/guns.jpg)",
//         backPoster: "./assets/img/guns.jpg",
//     },
//     42: {
//         src: "./assets/audio/DEEP-EX-SENSE_-_Skazka_o_poteryannom_vremeni.mp3", 
//         artist: "DEEP-EX-SENSE",
//         title: "Skazka_o_poteryannom_vremeni",
//         poster: "url(./assets/img/deep.jpg)",
//         backPoster: "./assets/img/deep.jpg",
//     },
//     43: {
//         src: "./assets/audio/GROT_2517_-_Solncu_navstrechu.mp3", 
//         artist: "GROT",
//         title: "Solncu_navstrechu",
//         poster: "url(./assets/img/grot.jpg)",
//         backPoster: "./assets/img/grot.jpg",
//     },

// }

const artistList: string[] = [];

for (const elem in playlist) {
    // console.log(`${playlist[elem].artist}. (${playlist[elem].title})`);
    const el = String(`${playlist[elem].artist}. (${playlist[elem].title})`);
    artistList.push(el);
}

// export default ;
export { artistList,  playlist};