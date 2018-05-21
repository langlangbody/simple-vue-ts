 /**
 * @author xll
 * @template components
 * 2018/05/10,07:54:02 pm
*/
import { Component, Vue } from 'vue-property-decorator'
import './index.scss'
@Component({
  template: require("./index.html"),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class Temp extends Vue {
  data() {
    return {
      msg:'xll'
    }
  }
  created() {
  }
  mounted() {

  }
}

