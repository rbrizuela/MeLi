<template>
    <div class="Breadcrumb">
        <span v-for="(category, index) in categories" :key="category.id">
            <a class="Link" href="">
                {{ category.name }}
            </a>
			<font-awesome-icon 
				class="Icon" 
				icon="fa-solid fa-chevron-right" 
				v-if="index + 1 != categories.length"
			/>
        </span>
    </div>
</template>

<script>

import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

export default {
    name: "Item",
    props: {
        categories: {},
    },
};
</script>

<style>
.Breadcrumb {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 14px;
    text-align: left;
	color: grey;
}

.Link {
    text-decoration: none;
    margin-right: 8px;
	color: grey;
}

.Icon {
	margin-right: 8px;
} 


</style>