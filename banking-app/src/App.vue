<template>
  <head-slot>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </head-slot>
  <div class="min-h-screen min-w-screen flex bg-indigo-100 sm:bg-purple-500">
    <div
      class="m-auto font-inter antialiased sm:overflow-y-hidden sm:overflow-y-scroll sm:border-8 border-indigo-900 sm:rounded-3xl panel sm:bg-gradient-to-b from-blue-50 to-indigo-100 sm:shadow-xl"
      style="height: 667px; width: 390px;"
    >
      <Dashboard />
      <div class="sticky bottom-0">
        <Nav />
      </div>
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

<style scoped>
.panel::webkit-scrollbar {
  display: none;
}

.panel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
