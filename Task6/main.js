var tracks = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3'];
var Player = {
  currentTrack: 0,
  status: 'pause',
  volume: 20,
  display: function() {
    if (tracks.length !== 0) {
      return 'Track: ' + tracks[this.currentTrack] + ' Status: ' + this.status;
    } else {
      return 'Status: stop'
    }
  },

  play: function() {
      this.status = 'play';
  },

  pause: function() {
      this.status = 'pause';
  },

  next: function() {
    if (this.currentTrack < tracks.length - 1) {
      this.currentTrack++;
    } else {
      this.currentTrack = 0;
    }
  },

  prev: function() {
    if (this.currentTrack !== 0) {
      this.currentTrack--;
    } else {
      this.currentTrack = tracks.length - 1;
    }
  },

  randomize: function(){
      tracks.sort(() => Math.random() - 0.3);
  }, 

  volumeUp: function() {
    if (this.volume > 86) {
      this.volume = 100;
    } else {
      this.volume = this.volume + 15;
    }
  },

  volumeDown: function() {
    if (this.volume < 14) {
      this.volume = 0;
    } else {
      this.volume = this.volume - 15;
    }
  }

}
