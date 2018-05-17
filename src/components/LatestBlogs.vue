<template>
  <section id="our-blog-area">
    <div class="container">
      <!-- section title -->
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="section-title-v1 text-center section-title">
            <h2>Our Latest Blogs</h2>
            <p>There are many variations of passages of Lorem Ipsum availa but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
            <div class="border-img"><img src="/static/assets/img/Home-v1/border.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="row biog-content">
        <!-- single blog post -->
        <div class="col-lg-4 col-md-4 col-sm-6 ">
          <div class="post-slide">
            <div class="post-img">
              <img src="/static/assets/img/Home-v1/bp1.jpg" alt="">
              <div class="category">HTML</div>
            </div>
            <div class="post-review">
              <h3 class="post-title">We Make Awesome</h3>
              <p class="post-description">There are many variations of passage of Lorem Ipsum availa.</p>
              <div class="post-bar">
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <!-- single blog post -->
        <div class="col-lg-4 col-md-4 col-sm-6 ">
          <div class="post-slide">
            <div class="post-img">
              <img src="/static/assets/img/Home-v1/bp2.jpg" alt="">
              <div class="category">Wordpress</div>
            </div>
            <div class="post-review">
              <h3 class="post-title">Website is Resume</h3>
              <p class="post-description">There are many variations of passage of Lorem Ipsum availa.</p>
              <div class="post-bar">
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <!-- single blog post -->
        <div class="col-lg-4 col-md-4 col-sm-6 ">
          <div class="post-slide">
            <div class="post-img">
              <img src="/static/assets/img/Home-v1/bp3.jpg" alt="">
              <div class="category">Web Design</div>
            </div>
            <div class="post-review">
              <h3 class="post-title">Good Website is best</h3>
              <p class="post-description">There are many variations of passage of Lorem Ipsum availa.</p>
              <div class="post-bar">
                <a href="#">Read more</a>
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
  name: 'LatestBlogs'
}
</script>
