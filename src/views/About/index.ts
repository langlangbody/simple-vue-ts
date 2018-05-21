 /**
 * @author xll
 * @template about
 * 2018/05/21,02:24:34 pm
*/
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './about.scss'
@Component({
  template: require('./about.html'),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class About extends Vue {
  private msg:string = 'about'
  created() {
  }
  mounted() {

  }
}

