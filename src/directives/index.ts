import type { App } from 'vue';
import formwidth from './modules/form-width';

const directivesList: any = {
  formwidth
};

const directives = {
  install(app: App<Element>) {
    Object.keys(directivesList).forEach(key => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  }
};

export default directives;
