const NUMBER_PHOTO = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const MAX_AVATAR_NUMBER = 6;
const MAX_ID_COMMENTS = 2000;
const NAMES = [
  'Мелори',
  'Борис',
  'Алексей',
  'Изабелла',
  'Майя',
  'Рита',
  'Фокс',
  'Павел',
  'Джорж',
  'Аэций',
  'Кассиний',
  'Регул',
  'Андрей',
  'Кромвель',
  'Эдуард',
  'Вендиго'
];

const DESCRIPTIONS = [
  'Пляж на лазурном берегу',
  'Старый указатель',
  'Жаркие пляжи Тайланда',
  'Услада для мужских глаз',
  'Завтрак счастливой пары',
  'Мечта каждого мужчины (почти)',
  'Последствия задержанной зарплаты',
  'Сладкий дневной перекус',
  'Охота за самолётом',
  'Летняя обувь',
  'Крутая локация для пейнтбола',
  'Тачка ценой в несколько почек',
  'Диетический обед',
  'Котобургер',
  'Когда отключили отопление',
  'Красивый вид из кабины пилота',
  'Репетиция хорового пения',
  'Автомобиль в стиле ретро',
  'Кард из фильма ужасов',
  'Тихий вечер в дорогом отеле',
  'Мясной салат',
  'Закат на фоне спокойного океана',
  'Сухопутный краб',
  'Молодёжный концерт',
  'Добро пожаловать в Африку'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// функция получения случайного числа в диапазоне чисел
const searchRandomNumberRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// функция получения случайного элемента массива по индексу
const getRandomElementArray = (array) => array[searchRandomNumberRange(0, array.length - 1)];

// функция получения случайного неповторяющегося id
const generateUniqueId = (min, max) => {
  const usedId = [];
  return function () {
    let id = searchRandomNumberRange(min, max);
    if (usedId.length >= max - min + 1) {
      return null;
    }
    while (usedId.includes(id)) {
      id = searchRandomNumberRange(min, max);
    }
    usedId.push(id);
    return id;
  };
};


const commentId = generateUniqueId(1, MAX_ID_COMMENTS); // генератор, отвечающий за генерацию id комментариев

// функция создания комментария записи под фото
const descriptionPhotoComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${searchRandomNumberRange(1, MAX_AVATAR_NUMBER)}.svg`,
  message: getRandomElementArray(MESSAGES),
  name: getRandomElementArray(NAMES),
});

// функция, отвечающая за создание массива объектов (комментариев)
const createArrayObjects = () => {
  const arrayOfObjectsComments = [];
  const numberComments = searchRandomNumberRange(1, MAX_COMMENTS);
  for (let i = 0; i <= numberComments; i += 1){
    arrayOfObjectsComments.push(descriptionPhotoComment());
  }
  return arrayOfObjectsComments;
};

const photoId = generateUniqueId(1, NUMBER_PHOTO); // генератор, отвечающий за генерацию id фотокарточек

const urlId = generateUniqueId(1, NUMBER_PHOTO); // генератор, отвечающий за генерацию id url-ссылок

// функция, отвечающая за создания объекта - записи под фотокарточкой
const createOnePhotoObject = () => ({
  id: photoId(),
  url: `photos/${urlId()}.jpg`,
  description: getRandomElementArray(DESCRIPTIONS),
  likes: searchRandomNumberRange(MIN_LIKES, MAX_LIKES),
  comments: createArrayObjects()
});

// функция, отвечающая за создания массива записей под фотокарточками
const createManyPhotosPosts = () =>
  Array.from({ length: NUMBER_PHOTO }, createOnePhotoObject);

createManyPhotosPosts();
