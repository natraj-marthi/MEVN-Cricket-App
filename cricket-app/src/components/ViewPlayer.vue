<template>
    <b-card title="Player Details"
          :img-src="player.image"
          img-alt="Player Image"
          img-top>
    <p class="card-text">
      Name: {{player.name}}
    </p>
    <p class="card-text">
      Country: {{player.country}}
    </p>
    <p class="card-text">
      Category: {{player.category}}
    </p>
    <p class="card-text">
      Id: {{player.id}}
    </p>
  </b-card>
</template>

<script>
export default {
    name: 'view-player',
    props: {
        player: Object
    }
}
</script>
