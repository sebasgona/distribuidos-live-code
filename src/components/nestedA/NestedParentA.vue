<template>
    <div class="parent">
        <p>Parent A</p>
        <nested-child-a1/>
    </div>
</template>

<script>
import NestedChildA1 from './NestedChildA1'
export default {
    components: {
        NestedChildA1
    }
}
</script>

<style scoped>

.parent{
  height: 700px;
  width: 100%;
  background-color: black;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>
