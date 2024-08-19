// 注意，扩展vue的接口需要先import vue进来, 不导入原来的环境进来，直接扩展的话，就不是扩展了，变成覆盖
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue';

declare module '@vue/runtime-core' {
  // 扩展全局变量的接口内容，需要扩展ComponentCustomProperties这个接口，不要乱改成别的
  interface ComponentCustomProperties {
    $themeNaiveUIConfig: App.Theme.NaiveUIConfig;
  }
}
