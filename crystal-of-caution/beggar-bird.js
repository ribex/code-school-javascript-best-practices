var strength = true;
var fear = false;
var pack = {
  foodPouch: ['carrot', 'mystery meat', 'apple', 42],
  addFood: function(foodItem) {
    this.foodPouch = this.foodPouch || [];
    this.foodPouch.push(foodItem);
  },
  gobbleFood: function(foodItem) {
    return(this.foodPouch.indexOf(foodItem) >= 0) ?
    this.foodPouch.splice(this.foodPouch.indexOf(foodItem), 1)[0] :
    alert('Your pack lacks ' + foodItem);
  },
  feedBird: function(birdFood) {
    for (var i = 0; i < this.foodPouch.length; i++) {
      if (this.foodPouch[i] === birdFood) {
        alert('Feed beggar bird ' + this.foodPouch[i]);
      }
    }
  }
};

pack.feedBird('42');
