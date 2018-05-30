/**
* @author xll
* @template OptionsList
* 2018/05/24,02:06:31 pm
*/
import { Component, Watch, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './optionslist.scss'

interface Current {
  url: string,
  tab?: string
}

@Component({
  template: require('./optionslist.html')
})

// 修改类名
export default class OptionsList extends Vue {
  // 当前选中的tab项
  private check: string = ''
  // 数据列表
  private listData: Array<object> = []
  // 所夹在的页数
  private page: number = 1
  // 加载动画
  private loading:boolean = false
  // 当前请求数据的参数
  private current: Current = {
    url:'',
    tab:''
  }
  // 获取以及选项的列表
  @Getter get_AxiosState!: boolean;
  @Getter get_navState!: string
  // 监听Getter中的get_navState事件 
  @Watch('get_AxiosState')
  AxiosState_chang(n:boolean,o:boolean){
   if (n) {
     this.loading = n
   }
  }
  @Watch('get_navState')
  navState_chang(n: string, o: string) {
    this.listData = []
    this.change_tab(n)
    this.check = n
  }
  // 当切换tab时
  change_tab(tab: string) {
    if (tab !== 'font') {
      switch (tab) {
        case 'layouts':
          this.current = {
            url: '/layouts'
          }
          this.get_CheckList(`/${tab}`)
          break;
        default:
          this.current = {
            url: '/materials',
            tab: tab
          }
          this.get_CheckList('/materials', tab)
          break;
      }
    }
  }
  // 加载移步数据
  async get_CheckList(url: string, params?: string, page?: number) {
    // 判断单词请求请求状态师傅完成  只有完成后才能进行下次请求
    if (this.get_AxiosState) {
      let pageNum = page ? page : 1
      let req_data: object = params ? { page: pageNum, type: params } : { page: pageNum }
      let res_data = await axios.get(url)
      this.listData = [...this.listData, ...res_data.data.lists]
      this.page = res_data.data.page
      console.log('切换项列表', res_data);
    }
  }
  // 滚动事件
  onScroll(e: any) {
    let dat = (this.$refs["listData"] as HTMLElement)
    let d_sh = dat.scrollHeight
    let d_oh = dat.offsetHeight
    let d_st = e.target.scrollTop
    // 滚动计算出滚动条距离底部的距离 执行异步加载数据
    if (d_oh + d_st >= d_sh) {
      if (this.current.tab) {
        this.get_CheckList(this.current.url,this.current.tab,this.page)
      }else{
        this.get_CheckList(this.current.url,'',this.page)
      }
    }
  }
  // item的点击事件
  on_itemClick() {

  }
  created() {
  }
  mounted() {

  }
}

