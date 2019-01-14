import Component from '@ember/component';
import { computed, defineProperty, observer } from '@ember/object';
import { isPresent } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import groupBy from 'ember-group-by';
import SelectMixin from "bourbon/mixins/select";

import layout from '../templates/components/bourbon-select-field';

export default Component.extend(SelectMixin, {
  layout,

  init() {
    this._super(...arguments);
    let groupByPath = this.get("groupByPath");
    if (groupByPath) {
      defineProperty(this, "groupedContent", groupBy("content", groupByPath));
    }

    if (this.get("hasPrompt")) {
      this.set("selection", this.get("prompt"));
      this.set("label", this.get("prompt"));
    }
  },

  classNames: ["BourbonSelectField"],
  classNameBindings: [
    "hasValue",
    "fullWidth:btw-block",
    "showList:BourbonSelectField--active"
  ],
  content: null,
  optionValuePath: null,
  optionLabelPath: null,
  optionEnabledPath: null,
  groupByPath: null,
  showList: false,
  useOptGroup: computed.bool("groupByPath"),
  prompt: null,
  hasPrompt: computed.notEmpty("prompt"),
  value: null,
  hasValue: computed.notEmpty("value"),

  focusOut() {
    this.set("showList", false);
  },

  mouseDown() {
    this.set("showList", !(this.get("showList")));
  },

  selection: computed("content.[]", "optionValuePath", "value", {
    get(key) {
      this.getSelection();
    },

    set(key, value) {
      if (isPresent(value)) {
        this.setLabel(value);
        this.setValue(value);
      }
      return value;
    }
  }),

  action: null,

  _sendAction: observer("selection", function() {
    if (typeof this.get("action") === "function") {
      this.send("action", this.get("selection"));
    }
  }),

  _valuePath: computed("optionValuePath", function() {
    if (this.get("optionValuePath") !== null) {
      return this.get("optionValuePath").replace(/^content\.?/, "");
    }
  }),

  _initSelection: observer("searchTerm", function() {
    scheduleOnce("afterRender", this, function() {
      if (this.get("content")) {
        this.send("updateSelection");
      }
    });
  }),

  didInsertElement() {
    this._initSelection();
  },

  actions: {
    // only used for initial load - rest of changes are coming through the bourbon select field option
    updateSelection() {
      let selectedIndex = this.$("select")[0].selectedIndex;

      if (this.get("prompt")) {
        selectedIndex -= 1;
      }

      this.set("selection", this.get("content").objectAt(selectedIndex));
    }
  }
});
