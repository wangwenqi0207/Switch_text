<template>
  <div class="app">
    <div class="button_top_box">
      <div class="button_top" @click="click_number">{{number}}</div>
      <div class="button_top button_top2">...</div>
    </div>
    <div class="text_box">
        <div class="one_text_box" v-for="(item,index) in text_list" :key='index'  @click="write_click(index)">
          <input v-model="item.text" :disabled='item.disabled' :autofocus="item.autofocus"
          @blur="write_end(index)"  v-focus="item.focusState"/>
          <div class="text_btn">
            <div class="btn" @click="write_btn(index)" v-show='item.btn'></div>
            <div class="btn btn2" :class="{'hidden':item.isHidden}"  v-show='item.btn' @click="Islock(index)"></div>
          </div>
        </div>
    </div>
    <div class="change_btn">
       换一个
    </div>
  </div>
</template>
<script>
import list from './list'
export default {
  list,
  name: 'demo',
  data() {
    return {
      number:1,
      isAdd:true,
      isSub:false,
      text_list:[
        {
          id:1,
          text:"苹果",
          disabled:true,
          autofocus:false,
          btn:true,
          write_end:true,
          isHidden:false,
          focusState: false,
        },
      ]
    };
  },
  mounted() {
    
  },
  directives: {
    focus: {
      //根据focusState的状态改变是否聚焦focus
      update: function (el, value) {    //第二个参数传进来的是个json
        if (value) {
          el.focus()
        }
      }
    }
  },
  methods: {
    click_number(){
      if(this.number===1) {
              this.number++
              this.text_list.push(list[this.random(0, 10)])
              this.isAdd = true
          } 
          else if (this.number===2) {
              this.number++
              this.text_list.push(list[this.random(0, 10)])
              this.isAdd = true 
          }
          else if (this.number===3) {
              this.number--
              this.isAdd = false
              this.text_list.splice(0,1)
          } 
          else if(this.number===2){
                this.number--
                this.text_list.splice(0,1)
                this.isAdd = false
              }
             else if(this.number===1){
               this.number--
                this.text_list.splice(0,1)
                this.isAdd = false
              }
              else {
              if(this.isAdd) {
                this.text_list.push(list[this.random(0, 10)])
                this.number++  
              } else {
                this.text_list.splice(0,1)
                this.number--
              }
          }
  },
    Islock(index){
      this.text_list[index].isHidden =!this.text_list[index].isHidden;
    },
    write_btn(index){
      this.text_list[index].focusState = true;
      this.text_list[index].disabled=false;
      this.text_list[index].autofocus=true;
      this.text_list[index].btn=false;
      this.text_list[index].write_end=true;
    },
    write_end(i){
      this.text_list[i].write_end=false;
      // alert(i)
    },
    write_click(index){
      //  alert(index)
      if(this.text_list[index].write_end==false){
          this.text_list[index].disabled=true;
          // // this.text_list[index].autofocus=false;
           this.text_list[index].btn=true;
          
      }
    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
};
</script>
<style scoped>
.app{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
  .button_top{
    color: #389290;
    font-size: 28px;
    width:34px;
    height:34px;
    background:rgba(255,255,255,0.6);
    text-align: center;
    line-height: 34px;
    border-radius: 50%;
  }
  .button_top2{
    line-height:17px;
    margin-top: 10px;
  }
  .button_top_box{
    float: right;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .text_box{
    clear: both;
    width: 100%;
  }
  .text_box input{
    font-size: 60px;
    font-family: "黑体";
    height: 78px;
    background:none;  
    outline:none;  
    border: none;
    width: 100%;
    text-align: center;
  }
  .text_btn{
    display: flex;
    justify-content: space-between;
    width: 33%;
    margin: auto;
  }
  .one_text_box{
      width: 100%;
      margin: auto;
      height: 132px;
  }
  .btn{
    width: 22px;
    height: 22px;
    background: url('../assets/img/3.png');
    margin-left: 20px;
  }
  .btn2{
    background: url('../assets/img/1.png');
    margin-right: 30px;
  }
  .hidden{
    background: url('../assets/img/2.png');
  }
  .change_btn{
    width:197px;
    height:62px;
    background:rgba(255,255,255,1);
    border-radius:31px;
    font-size:26px;
    color:rgba(56,146,144,1);
    text-align: center;
    margin:0 auto;
    line-height: 62px;
    margin-top: 50px;
  }
</style>
