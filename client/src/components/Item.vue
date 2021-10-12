<template>
    <div class="Item">
        <div class="Product">
            <div class="Image">
                <img :src="item.picture" alt="imagen item" />
            </div>
            <div class="Details">
                <span class="Amount">
                    $ {{formatNumber(item.price.amount)}} 
                    <img
                        class="FreeShipping"
                        src="../assets/ic_shipping.png"
                        alt="free shipping"
                        v-if="item.free_shipping"
                    />
                </span>
                <span class="Title">{{item.title}}</span>
            </div>
        </div> 
        <div class="Location">{{item.location}}</div> 
    </div>
</template>

<script>

export default {
    name: "Item",
    props: {
        item: {}
    },

    methods: {
        formatNumber(number) {
            return new Intl.NumberFormat().format(Math.ceil(number))
        }
    }

};

</script>

<style scoped>

.Item {
    background-color: white;
    display: flex;
    padding: 16px;
    position: relative; 
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
}

.Product {
    display: flex;
} 

.Image {
    width: 180px;
    height: 180px;
    border-radius: 4px;
} 

img {
	width: 100%;
	height: 100%;
}

.Details {
    margin-left: 16px;
    margin-top: 10px;
    max-width: 300px;
}

.Amount {
    margin-bottom: 32px;
    font-size: 24px;
    text-align: left;
}

.FreeShipping {
    width: 20px;
    height: 20px;
    margin-left: 10px;
}

span {
    display: block;
}

.Title {
    text-align: left;
    font-size: 18px;
} 

.Location {
    margin-top: 12px;
    margin-right: 30px;
    font-size: 12px;
}

</style>