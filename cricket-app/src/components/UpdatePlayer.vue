<template>
    <b-card title="Edit Player">
        <b-form @submit="onSubmit">
            <b-form-group id="playerIdGroup" label="Id" label-for="playerId">
                <b-form-input id="playerId" v-model="player.id" type="text" required placeholder="player id"></b-form-input>
            </b-form-group>
            <b-form-group id="playerNameGroup" label="Name" label-for="playerName">
                <b-form-input id="playerName" v-model="player.name" type="text" required placeholder="player name"></b-form-input>
            </b-form-group>
            <b-form-group id="playerCountryGroup" label="Country" label-for="playerCountry">
                <b-form-input id="playerCountry" v-model="player.country" type="text" required placeholder="player country"></b-form-input>
            </b-form-group>
            <b-form-group id="playerCategoryGroup" label="Category" label-for="playerCategory">
                <b-form-input id="playerCategory" v-model="player.category" type="text" required placeholder="player category"></b-form-input>
            </b-form-group>
            <b-form-group id="playerImageGroup" label="Image" label-for="playerImage">
                <b-form-input id="playerImage" v-model="player.image" type="text" required placeholder="player image"></b-form-input>
            </b-form-group>
            <b-button variant="outline-info" type="submit">Edit</b-button>
        </b-form>
    </b-card>
</template>

<script>
import {updatePlayer} from '@/services.js'
export default {
    props: {
        player: Object
    },
    methods: {
        onSubmit() {
            updatePlayer(this.player).then(res => {
                console.log(res)
                this.$emit('close-modal')
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss">
</style>

