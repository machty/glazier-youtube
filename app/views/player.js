var PlayerView = Ember.View.extend(Ember.ViewTargetActionSupport, {
  elementId: 'player',

  didInsertElement: function() {
    this.triggerAction({ action: 'loadPlayer' });
  }
});

export default PlayerView;
