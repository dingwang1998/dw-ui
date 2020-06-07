<template>
  <div class="dw-form-item">
    <label class="dw-form-item__label" :style="{width:this.Form.labelWidth}">{{label}}</label>
    <div class="dw-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name:"DwFormItem",
    props:{
        label:{
            type:String,
            default:''
        }
    },
    inject:['Form']
}
</script>

<style lang="scss">
.dw-form-item {
  margin-bottom: 25px;
  .dw-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .dw-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>