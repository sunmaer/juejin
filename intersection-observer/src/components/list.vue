<template>
  <div class="mod_list">
    <h3 class="list_title">图文列表</h3>
    <div class="list_item" v-for="(item, index) in list" :key="index">
      <div class="cover">
        <img class="cover" :lazyload="item.cover">
      </div>
      <div class="info">
        <h6 class="title">{{item.title}}</h6>
        <p class="subtitle">{{item.subtitle}}</p>
      </div>
    </div>
    <div class="mod_loading">
      <i class="icon_loading"></i>
    </div>
  </div>
</template>

<script>
import { lazyLoad } from '../modules/lazyLoad';

export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getList() {
      this.$ajax
        .get('list.json')
        .then((res) => {
          if (res && res.status === 200) {
            this.list = [...this.list, ...(res.data.list || [])];

            this.$nextTick(() => {
              lazyLoad(document.querySelectorAll('[lazyload]'));
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadMore() {
      const observer = new IntersectionObserver(
        (entries) => {
          const loadingEntry = entries[0];

          if (loadingEntry.isIntersecting) {
            this.getList();
          }
        },
        {
          rootMargin: '0px 0px 600px 0px',
        },
      );

      observer.observe(document.querySelector('.mod_loading'));
    },
  },
  created() {
    this.getList();
  },
  mounted() {
    this.loadMore();
  },
};
</script>
