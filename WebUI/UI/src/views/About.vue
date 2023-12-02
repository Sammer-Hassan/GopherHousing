<template>
  <div
    style="margin-top: 0.2rem; margin-bottom: 35px; margin-left: 35px; margin-right: 35px"
    fluid
  >
    <div>
      <h1 style="padding-top: 20px; font-weight: bold" >Gopher Housing</h1>
      <p style="margin-top: 35px; margin-bottom: 35px; margin-left: 35px; margin-right: 35px; font-weight: bold">
        Gopher Housing, a project initiated by University of Minnesota - Twin Cities students, aims to provide incoming residents with valuable insights from current residents.
      </p>

      <div class="row tm-mb-8">
        <h3 class="col-12 tm-text-maroon text-center tm-mb-5" style="font-weight: bold">Our Team</h3>
        <div class="col-12">
          <div class="tm-members">
            <div class="tm-member">
              <figure class="text-center effect-bubba mb-4 nice-boxshadow">
                <img
                  width="240"
                  height="320"
                  alt="Image"
                  class="img-fluid"
                  :src="require('@/img/gallery/Jonathan.jpg')"
                />
                <figcaption>
                  <div class="tm-member-social">
                    <a
                      href="https://www.linkedin.com/in/jonathan-paraschou-37b4b2220/"
                      class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-linkedin"
                    /></a>
                    <a
                      href="https://www.instagram.com/jonathan.paraschou/"
                      class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-instagram"
                    /></a>
                    <a
                      href="https://github.com/JonathanParaschou"
                      class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-github"
                    /></a>
                  </div>
                </figcaption>
              </figure>
              <div class="text-center">
                <span class="d-block mb-1 tm-name text-black">Jonathan Paraschou</span>
                <span class="d-block tm-text-maroon" style="font-weight: bold">Lead Fullstack Developer</span>
              </div>
            </div>
            <div class="tm-member">
              <figure class="text-center effect-bubba mb-4 nice-boxshadow">
                <img
                  width="240"
                  height="320"
                  alt="Image"
                  class="img-fluid"
                  :src="require('@/img/gallery/Sammer.jpg')"
                />
                <figcaption>
                  <div class="tm-member-social">
                    <a
                      href="https://www.linkedin.com/in/sammer-hassan-047471221/"
                      class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-linkedin"
                    /></a>
                    <a href="https://github.com/oDzzy" class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-github"
                    /></a>
                    <a
                      href="https://instagram.com/samhassan_12"
                      class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-instagram"
                    /></a>
                  </div>
                </figcaption>
              </figure>
              <div class="text-center">
                <span class="d-block mb-1 tm-name text-black">Sammer Hassan</span>
                <span class="d-block tm-text-maroon" style="font-weight: bold">Fullstack Developer</span>
              </div>
            </div>
            <div class="tm-member">
              <figure class="text-center effect-bubba mb-4 nice-boxshadow">
                <img
                  width="240"
                  height="320"
                  alt="Image"
                  class="img-fluid"
                  :src="require('@/img/gallery/Christian.jpg')"
                />
                <figcaption>
                  <div class="tm-member-social">
                    <a
                      href="https://www.linkedin.com/in/christian-golish-70b70622a/"
                      class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-linkedin"
                    /></a>
                  </div>
                </figcaption>
              </figure>
              <div class="text-center">
                <span class="d-block mb-1 tm-name text-black">Christian Golish</span>
                <span class="d-block tm-text-maroon" style="font-weight: bold">Fullstack Developer</span>
              </div>
            </div>
            <div class="tm-member">
              <figure class="text-center effect-bubba mb-4 nice-boxshadow">
                <img
                  width="240"
                  height="320"
                  alt="Image"
                  class="img-fluid"
                  :src="require('@/img/gallery/Cole.jpg')"
                />
                <figcaption>
                  <div class="tm-member-social">
                    <a
                      href="https://www.instagram.com/cole_.g/"
                      class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-instagram"
                    /></a>
                  </div>
                </figcaption>
              </figure>
              <div class="text-center">
                <span class="d-block mb-1 tm-name text-black">Cole Garcia</span>
                <span class="d-block tm-text-maroon" style="font-weight: bold">Graphic Design</span>
              </div>
            </div>
            <div class="tm-member">
              <figure class="text-center effect-bubba mb-4 nice-boxshadow">
                <img
                  width="240"
                  height="320"
                  alt="Image"
                  class="img-fluid"
                  :src="require('@/img/gallery/Louis.jpg')"
                />
                <figcaption>
                  <div class="tm-member-social">
                    <a
                      href="https://www.linkedin.com/in/best-applicant/"
                      class="tm-member-social-link"
                      ><font-awesome-icon
                        style="color: #ffd700"
                        icon="fa-brands fa-linkedin"
                    /></a>
                  </div>
                </figcaption>
              </figure>
              <div class="text-center">
                <span class="d-block mb-1 tm-name text-black">Louis Schwab</span>
                <span class="d-block tm-text-maroon" style="font-weight: bold">Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <b-button
        size="lg"
        style="background-color: white; position: relative; bottom: 150px"
        href="https://www.tortech.org/"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          width="200"
          height="200"
          alt="Image"
          class="img-fluid"
          :src="require('@/img/gallery/MainLogo.jpg')"
      /></b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>


<style>
.nice-boxshadow {
  -webkit-box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
}

.p {
  font-family: "Neutraface";
}

.h3 {
  font-family: "Neutraface";
}

.h1 {
  font-size: 3.2em;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  font-family: "Times New Roman";
}

.body {
  font-size: 1.2em;
  font-family: "Times New Roman";
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.teamContainer {
  padding: 0 16px;
}

.tm-container {
  max-width: 1800px;
  margin: 0 auto;
}

.container-fluid {
  max-width: 1570px;
}

.tm-site-header-overlay {
  color: white;
  background-color: #656667;
  padding-top: 20px;
}

.tm-header-stripe-short {
  width: 62%;
  margin-top: 20px;
}

.tm-site-header-left {
  padding-bottom: 55px;
}

.tm-site-header-right {
  padding-top: 40px;
  padding-bottom: 20px;
}

.tm-site-name {
  font-size: 3rem;
}
.tm-site-desc {
  font-size: 1.4rem;
}

.nav-item {
  font-size: 1.4rem;
  transform: skew(-20deg, 0);
  transition: all 0.3s ease;
  margin-right: 20px;
}

.navbar-expand-lg .navbar-nav .nav-link {
  color: white;
  padding: 14px 50px;
  transform: skew(20deg, 0);
}

.nav-item.active,
.nav-item:hover {
  background-color: #474849;
}

.nav-item.active .nav-link,
.nav-item:hover .nav-link {
  color: white;
}

.parallax-window {
  min-height: 600px;
  background: transparent;
}

.tm-intro-text {
  font-size: 2.6rem;
}
.tm-text-primary {
  color: #000000;
}
.tm-text-dark-gray {
  color: #68696a;
}
.tm-text-dark-green {
  color: #0f570f;
}
.tm-text-light-green {
  color: #11a111;
}
.tm-text-maroon {
  color: #800000;
}

.tm-text-gold {
  color: #ffd700;
}

.tm-my-1 {
  margin-top: 100px;
  margin-bottom: 100px;
}

.tm-mb-1 {
  margin-bottom: 100px;
}
.tm-mb-2 {
  margin-bottom: 135px;
}
.tm-mb-3 {
  margin-bottom: 40px;
}
.tm-mb-4 {
  margin-bottom: 30px;
}
.tm-mb-5 {
  margin-bottom: 50px;
}
.tm-mb-6 {
  margin-bottom: 70px;
}
.tm-mb-7 {
  margin-bottom: 80px;
}
.tm-mb-8 {
  margin-bottom: 200px;
}
.tm-mb-9 {
  margin-bottom: 60px;
}
.tm-mb-10 {
  margin-bottom: 330px;
}

.tm-h3 {
  font-size: 1.6rem;
  margin-bottom: 25px;
}

.tm-h2-big {
  font-size: 2.5rem;
}

.tm-box-1 {
  max-width: 410px;
  margin: 0 auto;
}

.tm-box-2 {
  padding: 53px 50px;
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
}

.tm-bg-gray {
  background-color: #f2f2f2;
}

.tm-icon-1 {
  margin-bottom: 40px;
  padding: 30px;
}

.tm-icon-2 {
  padding: 80px 30px;
}
footer {
  padding-bottom: 55px;
}

.btn {
  font-size: 1.2rem;
  padding: 10px 35px;
  border: none;
}

.btn-pad {
  padding: 10px 35px;
}
.btn-primary {
  background-color: #399;
}
.btn-primary:hover {
  background-color: #2d827f;
}
.btn-secondary {
  background-color: #99c;
}
.btn-secondary:hover {
  background-color: #6d71c6;
}

.btn-3 {
  color: white;
  background-color: #51a2f1;
  padding: 15px 38px;
}

.btn-3:hover {
  color: white;
  background-color: #6bb6ff;
}

ul {
  padding-left: 17px;
}
ul li {
  list-style: none;
}

.btn-text {
  color: #06c;
  font-size: 1.2rem;
}

.btn-text:hover {
  color: #666;
}
.tm-nav-secondary ul li a {
  color: #666;
}
.tm-nav-secondary ul li a:hover {
  color: #06c;
}

.tm-social-icon {
  width: 40px;
  height: 40px;
}

.tm-social-link:hover .tm-social-icon {
  color: #06c;
}
.tm-text-link {
  color: #666;
}
.tm-text-link:hover {
  color: #06c;
}
.tm-carousel {
  padding-bottom: 30px;
}

/*
  Slick dots
*/
.slick-dots li {
  width: 20px;
}
.slick-dots li button {
  width: 15px;
}

.slick-dots li button:before {
  font-family: "Font Awesome 5 Free";
  font-size: 15px;
  font-weight: 900;
  content: "\f111";
  color: #ddd;
  opacity: 1;
  width: 15px;
  transition: all 0.3s ease;
}

.slick-dots li button:hover:before,
.slick-dots li button:focus:before,
.slick-dots li.slick-active button:before {
  color: #06c;
}

.rating {
  color: #cbcccd;
  font-size: 0.9rem;
}

.star {
  padding: 2px;
}
.checked {
  color: orange;
}

/* About */
.tm-about-box {
  max-width: 840px;
}
.tm-company-background-col {
  max-width: 720px;
}
.tm-company-background {
  max-width: 520px;
}
.tm-strategy-box {
  display: flex;
}

.tm-strategy-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  min-width: 135px;
  height: 135px;
  margin-right: 45px;
  min-width: 1;
}

i {
  color: #abc;
}
.tm-strategy-text {
  max-width: 480px;
}

@media (max-width: 1160px) and (min-width: 992px) {
  .tm-strategy-icon {
    margin-right: 20px;
  }
}

@media (max-width: 499px) {
  .tm-strategy-icon {
    margin-right: 30px;
    width: 120px;
    height: 120px;
    min-width: 120px;
  }
}

.tm-name {
  font-size: 1.4rem;
}

.tm-members {
  display: flex;
  justify-content: space-around;
}

.tm-member {
  padding: 10px;
}

@media (max-width: 1100px) {
  .tm-members {
    flex-wrap: wrap;
    justify-content: start;
    max-width: 780px;
    margin-left: auto;
    margin-right: auto;
  }

  .tm-member {
    margin-bottom: 50px;
  }
  .tm-mb-8 {
    margin-bottom: 100px;
  }
}

@media (max-width: 809px) {
  .tm-members {
    max-width: 520px;
  }
}

@media (max-width: 549px) {
  .tm-members {
    max-width: 260px;
  }
}

/* 
  Gallery Item Hover Effect
  https://tympanus.net/codrops/2014/06/19/ideas-for-subtle-hover-effects/
*/

/* Common style */
.tm-member figure,
.tm-gallery-item figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin-bottom: 0;
  background: #11a111;
  text-align: center;
  cursor: pointer;
}

.tm-member figure img,
.tm-gallery-item figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.tm-member figure figcaption,
.tm-gallery-item figure figcaption {
  padding: 1em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.tm-member figure figcaption::before,
.tm-member figure figcaption::after,
.tm-gallery-item figure figcaption::before,
.tm-gallery-item figure figcaption::after {
  pointer-events: none;
}

.tm-member figure figcaption,
.tm-member figure figcaption > a,
.tm-gallery-item figure figcaption,
.tm-gallery-item figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.tm-member figure figcaption > a,
.tm-gallery-item figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.tm-gallery-item figure h2 {
  font-weight: 300;
}
.tm-gallery-item figure h2 span {
  font-weight: 800;
}

.tm-gallery-item figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
  color: white;
}

/*---------------*/
/***** Bubba *****/
/*---------------*/

figure.effect-bubba {
  background: #800000;
}

figure.effect-bubba img {
  opacity: 1;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

figure.effect-bubba:hover img {
  opacity: 0.4;
}

figure.effect-bubba figcaption::before,
figure.effect-bubba figcaption::after {
  position: absolute;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  content: "";
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-bubba figcaption::before {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}

figure.effect-bubba figcaption::after {
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  -webkit-transform: scale(1, 0);
  transform: scale(1, 0);
}

figure.effect-bubba h2 {
  font-size: 1.5rem;
  padding-top: 20%;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
}

figure.effect-bubba p {
  width: 100%;
  padding: 10px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, 20px, 0);
  transform: translate3d(0, 20px, 0);
}

figure.effect-bubba .tm-member-social {
  font-size: 1.5rem;
  padding-top: 20%;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
}

figure.effect-bubba .tm-member-social {
  width: 100%;
  padding: 10px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, 20px, 0);
  transform: translate3d(0, 20px, 0);
}

figure.effect-bubba:hover figcaption::before,
figure.effect-bubba:hover figcaption::after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

figure.effect-bubba:hover h2,
figure.effect-bubba:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-bubba:hover .tm-member-social {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.tm-member-social {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.tm-member-social-link .tm-member-social-icon {
  transition: all 0.3s ease;
}
.tm-member-social-link:hover .tm-member-social-icon {
  color: #d39e00;
}

.tm-member-social-icon {
  padding-left: 10px;
  padding-right: 10px;
  color: white;
}

.tm-page-cols-container {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.tm-page-col-left {
  width: 35%;
  max-width: 480px;
  margin-top: 20px;
}

.tm-page-col-right {
  width: 65%;
  margin-left: auto;
  margin-right: 0;
}

.tm-gallery {
  margin: 0 auto;
  max-width: 1100px;
}

.tm-gallery-item {
  width: 30%;
  max-width: 300px;
  margin: 1.5%;
}

.filters-button-group {
  padding-right: 15px;
  padding-left: 0;
}

.tabs {
  list-style: none;
}

.tabs > li > a {
  color: #999a9b;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  margin: 0 auto 30px;
}

.tm-category-label {
  font-size: 1.6rem;
}

.tm-thumbnails {
  display: flex;
  flex-wrap: wrap;
  max-width: 150px;
  margin-right: 35px;
}

.tm-thumbnail {
  width: 150px;
  height: 150px;
  margin: 2.5px;
}

.tm-category-link.active .tm-category-label {
  color: #11a111;
}

/* Contact */
.mapouter {
  position: relative;
  text-align: right;
  height: 440px;
  width: 100%;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 440px;
  width: 100%;
}

.tm-contact-row {
  max-width: 1122px;
}

.tm-contact-left,
.tm-contact-right {
  max-width: 480px;
}

.form-group {
  margin-bottom: 40px;
}

.form-control {
  font-size: 1em;
  border-radius: 0;
  padding: 14px 20px;
  height: auto;
}

select.form-control {
  height: 60px;
}

#contactSelect {
  border-radius: 0;
}

@media (max-width: 1200px) {
  .tm-page-col-left {
    max-width: 930px;
  }

  .tm-gallery-item {
    margin: 1%;
    width: 31%;
  }

  .tm-category-label {
    font-size: 1.2rem;
  }
  .tm-thumbnails {
    margin-right: 20px;
  }

  .tm-page-col-left {
    width: 35%;
    margin-top: 10px;
  }

  .tm-page-col-right {
    width: 65%;
  }
  figure.effect-bubba h2 {
    font-size: 1.2rem;
  }
  .tm-gallery-item figure p {
    font-size: 0.9rem;
  }
  .tm-thumbnails {
    max-width: 110px;
  }

  .tm-thumbnail {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 767px) {
  .tm-gallery {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .tm-gallery-item {
    width: 48%;
  }

  .filters-button-group {
    padding-right: 0;
    padding-bottom: 30px;
  }
}

@media (max-width: 480px) and (min-width: 420px) {
  figure.effect-bubba h2 {
    padding-top: 5%;
  }

  figure.effect-bubba p {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 1144px) {
  .tm-site-name {
    font-size: 2.4rem;
  }
  .tm-site-desc {
    font-size: 1.2rem;
  }
}

@media (max-width: 992px) {
  .tm-site-header-left {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .tm-site-header-right {
    position: absolute;
    right: 0;
    padding-top: 50px;
    padding-bottom: 0;
  }

  .navbar-toggler {
    margin-left: auto;
    background-color: #656667;
    border-radius: 0;
  }

  .navbar-toggler i {
    font-size: 1.8rem;
  }

  .tm-nav {
    position: relative;
    max-width: 200px;
  }

  #navbarNav {
    position: absolute;
    right: 16px;
    top: 46px;
    z-index: 1000;
  }

  .tm-nav ul {
    background-color: #656667;
    padding-left: 12px;
    padding-right: 12px;
  }

  .nav-item {
    margin-right: 0;
    text-align: center;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .tm-icon-1 {
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .tm-page-cols-container {
    flex-direction: column;
  }

  .tm-page-col-left {
    width: 100%;
    max-width: 920px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .tm-page-col-right {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .tm-contact-left,
  .tm-contact-right {
    max-width: 100%;
  }

  .tm-contact-left {
    margin-bottom: 120px;
  }
}

@media (max-width: 420px) {
  .tm-gallery {
    max-width: 300px;
  }

  .tm-gallery-item {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 15px;
  }

  .tm-page-col-left,
  .tm-page-col-right {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
