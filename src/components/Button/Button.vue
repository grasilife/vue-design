<!--
 * @Author: 付国强
 * @Date: 2019-09-05 21:46:08
 * @LastEditors: 付国强
 * @LastEditTime: 2019-10-27 18:23:47
 * @Description:
 -->
<template>
  <button
    class="wheel-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <!-- <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
    <w-icon class="loading icon" v-if="loading" name="loading"></w-icon> -->
    <div class="wheel-button-content">
      <slot />
    </div>
  </button>
</template>

<script>
// import Icon from "../icon/icon";
export default {
  name: "WheelButton",
  components: {
    // "w-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";

.wheel-button {
  height: $button-height;
  padding: 0 1em;
  font-size: $font-size;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
    border-color: $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }

  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .wheel-button-content {
    order: 1;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    > .button-content {
      order: 1;
    }
  }
  .loading {
    @include spin;
  }
  & + & {
    margin-left: 4px;
  }
}
</style>
