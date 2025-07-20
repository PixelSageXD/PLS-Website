<script>
    import Playercard from '$lib/components/playercard.svelte';
    import PlayercardGeneral from '$lib/components/playercardGeneral.svelte';
	import Teamcard from '$lib/components/teamcard.svelte';
    import {TeamCard, PlayerCard, PlayercardGeneral, players} from '$lib/index'

    const Lives = [
        {name:"pixlsage",
        lives:0,
        placement:"8th w/ Genius"},
        {name:"FeebleBrush162",
        lives:0,
        placement:"5th w/ Knight"},
        {name:"Stack_o_nhoj",
        lives:0,
        placement:"9th w/ July"},
        {name:"SaviMatteo2810",
        lives:0,
        placement:"3rd w/ Liv"},
        {name:"Sherbiscute",
        lives:0,
        placement:"10th w/ Eric"},
        {name:"RtxEric",
        lives:0,
        placement:"10th w/ Rei"},
        {name:"Bosph",
        lives:0,
        placement:"1st w/ Madly"},
        {name:"r0cie",
        lives:0,
        placement:"4th w/ Chrome"},
        {name:"Genius_3",
        lives:0,
        placement:"8th w/ Pixel"},
        {name:"BloxySaurus",
        lives:0,
        placement:"11th w/ Pawn"},
        {name:"bopperollz",
        lives:0,
        placement:"6th w/ Tot"},
        {name:"HokiOki",
        lives:0,
        placement:"3rd w/ Savi"},
        {name:"Chrome559",
        lives:0,
        placement:"4th w/ Rosie"},
        {name:"derpishman1",
        lives:0,
        placement:"7th w/ Tyy"},
        {name:"tyy88",
        lives:0,
        placement:"7th w/ Derp"},
        {name:"Pawnair",
        lives:0,
        placement:"11th w/ Bloxy"},
        {name:"MadlyJapanese",
        lives:0,
        placement:"1st w/ Bosph"},
        {name:"webcodes",
        lives:0,
        placement:"2nd w/ Ashley"},
        {name:"DBSJuly",
        lives:0,
        placement:"9th w/ John"},
        {name:"Duelified",
        lives:0,
        placement:"6th w/ Bopper"},
        {name:"_Knghtmare",
        lives:0,
        placement:"5th w/ Ben"},
        {name:"oAshley",
        lives:0,
        placement:"2nd w/ Cody"},
    ]

    const Teams = [
        {teamName: "The Shackers", players:["pixlsage","SaviMatteo2810","Genius_3","HokiOki"]},
        {teamName: "The Fourth Wall", players:["Stack_o_nhoj","Bosph","MadlyJapanese","DBSJuly"]},
        {teamName: "The Kelpless Boys", players:["Sherbiscute","RtxEric","BloxySaurus","Pawnair"]},
        {teamName: "Team Rocket", players:["r0cie","Chrome559","webcodes","oAshley"]},
        {teamName: "Magical Mound", players:["bopperollz","Duelified"]},
        {teamName: "Tender Redemption", players:["derpishman1","tyy88"]},
        {teamName: "Oasis", players:["FeebleBrush162","_Knghtmare"]}
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
    <img src="doublelife_outlined.svg" class="size-1/5 m-auto" alt="double life logo">
  </div>
  <br>
  <div class="info">
  <h2 class="text-4xl">
    <strong>Info:</strong>
  </h2>
  <h2 class="text-xl">Start Date: 11th Jan 2025</h2>
  <h2 class="text-xl">End Date: 8th Feb 2025</h2>
  <h2 class="text-xl">Winner: Bosph (Bosph) & Madly (MadlyJapanese)</h2>
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
