import Component from '@ember/component';
import layout from '../templates/components/bourbon-modal-overlay';

export default Component.extend({
  classNames: ['bourbon-modal__overlay'],
  layout,
  click() {
    this.get('closeModal')();
  }
});
