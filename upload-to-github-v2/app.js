const DELUNBAO_CONFIG = {
  constraints: {
    minLen: 50,
    maxLen: 90
  },
  goals: [
    { id: "sell", label: "今天想多卖点酒", desc: "让顾客看完就想下单" },
    { id: "campaign", label: "今天要发活动", desc: "把活动和时间讲明白" },
    { id: "community", label: "今天想拉人进群", desc: "让顾客加微信进群" },
    { id: "new_product", label: "今天推新品", desc: "让顾客先来尝鲜" },
    { id: "reputation", label: "今天想讲店靠谱", desc: "稳住老客和口碑" }
  ],
  styles: [
    { id: "direct", label: "直接促单", desc: "直说价格和福利" },
    { id: "warm", label: "酒友唠嗑", desc: "像平时聊天一样" },
    { id: "rush", label: "限时催单", desc: "强调今天截止" },
    { id: "trust", label: "品质推荐", desc: "突出口感和稳定" },
    { id: "vip", label: "老客关怀", desc: "强调老客专享" }
  ],
  recommendedProductIds: [
    "fresh-28",
    "fresh-small-green",
    "can-gold",
    "can-white",
    "fresh-big-green",
    "fresh-hulu",
    "can-mango",
    "can-fuma-al"
  ],
  products: [
    { id: "gift-hulu", category: "礼盒系列", name: "冰糖葫芦礼盒版", spec: "10L*1", price: "¥138" },
    { id: "gift-green", category: "礼盒系列", name: "大绿棒子礼盒版", spec: "10L*1", price: "¥128" },

    { id: "fresh-9", category: "鲜啤短保", name: "9天鲜啤", spec: "1L*4", price: "¥48" },
    { id: "fresh-28", category: "鲜啤短保", name: "28天锁鲜", spec: "1L*4", price: "¥40" },
    { id: "fresh-28-box", category: "鲜啤短保", name: "28天锁鲜箱装", spec: "1L*4", price: "¥40" },
    { id: "fresh-small-green", category: "鲜啤短保", name: "小绿棒子", spec: "1.5L*6", price: "¥72" },
    { id: "fresh-big-green", category: "鲜啤短保", name: "大绿棒子", spec: "10L*1", price: "¥98" },
    { id: "fresh-hulu", category: "鲜啤短保", name: "冰糖葫芦", spec: "10L*1", price: "¥108" },

    { id: "craft-red-horse", category: "瓶装/易拉罐", name: "红马全麦精酿", spec: "980ml*6", price: "¥120" },
    { id: "craft-black-gold", category: "瓶装/易拉罐", name: "黑金甄选", spec: "980ml*6", price: "¥120" },
    { id: "craft-hop", category: "瓶装/易拉罐", name: "酒花小麦精酿", spec: "750ml*6", price: "¥150" },
    { id: "craft-oak", category: "瓶装/易拉罐", name: "橡木桶OAK", spec: "750ml*6", price: "¥150" },
    { id: "craft-dry", category: "瓶装/易拉罐", name: "干啤", spec: "460ml*12", price: "¥60" },
    { id: "craft-wheat-470", category: "瓶装/易拉罐", name: "比利时小麦", spec: "470ml*12", price: "¥96" },
    { id: "craft-north-wheat", category: "瓶装/易拉罐", name: "北国小麦", spec: "470ml*12", price: "¥72" },
    { id: "craft-8-470", category: "瓶装/易拉罐", name: "8°原浆", spec: "470ml*12", price: "¥60" },
    { id: "craft-north-gold", category: "瓶装/易拉罐", name: "北国金麦", spec: "980ml*6", price: "¥150" },
    { id: "craft-century", category: "瓶装/易拉罐", name: "百年世纪", spec: "980ml*6", price: "¥150" },
    { id: "craft-maojian", category: "瓶装/易拉罐", name: "毛尖小麦", spec: "980ml*6", price: "¥150" },
    { id: "craft-jasmine", category: "瓶装/易拉罐", name: "茉莉小麦", spec: "980ml*6", price: "¥150" },
    { id: "craft-osmanthus", category: "瓶装/易拉罐", name: "桂花乌龙", spec: "980ml*6", price: "¥150" },
    { id: "craft-jasmine-dry", category: "瓶装/易拉罐", name: "茉莉干啤", spec: "500ml*9", price: "¥45" },
    { id: "craft-lime-barley", category: "瓶装/易拉罐", name: "青柠VS大麦", spec: "500ml*12", price: "¥48" },
    { id: "craft-8-500", category: "瓶装/易拉罐", name: "8°原浆精酿", spec: "500ml*9", price: "¥29" },
    { id: "craft-9-500", category: "瓶装/易拉罐", name: "9°原浆", spec: "500ml*12", price: "¥48" },
    { id: "craft-wheat-500", category: "瓶装/易拉罐", name: "比利时小麦", spec: "500ml*12", price: "¥72" },
    { id: "craft-barley-white", category: "瓶装/易拉罐", name: "大麦白啤", spec: "500ml*9", price: "¥59" },
    { id: "can-gold", category: "瓶装/易拉罐", name: "德伦堡小金罐", spec: "330ml*12", price: "¥60" },
    { id: "can-white", category: "瓶装/易拉罐", name: "法式白啤", spec: "330ml*12", price: "¥60" },
    { id: "can-rose", category: "瓶装/易拉罐", name: "玫红果味精酿啤酒", spec: "330ml*12", price: "¥60" },
    { id: "can-mango", category: "瓶装/易拉罐", name: "杨枝甘露精酿啤酒", spec: "330ml*12", price: "¥72" },
    { id: "can-hawthorn", category: "瓶装/易拉罐", name: "山楂小麦精酿啤酒", spec: "330ml*12", price: "¥72" },
    { id: "can-xiaofuma", category: "瓶装/易拉罐", name: "小福马", spec: "330ml*12", price: "¥39.9" },
    { id: "can-lychee", category: "瓶装/易拉罐", name: "长安荔枝酿", spec: "330ml*12", price: "¥59" },
    { id: "can-peach", category: "瓶装/易拉罐", name: "开运桃花酿", spec: "330ml*12", price: "¥59" },
    { id: "can-zero-sugar", category: "瓶装/易拉罐", name: "干小啤0糖啤酒", spec: "166ml*12", price: "¥48" },
    { id: "can-double-grapefruit", category: "瓶装/易拉罐", name: "双柚精酿", spec: "166ml*12", price: "¥60" },
    { id: "can-grape-oolong", category: "瓶装/易拉罐", name: "青提乌龙精酿", spec: "166ml*12", price: "¥60" },
    { id: "can-fuma-al", category: "瓶装/易拉罐", name: "小福马(铝罐)", spec: "335ml*12", price: "¥90" },
    { id: "can-oak", category: "瓶装/易拉罐", name: "橡木精酿", spec: "335ml*12", price: "¥108" },
    { id: "can-double-belgium", category: "瓶装/易拉罐", name: "双料比利时", spec: "335ml*12", price: "¥108" },
    { id: "can-cola", category: "瓶装/易拉罐", name: "可乐风味微醺啤酒", spec: "330ml*12", price: "¥48" },
    { id: "can-orange", category: "瓶装/易拉罐", name: "气泡橙汁", spec: "330ml*12", price: "¥60" },
    { id: "can-stout", category: "瓶装/易拉罐", name: "牛奶世涛", spec: "330ml*12", price: "¥60" },
    { id: "can-soda", category: "瓶装/易拉罐", name: "劲爽苏打汽水", spec: "330ml*12", price: "¥59" },
    { id: "can-pineapple", category: "瓶装/易拉罐", name: "大凤梨", spec: "520ml*9", price: "¥45" },
    { id: "spirit-52", category: "瓶装/易拉罐", name: "52°浓香白酒", spec: "500ml*12", price: "¥118.8" },

    { id: "keg-wheat-capsule", category: "桶鲜系列", name: "德式小麦胶囊桶", spec: "20L/桶", price: "¥200/桶" },
    { id: "keg-belgium-capsule", category: "桶鲜系列", name: "比利时胶囊桶", spec: "20L/桶", price: "¥330/桶" },
    { id: "keg-stout-capsule", category: "桶鲜系列", name: "世涛黑啤12°胶囊桶", spec: "20L/桶", price: "¥480/桶" },
    { id: "keg-berry-capsule", category: "桶鲜系列", name: "樱桃蔓越莓9°胶囊桶", spec: "20L/桶", price: "¥390/桶" },
    { id: "keg-passion-capsule", category: "桶鲜系列", name: "百香果精酿11°胶囊桶", spec: "20L/桶", price: "¥460/桶" },
    { id: "keg-wheat-us", category: "桶鲜系列", name: "德式小麦美标桶", spec: "20L/桶", price: "¥220/桶" },
    { id: "keg-belgium-us", category: "桶鲜系列", name: "比利时美标桶", spec: "20L/桶", price: "¥350/桶" },
    { id: "keg-stout-us", category: "桶鲜系列", name: "世涛黑啤12°美标桶", spec: "20L/桶", price: "¥500/桶" },
    { id: "keg-berry-us", category: "桶鲜系列", name: "樱桃蔓越莓9°美标桶", spec: "20L/桶", price: "¥410/桶" },
    { id: "keg-passion-us", category: "桶鲜系列", name: "百香果精酿11°美标桶", spec: "20L/桶", price: "¥480/桶" }
  ],
  openers: {
    direct: ["今天直接说重点", "先把实在的说清楚", "这一条就是给你下单用的"],
    warm: ["酒友们唠两句", "兄弟们报个信", "今天这条说人话"],
    rush: ["今天限时，抓紧看", "这波今晚截止", "这条是催单提醒"],
    trust: ["这款喝过都说稳", "回头客点名这款", "这款口碑一直在线"],
    vip: ["老客先看这条", "常来的朋友先领", "这条给老朋友留着" ]
  },
  styleHooks: {
    direct: ["先说福利", "直接上干货", "重点先讲明白"],
    warm: ["今天说点实在的", "这条就跟你唠两句", "不整虚的直接讲"],
    rush: ["今天这波得抓紧", "时间不等人", "先看再决定要不要冲"],
    trust: ["这款一直卖得稳", "老客回购比较多", "口感和稳定性都在线"],
    vip: ["老客先享这波", "熟客福利先发", "这条优先给老朋友"]
  },
  actions: {
    sell: ["到店直接拿", "私信我先留货", "加微信锁今天福利"],
    campaign: ["到店报这条就能领", "私信我先占名额", "加微信进群先锁福利"],
    community: ["加微信进酒友群", "私信我拉你进群", "到店扫群码先领福利"],
    new_product: ["到店先尝再定", "私信我先留一份", "加微信看新品福利"],
    reputation: ["到店先试一瓶", "私信我按口味推荐", "加微信看老客真实反馈"]
  },
  endings: {
    sell: ["想要的今天安排", "这波价很实在", "晚了容易断货"],
    campaign: ["名额有限先到先得", "今天结束就恢复原价", "早点来更稳"],
    community: ["进群后消息更快", "群里福利更及时", "老客都在群里盯活动"],
    new_product: ["这批量不大先来先得", "今天尝鲜最划算", "喝着合适再囤"],
    reputation: ["店里一直走实在路线", "回头客多不是靠说", "欢迎到店先试" ]
  },
  boosters: {
    sell: ["到店看现货更放心", "今天买更划算"],
    campaign: ["规则我给你讲明白", "今晚截止别错过"],
    community: ["进群天天有提醒", "群里还有到货播报"],
    new_product: ["新到货状态很好", "先喝再囤更稳"],
    reputation: ["喝过基本都会复购", "口感稳定不踩雷"]
  },
  leadEmojis: ["🍻", "📣", "🔥", "🎉", "✅", "🍺"],
  imageHints: {
    sell: [
      "拍主推产品+价签同框，顾客一眼就懂。",
      "拍顾客提酒离店瞬间，真实成交感更强。",
      "拍收银台福利提示卡，突出到店动作。"
    ],
    campaign: [
      "拍活动海报+主推产品同框，规则一眼看懂。",
      "拍限时限量标识特写，制造紧迫感。",
      "拍福利区或堆头图，突出到店能领到。"
    ],
    community: [
      "拍门店二维码台卡，手机一抬就能扫。",
      "拍群福利截屏(隐私打码)，强化进群价值。",
      "拍酒友小聚氛围图，传递一起喝的感觉。"
    ],
    new_product: [
      "拍新品单瓶特写，包装细节清楚。",
      "拍新品整排上架图，突出新鲜到货。",
      "拍试饮小场景，降低尝鲜门槛。"
    ],
    reputation: [
      "拍门店整齐陈列，先把靠谱感做出来。",
      "拍老客复购提货图，体现真实回头客。",
      "拍产品细节近景，配口感描述更有说服力。"
    ]
  }
};

const state = {
  goalId: "",
  styleId: "",
  seed: 0,
  lastResult: null
};

const goalOptionsEl = document.getElementById("goalOptions");
const styleOptionsEl = document.getElementById("styleOptions");
const productSelectEl = document.getElementById("productSelect");
const priceHintEl = document.getElementById("priceHint");
const activityInfoEl = document.getElementById("activityInfo");
const extraInfoEl = document.getElementById("extraInfo");

const quickGenBtn = document.getElementById("quickGenBtn");
const quickOutputEl = document.getElementById("quickOutput");
const quickMainCopyEl = document.getElementById("quickMainCopy");
const quickCopyBtn = document.getElementById("quickCopyBtn");

const generateBtn = document.getElementById("generateBtn");
const rerollBtn = document.getElementById("rerollBtn");
const copyMainBtn = document.getElementById("copyMainBtn");
const copyAllBtn = document.getElementById("copyAllBtn");

const resultCardEl = document.getElementById("resultCard");
const statusTagEl = document.getElementById("statusTag");
const mainCopyEl = document.getElementById("mainCopy");
const copyMainInlineBtn = document.getElementById("copyMainInlineBtn");
const copyAltAllBtn = document.getElementById("copyAltAllBtn");
const alternativeCardsEl = document.getElementById("alternativeCards");
const imageCardsEl = document.getElementById("imageCards");

const copyFallbackEl = document.getElementById("copyFallback");
const copyFallbackTextEl = document.getElementById("copyFallbackText");
const copyFallbackCloseBtn = document.getElementById("copyFallbackClose");

const toastEl = document.getElementById("toast");

function init() {
  renderOptions(goalOptionsEl, DELUNBAO_CONFIG.goals, state.goalId);
  renderOptions(styleOptionsEl, DELUNBAO_CONFIG.styles, state.styleId);
  renderProductSelect();
  bindEvents();
}

function renderOptions(root, options, activeId) {
  root.innerHTML = "";
  options.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-card${item.id === activeId ? " is-active" : ""}`;
    btn.dataset.id = item.id;
    btn.innerHTML = `<strong>${item.label}</strong><span>${item.desc}</span>`;
    root.appendChild(btn);
  });
}

function renderProductSelect() {
  productSelectEl.innerHTML = "";

  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "暂时不选（系统自动推荐热卖）";
  productSelectEl.appendChild(emptyOption);

  const recommendedSet = new Set(DELUNBAO_CONFIG.recommendedProductIds);
  const recommended = DELUNBAO_CONFIG.products.filter((item) => recommendedSet.has(item.id));

  if (recommended.length) {
    const recommendedGroup = document.createElement("optgroup");
    recommendedGroup.label = "推荐热卖";
    recommended.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = `${item.name}(${item.spec})`;
      recommendedGroup.appendChild(option);
    });
    productSelectEl.appendChild(recommendedGroup);
  }

  const categoryMap = DELUNBAO_CONFIG.products.reduce((map, item) => {
    if (recommendedSet.has(item.id)) return map;
    if (!map.has(item.category)) map.set(item.category, []);
    map.get(item.category).push(item);
    return map;
  }, new Map());

  for (const [category, items] of categoryMap.entries()) {
    const group = document.createElement("optgroup");
    group.label = category;
    items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = `${item.name}(${item.spec})`;
      group.appendChild(option);
    });
    productSelectEl.appendChild(group);
  }

  updatePriceHint();
}

function bindEvents() {
  goalOptionsEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-id]");
    if (!button) return;
    state.goalId = button.dataset.id;
    markActive(goalOptionsEl, state.goalId);
  });

  styleOptionsEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-id]");
    if (!button) return;
    state.styleId = button.dataset.id;
    markActive(styleOptionsEl, state.styleId);
  });

  productSelectEl.addEventListener("change", updatePriceHint);

  quickGenBtn.addEventListener("click", async () => {
    await runGenerate(false, { source: "quick", randomize: true });
  });

  generateBtn.addEventListener("click", async () => {
    await runGenerate(false, { source: "form", randomize: false });
  });

  rerollBtn.addEventListener("click", async () => {
    state.seed += 1;
    await runGenerate(true, { source: "form", randomize: false });
  });

  quickCopyBtn.addEventListener("click", async (event) => {
    const text = (state.lastResult && state.lastResult.mainCopy ? state.lastResult.mainCopy : quickMainCopyEl.textContent).trim();
    if (!text) {
      showToast("先点一键随机生成");
      return;
    }
    await copyText(text, "这条文案已复制", event.currentTarget);
  });

  copyMainBtn.addEventListener("click", async (event) => {
    await copyMainResult(event.currentTarget);
  });

  copyMainInlineBtn.addEventListener("click", async (event) => {
    await copyMainResult(event.currentTarget);
  });

  copyAltAllBtn.addEventListener("click", async (event) => {
    if (!state.lastResult) {
      showToast("还没有可复制的备选文案");
      return;
    }
    const text = state.lastResult.alternatives.map((line, idx) => `${idx + 1}. ${line}`).join("\n\n");
    await copyText(text, "备选文案已复制", event.currentTarget);
  });

  copyAllBtn.addEventListener("click", async (event) => {
    if (!state.lastResult) {
      showToast("还没有可复制的内容");
      return;
    }
    await copyText(formatAllResult(state.lastResult), "全部结果已复制", event.currentTarget);
  });

  copyFallbackCloseBtn.addEventListener("click", hideCopyFallback);

  copyFallbackEl.addEventListener("click", (event) => {
    if (event.target === copyFallbackEl) hideCopyFallback();
  });
}

async function runGenerate(isReroll, options) {
  const baseInput = collectInput();
  const input = options.randomize ? randomizeInput(baseInput) : baseInput;

  const result = generateCopy(input);
  state.lastResult = result;

  renderResult(result, options.source === "quick" ? "随机生成" : "模板生成");

  if (options.source === "quick") {
    quickMainCopyEl.textContent = result.mainCopy;
    quickOutputEl.classList.remove("hidden");
    quickOutputEl.classList.add("quick-show");
    window.setTimeout(() => quickOutputEl.classList.remove("quick-show"), 260);
  } else {
    showResultCard();
  }

  showToast(isReroll ? "已换一版文案" : "文案生成成功");
}

function showResultCard() {
  if (resultCardEl.classList.contains("result-hidden")) {
    resultCardEl.classList.remove("result-hidden");
    resultCardEl.classList.add("result-visible");
    window.setTimeout(() => resultCardEl.classList.remove("result-visible"), 260);
  }
}

function collectInput() {
  return {
    goalId: state.goalId,
    styleId: state.styleId,
    productId: productSelectEl.value,
    activityInfo: activityInfoEl.value.trim(),
    extraInfo: extraInfoEl.value.trim(),
    seed: state.seed
  };
}

function randomizeInput(input) {
  const baseSeed = input.seed + Date.now();
  return {
    ...input,
    goalId: pickBySeed(DELUNBAO_CONFIG.goals.map((item) => item.id), baseSeed + 2),
    styleId: pickBySeed(DELUNBAO_CONFIG.styles.map((item) => item.id), baseSeed + 7),
    productId: pickBySeed(DELUNBAO_CONFIG.recommendedProductIds, baseSeed + 11)
  };
}

function generateCopy(input) {
  const goalId = resolveGoal(input);
  const styleId = resolveStyle(input);
  const product = resolveProduct(input);

  const variants = [0, 1, 2].map((offset) => {
    const seed = input.seed + offset;
    return buildCopyVariant({ ...input, goalId, styleId, product, seed });
  });

  const deduped = Array.from(new Set(variants));
  while (deduped.length < 3) {
    deduped.push(buildCopyVariant({ ...input, goalId, styleId, product, seed: input.seed + deduped.length + 13 }));
  }

  return {
    mainCopy: deduped[0],
    alternatives: deduped.slice(1, 3),
    imageSuggestions: pickImageSuggestions(goalId)
  };
}

function resolveGoal(input) {
  if (input.goalId) return input.goalId;
  if (input.activityInfo) return "campaign";
  return pickBySeed(DELUNBAO_CONFIG.goals.map((item) => item.id), input.seed + 3);
}

function resolveStyle(input) {
  if (input.styleId) return input.styleId;
  return pickBySeed(DELUNBAO_CONFIG.styles.map((item) => item.id), input.seed + 5);
}

function resolveProduct(input) {
  if (input.productId) {
    const matched = findProductById(input.productId);
    if (matched) return matched;
  }

  const recommended = DELUNBAO_CONFIG.recommendedProductIds.map(findProductById).filter(Boolean);
  if (recommended.length) {
    return pickBySeed(recommended, input.seed + 7);
  }

  return DELUNBAO_CONFIG.products[Math.abs(Number(input.seed) || 0) % DELUNBAO_CONFIG.products.length];
}

function buildCopyVariant(input) {
  const opener = pickBySeed(DELUNBAO_CONFIG.openers[input.styleId], input.seed + 1);
  const hook = pickBySeed(DELUNBAO_CONFIG.styleHooks[input.styleId], input.seed + 2);
  const action = pickBySeed(DELUNBAO_CONFIG.actions[input.goalId], input.seed + 3);
  const ending = pickBySeed(DELUNBAO_CONFIG.endings[input.goalId], input.seed + 4);
  const productText = `${input.product.name}(${input.product.spec})`;
  const priceText = `目前只要 ${input.product.price}`;
  const activity = shrinkText(input.activityInfo || defaultActivityByGoal(input.goalId), 20);
  const extra = shrinkText(input.extraInfo, 16);

  let lines = [];

  if (input.goalId === "campaign") {
    lines = [
      `${hook}，${activity}`,
      `${productText}，${priceText}`,
      `${action}，${ending}`
    ];
  } else if (input.goalId === "community") {
    lines = [
      `${opener}，进群消息更快`,
      `${productText}，${priceText}`,
      extra ? `${action}，进群福利 ${extra}` : `${action}，进群就能看每日福利`
    ];
  } else if (input.goalId === "new_product") {
    lines = [
      `${hook}，新品今天先安排`,
      `${productText}，${priceText}`,
      extra ? `${action}，${extra}` : `${action}，先尝鲜再决定囤货`
    ];
  } else if (input.goalId === "reputation") {
    lines = [
      `${opener}，门店一直走实在路线`,
      `${productText}，${priceText}`,
      extra ? `${action}，真实反馈 ${extra}` : `${action}，老客回购多口感稳`
    ];
  } else {
    lines = [
      `${hook}，${opener}`,
      `${productText}，${priceText}`,
      extra ? `${activity}，${action}，${extra}` : `${activity}，${action}`
    ];
  }

  return finalizeCopy(lines, input.goalId, input.seed);
}

function finalizeCopy(rawLines, goalId, seed) {
  let lines = rawLines
    .map((line) => normalizeText(line))
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 3);

  while (lines.length < 3) {
    const booster = pickBySeed(DELUNBAO_CONFIG.boosters[goalId] || DELUNBAO_CONFIG.boosters.sell, seed + lines.length + 11);
    lines.push(booster);
  }

  lines = prependEmojiPerLine(lines, seed);
  lines = fitLengthWithThreeLines(lines, goalId, seed);

  if (!/(到店|私信|进群|加微信)/.test(lines.join("\n"))) {
    lines[2] = `${lines[2]}，到店或私信都能安排`;
  }

  if (!/[。！？]$/.test(lines[2])) {
    lines[2] += "。";
  }

  return lines.join("\n");
}

function prependEmojiPerLine(lines, seed) {
  return lines.map((line, idx) => {
    const emoji = pickBySeed(DELUNBAO_CONFIG.leadEmojis, seed + idx * 7 + 1);
    return `${emoji} ${line}`;
  });
}

function fitLengthWithThreeLines(lines, goalId, seed) {
  const minLen = DELUNBAO_CONFIG.constraints.minLen;
  const maxLen = DELUNBAO_CONFIG.constraints.maxLen;
  const boosters = DELUNBAO_CONFIG.boosters[goalId] || DELUNBAO_CONFIG.boosters.sell;

  let out = lines.join("\n");
  let guard = 0;

  while (countLen(out) < minLen && guard < 5) {
    const addon = pickBySeed(boosters, seed + 31 + guard);
    const candidateLine3 = `${lines[2]}，${addon}`;
    const candidate = [lines[0], lines[1], candidateLine3].join("\n");
    if (countLen(candidate) > maxLen) break;
    lines[2] = candidateLine3;
    out = candidate;
    guard += 1;
  }

  if (countLen(out) > maxLen) {
    const overflow = countLen(out) - maxLen;
    lines = trimOverflow(lines, overflow);
    out = lines.join("\n");
    if (countLen(out) > maxLen) {
      const lineLen = countLen(lines[2]);
      const needCut = countLen(out) - maxLen + 1;
      lines[2] = `${sliceByLen(lines[2], Math.max(8, lineLen - needCut))}…`;
    }
  }

  return lines;
}

function trimOverflow(lines, overflow) {
  let remain = overflow;
  const order = [0, 2, 1];

  order.forEach((idx) => {
    if (remain <= 0) return;
    const keep = idx === 1 ? 16 : 14;
    const currentLen = countLen(lines[idx]);
    const canCut = currentLen - keep;
    if (canCut <= 0) return;
    const cutLen = Math.min(canCut, remain);
    lines[idx] = sliceByLen(lines[idx], currentLen - cutLen).replace(/[，,、\s]+$/g, "");
    remain -= cutLen;
  });

  return lines;
}

function defaultActivityByGoal(goalId) {
  if (goalId === "campaign") return "今晚活动限时进行";
  if (goalId === "community") return "进群先领今日福利";
  if (goalId === "new_product") return "新品到店先到先得";
  if (goalId === "reputation") return "门店稳定好喝不踩雷";
  return "今天到店有实在福利";
}

function renderResult(result, modeText) {
  statusTagEl.textContent = modeText;
  mainCopyEl.textContent = result.mainCopy;

  alternativeCardsEl.innerHTML = "";
  result.alternatives.forEach((line) => {
    alternativeCardsEl.appendChild(
      createOutputItem(line, { copyable: true, buttonText: "复制这条", successMessage: "备选文案已复制" })
    );
  });

  imageCardsEl.innerHTML = "";
  result.imageSuggestions.forEach((line) => {
    imageCardsEl.appendChild(createOutputItem(line, { copyable: false }));
  });
}

function createOutputItem(text, options = {}) {
  const {
    copyable = false,
    buttonText = "复制这条",
    successMessage = "已复制"
  } = options;

  const row = document.createElement("div");
  row.className = "output-item";
  if (!copyable) row.classList.add("text-only");

  const p = document.createElement("p");
  p.className = "output-item-text";
  p.textContent = text;

  row.appendChild(p);
  if (copyable) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mini-copy-btn";
    btn.textContent = buttonText;
    btn.addEventListener("click", async (event) => {
      await copyText(text, successMessage, event.currentTarget);
    });
    row.appendChild(btn);
  }

  return row;
}

function updatePriceHint() {
  const product = findProductById(productSelectEl.value);
  if (!product) {
    priceHintEl.textContent = "价格会显示在这里。";
    return;
  }
  priceHintEl.textContent = `${product.name}(${product.spec}) 目前只要 ${product.price}`;
}

function markActive(root, selectedId) {
  root.querySelectorAll(".option-card").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.id === selectedId && selectedId !== "");
  });
}

function pickImageSuggestions(goalId) {
  const hints = DELUNBAO_CONFIG.imageHints[goalId] || DELUNBAO_CONFIG.imageHints.sell;
  return hints.slice(0, 3);
}

function formatAllResult(result) {
  return [
    "【主文案】",
    result.mainCopy,
    "",
    "【备选文案】",
    `1. ${result.alternatives[0] || ""}`,
    `2. ${result.alternatives[1] || ""}`,
    "",
    "【配图建议】",
    `1. ${result.imageSuggestions[0] || ""}`,
    `2. ${result.imageSuggestions[1] || ""}`,
    `3. ${result.imageSuggestions[2] || ""}`
  ].join("\n");
}

function findProductById(productId) {
  return DELUNBAO_CONFIG.products.find((item) => item.id === productId) || null;
}

function pickBySeed(list, seed) {
  const arr = Array.isArray(list) ? list : [];
  if (!arr.length) return "";
  return arr[Math.abs(Number(seed) || 0) % arr.length];
}

function normalizeText(text) {
  return String(text || "")
    .replace(/[（]/g, "(")
    .replace(/[）]/g, ")")
    .replace(/[【]/g, "[")
    .replace(/[】]/g, "]")
    .replace(/\s+/g, " ")
    .trim();
}

function shrinkText(text, maxLen) {
  const raw = normalizeText(text);
  if (!raw) return "";
  if (countLen(raw) <= maxLen) return raw;
  return `${sliceByLen(raw, Math.max(2, maxLen - 1))}…`;
}

function countLen(text) {
  return Array.from(String(text || "")).length;
}

function sliceByLen(text, len) {
  return Array.from(String(text || "")).slice(0, len).join("");
}

async function copyMainResult(buttonEl) {
  if (!state.lastResult) {
    showToast("还没有可复制的主文案");
    return;
  }
  await copyText(state.lastResult.mainCopy, "主文案已复制", buttonEl);
}

async function copyText(text, successMessage, triggerButton) {
  const value = String(text || "").trim();
  if (!value) {
    showToast("没有可复制内容");
    return false;
  }

  // Keep a sync path first so older mobile browsers can still copy inside click gesture.
  let copied = legacyCopy(value);

  if (!copied && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(value);
      copied = true;
    } catch (_) {
      copied = false;
    }
  }

  if (copied) {
    flashCopiedButton(triggerButton);
    showToast(successMessage);
    return true;
  }

  showCopyFallback(value);
  showToast("自动复制失败，请手动复制");
  return false;
}

function legacyCopy(value) {
  const area = document.createElement("textarea");
  area.value = value;
  area.style.position = "fixed";
  area.style.top = "-9999px";
  area.style.left = "-9999px";
  area.style.opacity = "0";
  area.style.pointerEvents = "none";
  document.body.appendChild(area);
  area.focus({ preventScroll: true });
  area.select();
  area.setSelectionRange(0, area.value.length);

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (_) {
    ok = false;
  }

  document.body.removeChild(area);
  return ok;
}

function showCopyFallback(value) {
  copyFallbackTextEl.value = value;
  if (!copyFallbackEl || !copyFallbackTextEl) { window.prompt("请手动复制下面文案", value); return; }   copyFallbackEl.classList.remove("hidden");
  copyFallbackTextEl.focus({ preventScroll: true });
  copyFallbackTextEl.select();
  copyFallbackTextEl.setSelectionRange(0, copyFallbackTextEl.value.length);
}

function hideCopyFallback() {
  if (!copyFallbackEl) return;   copyFallbackEl.classList.add("hidden");
}

function flashCopiedButton(buttonEl) {
  if (!buttonEl || !buttonEl.textContent) return;
  const original = buttonEl.textContent;
  buttonEl.textContent = "已复制";
  buttonEl.classList.add("copied-ok");
  window.setTimeout(() => {
    buttonEl.textContent = original;
    buttonEl.classList.remove("copied-ok");
  }, 1100);
}

let toastTimer = null;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.remove("hidden");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastEl.classList.add("hidden");
  }, 1700);
}

window.DELUNBAO_CONFIG = DELUNBAO_CONFIG;
window.generateCopy = generateCopy;

init();

