<template>
<div>
  <input type="text" placeholder="Your name" v-model="inputVal">
  <span>text: {{ inputVal }}</span>
</div>
</template>

<script>
export default {
  name: 'child-component',
  data() {
    return {
      text: ''
    }
  },
  props: {
    propText: String,
  },
  computed: {
    inputVal: {
      get() {
        return this.propText;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    setInput(event) {
      console.log('event', event)
      const text = event.target.value
      this.$emit('propText', text);
    }
  }
}
</script>