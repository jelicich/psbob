<template>
  <div class="FlippingCoin">
    <div id="main"> 
      <div id="child" class="coin">
        <div class="FlippingCoin-imgWrapper">
        </div>
        <!-- svg here -->
      </div>
      <div id="child1" class="coin coin-mid"></div>
      <div id="child2" class="coin coin-mid"></div>
      <div id="child3" class="coin coin-mid"></div>
      <div id="child4" class="coin coin-mid"></div>
      <div id="child5" class="coin coin-mid"></div>
      <div id="child6" class="coin coin-mid"></div>
      <div id="child7" class="coin coin-mid"></div>
      <div id="child8" class="coin">
        <div class="FlippingCoin-imgWrapper2">
        </div>
        <!-- svg here -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlippingCoin'
}
</script>
<style lang="scss">
@import '@/styles/variables';
@import '@/styles/breakpoints';

$startOp: 0.3;

.FlippingCoin {
  &-imgWrapper {
    background: url('@/assets/images/coin-flip1.svg') no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    animation: bri 3s infinite ease-in;
  }

  &-imgWrapper2 {
    background: url('@/assets/images/coin-flip2.svg') no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    transform: scaleX(-1);
    animation: bri 3s infinite ease-in;
  }

  #main {
    display: block;
    width: 250px; 
    height: 250px;
    top: 10px;
    left: 10px;
    -webkit-transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    animation: turn 3s infinite;
    margin:auto;
    top:20%;

    @include sm-down {
      width: 80px;
      height: 80px;
    }
  }

  .coin-mid {
    mask-image: url('@/assets/images/coin-flip1.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: $primary-dark;
  }

  .coin{
    display: block;
    position: absolute;
    width: 95%;
    height: 95%;
    -webkit-transform-style: preserve-3d;
    border-radius:50%;
  }

  #child {
    -webkit-transform: translateZ(0px);
  }

  #child:after{
    content:'';
    position:absolute;
    background: rgba(0,0,0,0.5);
    filter: blur(5px);
    width:175px;
    height:20px;
    top:300px;
    left:35px;
    border-radius:50%;
    box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.3);
    opacity: $startOp;
    animation: opa 3s infinite ease-in;

    @include sm-down {
      left: 50%;
      margin-left: -40px;
      top: 100px;
      width: 80px;
      height: 15px;
    }
  }

  #child1 {
      -webkit-transform: translateZ(-10px);
  }

  #child2 {
      -webkit-transform: translateZ(-5px);

  }

  #child3 {
      -webkit-transform: translateZ(-2px);
  }

  #child4 {
      -webkit-transform: translateZ(-8px);
  }

  #child5 {
      -webkit-transform: translateZ(-12px);
  }

  #child6 {
      -webkit-transform: translateZ(-14px);
  }

  #child7 {
      -webkit-transform: translateZ(-16px);
  }

  #child8 {
      -webkit-transform: translateZ(-18px);
  }
  
  @keyframes turn{
    0%{
      transform: rotateY(-180deg);
    }
    100%{
      transform: rotateY(180deg);
    }
  }

  @keyframes opa{
    0%{
      opacity: $startOp;
    }
    20%{
      opacity: 0.1;
    }
    30%{
      opacity: $startOp;
    }
    40%{
      opacity: 0.1
    }
  }

  @keyframes bri{
    0%{
      filter: brightness(1)
    }
    20%{
      filter: brightness(1.1)
    }
    30%{
      filter: brightness(1)
    }
    40%{
      filter: brightness(1.1)
    }
  }
}
</style>