<template>
  <div class="px-8 prose">
    <h1>{{ msg }}</h1>
    <button class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="increment">
      count is: {{ count }}
    </button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

    <p class="text-sm text-gray-700">vite-ts-tailwind-starter v{{ appVersion }}</p>
    <Table :headers="headers" :items="items" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import Table from './Table.vue';
import { useStore, Mutation } from '@/store/index'

interface Header <ITEM> {
    text: string;
    value?: keyof ITEM;
}

const store = useStore()
const appVersion = store.state.version // not reactive!
const count = computed(() => store.state.count)
defineProps<{
  msg: string
}>()

function increment() {
  store.commit(Mutation.INCREMENT, 1)
}

interface Candy {
  id: string;
  name: string;
  flavor: string;
  cost: number;
}

const headers: Header<Candy>[] = [
  {
    text: 'Name',
    value: 'name'
  },
  {
    text: 'Flavor',
    value: 'flavor'
  },
  {
    text: 'Price',
    value: 'cost'
  }
]
const items = [
  {
    id: '0',
    name: 'Graplicious',
    flavor: 'Grape',
    cost: .75
  },
  {
    id: '1',
    name: 'A Team',
    flavor: 'Cherry',
    cost: .50
  }
]
</script>

<style scoped>

</style>
