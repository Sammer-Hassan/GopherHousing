<template>
    <div id="dormBody">
      <div v-if="loading"       class="home mx-auto"
        style="margin-top: 4rem; margin-bottom: 35px; width: 90%"
        fluid> <b-spinner></b-spinner></div>
  
      <div
        v-if="!loading"
        class="home mx-auto"
        style="margin-top: 4rem; margin-bottom: 35px; width: 90%"
        fluid
      >
      <div>
        <h1 style="margin-bottom: 30px">{{ dorm.name }} Hall</h1>
        
      </div>
  
  
        <b-card class="nice-boxshadow mb-3" style="background-color: #f2f2f2">
          <b-row>
            <b-col style="font-size: 1.2em"
              >Overall Rating:
              <span v-bind:class="getClass(dorm.averages.buildingAvg)">{{
                dorm.averages.overallAvg
              }}</span>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col>
              <vue3-star-ratings
                :increment="0.1"
                :glow="1"
                :inline="true"
                :show-rating="false"
                active-color="#800000"
                read-only
                v-model:rating="dorm.averages.overallAvg"
              />
            </b-col>
          </b-row>
  
          <!-- Images go here -->
          <Carousel class="mb-4">
            <Slide v-for="slide in 3" :key="slide">
              <img
                style="width: 50rem"
                :src="require('@/assets/' + dorm.webID + '/' + dorm.webID + slide + '.jpg')"
              />
            </Slide>
  
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <b-row class="mb-4" style="margin-top: 50px">
            <b-col
              >Building
              <span v-bind:class="getClass(dorm.averages.buildingAvg)">{{
                setAverage(dorm.averages.buildingAvg)
              }}</span>
              / 5</b-col
            >
            <b-col
              >Location
              <span v-bind:class="getClass(dorm.averages.locationAvg)">{{
                setAverage(dorm.averages.locationAvg)
              }}</span>
              / 5</b-col
            >
            <b-col
              >Social
              <span v-bind:class="getClass(dorm.averages.socialAvg)">{{
                setAverage(dorm.averages.socialAvg)
              }}</span>
              / 5</b-col
            >
            <b-col
              >Food
              <span v-bind:class="getClass(dorm.averages.foodAvg)">{{
                setAverage(dorm.averages.foodAvg)
              }}</span>
              / 5</b-col
            >
          </b-row>
        </b-card>
        <div style="height:20px; margin-bottom: 17px;"> 
          <a style="float: right" :href="'https://housing.umn.edu/' + dorm.webID">
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
              <h5>More Info from UMN  <i  class="material-icons">open_in_new</i></h5>
    
            </a>
      </div>
  
          <b-button
          size="lg"
          class="nice-boxshadow mb-5"
          style="background-color: maroon"
          @click="addReview()"
          >Add a Review</b-button
        >      
  
  
  
        <div v-for="review in reviewsRendered" :key="review.id">
          <b-card
            style="border-radius: 0px; background-color: #f2f2f2"
            class="nice-boxshadow"
            v-if="review.writtenReviews"
          >
            <div class="d-flex justify-content-between mb-1" style="font-size: 0.9em">
              <!--    <div class="lead text-muted">Would Recommend</div> -->
              <div style="color: black" class="lead text-muted">{{ review.date }}</div>
            </div>
            <div class="review">
              <div class="d-flex flex-column ratings">
                <div class="d-flex justify-content-between">
                  <div class="lead">Building:</div>
                  <div>
                    <span v-bind:class="getClass(review.buildingRating)">{{
                      review.buildingRating * 1.0
                    }}</span>
                    / 5
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="lead">Location:</div>
                  <div>
                    <span v-bind:class="getClass(review.locationRating)">{{
                      review.locationRating * 1.0
                    }}</span>
                    / 5
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="lead">Social:</div>
                  <div>
                    <span v-bind:class="getClass(review.socialRating)">{{
                      review.socialRating * 1.0
                    }}</span>
                    / 5
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="lead">Food:</div>
                  <div>
                    <span v-bind:class="getClass(review.foodRating)">{{
                      review.foodRating * 1.0
                    }}</span>
                    / 5
                  </div>
                </div>
              </div>
              <div class="writtenReview">
                <p class="text-justify">{{ review.writtenReviews }}</p>
              </div>
            </div>
          </b-card>
        </div>
        <b-button
          size="lg"
          class="nice-boxshadow mt-5"
          style="background-color: maroon"
          v-if="this.originalReviews.length"
          v-on:click="moreReviews"
          >View More</b-button
        >
      </div>
    </div>
  </template>
  
  <script>
  import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  import axios from "axios";
  
  export default {
    name: "Test",
    data() {
      return {
        loading: true,
        dorm: {},
        originalReviews: [],
        reviewsRendered: [],
        dormName: "",
      };
    },
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    methods: {
      addReview() {
        this.$router.push({
          name: "add-review",
          params: {
            dormName: this.dormName,
          },
        });
      },
      getClass(obj) {
        return [
          obj <= 2 && obj >= 0 ? "red" : "",
          obj > 2 && obj < 4 ? "orange" : "",
          obj > 2 && obj >= 4 ? "green" : "",
        ];
      },
      moreReviews() {
        if (this.originalReviews.length < 5) {
          var k = this.originalReviews.length;
          for (var i = 0; i < k; i++) {
            this.reviewsRendered.push(this.originalReviews.shift());
          }
        } else {
          for (i = 0; i < 5; i++) {
            this.reviewsRendered.push(this.originalReviews.shift());
          }
        }
      },
      setAverage(number) {
        if(number == null){
          return "-";
        } else {
          return number * 1.0;
        }
      }
    },
    computed: {},
    created() {
      this.dormName = this.$route.params.dormName;
  
      axios
        .get(`https://server-zeta-tawny.vercel.app/api/${this.dormName}`)
        .then((response) => {
          this.dorm = response.data;
          this.originalReviews = this.dorm.reviews;
          this.moreReviews();
          this.loading = false;
        })
        .catch((error) => {
          console.log("This is an error: " + error);
          this.loading = false;
        });
    },
  };
  </script>
  
  <style scoped>
  .review {
    display: grid;
    gap: 0;
    position: relative;
    grid-template-columns: 200px 1fr;
    grid-template-areas: "ratings writtenReview";
  }
  .ratings {
    grid-area: ratings;
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 1px solid black;
    font-size: 1em;
  }
  .writtenReview {
    grid-area: writtenReview;
    text-align: left;
  }
  
  .red {
    color: red;
  }
  .green {
    color: green;
  }
  .orange {
    color: #fd7e14;
  }
  
  @media (min-width: 601px) {
    #dormBody {
      font-size: 1.4em !important;
    }
  }
  </style>
  