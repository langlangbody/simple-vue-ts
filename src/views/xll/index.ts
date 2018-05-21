import { Component, Vue } from 'vue-property-decorator'

@Component({
  template: require("./tem.html")
})

export default class Xll extends Vue {
  data() {
    return {
      msg: '大家好',
      styles: require('./tem.scss'),
      items: [
        { header: 'Today' },
        { avatar: 'https://avatars1.githubusercontent.com/u/20015188?s=40&v=4', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: 'https://avatars1.githubusercontent.com/u/20015188?s=40&v=4', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: 'https://avatars1.githubusercontent.com/u/20015188?s=40&v=4', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" }
      ]
    }
  }
  
  get xll():object {
    return {
      id:'xx'
    }
  }
  created() {
  }
  mounted() {

  }
}

