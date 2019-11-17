<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']" :default-active="this.$router.path" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <el-menu-item index="/list" >文章列表</el-menu-item>
            <el-menu-item index="/add">新建文章{{message}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <router-view></router-view>
    
  </el-container>
</template>

<script>
    export default {
        name: "MainFrame",
        data(){
          return{
            message: this.$store.state.message
          }
        },
        created(){
            this.$store.dispatch('test')
        }
    }
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
</style>
