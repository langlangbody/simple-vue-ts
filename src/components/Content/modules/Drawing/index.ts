 /**
 * @author xll
 * @template Drawing
 * 2018/05/25,03:04:02 pm
*/
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './drawing.scss'
@Component({
  template: require('./drawing.html'),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class Drawing extends Vue {
  private msg:string = 'drawing'
  created() {
  }
  mounted() {

  }
}

