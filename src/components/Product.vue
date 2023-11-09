<script>
export default {
    props: {
        src1: String,
        src1b: String,
        brand: String,
        nameItem: String,
        price: String,
        greenTag: String,
        redTag: String,
    }
}

</script>

<template>
<div class="card" >

    <figure class="card-image" @click="$emit('show', this.nameItem)" >
        <img :src="src1" alt="">
            <img class="overlay" :src="src1b" alt="">
        <span class="heart-icon">&hearts;</span>
        <span class="red-tag"> {{ redTag }}</span>
        <span class="green-tag"> {{ greenTag }}</span>
    </figure>

    <div class="container-info-card">
        <div class="brand"> {{ brand }} </div>
        <a href="#">
            <div class="name-item" @click="$emit('show')"> {{ nameItem }} </div>
        </a>
        <div>
            <span class="price"> {{ price }}</span>
        </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;
@use '../src/styles/partials/mixins' as *;


figure {
    img{
        display: block;
	    width: 100%;
    }
}


.overlay{
    position: absolute;
    top: 0px;
    opacity: 0;
}

.card-image {
    position: relative;
    
    &:hover{
        .overlay{
            opacity: 1;
    }
}
}

.heart-icon{
    position: absolute;
    top: 7px;
    right: 0px;
    font-size: 28px;
    background-color: $main-text-color;
    padding: 0 5px;
}

.green-tag{
    position: absolute;
    top: 272px;
    left: 54px;
    padding: 2px 10px;
    color: $main-text-color;
    font-size: 12px;
    font-weight: bold;
    background-color: #008000;
}


.red-tag{
    position: absolute;
    top: 272px;
    left: 0;
    background-color: #FF0000;
    padding: 2px 10px;
    font-size: 12px;
}

.name-item,.price{
    font-weight: bold;
}

.price {
    color: red;
}

.overlay{
    position: absolute;
    top: 0px;
    opacity: 0;
}

</style>