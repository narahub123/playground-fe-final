const countryNames = {
  ad: "安道爾",
  ae: "阿拉伯聯合大公國",
  af: "阿富汗",
  ag: "安地卡及巴布達",
  ai: "安圭拉",
  al: "阿爾巴尼亞",
  am: "亞美尼亞",
  ao: "安哥拉",
  aq: "南極洲",
  ar: "阿根廷",
  as: "美屬薩摩亞",
  at: "奧地利",
  au: "澳大利亞",
  aw: "阿魯巴",
  ax: "奧蘭群島",
  az: "亞塞拜然",
  ba: "波士尼亞與赫塞哥維納",
  bb: "巴巴多斯",
  bd: "孟加拉",
  be: "比利時",
  bf: "布吉納法索",
  bg: "保加利亞",
  bh: "巴林",
  bi: "蒲隆地",
  bj: "貝南",
  bl: "聖巴瑟米",
  bm: "百慕達",
  bn: "汶萊",
  bo: "玻利維亞",
  bq: "博內爾、聖尤斯特歇斯和薩巴",
  br: "巴西",
  bs: "巴哈馬",
  bt: "不丹",
  bv: "布韋島",
  bw: "波札那",
  by: "白俄羅斯",
  bz: "伯利茲",
  ca: "加拿大",
  cc: "科科斯（基林）群島",
  cd: "剛果民主共和國",
  cf: "中非共和國",
  cg: "剛果共和國",
  ch: "瑞士",
  ci: "象牙海岸",
  ck: "庫克群島",
  cl: "智利",
  cm: "喀麥隆",
  cn: "中國",
  co: "哥倫比亞",
  cr: "哥斯大黎加",
  cu: "古巴",
  cv: "佛得角",
  cw: "庫拉索",
  cx: "聖誕島",
  cy: "塞浦路斯",
  cz: "捷克共和國",
  de: "德國",
  dj: "吉布地",
  dk: "丹麥",
  dm: "多米尼克",
  doFlag: "多明尼加共和國",
  dz: "阿爾及利亞",
  ec: "厄瓜多爾",
  ee: "愛沙尼亞",
  eg: "埃及",
  eh: "西撒哈拉",
  er: "厄立特里亞",
  es: "西班牙",
  et: "衣索比亞",
  eu: "歐盟",
  fi: "芬蘭",
  fj: "斐濟",
  fk: "福克蘭群島",
  fm: "密克羅尼西亞聯邦",
  fo: "法羅群島",
  fr: "法國",
  ga: "加彭",
  gb: "英國",
  gb_eng: "英格蘭",
  gb_nir: "北愛爾蘭",
  gb_sct: "蘇格蘭",
  gb_wls: "威爾士",
  gd: "格瑞那達",
  ge: "喬治亞",
  gf: "法屬圭亞那",
  gg: "根西島",
  gh: "迦納",
  gi: "直布羅陀",
  gl: "格陵蘭",
  gm: "甘比亞",
  gn: "幾內亞",
  gp: "瓜德羅普",
  gq: "赤道幾內亞",
  gr: "希臘",
  gs: "南喬治亞與南桑威奇群島",
  gt: "瓜地馬拉",
  gu: "關島",
  gw: "幾內亞比紹",
  gy: "蓋亞那",
  hk: "香港",
  hm: "赫德島和麥克唐納群島",
  hn: "宏都拉斯",
  hr: "克羅埃西亞",
  ht: "海地",
  hu: "匈牙利",
  id: "印尼",
  ie: "愛爾蘭",
  il: "以色列",
  im: "曼島",
  inFlag: "印度",
  io: "英屬印度洋領地",
  iq: "伊拉克",
  ir: "伊朗",
  is: "冰島",
  it: "義大利",
  je: "澤西",
  jm: "牙買加",
  jo: "約旦",
  jp: "日本",
  ke: "肯亞",
  kg: "吉爾吉斯",
  kh: "柬埔寨",
  ki: "吉里巴斯",
  km: "葛摩",
  kn: "聖基茨和尼維斯",
  kp: "北韓",
  kr: "南韓",
  kw: "科威特",
  ky: "開曼群島",
  kz: "哈薩克斯坦",
  la: "寮國",
  lb: "黎巴嫩",
  lc: "聖露西亞",
  li: "列支敦斯登",
  lk: "斯里蘭卡",
  lr: "賴比瑞亞",
  ls: "賴索托",
  lt: "立陶宛",
  lu: "盧森堡",
  lv: "拉脫維亞",
  ly: "利比亞",
  ma: "摩洛哥",
  mc: "摩納哥",
  md: "摩爾多瓦",
  me: "蒙特內哥羅",
  mf: "聖馬丁",
  mg: "馬達加斯加",
  mh: "馬紹爾群島",
  mk: "北馬其頓",
  ml: "馬利",
  mm: "緬甸",
  mn: "蒙古",
  mo: "澳門",
  mp: "北馬里亞納群島",
  mq: "馬提尼克",
  mr: "茅利塔尼亞",
  ms: "蒙特色拉特島",
  mt: "馬爾他",
  mu: "模里西斯",
  mv: "馬爾地夫",
  mw: "馬拉威",
  mx: "墨西哥",
  my: "馬來西亞",
  mz: "莫三比克",
  na: "納米比亞",
  nc: "新喀里多尼亞",
  ne: "尼日",
  nf: "諾福克島",
  ng: "奈及利亞",
  ni: "尼加拉瓜",
  nl: "荷蘭",
  no: "挪威",
  np: "尼泊爾",
  nr: "諾魯",
  nu: "紐埃",
  nz: "紐西蘭",
  om: "阿曼",
  pa: "巴拿馬",
  pe: "秘魯",
  pf: "法屬玻里尼西亞",
  pg: "巴布亞紐幾內亞",
  ph: "菲律賓",
  pk: "巴基斯坦",
  pl: "波蘭",
  pm: "聖皮埃爾和密克隆",
  pn: "皮特凱恩群島",
  pr: "波多黎各",
  ps: "巴勒斯坦",
  pt: "葡萄牙",
  pw: "帛琉",
  py: "巴拉圭",
  qa: "卡達",
  re: "留尼旺",
  ro: "羅馬尼亞",
  rs: "塞爾維亞",
  ru: "俄羅斯",
  rw: "盧安達",
  sa: "沙烏地阿拉伯",
  sb: "索羅門群島",
  sc: "塞席爾",
  sd: "蘇丹",
  se: "瑞典",
  sg: "新加坡",
  sh: "聖赫勒拿、亞森松和崔斯坦達庫尼亞",
  si: "斯洛維尼亞",
  sj: "斯瓦巴和揚馬延",
  sk: "斯洛伐克",
  sl: "獅子山",
  sm: "聖馬力諾",
  sn: "塞內加爾",
  so: "索馬利亞",
  sr: "蘇利南",
  ss: "南蘇丹",
  st: "聖多美與普林西比",
  sv: "薩爾瓦多",
  sx: "聖馬丁",
  sy: "敘利亞",
  sz: "史瓦帝尼",
  tc: "特克斯和凱科斯群島",
  td: "查德",
  tf: "法屬南部和南極地區",
  tg: "多哥",
  th: "泰國",
  tj: "塔吉克斯坦",
  tk: "托克勞",
  tl: "東帝汶",
  tm: "土庫曼",
  tn: "突尼西亞",
  to: "東加",
  tr: "土耳其",
  tt: "千里達及托巴哥",
  tv: "圖瓦盧",
  tw: "台灣",
  tz: "坦尚尼亞",
  ua: "烏克蘭",
  ug: "烏干達",
  um: "美屬太平洋群島",
  un: "聯合國",
  us: "美國",
  uy: "烏拉圭",
  uz: "烏茲別克",
  va: "梵蒂岡",
  vc: "聖文森及格瑞那丁",
  ve: "委內瑞拉",
  vg: "英屬維爾京群島",
  vi: "美屬維爾京群島",
  vn: "越南",
  vu: "瓦努阿圖",
  wf: "瓦利斯和富圖納",
  ws: "薩摩亞",
  ye: "葉門",
  yt: "馬約特",
  za: "南非",
  zm: "尚比亞",
  zw: "辛巴威",
};

export default countryNames;
