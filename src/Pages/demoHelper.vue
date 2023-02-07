<template>
  <div>
    <div class="flex overflow-x-hidden h-screen">
      <aside
        class="flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300 fixed top-16 md:top-0 md:relative"
        :class="{ '-ml-64': !sidebarOpen }"
      >
        <div class="h-40 bg-gray-900"></div>
        <nav class="flex-1 flex flex-col bg-white">
          <a href="#" class="p-2">Nav Link 1</a>
          <a href="#" class="p-2">Nav Link 2</a>
          <a href="#" class="p-2">Nav Link 3</a>
        </nav>
      </aside>
      <div class="flex-1">
        <header
          class="flex items-center p-4 text-semibold text-gray-100 bg-gray-900 w-full"
        >
          <div class="flex w-full justify-between">
            <div>
              <button class="p-1 mr-4" @click="sidebarOpen = !sidebarOpen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          Header
            </div>
            <div>jdiufhius</div>
          </div>
        </header>
        <main class="p-4">Main Content</main>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "demoHelper",

  data() {
    return {
      sidebarOpen: true,
    };
  },
};
</script>

<!-- <style>
.collapseInput {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  /* color: $midnight; */
  background: white;
  transition: all 0.35s;
}
.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  /* background: $midnight; */
  font-weight: bold;
  cursor: pointer;
}
.tab-label:hover {
  /* background: darken($midnight, 10%); */
}
.tab-label::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
}
.collapseInput:checked + .tab-label {
  /* background: darken($midnight, 10%); */
}
.collapseInput:checked + .tab-label::after {
  transform: rotate(90deg);
}
.collapseInput:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
}
</style> -->
