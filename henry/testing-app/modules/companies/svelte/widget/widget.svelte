<script lang="ts">
    import type {companies} from '@test/testing-app/companies-svelte.store';
    import Footer from './footer.svelte';

    export let store: typeof companies;
</script>

<h1>Svelte Companies List</h1>
<ul>
    {#if !$store.loaded}
        ...
    {/if}

    {#if $store.loaded}
        {#each $store.value as item (item.id)}
            <li>
                <strong>{item.name}</strong>
            </li>
        {/each}
    {/if}
</ul>
<Footer/>

<style>
    h1 {
        color: red;
    }
</style>
