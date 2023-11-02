# iOS 項目規範

隨著app端投入的開發者也也越來越多，不同的開發者的code風格千差萬別。加之公司開發者人員變動，為了保證app穩定性，保證開發效率，統一開發風格。梳理了一份比較全面、比較完整的iOS開發者規範，希望這些條條框框能夠給正在閱讀的你提供一些參考的價值。也希望越來越多的iOS開發者能夠養成優秀的編碼習慣。

# 約定

在我看來，開發規範像是一條可供參考的標准線。不同開發者可以根據這條標准線來規範自己的開發行為，尤其是在大的項目中，開發規範可以約束不同開發者的開發風格，使項目從細節到整體上都能達到風格統一，利於維護。
本文的開發規範由很多item組成，不同的item描述了不同的問題。每一個item就是一條具體的開發規範，違反不同的開發規範，也會引起不同嚴重程度的後果。就像法律和道德的差異一樣，我們必須遵守法律，不然可能帶來損人不利己的嚴重後果，但有些人雖然沒有觸犯法律，卻違背了道德，雖然暫時沒有產生嚴重的後果，長此以往，也會形成一種壞的風氣。所以，無論法律和道德，我們都該鞭策自己成為優秀的人，而不該止步於一個合格的人。同理，開發規範也是如此，我們必須遵守那些必須要遵守的開發規範，提倡遵守那些建議你遵守的開發規範。所以，根據約束力度，我們把開發規範暫時劃分成兩個等級，分別是【必須】、【建議】。

- 【必須】：必須遵守。是不得不遵守的約定，一旦違反極有可能引起嚴重後果
- 【建議】：建議遵守。長期遵守這樣的約定，有助於維護系統的穩定和提高合作效率。

## 1. 命名規範

- 通用命名規範(講述命名的一些通用規範)
- 縮寫規範(講述常見的縮寫以及縮寫規範)
- Method命名規範(講述方法命名的具體規範)
- Accessor命名規範(講述set和get方法的命名規範)
- Parameter命名規範(講述參數命名規範)
- Delegate方法命名規範(講述delegate方法的命名規範)
- Private方法命名規範(講述私有方法的命名規範)
- Category命名規範(講述分類的命名規範)
- Class命名規範(講述類命名規範)
- Protocol命名規範(講述協議的命名規範)
- Notification命名規範(講述通知的命名規範)
- Constant命名規範(講述枚舉常量以及const常量的命名規範)
- Exception命名規範(講述異常的命名規範)

## 2. 編碼規範

- Initialize方法(講述類的initialize方法的使用規範)
- Init方法(講述初始化方法的設計規範包括designated init方法和secondary init方法)
- Init error(講述init方法初始化對象失敗時的錯誤處理)
- Dealloc規範(講述dealloc方法的使用規範)
- Block規範(講述block的使用規範)
- Notification規範(講述通知的使用規範)
- UI規範(講述開發UI時的一些規範)
- IO規範(講述讀寫文件時的一些注意事項)
- Collection規範(講述集合類型的使用規範)
- 分支語句規範(講述常用的分支語句if、switch語句的編碼規範)
- 對象判等規範(講述常用的判定對象等同性的方法使用規範)
- 懶加載規範(講述懶加載的使用規範)
- 多線程規範(講述多線程環境下的一些編碼規範)
- 內存管理規範(講述編碼過程中常見的內存管理注意點)
- 延遲調用規範(講述使用延遲方法時注意事項)
- 注釋規範(講述編碼中注釋的使用規範)
- 類的設計規範(講述類的設計規範)
- 代碼組織規範(講述類中的代碼組織規範)
- 工程結構規範(講述工程的文件組織規範)

# 1. 命名規範

根据Cocoa编码规范里的描述，以前情况下，命名应该遵循以下基本原则：Clarity、Consistency、No Self Reference。即清晰性、一致性、不要自我指涉[Code Naming Basics](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingBasics.html)。

## ****1.1 通用命名規則****

一般情況下，通用命名規則適用於變量、常量、屬性、參數、方法、函數等。當然也有例外，下面我們會針對於每一種情況一一列舉。

【必須】自我描述性。屬性/函數/參數/變量/常量/宏 的命名必須具有自我描述性。杜絕中文拼音、過度縮寫、或者無意義的命名方式。

【必須】禁止自我指涉。屬性/局部變量/成員變量不要自我指涉。通知和掩碼常量(通常指那些可以進行按位運算的枚舉值) 除外。 通俗的講，自我指涉是指在變量末尾增加了自己類型的一個後綴。

| 命名 | 說明 |
| --- | --- |
| NSString | 規範的寫法 |
| NSStringObject | 自我指涉（不規範） |

掩碼常量、通知除外：

| 命名 | 說明 |
| --- | --- |
| NSUnderlineByWordMask | 規範的寫法 |
| NSTableViewColumnDidMoveNotification | 規範的寫法 |

【必須】駝峰命名方式。參數名、成員變量、局部變量、屬性名都要采用小寫字母開頭的駝峰命名方式。如果方法名以一個眾所周知的大寫縮略詞開始，可以不適用駝峰命名方式。比如FTP、WWW等。

【建議】一致性。屬性/函數/參數/變量/常量/宏 的命名應該具有上下文或者全局的一致性，相同類型或者具有相同作用的變量的命名方式應該相同或者類似。 說明：具體來講，不同文件中或者不同類中具有相同功能或相似功能的屬性的命名應該是相同的或者相似的。好處在於：方便後來的開發者減少代碼的閱讀量和提高對代碼的理解速度。比如：

```markdown
```objc
// count同時定義在NSDictionary、NSArray、NSSet這三個集合類中。且這三個集合類中的count屬性都代表同一個意思，即集合中對象的個數。
@property (readonly) NSUInteger count;
```

【必須】清晰性。屬性/函數/參數/變量/常量/宏 的命名應該保持清晰+簡潔，如果魚和熊掌不能兼得，那麼清晰更重要。

| 命名 | 說明 |
| --- | --- |
| insertObject:atIndex: | 規範的寫法 |
| insert:at: | 不清晰，插入什麼？at代表什麼？ |
| removeObjectAtIndex: | 規範的寫法 |
| removeObject: | 規範的寫法，因為參數指明了要移除一個對象 |
| remove: | 不清晰，移除什麼？ |

【建議】一般情況下，不要縮寫或省略單詞，建議拼寫出來，即使它有點長。當然，在保證可讀性的同時，for循環中遍曆出來的對象或者某些方法的參數可以縮寫。

| 命名 | 說明 |
| --- | --- |
| destinationSelection | 規範寫法 |
| destSel | 不清晰 |
| setBackgroundColor | 規範寫法 |
| setBkgdColor: | 不清晰 |

## 1.2 縮寫規範

通常，我們都不應該縮寫命名(參考[General Principles](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingBasics.html#//apple_ref/doc/uid/20001281-1001751))。然而，下面所列舉的都是一些眾所周知的縮寫，我們可以繼續使用這些古老的縮寫。在其他情況下，我們需要遵循下面兩條縮寫建議：

- 允許使用那些在C語言時代就已經在使用的縮寫，比如`alloc`和`getc`。
- 我們可以在命名參數的時候使用縮寫。其他情況，盡量不要使用縮寫。

我們也可以使用計算機行業通用的縮寫。包括但不限於HTML、URL、RTF、HTTP、TIFF、JPG、PNG、GIF、LZW、ROM、RGB、CMYK、MIDI、FTP。

## 1.3 Method命名規範

【必須】方法名也要采用小寫字母開頭的駝峰命名方式。如果方法名以一個中所周知的大寫縮略詞開頭（比如HTTP），該規則可以忽略。

【建議】一般情況下，不要在方法名稱中使用前綴，因為他存在於特定類的命名空間中。

【建議】類、協議、函數、常量、枚舉等全局可見內容需要添加三個字符作為前綴。蘋果保留對任意兩個字符作為前綴的使用權。所以盡量不要使用兩個字符作為前綴。禁止使用的前綴包括但不限於：NS,UI,CG,CF,CA,WK,MK,CI,NC。

【必須】禁止在方法前面加下劃線“ _ ”。Apple官網團隊經常在方法前面加下劃線"_"。為了避免方法覆蓋，導致不可預知的意外，禁止在方法前面加下劃線。

【必須】自我描述性。方法的命名也應該具有自我描述性。杜絕中文拼音、過度縮寫、或者無意義的命名方式。

【建議】一致性。方法的命名也應該具有上下文或者全局的一致性，相同類型或者具有相同作用的方法的命名方式應該相同或者類似。

```markdown
```objc
// 該方法同時定義在NSView、NSControl、NSCell這三個類裏面。
- (NSInteger)tag;
// 該屬性同時定義在NSDcitionary和NSArray中。
@property (readonly) NSUInteger count;
```

【必須】蘋果文檔說：如果一個方法代表某個名詞執行的動作，則該方法應該以一個動詞開頭。如下：

```markdown
```objc
- (void)invokeWithTarget:(id)target;
- (void)selectTabViewItem:(NSTabViewItem *)tabViewItem
```

【必須】蘋果文檔還說：如果方法代表對象接收的動作，那麼方法一動詞開頭。但不要使用“do”或者"does"作為方法名稱的一部分，因為這些助動詞不能為方法名稱增加太多的意義，反而讓方法看起來更加臃腫。同時，也請不要在動詞前面使用副詞或者形容詞。

【必須】如果方法返回接收者的某個屬性，那麼請直接以屬性名作為方法名。如果方法間接的返回一個或多個值，我們可以使用“getxxx”的方式來命名方法。相反，無需額外的在方法名前面添加"get"。

| 命名 | 說明 |
| --- | --- |
| - (NSSize)cellSize; | OK |
| - (NSSize)calcCellSize; | 不OK |
| - (NSSize)getCellSize; | 不OK |

【必須】只有當方法間接的返回對象或數值，才有必要在方法名稱中使用“get”，這種格式只適用於返回多個數據項的情況。如下：

```markdown
```objc
// 通過傳入指針，來獲得多個值
- (void)getLineDash:(float *)pattern count:(int*)count phase:(float *)phase;
// NSURLCache (NSURLSessionTaskAdditions)中聲明的方法
- (void)getCachedResponseForDataTask:(NSURLSessionDataTask *)dataTask completionHandler:(void (^) (NSCachedURLResponse * __nullable cachedResponse))completionHandler;
```

【必須】所有參數前面都應該添加關鍵字，除非你能保證每個人都能意會到你的精神。

| 命名 | 說明 |
| --- | --- |
| - (void)sendAction:(SEL)aSelector toObject:(id)anObject forAllCells:(BOOL)flag; | OK |
| - (void)sendAction:(SEL)aSelector :(id)anObject :(BOOL)flag; | 不OK |

【建議】蘋果文檔說：參數之前的單詞盡量能描述參數的意義。

| 命名 | 說明 |
| --- | --- |
| - (id)viewWithTag:(NSInteger)aTag; | OK |
| - (id)taggedView:(int)aTag; | 不OK |

【必须】如果当前子类创建的方法比从父类继承来的方法更加具体明确。本身提供的方法更具有针对性。则不该重写类本身提供的方法。而是应该单独的提供一个方法，并在新的方法后面添加上必要的关键参数。

| 命名 | 說明 |
| --- | --- |
| - (id)initWithFrame:(CGRect)frameRect; | NSView, UIView. |
| - (id)initWithFrame:(NSRect)frameRect mode:(int)aMode cellClass:(Class)factoryId numberOfRows:(int)rowsHigh numberOfColumns:(int)colsWide; | NSMatrix, a subclass of NSView |

```markdown
```objc
// UIView提供的方法
- (instancetype)initWithFrame:(CGRect)frame
// 更具针对性的方法
- (instancetype)initWithFrame:(CGRect)frame mode:(int)aMode cellClass:(Class)factory Id numberOfRows:(int)rows numberOfColumns:(int)cols;
```

【建議】請不要使用“and”連接接收者屬性。盡管and在下面的例子中讀起來還算順口，但隨著你創建的方法參數的增加，這將會帶來一系列的問題。

| 命名 | 說明 |
| --- | --- |
| - (int)runModalForDirectory:(NSString *)path file:(NSString *) name types:(NSArray *)fileTypes; | OK |
| - (int)runModalForDirectory:(NSString *)path andFile:(NSString *)name andTypes:(NSArray *)fileTypes; | 不OK |

【建議】如果方法描述了兩個獨立的動作，可以使用“and”連接起來。

| 命名 | 說明 |
| --- | --- |
| (BOOL)openFile:(NSString *)fullPath withApplication:(NSString *)appName andDeactivate:(BOOL)flag; | OK （NSWorkspace. ） |

## 1.4 ****Accessor命名规范****

Accessor Methods是指set、get方法。這些方法有一些推薦寫法格式：

【建議】如果屬性是名詞，推薦格式如下：

```markdown
```objc
- (type)noun;
- (void)setNoun:(type)aNoun;

例如：
- (NSString *)title;
- (void)setTitle:(NSString *)aTitle;
```

【建議】如果屬性表示一個形容詞，推薦格式如下：

```markdown
```objc
- (BOOL)isAdjective;
- (void)setAdjective:(BOOL)flag;

例如：
- (BOOL)isEditable;
- (void)setEditable:(BOOL)flag;
```

【建議】如果屬性是一個動詞，動詞使用一般現在時。推薦格式如下：

```markdown
```objc
- (BOOL)verbObject;
- (void)setVerbObject:(BOOL)flag;

例如：
- (BOOL)showsAlpha;
- (void)setShowsAlpha:(BOOL)flag;
```

【必須】不要把動詞的過去分詞形式當做形容詞來使用。

| 命名 | 說明 |
| --- | --- |
| - (void)setAcceptsGlyphInfo:(BOOL)flag; | OK |
| - (BOOL)acceptsGlyphInfo; | OK |
| - (void)setGlyphInfoAccepted:(BOOL)flag; | 不OK |
| - (BOOL)glyphInfoAccepted; | 不OK |

| 命名 | 說明 |
| --- | --- |
| - (void)setCanHide:(BOOL)flag; | OK |
| - (BOOL)canHide; | OK |
| - (void)setShouldCloseDocument:(BOOL)flag; | OK |
| - (BOOL)shouldCloseDocument; | OK |
| - (void)setDoesAcceptGlyphInfo:(BOOL)flag; | 不OK |
| - (BOOL)doesAcceptGlyphInfo; | 不OK |

【建議】可以使用情態動詞（can、should、will等）明確方法意義，但不要使用do、does這類無意義的情態動詞。

| 命名 | 說明 |
| --- | --- |
| - (void)setCanHide:(BOOL)flag; | OK |
| - (BOOL)canHide; | OK |
| - (void)setShouldCloseDocument:(BOOL)flag; | OK |
| - (BOOL)shouldCloseDocument; | OK |
| - (void)setDoesAcceptGlyphInfo:(BOOL)flag; | 不OK |
| - (BOOL)doesAcceptGlyphInfo; | 不OK |

【建議】只有方法間接的返回一個數值，或者需要多個數值需要被返回的時候，才有必要在方法名稱中使用“get”。 像這種接收多個參數的方法應該能夠傳入nil，因為調用者未必對每個參數都感興趣

```markdown
```objc
- (void)getLineDash:(float *)pattern count:(int *)count phase:(float *)phase;
```

## 1.5 Parameter命名規範

【必須】不要使用 ”pointer” 或 ”ptr” 命名參數，應該使用參數類型而非它的名字來代表他是否是一個指針。[Method Arguments](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingMethods.html)

## 1.6 Delegate方法命名規範

delegate methods 又叫做delegation methods，如果delegate對象實現了另一個對象的delegate方法，那麼這個對象就可以在它自己某個指定的事件發生時調用delegate對象的delegate方法。delegate方法的命名有一些與眾不同的格式：

【建議】以觸發消息的對象名開頭，省略類名前綴並且首字母小寫：

```markdown
```objc
- (BOOL)tableView:(NSTableView *)tableView shouldSelectRow:(int)row;
- (BOOL)application:(NSApplication *)sender openFile:(NSString *)filename;
```

【建議】除非delegate方法只有一個參數，即觸發delegate方法調用的delegating對象，否則冒號是緊跟在類名後面的。

```markdown
```objc
- (BOOL)applicationOpenUntitledFile:(NSApplication *)sender;
```

【建議】發送通知後再觸發delegate方法是一個例外：當delegate方法的調用是為了告訴delegate對象，某個通知已經被發送時，這個delegate方法的參數應該是通知對象，而非觸發delegate方法的對象。

```markdown
```objc
- (void)windowDidChangeScreen:(NSNotification *)notification;
```

【建議】使用did或will這兩個情態動詞通知delegate對象某件事已經發生或將要發生。

```markdown
```objc
- (void)browserDidScroll:(NSBrowser *)sender;
- (NSUndoManager *)windowWillReturnUndoManager:(NSWindow *)window;
```

【建議】雖然我們可以在delegate方法中使用did和will來詢問delegate是否可以代替另一個對象做某件事情，但是使用should看起來更加完美。

```markdown
```objc
- (BOOL)windowShouldClose:(id)sender;
```

## 1.7 Private方法命名規範

大部分情況下，私有方法的命名和公有方法的命名規則是一樣的。然而，通常情況下應該給私有方法添加一個前綴，目的是和公有方法區分開。盡管這樣，這種給私有方法加前綴的命名方式有可能引起一些奇怪的問題。問題就是：當你從`Cocoa framework`（即Cocoa系統庫）中的某個類派生出來一個子類時，你並不知道你的子類中定義的私有方法是否覆蓋了父類的私有方法，即有可能你自己在子類中實現的私有方法和父類中的某個私有方法同名。在運行時，這極有可能導致一些莫名其妙的問題，並且調試追蹤問題的難度也是相當大。

`Cocoa frameworks`（Cocoa系統庫）中的私有方法通常以一個下劃線“ _ ”開頭，用於標記這些方法是私有的(比如， _fooData ) 。不要問我為什麼他們這麼做，這大概就是Apple工程師的開發習慣。基於這個事實，提供以下兩條建議：

【必須】禁止使用下劃線“ _ “作為私有方法的開頭。Apple已經預留這種私有方法的命名習慣。

【建議】如果你是要子類化Cocoa Frameworks中的一個非常龐大複雜的類（比如NSView或UIView），並且你想絕對的確保你自己的子類中的私有方法名和父類中的私有方法名不重複。你可以添加一個你自己的前綴作為私有方法的前綴，這個前綴應該盡可能的獨特。也許這個前綴是基於你公司或者項目的縮寫，比如”XX_“。

盡管給私有方法增加前綴看起來和”方法存在於他們的類的命名空間中“這一之前的說法有些沖突，但此處的意圖是：為子類私有方法添加前綴僅僅是為了保證子類方法和父類方法名稱不沖突。

【必須】不要在參數的名稱中使用“pointer”或者"ptr"。應該使用參數的類型來說明參數是否是一個指針。

【必須】不要使用一到兩個字符作為參數名。

【必須】不要對參數的每個單詞都縮寫。

【建議】如果調用某個方法是為了通知delegate某個事件"即將"發生或者"已經"發生，則請在方法名稱中使用“will”或者“did”這樣的助動詞。例如：

```markdown
```objc
- (void)applicationWillResignActive:(UIApplication *)application;
- (void)applicationDidEnterBackground:(UIApplication *)application;
```

【建議】如果調用某個方法是為了要求delegate代表其他對象執行某件事情，我們應該在方法中使用“should”這樣的情態動詞。當然，也可以在方法中使用“did”或者“will”這樣的字眼，但更傾向於前者。

```markdown
```objc
- (BOOL)tableViewSholdScroll:(id)sender;
```

## 1.8 Category命名規範

【必須】category中不要聲明屬性和成員變量。

【必須】避免category中的方法覆蓋系統方法。可以使用前綴來區分系統方法和category方法。但前綴不要僅僅使用下劃線”_“。

【建議】如果一個類比較複雜，建議使用category的方式組織代碼。具體可以參考UIView。

## 1.9 Class命名規範

【必須】class的名稱應該由兩部分組成，前綴+名稱。即，class的名稱應包含一前綴和一名詞。

## 1.10 Protocol命名規範

| 命名 | 說明 |
| --- | --- |
| NSLocking | OK |
| NSLock | 不好，看起來像是一個類名 |

【建議】有時候protocol只是聲明了一堆相關方法，並不關聯class。這種不關聯class的protocol使用ing形式以和class區分開來。比如NSLocking而非NSLock。

| 命名 | 說明 |
| --- | --- |
| NSLocking | OK |
| NSLock | 不好，看起來像是一個類名 |

| 命名 | 說明 |
| --- | --- |
| UITableViewDelegate | OK |
| NSObjectProtocol | OK |

【建議】如果proctocol不僅聲明了一堆相關方法，還關聯了某個class。這種關聯class的protocol的命名取決於關聯的class，然後再後面再加上protocol或delegate用於顯示的聲明這是一份協議。

| 命名 | 說明 |
| --- | --- |
| UITableViewDelegate | OK |
| NSObjectProtocol | OK |

## 1.11 **Notification命名規範**

【建議】蘋果文檔說：如果一個類聲明了delegate屬性，通常情況下，這個類的delegate對象可以通過實現的delegate方法收到大部分通知消息。那麼，這些通知的名稱應該反映出對應的delegate方法。比如，application對象發送的`NSApplicationDidBecomeActiveNotification`通知和對應的`applicationDidBecomeActive:`消息。其實，這也算是命名的一致性要求。

【必須】notification的命名使用全局的NSString字符串進行標識。命名方式如下： `[Name of associated class] + [Did | Will] + [UniquePartOfName] + Notification` 例如：

```markdown
```objc
NSApplicationDidBecomeActiveNotification

NSWindowDidMiniaturizeNotification

NSTextViewDidChangeSelectionNotification

NSColorPanelColorDidChangeNotification
```

【必須】`object`通常是指發出notification的對象，如果在發送notification的同時要傳遞一些額外的信息，請使用`userInfo`，而不是object。

【必須】如果某個通知是為了告知外界某個事件"即將"發生或者"已經"發生，則請在通知名稱中使用“will”或者“did”這樣的助動詞。例如：

```markdown
```objc
UIKeyboardWillChangeFrameNotification;
UIKeyboardDidChangeFrameNotification;
```

## 1.12 Constant命名規範

[Constants](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingIvarsAndTypes.html)

### 1.12.1 枚舉常量

【必須】使用枚舉類型來表示一組相關的整型常量。

【建議】枚舉常量和typedef定義的枚舉類型的命名規範同函數的命名規範一致。（參考 [Naming Functions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingFunctions.html#//apple_ref/doc/uid/20001283-BAJGGCAD)）

```markdown
```objc
typedef enum _NSMatrixMode {
    NSRadioModeMatrix           = 0,
    NSHighlightModeMatrix       = 1,
    NSListModeMatrix            = 2,
    NSTrackModeMatrix           = 3
} NSMatrixMode;
```

<aside>
💡 注意：上面枚舉typeof中的`_NSMatrixMode`是無用的。

</aside>

我們可以像位掩碼(bit masks)一樣創建一個匿名枚舉，如下：

```markdown
```objc
enum {
    NSBorderlessWindowMask      = 0,
    NSTitledWindowMask          = 1 << 0,
    NSClosableWindowMask        = 1 << 1,
    NSMiniaturizableWindowMask  = 1 << 2,
    NSResizableWindowMask       = 1 << 3
};
```

### 1.12.2 使用const關鍵字創建常量

【必須】使用`const`關鍵字創建浮點型常量。你也可以使用const來創建和其他常量不相關的整型常量。否則，請使用枚舉類型來創建。即，如果一個整型常量和其他常量不相關，可以使用const來創建，否則，使用枚舉類型表示一組相關的整型常量。

以下例子聲明了const常量的格式：

```markdown
```objc
const float NSLightGray;
```

### 1.12.3 其他常量類型

【必須】通常情況下，不要使用`#define`預處理命令(preprocessor command)創建常量。正如上面所說，對於整型常量，使用枚舉創建；對於浮點型常量，使用const修飾符創建。

【必須】有些符號需要使用大寫字母標識。預處理器需要根據這個符號進行計算以便決定是否要對某一塊代碼進行處理。比如：

```markdown
```objc
#ifdef DEBUG
```

<aside>
💡 注意：那些編譯器定義的宏，左側和右側各有兩個下劃線。如下：

</aside>

```markdown
```objc
__MACH__
```

【必須】通知的名字和字典的key，應該使用字符串常量來定義。使用字符串常量編譯器可以進行檢查，這樣可以避免拼寫錯誤。Cocoa 系統庫提供了許多字符串常量的例子，比如：

```markdown
```objc
APPKIT_EXTERN NSString *NSPrintCopies;
```

字符串常量應該在.h頭文件中暴露給外部，而字符串常量真正的賦值是在.m文件中。如下：

```markdown
```objc
.h文件
extern NSString *const WSNetworkReachablityStatusDidChangedNotification;
.m文件
NSString * const WSNetworkReachablityStatusDidChangedNotification = @"WSNetworkReachablityStatusDidChangedNotification";
```

### 1.13 Exception命名規範

Notifications and Exceptions 

上面已經有一節介紹過通知的命名規範。異常和通知的命名遵循相似的規則，但又各有不同。

【必須】和Notification的命名規範一樣(可參考**Notification命名規範**一節)，異常也是用全局的NSString字符串進行標識。命名方式如下： `[Prefix] + [UniquePartOfName] + Exception`

相當於異常由前綴、名稱中能夠標識異常唯一性的那部分、Exception。如下：

```markdown
```objc
NSColorListIOException

NSColorListNotEditableException

NSDraggingException

NSFontUnavailableException

NSIllegalSelectorException
```

# 2. 編碼規範

## 2.1 Initialize規範

[Tips and Techniques for Framework Developers](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/FrameworkImpl.html)

- (void)initialize類方法先於其他的方法調用。且initialize方法給我們提供了一個讓代碼once、lazy執行的地方。initialize通常被用於設置class的版本號(參考 [Versioning and Compatibility](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CodingGuidelines/Articles/FrameworkImpl.html#//apple_ref/doc/uid/20001286-1001777))。

initialize方法的調用遵循繼承規則(所謂繼承規則，簡單來講是指：子類方法中可以調用到父類的同名方法，即使沒有調用[super xxx])。如果我們沒有實現initialize方法，運行時初次調用這個類的時候，系統會沿著繼承鏈(類繼承體系)，先後給繼承鏈上遊中的每個超類發送一條initialize消息，直到某個超類實現了initlialize方法，才會停止向上調用。因此，在運行時，某個類的initialize方法可能會被調用多次(比如，如果一個子類沒有實現initialize方法)。 比如：有三個類：SuperClass、SubClass和FinalClass。他們的繼承關系是這樣的FinalClass->SubClass->SuperClass，現只實現了SuperClass方法的initialize方法。

```markdown
```objc
// SuperClass
@implementation SuperClass
+ (void)initialize {
    NSLog(@"superClass initalize");
}
@end
// 初始化FinalClass
- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    FinalClass *finalC = [FinalClass new];
}
// 控制臺輸出結果
2023-10-31 14:11:03.130365+0800 Demo[67162:11721965] superClass initalize
2023-10-31 14:11:03.130722+0800 Demo[67162:11721965] superClass initalize
2023-10-31 14:11:03.130815+0800 Demo[67162:11721965] superClass initalize
```

解釋：

因為FinalClass繼承自SubClass，SubClass繼承自SuperClass。因為繼承體系中只有SuperClass實現了initialize方法，導致初始化FinalClass這個子類時，FinalClass會調用他的父類(SubClass)中的initialize方法。又因為他(FinalClass)的父類(SubClass)也沒有實現initialize方法，又會繼續沿著繼承體系，向上遊尋找，最後找到SubClass的父類(SuperClass)。因為SuperClass實現了這個initialize方法，所以調用結束。至於為什麼是連續調用了三次SuperClass的initialize方法。因為子類FinalClass的初始化觸發了超類SubClass、SuperClass的初始化。所以初始化FinalClass時，實際上使這三個類都得到了初始化的機會，自然就會連續調用三次SuperClass的initialize方法。

還是上面那三個類，如果我們又給SubClass實現了initialize方法，那麼控制臺將會輸出如下結果(至於為什麼，前面已經介紹過了，大家可以自己分析下)：

```markdown
```objc
2023-10-31 14:34:54.697952+0800 Load[67652:11780578] superClass initalize
2023-10-31 14:34:54.698118+0800 Load[67652:11780578] subClass initialize
2023-10-31 14:34:54.698472+0800 Load[67652:11780578] subClass initialize
```

基於上面陳述的這些事實，我們得出一個結論：

【必須】如果我們想要讓initialize方法僅僅被調用一次，那麼需要借助於GCD的dispatch_once()。如下：

```markdown
```objc
+ (void)initialize {
    static dispatch_once_t onceToken = 0;
    dispatch_once(&onceToken, ^{
        // the initializing code
    }
}
```

【建議】如果我們想在繼承體系的某個指定的類的initialize方法中執行一些初始化代碼，可以使用類型檢查和而非dispatch_once()。如下：

```markdown
```objc
if (self == [NSFoo class]) {
    // the initializing code
}
```

說了這麼多，總而言之，由於任何子類都會調用父類的initialize方法，所以可能會導致某個父類的initialize方法會被調用多次，為了避免這種情況，我們可以使用類型判等或dispatch_once()這兩種方式，以保證initialize中的代碼不會被無辜調用。

initialize是由系統自動調用的方法，我們不應該顯示或手動調用initialize方法。如果我們要觸發某個類的初始化行為，應該調用這個類的一些無害的方法。比如：

```markdown
```objc
[NSImage self];
```

## 2.2 Init方法規範

Objective-C有`designated Initializers`和`secondary Initializers`的概念。designated Initializers叫做指定初始化方法。《Effective Objective-C 2.0 編寫高質量iOS 與 OS X代碼的52個有效方法》中將designated Initializers翻譯為”全能初始化方法“。designated Initializers方法是指類中為對象提供必要信息以便其能完成工作的初始化方法。一個類可以有一個或者多個designated Initializers。但是要保證所有的其他secondary initializers都要調用designated Initializers。即：只有designated Initializers才會存儲對象的信息。這樣的好處是：當這個類底層的某些數據存儲機制發生變化時(可能是一些property的變更)，只需要修改這個designated Initializers內部的代碼即可。無需改動其他secondary Initializers初始化方法的代碼。

【必須】所有secondary 初始化方法都應該調用designated 初始化方法。

【必須】所有子類的designated初始化方法都要調用父類的designated初始化方法。使這種調用關系沿著類的繼承體系形成一條鏈。

【必須】如果子類的designated初始化方法與超類的designated初始化方法不同，則子類應該覆寫超類的designated初始化方法。（因為開發者很有可能直接調用超類的某個designated方法來初始化一個子類對象，這樣也是合情合理的，但使用超類的方法初始化子類，可能會導致子類在初始化時缺失一些必要信息）。

【必須】如果超類的某個初始化方法不適用於子類，則子類應該覆寫這個超類的方法，並在其中拋出異常。

【必須】禁止子類的designated初始化方法調用父類的secondary初始化方法。否則容易陷入方法調用死循環。如下：

```markdown
```objc
// 超類
@interface ParentObject : NSObject

@end

@implementation ParentObject
    //designated initializer    
    - (instancetype)initWithURL:(NSString*)url title:(NSString*)title {
        if (self = [super init]) {
            _url = [url copy];
            _title = [title copy];
        }
        return self;
    }
    //secondary initializer
    - (instancetype)initWithURL:(NSString*)url {
        return [self initWithURL:url title:nil];
    }
@end

// 子類
@interface ChildObject : ParentObject

@end

@implementation ChildObject
    //designated initializer
    - (instancetype)initWithURL:(NSString*)url title:(NSString*)title {
        //在designated intializer中調用 secondary initializer，錯誤的
        if (self = [super initWithURL:url]) {

        }
        return self;
    }
@end

@implementation ViewController
    - (void)viewDidLoad {
        [super viewDidLoad];
        // 這裏會死循環
        ChildObject* child = [[ChildObject alloc] initWithURL:@"url" title:@"title"];
    }
@end
```

【必須】另外禁止在init方法中使用self.xxx的方式訪問屬性。如果存在繼承的情況下，很有可能導致崩潰。具體參考此文章[《為什麼不能在init和dealloc函數中使用accessor方法》](https://www.jianshu.com/p/3cf3f5007243)

## ****2.3 Init error****

一個好的初始化方法應該具備以下幾個方面，在初始化階段就能夠發現錯誤並給予處理，也就是初始化方法應該具備一些必要的容錯功能。

【必須】調用父類的designated初始化方法初始化本類的對象。

【必須】校驗父類designated初始化方法返回的對象是否為nil。

【建議】如果初始化當前對象的時候發生了錯誤，應該給予對應的處理：釋放對象，並返回nil。

以下實例列舉類初始化階段可能會存在的錯誤：

```markdown
```objc
- (id)init {
    self = [super init];  // Call a designated initializer here.
    if (self != nil) {
        // Initialize object  ...
        if (someError) {
            [self release];
            self = nil;
        }
    }

    return self;
}
```

## ****2.4 dealloc規範****

【必須】不要忘記在dealloc方法中移除通知和KVO。

【建議】dealloc 方法應該放在實現文件的最上面，並且剛好在 @synthesize 和 @dynamic 語句的後面。在任何類中，init 都應該直接放在 dealloc 方法的下面。

【必須】在dealloc方法中，禁止將self作為參數傳遞出去，如果self被retain住，到下個runloop周期再釋放，則會造成多次釋放crash。如下：

```markdown
```objc
-(void)dealloc{
    [self unsafeMethod:self];
    // 因為當前已經在self這個指針所指向的對象的銷毀階段，銷毀self所指向的對象已經在所難免。如果在unsafeMethod:中把self放到了autorelease poll中，那麼self會被retain住，計劃下個runloop周期在進行銷毀。但是dealloc運行結束後，self所指向的對象的內存空間就直接被回收了，但是self這個指針還沒有銷毀(即沒有被置為nil)，導致self變成了一個名副其實的野指針。
    // 到了下一個runloop周期，因為self所指向的對象已經被銷毀，會因為非法訪問而造成crash問題。
}
```

【必須】和init方法一樣，禁止在dealloc方法中使用self.xxx的方式訪問屬性。如果存在繼承的情況下，很有可能導致崩潰。具體參考此文章[《為什麼不能在init和dealloc函數中使用accessor方法》](https://www.jianshu.com/p/3cf3f5007243)

## ****2.5 Block規範****

【必須】調用block時需要對block判空。

【必須】注意block潛在的引用循環。

## ****2.6 Notification規範****

前面在命名規範一节中已經介紹了通知的命名規範，這裏解釋的是通知的使用規範。

通知作為觀察者模式的一個落地產物，在開發中能夠實現一對多的通信。所有可以使用delegate和block實現的通信和傳值，都可以使用通知實現。正因通知如此靈活，我們更應該弄清楚通知適合使用的場景，避免把通知和delegate以及block等進行混淆。

通知是一把雙刃劍，讓你歡喜讓你憂。開發中，當你走投無路將要崩潰時，可以考慮使用通知；而當你頻繁使用通知時，同樣會讓你崩潰到走投無路。所以，在每個應用中，我們應該時刻留意並控制通知的數量，避免通知滿天飛的現象。

曾經有一個項目擺在我面前，我卻無法珍惜，因為通知太多了，幾乎有代碼的地方就有通知。如果現在同樣有一個充滿通知的項目擺在我面前，我知道是時候該優化它了。

【必須】基於以上的陳述，當我們使用通知時，必須要思考，有沒有更好的辦法來代替這個通知。禁止遇到問題就想到通知，把通知作為備選項而非首選項。

【必須】post通知時，`object`通常是指發出notification的對象，如果在發送notification的同時要傳遞一些額外的信息，請使用`userInfo`，而不是object。

【必須】NSNotificationCenter在iOS8及更老的系統有一個多線程bug，selector執行到一半可能會因為self的銷毀而引起crash，解決的方案是在selector中使用`weak_strong_dance`。如下：

```markdown
```objc
- (void)onMultiThreadNotificationTrigged:(NSNotification *)notify {
    __weak typeof(self) wself = self; __strong typeof(self) sself = wself; 
    if (!sself) { return; }
    [self doSomething]; 
}
```

【必須】在多線程應用中，Notification在哪個線程中post，就在哪個線程中被轉發，而不一定是在注冊觀察者的那個線程中。如果post消息不在主線程，而接受消息的回調裏做了UI操作，需要讓其在主線程執行。

說明：每個進程都會創建一個NotificationCenter，這個center通過NSNotificationCenter defaultCenter獲取，當然也可以自己創建一個center。 NoticiationCenter是以同步（非異步，當前線程，會等待，會阻塞）的方式發送請求。即，當post通知時，center會一直等待所有的observer都收到並且處理了通知才會返回到poster。如果需要異步發送通知，請使用notificationQueue，在一個多線程的應用中，通知會發送到所有的線程中。

## ****2.7 UI規範****

【必須】如果想要獲取window，不要使用view.window獲取。請使用`[[UIApplication sharedApplication] keyWindow]`。

【必須】在使用到 `UIScrollView`，`UITableView`，`UICollectionView` 的 Class 中，需要在 dealloc 方法裏手動的把對應的 delegate, dataSouce 置為 nil。

【必須】UITableView使用self-sizing實現不等高cell時，請在`- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath;`中給cell設置數據。不要在`- (void)tableView:(UITableView *)tableView willDisplayCell:(UITableViewCell *)cell forRowAtIndexPath:(NSIndexPath *)indexPath;`方法中給cell設置數據。

【建議】當訪問一個 `CGRect` 的 `x`， `y`， `width`， `height` 時，應該使用`CGGeometry` 函數代替直接訪問結構體成員。蘋果的 CGGeometry 參考中說到：

> All functions described in this reference that take CGRect data structures as inputs implicitly standardize those rectangles before calculating their results. For this reason, your applications should avoid directly reading and writing the data stored in the CGRect data structure. Instead, use the functions described here to manipulate rectangles and to retrieve their characteristics.
> 

因此，推薦的寫法是這樣的：

```markdown
```objc
CGRect frame = self.view.frame;

CGFloat x = CGRectGetMinX(frame);
CGFloat y = CGRectGetMinY(frame);
CGFloat width = CGRectGetWidth(frame);
CGFloat height = CGRectGetHeight(frame);
```

反對這樣的寫法

```markdown
```objc
CGRect frame = self.view.frame;

CGFloat x = frame.origin.x;
CGFloat y = frame.origin.y;
CGFloat width = frame.size.width;
CGFloat height = frame.size.height;
```

## ****2.8 IO規範****

【建議】盡量少用`NSUserDefaults`。 說明：[[NSUserDefaults standardUserDefaults] synchronize] 會block住當前線程，知道所有的內容都寫進磁盤，如果內容過多，重複調用的話會嚴重影響性能。

【建議】一些經常被使用的文件建議做好緩存。避免重複的IO操作。建議只有在合適的時候再進行持久化操作。

## ****2.9 Collection規範****

【必須】不要用一個可能為nil的對象初始化集合對象，否則可能會導致crash。

```markdown
```objc
// 可能崩潰
NSObject *obj = somOjbcetMaybeNil;
NSMutableArray *arrM = [NSMutableArray arrayWithObject:obj];

// 崩潰信息：
*** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '*** -[__NSPlaceholderArray initWithObjects:count:]: attempt to insert nil object from objects[0]’
复制
```

```markdown
```objc
// 改進辦法:
NSObject *obj = somOjbcetMaybeNil;
NSMutableArray *arrM = nil;
if (obj && [obj isKindOfClass:[NSObject class]]) {
    arrM = [NSMutableArray arrayWithObject:obj];
} else {
    arrM = nil;
}
```

【必須】同理，對插入到集合對象裏面的對象也要進行判空。

【必須】注意在多線程環境下訪問可變集合對象的問題，必要時應該加鎖保護。不可變集合(比如NSArray)類默認是線程安全的，而可變集合類(比如NSMutableArray)不是線程安全的。

【必須】禁止在多線程環境下直接訪問可變集合對象中的元素。應該先對其進行copy，然後訪問不可變集合對象內的元素。

```markdown
```objc
// 正確寫法
- (void)checkAllValidItems{
NSArray *array = [array copy];
[array enumerateObjectsUsingBlock:^(id _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
//do something using obj
}]; }

// 錯誤寫法
- (void)checkAllValidItems{
[self.allItems enumerateObjectsUsingBlock:^(id _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
    //do something using obj
    // 如果在enumerate過程中，其他線程對allItems這個可變集合進行了變更操作，這裏就有可能引發crash
}]; }
```

【必須】注意使用enumerateObjectsUsingBlock遍曆集合對象中的對象時，關鍵字`return`的作用域。block中的return代表的是使當前的block返回，而非使當前的整個函數體返回。以下使用NSArray舉例，其他集合類型同理。如下：

```markdown
```objc
- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    NSArray *array = [NSArray arrayWithObject:@"1"];
    [array enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        // excute some code...
        return;
    }];
    // 依然會執行到這裏
    NSLog(@"fall through");
}

// 執行結果：
// fall through
```

當然，兩個enumerateObjectsUsingBlock嵌套，如果僅在最內層的block中return，外層block的代碼還是會被執行。如下：

```markdown
```objc
- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    NSArray *arr1 = [NSArray arrayWithObject:@"1"];
    NSArray *arr2 = [NSArray arrayWithObject:@"2"];
    [arr2 enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        [arr1 enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
            // do something
            return;
        }];
        
        NSLog(@"fall through");
    }];
    
    NSLog(@"fall through");
}

// 執行結果：
// fall through
// fall through
```

說明：其實block相當於一個匿名函數，在block中使用return返回，僅是讓當前這個匿名函數返回。

【必須】禁止返回mutable對象，禁止mutable對象作為入參傳遞。

【建議】如果使用NSMutableDictionary作為緩存，建議使用NSCache代替。

【建議】集合類使用泛型來指定對象的類型。

```markdown
```objc
@property(nonatomic,copy) NSArray<NSString *> *array;
@property(nonatomic,strong) NSMutableDictionary<NSString *,NSString *> *dictionary;
```

## ****2.10 分支語句規範****

【建議】if條件判斷語句後面必須要加大括號{}。不然隨著業務的發展和代碼迭代，極有可能引起邏輯問題。

```markdown
```objc
// 建議
if (!error) {
    return success;
}
// 不建議
if (!error) 
    return success;

if (!error)  return success;
```

【必須】多於3個邏輯表達式必須用參數分割成多個有意義的bool變量。

【建議】遵循gold path法則，不要把真正的邏輯寫道括號內。

```markdown
```objc
// 不建議
- (void)someFuncWith:(NSString *)parameter {
    if (parameter) {
        // do something
        [self doSomething];
    }
}

// 建議
- (void)someFuncWith:(NSString *)parameter {
    if (!parameter) {
        return;
    }
    // do something
    [self doSomething];
}
```

【建議】對於條件語句的真假，因為 nil 解析為 NO，所以沒有必要在條件中與它進行比較。永遠不要直接和 YES 和 NO進行比較，因為 YES 被定義為 1，而 BOOL 可以多達 8 位。

```markdown
```objc
// 建議
if (isAwesome)
if (![someObject boolValue])
// 禁止這樣做
if ([someObject boolValue] == NO) { }
if (isAwesome == YES) { }
```

【必須】使用switch...case...語句的時候，不要丟掉default:。除非switch枚舉。

【必須】switch...case...語句的每個case都要添加`break`關鍵字，避免出現fall-through。

## ****2.11 對象判等規範****

isEqual:方法允許我們傳入任意類型的對象作為參數，如果參數類型和receiver(方法調用者)類型不一致，會返回NO。而isEqualToString:和isEqualToArray:這兩個方法會假設參數類型和receiver類型一致，也就是說，這兩個方法不會對參數進行類型檢查。因此這兩個方法性能更好但不安全。如果我們是從外部數據源(比如info.plist或preferences)獲取的數據，那麼推薦使用isEqual:，因為這樣更安全。如果我們知道參數的確切類型，那麼可以使用類似於isEqualToString:這樣的方法，因為性能更好。關於對象等同性判定的更多內容，請參考此文章[《淺析對象等同性判斷》](https://www.jianshu.com/p/e1fd4fb9341c)。

## ****2.12 懶加載規範****

懶加載適合的場景:

- 一個對象的創建依賴於其他對象。
- 一個對象在整個app過程中，可能被使用，也可能不被使用。
- 一個對象的創建需要經過大量的計算或者比較消耗性能。除以上三條之外，請不要使用懶加載。

【建議】懶加載本質上就是延遲初始化某個對象，所以，懶加載僅僅是初始化一個對象，然後對這個對象的屬性賦值。懶加載中不應該有其他的不必要的邏輯性的代碼，如果有，請把那些邏輯性代碼放到合適的地方。

【必須】不要濫用懶加載，只對那些真正需要懶加載的對象采用懶加載。

【必須】如果一個對象在懶加載後，某些場景下又被設置為nil。我們很難保證這個懶加載不被再次觸發。

## ****2.13 多線程規範****

【必須】禁止使用GCD的`dispatch_get_current_queue()`函數獲取當前線程信息。 

【建議】僅當必須保證順序執行時才使用`dispatch_sync`，否則容易出現死鎖，應避免使用，可使用`dispatch_async`。

```markdown
```objc
- (void)viewDidLoad {
   [super viewDidLoad];
   // 錯誤。出現死鎖，報錯:EXC_BAD_INSTRUCTION。原因:在主隊列中同步的添加一個block到主隊列中
   dispatch_queue_t mainQueue = dispatch_get_main_queue();
   dispatch_block_t block = ^() {
       NSLog(@"%@", [NSThread currentThread]);
   };
   dispatch_sync(mainQueue, block);
}
```

```markdown
```objc
- (void)viewDidLoad {
   [super viewDidLoad];
   // 正確。異步執行。雖然還是把任務加到了主隊列由主線程來執行，但因為是異步，此時主隊列後面的任務不依賴於前面的任務。
   dispatch_queue_t mainQueue = dispatch_get_main_queue();
   dispatch_block_t block = ^() {
       NSLog(@"%@", [NSThread currentThread]);
   };
   dispatch_async(mainQueue, block);
}
// 打印結果：
// <NSThread: 0x600000073300>{number = 1, name = main}
```

【必須】禁止在非主線程中進行UI元素的操作。

【必須】在主線程中禁止進行同步網絡資源讀取，使用NSURLSession進行異步獲取。當然，你可以在子線程同步獲取網絡資源，但還是上面的那一條建議：避免使用`dispatch_sync`，盡量使用`dispatch_async`。因為死鎖不一定只發生在主線程。

【必須】如果需要進行大文件或者多文件的IO操作，禁止主線程使用，必須進行異步處理。

【必須】對剪貼板的讀取必須要放在異步線程處理，最新Mac和iOS裏的剪貼板共享功能會導致有可能需要讀取大量的內容，導致讀取線程被長時間阻塞。

```markdown
```objc
dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
   UIPasteboard *pasteboard = [UIPasteboard generalPasteboard]; 
   if (pasteboard.string.length > 0) {//這個方法會阻塞線程
      NSString *text = [pasteboard.string copy];
      [pasteboard setValue:@"" forPasteboardType:UIPasteboardNameGeneral];
      if (text == nil || [text isEqualToString:@""]) {
          return ;
      }
      dispatch_async(dispatch_get_main_queue(), ^{
          [self processShareCode:text];
      });
   }
});
```

## 2.14 ****內存管理規範****

【建議】函數體提前`return`時，要注意是否有對象沒有被釋放掉(常見於CF對象)，避免造成內存泄露。

【建議】請慎重使用單例，避免產生不必要的常駐內存。 

說明：我們不僅應該知道單例的特點和優勢，也必須要弄明白單例適合的場景。UIApplication、access database 、request network 、access userInfo這類全局僅存在一份的對象或者需要多線程訪問的對象，可以使用單例。不要僅僅為了訪問方便就使用單例。

【建議】單例初始化方法中盡量保證單一職責,尤其不要進行其他單例的調用。極端情況下，兩個單例對象在各自的單例初始化方法中調用，會造成死鎖。

【必須】在dealloc方法中，禁止將self作為參數傳遞出去，如果self被retain住，到下個runloop周期再釋放，則會造成多次釋放crash。這一點在**dealloc**一節中有說明。

【建議】除非你清除的知道自己在做什麼。否則不建議將UIView類的對象加入到NSArray、NSDictionary、NSSet中。如有需要可以添加到NSMapTable 和 NSHashTable。因為NSArray、NSDictionary、NSSet會對加入的對象做strong引用（即使你把加入的對象進行了weak）。而NSMapTable、NSHashTable會對加入的對象做weak引用。

 說明：簡單的說，NSHashTable相當於weak的NSMutableArray；NSMapTable相當於weak的NSMutableDictionary.

```markdown
```objc
// 錯誤的例子：
@implementation WSObject
- (void)dealloc {
    NSLog(@"dealloc");
}
@end

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    WSObject *object = [WSObject new];
    // 即使對object進行了weak弱化，數組也會強引用這個object對象。dealloc方法不會被執行。
    __weak typeof(object) weakObject = object;
    [self.arrM addObject:weakObject];
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        NSLog(@"count = %ld",self.arrM.count);
    });
}

// 打印結果：
// count = 1
```

```markdown
```objc
// 正確的例子：
- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    WSObject *object = [WSObject new];

    NSHashTable *hashTable = [NSHashTable weakObjectsHashTable];
    [hashTable addObject:object];
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        NSLog(@"count = %ld",hashTable.count);
    });
}

// 打印結果：
// dealloc
// count = 1
```

你可能對上面的例子有所疑惑，object已經釋放了，但是控制臺仍然輸出 hashTable.count == 1。但是請相信我，此時存在於hashTable中的那個object已經變成了nil。不信你繼續看下面的例子：

```markdown
```objc
- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    WSObject *object = [WSObject new];

    NSHashTable *hashTable = [NSHashTable weakObjectsHashTable];
    [hashTable addObject:object];
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        NSLog(@"count = %ld",hashTable.count);
        
        if (hashTable && hashTable.count) {
            WSObject *object = [hashTable anyObject];
            NSLog(@"object = %@",[object self]);
        }
    });
}

// 打印結果：
2023-10-31 15:19:10.952139+0800 tst[46834:4305636] dealloc
2023-10-31 15:19:13.149903+0800 tst[46834:4305636] count = 1
2023-10-31 15:20:55.234522+0800 tst[46834:4305636] object = (null)
```

## ****2.15 延遲調用規範****

【必須】`performSelector:withObject:afterDelay:`要在有Runloop的線程裏調用，否則調用無法生效。

 說明：異步線程默認是沒有runloop的，除非手動創建；而主線程是系統會自動創建Runloop的。所以在異步線程調用是請先確保該線程是有Runloop的。

使用`performSelector:withObject:afterDelay:`和`cancelPreviousPerformRequestsWithTarget`組合的時候要小心：

afterDelay會增加引用計數，而cancel會對引用計數減一

如果receiver在引用計數器為1的時候，調用cancel會立即回收receiver。後續再次調用receiver的方法就會crash。所以我們需要使用weakSelf並判空。如下：

```markdown
```objc
__weak typeof(self) weakSelf = self;
[NSObject cancelPreviousPerformRequestsWithTarget:self]; 
if (!weakSelf) {
    // NSLog(@"self dealloc");
    return;
 }
[self doOther];
```

## ****2.16 注釋規範****

【必須】如果方法、函數、類、屬性等需要提供給外界或者他人使用，必須要加注釋說明。

【必須】如果你的代碼以SDK的形式提供給其他人使用，那麼接口的注釋是必須的。必須對暴露給外界的所有方法、屬性、參數加以注釋說明。

【建議】注釋應該說明其作用以及注意事項(如果有)。

【建議】因為方法或屬性本身就具有自我描述性，注釋應該簡明扼要，說明是什麼和為什麼即可。

## ****2.17 類的設計規範****

【建議】盡量減少繼承，類的繼承關系不要超過3層。可以考慮使用category、protocol來代替繼承。

【建議】把一些穩定的、公共的變量或者方法抽取到父類中。子類盡量只維持父類所不具備的特性和功能。

【建議】.h文件中盡量不要聲明成員變量。

【建議】.h文件中的屬性盡量聲明為只讀。

【建議】.h文件中只暴露出一些必要的類、公開的方法、只讀屬性；私有類、私有方法和私有屬性以及成員變量，盡量寫在.m文件中。

## ****2.18 代碼組織規範****

參考 [raywenderlich/objective-c-style-guide](https://github.com/raywenderlich/objective-c-style-guide)

```markdown
```objc
#pragma mark - Lifecycle
- (instancetype)init {}

- (void)dealloc {}

- (void)viewDidLoad {}

- (void)viewWillAppear:(BOOL)animated {}

- (void)didReceiveMemoryWarning {}

#pragma mark - Custom Accessors
- (void)setCustomProperty:(id)value {}

- (id)customProperty {}

#pragma mark - IBActions
- (IBAction)submitData:(id)sender {}

#pragma mark - Public
- (void)publicMethod {}

#pragma mark - Private
- (void)privateMethod {}

#pragma mark - UITextFieldDelegate

#pragma mark - UITableViewDataSource

#pragma mark - UITableViewDelegate

#pragma mark - NSCopying
- (id)copyWithZone:(NSZone *)zone {}

#pragma mark - NSObject
- (NSString *)description {}
```

【建議】以上只是提供了組織代碼的一種思路，如果有其他更好的組織方式，也不是不可以。

## ****2.19 工程結構規範****

【必須】為了避免文件雜亂，物理文件應該保持和 Xcode 項目文件同步。Xcode 創建的任何組（group）都必須在文件系統有相應的映射。為了更清晰，代碼不僅應該按照類型進行分組，也可以根據業務功能進行分組。

【建議】合理組織工程的內的文件夾，工程中一般包括但不限於以下幾個文件夾category(分類)、util/helper(工具類)、resource(資源)、const(常量)、third(第三方)。