 /**
 * @author xll
 * @template Drawing
 * 2018/05/25,03:04:02 pm
*/
import { Component,Watch, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './drawing.scss'
import wh_ratio from "@/until/wh_ratio";
@Component({
  template: require('./drawing.html'),
  components: {
     ToolBar:() => import('../Toolbar')
  }
})

// 修改类名
export default class Drawing extends Vue {
  // 当前所在的tab
  private check:string = ''

  @Getter get_navState!: string
  // 监听tab切换
  @Watch('get_navState')
  navState_chang(n: string, o: string) {
    if (n) {
      this.check = n
    }
  }
  created() {
    
  }
  
}

