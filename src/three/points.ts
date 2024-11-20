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
      data: 'Тунис — самая северная страна Африки. А для россиян одна из самых загадочных. В античные века здесь был Карфаген, который воевал с Римом за власть над миром. С Россией эту страну связывают более чем 100 лет удивительной истории. Сегодня Тунис — туристический центр. Как живут здесь россияне и как складывается сотрудничество между нашими странами?',
      name: 'Тунис'
    }
  },
  {
    state: modal.KUBA,
    point: {
      data: 'Кубу называют Островом свободы. Все знают Фиделя Кастро и Че Гевару или слышали про сигары, ром и пляжи Варадеро. А ещё там очень любят россиян и Россию. Куба — наш союзник с советских времён. И на острове помнят об этой дружбе. Страны сохраняют исторические связи и развивают новые совместные проекты в бизнесе, промышленности и культурной сфере.',
      name: 'Республика Куба'
    }
  },
  {
    state: modal.EGYPT,
    point: {
      data: 'Древний Египет — первая страница во всех школьных учебниках. Этой истории 5 000 лет. Фараоны, сфинкс и пирамиды — их загадки и тайны увлекают людей по всему миру. С Россией у современного Египта крепкие союзнические отношения, которые начались со времен СССР. Сегодня в страну фараонов едут тысячи путешественников. А египтяне и россияне создают масштабные проекты, которые изменят будущее.',
      name: 'Тадж-Махал'
    }
  },
  {
    state: modal.UAE,
    point: {
      data: 'Сегодня Объединенные Арабские Эмираты — центр деловой жизни для всего Ближнего Востока. Современные небоскрёбы Дубая гармонично уживаются с арабскими колоритом и традициями, где до сих пор правят шейхи. Россия активно сотрудничает с ОАЭ: торговля, культура и личные связи соединяют наши страны. Восток — дело тонкое, и Россия нашла ключ для понимания его нюансов.',
      name: 'ОАЭ'
    }
  },
  {
    state: modal.INDONESIA,
    point: {
      data: 'Далекая и экзотическая Индонезия давно полюбилась российским туристам. Остров Бали стал любимым местом для тысяч путешественников. Но не только это роднит Индонезию и Россию. Здесь помнят о советской помощи, почитают Юрия Гагарина и открыты для новых совместных планов и масштабных начинаний. Индонезия стремительно превращается в надежного партнёра России в Азии.',
      name: 'Индонезия'
    }
  }
];

export default (country: modal): Ipoint => {
  const foundData = points.find(data => data.state === country);
  return foundData ? foundData.point : null;
}