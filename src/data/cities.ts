// 中国热门城市数据，包含详细的信息维度
export interface City {
  id: number;
  name: string;
  image: string;
  coverImage: string;
  description: string;
  rating: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
  foundingYear: number;
  importance: number;
  tags: string[];
  info: {
    geo: {
      landform: string[];
      climate: string[];
      rivers: string[];
      mountains: string[];
      attractions: string[];
    };
    history: {
      events: {
        year: number;
        title: string;
        description: string;
      }[];
      culture: string[];
      figures: string[];
    };
    modern: {
      food: string[];
      intangibleHeritage: string[];
      lifestyle: string[];
      entertainment: string[];
      landmarks: string[];
    };
  };
}

export const cities: City[] = [
  {
    id: 1,
    name: '北京',
    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400',
    coverImage: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800',
    description: '中国的首都，拥有三千年历史的古都',
    rating: 4.8,
    reviewCount: 12580,
    latitude: 39.9042,
    longitude: 116.4074,
    foundingYear: -1045,
    importance: 5,
    tags: ['古都', '历史', '文化', '政治中心'],
    info: {
      geo: {
        landform: ['平原', '丘陵'],
        climate: ['温带季风气候', '四季分明'],
        rivers: ['永定河', '潮白河'],
        mountains: ['香山', '八达岭'],
        attractions: ['故宫', '长城', '颐和园', '天坛']
      },
      history: {
        events: [
          { year: -1045, title: '北京建城', description: '周武王封召公奭于燕，北京开始建城' },
          { year: 1420, title: '紫禁城建成', description: '明成祖朱棣迁都北京，紫禁城建成' },
          { year: 1949, title: '新中国成立', description: '中华人民共和国成立，北京成为首都' }
        ],
        culture: ['京剧', '相声', '北京烤鸭'],
        figures: ['曹雪芹', '老舍', '梅兰芳']
      },
      modern: {
        food: ['北京烤鸭', '炸酱面', '豆汁儿', '卤煮'],
        intangibleHeritage: ['京剧', '景泰蓝制作技艺'],
        lifestyle: ['晨练', '逛公园', '胡同文化'],
        entertainment: ['德云社', '国家大剧院', '798艺术区'],
        landmarks: ['天安门', '鸟巢', '水立方', '故宫']
      }
    }
  },
  {
    id: 2,
    name: '上海',
    image: 'https://images.unsplash.com/photo-1548585744-b5e9e8012c00?w=400',
    coverImage: 'https://images.unsplash.com/photo-1548585744-b5e9e8012c00?w=800',
    description: '国际化大都市，东方的巴黎',
    rating: 4.7,
    reviewCount: 18230,
    latitude: 31.2304,
    longitude: 121.4737,
    foundingYear: 751,
    importance: 5,
    tags: ['国际化', '摩登', '金融', '海派文化'],
    info: {
      geo: {
        landform: ['平原', '三角洲'],
        climate: ['亚热带季风气候', '湿润'],
        rivers: ['黄浦江', '苏州河'],
        mountains: [],
        attractions: ['外滩', '东方明珠', '豫园', '田子坊']
      },
      history: {
        events: [
          { year: 751, title: '上海建镇', description: '唐朝设立华亭县，上海开始发展' },
          { year: 1842, title: '上海开埠', description: '《南京条约》签订，上海成为通商口岸' },
          { year: 1990, title: '浦东新区开发', description: '国务院批准开发开放浦东新区' }
        ],
        culture: ['海派文化', '江南文化', '弄堂文化'],
        figures: ['鲁迅', '茅盾', '张爱玲']
      },
      modern: {
        food: ['小笼包', '生煎包', '排骨年糕', '红烧肉'],
        intangibleHeritage: ['沪剧', '顾绣'],
        lifestyle: ['夜生活', '咖啡文化', '购物'],
        entertainment: ['外滩夜景', '迪士尼乐园', '新天地'],
        landmarks: ['东方明珠', '上海中心', '外滩万国建筑']
      }
    }
  },
  {
    id: 3,
    name: '成都',
    image: 'https://images.unsplash.com/photo-1598323485086-f7cc8de7c86c?w=400',
    coverImage: 'https://images.unsplash.com/photo-1598323485086-f7cc8de7c86c?w=800',
    description: '天府之国，美食之都',
    rating: 4.9,
    reviewCount: 9876,
    latitude: 30.5728,
    longitude: 104.0668,
    foundingYear: -316,
    importance: 5,
    tags: ['美食', '熊猫', '慢生活', '休闲'],
    info: {
      geo: {
        landform: ['平原', '丘陵'],
        climate: ['亚热带季风气候', '湿润'],
        rivers: ['岷江', '沱江'],
        mountains: ['青城山', '西岭雪山'],
        attractions: ['都江堰', '青城山', '武侯祠', '大熊猫基地']
      },
      history: {
        events: [
          { year: -316, title: '成都建城', description: '秦国灭蜀国，设立成都县' },
          { year: 221, title: '蜀汉定都', description: '刘备建立蜀汉，定都成都' },
          { year: 1949, title: '成都解放', description: '中国人民解放军解放成都' }
        ],
        culture: ['蜀文化', '三国文化', '川菜文化'],
        figures: ['诸葛亮', '李白', '杜甫']
      },
      modern: {
        food: ['川菜', '火锅', '串串香', '兔头'],
        intangibleHeritage: ['蜀绣', '川剧变脸'],
        lifestyle: ['慢生活', '茶馆文化', '麻将文化'],
        entertainment: ['宽窄巷子', '锦里', '熊猫基地'],
        landmarks: ['武侯祠', '杜甫草堂', '成都大熊猫繁育研究基地']
      }
    }
  },
  {
    id: 4,
    name: '西安',
    image: 'https://images.unsplash.com/photo-1596825205485-90c9e88712cf?w=400',
    coverImage: 'https://images.unsplash.com/photo-1596825205485-90c9e88712cf?w=800',
    description: '十三朝古都，丝绸之路起点',
    rating: 4.8,
    reviewCount: 11234,
    latitude: 34.2658,
    longitude: 108.9541,
    foundingYear: -1046,
    importance: 5,
    tags: ['古都', '历史', '文物', '面食'],
    info: {
      geo: {
        landform: ['平原', '丘陵'],
        climate: ['温带季风气候', '四季分明'],
        rivers: ['渭河', '灞河'],
        mountains: ['骊山', '终南山'],
        attractions: ['兵马俑', '大雁塔', '城墙', '钟楼']
      },
      history: {
        events: [
          { year: -1046, title: '西安建城', description: '周武王建立镐京' },
          { year: -221, title: '秦统一中国', description: '秦始皇统一中国，定都咸阳' },
          { year: 618, title: '唐朝定都', description: '李渊建立唐朝，定都长安' }
        ],
        culture: ['周文化', '秦文化', '汉文化', '唐文化'],
        figures: ['秦始皇', '汉武帝', '唐太宗']
      },
      modern: {
        food: ['肉夹馍', '凉皮', '羊肉泡馍', 'biangbiang面'],
        intangibleHeritage: ['秦腔', '西安鼓乐'],
        lifestyle: ['历史文化游', '面食文化', '古城生活'],
        entertainment: ['兵马俑', '大雁塔', '回民街'],
        landmarks: ['兵马俑', '大雁塔', '明城墙']
      }
    }
  },
  {
    id: 5,
    name: '杭州',
    image: 'https://images.unsplash.com/photo-1537531383496-f4749a4b0d30?w=400',
    coverImage: 'https://images.unsplash.com/photo-1537531383496-f4749a4b0d30?w=800',
    description: '人间天堂，西子湖畔',
    rating: 4.9,
    reviewCount: 8765,
    latitude: 30.2741,
    longitude: 120.1551,
    foundingYear: -221,
    importance: 5,
    tags: ['西湖', '自然', '茶文化', '浪漫'],
    info: {
      geo: {
        landform: ['平原', '丘陵'],
        climate: ['亚热带季风气候', '四季分明'],
        rivers: ['钱塘江', '京杭大运河'],
        mountains: ['西湖群山', '天目山'],
        attractions: ['西湖', '灵隐寺', '千岛湖', '西溪湿地']
      },
      history: {
        events: [
          { year: -221, title: '杭州建城', description: '秦朝设立钱唐县' },
          { year: 1127, title: '南宋定都', description: '南宋迁都临安（今杭州）' },
          { year: 2016, title: 'G20峰会', description: '二十国集团领导人峰会在杭州举行' }
        ],
        culture: ['吴越文化', '西湖文化', '茶文化'],
        figures: ['白居易', '苏轼', '岳飞']
      },
      modern: {
        food: ['西湖醋鱼', '龙井虾仁', '叫花鸡', '片儿川'],
        intangibleHeritage: ['西湖龙井制作技艺', '杭州刺绣'],
        lifestyle: ['茶文化', '丝绸文化', '休闲生活'],
        entertainment: ['宋城', '西溪湿地', '杭州乐园'],
        landmarks: ['西湖', '雷峰塔', '钱塘江大桥']
      }
    }
  },
  {
    id: 6,
    name: '重庆',
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=400',
    coverImage: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800',
    description: '山城雾都，火锅之城',
    rating: 4.7,
    reviewCount: 9456,
    latitude: 29.4316,
    longitude: 106.9123,
    foundingYear: 1189,
    importance: 5,
    tags: ['火锅', '夜景', '魔幻', '美食'],
    info: {
      geo: {
        landform: ['山地', '丘陵'],
        climate: ['亚热带季风气候', '湿润'],
        rivers: ['长江', '嘉陵江'],
        mountains: ['歌乐山', '缙云山'],
        attractions: ['洪崖洞', '长江三峡', '大足石刻', '磁器口']
      },
      history: {
        events: [
          { year: 1189, title: '重庆得名', description: '宋光宗赵惇先封恭王，后即帝位，自诩"双重喜庆"，重庆由此得名' },
          { year: 1937, title: '战时首都', description: '国民政府迁都重庆，成为战时首都' },
          { year: 1997, title: '直辖市', description: '重庆成为中国第四个直辖市' }
        ],
        culture: ['巴渝文化', '火锅文化', '山城文化'],
        figures: ['巴蔓子', '邹容', '刘伯承']
      },
      modern: {
        food: ['重庆火锅', '小面', '酸辣粉', '毛血旺'],
        intangibleHeritage: ['川剧', '铜梁龙舞'],
        lifestyle: ['山城步道', '火锅文化', '夜生活'],
        entertainment: ['洪崖洞', '解放碑', '长江索道'],
        landmarks: ['解放碑', '洪崖洞', '长江三峡']
      }
    }
  },
  {
    id: 7,
    name: '广州',
    image: 'https://images.unsplash.com/photo-1569514285084-5dd0a7c7c6b9?w=400',
    coverImage: 'https://images.unsplash.com/photo-1569514285084-5dd0a7c7c6b9?w=800',
    description: '岭南明珠，千年商都',
    rating: 4.7,
    reviewCount: 8234,
    latitude: 23.1291,
    longitude: 113.2644,
    foundingYear: -214,
    importance: 5,
    tags: ['粤菜', '商业', '侨乡', '美食'],
    info: {
      geo: {
        landform: ['平原', '丘陵'],
        climate: ['亚热带季风气候', '温暖湿润'],
        rivers: ['珠江', '东江'],
        mountains: ['白云山', '越秀山'],
        attractions: ['白云山', '陈家祠', '广州塔', '沙面']
      },
      history: {
        events: [
          { year: -214, title: '广州建城', description: '秦始皇统一岭南，设立南海郡' },
          { year: 1757, title: '广州一口通商', description: '清政府规定广州为唯一对外通商口岸' },
          { year: 1978, title: '改革开放', description: '广州成为改革开放前沿城市' }
        ],
        culture: ['岭南文化', '粤菜', '粤剧'],
        figures: ['康有为', '梁启超', '孙中山']
      },
      modern: {
        food: ['粤菜', '早茶', '煲仔饭', '烧鹅'],
        intangibleHeritage: ['粤剧', '广彩瓷烧制技艺'],
        lifestyle: ['早茶文化', '夜宵文化', '粤语文化'],
        entertainment: ['广州塔', '长隆欢乐世界', '珠江夜游'],
        landmarks: ['广州塔', '陈家祠', '沙面']
      }
    }
  },
  {
    id: 8,
    name: '深圳',
    image: 'https://images.unsplash.com/photo-1556752816-8374b1f4d1aa?w=400',
    coverImage: 'https://images.unsplash.com/photo-1556752816-8374b1f4d1aa?w=800',
    description: '年轻的一线城市，科技创新之都',
    rating: 4.6,
    reviewCount: 7654,
    latitude: 22.5431,
    longitude: 114.0579,
    foundingYear: 1979,
    importance: 5,
    tags: ['科技', '创新', '年轻', '海滨'],
    info: {
      geo: {
        landform: ['丘陵', '平原'],
        climate: ['亚热带季风气候', '温暖湿润'],
        rivers: ['深圳河', '茅洲河'],
        mountains: ['梧桐山', '莲花山'],
        attractions: ['世界之窗', '欢乐谷', '东部华侨城', '大梅沙']
      },
      history: {
        events: [
          { year: 1979, title: '深圳建市', description: '国务院批准设立深圳市' },
          { year: 1980, title: '经济特区', description: '深圳成为中国第一个经济特区' },
          { year: 2019, title: '大湾区规划', description: '粤港澳大湾区发展规划纲要发布' }
        ],
        culture: ['移民文化', '创新文化', '科技文化'],
        figures: ['马化腾', '任正非', '王石']
      },
      modern: {
        food: ['粤菜', '客家菜', '海鲜', '椰子鸡'],
        intangibleHeritage: ['舞龙舞狮', '客家山歌'],
        lifestyle: ['科技创新', '创业文化', '多元包容'],
        entertainment: ['世界之窗', '欢乐谷', '海上世界'],
        landmarks: ['地王大厦', '平安金融中心', '深圳湾大桥']
      }
    }
  },
  {
    id: 9,
    name: '南京',
    image: 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=400',
    coverImage: 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=800',
    description: '六朝古都，天下文枢',
    rating: 4.8,
    reviewCount: 6789,
    latitude: 32.0603,
    longitude: 118.7969,
    foundingYear: -472,
    importance: 5,
    tags: ['历史', '文化', '教育', '古都'],
    info: {
      geo: {
        landform: ['平原', '丘陵'],
        climate: ['亚热带季风气候', '四季分明'],
        rivers: ['长江', '秦淮河'],
        mountains: ['紫金山', '栖霞山'],
        attractions: ['中山陵', '明孝陵', '夫子庙', '玄武湖']
      },
      history: {
        events: [
          { year: -472, title: '南京建城', description: '越国大夫范蠡筑城' },
          { year: 1368, title: '明朝定都', description: '朱元璋建立明朝，定都南京' },
          { year: 1937, title: '南京大屠杀', description: '日军占领南京，制造大屠杀' }
        ],
        culture: ['金陵文化', '六朝文化', '明文化'],
        figures: ['孙权', '朱元璋', '孙中山']
      },
      modern: {
        food: ['南京盐水鸭', '鸭血粉丝汤', '小笼包', '皮肚面'],
        intangibleHeritage: ['云锦', '金陵刻经'],
        lifestyle: ['秦淮河文化', '历史文化游', '高校文化'],
        entertainment: ['夫子庙', '玄武湖', '总统府'],
        landmarks: ['中山陵', '夫子庙', '南京长江大桥']
      }
    }
  },
  {
    id: 10,
    name: '武汉',
    image: 'https://images.unsplash.com/photo-1615130281066-4b556502b859?w=400',
    coverImage: 'https://images.unsplash.com/photo-1615130281066-4b556502b859?w=800',
    description: '江城樱花，黄鹤之乡',
    rating: 4.6,
    reviewCount: 5890,
    latitude: 30.5928,
    longitude: 114.3055,
    foundingYear: -350,
    importance: 5,
    tags: ['樱花', '江河', '大学', '热干面'],
    info: {
      geo: {
        landform: ['平原', '丘陵'],
        climate: ['亚热带季风气候', '四季分明'],
        rivers: ['长江', '汉江'],
        mountains: ['龟山', '蛇山'],
        attractions: ['黄鹤楼', '东湖', '武汉大学', '江汉路']
      },
      history: {
        events: [
          { year: -350, title: '武汉建城', description: '楚国在今武汉一带建立夏口城' },
          { year: 1911, title: '武昌起义', description: '辛亥革命爆发，推翻清朝统治' },
          { year: 1938, title: '武汉会战', description: '抗日战争中的重要战役' }
        ],
        culture: ['楚文化', '江汉文化', '码头文化'],
        figures: ['屈原', '张之洞', '闻一多']
      },
      modern: {
        food: ['热干面', '鸭脖', '武昌鱼', '豆皮'],
        intangibleHeritage: ['汉剧', '武汉剪纸'],
        lifestyle: ['过早文化', '江滩生活', '高校文化'],
        entertainment: ['黄鹤楼', '东湖', '楚河汉街'],
        landmarks: ['黄鹤楼', '长江大桥', '武汉大学']
      }
    }
  },
  {
    id: 11,
    name: '苏州',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    description: '园林之城，水乡泽国',
    rating: 4.9,
    reviewCount: 7234,
    latitude: 31.2989,
    longitude: 120.5853,
    foundingYear: -514,
    importance: 4,
    tags: ['园林', '水乡', '丝绸', '昆曲'],
    info: {
      geo: {
        landform: ['平原', '水网'],
        climate: ['亚热带季风气候', '湿润'],
        rivers: ['京杭大运河', '阳澄湖'],
        mountains: ['天平山', '虎丘山'],
        attractions: ['拙政园', '留园', '周庄', '平江路']
      },
      history: {
        events: [
          { year: -514, title: '苏州建城', description: '吴国建立姑苏城' },
          { year: 1368, title: '园林鼎盛', description: '明清时期苏州园林达到鼎盛' }
        ],
        culture: ['吴文化', '园林艺术', '昆曲'],
        figures: ['唐伯虎', '文徵明']
      },
      modern: {
        food: ['松鼠桂鱼', '响油鳝糊', '蟹粉豆腐', '苏式月饼'],
        intangibleHeritage: ['苏绣', '昆曲', '苏州园林'],
        lifestyle: ['园林文化', '茶馆文化', '丝绸文化'],
        entertainment: ['观前街', '金鸡湖', '苏州博物馆'],
        landmarks: ['拙政园', '虎丘', '周庄']
      }
    }
  },
  {
    id: 12,
    name: '青岛',
    image: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8b?w=400',
    coverImage: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8b?w=800',
    description: '东方瑞士，啤酒之都',
    rating: 4.7,
    reviewCount: 6543,
    latitude: 36.0671,
    longitude: 120.3826,
    foundingYear: 1891,
    importance: 4,
    tags: ['海滨', '啤酒', '欧式建筑', '避暑'],
    info: {
      geo: {
        landform: ['丘陵', '海滨'],
        climate: ['温带季风气候', '海洋性'],
        rivers: ['大沽河'],
        mountains: ['崂山', '信号山'],
        attractions: ['栈桥', '五四广场', '崂山', '八大关']
      },
      history: {
        events: [
          { year: 1891, title: '青岛建置', description: '清政府在青岛设防' },
          { year: 1903, title: '啤酒诞生', description: '德国人在青岛创建啤酒厂' }
        ],
        culture: ['啤酒文化', '欧式建筑', '海洋文化'],
        figures: []
      },
      modern: {
        food: ['青岛啤酒', '海鲜', '崂山绿茶', '流亭猪蹄'],
        intangibleHeritage: ['崂山剪纸', '茂腔'],
        lifestyle: ['海滨度假', '啤酒文化', '欧式生活'],
        entertainment: ['啤酒节', '海底世界', '金沙滩'],
        landmarks: ['栈桥', '五四广场', '崂山']
      }
    }
  },
  {
    id: 13,
    name: '长沙',
    image: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=400',
    coverImage: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800',
    description: '星城，娱乐之都',
    rating: 4.6,
    reviewCount: 5432,
    latitude: 28.2282,
    longitude: 112.9388,
    foundingYear: -347,
    importance: 4,
    tags: ['娱乐', '湘菜', '历史', '媒体'],
    info: {
      geo: {
        landform: ['丘陵', '湘江'],
        climate: ['亚热带季风气候', '湿润'],
        rivers: ['湘江', '浏阳河'],
        mountains: ['岳麓山', '橘子洲'],
        attractions: ['岳麓书院', '橘子洲', '马王堆', '太平街']
      },
      history: {
        events: [
          { year: -347, title: '长沙建城', description: '秦朝设立长沙郡' },
          { year: 1949, title: '和平解放', description: '长沙和平解放' }
        ],
        culture: ['湘文化', '湘绣', '湖湘精神'],
        figures: ['毛泽东', '雷锋', '黄兴']
      },
      modern: {
        food: ['湘菜', '辣椒炒肉', '臭豆腐', '口味虾'],
        intangibleHeritage: ['湘绣', '长沙花鼓戏'],
        lifestyle: ['夜生活', '娱乐文化', '消费'],
        entertainment: ['芒果TV', '解放西路', '世界之窗'],
        landmarks: ['岳麓书院', '橘子洲头', 'IFS']
      }
    }
  },
  {
    id: 14,
    name: '厦门',
    image: 'https://images.unsplash.com/photo-1543123326-a6a4f8d6d7c3?w=400',
    coverImage: 'https://images.unsplash.com/photo-1543123326-a6a4f8d6d7c3?w=800',
    description: '鹭岛，文艺之城',
    rating: 4.8,
    reviewCount: 8123,
    latitude: 24.4798,
    longitude: 118.0894,
    foundingYear: 1394,
    importance: 4,
    tags: ['海岛', '文艺', '闽南', '美食'],
    info: {
      geo: {
        landform: ['海岛', '丘陵'],
        climate: ['亚热带季风气候', '温暖'],
        rivers: ['九龙江'],
        mountains: ['鼓浪屿', '万石山'],
        attractions: ['鼓浪屿', '厦门大学', '南普陀', '环岛路']
      },
      history: {
        events: [
          { year: 1394, title: '厦门建城', description: '明朝设立厦门城' },
          { year: 1842, title: '通商口岸', description: '厦门成为五口通商口岸之一' }
        ],
        culture: ['闽南文化', '华侨文化', '音乐'],
        figures: ['陈嘉庚']
      },
      modern: {
        food: ['沙茶面', '花生汤', '土笋冻', '海蛎煎'],
        intangibleHeritage: ['闽南话', '歌仔戏'],
        lifestyle: ['慢生活', '咖啡文化', '文艺'],
        entertainment: ['鼓浪屿', '曾厝垵', '中山路'],
        landmarks: ['鼓浪屿', '厦门大学', '双子塔']
      }
    }
  },
  {
    id: 15,
    name: '天津',
    image: 'https://images.unsplash.com/photo-1568656012937-8982e65b16d4?w=400',
    coverImage: 'https://images.unsplash.com/photo-1568656012937-8982e65b16d4?w=800',
    description: '津门故里，北方商业中心',
    rating: 4.5,
    reviewCount: 4567,
    latitude: 39.3434,
    longitude: 117.3616,
    foundingYear: 1411,
    importance: 4,
    tags: ['相声', '近代建筑', '港口', '小吃'],
    info: {
      geo: {
        landform: ['平原', '河口'],
        climate: ['温带季风气候'],
        rivers: ['海河', '天津港'],
        mountains: ['蓟州山区'],
        attractions: ['古文化街', '津门故里', '意式风情区', '天津之眼']
      },
      history: {
        events: [
          { year: 1411, title: '天津建城', description: '朱棣赐名天津' },
          { year: 1860, title: '开埠', description: '天津开埠通商' }
        ],
        culture: ['津门文化', '相声', '码头文化'],
        figures: ['曹禺', '梁启超']
      },
      modern: {
        food: ['狗不理包子', '麻花', '耳朵眼炸糕', '煎饼果子'],
        intangibleHeritage: ['相声', '杨柳青年画'],
        lifestyle: ['曲艺文化', '茶馆文化', '休闲'],
        entertainment: ['古文化街', '天津之眼', '瓷房子'],
        landmarks: ['天津之眼', '意式风情街', '津塔']
      }
    }
  },
  {
    id: 16,
    name: '哈尔滨',
    image: 'https://images.unsplash.com/photo-1566230271066-7b0c8e94f3cc?w=400',
    coverImage: 'https://images.unsplash.com/photo-1566230271066-7b0c8e94f3cc?w=800',
    description: '冰城，东方的莫斯科',
    rating: 4.7,
    reviewCount: 6123,
    latitude: 45.8038,
    longitude: 126.534,
    foundingYear: 1898,
    importance: 4,
    tags: ['冰雪', '俄式建筑', '音乐', '美食'],
    info: {
      geo: {
        landform: ['平原'],
        climate: ['温带大陆性气候', '寒冷'],
        rivers: ['松花江'],
        mountains: [],
        attractions: ['中央大街', '冰雪大世界', '索菲亚教堂', '太阳岛']
      },
      history: {
        events: [
          { year: 1898, title: '哈尔滨建城', description: '中东铁路建设，哈尔滨兴起' }
        ],
        culture: ['俄式文化', '冰雪文化', '音乐'],
        figures: []
      },
      modern: {
        food: ['红肠', '马迭尔冰棍', '锅包肉', '杀猪菜'],
        intangibleHeritage: ['哈尔滨冰雪雕', '二人转'],
        lifestyle: ['冰雪运动', '俄式生活', '音乐艺术'],
        entertainment: ['冰雪大世界', '中央大街', '伏尔加庄园'],
        landmarks: ['索菲亚教堂', '冰雪大世界', '防洪纪念塔']
      }
    }
  },
  {
    id: 17,
    name: '大理',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    description: '风花雪月，苍山洱海',
    rating: 4.8,
    reviewCount: 6789,
    latitude: 25.6069,
    longitude: 100.2679,
    foundingYear: -221,
    importance: 4,
    tags: ['古城', '洱海', '民族', '慢生活'],
    info: {
      geo: {
        landform: ['高原', '湖泊'],
        climate: ['低纬高原季风气候'],
        rivers: ['洱海', '澜沧江'],
        mountains: ['苍山', '点苍山'],
        attractions: ['大理古城', '洱海', '苍山', '三塔']
      },
      history: {
        events: [
          { year: -221, title: '大理建国', description: '南诏国建立' },
          { year: 1253, title: '大理国', description: '元朝设立大理路' }
        ],
        culture: ['白族文化', '洱海文化', '茶马古道'],
        figures: []
      },
      modern: {
        food: ['乳扇', '砂锅鱼', '酸辣鱼', '喜洲粑粑'],
        intangibleHeritage: ['白族三道茶', '扎染'],
        lifestyle: ['慢生活', '客栈文化', '文艺'],
        entertainment: ['洱海骑行', '古城夜市', '苍山索道'],
        landmarks: ['大理古城', '三塔', '洱海']
      }
    }
  },
  {
    id: 18,
    name: '丽江',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400',
    coverImage: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800',
    description: '艳遇之都，世界遗产',
    rating: 4.7,
    reviewCount: 7654,
    latitude: 26.8721,
    longitude: 100.2299,
    foundingYear: 766,
    importance: 4,
    tags: ['古城', '纳西族', '玉龙雪山', '文艺'],
    info: {
      geo: {
        landform: ['高原', '山地'],
        climate: ['低纬高原季风气候'],
        rivers: ['金沙江', '泸沽湖'],
        mountains: ['玉龙雪山', '虎跳峡'],
        attractions: ['丽江古城', '玉龙雪山', '泸沽湖', '束河古镇']
      },
      history: {
        events: [
          { year: 766, title: '丽江建城', description: '纳西族建立丽江古城' },
          { year: 1997, title: '世界遗产', description: '丽江古城列入世界文化遗产' }
        ],
        culture: ['纳西文化', '东巴文化', '茶马古道'],
        figures: []
      },
      modern: {
        food: ['纳西烤肉', '鸡豆凉粉', '丽江粑粑', '酥油茶'],
        intangibleHeritage: ['纳西古乐', '东巴文化'],
        lifestyle: ['慢生活', '客栈文化', '酒吧文化'],
        entertainment: ['古城夜市', '玉龙雪山', '泸沽湖'],
        landmarks: ['丽江古城', '玉龙雪山', '四方街']
      }
    }
  },
  {
    id: 19,
    name: '三亚',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: '天涯海角，度假天堂',
    rating: 4.8,
    reviewCount: 9234,
    latitude: 18.2528,
    longitude: 109.5119,
    foundingYear: -110,
    importance: 4,
    tags: ['海滨', '度假', '热带', '婚礼'],
    info: {
      geo: {
        landform: ['半岛', '海湾'],
        climate: ['热带季风气候', '温暖'],
        rivers: ['三亚河'],
        mountains: ['鹿回头', '南山'],
        attractions: ['亚龙湾', '天涯海角', '南山文化旅游区', '蜈支洲岛']
      },
      history: {
        events: [
          { year: -110, title: '三亚建制', description: '西汉设立珠崖郡' }
        ],
        culture: ['黎族文化', '热带风情'],
        figures: []
      },
      modern: {
        food: ['海鲜', '椰子饭', '文昌鸡', '东山羊'],
        intangibleHeritage: ['黎族织锦', '琼剧'],
        lifestyle: ['度假', '海滨休闲', '婚礼蜜月'],
        entertainment: ['亚龙湾', '海昌梦幻海洋不夜城', '三亚千古情'],
        landmarks: ['天涯海角', '亚龙湾', '南山寺']
      }
    }
  },
  {
    id: 20,
    name: '香港',
    image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400',
    coverImage: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800',
    description: '东方之珠，购物天堂',
    rating: 4.7,
    reviewCount: 15678,
    latitude: 22.3193,
    longitude: 114.1694,
    foundingYear: 1842,
    importance: 5,
    tags: ['购物', '美食', '金融', '国际化'],
    info: {
      geo: {
        landform: ['丘陵', '海岛'],
        climate: ['亚热带季风气候'],
        rivers: [],
        mountains: ['太平山', '狮子山'],
        attractions: ['维多利亚港', '太平山顶', '迪士尼乐园', '海洋公园']
      },
      history: {
        events: [
          { year: 1842, title: '香港割让', description: '《南京条约》签订，香港被割让' },
          { year: 1997, title: '回归', description: '香港回归祖国' }
        ],
        culture: ['港式文化', '中西交融', '影视文化'],
        figures: ['李嘉诚', '成龙']
      },
      modern: {
        food: ['茶餐厅', '粤菜', '港式甜品', '烧腊'],
        intangibleHeritage: ['粤剧', '赛马'],
        lifestyle: ['购物', '金融', '快节奏'],
        entertainment: ['迪士尼', '海洋公园', '维多利亚港'],
        landmarks: ['维多利亚港', '太平山顶', '中环']
      }
    }
  }
];

// 搜索城市的函数
export const searchCities = (query: string): City[] => {
  return cities.filter(city => 
    city.name.toLowerCase().includes(query.toLowerCase())
  );
};

// 根据ID获取城市
export const getCityById = (id: number): City | undefined => {
  return cities.find(city => city.id === id);
};

// 获取所有城市
export const getAllCities = (): City[] => {
  return cities;
};