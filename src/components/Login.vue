<template>
  <div class="login">
    <fieldset class="login-field">
      <div>用户名:<input class="account" v-model="account.account"></div>
      <div>密&nbsp;&nbsp;&nbsp;码:<input class="account" type="password" v-model="account.password"></div>
      <button class="login-btn" @click="login">登录</button>
    </fieldset>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                account:{
                    account: '',
                    password:''
                }
            }
        },
      methods:{
          login:function(){
              console.log(this.account);
              this.$router.push('/main')
          }
      }
    }
</script>

<style scoped>
  .login{
    margin: 0 auto;
    width: 100%;
    height: 900px;
    padding: 20% 5%;
    background-image: url("../assets/images/bg.gif");
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
