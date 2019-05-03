<template>
    <div class="parentb">
        <p>Parent B</p>
        <nested-child-b1/>
    </div>
</template>

<script>
import NestedChildB1 from './NestedChildB1'
export default {
    components: {
        NestedChildB1
    }
}
</script>

<style scoped>
.parentb{
  height: 700px;
  width: 100%;
  background-color: red;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>
