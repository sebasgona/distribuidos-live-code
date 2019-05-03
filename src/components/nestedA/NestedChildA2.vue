<template>
    <div class="child-a2">
        <p>Child A2</p>
        <nested-child-a3/>
    </div>
</template>

<script>
import NestedChildA3 from './NestedChildA3'
export default {
    components: {
        NestedChildA3
    }
}
</script>

<style scoped>

.child-a2{
  height: 500px;
  width: 60%;
  background-color: green;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>
