<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"DwCheckboxGroup",
    props:{
        value:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    provide(){
        return {
            CheckboxGroup:this
        }
    }
}
</script>

<style>

</style>