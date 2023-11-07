<script>

export default {
    data () {
        return {
            category: ['Donna', 'Uomo', 'Bambini']
        }
    }
}

</script>

<template>
    <header class="header-page position-fixed">
        <nav class="container">
            <div class="row justify-between">
                <ul class="row header-list">
                    <li v-for="(n, i) in 3" :key="i">
                        <a href="#"> {{  category[i]  }} </a>
                    </li>
                </ul>
                <img class="page-logo" src="../assets/boolean-logo.png" alt="">
                <ul class="row header-list">
                    <li>
                        <a href="#">
                            <img class="icon-size" src="../assets/profile.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img class="icon-size" src="../assets/wishlist-1-32.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img class="icon-size" src="../assets/shopping-cart.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;
@use '../src/styles/partials/mixins' as *;

.container {
    max-width: 800px;
    margin: 0 auto;
}

.header-list{
    gap: 20px;

    a {
        color: $main-text-color;
    }
}

.row {
    display: flex;
    flex-wrap: wrap;
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
    background-color: $main_color;
    padding: 15px;
}

.page-logo{
    height: 25px;
}

.icon-size{
    max-width: 23px;
}

</style>