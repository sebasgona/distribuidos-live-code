<template>
    <div class="child-a4">
        <p>Child A4</p>
        <counter/>
    </div>
</template>

<script>
import Counter from '../Counter'
export default {
    components: {
        Counter
    }
}
</script>

<style scoped>

.child-a4{
  height: 300px;
  width: 60%;
  background-color: goldenrod;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>
