<script setup>
import FrontPage from './components/FrontPage.vue'
</script>

<template>
  <html data-theme="light">
    <header>
      <div class="navbar bg-base-100">
        <div class="" style="width: 43.5%;">
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
                <a><img src="./assets/home-black.svg" /></a>
              </li>
              <li>
                <a><img src="./assets/map-marker-1-black.svg" /></a>
              </li>
              <li>
                <a><img src="./assets/search-black.svg" /></a>
              </li>
            </ul>
          </div>
          <img src="./assets/MIYA-no-background.png" style="max-width: 25%" />
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a><img src="./assets/home-black.svg"
                 /></a>
            </li>
            <li>
              <a><img src="./assets/map-marker-1-black.svg" /></a>
            </li>
            <li>
              <a><img src="./assets/search-black.svg" /></a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <FrontPage />
    </main>

    <footer class="footer footer-center p-4 bg-base-300 text-base-content bg-white" style="display: flex; justify-content: space-between;">
      <aside class="items-center grid-flow-col">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current"
        >
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          ></path>
        </svg>
        <p>Copyright © 2024 - Schlumpf Industries - All right reserved</p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://twitter.com"><img src="./assets/twitter-black.svg"></a>
        <a href="https://facebook.com"><img src="./assets/facebook-black.svg"></a>
        <a href="https://instagram.com"><img src="./assets/instagram-black.svg"></a>
      </nav>
    </footer>
  </html>
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
