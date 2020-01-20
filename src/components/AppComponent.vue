<template>
    <div>
        <div class="hero-bar">
            <h1 class="title yellow">
                Star Wars Characters
            </h1>
        </div>
        <div class="container">
            <div class="card-container">
                <CharacterCard 
                    v-for="person in people" 
                    v-bind:key="person.url"
                    v-bind:person="person">
                </CharacterCard>
            </div>
            <Paginate
                v-if="pages > 0"
                :page-count="pages"
                :click-handler="pageChange"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagi-container yellow'">
            </Paginate>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Paginate from 'vuejs-paginate'
import CharacterCard from './ChracterCard.vue'

   export default {
       data() {
           return {
               'people': [],
               'pages': 0,
               'currentPage': 1
           }
       },

       created: function() { this.query() },

       components: {
           CharacterCard,
           Paginate
       },

        methods: {
            query: function () {
                const baseUrl = 'https://swapi.co/api/people/'
                const finalUrl = baseUrl + `?page=${this.currentPage}`
                axios.get(finalUrl)
                    .then(res => res.data)
                    .then(data => {
                        this.people = data.results
                        this.pages = Math.ceil(data.count / 10)
                    })
                    .catch(err => console.error(err))
            },
            pageChange: function (page) {
                this.currentPage = page;
                this.query();
            }
        }
   }
</script>
<style>
* {
    box-sizing: border-box;
}
body, html {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    background-color: #1c1e22;
}
.yellow {
    color: #ffe300; 
}
.container {
    margin: auto;
    width: 1300px;
    padding: 0px 15px 100px 15px;
}
.title {
    font-size: 42px;
    margin: 0px;
    padding: 75px 0px 70px 0px;
    text-align: center;
}
.pagi-container {
    list-style: none;
    display: flex;
    float: right;
    font-size: 18px;
}
.pagi-container > li {
    padding: 0px 2px;
}
.pagi-container > li.active {
    background-color: #757575;
}
.md-theme-default a:not(.md-button) {
    color: inherit;
}
@media(max-width:1300px) {
    .container {
        width: 100%;
    }
}
</style>