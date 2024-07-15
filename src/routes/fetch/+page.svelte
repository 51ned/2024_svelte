<script lang='ts'>
  import type { PageData } from './$types'
	export let data: PageData
</script>


<h1>Astronomy picture of the day</h1>
<h2>{data.title}</h2>

<div class='wrap'>
  <a href={data.hdurl}>
    <img alt='some pic' src={data.url}>
  </a>
</div>

<p>{data.explanation}</p>

<ul>
  <li><a href='/'>Main</a></li>
  <li><a href='/comment'>Comment</a></li>
  <li><a href='/news'>News</a></li>
</ul>


<style>
  h1, h2 {
    text-align: center;
  }

  .wrap {
    margin: 0 auto;
    max-width: 75%;
    text-align: center;
  }

  img {
    max-width: 100%;
  }
</style>