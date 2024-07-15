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

<ul>
  <li><a href='/'>Main</a></li>
  <li><a href='/fetch'>Fetch</a></li>
  <li><a href='/comment'>Comment</a></li>
  <li><a href='/news'>News</a></li>
</ul>