<template>
  <div id="app">
  <!-- Navigation area start -->
  <header id="top">
    <nav class="nav-v1">
    <div class="container">
      <div class="row">
      <div class="col-xl-2 col-lg-2 col-md-2">
        <div id="brand">
        <div id="logo" class="logo-v1">
          <a href="index-v1.html"><img src="/static/assets/img/Home-v1/logo.png" alt="logo" /></a>
        </div>
        </div>
      </div>
      <div class="col-xl-10 col-lg-10 col-md-10">
        <div id="menu-min">
        <ul class="home-v1" id="menu">
          <li><router-link to="/" active-class="active" exact>Home</router-link>
          <ul>
            <li>
            <router-link to="index-v1.html">Homepage</router-link>
            <router-link to="great-team.html">Homepage (2)</router-link>
            </li>
          </ul>
          </li>
          <li><router-link to="/about" active-class="active">About Us</router-link></li>
          <li><router-link to="/publications" active-class="active">Publications</router-link></li>
          <li><router-link to="/projects" active-class="active">Projects</router-link></li>
          <li><router-link to="/team" active-class="active">Team</router-link></li>
          <li><router-link to="/blog" active-class="active">Blog</router-link></li>
          <li><router-link to="/contact" active-class="active">Contact Us</router-link></li>
        </ul>
        </div>
      </div>
      </div>
    </div>
    </nav>
  </header>
  <!-- Navigation area end -->
  <router-view/>
  <!-- footer start -->
  <footer id="footer-area">
    <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
            <div class="updates-item">
              <h3>Subscribe Us for Updates:</h3>
              <p>We will never spam. Subscribe us for keep in <br>touch with us. We will love it.</p>
        <div class="input-group subscribe-form">
        <input type="text" class="mail-send" placeholder="Your Email here">
        <span><button class="btn subscribe-btn" type="button">SEND</button></span>
        </div>
        <div class="social-icon">
        <h2>Follow Us:</h2>
        <a href=""><i class="fab fa-facebook-square"></i></a>
        <a href=""><i class="fab fa-twitter-square"></i></a>
        <a href=""><i class="fab fa-instagram"></i></a>
        <a href=""><i class="fab fa-pinterest-square"></i></a>
        <a href=""><i class="fab fa-google-plus-square"></i></a>
        <a href=""><i class="fab fa-linkedin"></i></a>
        <a href=""><i class="fab fa-behance-square"></i></a>
        </div>
      </div>
      </div>
    </div>
    </div>
  </footer>
  <!-- footer end -->
  <!-- Copy Start -->
    <footer class="footer">
      <div class="container">
        <div class="row">
      <div class="footer-title">
      <p>&copy; All Rights Reserved by Avabil</p>
      </div>
        </div>
      </div>
    </footer>
    <!-- Copy End -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>