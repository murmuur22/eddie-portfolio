<script>
  import "./markdown.css";
  import SvelteMarkdown from "svelte-markdown";

  export let data;
  let { content } = data;
</script>

<div class="text-eddie-storm font-body min-h-screen w-full flex justify-center">
  <div class="w-7/12 md:w-6/12" id="markdown">
    <SvelteMarkdown source={content[0].content} />
  </div>
</div>
