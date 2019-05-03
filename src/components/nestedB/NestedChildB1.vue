<template>
    <div class="child-b1">
        <p>Child B1</p>
        <nested-child-b2/>
    </div>
</template>

<script>
import NestedChildB2 from './NestedChildB2'
export default {
    components: {
        NestedChildB2
    }
}
</script>

<style scoped>
.child-b1{
  height: 600px;
  width: 60%;
  background-color: chocolate;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>