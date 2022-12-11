<template>
  <div>
    <NavigationBar />
    <h1 class="text-4xl text-green-500">I am create post page</h1>
  </div>
</template>

<script>
import NavigationBar from "../Components/NavigationBar.vue";
export default {
  name: "CreatePost",
  components: {
    NavigationBar,
  },
};
</script>
