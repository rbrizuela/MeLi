<template>
    <div class="Details">
        <div class="DetailsContainer">
            <div class="DetailsTop">

                <div class="DetailsImage">
                    <img :src="item.picture" alt="imagen producto" />
                </div>
               
                <div class="DetailsInfo">
                    <div class="DetailsItem">

                        <span class="Condition" v-if="item.condition === 'new'">
                            Nuevo
                        </span>
                        <span class="Condition" v-else>
                            Usado
                        </span>
                        <span class="Sold" v-if="item.sold_quantity !== 0">
                            - {{item.sold_quantity}} vendidos
                        </span>

                    </div>

                    <div class="Name">
                        {{item.title}}
                    </div>
                    
                    <div class="Price" v-if="item.price">
                        $ {{formatNumber(item.price.amount)}}
                    </div>

                    <button class="ButtonBuy">
                        Comprar
                    </button>
                </div>
            </div>
            <div class="Description">
                <div class="DescriptionTitle">
					Descripción del producto
				</div>
                <div class="DescriptionText">
                    {{item.description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Detalle",
    props: {
        item: {},
    },

    methods: {
        formatNumber(number) {
            return new Intl.NumberFormat().format(Math.ceil(number));
        },
    },
};
</script>

<style scoped>
.Details {
    /* display: flex; */
    flex-direction: column;
    align-items: center;
}

.DetailsContainer {
    padding: 32px;
    top: 70px;
    background-color: white;
}

.DetailsTop {
	display: flex;
	justify-content: space-between;
}

.DetailsImage {
    width: 680px;
    height: auto;
    border-radius: 4px;
    max-width: 80%;
}

img {
	width: 100%;
	height: 100%;
    max-width: 80%;
    float: left;
}

.DetailsInfo {
    max-width: 250px;
    text-align: left;

}

.Name {
    font-size: 24px;
    margin-bottom: 32px;
    font-weight: bold;
}

.Price {
    margin-bottom: 32px;
    font-size: 46px;
}

.DetailsItem {
    margin-bottom: 16px;
}

.Condition{
    font-size: 14px;
}

.Sold {
    font-size: 14px;
}

.ButtonBuy {
    color: white;
    background-color: #3483FA;
    width: 100%;
    border: 1px solid #3483FA;
    height: 40px;
    font-size: 18px;
    border-radius: 4px;
}

.Description {
    max-width: 680px;
}

.DescriptionTitle {
    text-align: left;
	font-size: 28px;
	margin-bottom: 32px;
}
.DescriptionText {
    text-align: left;
	margin-top: 10px;
	font-size: 16px;
}

</style>