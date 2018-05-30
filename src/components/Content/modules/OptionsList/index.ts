/**
* @author xll
* @template OptionsList
* 2018/05/24,02:06:31 pm
*/
import { Component, Watch, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './optionslist.scss'
@Component({
  template: require('./optionslist.html'),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class OptionsList extends Vue {
  private check: string = ''
  private listData:object = {}
  // 获取以及选项的列表
  @Getter get_navState!: string
  @Watch('get_navState')
  navState_chang(n: string, o: string) {
    this.change_tab(n)
    this.check = n
  }
  change_tab(tab: string) {
    if (tab !== 'font') {
      switch (tab) {
        case 'layouts':
          this.get_CheckList(`/${tab}`)
          break;
        default:
          this.get_CheckList('/materials',tab)
          break;
      }
    }
  }
  async get_CheckList(url:string,params?:string){
    let req_data:object = params ? {page: 0,type: params}:{page:0}
    let res_data = await axios.get(url)
    this.listData = res_data.data
    console.log('切换项列表',res_data);
  }
  onScroll(e:any){
    let dat = (this.$refs["listData"] as HTMLElement)
    let d_sh = dat.scrollHeight
    let d_oh = dat.offsetHeight
    let d_st = e.target.scrollTop
    // 滚动计算出滚动条距离底部的距离 执行异步加载数据
    if (d_oh + d_st >= d_sh) {
      console.log('滚动加载');
    }
  }
  on_itemClick(){
    
  }
  created() {
  }
  mounted() {
    
  }
}

