<template>
  <div>
    <header class="header">
      <div class="header-content">
        <input type="checkbox" id="hamburger" aria-label="menu button" />
        <label for="hamburger"><span></span></label>

        <nav aria-label="main navigation">
          <ul class="menus">
            <li><a href="#">Home</a></li>
            <li class="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="dropdown1"
              >
                Services<span class="arrow"></span>
              </button>
              <ul class="dropdown" id="dropdown1">
                <li><a href="#">Web design</a></li>
                <li><a href="#">Web dev</a></li>
                <li><a href="#">Web</a></li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- aside bar with hamburger menu  -->
    <div class="flex overflow-x-hidden h-screen">
      <aside
        class="flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300"
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
          class="flex items-center p-4 text-semibold text-gray-100 bg-gray-900"
        >
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
        </header>
        <main class="p-4">Main Content</main>
      </div>
    </div>

    <!-- accordion collapse  -->
    <div class="relative bg-gray-400">
      <h1>Pure CSS Accordion <sup>2.0</sup></h1>
      <div class="wrapper">
        <div class="colItem">
          <h2>Open <b>multiple</b></h2>
          <div class="tabs">
            <div class="tab">
              <input class="collapsInput" type="checkbox" id="chck1" />
              <label class="tab-label" for="chck1">Item 1</label>
              <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
                reiciendis!
              </div>
            </div>
            <div class="tab">
              <input class="collapsInput" type="checkbox" id="chck2" />
              <label class="tab-label" for="chck2">Item 2</label>
              <div class="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
          </div>
        </div>
        <div class="colItem">
          <h2>Open <b>one</b></h2>
          <div class="tabs">
            <div class="tab">
              <input class="collapsInput" type="radio" id="rd1" name="rd" />
              <label class="tab-label" for="rd1">Item 1</label>
              <div class="tab-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                facilis.
              </div>
            </div>
            <div class="tab">
              <input class="collapsInput" type="radio" id="rd2" name="rd" />
              <label class="tab-label" for="rd2">Item 2</label>
              <div class="tab-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                aut.
              </div>
            </div>
            <div class="tab">
              <input class="collapsInput" type="radio" id="rd3" name="rd" />
              <label for="rd3" class="tab-close">Close others &times;</label>
            </div>
          </div>
        </div>
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

<style lang="scss">
$midnight: #2c3e50;
$clouds: #ecf0f1;
// General
// body {
//   color: $midnight;
//   background: $clouds;
//   padding: 0 1em 1em;
// }
// h1 {
//   margin: 0;
//   line-height: 2;
//   text-align: center;
// }
// h2 {
//   margin: 0 0 0.5em;
//   font-weight: normal;
// }
.collapsInput {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
// .wrapper {
//   display: flex;
//   .colItem {
//     flex: 1;
//   }
// }
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
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all 0.35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}
</style>
