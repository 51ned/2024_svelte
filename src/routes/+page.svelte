<script>
  let name = 'World'
</script>


<form>
  <label for='name'>
    What is your name?
  </label>

  <input
    bind:value={name}
    id='name'
    name='name'
    type='text'
  />
</form>

<h1>
  Hello, <span class='name'>{name}</span>!
</h1>


<style>
  .name { color: red; }
</style>
