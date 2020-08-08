<template>
    <b-card title="Confirm Delete?">
        <b-btn variant="danger" @click="DeletePlayer">Delete</b-btn>
        <b-btn variant="info" @click="Close">No</b-btn>
    </b-card>
</template>

<script>
import {deletePlayer} from '@/services'
export default {
    props: {
        playerID: Number
    },
    methods: {
        DeletePlayer() {
            console.log(this.playerID)
            deletePlayer(this.playerID).then(res => {
                console.log(res)
                this.$emit('close-modal')
            }).catch(err => {
                console.log(err)
            })
        },
        Close() {
            this.$emit('close-modal')
        }
    }
}
</script>

