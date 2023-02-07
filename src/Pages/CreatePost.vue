<template>
  <div class="h-screen bg-gray-200">
    <NavigationBar />
    <div class="container pt-4">
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

      <div class="w-full border-b border-gray-400 my-4 sm:my-8"></div>
      <h1
        v-if="!massage.length"
        class="text-gray-600 font-[500] text-lg md:text-2xl text-center"
      >
        No Post Found, Create Your Own
      </h1>

      <ul
        v-if="massage.length"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <li
          class="bg-green-200 rounded shadow grid relative"
          v-for="(msg, index) in massage"
          :key="index"
        >
          <p class="px-4 py-2 text-md text-green-800">
            {{ msg.title }}
            <span v-if="!msg.title.length" class="text-red-400 text-sm"
              >Please Enter the post title...</span
            >
          </p>
          <p class="px-4 py-2 text-sm text-green-700">
            {{ msg.description }}
            <span v-if="!msg.description.length" class="text-red-400 text-sm"
              >Please Enter the post description...</span
            >
          </p>

          <div class="absolute right-2 top-2">
            <li id="dropdownHeader" class="relative hoverDropdownHeader">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="dropdown2"
                class="text-md font-bold hover:scale-125 focus:scale-125 duration-300"
              >
                <span>&#8942;</span>
              </button>

              <nav id="dropdown2" class="dropdown right-0 top-9 bg-red-300">
                <ul
                  class="relative border border-green-400 rounded-md py-1 bg-white z-[20] after:z-[10] after:absolute after:h-5 after:w-5 after:bg-white after:rounded-tl-full after:rounded-br-full after:-top-3 after:right-2"
                >
                  <button
                    class="text-blue-600 text-md flex items-center gap-3 hover:bg-green-100 w-full py-2 px-3 duration-300"
                  >
                    <span class="rotate-90 text-xl">&#x270E;</span
                    ><span>Edit</span>
                  </button>
                  <button
                    class="text-red-600 text-md flex items-center gap-3 hover:bg-green-100 w-full py-2 px-3 duration-300"
                  >
                    <span class="text-xl">&#x2715;</span><span>Delete</span>
                  </button>
                </ul>
              </nav>
            </li>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavigationBar from "../Components/NavigationBar.vue";

export default {
  data() {
    return {
      massage: [],
    };
  },
  methods: {
    createObject(title, description) {
      return {
        id: Math.random(),
        title: title,
        description: description,
      };
    },
    createHandler(e) {
      e.preventDefault();
      const title = this.$refs.titleValue.value;
      const description = this.$refs.descriptionValue.value;
      const myObject = this.createObject(title, description);
      this.massage.push(myObject);
      this.$refs.titleValue.value = "";
      this.$refs.descriptionValue.value = "";
    },
  },
  components: {
    NavigationBar,
  },
};
</script>
