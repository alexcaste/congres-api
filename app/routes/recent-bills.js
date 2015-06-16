import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/bills/search?congress=114&history.enacted=true&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.ajax({
      url: url,
      jsonp: 'callback',
      dataType: 'jsonp'
    }).then(function(responseJSON) {
      var recentBills = [];
      responseJSON.results.forEach(function(recentBill) {
        recentBills.push(recentBill);
      });
      return recentBills;
    });
  }
});
