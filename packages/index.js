import DwButton from './dw-button'
import DwDialog from './dw-dialog'
import DwInput from './dw-input'
import DwCheckbox from './dw-checkbox'
import DwRadio from './dw-radio'
import DwRadioGroup from './dw-radiogroup'
import DwSwitch from './dw-switch'
import DwCheckboxGroup from './dw-checkboxgroup'
import DwForm from './dw-form'
import DwFormItem from './dw-formitem'
import './fonts/font.scss'


const components = [
    DwButton,
    DwDialog,
    DwInput,
    DwCheckbox,
    DwRadio,
    DwRadioGroup,
    DwSwitch,
    DwCheckboxGroup,
    DwForm,
    DwFormItem
  ]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 遍历注册全局组件
    components.forEach(component => {
      Vue.component(component.name, component)
    })
}


// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
    install
}