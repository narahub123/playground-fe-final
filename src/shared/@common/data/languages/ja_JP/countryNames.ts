const countryNames = {
  ad: "アンドラ",
  ae: "アラブ首長国連邦",
  af: "アフガニスタン",
  ag: "アンティグア・バーブーダ",
  ai: "アンギラ",
  al: "アルバニア",
  am: "アルメニア",
  ao: "アンゴラ",
  aq: "南極",
  ar: "アルゼンチン",
  as: "アメリカ領サモア",
  at: "オーストリア",
  au: "オーストラリア",
  aw: "アルバ",
  ax: "オーランド諸島",
  az: "アゼルバイジャン",
  ba: "ボスニア・ヘルツェゴビナ",
  bb: "バルバドス",
  bd: "バングラデシュ",
  be: "ベルギー",
  bf: "ブルキナファソ",
  bg: "ブルガリア",
  bh: "バーレーン",
  bi: "ブルンジ",
  bj: "ベナン",
  bl: "サン・バルテルミー",
  bm: "バミューダ",
  bn: "ブルネイ",
  bo: "ボリビア",
  bq: "ボネール、シント・ユースタティウスおよびサバ",
  br: "ブラジル",
  bs: "バハマ",
  bt: "ブータン",
  bv: "ブーベ島",
  bw: "ボツワナ",
  by: "ベラルーシ",
  bz: "ベリーズ",
  ca: "カナダ",
  cc: "ココス諸島",
  cd: "コンゴ民主共和国",
  cf: "中央アフリカ共和国",
  cg: "コンゴ共和国",
  ch: "スイス",
  ci: "コートジボワール",
  ck: "クック諸島",
  cl: "チリ",
  cm: "カメルーン",
  cn: "中国",
  co: "コロンビア",
  cr: "コスタリカ",
  cu: "キューバ",
  cv: "カーボベルデ",
  cw: "キュラソー",
  cx: "クリスマス島",
  cy: "キプロス",
  cz: "チェコ",
  de: "ドイツ",
  dj: "ジブチ",
  dk: "デンマーク",
  dm: "ドミニカ",
  doFlag: "ドミニカ共和国",
  dz: "アルジェリア",
  ec: "エクアドル",
  ee: "エストニア",
  eg: "エジプト",
  eh: "西サハラ",
  er: "エリトリア",
  es: "スペイン",
  et: "エチオピア",
  eu: "欧州連合",
  fi: "フィンランド",
  fj: "フィジー",
  fk: "フォークランド諸島",
  fm: "ミクロネシア連邦",
  fo: "フェロー諸島",
  fr: "フランス",
  ga: "ガボン",
  gb: "イギリス",
  gb_eng: "イングランド",
  gb_nir: "北アイルランド",
  gb_sct: "スコットランド",
  gb_wls: "ウェールズ",
  gd: "グレナダ",
  ge: "ジョージア",
  gf: "仏領ギアナ",
  gg: "ガーンジー",
  gh: "ガーナ",
  gi: "ジブラルタル",
  gl: "グリーンランド",
  gm: "ガンビア",
  gn: "ギニア",
  gp: "グアドループ",
  gq: "赤道ギニア",
  gr: "ギリシャ",
  gs: "南ジョージア・南サンドイッチ諸島",
  gt: "グアテマラ",
  gu: "グアム",
  gw: "ギニアビサウ",
  gy: "ガイアナ",
  hk: "香港",
  hm: "ハード島・マクドナルド諸島",
  hn: "ホンジュラス",
  hr: "クロアチア",
  ht: "ハイチ",
  hu: "ハンガリー",
  id: "インドネシア",
  ie: "アイルランド",
  il: "イスラエル",
  im: "マン島",
  inFlag: "インド",
  io: "英領インド洋地域",
  iq: "イラク",
  ir: "イラン",
  is: "アイスランド",
  it: "イタリア",
  je: "ジャージー",
  jm: "ジャマイカ",
  jo: "ヨルダン",
  jp: "日本",
  ke: "ケニア",
  kg: "キルギス",
  kh: "カンボジア",
  ki: "キリバス",
  km: "コモロ",
  kn: "セントクリストファー・ネイビス",
  kp: "北朝鮮",
  kr: "韓国",
  kw: "クウェート",
  ky: "ケイマン諸島",
  kz: "カザフスタン",
  la: "ラオス",
  lb: "レバノン",
  lc: "セントルシア",
  li: "リヒテンシュタイン",
  lk: "スリランカ",
  lr: "リベリア",
  ls: "レソト",
  lt: "リトアニア",
  lu: "ルクセンブルク",
  lv: "ラトビア",
  ly: "リビア",
  ma: "モロッコ",
  mc: "モナコ",
  md: "モルドバ",
  me: "モンテネグロ",
  mf: "サン・マルタン",
  mg: "マダガスカル",
  mh: "マーシャル諸島",
  mk: "北マケドニア",
  ml: "マリ",
  mm: "ミャンマー",
  mn: "モンゴル",
  mo: "マカオ",
  mp: "北マリアナ諸島",
  mq: "マルティニーク",
  mr: "モーリタニア",
  ms: "モントセラト",
  mt: "マルタ",
  mu: "モーリシャス",
  mv: "モルディブ",
  mw: "マラウイ",
  mx: "メキシコ",
  my: "マレーシア",
  mz: "モザンビーク",
  na: "ナミビア",
  nc: "ニューカレドニア",
  ne: "ニジェール",
  nf: "ノーフォーク島",
  ng: "ナイジェリア",
  ni: "ニカラグア",
  nl: "オランダ",
  no: "ノルウェー",
  np: "ネパール",
  nr: "ナウル",
  nu: "ニウエ",
  nz: "ニュージーランド",
  om: "オマーン",
  pa: "パナマ",
  pe: "ペルー",
  pf: "仏領ポリネシア",
  pg: "パプアニューギニア",
  ph: "フィリピン",
  pk: "パキスタン",
  pl: "ポーランド",
  pm: "サンピエール島・ミクロン島",
  pn: "ピトケアン諸島",
  pr: "プエルトリコ",
  ps: "パレスチナ",
  pt: "ポルトガル",
  pw: "パラオ",
  py: "パラグアイ",
  qa: "カタール",
  re: "レユニオン",
  ro: "ルーマニア",
  rs: "セルビア",
  ru: "ロシア",
  rw: "ルワンダ",
  sa: "サウジアラビア",
  sb: "ソロモン諸島",
  sc: "セーシェル",
  sd: "スーダン",
  se: "スウェーデン",
  sg: "シンガポール",
  sh: "セントヘレナ",
  si: "スロベニア",
  sj: "スバールバル諸島・ヤンマイエン島",
  sk: "スロバキア",
  sl: "シエラレオネ",
  sm: "サンマリノ",
  sn: "セネガル",
  so: "ソマリア",
  sr: "スリナム",
  ss: "南スーダン",
  st: "サントメ・プリンシペ",
  sv: "エルサルバドル",
  sx: "シント・マールテン",
  sy: "シリア",
  sz: "エスワティニ",
  tc: "タークス・カイコス諸島",
  td: "チャド",
  tf: "仏領極南諸島",
  tg: "トーゴ",
  th: "タイ",
  tj: "タジキスタン",
  tk: "トケラウ",
  tl: "東ティモール",
  tm: "トルクメニスタン",
  tn: "チュニジア",
  to: "トンガ",
  tr: "トルコ",
  tt: "トリニダード・トバゴ",
  tv: "ツバル",
  tw: "台湾",
  tz: "タンザニア",
  ua: "ウクライナ",
  ug: "ウガンダ",
  um: "米国領太平洋諸島",
  un: "国際連合",
  us: "アメリカ合衆国",
  uy: "ウルグアイ",
  uz: "ウズベキスタン",
  va: "バチカン市国",
  vc: "セントビンセントおよびグレナディーン諸島",
  ve: "ベネズエラ",
  vg: "英領バージン諸島",
  vi: "米領バージン諸島",
  vn: "ベトナム",
  vu: "バヌアツ",
  wf: "ワリス・フツナ",
  ws: "サモア",
  ye: "イエメン",
  yt: "マヨット",
  za: "南アフリカ共和国",
  zm: "ザンビア",
  zw: "ジンバブエ",
};

export default countryNames;