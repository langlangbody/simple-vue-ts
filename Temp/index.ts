 /**
 * @author xll
 * @template xllTemp
 * time
*/
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './xllTemp.scss'
@Component({
  template: require('./xllTemp.html'),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class Xteam extends Vue {
  private msg:string = 'xllTemp'
  created() {
  }
  mounted() {

  }
}

