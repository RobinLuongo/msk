<template>
    <div>
        <div class="hero-bar">
            <h1 class="title">
                Star Wars Characters
            </h1>
        </div>
        <div class="card-container container">
            <CharacterCard 
                v-for="person in people" 
                v-bind:key="person.url"
                v-bind:person="person">
            </CharacterCard>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import CharacterCard from './ChracterCard.vue'

const query = () => {
    
}

   export default {
       data() {
           return {
               'people': []
           }
       },

       created: function() { this.query() },

       components: {
           CharacterCard
       },

        methods: {
            query: function () {
                const baseUrl = 'https://swapi.co/api/people/'
                axios.get(baseUrl)
                    .then(res => res.data)
                    .then(data => {
                        console.log(data);
                        this.people = data.results
                    })
                    .catch(err => console.error(err))
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
.container {
    margin: auto;
    width: 1300px;
}
.title {
    font-size: 42px;
    color: #ffe300;
    margin: 0px;
    padding: 75px 0px 70px 0px;
    text-align: center;
}
</style>