<script>
  import "../app.css";

  let nav_items = [
    {
      name: "Resume",
      dest: "/",
    },
    {
      name: "About",
      dest: "/about",
    },
    {
      name: "All Work",
      dest: "/work",
    },
  ];
</script>

<div
  class="flex items-center justify-between fixed w-full border-b z-10 border-black bg-eddie-cloudy"
>
  <nav class="text-2xl font-body text-eddie-storm">
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
<slot />
