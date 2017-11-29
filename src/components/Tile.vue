<template>
  <div class="card-holder">
    <div class="card" v-bind:class="{ isClickable : project.url, hidden:hidden }" v-on:click="openUrl">
      <img class="card-img-top" v-lazy="project.image" v-if="project.image" >
      <div v-html="project.rawhtml" v-if="project.rawhtml"></div>
      <div class="card-body">
        <h4 class="card-title" v-if="project.title">{{project.title}}</h4>
        <div class="card-text">
          <p v-html="project.caption"></p>
          <div class="text-muted" v-if="project.date">{{project.date | moment("from", "now")}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tile',
    props: {
      project: Object
    },
    data () {
      return {
        hidden: true
      }
    },
    methods: {
      openUrl (event) {
        if (this.project.url) {
          window.location.href = this.project.url
        }
      },
      show () {
        this.hidden = false
      }
    }
  }
</script>

<style scoped>
  .card-holder {
    break-inside: avoid-column;
    padding: 10px;
  }

  .isClickable {

    cursor: pointer;
  }

  .isClickable:hover {
    transform: scale(1.03);
  }

  .card {
    transition: all .3s ease-in-out;
  }

  .hidden {
    opacity: 0;
  }

  img[lazy=loading] {
    background-color: #fff;
    background-image: url("../assets/spinner.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
