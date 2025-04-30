<script lang="ts">
  import {location} from 'svelte-spa-router'

const name = "Home"
</script>

<main>
  <div>Home {name}</div>
  <p>The current page is: {$location}</p>
  <div class="tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</main>



