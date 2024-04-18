<script>
    import Playercard from '$lib/components/playercard.svelte';
	import Teamcard from '$lib/components/teamcard.svelte';
    import {TeamCard, PlayerCard, players} from '$lib/index'

    const Lives = [
        {name:"PixelSageXD",
        lives:3},
        {name:"FeebleBrush162",
        lives:2},
        {name:"NexoJohn",
        lives:0},
        {name:"Tofu_Beans",
        lives:3},
        {name:"oblivizin",
        lives:3},
        {name:"SaviMatteo2810",
        lives:2},
        {name:"Sherbiscute",
        lives:3},
        {name:"RtxEric",
        lives:0},
        {name:"wolfiegames101",
        lives:0},
        {name:"Bosph",
        lives:2},
        {name:"FrostyBoi61",
        lives:0},
        {name:"Daedreamerz",
        lives:0},
        {name:"_just_Andi_",
        lives:0}
    ]

    const Teams = [
        {teamName: "The Transformers", players:["Tofu_Beans","oblivizin"]},
        {teamName: "The Introverts", players:["wolfiegames101","RtxEric","Sherbiscute","SaviMatteo2810"]},
        {teamName: "Last Minute Alliance", players:["FrostyBoi61","Daedreamerz","_just_Andi_"]},
        {teamName: "The Businessmen", players:["PixelSageXD","FeebleBrush162","NexoJohn"]}
    ]

    /**
	 * @param {string} playerName
	 */
    function getData(playerName) {
        let player = Lives.find(player => player.name === playerName);
        return player
    }
</script>

<div class="text-center logo mb-10">
    <img src="third_life_white.svg" class="size-1/5 m-auto" alt="third life logo">
  </div>
  <br>
  <div class="info">
  <h2 class="text-4xl">
    <strong>Info:</strong>
  </h2>
  <h2 class="text-xl">Start Date: 24th Feb 2024</h2>
  <h2 class="text-xl">End Date: N/A</h2>
  <h1 class="text-x1">Winner: N/A</h1>
  </div>

  <div class="playerGrid m-10">
    {#each Lives as {name,lives}}
        <PlayerCard player="{name}" nickname="{players[name]["nickname"]}" lives={lives}></PlayerCard>
    {/each}
  </div>

  <div class="teams">
    {#each Teams as team}
        <Teamcard teamName={team.teamName}>
            {#each team.players as player}
                <PlayerCard player={player} nickname={players[player]["nickname"]} lives={getData(player)?.lives}></PlayerCard>
            {/each}
        </Teamcard>
    {/each}
  </div>
