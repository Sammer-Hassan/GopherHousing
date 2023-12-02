<template>
  <div class="home mx-auto w-75" style="margin-top: 4rem; margin-bottom: 35px" fluid>
    <h1>Add a Rating/Review for {{ this.dormName }} Hall</h1>

    <div>
      <h2>Building Rating*</h2>
      <vue3-star-ratings
        :increment="0.5"
        :inline="true"
        :show-rating="false"
        active-color="#800000"
        v-model:rating="review.buildingRating"
      />
    </div>

    <div>
      <h2>Location Rating*</h2>
      <vue3-star-ratings
        :increment="0.5"
        :inline="true"
        :show-rating="false"
        active-color="#800000"
        v-model:rating="review.locationRating"
      />
    </div>

    <div>
      <h2>Social Rating*</h2>
      <vue3-star-ratings
        :increment="0.5"
        :inline="true"
        :show-rating="false"
        active-color="#800000"
        v-model:rating="review.socialRating"
      />
    </div>

    <div>
      <h2>Food Rating*</h2>
      <vue3-star-ratings
        :increment="0.5"
        :inline="true"
        :show-rating="false"
        active-color="#800000"
        v-model:rating="review.foodRating"
      />
    </div>

    <div>
      <h2>Write a Review</h2>
      <b-form-textarea
        id="textarea"
        v-model="review.writtenReviews"
        placeholder="Enter something..."
        rows="5"
        max-rows="6"
      >
      </b-form-textarea>
    </div>

    <b-button style="background-color: maroon; margin-top: 30px" @click="onSubmit()"
      >Submit Review</b-button
    >

  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { required, maxLength } from "@vuelidate/validators";
import dateFormat, { masks } from "dateformat";
import { VueRecaptcha } from "vue-recaptcha";


export default {
  name: "AddReview",
  setup() {
    /* pass value to captcha  */
    const inputValue = ref(null);

    const getCaptchaCode = (value) => {
      /* you can access captcha code */
    };
    const checkValidCaptcha = (value) => {
      /* expected return boolean if your value and captcha code are same return True otherwise return False */
    };
    return {
      inputValue,
      getCaptchaCode,
      checkValidCaptcha,
    };
  },
  data() {
    return {
      dormName: "",
      loading: true,
      review: { date: dateFormat(new Date(), "mmmm dd, yyyy") },
    };
  },
  validations() {
    return {
      review: {
        writtenReviews: { required, maxLength: maxLength(1000) },
        buildingRating: { required },
        locationRating: { required },
        socialRating: { required },
        foodRating: { required },
      },
    };
  },
  created() {
    this.dormName = this.$route.params.dormName;
    this.date = new Date();
  },
  methods: {
    toDorm() {
      this.$router.push({
        name: "dorm-view",
        params: {
          dormName: this.dormName,
        },
      });
    },
    onSubmit() {
        if(this.review.writtenReviews && this.review.writtenReviews.length > 1000){
          window.alert("Review must be 1000 characters or less.");
          return;
        }
      if(this.review.buildingRating == null){
        window.alert("Please Select Building Rating.");
        return;
      }
      if(this.review.locationRating == null){
        window.alert("Please Select Location Rating.");
        return;
      }
      if(this.review.socialRating == null){
        window.alert("Please Select Social Rating.");
        return;
      }
      if(this.review.foodRating == null){
        window.alert("Please Select Food Rating.");
        return;
      }
      axios
        .post(`https://server-zeta-tawny.vercel.app/post/${this.dormName}`, {
          method: "addReview",
          params: {
            review: this.review,
          },
        })
        .then((response) => {
          this.dorm = response.data;
        })
        .catch((error) => {
          console.log("This is an error: " + error);
        });

      this.toDorm();
    }
  },
};
</script>

<style>
.h1 {
  font-family: "Neutraface";
}
</style>
