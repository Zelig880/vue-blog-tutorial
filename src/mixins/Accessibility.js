export default {
  props: {
    dayTextColour: {
      type: String,
      default: "#252525"
    },
    dayBackgroundColour: {
      type: String,
      default: "#fff"
    },
    nightTextColour: {
      type: String,
      default: "#fff"
    },
    nightBackgroundColour: {
      type: String,
      default: "#252525"
    }
  },
  data() {
    return {
      isDay: true
    };
  },
  methods: {
    toggleHighContrast() {
      this.isDay = !this.isDay;
      if (this.isDay) {
        this.$el.style.backgroundColor = this.dayBackgroundColour;
        this.$el.style.color = this.dayTextColour;
      } else {
        this.$el.style.backgroundColor = this.nightBackgroundColour;
        this.$el.style.color = this.nightTextColour;
      }
    }
  }
};
