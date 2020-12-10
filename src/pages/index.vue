<template lang="pug">
.page
    header
        h1 fyindr test
    article
        card
            h2 this is card
            p you can put all kinds of things in here
        card.back
            h2 this is another card
            p you can put all kinds of things in here
        card
            h2 this is, yes, another card
            p you can put all kinds of things in here
        card.back
            h2 this is yet another card
            p you can put all kinds of things in here
</template>

<script>
import card from '@/components/card'

export default {
    components: { card },
    setup () {
        return {}
    }
}
</script>
