<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { recent_page } from "$lib/stores";
  onMount(() => {
    return () => {
      recent_page.set($page.url.pathname);
    };
  });
</script>

<aside class="fixed top-0 left-0 pt-24 px-10 font-body text-eddie-storm">
  <a href={$recent_page} class="rotated-left text-eddie-storm font-body text-xl"
    >Click here to go back</a
  >
</aside>

<div
  class="flex flex-row items-start justify-center w-full overflow-auto h-screen pl-48 pt-24"
>
  <h1 class="text-eddie-storm font-body text-xl">This page is empty</h1>
</div>

<style lang="postcss">
  .rotated-right {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
  .rotated-left {
    writing-mode: vertical-lr;
    transform: scale(-1, -1);
    text-orientation: mixed;
  }
</style>
