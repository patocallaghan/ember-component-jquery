import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    Em.$('.test').focus();
    Em.$(this.element).focus();
    Ember.$('.test').focus();
    Ember.$(this.element).focus();
  },
});
