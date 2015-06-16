import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators', { path: '/'}, function() {
    this.resource('contact', { path: 'contact/:zip'});
  });
  this.resource('bills', function(){
    this.resource('house-bills');
    this.resource('senate-bills');
    this.resource('recent-bills');

  });



  this.resource('committees', function(){
    this.resource('sub-committees', {path: '/:committee_id'});
  });
});

export default Router;
