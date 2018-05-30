import { Component, Vue } from 'vue-property-decorator'
import '@/scss/App.scss'
@Component({
  template: `
    <v-app>
      <v-content>
        <transition name="v-fade-transition">
          <router-view/>
        </transition>
        </v-content>
    </v-app>
  `,
  components: {
    // SnackBar:() => import('./components/Common/TheSnackBar')
  }
})
export default class App extends Vue {
     
    created(){
      if (this.$route.path === '/active/home&isShare=true&versionType=1.4.1') {
        this.$router.push('/active/home')
      }
    }
}
