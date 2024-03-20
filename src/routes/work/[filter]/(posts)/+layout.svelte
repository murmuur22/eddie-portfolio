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
    {
      name: "Product Design",
      tag: "productdesign",
      checked: $page.url.pathname.includes("productdesign") ? true : false
    },
    {
      name: "Custom Clothing",
      tag: "customclothing",
      checked: $page.url.pathname.includes("customclothing") ? true : false
    },
    {
      name: "Fiber Arts",
      tag: "fiberarts",
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

    if (e.target.checked) {
      tags = [...tags, tag];
    } else {
      tags = [...tags.filter((e) => e !== tag)];
    }

    goto(`/work/${tags.join("+")}`);
  }
</script>

<aside class="fixed top-0 left-0 pt-24 pr-96 md:pr-10">
  <nav class="pl-6 font-body text-eddie-storm text-lg md:text-xl">
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
