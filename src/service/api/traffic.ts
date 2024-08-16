import { request } from '../request';

/** 直拨线路列表 */
export function fetchDirectNumberPool() {
  return request({
    url: '/direct_number_pool',
    method: 'get',
    params: {
      page: 1,
      limit: 30
    }
  });
}
