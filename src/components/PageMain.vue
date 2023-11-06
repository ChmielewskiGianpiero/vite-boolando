<script>

export default {
    data () {
        return {

        }
    }
}

</script>

<template>
     <main class="main-content">
        <div class="container">
            <div class="cards">
                <div class="col-4">
                    <div class="card">
                        <figure class="card-image">
                            <img src="../assets/1.webp" alt="">
                                <img class="overlay" src="../assets/1b.webp" alt="">
                            <span class="heart-icon">&hearts;</span>
                            <span class="red-tag">-50%</span>
                            <span class="green-tag">Sostenibilità</span>
                        </figure>
                        <div class="container-info-card">
                            <div class="brand">Levi's</div>
                            <a href="#">
                            <div class="name-item">RELAXED FIT TEE UNISEX</div>
                            </a>
                            <div><span class="price">14,99</span><del>29,99&euro;</del></div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <figure class="card-image">
                            <img src="../assets/2.webp" alt="">
                                <img class="overlay" src="../assets/2b.webp" alt="">
                            <span class="heart-icon">&hearts;</span>
                            <span class="red-tag">-30%</span>
                        </figure>
                        <div class="container-info-card">
                            <div class="brand">Guess</div>
                            <a href="#">
                            <div class="name-item">ROSES TEE</div>
                            </a>
                            <div><span class="price">20,99</span> <del>29,99&euro;</del></div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <figure class="card-image">
                            <img src="../assets/3.webp" alt="">
                                <img class="overlay" src="../assets/3b.webp" alt="">                            
                            <span class="heart-icon">&hearts;</span>
                            <span class="red-tag">-30%</span>
                        </figure>
                        <div class="container-info-card">
                            <div class="brand">Come Zucchero Filato</div>
                            <a href="#">
                            <div class="name-item">VOGLIA DI COLORI PASTELLO</div>
                            </a>
                            <div><span class="price">129.99</span> <del>184,99</del></div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <figure class="card-image">
                            <img src="../assets/4.webp" alt="">
                                <img class="overlay" src="../assets/4b.webp" alt="">
                            <div class="container-absolute">
                            <span class="heart-icon">&hearts;</span>
                            <span class="red-tag">-50%</span>
                            <span class="green-tag">sostenibilità</span>
                            </div>
                        </figure>
                        <div class="container-info-card">
                            <div class="brand">Levi's</div>
                            <a href="#">
                            <div class="name-item">TEE UNISEX</div>
                            </a>
                            <div><span class="price">14,99</span> <del>29,99&euro;</del></div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <figure class="card-image">
                            <img src="../assets/5.webp" alt="">
                                <img class="overlay " src="../assets/5b.webp" alt="">
                            <span class="heart-icon">&hearts;</span>
                        </figure>
                        <div class="container-info-card">
                            <div class="brand">Maya Deluxe</div>
                            <a href="#">
                            <div class="name-item">STRIPE BODICE</div>
                            </a>
                            <div class="price">99.99&euro;</div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <figure class="card-image">
                            <img src="../assets/6.webp" alt="">
                                <img class="overlay" src="../assets/6b.webp" alt="">
                            <span class="heart-icon">&hearts;</span>
                            <span class="green-tag position-left">Sostenibilità</span>
                        </figure>
                        <div class="container-info-card">
                            <div class="brand">Esprit</div>
                            <a href="#">
                            <div class="name-item">MAGLIONE- BLACK</div>
                            </a>
                            <div class="price">29.99&euro;</div>
                        </div>
                    </div>
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

figure {
    img{
        display: block;
	    width: 100%;
    }
}

.col-4{
    flex-basis: calc((100% / 12) * 4);
    padding: 10px;
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

.position-left{
    position: absolute;
    left: 0px;
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