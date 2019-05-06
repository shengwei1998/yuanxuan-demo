<template>
  <div>
    <h1>{{total}}</h1>
    <ul>
      <li
        v-for="navItem in navList"
        :key="navItem.id"
      >
        {{ navItem.name }}
      </li>
    </ul>
    <ul>
      <li>
        <img
          v-for="imgItem in bannerList"
          :key="imgItem.id"
          :src="imgItem.picUrl"
          alt=""
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('home', [
      'total',
      'navList',
      'bannerList'
    ])
  },
  methods: {
    ...mapActions('home', [
      'getTotalList',
      'getNavList',
      'getBannerList'
    ])
  },
  created () {
    this.getTotalList()
    this.getNavList()
    this.getBannerList()
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
