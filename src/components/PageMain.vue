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
            store: store,
            open: false,
            selectedProducts: {}
        }
    },
    methods: {
        showProducts(nameItem){
            this.open = true
            this.selectedProducts = nameItem
        },
        hideProducts(){
            this.open = false
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
                <div v-for="(card,i) in store.products" :key="i" class="col-4">
                    <Product 
                    :brand="card.brand" 
                    :nameItem="card.name" 
                    :src1="card.frontImage" 
                    :src1b="card.backImage"
                    :price="card.price"
                    @show="showProducts"
                    />
                </div>
            </div>
        </div>
    </main>
    <div class="modal" v-if="open" @click="hideProducts">
        <div class="modal-content" >
            <p> {{ selectedProducts }} </p>
            <font-awesome-icon @click="hideProducts" icon="circle-xmark" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;
@use '../src/styles/partials/mixins' as *;


.modal{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.300);
    z-index: 40;

}

.modal-content{
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200px;
    padding: 30px;
    background-color: white;
    box-shadow: 0px 0px 20px;
    z-index: 50;
    display: flex;
    justify-content: space-between;
}

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