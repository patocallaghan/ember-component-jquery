import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $(window).on('load', () => console.log('loaded'));
    this.$().css('background', 'red');
    this.$('input').focus();
  },
});
