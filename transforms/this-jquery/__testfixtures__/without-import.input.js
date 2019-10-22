import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.$().css('background', 'red');
    this.$('input').focus();
  },
});
