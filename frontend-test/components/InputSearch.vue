<template>
  <div class="input-holder" :class="classes">
    <img src="~/assets/images/icon-search.svg" alt="..." />
    <input
      ref="input"
      :type="type"
      :value="modelValue"
      @input="parseValue"
      :placeholder="placeholder"
      :disabled="readonly"
      autocomplete="new-password"
      @focus="
        $emit('input:focus');
        isFocused = true;
      "
      @blur="
        $emit('input:blur');
        onBlur($event);
        isFocused = false;
      "
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const emit = defineEmits(["input:click", "input:focus", "input:blur", "update:modelValue", "icon:click", "icon:down", "icon:up", "clear"]);

const props = defineProps({
  el: { type: Function, default: (el) => {} },
  modelValue: { type: [String, Number], default: undefined },
  modelModifiers: { type: Object, default: () => ({ default: () => 0 }) },
  placeholder: { type: String, default: undefined },
  label: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  inactive: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  error: { type: String, default: undefined },
  caption: { type: String, default: undefined },
  prependIcon: { type: String, default: undefined },
  icon: { type: String, default: undefined },
  iconSize: { type: [String, Number], default: undefined },
  suffix: { type: String, default: undefined },
  decimals: { type: Number, default: 2 },
  type: { type: String, default: "text" },
  width: { type: String, default: undefined }
});

const input = ref();
const isFocused = ref(false);

const classes = computed(() => [
  "input",
  {
    "is-focused": isFocused.value,
    "is-filled": props.modelValue !== undefined,
    "is-disabled": props.disabled,
    "is-error": props.error
  }
]);

function parseValue(event) {
  emit("update:modelValue", event.target.value);
}

function onBlur(event) {
  if (!event.target.value && props.type === "number") {
    event.target.value = null;
    emit("update:modelValue", null);
  }
}

onMounted(() => {
  props.el(input.value);
});
</script>

<style lang="scss" scoped>
.input-holder {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 8px 16px;
  border-radius: 24px;
  border: 1px solid #09170e;
  background: #132118;

  img {
    margin-right: 8px;
    opacity: 0.5;
  }

  input {
    font-weight: 700;
    width: 100%;
    color: white;
    background: transparent;
    border: none;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;

    &::placeholder {
      color: white;
      text-transform: uppercase;
      opacity: 0.5;
    }
  }

  &.is-focused {
    img {
      opacity: 1;
    }

    input {
      &::placeholder {
        opacity: 1;
      }
    }
  }
}
</style>
