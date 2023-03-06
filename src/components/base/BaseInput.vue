<template>
  <div>
    <input
      class="input"
      @keydown.enter="updateValue"
      @input="updateValue"
      @blur="updateValue"
      :type="type"
      :value="modelValue"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  modelValue: string;
  type: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
