<script lang="ts">
    import PlayerPageCard from '$lib/components/playerPageCard.svelte';
    import generalData from '$lib/data/general.json';
</script>

<div style="margin: 2rem;">
    <p class="text-center"><strong>Click on any player to navigate to their page!</strong></p>

    <div class="playerGrid m-10">
        {#each generalData as player}
            <PlayerPageCard
                name={player.name}
                nickname={player.nickname}
                seasons={player.seasons}
            />
        {/each}
    </div>
</div>