import { Component,Watch, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class"
import "@/scss/snackbar.scss"
@Component({
  template: `
  <div v-if="isOn_" class="mask_box">
  <v-progress-circular class="loading" :size="50" indeterminate color="#fff">
  </v-progress-circular>
  </div>
  `
})
export default class TheSnackBar extends Vue {
  @State state: boolean;

  private isOn_:boolean = false
  @Watch('state')
  turnon (n:boolean, o:boolean):void {
    if (n) {
      this.isOn_ = n
    }
  }
  created() {
  }
  mounted() {

  }
}
