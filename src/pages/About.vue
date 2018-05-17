<template>
  <div id="about">
    <!-- about us start -->
    <p-text title="About Us"></p-text>
    <text-picture title="Test" text-left></text-picture>
    <!-- about us area end -->
    <!-- Our mission area start -->
    <text-picture title="Our Mission"></text-picture>
    <!-- Our mission area end -->
    <!-- Portfolio start -->
    <portfolio></portfolio>
    <lab-members></lab-members>
  </div>
</template>

<script>
import TextPicture from '../components/TextPicture.vue'
import Portfolio from '../components/Portfolio.vue'
import LabMembers from '../components/LabMembers.vue'
import ParagraphText from '../components/ParagraphText.vue'

export default {
  name: 'About',
  components: {
    'text-picture': TextPicture,
    'portfolio': Portfolio,
    'lab-members': LabMembers,
    'p-text': ParagraphText
  }
}
</script>
