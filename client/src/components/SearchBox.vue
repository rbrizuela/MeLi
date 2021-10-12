<template>
    <div class="header">
        <router-link to="/">
            <img class="logo" alt="logo Meli" src="../assets/Logo_ML.png" @click="cleanSearch" />
        </router-link>   

        <input 
            class="inputSearch" 
            type="search" 
            placeholder="Nunca dejes de buscar" 
            @input="changed" 
            name="textSearch"
            :value="$store.getters.textSearch"
            @keyup.enter="clickSearch"/>
 
        <button class="buttonSearch" type="submit"  @click.prevent="clickSearch">
            <img alt="icono buscar" src="../assets/ic_Search.png" />
        </button>

    </div>
</template>

<script>

import router from '../router/index'

export default {

    name: "SearchBox",

    methods: {

        changed: function(event) {
            this.$store.commit('change', event.target.value)
        },

        clickSearch() {
            router.push({ path: '/items', query: { search: this.$store.getters.textSearch }}).catch(()=>{});
        },

        cleanSearch() {
            this.$store.commit('change', "")
        }
       
    },
};

</script>

<style scoped>

.header {
    width: 100vw;
    max-width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffe600;
}

.logo {
  margin-right: 20px;
}

.inputSearch {
    width: 50%;
	height: 37px;
    border-radius: 3px 0 0 3px;
	border: none;
	padding-left: 12px;
}

.buttonSearch {
	width: 37px;
	height: 37px;
	border: none;
    border-radius: 0 3px 3px 0;
}

input[type="search"] {
    font-size: 18px;
}

input:focus {
    outline-width: 0;
}


</style>