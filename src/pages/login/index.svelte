<script lang="ts">
import {push} from 'svelte-spa-router'
const name = "Hello"
</script>

<main>
  <div>Login {name}</div>
  <button on:click={() => push("/home?id=1")}>Go Home</button>
</main>



