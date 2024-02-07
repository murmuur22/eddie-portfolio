<script>
    import { backOut } from "svelte/easing";
    import { fly } from "svelte/transition";

</script>


<div class="flex flex-col">
    <div class="fixed w-full border-b-2 border-black float-left z-10 bg-eddie-white">
        <ul>
            <li>
                <a href="/">fabric</a>
            </li>
            <li>
                <a href="/">fabric</a>
            </li>
            <li>
                <a href="/">fabric</a>
            </li>
        </ul>
    </div>
    <div class="grid grid-cols-4 p-20 gap-20">
        {#each Array(99) as _,i}
        <div 
            in:fly={{y: 100,duration:200,delay:100*(i+1),easing:backOut}} 
            class="relative flex flex-col items-start gap-2"
        >
            <div class="relative">
                <img class="w-96 px-10" src="/WORK/katydid_chair/cover.png" alt="fear_of_forgetting" />
                <div class="absolute left-0 bottom-0">
                    <h2 class="text-eddie-green font-display text-3xl">Katydid Chair</h2>
                </div>
            </div>
            
            <p class="text-eddie-gray font-body w-8/12">short description placeholder bla bla bla bla bla bla bla bla bla bla bla bla</p>
            
        </div>
        {/each}
    </div>
</div>
