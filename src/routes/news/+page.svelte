<script lang='ts'>
  import type { PageServerData } from './$types'
  export let data: PageServerData
</script>


<h1>News</h1>

<ul>
  {#each Object.entries(data.json) as [key, value]}
    <li>
      <a href='/news/{value.slug}'>
        {value.title}
      </a>
    </li>
  {/each}

  <ul>
    <li><a href='/'>Main</a></li>
    <li><a href='/fetch'>Fetch</a></li>
    <li><a href='/comment'>Comment</a></li>
  </ul>
</ul>