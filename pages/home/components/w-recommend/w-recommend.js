// pages/home/w-recommend/w-recommend.js
Component({
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },
  data: {

  },
  methods: {
    imageLoad(e) {
      this.triggerEvent('imageLoad', {}, {});
    }
  }
})
