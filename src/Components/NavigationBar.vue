<template>
  <section class="h-14">
    <nav class="fixed w-full bg-white border-b border-gray-300 shadow-md">
      <ul class="container flex justify-between items-center py-2">
        <li>
          <RouterLink to="/" class="text-lg sm:text-3xl font-semibold">
            <span class="text-green-400">Dev</span>
            <span class="text-blue-400">Schapy</span>
          </RouterLink>
        </li>

        <ul class="flex gap-5 sm:gap-8 items-center">
          <li class="relative">
            <RouterLink
              to="/"
              class="headerNavLink text-[12px] sm:text-base text-green-500 nav-after"
            >
              Home
            </RouterLink>
          </li>
          <li class="relative">
            <RouterLink
              to="/create/post"
              class="headerNavLink text-[12px] sm:text-base text-green-500 nav-after"
            >
              Create Post
            </RouterLink>
          </li>
        </ul>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>
