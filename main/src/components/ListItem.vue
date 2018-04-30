<template>
  <div class="item-wrap">
    <span>{{itemIndex+1}}</span>
    <a :class="classObject" :href="host+page.page">{{page.part}}</a> 
  </div>
</template>


<script>
import prefix from "config/prefix";
import parseSearch from 'utils/parseSearch'


export default {
  name: "ListItem",
  data() {
    return {
      classObject: {
        [`${prefix}-list-item`]: true,
        active: Number(parseSearch(location.search).p) === this.page.page
      },
      host: location.protocol+'//'+location.hostname + location.pathname + "?p="
    };
  },
  props: {
    page: Object,
    itemIndex: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$prefix: bilibili-PageList;

.item-wrap {
  height: 42px;

  span {
    vertical-align: super;
    font-size: 12px;
  }

  .#{$prefix}-list-item {
    display: inline-block;
    font-size: 14px;
    width: 290px;
    text-align: left;
    color: #222;
    border-radius: 4px;
    border: 1px solid #ccd0d7;
    overflow: hidden;
    padding: 3px 7px;
    margin: 0 0 0 8px;
    background: #fff;
    height: 17px;
    line-height: 17px;
    min-width: 117px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: 0.15s;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    vertical-align: middle;

    &:hover,
    &.active {
      color: #fff;
      background-color: #00a1d6;
      border-color: #00a1d6;
    }
  }
}
</style>
