<script>
export default {
  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    labelStyle: {
      type: String,
    },
    Style: {
      type: String,
    },
    divStyle: {
      type: String,
    },
  },
};
</script>

<template>
  <div :class="divStyle">
    <label :class="labelStyle" :for="id">{{ label }}</label>
    <input
      :id="id"
      type="text"
      :class="Style"
      class="bg-gray-100 py-2 px-4 rounded shadow focus:outline-none border border-gray-300 hover:border-green-300 focus:border-green-300"
    />
  </div>
</template>
