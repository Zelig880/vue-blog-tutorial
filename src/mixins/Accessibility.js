export default {
  props: {
    lightTextColour: {
      type: String,
      default: "#252525"
    },
    lightBackgroundColour: {
      type: String,
      default: "#fff"
    },
    darkTextColour: {
      type: String,
      default: "#fff"
    },
    darkBackgroundColour: {
      type: String,
      default: "#252525"
    }
  },
  data() {
    return {
      isLight: true
    };
  },
  methods: {
    toggleHighContrast() {
      this.isLight = !this.isLight;
      if (this.isLight) {
        this.$el.style.backgroundColor = this.lightBackgroundColour;
        this.$el.style.color = this.lightTextColour;
      } else {
        this.$el.style.backgroundColor = this.darkBackgroundColour;
        this.$el.style.color = this.darkTextColour;
      }
    }
  }
};
