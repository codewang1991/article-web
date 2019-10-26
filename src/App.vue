<template>
  <div >
    <Login/>
  </div>
</template>

<script>
  import Login from "./components/Login";
export default {
  name: 'App',
  components:{
      Login
  }
}
</script>

<style>
  @import url('./assets/css/normalize.css');
  *{
    background-image: url("./assets/images/bg.gif");
  }

</style>
