<script>
  import { page } from "$app/stores";
  export let data;
  $: ({ posts } = data);
</script>

<div
  class="w-screen h-screen bg-cover justify-center items-center flex flex-col-reverse md:flex-col bg-grid gap-8 overflow-auto py-24"
  style="background-image: url('/images/titlescreen.png');"
>
  <div class="flex flex-col md:flex-row">
    {#each posts as post, i}
      <a href={`/work/${post.tag}/${post.id}`} class="px-10 md:px-0">
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
  <div class="flex flex-col gap-15">
    <h1 class="font-display text-eddie-green text-6xl">birdwalker</h1>
    <h2 class="font-body text-xl text-eddie-gray">by edward elliot</h2>
    <a
      href="/work/fashion"
      class="bg-black text-eddie-white font-body p-3 text-2xl">see work</a
    >
  </div>
</div>
