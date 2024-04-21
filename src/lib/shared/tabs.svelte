<script>
    import { createEventDispatcher 0} from 'svelte';
    const dispatch = createEventDispatcher();

    export let items;
    export let activeItem;

</script>

<div class="tabs">
 <ul>
    {#each items as item}
        <li on:click={() => dispatch('tabChange', item)}>
           <div class:active={item === activeItem}>{item}</div> 
        </li>
    {/each}
 </ul>
 li{
    margin: 0 16px;
    font-size: 18px;
    color: #e3e3e5;
    cursor: pointer;
 }
</div>

<style>
    .tabs{
        margin-bottom: 40px
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    .active{
        color: #612626;
        border-bottom: 2px solid #612626;
        padding-bottom: 8px;
    }
</style>