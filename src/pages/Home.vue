<template>
  <div>
    <banner></banner>
    <!-- Know More start -->
    <text-picture></text-picture>
    <!-- Know More end -->
    <!-- Portfolio start -->
    <portfolio></portfolio>
    <!-- Our Team start -->
    <lab-members></lab-members>
    <!-- contact start -->
    <contact-us></contact-us>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import TextPicture from '../components/TextPicture.vue'
import Portfolio from '../components/Portfolio.vue'
import LabMembers from '../components/LabMembers.vue'
import ContactUs from '../components/ContactUs.vue'

export default {
  name: 'Home',
  components: {
    'banner': Banner,
    'text-picture': TextPicture,
    'portfolio': Portfolio,
    'lab-members': LabMembers,
    'contact-us': ContactUs
  }
}
</script>
