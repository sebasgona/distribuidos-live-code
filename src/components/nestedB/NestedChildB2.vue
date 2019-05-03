<template>
    <div class="child-b2">
        <p>Child B2</p>
        <nested-child-b3/>
    </div>
</template>

<script>
import NestedChildB3 from './NestedChildB3'
export default {
    components: {
        NestedChildB3
    }
}
</script>

<style scoped>
.child-b2{
  height: 500px;
  width: 60%;
  background-color: violet;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>