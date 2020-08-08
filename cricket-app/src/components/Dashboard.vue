<template>
    <b-container>
        <b-button-group>
            <b-button variant="success" @click="showModal('create')">
                Create Player
            </b-button>
        </b-button-group>
        <view-players v-on:player-view="ViewPlayer" v-on:player-delete="DeletePlayer" v-on:player-edit="EditPlayer"/>
        <b-modal ref="playersModal" title="Player Operations" hide-footer>
            <create-player v-on:close-modal="CloseModal" v-if="create"/>
            <view-player v-if="view" :player="player"/>
            <delete-player v-on:close-modal="CloseModal" :playerID="playerID" v-if="deletePlayer"/>
            <update-player v-on:close-modal="CloseModal" :player="player" v-if="edit"/>
        </b-modal>
    </b-container>
</template>

<script>
import CreatePlayer from './CreatePlayer'
import ViewPlayer from './ViewPlayer'
import ViewPlayers from './ViewPlayers'
import DeletePlayer from './DeletePlayer'
import UpdatePlayer from './UpdatePlayer'
export default {
    data() {
        return {
            create: false,
            view: false,
            edit: false,
            deletePlayer: false,
            player: {},
            playerID: null
        }
    },
    components: {
        CreatePlayer,
        ViewPlayer,
        ViewPlayers,
        DeletePlayer,
        UpdatePlayer
    },
    methods: {
        showModal(modalName) {
            switch(modalName) {
                case 'create': 
                    this.setToDefault()
                    this.create = true
                    this.$refs.playersModal.show()
                    break
                case 'view':
                    this.setToDefault()
                    this.view = true
                    this.$refs.playersModal.show()
                    break
                case 'edit':
                    this.setToDefault()
                    this.edit = true
                    this.$refs.playersModal.show()
                    break
                case 'delete':
                    this.setToDefault()
                    this.deletePlayer = true
                    this.$refs.playersModal.show()
                    break
            }
        },
        setToDefault() {
            this.create = false
            this.edit = false
            this.view = false
            this.deletePlayer = false
        },
        ViewPlayer(player) {
            this.player = player
            this.showModal('view')
        },
        CloseModal() {
            this.$refs.playersModal.hide()
        },
        DeletePlayer(playerID) {
            this.playerID = playerID
            this.showModal('delete')
        },
        EditPlayer(player) {
            this.player = player
            this.showModal('edit')
        }
    }
}
</script>
