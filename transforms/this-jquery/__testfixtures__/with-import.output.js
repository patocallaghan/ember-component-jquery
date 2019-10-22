import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $(window).on('load', () => console.log('loaded'));
    $(this.element).css('background', 'red');
    $('input', this.element).focus();
  },
});
