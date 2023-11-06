# APP 交互文檔模板說明

> changeLog：
基礎庫 1.0.0 版本開始支持，低版本不兼容。
基礎庫 1.0.2 版本新增功能：新增參數params。
> 

## 概述

H5 與 APP 之間的交互以 `JSBridge` 的 調用方式，APP 提供方法給 H5 調用並返回結果，也可以主動調用 H5 在頁面註冊的方法。

## 調用方式

```jsx
window.BOCJSBridge.call(Object object);
```

## 參數

**Object object**

| 參數 | 類型 | 默認值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| target | string |  | 是 | WLEWAHybridHandle |
| action | string |  | 是 | 方法名 |
| data | object |  | 否 | 參數(不同action參數不同) |
| success | string |  | 否 | 成功回調方法名 (唯一) |
| fail | string |  | 否 | 失敗回調方法名 (唯一) |
| params | string |  | 否 | v1.0.2版本開始支持 |

## 返回值

object.success  成功返回 **`JSON字符串`** 到success方法參數中；

object.fail  失敗返回錯誤信息到fail方法參數中

| 參數 | 類型 | 是否需要encode | 描述 |
| --- | --- | --- | --- |
| result_code | number | 否 | 錯誤碼 |
| result_msg | string | 否 | 返回信息 |
| data | object | 否 | 返回數據 |
| data.user.name | string | 否 | 用户名 |

## 示例代碼

```jsx

const successCallback = function(result) {
	console.log(result)
}
const failCallback = function(result) {
	console.log(result)
}

window.BOCJSBridge.call({
  target: 'EWAHybridHandle',
  action: 'ewaRequestNetworking',
  data: {
    parameter: { queryType: '0' },
    url: '/api/transaction/actionTxnHistEnquiryBocPay',
    header: { deviceID: '111' },
    type: 'POST',
    isEncrypt: 'Y'
  },
  success: "successCallback",
	fail: "failCallback"
})
```

## 錯誤碼

| 錯誤碼 | 含義 | scope |
| --- | --- | --- |
| -1 | 通用錯誤 | 全局 |
| -401001 | SDK通用：無權限 | 全局 |
| -401002 | SDK通用：API傳參錯誤 | 全局 |
| 10001 | 請求方式錯誤 | 請求API |
| 10002 | 網絡中斷 | 請求API |

## 注意事項

約束：H5 端發請求到 `Server` 端，需調用 APP 的方法做請求代理。