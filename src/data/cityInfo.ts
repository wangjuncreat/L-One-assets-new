// 城市附加信息数据 - 新闻、游记、图片等
// 用于实时更新城市信息

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  summary: string;
}

export interface TravelGuide {
  id: string;
  title: string;
  author?: string;
  date: string;
  content: string;
  tags: string[];
}

export interface CityImage {
  id: string;
  title: string;
  url: string;
  photographer?: string;
  description?: string;
}

export interface CityInfo {
  cityId: number;
  cityName: string;
  news: NewsItem[];
  travelGuides: TravelGuide[];
  images: CityImage[];
  practicalInfo: {
    bestSeason: string;
    transportTips: string;
    foodRecommendations: string[];
    hiddenGems: string[];
  };
}

export const cityInfoData: CityInfo[] = [
  {
    cityId: 1,
    cityName: '北京',
    news: [
      {
        id: 'news-001',
        title: '2026年北京十大热门景点及攻略',
        source: '今日头条',
        date: '2026-01-15',
        url: 'http://m.toutiao.com/group/7615797912227889714/',
        summary: '故宫博物院2026年新增宫廷文化沉浸式体验展，八达岭长城、颐和园等热门景点推荐'
      },
      {
        id: 'news-002',
        title: '北京旅游全攻略超详细景点门票时间表',
        source: '今日头条',
        date: '2025-12-20',
        url: 'http://m.toutiao.com/group/7603364523445109283/',
        summary: '天安门广场5:00-22:00，故宫8:30-17:00，天坛公园6:00-21:00等景点开放时间汇总'
      },
      {
        id: 'news-003',
        title: '2025北京旅游必打卡景点全攻略',
        source: '搜狐',
        date: '2025-11-10',
        url: 'https://www.sohu.com/a/898774113_122260725',
        summary: '5天4晚经典行程，带你畅游北京经典景点和美食'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '北京5天4晚精华路线推荐',
        author: '资深驴友',
        date: '2025-12-01',
        content: 'Day1: 天安门广场升旗 → 故宫深度游\nDay2: 八达岭长城 → 奥林匹克公园\nDay3: 颐和园 → 圆明园\nDay4: 天坛 → 南锣鼓巷 → 什刹海\nDay5: 北海公园 → 王府井',
        tags: ['经典路线', '5日游', '必玩']
      },
      {
        id: 'guide-002',
        title: '故宫深度游必看珍宝馆',
        author: '旅游达人',
        date: '2025-11-15',
        content: '推荐路线：午门 → 武英殿(陶瓷馆) → 中轴线三大殿 → 珍宝馆(必看金瓯永固杯) → 钟表馆\n珍宝馆门票：10元，钟表馆门票：10元',
        tags: ['故宫', '深度游', '文物']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '故宫角楼',
        url: 'https://picsum.photos/800/600?random=1',
        description: '故宫角楼夕阳'
      },
      {
        id: 'img-002',
        title: '长城秋色',
        url: 'https://picsum.photos/800/600?random=2',
        description: '八达岭长城秋天'
      },
      {
        id: 'img-003',
        title: '颐和园十七孔桥',
        url: 'https://picsum.photos/800/600?random=3',
        description: '颐和园十七孔桥金光穿洞'
      }
    ],
    practicalInfo: {
      bestSeason: '春秋季节最佳，4-5月赏花，9-10月秋高气爽',
      transportTips: '地铁四通八达，建议办一卡通；天安门需提前预约',
      foodRecommendations: [
        '四季民福烤鸭（故宫店）',
        '门框胡同百年卤煮',
        '北京烤鸭',
        '豆汁儿'
      ],
      hiddenGems: [
        '景山公园（看故宫全景）',
        '五道营胡同',
        '首钢园',
        '模式口历史文化街区'
      ]
    }
  },
  {
    cityId: 2,
    cityName: '上海',
    news: [
      {
        id: 'news-001',
        title: '2025上海旅游攻略：外滩万国建筑群',
        source: '携程',
        date: '2025-12-01',
        url: 'https://www.ctrip.com/',
        summary: '外滩陆家嘴一日游攻略'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '上海3日游经典路线',
        date: '2025-11-20',
        content: 'Day1: 外滩 → 陆家嘴 → 东方明珠\nDay2: 田子坊 → 新天地 → 徐家汇\nDay3: 豫园 → 上海博物馆 → 南京路步行街',
        tags: ['经典路线', '3日游']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '陆家嘴夜景',
        url: 'https://picsum.photos/800/600?random=10'
      }
    ],
    practicalInfo: {
      bestSeason: '四季皆宜，3-5月春暖花开',
      transportTips: '地铁是最方便的交通工具',
      foodRecommendations: ['本帮菜', '小笼包', '生煎'],
      hiddenGems: ['武康路', '愚园路', 'M50创意园']
    }
  },
  {
    cityId: 3,
    cityName: '成都',
    news: [
      {
        id: 'news-001',
        title: '2025成都旅游：火锅与熊猫的诱惑',
        source: '马蜂窝',
        date: '2025-12-05',
        url: 'https://www.mafengwo.cn/',
        summary: '成都美食与熊猫基地全攻略'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '成都休闲2日游',
        date: '2025-11-10',
        content: 'Day1: 宽窄巷子 → 锦里 → 春熙路\nDay2: 熊猫基地 → 杜甫草堂 → 九眼桥',
        tags: ['休闲游', '美食']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '熊猫基地',
        url: 'https://picsum.photos/800/600?random=20'
      }
    ],
    practicalInfo: {
      bestSeason: '春秋季节最佳',
      transportTips: '地铁+公交即可到达主要景点',
      foodRecommendations: ['火锅', '串串', '龙抄手', '麻婆豆腐'],
      hiddenGems: ['鹤鸣茶社', '望江楼公园', '东郊记忆']
    }
  },
  {
    cityId: 4,
    cityName: '西安',
    news: [
      {
        id: 'news-001',
        title: '2025西安旅游：千年古都的震撼',
        source: '马蜂窝',
        date: '2025-12-10',
        url: 'https://www.mafengwo.cn/',
        summary: '兵马俑、华清宫历史之旅'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '西安3日历史文化游',
        date: '2025-11-25',
        content: 'Day1: 兵马俑 → 华清宫\nDay2: 大雁塔 → 大唐芙蓉园 → 回民街\nDay3: 城墙 → 陕西历史博物馆 → 钟鼓楼',
        tags: ['历史', '文化', '3日游']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '兵马俑',
        url: 'https://picsum.photos/800/600?random=30'
      }
    ],
    practicalInfo: {
      bestSeason: '春秋季节最佳',
      transportTips: '地铁覆盖主要景点',
      foodRecommendations: ['肉夹馍', '羊肉泡馍', '凉皮', 'biangbiang面'],
      hiddenGems: ['永兴坊', '白鹿原', '大明宫国家遗址公园']
    }
  },
  {
    cityId: 5,
    cityName: '杭州',
    news: [
      {
        id: 'news-001',
        title: '2025杭州：西湖美景甲天下',
        source: '马蜂窝',
        date: '2025-11-28',
        url: 'https://www.mafengwo.cn/',
        summary: '西湖十景深度游'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '西湖2日悠闲游',
        date: '2025-11-15',
        content: 'Day1: 苏堤 → 白堤 → 断桥 → 湖滨步行街\nDay2: 灵隐寺 → 法喜寺 → 宋城',
        tags: ['西湖', '休闲']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '西湖',
        url: 'https://picsum.photos/800/600?random=40'
      }
    ],
    practicalInfo: {
      bestSeason: '春季（3-5月）和秋季（9-11月）',
      transportTips: '地铁+公交+单车',
      foodRecommendations: ['西湖醋鱼', '龙井虾仁', '叫化童鸡', '杭州酱鸭'],
      hiddenGems: ['云栖竹径', '九溪十八涧', '太子湾公园']
    }
  },
  {
    cityId: 6,
    cityName: '重庆',
    news: [
      {
        id: 'news-001',
        title: '2025重庆：魔幻8D城市的魅力',
        source: '携程',
        date: '2025-12-08',
        url: 'https://www.ctrip.com/',
        summary: '洪崖洞、长江索道打卡攻略'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '重庆3日魔幻之旅',
        date: '2025-11-20',
        content: 'Day1: 解放碑 → 洪崖洞 → 千厮门大桥\nDay2: 长江索道 → 南山一棵树 → 南滨路\nDay3: 磁器口古镇 → 白公馆 → 渣子洞',
        tags: ['魔幻', '3日游']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '洪崖洞',
        url: 'https://picsum.photos/800/600?random=50'
      }
    ],
    practicalInfo: {
      bestSeason: '春秋季节最佳',
      transportTips: '轻轨是最佳选择，注意导航会出错',
      foodRecommendations: ['火锅', '小面', '酸辣粉', '江湖菜'],
      hiddenGems: ['鹅岭二厂', '山城步道', '川外小铁路']
    }
  },
  {
    cityId: 7,
    cityName: '南京',
    news: [
      {
        id: 'news-001',
        title: '2025南京：六朝古都的历史底蕴',
        source: '马蜂窝',
        date: '2025-12-02',
        url: 'https://www.mafengwo.cn/',
        summary: '中山陵、夫子庙文化之旅'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '南京2日历史游',
        date: '2025-11-18',
        content: 'Day1: 中山陵 → 明孝陵 → 南京总统府\nDay2: 夫子庙 → 秦淮河 → 雨花台',
        tags: ['历史', '2日游']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '中山陵',
        url: 'https://picsum.photos/800/600?random=60'
      }
    ],
    practicalInfo: {
      bestSeason: '春季和秋季',
      transportTips: '地铁+公交',
      foodRecommendations: ['盐水鸭', '鸭血粉丝汤', '皮肚面', '糕团'],
      hiddenGems: ['颐和路', '老门东', '南京博物院']
    }
  },
  {
    cityId: 9,
    cityName: '广州',
    news: [
      {
        id: 'news-001',
        title: '2025广州：岭南文化的独特魅力',
        source: '马蜂窝',
        date: '2025-12-06',
        url: 'https://www.mafengwo.cn/',
        summary: '珠江夜游、粤菜美食攻略'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '广州2日美食游',
        date: '2025-11-22',
        content: 'Day1: 陈家祠 → 上下九步行街 → 沙面\nDay2: 广州塔 → 珠江夜游 → 北京路步行街',
        tags: ['美食', '2日游']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '广州塔',
        url: 'https://picsum.photos/800/600?random=70'
      }
    ],
    practicalInfo: {
      bestSeason: '10-12月最佳',
      transportTips: '地铁四通八达',
      foodRecommendations: ['早茶', '烧腊', '肠粉', '煲仔饭'],
      hiddenGems: ['东山口', '沙面岛', '太古仓']
    }
  },
  {
    cityId: 10,
    cityName: '深圳',
    news: [
      {
        id: 'news-001',
        title: '2025深圳：改革开放的前沿城市',
        source: '携程',
        date: '2025-12-04',
        url: 'https://www.ctrip.com/',
        summary: '世界之窗、欢乐谷打卡攻略'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '深圳2日都市游',
        date: '2025-11-25',
        content: 'Day1: 世界之窗 → 欢乐谷 → 海上世界\nDay2: 东部华侨城 → 大梅沙海滨公园 → 海岸城',
        tags: ['都市', '主题公园']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '世界之窗',
        url: 'https://picsum.photos/800/600?random=80'
      }
    ],
    practicalInfo: {
      bestSeason: '10-12月最佳',
      transportTips: '地铁发达',
      foodRecommendations: ['椰子鸡', '潮汕牛肉火锅', '粤菜'],
      hiddenGems: ['华侨城创意园', '较场尾', '深圳湾公园']
    }
  },
  {
    cityId: 11,
    cityName: '武汉',
    news: [
      {
        id: 'news-001',
        title: '2025武汉：英雄城市的春天',
        source: '马蜂窝',
        date: '2025-12-07',
        url: 'https://www.mafengwo.cn/',
        summary: '樱花季黄鹤楼打卡攻略'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '武汉2日樱花游',
        date: '2025-11-28',
        content: 'Day1: 黄鹤楼 → 户部巷 → 长江大桥\nDay2: 武汉大学 → 东湖樱园 → 昙华林',
        tags: ['樱花', '历史']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '黄鹤楼',
        url: 'https://picsum.photos/800/600?random=90'
      }
    ],
    practicalInfo: {
      bestSeason: '3-4月赏樱最佳',
      transportTips: '地铁+公交',
      foodRecommendations: ['热干面', '豆皮', '鸭脖', '武昌鱼'],
      hiddenGems: ['昙华林', '古德寺', '汉正街']
    }
  },
  {
    cityId: 12,
    cityName: '长沙',
    news: [
      {
        id: 'news-001',
        title: '2025长沙：娱乐之都的湘菜魅力',
        source: '马蜂窝',
        date: '2025-12-09',
        url: 'https://www.mafengwo.cn/',
        summary: '橘子洲头、岳麓山游玩攻略'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '长沙2日美食游',
        date: '2025-11-30',
        content: 'Day1: 橘子洲头 → 太平街 → 坡子街\nDay2: 岳麓山 → 湖南大学 → 超级文和友',
        tags: ['美食', '娱乐']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '橘子洲头',
        url: 'https://picsum.photos/800/600?random=100'
      }
    ],
    practicalInfo: {
      bestSeason: '春秋季节最佳',
      transportTips: '地铁+公交',
      foodRecommendations: ['辣椒炒肉', '口味虾', '臭豆腐', '糖油粑粑'],
      hiddenGems: ['潮宗街', '谢子龙影像艺术馆', '后湖艺术区']
    }
  },
  {
    cityId: 13,
    cityName: '天津',
    news: [
      {
        id: 'news-001',
        title: '2025天津：近代历史的缩影',
        source: '携程',
        date: '2025-12-03',
        url: 'https://www.ctrip.com/',
        summary: '五大道、津门故里打卡攻略'
      }
    ],
    travelGuides: [
      {
        id: 'guide-001',
        title: '天津1日悠闲游',
        date: '2025-11-26',
        content: 'Day1: 意大利风情区 → 古文化街 → 天津之眼 → 五大道',
        tags: ['近代历史', '1日游']
      }
    ],
    images: [
      {
        id: 'img-001',
        title: '天津之眼',
        url: 'https://picsum.photos/800/600?random=110'
      }
    ],
    practicalInfo: {
      bestSeason: '春秋季节最佳',
      transportTips: '地铁+出租',
      foodRecommendations: ['狗不理包子', '麻花', '耳朵眼炸糕', '煎饼果子'],
      hiddenGems: ['瓷房子', '西开教堂', '解放北路']
    }
  }
];

// 根据城市ID获取城市附加信息
export function getCityInfoById(cityId: number): CityInfo | undefined {
  return cityInfoData.find(info => info.cityId === cityId);
}
