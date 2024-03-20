<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { recent_page } from "$lib/stores";
  onMount(() => {
    return () => {
      recent_page.set($page.url.pathname);
    };
  });

  let nav_items = [
    {
      name: "Fashion",
      tag: "fashion",
      checked: $page.url.pathname.includes("fashion") ? true : false
    },
    // {
    //   name: "Product Design",
    //   tag: "product_design",
    //   checked: $page.url.pathname.includes("productdesign") ? true : false
    // },
    {
      name: "Custom Clothing",
      tag: "custom_clothing",
      checked: $page.url.pathname.includes("customclothing") ? true : false
    },
    {
      name: "Fiber Arts",
      tag: "fiber_arts",
      checked: $page.url.pathname.includes("fiberarts") ? true : false
    },
    {
      name: "Furniture",
      tag: "furniture",
      checked: $page.url.pathname.includes("furniture") ? true : false
    }
  ];

  let starting_filter = $page.url.pathname.split("/")[2].split("+");
  $: tags = starting_filter;

  function modify_filter(e) {
    let tag = e.target.name;

    if (!e.target.checked && tags.length == 1) {
      e.target.checked = true;
      return;
    }

    if (e.target.checked) {
      tags = [...tags, tag];
    } else {
      tags = [...tags.filter((e) => e !== tag)];
    }

    goto(`/work/${tags.join("+")}`);
  }
</script>

<aside
  class="font-body fixed top-0 left-0 pl-6 pt-24 pr-96 md:pr-10 flex flex-col gap-4"
>
  <h2 class="text-xl">Filters</h2>
  <nav class=" text-eddie-storm text-md md:text-md">
    <ul>
      {#each nav_items as item, i}
        <li>
          <input
            type="checkbox"
            id={item.tag}
            name={item.tag}
            bind:checked={item.checked}
            on:change={(e) => {
              modify_filter(e);
            }}
          />
          <label for={item.tag}>{item.name}</label>
        </li>
      {/each}
    </ul>
  </nav>
</aside>

<slot />
