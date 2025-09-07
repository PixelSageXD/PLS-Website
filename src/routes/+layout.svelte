<script>
    import "../app.css"
    import { page } from '$app/stores';
    $: currentPath = $page.url.pathname;
</script>

<div class="nav">
    <a href="/">
        <img src="lifeseries_website.svg" class="size-1/2 w-[160px]" alt="home">
    </a>
    <nav>
        <ul>
            <li>
                <a href="/" class="nav-link" class:active={currentPath === '/'}>Home</a>
            </li>
            <li>
                <a href="/seasons" class="nav-link" class:active={currentPath === '/seasons'}>Seasons</a>
            </li>
            <li>
                <a href="/players" class="nav-link" class:active={currentPath === '/players'}>Players</a>
            </li>
            <li>
                <a href="/videos" class="nav-link" class:active={currentPath === '/videos'}>Videos</a>
            </li>
        </ul>
    </nav>
</div>

<div class="container">
    <slot></slot>
</div>

<style>
    li {
        margin-left: 10px
    }
    .nav-link {
        position: relative;
        text-decoration: none;
        font-weight: 500;
        padding-bottom: 2px;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        height: 2px;
        width: 0%;
        background-color: #ff6464;
        transition: width 0.3s ease;
    }

    .nav-link:hover::after {
        width: 85%;
    }

    .nav-link.active {
        color: #ff6464;
    }

    .nav-link.active::after {
        width: 50%;
    }
</style>