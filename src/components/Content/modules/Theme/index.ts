/**
* @author xll
* @template Theme
* 2018/05/25,03:04:47 pm
*/
import { Component,Watch, Vue } from 'vue-property-decorator'
import { Action, Getter } from "vuex-class";
import axios from 'axios';
import './theme.scss'

interface Asyncdata {
  page:string,
  total_count:number
}
declare global {
  interface Date {Format:any}
}
@Component({
  template: require('./theme.html'),
  components: {
    // Xll:() => import('@/views/xll')
  }
})

// 修改类名
export default class Theme extends Vue {
  private asyncdata:Asyncdata = {
    page:'0',
    total_count:0
  }
  private themeList: Array<object> = []
  private headers: Array<object> = [
    {
      text: '主题',
      align: 'center',
      sortable: false,
      value: 'name'
    },
    {
      text: '缩略图',
      align: 'center',
      value: 'thumb_path'
    },
    {
      text: '状态',
      align: 'center',
      value: 'state'
    },
    {
      text: '最后更新',
      align: 'center',
      value: 'created_at'
    },
    {
      text: '操作',
      align: 'center',
      sortable: false,
      value: 'name'
    }
  ]
  private dialog: boolean = false
  private desserts:Array<object> = []
  editedIndex = -1
  private editedItem:object = {
    name: '',
    thumb_path: '',
    created_at: 0,
    state:''
  }
  defaultItem= {
    name: '',
    thumb_path: '',
    created_at: 0,
    state:''
  }
   
  @Action axios_state!: () => void;
  @Getter get_AxiosState!: boolean;
  get formTitle () {
    return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
  }
  get NowTime () {
    let myDate = new Date();
    let y= myDate.getFullYear(); 
    let m = myDate.getMonth()+1;      
    let d = myDate.getDate();
    return `${d}/${m}/${y}`
  }
  @Watch('dialog')
  dialog_chang(val:any){
    val || this.close()
  }
  created() {
    this.get_themeList(1)
  }
  async get_themeList(page:number) {
    let res_list = await axios.get(`/themes?page=${page}`)
    console.log(res_list);
    
    this.desserts = []
    this.desserts = res_list.data.themes.map((item:any)=>{
      if (item.created_at) {
        // yyyy-MM-dd hh:mm
        let  y = new Date(item.created_at).getFullYear()
        let  m = new Date(item.created_at).getMonth()+1
        let d = new Date(item.created_at).getDate()
        
        item.created_at = `${d}/${m}/${y}`
      }
      return item
    })
    console.log(this.desserts);
    this.asyncdata = {
      page:'0',
      total_count:0
    }
    this.asyncdata = {
      page:res_list.data.page,
      total_count:res_list.data.total_count
    }
  }
  // 点击下一页以及上一页时的请求操作
  on_nextPage(s:string){
    let b_num = this.asyncdata.total_count - parseInt(this.asyncdata.page)
    if (this.get_AxiosState &&  b_num >= 0) {
      let num = parseInt(this.asyncdata.page)
      switch (s) {
        case 'next':
          if(num+1 <= this.asyncdata.total_count) this.get_themeList(num+1)
          break;
        default:
        if (num-1 !== 0) this.get_themeList(num-1)
          break;
      }
    }
  }
  editItem (item:object) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }
  deleteItem (item:object) {
    const index = this.desserts.indexOf(item)
    confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
  }
  close () {
    this.dialog = false
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    }, 300)
  }
  save () {
    if (this.editedIndex > -1) {
      Object.assign(this.desserts[this.editedIndex], this.editedItem)
    } else {
      this.desserts.push(this.editedItem)
    }
    this.close()
  }
}

