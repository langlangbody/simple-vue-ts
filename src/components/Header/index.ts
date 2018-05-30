 /**
 * @author xll
 * @template Header
 * 2018/05/24,01:59:20 pm
*/
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './header.scss'
@Component({
  template: require('./header.html'),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class Header extends Vue {
  private drawer:boolean = true
  created() {
  }
  mounted() {

  }
}

