<template>
  <div class="h-screen bg-gray-200">
    <NavigationBar />

    <div class="h-[80%] grid justify-center items-center">
      <div class="grid gap-3">
        <h1 class="text-4xl md:text-6xl text-gray-800 font-bold text-center">
          WELCOME
        </h1>
        <p class="text-center text-gray-700 text-2xl font-semibold">
          Create Your post --> Go to Create post pages
        </p>
        <RouterLink
          to="/create/post"
          class="text-white bg-green-400 w-fit py-2 px-4 text-xl font-semibold rounded shadow justify-self-center hover:scale-110 duration-300"
        >
          Go To Post Page
        </RouterLink>
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
