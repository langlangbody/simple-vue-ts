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
  // 获取以及选项的列表
  @Getter get_navState!: string
  @Watch('get_navState')
  navState_chang(n: string, o: string) {
    this.get_CheckList(n)
    this.check = n
  }
  async get_CheckList(tab: string) {
    console.log(tab);
    
  }
  created() {
  }
  mounted() {

  }
}

