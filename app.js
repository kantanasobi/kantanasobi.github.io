'use strict';

/* ===== 遊びデータ（30件） ===== */
const PLAYS = [
  {
    title: 'のりもの探し',
    ages: ['0-1', '2-3'],
    situations: ['car', 'waiting'],
    description: '窓の外のトラック・バス・バイクを見つけて指さしする。',
    voice: '「あ！バスだよ！でっかいね！」',
    item: 'なし'
  },
  {
    title: 'だっこでゆらゆら',
    ages: ['0-1'],
    situations: ['car', 'tired', 'sick', 'waiting'],
    description: 'だっこしてゆっくり体をゆらす。歌を口ずさむだけでOK。',
    voice: '「よいしょよいしょ、ゆーらゆーら」',
    item: 'なし'
  },
  {
    title: 'いないいないばあ',
    ages: ['0-1'],
    situations: ['home', 'waiting', 'tired', 'sick'],
    description: '顔を両手で隠して「ばあ！」と出す。何度でも笑ってくれる。',
    voice: '「いないいない…ばあ！」',
    item: 'なし'
  },
  {
    title: '手をたたこう',
    ages: ['0-1', '2-3'],
    situations: ['home', 'waiting', 'tired'],
    description: '一緒に手をたたいてリズムを楽しむ。まねっこするだけでOK。',
    voice: '「いっしょにたたこ！パン！パン！」',
    item: 'なし'
  },
  {
    title: 'ゆびにんぎょう',
    ages: ['0-1', '2-3'],
    situations: ['home', 'waiting', 'tired', 'sick'],
    description: '親指をキャラクターに見立てて話しかける。手を動かすだけでOK。',
    voice: '「こっちは〇〇くん。はじめまして！」',
    item: 'なし'
  },
  {
    title: '足の指ぐるぐる',
    ages: ['0-1'],
    situations: ['home', 'tired', 'sick'],
    description: '赤ちゃんの足の指をやさしくまわしてあげる。歌いながらやると喜ぶ。',
    voice: '「いちのゆびがら、にのゆびがら…」',
    item: 'なし'
  },
  {
    title: '体のぶぶんタッチ',
    ages: ['0-1', '2-3'],
    situations: ['home', 'waiting', 'tired'],
    description: '体の部位を指して名前を教え合う。繰り返すうちに覚えてくる。',
    voice: '「お鼻はどこ？」',
    item: 'なし'
  },
  {
    title: 'ゆっくりストレッチ',
    ages: ['0-1', '2-3'],
    situations: ['home', 'tired', 'sick'],
    description: '手足を一緒にゆっくり伸ばす。親もちょっとだけ楽になる。',
    voice: '「いーち、にーい、ぐーんと伸ばそう！」',
    item: 'なし'
  },
  {
    title: '動物まねっこ',
    ages: ['0-1', '2-3'],
    situations: ['home', 'waiting', 'tired'],
    description: '動物の鳴き声や動きをまねする。親が大げさにやると笑ってくれる。',
    voice: '「ねこはどんな声？ニャー！」',
    item: 'なし'
  },
  {
    title: 'オノマトペゲーム',
    ages: ['0-1', '2-3'],
    situations: ['home', 'car', 'waiting'],
    description: '擬音語・擬態語を言い合う。「ふわふわ」「ざらざら」など触感もOK。',
    voice: '「犬の鳴き声は？ワンワン！」',
    item: 'なし'
  },
  {
    title: 'リズムまねっこ',
    ages: ['0-1', '2-3'],
    situations: ['home', 'waiting'],
    description: '手や膝を叩いてリズムを作り、まねっこさせる。',
    voice: '「このリズムまねできる？タン・タン・タタン！」',
    item: 'なし'
  },
  {
    title: 'じゃんけんあそび',
    ages: ['0-1', '2-3', '4-6'],
    situations: ['home', 'waiting', 'tired'],
    description: 'じゃんけんで勝ったら「やったー！」負けたら大げさに悔しがる。',
    voice: '「最初はグー、じゃんけんぽん！」',
    item: 'なし'
  },
  {
    title: '反対ことばゲーム',
    ages: ['2-3', '4-6'],
    situations: ['car', 'waiting', 'tired', 'home'],
    description: 'ことばの反対を言い合う。間違えても笑って続ける。',
    voice: '「おおきい」の反対は？',
    item: 'なし'
  },
  {
    title: 'しりとり',
    ages: ['2-3', '4-6'],
    situations: ['car', 'waiting', 'home'],
    description: 'ことばをつなげていく。2〜3歳は「ん」なしルールで優しく。',
    voice: '「りんご」→「ごりら」→次は？',
    item: 'なし'
  },
  {
    title: '色さがしゲーム',
    ages: ['2-3', '4-6'],
    situations: ['home', 'waiting', 'car'],
    description: '「赤いもの」を部屋の中や景色の中から探す。',
    voice: '「赤いものを3つ見つけよ！」',
    item: 'なし'
  },
  {
    title: 'どんな顔ゲーム',
    ages: ['2-3', '4-6'],
    situations: ['home', 'waiting', 'tired'],
    description: '気持ちの表情をまねっこする。親が先に大げさな顔をして見せる。',
    voice: '「うれしい顔はどんな顔？」',
    item: 'なし'
  },
  {
    title: '数えあそび',
    ages: ['2-3', '4-6'],
    situations: ['car', 'waiting'],
    description: '目に入るものを一緒に数える。車、電柱、信号など何でもOK。',
    voice: '「車を何台見つけられるかな？」',
    item: 'なし'
  },
  {
    title: 'おはなしのつづき',
    ages: ['2-3', '4-6'],
    situations: ['home', 'sick', 'tired', 'car'],
    description: '交互に物語を一文ずつ続けていく。オチなくてOK。',
    voice: '「むかしむかし、大きなりんごがありました。続けて！」',
    item: 'なし'
  },
  {
    title: '〇〇なものクイズ',
    ages: ['2-3', '4-6'],
    situations: ['car', 'waiting', 'home'],
    description: '「黄色い食べものといえば？」のような連想クイズ。',
    voice: '「黄色い食べものといえば？」',
    item: 'なし'
  },
  {
    title: 'なりきりゲーム',
    ages: ['2-3', '4-6'],
    situations: ['home', 'waiting'],
    description: 'お医者さん、先生、動物などになりきって会話する。',
    voice: '「今日はお医者さんだよ。どこが痛い？」',
    item: 'なし'
  },
  {
    title: '大きさ比べ',
    ages: ['2-3', '4-6'],
    situations: ['home', 'waiting'],
    description: '目の前にあるものの大きさを比べる。どちらが大きいか当て合う。',
    voice: '「テーブルと椅子どっちが大きい？」',
    item: 'なし'
  },
  {
    title: 'インタビューごっこ',
    ages: ['2-3', '4-6'],
    situations: ['home', 'tired', 'sick'],
    description: '手を丸めてマイクにして本格的にインタビュー。子が逆に聞いてくれるようにもなる。',
    voice: '「今一番食べたいものは何ですか？」',
    item: 'なし'
  },
  {
    title: 'かぞくクイズ',
    ages: ['2-3', '4-6'],
    situations: ['home', 'car', 'tired'],
    description: '家族の好きな食べもの・色・動物を当て合う。',
    voice: '「パパの好きな食べ物は何？」',
    item: 'なし'
  },
  {
    title: '手かげ絵',
    ages: ['2-3', '4-6'],
    situations: ['home', 'sick', 'tired'],
    description: '壁に手で影を作って動物などを表現する。電灯があればOK。',
    voice: '「これは何の動物に見える？」',
    item: 'なし'
  },
  {
    title: '雲なに見える？',
    ages: ['2-3', '4-6'],
    situations: ['car', 'waiting'],
    description: '空の雲が何に見えるか想像し合う。窓の外を見るだけでOK。',
    voice: '「あの雲、何に見える？」',
    item: 'なし'
  },
  {
    title: 'おかたづけ競争',
    ages: ['2-3', '4-6'],
    situations: ['home'],
    description: 'タイムを競いながら片付ける。親が大げさに悔しがるのがコツ。',
    voice: '「よーいどん！10秒で片付けた人の勝ち！」',
    item: 'なし'
  },
  {
    title: 'もしもゲーム',
    ages: ['4-6'],
    situations: ['car', 'waiting', 'sick', 'tired'],
    description: '「もし〜だったら？」を想像し合う。子どもの発想に驚く。',
    voice: '「もし空を飛べたらどこに行く？」',
    item: 'なし'
  },
  {
    title: '空想旅行',
    ages: ['4-6'],
    situations: ['car', 'sick', 'tired', 'home'],
    description: '「どこかに旅行するなら」を話し合う。何を食べる？何をする？',
    voice: '「どこに行きたい？着いたら最初に何する？」',
    item: 'なし'
  },
  {
    title: 'ひみつのつたごっこ',
    ages: ['4-6'],
    situations: ['home', 'waiting'],
    description: '耳元でそっとことばを伝え合う。小声のやりとりが楽しい。',
    voice: '「ないしょ話だよ。よく聞いて…」',
    item: 'なし'
  },
  {
    title: '元気になったら何する？',
    ages: ['2-3', '4-6'],
    situations: ['sick', 'tired'],
    description: '元気になったらやりたいことを話し合う。楽しみを一緒に考える。',
    voice: '「治ったら一番最初に何したい？」',
    item: 'なし'
  }
];

/* ===== ラベルマップ ===== */
const AGE_LABELS = {
  '0-1': '0〜1歳',
  '2-3': '2〜3歳',
  '4-6': '4〜6歳'
};
const SIT_LABELS = {
  home: '家遊び',
  waiting: '待ち時間',
  car: '車の中',
  sick: '風邪ぎみ',
  tired: 'つかれてる'
};

/* ===== 状態 ===== */
let selectedAge = null;
let selectedSituation = null;
let filteredPlays = [];
let shownCount = 0;
const PAGE_SIZE = 3;

/* ===== DOM参照 ===== */
const screenSelect = document.getElementById('screen-select');
const screenResult = document.getElementById('screen-result');
const ageGroup = document.getElementById('age-group');
const sitGroup = document.getElementById('situation-group');
const playBtn = document.getElementById('play-btn');
const backBtn = document.getElementById('back-btn');
const resultLabel = document.getElementById('result-label');
const cardsContainer = document.getElementById('cards-container');
const noResults = document.getElementById('no-results');
const moreBtn = document.getElementById('more-btn');

/* ===== チップ選択 ===== */
function setupChips(group, onSelect) {
  group.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      onSelect(chip.dataset.value);
    });
  });
}

setupChips(ageGroup, val => {
  selectedAge = val;
  updatePlayBtn();
});

setupChips(sitGroup, val => {
  selectedSituation = val;
  updatePlayBtn();
});

function updatePlayBtn() {
  playBtn.disabled = !(selectedAge && selectedSituation);
}

/* ===== あそぶ！ ===== */
playBtn.addEventListener('click', () => {
  filteredPlays = shuffle(
    PLAYS.filter(p =>
      p.ages.includes(selectedAge) &&
      p.situations.includes(selectedSituation)
    )
  );
  shownCount = 0;
  cardsContainer.innerHTML = '';

  resultLabel.textContent =
    `${AGE_LABELS[selectedAge]} × ${SIT_LABELS[selectedSituation]}`;

  screenSelect.classList.remove('active');
  screenResult.classList.add('active');
  window.scrollTo(0, 0);

  if (filteredPlays.length === 0) {
    noResults.hidden = false;
    moreBtn.hidden = true;
  } else {
    noResults.hidden = true;
    showNextBatch();
  }
});

/* ===== もどる ===== */
backBtn.addEventListener('click', () => {
  screenResult.classList.remove('active');
  screenSelect.classList.add('active');
  window.scrollTo(0, 0);
});

/* ===== もっと見る ===== */
moreBtn.addEventListener('click', showNextBatch);

/* ===== カード表示 ===== */
function showNextBatch() {
  const batch = filteredPlays.slice(shownCount, shownCount + PAGE_SIZE);
  batch.forEach((play, i) => {
    const card = createCard(play);
    card.style.animationDelay = `${i * 0.1}s`;
    cardsContainer.appendChild(card);
  });
  shownCount += batch.length;
  moreBtn.hidden = shownCount >= filteredPlays.length;
}

function createCard(play) {
  const el = document.createElement('article');
  el.className = 'card fade-in';
  el.innerHTML = `
    <h3 class="card-title">${play.title}</h3>
    <p class="card-desc">${play.description}</p>
    <div class="voice-box">
      <div class="voice-label">声かけ例</div>
      <div class="voice-text">${play.voice}</div>
    </div>
    <div class="item-row">
      <span class="item-label">必要なもの：</span>
      <span>${play.item}</span>
    </div>
  `;
  return el;
}

/* ===== ユーティリティ ===== */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
