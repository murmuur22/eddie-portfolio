<script>
  import { page } from "$app/stores";

  export let data;
  $: ({ posts } = data);
</script>

<div
  class="flex flex-row items-start justify-center w-full overflow-auto h-screen pl-32 md:pl-48 pt-24"
>
  <!-- hidden button -->
  <button class="rotated-left hidden">Click here to go back</button>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pl-4 md:pl-10"
  >
    {#each posts as post, i}
      <a href={`${$page.url.pathname}/${post.id}`} class="px-10 md:px-0">
        <div class="px-10">
          <img
            class="w-80 2xl:w-96 border-eddie-storm border"
            src={post.cover.src}
            alt={post.cover.alt}
          />
        </div>

        <div class="w-full text-center">
          <h2 class="text-eddie-storm font-body text-lg md:text-xl">
            {post.name}
          </h2>
        </div>
      </a>
    {/each}
  </div>
  <!-- hidden button -->
  <button class="rotated-right hidden">Click here to go forward</button>
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
