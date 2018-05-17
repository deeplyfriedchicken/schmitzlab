<template>
  <div>
    <!-- agency benner start -->
    <banner></banner>
    <!-- agency benner end -->
    <!-- portfolio start -->
    <masonry></masonry>
    <!--  portfolio end -->
    <!-- agency block start -->
    <latest-blogs></latest-blogs>
    <!-- agency block end -->
  </div>
</template>
<script>
import Masonry from '../components/Masonry.vue'
import LatestBlogs from '../components/LatestBlogs.vue'
import Banner from '../components/Banner.vue'

export default {
  name: 'Projects',
  components: {
    'masonry': Masonry,
    'latest-blogs': LatestBlogs,
    'banner': Banner
  }
}
</script>
