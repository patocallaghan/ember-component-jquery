import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $(this.element).css('background', 'red');
    $('input', this.element).focus();
  },
});
