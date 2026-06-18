// ============================================================
// 展覽現場資料蒐集與採購媒合平台 — 範例資料庫
// 展示会情報収集・調達支援システム
// ============================================================
// 四級資料層級:
//   L1 公開(消費者)  L2 B2B採購(委託採購商)  L3 管理者內部  L4 指定客戶專屬
// ============================================================

window.DB = {
  // ---------- 展覽專案 ----------
  exhibitions: [
    {
      id: "jfex2026s",
      name_zh: "JFEX SUMMER 2026 — 日本食品輸出EXPO / JFEX / Food LogiX",
      name_ja: "JFEX SUMMER 2026 —「日本の食品」輸出EXPO / JFEX / Food LogiX",
      date: "2026/6/24–6/26",
      venue_zh: "東京 Big Sight(東京國際展示場)",
      venue_ja: "東京ビッグサイト",
      organizer: "RX Japan",
      scale_zh: "約700家參展商・約60國海外買家",
      status: "進行中"
    }
  ],

  // ---------- 委託採購廠商(客戶)與專屬授權 ----------
  buyers: [
    { id: "A", name: "台灣優鮮食品進口(A客戶)", focus: "茶葉・飲料・調味料", market: "台灣", grants: ["p001","p002","p005"] },
    { id: "B", name: "康家介護機構(B客戶)", focus: "介護食・機能性食品", market: "台灣/中國大陸", grants: ["p003","p004"] },
    { id: "C", name: "上海跨境電商(C客戶)", focus: "零食・人氣商品", market: "中國大陸", grants: ["p001","p002","p004","p005"] }
  ],

  // ---------- 展商(出展企業) ----------
  exhibitors: [
    { id: "e01", name_ja: "静岡茶園株式会社", name_zh: "靜岡茶園股份有限公司",
      booth: "E-12", category: "飲料・茶", country: "日本",
      profile_ja: "創業120年、静岡県産の高品質な煎茶・抹茶を生産。海外輸出実績あり。",
      contact: "輸出部 山田 / export@shizuoka-cha.example", reviewed: true },
    { id: "e02", name_ja: "北海道ヘルスフーズ", name_zh: "北海道健康食品",
      booth: "J-08", category: "機能性食品・介護食", country: "日本",
      profile_ja: "高齢者向けの嚥下対応食・栄養補助食品を製造。HACCP認証取得。",
      contact: "海外事業部 佐藤 / global@hokkaido-hf.example", reviewed: true },
    { id: "e03", name_ja: "大阪スナック工房", name_zh: "大阪零食工坊",
      booth: "F-21", category: "加工食品・零食", country: "日本",
      profile_ja: "米菓・スナックのOEM/ODMに強み。小ロット対応可。",
      contact: "営業 鈴木 / sales@osaka-snack.example", reviewed: false }
  ],

  // ---------- 商品(每筆含三版本:展商原始 / B2B採購 / 消費者) ----------
  products: [
    {
      id: "p001", exhibitorId: "e01", name_ja: "特上 有機抹茶 100g", name_zh: "特上 有機抹茶 100g",
      category: "飲料・茶",
      // L1 公開(消費者展示版)
      consumer: {
        image: "🍵", brand_story_zh: "靜岡百年茶園,石臼研磨,色澤翠綠、香氣濃郁。",
        feature_zh: "有機認證・無添加・適合沖泡與烘焙", origin_zh: "日本・靜岡縣",
        usage_zh: "80℃熱水沖泡,或用於甜點烘焙", public_price_zh: "參考售價 ¥2,160/罐",
        buy_zh: "官方旗艦店 / 詢問表單"
      },
      // L2 B2B採購版
      b2b: {
        moq: "100罐", wholesale_zh: "¥1,180/罐(未稅)", sample_zh: "可提供樣品3罐,運費買方負擔",
        export_zh: "可出口台灣/中國大陸,需冷藏物流", oem_zh: "支援OEM貼牌,MOQ 500罐起",
        catalog: "catalog_p001.pdf", pricelist: "pricelist_p001.pdf",
        admin_note_zh: "現場試飲品質佳,茶農配合度高;建議台灣高端茶飲通路。",
        recommend: 5, fit_tw: true, fit_cn: true, follow: true
      },
      // L3 管理者內部
      admin: {
        verbal_quote_zh: "口頭可談到 ¥1,050/罐(量大)", attitude_zh: "積極,願長期合作",
        risk_zh: "產量有上限,旺季可能缺貨", interested_buyers: ["A","C"]
      }
    },
    {
      id: "p002", exhibitorId: "e01", name_ja: "深蒸し煎茶 ティーバッグ", name_zh: "深蒸煎茶 茶包",
      category: "飲料・茶",
      consumer: { image: "🫖", brand_story_zh: "便利茶包,辦公室與居家皆宜。", feature_zh: "三角立體茶包・冷泡熱泡皆可",
        origin_zh: "日本・靜岡縣", usage_zh: "冷泡或熱泡均可", public_price_zh: "參考售價 ¥980/盒", buy_zh: "官方旗艦店" },
      b2b: { moq: "200盒", wholesale_zh: "¥520/盒(未稅)", sample_zh: "可提供樣品2盒",
        export_zh: "可出口台灣/中國大陸,常溫物流", oem_zh: "支援ODM客製包裝,MOQ 1000盒",
        catalog: "catalog_p002.pdf", pricelist: "pricelist_p002.pdf",
        admin_note_zh: "適合電商通路,單價低、好上架。", recommend: 4, fit_tw: true, fit_cn: true, follow: true },
      admin: { verbal_quote_zh: "¥480/盒(量大)", attitude_zh: "積極", risk_zh: "無明顯風險", interested_buyers: ["A","C"] }
    },
    {
      id: "p003", exhibitorId: "e02", name_ja: "やわらか介護食 鮭おかゆ", name_zh: "軟質介護食 鮭魚粥",
      category: "機能性食品・介護食",
      consumer: { image: "🥣", brand_story_zh: "為長者設計的易嚥營養餐。", feature_zh: "易吞嚥・高蛋白・常溫保存",
        origin_zh: "日本・北海道", usage_zh: "隔水加熱即食", public_price_zh: "參考售價 ¥380/份", buy_zh: "詢問表單" },
      b2b: { moq: "500份", wholesale_zh: "¥210/份(未稅)", sample_zh: "可提供樣品5份",
        export_zh: "可出口台灣/中國大陸,需食品標示翻譯", oem_zh: "支援OEM,MOQ 2000份",
        catalog: "catalog_p003.pdf", pricelist: "pricelist_p003.pdf",
        admin_note_zh: "HACCP認證齊全,適合介護機構與醫療通路。", recommend: 5, fit_tw: true, fit_cn: true, follow: true },
      admin: { verbal_quote_zh: "¥190/份(年約)", attitude_zh: "非常積極,有意設台灣總代理", risk_zh: "需確認進口食品法規", interested_buyers: ["B"] }
    },
    {
      id: "p004", exhibitorId: "e02", name_ja: "高齢者向け 栄養ゼリー", name_zh: "長者營養果凍",
      category: "機能性食品・介護食",
      consumer: { image: "🍮", brand_story_zh: "一口補充營養的果凍。", feature_zh: "高熱量・好入口・多口味",
        origin_zh: "日本・北海道", usage_zh: "開封即食", public_price_zh: "參考售價 ¥150/個", buy_zh: "詢問表單" },
      b2b: { moq: "1000個", wholesale_zh: "¥78/個(未稅)", sample_zh: "可提供樣品一組6入",
        export_zh: "可出口台灣/中國大陸", oem_zh: "支援ODM口味客製,MOQ 5000個",
        catalog: "catalog_p004.pdf", pricelist: "pricelist_p004.pdf",
        admin_note_zh: "毛利高,適合介護與電商雙通路。", recommend: 4, fit_tw: true, fit_cn: true, follow: true },
      admin: { verbal_quote_zh: "¥70/個(量大)", attitude_zh: "積極", risk_zh: "冷鏈非必要,常溫即可", interested_buyers: ["B","C"] }
    },
    {
      id: "p005", exhibitorId: "e03", name_ja: "醤油せんべい 詰合せ", name_zh: "醬油仙貝禮盒",
      category: "加工食品・零食",
      consumer: { image: "🍘", brand_story_zh: "傳統炭烤醬油仙貝。", feature_zh: "炭烤香氣・酥脆・送禮自用兩相宜",
        origin_zh: "日本・大阪", usage_zh: "開封即食", public_price_zh: "參考售價 ¥1,080/盒", buy_zh: "官方旗艦店" },
      b2b: { moq: "100盒", wholesale_zh: "¥560/盒(未稅)", sample_zh: "可提供樣品2盒",
        export_zh: "可出口台灣/中國大陸,常溫物流", oem_zh: "OEM/ODM皆可,小ロット對應,MOQ 300盒",
        catalog: "catalog_p005.pdf", pricelist: "pricelist_p005.pdf",
        admin_note_zh: "小批量友善,適合新進口商試單。", recommend: 3, fit_tw: true, fit_cn: true, follow: false,
        unreviewed: true },
      admin: { verbal_quote_zh: "¥520/盒", attitude_zh: "一般", risk_zh: "資料尚未審核完成", interested_buyers: ["A","C"] }
    }
  ],

  // ---------- 角色權限矩陣 ----------
  permissions: [
    ["掃描 QR Code / 進入", "可", "可", "可", "可"],
    ["建立公司資料", "可(僅自己)", "不可", "不可", "可"],
    ["建立商品資料", "可(僅自己)", "不可", "不可", "可"],
    ["上傳型錄", "可", "不可", "不可", "可"],
    ["上傳價格表", "可", "不可", "不可", "可"],
    ["查看其他展商資料", "不可", "可(限授權)", "可(限公開)", "可"],
    ["查看批發價", "不可", "可(若開放)", "不可", "可"],
    ["查看 MOQ", "不可", "可(若開放)", "不可", "可"],
    ["查看 OEM/ODM 條件", "不可", "可(若開放)", "不可", "可"],
    ["查看管理者備註", "不可", "可(限開放)", "不可", "可"],
    ["收藏商品", "不需要", "可", "可(簡化版)", "可"],
    ["提出採購/詢問需求", "不可", "可", "可(簡化詢問)", "可"],
    ["補充現場照片/影片", "不可", "不可", "不可", "可"],
    ["審核資料", "不可", "不可", "不可", "可"],
    ["控制可見權限", "不可", "不可", "不可", "可"]
  ]
};
