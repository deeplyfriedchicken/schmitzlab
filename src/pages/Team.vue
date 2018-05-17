<template>
  <div>
    <banner></banner>
    <lab-members></lab-members>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import LabMembers from '../components/LabMembers.vue'

export default {
  name: 'Team',
  components: {
    'banner': Banner,
    'lab-members': LabMembers
  }
}
</script>
