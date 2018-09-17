<template>
  <div class="edulight">
    <main>
      <div class="land"><h1>WELCOME TO EDULIGHT CONSULTING</h1>
      </div>
        <div class="btn-element">
          <button class="btn">About</button>
          <button class="btn">Testimonials</button>
        </div>
      
      
    </main>
  </div>
</template>

<script>
export default {
  name: "Edulight",
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  main{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height:87.6vh;
    background-image: url("../assets/astar.jpeg");
  }
  .land{
    margin-top: 200px;
    font-size:23px;
  }
  .btn{
    margin: 10px;
    padding:10px;
    border-radius: 7px;
    outline:none;
    cursor: pointer;
    background-color: rgb(209, 51, 51);
  }
  .btn-element{
    margin-bottom: 80px;
  }
</style>
