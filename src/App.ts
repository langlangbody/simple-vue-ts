import { Component, Vue } from 'vue-property-decorator'
@Component({
  template: `
  <div id="app">
    <transition name="v-fade-transition">
        <router-view/>
    </transition>
  </div>
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
