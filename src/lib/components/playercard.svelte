<script>
    export var player = "";
    export var lives = 3;
    export var nickname = "";
    export var blurb = "";

    function getPlayerColour(lives) {
        if (lives === 4) {
            return "darkGreenLife"
        } else if (lives === 3) {
            return "greenLife"
        } else if (lives === 2) {
            return "yellowLife"
        } else if (lives == 1) {
            return "redLife"
        } else {
            return "noLives"
        }
    }
</script>

<div class="playerCard">
    <img
      src={
        "players/" + player + ".png"
      }
      class="h-36 mx-auto mt-5 mb-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
      alt={nickname}
    >
    <h2 class={"bungee text-2xl text-center "+getPlayerColour(lives)}>
      <strong>{nickname}</strong>
    </h2>
    <h5 class="text-center">({player})</h5>
    <p class={blurb ? "py-10" : "mb-5"}>{blurb}</p>
</div>