const routePaths = {
  home: "/",
  savedNews: "/saved-news",
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const popupContentTypes = {
  signIn: 0,
  signUp: 1,
  success: 2,
};

const maxMobileWidth = 680;

// TODO: Remove placeholder articles list
// once News API connectivity is implemented
const articles = [
  {
    keyword: "Finance",
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "prosen@insider.com (Phil Rosen)",
    title: "10 things before the opening bell",
    description:
      "The Great Resignation continues on with new job data, Goldman Sachs named their top stock picks for 2022, and Cathie Wood dumps more Tesla stock.",
    url: "https://www.businessinsider.com/10-things-before-the-opening-bell-january-5-2022-1",
    urlToImage:
      "https://i.insider.com/61a4b96e1ca528001811999c?width=1200&format=jpeg",
    publishedAt: "2022-01-05T11:32:52Z",
    content:
      "Welcome to 10 Things Before the Opening Bell.\r\nIf this was forwarded to you, sign up here. Plus, download Insider's app for news on the go click here for iOS andhere for Android.\r\nLet's jump in. \r\n1.… [+3214 chars]",
  },
  {
    keyword: "Crypto",
    source: {
      id: null,
      name: "City A.M.",
    },
    author: "Crypto AM Daily in association with Luno",
    title:
      "Slow start for Bitcoin, but cryptocurrency is outpacing stocks and shares",
    description:
      "Bitcoin is up one per cent to just below $47k, while second-largest cryptocurrency Ethereum is up 1.5 per cent to around $3,800. \nThe post Slow start for Bitcoin, but cryptocurrency is outpacing stocks and shares appeared first on CityAM.",
    url: "https://www.cityam.com/slow-start-for-bitcoin-but-cryptocurrency-is-outpacing-stocks-and-shares/",
    urlToImage:
      "https://www.cityam.com/wp-content/uploads/2021/11/crypto-am-daily-5.jpeg",
    publishedAt: "2022-01-05T11:21:47Z",
    content:
      "Wednesday 05 January 2022 11:21 am\r\nThe cryptocurrency markets are broadly flat this morning. Bitcoin is up one per cent to just below $47k, while second-largest cryptocurrency Ethereum is up 1.5 per… [+7110 chars]",
  },
  {
    keyword: "Finance",
    source: {
      id: "bloomberg",
      name: "Bloomberg",
    },
    author: "Tim Quinson",
    title: "Bank Fees for Green Debt Surpass Fossil-Fuel Financing",
    description:
      "It’s official. For the first time since the unveiling of the Paris climate agreement in 2015, banks earned more fees arranging green-related bond sales and loans than they did helping fossil-fuel companies raise money in the debt markets.",
    url: "https://www.bloomberg.com/news/newsletters/2022-01-05/bank-fees-for-green-debt-surpass-fossil-fuel-financing",
    urlToImage:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4l4U5fYaGK0/v0/1200x800.jpg",
    publishedAt: "2022-01-05T11:15:02Z",
    content:
      "You're reading the Bloomberg Green newsletter. Sign up here to get it in your inbox daily. \r\nIn climate news today...\r\nIts official. For the first time since the unveiling of \r\nthe Paris climate agre… [+5146 chars]",
  },
  {
    keyword: "U.S.A",
    source: {
      id: null,
      name: "Seeking Alpha",
    },
    author: "AllianceBernstein (AB)",
    title: "Equity Outlook: Get Ready For Another Year Of Surprises",
    description:
      "US large-caps led the gains and weren’t derailed in late December after the Federal Reserve unveiled plans to accelerate monetary policy tightening in 2022.",
    url: "https://seekingalpha.com/article/4477984-equity-outlook-get-ready-for-another-year-of-surprises",
    urlToImage:
      "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1312255752/large_image_1312255752.jpg",
    publishedAt: "2022-01-05T11:09:00Z",
    content:
      "MicroStockHub/iStock via Getty Images\r\nBy Chris Hogbin\r\n \nGlobal equities surged in 2021 during a year full of surprises. As the new year begins, perhaps the only sure thing is that there will be mor… [+13181 chars]",
  },
  {
    keyword: "Tesla",
    source: {
      id: null,
      name: "Autocar",
    },
    author: "Jack Warrick",
    title: "Prototype battery offers claimed 752 miles on single charge",
    description:
      "American firm One's experimental battery completed a 882-mile journey in a Tesla Model S without charging \n\nAn American firm has developed a prototype electric vehicle battery that it claims can provide 752 miles of range on a single charge. \r\n\nOur Next Energ…",
    url: "https://www.autocar.co.uk/car-news/electric-cars/prototype-battery-offers-claimed-752-miles-single-charge",
    urlToImage:
      "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/screenshot_2022-01-05_at_10.39.06.jpg",
    publishedAt: "2022-01-05T11:02:26Z",
    content:
      "An American firm has developed a prototype electric vehicle battery that it claims can provide 752 miles of range on a single charge. \r\nOur Next Energy (One), a battery developer based in Michigan, i… [+1426 chars]",
  },
  {
    keyword: "Tesla",
    source: {
      id: null,
      name: "Motor Authority",
    },
    author:
      "news@motorauthority.com (Viknesh Vijayenthiran), Viknesh Vijayenthiran",
    title:
      "Sony electric crossover concept revealed, may actually be built alongside sedan",
    description:
      "Sony used the 2022 Consumer Electronics Show currently underway in Las Vegas to present the Vision-S 02 concept. The electric crossover is the follow up to the Vision-S electric sedan concept that Sony presented at CES two years ago. Even though Sony has been…",
    url: "https://www.motorauthority.com/news/1134642_sony-electric-crossover-concept-revealed-may-actually-be-built-alongside-sedan",
    urlToImage:
      "https://images.hgmsites.net/hug/sony-vision-s-02-concept_100822830_h.jpg",
    publishedAt: "2022-01-05T11:00:00Z",
    content:
      "Sony used the 2022 Consumer Electronics Show currently underway in Las Vegas to present the Vision-S 02 concept.\r\nThe electric crossover is the follow up to the Vision-S electric sedan concept that S… [+1864 chars]",
  },
  {
    keyword: "A.I.",
    source: {
      id: null,
      name: "Autocar",
    },
    author: "James Attwood",
    title: "Zeekr and Mobileye team up to develop self-driving car",
    description:
      "Chinese car maker and Intel-owned tech firm aim to launch ‘the world’s first consumer autonomous vehicle’ by 2024\n\nZeekr, a new premium electric car brand from Chinese giant Geely, has agreed a deal to work with Intel-owned Mobileye to launch what it claims w…",
    url: "https://www.autocar.co.uk/car-news/technology-news/zeekr-and-mobileye-team-develop-self-driving-car",
    urlToImage:
      "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-zeekr.jpg",
    publishedAt: "2022-01-05T10:57:52Z",
    content:
      'Zeekr, a new premium electric car brand from Chinese giant Geely, has agreed a deal to work with Intel-owned Mobileye to launch what it claims will be "the world’s first consumer autonomous vehicle" … [+1500 chars]',
  },
  {
    keyword: "Tesla",
    source: {
      id: null,
      name: "Motley Fool",
    },
    author: "newsfeedback@fool.com (Daniel Foelber)",
    title:
      "Tesla Just Gained the Combined Value of Lucid and Rivian in One Day. Time to Sell?",
    description: "Electric vehicle stocks are roaring higher to kick off 2022.",
    url: "https://www.fool.com/investing/2022/01/05/tesla-just-gained-the-combined-value-of-lucid-and/",
    urlToImage:
      "https://g.foolcdn.com/editorial/images/659805/1-rivian-r1t.jpeg",
    publishedAt: "2022-01-05T10:56:00Z",
    content:
      "Monday kicked off the new trading year with a bang as the S&amp;P 500 burst through to a fresh all-time high. Yet the most striking story was Tesla's (NASDAQ:TSLA) blowout fourth-quarter 2021 and ful… [+4817 chars]",
  },
  {
    keyword: "Tesla",
    source: {
      id: "the-irish-times",
      name: "The Irish Times",
    },
    author: "Christopher Grimes, Leo Lewis",
    title:
      "Sony launches electric vehicle company to ‘explore’ entering market",
    description: "Shares rise on news of SUV prototype",
    url: "https://www.irishtimes.com/business/manufacturing/sony-launches-electric-vehicle-company-to-explore-entering-market-1.4769241",
    urlToImage:
      "https://www.irishtimes.com/image-creator/?id=1.4769240&origw=1440",
    publishedAt: "2022-01-05T10:41:29Z",
    content:
      "Sony is launching a new company to explore entry into the electric vehicle market, joining a long list of technology groups that are considering a move into the next-generation car business.\r\nKenichi… [+3143 chars]",
  },
  {
    keyword: "Tesla",
    source: {
      id: "newsweek",
      name: "Newsweek",
    },
    author: "John Feng",
    title:
      "Joe Biden Admin. Disapproves of Elon Musk's Tesla Showroom in China's Xinjiang",
    description:
      "Tesla's Xinjiang dealership has drawn criticism as rights groups continue to raise concerns about the plight of the region's Uyghurs.",
    url: "https://www.newsweek.com/joe-biden-administration-disapproves-elon-musk-tesla-car-showroom-china-xinjiang-1665709",
    urlToImage:
      "https://d.newsweek.com/en/full/1962966/joe-biden-administration-disapproves-tesla-xinjiang.jpg",
    publishedAt: "2022-01-05T10:25:52Z",
    content:
      "The Joe Biden administration has signaled its disapproval of Tesla's decision to open a dealership in China's Xinjiang region, where the United States and several other governments say Uyghur Muslims… [+4793 chars]",
  },
  {
    keyword: "Tesla",
    source: {
      id: null,
      name: "This is Money",
    },
    author: "Rob Hull",
    title:
      "Sony unveils Vision-S 02 concept and launches new division to explore entering the EV market",
    description:
      "Electronics giant Sony unveiled Tuesday a new prototype of its Vision-S electric vehicle and announced the founding of a company to explore jumping into the...",
    url: "https://www.thisismoney.co.uk/money/cars/article-10370283/Sony-launch-firm-explore-making-electric-cars.html",
    urlToImage:
      "https://i.dailymail.co.uk/1s/2022/01/05/10/52568771-0-image-a-11_1641378048628.jpg",
    publishedAt: "2022-01-05T10:16:34Z",
    content:
      "Sony has echoed its ambitions to enter the automotive sector with the unveiling of a second concept car and the launch of a new subsidiary to explore the production of electric vehicles.\r\nDuring a pr… [+4297 chars]",
  },
  {
    keyword: "Tesla",
    source: {
      id: null,
      name: "PCMag.com",
    },
    author: "Oliver Rist",
    title: "The Best and Worst Tech Stocks of 2021 - PCMag",
    description:
      "2021 was a tough year all around, but it was especially tough on several companies that rode the pandemic wave in 2020.",
    url: "https://www.pcmag.com/news/the-best-and-worst-tech-stocks-of-2021",
    urlToImage:
      "https://i.pcmag.com/imagery/articles/05xZ4iKlRuzr9r6WlzQoPc9-2.fit_lim.size_1200x630.v1641315921.jpg",
    publishedAt: "2022-01-05T10:00:40Z",
    content:
      "2021 was supposed to be better than 2020, but for many of us, it felt more like we'd been repeatedly ravaged by a couple of pit bulls named Stalin and Genghis. That's also true in the corporate secto… [+2960 chars]",
  },
];

export { routePaths, monthNames, popupContentTypes, maxMobileWidth, articles };
