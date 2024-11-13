import { modal } from '../types/enums';

const points: Ipoints[] = [
  {
    state: modal.CHINA,
    point: {
      data: 'Китай — самая древняя цивилизация на земле. В каждом китайце 5000 лет истории. А сегодня ещё и вся индустриальная мощь современного мира. В Поднебесной производят всё: от болта до паровоза. И сегодня у России с Китаем невероятно дружеские отношения. Китайцы обожают русскую культуру, восхищаются историей и с удовольствием скупают наши продукты. На международной арене государства придерживаются схожих взглядов и настаивают, что мир должен измениться и стать более справедливым.',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.INDIA,
    point: {
      data: 'Индия — самая многонаселённая страна мира, обогнавшая Китай, и самая многоязычная страна, говорящая на 400 наречиях. Мало кто знает, что именно по языковому принципу здесь развивается индустрия кино. Да, оказывается, это не только Болливуд, есть еще Толливуд, Колливуд, Сандалвуд, Бходжвуд, Джолливуд, Дхолливуд, Долливуд, Полливуд, Чхолливуд… и ещё много разных «вудов». В целом, Индия является для России отличным рынком по замещению западных товаров. И кто знает, может быть, совсем скоро, у нас появятся Боллинетфликс и Толлизон…',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.BELARUS,
    point: {
      data: 'Беларусь — одно из самых молодых государств. На карте Европы оно появилось в 1991 году. Беларусь сохранила почти все промышленные предприятия-гиганты советских лет, что играет немаловажную роль в экономике страны. Сегодня Россия и Беларусь составляют Союзное государство. Уже сейчас в стране разрабатываются десятки проектов как в сфере импортозамещения, так и в сфере прорывных технологий. Белорусская промышленность и российские научные технологии смогут изменить мир.',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.SERBIA,
    point: {
      data: 'Сербия — страна с яркими и трагичными периодами истории: от завоевания турками в XIV веке до бомбёжек NATO в XX веке. Но, несмотря на испытания, сербы сохранили свою нацию, свой выразительный характер. Жители этой страны считают себя настоящими друзьями России, и она отвечает им тем же, развивая в Сербии энергетику и помогая восстанавливать храмы. Вместе мы насчитываем тысячу лет совместной дружбы — может, поэтому сербы называют себя малыми русскими. ',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.SOUTH_AFRICA,
    point: {
      data: 'ЮАР — самое яркое государство африканского континента. Жители Южной Африки называют себя "радужная нация".\n\nЗдесь 11 официальных языков и люди всех цветов кожи уживаются под одним ярким флагом.\n\nПри этом мало кто знает, но Россию и Южную Африку объединяют более 100 лет совместной истории и деловых связей.',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.BRAZIL,
    point: {
      data: 'Бразилия — страна самбо и самбы, где первое — это название народа, а второе — естественно, танцы. На главном карнавальном шествии в этом году в ритме самбы участники буквально оттанцевали сцены из жизни созвучных потомков индейцев — самбо. Если вы не слышали о них, то точно знаете самых известных их представителей: Уго Чавеса и актера Дуэйна по прозвищу Скала. Насколько различны Бразилия и Россия по своему этническому составу, настолько схожи ментально, культурологически и даже экономически. Бразилия — наш самый западный союзник по БРИКС, но самый близкий по духу.',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.TUNIS,
    point: {
      data: 'Тунис — государство на самом севере Африки, недалеко от Сицилии — по морю 233 километра. Страна вытянулась вдоль средиземноморского побережья. Свою независимость от Франции Тунис получил в 1956 году благодаря национально-освободительной борьбе, которую возглавил первый президент страны Хабиб Бургиба, правивший 30 лет. Президента похоронили в огромном мавзолее в центре города Сус, на сооружение которого потратили 7 тонн мрамора. Тунисцы говорят: Россию и Тунис связывает в том числе и то, что «наш и ваш вождь революции лежат в мавзолеях».',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.KUBA,
    point: {
      data: 'Остров в 200 километрах от США за несколько веков своей истории был в сфере влияния разных государств. С XVI века на нём правили испанцы. В конце 1895 года кубинцы под предводительством поэта Хосе Марти объявили колонизаторам войну. Тогда же впервые на Кубе появились русские — три добровольца из Российской империи воевали на стороне восстания. Русские «мабисес» (так называли партизан) до сих пор являются героями Кубы. ',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.EGYPT,
    point: {
      data: 'Сегодняшний Египет — это крупнейшее государство севера Африки и одно из самых влиятельных на континенте. А ещё Египет — это первые страницы всех школьных учебников в большинстве стран мира. Невозможно представить античный мир и наши знания о человечестве без фараонов, иероглифов, египетских богов, реки Нил, молчаливого Сфинкса и загадочных пирамид. ',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.UAE,
    point: {
      data: 'Историю Объединённых Арабских Эмиратов можно вести с VII века нашей эры. Правда, тогда они так не назывались. На территории нынешней процветающей бизнес-державы Ближнего Востока располагались небольшие шейхства, которые входили в огромный Арабский халифат. Затем уже в XV веке в регионе начало распространяться европейское влияние. Ведь Персидский — или, как говорят здесь, Арабский — залив, на берегах которого находится государство, был крайне важной точкой для заморской торговли.',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.INDONESIA,
    point: {
      data: 'Историю Индонезии, если захотеть, можно начать за 45 000 лет до нашей эры, когда здесь появились потомки современного человека. Однако формирование государств началось с I века до нашей эры. Вплоть до XVII века за власть боролись индуистские правители. На территории нынешней Индонезии существовало несколько держав, соперничающих друг с другом.',
      name: 'Тадж-Махал'
    }
  }
];

export default (country: modal): Ipoint => {
  const foundData = points.find(data => data.state === country);
  return foundData ? foundData.point : null;
}