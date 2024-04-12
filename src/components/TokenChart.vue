<template>
  <div class="TokenChart">
    <div class="TokenChart-chartContainer">
      <div class="TokenChart-chartMask">
        <svg id="chart" preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200"></svg>
        <div class="TokenChart-chartShadow">
        </div>
      </div>
      <div class="TokenChart-chartImage">
      </div>
    </div>
    <div class="TokenChart-labels">
      <dl>
        <template v-for="(d, i) in data">
          <div class="TokenChart-labelValueWrapper" :class="`TokenChart-labelValueWrapper--${d.name}`" :key="i">
            <dt class="TokenChart-label text-xl">{{ $t(`tokenChart.label.${d.name}`) }}</dt>
            <dd class="TokenChart-value text-xl">{{d.value}}%</dd>
          </div> 
        </template>
      </dl>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import ScrollAnimation from '@/mixins/ScrollAnimation.mixin';

export default {
  name: 'TokenChart',
  
  mixins: [ScrollAnimation],

  data() {
    return {
      data: [
        {value: 30, name: 'liquidity'}, 
        {value: 10, name: 'marketing'},
        {value: 5, name: 'team'},
        {value: 5, name: 'cex'},
        {value: 50, name: 'presale'},
      ],
      listener: null,
    }
  },
  mounted() {
    addEventListener('scroll', this.onViewport);
  },
  
  methods: {
    onViewport() {
      if(this.helpers.isInViewport('#chart')) {
        this.initChart();
        removeEventListener('scroll', this.onViewport);
      }
    },
    initChart() {
      // TODO: refactor
      let data = this.data;
      let colors = ['#fcff5b', '#c8a058', '#9DD9D2', '#81667A', '#D8A7CA'];

      let sizes = {
        innerRadius: 0,
        outerRadius: 100
      };

      let durations = {
        entryAnimation: 2000
      };

      draw();

      function draw() {
        d3.select("#chart").html("");
        
        let generator = d3.pie()
          .value((d) => d.value)
          .sort((a, b) => {
            return a.value - b.value;
          });

        let chart = generator(data);

        let arcs = d3.select("#chart")
          .append("g")
          .attr("transform", "translate(100, 100)")
          .selectAll("path")
          .data(chart)
          .enter()
          .append("path")
          .style("fill", (d, i) => colors[i]);

        let angleInterpolation = d3.interpolate(generator.startAngle()(), generator.endAngle()());

        let innerRadiusInterpolation = d3.interpolate(0, sizes.innerRadius);
        let outerRadiusInterpolation = d3.interpolate(sizes.outerRadius, sizes.outerRadius);

        let arc = d3.arc();

        arcs.transition()
          .duration(durations.entryAnimation)
          .attrTween("d", d => {
            let originalEnd = d.endAngle;
            return t => {
              let currentAngle = angleInterpolation(t);
              if (currentAngle < d.startAngle) {
                return "";
              }

              d.endAngle = Math.min(currentAngle, originalEnd);

              return arc(d);
            };
          });

        d3.select("#chart")
          .transition()
          .duration(durations.entryAnimation)
          .tween("arcRadii", () => {
            return t => arc
              .innerRadius(innerRadiusInterpolation(t))
              .outerRadius(outerRadiusInterpolation(t));
          });
        
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/variables';

$width: 350px;
$height: 350px;

.TokenChart {
  display: flex;
  gap: 12px;
  align-items: end;
  
  &-chartContainer {
    position: relative;
    width: $width;
    height: $height;
  }

  &-chartMask {
    mask-image: url('@/assets/images/chart-mask.svg');
    mask-size: contain;
    mask-repeat: no-repeat;
    position: relative;
  }

  &-chartShadow,
  &-chartImage {
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  // &-chartShadow {
  //   background-image: url('@/assets/images/chart-mask-border.svg');
  //   filter: blur(4px);
  //   opacity: 0.5;
  // }

  &-chartImage {
    background-image: url('@/assets/images/chart-mask-img.png');
  }
  
  &-labelValueWrapper {
    margin-bottom: 12px;
    display: flex;
    gap: 12px; 
    align-items: center;

    &:before {
      content: '';
      display: inline-block;
      width: 40px;
      height: 40px;
    }

    &--liquidity {
      &:before {
        background-color: $primary
      }
    }

    &--marketing {
      &:before {
        background-color: $primary-dark
      }
    }

    &--team {
      &:before {
        background-color: $tiffany
      }
    }

    &--cex {
      &:before {
        background-color: $violet
      }
    }

    &--presale {
      &:before {
        background-color: $pink
      }
    }
  }

  &-label {
    color: $primary;
  }
  
  &-value {
    color: $primary;
    font-weight: 700;
    margin: 0;
  }
}

#chart {
  display: block;
  margin: 0 auto;
  height: $height;
  width: $width;
}
</style>