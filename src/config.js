const initialSwapItems = [
  {
    bad: "paper napkins",
    good: "cloth napkins",
    ease: 100,
    effect: 80,
    link: "https://www.treehugger.com/clean-technology/are-paper-napkins-more-environmentally-friendly.html",    
    cost: 5,
    id: "napkins",
    tag: "dining"
  },
  {
    bad: "paper towels",
    good: "cotton towels",
    ease: 100,
    effect: 80,
    link: "https://greengroundswell.com/paper-towels-use-and-environmental-impact/2012/11/12/",
    cost: 5,
    id: "towels",
    tag: "kitchen"
  },
  {
    bad: "plastic utensils",
    good: "bamboo utensils",
    ease: 90,
    effect: 90,
    link: "https://www.conserve-energy-future.com/environmental-impact-plastic-cutlery-and-solutions.php",
    cost: 5,
    id: "utensils",
    tag: "dining"
  },
  {
    bad: "plastic bottles",
    good: "steel bottle",
    ease: 90,
    effect: 80,
    link: "http://www.gogreen.org/blog/impacts-of-plastic-water-bottles",
    cost: 20,
    id: "bottle",
    tag: "travel"
  },
  {
    bad: "plastic straws",
    good: "glass straw",
    ease: 90,
    effect: 90,
    link: "https://www.trvst.world/inspiration/environmental-impact-of-plastic-straws/",
    cost: 5,
    id: "straw",
    tag: "dining"
  },
  {
    bad: "bottled soap",
    good: "bar soap",
    ease: 100,
    effect: 100,
    link: "https://insteading.com/blog/bar-soap-better-liquid-soap/",
    cost: 10,
    id: "soap",
    tag: "bathroom"
  },
  {
    bad: "plastic bags",
    good: "reusable bag",
    ease: 100,
    effect: 90,
    link: "https://www.environment.co.za/recycling/plastic-shopping-bags-environmental-impact.html",
    cost: 1,
    id: "bag",
    tag: "shopping"
  },
  {
    bad: "dryer sheets",
    good: "dryer balls",
    ease: 100,
    effect: 90,
    link: "https://www.ecowatch.com/why-you-need-to-ditch-dryer-sheets-1881714654.html",
    cost: 5,
    id: "dryer",
    tag: "cleaning"
  },
  {
    bad: "packaged snacks",
    good: "bulk snacks",
    ease: 100,
    effect: 90,
    link: "https://edupliance.blog/2018/10/15/effects-of-food-packaging-material-on-the-environment/",
    cost: 20,
    id: "snacks",
    tag: "shopping"
  },
  {
    bad: "plastic baggies",
    good: "silicone baggies",
    ease: 100,
    effect: 90,
    link: "http://www.designlife-cycle.com/ziploc-bags",
    cost: 10,
    id: "baggies",
    tag: "kitchen"
  },
  {
      bad: "plastic wrap",
      good: "silicone wrap",
      ease: 100,
      effect: 90,
      link: "https://www.nationalgeographic.com/environment/2019/07/story-of-plastic-sticky-problem-of-plastic-wrap/",
      cost: 10,
      id: "wrap",
      tag: "kitchen"
    },
    {
      bad: "food waste",
      good: "compost",
      ease: 50,
      effect: 90,
      link: "https://www.moveforhunger.org/how-food-waste-is-harming-our-environment/",
      cost: 0,
      id: "food",
      tag: "kitchen"
    },
    {
      bad: "meat",
      good: "vegetables",
      ease: 100,
      effect: 90,
      link: "http://theconversation.com/five-ways-the-meat-on-your-plate-is-killing-the-planet-76128",
      cost: 30,
      id: "eating",
      tag: "dining"
    },
    {
      bad: "plastic containers",
      good: "glass containers",
      ease: 100,
      effect: 90,
      link: "http://mooncup.com/rethinking-plastic-single-use-food-storage/",
      cost: 3,
      id: "containers",
      tag: "dining"
    },
    {
      bad: "cosmetics",
      good: "all natural",
      ease: 100,
      effect: 100,
      link: "https://conservationfolks.com/common-beauty-industry-environmental-issues/",
      cost: 15,
      id: "cosmetics",
      tag: "bathroom"
    },
    {
      bad: "disposable razors",
      good: "metal razor",
      ease: 100,
      effect: 90,
      link: "https://www.huffpost.com/entry/disposable-razors-environment_l_5cdb237de4b0790953deb7de",
      cost: 10,
      id: "razor",
      tag: "bathroom"
    },
    {
      bad: "cotton swabs",
      good: "silicone swab",
      ease: 90,
      effect: 90,
      link: "https://earthbuddies.net/cotton-bud-alternatives/",
      cost: 5,
      id: "swabs",
      tag: "bathroom"
    },
    {
      bad: "plastic toothbrush",
      good: "biodegradable toothbrush",
      ease: 100,
      effect: 100,
      link: "https://www.nationalgeographic.com/environment/2019/06/story-of-plastic-toothbrushes/",
      cost: 0,
      id: "toothbrush",
      tag: "bathroom"
    },
    {
      bad: "plastic floss",
      good: "natural floss ",
      ease: 100,
      effect: 95,
      link: "https://citizensustainable.com/dental-floss/",
      cost: 1,
      id: "floss",
      tag: "bathroom"
    },
    {
      bad: "toothpaste tubes",
      good: "toothpaste tablets ",
      ease: 100,
      effect: 90,
      link: "https://www.1millionwomen.com.au/blog/why-i-quit-toothpaste/",
      cost: 0,
      id: "toothpaste",
      tag: "bathroom"
    },
    {
      bad: "new clothes",
      good: "second-hand clothes",
      ease: 90,
      effect: 90,
      link: "https://www.sustainyourstyle.org/old-environmental-impacts",
      cost: 15,
      id: "clothes",
      tag: "shopping"
    },
    {
      bad: "short drive",
      good: "bike or walk",
      ease: 50,
      effect: 100,
      link: "https://sciencing.com/effects-car-pollutants-environment-23581.html",
      cost: 10,
      id: "drive",
      tag: "travel"
    },
    {
      bad: "chemical cleaners",
      good: "natural cleaners",
      ease: 90,
      effect: 100,
      link: "https://blueandgreentomorrow.com/environment/how-exactly-cleaning-supplies-affect-environment/",
      cost: 5,
      id: "cleaners",
      tag: "cleaning"
    },
    {
      bad: "bottled detergent",
      good: "detergent strips",
      ease: 100,
      effect: 90,
      link: "http://lifewithoutplasticblog.com/dizolving-the-laundry-detergent-eco-disaster-while-cleaning-your-clothes/",
      cost: 0,
      id: "washer",
      tag: "cleaning"
    }
];

export default initialSwapItems;
