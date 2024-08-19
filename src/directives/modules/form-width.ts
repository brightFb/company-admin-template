//= ====================================设置form表单里input/select宽度====================================//

import type { Directive, DirectiveBinding } from 'vue';
interface ElType extends HTMLElement {
  copyData: string | number;
  __handleClick__: any;
}
const formwidth: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.style.width = binding.value;
  }
};

export default formwidth;
