<script>
    console.log('svelte widget')
    let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<h3>Svelte counter: {count}</h3>
<button on:click={handleClick}>click</button>