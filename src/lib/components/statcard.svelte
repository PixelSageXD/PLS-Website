<script>
    export var player = "";
    export var nickname = "";
    export var kills = 0;
    export var deaths = 0;
    export var livesGiven = 0;
    export var livesRecieved = 0
</script>

<div>
    <p style="display:inline-block;">
        <img src="players/" + player + ".png">
        <h1 class="text-3xl pb-5 bungee">{nickname}</h1>
      </p>
    <div class="statCard">
        <p class=text-l>
            Kills: {kills}
            Deaths: {deaths}
            Lives given: {livesGiven}
            Lives recieved: {livesRecieved}
        </p>
    </div>
</div>