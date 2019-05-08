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
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="bannerItem in bannerList"
          :key="bannerItem.id"
        >
          <img :src="bannerItem.picUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.min.css'
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
      'getBannerList',
      'getShopList'
    ]),
    banner () {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  },
  created () {
    this.getTotalList()
    this.getNavList()
    this.getBannerList()
    this.getShopList()
  },
  updated () {
    this.banner()
  }
}
</script>

<style>
  .banner{
    width: 100%;
    height: 200px;
  }
  .banner img {
    width: 100%;
    height: 100%
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 3px;
    border-radius: 0;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }
</style>
