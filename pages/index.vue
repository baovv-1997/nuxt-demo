<template>
  <fragment>
    <ChildComponent :propText="propText" @input="updateText"  />
    <br />
    {{propText}}
    <button @click="increment($event)" style="width: 100px; height: 40px; background-color: red">+</button>
  </fragment>
</template>

<script>
import ChildComponent from '../components/child.vue';
import About from './about.vue';

export default {
  components: {
    ChildComponent,
    About,
  },
  data() {
    return {
      count: 1,
      propText: 'hola'
    };
  },

  methods: {
    increment(event) {
      console.log('---', event.preventDefault())
      this.count++;
    },
    updateText(e) {
      console.log('e', e)
      this.propText = e;
    }
  },
};
</script>
