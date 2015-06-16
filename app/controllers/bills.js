import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    house: function() {
      this.transitionToRoute('house-bills');
    },
    senate: function() {
      this.transitionToRoute('senate-bills');
    },
    recent: function(){
      this.transitionToRoute('recent-bills');
    }
  }
});
