<template>
  <div>
    <button
      :type="type"
      @click="actions"
      class="justify-self-center py-1.5 sm:py-3 bg-green-400 w-1/2 text-gray-600 text-md rounded-full shadow-md hover:scale-105 duration-300 focus:ring-1 hover:ring-1 ring-offset-1"
    >
      Add Post
    </button>
  </div>
</template>
<script>
export default {
  props: {
    actions: {
      type: Function,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
