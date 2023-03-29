/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-03-29 10:09:17
 * @LastEditors: LinRenJie xoxosos666@gmail.com
 * @LastEditTime: 2023-03-29 10:30:41
 * @FilePath: /rsuite-app/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'rsuite/styles/index.less'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
