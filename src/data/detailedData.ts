// 详细数据结构，包含历史事件，文化特色，历史人物等的详细信息
// 每个数据项都通过 cityId 关联到具体的城市

// 历史人物详细信息
export interface Person {
  id: number;
  cityId: number;  // 关联的城市ID
  name: string;
  birthYear?: number;
  deathYear?: number;
  description: string;
  achievements: string[];
  quotes?: string[];
  works?: string[];
  biography: string;
}

// 历史事件详细信息
export interface Event {
  id: number;
  cityId: number;  // 关联的城市ID
  title: string;
  year: number;
  description: string;
  significance: string;
  keyFigures: number[]; // 关联的人物ID
  location: string;
  impact: string;
}

// 文化特色详细信息
export interface Culture {
  id: number;
  cityId: number;  // 关联的城市ID
  name: string;
  description: string;
  history: string;
  characteristics: string[];
  examples: string[];
  significance: string;
}

// 美食详细信息
export interface Food {
  id: number;
  cityId: number;  // 关联的城市ID
  name: string;
  description: string;
  history: string;
  ingredients: string[];
  preparation: string;
  culturalSignificance: string;
  recommendedPlaces: string[];
}

// 历史人物数据 - 按城市分类
export const persons: Person[] = [
  // 北京相关人物
  {
    id: 101, cityId: 1,
    name: '曹雪芹', birthYear: 1715, deathYear: 1763,
    description: '清代著名文学家，《红楼梦》作者',
    achievements: ['创作《红楼梦》', '开创中国古典小说巅峰', '诗词书画成就高'],
    quotes: ['满纸荒唐言，一把辛酸泪'],
    works: ['红楼梦', '废艺斋集稿'],
    biography: '曹雪芹（约1715年-1763年），名霑，字芹圃，号雪芹。他创作的《红楼梦》是中国古典小说的巅峰之作，被誉为中国封建社会的百科全书。曹雪芹的家族曾显赫一时，后因家道中落而生活困顿，这使他对社会有了深刻的认识。'
  },
  {
    id: 102, cityId: 1,
    name: '老舍', birthYear: 1899, deathYear: 1966,
    description: '人民艺术家，京味小说开创者',
    achievements: ['创作《骆驼祥子》', '创建人民艺术剧院', '京味小说开创者'],
    quotes: ['才华是刀刃，辛苦是磨刀石'],
    works: ['骆驼祥子', '茶馆', '四世同堂'],
    biography: '老舍（1899年-1966年），原名舒庆春，字舍予。他是中国现代著名作家、人民艺术家，代表作《骆驼祥子》描写了北京底层市民的生活。他的作品充满京味特色，语言生动幽默。'
  },
  {
    id: 103, cityId: 1,
    name: '梅兰芳', birthYear: 1894, deathYear: 1961,
    description: '京剧大师，四大名旦之首',
    achievements: ['创立梅派艺术', '推广京剧到国际', '抗敌义演捐款'],
    quotes: ['戏如人生，人生如戏'],
    works: ['霸王别姬', '贵妃醉酒', '天女散花'],
    biography: '梅兰芳（1894年-1961年），名澜，字畹华。他是中国京剧史上最重要的表演艺术家之一，四大名旦之首。他创立的梅派艺术集京剧旦角艺术之大成，对后世影响深远。'
  },

  // 上海相关人物
  {
    id: 201, cityId: 2,
    name: '鲁迅', birthYear: 1881, deathYear: 1936,
    description: '伟大的文学家、思想家、革命家',
    achievements: ['创作白话文小说', '批判封建礼教', '翻译外国文学'],
    quotes: ['横眉冷对千夫指，俯首甘为孺子牛', '真的猛士，敢于直面惨淡的人生'],
    works: ['呐喊', '彷徨', '朝花夕拾', '狂人日记'],
    biography: '鲁迅（1881年-1936年），原名周树人，浙江绍兴人。他是中国现代文学的奠基人，代表作《狂人日记》是中国第一部白话文小说。鲁迅的杂文如匕首投枪，深刻批判了旧社会的黑暗。'
  },
  {
    id: 202, cityId: 2,
    name: '张爱玲', birthYear: 1920, deathYear: 1995,
    description: '著名女作家，海派文学代表',
    achievements: ['开创海派小说风格', '小说影视改编多', '研究红楼梦'],
    quotes: ['生命是一袭华美的袍，爬满了蚤子'],
    works: ['倾城之恋', '金锁记', '红玫瑰与白玫瑰'],
    biography: '张爱玲（1920年-1995年），原名张煐。她是20世纪中国最优秀的女作家之一，其小说以细腻的心理描写和独特的语言风格著称，代表了海派文学的最高成就。'
  },
  {
    id: 203, cityId: 2,
    name: '茅盾', birthYear: 1896, deathYear: 1981,
    description: '现代文学家，社会活动家',
    achievements: ['创作《子夜》', '创办《小说月报》', '文学评论贡献大'],
    quotes: ['自然科学是生产力，社会科学也是生产力'],
    works: ['子夜', '春蚕', '林家铺子'],
    biography: '茅盾（1896年-1981年），原名沈德鸿，字雁冰。他是中国现代著名作家、文学评论家，代表作《子夜》是中国现代文学的里程碑作品。'
  },

  // 成都相关人物（蜀汉三国）
  {
    id: 301, cityId: 3,
    name: '诸葛亮', birthYear: 181, deathYear: 234,
    description: '三国时期蜀汉丞相，杰出的政治家、军事家',
    achievements: ['辅佐刘备建立蜀汉', '六出祁山北伐曹魏', '发明木牛流马、孔明灯'],
    quotes: ['鞠躬尽瘁，死而后已', '非淡泊无以明志，非宁静无以致远'],
    works: ['出师表', '诫子书', '兵法二十四篇'],
    biography: '诸葛亮（181年-234年），字孔明，号卧龙，琅琊阳都人。他是中国古代最杰出的政治家和军事家之一，《出师表》是千古传诵的名篇。'
  },
  {
    id: 302, cityId: 3,
    name: '李白', birthYear: 701, deathYear: 762,
    description: '唐代伟大诗人，被誉为"诗仙"',
    achievements: ['创作诗歌千余首', '开创浪漫主义诗风', '剑术高超'],
    quotes: ['天生我材必有用，千金散尽还复来', '长风破浪会有时，直挂云帆济沧海'],
    works: ['将进酒', '蜀道难', '静夜思', '望庐山瀑布'],
    biography: '李白（701年-762年），字太白，号青莲居士。他是中国诗歌史上最具浪漫主义色彩的诗人，被誉为"诗仙"。李白与杜甫并称"李杜"，代表唐诗的最高成就。'
  },
  {
    id: 303, cityId: 3,
    name: '杜甫', birthYear: 712, deathYear: 770,
    description: '唐代伟大诗人，被誉为"诗圣"',
    achievements: ['创作现实主义诗歌', '被称为"诗史"', '忧国忧民'],
    quotes: ['安得广厦千万间，大庇天下寒士俱欢颜', '会当凌绝顶，一览众山小'],
    works: ['春望', '登高', '茅屋为秋风所破歌', '三吏', '三别'],
    biography: '杜甫（712年-770年），字子美，自号少陵野老。他是中国诗歌史上伟大的现实主义诗人，被后人尊称为"诗圣"。他的诗歌深刻反映了唐代由盛转衰的历史。'
  },

  // 西安相关人物
  {
    id: 401, cityId: 4,
    name: '秦始皇', birthYear: -259, deathYear: -210,
    description: '秦朝开国皇帝，中国历史上第一位皇帝',
    achievements: ['统一六国', '建立郡县制', '修筑长城', '统一文字货币度量衡'],
    quotes: ['寡人以眇眇之身，兴兵诛暴乱'],
    works: ['焚书坑儒', '修筑阿房宫'],
    biography: '秦始皇（前259年-前210年），嬴姓，名政。他是中国历史上第一位皇帝，建立了统一的多民族中央集权国家。虽实行暴政，但功在千秋，统一了中国。'
  },
  {
    id: 402, cityId: 4,
    name: '汉武帝', birthYear: -156, deathYear: -87,
    description: '汉朝最杰出的皇帝之一',
    achievements: ['开疆拓土', '罢黜百家独尊儒术', '开通丝绸之路', '推行推恩令'],
    quotes: ['寇可往，我亦可往'],
    biography: '汉武帝刘彻（前156年-前87年）是西汉最杰出的皇帝，他在位期间实现了汉朝的大一统，开创了"汉武盛世"。'
  },
  {
    id: 403, cityId: 4,
    name: '唐太宗', birthYear: 598, deathYear: 649,
    description: '唐朝开创者，"贞观之治"缔造者',
    achievements: ['统一天下', '开创贞观之治', '完善科举制度', '击败突厥'],
    quotes: ['以铜为镜，可以正衣冠；以史为镜，可以知兴替；以人为镜，可以明得失'],
    biography: '唐太宗李世民（598年-649年）是唐朝第二位皇帝，他开创的"贞观之治"是中国历史上最著名的治世之一，为盛唐奠定基础。'
  },

  // 杭州相关人物
  {
    id: 501, cityId: 5,
    name: '白居易', birthYear: 772, deathYear: 846,
    description: '唐代伟大诗人，杭州西湖的开发者',
    achievements: ['创作《长恨歌》', '开发西湖', '倡导新乐府运动'],
    quotes: ['同是天涯沦落人，相逢何必曾相识', '乱花渐欲迷人眼，浅草才能没马蹄'],
    works: ['长恨歌', '琵琶行', '赋得古原草送别'],
    biography: '白居易（772年-846年），字乐天，号香山居士。他是中国唐代伟大的现实主义诗人，曾任杭州刺史，开发西湖，筑堤建闸，造福一方。'
  },
  {
    id: 502, cityId: 5,
    name: '苏轼', birthYear: 1037, deathYear: 1101,
    description: '北宋文学家、书画家',
    achievements: ['创作千古名词', '修建苏堤', '开创豪放词派'],
    quotes: ['但愿人长久，千里共婵娟', '大江东去，浪淘尽，千古风流人物'],
    works: ['念奴娇·赤壁怀古', '水调歌头', '赤壁赋'],
    biography: '苏轼（1037年-1101年），字子瞻，号东坡居士。他是中国文学史上全能型的艺术家，曾任杭州知州，修建苏堤，疏浚西湖，留下千古名篇。'
  },
  {
    id: 503, cityId: 5,
    name: '岳飞', birthYear: 1103, deathYear: 1142,
    description: '南宋抗金名将，民族英雄',
    achievements: ['抗击金兵', '收复失地', '精忠报国'],
    quotes: ['壮志饥餐胡虏肉，笑谈渴饮匈奴血', '还我河山'],
    works: ['满江红·写怀'],
    biography: '岳飞（1103年-1142年），字鹏举。他是中国历史上最著名的民族英雄之一，率领岳家军抗金保国，后被秦桧陷害而死，其精神激励后人。'
  },

  // 重庆相关人物
  {
    id: 601, cityId: 6,
    name: '巴蔓子', birthYear: -400, deathYear: -330,
    description: '古代巴国将军，忠勇典范',
    achievements: ['守护巴国', '忠勇报国', '割头留城'],
    quotes: ['生当作人杰，死亦为鬼雄'],
    biography: '巴蔓子是战国时期巴国将军，以忠勇著称。传说他率兵救援楚国，割头留城，以生命换取楚王退兵，成为忠勇典范。'
  },
  {
    id: 602, cityId: 6,
    name: '邹容', birthYear: 1885, deathYear: 1905,
    description: '民主革命家，《革命军》作者',
    achievements: ['撰写《革命军》', '宣传民主革命', '推翻帝制'],
    quotes: ['革命者，天演之公例也；革命者，世界之公理也'],
    works: ['革命军'],
    biography: '邹容（1885年-1905年），字蔚丹，四川巴县人。他是民主革命先驱，所著《革命军》宣传民主革命思想，对辛亥革命影响巨大。'
  },
  {
    id: 603, cityId: 6,
    name: '刘伯承', birthYear: 1892, deathYear: 1986,
    description: '中华人民共和国元帅，军事家',
    achievements: ['参加辛亥革命', '红军时期重要将领', '建国后建设军事院校'],
    quotes: ['狭路相逢勇者胜'],
    biography: '刘伯承（1892年-1986年），四川开县人。他是中国人民解放军创始人之一，中华人民共和国元帅，为中国革命和建设事业做出重大贡献。'
  },

  // 广州相关人物
  {
    id: 701, cityId: 7,
    name: '康有为', birthYear: 1858, deathYear: 1927,
    description: '近代改良派领袖，维新运动发起人',
    achievements: ['发起戊戌变法', '著《大同书》', '宣传君主立宪'],
    quotes: ['穷则变，变则通，通则久'],
    works: ['大同书', '新学伪经考', '孔子改制考'],
    biography: '康有为（1858年-1927年），字广厦，号长素。他是近代中国改良派领袖，发起戊戌变法，虽然失败但推动了中国近代化进程。'
  },
  {
    id: 702, cityId: 7,
    name: '梁启超', birthYear: 1873, deathYear: 1929,
    description: '近代思想家、文学家，戊戌变法领袖',
    achievements: ['参与戊戌变法', '开创新文体', '学术研究广泛'],
    quotes: ['少年强则国强', '天下兴亡，匹夫有责'],
    works: ['饮冰室合集', '论中国学术思想变迁之大势'],
    biography: '梁启超（1873年-1929年），字卓如，号饮冰室主人。他是近代中国最重要的思想家之一，与康有为并称"康梁"，对中国近代思想文化影响深远。'
  },
  {
    id: 703, cityId: 7,
    name: '孙中山', birthYear: 1866, deathYear: 1925,
    description: '中国民主革命先行者，中华民国缔造者',
    achievements: ['推翻封建帝制', '建立中华民国', '提出三民主义'],
    quotes: ['革命尚未成功，同志仍须努力', '天下为公'],
    biography: '孙中山（1866年-1925年），名文，字德明。他是中国民主革命的伟大先行者，推翻了延续两千多年的封建帝制，建立了中华民国，被誉为"国父"。'
  },

  // 深圳相关人物
  {
    id: 801, cityId: 8,
    name: '马化腾', birthYear: 1971,
    description: '腾讯公司创始人，中国互联网领军人物',
    achievements: ['创立腾讯', '打造微信', '推动中国互联网发展'],
    quotes: ['用户体验是产品成功的关键'],
    biography: '马化腾（1971年-），广东汕头人。他是腾讯公司的创始人，打造了QQ、微信等国民级应用，推动中国互联网产业的快速发展。'
  },
  {
    id: 802, cityId: 8,
    name: '任正非', birthYear: 1944,
    description: '华为公司创始人，中国科技企业家',
    achievements: ['创立华为', '5G技术领先', '推动中国科技走向世界'],
    quotes: ['以奋斗者为本，以客户为中心'],
    biography: '任正非（1944年-），贵州安顺人。他是华为公司的创始人，在其领导下华为成为全球领先的信息通信技术解决方案供应商。'
  },

  // 南京相关人物
  {
    id: 901, cityId: 9,
    name: '孙权', birthYear: 182, deathYear: 252,
    description: '三国时期吴国开国皇帝',
    achievements: ['建立吴国', '开发江南', '赤壁之战抗曹'],
    quotes: ['能用众力，则无敌于天下矣'],
    biography: '孙权（182年-252年），字仲谋。吴国开国皇帝，在位期间开发江南，为后世江南经济发展奠定基础。'
  },
  {
    id: 902, cityId: 9,
    name: '朱元璋', birthYear: 1328, deathYear: 1398,
    description: '明朝开国皇帝',
    achievements: ['推翻元朝', '建立明朝', '恢复汉族统治'],
    quotes: ['驱逐胡虏，恢复中华'],
    biography: '朱元璋（1328年-1398年），字国瑞。他是从贫苦农民成为一代开国皇帝，建立明朝，统一中国，是中国历史上最成功的农民皇帝之一。'
  },
  {
    id: 903, cityId: 9,
    name: '孙中山', birthYear: 1866, deathYear: 1925,
    description: '中国民主革命先行者',
    achievements: ['推翻帝制', '建立民国', '三民主义'],
    quotes: ['天下为公'],
    biography: '孙中山先生曾在南京建立临时政府，南京也是中华民国的重要历史见证地。'
  },

  // 武汉相关人物
  {
    id: 1001, cityId: 10,
    name: '屈原', birthYear: -340, deathYear: -278,
    description: '战国时期伟大诗人',
    achievements: ['开创楚辞体', '爱国诗人典范', '端午节来源'],
    quotes: ['路漫漫其修远兮，吾将上下而求索', '举世皆浊我独清，众人皆醉我独醒'],
    works: ['离骚', '九歌', '天问'],
    biography: '屈原（约前340年-前278年），芈姓，屈氏。他是战国时期伟大的爱国诗人，中国浪漫主义文学奠基人，其端午节日纪念。'
  },
  {
    id: 1002, cityId: 10,
    name: '张之洞', birthYear: 1837, deathYear: 1909,
    description: '洋务派代表人物，湖广总督',
    achievements: ['创办汉阳铁厂', '修建京汉铁路', '推动洋务运动'],
    quotes: ['中学为体，西学为用'],
    biography: '张之洞（1837年-1909年），字孝达，号香涛。他在任湖广总督期间，在武汉创办了汉阳铁厂、京汉铁路等大型企业，推动了中国近代工业化。'
  },

  // 苏州相关人物
  {
    id: 1101, cityId: 11,
    name: '唐伯虎', birthYear: 1470, deathYear: 1524,
    description: '明代著名画家、文学家',
    achievements: ['江南四大才子之首', '书画成就高', '点秋香故事流传'],
    quotes: ['别人笑我太疯颠，我笑他人看不穿'],
    works: ['山路松声图', '事茗图', '落花诗册'],
    biography: '唐伯虎（1470年-1524年），名寅，字伯虎，号六如居士。他是明代江南四大才子之首，诗书画样样精通，是历史上最著名的才子之一。'
  },
  {
    id: 1102, cityId: 11,
    name: '文徵明', birthYear: 1470, deathYear: 1559,
    description: '明代书画家，吴门画派领袖',
    achievements: ['书画成就高', '吴门画派领袖', '诗词文赋皆通'],
    works: ['惠山茶会图', '绿荫长话图'],
    biography: '文徵明（1470年-1559年），原名壁，字徵明。他是明代著名书画家，吴门画派领袖，与沈周、唐寅、仇英合称"吴门四家"。'
  },

  // 青岛相关人物
  {
    id: 1201, cityId: 12,
    name: '康有为', birthYear: 1858, deathYear: 1927,
    description: '曾在青岛居住的改良派领袖',
    achievements: ['戊戌变法', '青岛购地建别墅', '晚年在青岛著书'],
    quotes: ['变则通，通则久'],
    biography: '康有为晚年曾在青岛居住，购置别墅，他的到来为青岛增添了文化底蕴。'
  },

  // 长沙相关人物
  {
    id: 1301, cityId: 13,
    name: '毛泽东', birthYear: 1893, deathYear: 1976,
    description: '中华人民共和国主要缔造者',
    achievements: ['领导革命', '建立新中国', '提出毛泽东思想'],
    quotes: ['星星之火，可以燎原', '为人民服务'],
    works: ['毛泽东选集', '诗词'],
    biography: '毛泽东（1893年-1976年），字润之。他是中华人民共和国的主要缔造者，中国共产党、中国人民解放军、中华人民共和国的主要缔造者和领导人。'
  },
  {
    id: 1302, cityId: 13,
    name: '雷锋', birthYear: 1940, deathYear: 1962,
    description: '全心全意为人民服务的典型',
    achievements: ['乐于助人', '无私奉献', '共产主义战士'],
    quotes: ['把有限的生命投入到无限的为人民服务之中去'],
    biography: '雷锋（1940年-1962年），湖南望城人。他是中国人民解放军战士，以全心全意为人民服务的精神成为全国人民学习的楷模。'
  },

  // 厦门相关人物
  {
    id: 1401, cityId: 14,
    name: '陈嘉庚', birthYear: 1874, deathYear: 1961,
    description: '华侨领袖，厦门大学创办人',
    achievements: ['创办厦门大学', '支持抗战', '华侨领袖'],
    quotes: ['教育为立国之本'],
    biography: '陈嘉庚（1874年-1961年），福建厦门人。他是著名华侨领袖，企业家、教育家，创办了厦门大学，为中国教育事业做出巨大贡献。'
  },

  // 天津相关人物
  {
    id: 1501, cityId: 15,
    name: '曹禺', birthYear: 1910, deathYear: 1996,
    description: '著名剧作家，中国现代戏剧奠基人',
    achievements: ['创作《雷雨》', '推动中国戏剧发展', '教育家'],
    quotes: ['一部好的戏剧抵得上一部小说'],
    works: ['雷雨', '日出', '北京人'],
    biography: '曹禺（1910年-1996年），原名万家宝。他是 中国现代著名剧作家，代表作《雷雨》是中国现代话剧的里程碑作品。'
  },
  {
    id: 1502, cityId: 15,
    name: '梁启超', birthYear: 1873, deathYear: 1929,
    description: '曾在天津从事革命活动',
    achievements: ['维新变法', '宣传新学', '天津办报'],
    quotes: ['少年强则国强'],
    biography: '梁启超曾在天津创办《时务报》，宣传维新思想，推动了中国近代思想启蒙。'
  },

  // 哈尔滨相关人物
  {
    id: 1601, cityId: 16,
    name: '李兆麟', birthYear: 1910, deathYear: 1946,
    description: '东北抗日联军将领',
    achievements: ['抗日救国', '创建东北抗日联军', '保卫东北'],
    quotes: ['抗联精神永存'],
    biography: '李兆麟（1910年-1946年），辽宁辽阳人。东北抗日联军重要将领，在哈尔滨等地开展抗日斗争，后被国民党特务杀害。'
  },

  // 大理相关人物
  {
    id: 1701, cityId: 17,
    name: '段思平', birthYear: 893, deathYear: 944,
    description: '大理国开国皇帝',
    achievements: ['建立大理国', '推行汉化政策', '开发云南'],
    biography: '段思平（893年-944年），大理国开国皇帝。他建立大理国后，推行汉化政策，促进了云南地区的发展。'
  },

  // 丽江相关人物
  {
    id: 1801, cityId: 18,
    name: '木府土司', birthYear: 1382, deathYear: 1550,
    description: '丽江木府土司家族',
    achievements: ['建设丽江古城', '发展纳西文化', '维护地方稳定'],
    biography: '木府是丽江的土司府邸，木氏土司家族在丽江统治数百年，建设发展了丽江古城，留下了丰富的文化遗产。'
  },

  // 三亚相关人物
  {
    id: 1901, cityId: 19,
    name: '鉴真', birthYear: 688, deathYear: 763,
    description: '唐代高僧，曾漂泊到海南',
    achievements: ['六次东渡日本', '传播佛教文化', '促进中日交流'],
    quotes: ['为法事也，何惜身命'],
    works: ['唐大和上东征传'],
    biography: '鉴真（688年-763年），唐朝高僧。他六次东渡日本传播佛教文化，期间曾漂泊到海南岛，为中日文化交流做出巨大贡献。'
  },

  // 香港相关人物
  {
    id: 2001, cityId: 20,
    name: '李嘉诚', birthYear: 1928,
    description: '香港著名企业家',
    achievements: ['创建长江集团', '慈善事业', '推动经济发展'],
    quotes: ['扩张中不忘稳健，稳健中不忘扩张'],
    biography: '李嘉诚（1928年-），广东潮安人。他是香港著名企业家，创建的长江集团成为香港最大的企业之一，同时热心慈善事业。'
  },
  {
    id: 2002, cityId: 20,
    name: '成龙', birthYear: 1954,
    description: '国际著名影星',
    achievements: ['功夫电影走向世界', '奥斯卡终身成就奖', '慈善事业'],
    quotes: ['今天的不成功就是明天成功的起点'],
    works: ['醉拳', '红番区', '尖峰时刻'],
    biography: '成龙（1954年-），生于香港。他是国际著名影星，功夫电影的代表人物，为中国电影走向世界做出重大贡献。'
  }
];

// 历史事件数据 - 按城市分类
export const events: Event[] = [
  // 北京历史事件
  {
    id: 101, cityId: 1,
    title: '北京建城', year: -1045,
    description: '周武王封召公奭于燕，北京开始建城',
    significance: '北京作为城市的开始，奠定了其在中国历史上的重要地位',
    keyFigures: [], location: '今北京地区',
    impact: '开启了北京三千多年的建城历史，为后来成为中国首都奠定了基础'
  },
  {
    id: 102, cityId: 1,
    title: '紫禁城建成', year: 1420,
    description: '明成祖朱棣迁都北京，紫禁城建成',
    significance: '标志着北京成为明朝的首都，紫禁城成为中国古代宫廷建筑的巅峰之作',
    keyFigures: [], location: '今北京故宫',
    impact: '使北京成为中国的政治中心，紫禁城成为世界上现存规模最大、保存最为完整的木质结构古建筑之一'
  },
  {
    id: 103, cityId: 1,
    title: '新中国成立', year: 1949,
    description: '中华人民共和国成立，北京成为首都',
    significance: '标志着中国人民从此站立起来了，北京成为新中国的政治、文化中心',
    keyFigures: [], location: '北京天安门',
    impact: '开启了中国历史的新纪元，北京成为现代化中国的象征'
  },

  // 上海历史事件
  {
    id: 201, cityId: 2,
    title: '上海建镇', year: 751,
    description: '唐朝设立华亭县，上海开始发展',
    significance: '上海地区最早的政治建制，标志着上海城市的起源',
    keyFigures: [], location: '今上海松江区',
    impact: '开启了上海一千多年的城市发展历史'
  },
  {
    id: 202, cityId: 2,
    title: '上海开埠', year: 1842,
    description: '《南京条约》签订，上海成为通商口岸',
    significance: '标志着上海进入半殖民地时期，但也带来了西方文化和经济',
    keyFigures: [], location: '上海外滩',
    impact: '使上海迅速成长为国际化大都市，成为中国近代化的重要城市'
  },
  {
    id: 203, cityId: 2,
    title: '浦东新区开发', year: 1990,
    description: '国务院批准开发开放浦东新区',
    significance: '标志着中国改革开放进入新阶段',
    keyFigures: [], location: '上海浦东',
    impact: '使上海成为国际金融、贸易、航运中心奠定了基础'
  },

  // 成都历史事件
  {
    id: 301, cityId: 3,
    title: '成都建城', year: -316,
    description: '秦国灭蜀国，设立成都县',
    significance: '成都作为城市的历史开端',
    keyFigures: [], location: '今成都地区',
    impact: '开启了成都两千多年的城市历史'
  },
  {
    id: 302, cityId: 3,
    title: '蜀汉定都', year: 221,
    description: '刘备建立蜀汉，定都成都',
    significance: '成都成为三国时期蜀汉政权的首都',
    keyFigures: [301], location: '成都',
    impact: '使成都成为三国文化的重镇，留下了丰富的历史遗迹'
  },
  {
    id: 303, cityId: 3,
    title: '成都解放', year: 1949,
    description: '中国人民解放军解放成都',
    significance: '成都进入新的历史时期',
    keyFigures: [], location: '成都',
    impact: '成都成为新中国西部重要的中心城市'
  },

  // 西安历史事件
  {
    id: 401, cityId: 4,
    title: '西安建城', year: -1046,
    description: '周武王建立镐京，西周开始',
    significance: '西安作为中国政治中心的开端',
    keyFigures: [], location: '今西安西郊',
    impact: '开启了西安三千多年的建都历史'
  },
  {
    id: 402, cityId: 4,
    title: '秦统一中国', year: -221,
    description: '秦始皇统一六国，定都咸阳',
    significance: '中国历史上第一个统一的多民族中央集权国家建立',
    keyFigures: [401], location: '咸阳',
    impact: '奠定了中国统一的基础，统一文字、货币、度量衡'
  },
  {
    id: 403, cityId: 4,
    title: '唐朝定都', year: 618,
    description: '李渊建立唐朝，定都长安',
    significance: '中国历史上最繁荣的朝代开始',
    keyFigures: [403], location: '长安',
    impact: '开创了盛唐时代，长安成为当时世界上最大的城市'
  },
  {
    id: 404, cityId: 4,
    title: '西安事变', year: 1936,
    description: '张学良、杨虎城扣押蒋介石，要求停止内战',
    significance: '标志着国共两党第二次合作抗日局面的形成',
    keyFigures: [], location: '西安临潼',
    impact: '对中国抗日战争和国共关系产生重大影响'
  },

  // 杭州历史事件
  {
    id: 501, cityId: 5,
    title: '杭州建城', year: -221,
    description: '秦朝设立钱唐县',
    significance: '杭州作为城市的历史开端',
    keyFigures: [], location: '今杭州地区',
    impact: '开启了杭州两千多年的城市历史'
  },
  {
    id: 502, cityId: 5,
    title: '南宋定都', year: 1127,
    description: '南宋迁都临安（今杭州）',
    significance: '杭州成为南宋政权的首都',
    keyFigures: [], location: '临安',
    impact: '使杭州成为全国政治、经济、文化中心，经济文化高度繁荣'
  },
  {
    id: 503, cityId: 5,
    title: 'G20峰会', year: 2016,
    description: '二十国集团领导人峰会在杭州举行',
    significance: '杭州首次举办大型国际峰会',
    keyFigures: [], location: '杭州',
    impact: '提升杭州国际知名度，推动杭州现代化发展'
  },

  // 重庆历史事件
  {
    id: 601, cityId: 6,
    title: '重庆得名', year: 1189,
    description: '宋光宗赵惇先封恭王，后即帝位，自诩"双重喜庆"，重庆由此得名',
    significance: '重庆名称的由来',
    keyFigures: [], location: '重庆',
    impact: '重庆开始了作为独立城市名称的历史'
  },
  {
    id: 602, cityId: 6,
    title: '战时首都', year: 1937,
    description: '国民政府迁都重庆，成为战时首都',
    significance: '重庆成为中国抗日战争的大后方',
    keyFigures: [], location: '重庆',
    impact: '重庆成为抗战时期的政治、军事、经济中心'
  },
  {
    id: 603, cityId: 6,
    title: '重庆直辖', year: 1997,
    description: '重庆成为中国第四个直辖市',
    significance: '重庆成为中央政府直接管辖的省级行政区',
    keyFigures: [], location: '重庆',
    impact: '推动重庆成为西部重要的中心城市'
  },

  // 广州历史事件
  {
    id: 701, cityId: 7,
    title: '广州建城', year: -214,
    description: '秦始皇统一岭南，设立南海郡',
    significance: '广州作为城市的历史开端',
    keyFigures: [], location: '广州',
    impact: '开启了广州两千多年的城市历史'
  },
  {
    id: 702, cityId: 7,
    title: '广州一口通商', year: 1757,
    description: '清政府规定广州为唯一对外通商口岸',
    significance: '广州成为清朝对外贸易的唯一窗口',
    keyFigures: [], location: '广州',
    impact: '使广州成为全国对外贸易中心，经济繁荣'
  },
  {
    id: 703, cityId: 7,
    title: '改革开放', year: 1978,
    description: '广州成为改革开放前沿城市',
    significance: '广州成为首批对外开放城市',
    keyFigures: [], location: '广州',
    impact: '推动广州经济快速发展，成为国际化大都市'
  },

  // 深圳历史事件
  {
    id: 801, cityId: 8,
    title: '深圳建市', year: 1979,
    description: '国务院批准设立深圳市',
    significance: '深圳作为城市的正式建立',
    keyFigures: [], location: '深圳',
    impact: '开启了深圳城市发展的新纪元'
  },
  {
    id: 802, cityId: 8,
    title: '经济特区', year: 1980,
    description: '深圳成为中国第一个经济特区',
    significance: '中国改革开放的标志性事件',
    keyFigures: [], location: '深圳',
    impact: '使深圳成为中国经济最发达的城市之一，创造了"深圳速度"'
  },
  {
    id: 803, cityId: 8,
    title: '大湾区规划', year: 2019,
    description: '粤港澳大湾区发展规划纲要发布',
    significance: '深圳定位为粤港澳大湾区核心引擎',
    keyFigures: [], location: '深圳',
    impact: '推动深圳建设中国特色社会主义先行示范区'
  },

  // 南京历史事件
  {
    id: 901, cityId: 9,
    title: '南京建城', year: -472,
    description: '越国大夫范蠡筑城',
    significance: '南京作为城市的历史开端',
    keyFigures: [], location: '南京',
    impact: '开启了南京两千五百多年的城市历史'
  },
  {
    id: 902, cityId: 9,
    title: '明朝定都', year: 1368,
    description: '朱元璋建立明朝，定都南京',
    significance: '南京成为明朝初期的首都',
    keyFigures: [902], location: '南京',
    impact: '使南京成为全国政治中心，城市建设快速发展'
  },
  {
    id: 903, cityId: 9,
    title: '南京大屠杀', year: 1937,
    description: '日军占领南京，制造大屠杀',
    significance: '日军侵华战争中的重大暴行',
    keyFigures: [], location: '南京',
    impact: '是南京历史上最惨痛的灾难，也是中华民族的深刻记忆'
  },

  // 武汉历史事件
  {
    id: 1001, cityId: 10,
    title: '武汉建城', year: -350,
    description: '楚国在今武汉一带建立夏口城',
    significance: '武汉作为城市的历史开端',
    keyFigures: [1001], location: '武汉汉阳',
    impact: '开启了武汉两千多年的城市历史'
  },
  {
    id: 1002, cityId: 10,
    title: '武昌起义', year: 1911,
    description: '辛亥革命爆发，推翻清朝统治',
    significance: '辛亥革命的首义之地',
    keyFigures: [], location: '武汉武昌',
    impact: '推翻了延续两千多年的封建帝制，建立了中华民国'
  },
  {
    id: 1003, cityId: 10,
    title: '武汉会战', year: 1938,
    description: '抗日战争中的最大规模会战',
    significance: '抗日战争的重要转折点',
    keyFigures: [], location: '武汉',
    impact: '消耗了日军大量有生力量，粉碎了日军速战速决的企图'
  }
];

// 文化特色数据 - 按城市分类
export const cultures: Culture[] = [
  // 北京文化
  {
    id: 101, cityId: 1,
    name: '京剧', description: '中国国粹，中国影响最大的戏曲剧种',
    history: '京剧形成于清代乾隆年间，由徽剧、汉剧等剧种融合发展而来',
    characteristics: ['程式化的表演方式', '脸谱艺术', '唱念做打四大艺术手段', '虚拟性的舞台表演'],
    examples: ['《霸王别姬》', '《贵妃醉酒》', '《空城计》', '《智取威虎山》'],
    significance: '京剧是中国传统文化的重要组成部分，是中华民族的文化瑰宝'
  },
  {
    id: 102, cityId: 1,
    name: '相声', description: '北方曲艺形式，以逗笑为特色',
    history: '相声起源于清代，主要在北京、天津一带发展',
    characteristics: ['说学逗唱', '逗哏捧哏', '讽刺幽默', '贴近生活'],
    examples: ['《报菜名》', '《八扇屏》', '《地理图》'],
    significance: '相声是北京文化的代表，深受人民群众喜爱'
  },

  // 上海文化
  {
    id: 201, cityId: 2,
    name: '海派文化', description: '中西交融的独特文化形态',
    history: '形成于1840年代上海开埠后',
    characteristics: ['开放包容', '中西合璧', '创新时尚', '务实精致'],
    examples: ['海派文学', '海派绘画', '海派建筑'],
    significance: '海派文化是中国近代文化转型的重要代表'
  },
  {
    id: 202, cityId: 2,
    name: '沪剧', description: '上海地方戏曲剧种',
    history: '源于上海浦东的本地山歌',
    characteristics: ['以唱为主', '都市生活', '西装旗袍戏', '细腻柔美'],
    examples: ['《罗汉钱》', '《星星之火》', '《雷雨》'],
    significance: '沪剧是上海文化的重要代表'
  },

  // 成都文化
  {
    id: 301, cityId: 3,
    name: '川剧变脸', description: '川剧中最具代表性的表演绝技',
    history: '川剧形成于清代，是四川地方戏曲的代表',
    characteristics: ['快速变脸', '吐火', '踢眼', '功底深厚'],
    examples: ['《白蛇传》', '《变脸》', '《金山寺》'],
    significance: '川剧变脸是中华文化瑰宝，被誉为"东方魔术"'
  },
  {
    id: 302, cityId: 3,
    name: '蜀绣', description: '中国四大名绣之一',
    history: '蜀绣历史悠久，起源于成都地区',
    characteristics: ['针法细腻', '色彩鲜艳', '立体感强', '雅俗共赏'],
    examples: ['《芙蓉锦鲤图》', '《熊猫图》'],
    significance: '蜀绣是中国刺绣艺术的重要组成部分'
  },

  // 西安文化
  {
    id: 401, cityId: 4,
    name: '秦腔', description: '中国最古老的剧种之一',
    history: '秦腔源于西周，历代相传',
    characteristics: ['高亢激昂', '唱念做打', '豪放粗犷', '地方特色浓郁'],
    examples: ['《三滴血》', '《周仁回府》', '《火焰驹》'],
    significance: '秦腔是西北地区最具代表性的戏曲剧种'
  },
  {
    id: 402, cityId: 4,
    name: '西安鼓乐', description: '唐代宫廷音乐的活化石',
    history: '源于唐代宫廷音乐，历代传承',
    characteristics: ['曲调悠扬', '节奏规整', '典雅庄重', '历史悠久'],
    examples: ['《鼓乐》', '《唐乐》'],
    significance: '西安鼓乐是中国古代音乐的活化石'
  },

  // 杭州文化
  {
    id: 501, cityId: 5,
    name: '龙井茶文化', description: '中国茶文化的重要代表',
    history: '龙井茶始于唐代，盛于宋代',
    characteristics: ['色绿、香郁、味甘、形美', '手工炒制', '茶艺讲究', '茶禅一味'],
    examples: ['龙井茶', '茶艺表演', '茶道'],
    significance: '龙井茶是中国名茶之首，茶文化影响深远'
  },
  {
    id: 502, cityId: 5,
    name: '西湖文化', description: '以西湖为中心的文化体系',
    history: '西湖文化始于唐代，历代文人墨客赞美',
    characteristics: ['山水相依', '人文底蕴深厚', '诗词歌赋', '园林艺术'],
    examples: ['西湖十景', '西湖诗词', '西湖传说'],
    significance: '西湖文化是中国山水文化的典范'
  },

  // 重庆文化
  {
    id: 601, cityId: 6,
    name: '火锅文化', description: '重庆饮食文化的代表',
    history: '火锅起源于重庆码头纤夫的饮食方式',
    characteristics: ['麻辣鲜香', '边煮边吃', '社交功能', '包容性强'],
    examples: ['重庆老火锅', '麻辣火锅', '九宫格火锅'],
    significance: '火锅成为重庆最具代表性的城市名片'
  },
  {
    id: 602, cityId: 6,
    name: '山城文化', description: '独特的地理环境形成的文化',
    history: '重庆依山而建，形成了独特的山城风貌',
    characteristics: ['梯坎文化', '江岸文化', '夜生活丰富', '码头文化'],
    examples: ['重庆夜景', '棒棒军', '山城步道'],
    significance: '山城文化是重庆独特地理环境的产物'
  },

  // 广州文化
  {
    id: 701, cityId: 7,
    name: '粤菜', description: '中国八大菜系之一',
    history: '粤菜历史悠久，起源于岭南地区',
    characteristics: ['清淡鲜美', '原汁原味', '烹法多样', '点心精致'],
    examples: ['白切鸡', '烧腊', '早茶点心', '煲仔饭'],
    significance: '粤菜是中国饮食文化的重要组成部分'
  },
  {
    id: 702, cityId: 7,
    name: '粤剧', description: '广东地方戏曲剧种',
    history: '粤剧形成于明代，是岭南文化的代表',
    characteristics: ['唱腔独特', '化妆华丽', '武打精彩', '中西合璧'],
    examples: ['《帝女花》', '《紫钗记》', '《荔枝颂》'],
    significance: '粤剧是岭南文化的瑰宝'
  },

  // 武汉文化
  {
    id: 1001, cityId: 10,
    name: '汉剧', description: '湖北地方戏曲剧种',
    history: '汉剧形成于清代，是京剧的重要源头',
    characteristics: ['唱腔优美', '表演细腻', '剧目丰富', '地方特色浓郁'],
    examples: ['《宇宙锋》', '《二度梅》'],
    significance: '汉剧是湖北省的重要文化符号'
  }
];

// 美食数据 - 按城市分类
export const foods: Food[] = [
  // 北京美食
  {
    id: 101, cityId: 1,
    name: '北京烤鸭', description: '北京著名的传统名菜，以色泽红艳，肉质肥而不腻，外脆里嫩著称',
    history: '北京烤鸭历史悠久，起源于南北朝时期，在明清时期成为宫廷名菜',
    ingredients: ['北京填鸭', '甜面酱', '荷叶饼', '葱丝', '黄瓜条'],
    preparation: '选用北京填鸭，经过打气、掏膛、洗膛、挂钩、烫皮、挂糖色、晾皮、烤制等多道工序',
    culturalSignificance: '北京烤鸭是北京的代表性美食，是中国饮食文化的重要组成部分',
    recommendedPlaces: ['全聚德', '大董烤鸭店', '便宜坊']
  },
  {
    id: 102, cityId: 1,
    name: '炸酱面', description: '北京最具代表性的面食',
    history: '炸酱面源于清代，是北京的传统面食',
    ingredients: ['面条', '黄酱', '肉丁', '黄瓜丝', '豆芽菜'],
    preparation: '将黄酱炒制后浇在煮好的面条上，配以菜码',
    culturalSignificance: '炸酱面是北京平民美食的代表，体现了老北京的生活文化',
    recommendedPlaces: ['海碗居', '方砖厂69号', '炸酱面馆']
  },

  // 上海美食
  {
    id: 201, cityId: 2,
    name: '小笼包', description: '上海著名点心，以皮薄馅大、汤汁丰富著称',
    history: '小笼包源于清代，是上海传统点心',
    ingredients: ['面粉', '猪肉', '肉皮冻', '姜葱'],
    preparation: '手工包制，蒸制而成，食用时先吸汤汁',
    culturalSignificance: '小笼包是上海饮食文化的代表',
    recommendedPlaces: ['南翔小笼', '佳家汤包', '鼎泰丰']
  },
  {
    id: 202, cityId: 2,
    name: '生煎包', description: '上海传统小吃，外脆里软，汁多味鲜',
    history: '生煎包源于民国时期，是上海街头常见小吃',
    ingredients: ['面粉', '猪肉', '芝麻', '葱花'],
    preparation: '包制后底部煎至金黄，撒上芝麻和葱花',
    culturalSignificance: '生煎包是上海人早餐的代表',
    recommendedPlaces: ['大壶春', '东泰祥', '舒蔡记']
  },

  // 成都美食
  {
    id: 301, cityId: 3,
    name: '成都火锅', description: '四川特色美食，以麻辣鲜香为特色',
    history: '川菜火锅起源于清代，最初是船工和纤夫的饮食方式',
    ingredients: ['火锅底料', '辣椒', '花椒', '各种肉类', '蔬菜', '豆腐'],
    preparation: '将各种食材放入煮沸的火锅底料中涮煮后食用',
    culturalSignificance: '川菜火锅是四川饮食文化的代表，体现了四川人热情豪爽的性格',
    recommendedPlaces: ['海底捞', '大龙燚', '小龙坎', '蜀九香']
  },
  {
    id: 302, cityId: 3,
    name: '串串香', description: '成都街头常见的小吃',
    history: '串串香源于80年代的成都',
    ingredients: ['各种食材', '竹签', '火锅底料'],
    preparation: '将食材穿在竹签上，放入锅中涮煮',
    culturalSignificance: '串串香是成都平民美食的代表',
    recommendedPlaces: ['钢管厂五区', '袁记串串香', '康二姐']
  },

  // 西安美食
  {
    id: 401, cityId: 4,
    name: '肉夹馍', description: '陕西传统小吃，被誉为"中国汉堡"',
    history: '肉夹馍源于战国时期，是陕西最著名的小吃',
    ingredients: ['白吉馍', '腊汁肉', '青椒', '香菜'],
    preparation: '将炖好的腊汁肉夹入烤制的白吉馍中',
    culturalSignificance: '肉夹馍是陕西饮食文化的代表',
    recommendedPlaces: ['樊记肉夹馍', '子午路张记', '秦豫肉夹馍']
  },
  {
    id: 402, cityId: 4,
    name: '羊肉泡馍', description: '陕西传统名吃',
    history: '羊肉泡馍源于西周时期，是陕西最著名的小吃',
    ingredients: ['羊肉汤', '烙饼', '羊肉', '粉丝', '木耳'],
    preparation: '将饼掰成小块，放入羊肉汤中煮制',
    culturalSignificance: '羊肉泡馍是西北饮食文化的代表',
    recommendedPlaces: ['同盛祥', '老孙家', '春发生']
  },

  // 杭州美食
  {
    id: 501, cityId: 5,
    name: '西湖醋鱼', description: '杭州传统名菜',
    history: '西湖醋鱼源于南宋时期，是杭州名菜',
    ingredients: ['草鱼', '醋', '糖', '姜', '葱'],
    preparation: '将鱼煮熟后浇上糖醋汁',
    culturalSignificance: '西湖醋鱼是杭帮菜的代表',
    recommendedPlaces: ['楼外楼', '山外山', '天外天']
  },
  {
    id: 502, cityId: 5,
    name: '龙井虾仁', description: '杭州传统名菜',
    history: '龙井虾仁源于清代，是杭州特色菜',
    ingredients: ['虾仁', '龙井茶', '盐', '蛋清'],
    preparation: '用龙井茶水滑炒虾仁',
    culturalSignificance: '龙井虾仁是杭帮菜的代表',
    recommendedPlaces: ['楼外楼', '山外山']
  },

  // 重庆美食
  {
    id: 601, cityId: 6,
    name: '重庆小面', description: '重庆传统面食',
    history: '重庆小面源于清代，是重庆最著名的小吃',
    ingredients: ['面条', '辣椒油', '花椒粉', '葱姜蒜', '酱油'],
    preparation: '将各种调料调成麻辣红汤，浇在煮好的面条上',
    culturalSignificance: '重庆小面是重庆早餐的代表',
    recommendedPlaces: ['花市豌杂面', '秦云老太婆摊摊面', '磁器口小面']
  },
  {
    id: 602, cityId: 6,
    name: '酸辣粉', description: '重庆传统小吃',
    history: '酸辣粉源于重庆民间',
    ingredients: ['红薯粉', '辣椒油', '醋', '花生', '黄豆'],
    preparation: '将红薯粉煮熟后加入调料拌匀',
    culturalSignificance: '酸辣粉是重庆街头小吃的代表',
    recommendedPlaces: ['好又来', '酸辣粉一条街']
  },

  // 广州美食
  {
    id: 701, cityId: 7,
    name: '粤菜', description: '中国八大菜系之一，以清淡鲜美著称',
    history: '粤菜历史悠久，起源于岭南地区',
    ingredients: ['海鲜', '鸡', '烧腊', '蔬菜'],
    preparation: '烹调方法多样，注重原汁原味',
    culturalSignificance: '粤菜是中国饮食文化的重要组成部分',
    recommendedPlaces: ['陶陶居', '广州酒家', '炳胜品味']
  },
  {
    id: 702, cityId: 7,
    name: '早茶', description: '广东传统饮食文化',
    history: '早茶源于清代，是广东人的生活方式',
    ingredients: ['点心', '茶水', '虾饺', '凤爪', '排骨'],
    preparation: '蒸制各种精致点心',
    culturalSignificance: '早茶是广东饮食文化的代表',
    recommendedPlaces: ['陶陶居', '点都德', '广州酒家']
  }
];

// 获取函数
export const getPersonById = (id: number): Person | undefined => persons.find(p => p.id === id);
export const getEventById = (id: number): Event | undefined => events.find(e => e.id === id);
export const getCultureById = (id: number): Culture | undefined => cultures.find(c => c.id === id);
export const getFoodById = (id: number): Food | undefined => foods.find(f => f.id === id);

export const getAllPersons = (): Person[] => persons;
export const getAllEvents = (): Event[] => events;
export const getAllCultures = (): Culture[] => cultures;
export const getAllFoods = (): Food[] => foods;

// 按城市获取数据
export const getPersonsByCityId = (cityId: number): Person[] => persons.filter(p => p.cityId === cityId);
export const getEventsByCityId = (cityId: number): Event[] => events.filter(e => e.cityId === cityId);
export const getCulturesByCityId = (cityId: number): Culture[] => cultures.filter(c => c.cityId === cityId);
export const getFoodsByCityId = (cityId: number): Food[] => foods.filter(f => f.cityId === cityId);
