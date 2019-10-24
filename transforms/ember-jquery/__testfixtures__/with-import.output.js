import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    $('.test').focus();
    $(this.element).focus();
    $('.test').focus();
    $(this.element).focus();
  },
});
