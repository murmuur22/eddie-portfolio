<script>
  import { recent_page } from "$lib/stores";
</script>

<aside class="fixed top-0 left-0 pt-24 px-10 font-body text-eddie-storm">
  <a href={$recent_page} class="rotated-left text-eddie-storm font-body text-xl"
    >Click here to go back</a
  >
</aside>

<div class="pt-24">
  <slot />
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
