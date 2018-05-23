import { Component, Watch, Vue } from 'vue-property-decorator'
import './index.scss'
@Component({
  template: require("./index.html")
})
export default class Index extends Vue {
  private msg:string = 'index'
  private model:string = 'tab-2'
  private text:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  created() {

  }
  mounted() {

  }
}

