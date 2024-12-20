var faq = [ {
  title: "Wait......am I getting scammed?",
  items: [{
    keywords: "test help category three third topic",
    title: "Yup, but be sure it's Hosky that is scamming you, check these policies",
    text: "List the policy ids."
  },{
    keywords: "test help category three third topic",
    title: "🤦, I looked up the policy and those wallets are enormous",
    text: "List the project wallets."
  }]
}, {
  title: "Why......WTF?",
  items: [{
    keywords: "test help category three third topic",
    title: "Seriously, a brown paper?",
    text: "Link to the Brown pawper"
  },{
    keywords: "test help category three third topic",
    title: "(Lack of) Roadmap",
    text: "Decentralization Mission"
  }]
}, {
  title: "Wot......I don't have to buy it?",
  items: [{
    keywords: "test help category one first topic",
    title: "Idjiots will give it to you",
    text: "Discord shout out here."
  }, {
    keywords: "test help category one first topic",
    title: "Sacrifice ADA to the Doggie Bowl",
    text: "Explain the doggie bowl"
  }, {
    keywords: "test help category two second topic",
    title: "Stake ADA to a Rug Pool",
    text: "Brief explanation, basic staking maff, and basic staking rules, rugpool list."
  }, {
    keywords: "test help category two second topic",
    title: "Stake C(ash grab) NFT to a Rug Pool",
    text: "Brief explanation, basic staking maff, staking rules, matching traits rugpool list"
  }
]
}, {
  title: "Where......CEX/DEX availability",
  items: [{
    keywords: "test help category four forth topic",
    title: "On da Blockchain",
    text: "FETCH, Minswap, Muesli, Wingriders, etc"
  }, {
    keywords: "test help category four forth topic",
    title: "NYK/NYC",
    text: "MEXC, Coinstore, Bitmart, GroveX, ???, ??????"
  }]
}, {
  title: "Wen......????????",
  items: [{
    keywords: "test help category four forth topic",
    title: "List all of the wen questions with a brief description",
    text: "Ok, last example."
  }]
}, {
  title: "How......idjiots think I already know this",
  items: [{
    keywords: "test help category four forth topic",
    title: "Cardano Tipbot",
    text: "Commands to use in discord, link to Cardano Tipbot info"
  }, {
    keywords: "test help category four forth topic",
    title: "Spam",
    text: "Encourage spam"
  }, {
    keywords: "test help category four forth topic",
    title: "Buy merch, not tokens....or don't",
    text: "Merch Store"
  }]
}, {
  title: "But Seriously......",
  items: [{
    keywords: "test help category four forth topic",
    title: "What hosky has done for the ecosystem",
    text: "Fill it out"
  }, {
    keywords: "test help category four forth topic",
    title: "DRep links",
    text: "Fill it out"
  }, {
    keywords: "test help category four forth topic",
    title: "Other important governance links",
    text: "Fill it out"
  }]
}]

function link(text, link) {
  return "<a href=\"" + link + "\" target=\"blank\">" + text + "</a>";
}

function brbr() {
  return br() + br();

}

function br() {
  return "<br/>";
}
