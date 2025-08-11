<script>
    export var name = "";
    export var lives = 3;
    export var nickname = "";
    export var blurb = "";
    export var placement = "";

    /**
	 * @param {number} lives
	 */
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

<div class={"PlayerCard"}>
    <img
      src={`/players/${name}.png`}
      on:error={(e) => e.target.src = '/players/placeholder.png'}
      class={`h-36 mx-auto mt-5 mb-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] ${getPlayerColour(lives)}`}
      alt={nickname}
    />
    <h2 class={"bungee text-2xl text-center " + getPlayerColour(lives)}>
      <strong>{nickname}</strong>
    </h2>
    <h5 class="text-center">{name}</h5>
    <h6 class="text-center">{placement}</h6>
    <p class={blurb ? "py-10" : "mb-5"}>{blurb}</p>
</div>