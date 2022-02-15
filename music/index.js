var songs = [

    {
        id: 1,
        imageSrc: "./thumbnails/Bin-Tere-I-Hate-Luv-Storys-500-500.jpg",
        audioSrc: "./songs/bin-tere-i-hate-luv-storys-128-kbps-sound.mp3",
        title: "Bin Tere"
    },

    {

        id: 2,
        imageSrc: "./thumbnails/Darasal-Raabta-500-500.jpg",
        audioSrc: "./songs/Darasal Raabta 128 Kbps.mp3",
        title: "Darasal"
    },

    {

        id: 3,
        imageSrc: "./thumbnails/Kaise-Hua-Kabir-Singh-500-500.jpg",
        audioSrc: "./songs/Kaise Hua Kabir Singh 128 Kbps.mp3",
        title: "Kaise Hua"
    },
    {

        id: 4,
        imageSrc: "./thumbnails/Mere-Yaaraa-From-Sooryavanshi-Arijit-Singh-500-500.jpg",
        audioSrc: "./songs/Mere Yaraa Sooryavanshi 128 Kbps.mp3",
        title: "Mere Yaara"
    },

    {

        id: 5,
        imageSrc: "./thumbnails/Samjhawan-Humpty-Sharma-Ki-Dulhania-500-500.jpg",
        audioSrc: "./songs/Samjhawan Humpty Sharma Ki Dulhania 128 Kbps.mp3",
        title: "Samjhawan"
    },
    {

        id: 6,
        imageSrc: "./thumbnails/Shayad-Love-Aaj-Kal-500-500.jpg",
        audioSrc: "./songs/Shayad Love Aaj Kal 128 Kbps.mp3",
        title: "Shayad"
    },
    {

        id: 7,
        imageSrc: "./thumbnails/Teri-Mitti-Kesari-500-500.jpg",
        audioSrc: "./songs/Teri Mitti Kesari 128 Kbps.mp3",
        title: "Teri Mitti"
    },
    {

        id: 8,
        imageSrc: "./thumbnails/Teri-Ore-Deedar-Kaur-500-500.jpg",
        audioSrc: "./songs/Teri Ore Deedar Kaur 128 Kbps.mp3",
        title: "Teri Ore"
    }
]

function play(id) {
    var song = songs.find(function (song, index) {
        return song.id === id
    }
    );

    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText=song.title;
    document.getElementById("audio_player").play();
}