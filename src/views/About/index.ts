 /**
 * @author xll
 * @template about
 * 2018/05/21,02:24:34 pm
*/
import { Component,Watch, Vue } from 'vue-property-decorator'
import { Action, Getter } from "vuex-class";
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
  private clickList:Array<string> = []
  @Action chang_snack!:(e:string) => void
  @Getter getSnack!:string
  
  @Watch('getSnack')
  changGetSnack(n:string,o:string){
   this.clickList = [...this.clickList,n]
  }
  on_clickme(){
    this.chang_snack('可以出来了'+(new Date()).getTime())
  }
  created() {
  }
  mounted() {

  }
}

