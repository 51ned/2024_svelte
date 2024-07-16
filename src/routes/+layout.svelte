<script lang='ts'>
  import { Nav } from '$lib'
</script>


<div class='wrapper'>
  <div class='nav'>
    <Nav />
  </div>

  <div class='content'>
    <slot />
  </div>

  <div class='footer'>
    This is my footer
  </div>
</div>


<style>
  .wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  .footer {
    margin: 20px 0;
    text-align: center;
  }
</style>