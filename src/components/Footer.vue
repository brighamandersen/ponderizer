<template>
  <div class="navbar-footer" id="footer">
    <p class="footer-item">Ponderizer</p>
    <a class="footer-item" 
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

  .footer-item {
    flex: 1;
  }
  
  a {
    color: gray;
  }
</style>