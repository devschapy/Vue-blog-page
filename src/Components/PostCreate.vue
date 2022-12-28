<script>
export default {};
</script>

<template>
  <form class="mx-auto sm:w-8/12 space-y-4">
    <label
      for="cratePost"
      class="text-gray-800 text-xl md:text-3xl text-semibold text-center block"
      >Create Your Post</label
    >
    <div class="flex gap-2">
      <div class="w-8/12 md:w-10/12">
        <input
          type="text"
          id="cratePost"
          class="bg-gray-100 py-2 sm:py-3 lg:py-4 px-4 w-full rounded shadow focus:outline-none border border-gray-300 hover:border-green-300 focus:border-green-300"
        />
      </div>
      <button
        type="submit"
        class="bg-green-400 w-4/12 lg:w-2/12 text-gray-600 text-md rounded shadow hover:scale-105 duration-300 focus:ring-1 hover:ring-1 ring-offset-1"
      >
        Add Post
      </button>
    </div>
  </form>
</template>
