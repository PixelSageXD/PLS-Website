<script lang="ts">
    import PlayerCard from '$lib/components/playerCard.svelte';
    import PlayerCardGeneral from '$lib/components/playerCardGeneral.svelte';
	import TeamCard from '$lib/components/teamCard.svelte';
    import generalData from '$lib/data/general.json';
    import seasonData from '$lib/data/limitedlife/players.json';
    import teamData from '$lib/data/limitedlife/teams.json';

    const playerData = seasonData.map(seasonPlayer => {
      const generalInfo = generalData.find(g => g.name === seasonPlayer.name);

      return {
        name: seasonPlayer.name,
        nickname: generalInfo?.nickname ?? "",
        lives: seasonPlayer.lives,
        placement: seasonPlayer.placement,
        seasons: generalInfo?.seasons ?? "",
      };
    });

    function getPlayer(name: string) {
        return playerData.find(p => p.name === name);
    }
</script>

<div style="margin: 2rem;">
    <div class="text-center logo mb-10">
        <img src="limitedlife_website.png" class="size-1/5 m-auto" alt="limited life logo">
    </div>
    <br>
    <div class="info">
    <h2 class="text-4xl">
        <strong>Info:</strong>
    </h2>
    <h2 class="text-xl">Start Date: 12th Apr 2025</h2>
    <h2 class="text-xl">End Date: 31st May 2025</h2>
    <h2 class="text-xl">Winner: Rosie (r0cie)</h2>
    </div>

    <div class="playerGrid m-10">
        {#each playerData as player}
            <PlayerCardGeneral
                name={player.name}
                nickname={player.nickname}
                lives={player.lives}
                seasons={player.seasons}
            />
        {/each}
    </div>

    <div class="teams">
    {#each teamData as team}
        <TeamCard teamName={team.teamName}>
        {#each team.players as playerName}
            {#if getPlayer(playerName)}
            <PlayerCard {...getPlayer(playerName)}/>
            {:else}
            <p>Player not found: {playerName}</p>
            {/if}
        {/each}
        </TeamCard>
    {/each}
    </div>
</div>