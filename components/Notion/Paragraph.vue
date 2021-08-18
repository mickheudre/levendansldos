<template>
    <p ref="paragraph"> 
        <StyledText v-for="element in this.block.paragraph.text" :key="element.text.content" :text="element.text"></StyledText>
    </p>
</template>

<script>
import StyledText from './StyledText.vue'

export default {
    components: { StyledText }, 
    props: {
        block: Object
    }
}
</script>