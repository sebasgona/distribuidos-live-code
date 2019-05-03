<template>
    <div class="child-a1">
        <p>Child A1</p>
        <nested-child-a2/>
    </div>
</template>

<script>
import NestedChildA2 from './NestedChildA2'
export default {
    components: {
        NestedChildA2
    }
}
</script>

<style scoped>

.child-a1{
  height: 600px;
  width: 60%;
  background-color: blue;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>
