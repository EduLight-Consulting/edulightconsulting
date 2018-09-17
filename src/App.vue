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
        <div class="nav-links" ><router-link class="link" to="/about">ABOUT</router-link>
        <router-link class="link" to="/profile">PROFILES</router-link>
        <router-link class="link" to="/staffs">STAFFS</router-link>
        <router-link class="link" to="/testimonials">TESTIMONIALS</router-link></div>
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
.nav-btn {
  display: none;
}
#nav-check {
  display: none;
}
#header{
  padding: 20px;
  background-image: url("./assets/astar.jpeg"); 
  display: grid;
  border-radius: 2px;
  grid-template-columns: 120px 1fr 420px; 
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
    background-color: transparent;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    /* box-shadow: 0 0 2px 0px rgb(8, 7, 7);  */
}
.link:hover{
    padding: 10px;
    margin-right: 5px;
    background-color: transparent;
    color: #38ce;
    text-decoration: none;
    border-radius: 5px;
    /* box-shadow: 0 0 2px 0px rgb(8, 7, 7);  */
}
@media (max-width:500px) {
  #header{
    padding: 30px;
    background-color: #2c3e50; 
    display: grid;
    color: aliceblue;
    grid-template-columns: 100px 1fr 200px; 
}
  .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding-top: 30px;
  }
 .nav-btn > label:hover {
    cursor: pointer;
  }
.nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: transparent;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-x: hidden;
    overflow-y: hidden;
    top: 91px;
    left: 0px;
  }
  .nav-links > router-link {
    display: block;
    width: 100%;
  }
  .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  #nav-check:not(:checked) + .nav-links {
    height: 0px;
  }
  #nav-check:checked + .nav-links {
    margin-top: -3px;
    height: calc(18vh - 91px);
    overflow-y: hidden;
  }
}
</style>
