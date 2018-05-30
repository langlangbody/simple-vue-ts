 /**
 * @author xll
 * @template Content
 * 2018/05/24,02:03:20 pm
*/
import { Component,Watch, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";
import axios from 'axios';
import './content.scss'
@Component({
  template: require('./content.html'),
  components: {
    'cl-option-list': ()=> import('./modules/OptionsList'),
    'cl-drawing':()=> import('./modules/Drawing'),
    'cl-theme':()=>import('./modules/Theme')
  }
})

// 修改类名
export default class Content extends Vue {
  private type:string = ''

  @Getter get_navState!:string
  @Watch('get_navState')
  navState_chang(n:string,o:string){
     if (n) {
      this.type = n
     }
  }
  created() {

  }
  mounted() {
     this.type = this.get_navState
  }
}

