<script>
    export var sessionNum = "";
</script>

<div>
    <h1 class="text-4xl pb-5 bungee">{sessionNum}</h1>
    <div class="sessionCard">
        <slot></slot>
    </div>
</div>