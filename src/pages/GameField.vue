<template lang="pug">
  div.game-page
    canvas.game-canvas(width="800" height="800") Ваш браузер не поддерживает Canvas
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    prepareGameCanvas () {
      const canvas = document.querySelector('.game-canvas');
      const context = canvas.getContext('2d');

      context.beginPath();
      for (let i = 1; i < 80; i++) {
        context.moveTo(0, i * 10);
        context.lineTo(800, i * 10);
        context.moveTo(i * 10, 0);
        context.lineTo(i * 10, 800);
      }      
      context.closePath();
      context.strokeStyle = "#91FFFF";
      context.lineWidth = 0.5;
      context.stroke();

      context.beginPath();

      context.moveTo(0, 20);
      context.bezierCurveTo(400, 20, 650, 70, 750, 150);
      context.bezierCurveTo(850, 250, 500, 220, 250, 170);
      context.bezierCurveTo(200, 150, 100, 150, 0, 150);

      context.moveTo(0, 60);
      context.bezierCurveTo(400, 60, 600, 110, 680, 150);
      context.bezierCurveTo(680, 150, 800, 250, 250, 100);
      context.bezierCurveTo(270, 100, 100, 100, 0, 100);

      context.strokeStyle = "blue";
      context.lineWidth = 0.5;
      context.stroke();

      context.closePath();
      
    }
  },
  mounted () {
    this.prepareGameCanvas();
  }
}
</script>

<style lang="scss" scoped>
.game-canvas {
  border: 1px solid green;
  margin: 0;
  padding: 0;
}
</style>
