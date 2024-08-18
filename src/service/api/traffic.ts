import { request } from '../request';

/** 直拨线路列表 */
export function fetchDirectNumberPool(params: Record<string, unknown>) {
  return request({
    url: '/task',
    method: 'get',
    params
  });
}
