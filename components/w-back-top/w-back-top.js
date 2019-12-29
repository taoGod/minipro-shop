// components/w-back-top/w-back-top.js
Component({
  properties: {

  },
  data: {

  },
  methods: {
    backTopClick(e) {
      this.triggerEvent('backToTop', {}, {});
    }
  }
})
