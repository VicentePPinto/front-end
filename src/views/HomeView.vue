<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <sidebarItem></sidebarItem>
  </div>
</template>

<script>
import SidebarItem from '@/components/Sidebar.vue'

export default {
  name: 'HomeView',
  components: {
     'sidebarItem': SidebarItem
  }
}
</script>
