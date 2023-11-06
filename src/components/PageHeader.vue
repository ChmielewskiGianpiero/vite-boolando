<script>
export default {
    data () {
        return {

        }
    }
}


</script>

<template>
    <header class="header-page position-fixed">
        <nav class="container">
            <div class="row justify-between">
                <div class="col">
                    <a href="#">Donna</a>
                    <a href="#">Uomo</a>
                    <a href="#">Bambini</a>
                </div>
                <img class="col logo" src="../assets/boolean-logo.png" alt="">
                <div class="col ">
                    <a href="#">
                        <img class="icon-size" src="../assets/profile.png" alt="">
                    </a>
                    <a href="#">
                        <img class="icon-size" src="../assets/wishlist-1-32.png" alt="">
                    </a>
                    <a href="#">
                        <img class="icon-size" src="../assets/shopping-cart.png" alt="">
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col {
    color: white;
}

.position-fixed{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
}

.justify-between{
    justify-content: space-between;
}

.header-page{
    background-color: #FF6900;
    padding: 15px;

    a {

    }
}

.logo{
    max-width: 100%;
    height: 25px;
}

.icon-size{
    max-width: 23px;
}

</style>