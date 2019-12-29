// components/w-check-icon/w-check-icon.js
Component({
  properties: {
    checked: {
      type: Boolean,
      value: false
    }
  },
  externalClasses: ["icon"],
  data: {

  },
  methods: {
    changeStatus(e) {
      const checked = this.properties.checked;
      this.triggerEvent('change', {
        checked
      });
    }
  }
})
