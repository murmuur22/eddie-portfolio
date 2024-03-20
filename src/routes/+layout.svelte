<script>
  import "../app.css";
  import { Hamburger } from "svelte-hamburgers";
  import { fade, fly, slide } from "svelte/transition";
  import { clickOutside } from "$lib/clickOutside";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { recent_page } from "$lib/stores";
  onMount(() => {
    return () => {
      recent_page.set($page.url.pathname);
    };
  });

  let openMenu;

  let nav_items = [
    {
      name: "Resume",
      dest: "/"
    },
    {
      name: "About",
      dest: "/about"
    },
    {
      name: "All Work",
      dest: "/work/fashion"
    }
  ];
</script>

<div
  class="fixed w-full border-b z-10 border-eddie-storm bg-eddie-cloudy"
  use:clickOutside
  on:click_outside={() => {
    openMenu = false;
  }}
>
  <div class="flex items-center justify-between">
    <div class="md:hidden">
      <Hamburger bind:open={openMenu} --color="#182953" />
    </div>
    <nav class="text-2xl font-body text-eddie-storm hidden md:block">
      <ul class="divide-x m-4 divide-eddie-storm">
        {#each nav_items as item, i}
          <li class="px-6 inline-block">
            <a class="text-center" href={item.dest}>{item.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
    <h1 class="text-2xl font-body text-eddie-storm px-6">
      <a href="/">Edward Elliot</a>
    </h1>
  </div>

  <div class="md:hidden px-6">
    {#if openMenu}
      <nav
        class="text-2xl font-body text-left text-eddie-storm pb-3"
        transition:slide
      >
        <ul>
          {#each nav_items as item, i}
            <li
              in:fly|global={{ y: -15, delay: 50 * i }}
              out:fly|global={{ y: -15 }}
            >
              <a
                class="hover:underline"
                href={item.dest}
                in:fade={{ delay: 60 * i }}
                out:fade={{ delay: 30 * i }}
              >
                {item.name}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</div>
<slot />
