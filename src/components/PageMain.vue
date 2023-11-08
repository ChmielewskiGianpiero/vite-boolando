<script>
import Product from './Product.vue';
import { store } from '../store'
import axios from 'axios'


export default {
    components:{
        Product
    },
    data () {
        return {
            cards: store.products
        }
    },
    created(){
        axios.get('http://localhost:3000/products')
      .then(res =>{
        const cards = res.data
        console.log(cards)
        this.store.products = cards
      })
    }
}

</script>

<template>
     <main class="main-content">
        <div class="container">
            <div class="cards">
                <div v-for="(card,i) in cards" :key="i" class="col-4">
                    <Product 
                    :brand="card.brand" 
                    :nameItem="card.name" 
                    :src1="card.frontImage" 
                    :src1b="card.backImage"
                    :price="card.price"
                    :greenTag="card.badges.value" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;
@use '../src/styles/partials/mixins' as *;


.main-content{
    margin: 105px 0;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.cards{
    display: flex;
    flex-wrap: wrap;
}

.col-4{
    flex-basis: calc((100% / 12) * 4);
    padding: 10px;
}

</style>