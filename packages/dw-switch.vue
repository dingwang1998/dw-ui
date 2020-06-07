<template>
  <div class="dw-switch" :class="{'is-checked':value}" @click="handleCilck">
    <span class="dw-switch__core" ref="core">
      <span class="dw-switch__button"></span>
    </span>
    <input 
    type="checkbox" 
    :name="name" 
    ref="input"
    class="dw-switch__input"
    >
  </div>
</template>

<script>
export default {
    name:"DwSwitch",
    props:{
        value:{
            type:Boolean,
            default:false
        },
        activeColor:{
            type:String,
            default:''
        },
        inactiveColor:{
            type:String,
            default:''
        },
        name:{
            type:String,
            default:''
        }
    },
    methods:{
        handleCilck(){
            this.$emit('input',!this.value)
            setTimeout(() => {
                this.setColor()
                this.$refs.input.checked = this.value
            },10);       
        },
        setColor(){
            if(this.activeColor || this.inactiveColor){
                let color = this.value ? this.activeColor : this.inactiveColor 
                this.$refs.core.style.borderColor = color;
                this.$refs.core.style.backgroundColor = color;
            }
        }
    },
    mounted(){
        this.$refs.input.checked = this.value
        this.setColor();
    }
}
</script>

<style lang="scss">
.dw-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .dw-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    }
    .dw-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .dw-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.dw-switch.is-checked {
  .dw-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .dw-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>