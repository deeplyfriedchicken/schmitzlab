<template>
  <section id="portfolio-shots-area">
    <div class="container">
      <!-- title -->
      <div class="row">
        <div class="agency-title">
          <h2>Our Latest Shots</h2>
          <p>There are many variations of passages of Lorem Ipsum availa but the majority have
          <br />suffered alteration in some form, by injected humour, or randomised.</p>
          <img src="/static/assets/img/Home-v1/border.png" alt="" />
        </div>
      </div>
      <div class="portfolio-v1-grid">
        <div class="row" v-masonry transition-duration="0.3s" item-selector=".portfolio-grid-item">
          <div v-masonry-tile class="" v-for="(item, index) in list" v-bind:key="index">
            <div :class='`col-md-4 portfolio-grid-item`'>
              <div class="box">
                <img :src="item.img" alt="" />
                <div class="box-content">
                  <h3 class="title">Lorem Ipsum</h3>
                  <span class="post">Ui & Ux Design</span>
                </div>
                <ul class="icon">
                  <li><a href="#"><i class="fa fa-search"></i></a></li>
                  <li><a href="#"><i class="fa fa-link"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Masonry',
  data () {
    return {
      list: [
        {
          img: '/static/assets/img/Home-v1/Portfolio/Portfolio_1.jpg'
        },
        {
          img: '/static/assets/img/Home-v1/Portfolio/Portfolio_4.jpg'
        },
        {
          img: '/static/assets/img/Home-v1/Portfolio/Portfolio_3.jpg'
        },
        {
          img: '/static/assets/img/Home-v1/Portfolio/Portfolio_2.jpg'
        },
        {
          img: '/static/assets/img/Home-v1/Portfolio/Portfolio_3.jpg'
        },
        {
          img: '/static/assets/img/Home-v1/Portfolio/Portfolio_5.jpg'
        }
      ]
    }
  }
}
</script>
