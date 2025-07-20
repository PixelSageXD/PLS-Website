<script>
    import Playercard from '$lib/components/playercard.svelte';
    import PlayercardGeneral from '$lib/components/playercardGeneral.svelte';
	import Teamcard from '$lib/components/teamcard.svelte';
    import {TeamCard, PlayerCard, PlayercardGeneral, players} from '$lib/index'

    const Lives = [
        {name:"pixlsage",
        lives:0,
        placement:"3rd"},
        {name:"FeebleBrush162",
        lives:0,
        placement:"17th"},
        {name:"Stack_o_nhoj",
        lives:0,
        placement:"7th"},
        {name:"SaviMatteo2810",
        lives:0,
        placement:"2nd"},
        {name:"Sherbiscute",
        lives:0,
        placement:"8th"},
        {name:"Bosph",
        lives:0,
        placement:"10th"},
        {name:"r0cie",
        lives:0,
        placement:"1st"},
        {name:"Genius_3",
        lives:0,
        placement:"9th"},
        {name:"BloxySaurus",
        lives:0,
        placement:"16th"},
        {name:"Pawnair",
        lives:0,
        placement:"4th"},
        {name:"MadlyJapanese",
        lives:0,
        placement:"12th"},
        {name:"webcodes",
        lives:0,
        placement:"13th"},
        {name:"DBSJuly",
        lives:0,
        placement:"6th"},
        {name:"Duelified",
        lives:0,
        placement:"5th"},
        {name:"_Knghtmare",
        lives:0,
        placement:"11th"},
        {name:"teaveefam",
        lives:0,
        placement:"15th"},
        {name:"Outcast7651",
        lives:0,
        placement:"14th"}
    ]

    const Teams = [
        {teamName: "The Resurgents", players:["pixlsage","SaviMatteo2810","r0cie"]},
        {teamName: "The Mourners", players:["Sherbiscute","Bosph","Genius_3","webcodes"]},
        {teamName: "Starch Boys", players:["Pawnair","MadlyJapanese","Duelified"]},
        {teamName: "The Circus Troupe", players:["DBSJuly","_Knghtmare","teaveefam","Outcast7651"]}
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
    <img src="limitedlife_outlined.svg" class="size-1/5 m-auto" alt="limited life logo">
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
    {#each Lives as {name,lives}}
        <PlayerCardGeneral player="{name}" nickname="{players[name]["nickname"]}" lives={lives} seasons={players[name][seasons]}></PlayerCard>
    {/each}
  </div>

  <div class="teams">
    {#each Teams as team}
        <Teamcard teamName={team.teamName}>
            {#each team.players as player}
                <PlayerCard player={player} nickname={players[player]["nickname"]} lives={getData(player)?.lives} placement="{placement}""></PlayerCard>
            {/each}
        </Teamcard>
    {/each}
  </div>
