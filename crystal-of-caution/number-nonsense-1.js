var birdFeeder = {
  totalFeed: 4,
  getFeed: function(feedRequested) {
    var returnedFeed = 0;
    if (this.totalFeed >= feedRequested) {
      returnedFeed = feedRequested;
      this.totalFeed -= feedRequested;
    } else {
      returnedFeed = this.totalFeed;
      this.totalFeed = 0;
    }
    
    return parseFloat(returnedFeed.toFixed(1));
  },
  fillFeed: function(additionalFeed) {
    this.totalFeed += additionalFeed;
  }          
};
