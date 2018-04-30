<template>
  <div v-if="pages.length>50" :class="classObject">
    <div :class="headerObject">
      <span class="count_tips"><strong>{{pages.length}}</strong> p</span>
      <button :class="btnClass" @click="toggle" v-text="statusText"></button>
    </div>
    <ul>
      <ListItem :key="page.cid" v-for="(page, index) in pages" :page="page" :itemIndex="index"  />
    </ul>
  </div>
</template>


<script>
import ListItem from "./ListItem.vue";
import prefix from "config/prefix";

import { setData, getData } from "utils/data";

export default {
  name: "list",
  components: {
    ListItem
  },
  methods: {
    toggle() {
      this.status = Number(!this.status);
      this.statusText = this.getTextByStatus();
      this.classObject.expand = this.status ? true : false;
    },
    getTextByStatus() {
      const result = this.status !== 0 ? "<< 折叠" : "展开 >>";
      return result;
    },
    getData() {
      setData();
      return getData();
    }
  },

  data() {
    return {
      pages: this.getData().pages,
      classObject: {
        [`${prefix}-container`]: true,
        expand: true
      },
      headerObject: {
        [`${prefix}-container-header`]: true
      },
      btnClass: {
        toggle: true
      },
      status: 1,
      statusText: this.getTextByStatus()
    };
  }
};
</script>

<style scoped lang="scss">
$prefix: bilibili-PageList;

.#{$prefix}-container {
  background-color: white;
  box-sizing: border-box;
  height: 80%;
  position: fixed;
  left: -400px;
  width: 400px;
  padding: 10px 20px 0;
  box-shadow: 0 0 6px 1px #e2e2e2;
  transition: all 0.3s ease-in-out;

  .#{$prefix}-container-header {
    position: relative;
    text-align: left;
    padding: 10px 0;
    border-bottom: solid 1px #e2e2e2;

    .count_tips {
      font-size: 22px;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      margin-left: 20px;
    }
  }

  ul {
    margin: 0;
    padding: 10px 10px 0 0;
    height: calc(100% - 83px);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  &.expand {
    left: 0;

    .toggle {
      right: 0px;
    }
  }

  .toggle {
    position: absolute;
    right: -92px;
    background-color: white;
    border: solid 1px #d9d9d9;
    padding: 0 15px;
    // width: 50px;
    border-radius: 4px;
    line-height: 1.5;
    height: 40px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:active,
    &:hover {
      outline: 0;
      background-color: #00a1d6;
      color: #ffffff;
      border-color: #00a1d6;
    }
  }

  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 6px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #edf2f9;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #6d757a;
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #6d757a;
  }
}
</style>
