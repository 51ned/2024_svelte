<script lang='ts'>
  import { enhance } from '$app/forms'
  
  let comment = ''

  export const snapshot = {
    capture: () => comment,
    restore: (item) => comment = item
  }

  export let form
</script>


<div class='wrap'>
  {#if form && form.status === true}
    <p>{form.msg}</p>
  {/if}

  <form
    action='?/create'
    method='POST'
    use:enhance
  >
    <label>
      Comment
      <input
        bind:value={comment}
        name='comment'
        type='text'
      />
    </label>

    <button>Submit</button>
    <button formaction='?/star'>Star</button>
    <button formaction='?/reply'>Reply</button>
  </form>
</div>


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