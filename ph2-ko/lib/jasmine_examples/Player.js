function Player() {
  this.baseValue = 5;
}

Player.prototype.setBaseValue = function(newValue){
  this.baseValue = newValue;
}

Player.prototype.getBaseValue = function(){
  return this.baseValue;
}

Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

module.exports = Player;
