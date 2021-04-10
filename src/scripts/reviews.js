import Vue from 'vue';
import Flickity from 'vue-flickity';
console.log('1111');

new Vue({
  el: '#reviews-temp',
  template: '#reviews-carousel',
  components: {
    Flickity
  },
  data() {
    return {
      reviews: [],
      current: 0,
      count: 0,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        groupCells: true
      }
    };
  },
  computed: {
    hasPrev() {
      return this.current;
    },
    hasNext() {
      return this.count !== this.current;
    }
  },
  created() {
    const reviews = require('../data/reviews.json');

    this.reviews = reviews.map((review) => {
      review.pic = require(`../images/content/${review.pic}`).default;
      return review;
    });
  },

  mounted() {
    this.$refs.flickity.on('settle', (index) => {
      this.current = index;
    });

    this.count = this.$refs.flickity.slides().length - 1;
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    prev() {
      this.$refs.flickity.previous();
    }
  }
});
