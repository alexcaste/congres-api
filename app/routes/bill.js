import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/bills/search?bill_id='+params.bill_id+'&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
   return Ember.$.ajax({
     url: url,
     jsonp: 'callback',
     dataType: 'jsonp'
   }).then(function(responseJSON) {
     var bill = [];
     responseJSON.results.forEach(function(info) {
       bill.push(info);
     });
     return bill;
   });
  }
});
