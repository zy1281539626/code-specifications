# GitFlow 工作流程規範

當在多人協作的團隊中或涉及多環境部署（如開發、測試、生產環境）的專案時， GitFlow 提供了一個固定的、預測性強的分支管理和發布流程，有助於簡化版本管理和部署流程。

# 1. Git 版本管理

本版本定義規範適用於框架項目及相關模塊，包括離線包平台、組件庫、文檔站等。

## 1.1 版本號定義說明

產品的版本號定義由3位數字組成，即v主版本號.次版本號.迭代版本號-構建版本號，初始版本號為v1.0.0-1；每位版本號相互獨立，互不影響， 如目前產品版本號為v1.0.0，當產品發生重大功能新增時，即版本號變為v2.0.0。

- 主版本號：定義為重大架構變更或重大功能新增時使用，從1開始遞增；
- 次版本號：定義為架構調整或重大功能調整時使用，從0開始遞增；
- 迭代版本號：定義為版本迭代時使用，從0開始遞增；
- 建構版本號：定義為模組的架構版本，從1開始遞增**`（内部開發、測試使用，不公佈）`**。

## 1.2 版本號變更說明

- 平台版本
    
    由主版本號.次版本號.迭代版本號組成。
    
    ![Untitled](/Untitled.png)
    
- 產品模組版本
    
    由主版本號.次版本號.迭代版本號-建構版本號。
    
    ![Untitled](/Untitled_1.png)
    
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

# 2. Git 分支管理

在使用 Git 的過程中如果沒有清晰流程和規劃，每個人都提交一堆雜亂無章的 commit，項目很快就會變得難以協調和維護。Vincent Driessen 為了解決這個流程和規範問題提出了 A Successful Git Branching Model，以下是基於 Vincent Driessen 提出的 **Git Flow** 流程圖：

![Untitled](/Untitled_2.png)

Git 常見分支：

1. 主分支 (Main Branches):
    - `main`: 通常用於生產環境，代表了專案的當前穩定版本。
    - `dev`: 開發分支，所有的新功能和修復都會先合併到這裡。
2. 功能分支 (Feature Branches):
    - 為每個新功能或改進建立一個新的分支。
    - 這些分支通常基於 `dev` 創建，一旦完成，將合併回 `dev`。
    - **若同一個功能由多人協作開發，可基於 `feature` 再自建分支**。
    - **儅該功能`正式發佈上綫`后，可由Git管理員刪除開發分支。**
3. 發布分支 (Release Branches):
    - 當 `dev` 達到一個穩定點並且準備發布新版本時，基於 `dev` 建立一個發布分支。
    - 在這個分支上可能會進行一些最後的修復工作或版本號更新等。
    - 完成後，該分支將合併到 `main` 和 `dev`。
4. 修復分支 (Hotfix Branches):
    - 用於緊急修復生產環境中的問題。
    - 基於 `main` 創建，並且修復完成後將合併回 `main` 和 `dev`。

## 2.1 分支命名規範

- 主分支：**main**
- 主開發分支：**dev**
- 功能開發分支：**feature-***，其中*為功能簡述加**`發佈日期`**，如：feature-item-list-20231101
- 發布分支：**release-***，其中*為版本號，如：release-1.0.0
- 修復分支：**hotfix-***，其中*為bug簡述，如：hotfix-item-update-bug
- tag名稱：依據**3.1版本規範定義**，如：v1.0.0

<aside>
💡 主分支選擇`main`的原因：
參考**Github**規範，從2020年10月1日開始，所有“master分支”一律改名為“main分支”。背景原因是為了推進和反映更包容性的語言。 這個決策是回應了技術社群中一部分人關於master/slave術語的討論，這些術語在一些技術環境中用來描述主/從關係。 這些字詞有可能喚起與奴隸制相關的不良情緒和回憶。 因此，為了使技術環境更加包容，GitHub 和其他一些組織和專案選擇使用更中性的術語。

</aside>

### 後續計劃

待 `Jira` 創建后，根據需求編號和bug編號定義分支，並與之關聯。

## 2.2 操作流程

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

# 3. 程式碼提交與約束

## 3.1 commit 規範化的重要性

在中大型項目和多人協作的環境中，提交資訊規範規範非常重要，以下是一些主要用途和好處：

- **提供清晰的歷史記錄**：規範化的提交資訊使得其他開發者更容易理解每次提交的目的和上下文。
- **便於程式碼審查**：當進行程式碼審查時，清晰和具體的提交資訊可以幫助審查者更好地理解程式碼的變更以及為什麼要進行這些變更。
- **自動產生更改日誌**：符合規範的提交資訊可以被工具識別和解析，這樣可以自動從提交資訊中產生更改日誌，例如使用 semantic-release 或 standard-version。
- **更易於追蹤和修復問題**：當在程式碼中發現問題或需要回滾變更時，有規範的提交資訊可以更快地找到並理解問題所在。
- **促進團隊協作**：有統一的提交資訊規範確保了整個團隊遵循相同的標準，這有助於團隊成員之間的溝通和協作。
- **便於篩選和尋找特定更改**：如果需要查找特定類型的變更（例如所有的 bug 修復或新功能），則規範的提交資訊可以使此過程變得更為簡單。

總而言之，對 `git commit message` 進行規範化不僅使得版本歷史更加清晰和有序，而且可以提高開發效率，促進團隊協作，並利用工具實現自動化的更改日誌生成和版本控制。 在大型項目中，這是維護項目的關鍵部分。

## 3.2 commit message 規範

commit message約定：基於 **`Angular 規範`** 改編。

- `<header>`：`<type>(<scope>): <summary>` 必填，**`scope 可選`**
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

- commit 目的的簡短描述。 可以寫中文，注意commit首個是空格

例如：

```bash
feat(compiler): add 'comments' option

fix(release): need to depend on latest rxjs and zone.js
The version in our package.json gets copied to the one we publish, and users need the latest of these.

perf(core): improve the ngFor performance
BREAKING CHANGE: `trackBy` now takes a second argument when used in `NgFor`.
```

<aside>
💡 爲了更直觀和規範`scope`，後續只需將`Jira` 有需求編號或bug編號的填寫進`scope`，其他情況可不填 `scope`.

</aside>

## 3.3 commit 提交流程

程式碼開發完成後，將程式碼提交到遠程倉庫需要做一定的規範限制提交，防止出現不同的程式碼風格入庫導致合併衝突。 提交流程中用到的輔助工具有：

- **husky**: 當你嘗試進行`git commit`，husky 會觸發預先配置的 Git 鉤子（如 `pre-commit`）。這是你開始整個提交過程的入口點;
- **lint-staged:** 如果你在 husky 的 `pre-commit` 鉤子中配置了 `lint-staged`，則它會在你執行 `git commit` 時運行;
- **commitizen:** 提供一個**互動式介面**幫助你建構規範化的提交信息，通常是使用命令`npm run commit`來執行代碼提交；
- **commitlint:** 一旦你有了提交資訊（無論是直接透過 `git commit` 還是透過 `commitizen` 獲得的），husky 可以觸發 `commit-msg` 鉤子。在 `commit-msg` 鉤子中，`commitlint` 會檢查提交資訊是否符合預設的規範。 如果提交資訊不符合預期，提交將中斷。

![Untitled](/Untitled.jpeg)

大致**提交**流程為：

1. 執行`npm run commit` 運行`commitizen` 在互動式介面创建提交信息**（前提已配置好以上工具及腳本）**；
2. 觸發husky鉤子pre-commit：運行`lint-staged` ，執行 `eslint` 和 `prettier` 格式化代碼；
3. 觸發husky鉤子commit-msg：調用 `commitlint` 檢查你的提交信息，若是按規範創建的提交信息，則成功提交。

以上任何步驟出現問題都可能導致提交失敗，包括eslint代碼規範、prettier格式化規範、commit message信息規範。

## 3.4 安裝和配置相關工具

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

使用 `npx cz` 提交，為了方便，可以在scripts中加一個腳本：`"commit": "npx cz”`，這樣就可以用 `npm run commit`來做提交操作。

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