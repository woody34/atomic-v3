<template>
  <div class="px-8 prose">
    <table>
        <thead>
            <th v-for="header in headers" :key="header.text">{{ header.text }}</th>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="Math.random(item.id)">
                {{log(item)}}
                <td v-for="header in headers" :key="header.text + Math.random()">{{ header.value ? item[header.value] : '' }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'

interface Header <ITEM> {
    text: string;
    value?: keyof ITEM;
}

const props = defineProps<{ headers: Header<unknown>[], items: unknown[] }>()
const { headers, items } = props;
const log = (arg: any) => console.log(arg);
</script>

<style scoped>

</style>
