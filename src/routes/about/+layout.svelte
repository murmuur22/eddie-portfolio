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

<div class="bg-[url('/images/background.png')] overflow-hidden h-screen w-full">
  <div class="pt-20">
    <slot />
  </div>
</div>
