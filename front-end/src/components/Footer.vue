<template>
  <div class="navbar-footer" id="footer">
    <p class="flex-child">Ponderizer <i>(8 Hours Spent)</i></p>
    <a class="flex-child" 
      href="https://github.com/brighamband/ponderizer"
    >
    See Source Code
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style scoped>
  #footer {
    display: flex;
    align-items: center;
    text-align: center;
  }
  
  a {
    color: rgb(187, 187, 187);
  }

  i {
    font-size: small;
  }
</style>