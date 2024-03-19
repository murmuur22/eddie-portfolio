<script>
    import { backOut } from "svelte/easing";
    import { fly } from "svelte/transition";

    let nav_items = [
        {
            name: "Fashion",
            dest: "/"
        },
        {
            name: "Product Design",
            dest: "/"
        },
        {
            name: "Custom Clothing",
            dest: "/"
        },
        {
            name: "Fiber Arts",
            dest: "/"
        },
        {
            name: "Furniture",
            dest: "/"
        }
    ];

    let test = Array(48);
</script>

<div class="flex justify-between">
    <nav class="p-6 font-body text-eddie-storm text-md md:text-xl">
        <ul>
            {#each nav_items as item, i}
                <li class="py-4 md:py-4 xl:py-2 lg:text-nowrap">
                    <a class="text-center" href={item.dest}>{item.name}</a>
                </li>
            {/each}
        </ul>
    </nav>
    <div class="flex flex-row items-start justify-center w-full">
        <button class="rotated-left">Click here to go back</button>
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16"
        >
            {#each test as _, i}
                <div in:fly class="relative flex flex-col items-start gap-2">
                    <div class="relative">
                        <img
                            class="w-80 lg:w-60 px-10"
                            src="/WORK/katydid_chair/cover.png"
                            alt="fear_of_forgetting"
                        />
                        <div class="absolute bottom-[-14px] w-full text-center">
                            <h2 class="text-eddie-storm font-body text-2xl">
                                Katydid Chair
                            </h2>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <button class="rotated-right">Click here to go forward</button>
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
