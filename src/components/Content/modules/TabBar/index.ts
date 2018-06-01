 /**
 * @author xll
 * @template TabBar
 * 2018/05/24,02:02:04 pm
*/
import { Component, Vue } from 'vue-property-decorator'
import {Action, Getter } from "vuex-class";
import common from "@/until/common";
import axios from 'axios';
import './tabbar.scss'
@Component({
  template: require('./tabbar.html'),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class TabBar extends Vue {
  private cur:number = 0
  private tabBar:Array<object> = common.tabbar
  @Action chang_navState!:(e:string)=>void
  on_tab_click(type:string,index:number){
    this.cur = index
    this.chang_navState('no')
    this.chang_navState(type)
  }
  created() {
  }
  mounted() {
    this.chang_navState('theme')
  }
}

