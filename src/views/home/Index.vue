<template>
  <div>
    <router-view></router-view>
    <Tabs></Tabs>
  </div>
</template>

<script>
import Tabs from '../../components/Tabs'
export default {
  components: {
    Tabs,
  }
}
</script>
