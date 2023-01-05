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
  </div>
</template>
<script>
export default {};
</script>
