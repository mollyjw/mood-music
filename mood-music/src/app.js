const songs = [
    {
        title: 'Walking on Sunshine',
        artist: 'Katrina & the Waves',
        thumbnail: 'https://media.timeout.com/images/103611035/380/285/image.jpg',
        link: 'https://www.youtube.com/watch?v=iPUmE-tne5U',
        mood: 'happy',
    },
    {
        title: 'Good Vibrations',
        artist: 'Beach Boys',
        thumbnail: 'https://media.timeout.com/images/103611041/380/285/image.jpg',
        link: 'https://www.youtube.com/watch?v=apBWI6xrbLY',
        mood: 'happy',
    },
    {
        title: "Don't Bring Me Down",
        artist: 'Electric Light Orchestra',
        thumbnail: 'https://media.timeout.com/images/103611045/380/285/image.jpg',
        link: 'https://www.youtube.com/watch?v=z9nkzaOPP6g',
        mood: 'happy',
    },
    {
        title: "You Make My Dreams",
        artist: 'Hall & Oates',
        thumbnail: 'https://media.timeout.com/images/103611048/380/285/image.jpg',
        link: 'https://www.youtube.com/watch?v=EErSKhC0CZs',
        mood: 'happy',
    },
    {
        title: "Hurt",
        artist: 'Johnny Case',
        thumbnail: 'https://media.timeout.com/images/102903392/380/285/image.jpg',
        link: 'https://www.youtube.com/watch?v=8AHCfZTRGiI',
        mood: 'sad',
    },
    {
        title: "Strange Fruit",
        artist: 'Billie Holiday',
        thumbnail: 'https://media.timeout.com/images/102903513/380/285/image.jpg',
        link: 'https://www.youtube.com/watch?v=Web007rzSOI',
        mood: 'sad',
    },
    {
        title: "Gives You Hell",
        artist: 'All-American Rejects',
        thumbnail: 'https://m.media-amazon.com/images/M/MV5BYmRkNzgxZjgtMjBkMi00ZmMzLTkyODktZjg2Zjc4NTE3NzQ4XkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg',
        link: 'https://www.youtube.com/watch?v=uxUATkpMQ8A',
        mood: 'mad',
    },
    {
        title: "We're Not Gonna Take It",
        artist: 'Twisted Sister',
        thumbnail: 'https://img.discogs.com/FBD8S3S_KxIAbiQWP6eOcuBcM6Y=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7205962-1436216630-6969.jpeg.jpg',
        link: 'https://www.youtube.com/watch?v=V9AbeALNVkk',
        mood: 'mad',
    },
    {
        title: "Since U Been Gone",
        artist: 'Kelly Clarkson',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/da/Since_U_Been_Gone_Single.PNG',
        link: 'https://www.youtube.com/watch?v=R7UrFYvl5TE',
        mood: 'mad',
    },
]

new Vue({
    el: '#songlist',
    data: {
        title: '',
        artist: '',
        coverArt: '',
        link: '',
        mood: '',
        songList: songs,
        moodList: ['happy', 'sad', 'mad'],
        filterByList: ['happy', 'sad', 'mad'],
        filterMood: '',
        error: false
    },
    methods: {
        createNew: function(){
            if (this.title === '' || this.artist === '' || this.mood === '') {
                this.error = true;
            } else {
                songs.push({
                    title: this.title,
                    artist: this.artist,
                    thumbnail: this.thumbnail,
                    link: this.link,
                    mood: this.mood
                });
                this.title = '',
                this.artist = '',
                this.thumbnail = '',
                this.link = '',
                this.mood = '',
                this.error = false

            }
        },
        chooseMood: function(event){
            this.mood = event.target.value;
          },
        filterList: function(event){
            this.filterMood = event.target.value;
          }
    }
})