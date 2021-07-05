
## import DW from './packages'

## Vue.use(DW)即可用下面的组件
```html
<template>
  <div id="app">
    <dw-button type="success" @click="visible=true">显示登录框</dw-button>
    <dw-dialog title="用户登录" :visible.sync="visible" width="30%">
      <dw-form :model="model" label-width="80px">
        <dw-form-item label="用户名">
          <dw-input v-model="model.username" placeholder="请输入用户名" clearable></dw-input>
        </dw-form-item>
        <dw-form-item label="用户密码">
          <dw-input v-model="model.password" placeholder="请输入用户密码" show-password></dw-input>
        </dw-form-item>
        <dw-form-item label="即时配送">
          <dw-switch v-model="model.soon" active-color="green" inactive-color="red"></dw-switch>
        </dw-form-item>
        <dw-form-item label="爱好">
          <dw-checkbox-group v-model="model.hobby">
            <dw-checkbox label="篮球"></dw-checkbox>
            <dw-checkbox label="足球"></dw-checkbox>
            <dw-checkbox label="乒乓球"></dw-checkbox>
          </dw-checkbox-group>
        </dw-form-item>
        <dw-form-item label="性别">
          <dw-radio-group v-model="model.gender">
            <dw-radio label="1">男</dw-radio>
            <dw-radio label="0">女</dw-radio>
          </dw-radio-group>
        </dw-form-item>
      </dw-form>
      <template v-slot:footer>
        <dw-button type="primary" @click="login">登录</dw-button>
        <dw-button @click="visible=false">取消</dw-button>
      </template>
    </dw-dialog>
  </div>
</template>
```
