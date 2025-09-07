<script>
    import "../app.css"
    import { page } from '$app/stores';
    $: currentPath = $page.url.pathname;

    import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
    const isMobile = writable(false);
    let mounted = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile.set(window.innerWidth <= 768);
		};

		checkMobile();
        mounted = true;

		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

{#if !mounted}
    <div class="loading-screen">
        <p>Loading...</p>
    </div>
{:else if $isMobile}
    <div class="mobile-layout">
        <div class="nav">
            <nav>
                <ul>
                    <li class="desktop-li">
                        <a href="/" class="nav-link" class:active={currentPath === '/'}>Home</a>
                    </li>
                    <li class="desktop-li">
                        <a href="/seasons" class="nav-link" class:active={currentPath === '/seasons'}>Seasons</a>
                    </li>
                    <li class="desktop-li">
                        <a href="/players" class="nav-link" class:active={currentPath === '/players'}>Players</a>
                    </li>
                    <li class="desktop-li">
                        <a href="/videos" class="nav-link" class:active={currentPath === '/videos'}>Videos</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
{:else}
    <div class="desktop-layout">
        <div class="nav">
            <a href="/">
                <img src="lifeseries_website.png" class="size-1/2 w-[160px]" alt="home">
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
    </div>
{/if}

<div class="container">
    <slot></slot>
</div>

<style>
    .desktop-li {
        margin-left: 10px
    }

    .mobile-li {
        margin-left: 5px
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

    .loading-screen {
        display: flex;
        justify-content: center;
        align-items: center; 
        height: 100vh;
        width: 100vw;
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>