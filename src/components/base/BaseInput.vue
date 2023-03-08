<template>
  <input class="input" @input="updateValue" :type="type" :value="modelValue" />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

interface Props {
  modelValue: string;
  type: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>
