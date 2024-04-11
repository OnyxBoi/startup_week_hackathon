<template>
  <div class="navbar bg-base-100">
    <div class="" style="width: 43.5%">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <router-link to="/">
              <a><img src="@/assets/home-black.svg" /></a>
            </router-link>
          </li>
          <li>
            <router-link to="/map-search">
              <a><img src="@/assets/map-marker-1-black.svg" /></a>
            </router-link>
          </li>
          <li>
            <router-link to="/advanced-search">
              <a><img src="@/assets/search-black.svg" /></a>
            </router-link>
          </li>
        </ul>
      </div>
      <img src="@/assets/MIYA-no-background.png" style="max-width: 25%" />
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link to="/">
            <a><img src="@/assets/home-black.svg" /></a>
          </router-link>
        </li>
        <li>
          <router-link to="/map-search">
            <a><img src="@/assets/map-marker-1-black.svg" /></a>
          </router-link>
        </li>
        <li>
          <router-link to="/advanced-search">
            <a><img src="@/assets/search-black.svg" /></a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
