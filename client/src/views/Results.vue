<template>
    <div>
        <SearchBox />
        <div class="Container">
            <div class="Container2">
                <Breadcrumb :categories="categories"/>
                <div v-if="items">
                    <div class="ItemResult" v-for="item in items" :key="item.id">
                        <router-link 
                            :to="`/items/${item.id}`"
                            class="Link">
                            <Item :item="item"/>
                        </router-link>
                    </div>
                </div>
                <div v-else>
                    Sin resultados
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import Item from "@/components/Item.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import common from "@/common/common";

export default {
    name: "Product",
    components: {
        SearchBox,
        Item,
        Breadcrumb,
    },

    data: () => ({
        items: [],
        categories: [],
    }),

    mounted() {
        this.onInit();

    },

    updated() {
        this.onInit();
        
    },

    methods: {
        async onInit() {
           
            if (!this.$route.query) return;

            const requestOptions = {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            };

            var param = new URLSearchParams({
                search: this.$route.query.search,
            });

            try {
                const response = await fetch(`${common.url}/api/items?${param}`, requestOptions );
                const data = await response.json();

                this.items = data.items;
                this.categories = data.categories;

            } catch (error) {
                console.log(error);
                return false;
            }
        },
    },
};
</script>

<style>

.Container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

.Container2 {
    display: flex;
    flex-direction: column;
    width: 80%;
}
 
.ItemResult {
    display: flex;
    flex-flow:column
}

.Link {
  text-decoration: none;
  color: inherit;
}

</style>