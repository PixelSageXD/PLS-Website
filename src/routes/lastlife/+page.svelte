<script>
    import Playercard from '$lib/components/playercard.svelte';
    import PlayercardGeneral from '$lib/components/playercardGeneral.svelte';
	import Teamcard from '$lib/components/teamcard.svelte';
    import {TeamCard, PlayerCard, PlayercardGeneral, players} from '$lib/index'

    const Lives = [
        {name:"pixlsage",
        lives:0,
        placement:"2nd"},
        {name:"FeebleBrush162",
        lives:0,
        placement:"15th"},
        {name:"Stack_o_nhoj",
        lives:0,
        placement:"8th"},
        {name:"SaviMatteo2810",
        lives:0,
        placement:"6th"},
        {name:"Sherbiscute",
        lives:0,
        placement:"3rd"},
        {name:"Bosph",
        lives:0,
        placement:"5th"},
        {name:"Genius_3",
        lives:0,
        placement:"1st"},
        {name:"MxPotoo",
        lives:0,
        placement:"7th"},
        {name:"BloxySaurus",
        lives:0,
        placement:"13th"},
        {name:"bopperollz",
        lives:0,
        placement:"9th"},
        {name:"HokiOki",
        lives:0,
        placement:"14th"},
        {name:"Chrome559",
        lives:0,
        placement:"16th"},
        {name:"myangu",
        lives:0,
        placement:"12th"},
        {name:"derpishman1",
        lives:0,
        placement:"10th"},
        {name:"tyy88",
        lives:0,
        placement:"17th"},
        {name:"Pawnair",
        lives:0,
        placement:"11th"},
        {name:"MadlyJapanese",
        lives:0,
        placement:"4th"},
    ]

    const Teams = [
        {teamName: "Safe Haven Alliance", players:["pixlsage","FeebleBrush162","Genius_3","MxPotoo","HokiOki"]},
        {teamName: "Southern Chaos", players:["Sherbiscute","SaviMatteo2810","CHrome559","myangu","Pawnair"]},
        {teamName: "Tender Defenders", players:["derpishman1","tyy88"]},
        {teamName: "The Irish Cartel", players:["Stack_o_nhoj","Bosph","MadlyJapanese"]}
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
    <img src="lastlife_outlined.svg" class="size-1/5 m-auto" alt="last life logo">
  </div>
  <br>
  <div class="info">
  <h2 class="text-4xl">
    <strong>Info:</strong>
  </h2>
  <h2 class="text-xl">Start Date: 26th Oct 2024</h2>
  <h2 class="text-xl">End Date: 30th Nov 2024</h2>
  <h2 class="text-xl">Winner: Genius (Genius_3)</h2>
  </div>

  <div class="playerGrid m-10">
    {#each Lives as {name,lives}}
        <PlayerCardGeneral player="{name}" nickname="{players[name]["nickname"]}" lives={lives} seasons={players[name][seasons]}></PlayerCard>
    {/each}
  </div>

  <div class="teams">
    {#each Teams as team}
        <Teamcard teamName={team.teamName}>
            {#each team.players as player}
                <PlayerCard player={player} nickname={players[player]["nickname"]} lives={getData(player)?.lives} placement={players[name][placements][0]}></PlayerCard>
            {/each}
        </Teamcard>
    {/each}
  </div>
