<template>
  <div class="stability_warp">
    <div class="tabClass">
      <Nav :tabs="tabs" :tabIndex="tabIndex" @changeIndex="changeIndex"></Nav>
    </div>
    <ul
      class="listClass"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li
        v-for="(item, index) in listData"
        :key="index"
        @click="toDetail(item)"
        class="listClass_li"
      >
        <!-- <div class="li_img"><img :src="require('assets/image/0.png')" alt="" /></div> -->
        <!-- <div style="padding: 4px 2vw 0 0">
          <span
            style="
              display: inline-block;
              background: red;
              border-radius: 50%;
              height: 10px;
              width: 10px;
            "
          ></span>
        </div> -->
        <div class="li_content">
          <div class="li_content_title">{{ item.title }}</div>
          <div class="li_content_time">{{ item.incidentAddress + '' + item.incidentAddress }}</div>
          <div class="li_content_bottom">指令时间：{{ item.incidentTime }}</div>
        </div>
      </li>
      <li v-if="!noMore" class="loadMoreClass">
        <i class="iconfont icon-Loading"></i>
        加载中...
      </li>
      <li v-if="noMore" class="loadMoreClass">没有更多了...</li>
    </ul>
  </div>
</template>

<script>
import Nav from '@/components/tab'
import {
  getEmergencyEventList
} from '@//api/a'
export default {
  name: 'orderAdmin',
  components: { Nav },
  data () {
    return {
      tabs: [{ name: '待反馈' }, { name: '已反馈' }],
      loading: false,
      noMore: false,
      tabIndex: localStorage.getItem('orderAdminTabIndex') / 1 || 1, // 0:待报送 1:已报送
      listData: [],
      total: 0,
      params: {
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  created () {
    // that.$store.commit({
    //   type: "StoreData",
    //   key: "peopleType",
    //   value: "r.data.userType",
    // });
    this.getData()
    dd.enablePullToRefresh()
      .then((res) => {
        this.getData()
      }).catch(() => {
        dd.stopPullDownRefresh()
      })
  },
  methods: {
    changeIndex (i) {
      this.tabIndex = i
      localStorage.setItem('orderAdminTabIndex', i)
      this.params.pageSize = 10
      this.getData()
      window.scrollTo(0, 0)
    },
    loadMore () {
      if (this.listData.length === this.total) return
      this.params.pageSize += 10
      this.getData()
    },
    toDetail (item) {
      //   this.$router.push(`/ARuiAn/LinkageDisposal/detail?id=${id}`);
      this.$router.push({
        path: '/orderAdmin/detail',
        query: {
          type: this.tabIndex,
          id: item.id
        }
      })
    },
    async getData () {
      this.noMore = false
      // that.listData = [
      //   {
      //     id: "1",
      //     title:
      //       "在玉海街道办事处附近，有发生踩踏在玉海街道办事处附近，有在玉海街道办事处附近，有发生踩踏在玉海街道办事处附近，有",
      //     time: "2020-20-20 10:10:10",
      //     address:
      //       "地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址",
      //   },
      //   {
      //     id: "1",
      //     title:
      //       "在玉海街道办事处附近，有发生踩踏在玉海街道办事处附近，有在玉海街道办事处附近，有发生踩踏在玉海街道办事处附近，有",
      //     time: "2020-20-20 10:10:10",
      //     address:
      //       "地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址",
      //   },
      // ];
      const data = await getEmergencyEventList({
        ...this.params,
        type: this.tabIndex
      })
      if (data.success) {
        this.listData = data.data.list
        this.total = data.data.total
        this.noMore = true
      }
    }
  }
}

</script>

<style lang="less" scoped>
.stability_warp {
  padding-top: 120px;
  .tabClass {
    box-shadow: 0px 1px 0px 0px rgba(25, 31, 37, 0.12);
    background: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    // padding: 4vw;
    // > span {
    //   font-size: 30px;
    // }
  }
  .listClass{
    li {
      // padding: 1vh 0;
      // border-bottom: solid 1px #d6d6d6;

      &.loadMoreClass {
        text-align: center;
        border: 0;
        i {
          display: inline-block;
          position: relative;
          animation: rotat 1.3s linear infinite;
        }
        @keyframes rotat {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    .listClass_li {
      display: flex;
      justify-content: space-between;
      padding: 0 3vw;
      .li_img {
        width: 25%;
      }
      .li_content {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: #fafafa;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 12px 8px;
        .li_content_title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .li_content_time {
          color: #737373;
          margin: 2vh 0 1.5vh 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: pre-wrap;
          color: #737373;

        }
        .li_content_bottom {
          // overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;
          color: #737373;
          //   overflow: hidden;
          //   text-overflow: ellipsis;
          //   -webkit-line-clamp: 1;
          //   -webkit-box-orient: vertical;
          //   display: -webkit-box;
        }
      }
    }
  }
}
</style>
