<template>
  <div class="p-6">
    <!-- Profile Card -->
    <div class="pb-8 bg-white rounded-3xl text-indigo-900 shadow-lg">
      <ProfileCard/>
    </div>

    <!-- Overview -->
    <div class="py-4">
      <Accounts/>
    </div>

  </div>
</template>

<script>
import ProfileCard from './Dashboard/ProfileCard';
import Accounts from './Dashboard/Accounts';

export default {
  name: "Dashboard",
  components: {
    ProfileCard,
    Accounts    
  }
};
</script>
