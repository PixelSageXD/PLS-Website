<script>
    import Playercard from '$lib/components/playercard.svelte';
	import Teamcard from '$lib/components/teamcard.svelte';
    import Statcard from '$lib/components/statcard.svelte';
    import {TeamCard, PlayerCard, players} from '$lib/index'
    import Tabs from '../../lib/shared/tabs.svelte';
	import { kills, deaths, livesGiven, livesRecieved } from '../../lib/components/statcard.svelte';

    let items = ['Players', 'Alliances', 'Stats', 'Sessions'];
    let activeItem = 'Players'
    const tabChange = (e) => {
        activeItem = e.detail;
    }

    const Lives = [
        {name:"PixelSageXD",
        lives:2},
        {name:"FeebleBrush162",
        lives:1},
        {name:"NexoJohn",
        lives:0},
        {name:"Tofu_Beans",
        lives:2},
        {name:"oblivizin",
        lives:2},
        {name:"SaviMatteo2810",
        lives:2},
        {name:"Sherbiscute",
        lives:2},
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

    const Stats = [
        {name:"PixelSageXD",
        kills:0,
        deaths:2,
        livesGiven:0,
        livesRecieved:1},
        {name:"FeebleBrush162",
        kills:0,
        deaths:2,
        livesGiven:0,
        livesRecieved:0},
        {name:"NexoJohn",
        kills:1,
        deaths:2,
        livesGiven:2,
        livesRecieved:0},
        {name:"Tofu_Beans",
        kills:0,
        deaths:1,
        livesGiven:0,
        livesRecieved:0},
        {name:"oblivizin",
        kills:0,
        deaths:1,
        livesGiven:0,
        livesRecieved:0},
        {name:"SaviMatteo2810",
        kills:0,
        deaths:1,
        livesGiven:1,
        livesRecieved:0},
        {name:"Sherbiscute",
        kills:0,
        deaths:2,
        livesGiven:0,
        livesRecieved:2},
        {name:"RtxEric",
        kills:0,
        deaths:3,
        livesGiven:0,
        livesRecieved:1},
        {name:"wolfiegames101",
        kills:0,
        deaths:3,
        livesGiven:1,
        livesRecieved:0},
        {name:"Bosph",
        kills:1,
        deaths:3,
        livesGiven:0,
        livesRecieved:1},
        {name:"FrostyBoi61",
        kills:4,
        deaths:5,
        livesGiven:0,
        livesRecieved:1},
        {name:"DaeDreamerz",
        kills:2,
        deaths:3,
        livesGiven:1,
        livesRecieved:0},
        {name:"_just_Andi_",
        kills:3,
        deaths:3,
        livesGiven:0,
        livesRecieved:0},
    ]

    const Sessions = [
        {sessionNum: "Session 1",
        text: <p class-text-l>
            Session summaries will not be posted until the series ends.
        </p>}
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
  <Tabs {active} {items} on:tabChange={tabChange} />
  <br>
  <div class="info">
  <h2 class="text-4xl">
    <strong>Info:</strong>
  </h2>
  <h2 class="text-xl">Start Date: 24th Feb 2024</h2>
  <h2 class="text-xl">End Date: N/A</h2>
  <h2 class="text-xl">Winner: N/A</h2>
  </div>

  {#if activeItem === 'Players'}
    <div class="playerGrid m-10">
        {#each Lives as {name,lives}}
            <PlayerCard player="{name}" nickname="{players[name]["nickname"]}" lives={lives}></PlayerCard>
        {/each}
    </div>

  {:else if activeItem == 'Alliances'}
    <div class="teams">
        {#each Teams as team}
            <Teamcard teamName={team.teamName}>
                {#each team.players as player}
                    <PlayerCard player={player} nickname={players[player]["nickname"]} lives={getData(player)?.lives}></PlayerCard>
                {/each}
            </Teamcard>
        {/each}
    </div>

  {:else if activeItem == 'Stats'}
    <div class="stats">
        {#each Stats as statblock}
            <Statcard nickname={players[name]["nickname"]} kills={kills} deaths={deaths} livesGiven={livesGiven} livesRecieved={livesRecieved}></Statcard>
        {/each}
    </div>
    
  {:else if activeItem == 'Sessions'}
    <div class="sessions">
        {#each Sessions as sessionblock}
    </div>

    {/if}
