<script>

export default {
    data () {
        return {

        }
    }
}

</script>

<template>
    <footer class="footer-page">
        <div class="container">
            <div class="row justify-between">
                <div class="col-footer">
                    <div>
                        Boolando s.r.l
                        <div class="footer-info">Informazioni legali 
                            <span>Informativa sulla privacy</span>
                            <span>Diritto di recesso</span>
                        </div>
                    </div>
                </div>
                <div class="col-footer direction-column">
                    <p>Trovaci anche su</p>
                    <ul class="row">
                        <li>
                            <a href="#">
                                <img class="icon-size" src="../assets/twitter.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="icon-size" src="../assets/facebook.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="icon-size" src="../assets/instagram.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="icon-size" src="../assets/pinterest.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="icon-size" src="../assets/youtube.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../src/styles/partials/variables' as *;
@use '../src/styles/partials/mixins' as *;


.direction-column{
    flex-direction: column;
}

.footer-page {
    background-color: #1A1A1A;
    padding: 35px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
}

.justify-between{
    justify-content: space-between;
}

.col-footer span {
    padding: 0 5px;   
}

.col-footer{
    img{
        padding-top: 10px;
    }
}

.col-footer {
    font-size: 12px;
    color: $main-text-color;
}

.icon-size {
    max-width: 25px;
}
</style>