<template>
    <div class="user-card">
        <img v-bind:src="user.picture.large" class="user-photo">
        <p class="user-nickname">{{ user.login.username }}</p>
        <p class="user-name">
            {{ firstName }}<br>
            {{ lastName }}
        </p>
        <hr>
        <p class="user-info-item">
            <img src="img/location.png">
            {{ location }}
        </p>
        <p class="user-info-item">
            <img src="img/mail.png">
            {{ user.email }}
        </p>
        <p class="user-info-item">
            <img src="img/phone.png">
            {{ user.phone }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "UserCard",
        props: ['user'],
        computed: {
            firstName() {
                console.log(this.user);
                return this.user.name.title + " " + this.user.name.first;
            },
            lastName() {
                return this.user.name.last;
            },
            location() {

                let loc = this.user.location;
                return loc.country + ", " + loc.city + ", " + loc.street.name + ", " + loc.street.number;

            }
        }
    }
</script>

<style scoped>

    .user-card {
        width: 300px;
        padding: 20px;
        border-radius: 10px;
        margin-top: 100px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
        box-shadow: 0 0 15px 0 rgba(50, 50, 50, 0.2);
        text-align: center;
    }

    .user-card .user-photo {
        box-sizing: border-box;
        height: 150px;
        margin-top: -100px;
        border-radius: 50%;
        border: 3px solid #ccc;
    }

    .user-card .user-name {
        font-size: 30px;
        font-weight: 900;
        line-height: 1.4;
        margin: 5px 0;
    }

    .user-card .user-nickname {
        color: #a0a9b3;
        font-size: 18px;
        margin: 5px 0;
        font-family: monospace;
    }

    .user-card hr {
        height: 4px;
        width: 50px;
        margin: 10px auto;
        background-color: #2c3e50;
    }

    .user-card .user-info-item img {
        vertical-align: middle;
        margin-right: 5px;
    }

</style>