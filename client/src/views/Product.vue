<template>
    <div>
        <SearchBox />
          <div class="Container">
            <div class="Container2">
                <Breadcrumb :categories="categories"/>
                <Detalle :item="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import Detalle from "@/components/Detalle.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import common from "@/common/common";

export default {
    name: "Product",
    components: {
        SearchBox,
        Detalle,
        Breadcrumb
    },

    data: () => ({
        item: {},
        categories: [],
    }),

    mounted() {
        this.onInit();
    },

    methods: {
        async onInit() {

            if (parseInt(this.$route.params.id) == 0) return;

            const requestOptions = {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            };

            try {
                const response = await fetch(`${common.url}/api/items/${this.$route.params.id}`, requestOptions);
                const data = await response.json();

                if (response.status == 200) {
                    this.item = data.item
                    this.categories = data.categories
                }

            } catch (error) {
                console.log(error);
                return false;
            }
        },
    }
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

</style>