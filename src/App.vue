<template>
    <div id="app">
        <UserCard v-if="user" v-bind:user="user" />
    </div>
</template>

<script>

    import axios from 'axios';
    import UserCard from "@/components/UserCard";

    export default {
        name: 'app',
        data() {
            return {
                user: null
            }
        },
        components: {
            UserCard
        }, mounted() {

            axios.get("https://randomuser.me/api/").then((response) => {

                this.user = response.data.results[0];
                console.log('SUCCESS', typeof this.user);

            }).catch((error) => {
                console.log('ERROR', error);
            });

        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
