<template>
  <div class="container">
    <div class="row">
      <!-- box details -->
      <div class="col-lg-10 offset-lg-1">
        <div class="box-details section-title-v1">
          <div class="text-center">
            <h2>{{ title }}</h2>
            <div class="border-img"><img src="/static/assets/img/Home-v1/border.png" alt="" /></div>
          </div>
          <p>There are many variations of passages of Lorem Ipsum availa
          but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look
          even slightly believable.</p>
          <p>If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn't anything embarrassing hidden.</p>
          <p>There are many variations of passages of Lorem Ipsum availa
          but the majority have suffered alteration in some.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParagraphText',
  props: {
    title: String
  }
}
</script>
