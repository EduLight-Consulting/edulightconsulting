<template>
  <div id="app">
    <header id="header">
      <router-link to="/" class="logo">Edulight Consulting</router-link>
      <nav>
        <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <input type="checkbox" id="nav-check">
        <div class="nav-links" ><router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/profile">Profiles</router-link>
        <router-link class="link" to="/staffs">Staffs</router-link>
        <router-link class="link" to="/testimonials">Testimonials</router-link></div>
      </nav>
   </header>
   <transition name="router-anim" enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
    <router-view/>
   </transition>
  </div>
</template>

<script>
import Edulight from "./components/edulight.vue";

export default {
  name: "app",
  components: {
    Edulight
  }
};
</script>

<style>
*{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  color: #fff;
}
#header{
  padding: 20px;
  background-color: #e65454; 
  display: grid;
  border-radius: 2px;
  grid-template-columns: 150px 1fr 320px; 
}
#app{
  position: relative;
}
nav{
  grid-column: 3 / -1;
}
.logo{
  text-decoration: none;
  font-size: 20px;
}
.link{
    padding: 10px;
    margin-right: 5px;
    background-color: rgba(80, 159, 224, 0.933);
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 0 2px 0px rgb(8, 7, 7); 
}
</style>
