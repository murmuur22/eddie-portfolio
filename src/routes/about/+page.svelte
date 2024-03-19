<script>
</script>

<div class="flex flex-col lg:flex-row px-4 lg:px-8">
    <div class="flex items-center gap-10 pt-20 lg:pt-0">
        <a href="/" class="rotated-left font-body">Click here to go back</a>
        <p class="font-body text-xl">
            I’m Eddie, I’m an industrial design student and an artist interested
            in hand work and design of all mediums
        </p>
    </div>
    <div
        class=" lg:w-10/12 grid grid-cols-4 border-t border-l border-eddie-storm mt-40"
    >
        {#each Array(16) as _, i}
            <div class="border-r border-b border-eddie-storm text-center">
                <div
                    class="flex items-center justify-center aspect-square overflow-hidden h-full"
                >
                    {#if i == 2}
                        <img src="/images/headshot.png" />
                    {:else if [4, 9, 10].includes(i)}
                        <a
                            class="hover:scale-110 transition ease-in-out border border-eddie-storm bg-eddie-cloudy p-4 lg:p-3 xl:p-4 text-l lg:text-xl xl:text-2xl font-body"
                            href="https://www.instagram.com/_birdwalker/"
                            target="_blank">IG</a
                        >
                    {:else}
                        <div />
                    {/if}
                </div>
            </div>
        {/each}
    </div>
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
