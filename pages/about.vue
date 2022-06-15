<template>
  <h1>
    <li v-for="(item, index) in todoList" :key="index">
      {{ item.name }}
    </li>
  </h1>
</template>

<script lang="ts">
import { mapState } from 'vuex';

interface InitData {
  name: string;
}

export default {
  data(): { list: InitData[] } {
    return {
      list: [
        {
          name: "a",
        },
        {
          name: "b",
        },
      ],
    };
  },

  computed: {
    ...mapState({
      todoList: (state: any) => state.todoList
    })
  }
  
  // created() {
  //   const a = this.$store.getters('all');
  //   console.log('create', a);
  // }
};
</script>