<template>
  <div class="login">
    <fieldset class="login-field">
      <div>用户名:<input class="account"></div>
      <div>密&nbsp;&nbsp;&nbsp;码:<input class="account" type="password"></div>
      <button class="login-btn">登录</button>
    </fieldset>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .login{
    margin: 20% auto;
  }
  .login-field{
    width: 15%;
    margin: 0 auto;
    border: solid 1px green;
    border-radius: 6px;
  }
  .account {
    height: 20%;
    border: solid 2px green;
    border-radius: 4px;
    margin: 5% auto;
  }
  .login-btn{
    width: 25%;
    border: solid 2px green;
    margin: 10px 40%;
    border-radius: 6px;

  }
</style>
