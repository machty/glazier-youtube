import card from 'card';

var Video = {
  /*
    @public

    Fetch a video

    @method findById
    @param  youtubeId {String}
    @returns {Ember.RSVP.Promise}
  */
  findById: function(youtubeId) {

    var url = "http://www.youtube.com/oembed?url=http%3A//www.youtube.com/watch%3Fv%3D" + youtubeId + "&format=json";

    return card.consumers.fullXhr.request('ajax', {
      url: url,
      dataType: 'jsonp'
    });
  }
};

export default Video;
