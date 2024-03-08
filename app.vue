<template>
  <slot-machine
      class="myMachine"
      :colCount="3"
      :moveTime="8"
      :list="list"
      ref="machine"
    />
    <button @click="machineGo">抽</button>
</template>

<script setup>

import defaultExport from 'lattice-lottery-plus'

const { SlotMachine } = defaultExport

import 'lattice-lottery-plus/lib/lattice-lottery.css'

let machine = ref(null)

const list = ref([
  {
    name: "1",
    image: '/images/1.jpg'
  },
  {
    name: "2",
    image: '/images/2.jpg'
  },
  {
    name: "3",
    image: '/images/3.jpg'
  }
])

const rndNum = (min, max) => {
  if (min > max) {
    min = [max, (max = min)][0]
  }
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const machineGo = () => {
  machine.value.go([1, 2, 0])
}
</script>

<style>
  /* 宽度大小 */
  .myMachine {
    width: 600px;
  }
  /* 老虎机格子的样式 */
  .slotMachine__col {
    height: 88px;
  }
  /* 奖品item的样式 */
  .slotMachine__li {
    height: 88px;
  }
  /* 图片样式 */
  .slotMachine__image {
    width: 120px;
    height: 120px;
  }
  /* 文字样式 */
  .slotMachine__label {
    color: red;
  }
</style>
