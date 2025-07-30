<script>
    export var teamName = "";
</script>

<div class="teamCard">
    <h1 class="text-3xl md:text-5xl lg:text-5xl pb-5 bungee text-gray-200 text-center">{teamName}</h1>
    <div class="TeamCard grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <slot></slot>
    </div>
</div>

<style>
    .teamCard {
        padding: 1rem;
	    border-radius: 1rem;
	    margin-bottom: 2rem;
	    margin-left: 1rem;
	    margin-right: 1rem;
        background-color: #21212a;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.3)
    }
</style>