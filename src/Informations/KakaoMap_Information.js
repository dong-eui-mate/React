const title = [
  "대학본관", // 1
  "법정관", // 2
  "상경관", // 3
  "null", // 4
  "국제관", // 5
  "동의스포츠센터", // 6
  "상영관", // 7
  "수덕전", // 8
  "제1인문관", // 9
  "제2인문관", // 10
  "효민체육관", // 11
  "중앙도서관", // 12
  "여대생커리어개발관", // 13
  "제2효민생활관", // 14
  "의료보건관", // 15
  "생활과학관", // 16
  "음악관", // 17
  "창의관", // 18
  "지천관", // 19
  "산학협력관", // 20
  "건윤관", // 21
  "공학관", // 22
  "정보공학관", // 23
  "제1효민생활관", // 24
  "학생군사교육단", // 25
  "행복기숙사", // 26
];

const latlng = [
  { latitude: 35.13951161812107, longitude: 129.03350978047823 }, // 1
  { latitude: 35.139431906542, longitude: 129.03423185801213 }, // 2
  { latitude: 35.13965851691776, longitude: 129.03281131368064 }, // 3
  { latitude: 0, longitude: 0 }, // 4
  { latitude: 35.14084380508521, longitude: 129.03225934030215 }, // 5
  { latitude: 35.14002826341235, longitude: 129.03440577521258 }, // 6
  { latitude: 35.140833283979674, longitude: 129.03422833835293 }, // 7
  { latitude: 35.14160611531998, longitude: 129.03462606991135 }, // 8
  { latitude: 35.14103197431251, longitude: 129.03527551231923 }, // 9
  { latitude: 35.14171721054066, longitude: 129.0355229655907 }, // 10
  { latitude: 35.142542056848235, longitude: 129.03604269110426 }, // 11
  { latitude: 35.1424665468395, longitude: 129.0349053093561 }, // 12
  { latitude: 35.14233505221227, longitude: 129.0336129421925 }, // 13
  { latitude: 35.142963237643215, longitude: 129.03269603055097 }, // 14
  { latitude: 35.143131524083884, longitude: 129.0334078531334 }, // 15
  { latitude: 35.143713725431674, longitude: 129.03361982052797 }, // 16
  { latitude: 35.14463317097925, longitude: 129.0338730982336 }, // 17
  { latitude: 35.143712751618885, longitude: 129.03528741719256 }, // 18
  { latitude: 35.14419018165233, longitude: 129.03503051180266 }, // 19
  { latitude: 35.144808388682144, longitude: 129.03578098596395 }, // 20
  { latitude: 35.14536963208942, longitude: 129.03589919600176 }, // 21
  { latitude: 35.14433554063152, longitude: 129.03630131331926 }, // 22
  { latitude: 35.1457815731808, longitude: 129.0365896897867 }, // 23
  { latitude: 35.14376867554414, longitude: 129.0381248631926 }, // 24
  { latitude: 35.14218546746424, longitude: 129.03688405855272 }, // 25
  { latitude: 35.14193006362326, longitude: 129.0335809231687 }, // 26
];

const imagesSrc = [
  "https://cdn-icons-png.flaticon.com/128/11516/11516605.png", // 1
  "https://cdn-icons-png.flaticon.com/128/11517/11517122.png", // 2
  "https://cdn-icons-png.flaticon.com/128/11517/11517207.png", // 3
  "https://cdn-icons-png.flaticon.com/128/11517/11517292.png", // 4
  "https://cdn-icons-png.flaticon.com/128/11517/11517382.png", // 5
  "https://cdn-icons-png.flaticon.com/128/11517/11517465.png", // 6
  "https://cdn-icons-png.flaticon.com/128/11517/11517527.png", // 7
  "https://cdn-icons-png.flaticon.com/128/11517/11517564.png", // 8
  "https://cdn-icons-png.flaticon.com/128/11517/11517596.png", // 9
  "https://cdn-icons-png.flaticon.com/128/11516/11516610.png", // 10
  "https://cdn-icons-png.flaticon.com/128/11516/11516689.png", // 11
  "https://cdn-icons-png.flaticon.com/128/11516/11516774.png", // 12
  "https://cdn-icons-png.flaticon.com/128/11516/11516870.png", // 13
  "https://cdn-icons-png.flaticon.com/128/11516/11516957.png", // 14
  "https://cdn-icons-png.flaticon.com/128/11517/11517064.png", // 15
  "https://cdn-icons-png.flaticon.com/128/11517/11517084.png", // 16
  "https://cdn-icons-png.flaticon.com/128/11517/11517093.png", // 17
  "https://cdn-icons-png.flaticon.com/128/11517/11517102.png", // 18
  "https://cdn-icons-png.flaticon.com/128/11517/11517112.png", // 19
  "https://cdn-icons-png.flaticon.com/128/11517/11517132.png", // 20
  "https://cdn-icons-png.flaticon.com/128/11517/11517138.png", // 21
  "https://cdn-icons-png.flaticon.com/128/11517/11517145.png", // 22
  "https://cdn-icons-png.flaticon.com/128/11517/11517153.png", // 23
  "https://cdn-icons-png.flaticon.com/128/11517/11517161.png", // 24
  "https://cdn-icons-png.flaticon.com/128/11517/11517169.png", // 25
  "https://cdn-icons-png.flaticon.com/128/11517/11517177.png", // 26
];

const facilitiesData = [
  ["서류출력기기", "장학지원팀", "ATM"],
  ["정독실"],
  ["GS"],
  ["X"],
  ["식당", "GS", "서브웨이"],
  ["체육관"],
  ["스쿼시장", "동아리방", "서점"],
  ["식당", "CU", "총학생회", "컵밥"],
  ["X"],
  ["CU"],
  ["체육관"],
  ["중앙도서관", "박물관", "카페"],
  ["여대생커리어개발센터"],
  ["CU"],
  ["헌혈의집"],
  ["GS"],
  ["예체능"],
  ["샤워실"],
  ["CU", "ATM", "핫도그", "맘스터치"],
  ["메이커스빌"],
  ["X"],
  ["GS", "원조등대"],
  ["식당", "GS"],
  ["X"],
  ["ROTC"],
  ["투썸플레이스", "세븐일레븐"],
];

export { title, latlng, imagesSrc, facilitiesData };
