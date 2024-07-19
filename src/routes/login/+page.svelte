<script lang='ts'>
  import { enhance } from '$app/forms'

  export let data
  export let form
</script>


{#if form?.msg}
  { form.msg }
{/if}

{#if data.user}
  <p>
    Welcome, {data.user.name}
  </p>
{/if}

<form
  action='?/login'
  method='POST'
  use:enhance
>
  <label for='username'>
    Username
  </label>

  <input
    id='username'
    name='username'
    type='text'
  />

  <label for='password'>
    Password
  </label>

  <input
    id='password'
    name='password'
    type='password'
  />

  <button>
    Log in
  </button>
</form>


<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 25%;
  }

  label {
    margin: 0 .5em;
  }

  input {
    display: block;
    margin: .25em 1em 1em;
  }
</style>