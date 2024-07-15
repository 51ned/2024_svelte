<script lang='ts'>
  export let form
</script>


<div class='wrap'>
  {#if form && form.status === true}
    <p>{form.msg}</p>
  {/if}

  <form method='POST'>
    <label>
      Comment
      <input name='comment' type='text'>
    </label>

    <button>
      Submit
    </button>
  </form>
</div>

<ul>
  <li><a href='/'>Main</a></li>
  <li><a href='/fetch'>Fetch</a></li>
</ul>


<style>
  .wrap {
    margin: 0 auto;
    text-align: center;
    width: 50%;
  }

  p {
    color: green;
  }

  label {
    display: block;
    margin: 1rem;
  }
</style>