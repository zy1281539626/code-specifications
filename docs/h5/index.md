# H5 項目規範

# 1. 技術堆疊與開發環境

## 1.1 技術棧

程式設計語言：TypeScript

前端框架：Vue3.x

建構工具：Vite

包管理工具：pnpm/npm

狀態管理工具：Pinia

路由工具：Vue Router

[非必需]CSS相關：sass/less + tailwindcss

HTTP工具：Axios

## 1.2 開發環境

硬體：MacBook / Windows

Node：版本

P/NPM: 版本

程式碼編輯器：VS Code

瀏覽器：Chrome / safari

Vue調試工具：Vue.js devtools 6.5.1

程式碼倉庫：Git

部署方式：Github Actions / Jenkins

# 2. 編碼規範與約束

編碼規範確保了代碼的一致性、可讀性、可維護性，並有助於團隊成員之間的順暢協作。特別是在大型團隊和多人協作的項目中，編碼規範可以減少因代碼風格不一致或結構混亂而導致的誤解和錯誤。

## 2.1 全域項目規範

### 2.1.1 創建項目

使用vite創建項目，默認選擇安裝TypeScript、JSX、Vue Router、Pinia、ESlint、Prettier等工具，單元測試庫根據實際項目需求而定：

```bash
~/Projects
➜  npm create vite@latest                                                                                              10/26/23 - 10:36 上午
✔ Project name: … my-vite-app
✔ Select a framework: › Vue
✔ Select a variant: › Customize with create-vue ↗

Vue.js - The Progressive JavaScript Framework

✔ 是否使用 TypeScript 语法？ /是
✔ 是否啟用 JSX 支持？ /是
✔ 是否引入 Vue Router 進行單頁面應用開發？ /是
✔ 是否引入 Pinia 用於狀態管理？ /是
✔ 是否引入 Vitest 用於單元測試？ /是
✔ 是否要引入一款端到端（End to End）測試工具？ › 不需要
✔ 是否引入 ESLint 用於程式碼質量檢測？ /是
✔ 是否引入 Prettier 用於程式碼格式化？ /是

正在構建項目 /Users/Projects/my-vite-app...

項目構建完成，可執行以下命令：

  cd my-vite-app
  npm install
  npm run format
  npm run dev
```

### 2.1.2 項目檔案命名

常見命名規範：

- `camelCase` 小駝峰式命名（首字母小寫）
- `PascalCase` 大駝峰式命名（首字母大寫）
- `kebab-case` 短橫線連接式
- `Snake` 底線連接式

|  | 命名方式 | 例子 |
| --- | --- | --- |
| 項目名 | kebab-case 全小寫短橫線 | element-plus、vant-weapp、my-project-name |
| 目錄名 | 參照項目名，有複數時需用複數命名，縮寫不用複數 | docs、assets、components、directives、mixins、utils、views |
| 影像檔名 | 全小寫，底線（優先單個單詞） | menu_aboutus.png、logo.png |
| html檔名 | 全小寫，底線（優先單個單詞） | success_report.html、index.html |
| css檔名 | kebab-case 全小寫短橫線 | base.scss、date-picker.scss |
| js檔名 | kebab-case 全小寫短橫線 | index.js、date-util.js |

## 2.2 Vue規範

### 2.2.2 組件命名規範

|  | 命名方式 | 例子🌰 | 备注 |
| --- | --- | --- | --- |
| 單文件組件 | ​PascalCase​ 大駝峰 | MyComponent.vue |  |
| 基礎組件 | ​Base​ 開頭 | BaseButton.vue | 不包含業務，獨立、具體功能的基礎組件，比如日期選擇器、模態框等。 |
| 業務組件 | ​Custom​ 開頭 | CustomCard.vue |  |
| 緊密耦合組件 | 子組件以父組件名開頭 | TodoList.vue 
TodoListItem.vue
TodoListItemButton.vue |  |

<aside>
💡 注意：
 1.   **組件名儘量寫全，不要縮寫。**

1. **組件名應該以高級別的（通常是一般化描述的）單詞開頭，以描述性的修飾詞結尾。** 因為編輯器通常會按字母順序組織檔案，所以現在組件之間的重要關係一目了然。 如下組件主要是用於檢索和設定功能：
- SearchButtonClear**.**vue
- SearchButtonRun**.**vue
- SearchInputQuery**.**vue
- SearchInputExcludeGlob**.**vue
</aside>

### 2.2.3 組件編寫規範

- 組件名name應該始終是多個單詞。
    
    根組件App及`<transition>`、`<component>`之類的Vue內寘組件除外。
    
    ```jsx
    export default {
      name: 'ToDoList',
      // ...
    }
    ```
    
- 聲明prop的時候，應該始終使用camelCase，而在模板和JSX中應該始終使用kebab-case
    
    ```jsx
    <MyComponent greeting-text="hi"/>
    
    export default {
      name: 'MyComponent',
      props: {
        greetingText: {
          type: String,
          required: true
        }
      }
    }
    ```
    
- vue-router的path命名採用kebab-case格式
    
    ```jsx
    {
      path: '/user-info',
      name: 'UserInfo',
      component: UserInfo
    }
    ```
    
- 單文件組件和字符串模板中組件名使用PascalCase，DOM模板中總是kebab-case
    
    ```jsx
    <!-- 在单文件组件和字符串模板中 --> 
    <MyComponent/>
    
    <!-- 在 DOM 模板中 --> 
    <my-component></my-component>
    ```
    
- 自閉合組件
    
    在單文件組件、字符串模板、JSX中沒有任何內容的組件應該自閉合，DOM中不可以。
    
    ```jsx
    <!-- 在单文件组件、字符串模板、JSX中 -->
    <MyComponent/>
    
    <!-- 其他 -->
    <my-component></my-component>
    ```
    

## 2.3 JavaScript/TypeScript 規範

- **變量** camelCase （類型 + 對象描述或屬性的方式）
    
    ```jsx
    // bad
    var getTitle = "LoginTable"
    
    // good
    let tableTitle = "LoginTable"
    let mySchool = "我的學校"
    ```
    
- **常量**  全部大寫、底線分割
    
    ```jsx
    const MAX_COUNT = 10
    const URL = 'http://test.host.com'
    ```
    
- **方法**  camelCase （動詞+名詞）
    
    ```jsx
    // 1、普通情況下，使用動詞+名詞形式
    // ❌bad
    go、nextPage、show、open、login
    
    // ✅good
    jumpPage、openCarInfoDialog
    
    // 2、請求數據方法，以 data 結尾
    // ❌bad
    takeData、confirmData、getList、postForm
    
    // ✅good
    getListData、postFormData
    
    // 3、单个动词的情况
    init、refresh
    ```
    
- **自定義事件**  kebab-case
    
    不同於組件和prop，事件不存在任何大小寫自動轉換，觸發事件名要完全匹配監聽的事件名。
    
    ```jsx
    this.$emit('my-event')
    
    <MyComponent @my-event="handleDoSomething" />
    ```
    
- **事件方法**  camelCase
    
    命名規範： handle + 名詞(可選) + 動詞
    
    ```jsx
    export default {
    	methods: {
    		handleItemClick(){
    			// ...
    		},
    		handleItemHover(){
    			// ...
    		}
    	}
    }
    ```
    

## 2.4 CSS 規範

- 樣式文件需寫 `@charset` 規則
    
    ```css
    @charset "UTF-8";
    .logo {}
    ```
    
- css代碼使用Expanded展開式
    
    ```css
    /* ✅good Expanded */
    .jdc {
      display: block;
      width: 50px;
    }
    
    /* ❌bad Compact */
    .jdc { display: block; width: 50px;}
    ```
    
- 命名規範
    - 使用小寫字母
    - 使用破折號（-）來分隔詞語，例如 **`main-header`**, **`sub-item`** 等。
    - 避免過度簡短的命名，要有意義和可讀性。
    - 如果是多詞命名，不要使用下劃線或駝峰式命名。
- BEM 命名法（Block, Element, Modifier）
    - Block 代表獨立的元件，例如 **`button`**。
    - Element 代表 Block 內部的元素，例如 **`button__text`**。
    - Modifier 代表 Block 或 Element 的狀態或版本，例如 **`button--large`**。
- 代碼易讀性
    - 左括號與類別名稱之間一個空格，冒號與屬性值之間一個空格
    - 逗號分隔的取值，逗號之後一個空格
    - 為單一 CSS 選擇器或新聲明開啟新行
    - 十六進制數值能用簡寫的盡量用簡寫
    - 不要為 0 指明單位
    
    ```css
    .menu {
      width: 100%;
      box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
    }
    
    .nav{
      color: #fff;
      margin: 0 10px;
    }
    ```
    
- 屬性值引號
    
    CSS 属性值需要用到引号时，统一使用单引号。
    
    ```css
    .item {
      font-family: 'Hiragino Sans GB';
    }
    ```
    
- 屬性書寫建議
    
    **建議**遵循以下順序：
    
    1. 佈局定位屬性：display / position / float / clear / visibility / overflow
    2. 自身屬性：width / height / margin / padding / border / background
    3. 文字屬性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
    4. 其他屬性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background: linear-gradient …
        
        ```css
        .text {
          display: block;
          position: relative;
          float: left;
          width: 100px;
          height: 100px;
          margin: 0 10px;
          padding: 20px 0;
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          color: #333;
          background: rgba(0,0,0,.5);
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          -o-border-radius: 10px;
          -ms-border-radius: 10px;
          border-radius: 10px;
        }
        ```
        

<aside>
💡 儘量避免使用 **`!important`**，因為它會打破 CSS 的層疊規則。

</aside>

## 2.5 註釋

添加註釋的目的：

- 提高程式碼的可讀性，從而提高程式碼的可維護性

註釋的原則：

- 如無必要，勿增加註記 ( As short as possible )
- 如有需要，盡量詳盡 ( As long as necessary )

### 2.5.1 HTML 文件註釋

- 單行註釋，簡單描述，註釋內容前後各一個空格
- 模塊註釋，各模塊中間空一行（用戶複雜多模塊頁面）

```html
<!-- S Comment Text A --> 
<div class="mod_a">
  ...
</div>
<!-- E Comment Text A -->
 
<!-- S Comment Text B --> 
<div class="mod_b">
  ...
</div>
<!-- E Comment Text B -->
```

### 2.5.2 CSS 文件註釋

- 單行註釋，註釋內容前後各一個空格，行與行之間空一行
- 文件註釋，標註文件內容、作者、日期

```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2023-11-01
 */

/* Head Text */ 
.head-title {} 

/* Body Text */ 
.body-text {}
```

### 2.5.3 JavaScript 文件註釋

- 單行註釋，使用`//` ，註釋應單獨一行寫在對應代碼上方
- 多行註釋使用 `/** ... */` ，而不應使用多個 `//` ，註釋內容和註釋符之間需要有一個空格，以增加可讀性
- 特殊標記：有時我們發現某個可能的 bug，但因為一些原因還沒能修復；或者某個地方還有一些待完成的功能，這時我們需要使用相應的特殊標記註釋來告知未來的自己或合作者。 常用的特殊標記有兩種：
    - `// FIXME` 說明問題是什麼
    - `// TODO` 說明還需要做的事
- 文檔類註釋，如函數、類、文件、事件等；都使用 **`jsdoc`** 規範。

```jsx
/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book (title, author) {
  this.title = title
  this.author = author
}

Book.prototype = {
  /**
   * 获取书本的标题
   * @returns {string|*}
   */
  getTitle: function () {
    return this.title
  },
  /**
   * 设置书本的页数
   * @param pageNum {number} 页数
   */
  setPageNum: function (pageNum) {
		// 設置頁數
    this.pageNum = pageNum
		// TODO: ...
  }
}
```

<aside>
💡 ESLint 工具可以輔助檢查註釋規範，可以配置對應的規則來啟用檢查。

</aside>

## 2.6 程式碼約束與美化

根據以上程式碼規範，可以通過一些挿件幫助程式碼格式化或者提示開發者不符合規範的地方，達到約束的目的。 主要可約束的行為包括：

- 編輯器統一：不同編輯器的針對前端的編寫風格不一致，可以使用`editorConfig`來統一設定；
- 程式碼編寫習慣統一：不同開發者編寫程式碼習慣和風格不同，可以使用`eslint`來統一規範；
- 程式碼格式化統一：不同編輯器和開發者習慣用的美化程式碼的風格挿件不統一，可以規範使用`prettier`及相同的配寘達到效果。

### 2.6.1 編輯器統一配寘 - editorConfig

`EditorConfig`有助於跨不同編輯器和IDE處理同一項目的多個開發人員保持一致的編碼風格。 EditorConfig項目由用於定義編碼**樣式的檔案格式和文字編輯器挿件**集合組成，這些挿件使編輯器能够讀取檔案格式並遵守定義的樣式。 EditorConfig檔案易於讀取，並且可以很好地與版本控制系統配合使用。

有知名前端項目正在使用`editorConfig`，如：**Element-Plus,Vue.js,React,Angular,Ant Design,Vuetify**等。在项目根目录新建配置文件 `.editorconfig` ，依据**React**项目规范结合项目实际需求添加常用规则：

```
# http://editorconfig.org

root = true

[*] # 所有檔案適用
charset = utf-8                 # 設定檔案字元集為 utf-8
indent_style = space            # 縮進風格（tab | space）
indent_size = 2                 # 縮進大小
end_of_line = lf                # 控制換行類型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字元
insert_final_newline = true     # 始終在檔案末尾插入一個新行

[*.md] # 僅md檔案適用以下規則
max_line_length = off
insert_final_newline = false
trim_trailing_whitespace = false

[*.{yml,yaml,json}]
indent_style = space
indent_size = 2

[Makefile]
indent_style = tab
```

<aside>
💡 VS Code 編輯器需安裝外掛程式：`EditorConfig for VS Code`

</aside>

### 2.6.2 JavaScript/TypeScript 程式碼規範 - ESLint

在Vue項目中，使用`eslint`進行程式碼風格和質量檢查時，常見的是採用與Vue相關的官方ESLint挿件和配寘。 一般常見的規範有**Standard**、**Airbnb**、**Google**等，Vue也製定了一個ESLint挿件，用於支持Vue.js的單文件組件，並定義了一套Vue.js特定的linting規則**eslint-plugin-vue**，對於一些大公司也是推出了自己的一套規範，如阿裡巴巴的**eslint-config-ali**。

除了JavaScript，我們還需要考慮`TypeScript`的程式碼規範，還有`Prettier`程式碼格式化可能與`ESlint`規則衝突的情况，顯然基礎的規範不足以應對實際項目。 當使用Vite創建Vue 3項目時，項目的初始設定是基於Vue的生態系統和最佳實踐。 Vue官方提供了一系列的ESLint配寘，這些配寘旨在與Vue的程式碼和範本最佳實踐相匹配。

- **@vue/eslint-config-typescript：**一個專門為與Vue一起使用的TypeScript程式碼提供的配寘。 它基於標準的TypeScript ESLint挿件，並包含了一些特定於Vue的配寘和推薦。
- **@vue/eslint-config-prettier/skip-formatting**: 這是Vue提供的一個Prettier配寘，用於確保ESLint和Prettier之間沒有衝突。`/ skip-formatting`版本尤其適用於那些使用Prettier作為單獨的格式化步驟，而不是通過ESLint挿件進行格式化的場景。

<aside>
💡 VS Code 編輯器安裝外掛程式：`ESLint`

</aside>

修改項目根目錄的`.eslintrc.cjs`設定檔，其中自定義`rules`規則可根據實際情況修改`（僅供參考）`：

```jsx
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // 這是ESLint的配寘的根目錄，告訴ESLint停止在父級目錄中查找設定檔
  root: true,

  // 定義程式碼運行的環境，每個環境都有一套預定義的全域變數
  env: {
    browser: true, // 瀏覽器環境中的全域變數
    node: true, // Node.js 全域變數和Node.js作用域
    es6: true // 啟用ES6語法支持及其全域變數
  },

  // 為Vue指定解析器
  parser: 'vue-eslint-parser',

  // 解析器選項
  parserOptions: {
    // 使用 '@typescript-eslint/parser' 作為TypeScript的解析器
    parser: '@typescript-eslint/parser',
    // 允許解析最新的ECMAScript版本
    ecmaVersion: 2020,
    // 使用模塊，使得可以使用 import/export
    sourceType: 'module',
    // 允許使用JSX語法
    ecmaFeatures: {
      jsx: true
    }
  },

  // 從不同的挿件中擴展規則
  extends: [
    'plugin:vue/vue3-recommended', // 使用 Vue3 推荐的规则
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],

  // 自定義或覆蓋ESLint的規則
  rules: {
    // TypeScript 規則
    '@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 @ts-ignore
    '@typescript-eslint/explicit-function-return-type': 'off', // 要求函數和類方法的顯式返回類型
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用'any'類型
    '@typescript-eslint/no-var-requires': 'off', // 禁止使用require語句
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函數
    '@typescript-eslint/no-use-before-define': 'off', // 禁止定義前使用
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止使用TypeScript注釋，例如 @ts-expect-error, @ts-ignore, @ts-nocheck, @ts-check
    '@typescript-eslint/ban-types': 'off', // 禁止使用指定的類型
    '@typescript-eslint/no-non-null-assertion': 'off', // 禁止使用非空斷言（！尾碼操作符）
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求匯出的函數和類的公共類方法的顯式返回和參數類型
    // 核心 ESLint 規則
    'no-use-before-define': 'off', // 禁止定義前使用
    'space-before-function-paren': 'off', // 強制或禁止函數圓括號之前有一個空格
    quotes: ['error', 'single'], // 強制使用單引號
    'comma-dangle': ['error', 'never'], // 禁止使用尾隨逗號

    // Vue 規則
    'vue/custom-event-name-casing': 'off', // 強制自定義事件名稱的大小寫
    'vue/multi-word-component-names': 'off', // 要求組件名稱為多個單詞
    'vue/script-setup-uses-vars': 'error', // 定義script setup中使用的變數，使其他規則如no-unused-vars不報錯
    // 其他規則
    '@typescript-eslint/no-unused-vars': [
      // 禁止未使用的變數，但允許變數是 _
      'error',
      {
        argsIgnorePattern: '^_$',
        varsIgnorePattern: '^_$'
      }
    ],
    'no-unused-vars': [
      // 禁止未使用的變數，但允許變數是 _
      'error',
      {
        argsIgnorePattern: '^_$',
        varsIgnorePattern: '^_$'
      }
    ]
  }
}
```

項目根目錄創建`.eslintignore`檔案，忽略eslint規則：

```
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
Dockerfile
*-lock.yaml
```

### 2.6.3 程式碼格式化 - Prettier

項目中安裝`Prettier`挿件用於使用脚本格式化程式碼，統一風格，防止風格不統一的程式碼提交到程式碼倉庫。

```bash
npm i prettier -D
```

項目根目錄配寘`.prettierrc`檔案：

```jsx
// "https://json.schemastore.org/prettierrc",
 
module.exports = {
  // 每行程式碼的最大長度，超出部分會被自動換行
  printWidth: 100,
  // 一個定位字元（tab）的寬度
  tabWidth: 2,
  // 使用空格代替定位字元（tab）進行縮進
  useTabs: false,
  // 是否在每個語句的末尾使用分號
  semi: false,
  // Vue檔案中的<script>和<style>內部程式碼是否縮進
  vueIndentScriptAndStyle: true,
  // 使用單引號代替雙引號
  singleQuote: true,
  // 對象的key僅在需要時使用引號
  quoteProps: 'as-needed',
  // 在對象或數組的最後一個元素後面是否放置一個逗號
  bracketSpacing: true,
  // 當對象或數組的最後一個元素後面沒有逗號時，將>放在最後一行的末尾，而不是單獨放在下一行
  trailingComma: 'none',
  // 將多行JSX元素的關閉標籤放在最後一行的末尾，而不是單獨放在下一行
  jsxBracketSameLine: false,
  // 在JSX中使用單引號代替雙引號
  jsxSingleQuote: false,
  // 當箭頭函數的參數只有一個時，總是包含括弧
  arrowParens: 'always',
  // 不插入用於標記格式化內容的特殊注釋
  insertPragma: false,
  // 不需要使用特殊的注释来控制格式化
  requirePragma: false,
  // 控制連續的非空行如何被分隔
  proseWrap: 'never',
  // 控制HTML檔案中的空白敏感度
  htmlWhitespaceSensitivity: 'strict',
  // 控制檔案末尾的分行符號。 lf代表“\n”，crlf代表“\r\n”
  endOfLine: 'lf'
}
```

部分檔案不需要Prettier格式化，添加`.prettierignore`設定檔：

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*

src/components/**/*.json
*-lock.yaml
```

可以在`package.json`中添加script用來快速格式化程式碼：

```jsx
{
	scripts: {
		"prettier": "prettier --write ."
	}
}
```

<aside>
💡 VS Code 需要安装插件：`Prettier - Code formatter`

</aside>

# 3. GitFlow工作流程規範

當在多人協作的團隊中或涉及多環境部署（如開發、測試、生產環境）的專案時， GitFlow 提供了一個固定的、預測性強的分支管理和發布流程，有助於簡化版本管理和部署流程。

## 3.1 Git 版本管理

本版本定義規範適用於框架項目及相關模塊，包括離線包平台、組件庫、文檔站等。

### 3.1.1 版本號定義說明

產品的版本號定義由3位數字組成，即v主版本號.次版本號.迭代版本號-構建版本號，初始版本號為v1.0.0-1；每位版本號相互獨立，互不影響， 如目前產品版本號為v1.0.0，當產品發生重大功能新增時，即版本號變為v2.0.0。

- 主版本號：定義為重大架構變更或重大功能新增時使用，從1開始遞增；
- 次版本號：定義為架構調整或重大功能調整時使用，從0開始遞增；
- 迭代版本號：定義為版本迭代時使用，從0開始遞增；
- 建構版本號：定義為模組的架構版本，從1開始遞增。

### 3.1.2 版本號變更說明

- 平台版本
    
    由主版本號.次版本號.迭代版本號組成。
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/977447a0-9821-4660-b46b-6e8bd1fb8975/2465cea4-b4b4-4093-ac8f-72564728f0b1/Untitled.png)
    
- 產品模組版本
    
    由主版本號.次版本號.迭代版本號-建構版本號。
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/977447a0-9821-4660-b46b-6e8bd1fb8975/c765da7b-7782-4089-a703-f6b0db954b0d/Untitled.png)
    
    產品模組版本分為自研與開源模組：
    
    - 自研模組：主版本號.次版本號需平台版本保持一致
        
        迭代版本號如在當次迭代版本無更新，則保持自研模組最新迭代版本號，自研模組迭代版本號不得超過平台的迭代版本號
        
        兩個相隔建構版本號有機會不連續，以實際建構次數遞增。
        
        例如：
        
        ```
        # FrameWork v1.0.0
        hub.hk.com/framework/components:v1.0.0-40
        hub.hk.com/framework/offline:v1.0.0-20
        hub.hk.com/framework/doc:v1.0.0-6
        ```
        
        若FrameWork v1.0.0 計畫功能迭代升級到v1.0.1，其中components無迭代計畫，則保持v1.0.0的版本：
        
        ```
        # FrameWork **v1.0.1**
        hub.hk.com/framework/components:**v1.0.0-40**
        hub.hk.com/framework/offline:v1.0.1-20
        hub.hk.com/framework/doc:v1.0.1-6
        ```
        
    - 開源模組：模組名稱和版本號保持和開源的一致即可。

## 3.2 Git 分支管理

在使用 Git 的過程中如果沒有清晰流程和規劃，每個人都提交一堆雜亂無章的 commit，項目很快就會變得難以協調和維護。Vincent Driessen 為了解決這個流程和規範問題提出了 A Successful Git Branching Model，以下是基於 Vincent Driessen 提出的 **Git Flow** 流程圖：

![修改main.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/977447a0-9821-4660-b46b-6e8bd1fb8975/4f2b39e2-7c89-4d6c-afed-0b2f81f61fa4/%E4%BF%AE%E6%94%B9main.png)

Git 常見分支：

1. 主分支 (Main Branches):
    - `main`: 通常用於生產環境，代表了專案的當前穩定版本。
    - `dev`: 開發分支，所有的新功能和修復都會先合併到這裡。
2. 功能分支 (Feature Branches):
    - 為每個新功能或改進建立一個新的分支。
    - 這些分支通常基於 `dev` 創建，一旦完成，將合併回 `dev`。
3. 發布分支 (Release Branches):
    - 當 `dev` 達到一個穩定點並且準備發布新版本時，基於 `de` 建立一個發布分支。
    - 在這個分支上可能會進行一些最後的修復工作或版本號更新等。
    - 完成後，該分支將合併到 `main` 和 `de`。
4. 修復分支 (Hotfix Branches):
    - 用於緊急修復生產環境中的問題。
    - 基於 `main` 創建，並且修復完成後將合併回 `main` 和 `dev`。

### 3.2.1 分支命名規範

- 主分支：**main**
- 主開發分支：**dev**
- 功能開發分支：**feature-***，其中*為功能簡述，如：feature-item-list-20231101
- 發布分支：**release-***，其中*為版本號，如：release-1.0.0
- 修復分支：**hotfix-***，其中*為bug簡述，如：hotfix-item-update-1.0.0
- tag名稱：依據**3.1版本規範定義**，如：v1.0.0

<aside>
💡 主分支選擇`main`的原因：
參考**Github**規範，從2020年10月1日開始，所有“master分支”一律改名為“main分支”。背景原因是為了推進和反映更包容性的語言。 這個決策是回應了技術社群中一部分人關於master/slave術語的討論，這些術語在一些技術環境中用來描述主/從關係。 這些字詞有可能喚起與奴隸制相關的不良情緒和回憶。 因此，為了使技術環境更加包容，GitHub 和其他一些組織和專案選擇使用更中性的術語。

</aside>

### 3.2.2 操作流程

- 新功能開發時，從 `dev` 分支建立一個新的 `feature` 分支，按規範命名；
- 功能開發完成後，將 `feature` 分支合併回 `dev` ；
- 當 `dev` 準備好進行新版本發佈時，建立一個 `release` 分支；
- 如果 `release` 分支中發現問題，修復後，再合併回 `main` 和 `dev`。
- 如果**生產環境**中出現緊急問題，從 `main` 建立一個 `hotfix` 分支，修復後，合併回  `main` 和 `dev` ；

確保所有團隊成員都了解並遵循這工作流程是很重要的，這可以確保程式碼的穩定性，簡化版本管理，以及使團隊成員之間的協作更加順暢。

常見操作規範：

1. 項目初始化

```bash
# 方式1: 先克隆遠端倉庫到本地
git clone https://xxx.git

cd xxx
git add .               
git commit -m '初始化项目' 
git push  	          

# 方式2: 本地項目關聯遠端倉庫位址
git remote add origin https://xxx.git
git push -u origin main 
```

1. 開發提交代碼流程

```bash
# 1. 第一次拉取
# 克隆倉庫到本地
git clone https://xxx.git
# 切換到開發分支
git checkout dev
# 新建功能的開發分支
git checkout -b feature-app-login
# add、commit、push、pull request

# 2. 後續開發
# 若有未完成的程式碼先暫存
git stash
# 切換到dev開發分支
git checkout dev
# 更新分支
git pull
# 切換回開發分支
git checkout feature-app-login
# 合併dev分支到開發分支
git merge dev
# 繼續開發 add、commit、push、pull request
```

<aside>
💡 commit 提交流程有工具輔助規範提交，請看下一節**3.3**。

</aside>

## 3.3 程式碼提交與約束

### 3.3.1 commit 規範化的重要性

在中大型項目和多人協作的環境中，提交資訊規範規範非常重要，以下是一些主要用途和好處：

- **提供清晰的歷史記錄**：規範化的提交資訊使得其他開發者更容易理解每次提交的目的和上下文。
- **便於程式碼審查**：當進行程式碼審查時，清晰和具體的提交資訊可以幫助審查者更好地理解程式碼的變更以及為什麼要進行這些變更。
- **自動產生更改日誌**：符合規範的提交資訊可以被工具識別和解析，這樣可以自動從提交資訊中產生更改日誌，例如使用 semantic-release 或 standard-version。
- **更易於追蹤和修復問題**：當在程式碼中發現問題或需要回滾變更時，有規範的提交資訊可以更快地找到並理解問題所在。
- **促進團隊協作**：有統一的提交資訊規範確保了整個團隊遵循相同的標準，這有助於團隊成員之間的溝通和協作。
- **便於篩選和尋找特定更改**：如果需要查找特定類型的變更（例如所有的 bug 修復或新功能），則規範的提交資訊可以使此過程變得更為簡單。

總而言之，對 `git commit message` 進行規範化不僅使得版本歷史更加清晰和有序，而且可以提高開發效率，促進團隊協作，並利用工具實現自動化的更改日誌生成和版本控制。 在大型項目中，這是維護項目的關鍵部分。

### 3.3.2 commit message 規範

commit message約定：基於 **`Angular 規範`** 改編。

- `<header>`：`<type>(<scope>): <summary>` 必填
- `<body>` 可選
- `<footer>` 可選

```bash
**Commit Message Header：**

<type>(<scope>): <summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|
  │                          devtools
  │
  └─⫸ Commit Type: feat|fix|docs|style|refactor|perf|test|chore
```

**type：commit 類型：**

- `feat`：新功能
- `fix`：修補bug
- `docs`：修改文檔
- `style`： 格式化程式碼結構（不影響程式碼運作的變動）
- `refactor`：重構（即不是新增功能，也不是修改bug的程式碼變動，例如重新命名變數）
- `perf`: 性能優化
- `test`: 增加或修改測試案例
- `chore`：建置過程或輔助工具的變動（不會影響程式碼運行）

**scope: 定義type影響的範圍，例業務模組、公共組等等，視項目不同而不同，以下可供參考。**

- core：核心模組
- compiler：編譯器相關
- http：請求相關
- component：組件相關
- upgrade：升級相關
- login：【業務】登錄模組
- user-profile：【業務】用戶模組

**summary**: **提交信息簡述。**

- commit 目的的簡短描述，不超過50個字元。 可以寫中文，注意commit首個是空格

例如：

```bash
feat(compiler): add 'comments' option

fix(release): need to depend on latest rxjs and zone.js
The version in our package.json gets copied to the one we publish, and users need the latest of these.

perf(core): improve the ngFor performance
BREAKING CHANGE: `trackBy` now takes a second argument when used in `NgFor`.
```

### 3.3.3 commit 提交流程

程式碼開發完成後，將程式碼提交到遠程倉庫需要做一定的規範限制提交，防止出現不同的程式碼風格入庫導致合併衝突。 提交流程中用到的輔助工具有：

- **husky**: 當你嘗試進行`git commit`，husky 會觸發預先配置的 Git 鉤子（如 `pre-commit`）。這是你開始整個提交過程的入口點;
- **lint-staged:** 如果你在 husky 的 `pre-commit` 鉤子中配置了 `lint-staged`，則它會在你執行 `git commit` 時運行;
- **commitizen:** 提供一個**互動式介面**幫助你建構規範化的提交信息，通常是使用命令`npm run commit`來執行代碼提交；
- **commitlint:** 一旦你有了提交資訊（無論是直接透過 `git commit` 還是透過 `commitizen` 獲得的），husky 可以觸發 `commit-msg` 鉤子。在 `commit-msg` 鉤子中，`commitlint` 會檢查提交資訊是否符合預設的規範。 如果提交資訊不符合預期，提交將中斷。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/977447a0-9821-4660-b46b-6e8bd1fb8975/3172fcfe-554b-42a5-a329-1d7d04fa6397/Untitled.jpeg)

大致**提交**流程為：

1. 執行`npm run commit` 運行`commitizen` 在互動式介面创建提交信息**（前提已配置好以上工具及腳本）**；
2. 觸發husky鉤子pre-commit：運行`lint-staged` ，執行 `eslint` 和 `prettier` 格式化代碼；
3. 觸發husky鉤子commit-msg：調用 `commitlint` 檢查你的提交信息，若是按規範創建的提交信息，則成功提交。

以上任何步驟出現問題都可能導致提交失敗，包括eslint代碼規範、prettier格式化規範、commit message信息規範。

### 3.3.4 安裝和配置相關工具

1. 安装git鉤子工具 husky 和 lint-staged

```bash
npm install husky lint-staged -D
```

1. 初始化 husky 並配置 **pre-commit** 鉤子

```bash
npx husky-init
```

初始化完成后会默认生成：

- package.json 生成一個script腳本： `"prepare": "husky install"`
- `.husky` 文件夹，包含 `pre-commit` 文件

修改 pre-commit 文件，添加lint-staged執行命令：

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

package.json 中添加 `lint-staged` 配置：

```bash
# 提交前先對代碼進行格式化個規則校驗
"lint-staged": {
    "*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}": [
      "eslint --fix",
      "prettier --write"
    ]
}
```

现在，每次你尝试提交代码时，husky 将触发 `lint-staged`，然后 `lint-staged` 将运行 `eslint` 来检查并尝试修复你暂存的文件。如果存在**不符合** ESLint 规则的代码，提交将被**中断**，从而确保所有提交的代码都符合规范。

1. 配置commitizen互動式介面提交工具

```bash
# 安裝工具
npm install commitizen cz-conventional-changelog -D
```

`cz-conventional-changelog` 是一個 `commitizen` 的適配器，用於按照**「Conventional Commits」**規範格式化 commit 資訊。當與 **commitizen** 一起使用時，它提供了一種方法，透過命令列介面引導開發者輸入符合**「Conventional Commits」**規範的 commit 資訊。在你的项目根目录的 **package.json** 中添加 **config** 部分:

```bash
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

使用 `npx cz` 提交，為了方便，可以在scripts中加一個腳本：`"commit": "npx cz"`，這樣就可以用 `npm run commit`來做提交操作。

1. 自定义commit規範

默認`cz-conventional-changelog` 提供了不少的type和其他配置，根據實際項目需求可以調整自訂type和scope等配置。

安裝自定義規範插件：

```bash
npm i commitlint-config-cz cz-customizable -D
```

在項目根目錄下創建配置文件`.cz-config.js` ：

```jsx
module.exports = {
  types: [
    { value: 'feat', name: 'feat:     增加新功能' },
    { value: 'fix', name: 'fix:      修復bug' },
    { value: 'docs', name: 'docs:     修改文檔' },
    { value: 'style', name: 'style:    格式化代碼結構' },
    { value: 'refactor', name: 'refactor: 代碼重構' },
    { value: 'perf', name: 'perf:     性能優化' },
    { value: 'test', name: 'test:     增删测试' },
    { value: 'chore', name: 'chore:    對構建過程或輔助工具和庫的更改' }
  ],
  scopes: [
    { name: 'components' },
    { name: 'utils' },
    { name: 'styles' },
    { name: 'i18n' },
    { name: 'router' },
    { name: 'store' },
    { name: 'test' },
    { name: 'user' },
    { name: 'search' }
  ],
  messages: {
    type: '选择更改类型:\n',
    scope: '选择一个 scope\n',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的issues列表. E.g.: #31, #34:\n',
    confirmCommit: '确认提交?'
  },
  allowCustomScopes: false
}
```

<aside>
💡 `scope` 定義可根據具體項目配置，以上僅供前端項目參考。

</aside>

修改package.json配置：

```jsx
// 修改前
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}

// 修改後
"config": {
  "cz-customizable": {
    "config": "./cz-config.js"
  }
}
```

在項目根目錄新建配置文件文件`.czrc` ：

```
{
  "path": "cz-customizable"
}
```

1. 配置commitlint提交規範校驗

如果沒有使用commitizen提交或者提交信息不符合規範就不允許提交，可以使用commitlint工具來做校驗：

```bash
npm install @commitlint/{config-conventional,cli} -D
```

在項目根目录创建 `commitlint.config.js` 文件，配置 `commitlint` ：

```jsx
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore']
    ],
    'scope-enum': [
      2,
      'always',
      ['components', 'utils', 'styles', 'i18n', 'router', 'store', 'test', 'user', 'search']
    ]
  }
}
```

使用husky生成commit-msg文件，提交前验证提交信息

```jsx
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

配置完成后，则提交信息必须符合 `commitlint` 规则才可以提交，否则会禁止提交。

# 4. 文檔相關

## 4.1  文檔介紹

項目中撰寫文檔是非常重要的，不論是小型還是大型的項目。良好的文檔能提供集中的知識庫，可以幫助新成員快速上手和理解項目。當團隊成員更替或離開時，他們的知識不會因此丟失團隊成員不需要經常問同事或者反复閱讀代碼來理解某個功能或模組。這有助於提高工作效率和減少不必要的交流時間。當出現問題或故障時，詳細的文檔可以幫助開發者快速定位和修復問題。

一個完整的項目需要有以下文檔：

- **項目概述**
    
    介紹項目目標和項目背景
    
- **入門和開發指南**
    
    介紹如何設置開發環境，代碼風格和格式化。Git工作流和提交規範，分支策略和代碼審查流程。
    
- **架構說明**
    
    項目的構成和各模組之間的交互方式和流程，整體目錄結構和重要文件說明。
    
- **API 文檔**
    
    如果項目提供API，則詳細描述其端點、參數、返回值等，並提供案例。
    
- **數據庫設計**
    
    數據模型和關係圖，重要表格和字段說明。
    
- **測試文檔**
    
    測試策略和方法，如何運行單元測試、集成測試等，測試覆蓋率目標。
    
- **部署指南**
    
    生產環境、測試環境、開發環境的設置和配置，自動化部署流程。
    
- **常見問題 (FAQ)**
    
    集中回答開發過程中常見的問題。
    

## 4.2 文檔格式

對於現代軟件項目，**`.md`** 格式（即 Markdown 格式）已成為文檔的主流選擇。Markdown 由於其簡潔、易於閱讀和寫作的特性，使開發者能高效輸出文檔。以下是使用 Markdown 作為文檔格式的幾個優點：

1. **易於閱讀和寫作**：Markdown 的語法簡單明了，即使在源代碼形式下也非常易於閱讀。
2. **跨平台**：幾乎所有的代碼托管平台（如 GitHub、GitLab）都支持 Markdown 格式的文檔渲染，使得 README、CONTRIBUTING 和其他文檔能直接在這些平台上被閱讀並漂亮地呈現。
3. **高度可定制**：雖然基本的 Markdown 語法相對固定，但很多平台和工具允許使用擴展的語法，如表格、腳註、代碼高亮等。
4. **轉換為其他格式**：有很多工具和應用程序可以將 Markdown 轉換為其他格式，如 HTML、PDF、Word 等。
5. **文本為基礎**：由於 Markdown 是基於文本的，所以它與版本控制工具（如 Git）完美結合，可以輕鬆地跟踪文檔的更改。

在大型項目中，建議在 **`docs`** 目錄或類似的位置存放所有的文檔，並使用 Markdown 格式。這樣可以確保團隊成員能夠輕鬆找到、閱讀和更新文檔，也可以使用既有的庫來搭建文檔站點。

## 4.3 API 交互文檔

API 交互文檔需要保證前後端有一致的目標，文檔主要有以下規範：

1. **清晰的結構**：文件應該有清晰的標題、子標題和列表，以便於閱讀和查找資訊。
2. **詳細的介面描述**：每個介面都應詳細描述其 URL、請求方法、請求和回應格式、可能的錯誤回應等。
3. **範例**：提供 JSON 或其他格式的範例，幫助理解如何使用介面。
4. **版本和變更記錄**：記錄 API 的版本和歷史變更，有助於了解介面的發展和變化。
5. **聯絡資訊**：提供聯絡方式，以便在有疑問時能夠及時溝通解決。
6. **一致性**：整個文件的格式、術語和風格應保持一致。

### 4.3.1 API按功能劃分

交互文檔按模塊劃分：

- **基礎**
    
    系統信息、更新版本、調試、監控、日誌、加密、性能、包管理等等。
    
- **界面**
    
    toast、loading、導航、背景、tabbar、字體、刷新、滾動、置頂等等。
    
- **網絡**
    
    請求、下載、上傳、websocket等
    
- **支付**
    
    微信支付、支付寶支付、銀行卡支付、第三方支付等
    
- **數據緩存**
- **媒體**
    
    地圖(定位)、圖片、視頻、音頻、錄音、相機、文件
    
- **開放接口**
    
    用戶登錄、授權、設置、生物認證
    
- **設備**
    
    藍牙、NFC、WI-FI、日曆、剪貼板、聯繫人、無障礙、屏幕、鍵盤、網絡、電話、羅盤、方向、陀螺儀、掃碼、短信、震動
    

### 4.3.2 交互文檔模板

 

[APP 交互文檔模板說明](https://www.notion.so/APP-0d25544f72a049bea28ecd8cfdbdf90e?pvs=21)

編寫 API 文件是一項重要且精細的工作，良好的文件能顯著提高開發效率和協作品質。

# 5. 測試規範

vitest 單元測

# 6. 部署規範

流水線部署流程

‍

‍