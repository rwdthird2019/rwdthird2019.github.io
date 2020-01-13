var first_li_btn = document.querySelectorAll('.shop .shop_menu ul .first-menu-li')
var second_ul = document.querySelectorAll('.shop .shop_menu ul .first-menu-li .second_ul')
var second_li = document.querySelectorAll('.shop .shop_menu ul .first-menu-li .second_ul li')
var Products_title = document.querySelector('#title')
var shop_item_group = document.querySelector('#shop_item_group')
var page_ul = document.querySelector('#page_ul')
var Products_id = 0;
// 分頁最大值
var max_Products_count = 4
// 商品數量
var Products_count;
// 預設頁數 頁數從0開始，0=第一頁
var page = 0
var page_ul_li = document.querySelectorAll('#page_ul li')

// 
var active_num = 0
//  紀錄是哪一個點擊，li點擊= true，page點擊= false ，
// 用意是在li點擊的話 page要規
var whoclick = false

const shop_menu = [
    {
        Products_id: 1,
        Products_title: '龍眼蜂蜜',
        Products_inf: [
            {
                Products_img: './img/buy/shop_01/1.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '700g-( 全售完!!)',
                Products_escription: '本蜂蜜為最新2018年""全國比賽”"特等獎”"蜂蜜!!皆貼有行政院農業委員會苗栗農業改良場所核發的封條',
                Products_price: '1,000',

            },
            {
                Products_img: './img/buy/shop_01/2.jpg',
                Products_name: '龍眼蜂蜜',
                Products_comment: '超值組合!!',
                Products_escription: '比賽蜜*3+蜂蜜醋*3　優惠組合搶鮮上市!!!2018全國蜂蜜評鑑比賽”特等獎”',
                Products_price: '4,260',

            },
            {
                Products_img: './img/buy/shop_01/3.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '特惠4瓶一組優惠價! !(單瓶)',
                Products_escription: '2018年全國龍眼蜂蜜評鑑比賽 ”特等獎”蜂蜜將由主辦單位派員監督分裝、數量有限。',
                Products_price: '1,000',

            },
            {
                Products_img: './img/buy/shop_01/4.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '700g/單瓶',
                Products_escription: ' 2017"頭等獎"蜂蜜{全國蜂蜜評鑑比賽}',
                Products_price: '1,980',

            },
            {
                Products_img: './img/buy/shop_01/5.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '天然龍眼蜂蜜 500g/單瓶',
                Products_escription: '精選龍眼蜂蜜,口感濃郁香淳,天然採收數量有限,定期檢驗，證實為無抗生素殘留、無污染物。SGS檢驗, 品質超越 驗證及國家標準',
                Products_price: '500',

            },
            {
                Products_img: './img/buy/shop_01/6.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '天然龍眼蜂蜜/單瓶',
                Products_escription: '採收最新鮮天然龍眼蜂蜜,口感濃郁香淳,天然採收數量有限, 100%天然純正蜂蜜',
                Products_price: '1,200',

            },
            {
                Products_img: './img/buy/shop_01/7.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '天然龍眼蜂蜜1800g',
                Products_escription: '2018最新鮮採收之天然龍眼蜂蜜,口感濃郁香淳,天然採收數量有限',
                Products_price: '4,500',

            },
            {
                Products_img: './img/buy/shop_01/8.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '天然龍眼蜂蜜-3000g(限量售~~)/單桶',
                Products_escription: '2018採收最新鮮之龍眼蜂蜜,口感濃郁香淳,天然採收數量有限',
                Products_price: '2,000',

            },
            {
                Products_img: './img/buy/shop_01/9.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '天然龍眼蜂蜜-3000g/3桶',
                Products_escription: '龍眼蜂蜜(特惠組)採收最新鮮精選龍眼蜂蜜,口感濃郁香淳,天然採收數量有(限量售)!!',
                Products_price: '5,700',

            },
            {
                Products_img: './img/buy/shop_01/10.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '特選-龍眼蜂蜜 1800g/單瓶',
                Products_escription: '採收最新鮮天然龍眼蜂蜜,口感濃郁香淳,天然採收數量有限(2018新鮮上市!!)',
                Products_price: '1,200',

            },
            {
                Products_img: './img/buy/shop_01/11.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '特選龍眼蜂蜜920/單瓶',
                Products_escription: '自產自銷，經嚴格衛生及品質管制所生產之純正蜂蜜並長期外銷日本，品質最為可靠,定期檢驗，證實為無抗生素殘留、無污染物。',
                Products_price: '850',

            },
            {
                Products_img: './img/buy/shop_01/12.png',
                Products_name: '龍眼蜂蜜',
                Products_comment: '天然龍眼蜂蜜-3000g原價：6000元/3瓶',
                Products_escription: '採收最新鮮精選龍眼蜂蜜,口感濃郁香淳,天然採收數量有限(特惠組)',
                Products_price: '5,700',

            },
        ]
    },
    {
        Products_id: 2,
        Products_title: '特產蜂蜜',
        Products_inf: [
            {
                Products_img: './img/buy/shop_02/1.png',
                Products_name: '雄蜂子',
                Products_comment: '天然百花蜂蜜 5台斤(新鮮上市)3000g/單瓶',
                Products_escription: '風味獨特,酸酸甜甜,如戀愛般的滋味,加水稀釋有清爽獨特花香的蜂蜜水 (本蜂蜜為較易結晶的蜂蜜)',
                Products_price: '1,200',

            },
            {
                Products_img: './img/buy/shop_02/2.png',
                Products_name: '雄蜂子',
                Products_comment: '天然百花蜂蜜-特惠組(新鮮上市~ !!)原價：3600元/3瓶',
                Products_escription: '蜜鄉-天然蜂蜜(特惠組)採收新鮮精選百花蜂蜜,口感濃郁香淳,天然採收數量有限',
                Products_price: '3,200',

            },
            {
                Products_img: './img/buy/shop_02/3.png',
                Products_name: '雄蜂子',
                Products_comment: '百花花蜜(特選)920g/單瓶',
                Products_escription: '百花花蜜 為每年春季及秋季時採收之100%純蜂蜜，蜂蜜嚐起來，帶點微酸香甜味',
                Products_price: '750',

            },
            {
                Products_img: './img/buy/shop_02/4.png',
                Products_name: '雄蜂子',
                Products_comment: '典藏冬蜜 420g/單瓶',
                Products_escription: '為蜜蜂在冬至前後所採集的冬季蜂蜜,口感綿密濃淳冬天時各種耐寒植物的花蜜，且氣候濕冷，能採收的數量有限，因此冬蜜格外珍貴。',
                Products_price: '520',

            },
            {
                Products_img: './img/buy/shop_02/5.png',
                Products_name: '雄蜂子',
                Products_comment: '咸豐草蜂蜜 600g/單瓶',
                Products_escription: '台灣本產夏季咸豐草蜂蜜,口感清香,酸甜可口,本品為蜜鄉養蜂園外銷到日本暢銷蜂蜜本產品可另提供提盒包裝,請先告知!',
                Products_price: '無售價',

            },
            {
                Products_img: './img/buy/shop_02/6.png',
                Products_name: '雄蜂子',
                Products_comment: '咸豐草蜂蜜920g/單瓶',
                Products_escription: '蜜鄉養蜂園-百花花蜜 為每年春季及秋季時採收之100%純蜂蜜，蜂蜜嚐起來，帶點微酸香甜味',
                Products_price: '750',

            },
            {
                Products_img: './img/buy/shop_02/7.png',
                Products_name: '雄蜂子',
                Products_comment: '特產蜂蜜-特惠組(新鮮上市~ ~)原價：4000元/3瓶',
                Products_escription: '採收之最新鮮百花,荔枝蜂蜜,口感濃郁香淳,天然採收數量有限',
                Products_price: '無售價',

            },
            {
                Products_img: './img/buy/shop_02/8.png',
                Products_name: '雄蜂子',
                Products_comment: '荔枝(玉荷包)花蜜(特選)920g(新蜜上市)/ 單瓶',
                Products_escription: '蜜鄉養蜂園-荔枝花蜜 為每年春季採收之100%純蜂蜜，蜂蜜嚐起來，帶點淡雅花香的蜂蜜',
                Products_price: '750',

            },
            {
                Products_img: './img/buy/shop_02/9.png',
                Products_name: '雄蜂子',
                Products_comment: '荔枝(玉荷包)蜂蜜(新鮮上市)/單瓶',
                Products_escription: '2018新鮮採收之荔枝蜂蜜,口感清香香甜,加水稀釋有淡淡花香的蜂蜜水(本蜂蜜為較易結晶的蜂蜜)',
                Products_price: '1,200',

            },
            {
                Products_img: './img/buy/shop_02/10.png',
                Products_name: '雄蜂子',
                Products_comment: '黃金咸豐草蜂蜜 (家庭號)3000g/單瓶',
                Products_escription: '野花蜜-為蜜鄉養蜂園春季採收山林間之野花百草蜂蜜,風味獨特,加水稀釋有淡淡獨特花香的蜂蜜水   (本蜂蜜為較易結晶的蜂蜜)',
                Products_price: '1,600',

            },
            {
                Products_img: './img/buy/shop_02/11.png',
                Products_name: '雄蜂子',
                Products_comment: '厚皮香蜂蜜 (玻璃瓶裝) 600g',
                Products_escription: '厚皮香蜜又稱紅柴蜜香味十分特殊為蜜蜂在過年後所刻意採集的特殊季節蜂蜜;搖蜜採收時,陣陣香味撲鼻而來,凜冽清香,嚐過忘滋味 ',
                Products_price: '600',

            },
        ]
    },
    {
        Products_id: 3,
        Products_title: '蜂蜜抹醬',
        Products_inf: [
            {
                Products_img: './img/buy/shop_03/1.png',
                Products_name: '雄蜂子',
                Products_comment: '荔枝蜂蜜 310g/單瓶',
                Products_escription: '自產自銷，經嚴格衛生及品質管制所生產之純正蜂蜜，並有外銷日本國，品質最為可靠。',
                Products_price: '280',

            },
            {
                Products_img: './img/buy/shop_03/2.png',
                Products_name: '雄蜂子',
                Products_comment: '特選(限量)龍眼蜂蜜310g/單瓶',
                Products_escription: '以低溫真空濃縮滅菌處理去除水分，更保有蜂蜜原有營養素之活性及香味，符合外銷日本高品質且超過國家甲級蜂蜜品質標準。',
                Products_price: '330',

            },
            {
                Products_img: './img/buy/shop_03/3.png',
                Products_name: '雄蜂子',
                Products_comment: '柳橙蜂蜜 310g/單瓶',
                Products_escription: '100%天然純正蜂蜜本園蜜蜂採收後，定期檢驗，證實為無抗生素殘留、無污染物、合乎國家標準。',
                Products_price: '280',

            }
        ]
    },
    {
        Products_id: 4,
        Products_title: '外銷蜂王乳',
        Products_inf: [
            {
                Products_img: './img/buy/shop_04/1.png',
                Products_name: '雄蜂子',
                Products_comment: '外銷頂級(48-60hr)-蜂王乳500g/單瓶',
                Products_escription: '嚴選外銷日本頂級蜂王乳日本商會技術合作，最新超低溫技術乾燥冷涷萃取內含高單位葵稀酸，養顏美容聖品。',
                Products_price: '1,980',

            },
            {
                Products_img: './img/buy/shop_04/2.png',
                Products_name: '雄蜂子',
                Products_comment: '精緻禮盒裝-生鮮蜂王乳500g/單瓶',
                Products_escription: '自產自銷,外銷日本30餘年,品質優異最可靠.最自然的農法-蜂王乳的成份最為完整',
                Products_price: '1,700',

            },
            {
                Products_img: './img/buy/shop_04/3.png',
                Products_name: '雄蜂子',
                Products_comment: '自然農法特級-生鮮蜂王乳500g/單瓶',
                Products_escription: '蜜蜂取大自然花蜜,花粉作為製作蜂王乳之養份不定期的將產品送檢,維持產品的高品質',
                Products_price: '1,500',

            },
        ]
    },
    {
        Products_id: 5,
        Products_title: '蜂王乳膠囊',
        Products_inf: [
            {
                Products_img: './img/buy/shop_05/1.png',
                Products_name: '雄蜂子',
                Products_comment: '頂級-蜂王乳膠囊 (特價品) 120顆/盒',
                Products_escription: '蜂王乳連續外銷日本30餘年，品質優異最可靠蜂王乳、蜂蜜經過台灣養蜂協會驗證、與屏科大檢驗通過',
                Products_price: '1,980',

            },
            {
                Products_img: './img/buy/shop_05/2.png',
                Products_name: '雄蜂子',
                Products_comment: '頂級-蜂王乳膠囊(限量回饋組)NT$4960',
                Products_escription: '嚴選外銷日本頂級蜂王乳，日本商會技術合作，最新超低溫技術乾燥冷涷萃取，外銷日本暢銷天然食品',
                Products_price: '4,560',

            },
            {
                Products_img: './img/buy/shop_05/3.png',
                Products_name: '雄蜂子',
                Products_comment: '蜂王乳膠囊120顆/盒',
                Products_escription: '蜂王乳連續外銷日本30餘年，品質優異最可靠，安全、衛生、高品質是我們誠信的保証。',
                Products_price: '1,500',

            }
        ]
    },
    {
        Products_id: 6,
        Products_title: '雄蜂子',
        Products_inf: [
            {
                Products_img: './img/buy/shop_06/1.png',
                Products_name: '雄蜂子',
                Products_comment: '60顆/鋁片包裝/組',
                Products_escription: '外銷日本 (21日齡) 雄蜂子 ，，以嚴格的衛生與生產管理，並持續研究與創新，連續外銷日本30餘年，品質備受信賴',
                Products_price: '1,100',

            },
            {
                Products_img: './img/buy/shop_06/2.png',
                Products_name: '雄蜂子',
                Products_comment: '(21日齡)90顆/瓶',
                Products_escription: '???',
                Products_price: '1,600',

            },
            {
                Products_img: './img/buy/shop_06/3.png',
                Products_name: '雄蜂子',
                Products_comment: '(21日齡)120顆/瓶',
                Products_escription: '外銷日本 (21日齡) 雄蜂子 ，，以嚴格的衛生與生產管理，並持續研究與創新，連續外銷日本30餘年，品質備受信賴',
                Products_price: '1,980?',

            },
            {
                Products_img: './img/buy/shop_06/4.png',
                Products_name: '雄蜂子',
                Products_comment: '120顆/鋁片包裝/組',
                Products_escription: '引進日本最新超低溫乾燥冷涷萃取技術，完整保存蜂子的活性，以嚴格的衛生與生產管理，並持續研究與創新',
                Products_price: '1,980',

            },
        ]
    },
    {
        Products_id: 7,
        Products_title: '女王蜂子',
        Products_inf: [
            {
                Products_img: './img/buy/shop_07/1.png',
                Products_name: '雄蜂子',
                Products_comment: '蜂の優 女王蜂子膠囊120顆/盒',
                Products_escription: '外銷日本 (7.5日齡) 女王蜂子的氨基酸、礦物營養素最多，含有人體必需的8種氨基酸，尤其麩氨酸及天門冬氨酸含量多，豐富的維生素A及D',
                Products_price: '1,500',

            }, {
                Products_img: './img/buy/shop_07/2.png',
                Products_name: '雄蜂子',
                Products_comment: '蜂子粉(120顆/盒)',
                Products_escription: '蜂子粉的氨基酸、礦物營養素最多,多種微量元素如硒、鈷、鉻等、幾丁質（甲殼素）、多種生物酵素及昆蟲生長激素等多種有益人體的成分。 ',
                Products_price: '1,500',

            }, {
                Products_img: './img/buy/shop_07/3.png',
                Products_name: '雄蜂子',
                Products_comment: '蜂子粉(單瓶) 120顆/瓶',
                Products_escription: '蜂子粉的氨基酸、礦物營養素最多,多種微量元素如硒、鈷、鉻等、幾丁質（甲殼素）、多種生物酵素及昆蟲生長激素等多種有益人體的成分。',
                Products_price: '1,500',

            },

        ]
    },
    {
        Products_id: 8,
        Products_title: '原體蜂花粉',
        Products_inf: [
            {
                Products_img: './img/buy/shop_08/1.png',
                Products_name: '雄蜂子',
                Products_comment: '天然百花粉300g/單瓶',
                Products_escription: '採收時，分多次採集(品質、成本較高方式)，避免生鮮花粉受到外界野生酵母及細菌的污染，增加花粉的鮮度,保留其活性。',
                Products_price: '500',

            },
            {
                Products_img: './img/buy/shop_08/2.png',
                Products_name: '雄蜂子',
                Products_comment: '天然茶花粉300g/單瓶',
                Products_escription: '低溫乾燥,花粉的營養元素不致流失, 本園花粉不僅經過機器殺菌並多加人工方式精挑細選的去除雜質，增加花粉的品質衛生和保存期限。',
                Products_price: '500',

            },

        ]
    },
    {
        Products_id: 9,
        Products_title: '破壁蜂花粉',
        Products_inf: [
            {
                Products_img: './img/buy/shop_09/1.png',
                Products_name: '雄蜂子',
                Products_comment: '精粹花粉(埔鹽花)240g',
                Products_escription: '花粉含大量綜合維生素及蛋白質、和多種礦物質，為大自然中最完美的營養食品。',
                Products_price: '1,200',

            },
            {
                Products_img: './img/buy/shop_09/2.png',
                Products_name: '雄蜂子',
                Products_comment: '小分子研磨花粉280g',
                Products_escription: '嚴選 2小時採收一次的高山花粉天然花粉粉碎而成，須冷凍保存',
                Products_price: '900',

            },

        ]
    },
    {
        Products_id: 10,
        Products_title: '蜂膠',
        Products_inf: [
            {
                Products_img: './img/buy/shop_10/1.png',
                Products_name: '雄蜂子',
                Products_comment: '蜂膠膠囊(60顆)',
                Products_escription: '嚴選頂級台灣綠蜂膠，2013年全國十大神農,創新研發產品，SGS檢驗合格,高倍含量較果佳 ',
                Products_price: '2,000',

            },
            {
                Products_img: './img/buy/shop_10/2.png',
                Products_name: '雄蜂子',
                Products_comment: '台灣綠蜂膠-(滴劑)30ml/單瓶',
                Products_escription: '使用高品質台灣綠蜂膠為原料，與日本(株)商會技術合作，先進採膠技術萃取出蜂膠有效成份，及經過多次精煉，蜂膠液保留原蜂膠的芬多精芬香及類黃酮的膠性。',
                Products_price: '1,500',

            },

        ]
    },
    {
        Products_id: 11,
        Products_title: '純釀蜂蜜醋',
        Products_inf: [
            {
                Products_img: './img/buy/shop_11/1.png',
                Products_name: '雄蜂子',
                Products_comment: '蜂蜜活醋',
                Products_escription: '醋是最優良的鹼性食品，天然釀造，有自然[沉澱物，屬自然現象其味自然芬芳，入口柔順甘醇微酸甜，每日適量飲用，常保身體健康。',
                Products_price: '800',

            },
            {
                Products_img: './img/buy/shop_11/2.png',
                Products_name: '雄蜂子',
                Products_comment: '緻禮盒裝-蜂蜜活醋400ml/瓶',
                Products_escription: '健康追求選台灣頂極甘醇蜂蜜釀製，遵循傳統釀醋工法，過程完全不添加酒精製造，蜂蜜醋自然純熟風味，更被視為養生追求者的最佳健康飲品。',
                Products_price: '420',

            },

        ]
    },
    {
        Products_id: 12,
        Products_title: '甜蜜伴手禮',
        Products_inf: [
            {
                Products_img: './img/buy/shop_12/1.png',
                Products_name: '雄蜂子',
                Products_comment: '(精選)荔枝蜂蜜 820g',
                Products_escription: '天然蜂蜜:不定期檢驗，證實為無抗生素殘留、無污染物、合乎國家標準',
                Products_price: '800',

            },
            {
                Products_img: './img/buy/shop_12/2.png',
                Products_name: '雄蜂子',
                Products_comment: '(精選)-龍眼蜂蜜820g',
                Products_escription: '天然蜂蜜:符合外銷日本高品質且超過國家甲級蜂蜜品質標準。',
                Products_price: '900',

            },
        ]
    }

]

if (location.href.indexOf('?') != -1) {
    var ary1 = location.href.split('?');
    var ary2 = ary1[1].split('&');
    var ary3 = ary2[0].split('=');
    li_num = ary3[1]
    Products_id = li_num
    add_second_li_color(li_num)
    parseInt(li_num)
    chagne_menu(parseInt(li_num))
} else {
    add_second_li_color(0)
    chagne_menu(0)
}

// 紀錄沒有子層的數量
var nochild_count = 0;
// 展開所有子層
for (let i = 0; i < first_li_btn.length; i++) {
    //檢查是否有第二層，回傳直不等於-1 則是有第二層
    var firs_li_Child = first_li_btn[i].innerHTML.indexOf('ul');
    if (firs_li_Child != -1) {
        // 檢查第二層有多少li
        var childCount = second_ul[i - nochild_count].childElementCount;
        // 取得一個li的高度
        var childHeight = second_li[i - nochild_count].offsetHeight;
        // li的數量 * 單一li的高度
        var newHeight = childCount * childHeight
        // 將數值設定到ul的高度
        second_ul[i - nochild_count].style.height = newHeight + "px"

    } else {
        nochild_count++
    }
}
// 因為蜂膠沒有子層，但是有內容，所以單獨出來寫
first_li_btn[4].onclick = function () {
    chagne_menu(99)
}
for (let i = 0; i < second_li.length; i++) {
    const element = second_li[i];
    element.onclick = function () {
        active_num = 0
        page = 0
        add_second_li_color(i)
        Products_id = i
        chagne_menu(i)
    }
}


function chagne_menu(num) {


    // 清除全部內容
    shop_item_group.innerHTML = ''
    // 商品數量
    if (num == '99') {
        num = '9'
    } else if (num >= 9) {
        num = num + 1
    }
    console.log(num);

    Products_title.innerHTML = shop_menu[num].Products_title
    Products_count = shop_menu[num].Products_inf.length;

    if (Products_count > max_Products_count) {
        page_ul.style.display = 'flex'
        page_li_count(Products_count)
        // 整數
        var Integer = parseInt(Products_count / max_Products_count)
        // 餘數  11 % 4   2  ... 3
        var remainder = Products_count % max_Products_count
        // var range = Products_count / max_Products_count
        parseInt(page)
        if (max_Products_count * (parseInt(Math.ceil(page)) + 1) <= Products_count) {

            for (var i = 0; i < max_Products_count; i++) {
                const element = shop_menu[num].Products_inf[max_Products_count * page + i];
                shop_item_group.innerHTML += `
                    <div class="item">
                        <div class="pic">
                            <img src="${element.Products_img}" alt="" width="100%">
                        </div>
                        <div class="txt">
                            <p>
                                <span class='comment'>${element.Products_comment}</span>
                            </p>
                            <span class="escription">
                                ${element.Products_escription}
                            </span>
                            <span class="price">ＮＴ.${element.Products_price}</span>
                            <span class="btn" onclick="window.open('http://www.honeyhome.com.tw/m/p2.html');">加入購物車</span>
                        </div>
                    </div>`;
            }
            
        } else {
            for (var i = 0; i < remainder; i++) {
                const element = shop_menu[num].Products_inf[max_Products_count * page + i];
                shop_item_group.innerHTML += `
                    <div class="item">
                        <div class="pic">
                            <img src="${element.Products_img}" alt="" width="100%">
                        </div>
                        <div class="txt">
                            <p>
                                <span class='comment'>${element.Products_comment}</span>
                            </p>
                            <span class="escription">
                                ${element.Products_escription}
                            </span>
                            <span class="price">ＮＴ.${element.Products_price}</span>
                            <span class="btn" onclick="window.open('http://www.honeyhome.com.tw/m/p2.html');">加入購物車</span>
                        </div>
                    </div>`;
            }
        }

    } else {
        page_ul.style.display = 'none'
        for (let i = 0; i < Products_count; i++) {
            const element = shop_menu[num].Products_inf[i];
            shop_item_group.innerHTML += `
                    <div class="item">
                        <div class="pic">
                            <img src="${element.Products_img}" alt="" width="100%">
                        </div>
                        <div class="txt">
                            <p>
                                <span class='comment'>${element.Products_comment}</span>
                            </p>
                            <span class="escription">
                                ${element.Products_escription}
                            </span>
                            <span class="price">ＮＴ.${element.Products_price}</span>
                            <span class="btn" onclick="window.open('http://www.honeyhome.com.tw/m/p2.html');">加入購物車</span>
                        </div>
                    </div>`;
        }
    }
}
// 添加頁數所需數量
function page_li_count(num) {
    console.log(num);

    const li_count = Math.ceil(num / max_Products_count)
    page_ul.innerHTML = ''
    page_ul.innerHTML += `
            <li id="first"><img src="./img/buy/page/first.png" alt=""></li>
            <li id="pref"><img src="./img/buy/page/prev.png" alt=""></li>
            `
    for (let i = 0; i < li_count; i++) {
        if (i == active_num) {
            page_ul.innerHTML += `
                    <li id="${i}" class='active'>${i + 1}</li>
                `
        } else {
            page_ul.innerHTML += `
                    <li id="${i}">${i + 1}</li>
                `
        }
    }
    page_ul.innerHTML += `
            <li id="next"><img src="./img/buy/page/next.png" alt=""></li>
            <li id="last"><img src="./img/buy/page/last.png" alt=""></li>
            `
    page_liHendler()
}

function page_liHendler() {
    page_ul_li = document.querySelectorAll('#page_ul li')
    for (let i = 0; i < page_ul_li.length; i++) {
        const element = page_ul_li[i];
        element.onclick = function () {
            var range = Products_count / max_Products_count
            if (element.id == 'first') {
                // 回到第一頁
                page = 0
                active_num = page
                chagne_menu(Products_id)
            } else if (element.id == 'pref' && page != 0) {
                // 上一頁
                page--
                active_num = page
                chagne_menu(Products_id)
            } else if (element.id == 'next' && page < range - 1) {
                // 下一頁
                page++
                active_num = page
                chagne_menu(Products_id)
            } else if (element.id == 'last') {
                // 最後一頁
                page = range - 1
                active_num = Math.ceil(page)
                chagne_menu(Products_id)

            } else if (element.id != 'pref' && element.id != 'next') {
                page = element.id
                active_num = page
                chagne_menu(Products_id)
            }
        }
    }
}
// 新增顏色
function add_second_li_color(num) {
    clearAll()
    if (num != 99) {
        second_li[num].classList.add('active')
    }
}
// 清除顏色
function clearAll() {
    for (let i = 0; i < second_li.length; i++) {
        second_li[i].classList.remove('active')
    }
}