// 时间轴数据 - 按城市分类的详细历史时间轴
// 支持朝代→年的缩放级别

// 中国朝代数据
export interface Dynasty {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  color: string;
  description: string;
}

export const dynasties: Dynasty[] = [
  { id: 'prehistoric', name: '史前时代', startYear: -3000, endYear: -770, color: '#E8F5E9', description: '原始社会、夏、商、西周时期' },
  { id: 'spring-autumn', name: '春秋', startYear: -770, endYear: -476, color: '#FFF3E0', description: '春秋五霸时期' },
  { id: 'warring-states', name: '战国', startYear: -475, endYear: -221, color: '#FFEBEE', description: '战国七雄兼并战争' },
  { id: 'qin', name: '秦', startYear: -221, endYear: -207, color: '#F3E5F5', description: '中国第一个统一的封建王朝' },
  { id: 'han', name: '汉', startYear: -206, endYear: 220, color: '#E3F2FD', description: '西汉和东汉，中国历史上的黄金时代' },
  { id: 'three-kingdoms', name: '三国', startYear: 220, endYear: 280, color: '#E0F7FA', description: '魏蜀吴三国鼎立' },
  { id: 'jin', name: '晋', startYear: 266, endYear: 420, color: '#F1F8E9', description: '西晋和东晋' },
  { id: 'northern-southern', name: '南北朝', startYear: 420, endYear: 589, color: '#FFFDE7', description: '南北政权对峙时期' },
  { id: 'sui', name: '隋', startYear: 581, endYear: 618, color: '#FFE0B2', description: '再次统一中国，开创科举制' },
  { id: 'tang', name: '唐', startYear: 618, endYear: 907, color: '#FFCCBC', description: '中国封建社会的鼎盛时期' },
  { id: 'five-dynasties', name: '五代十国', startYear: 907, endYear: 960, color: '#D7CCC8', description: '短暂的分裂时期' },
  { id: 'song', name: '宋', startYear: 960, endYear: 1279, color: '#CFD8DC', description: '北宋和南宋，经济文化高度发达' },
  { id: 'yuan', name: '元', startYear: 1271, endYear: 1368, color: '#B0BEC5', description: '蒙古人建立的大一统王朝' },
  { id: 'ming', name: '明', startYear: 1368, endYear: 1644, color: '#90A4AE', description: '汉族建立的最后一个封建王朝' },
  { id: 'qing', name: '清', startYear: 1644, endYear: 1912, color: '#78909C', description: '满族建立的最后一个封建王朝' },
  { id: 'republic', name: '民国', startYear: 1912, endYear: 1949, color: '#607D8B', description: '中华民国时期' },
  { id: 'modern', name: '新中国', startYear: 1949, endYear: 2030, color: '#455A64', description: '中华人民共和国' }
];

// 时间点数据
export interface TimelinePoint {
  id: string;
  cityId: number;
  year: number;
  month?: number;
  title: string;
  description: string;
  image?: string;
  relatedPersons?: string[];
  relatedEvents?: string[];
  significance?: string;
  dynastyId?: string;
}

// 获取某个城市对应的朝代
export function getCityDynasties(cityId: number): string[] {
  const cityDynastyMap: Record<number, string[]> = {
    1: ['prehistoric', 'spring-autumn', 'warring-states', 'qin', 'han', 'tang', 'song', 'yuan', 'ming', 'qing', 'republic', 'modern'],
    2: ['prehistoric', 'spring-autumn', 'warring-states', 'qin', 'han', 'tang', 'song', 'yuan', 'ming', 'qing', 'republic', 'modern'],
    3: ['prehistoric', 'spring-autumn', 'warring-states', 'qin', 'han', 'three-kingdoms', 'tang', 'song', 'yuan', 'ming', 'qing', 'modern'],
    4: ['prehistoric', 'spring-autumn', 'warring-states', 'qin', 'han', 'tang', 'song', 'ming', 'qing', 'modern'],
    5: ['prehistoric', 'spring-autumn', 'warring-states', 'qin', 'han', 'tang', 'song', 'yuan', 'ming', 'qing', 'modern'],
    6: ['prehistoric', 'spring-autumn', 'warring-states', 'qin', 'han', 'tang', 'song', 'yuan', 'ming', 'qing', 'modern'],
    7: ['prehistoric', 'spring-autumn', 'warring-states', 'qin', 'han', 'three-kingdoms', 'jin', 'sui', 'tang', 'song', 'ming', 'qing', 'republic', 'modern'],
    8: ['prehistoric', 'spring-autumn', 'warring-states', 'qin', 'han', 'tang', 'song', 'yuan', 'ming', 'qing', 'modern'],
    9: ['prehistoric', 'qin', 'han', 'tang', 'song', 'yuan', 'ming', 'qing', 'republic', 'modern'],
    10: ['jin', 'ming', 'qing', 'modern'],
    11: ['three-kingdoms', 'jin', 'ming', 'qing', 'republic', 'modern'],
    12: ['qin', 'han', 'five-dynasties', 'ming', 'qing', 'republic', 'modern'],
    13: ['ming', 'qing', 'republic', 'modern'],
    14: ['prehistoric', 'qin', 'han', 'tang', 'song', 'ming', 'qing', 'modern'],
    15: ['prehistoric', 'qin', 'han', 'tang', 'song', 'ming', 'qing', 'modern'],
    16: ['prehistoric', 'qin', 'han', 'tang', 'song', 'ming', 'qing', 'modern'],
    17: ['prehistoric', 'qin', 'han', 'tang', 'song', 'ming', 'qing', 'modern'],
    18: ['prehistoric', 'qin', 'han', 'tang', 'song', 'ming', 'qing', 'modern'],
    19: ['prehistoric', 'qin', 'han', 'tang', 'song', 'ming', 'qing', 'modern'],
    20: ['prehistoric', 'qin', 'han', 'tang', 'song', 'ming', 'qing', 'modern']
  };
  return cityDynastyMap[cityId] || ['prehistoric', 'han', 'tang', 'song', 'ming', 'qing', 'modern'];
}

// 根据城市ID获取时间轴数据
export function getTimelinePointsByCityId(cityId: number): TimelinePoint[] {
  return timelinePoints.filter(point => point.cityId === cityId);
}

// 根据年份范围和城市获取时间轴数据
export function getTimelinePointsByRange(cityId: number, startYear: number, endYear: number): TimelinePoint[] {
  return timelinePoints.filter(point => 
    point.cityId === cityId && 
    point.year >= startYear && 
    point.year <= endYear
  );
}

// 所有城市的时间轴数据
export const timelinePoints: TimelinePoint[] = [
  // ============== 北京 (cityId: 1) ==============
  {
    id: 'bj-1045', cityId: 1, year: -1045,
    title: '蓟城始建',
    description: '周武王灭商后，封召公奭于燕，建立燕国，都城在蓟城，这是北京建城之始。',
    relatedPersons: ['周武王', '召公奭'],
    significance: '北京城市历史的开端',
    dynastyId: 'prehistoric'
  },
  {
    id: 'bj-226', cityId: 1, year: -226,
    title: '秦灭燕',
    description: '秦军攻占燕都蓟城，燕国灭亡，蓟城成为秦帝国北方的重要军事重镇。',
    relatedPersons: ['秦始皇', '王翦'],
    significance: '北京纳入统一的中央集权国家',
    dynastyId: 'qin'
  },
  {
    id: 'bj-938', cityId: 1, year: 938,
    title: '辽升幽州为南京',
    description: '辽太宗耶律德光升幽州为南京，又称燕京，作为陪都，这是北京成为都城的开始。',
    relatedPersons: ['耶律德光'],
    significance: '北京开始成为北方政治中心',
    dynastyId: 'five-dynasties'
  },
  {
    id: 'bj-1153', cityId: 1, year: 1153,
    title: '金迁都燕京',
    description: '金海陵王完颜亮迁都燕京，改名中都，北京正式成为王朝首都。',
    relatedPersons: ['完颜亮'],
    significance: '北京首次成为正式都城',
    dynastyId: 'song'
  },
  {
    id: 'bj-1267', cityId: 1, year: 1267,
    title: '忽必烈建元大都',
    description: '元世祖忽必烈在中都东北建新城，命名为大都，作为元朝首都。',
    relatedPersons: ['忽必烈', '刘秉忠'],
    significance: '奠定了现代北京城市的基础',
    dynastyId: 'yuan'
  },
  {
    id: 'bj-1368', cityId: 1, year: 1368,
    title: '明军攻占大都',
    description: '徐达率军攻占大都，改大都为北平府，明朝首都先设在南京。',
    relatedPersons: ['朱元璋', '徐达'],
    significance: '结束元朝统治',
    dynastyId: 'ming'
  },
  {
    id: 'bj-1421', cityId: 1, year: 1421,
    title: '明成祖迁都北京',
    description: '明成祖朱棣正式迁都北京，北京再次成为全国首都，明清两代沿用。',
    relatedPersons: ['朱棣'],
    significance: '确立北京作为明清都城的地位',
    dynastyId: 'ming'
  },
  {
    id: 'bj-1420', cityId: 1, year: 1420,
    title: '紫禁城建成',
    description: '紫禁城（故宫）建成，成为明清两代皇帝的皇宫，是世界上最大的宫殿建筑群。',
    relatedPersons: ['朱棣', '蒯祥'],
    significance: '中国古代宫廷建筑的巅峰',
    dynastyId: 'ming'
  },
  {
    id: 'bj-1644', cityId: 1, year: 1644,
    title: '清军入关',
    description: '清军入关，占领北京，顺治帝迁都北京，开始清朝对全国的统治。',
    relatedPersons: ['多尔衮', '顺治帝'],
    significance: '清朝定都北京',
    dynastyId: 'qing'
  },
  {
    id: 'bj-1860', cityId: 1, year: 1860,
    title: '英法联军火烧圆明园',
    description: '第二次鸦片战争中，英法联军攻占北京，洗劫并焚毁圆明园。',
    relatedPersons: ['咸丰帝', '额尔金'],
    significance: '中国近代史上的重大国耻',
    dynastyId: 'qing'
  },
  {
    id: 'bj-1900', cityId: 1, year: 1900,
    title: '八国联军侵华',
    description: '八国联军攻占北京，清廷逃亡西安，被迫签订《辛丑条约》。',
    relatedPersons: ['慈禧太后', '光绪帝'],
    significance: '中国完全沦为半殖民地半封建社会',
    dynastyId: 'qing'
  },
  {
    id: 'bj-1911', cityId: 1, year: 1911,
    title: '清帝退位',
    description: '宣统帝溥仪退位，清朝统治结束，中华民国成立。',
    relatedPersons: ['溥仪', '袁世凯', '孙中山'],
    significance: '结束封建帝制',
    dynastyId: 'republic'
  },
  {
    id: 'bj-1919', cityId: 1, year: 1919,
    title: '五四运动',
    description: '北京学生发起五四运动，抗议巴黎和会外交失败，标志着中国新民主主义革命的开始。',
    relatedPersons: ['陈独秀', '李大钊', '鲁迅'],
    significance: '中国现代史的开端',
    dynastyId: 'republic'
  },
  {
    id: 'bj-1949', cityId: 1, year: 1949,
    title: '中华人民共和国成立',
    description: '毛泽东在天安门城楼宣布中华人民共和国成立，北京成为新中国首都。',
    relatedPersons: ['毛泽东', '周恩来', '刘少奇'],
    significance: '中国现代史新纪元',
    dynastyId: 'modern'
  },
  {
    id: 'bj-2008', cityId: 1, year: 2008,
    title: '北京奥运会',
    description: '第29届夏季奥林匹克运动会在北京成功举办，向世界展示中国的发展成就。',
    relatedPersons: ['胡锦涛', '张艺谋'],
    significance: '中国国际地位提升的标志',
    dynastyId: 'modern'
  },

  // ============== 上海 (cityId: 2) ==============
  {
    id: 'sh-751', cityId: 2, year: 751,
    title: '华亭县设立',
    description: '唐朝设置华亭县，这是上海地区最早的县级行政建制。',
    relatedPersons: ['唐玄宗'],
    significance: '上海行政建制的开端',
    dynastyId: 'tang'
  },
  {
    id: 'sh-1267', cityId: 2, year: 1267,
    title: '上海镇设立',
    description: '宋朝设立上海镇，因地处上海浦（今黄浦江）而得名。',
    relatedPersons: [],
    significance: '上海名称的由来',
    dynastyId: 'song'
  },
  {
    id: 'sh-1291', cityId: 2, year: 1291,
    title: '上海县设立',
    description: '元朝将上海镇升为上海县，属松江府管辖。',
    relatedPersons: [],
    significance: '上海成为县级行政区',
    dynastyId: 'yuan'
  },
  {
    id: 'sh-1842', cityId: 2, year: 1842,
    title: '上海开埠',
    description: '《南京条约》签订，上海被开辟为通商口岸，开始了近代化进程。',
    relatedPersons: ['道光帝', '璞鼎查'],
    significance: '上海近代史的开端',
    dynastyId: 'qing'
  },
  {
    id: 'sh-1921', cityId: 2, year: 1921,
    title: '中国共产党成立',
    description: '中国共产党第一次全国代表大会在上海召开，标志着中国共产党正式成立。',
    relatedPersons: ['陈独秀', '李大钊', '毛泽东', '董必武'],
    significance: '中国革命的转折点',
    dynastyId: 'republic'
  },
  {
    id: 'sh-1949', cityId: 2, year: 1949,
    title: '上海解放',
    description: '中国人民解放军攻占上海，上海回到人民手中。',
    relatedPersons: ['陈毅', '粟裕'],
    significance: '上海新生',
    dynastyId: 'modern'
  },
  {
    id: 'sh-1990', cityId: 2, year: 1990,
    title: '浦东开发开放',
    description: '中央决定开发开放浦东，上海迎来新一轮发展机遇。',
    relatedPersons: ['邓小平', '江泽民'],
    significance: '上海改革开放的标志',
    dynastyId: 'modern'
  },
  {
    id: 'sh-2010', cityId: 2, year: 2010,
    title: '上海世博会',
    description: '第41届世界博览会在上海成功举办，主题为"城市，让生活更美好"。',
    relatedPersons: ['胡锦涛', '温家宝'],
    significance: '展示中国发展成就',
    dynastyId: 'modern'
  },

  // ============== 成都 (cityId: 3) ==============
  {
    id: 'cd-316', cityId: 3, year: -316,
    title: '秦灭巴蜀',
    description: '秦国灭巴国、蜀国，设立蜀郡，成都开始纳入中原王朝版图。',
    relatedPersons: ['秦惠文王', '司马错', '张仪'],
    significance: '成都历史的转折点',
    dynastyId: 'qin'
  },
  {
    id: 'cd-256', cityId: 3, year: -256,
    title: '都江堰修建',
    description: '蜀郡太守李冰父子主持修建都江堰水利工程，使成都平原成为天府之国。',
    relatedPersons: ['李冰', '二郎'],
    significance: '世界水利工程奇迹',
    dynastyId: 'qin'
  },
  {
    id: 'cd-221', cityId: 3, year: 221,
    title: '刘备称帝',
    description: '刘备在成都称帝，建立蜀汉政权，成都成为三国蜀汉的都城。',
    relatedPersons: ['刘备', '诸葛亮', '关羽', '张飞'],
    significance: '成都成为蜀汉都城',
    dynastyId: 'three-kingdoms'
  },
  {
    id: 'cd-759', cityId: 3, year: 759,
    title: '杜甫入蜀',
    description: '诗人杜甫因安史之乱入蜀，在成都居住近四年，创作了大量诗歌。',
    relatedPersons: ['杜甫', '严武'],
    significance: '杜甫草堂的由来',
    dynastyId: 'tang'
  },
  {
    id: 'cd-1949', cityId: 3, year: 1949,
    title: '成都解放',
    description: '中国人民解放军进驻成都，四川和平解放。',
    relatedPersons: ['刘伯承', '邓小平', '贺龙'],
    significance: '成都新生',
    dynastyId: 'modern'
  },

  // ============== 西安 (cityId: 4) ==============
  {
    id: 'xa-1046', cityId: 4, year: -1046,
    title: '西周建都丰镐',
    description: '周武王灭商后，建都丰京和镐京，这是西安建都之始。',
    relatedPersons: ['周武王', '周公旦'],
    significance: '西安成为都城的开端',
    dynastyId: 'prehistoric'
  },
  {
    id: 'xa-350', cityId: 4, year: -350,
    title: '秦迁都咸阳',
    description: '秦孝公迁都咸阳，商鞅变法使秦国强盛，为统一六国奠定基础。',
    relatedPersons: ['秦孝公', '商鞅'],
    significance: '秦国崛起的转折点',
    dynastyId: 'warring-states'
  },
  {
    id: 'xa-221', cityId: 4, year: -221,
    title: '秦始皇统一六国',
    description: '秦始皇统一六国，建立中国历史上第一个统一的中央集权王朝，定都咸阳。',
    relatedPersons: ['秦始皇', '李斯', '蒙恬'],
    significance: '中国统一的开端',
    dynastyId: 'qin'
  },
  {
    id: 'xa-206', cityId: 4, year: -206,
    title: '刘邦建立汉朝',
    description: '刘邦在长安称帝，建立汉朝，定都长安，史称西汉。',
    relatedPersons: ['刘邦', '萧何', '韩信', '张良'],
    significance: '汉朝四百年统治的开始',
    dynastyId: 'han'
  },
  {
    id: 'xa-618', cityId: 4, year: 618,
    title: '唐朝建立',
    description: '李渊建立唐朝，定都长安，开创中国封建社会的鼎盛时期。',
    relatedPersons: ['唐高祖李渊', '唐太宗李世民'],
    significance: '唐朝盛世的开端',
    dynastyId: 'tang'
  },
  {
    id: 'xa-1936', cityId: 4, year: 1936,
    title: '西安事变',
    description: '张学良、杨虎城发动西安事变，逼蒋抗日，促成国共第二次合作。',
    relatedPersons: ['张学良', '杨虎城', '蒋介石', '周恩来'],
    significance: '抗日战争的转折点',
    dynastyId: 'republic'
  },

  // ============== 杭州 (cityId: 5) ==============
  {
    id: 'hz-590', cityId: 5, year: 590,
    title: '杭州名称出现',
    description: '隋朝废钱唐郡，设杭州，这是杭州名称的开始。',
    relatedPersons: ['隋文帝'],
    significance: '杭州名称的由来',
    dynastyId: 'sui'
  },
  {
    id: 'hz-822', cityId: 5, year: 822,
    title: '白居易任杭州刺史',
    description: '白居易任杭州刺史，兴修水利，疏浚西湖，筑白堤。',
    relatedPersons: ['白居易'],
    significance: '西湖建设的开端',
    dynastyId: 'tang'
  },
  {
    id: 'hz-1089', cityId: 5, year: 1089,
    title: '苏轼任杭州知州',
    description: '苏轼任杭州知州，疏浚西湖，筑苏堤，为西湖的发展做出重要贡献。',
    relatedPersons: ['苏轼（苏东坡）'],
    significance: '西湖建设的重要阶段',
    dynastyId: 'song'
  },
  {
    id: 'hz-1127', cityId: 5, year: 1127,
    title: '南宋定都临安',
    description: '宋高宗赵构南渡，定都临安（今杭州），杭州成为南宋都城。',
    relatedPersons: ['宋高宗赵构', '岳飞', '秦桧'],
    significance: '杭州成为南宋都城',
    dynastyId: 'song'
  },
  {
    id: 'hz-1949', cityId: 5, year: 1949,
    title: '杭州解放',
    description: '中国人民解放军进驻杭州，杭州回到人民手中。',
    relatedPersons: ['粟裕', '谭震林'],
    significance: '杭州新生',
    dynastyId: 'modern'
  },

  // ============== 重庆 (cityId: 6) ==============
  {
    id: 'cq-316', cityId: 6, year: -316,
    title: '秦灭巴国',
    description: '秦国灭巴国，设立巴郡，重庆开始纳入中原王朝版图。',
    relatedPersons: ['秦惠文王', '司马错'],
    significance: '重庆历史的转折点',
    dynastyId: 'qin'
  },
  {
    id: 'cq-1189', cityId: 6, year: 1189,
    title: '重庆得名',
    description: '宋光宗赵惇先封恭王，后即帝位，自诩"双重喜庆"，升恭州为重庆府，重庆由此得名。',
    relatedPersons: ['宋光宗赵惇'],
    significance: '重庆名称的由来',
    dynastyId: 'song'
  },
  {
    id: 'cq-1259', cityId: 6, year: 1259,
    title: '钓鱼城之战',
    description: '蒙古大汗蒙哥率军攻打合州钓鱼城，宋将王坚坚守，蒙哥战死，蒙古军撤退。',
    relatedPersons: ['蒙哥汗', '王坚', '张珏'],
    significance: '改变世界历史的战役',
    dynastyId: 'song'
  },
  {
    id: 'cq-1891', cityId: 6, year: 1891,
    title: '重庆开埠',
    description: '根据《烟台条约续增专条》，重庆正式开埠，成为长江上游第一个通商口岸。',
    relatedPersons: ['李鸿章', '赫德'],
    significance: '重庆近代史的开端',
    dynastyId: 'qing'
  },
  {
    id: 'cq-1937', cityId: 6, year: 1937,
    title: '国民政府迁都重庆',
    description: '抗日战争爆发，国民政府迁都重庆，重庆成为中国战时首都。',
    relatedPersons: ['蒋介石', '林森'],
    significance: '重庆成为战时首都',
    dynastyId: 'republic'
  },
  {
    id: 'cq-1945', cityId: 6, year: 1945,
    title: '重庆谈判',
    description: '毛泽东、周恩来赴重庆与国民党进行和平谈判，签订《双十协定》。',
    relatedPersons: ['毛泽东', '周恩来', '蒋介石', '张治中'],
    significance: '争取和平民主的努力',
    dynastyId: 'republic'
  },
  {
    id: 'cq-1949', cityId: 6, year: 1949,
    title: '重庆解放',
    description: '中国人民解放军进驻重庆，重庆回到人民手中。',
    relatedPersons: ['刘伯承', '邓小平', '贺龙'],
    significance: '重庆新生',
    dynastyId: 'modern'
  },
  {
    id: 'cq-1997', cityId: 6, year: 1997,
    title: '重庆直辖',
    description: '全国人大批准设立重庆直辖市，重庆成为中国第四个直辖市。',
    relatedPersons: ['江泽民', '李鹏'],
    significance: '重庆发展的新阶段',
    dynastyId: 'modern'
  },

  // ============== 南京 (cityId: 7) ==============
  {
    id: 'nj-472', cityId: 7, year: -472,
    title: '越城修建',
    description: '越国大夫范蠡在今南京中华门外筑越城，这是南京建城之始。',
    relatedPersons: ['范蠡', '越王勾践'],
    significance: '南京城市历史的开端',
    dynastyId: 'spring-autumn'
  },
  {
    id: 'nj-229', cityId: 7, year: 229,
    title: '孙权称帝',
    description: '孙权称帝，建立吴国，定都建业（今南京），南京首次成为都城。',
    relatedPersons: ['孙权', '周瑜', '鲁肃'],
    significance: '南京成为都城的开端',
    dynastyId: 'three-kingdoms'
  },
  {
    id: 'nj-1368', cityId: 7, year: 1368,
    title: '明朝建立',
    description: '朱元璋在应天（今南京）称帝，建立明朝，定都南京。',
    relatedPersons: ['朱元璋', '徐达', '常遇春', '刘基'],
    significance: '明朝建都南京',
    dynastyId: 'ming'
  },
  {
    id: 'nj-1842', cityId: 7, year: 1842,
    title: '《南京条约》签订',
    description: '鸦片战争战败，中英签订《南京条约》，这是中国近代史上第一个不平等条约。',
    relatedPersons: ['道光帝', '耆英', '璞鼎查'],
    significance: '中国近代史的开端',
    dynastyId: 'qing'
  },
  {
    id: 'nj-1912', cityId: 7, year: 1912,
    title: '中华民国临时政府成立',
    description: '孙中山在南京就任中华民国临时大总统，中华民国临时政府成立。',
    relatedPersons: ['孙中山', '黄兴', '宋教仁'],
    significance: '中华民国的开端',
    dynastyId: 'republic'
  },
  {
    id: 'nj-1937', cityId: 7, year: 1937,
    title: '南京大屠杀',
    description: '日军攻占南京，进行惨绝人寰的南京大屠杀，30万同胞遇难。',
    relatedPersons: ['松井石根', '谷寿夫', '拉贝'],
    significance: '人类历史上的惨剧',
    dynastyId: 'republic'
  },
  {
    id: 'nj-1949', cityId: 7, year: 1949,
    title: '南京解放',
    description: '中国人民解放军攻占南京，国民党政权垮台。',
    relatedPersons: ['刘伯承', '邓小平', '陈毅'],
    significance: '南京新生',
    dynastyId: 'modern'
  },

  // ============== 广州 (cityId: 9) ==============
  {
    id: 'gz-214', cityId: 9, year: -214,
    title: '秦设南海郡',
    description: '秦始皇统一岭南，设南海郡，郡治番禺（今广州）。',
    relatedPersons: ['秦始皇', '任嚣', '赵佗'],
    significance: '广州建制的开端',
    dynastyId: 'qin'
  },
  {
    id: 'gz-1757', cityId: 9, year: 1757,
    title: '一口通商',
    description: '乾隆帝下令关闭其他海关，只保留广州一口通商，广州成为中国唯一的对外贸易口岸。',
    relatedPersons: ['乾隆帝', '十三行商人'],
    significance: '广州独揽外贸',
    dynastyId: 'qing'
  },
  {
    id: 'gz-1839', cityId: 9, year: 1839,
    title: '虎门销烟',
    description: '林则徐在广州虎门销烟，成为鸦片战争的导火索。',
    relatedPersons: ['林则徐', '道光帝', '义律'],
    significance: '鸦片战争的导火索',
    dynastyId: 'qing'
  },
  {
    id: 'gz-1924', cityId: 9, year: 1924,
    title: '黄埔军校成立',
    description: '孙中山在广州黄埔创办陆军军官学校，培养了大批军事人才。',
    relatedPersons: ['孙中山', '蒋介石', '周恩来', '廖仲恺'],
    significance: '国民革命军的摇篮',
    dynastyId: 'republic'
  },
  {
    id: 'gz-1949', cityId: 9, year: 1949,
    title: '广州解放',
    description: '中国人民解放军进驻广州，广州回到人民手中。',
    relatedPersons: ['叶剑英', '陈赓'],
    significance: '广州新生',
    dynastyId: 'modern'
  },

  // ============== 深圳 (cityId: 10) ==============
  {
    id: 'sz-1979', cityId: 10, year: 1979,
    title: '深圳建市',
    description: '国务院批准设立深圳市，这是深圳建市之始。',
    relatedPersons: ['邓小平', '叶剑英', '习仲勋'],
    significance: '深圳建市',
    dynastyId: 'modern'
  },
  {
    id: 'sz-1980', cityId: 10, year: 1980,
    title: '深圳经济特区成立',
    description: '全国人大批准设立深圳经济特区，深圳开始了改革开放的伟大历程。',
    relatedPersons: ['邓小平', '叶剑英', '习仲勋', '谷牧'],
    significance: '改革开放的窗口',
    dynastyId: 'modern'
  },
  {
    id: 'sz-1992', cityId: 10, year: 1992,
    title: '邓小平南巡讲话',
    description: '邓小平南巡并发表重要讲话，推动了新一轮改革开放。',
    relatedPersons: ['邓小平', '江泽民', '朱镕基'],
    significance: '改革开放新高潮',
    dynastyId: 'modern'
  },

  // ============== 武汉 (cityId: 11) ==============
  {
    id: 'wh-208', cityId: 11, year: 208,
    title: '赤壁之战',
    description: '孙刘联军在赤壁（今武汉附近）大破曹军，奠定三国鼎立局面。',
    relatedPersons: ['周瑜', '诸葛亮', '曹操', '黄盖'],
    significance: '三国鼎立的奠基',
    dynastyId: 'three-kingdoms'
  },
  {
    id: 'wh-1858', cityId: 11, year: 1858,
    title: '汉口开埠',
    description: '《天津条约》签订，汉口被开辟为通商口岸。',
    relatedPersons: ['咸丰帝', '桂良', '花沙纳'],
    significance: '武汉近代史的开端',
    dynastyId: 'qing'
  },
  {
    id: 'wh-1911', cityId: 11, year: 1911,
    title: '武昌起义',
    description: '武昌起义爆发，辛亥革命开始，推翻了清朝统治。',
    relatedPersons: ['孙中山', '黄兴', '黎元洪', '蒋翊武'],
    significance: '辛亥革命的开端',
    dynastyId: 'republic'
  },
  {
    id: 'wh-1949', cityId: 11, year: 1949,
    title: '武汉解放',
    description: '中国人民解放军进驻武汉，武汉回到人民手中。',
    relatedPersons: ['林彪', '罗荣桓', '刘伯承'],
    significance: '武汉新生',
    dynastyId: 'modern'
  },

  // ============== 长沙 (cityId: 12) ==============
  {
    id: 'cs-202', cityId: 12, year: -202,
    title: '吴芮封长沙王',
    description: '汉高祖刘邦封吴芮为长沙王，建立长沙国。',
    relatedPersons: ['刘邦', '吴芮'],
    significance: '长沙国的建立',
    dynastyId: 'han'
  },
  {
    id: 'cs-1927', cityId: 12, year: 1927,
    title: '秋收起义',
    description: '毛泽东领导秋收起义，随后建立井冈山革命根据地。',
    relatedPersons: ['毛泽东', '卢德铭', '余洒度'],
    significance: '农村包围城市的开端',
    dynastyId: 'republic'
  },
  {
    id: 'cs-1938', cityId: 12, year: 1938,
    title: '文夕大火',
    description: '为实行焦土抗战，长沙被纵火焚烧，全城房屋被焚毁十之八九。',
    relatedPersons: ['张治中', '蒋介石', '酆悌'],
    significance: '长沙的惨痛经历',
    dynastyId: 'republic'
  },
  {
    id: 'cs-1949', cityId: 12, year: 1949,
    title: '长沙和平解放',
    description: '程潜、陈明仁在长沙起义，长沙和平解放。',
    relatedPersons: ['程潜', '陈明仁', '毛泽东', '周恩来'],
    significance: '长沙新生',
    dynastyId: 'modern'
  },

  // ============== 天津 (cityId: 13) ==============
  {
    id: 'tj-1404', cityId: 13, year: 1404,
    title: '天津设卫',
    description: '明成祖朱棣设立天津卫，这是天津建城之始。',
    relatedPersons: ['朱棣'],
    significance: '天津城市历史的开端',
    dynastyId: 'ming'
  },
  {
    id: 'tj-1860', cityId: 13, year: 1860,
    title: '天津开埠',
    description: '《北京条约》签订，天津被开辟为通商口岸。',
    relatedPersons: ['咸丰帝', '奕䜣', '额尔金'],
    significance: '天津近代史的开端',
    dynastyId: 'qing'
  },
  {
    id: 'tj-1949', cityId: 13, year: 1949,
    title: '天津解放',
    description: '中国人民解放军进驻天津，天津回到人民手中。',
    relatedPersons: ['林彪', '罗荣桓', '刘亚楼'],
    significance: '天津新生',
    dynastyId: 'modern'
  }
];
