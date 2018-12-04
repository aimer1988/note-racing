<template lang="pug">
  div.rootContainer
    game-info
    router-view.main-view
    game-interaction
</template>

<script>
import GameInfo from './components/GameInfo.vue';
import GameInteraction from './components/GameInteraction.vue';

export default {
  components: {
    GameInfo, GameInteraction
  }
}
</script>

<style>
.rootContainer { 
  max-width: 1280px;
  margin: 0 auto;

  height: 90vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;  

  border: 1px solid blue;
}
.main-view {
  margin: 0;
  padding: 0;
}
</style>
