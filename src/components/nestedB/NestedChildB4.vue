<template>
    <div class="child-b4">
        <p>Child B4</p>
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
.child-b4{
  height: 300px;
  width: 60%;
  background-color: rebeccapurple;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>