import { defineComponent } from "vue";

export default defineComponent({
  __name: 'Button',
  setup() {
    return () => <button style={{ "background-color": 'blue' }}>111</button>
  }
})