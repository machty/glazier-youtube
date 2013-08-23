import card from 'card';
import Video from 'app/models/video';

var ApplicationRoute = Ember.Route.extend({
  model: function() {

    var self = this;

    return new Conductor.Oasis.RSVP.Promise(function(resolve, reject) {
      if (window.YT) {
        resolve(window.YT);
      } else {
        window.onYouTubeIframeAPIReady = function () {
          resolve(window.YT);
        };
      }
    }).then(function(YT) {

      self.controllerFor('application').set('youtubeAPI', YT);

      return {
        id: "ogY44aX5pHU"
      };
    });
  }

});

export default ApplicationRoute;



/*

Conductor.card({
  consumers: {
    video: Conductor.Oasis.Consumer.extend({
      events: {
        play: function () {
          var card = this.card;
          card.promise.then(function () {
            return card.playerDefered().promise;
          }).then(function () {
            card.player.playVideo();
          });
        }
      }
    })
  },

  //didUpdateData: function (bucket, data) {
    //this.loadVideo(data.videoId);
  //},

  //render: function (intent, dimensions) {
    //this.setDimensions(dimensions);

    //switch (intent) {
      //case "thumbnail":
        //$('#player').hide();
        //$('#thumbnail').show();
        //break;
      //case "small":
      //case "large":
        //$('#thumbnail').hide();
        //$('#player').show();
        //break;
      //default:
        //throw new Error("Unuspported intent '" + intent + "'");
    //}
  //},

  loadVideo: function (videoId) {
    var card = this;

    $('#thumbnail').attr('src', 'http://img.youtube.com/vi/' + videoId + '/0.jpg');
    this.youtubePromise().then( function (YT) {
      var dimensions = card.getDimensions();
      card.player = new YT.Player('player', {
        height: dimensions.height,
        width: dimensions.width,
        videoId: videoId,
        playerVars: {
          rel: 0
        },
        events: {
          onReady: function() {
            card.playerDefered().resolve(card.player);
          },
          onStateChange: function (event) {
            var playerState = event.data;
            if (playerState === YT.PlayerState.ENDED) {
              card.consumers.video.send('videoWatched');
            }
          }
        }
      });

      card.on('resize', function () {
        var dimensions = this.getDimensions();
        this.player.setSize(dimensions.width, dimensions.height);
      });
    });
  },

  //resizeThumbnail: function () {
    //var dimensions = this.getDimensions();
    //$('#thumbnail').css({ height: dimensions.height });
  //},

  //getDimensions: function () {
    //if (!this._dimensions) { this.setDimensions(); }
    //return this._dimensions;
  //},

  //setDimensions: function (dimensions) {
    //if (dimensions !== undefined) {
      //this._dimensions = dimensions;
    //} else {
      //this._dimensions = {
        //height: window.innerHeight,
        //width: window.innerWidth
      //};
    //}

    //this.trigger('resize');
  //},

  //playerDefered: function () {
    //if (!this._playerDefered) {
      //this._playerDefered = new Conductor.Oasis.RSVP.defer();
    //}

    //return this._playerDefered;
  //},

  youtubePromise: function () {
    if (!this._youtubePromise) {
      this._youtubePromise = new Conductor.Oasis.RSVP.Promise(function (resolve, reject) {
        if (window.YT) {
          resolve(window.YT);
        } else {
          window.onYouTubeIframeAPIReady = function () {
            resolve(window.YT);
          };
        }
      });
    }

    return this._youtubePromise;
  }
});
*/
