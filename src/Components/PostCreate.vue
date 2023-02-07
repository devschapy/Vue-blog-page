<template>
  <form class="mx-auto sm:w-8/12 space-y-4">
    <h1
      class="text-gray-800 text-xl md:text-3xl text-semibold text-center block"
    >
      Create Your Post
    </h1>
    <div class="grid gap-4">
      <div class="grid grid-cols-2 gap-2 sm:gap-4">
        <div class="relative">
          <input
            type="text"
            ref="titleValue"
            id="TITLE"
            class="bg-gray-100 hover:bg-green-50 focus:bg-green-50 py-2 sm:py-4 px-4 w-full rounded-full shadow-md text-md xl:text-xl focus:outline-none border border-gray-300 hover:border-green-300 focus:border-green-300 focus:ring-1 hover:ring-1 ring-green-400 ring-offset-1 peer"
            placeholder=" "
          />
          <label
            for="TITLE"
            class="absolute text-md lg:text-lg text-gray-400 duration-300 transform -translate-y-5 top-2 z-10 origin-[0] bg-gray-100 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0.5 scale-75 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 md:left-6 peer-focus:bg-gray-100 rounded-full px-1"
          >
            Post Title
          </label>
        </div>

        <div class="relative">
          <input
            type="text"
            ref="descriptionValue"
            id="DESCRIPTION"
            class="bg-gray-100 hover:bg-green-50 focus:bg-green-50 py-2 sm:py-4 px-4 w-full rounded-full shadow-md text-md xl:text-xl focus:outline-none border border-gray-300 hover:border-green-300 focus:border-green-300 focus:ring-1 hover:ring-1 ring-green-400 ring-offset-1 peer"
            placeholder=" "
          />
          <label
            for="DESCRIPTION"
            class="absolute text-md lg:text-lg text-gray-400 duration-300 transform -translate-y-5 top-2 z-10 origin-[0] bg-gray-100 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0.5 scale-75 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 md:left-6 peer-focus:bg-gray-100 rounded-full px-1"
          >
            Description
          </label>
        </div>
      </div>
      <button
        type="submit"
        @click="createHandler"
        class="justify-self-center py-1.5 sm:py-3 bg-green-400 w-1/2 text-gray-600 text-md rounded-full shadow-md hover:scale-105 duration-300 focus:ring-1 hover:ring-1 ring-offset-1"
      >
        Add Post
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "PostCreate",
  props: {},
};
</script>
