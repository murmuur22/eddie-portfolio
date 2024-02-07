<script>

</script>

<div class="flex flex-row bg-eddie-white">
    <div class="flex flex-col items-center justify-start border-r-2 border-black">
        <p class="font-body hover:underline text-5xl rotated p-5 opacity-0 pointer-events-none cursor-none ">placeholder</p>
        <a href="/" class="fixed font-body hover:underline text-5xl rotated p-5">go back to homepage</a>
    </div>
    <slot/>
</div>



<style lang="postcss">
    .rotated {
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
</style>