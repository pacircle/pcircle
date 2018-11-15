import { message } from 'antd';
import 'antd/dist/antd.css'

export function somethingWrong() {

  // todo 以后这边要加根据配置来采用不同操作的代码
  // todo 目前就很暴力的弹个东西出来吧
  message.error('something wrong!')

  return
}

export function searchError() {
  message.config({
    top: window.innerHeight/2.2, //搜索不到时显示error在居中的位置
    duration: 3
  });
  // 搜索不到结果时弹出信息
  message.error('报警了！没找到！')

  return
}
