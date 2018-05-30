import { Component, Watch, Vue } from 'vue-property-decorator'
import './index.scss'
@Component({
  template: require("./index.html"),
  components:{
    Content: ()=> import('@/components/Content'),
    Header: ()=> import('@/components/Header'),
    TabBar: ()=> import('@/components/TabBar')
  }
})
export default class Index extends Vue {

}

