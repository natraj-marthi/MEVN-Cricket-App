<template>
    <b-table striped hover v-on:row-clicked="viewPlayer" :items="players" :fields="fields">
        <template slot="image" slot-scope="data">
            <img :src="data.value" width="25px" alt="playerImg">
        </template>
        <template slot="edit/delete" slot-scope="row">
            <b-button-group size="sm">
                <b-btn @click.stop="editPlayer(row.item)" variant="outline-info">Edit</b-btn>
                <b-btn @click.stop="deletePlayer(row.item.id)" variant="outline-danger">Delete</b-btn>
            </b-button-group>
        </template>
    </b-table>
</template>

<script>
import {getAllPlayers, getPlayer} from '@/services'
export default {
    data: () => {
        return {
            fields: [ 'id', 'name', 'country', 'category', 'image', 'edit/delete' ],
            players: []
        }
    },
    //life cycle hook
    created() {
        getAllPlayers().then(res => {
            console.log(res.players)
            this.players = res.players
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        //all params come from b-table which is a bootstrap-vue event
        viewPlayer(item, index, event ) {
            //API call to fetch latest version of player from Service. The item param contains the player already but we need latest version.
            this.$emit('player-view', item)
            // getPlayer(item.id).then(res => {
                // this.$emit('player-view', res.data.player)
            // }).catch(err => {
                // console.log(err)
            // })
        },
        deletePlayer(id) {
            this.$emit('player-delete', id)
        },
        editPlayer(player) {
            this.$emit('player-edit', player)
        }
    }
}
</script>
