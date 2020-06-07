<template>
    <transition name="dialog-fade">
        <div class="dw-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <div class="dw-dialog" :style="{width, marginTop:top}">
            <div class="dw-dialog__header">  
                <slot name="title">
                    <span class="dw-dialog__title">{{title}}</span>
                </slot>
                <button class="dw-dialog__headerbtn">
                <i class="hm-icon-close" @click="handleClose"></i>
                </button>
            </div>
            <div class="dw-dialog__body">
                <slot></slot>
            </div>
            <div class="dw-dialog__footer" v-if="$slots.footer">
                <slot name='footer'></slot>
            </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name:'DwDiglog',
    props:{
        title:{
            type:String,
            default:'提示'
        },
        width:{
            type:String,
            default:'50%'
        },
        top:{
            type:String,
            default:'50px'
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        handleClose(){
            this.$emit('update:visible',false)
        }
    }

}
</script>

<style lang="scss" scoped>
.dialog-fade-enter-active{
    animation: run .5s;
}
.dialog-fade-leave-active{
    animation: run .5s reverse;
}
@keyframes run {
    0%{
        opacity: 0;
        transform:translateY(-20px);
    }
    100%{
        opacity: 1;
        transform:translateY(0px);
    }
}
.dw-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .dw-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .dw-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .dw-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .dw-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>