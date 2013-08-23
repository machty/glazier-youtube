var PlayerController = Ember.Controller.extend({
  needs: ['application'],
  youtubeAPI: Ember.computed.alias('controllers.application.youtubeAPI'),

  loadPlayer: function() {

    var YT = this.get('youtubeAPI');

    //alert('loadin' + YT);

    //debugger;

    //var dimensions = card.getDimensions();
    card.player = new YT.Player('player', {
      height: 400,
      width: 400,
      videoId: this.get('content.id'),
      playerVars: {
        rel: 0
      },
      events: {
        onReady: function() {
          //card.playerDefered().resolve(card.player);
          alert('im ready');
        },
        onStateChange: function (event) {
          // TODO: this
          //var playerState = event.data;
          //if (playerState === YT.PlayerState.ENDED) {
            //card.consumers.video.send('videoWatched');
          //}
        }
      }
    });

    //card.on('resize', function () {
      //var dimensions = this.getDimensions();
      //this.player.setSize(dimensions.width, dimensions.height);
    //});


  }
});

export default PlayerController;
