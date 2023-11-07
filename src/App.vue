<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import cardJson from '../db.json'

export default  {
  components: {
    PageHeader, PageMain, PageFooter
  },
    data (){
      return {
        card: cardJson
      }
    },
    created (){
    }
  }
</script>

<template>
    <PageHeader/>
    <PageMain/>
    <PageFooter/>
</template>

<style lang="scss">
@use "../src/styles/general.scss";
</style>
