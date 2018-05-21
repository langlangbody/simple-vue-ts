 /**
 * @author xll
 * @template InputFilter
 * 2018/05/12,04:59:24 pm
*/
import { Component,Prop, Vue } from 'vue-property-decorator'
import './index.scss'
@Component({
  template: require("./index.html"),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class InputFilter extends Vue {
  @Prop()
  text: string
  @Prop()
  value: string
  @Prop()
  place: string
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

