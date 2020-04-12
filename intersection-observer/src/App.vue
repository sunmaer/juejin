<template>
  <div id="app">
    <div class="mod_block">IntersectionObserver 应用</div>
    <banner></banner>
    <list></list>
  </div>
</template>

<script>
import banner from './components/banner.vue';
import list from './components/list.vue';

export default {
  name: 'App',
  components: {
    banner,
    list,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
img[src=""],
img:not([src]) {
  opacity: 0;
}
#app {
  margin: 0 auto;
  max-width: 980px;
  min-height: 100%;
  background-color: #f5f5f5;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.mod_block {
  line-height: 60px;
  font-weight: bold;
  text-align: center;
}
.mod_banner {
  width: 100%;
  height: 60px;
}
.banner {
  padding: 0 12px;
  width: 100%;
  line-height: 60px;
  background-color: #f1efef;
}
.mod_list {
  padding: 10px 12px;
  .list_title {
    line-height: 40px;
    font-weight: normal;
    font-size: 15px;
    text-align: left;
  }
  .list_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .cover {
    flex: none;
    width: 100px;
    height: 56px;
    background-color: #eee;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .info {
    flex: none;
    padding: 10px;
    width: calc(100% - 100px);
    text-align: left;
  }
  .title {
    line-height: 30px;
    font-weight: normal;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .subtitle {
    width: 100%;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mod_loading {
    padding: 20px;
  }

  .icon_loading {
    display: block;
    width: 27px;
    height: 10px;
    margin: 0 auto;
    background: url("//imgcache.gtimg.cn/tencentvideo_v1/vstyle/mobile/v2/style/img/common/loading.png")
      0 0 no-repeat;
    -webkit-background-size: 27px 300px;
    background-size: 27px 300px;
    -webkit-animation: loading 1s steps(30) infinite;
  }

  @-webkit-keyframes loading {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -300px;
    }
  }
}
</style>
