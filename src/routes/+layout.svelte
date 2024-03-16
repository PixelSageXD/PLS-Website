<script>
    import "../app.css"
    export const prerender = true;
</script>

<div class="nav">
    <a href="/">
        <img src="life_series_white.svg" class="size-1/2 w-[160px]" alt="home">
    </a>
</div>
<div class="container">
    <slot></slot>
</div>
