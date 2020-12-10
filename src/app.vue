<template lang="pug">
main
    router-view
</template>

<script>
import '@/index.html'

export default {
    components: { },
    setup () {
        return {}
    }
}
</script>

<style lang="postcss">
*
    padding: 0
    margin: 0
html > body
    background-color: #888
    width: 100vw
    height: 100%
    #siimee > main 
        background-color: green
        width: 100%
        .page
            padding: 3vw
            > article
                display: flex
                flex-direction: row
                align-items: flex-start
</style>