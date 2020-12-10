<template lang="pug">
.card
    header
    main
        slot
</template>

<script>
export default {
    components: { },
    setup () {
        return {}
    }
}
</script>

<style lang="postcss">
.card
    background-color: #EEE
    border-radius: 0.5em
    box-shadow: 0.1em 0.1em 0.1em #222
    padding: 0.7vw 1vw
    height: 24vw
    width: 16vw
    margin: 1vw 1vw 0 0
    h1, h2
        font-size: 0.9vw
    p
        font-size: 1.1vw
    &:last-child
        margin: 1vw 0
    &.back
        background-color: #AAA
</style>