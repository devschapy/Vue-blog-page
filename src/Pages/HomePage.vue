<template>
  <div>
    <div class="fixed w-full">
      <NavigationBar />
    </div>
    <div class="h-screen bg-gray-200 pt-12 sm:pt-14">
      <div class="container h-full py-4">
        <h1 class="text-xl font-semibold text-gray-800">Post List</h1>
        <div class="grid justify-center py-6">
          <h1 class="text-gray-800 font-[500] text-lg">
            No Post Found, Create Your Own
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "../Components/NavigationBar.vue";
export default {
  name: "HomePage",
  components: {
    NavigationBar,
  },
};
</script>
