import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id='+params.committee_id+'&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var subCommittees = [];
     responseJSON.results.forEach(function(subCommittee) {
       subCommittees.push(subCommittee);
     });
     return subCommittees;
   });
  }
});
