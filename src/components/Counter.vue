<template>
    <div>
        <div class="container">
            <v-btn fab dark small color="primary" @click="decrement">
                -
            </v-btn>
            <p class="counter__text"> {{ counter }} </p>
            <v-btn fab dark small color="primary" @click="increment">
                +
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        }
    }
}
</script>

<style scoped>

.container{
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
}

.counter__text{
    font-weight: bold;
    font-size: 30px;
}

</style>
