<template>
    <div class="child-a3">
        <p>Child A3</p>
        <nested-child-a4/>
    </div>
</template>

<script>
import NestedChildA4 from './NestedChildA4'
export default {
    components: {
        NestedChildA4
    }
}
</script>

<style scoped>

.child-a3{
  height: 400px;
  width: 60%;
  background-color: grey;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>
