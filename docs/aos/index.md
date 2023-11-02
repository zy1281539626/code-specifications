# Android 項目規範

規約依次分為**強制、推薦、參考**三大類

- 【強制】必須遵守，違反本約定或將會引起嚴重的後果；
- 【推薦】儘量遵守，長期遵守有助於系統穩定性和合作效率的提升；
- 【參考】充分理解，技術意識的引導，是個人學習、團隊溝通、項目合作的方向。

# 1. Java語言規範

## 1.1 命名風格

（1）禁止拼音：【強制】代碼的命名嚴禁出現拼音，更不允許直接用中文的方式。

（2）類名：【強制】使用UpperCamelCase風格，但以下情況例外：DO / BO / DTO / UID等等。

```
正例:MarcoPolo / UserDO / XmlService / TcpUdpDeal / TaPromotion
反例:macroPolo / UserDo / XMLService / TCPUDPDeal / TAPromotion
```

（3）抽象類：【強制】命名使用**Abstract** 或 **Base**開頭

```
正例: BaseActivity，AbstractFactory
反例: OriginActivity,OriginFactory
```

（4）接口：

【強制】使用UpperCamelCase風格，但必須冠以**前綴 I** 。

【推荐】實現類則去掉前缀I，添加后缀Impl。

```
正例:IPayInterface，BankPayImpl
反例:PayInterface，BankPay
```

（5）方法名、參數名、成員變量、局部變量：

 【強制】都統一使用lowerCamelCase風格，必須遵守**駝峰**形式。

```
正例: localValue / getHttpMessage() / inputUserId
```

（6）常量：【強制】命名全部大寫，單詞間全部以下劃線分開，力求語義完整

```
正例: MAX_STOCK_COUNT
反例:MAX_COUNT，MAXCOUNT
```

（7）POJO類中布爾類型：【推荐】POJO類中布爾類型的變量，都不要加is前缀

```
反例:
定義為基本數據類型Boolean isDeleted的屬性，它的方法也是isDeleted()，RPC框架在反向解析的時候，“誤以為”對應的屬性名稱是 deleted，導致屬性獲取不到，進而拋出異常。
```

（8）異常類命名使用Exception結尾；測試類命名以它要測試的類的名稱開始，以Test結尾。

```
正例: OutOfMemoryException，PhonePayTest
反例: OutOfMemoryErr，TestPhonePay
```

（9）包名：【強制】**統一使用小寫**,點分隔符號之間有且只有一個自然語義的英語單詞。包名統一使用單數形式，但是類名如果有複數含義，類名可以使用複數形式。

```java
com.hybrid.example.util
```

（10）縮寫：【推薦】杜絕完全不規範的縮寫，避免望文不知義。

```java
ABstractClass -> AbsClass
```

（11）含義：【強制】杜絕不知含義的方法名、參數、常量、變量等等

```java
int a()；
int a;
final int COUNT = 5;
```

（12）設計模式：【推薦】如果模塊、接口、類、方法使用了設計模式，在命名需體現出具體模式，方便讀者可快速理解架構設計理念。

```java
public class OrderFactory
public class ContextProxy
public class ActivityObserver
```

（13）枚舉：【參考】枚舉類名建議帶上Enum后缀，枚舉成員名稱需要全大寫，單詞間用下劃線分開。

```java
public enum ProcessStatusEnum {
    SUCCESS,
    UNKNOWN_REASON
}
```

（14）【推薦】各層命名規約：

Service/DAO:

| 功能 | 方法名 |
| --- | --- |
| 獲取一個對象 | getXXX() |
| 獲取多個對象 | listXXX() |
| 獲取統計值 | countXXX() |
| 插入的方法 | insert/saveXXX() |
| 刪除的方法 | remove/delete() |
| 修改的方法 | updateXXX() |

領域模型層:

| 類型 | 解釋 |
| --- | --- |
| 數據对象 | xxxDO，xxx即為數據表名 |
| 數據传输对象 | xxxDTO，xxx為業務領域相關的名稱 |
| 業務对象 | xxxBO,xxx為相關業務的名稱 |
| POJO | POJO是DO/DTO/BO/VO的統稱，禁止命名成xxxPOJO |

## 1.2 常量定義

（1）魔法值：【強制】不允許任何魔法值（即未經預先定義的常量）直接出現在代碼。

```java
反例：String cacheKey = "cache" + targetId ；
```

（2）Long：【強制】在long或者Long賦值時，數值後使用大寫的L,不能是大寫的l，這樣容易跟數字1混淆，造成誤解

```java
正例：long threshold = 2000L；
反例：long threshold = 2000l；
```

（3）功能歸類：【推薦】不要使用**一個常量類維護所有常量**，要按常量類型進行歸類，分開維護。

```
反例：所有的常量都放在Constants類中管理。
```

（4）final：【強制】常量一定要使用final定義。

```java
//常量定义
public final long MAX_STOCK_COUNT = 1000L；
//方法中,匿名内部类方法用到的
public final long threshold = 2000L；
```

## 1.3 代碼格式

（1）大括弧的使用約定：【強制】如果是大括弧內為空，則簡潔地寫成{}即可，不需要換行。如果是非空代碼的話，則：

```
左大括弧前不換行。
左大括弧後換行。
右大括弧前行號。
右大括弧後還有else等代碼則不換行：表示終止的右大括弧後必須換行。
```

（2）小括弧的使用約定：【強制】左小擴號和字符之間不出現空格；同樣，右小括弧和字符之間也不出現空格；而左大括弧前需要空格。

（3）語句的使用約定：【強制】if/for/while/switch/do 等保留字與括弧之間都必須加空格。

（4）二目、三目運算符：【強制】任何二目、三目運算符的左右兩邊都需要加一個空格。

（5）縮進：【強制】**採用4個空格縮進，禁止使用tab字符**。 說明：如果使用tab縮進，必須設置1個tab為4個空格。

示例代碼1-5點：

```java
public static void main(String[] args) {
// 縮進 4 個空格
String say = "hello";
// 運算符的左右必須有一個空格
int flag = 0;
// 關鍵字 if 與括弧之間必須有一個空格，括弧內的 f 與左括弧，0 與右括弧不需要空格 if (flag == 0) {
             System.out.println(say);
          }
// 左大括弧前加空格且不換行;左大括弧後換行 if (flag == 1) {
             System.out.println("world");
// 右大括弧前換行，右大括弧後有 else，不用換行 } else {
             System.out.println("ok");
// 在右大括弧後直接結束，則必須換行
} 
}
```

（6）注釋：【推薦】注釋的雙斜線與注釋內容之間有且僅有一個空格。

```java
// 這是示例注釋，請注意在雙斜線之後有一個空格
String ygb = new String();
```

（7）方法參數：【強制】方法參數在定義和傳入時，多個參數逗號後邊必須加空格。

```java
正例:下例中實參的 args1，後邊必須要有一個空格。
method(args1, args2, args3);
```

（8）方法行數：【推薦】單個方法的總行數不超過80行。

（9）可讀性：【推薦】不同邏輯、不同語義、不同業務的代碼之間插入一個空行分隔開來以提升可讀性。

## 1.4 OOP規約

（1）靜態訪問：【強制】避免通過一個類的對象引用訪問此類的靜態變量或靜態方法，無謂增加編譯器解析成本，直接用類名來訪問即可

（2）@Override注解：【強制】所有覆寫方法，必須加@Override注解。

（3）@Deprecated注解：

【強制】接口/類/方法過時必須加@Deprecated注解，並清晰地說明新的接口/類/方法是什麼。 

【強制】不能使用@Deprecated注解 標識的 接口/類/方法。應該去查看新的接口/類/方法是什麼，並且使用。

（4）equals方法： 

【強制】Object的equals方法容易拋空指針異常，應該使用常量/確定有值的對象來調用equals方法。

```java
正例:"test".equals(object);
反例:object.equals("test");
```

【強制】所有相同類型的包裝類對象之間，值的比較，全部使用equals方法。

（5）serialVersionUID字段： 【強制】序列化類新增屬性時，請不要修改 serialVersionUID 字段，避免反序列失敗;如果完全不相容升級，避免反序列化混亂，那麼請修改serialVersionUID 值。

（6）構造方法：【推薦】構造方法裡面禁止加入任何業務邏輯，如果有初始化邏輯，請放在 init 方法中。

（7）POJO類： 

【推薦】POJO類必須寫toString方法。

【強制】定義POJO類時，不要設定任何屬性默認值 

【強制】禁止在POJO類中，同時存在對應屬性xxx的 isXxx()和getXxx()方法

（8）重載方法排序：【推薦】當一個類有多個構造方法/多個同名方法，這些方法應該按照順序放置在一起，便於閱讀。此規則優先於(9) 規則。

（9）類中方法排序：【推薦】類內方法定義的順序依次是：公有方法/保護方法 > 私有方法 > getter/setter方法。

```
說明:公有方法是類的調用者和維護者最關心的方法，首屏展示最好;保護方法雖然只是子類關心，也可能是“範本設計模式”下的核心方法;而私有方法外部一般不需要特別關心，是一個 黑盒實現;因為承載的信息價值較低，所有 Service 和 DAO 的 getter/setter 方法放在類體最後。
```

（10）setter方法：【推薦】setter 方法中，參數名稱與類成員變量名稱一致，this.成員名 = 參數名。在getter/setter 方法中，不要增加業務邏輯，增加排查問題的難度。

```java
反例:
 public Integer getData() {
        if (condition) {
            return this.data + 100;
        } else {
            return this.data - 100;
        }
    }
```

（11）字符串連接方式：【推薦】循環體內，字符串的連接方式，使用StringBuilder的append方法。

```java
反例:
  String str = "start";
        for (int i = 0; i < 100; i++) {
            str = str + "hello";
        }
```

（12）clone方法： 

【推薦】慎用Object的clone方法拷貝對象。

 說明:對象的 clone 方法默認是淺拷貝，若想實現深拷貝需要重寫 clone 方法實現域對象的 深度遍曆式拷貝。

（13）類成員與方法訪問：【推薦】類成員與方法訪問 控制從嚴。

```java
1) 如果不允許外部直接通過new來創建對象，那麼構造方法必須是private。
2) 工具類不允許有public或default構造方法。
3) 類非static成員變量並且與子類共用，必須是protected。
4) 類非static成員變量並且僅在本類使用，必須是private。
5) 類static成員變量如果僅在本類使用，必須是private。
6) 若是static成員變量，考慮是否為final。
7) 類成員方法只供類內部調用，必須是private。
8) 類成員方法只對繼承類公開，那麼限制為protected。
說明:任何類、方法、參數、變量，嚴控訪問範圍。過於寬泛的訪問範圍，不利於模塊解耦。
```

## 1.5 併發處理

（1）線程：【強制】線程資源必須通過線程池提供，不允許自行創建線程。

（2）線程池：

【強制】項目中，必須有統一管理線程池的類，統一調用。

```java
 HybridExecutor.getInstance().executeCpuTask(() -> {
            //anything
        });
```

【推薦】不允許使用Executors去創建，而是通過ThreadPoolExecutor的方式，這樣的處理方式更加明確線程池的運行規則。

（3）單例對象： 【強制】獲取單例對象需要保證線程安全，其中的方法也要保證線程安全。

```java
public static Singleton getInstance() {
        //第一次判空
        if (mInstance == null) {
             //進入同步區域
            synchronized (Singleton.class) {
                //第二次判空
                if (mInstance == null) {
                    mInstance = new Singleton();
                }
            }
        }
        return mInstance;
    }
```

（4）鎖使用：【推薦】高併發時，同步調用應該去考量鎖的性能損耗。能不用鎖就不用鎖，能鎖區塊，就不要鎖整個方法體。能用對象鎖，就不要用類鎖。例子:(3)

（5）volatile：【參考】volatile解決多線程内存不可見問題。

（6）HashMap：【參考】HashMap在容量不夠resize時由於高併發可能出現死鏈，導致CPU飆升。可以使用其他數據結構或加鎖來規避此風險。

## 1.6 控制語句

（1）switch：【強制】在一個 switch 塊內，每個 case 要麼通過 break/return 等來終止，要麼注釋說明程序將繼續執行到哪一個case 為止;在一個 switch 塊內，都必須包含一個 default 語句並且放在最後，即使空代碼。

（2）【強制】在 if/else/for/while/do 語句中必須使用大括弧。即使只有一行代碼，避免採用單行的編碼方式:if (condition) statements;

（3）分支：

【推薦】超過3層的if-else的邏輯判斷，建議使用設計模式去處理。 

【推薦】表達異常的分支，少用if-else方式，可以採用：

```java
    private void login() {
        if (hadLogin) {
            return;
        }
        //業務邏輯代碼
    }
```

（4）可讀性：【推薦】除常用方法(如 getXxx/isXxx)等外，不要在條件判斷中執行其他複雜的語句，將複雜邏輯判斷的結果賦值給一個有意義的布爾變量名，以提高可讀性。

```java
正例:
// 偽代碼如下
final boolean existed = (file.open(fileName, "w") != null) && (...) || (...); if (existed) {
... }
反例:
if ((file.open(fileName, "w") != null) && (...) || (...)) { ...
}
```

（5）【推薦】避免採用取反邏輯運算符。

```java
正例:使用 if (x < 628) 來表達 x 小於 628。
反例:使用 if (!(x >= 628)) 來表達 x 小於 628。
```

## 1.7 注釋規約

（1）【強制】類、類方法的注釋必須使用 Javadoc 規範，使用/**內容*/格式，不得使用// xxx方式。

```java
正例：
    /**
     * 暫停所有任務
     */
    public void pause() {}
反例：
    // 暫停所有任務
    public void pause() {}
```

（2）【強制】所有的抽象方法(包括接口中的方法)必須要用 Javadoc 注釋、除了返回值、參數、 異常說明外，還必須指出該方法做什麼事情，實現什麼功能。

```
說明:對子類的實現要求，或者調用注意事項，請一併說明。
```

（3）【推薦】所有的類都必須添加創建者和創建時間

```java
/**
* @author Ricky
* @date 2023/10/30
*/
```

（4）【強制】方法內部單行注釋，在被注釋語句上方另取一行，使用//注釋。方法內部多行注釋使用/* */注釋，注意與代碼對齊。

（5）【強制】所有枚舉類型字段必須要有注釋，說明每個數據項的用途。

（6）【強制】注釋同步更新：代碼修改的同時，注釋也要進行相應的修改，尤其是參數、返回值、異常、核心邏輯 等的修改。

（7）【參考】注釋的要求：

```
1) **能夠準確反應設計思想和代碼邏輯**;
2) 能夠描述業務含義，使別的程式員能夠迅速瞭解到代碼**背後的含義**。
即使隔很長時間，也能清晰理解當時的思路;注釋也是給繼任者看的，使其能夠快速接替自己的工作。
3）注釋的語言根據實際情況統一標準：要求用中文就統一使用中文，要求用英文就統一使用英文。
```

（8）代辦事宜（TODO）【參考】包括信息：標記人，標記時間，預計處理時間、具體處理事件。

（9）錯誤事宜（FIXME）【參考】包括信息：標記人，標記時間，預計處理時間、具體處理事件。

## 1.8 異常日誌

（1）預檢查：【強制】Java 類庫中定義的可以通過預檢查方式規避的 RuntimeException 異常不應該通過catch 的方式來處理，比如:NullPointerException，IndexOutOfBoundsException 等等。

```java
正例:if (obj != null) {...}
反例:try { obj.method(); } catch (NullPointerException e) {...}
```

（2）穩定/不穩定代碼： 【強制】catch 時請分清穩定代碼和非穩定代碼，穩定代碼指的是無論如何不會出錯的代碼。 對於非穩定代碼的catch 盡可能進行區分異常類型，再做對應的異常處理。

（3）捕獲必須處理： 【強制】捕獲異常是為了處理它，不要捕獲了卻什麼都不處理而拋棄之，如果不想處理它，請 將該異常拋給它的調用者。最外層的業務使用者，必須處理異常，將其轉化為用戶可以理解的 內容。

（4）finally： 

【強制】finally 塊必須對資源對象、流對象進行關閉，有異常也要做 try-catch。說明:如果 JDK7 及以上，可以使用 try-with-resources 方式。

 【強制】不要在finally塊中使用return

（5）異常拋出問題： 【強制】定義時區分unchecked/checked 異常，避免直接拋出newRuntimeException()， 更不允許拋出Exception 或者 Throwable，應使用有業務含義的自定義異常。推薦業界已定義過的自定義異常，如:DAOException / ServiceException等。

## 1.9 日誌規約

（1）日誌框架：

【強制】不可以直接使用系統的日誌，要做一層封裝，有利於維護和修改。 

【強制】謹慎記錄日誌

```java
1.生產環境禁止輸出debug日誌。
2.謹慎使用日誌的級別。
3.儘量使用英文描述
```

# 2. Android基本組件

## 2.1 基本組件

```java
Application
Activity
Service
BrocastReceiver
ContentProvider
Fragment
......
```

## 2.2 Application

【強制】 onAttach()，onCreate()方法不要做耗時操作。 

【強制】 Application內部不要存儲全局數據。 

【推薦】 存在多進程的時候，需要判斷進程，然後進行初始化操作，避免多次調用。 

【推薦】 長生命週期類，如果必須持有Context,建議持有Application。

## 2.3 Activity

【強制】 所有的Activity 都必須 繼承自基類Activity，便於統一實現和管理。

【強制】 Activity間的數據通信，對於數據量教大的，避免使用intent+Parcelable的方式，可以考慮EventBus等替代方案，以免造成TransactionTooLargeException。

【強制】 Activity 間通過隱式 Intent 的跳轉，在發出 Intent 之前必須通過 resolveActivity檢查，避免找不到合適的調用組件，造成 ActivityNotFoundException 的異常。

```java
正例：
  public void viewUrl(String url, String mimeType) {
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setDataAndType(Uri.parse(url), mimeType);
        if (getPackageManager().resolveActivity(intent, PackageManager.MATCH_DEFAULT_ ONLY) != null) {
            try {
                startActivity(intent);
            } catch (ActivityNotFoundException e) {
                if (Config.LOGD) {
                    Log.d(LOGTAG, "activity not found for " + mimeType + " over " + Uri.parse(url).getScheme(), e);
                }
            }
        }
    }

反例：
Intent intent = new Intent();
intent.setAction("com.great.activity_intent.Intent_Demo1_Result3");
```

【強制】 内存洩漏問題：Activity中動態註冊 BroadCastReceiver 時，registerReceiver()和 unregisterReceiver()要成對出現。

【推薦】 不要在Activity#onDestory()內執行釋放資源的工作，例如一些工作線程的銷毀和停止，因為onDestory()執行的時機可能較晚。可根據實際需要，在Activity#onPause/onStop()中結合isFinishing()的判斷去執行。

【推薦】 當前 Activity 的 onPause 方法執行結束後才會執行下一個 Activity 的 onCreate方法，所以在 onPause方法中不適合做耗時較長的工作，這會影響到頁面之間的跳轉效率。

## 2.4 Service

【強制】避免在 Service#onStartCommand()/onBind()方法中執行耗時操作，如果確實有需求，應改用IntentService 或採用其他非同步機制完成。

【推薦】總是使用顯式Intent啟動或者綁定Service，且不要為服務聲明IntentFilter， 保證應用的安全性。

## 2.5 BroadcastReceiver

【強制】避免在 BroadcastReceiver#onReceive()中執行耗時操作，如果有耗時工作， 應該創建IntentService 完成，而不應該在 BroadcastReceiver 內創建子線程去做。

【推薦】避免使用隱式 Intent 廣播敏感信息，信息可能被其他註冊了對應BroadcastReceiver 的 App 接收。

```java
說明：如果廣播僅限於應用內，則可以使用 LocalBroadcastManager的sendBroadcast()實現，避免敏感信息外泄和 Intent 攔截的風險。

Intent intent = new Intent("my-sensitive-event"); 
intent.putExtra("event", "this is a test event"); 
LocalBroadcastManager.getInstance(this).sendBroadcast(intent);
```

## 2.6 ContentProvider

【強制】不要在onCreate()方法做耗時操作，會影響應用的啟動。 

【推薦】儘量不去創建ContentProvider,會影響應用的啟動。

## 2.7 Fragment

【推薦】添 加 Fragment 時 ， 確 保 FragmentTransaction#commit() 在Activity#onPostResume()或者 FragmentActivity#onResumeFragments()內調用，也可在onCreate()裏執行。 不要隨意使用FragmentTransaction#commitAllowingStateLoss()來代替，任何commitAllowingStateLoss()的使用必須經過 code review，確保無負面影響。

```java
Activity 可能因為各種原因被銷毀，Android 支持頁面被銷毀前通過
Activity的onSaveInstanceState() 保 存 自 己 的 狀 態 。
但 如 果 FragmentTransaction.commit()發生在 Activity 狀態保存之後，就會導致 Activity 重建、恢復狀態時無法還原頁面狀態，從而可能出錯。
為了避免給用戶造成不好的體 驗，系統會拋出 IllegalStateExceptionStateLoss 異常。
推薦的做法是在 Activity 的onPostResume() 或 onResumeFragments() ( 對 FragmentActivity ) 裏 執 行 FragmentTransaction.commit()，如有必要也可在 onCreate()裏執行。
不要隨意改用FragmentTransaction.commitAllowingStateLoss()或者直接使用 try-catch 避免crash，這不是問題的根本解決之道，當且僅當你確認 Activity 重建、恢復狀態時，本次commit 丟失不會造成影響時才可這麼做。
```

【推薦】如非必須，避免使用嵌套的 Fragment。

```
1) onActivityResult()方法的處理錯亂，內嵌的 Fragment 可能收不到該方法的回調， 需要由宿主 Fragment 進行轉發處理;
2) 突變動畫效果;
3) 被繼承的 setRetainInstance()，導致在 Fragment 重建時多次觸發不必要的邏輯。
非必須的場景盡可能避免使用嵌套 Fragment，如需使用請注意上述問題。
```

【強制】内存洩漏問題：Fragment中動態註冊 BroadCastReceiver 時，registerReceiver()和 unregisterReceiver()要成對出現。

## 2.8 Toast

【推薦】定義一個**全局**的 Toast 對象，這樣可以避免連續顯示Toast 時不能取消上一次 Toast 消息的情況

# 3. Android文件命名與使用

## 3.1 類名

| 類 | 描述 | 舉例說明 |
| --- | --- | --- |
| Activity | Activity 作為後綴標識 | MainActivity |
| Fragment | Fragment 作為後綴標識 | HomeFragment |
| Service | Service作為後綴標識 | DownloadService |
| BroadcastReceiver | Receiver作為後綴標識 | MessageReceiver |
| ContentProvider | Provider 作為後綴標識 | PushProvider |
| Adapter | Adapter 作為後綴標識 | HotelListAdapter |
| 解析類 | Parser 作為後綴標識 | XmlParser |
| 工具方法類 | Utils/Manager作為後綴標識 | SpUtils/LoginManager |
| 數據庫 | DBHelper作為後綴標識 | MemberDbHelper |
| 抽象類 | Base/Abstract作為前綴 | BaseActivity |
| 接口 | I作為前綴 | IService |
| ViewModel | VM作為後綴標識 | HomeVM |

## 3.2 前缀

【推薦】資源文件需帶模塊前缀。

## 3.3 layout

【推薦】layout 文件的命名方式。

```java
Activity 的 layout 以 module_activity 開頭
Fragment 的 layout 以 module_fragment 開頭
Dialog 的 layout 以 module_dialog 開頭
Include 的 layout 以 module_include 開頭
ListView 的行 layout 以 module_list_item 開頭
RecyclerView 的 item layout 以 module_recycle_item 開頭
GridView 的行 layout 以 module_grid_item 開頭
```

## 3.4 drawable

【推薦】drawable 資源名稱以**小寫單詞+下劃線**的方式命名，根據解析度不同存放在不同的drawable 目錄下，建議只使用一套,例如 drawable-xhdpi。採用規則如下:

```java
//模塊名_業務功能描述_控件描述_控件狀態限定詞
module_login_btn_pressed
module_tabs_icon_home_normal
```

## 3.5 anim

【推薦】anim 資源名稱以**小寫單詞+下劃線**的方式命名，採用以下規則:

```
模塊名_邏輯名稱_[方向|序號]
```

【推薦】tween 動畫資源:盡可能以通用的動畫名稱命名

```
module_fade_in
module_fade_out
module_push_down_in
```

【推薦】frame 動畫資源:盡可能以模塊+功能命名+序號

```
module_loading_grey_001
```

## 3.6 color

【推薦】color 資源使用#AARRGGBB 格式，寫入 module_colors.xml 文件中，命名格式採用以下規則:

```java
//模塊名_邏輯名稱_顏色
<color name="module_btn_bg_color">#33b5e5e5</color>
```

## 3.7 dimen

【推薦】dimen 資源以小寫單詞+下劃線方式命名，寫入 module_dimens.xml 文件中， 採用以下規則:

```java
//模塊名_描述信息
<dimen name="module_horizontal_line_height">1dp</dimen>
```

## 3.8 style

【推薦】style 資源採用小寫單詞+下劃線方式命名，寫入 module_styles.xml 文件中， 採用以下規則:

```java
//父 style 名稱.當前 style 名稱
<style name="ParentTheme.ThisActivityTheme">
  ...
</style>
```

## 3.9 string

【推薦】string 資源文件或者文本用到的字符串需要全部寫入 module_strings.xml 文件中， 字符串以小寫單詞+下劃線的方式命名，採用以下規則:

```java
//模塊名_邏輯名稱
moudule_login_tips
module_homepage_notice_desc
```

## 3.10 id

【推薦】Id 資源原則上以駝峰法命名，View 組件的資源 id 需要以 View 的縮寫作為 前缀。常用縮寫表如下:

| 控件 | 縮寫 |
| --- | --- |
| LinearLayout | ll |
| RelativeLayout | rl |
| ConstraintLayout | cl |
| ListView | lv |
| ScrollView | sv |
| TextView | tv |
| Button | btn |
| ImageView | iv |
| CheckBox | cb |
| RadioButton | rb |
| EditText | et |
| RecyclerView | rv |

## 3.11 圖片

【強制】圖片命名規則：圖片類型_邏輯名稱_功能名稱{_顏色}{_大小}{_狀態}

圖片類型：

| 中文名 | 名稱 | 縮寫 |
| --- | --- | --- |
| 背景 | background | bg |
| 圖標 | icon | ic |
| 文字 | text | txt |

邏輯名稱：

| 中文名 | 名稱 | 縮寫 |
| --- | --- | --- |
| 按鈕 | Button | btn |
| 菜單 | Menu | menu |
| 標籤頁 | Tab | tab |
| 橫幅 | Banner | banner |
| 列表 | List | list |
| 列表子項 | Item | item |
| 佈局 | Layout | layout |
| 文本 | TextView | tv |
| 可編輯文本 | EditText | et |
| 進度條 | ProgressBar | pb |
| 拖動條 | SeekBar | sb |

功能類型：

| 中文名 | 名稱 | 縮寫 |
| --- | --- | --- |
| 返回 | back | back |
| 支付 | pay | pay |
| 點擊 | click | click |

【推薦】圖片建議統一放在 xxhdpi 目錄 下管理，否則將導致佔用內存成倍數增加

# 4. UI與佈局

## 4.1 UI線程

【強制】禁止在非 ui 線程進行 view 相關操作。

## 4.2 嵌套佈局

【強制】佈局中不得不使用 ViewGroup 多重嵌套時，不要使用 LinearLayout 嵌套， 改用 RelativeLayout，可以有效降低嵌套數。

【推薦】靈活使用佈局，推薦 Merge、ViewStub 來優化佈局，盡可能多的減少UI佈局層級，推薦使用 FrameLayout，LinearLayout、RelativeLayout 次之。

## 4.3 彈窗

【推薦】在 Activity 中顯示對話框或彈出浮層時，儘量使用 DialogFragment，而非Dialog/AlertDialog，這樣便於隨 Activity 生命週期管理對話框/彈出浮層的生命週期。

## 4.4 ScrollView

【強制】不能使用 ScrollView 包裹 ListView/GridView/ExpandableListView;因為這樣會把ListView 的所有 Item 都加載到內存中，要消耗巨大的内存和 cpu 去繪製圖面。

## 4.5 過度渲染

【推薦】避免背景多重疊加。父ViewGroup使用白色背景，子View也使用白色背景。

# 5. 進程、線程與消息通信

## 5.1 多進程

【推薦】謹慎使用 Android 的多進程，多進程雖然能夠降低主進程的内存壓力，但會遇到如下問題:

```java
1) 不能實現完全退出所有 Activity 的功能;
2)首次進入新啟動進程的頁面時會有延時的現象(有可能黑屏、白屏幾秒，是白屏還是黑屏和新Activity 的主題有關);
3)應用多進程時，Application實例化多次，需要考慮各個模塊是否都需要在所有進程中初始化。
4) 多進程間通過 SharedPreferences 共用數據時不穩定。
```

【強制】在 Application 的業務初始化代碼加入進程判斷，確保只在自己需要的進程初始化。特別是後台進程減少不必要的業務初始化。

```java
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        //在所有進程中初始化 ....
        //僅在主進程中初始化
        if (mainProcess) {
        }
        //僅在後臺進程中初始化
        if (bgProcess) {
        }
    }
}
```

【推薦】禁止在多進程之間用 SharedPreferences 共用數據，雖然可以(MODE_MULTI_PROCESS)，但官方已不推薦。

## 5.2 線程

【強制】子線程中不能更新界面，更新界面必須在主線程中進行。 

【強制】網絡操作不能在主線程中調用，應放到線程池處理。

## 5.3 其他

```java
1) 一、java語言規範 1.5 併發處理
```

# 6. 文件與數據庫

## 6.1 SharedPreference

【強制】SharedPreference 中只能存儲簡單數據類型(int、boolean、String 等)， 複雜數據類型建議使用文件、數據庫等其他方式存儲。

【推薦】SharedPreference 提交數據時，儘量使用 Editor#apply()，而非Editor#commit()。一般來講，僅當需要確定提交結果，並據此有後續操作時，才使用Editor#commit()。

## 6.2 文件

【強制】任何時候不要硬編碼文件路徑，請使用 Android 文件系統 API 訪問。

```java
android.os.Environment#getExternalStorageDirectory() 
android.os.Environment#getExternalStoragePublicDirectory() 
android.content.Context#getFilesDir() 
android.content.Context#getCacheDir()

正例：
public File getDir(String alName) {
File file = new File(Environment.getExternalStoragePublicDirectory(Environment. DIRECTORY_PICTURES), alName);
if (!file.mkdirs()) {
Log.e(LOG_TAG, "Directory not created");
}
return file;

}
```

## 6.3 數據庫

【強制】多線程操作寫入數據庫時，需要使用事務，以免出現同步問題。

```java
    public void insertUserData(SQLiteDatabase db, String userId, String content) {
        ContentValues cv = new ContentValues();
        cv.put("userId", userId);
        cv.put("content", content);
        db.beginTransaction();
        try {
            db.insert(TUserPhoto, null, cv); // 其他操作
            db.setTransactionSuccessful();
        } catch (Exception e) {
// TODO
        } finally {
            db.endTransaction();
        }
    }

```

【強制】數據庫 Cursor 必須確保使用完後關閉，以免內存洩漏。

【推薦】大數據寫入數據庫時，請使用事務或其他能夠提高 I/O 效率的機制，保證執行速度。

```java
  public void insertBulk(SQLiteDatabase db, ArrayList<UserInfo> users) {
        db.beginTransaction();
        try {
            for (int i = 0; i < users.size; i++) {
                ContentValues cv = new ContentValues();
                cv.put("userId", users[i].userId);
                cv.put("content", users[i].content);
                db.insert(TUserPhoto, null, cv);
            }
           // 其他操作 db.setTransactionSuccessful(); } catch (Exception e) {

            // TODO } finally {
            db.endTransaction();
        }catch (Exception e){

        }
    }
```

【強制】執行 SQL 語句時，應使用 SQLiteDatabase#insert()、update()、delete()， 不要使用SQLiteDatabase#execSQL()，以免 SQL 注入風險。

```java
   public int updateUserPhoto(SQLiteDatabase db, String userId, String content) {
        ContentValues cv = new ContentValues();
        cv.put("content", content);
        String[] args = {String.valueOf(userId)};
        return db.update(TUserPhoto, cv, "userId=?", args);
    }
```

# 7. 安全

## 7.1 Log

【強制】不要敏感信息打印到 log 中。

【強制】禁止使用System.out輸出日誌。

## 7.2 WebView

【強制】阻止 webView 通過 file:schema 方式訪問本地敏感數據。

【推薦】對於不需要使用 File 協議的應用，禁用 File 協議，顯式設置 webView. getSettings().setAllowFileAccess(false)，對於需要使用 File 協議的應用，禁止File協議調用 JavaScript，顯式設置 webView.getSettings().setJavaScriptEnabled(false)。

【推薦】Android WebView 組件加載網頁發生證書認證錯誤時,採用默認的處理方法 handler.cancel()，停止加載問題頁面。

 說明: Android WebView 組件加載網頁發生證書認證錯誤時，會調用 WebViewClient 類的onReceivedSslError 方法，如果該方法實現調用了 handler.proceed()來忽略該證書錯誤，則會受到中間人攻擊的威脅，可能導致隱私洩漏.

```java
mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
                handler.proceed(); // 忽略 SSL 證書錯誤 }
            });
        }
```

【推薦】zip 中不建議允許../../file 這樣的路徑，可能被篡改目錄結構，造成攻擊。 

說明:當zip 壓縮包中允許存在“../”的字串，攻擊者可以利用多個“../”在解壓時改變zip 文件存放的位置，當文件已經存在是就會進行覆蓋，如果覆蓋掉的文件是 so、dex 或者 odex 文件，就有可能造成嚴重的安全問題。

```java
 //對重要的 Zip 壓縮包文件進行數字簽名校驗，校驗通過才進行解壓 String
         entryName = entry.getName();
        if (entryName.contains("..")) {
            throw new Exception("unsecurity zipfile!");
        }
```

## 7.4 adb

【強制】將 android:allowbackup 屬性設置為 false，防止 adb backup 導出數據。

## 7.5 四大組件

【強制】Receiver/Provider 不能在毫無許可權控制的情況下，將 android:export 設置 為true。 

【強制】不要廣播**敏感**信息，只能在本應用使用 **LocalBroadcast**，避免被別的應用收到，或者 setPackage 做限制。

## 7.6 文件

【強制】將所需要動態加載的文件放置在 apk 內部，或應用私有目錄中，如果應用必須要把所加載的文件放置在可被其他應用讀寫的目錄中(比如 sdcard)，建議對不可信的加載源進行完整性校驗和白名單處理，以保證不被惡意代碼注入。

## 7.7 錄屏

【推薦】Android5.0 以後安全性要求較高的應用應該使用 window.setFlag (LayoutParam.FLAG_SECURE)禁止錄屏。

## 7.8 加密

【強制】密鑰加密存儲或者經過變形處理後用於加解密運算，切勿硬編碼到代碼中。

【推薦】加密算法:使用不安全的 Hash 算法(MD5/SHA-1)加密信息，存在被破解的風險，建議使用 SHA-256 等安全性更高的 Hash 算法。

## 7.9 本地存储

【強制】本地不能明文存儲敏感信息。

# 8. 其他

## 8.1 緩存

【強制】每個緩存池的大小應該在合理的範圍，不能過多佔用内存。

## 8.2 圖片

【推薦】Png圖片可以統一換成Webp的格式，可以有效減少圖片的大小。