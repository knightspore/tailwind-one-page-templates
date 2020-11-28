<template>
  <head-slot>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 
  </head-slot>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 font-inter antialiased">
    <Dashboard/>
    <div class="sticky bottom-0">
      <Nav/>
    </div>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    Nav
  }
};
</script>
