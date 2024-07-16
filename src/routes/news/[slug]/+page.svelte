<script lang='ts'>
  import type { PageServerData } from '../$types'
  export let data: PageServerData
</script>

<h1>News</h1>

<h2>
  { data.title }
</h2>

<div class='content'>
  { data.content }
</div>
