import { Component, Watch, Vue } from 'vue-property-decorator'
import './index.scss'
@Component({
  template: require("./index.html")
})
export default class Index extends Vue {
  private msg:string = 'index'
  
  created() {

  }
  mounted() {

  }
}

