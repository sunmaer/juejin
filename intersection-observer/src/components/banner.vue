<template>
  <div class="mod_banner">
    <div class="banner">这是一个吸顶元素</div>
  </div>
</template>

<script>
import { fixBanner } from '../modules/fixBanner';

export default {
  mounted() {
    fixBanner(
      document.querySelector('.mod_banner'),
      document.querySelector('.banner'),
    );
  },
};
</script>
