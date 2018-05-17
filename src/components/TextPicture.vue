<template>
  <section id="about-us-area">
    <div class="container">
      <div class="row">
        <!-- image box -->
        <div class="col-lg-6" v-bind:class="{ 'order-2': textLeft }">
          <div class="serviceBox section-title-v1">
            <div class="service-content">
              <img src="/static/assets/img/Home-v1/about-img.png" alt="" />
            </div>
          </div>
        </div>
        <!-- box details -->
        <div class="col-lg-6" v-bind:class="{ 'order-2': !textLeft }">
          <div class="box-details section-title-v1">
            <h2>{{ title }}</h2>
            <div class="border-img"><img src="/static/assets/img/Home-v1/border.png" alt="" /></div>
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
  </section>
</template>

<script>
export default {
  name: 'TextPicture',
  props: {
    title: String,
    textLeft: Boolean
  }
}
</script>
