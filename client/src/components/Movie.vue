<template>
    <div id="movie">
      <ul>
        <li v-for="movie in movieData">
          <h2><a :href="movie.link">{{ movie.name }}</a></h2>
          <img :src="movie.picUrl" />
          <p>{{ movie.info }}</p>
          <p>{{ movie.star }}星</p>
          <p>{{ movie.intro }}</p>
        </li>
      </ul>
    </div>
</template>

<script>
var axios = require('axios')
export default {
  data () {
    return {
      movieData: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      var self = this
      axios.get('http://127.0.0.1:8888/movie-data')
        .then(function (res) {
          self.movieData = res.data
        })
        .catch(function (err) {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 100px;
    text-align: center;
    box-shadow: 10px 10px 10px #888888;
    background: #99FF99;
  }

  a {
    text-decoration: none;
  }
</style>
