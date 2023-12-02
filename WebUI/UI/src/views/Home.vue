<template>
  <div class="home mx-auto" style="margin-top: 3px; margin-bottom: 35px" fluid>
    <div style="position: relative">
      <img style="filter: brightness(75%) blur(5px); width: 100%; height: 300px" src="../assets/Title.jpeg" />


      <h1 style="
          color: white;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 40px;
        ">
        Gopher Housing
      </h1>
      <h2 style="
          color: white;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 110px;
        ">
        Reviews for Housing at UMN
      </h2>

      <b-input-group class="mb-3 nice-boxshadow" style="
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 170px;
        ">
        <b-button style="background-color: maroon; border-color: rgb(169, 228, 6)" size="lg" text="Button" variant="success"
          @click="filteredList">Search</b-button>
        <b-form-input v-model="input"></b-form-input>
      </b-input-group>

    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 offset-md-4 text-center">
          <!-- Housing Type Dropdown (Centered) -->
          <button class="btn btn-secondary nice-boxshadow dropdown-toggle"
            style="background-color: maroon; margin-bottom: 10px;" type="button" webID="dropdownMenuButton2"
            data-bs-toggle="dropdown" aria-expanded="false">
            Housing Type: {{ value2 }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2" role="menu">
            <li v-for="option in housingOptions" :key="option">
              <a class="dropdown-item" @click="value2 = option; HousingSelectionFunc();" href="javascript:void(0)">{{ option }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 text-right">
          <!-- Filter By Dropdown (Right Side) -->
          <button class="btn btn-secondary nice-boxshadow dropdown-toggle"
            style="background-color: maroon; margin-bottom: 10px;" type="button" webID="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Filter By: {{ value }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
            <li v-for="option in options" :key="option">
              <a class="dropdown-item" @click="value = option; FilterFunc();" href="javascript:void(0)">{{ option }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    

    <h3 v-if="currentSearch">Search Results For {{ currentSearch }}</h3>

    <div v-if="loading"> <b-spinner></b-spinner></div>

    <div class="justify-content-center flex-wrap d-flex">
      <div style="cursor: pointer; margin: 30px" v-for="dorm in rendered" :key="dorm.webID">
        <b-card @click="toDorm(dorm.webID)" style="width: 22rem; background-color: #f2f2f2"
          :img-src="require('@/assets/' + dorm.webID + '/' + dorm.webID + '1.jpg')" img-height="200" img-top
          class="hvr-grow" border-variant="light">
          <h3 style="font-weight: bold">{{ dorm.name }}</h3>

          <!-- <img :src="require('@/assets/' + dorm.name + '/' + dorm.name + 'Exterior-HallExterior.jpg')"/>                 -->
          <!-- <img style="width: 20rem; height: 12.5rem" :src="require('@/assets/'  + dorm.name + '/' + dorm.name + '-Exterior.jpg')"/> -->
          <div style="justify-content: center; margin: 3px; align-items: center" float>
            <vue3-star-ratings style="margin: 3px" :increment="0.1" :starSize="28" :glow="1" :inline="true"
              :show-rating="false" active-color="#800000" read-only v-model:rating="dorm.averages.overallAvg" />

            <div style="display: inline; position: absolute; bottom: 22px">
              <span>({{ dorm.reviews.length }})</span>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      info: [],
      rendered: [],
      input: "",
      currentSearch: "",
      loading: true,
      value: "",
      value2: "All",
      options: [
        "Name",
        "Best Overall",
        "# Reviews",
        "Social Rating",
        "Location Rating",
        "Building Rating",
        "Food Rating",
        "Worst Overall",
      ],
      option: "Name",
      housingOptions: [
        "All",
        "Dorms",
        "Apartments"
      ]
    };
  },
  created() {
    axios
      .get("https://server-zeta-tawny.vercel.app/api/total")
      .then((response) => {
        this.loading = false;
        this.info = response.data;
        this.rendered = response.data;
      })
      .catch((error) => {
        this.loading = false;
        console.log("This is an error: " + error);
      });
  },
  methods: {
    toDorm(name) {
      this.$router.push({
        name: "dorm-view",
        params: {
          dormName: name,
        },
      });
    },
    toType(type) {
      this.loading = true
      axios
        .get("https://server-zeta-tawny.vercel.app/api/" + type)
        .then((response) => {
          this.rendered = []
          this.loading = false;
          this.info = response.data;
          this.rendered = response.data;
          this.value = "";
        })
        .catch((error) => {
          this.loading = false;
          console.log("This is an error: " + error);
        });
    },

    filteredList() {
      this.currentSearch = this.input;
      if (this.info == "") {
        return (this.rendered = this.info);
      }
      this.rendered = this.info;
      this.rendered = this.rendered.filter((item) =>
        item.name.toLowerCase().includes(this.input.toLowerCase())
      );
    },
    HousingSelectionFunc() {
      if (this.value2 == "All") {
        this.toType('total')
      }
      if (this.value2 == "Dorms") {
        this.toType('dorms')
      }
      if (this.value2 == "Apartments") {
        this.toType('apartments');
      }
    },
    FilterFunc() {
      if (this.value == "Best Overall") {
        //objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
        this.rendered.sort((a, b) =>
          a.averages.overallAvg > b.averages.overallAvg
            ? -1
            : a.averages.overallAvg < b.averages.overallAvg
              ? 1
              : 0
        );
      }
      if (this.value == "Worst Overall") {
        this.rendered.sort((a, b) =>
          a.averages.overallAvg > b.averages.overallAvg
            ? 1
            : a.averages.overallAvg < b.averages.overallAvg
              ? -1
              : 0
        );
      }
      if (this.value == "Name") {
        //objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
        this.rendered.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
      }
      if (this.value == "# Reviews") {
        this.rendered.sort((a, b) =>
          a.reviews.length > b.reviews.length
            ? -1
            : a.reviews.length < b.reviews.length
              ? 1
              : 0
        );
      }
      if (this.value == "Social Rating") {
        this.rendered.sort((a, b) =>
          a.averages.socialAvg > b.averages.socialAvg
            ? -1
            : a.averages.socialAvg < b.averages.socialAvg
              ? 1
              : 0
        );
      }
      if (this.value == "Location Rating") {
        this.rendered.sort((a, b) =>
          a.averages.locationAvg > b.averages.locationAvg
            ? -1
            : a.averages.locationAvg < b.averages.locationAvg
              ? 1
              : 0
        );
      }
      if (this.value == "Building Rating") {
        this.rendered.sort((a, b) =>
          a.averages.buildingAvg > b.averages.buildingAvg
            ? -1
            : a.averages.buildingAvg < b.averages.buildingAvg
              ? 1
              : 0
        );
      }
      if (this.value == "Food Rating") {
        this.rendered.sort((a, b) =>
          a.averages.foodAvg > b.averages.foodAvg
            ? -1
            : a.averages.foodAvg < b.averages.foodAvg
              ? 1
              : 0
        );
      }
    },
  },
};
</script>
<style>
.h1 {
  font-family: "Neutraface";
}

.nice-boxshadow {
  -webkit-box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
}

.hvr-grow {
  -webkit-box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.1);
}

.nav-item.active, .nav-item:hover {
  background-color: #FFD700 !important;
}

*:focus {
  outline: none;
}
</style>
