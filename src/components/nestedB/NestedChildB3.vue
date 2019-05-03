<template>
    <div class="child-b3">
        <p>Child B3</p>
        <nested-child-b4/>
    </div>
</template>

<script>
import NestedChildB4 from './NestedChildB4'
export default {
    components: {
        NestedChildB4
    }
}
</script>

<style scoped>
.child-b3{
  height: 400px;
  width: 60%;
  background-color: burlywood;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>