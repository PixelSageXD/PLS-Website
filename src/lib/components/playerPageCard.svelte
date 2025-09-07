<script>
    export var name = "";
    export var nickname = "";
    export var blurb = "";
    export var seasons = "";
</script>

<a href="/players/{name}">
    <div class={"PlayerCard"}>
        <img
        src={`/players/${name}.png`}
        on:error={(e) => e.target.src = '/players/placeholder.png'}
        class={`h-36 mx-auto mt-5 mb-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]`}
        alt={nickname}
        />
        <h2 class={"bungee text-2xl text-center"} style="color:white">
        <strong>{nickname}</strong>
        </h2>
        <h5 class="text-center" style="color:white">{name}</h5>
        <h6 class="text-center" style="color:white">{seasons}</h6>
        <p class={blurb ? "py-10" : "mb-5"}>{blurb}</p>
    </div>
</a>