<script>
  import { page } from '$app/stores'
</script>


<h1>News</h1>

<h2>
  { $page.status }
</h2>

<div class='content'>
  { $page.error?.message }
</div>

<h3>Try this instead:</h3>

<ul>
  <li><a href='/'>Main</a></li>
  <li><a href='/fetch'>Fetch</a></li>
  <li><a href='/comment'>Comment</a></li>
  <li><a href='/news'>News</a></li>
</ul>


<style>
  * {
    font-family: sans-serif;
  }
  
  h1, h2, .content {
    color: #358eaa;
    text-align: center;
  }
</style>