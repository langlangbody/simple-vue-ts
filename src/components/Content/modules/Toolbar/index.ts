/**
* @author xll
* @template Toolbar
* 2018/05/31,04:44:01 pm
*/
import { Component, Watch, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './toolbar.scss'
import wh_ratio from "@/until/wh_ratio";
import font_fam_List from "@/until/font_list";
@Component({
  template: require('./toolbar.html'),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class Toolbar extends Vue {
  // 当前所在的tab
  private check: string = ''
  // 主题列表
  private themeList: Array<object> = []
  // 宽高比列表
  private wh_ratio_List: Array<object> = wh_ratio
  // SKU列表
  private SKUList: Array<object> = []
  // 所选的SKU
  private check_SKU: Array<object> = []
  // 所选择的宽高比
  private check_ratio: object = {}
  // 所选择的主题列表
  private check_theme: object = {}
  // 是否可跨页
  private Cross_page: boolean = false
  // 照片不可跨页
  private Cross_photo: boolean = false
  // 封面布局
  private Cross_cover: boolean = false
  // 产品图标
  private Cross_logo: boolean = false
  // fontfamily
  private font_list:Array<object> = font_fam_List
  // 所选的字体
  private check_font_fam:object ={}
  // 字体大小
  private font_size:Array<number> = [12,14,16,18,20]
  // 所选的字体大小
  private check_fontSize:number = 12
  
  @Getter get_navState!: string
  // 监听tab切换
  @Watch('get_navState')
  navState_chang(n: string, o: string) {
    if (n) {
      this.check = n
    }
  }
  // 监听所选
  @Watch('Cross_page')
  fun1(n: any) {
    console.log('变化', n);
  }
  created() {
    this.get_choice_themes()
    this.get_choice_SKU()
  }

  /**
   * @name 接口部分
   * @param get_choice_themes  // themes列表
   * **/

  async get_choice_themes() {
    let list = await axios.get('/ChoiceThemes')
    this.themeList = list.data
  }
  async get_choice_SKU() {
    let list = await axios.get('/ChoiceSKU')
    this.SKUList = list.data
  }
}

