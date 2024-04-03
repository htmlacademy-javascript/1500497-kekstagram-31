const NUMBERPHOTO = 25;
const MINLIKES = 15;
const MAXLIKES = 200;
const MAXCOMMENTS = 30;
const MAXAVATARNUMBER = 6;
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
]

const DESCRIPTIONS = [
  'dfggdbg',
  'hfdshnyrthewrwh',
  'thrtegrefa',
  'rtjrtjh',
  'rjykutyjrhyter',
  'tyukyulikyutjh',
  'jtuyiluykuty',
  'tuykiyujtyrte',
  'uykiutyr',
  'ukityutjrhtшжщдгнле',
  'онлегекуке',
  'огнлшенгкек',
  'глшенлгокене4',
  'шдюнглноерк',
  'тнеикпма',
  'шбгньекпуав',
  'лгбнгер4пкаувц',
  'бшгено6нр5еку',
  'ршюгпбнаьевткыиуа',
  'лбшнбгеньеткиуамц',
  'ньертвкпиаумвс',
  'геневнркыпуацу',
  'yterhger',
  'iyutkythrge',
  'u;oiylutkyrjthg',
]

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

// функция получения случайного числа в диапазоне чисел
const searchRandomNumberRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// функция получения случайного элемента массива по индексу
const getRandomElementArray = (array) => {
  return array[searchRandomNumberRange(0, array.length - 1)]
}

// функция получения случайного id
const generateUniqueID = (min, max) => {
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


const commentId = generateUniqueID(1, NUMBERPHOTO); // генератор, отвечающий за генерацию id скомментариев

// функция создания комментария записи под фото
const descriptionPhotoComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${searchRandomNumberRange(1, MAXAVATARNUMBER)}.svg`,
  message: getRandomElementArray(MESSAGES),
  name: getRandomElementArray(NAMES),
})

// функция, отвечающая за создание массива объектов (комментариев)
const createArrayObjects = () => {
  let arrayOfObjectsComments = [];
  let numberComments = searchRandomNumberRange(1, MAXCOMMENTS)
  for (let i = 0; i <= numberComments; i += 1){
    arrayOfObjectsComments.push(descriptionPhotoComment());
  };
  return arrayOfObjectsComments;
}

const PhotoId = generateUniqueID(1, NUMBERPHOTO); // генератор, отвечающий за генерацию id фотокарточек

const urlId = generateUniqueID(1, NUMBERPHOTO); // генератор, отвечающий за генерацию id url-ссылок

// функция, отвечающая за создания объекта - записи под фотокарточкой
const createOnePhotoObject = () => ({
  id: PhotoId(),
  url: `photos/${urlId()}.jpg`,
  description: getRandomElementArray(DESCRIPTIONS),
  likes: searchRandomNumberRange(MINLIKES, MAXLIKES),
  comments: createArrayObjects()
});

// функция, отвечающая за создания массива записей под фотокарточками
const createManyPhotosPosts  = () =>
  Array.from({ length: NUMBERPHOTO }, createOnePhotoObject);

console.log(createManyPhotosPosts());

