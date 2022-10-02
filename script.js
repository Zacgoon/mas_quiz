// ** 할거 : 스프레드 시트를 이용하여 DB 만들기 **
hardmode = 0; // 하드모드 플레그함수
hardmode_answer = 1; // 하드모드 제출 클릭 함수용 변수
flag = ""; // 음악의 태그
notran = [""]; // 재생한 음악을 담는 배열
randp = 100000; // 랜덤함수의 크기 상수
beta_mode = 0;
beta_randp = 10000;
cor_ans = 0;
winpoint = 1; // 정답을 입력시 정답 처리 변수
win = 0; // 정답 변수
lose = 0; // 포기 변수
rate = 0; // 정답 비율 변수
function submit() {
    hardmode_answer = 1;
    document.getElementById("songchangebutton").style.visibility = "";
    document.getElementById("songchangebutton").className = "btn btn-success";
    document.getElementById("score_list").src =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZOVdX2ekWTiWZ36rn4aDnOK6eECsHjr3Pu6QQZ1VsyoX40euYMQQiSqQsarvdvS-Hb6_cbJoiUjZP/pubhtml?widget=true&amp;headers=false";
    hints = ""; // 힌트 비워두기
    answer = new Array(
        "날먹하지마요",
        "dkssudgktpdy!",
        "tnaruwls",
        "zhemdlqslek",
        "dlrjfckwdmtleksl",
        "eoeksgktlqselk",
        "M@STERkey",
        "M@STERkey",
        "M@STERkey"
    );
    if (true) { //밀리 셀렉터
        if (randp == 1 || randp == 2) {
            hints = "ㅍㅍㅅㅋㅇ";
            answer[0] = "purple sky";
            answer[1] = "Purple Sky";
            answer[2] = "purplesky";
            answer[3] = "PurpleSky";
            answer[4] = "퍼플스카이";
            answer[5] = "퍼플 스카이";
            answer[6] = "보라 하늘";
            answer[7] = "PURPLE SKY";
        }
        if (randp == 3 || randp == 4) {
            hints = "ㅇㄷㄴㅇㅇㅂㄹㅂ";
            answer[0] = "…In The Name Of。 …LOVE?";
            answer[1] = "in the name of love";
            answer[2] = "in the name of love?";
            answer[3] = "inthenameoflove";
            answer[4] = "인더네임오브러브";
            answer[5] = "인 더 네임 오브 러브";
            answer[6] = "인 더 내임 오브 러브";
            answer[7] = "인 더 네임 오브 러브?";
        }
        if (randp == 0 || randp == 5) {
            hints = "ㅇㅅㄹㅌㄹ!!!";
            answer[0] = "ABSOLUTE RUN!!!";
            answer[1] = "앱솔루트런";
            answer[2] = "absolute run";
            answer[3] = "앱솔루트 런!!!";
            answer[4] = "앱솔루트 런";
            answer[5] = "앱솔런";
            answer[6] = "absolute run!!!";
            answer[7] = "앱솔루트런!!!";
        }
        if (randp == 6 || randp == 7) {
            hints = "ㅇㄷㅌㄷ";
            answer[0] = "addicted";
            answer[1] = "Addicted";
            answer[2] = "어딕티드";
            answer[3] = "에딕티드";
            answer[4] = "애딕티드";
            answer[5] = "중독";
        }
        if (randp == 8 || randp == 9) {
            hints = "ㅇㄹㅇㅂㅇ~ㄱㄱㅇㅇㅁㅇㄹㄷ~";
            answer[0] = "Arrive You ~それが運命でも~";
            answer[1] = "Arrive You ~그것이 운명이라도~";
            answer[2] = "arrive you";
            answer[3] = "어라이브유";
            answer[4] = "어라이브 유";
            answer[5] = "arriveyou";
            answer[6] = "어라이브 유 ~그것이 운명이라도~";
            answer[7] = "arrive you ~그것이 운명이라도~";
        }
        if (randp == 10 || randp == 11) {
            hints = "ㅇㅌㄴㅈㅎㅌㅂㅊ";
            answer[0] = "ART NEEDS HEART BEATS";
            answer[1] = "art needs heart beats";
            answer[2] = "artneedsheartbeats";
            answer[3] = "아트 니드 하트 비트";
            answer[4] = "아트니드하트비트";
            answer[5] = "Art needs heart beats";
            answer[6] = "아트 니즈 하트 비츠";
            answer[7] = "art need heart beat";
        }
        if (randp == 12 || randp == 13) {
            hints = "ㅂㅁㅇㅂㅇ";
            answer[0] = "Be My Boy";
            answer[1] = "be my boy";
            answer[2] = "비 마이 보이";
            answer[3] = "비마이보이";
            answer[4] = "Be my boy";
            answer[5] = "bemyboy";
        }
        if (randp == 14 || randp == 15) {
            hints = "ㅂㅍㄹㅇㄷ";
            answer[0] = "Be Proud";
            answer[1] = "be proud";
            answer[2] = "비 프라우드";
            answer[3] = "비프라우드";
            answer[4] = "Beproud";
            answer[5] = "beproud";
            answer[6] = "자랑스러워해라";
        }
        if (randp == 16 || randp == 17) {
            hints = "ㅂㄹㅂㅁㅇㅊㅇㅈ!";
            answer[0] = "Believe my change!";
            answer[1] = "believe my change!";
            answer[2] = "빌리브 마이 체인지!";
            answer[3] = "빌리브 마이 체인지";
            answer[4] = "빌리브마이체인지!";
            answer[5] = "빌리브마이체인지";
            answer[6] = "빌리브 마이 채인지";
            answer[7] = "빌리브 마이 채인지!";
            answer[8] = "빌마체";
        }
        if (randp == 18 || randp == 19) {
            hints = "ㅂㅅㅇㅂㅋㄹ";
            answer[0] = "Birth of Color";
            answer[1] = "birth of color";
            answer[2] = "버스 오브 컬러";
            answer[3] = "버스오브컬러";
            answer[4] = "벌오컬";
            answer[5] = "벌스오브컬러";
            answer[6] = "벌오칼";
            answer[7] = "버스 오브 칼라";
        }
        if (randp == 20 || randp == 21) {
            hints = "ㅂㅌㅅㅇ";
            answer[0] = "bitter sweet";
            answer[1] = "bittersweet";
            answer[2] = "비터 스윗";
            answer[3] = "비터스윗";
            answer[4] = "비터스위트";
            answer[5] = "쓴단";
            answer[6] = "비털 스윗";
            answer[7] = "비터 스위트";
        }
        if (randp == 22 || randp == 23) {
            hints = "ㅂㄹ★ㅍㅌ";
            answer[0] = "Black★Party";
            answer[1] = "Black Party";
            answer[2] = "black party";
            answer[3] = "블랙 파티";
            answer[4] = "블랙파티";
            answer[5] = "니거파티";
            answer[6] = "블파";
        }
        if (randp == 24 || randp == 25) {
            hints = "ㅂㄹㄷㄴㅅㅇㅌ!";
            answer[0] = "Brand New Theater!";
            answer[1] = "Brand New Theater";
            answer[2] = "브랜드 뉴 시어터!";
            answer[3] = "브랜드 뉴 시어터";
            answer[4] = "브랜드뉴시어터!";
            answer[5] = "브랜드뉴시어터";
            answer[6] = "브렌드 뉴 시어터";
            answer[7] = "brand new theater";
        }
        if (randp == 26 || randp == 27) {
            hints = "ㅂㄹㅇㅂㅎㅁㄴ";
            answer[0] = "brave HARMONY";
            answer[1] = "braveHARMONY";
            answer[2] = "브레이브 하모니";
            answer[3] = "브레이브하모니";
            answer[4] = "brave harmony";
            answer[5] = "브래이브 하모니";
            answer[6] = "용감한 하모니";
            answer[7] = "용감한 할머니";
            answer[8] = "브하";
        }
        if (randp == 28 || randp == 29) {
            hints = "ㅋㅋㄹㅅ";
            answer[0] = "CAT CROSSING";
            answer[1] = "CATCROSSING";
            answer[2] = "캣 크로싱";
            answer[3] = "캣크로싱";
            answer[4] = "고양이 건너기";
            answer[5] = "cat crossing";
            answer[6] = "켓 크로싱";
        }
        if (randp == 30 || randp == 31) {
            hints = "ㅊㄹㅋㄹㄷㄹㅂ";
            answer[0] = "Cherry Colored Love";
            answer[1] = "cherry colored love";
            answer[2] = "체리 컬러드 러브";
            answer[3] = "체리컬러드 러브";
            answer[4] = "체리 컬러드러브";
            answer[5] = "체리컬러드러브";
            answer[6] = "채리 컬러드 러브";
            answer[7] = "체컬러";
        }
        if (randp == 32 || randp == 33) {
            hints = "ㅋㅇㅇㅌㅍㅌ!";
            answer[0] = "Come on a Tea Party!";
            answer[1] = "컴온어티파티!";
            answer[2] = "come on a tea party";
            answer[3] = "컴 온 어 티파티!";
            answer[4] = "컴 온 어 티파티";
            answer[5] = "컴온어티파티";
            answer[6] = "티 파 티";
        }
        if (randp == 34 || randp == 35) {
            hints = "ㅋ.ㅋ.ㅋ.";
            answer[0] = "Cut. Cut. Cut.";
            answer[1] = "Cut Cut Cut";
            answer[2] = "cut cut cut";
            answer[3] = "컷. 컷. 컷.";
            answer[4] = "컷 컷 컷";
            answer[5] = "컷컷컷";
        }
        if (randp == 36 || randp == 37) {
            hints = "ㄷㄹㅅㅋㄹㅌ";
            answer[0] = "dans l'obscurité";
            answer[1] = "당 롭스퀴리테";
            answer[2] = "당롭스퀴리테";
            answer[3] = "어둠 속에서";
            answer[4] = "쮸뎀";
            answer[5] = "쥬뗌";
        }
        if (randp == 38 || randp == 39) {
            hints = 'ㄷㅇㅇㅍㅌ"ㅇㅅㅌㄷㅇ"';
            answer[0] = "Day After “Yesterday”";
            answer[1] = '데이 에프터 "에스터데이"';
            answer[2] = '데이에프터"에스터데이"';
            answer[3] = "데이 에프터 에스터데이";
            answer[4] = "데이에프터에스터데이";
            answer[5] = "데이 애프터 애스터데이";
            answer[6] = 'day after "yesterday"';
            answer[7] = "dya after yesterday";
        }
        if (randp == 40 || randp == 41) {
            hints = "ㄷㅇ...";
            answer[0] = "dear…";
            answer[1] = "dear";
            answer[2] = "dear...";
            answer[3] = "디어...";
            answer[4] = "디어";
            answer[5] = "사슴";
        }
        if (randp == 42 || randp == 43) {
            hints = "ㄷ,ㄷㅂㄹ";
            answer[0] = "Deep, Deep Blue";
            answer[1] = "딥, 딥 블루";
            answer[2] = "딥,딥블루";
            answer[3] = "딥딥블루";
            answer[4] = "딥 딥 블루";
            answer[5] = "딥딥 블루";
            answer[6] = "deep, deep blue";
            answer[7] = "deep deep blue";
        }
        if (randp == 44 || randp == 45) {
            hints = "ㄷㅇㅇㅁㄷㅈㅋ";
            answer[0] = "DIAMOND JOKER";
            answer[1] = "다이아몬드 조커";
            answer[2] = "다이아몬드조커";
            answer[3] = "diamond joker";
            answer[4] = "Diamond Joker";
            answer[5] = "다이아몬드 조커 ";
        }
        if (randp == 46 || randp == 47) {
            hints = "ㄷㄷㅇㅇㄷ!!~ㄷㅇㅈㅂㅊㅍㅋㅂㄹ~";
            answer[0] = "Do the IDOL!! ~단애절벽 츄파카브라~";
            answer[1] = "두 디 아이돌";
            answer[2] = "두디아이돌!!~단애절벽 츄파카브라~";
            answer[3] = "두디아이돌";
            answer[4] = "단애절벽 츄파카브라";
            answer[5] = "단애절벽츄파카브라";
            answer[6] = "do the idol";
            answer[7] = "do the idol!! ~단애절벽 츄파카브라~";
            answer[8] = "두더아이돌";
        }
        if (randp == 48 || randp == 49) {
            hints = "ㄷㄹㅁ!";
            answer[0] = "Dreaming!";
            answer[1] = "dreaming!";
            answer[2] = "드리밍!";
            answer[3] = "드리밍";
            answer[4] = "Dreaming";
            answer[5] = "dreamng";
        }
        if (randp == 50 || randp == 51) {
            hints = "ㅇㅌㄴㅎㅁㄴ";
            answer[0] = "Eternal Harmony";
            answer[1] = "eternal harmony";
            answer[2] = "이터널 하모니";
            answer[3] = "이터널하모니";
            answer[4] = "EternalHarmony";
            answer[5] = "영원한 하모니";
            answer[6] = "eternalharmony";
            answer[7] = "이하";
        }
        if (randp == 52 || randp == 53) {
            hints = "ㅇㅂㄹㅅㅌ";
            answer[0] = "Everlasting";
            answer[1] = "everlasting";
            answer[2] = "에버라스팅";
            answer[3] = "애버라스팅";
            answer[4] = "에버레스팅";
            answer[5] = "애버레스팅";
        }
        if (randp == 54 || randp == 55) {
            hints = "ㅇㅂㄹㄷㅇㅅㅌㅈ!!";
            answer[0] = "EVERYDAY STARS!!";
            answer[1] = "EVERYDAY STARS";
            answer[2] = "에브리데이 스타즈!!";
            answer[3] = "에브리데이스타즈!!";
            answer[4] = "에브리데이 스타즈";
            answer[5] = "에브리데이스타즈";
            answer[6] = "everyday stars";
        }
        if (randp == 56 || randp == 57) {
            hints = "ㅍㅇㄹㅌㅇㄹㄴㅇㅅㄴㅇㅇ";
            answer[0] = "FairyTale로 남을 수는 없어";
            answer[1] = "페어리테일로 남을 수는 없어";
            answer[2] = "페어리테일로남을수는 없어";
            answer[3] = "페어리테일로남을수는없어";
            answer[4] = "페어리테일로 남을수는 없어";
            answer[5] = "패어리테일로남을수는없어";
            answer[6] = "fairytale로 남을 수는 없어";
            answer[7] = "fairytale로남을수는없어";
        }
        if (randp == 58 || randp == 59) {
            hints = "ㅍㅇㄷㅇㅇㅇㄷ!";
            answer[0] = "FIND YOUR WIND!";
            answer[1] = "FIND YOUR WIND";
            answer[2] = "파인드 유어 윈드!";
            answer[3] = "파인드유어윈드!";
            answer[4] = "파인드 유어 윈드";
            answer[5] = "파인드유어우니드";
            answer[6] = "find your wind";
            answer[7] = "find your wind!";
        }
        if (randp == 60 || randp == 61) {
            hints = "ㅍㄹㄷ";
            answer[0] = "Flooding";
            answer[1] = "flooding";
            answer[2] = "플루딩";
            answer[3] = "프루딩";
            answer[4] = "플러딩";
            answer[5] = "홍수";
        }
        if (randp == 62 || randp == 63) {
            hints = "ㅍㄹㅇㅌㅇㅂㄹㅇㅇ";
            answer[0] = "FLY TO EVERYWHERE";
            answer[1] = "플라이 투 에브리웨어";
            answer[2] = "플라이투에브리웨어";
            answer[3] = "플라이 투 애브리웨어";
            answer[4] = "플라이투애브리웨어";
            answer[5] = "플라이투에브리웨얼";
            answer[6] = "fly to everywhere";
        }
        if (randp == 64 || randp == 65) {
            hints = "ㅍㄹㅇㅇㅅ!!!";
            answer[0] = "Flyers!!!";
            answer[1] = "flyers";
            answer[2] = "플라이어스!!!";
            answer[3] = "플라이어스";
            answer[4] = "플라이얼스!!!";
            answer[5] = "플라이얼스";
            answer[6] = "flyers!!!";
        }
        if (randp == 66 || randp == 67) {
            hints = "ㅍㄹㅌㄹㅂ";
            answer[0] = "fruity love";
            answer[1] = "프루티 러브";
            answer[2] = "프루티러브";
            answer[3] = "푸루티 러브";
            answer[4] = "푸루티러브";
            answer[5] = "푸르티 러브";
        }
        if (randp == 68 || randp == 69) {
            hints = "ㅎ-ㅇ-ㄷ-ㅇ";
            answer[0] = "Fu-Wa-Du-Wa";
            answer[1] = "fu-wa-du-wa";
            answer[2] = "푸-와-두-와";
            answer[3] = "푸와두와";
            answer[4] = "후-와-두-와";
            answer[5] = "후와두와";
            answer[6] = "fu wa du wa";
        }
        if (randp == 70 || randp == 71) {
            hints = "ㄱ♡ㅍ";
            answer[0] = "G♡F";
            answer[1] = "GF";
            answer[2] = "걸♡프";
            answer[3] = "걸프";
            answer[4] = "gf";
            answer[5] = "g♡f";
            answer[6] = "girlfriend";
            answer[7] = "걸프렌드";
        }
        if (randp == 72 || randp == 73) {
            hints = "ㄱㄹㅇㅁ";
            answer[0] = "Glow Map";
            answer[1] = "glow map";
            answer[2] = "글로우 맵";
            answer[3] = "글로우맵";
            answer[4] = "글로우 멥";
            answer[5] = "글로우멥";
        }
        if (randp == 74 || randp == 75) {
            hints = "ㅎㅇㄷㅇ!";
            answer[0] = "Hang In There!";
            answer[1] = "hang in there!";
            answer[2] = "hang in there";
            answer[3] = "행 인 데어";
            answer[4] = "헹 인 데어";
            answer[5] = "행인데어";
            answer[6] = "Hang In There";
        }
        if (randp == 76 || randp == 77) {
            hints = "ㅎㅍㄷㄹ";
            answer[0] = "Happy Darling";
            answer[1] = "happy darling";
            answer[2] = "해피 달링";
            answer[3] = "해피달링";
            answer[4] = "헤피 달링";
            answer[5] = "헤피달링";
            answer[6] = "해달";
        }
        if (randp == 78 || randp == 79) {
            hints = "ㅎㅍ♪ㅅㅌㅍ!!ㄷㄹㅁ☆";
            answer[0] = "HAPPY♪STEPPING!!DREAMING☆";
            answer[1] = "happy stepping dreaming";
            answer[2] = "해피 스텝핑 드리밍";
            answer[3] = "해피스텝핑드리밍";
            answer[4] = "해피 스탭핑 드리밍";
            answer[5] = "해피스탭핑드리밍";
            answer[6] = "Happy Stepping Dreaming";
        }
        if (randp == 80 || randp == 81) {
            hints = "ㅎㅁㄴ4ㅇ";
            answer[0] = "Harmony 4 You";
            answer[1] = "harmony 4 you";
            answer[2] = "하모니 4 유";
            answer[3] = "하모니4유";
            answer[4] = "하모니 포 유";
            answer[5] = "하모니포유";
            answer[6] = "harmony4you";
        }
        if (randp == 82 || randp == 83) {
            hints = "ㅎ,ㅅㅇㅍㄹㄷㅅ";
            answer[0] = "HOME, SWEET FRIENDSHIP";
            answer[1] = "홈, 스윗 프렌드쉽";
            answer[2] = "홈스윗프렌드쉽";
            answer[3] = "홈, 스윗 프랜드쉽";
            answer[4] = "홈스윗프랜드쉽";
            answer[5] = "홈, 스위트 프렌드쉽";
            answer[6] = "home, sweet friendship";
            answer[7] = "홈 스윗 프렌드쉽";
            answer[8] = "홈스윗 프렌드쉽";
        }
        if (randp == 84 || randp == 85) {
            hints = "ㅇㅇㄷㄷ+ㅇㅇㅇ";
            answer[0] = "I did＋I will";
            answer[1] = "i did + i will";
            answer[2] = "아이디드아이윌";
            answer[3] = "아이 디드 + 아이 윌";
            answer[4] = "아이디드 아이윌";
            answer[5] = "아이디드 + 아이윌";
            answer[6] = "i did+i will";
            answer[7] = "아이 디드+아이 윌";
        }
        if (randp == 86 || randp == 87) {
            hints = "ㅇㅇ.ㄷ~ㅇㅅㅋㅇㅍㅍㄹㅇㅌㅍㅇ~";
            answer[0] = "I.D ~EScape from Utopia~";
            answer[1] = "I.D ~escape from utopia~";
            answer[2] = "아이디 ~이스케이프 프롬 유토피아~";
            answer[3] = "아이.디 ~이스케이프 프롬 유토피아~";
            answer[4] = "이스케이프 프롬 유토피아";
            answer[5] = "이스케이프프롬유토피아";
            answer[6] = "유토피아";
            answer[7] = "i.d";
            answer[8] = "i.d ~escape from utopia~";
        }
        if (randp == 88 || randp == 89) {
            hints = "ㅇㅍㄹㅅ→ㄹㅋㅁㅅ";
            answer[0] = "IMPRESSION→LOCOMOTION!";
            answer[1] = "임프레션 로코모션";
            answer[2] = "임프래션 로코모션";
            answer[3] = "임프레션로코모션";
            answer[4] = "임프래션로코모션";
            answer[5] = "로코모션";
            answer[6] = "impression locomotion";
            answer[7] = "IMPRESSION LOCOMOTION";
        }
        if (randp == 90 || randp == 91) {
            hints = "ㅈㅅㅌㅂㅁㅇㅅㅍ!!";
            answer[0] = "Just be myself!!";
            answer[1] = "just be myself";
            answer[2] = "저스트 비 마이셀프!!";
            answer[3] = "저스트 비 마이셀프";
            answer[4] = "저스트비마이셀프";
            answer[5] = "저비마";
            answer[6] = "just be myself!!";
            answer[7] = "저스트 비 마이샐프";
        }
        if (randp == 92 || randp == 93) {
            hints = "ㅈㅅㅌㅅㅇㅇㅂㅇㅅ";
            answer[0] = "Justice OR Voice";
            answer[1] = "justice or voice";
            answer[2] = "저스티스 올 보이스";
            answer[3] = "저스티스 오얼 보이스";
            answer[4] = "저스티스올보이스";
            answer[5] = "저스티스오얼보이스";
            answer[6] = "저오보";
            answer[7] = "저올보";
        }
        if (randp == 94 || randp == 95) {
            hints = "ㅋㅇㅇㅇㅂㄷㅇㄷ!";
            answer[0] = "K・A・W・A・I・I of the WORLD!";
            answer[1] = "kawaii of the world";
            answer[2] = "카와이 오브 더 월드!";
            answer[3] = "카와이 오브 더 월드";
            answer[4] = "카와이오브더월드!";
            answer[5] = "카와이오브더월드";
        }
        if (randp == 96 || randp == 97) {
            hints = "ㄹㄷ!";
            answer[0] = "LEADER!!";
            answer[1] = "leader!!";
            answer[2] = "리더!!";
            answer[3] = "리더";
            answer[4] = "LEADER";
            answer[5] = "leader";
        }
        if (randp == 98 || randp == 99) {
            hints = "ㄹㅈㄷㄱㅅ!!";
            answer[0] = "Legend Girls!!";
            answer[1] = "legend girls";
            answer[2] = "레전드 걸스!!";
            answer[3] = "레전드 걸스";
            answer[4] = "레전드걸스!!";
            answer[5] = "레전드걸스";
            answer[6] = "legend girls!!";
            answer[7] = "래전드 걸스";
            answer[8] = "레걸";
        }
        if (randp == 100 || randp == 101) {
            hints = "ㅁㅌㅍㅌㅈㅇ";
            answer[0] = "Melty Fantasia";
            answer[1] = "melty fantasia";
            answer[2] = "멜티 판타지아";
            answer[3] = "멜티판타지아";
            answer[4] = "맬티 판타지아";
            answer[5] = "맬티판타지아";
            answer[6] = "멜판";
            answer[7] = "맬판";
        }
        if (randp == 102 || randp == 103) {
            hints = "ㅁㅈㅈㄴ";
            answer[0] = "MUSIC JOURNEY";
            answer[1] = "music journey";
            answer[2] = "뮤직 저니";
            answer[3] = "뮤직저니";
            answer[4] = "뮤직 져니";
            answer[5] = "뮤직져니";
            answer[6] = "뮤저";
        }
        if (randp == 104 || randp == 105) {
            hints = "ㅇㄹㅇㅅㅋㄷ";
            answer[0] = "Only One Second";
            answer[1] = "only one second";
            answer[2] = "온리 원 세컨드";
            answer[3] = "온리원세컨드";
            answer[4] = "온리 원 새컨드";
            answer[5] = "온리원새컨드";
            answer[6] = "원세컨드";
        }
        if (randp == 106 || randp == 107) {
            hints = "ㅍㅇㅅㅇㅇㄹㅂㅇ";
            answer[0] = "P.S I Love You";
            answer[1] = "ps i love you";
            answer[2] = "피에스 아이 러브 유";
            answer[3] = "피에스 아이러브유";
            answer[4] = "피에스아이러브유";
            answer[5] = "피애스아이러브유";
            answer[6] = "p.s i love you";
            answer[7] = "p.s I love you";
            answer[8] = "ps I love you";
        }
        if (randp == 108 || randp == 109) {
            hints = "ㅍㄹㄷㅅㅇㅂㄹㅂ";
            answer[0] = "Paradox of LOVE";
            answer[1] = "paradox of love";
            answer[2] = "파라독스 오브 러브";
            answer[3] = "파라독스오브러브";
            answer[4] = "패러독스 오브 러브";
            answer[5] = "패러독스오브러브";
            answer[6] = "패오러";
        }
        if (randp == 110 || randp == 111) {
            hints = "ㅍㅅㅇㅂㅋㅇㅋ";
            answer[0] = "piece of cake";
            answer[1] = "피스 오브 케이크";
            answer[2] = "피스오브케이크";
            answer[3] = "피스 오브 케잌";
            answer[4] = "피스오브케잌";
            answer[5] = "케이크조각";
            answer[6] = "피오케";
        }
        if (randp == 112 || randp == 113) {
            hints = "ㅍㄹㅌㄷㄹㅁ";
            answer[0] = "PRETTY DREAMER";
            answer[1] = "pretty dreamer";
            answer[2] = "프리티 드리머";
            answer[3] = "프리티드리머";
            answer[4] = "프리티 드림어";
            answer[5] = "프리티드림어";
            answer[6] = "프드";
        }
        if (randp == 114 || randp == 115) {
            hints = "ㅍㄹㅅㅅㅂㅇㅂㅅㅅ!!";
            answer[0] = "Princess Be Ambitious!!";
            answer[1] = "princess be ambitious";
            answer[2] = "프린세스 비 엠비셔스!!";
            answer[3] = "프린세스 비 앰비셔스!!";
            answer[4] = "프린세스 비 엠비셔스";
            answer[5] = "프린세스 비 앰비셔스";
            answer[6] = "princess be ambitious!!";
            answer[7] = "프린세스비엠비셔스";
            answer[8] = "프비엠";
        }
        if (randp == 116 || randp == 117) {
            hints = "ㄹㅇㅈㄷㅍㄹㄱ";
            answer[0] = "Raise the FLAG";
            answer[1] = "raise the flag";
            answer[2] = "레이즈 더 플레그";
            answer[3] = "레이즈더플레그";
            answer[4] = "레이즈 더 플래그";
            answer[5] = "레이즈더플래그";
            answer[6] = "레더플";
        }
        if (randp == 118 || randp == 119) {
            hints = "ㄹㅂㄹㅇ";
            answer[0] = "Rebellion";
            answer[1] = "rebellion";
            answer[2] = "리벨리온";
            answer[3] = "리밸리온";
            answer[4] = "래벨리온";
            answer[5] = "래밸리온";
            answer[6] = "리벨";
        }
        if (randp == 120 || randp == 121) {
            hints = "ㄹㅌㅇ";
            answer[0] = "ReTale";
            answer[1] = "retale";
            answer[2] = "리테일";
            answer[3] = "리태일";
            answer[4] = "신태일";
            answer[5] = "리테일 ";
        }
        if (randp == 122 || randp == 123) {
            hints = "ㅅㅇㄹㅌㅈㅋ";
            answer[0] = "Silent Joker";
            answer[1] = "silent joker";
            answer[2] = "사일런트 조커";
            answer[3] = "사일런트조커";
            answer[4] = "사일랜트 조커";
            answer[5] = "사일랜트조커";
            answer[6] = "사일조커";
        }
        if (randp == 124 || randp == 125) {
            hints = "ㅅㅁㅇㄹㄷㅇㅈ";
            answer[0] = "smiley days";
            answer[1] = "스마일리 데이즈";
            answer[2] = "스마일리데이즈";
            answer[3] = "스마일리 데이스";
            answer[4] = "스마일리데이스";
            answer[5] = "스마일리 대이즈";
        }
        if (randp == 126 || randp == 127) {
            hints = "ㅅㅌㄷㅇㄹㅇㅂ";
            answer[0] = "STANDING ALIVE";
            answer[1] = "standing alive";
            answer[2] = "스텐딩 얼라이브";
            answer[3] = "스탠딩 얼라이브";
            answer[4] = "스텐딩얼라이브";
            answer[5] = "스탠딩얼라이브";
            answer[6] = "스얼라";
        }
        if (randp == 128 || randp == 129) {
            hints = "ㅅㅌㄹㅁㄹㄷ";
            answer[0] = "Starry Melody";
            answer[1] = "starry melody";
            answer[2] = "스테리 멜로디";
            answer[3] = "스태리 멜로디";
            answer[4] = "스테리멜로디";
            answer[5] = "스태리멜로디";
            answer[6] = "스멜로";
        }
        if (randp == 130 || randp == 131) {
            hints = "ㅅㅌㄹㅇㅍㄴㅇㅇㅅㅌㄴ";
            answer[0] = "STEREOPHONIC ISOTONIC";
            answer[1] = "stereophonic isotonic";
            answer[2] = "스테레오포닉 아이소토닉";
            answer[3] = "스태래오포닉 아이소토닉";
            answer[4] = "스테레오포닉아이소토닉";
            answer[5] = "스태래오포닉아이소토닉";
            answer[6] = "아이소토닉";
        }
        if (randp == 132 || randp == 133) {
            hints = "ㅅㅍㄷㅍ";
            answer[0] = "Super Duper";
            answer[1] = "super duper";
            answer[2] = "수퍼 두퍼";
            answer[3] = "수퍼두퍼";
            answer[4] = "슈퍼두퍼";
            answer[5] = "슈퍼 두퍼";
            answer[6] = "수두퍼";
        }
        if (randp == 134 || randp == 135) {
            hints = "ㅅㅍㄹㅂ";
            answer[0] = "Super Lover";
            answer[1] = "super lover";
            answer[2] = "수퍼 러버";
            answer[3] = "수퍼러버";
            answer[4] = "슈퍼 러버";
            answer[5] = "슈퍼러버";
        }
        if (randp == 136 || randp == 137) {
            hints = "ㅅㅇㅅㅇㅅㅇ";
            answer[0] = "Sweet Sweet Soul";
            answer[1] = "sweet sweet soul";
            answer[2] = "스윗 스윗 소울";
            answer[3] = "스윗스윗소울";
            answer[4] = "스위트스위트소울";
            answer[5] = "스위트 스위트 소울";
        }
        if (randp == 138 || randp == 139) {
            hints = "ㅌㅇㅋ!ㅆㄹㅌㅇㅅㅍㅇㅅ↑↑";
            answer[0] = "Take! 3. 2. 1. → S・P・A・C・E↑↑";
            answer[1] = "take! 3 2 1 space";
            answer[2] = "테이크! 3. 2. 1. 스페이스";
            answer[3] = "테이크!321스페이스";
            answer[4] = "테이크 쓰리 투 원 스페이스";
            answer[5] = "테이크! 쓰리 투 원 스페이스";
            answer[6] = "take 3 2 1 space";
            answer[7] = "테이크 3 2 1 스페이스";
        }
        if (randp == 140 || randp == 141) {
            hints = "ㄸㅋ!";
            answer[0] = "Thank You!";
            answer[1] = "thank you!";
            answer[2] = "땡 큐!";
            answer[3] = "땡 큐";
            answer[4] = "땡큐!";
            answer[5] = "땡큐";
            answer[6] = "thank you";
        }
        if (randp == 142 || randp == 143) {
            hints = "ㅌ...";
            answer[0] = "To…";
            answer[1] = "To...";
            answer[2] = "to...";
            answer[3] = "투...";
            answer[4] = "투";
            answer[5] = "to";
        }
        if (randp == 144 || randp == 145) {
            hints = "ㅇㄴㅇ!!";
            answer[0] = "UNION!!";
            answer[1] = "union!!";
            answer[2] = "유니온!!";
            answer[3] = "유니온";
            answer[4] = "UNION";
            answer[5] = "union";
        }
        if (randp == 146 || randp == 147) {
            hints = "ㅇ!ㅌㅅ♪ㅍㄹㅈ!";
            answer[0] = "Up!10sion♪Pleeeeeeeeease!";
            answer[1] = "업!텐션 플리즈!";
            answer[2] = "업!텐션플리즈!";
            answer[3] = "업텐션 플리즈";
            answer[4] = "업텐션플리즈";
            answer[5] = "업 텐션 플리즈";
            answer[6] = "up10sion please";
            answer[7] = "uptension please";
        }
        if (randp == 148 || randp == 149) {
            hints = "ㅂㅂㄷㅋㄹ";
            answer[0] = "vivid color";
            answer[1] = "비비드 컬러";
            answer[2] = "비비드컬러";
            answer[3] = "비비드 칼라";
            answer[4] = "비비드칼라";
            answer[5] = "선명한 색";
            answer[6] = "비비드컬";
        }
        if (randp == 150 || randp == 151) {
            hints = "ㅇㅋ!!";
            answer[0] = "Welcome!!";
            answer[1] = "welcome!!";
            answer[2] = "웰컴!!";
            answer[3] = "웰컴";
            answer[4] = "Welcome";
            answer[5] = "welcome";
        }
        if (randp == 152 || randp == 153) {
            hints = "ㅎㅇㅌㅂㅇㅈ";
            answer[0] = "White Vows";
            answer[1] = "white vows";
            answer[2] = "화이트 보우즈";
            answer[3] = "화이트보우즈";
            answer[4] = "화이트 바우즈";
            answer[5] = "화이트바우즈";
        }
        if (randp == 154 || randp == 155) {
            hints = "ㅇㅇ?";
            answer[0] = "WHY?";
            answer[1] = "why?";
            answer[2] = "와이?";
            answer[3] = "와이";
            answer[4] = "WHY";
            answer[5] = "why";
        }
        if (randp == 156 || randp == 157) {
            hints = "ㅇㄷㅊㅇㅈ";
            answer[0] = "World Changer";
            answer[1] = "world changer";
            answer[2] = "월드 체인저";
            answer[3] = "월드체인저";
            answer[4] = "월드 체인져";
            answer[5] = "월드체인져";
            answer[6] = "월체";
        }
        if (randp == 158 || randp == 159) {
            hints = "ㅇㄷㅇㅇㄷㄷㅅ!!!";
            answer[0] = "WORLD WIDE DANCE!!!";
            answer[1] = "world wide dance";
            answer[2] = "월드 와이드 댄스!!!";
            answer[3] = "월드 와이드 댄스";
            answer[4] = "월드와이드댄스!!!";
            answer[5] = "월드와이드댄스";
            answer[6] = "world wide dance!!!";
            answer[7] = "월와댄";
        }
        if (randp == 160 || randp == 161) {
            hints = "ㅇㅇ!ㅇㅇㄴㄷ!! ~ㅅㅇㅁㅋㄱㅊㄱ~";
            answer[0] = "WOW! I NEED!! ~싱잉 몽키 가창권~";
            answer[1] = "wow! i need!! ~싱잉 몽키 가창권~";
            answer[2] = "와우! 아이 니드!! ~싱잉 몽키 가창권~";
            answer[3] = "와우! 아이니드!! ~싱잉 몽키 가창권~";
            answer[4] = "싱잉 몽키 가창권";
            answer[5] = "와우! 아이 니드!!";
            answer[6] = "와우 아이 니드";
            answer[7] = "와우아이니드";
            answer[8] = "wow i need";
        }
        if (randp == 162 || randp == 163) {
            hints = "ㅈㅌㅇxㅂㄹㅇㅋ!!ㅌㅇㅋㄹㄷ";
            answer[0] = "ZETTAI x BREAK!! 트윙클 리듬";
            answer[1] = "zettai x break!! 트윙클 리듬";
            answer[2] = "트윙클 리듬";
            answer[3] = "제타이 브레이크!!";
            answer[4] = "제타이 브레이크";
            answer[5] = "트윙클리듬";
            answer[6] = "zettai break";
            answer[7] = "zettai x break";
        }
        if (randp == 164 || randp == 165) {
            hints = "ㄱㄹㅊㅈㄹㅅㅌㄴㅌ...";
            answer[0] = "가르쳐줘 last note…";
            answer[1] = "가르쳐줘 last note...";
            answer[2] = "가르쳐줘 라스트 노트...";
            answer[3] = "가르쳐줘 last note";
            answer[4] = "가르쳐줘 라스트 노트";
            answer[5] = "가르쳐줘라스트노트";
            answer[6] = "알려줘 last note";
            answer[7] = "알려줘 라스트 노트";
        }
        if (randp == 166 || randp == 167) {
            hints = "ㄱㅅㄹㄴㅁㅆ";
            answer[0] = "거스르는 말씨";
            answer[1] = "정반대의 말";
            answer[2] = "거스르는말씨";
            answer[3] = "정반대의말";
            answer[4] = "거스르는 말씨 ";
            answer[5] = "정반대의 말 ";
        }
        if (randp == 168 || randp == 169) {
            hints = "ㄱㅅㅁㅎㅅㄴ";
            answer[0] = "공상 문학 소녀";
            answer[1] = "공상 문학소녀";
            answer[2] = "공상문학 소녀";
            answer[3] = "공상문학소녀";
            answer[4] = "공상 문학 소녀 ";
            answer[5] = "공문소";
        }
        if (randp == 170 || randp == 171) {
            hints = "ㄱㅎㄴㅅㅌㅌㅇ!";
            answer[0] = "구호는 스타트 업!";
            answer[1] = "구호는 스타트 업";
            answer[2] = "구호는 스타트업!";
            answer[3] = "구호는 스타트업";
            answer[4] = "구호는스타트업!";
            answer[5] = "구호는스타트업";
        }
        if (randp == 172 || randp == 173) {
            hints = "ㄱㄹㅁㄹ…ㅇㄴㄷ";
            answer[0] = "그러므로…입니다";
            answer[1] = "그러므로...입니다";
            answer[2] = "그러므로 입니다";
            answer[3] = "그러므로입니다";
            answer[4] = "그러므로 입니다.";
            answer[5] = "그러므로... 입니다";
        }
        if (randp == 174 || randp == 175) {
            hints = "ㄱㄹㅇㅁㅈ!";
            answer[0] = "그로잉 뮤직!";
            answer[1] = "그로잉 뮤직";
            answer[2] = "그로잉뮤직!";
            answer[3] = "그로잉뮤직";
            answer[4] = "그로우 뮤직!";
            answer[5] = "그로우 뮤직";
            answer[6] = "그뮤";
        }
        if (randp == 176 || randp == 177) {
            hints = "ㄱㄹㅊ";
            answer[0] = "그림책";
            answer[1] = "그림책";
            answer[2] = "그리책";
            answer[3] = "그림채";
            answer[4] = "그림첵";
            answer[5] = "그림췍췍";
        }
        if (randp == 178 || randp == 179) {
            hints = "ㄱㅅㅎㄱㅈ";
            answer[0] = "근사한 기적";
            answer[1] = "근사한기적";
            answer[2] = "스테키나 키세키";
            answer[3] = "스테키나키세키";
            answer[4] = "근사한 시적";
            answer[5] = "근사한시적";
            answer[6] = "근기";
        }
        if (randp == 180 || randp == 181) {
            hints = "ㄱㄷㄹㅇㄹㅋㄹㅁ";
            answer[0] = "기다림의 Lacrima";
            answer[1] = "기다림의 lacrima";
            answer[2] = "기다림의 라크리마";
            answer[3] = "기다림의라크리마";
            answer[4] = "기다림의 눈물";
            answer[5] = "기다림의눈물";
            answer[6] = "라크리마";
        }
        if (randp == 182 || randp == 183) {
            hints = "ㄲㅇㄱㄹ";
            answer[0] = "꽃의 가락";
            answer[1] = "꽃의가락";
            answer[2] = "꼬츼 가락";
            answer[3] = "꼬츼가락";
            answer[4] = "꽃의 가락";
            answer[5] = "꽃의 가락 ";
        }
        if (randp == 184 || randp == 185) {
            hints = "ㄲㅇㅁㅂㅎㅇㅋㄷ✿";
            answer[0] = "꽃이 만발한 Weekend✿";
            answer[1] = "꽃이 만발한 Weekend";
            answer[2] = "꽃이 만발한 weekend";
            answer[3] = "꽃이 만발한 위켄드";
            answer[4] = "꽃이 만발한 위캔드";
            answer[5] = "꽃이만발한위캔드";
            answer[6] = "꽃만발위켄드";
        }
        if (randp == 186 || randp == 187) {
            hints = "ㄲㅇㅁㅁㄹㅈ";
            answer[0] = "꽃잎 메모리즈";
            answer[1] = "꽃잎메모리즈";
            answer[2] = "꽃잎 매모리즈";
            answer[3] = "꽃잎매모리즈";
            answer[4] = "하나비라 메모리즈";
            answer[5] = "하나비라메모리즈";
        }
        if (randp == 188 || randp == 189) {
            hints = "ㄲㅂㅌㄹㅇ";
            answer[0] = "꿈빛 트레인";
            answer[1] = "꿈빛트레인";
            answer[2] = "꿈빛 트래인";
            answer[3] = "꿈빛트래인";
            answer[4] = "꿈빛 트레인 ";
            answer[5] = "꿈색 트레인";
        }
        if (randp == 190 || randp == 191) {
            hints = "ㄴㅅㄱㅂㅅㄷㅇ";
            answer[0] = "네 생각 Birthday";
            answer[1] = "네 생각 birthday";
            answer[2] = "네 생각 버스데이";
            answer[3] = "니 생각 버스데이";
            answer[4] = "네생각버스데이";
            answer[5] = "니생각버스데이";
            answer[6] = "니 생각 birthday";
        }
        if (randp == 192 || randp == 193) {
            hints = "ㄴㄱㅎㅈㅁㅇㅇㅇㄴㄲ";
            answer[0] = "네가 해준 말이 있으니까";
            answer[1] = "네가 해준말이 있으니까";
            answer[2] = "네가 해준 말이있으니까";
            answer[3] = "네가 해준말이있으니까";
            answer[4] = "네가해준말이있으니까";
            answer[5] = "니가 해준 말이 있으니까";
        }
        if (randp == 194 || randp == 195) {
            hints = "ㄴㄷㅈㅅㅇㅅㄹㅇㅅ";
            answer[0] = "눈동자 속의 시리우스";
            answer[1] = "눈동자 속의시리우스";
            answer[2] = "눈동자속의 시리우스";
            answer[3] = "눈동자속의시리우스";
            answer[4] = "눈동자 속에 시리우스";
            answer[5] = "눈동자속에 시리우스";
            answer[6] = "시리우스";
        }
        if (randp == 196 || randp == 197) {
            hints = "ㄷㅇㅇㅁㄷㅋㄹㄹㅌ";
            answer[0] = "다이아몬드 클라리티";
            answer[1] = "다이아몬드클라리티";
            answer[2] = "다이아몬드 클라리티 ";
            answer[3] = "다이아몬드클라리티 ";
            answer[4] = "다이아몬드 클라리티";
            answer[5] = "다이아몬드 클라리티";
        }
        if (randp == 198 || randp == 199) {
            hints = "ㄷㅇㄱㅇㅅ";
            answer[0] = "달의 곁에서";
            answer[1] = "달의곁에서";
            answer[2] = "다릐 곁에서";
            answer[3] = "다릐곁에서";
            answer[4] = "달에 곁에서";
            answer[5] = "달에곁에서";
        }
        if (randp == 200 || randp == 201) {
            hints = "ㄷㅅㅁㅇㅈㄱ";
            answer[0] = "당신만의 조각";
            answer[1] = "당신만의조각";
            answer[2] = "당신만에 조각";
            answer[3] = "당신만에조각";
            answer[4] = "당신만의 조각";
            answer[5] = "당신만의 조각";
        }
        if (randp == 202 || randp == 203) {
            hints = "ㄷㅇㄷㄹㄲㅇ?";
            answer[0] = "데워드릴까요?";
            answer[1] = "대워드릴까요?";
            answer[2] = "데워드릴까요";
            answer[3] = "대워드릴까요";
            answer[4] = "데워드릴까요?";
            answer[5] = "데워드릴까요?";
        }
        if (randp == 204 || randp == 205) {
            hints = "ㄷㅋㄹㅇㅅㄷㄹ~ㅁ♪";
            answer[0] = "데코레이션 드리~밍♪";
            answer[1] = "데코레이션 드리밍";
            answer[2] = "데코레이션드리밍";
            answer[3] = "대코레이션 드리밍";
            answer[4] = "대코레이션드리밍";
            answer[5] = "데코래이션 드리밍";
            answer[6] = "데코드림";
        }
        if (randp == 206 || randp == 207) {
            hints = "ㄹㅅㅌㅇㅌㄹㅅ";
            answer[0] = "라스트 액트리스";
            answer[1] = "라스트액트리스";
            answer[2] = "라스트 엑트리스";
            answer[3] = "라스트엑트리스";
            answer[4] = "라스트 액트리스 ";
            answer[5] = " 라스트 액트리스";
            answer[6] = "라액";
        }
        if (randp == 208 || randp == 209) {
            hints = "ㄹㅇㅇㄹㅈ";
            answer[0] = "라이어 루주";
            answer[1] = "라이어루주";
            answer[2] = "liar 루주";
            answer[3] = "liar루주";
            answer[4] = " 라이어 루주";
            answer[5] = "라이어 루주 ";
        }
        if (randp == 210 || randp == 211) {
            hints = "ㄹㅂㅍ";
            answer[0] = "래빗 퍼";
            answer[1] = "래빗퍼";
            answer[2] = "레빗 퍼";
            answer[3] = "레빗퍼";
            answer[4] = "래비퍼";
            answer[5] = "래비 퍼";
            answer[6] = "래빛 퍼";
        }
        if (randp == 212 || randp == 213) {
            hints = "ㄹㄴㅎㅇ";
            answer[0] = "러닝 하잇";
            answer[1] = "러닝하잇";
            answer[2] = "러닝 하이";
            answer[3] = "러닝하이";
            answer[4] = "런닝 하잇";
            answer[5] = "런닝하잇";
        }
        if (randp == 214 || randp == 215) {
            hints = "ㄹㅋㅅㅌー☆";
            answer[0] = "로켓스타ー☆";
            answer[1] = "로켓스타☆";
            answer[2] = "로켓스타";
            answer[3] = "로캣스타";
            answer[4] = "로켓 스타";
            answer[5] = "로케트스타";
            answer[6] = "로켙스타";
        }
        if (randp == 216 || randp == 217) {
            hints = "ㄹㄹ△ㅅㄱ";
            answer[0] = "롤링△삼각";
            answer[1] = "롤링삼각";
            answer[2] = "롤링 삼각";
            answer[3] = "롤링 삼각형";
            answer[4] = "롤링삼각형";
            answer[5] = "롤링삼각김밥";
            answer[6] = "롤링 삼각게이";
        }
        if (randp == 218 || randp == 219) {
            hints = "ㅁㄹㅇㄴㅌㄴㅈㄷㅈㅇㅇ";
            answer[0] = "마리오네트는 잠들지 않아";
            answer[1] = "마리오네트는 잠들지않아";
            answer[2] = "마리오네트는잠들지않아";
            answer[3] = "마리오네트는잠들지 않아";
            answer[4] = "마리오내트는 잠들지 않아";
            answer[5] = "마리오내트는잠들지않아";
            answer[6] = "marionette는 잠들지 않아";
        }
        if (randp == 220 || randp == 221) {
            hints = "ㅁㅅㅇㄷ";
            answer[0] = "모순의 달";
            answer[1] = "모순의달";
            answer[2] = "모순에 달";
            answer[3] = "모순에달";
            answer[4] = "모달";
            answer[5] = "모순달";
        }
        if (randp == 222 || randp == 223) {
            hints = "ㅁㅅㅈㄱㅈㅇㄴ";
            answer[0] = "미소짓기 좋은 날";
            answer[1] = "미소짓기 좋은날";
            answer[2] = "미소짓기좋은 날";
            answer[3] = "미소짓기좋은날";
            answer[4] = "미소짖기 좋은 날";
            answer[5] = "미소짓는 좋은 날";
        }
        if (randp == 224 || randp == 225) {
            hints = "ㅂㅉㅇㅈㅎㅎ";
            answer[0] = "반짝임 진행형";
            answer[1] = "반짝임진행형";
            answer[2] = "반짝진행형";
            answer[3] = "반짝 진행형";
            answer[4] = "반짝임 진행형 ";
            answer[5] = " 반짝임 진행형";
        }
        if (randp == 226 || randp == 227) {
            hints = "ㅂㅇㅂㄴㄴㅂㅈㄹㅊㄹ";
            answer[0] = "밤에 빛나는 별자리처럼";
            answer[1] = "밤에 빛나는별자리처럼";
            answer[2] = "밤에빛나는 별자리처럼";
            answer[3] = "밤에빛나는별자리처럼";
            answer[4] = "밤의빛나는별자리처럼";
            answer[5] = "밤의 빛나는 별자리처럼";
            answer[6] = "밤빛별";
        }
        if (randp == 228 || randp == 229) {
            hints = "ㅂㅎㄱ,ㅂㅂㅎㄱ.";
            answer[0] = "밤하고, 불빛하고.";
            answer[1] = "밤하고, 불빛하고";
            answer[2] = "밤하고 불빛하고";
            answer[3] = "밤하고불빛하고";
            answer[4] = "밤하고,불빛하고";
            answer[5] = "밤하고,불빛하고.";
        }
        if (randp == 230 || randp == 231) {
            hints = "ㅂㅎㄴㅇㅎㅇㅈㅂㄹㄱㄴ";
            answer[0] = "백화는 월하에 져버리거늘";
            answer[1] = "백화는월하에 져버리거늘";
            answer[2] = "백화는 월하에져버리거늘";
            answer[3] = "백화는월하에져버리거늘";
            answer[4] = "백화는 월하에";
            answer[5] = "백화는 월하에 시들어버리거늘";
            answer[6] = "백월져";
        }
        if (randp == 232 || randp == 233) {
            hints = "ㅂㄷㅇㅅㅍㄴㅇ";
            answer[0] = "별들의 심포니아";
            answer[1] = "별들의심포니아";
            answer[2] = "별들에 심포니아";
            answer[3] = "별들에심포니아";
            answer[4] = "별의 심포니아";
            answer[5] = "별의심포니아";
        }
        if (randp == 234 || randp == 235) {
            hints = "ㅂㅊㅈㅇㅂㅇㅈ";
            answer[0] = "별천지의 Voyage";
            answer[1] = "별천지의 voyage";
            answer[2] = "별천지의 보야쥐";
            answer[3] = "별천지의보야쥐";
            answer[4] = "별천지의 보야지";
            answer[5] = "별천지의보야지";
        }
        if (randp == 236 || randp == 237) {
            hints = "ㅂㅇㄱㄷㄹㄴㅇㅇ";
            answer[0] = "봄을 기다리는 여인";
            answer[1] = "봄을기다리는 여인";
            answer[2] = "봄을 기다리는여인";
            answer[3] = "봄을기다리는여인";
            answer[4] = "봄을 기다리는 소녀";
            answer[5] = "하루마치 죠시";
            answer[6] = "봄기여";
        }
        if (randp == 238 || randp == 239) {
            hints = "ㅂㅁㅇㅁㅁㄹㅈ";
            answer[0] = "비밀의 메모리즈";
            answer[1] = "비밀의메모리즈";
            answer[2] = "비밀의 매모리즈";
            answer[3] = "비밀의매모리즈";
            answer[4] = "비밀에 메모리즈";
            answer[5] = "비밀에메모리즈";
        }
        if (randp == 240 || randp == 241) {
            hints = "ㅃㄱㅍㄹ";
            answer[0] = "빵과 필름";
            answer[1] = "빵과필름";
            answer[2] = "빵과 필름 ";
            answer[3] = "빵필";
            answer[4] = "빵 필";
            answer[5] = "필름과 빵";
        }
        if (randp == 242 || randp == 243) {
            hints = "ㅅㄹㅇㅇㅇㅇ";
            answer[0] = "사랑의 Wa·Wo·N";
            answer[1] = "사랑의 WaWoN";
            answer[2] = "사랑의 Wa Wo N";
            answer[3] = "사랑의 와 워 은";
            answer[4] = "사랑의 와워은";
            answer[5] = "사랑의 wa wo n";
            answer[6] = "사랑의 와 오 응";
            answer[7] = "사랑의wa wo n";
        }
        if (randp == 244 || randp == 245) {
            hints = "ㅅㅁ☆ㅌㄹ~ㅅㅁㅌㄹ~";
            answer[0] = "서머☆트리 ~Summer trip~";
            answer[1] = "서머트리";
            answer[2] = "서머트립";
            answer[3] = "서머트리 ~서머트립~";
            answer[4] = "서머 트리 ~서머 트립~";
            answer[5] = "서머트리 ~summer trip~";
            answer[6] = "서머 트리";
            answer[7] = "서머 트립";
        }
        if (randp == 246 || randp == 247) {
            hints = "ㅅㄹㅇㅇㅍㄱㄷㅇ";
            answer[0] = "설렘의 음표가 되어";
            answer[1] = "설렘의음표가 되어";
            answer[2] = "설렘의 음표가되어";
            answer[3] = "설렘의음표가되어";
            answer[4] = "설레임의 음표가 되어";
            answer[5] = "설레임의음표가되어";
        }
        if (randp == 248 || randp == 249) {
            hints = "ㅅㅈㅊ→ㄹㅂ!!";
            answer[0] = "성장Chu→LOVER!!";
            answer[1] = "성장츄 러버!!";
            answer[2] = "성장츄 러버";
            answer[3] = "성장츄러버!!";
            answer[4] = "성장츄러버";
            answer[5] = "성장chu lover";
            answer[6] = "성장추 러버";
        }
        if (randp == 250 || randp == 251) {
            hints = "ㅅㅍㅇㅋㄹㅍ";
            answer[0] = "세피아컬러풀";
            answer[1] = "새피아컬러풀";
            answer[2] = "세피아칼러풀";
            answer[3] = "새피아칼러풀";
            answer[4] = "세피아 컬러풀";
            answer[5] = "새피아 컬러풀";
        }
        if (randp == 252 || randp == 253) {
            hints = "ㅅㅈㅋㄷ";
            answer[0] = "수중 캔디";
            answer[1] = "수중캔디";
            answer[2] = "수중 켄디";
            answer[3] = "수중켄디";
            answer[4] = "스이츄 캔디";
            answer[5] = "스이츄우 캰디";
        }
        if (randp == 254 || randp == 255) {
            hints = "ㅅㄴㅇㄹㅌ";
            answer[0] = "스노우 레터";
            answer[1] = "스노우레터";
            answer[2] = "스노우 래터";
            answer[3] = "스노우래터";
            answer[4] = "스노우 letter";
            answer[5] = "눈 편지";
        }
        if (randp == 256 || randp == 257) {
            hints = "ㅅㅌㅌㄹ";
            answer[0] = "스타트립";
            answer[1] = "스타트트립";
            answer[2] = "스타트 립";
            answer[3] = "스타토트립";
            answer[4] = "스타트 트립";
            answer[5] = "스탈트립";
        }
        if (randp == 258 || randp == 259) {
            hints = "ㅅㅌㄹㅂㄹㅋㅍㅌ";
            answer[0] = "스트로베리 큐피트";
            answer[1] = "스트로베리큐피트";
            answer[2] = "스트로배리 큐피트";
            answer[3] = "스트로배리큐피트";
            answer[4] = "스트로베리 큐피드";
            answer[5] = "스트로베리큐피드";
            answer[6] = "스베리큐피드";
        }
        if (randp == 260 || randp == 261) {
            hints = "ㅅㅋㄹㅈㅇ~ㅁㅎㅇㄱㄱㅅ~";
            answer[0] = "시크릿 주얼 ~매혹의 금강석~";
            answer[1] = "시크릿 주얼";
            answer[2] = "매혹의 금강석";
            answer[3] = "시크릿 쥬얼";
            answer[4] = "시크릿주얼 ~매혹의 금강석~";
            answer[5] = "시크릿 쥬얼 ~매혹의 금강석~";
            answer[6] = "시크릿주얼";
            answer[7] = "매혹의금강석";
        }
        if (randp == 262 || randp == 263) {
            hints = "ㅅㅊㅁㅁㅇㄷ";
            answer[0] = "심층 머메이드";
            answer[1] = "심층머메이드";
            answer[2] = "심층 머매이드";
            answer[3] = "심층머매이드";
            answer[4] = "심층 머메이드 ";
            answer[5] = "심머";
            answer[6] = "심층머메";
        }
        if (randp == 264 || randp == 265) {
            hints = "ㅅㅎㅇㅍㅅㅇ";
            answer[0] = "심홍의 파시온";
            answer[1] = "심홍의파시온";
            answer[2] = "심홍에 파시온";
            answer[3] = "심홍에파시온";
            answer[4] = "심홍의 정열";
            answer[5] = "심홍의정열";
        }
        if (randp == 266 || randp == 267) {
            hints = "ㅆㄹㄷㅇㅋㅅㅌㄹ♪";
            answer[0] = "썬 리듬 오케스트라♪";
            answer[1] = "썬 리듬 오케스트라";
            answer[2] = "썬 리듬오케스트라";
            answer[3] = "썬리듬 오케스트라";
            answer[4] = "썬리듬오케스트라";
            answer[5] = "선 리듬 오케스트라";
            answer[6] = "선리듬오케";
        }
        if (randp == 268 || randp == 269) {
            hints = "ㅇㅇ";
            answer[0] = "아일";
            answer[1] = "aile";
            answer[2] = "엘";
            answer[3] = "aisle";
            answer[4] = "통로";
            answer[5] = "날개";
            answer[6] = "아이루";
        }
        if (randp == 270 || randp == 271) {
            hints = "ㅇㅊㄴㅇㅋㄹㅅㄷ";
            answer[0] = "아침노을 크레셴도";
            answer[1] = "아침노을크레셴도";
            answer[2] = "아침노을 크레센도";
            answer[3] = "아침노을크레센도";
            answer[4] = "아침노을 크레쉔도";
            answer[5] = "아침노을크레쉔도";
        }
        if (randp == 272 || randp == 273) {
            hints = "ㅇㄹㅇㅎㅅ";
            answer[0] = "애로우 혜성";
            answer[1] = "애로우혜성";
            answer[2] = "에로우 혜성";
            answer[3] = "에로우혜성";
            answer[4] = "애로우 해성";
            answer[5] = "애로우해성";
        }
        if (randp == 274 || randp == 275) {
            hints = "ㅇㅌㄴㅁㅇㅇㅂㅇㅂㅇㄱ";
            answer[0] = "애타는 마음에 불을 붙이고";
            answer[1] = "애타는 마음에 불을붙이고";
            answer[2] = "애타는 마음에불을 붙이고";
            answer[3] = "애타는마음에 불을 붙이고";
            answer[4] = "애타는마음에 불을붙이고";
            answer[5] = "애타는마음에불을붙이고";
        }
        if (randp == 276 || randp == 277) {
            hints = "ㅇㄹㅇㅂㅍㅌ";
            answer[0] = "얼라이브 팩터";
            answer[1] = "얼라이브팩터";
            answer[2] = "얼라이브 펙터";
            answer[3] = "얼라이브펙터";
            answer[4] = "살아있는 요소";
            answer[5] = "얼팩";
        }
        if (randp == 278 || randp == 279) {
            hints = "ㅇㅂㅁㅇ";
            answer[0] = "에바모요";
            answer[1] = "에바모요";
            answer[2] = "에바모요";
            answer[3] = "에바모요 ";
            answer[4] = " 에바모요";
            answer[5] = " 에바모요 ";
        }
        if (randp == 280 || randp == 281) {
            hints = "ㅇㅇㅇㄲ";
            answer[0] = "영원의 꽃";
            answer[1] = "영원의꽃";
            answer[2] = "영꽃";
            answer[3] = "영원꽃";
            answer[4] = "에이엔노 하나";
            answer[5] = "영원의 꽃 ";
            answer[6] = "에이엔노하나";
        }
        if (randp == 282 || randp == 283) {
            hints = "ㅇㄷㄴㄹㅋㄹㅂ";
            answer[0] = "오디너리 클로버";
            answer[1] = "오디너리클로버";
            answer[2] = "오디너리 클로버 ";
            answer[3] = "오디너리 클로버";
            answer[4] = "오디너리 클로버";
            answer[5] = "오클";
            answer[6] = "오디클";
        }
        if (randp == 284 || randp == 285) {
            hints = "ㅇㄹㅈㅂㅎㄴㅇㄹ";
            answer[0] = "오렌지빛 하늘 아래";
            answer[1] = "오렌지빛 하늘아래";
            answer[2] = "오렌지빛하늘 아래";
            answer[3] = "오렌지빛하늘아래";
            answer[4] = "오렌지색 하늘 아래";
            answer[5] = "오렌지색 하늘아래";
            answer[6] = "오렌지색하늘아래";
        }
        if (randp == 286 || randp == 287) {
            hints = "ㅇㄹㅈㄴㅁㅅㄹㄱㄷㅇ";
            answer[0] = "오리지널 목소리가 되어";
            answer[1] = "오리지널목소리가 되어";
            answer[2] = "오리지널목소리가되어";
            answer[3] = "나만의 목소리로";
            answer[4] = "나만의목소리로";
            answer[5] = "오리지날 목소리가 되어";
        }
        if (randp == 288 || randp == 289) {
            hints = "ㅇㄴㅁㄷㅅㅇㅍㄹㅅㅅ";
            answer[0] = "왜냐면 당신은 프린세스";
            answer[1] = "왜냐면당신은프린세스";
            answer[2] = "당신은 프린세스니까";
            answer[3] = "당신은프린세스니까";
            answer[4] = "왜냐면 당신은 프린새스";
            answer[5] = "당신은 프린새스니까";
            answer[6] = "왜당프";
        }
        if (randp == 290 || randp == 291) {
            hints = "ㅇㅇㅇㅇㅋㄹㅅㄷ";
            answer[0] = "월요일의 크림 소다";
            answer[1] = "월요일의 크림소다";
            answer[2] = "월요일의크림 소다";
            answer[3] = "월요일의크림소다";
            answer[4] = "월요일에 크림소다";
            answer[5] = "크림소다";
        }
        if (randp == 292 || randp == 293) {
            hints = "ㅇㄹㅅㄱㅂㅇㅇㄲㅊㅍ";
            answer[0] = "유리색 금붕어와 꽃창포";
            answer[1] = "유리색금붕어와 꽃창포";
            answer[2] = "유리색금붕어와꽃창포";
            answer[3] = "꽃창포";
            answer[4] = "유리색 금붕어";
            answer[5] = "유리색 금붕어와 꽃 창포";
        }
        if (randp == 294 || randp == 295) {
            hints = "ㅇㅅㄱ";
            answer[0] = "유성군";
            answer[1] = "유성군 ";
            answer[2] = " 유성군";
            answer[3] = " 유성군 ";
            answer[4] = "  유성군  ";
            answer[5] = "  유성군 ";
        }
        if (randp == 296 || randp == 297) {
            hints = "ㅇㅂㅅㅂㅈㅅㅌㅅ";
            answer[0] = "인빈서블 저스티스";
            answer[1] = "인빈서블저스티스";
            answer[2] = "인빈시블 저스티스";
            answer[3] = "인빈시블저스티스";
            answer[4] = "인빈서블 저스티스 ";
            answer[5] = "인저";
        }
        if (randp == 298 || randp == 299) {
            hints = "ㅈㅂㅇㅅ";
            answer[0] = "전별의 새";
            answer[1] = "전별의새";
            answer[2] = " 전별의 새";
            answer[3] = "전새";
            answer[4] = "전별새";
            answer[5] = "전별 새";
        }
        if (randp == 300 || randp == 301) {
            hints = "ㅈㄷㅈㅍㅍㅁ";
            answer[0] = "절대적Performer";
            answer[1] = "절대적performer";
            answer[2] = "절대적퍼포머";
            answer[3] = "절대적 퍼포머";
            answer[4] = "절대적 Performer";
            answer[5] = "절대적 performer";
            answer[6] = "절대퍼포";
        }
        if (randp == 302 || randp == 303) {
            hints = "ㅈㅇㅈㄱㅇㅇㄱ";
            answer[0] = "종이접기 이야기";
            answer[1] = "종이접기이야기";
            answer[2] = "종이접기 이야기 ";
            answer[3] = "종이접기";
            answer[4] = " 종이접기 이야기 ";
            answer[5] = " 종이접기 이야기";
        }
        if (randp == 304 || randp == 305) {
            hints = "ㅈㅁㅃㅇㅎㄹㅋ";
            answer[0] = "주말뿐인 할리퀸";
            answer[1] = "주말뿐인할리퀸";
            answer[2] = "주말뿐인할리킨";
            answer[3] = "주말뿐인 할리킨";
            answer[4] = "주말 할리퀸";
            answer[5] = "주말할리퀸";
        }
        if (randp == 306 || randp == 307) {
            hints = "ㅈㅁ";
            answer[0] = "주문";
            answer[1] = "주문 ";
            answer[2] = " 주문";
            answer[3] = " 주문 ";
            answer[4] = "  주문";
            answer[5] = "오마지나이";
        }
        if (randp == 308 || randp == 309) {
            hints = "ㅊㅅㄹㅂㅌㅍㄹㅇ";
            answer[0] = "첫사랑 버터플라이";
            answer[1] = "첫사랑버터플라이";
            answer[2] = "첫사랑 나비";
            answer[3] = "첫 사랑 버터플라이";
            answer[4] = "첫 사랑버터플라이";
            answer[5] = "첫 사랑 나비";
        }
        if (randp == 310 || randp == 311) {
            hints = "ㅊㅇㅇㄱㅋㄹ";
            answer[0] = "첫울음과 클럽";
            answer[1] = "첫울음과클럽";
            answer[2] = "첫울음과 클로버";
            answer[3] = "첫울음과클로버";
            answer[4] = "첫 울음과 클럽";
            answer[5] = "첫울음과 클러버";
        }
        if (randp == 312 || randp == 313) {
            hints = "ㅊㅈㅇㅎㅅ☆ㅇㅇㄷㅉ!";
            answer[0] = "초자연현상☆아이돌ch@ng!";
            answer[1] = "초자연현상 아이돌!";
            answer[2] = "초자연현상 아이돌쨩!";
            answer[3] = "초자연현상 아이돌";
            answer[4] = "초자연현상 아이돌쨩";
            answer[5] = "초자연현상 아이돌짱";
            answer[6] = "초자연현상 idolchang";
            answer[7] = "초자연현상 아이돌chang!";
            answer[8] = "촤자연현상 아이돌chang";
        }
        if (randp == 314 || randp == 315) {
            hints = "ㅋㄴㅂㅈㅍㄴㅅㅋ";
            answer[0] = "카니발 자포네스크";
            answer[1] = "카니발자포네스크";
            answer[2] = "카니발 자포내스크";
            answer[3] = "카니발자포내스크";
            answer[4] = "카니벌 자포네스크";
            answer[5] = "카니벌자포네스크";
        }
        if (randp == 316 || randp == 317) {
            hints = "ㅌㅁㅎㅍㄹㄹㄱ";
            answer[0] = "투명한 프롤로그";
            answer[1] = "투명한프롤로그";
            answer[2] = "투명한 프로로그";
            answer[3] = "투명한프로로그";
            answer[4] = "투명한 프롤로그 ";
            answer[5] = "프롤로그";
        }
        if (randp == 318 || randp == 319) {
            hints = "ㅍㅅㅌㅇㄹㅁㄴㅇㅅ";
            answer[0] = "페스타 일루미네이션";
            answer[1] = "페스타일루미네이션";
            answer[2] = "패스타 일루미네이션";
            answer[3] = "패스타일루미네이션";
            answer[4] = "페스타 일루미네이션 ";
            answer[5] = "일루미네이션";
            answer[6] = "페스타 일루미";
        }
        if (randp == 320 || randp == 321) {
            hints = "ㅍㄹㄹ";
            answer[0] = "프랄린";
            answer[1] = "프랄리네";
            answer[2] = "프랄린 ";
            answer[3] = "프랄리네 ";
            answer[4] = "프랄린";
            answer[5] = "프랄린";
        }
        if (randp == 322 || randp == 323) {
            hints = "ㅍㄹㅁㄹ";
            answer[0] = "프리뮬러";
            answer[1] = "앵초";
            answer[2] = "달맞이꽃";
            answer[3] = "프리물러";
            answer[4] = "프리뮬러 ";
            answer[5] = "달맞이 꽃";
        }
        if (randp == 324 || randp == 325) {
            hints = "ㅍㄴㄱㅇㅅㅅㅇㄱㄷㄹㅂㄲ";
            answer[0] = "피는 것은 속세의 그대란 불꽃";
            answer[1] = "피는것은 속세의 그대란 불꽃";
            answer[2] = "피는 것은 속세의 그대란불꽃";
            answer[3] = "피는것은 속세의 그대란불꽃";
            answer[4] = "피는것은속세의그대란불꽃";
            answer[5] = "키미하나비";
        }
        if (randp == 326 || randp == 327) {
            hints = "ㅍㅋㅍㅋㅇㅇㅋ!ㅇㅂㅇㄷ";
            answer[0] = "피코피코IIKO! 인베이더";
            answer[1] = "피코피코 인베이더!";
            answer[2] = "피코피코 인베이더";
            answer[3] = "피코피코이이코! 인베이더";
            answer[4] = "피코피코 Chakhan ai! 인베이더";
            answer[5] = "피코피코iiko 인베이더";
            answer[6] = "피코피코이코 인베이더";
            answer[7] = "피코피코이이코 인베이더";
            answer[8] = "pikopiko 인베이더";
        }
        if (randp == 328 || randp == 329) {
            hints = "ㅎㅁㄴㅅ";
            answer[0] = "하모닉스";
            answer[1] = "하모닉스 ";
            answer[2] = " 하모닉스";
            answer[3] = " 하모닉스 ";
            answer[4] = "하모닉스";
            answer[5] = "하모닉스";
        }
        if (randp == 330 || randp == 331) {
            hints = "ㅎㅇㄹㅇㄷㅇㅇ☆";
            answer[0] = "한여름의 다이아☆";
            answer[1] = "한여름의 다이아";
            answer[2] = "한여름의다이아";
            answer[3] = "한여름에 다이아";
            answer[4] = "한여름에다이아";
            answer[5] = "한 여름의 다이아";
        }
        if (randp == 332 || randp == 333) {
            hints = "ㅎㅌㅇㅍㄹㅅ";
            answer[0] = "한탄의 FRACTION";
            answer[1] = "한탄의 fraction";
            answer[2] = "한탄의 프렉션";
            answer[3] = "한탄의 프랙션";
            answer[4] = "한탄의 조각";
            answer[5] = "한탄의프렉션";
            answer[6] = "한탄의 프렉숀";
        }
        if (randp == 334 || randp == 335) {
            hints = "ㅎㅍㅁㅇㄱㄷ";
            answer[0] = "해피 마이 가든";
            answer[1] = "해피 마이가든";
            answer[2] = "해피마이 가든";
            answer[3] = "해피마이가든";
            answer[4] = "해피 내 가든";
            answer[5] = "하피 마이 가든";
            answer[6] = "해마가";
        }
        if (randp == 336 || randp == 337) {
            hints = "ㅎㅍ~ㅇㅍㅌ!";
            answer[0] = "해피~ 이펙트!";
            answer[1] = "해피 이펙트!";
            answer[2] = "해피 이펙트";
            answer[3] = "해피이펙트!";
            answer[4] = "해피이펙트";
            answer[5] = "해피 이팩트!";
        }
        if (randp == 338 || randp == 339) {
            hints = "ㅎㅁㄹㄷ";
            answer[0] = "허밍 로드";
            answer[1] = "허밍로드";
            answer[2] = "허밍 로드 ";
            answer[3] = "허밍로드 ";
            answer[4] = "허밍 로드";
            answer[5] = "허밍 로드";
        }
        if (randp == 340 || randp == 341) {
            hints = "ㅎㅁㅂㄷ";
            answer[0] = "허밍버드";
            answer[1] = "허밍 버드";
            answer[2] = "허밍버드 ";
            answer[3] = " 허밍버드";
            answer[4] = "허밍 버드 ";
            answer[5] = "허밍버드";
        }
        if (randp == 342 || randp == 343) {
            hints = "ㅎㄱㄴㅁ";
            answer[0] = "협기난무";
            answer[1] = "협기난무 ";
            answer[2] = " 협기난무";
            answer[3] = " 협기난무 ";
            answer[4] = "협기난무";
            answer[5] = "협난";
        }
        if (randp == 344 || randp == 345) {
            hints = "ㄷㅇㅌㅍㄹㅇㄷ!";
            answer[0] = "DATE PARADE!";
            answer[1] = "DATE PARADE";
            answer[2] = "date parade!";
            answer[3] = "date parade";
            answer[4] = "데이트 퍼레이드!";
            answer[5] = "데이트 퍼레이드";
            answer[6] = "데이트 퍼래이드!";
            answer[7] = "데이트 퍼래이드";
        }
        if (randp == 346 || randp == 347) {
            hints = "ㅅㄹㅂㅂㅅ";
            answer[0] = "Shamrock Vivace";
            answer[1] = "shamrock vivace";
            answer[2] = "샴록 비바스";
            answer[3] = "샴록비바스";
            answer[4] = "샴락 비바스";
            answer[5] = "샴락비바스";
        }
        if (randp == 348 || randp == 349) {
            hints = "ㄷㅇㅅㅌㅇㅇㅇㄷ";
            answer[0] = "Dual Style Idol";
            answer[1] = "dual style idol";
            answer[2] = "듀얼 스타일 아이돌";
            answer[3] = "듀얼스타일 아이돌";
            answer[4] = "듀얼스타일아이돌";
            answer[5] = "두얼 스타일 아이돌";
        }
        if (randp == 350 || randp == 351) {
            hints = "ㄴㅇㄱㅂㅊㄴㅍㅌㄹㅇㅌ";
            answer[0] = "너에게 비치는 포트레이트";
            answer[1] = "너에게비치는포트레이트";
            answer[2] = "너에게 비치는 포트래이트";
            answer[3] = "너에게비치는포트래이트";
            answer[4] = "너에게 빛치는 포트레이트";
            answer[5] = "너에게빛치는포트레이트";
        }
        if (randp == 352 || randp == 353) {
            hints = "ㄴㄱㅎㄱㅇㄷㅇㅇㅇㅇ";
            answer[0] = "네가 한가운데에 있었어";
            answer[1] = "니가 한가운데에 있었어";
            answer[2] = "네가한가운데에있었어";
            answer[3] = "니가한가운데에있었어";
            answer[4] = "네가 가운데에 있었어";
            answer[5] = "니가 가운데에 있었어";
        }
        if (randp == 354 || randp == 355) {
            hints = "ㅂㅉㅂㅉㅍㅇ!";
            answer[0] = "반짝반짝 픽업!";
            answer[1] = "반짝반짝 픽업";
            answer[2] = "반짝반짝픽업!";
            answer[3] = "반짝반짝픽업";
            answer[4] = "키라키라 픽업!";
            answer[5] = "키라키라픽업";
        }
        if (randp == 356 || randp == 357) {
            hints = "ㅇㅇㄷㅇ,ㅇㄹㄱㅁㅎㄷ";
            answer[0] = "아이돌은, 이렇게 말했다";
            answer[1] = "아이돌은 이렇게 말했다";
            answer[2] = "아이돌은이렇게말했다";
            answer[3] = "아이돌은, 이렇게말했다";
            answer[4] = "아이돌은,이렇게말했다";
            answer[5] = "아이돌은, 이롷게 말했다";
        }
        if (randp == 358 || randp == 359) {
            hints = "ㅇㄱㅇㅍㄹㅇㄱㄹㅅ";
            answer[0] = "용기의 fragrance";
            answer[1] = "용기의fragrance";
            answer[2] = "용기의 프레이그런스";
            answer[3] = "용기의 프레그런스";
            answer[4] = "용기의프레이그런스";
            answer[5] = "용기의프레그런스";
        }
        if (randp == 360 || randp == 361) {
            hints = "ㅂㅌㅍㅂㄹㅂ";
            answer[0] = "Beautiful Believer";
            answer[1] = "beautiful believer";
            answer[2] = "뷰티풀 빌리버";
            answer[3] = "뷰티풀빌리버";
            answer[4] = "뷰티플 빌리버";
            answer[5] = "뷰티풀 빌리벌";
        }
        if (randp == 362 || randp == 363) {
            hints = "ㅋㄹㅇㄷㅍㄹㅅ";
            answer[0] = "Collier De Perles";
            answer[1] = "collier de perles";
            answer[2] = "콜리어 데 페를스";
            answer[3] = "콜리어 데 펄스";
            answer[4] = "칼리어 데 페를스";
            answer[5] = "칼리어 데 펄스";
        }
        if (randp == 364 || randp == 365) {
            hints = "ㅋㄹㅅㄷㅍㅊ";
            answer[0] = "Cross the future";
            answer[1] = "cross the future";
            answer[2] = "크로스 더 퓨처";
            answer[3] = "크로스 더퓨처";
            answer[4] = "크로스더퓨처";
            answer[5] = "크로스 더 퓨쳐";
        }
        if (randp == 366 || randp == 367) {
            hints = "ㅇㅍㅅㅊㅅㄹ";
            answer[0] = "이표심층심리";
            answer[1] = "이표 심층 심리";
            answer[2] = "이표심층 심리";
            answer[3] = "이표 심층심리";
            answer[4] = "이표심층심리 ";
            answer[5] = " 이표심층심리";
        }
        if (randp == 368 || randp == 369) {
            hints = "ㅍㄹㅁㄹㅇㅇㄲ";
            answer[0] = "플루메리아의 꽃";
            answer[1] = "플루메리아의꽃";
            answer[2] = "플루메리아노 하나";
            answer[3] = "플루메리아 꽃";
            answer[4] = "플루메리아의 꽃";
            answer[5] = "플루메리아의 꽃";
        }
        if (randp == 370 || randp == 371) {
            hints = "ㄹㅂㅇㅈㄱㅇ";
            answer[0] = "LOVE is GAME";
            answer[1] = "love is game";
            answer[2] = "Love IS GAME";
            answer[3] = "Love Is Game";
            answer[4] = "러브 이즈 게임";
            answer[5] = "러브이즈게임";
            answer[6] = "loveisgame";
        }
        if (randp == 372 || randp == 373) {
            hints = "ㅁㄹㅂㅎ";
            answer[0] = "미래 비행";
            answer[1] = "미라이 비행";
            answer[2] = "미래비행";
            answer[3] = "미레 비행";
            answer[4] = "미레비행";
            answer[5] = "미래 비헹";
        }
        if (randp == 374 || randp == 375) {
            hints = "ㅁㄹㄱㄷㄹㅁ";
            answer[0] = "미래계 드리머";
            answer[1] = "미래걔 드리머";
            answer[2] = "미래계드리머";
            answer[3] = "미래걔드리머";
            answer[4] = "미라이계 드리머";
            answer[5] = "미래형 드리머";
        }
        if (randp == 376 || randp == 377) {
            hints = "ㅍㄹㅅㅅㄱㄹㅇ";
            answer[0] = "Precious Grain";
            answer[1] = "precious grain";
            answer[2] = "preciousgrain";
            answer[3] = "프레셔스 그레인";
            answer[4] = "프래셔스 그래인";
            answer[5] = "프레셔스그레인";
            answer[6] = "프레셔스 그레인";
        }
        if (randp == 378 || randp == 379) {
            hints = "ㅋㅊㅁㅇㄷㄹ";
            answer[0] = "Catch my dream";
            answer[1] = "catch my dream";
            answer[2] = "catchmydream";
            answer[3] = "캐치 마이 드림";
            answer[4] = "케치 마이 드림";
            answer[5] = "캐치마이드림";
            answer[6] = "케치마이드림";
        }
        if (randp == 380 || randp == 381) {
            hints = "ㅅㅁㅇㅅ";
            answer[0] = "SING MY SONG";
            answer[1] = "SINGMYSONG";
            answer[2] = "sing my song";
            answer[3] = "singmysong";
            answer[4] = "싱 마이 송";
            answer[5] = "싱마이송";
        }
        if (randp == 382 || randp == 383) {
            hints = "ㅅㄹㅇㄹㅅㅊㄱㅍ";
            answer[0] = "사랑의 Lesson 초급편";
            answer[1] = "사랑의 lesson 초급편";
            answer[2] = "사랑의 레슨 초급편";
            answer[3] = "사랑의 lesson초급편";
            answer[4] = "사랑의 레슨초급편";
            answer[5] = "사랑의레슨초급편";
            answer[6] = "사랑의lesson초급편";
        }
        if (randp == 384 || randp == 385) {
            hints = "ㅇㅊㄴㅇㅇㅋㄹㅅㄷ";
            answer[0] = "아침노을의 크레센도";
            answer[1] = "아침노을의크레센도";
            answer[2] = "아침노을의 크레셴도";
            answer[3] = "아침노을의크레셴도";
            answer[4] = "아침노을 크레센도";
            answer[5] = "아침노을크레센도";
        }
        if (randp == 386 || randp == 387) {
            hints = "ㅈㅈㅎㄴ";
            answer[0] = "진정한 나";
            answer[1] = "진정한나";
            answer[2] = " 진정한 나";
            answer[3] = " 진정한나";
            answer[4] = "진정한 나 ";
            answer[5] = "진정한나 ";
        }
        if (randp == 388 || randp == 389) {
            hints = "ㅎㅌ!!";
            answer[0] = "Hearty!!";
            answer[1] = "Hearty";
            answer[2] = "hearty!!";
            answer[3] = "hearty";
            answer[4] = "하티!!";
            answer[5] = "하티";
            answer[6] = "허티!!";
            answer[7] = "허티";
        }
        if (randp == 390 || randp == 391) {
            hints = "ㅇㅍㅌㅅㅋㅍㅌㅌㅇ";
            answer[0] = "애프터 스쿨 파티 타임";
            answer[1] = "애프터 스쿨파티타임";
            answer[2] = "애프터스쿨파티타임";
            answer[3] = "에프터 스쿨 파티 타임";
            answer[4] = "에프터 스쿨파티타임";
            answer[5] = "에프터스쿨파티타임";
            answer[6] = "애프터 스쿨 파티타임";
            answer[7] = "에프터 스쿨 파티타임";
        }
        if (randp == 392 || randp == 393) {
            hints = "ㅍㄹㅈㅇㄷ";
            answer[0] = "프로즌 워드";
            answer[1] = "프로즌워드";
            answer[2] = "프로즌 워드 ";
            answer[3] = "프로즌워드 ";
            answer[4] = " 프로즌 워드";
            answer[5] = " 프로즌워드";
        }
        if (randp == 394 || randp == 395) {
            hints = "ㅁㅇㅇㅋㄴㅂ";
            answer[0] = "마음은 Carnaval";
            answer[1] = "마음은Carnaval";
            answer[2] = "마음만은 Carnaval";
            answer[3] = "마음만은Carnaval";
            answer[4] = "마음은 carnaval";
            answer[5] = "마음은carnaval";
            answer[6] = "마음은 카니발";
            answer[7] = "마음은카니발";
        }
        if (randp == 396 || randp == 397) {
            hints = "ㅍㅌㅈㅅㅌㅋㄴㅂ";
            answer[0] = "판타지스타 카니발";
            answer[1] = "판타지스타카니발";
            answer[2] = "판타지스타 카니발 ";
            answer[3] = "판타지스타카니발 ";
            answer[4] = " 판타지스타 카니발";
            answer[5] = " 판타지스타카니발";
        }
        if (randp == 398 || randp == 399) {
            hints = "ㅍㄹㅅㅅㅇㄹㅁㄷ";
            answer[0] = "프린세스 아라모드";
            answer[1] = "프린세스아라모드";
            answer[2] = "프린새스 아라모드";
            answer[3] = "프린새스아라모드";
            answer[4] = "프린세스 아라모드 ";
            answer[5] = " 프린세스 아라모드";
        }
        if (randp == 400 || randp == 401) {
            hints = "ㅁㄹㅇㅌㄹ";
            answer[0] = "Maria Trap";
            answer[1] = "MariaTrap";
            answer[2] = "maria trap";
            answer[3] = "mariatrap";
            answer[4] = "마리아 트랩";
            answer[5] = "마리아트랩";
            answer[6] = "마리아 트렙";
        }
        if (randp == 402 || randp == 403) {
            hints = "ㅅㅈㅅㅋㄹㅊ";
            answer[0] = "새장 스크립쳐";
            answer[1] = "새장스크립쳐";
            answer[2] = "새장 스크립처";
            answer[3] = "새장스크립처";
            answer[4] = "새장 스크립쳐 ";
            answer[5] = " 새장 스크립쳐";
        }
        if (randp == 404 || randp == 405) {
            hints = "ㅎㅌ♡・ㄷㅇㅈ・ㄴㅇㅌ☆";
            answer[0] = "Heart♡・데이즈・Night☆";
            answer[1] = "Heart 데이즈 Night";
            answer[2] = "heart 데이즈 night";
            answer[3] = "하트 데이즈 나이트";
            answer[4] = "하트데이즈나이트";
            answer[5] = "heart days night";
        }
        if (randp == 406 || randp == 407) {
            hints = "ㅍㄹㅌ~~~ㅇ→ㄴㄴ!";
            answer[0] = "프리티~~~잇→ 냥냥!";
            answer[1] = "프리티잇 냥냥!";
            answer[2] = "프리티잇 냥냥";
            answer[3] = "프리티잇냥냥!";
            answer[4] = "프리티잇냥냥";
            answer[5] = "프리팃 냥냥";
            answer[6] = "프리팃냥냥";
        }
        if (randp == 408 || randp == 409) {
            hints = "ㅇㅇㅋㄴ?";
            answer[0] = "AIKANE?";
            answer[1] = "AIKANE";
            answer[2] = "aikane?";
            answer[3] = "aikane";
            answer[4] = "아이카네?";
            answer[5] = "아이카네";
        }
        if (randp == 410 || randp == 411) {
            hints = "ㄱㅁㅇㅅㅇㄴ";
            answer[0] = "Get My Shinin'";
            answer[1] = "get my shinin'";
            answer[2] = "Get My Shining";
            answer[3] = "getmyshining";
            answer[4] = "겟 마이 샤이닝";
            answer[5] = "갯 마이 샤이닝";
            answer[6] = "겟마이샤이닝";
            answer[7] = "갯마이샤이닝";
        }
        if (randp == 412 || randp == 413) {
            hints = "ㅇㄴㅈ☆ㅂㅌ";
            answer[0] = "유니존☆비트";
            answer[1] = "유니존 비트";
            answer[2] = "유니존비트";
            answer[3] = "유니슨 비트";
            answer[4] = "유니슨비트";
            answer[5] = "유니존 비토";
        }
        if (randp == 414 || randp == 415) {
            hints = "ㅇㄹㅇㄹㄷㅅㅋ";
            answer[0] = "Oli Oli DISCO";
            answer[1] = "OliOliDISCO";
            answer[2] = "oli oli disco";
            answer[3] = "oliolidisco";
            answer[4] = "올리 올리 디스코";
            answer[5] = "올리올리디스코";
            answer[6] = "온리온리디스코";
        }
        if (randp == 416 || randp == 417) {
            hints = "ㅈㄱ,ㄷㅇㅈㅇㅁㅎㄴㄱㅇㅇ";
            answer[0] = "저기, 들어줬으면 하는게 있어";
            answer[1] = "저기,들어줬으면하는게 있어";
            answer[2] = "저기들어줬으면하는게 있어";
            answer[3] = "저기 들어줬으면 하는게 있어";
            answer[4] = "있지, 들어줬으면 하는게 있어";
            answer[5] = "있지 들어줬으면 하는게 있어";
        }
        if (randp == 418 || randp == 419) {
            hints = "ㅅㄱㅇㅁㅊ";
            answer[0] = "사과의 마치";
            answer[1] = "사과의마치";
            answer[2] = "사과에 마치";
            answer[3] = "사과에마치";
            answer[4] = " 사과의 마차";
            answer[5] = "사과의 마차 ";
        }
        if (randp == 420 || randp == 421) {
            hints = "ㅁㅇ☆ㅇㅅㅅㅇㅈ";
            answer[0] = "마음☆엑서사이즈";
            answer[1] = "마음 엑서사이즈";
            answer[2] = "마음엑서사이즈";
            answer[3] = "마음 액서사이즈";
            answer[4] = "마음액서사이즈";
            answer[5] = "마음 엑서사이즈 ";
        }
        if (randp == 422 || randp == 423) {
            hints = "ㅍㅋㅍㅋ";
            answer[0] = "POKER POKER";
            answer[1] = "POKERPOKER";
            answer[2] = "poker poker";
            answer[3] = "pokerpoker";
            answer[4] = "포커 포커";
            answer[5] = "포커포커";
        }
        if (randp == 424 || randp == 425) {
            hints = "ㅎ♪ㅅㅌ♪ㄹㅇㅂㅇ♪";
            answer[0] = "홉♪ 스텝♪ 레인보우♪";
            answer[1] = "홉 스텝 레인보우";
            answer[2] = "홉 스탭 레인보우";
            answer[3] = "홉스텝 레인보우";
            answer[4] = "홉스탭 레인보우";
            answer[5] = "홉스텝레인보우";
        }
        if (randp == 426 || randp == 427) {
            hints = "ㅂㅇㅅ♪ㅅㅁㅇ!";
            answer[0] = "BOUNCING♪ SMILE!";
            answer[1] = "BOUNCING SMILE";
            answer[2] = "BOUNCING SMILE!";
            answer[3] = "bouncing smile!";
            answer[4] = "bouncing smile";
            answer[5] = "바운싱 스마일!";
            answer[6] = "바운싱 스마일";
            answer[7] = "바운싱스마일";
        }
        if (randp == 428 || randp == 429) {
            hints = "ㅌㅎㅁㅎ☆ㅎㅇㅎ-ㄷ";
            answer[0] = "탐험 모험☆하이호-대";
            answer[1] = "탐험 모험 하이호 대";
            answer[2] = "탐험 모험 하이호대";
            answer[3] = "탐험모험 하이호대";
            answer[4] = "탐험모험하이호대";
            answer[5] = "탐험모험 하이호 대";
        }
        if (randp == 430 || randp == 431) {
            hints = "ㅂㄱㄴㅈ☆ㅅㅌㄹㅇㅋ";
            answer[0] = "비기너즈☆스트라이크";
            answer[1] = "비기너즈 스트라이크";
            answer[2] = "비기너즈스트라이크";
            answer[3] = "비긴너즈 스트라이크";
            answer[4] = "비긴너즈스트라이크";
            answer[5] = "비기너스 스트라이크";
        }
        if (randp == 432 || randp == 433) {
            hints = "ㅎㄹㅅ♪";
            answer[0] = "HOME RUN SONG♪";
            answer[1] = "HOME RUN SONG";
            answer[2] = "home run song";
            answer[3] = "homerun song";
            answer[4] = "HOMERUN SONG";
            answer[5] = "홈런 송";
            answer[6] = "홈 런 송";
            answer[7] = "홈런송";
        }
        if (randp == 434 || randp == 435) {
            hints = "ㅎㅇㄹㅈ";
            answer[0] = "후와리즘";
            answer[1] = " 후와리즘";
            answer[2] = "후와리즘 ";
            answer[3] = "후와리즘";
            answer[4] = "후와리즘";
            answer[5] = "후와리슴";
        }
        if (randp == 436 || randp == 437) {
            hints = "ㅎㅍ☆ㄹㅋ☆ㅈㅌㅁㅅ";
            answer[0] = "해피☆러키☆제트 머신";
            answer[1] = "해피 러키 제트 머신";
            answer[2] = "해피러키제트머신";
            answer[3] = "해피 럭키 제트 머신";
            answer[4] = "해피럭키제트머신";
            answer[5] = "해피럭키제트 머신";
        }
        if (randp == 438 || randp == 439) {
            hints = "ㅅㅍㄹㅂ";
            answer[0] = "Super Lover";
            answer[1] = "super lover";
            answer[2] = "SUPER LOVER";
            answer[3] = "superlover";
            answer[4] = "수퍼 러버";
            answer[5] = "수퍼러버";
            answer[6] = "슈퍼 러버";
            answer[7] = "슈퍼러버";
        }
        if (randp == 440 || randp == 441) {
            hints = "ㅎㅇㅈㅁㅋㅁㄴㅇ!";
            answer[0] = "Home is a coming now!";
            answer[1] = "Home is a coming now";
            answer[2] = "home is a coming now!";
            answer[3] = "home is a coming now";
            answer[4] = "홈 이즈 어 커밍 나우!";
            answer[5] = "홈 이즈 어 커밍 나우";
            answer[6] = "홈이즈어커밍나우";
            answer[7] = "홈 이즈 어커밍 나우";
        }
        if (randp == 442 || randp == 443) {
            hints = "ㅅㅌㅌㄹ";
            answer[0] = "스타 트립";
            answer[1] = "스타트립";
            answer[2] = "스타트 트립";
            answer[3] = "스타트트립";
            answer[4] = "스타 트맆";
            answer[5] = "스타트맆";
        }
        if (randp == 444 || randp == 445) {
            hints = "ㅊㄱㅇㅅㅁㅇ";
            answer[0] = "최고의 스마일";
            answer[1] = "최고의스마일";
            answer[2] = "최고의 smile";
            answer[3] = "최고의smile";
            answer[4] = "최고 스마일";
            answer[5] = "최고스마일";
        }
        if (randp == 446 || randp == 447) {
            hints = "ㅅㅍㄹㅇㅈㄹㅂ!!";
            answer[0] = "SUPER SIZE LOVE!!";
            answer[1] = "super size love";
            answer[2] = "SUPER SIZE LOVE";
            answer[3] = "super size love!!";
            answer[4] = "수퍼 사이즈 러브!!";
            answer[5] = "수퍼 사이즈 러브";
            answer[6] = "수퍼사이즈러브";
            answer[7] = "슈퍼 사이즈 러브";
            answer[8] = "수사럽";
        }
        if (randp == 448 || randp == 449) {
            hints = "ㅁㅂㅈㄱㅍㅋㅇㅅ";
            answer[0] = "만복 지극 풀코오스";
            answer[1] = "만복 지극 풀코스";
            answer[2] = "만복지극 풀코오스";
            answer[3] = "만복지극 풀코스";
            answer[4] = "만복지극풀코오스";
            answer[5] = "만복지극풀코스";
        }
        if (randp == 450 || randp == 451) {
            hints = "ㅈㄱㅂㅇㅇㄴㄴㄹ";
            answer[0] = "지구본에 없는 나라";
            answer[1] = "지구본에 없는나라";
            answer[2] = "지구본에없는 나라";
            answer[3] = "지구본에없는나라";
            answer[4] = "지구본 없는 나라";
            answer[5] = "지구본의 없는 나라";
        }
        if (randp == 452 || randp == 453) {
            hints = "ㅂㅂㄷㅇㅁㅈㄴㅇㅅ";
            answer[0] = "VIVID 이매지네이션";
            answer[1] = "VIVID이매지네이션";
            answer[2] = "vivid 이매지네이션";
            answer[3] = "vivid이매지네이션";
            answer[4] = "비비드 이매지네이션";
            answer[5] = "비비드이매지네이션";
            answer[6] = "비비드 이메지네이션";
            answer[7] = "vivid 이메지네이션";
        }
        if (randp == 454 || randp == 455) {
            hints = "ㅇㅌ→ㅍㄹㅈ";
            answer[0] = "ENTER→PLEASURE";
            answer[1] = "ENTER PLEASURE";
            answer[2] = "ENTERPLEASURE";
            answer[3] = "enter pleasure";
            answer[4] = "엔터 프리져";
            answer[5] = "앤터 프리져";
            answer[6] = "엔터프리저";
            answer[7] = "앤터프리저";
            answer[8] = "엔터 프래져";
        }
        if (randp == 456 || randp == 457) {
            hints = "ㅇㅈㅇㅁㅅㅋㄹㅇㄷ";
            answer[0] = "연정의 매스커레이드";
            answer[1] = "연정의매스커레이드";
            answer[2] = "연정 매스커레이드";
            answer[3] = "연정매스커레이드";
            answer[4] = "연정의 메스커레이드";
            answer[5] = "연정의 매스커래이드";
            answer[6] = "연정의메스커레이드";
        }
        if (randp == 458 || randp == 459) {
            hints = "ㅅㄹㅇㅇㅅㄹㅇ";
            answer[0] = "사랑의 음색 라인";
            answer[1] = "사랑의 음색라인";
            answer[2] = "사랑의음색 라인";
            answer[3] = "사랑의음색라인";
            answer[4] = "사랑 음색 라인";
            answer[5] = "사랑음색라인";
        }
        if (randp == 460 || randp == 461) {
            hints = "ㅁㄱㄷ";
            answer[0] = "문 골드";
            answer[1] = "문골드";
            answer[2] = "달골드";
            answer[3] = "문 금";
            answer[4] = "문금";
            answer[5] = "달 금";
        }
        if (randp == 462 || randp == 463) {
            hints = "ㄱㄷㅇㅅㅅㅇ!";
            answer[0] = "굿 데이 선샤인!";
            answer[1] = "굿 데이 선샤인";
            answer[2] = "굿데이 선샤인!";
            answer[3] = "굿데이 선샤인";
            answer[4] = "굿데이선샤인!";
            answer[5] = "굿데이선샤인";
            answer[6] = "굿데이 썬샤인";
        }
        if (randp == 464 || randp == 465) {
            hints = "ㅇㄴㅁ☆ㅅㅌㅇㅅ!";
            answer[0] = "애니멀☆스테이션!";
            answer[1] = "애니멀 스테이션!";
            answer[2] = "애니멀 스테이션";
            answer[3] = "애니멀스테이션!";
            answer[4] = "애니멀스테이션";
            answer[5] = "아니멀 스테이션";
        }
        if (randp == 466 || randp == 467) {
            hints = "ㄱㄲㅇㅅㅅ";
            answer[0] = "가끔은 시소";
            answer[1] = "가끔은시소";
            answer[2] = "가끔은 시소";
            answer[3] = " 가끔은 시소";
            answer[4] = "가끔은 시소 ";
            answer[5] = " 가끔은 시소 ";
        }
        if (randp == 468 || randp == 469) {
            hints = "ㅂㄷㄹㅇ→→→♡";
            answer[0] = "Border LINE→→→♡";
            answer[1] = "Border LINE";
            answer[2] = "border line";
            answer[3] = "borderline";
            answer[4] = "보더 라인";
            answer[5] = "보더라인";
        }
        if (randp == 470 || randp == 471) {
            hints = "ㄱㄷㅇㄴㄱ";
            answer[0] = "기도의 날개";
            answer[1] = "기도의날개";
            answer[2] = "기도 날개";
            answer[3] = "기도날개";
            answer[4] = "기도에 날개";
            answer[5] = "기도에날개";
        }
        if (randp == 472 || randp == 473) {
            hints = "ㅂㅇㄷㄴㄹㅎㅈ♪";
            answer[0] = "비에다 노래하자♪";
            answer[1] = "비에다 노래하자";
            answer[2] = "비에다노래하자";
            answer[3] = "비에 노래하자";
            answer[4] = "비에노래하자";
            answer[5] = "비에다가 노래하자";
        }
        if (randp == 474 || randp == 475) {
            hints = "ㅁㅇㅅㅌㅇ!ㅇㅇㅇㅅㅌㅇ!!!!";
            answer[0] = "MY STYLE! OUR STYLE!!!!";
            answer[1] = "MY STYLE! OUR STYLE";
            answer[2] = "MY STYLE OUR STYLE";
            answer[3] = "my style our style";
            answer[4] = "마이 스타일 아우얼 스타일";
            answer[5] = "마이 스타일! 아우얼 스타일!!!!";
            answer[6] = "마이스타일 아우얼스타일";
            answer[7] = "내스타일 우리스타일";
        }
        if (randp == 476 || randp == 477) {
            hints = "ㅈㅇㅅㄹㅇㅂㅅㄹ";
            answer[0] = "작은 사랑의 발소리";
            answer[1] = "작은사랑의 발소리";
            answer[2] = "작은 사랑의발소리";
            answer[3] = "작은사랑의발소리";
            answer[4] = "작은 사랑에 발소리";
            answer[5] = "작은사랑에발소리";
        }
        if (randp == 478 || randp == 479) {
            hints = "ㅈㄴㅂㄹㅇㅁㄹㄷ";
            answer[0] = "저녁바람의 멜로디";
            answer[1] = "저녁바람의멜로디";
            answer[2] = "저녁바람에 멜로디";
            answer[3] = "저녁바람에멜로디";
            answer[4] = "저녁바람 멜로디";
            answer[5] = "저녁바람멜로디";
        }
        if (randp == 480 || randp == 481) {
            hints = "ㅁㅇㅍㅇㅅ☆ㅁㅇㅇㅇ";
            answer[0] = "마이페이스☆마이웨이";
            answer[1] = "마이페이스 마이웨이";
            answer[2] = "마이페이스마이웨이";
            answer[3] = "마이 페이스 마이 웨이";
            answer[4] = "마이패이스 마이웨이";
            answer[5] = "마이 패이스 마이 웨이";
        }
        if (randp == 482 || randp == 483) {
            hints = "ㅂㄹVSㅁㅇㅍㅊ";
            answer[0] = "바람 VS 마이 퓨처";
            answer[1] = "바람 VS 마이퓨처";
            answer[2] = "바람VS마이퓨처";
            answer[3] = "바람 대 마이 퓨처";
            answer[4] = "바람 대 마이퓨처";
            answer[5] = "바람 마이 퓨처";
        }
        if (randp == 484 || randp == 485) {
            hints = "ㅇㅇㅇ!!";
            answer[0] = "WE ARE ONE!!";
            answer[1] = "WE ARE ONE";
            answer[2] = "we are one!!";
            answer[3] = "we are one";
            answer[4] = "위 알 원!!";
            answer[5] = "위 알 원";
            answer[6] = "위알원";
        }
        if (randp == 486 || randp == 487) {
            hints = "ㄱㄷㄱㅇㅇㄲㅇㄷㅇ";
            answer[0] = "그대가 있어 꿈이 되어";
            answer[1] = "그대가 있어 꿈이되어";
            answer[2] = "그대가있어 꿈이되어";
            answer[3] = "그대가있어꿈이되어";
            answer[4] = "네가 있어 꿈이 되어";
            answer[5] = "그대가있어 꿈이 되어";
            answer[6] = "네가있어 꿈이되어";
            answer[7] = "네가있어꿈이되어";
        }
        if (randp == 488 || randp == 489) {
            hints = "ㅅㄴㅇㅎㅇㅌ";
            answer[0] = "Snow White";
            answer[1] = "snow white";
            answer[2] = "snowwhite";
            answer[3] = "SnowWhite";
            answer[4] = "스노우 화이트";
            answer[5] = "스노우화이트";
            answer[6] = "스노 화이트";
        }
        if (randp == 490 || randp == 491) {
            hints = "ㅊㅇㅇㅅㄷㄱㄹㅅ";
            answer[0] = "추억의 샌드글라스";
            answer[1] = "추억의샌드글라스";
            answer[2] = "추억의 샌드글레스";
            answer[3] = "추억의샌드글레스";
            answer[4] = "추억의 센드글라스";
            answer[5] = "추억의센드글라스";
            answer[6] = "추억의 모래시계";
            answer[7] = "추억의 샌드글래스";
        }
        if (randp == 492 || randp == 493) {
            hints = "ㅍㅇㅋㅅㅍxㅌㄹㅅㅍ";
            answer[0] = "FAKE SELF×TRUE SELF";
            answer[1] = "FAKE SELFxTRUE SELF";
            answer[2] = "FAKE SELF x TRUE SELF";
            answer[3] = "fake self x true self";
            answer[4] = "페이크 셀프 x 트루 셀프";
            answer[5] = "페이크 셀프 트루 셀프";
            answer[6] = "fake selfxtrue self";
            answer[7] = "fake self true self";
        }
        if (randp == 494 || randp == 495) {
            hints = "ㅇㅍㅂㅇㅅㄹㅅㄹㅅ";
            answer[0] = "Impervious Resolution";
            answer[1] = "impervious resolution";
            answer[2] = "임펄비어스 레졸루션";
            answer[3] = "임펄비어스 리졸루션";
            answer[4] = "임펄비어스 레솔루션";
            answer[5] = "임펄비어스 리솔루션";
            answer[6] = "임펄비어스레솔루션";
            answer[7] = "임펄비어스리솔루션";
        }
        if (randp == 496 || randp == 497) {
            hints = "ㅎㅌㅇㅁ";
            answer[0] = "하트 워밍";
            answer[1] = "하트워밍";
            answer[2] = "하트웜밍";
            answer[3] = "하트 웜밍";
            answer[4] = "헐트 워밍";
            answer[5] = "heart warming";
        }
        if (randp == 498 || randp == 499) {
            hints = "ㅅㅌㄹㅂㄹㅋㅍㅌ";
            answer[0] = "스트로베리 큐피트";
            answer[1] = "스트로베리큐피트";
            answer[2] = "스트로배리 큐피트";
            answer[3] = "스트로배리큐피트";
            answer[4] = "스트로베리 큐피드";
            answer[5] = "스트로베리큐피드";
            answer[6] = "스트로배리 큐피드";
        }
        if (randp == 500 || randp == 501) {
            hints = "ㅍㄹㅇㅂㄹㄷㅅ(ㅍㄹㅇㅂ,ㅇㅋㄷㅇ)";
            answer[0] = "프라이빗 로드쇼 (playback, Weekday)";
            answer[1] = "프라이빗 로드쇼";
            answer[2] = "프라이빗로드쇼";
            answer[3] = "프라이빗 로드쇼 playback weekday";
            answer[4] = "playback, Weekday";
            answer[5] = "playback, weekday";
            answer[6] = "playback weekday";
            answer[7] = "프라이빗 로드쇼 플레이백 위크데이";
            answer[8] = "프라이빗 로드쇼 playback, weekday";
        }
        if (randp == 502 || randp == 503) {
            hints = "ㅈㄱㅁㄹㅂ";
            answer[0] = "지구 미러볼";
            answer[1] = "지구미러볼";
            answer[2] = "지구 미라볼";
            answer[3] = "지구 미라볼";
            answer[4] = "지구 미러 볼";
            answer[5] = "세상 미러볼";
        }
        if (randp == 504 || randp == 505) {
            hints = "ㅅㄹㅇㄲ";
            answer[0] = "사랑의 꽃";
            answer[1] = "사랑의꽃";
            answer[2] = "아이노 하나";
            answer[3] = "아이노하나";
            answer[4] = "사랑 꽃";
            answer[5] = "사랑꽃";
        }
        if (randp == 506 || randp == 507) {
            hints = "ㄱㅊㅎㄴㄱㅈ";
            answer[0] = "교차하는 계절";
            answer[1] = "교차하는계절";
            answer[2] = "교차하는 게절";
            answer[3] = "교차하는게절";
            answer[4] = "교차하는 걔절";
            answer[5] = "교차하는걔절";
        }
        if (randp == 508 || randp == 509) {
            hints = "ㄱㄹㄷㄱ";
            answer[0] = "GREEDY GIRL";
            answer[1] = "Greedy Girl";
            answer[2] = "greedy girl";
            answer[3] = "그리디 걸";
            answer[4] = "그리디걸";
            answer[5] = "GREEDYGIRL";
            answer[6] = "greedygirl";
        }
        if (randp == 510 || randp == 511) {
            hints = "ㄹㅇㅇㅅㄱㅂㅇ";
            answer[0] = "liar's good bye";
            answer[1] = "liar's goodbye";
            answer[2] = "liars good bye";
            answer[3] = "liars goodbye";
            answer[4] = "라이어스 굿 바이";
            answer[5] = "라이어스 굿바이";
            answer[6] = "라이어스굿바이";
            answer[7] = "라이어'스 굿 바이";
        }
        if (randp == 512 || randp == 513) {
            hints = "ㅁㅅㅈㅇㄱㅇ,ㅇㅇㅊㄱㅇ.";
            answer[0] = "미소지었기에, 알아챈 거야.";
            answer[1] = "미소지었기에 알아챈 거야";
            answer[2] = "미소지었기에 알아챈거야";
            answer[3] = "미소지었기에, 알아챈거야.";
            answer[4] = "미소지어서 알아챈거야";
            answer[5] = "미소지었기에알아챈거야";
        }
        if (randp == 514 || randp == 515) {
            hints = "ㅌㅇㅁㅅㅇㄸㅇㅇㄹㅈ!";
            answer[0] = "타임머신에 뛰어오르자!";
            answer[1] = "타임머신에 뛰어오르자";
            answer[2] = "타임머신으로 뛰어오르자";
            answer[3] = "타임머신에 뛰오르자!";
            answer[4] = "타임머신에 뛰오르자";
            answer[5] = "타임머신 뛰어오르자";
        }
        if (randp == 516 || randp == 517) {
            hints = "ㄷㅌㅌㅂㅎㅇ! ~ㅅㄹㅌㅈㅇㅇㄱ~";
            answer[0] = "DETECTIVE HIGH! ~사랑탐정 이야기~";
            answer[1] = "DETECTIVE HIGH!";
            answer[2] = "detective high!";
            answer[3] = "DETECTIVE HIGH";
            answer[4] = "detective high";
            answer[5] = "사랑탐정 이야기";
            answer[6] = "DETECTIVE HIGH! 사랑탐정 이야기";
            answer[7] = "디텍티브 하이!";
            answer[8] = "디텍티브 하이! 사랑탐정 이야기";
        }
        if (randp == 518 || randp == 519) {
            hints = "ㅇㄴㅋㅅㅌㅍㄹㅇㅇ!";
            answer[0] = "유니크 스타 플레이어!";
            answer[1] = "유니크스타 플레이어!";
            answer[2] = "유니크 스타 플레이어";
            answer[3] = "유니크스타 플레이어";
            answer[4] = "유니크스타플레이어";
            answer[5] = "유니크스타플레이어!";
        }
        if (randp == 520 || randp == 521) {
            hints = "ㄴㄹㄴㅅㅅ";
            answer[0] = "나 르네상스";
            answer[1] = "나르네상스";
            answer[2] = "나 르내상스";
            answer[3] = "나르내상스";
            answer[4] = "르네상스 나";
            answer[5] = "로코 르네상스";
        }
        if (randp == 522 || randp == 523) {
            hints = "ㅅㅇㄷㅅ?";
            answer[0] = "쉘 위 댄스?";
            answer[1] = "쉘위댄스?";
            answer[2] = "쉘 위 댄스";
            answer[3] = "쉘위댄스";
            answer[4] = "쉘위 댄스?";
            answer[5] = "쉘위 댄스";
            answer[6] = "shall we dance?";
            answer[7] = "Shall we dance?";
        }
        if (randp == 524 || randp == 525) {
            hints = "ㅇㄴㅎㄴ,ㄷㅇ";
            answer[0] = "우는 하늘, 뒤에";
            answer[1] = "우는 하늘,뒤에";
            answer[2] = "우는하늘, 뒤에";
            answer[3] = "우는 하늘 뒤에";
            answer[4] = "우는 하늘뒤에";
            answer[5] = "우는하늘 뒤에";
            answer[6] = "우는하늘뒤에";
        }
        if (randp == 526 || randp == 527) {
            hints = "ㅁㄹㅇㅈㅂㄹㅍ";
            answer[0] = "Moonrise Belief";
            answer[1] = "monrise belief";
            answer[2] = "MoonriseBelief";
            answer[3] = "문라이즈 빌리프";
            answer[4] = "문라이즈빌리프";
            answer[5] = "문라이즈 벨리프";
            answer[6] = "문라이즈 빌라이프";
        }if (randp == 528 || randp == 529) {
            hints = "ㅊㅇㅇ!ㅎㅊㅇ!";
            answer[0] = "CHEER UP! HEARTS UP!";
            answer[1] = "cheer up! hearts up!";
            answer[2] = "치얼 업! 하츠 업!";
            answer[3] = "치얼 업! 하트 업!";
            answer[4] = "치얼 업 하트 업";
            answer[5] = "cheer up hearts up";
            answer[6] = "치얼업! 하트업!";
            answer[7] = "치얼업! 하츠업!";
        }if (randp == 530 || randp == 531) {
            hints = "ㅎㄴㅅ♡ㅂㅅㄷㅇㅋㄷ";
            answer[0] = "하늘색♡ Birthday Card";
            answer[1] = "하늘색 Birthday Card";
            answer[2] = "하늘색 birthday card";
            answer[3] = "하늘색 버스데이 카드";
            answer[4] = "하늘색버스데이카드";
            answer[5] = "하늘색 버스데이카드";
        }if (randp == 532 || randp == 533) {
            hints = "ㅇㅊㅁ";
            answer[0] = "it's me";
            answer[1] = "its me";
            answer[2] = "It's me";
            answer[3] = "잇츠 미";
            answer[4] = "이츠 미";
            answer[5] = "잇츠미";
            answer[6] = "이츠미";
        }if (randp == 534 || randp == 535) {
            hints = "ㅍㄹㅇㄱ!ㄹㅇㄷ";
            answer[0] = "Play GO! Round";
            answer[1] = "play go! round";
            answer[2] = "play go round";
            answer[3] = "Play Go Round";
            answer[4] = "플레이 고! 라운드";
            answer[5] = "플레이 고 라운드";
            answer[6] = "플레이고 라운드";
            answer[7] = "플레이고라운드";
        }if (randp == 536 || randp == 537) {
            hints = "ㅅㅍㅍㅋㅍㅅ!!";
            answer[0] = "Super Funky Piece!!";
            answer[1] = "super funky piece";
            answer[2] = "Super Funky Piece";
            answer[3] = "수퍼 펀키 피스";
            answer[4] = "슈퍼 펀키 피스";
            answer[5] = "수퍼펀키피스";
            answer[6] = "슈퍼펀키피스";
            answer[7] = "수퍼 펀키 피스!!";
        }if (randp == 538 || randp == 539) {
            hints = "ㅍㅍㅌㄱㅇ";
            answer[0] = "퍼펙트 게임";
            answer[1] = "퍼팩트 게임";
            answer[2] = "퍼펙트게임";
            answer[3] = "퍼팩트게임";
            answer[4] = "퍼펙 겜";
            answer[5] = "perfect game";
        }if (randp == 540 || randp == 541) {
            hints = "ㅎㅂㅇㄷㄹ";
            answer[0] = "행복 엔드 롤";
            answer[1] = "행복 엔드롤";
            answer[2] = "행복엔드롤";
            answer[3] = "행복 앤드 롤";
            answer[4] = "행복 앤드롤";
            answer[5] = "행복앤드롤";
        }if (randp == 542 || randp == 543) {
            hints = "ㄲㅇㄱㄴㄹㅇㅂㅇ";
            answer[0] = "꿈에 거는 Rainbow";
            answer[1] = "꿈을 향해 달리는 Rainbow";
            answer[2] = "꿈에 그리는 Rainbow";
            answer[3] = "꿈에 거는 rainbow";
            answer[4] = "꿈에 거는 레인보우";
            answer[5] = "꿈에 그리는 레인보우";
            answer[6] = "꿈에거는 레인보우"
        }if (randp == 544 || randp == 545) {
            hints = "ㅁ!ㅁ!ㅁ! ㅂㄷㅇ!!";
            answer[0] = "미!미!미! 빌드UP!!";
            answer[1] = "미!미!미! 빌드업!!";
            answer[2] = "미 미 미 빌드업";
            answer[3] = "미!미!미!빌드업!!";
            answer[4] = "미미미빌드업";
            answer[5] = "미미미 빌드업";
        }if (randp == 546 || randp == 547) {
            hints = "ㅋㅌㄹㅅㅌㅌ";
            answer[0] = "Contrastet";
            answer[1] = "contrastet";
            answer[2] = "Contrastet";
            answer[3] = "Contrastet";
            answer[4] = "Contrastet";
            answer[5] = "Contrastet";
        }if (randp == 548 || randp == 549) {
            hints = "ㅇㅅㅌㅇㅈㅍㄹㅇㅇ!";
            answer[0] = "온 스테이지 플레이어!";
            answer[1] = "온 스테이지 플레이어";
            answer[2] = "온스테이지 플레이어!";
            answer[3] = "온스테이지 플레이어";
            answer[4] = "온스테이지플레이어";
            answer[5] = "온스테이지플레이어!";
        }if (randp == 550 || randp == 551) {
            hints = "ㅅㄹㅇㅁㅈ!ㅇㅅㅇㄱㅇ!";
            answer[0] = "사랑의 Magic! Once Again!";
            answer[1] = "사랑의 magic! once again!";
            answer[2] = "사랑의 매직! 원스 어게인!";
            answer[3] = "사랑의 매직 원스 어게인";
            answer[4] = "사랑의 magic one again";
            answer[5] = "사랑의 매직! once again!";
        }if (randp == 552 || randp == 553) {
            hints = "ㅍㅋㄹㅈㅇㅍㄹㅈ";
            answer[0] = "핑크 로즈 어플로즈";
            answer[1] = "핑크 로즈어플로즈";
            answer[2] = "핑크로즈 어플로즈";
            answer[3] = "핑크로즈어플로즈";
            answer[4] = "핑크로즈 어 플로즈";
            answer[5] = "핑크 로즈 어 플로즈";
        }if (randp == 554 || randp == 555) {
            hints = "ㅂㄱㅅㅍㄹ";
            answer[0] = "번개 스피릿";
            answer[1] = "번개스피릿";
            answer[2] = "번게 스피릿";
            answer[3] = "번게스피릿";
            answer[4] = "천둥 스피릿";
            answer[5] = "벼락 스피릿";
        }if (randp == 556 || randp == 557) {
            hints = "ㅇㅋㅇㄷㅅㅋㅇ";
            answer[0] = "Walking on the Square";
            answer[1] = "walking on the square";
            answer[2] = "워킹 온 더 스퀘어";
            answer[3] = "워킹온더스퀘어";
            answer[4] = "워킹 온 더스퀘어";
            answer[5] = "워킹 온더 스퀘어";
        }if (randp == 558 || randp == 559) {
            hints = "ㅂㄷㅅㄹㅇㅇㅁㄹㅅㅋ";
            answer[0] = "변덕스러운 유머레스크";
            answer[1] = "변덕스러운유머레스크";
            answer[2] = "변덕스러운 유머러스크";
            answer[3] = "변덕적인 유머레스크";
            answer[4] = "변덕스러운 유머레스크크";
            answer[5] = "변덕스러운 유머렛크";
        }if (randp == 560 || randp == 561) {
            hints = "ㅇㅇㄷ";
            answer[0] = "I Do";
            answer[1] = "I do";
            answer[2] = "Ido";
            answer[3] = "i do";
            answer[4] = "아이 두";
            answer[5] = "아이두";
        }if (randp == 562 || randp == 563) {
            hints = "ㄷㅇㅅㅇㄴㅂㅈㄹ";
            answer[0] = "둘이서 잇는 별자리";
            answer[1] = "둘이서 잇는별자리";
            answer[2] = "둘이서잇는 별자리";
            answer[3] = "둘이서잇는별자리";
            answer[4] = "둘이서 있는 별자리";
            answer[5] = "둘이 잇는 별자리";
        }if (randp == 564 || randp == 565) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 566 || randp == 567) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 568 || randp == 569) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 570 || randp == 571) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }
    }
    if (true) { //데레 셀렉터
        if (randp == 1501 || randp == 1502) {
            hints = "#ㅎㄷㅅ";
            answer[0] = "#HE4DSHOT";
            answer[1] = "헤드샷";
            answer[2] = "#헤드샷";
            answer[3] = "#해드샷";
            answer[4] = "해드샷";
            answer[5] = "헤4드샷";
            answer[6] = "#he4dshot";
        }
        if (randp == 1503 || randp == 1504) {
            hints = "ㅇㅅ";
            answer[0] = "∀NSWER";
            answer[1] = "ANSWER";
            answer[2] = "엔서";
            answer[3] = "앤서";
            answer[4] = "엔설";
            answer[5] = "앤설";
            answer[6] = "answer";
        }
        if (randp == 1505 || randp == 1506) {
            hints = "ㅅㅋㄷㅅㅇㄷ";
            answer[0] = "2nd SIDE";
            answer[1] = "세컨드 사이드";
            answer[2] = "세컨드사이드";
            answer[3] = "2nd side";
            answer[4] = "2ndside";
            answer[5] = "두번째 사이드";
            answer[6] = "second side";
        }
        if (randp == 1507 || randp == 1508) {
            hints = "14ㅍㅂㅇㅅㅂㄴㅇ";
            answer[0] = "14평방에 수버니어";
            answer[1] = "14평방에 수버니아";
            answer[2] = "14평방에수버니어";
            answer[3] = "14평방에수버니아";
            answer[4] = "14평방의 수버니어";
            answer[5] = "14평방의수버니어";
        }
        if (randp == 1509 || randp == 1510) {
            hints = "ㅇㅌㄴㅅㅇ";
            answer[0] = "Athanasia";
            answer[1] = "athanasia";
            answer[2] = "아타나시아";
            answer[3] = "앗타나시아";
            answer[4] = "아싸나시아";
            answer[5] = "아타나씨아";
        }
        if (randp == 1511 || randp == 1512) {
            hints = "ㅂㅇㄷㄷㅅㅌㄹㅇㅌ";
            answer[0] = "BEYOND THE STARLIGHT";
            answer[1] = "beyond the starlight";
            answer[2] = "beyondthestarlight";
            answer[3] = "비욘드 더 스타라이트";
            answer[4] = "비욘드더스타라이트";
            answer[5] = "비욘드 더 스탈라이트";
            answer[6] = "스타라이트";
        }
        if (randp == 1513 || randp == 1514) {
            hints = "ㅂㄹㅅ";
            answer[0] = "Blessing";
            answer[1] = "blessing";
            answer[2] = "블레싱";
            answer[3] = "블래싱";
            answer[4] = "블레씽";
            answer[5] = "블래씽";
        }
        if (randp == 1515 || randp == 1516) {
            hints = "ㅂㄹㅁㄷㅇㅈ";
            answer[0] = "Blooming Days";
            answer[1] = "blooming days";
            answer[2] = "블루밍 데이즈";
            answer[3] = "블루밍데이즈";
            answer[4] = "블루밍데이스";
            answer[5] = "블루밍 데이스";
        }
        if (randp == 1517 || randp == 1518) {
            hints = "ㅂㄹㄷㄴ!";
            answer[0] = "Brand new!";
            answer[1] = "brand new";
            answer[2] = "브랜뉴";
            answer[3] = "브랜드뉴!";
            answer[4] = "브랜드 뉴";
            answer[5] = "브랜드뉴";
            answer[6] = "브랜뉴!";
        }
        if (randp == 1519 || randp == 1520) {
            hints = "ㅊㄹ*ㅁㄹ*ㅊㄹ";
            answer[0] = "cherry＊merry＊cherry";
            answer[1] = "체리*메리*체리";
            answer[2] = "체리 메리 체리";
            answer[3] = "체리메리체리";
            answer[4] = "체리 메리체리";
            answer[5] = "체리메리 체리";
            answer[6] = "cherry merry cherry";
        }
        if (randp == 1521 || randp == 1522) {
            hints = "ㅋㄹㅇㅁㅇㅎㅌ";
            answer[0] = "Claw My Heart";
            answer[1] = "claw my heart";
            answer[2] = "클로우 마이 하트";
            answer[3] = "클로우마이하트";
            answer[4] = "클로우 마이 헐트";
            answer[5] = "클로우마이헐트";
            answer[6] = "크로우 마이 하트";
        }
        if (randp == 1523 || randp == 1524) {
            hints = "ㅋㅁㅋㅅㅁ";
            answer[0] = "Comic Cosmic";
            answer[1] = "comic cosmic";
            answer[2] = "comiccosmic";
            answer[3] = "코믹 코스믹";
            answer[4] = "코믹코스믹";
            answer[5] = "ComicCosmic";
        }
        if (randp == 1525 || randp == 1526) {
            hints = "ㅇㅂㅁㅇ";
            answer[0] = "EVERMORE";
            answer[1] = "evermore";
            answer[2] = "에버모어";
            answer[3] = "애버모어";
            answer[4] = "에버 모어";
            answer[5] = "애버 모어";
            answer[6] = "에버 모아";
        }
        if (randp == 1527 || randp == 1528) {
            hints = "ㅍㄹㅍㄹ";
            answer[0] = "Flip Flop";
            answer[1] = "flip flop";
            answer[2] = "flipflop";
            answer[3] = "플립 플롭";
            answer[4] = "플립플롭";
            answer[5] = "FlipFlop";
        }
        if (randp == 1529 || randp == 1530) {
            hints = "ㅍㄹㅅㅌ";
            answer[0] = "Frost";
            answer[1] = "frost";
            answer[2] = "프로스트";
            answer[3] = "프로스트 ";
            answer[4] = " 프로스트";
            answer[5] = " 프로스트 ";
        }
        if (randp == 1531 || randp == 1532) {
            hints = "ㄱㅈㅅㅌㄱ!";
            answer[0] = "Go Just Go!";
            answer[1] = "고 저스트 고";
            answer[2] = "gojustgo";
            answer[3] = "고 저스트 고!";
            answer[4] = "고저스트고";
            answer[5] = "고저스트고!";
            answer[6] = "go just go";
            answer[7] = "go just go!";
            answer[6] = "고저고";
        }
        if (randp == 1533 || randp == 1534) {
            hints = "ㄱㅅㅋㄹ";
            answer[0] = "Gossip Club";
            answer[1] = "gossip club";
            answer[2] = "가십 클럽";
            answer[3] = "가십클럽";
            answer[4] = "gossipclub";
            answer[5] = "고십클럽";
        }
        if (randp == 1535 || randp == 1536) {
            hints = "ㅎㅌㅁㅅㅇㄷ";
            answer[0] = "Hotel Moonside";
            answer[1] = "hotel moonside";
            answer[2] = "hotelmoonside";
            answer[3] = "호텔 문사이드";
            answer[4] = "호텔문사이드";
            answer[5] = "HotelMoonside";
            answer[6] = "호텔문 사이드";
        }
        if (randp == 1537 || randp == 1538) {
            hints = "ㅈㅋ";
            answer[0] = "Joker";
            answer[1] = "joker";
            answer[2] = "조커";
            answer[3] = "조커 ";
            answer[4] = " 조커";
            answer[5] = " 조커 ";
        }
        if (randp == 1539 || randp == 1540) {
            hints = "ㅋㅇㅇㅁㅇㅋㅁㅇㄷㅇ!";
            answer[0] = "Kawaii make MY day!";
            answer[1] = "kawaii make my day!";
            answer[2] = "카와이 메이크 마이 데이!";
            answer[3] = "카와이 메이크 마이 데이";
            answer[4] = "카와이메이크마이데이!";
            answer[5] = "카와이메이크마이데이";
        }
        if (randp == 1541 || randp == 1542) {
            hints = "ㄹㅇㅍㅇㅈㅎㅁㄴ";
            answer[0] = "Life is HaRMONY";
            answer[1] = "life is harmony";
            answer[2] = "lifeisharmony";
            answer[3] = "라이프 이즈 하모니";
            answer[4] = "라이프이즈하모니";
            answer[5] = "라이프이즈 하모니";
        }
        if (randp == 1543 || randp == 1544) {
            hints = "ㄹㅂ∞ㄷㅅㅌㄴ";
            answer[0] = "Love∞Destiny";
            answer[1] = "Love Destiny";
            answer[2] = "love destiny";
            answer[3] = "러브 데스티니";
            answer[4] = "러브데스티니";
            answer[5] = "러브대스티니";
        }
        if (randp == 1545 || randp == 1546) {
            hints = "ㅁㅅㅂㅌ";
            answer[0] = "Max Beat";
            answer[1] = "max beat";
            answer[2] = "맥스 비트";
            answer[3] = "맥스비트";
            answer[4] = "멕스비트";
            answer[5] = "멕스 비트";
        }
        if (randp == 1547 || randp == 1548) {
            hints = "ㄴㅇㅂㅌㅍㅍㅇ";
            answer[0] = "Neo Beautiful Pain";
            answer[1] = "neo beautiful pain";
            answer[2] = "네오 뷰티풀 페인";
            answer[3] = "네오뷰티풀페인";
            answer[4] = "네오 뷰티플 페인";
            answer[5] = "네오뷰티플페인";
        }
        if (randp == 1549 || randp == 1550) {
            hints = "ㄴㅂㅇㅈ";
            answer[0] = "Never ends";
            answer[1] = "never ends";
            answer[2] = "네버 엔즈";
            answer[3] = "네버엔즈";
            answer[4] = "네버앤즈";
            answer[5] = "네버 앤즈";
        }
        if (randp == 1551 || randp == 1552) {
            hints = "ㄴㅆㅂㅇ";
            answer[0] = "Nothing but You";
            answer[1] = "nothing but you";
            answer[2] = "낫씽 벗 유";
            answer[3] = "낫씽벗유";
            answer[4] = "나씽 벗 유";
            answer[5] = "나씽벗유";
        }
        if (randp == 1553 || randp == 1554) {
            hints = "ㄴㄷ★";
            answer[0] = "NUDIE★";
            answer[1] = "NUDIE";
            answer[2] = "nudie";
            answer[3] = "누디";
            answer[4] = "누디★";
            answer[5] = "nudie★";
        }
        if (randp == 1555 || randp == 1556) {
            hints = "ㅇ-ㅋ-ㄹ-ㅁ-ㄴㅅㄷㅇ!";
            answer[0] = "O-Ku-Ri-Mo-No Sunday!";
            answer[1] = "오쿠리모노 선데이!";
            answer[2] = "오쿠리모노선데이!";
            answer[3] = "오쿠리모노 선데이";
            answer[4] = "오쿠리모노선데이";
            answer[5] = "okurimonosunday";
        }
        if (randp == 1557 || randp == 1558) {
            hints = "ㅇㄹㅈㅅㅍㅇㅇ";
            answer[0] = "Orange Sapphire";
            answer[1] = "orange sapphire";
            answer[2] = "오렌지 사파이어";
            answer[3] = "오렌지사파이어";
            answer[4] = "오랜지 사파이어";
            answer[5] = "오랜지사파이어";
        }
        if (randp == 1559 || randp == 1560) {
            hints = "ㅇㅌㅎㅇㅅ";
            answer[0] = "OTAHEN 앤섬";
            answer[1] = "OTAHEN앤섬";
            answer[2] = "오타헨 앤섬";
            answer[3] = "오타헨앤섬";
            answer[4] = "오타핸 앤섬";
            answer[5] = "오타핸앤섬";
        }
        if (randp == 1561 || randp == 1562) {
            hints = "ㅍㄹㅌ";
            answer[0] = "Palette";
            answer[1] = "palette";
            answer[2] = "팔레트";
            answer[3] = "팔레뜨";
            answer[4] = "파레트";
            answer[5] = "파레뜨";
        }
        if (randp == 1563 || randp == 1564) {
            hints = "ㅍㄹㅌㄹㅇㅇ";
            answer[0] = "Pretty Liar";
            answer[1] = "pretty liar";
            answer[2] = "프리티 라이어";
            answer[3] = "프리티라이어";
            answer[4] = "프레티 라이어";
            answer[5] = "프레티라이어";
        }
        if (randp == 1565 || randp == 1566) {
            hints = "ㅍㄹㅇㅂㅇㅌㅅㅇ";
            answer[0] = "Private Sign";
            answer[1] = "private sign";
            answer[2] = "프라이베이트 사인";
            answer[3] = "프라이베이트사인";
            answer[4] = "프라이빗 사인";
            answer[5] = "프라이빗사인";
        }
        if (randp == 1567 || randp == 1568) {
            hints = "ㅍㄹㅅㅌㅇㅍㅌ";
            answer[0] = "PROUST EFFECT";
            answer[1] = "proust effect";
            answer[2] = "프루스트 이펙트";
            answer[3] = "프루스트이펙트";
            answer[4] = "프루스트 현상";
            answer[5] = "프루스트현상";
        }
        if (randp == 1569 || randp == 1570) {
            hints = "ㄹㄷㅇㅎㅍ";
            answer[0] = "Radio Happy";
            answer[1] = "radio happy";
            answer[2] = "라디오 해피";
            answer[3] = "라디오해피";
            answer[4] = "라디오 헤피";
            answer[5] = "라디오헤피";
        }
        if (randp == 1571 || randp == 1572) {
            hints = "ㄹㅇㅈㅇㅂㄷㅅㅌ";
            answer[0] = "Rage of Dust";
            answer[1] = "rage of dust";
            answer[2] = "레이지 오브 더스트";
            answer[3] = "레이지오브더스트";
            answer[4] = "래이지 오브 더스트";
            answer[5] = "래이지오브더스트";
        }
        if (randp == 1573 || randp == 1574) {
            hints = "ㄹㅁㅌㄴㅇ";
            answer[0] = "Romantic Now";
            answer[1] = "romantic now";
            answer[2] = "로맨틱 나우";
            answer[3] = "로맨틱나우";
            answer[4] = "로멘틱 나우";
            answer[5] = "로멘틱나우";
        }
        if (randp == 1575 || randp == 1576) {
            hints = "ㅅㅁㅇㄹ!";
            answer[0] = "S(mile)ING!";
            answer[1] = "smileing";
            answer[2] = "스마일링!";
            answer[3] = "스마일링";
            answer[4] = "스마일잉";
            answer[5] = "s(mile)ing!";
        }
        if (randp == 1577 || randp == 1578) {
            hints = "ㅅㄷㅍㄹㄹㄱ♪";
            answer[0] = "Sing the Prologue♪";
            answer[1] = "sing the prologue";
            answer[2] = "싱 더 프롤로그";
            answer[3] = "싱더프롤로그";
            answer[4] = "싱 더 프로로그";
            answer[5] = "싱더프로로그";
        }
        if (randp == 1579 || randp == 1580) {
            hints = "ㅅㄴㅇㅇㅅ";
            answer[0] = "Snow Wings";
            answer[1] = "snow wings";
            answer[2] = "스노우 윙스";
            answer[3] = "스노우윙스";
            answer[4] = "스노우 윙즈";
            answer[5] = "스노우윙즈";
        }
        if (randp == 1581 || randp == 1582) {
            hints = "ㅅㄴㅇㄹㅂ";
            answer[0] = "Snow＊Love";
            answer[1] = "Snow Love";
            answer[2] = "snow love";
            answer[3] = "스노우 러브";
            answer[4] = "스노우러브";
            answer[5] = "snowlove";
        }
        if (randp == 1583 || randp == 1584) {
            hints = "ㅅㅍㄹㅅㅋㄹㅁ";
            answer[0] = "Spring Screaming";
            answer[1] = "spring screaming";
            answer[2] = "스프링 스크리밍";
            answer[3] = "스프링스크리밍";
            answer[4] = "봄 외침";
            answer[5] = "봄외침";
        }
        if (randp == 1585 || randp == 1586) {
            hints = "ㅅㅌㅇㅈㅂㅇㅅㅌㅇㅈ";
            answer[0] = "Stage Bye Stage";
            answer[1] = "stage bye stage";
            answer[2] = "스테이지 바이 스테이지";
            answer[3] = "스테이지바이스테이지";
            answer[4] = "stagebyestage";
            answer[5] = "Stage bye Stage";
        }
        if (randp == 1587 || randp == 1588) {
            hints = "ㅅ♡ㅍㄹㅇ";
            answer[0] = "SUN♡FLOWER";
            answer[1] = "SUN FLOWER";
            answer[2] = "sun flower";
            answer[3] = "선 플라워";
            answer[4] = "선플라워";
            answer[5] = "썬플라워";
        }
        if (randp == 1589 || randp == 1590) {
            hints = "ㅅㅅㅇㅅㅁㅇ";
            answer[0] = "Sunshine See May";
            answer[1] = "sunshine see may";
            answer[2] = "선샤인 시 메이";
            answer[3] = "선샤인시메이";
            answer[4] = "썬샤인시메이";
            answer[5] = "썬샤인 시 메이";
        }
        if (randp == 1591 || randp == 1592) {
            hints = "ㅌㅋㅁㄹ☆ㅋㄹㅇㅁㅅ!!!!!";
            answer[0] = "TAKAMARI☆CLIMAXXX!!!!!";
            answer[1] = "TAKAMARI CLIMAXXX";
            answer[2] = "takamari climaxxx";
            answer[3] = "타카마리 클라이막스";
            answer[4] = "타카마리 클라이맥스";
            answer[5] = "타카마리클라이맥스";
        }
        if (randp == 1593 || randp == 1594) {
            hints = "ㅌㄹㄴㅌㅍㄷ";
            answer[0] = "Trinity Field";
            answer[1] = "trinity field";
            answer[2] = "trinityfield";
            answer[3] = "트리니티 필드";
            answer[4] = "트리니티필드";
            answer[5] = "TrinityField";
        }
        if (randp == 1595 || randp == 1596) {
            hints = "ㅌㄹㅋㄹㅅ";
            answer[0] = "TRUE COLORS";
            answer[1] = "true colors";
            answer[2] = "트루 컬러스";
            answer[3] = "트루컬러스";
            answer[4] = "트루칼라스";
            answer[5] = "트루 칼라스";
        }
        if (randp == 1597 || randp == 1598) {
            hints = "ㅌㄹㅅㅌㅁ";
            answer[0] = "Trust me";
            answer[1] = "trust me";
            answer[2] = "트러스트 미";
            answer[3] = "트러스트미";
            answer[4] = "trustme";
            answer[5] = "Trust Me";
        }
        if (randp == 1599 || randp == 1600) {
            hints = "ㅌㄹ";
            answer[0] = "Tulip";
            answer[1] = "tulip";
            answer[2] = "튤립";
            answer[3] = "츌립";
            answer[4] = "튤맆";
            answer[5] = "툴립";
        }
        if (randp == 1601 || randp == 1602) {
            hints = "ㅌㅇ☆ㅋ★ㅌㅇ";
            answer[0] = "Twin☆클★테일";
            answer[1] = "트윈클테일";
            answer[2] = "트윈 클 테일";
            answer[3] = "트윈클 테일";
            answer[4] = "트윙클 테일";
            answer[5] = "트윙클테일";
        }
        if (randp == 1603 || randp == 1604) {
            hints = "ㅂㅇㅈ";
            answer[0] = "Voyage";
            answer[1] = "voyage";
            answer[2] = "보야지";
            answer[3] = "보야쥐";
            answer[4] = "보여지";
            answer[5] = "항해";
        }
        if (randp == 1605 || randp == 1606) {
            hints = "ㅎㅇㅌㅇㄱㅇ";
            answer[0] = "White again";
            answer[1] = "white again";
            answer[2] = "화이트 어게인";
            answer[3] = "화이트어게인";
            answer[4] = "화이트어개인";
            answer[5] = "화이트 어개인";
        }
        if (randp == 1607 || randp == 1608) {
            hints = "ㅇㅅㅇㅎㅍㄴㅅ!!";
            answer[0] = "Wish you Happiness!!";
            answer[1] = "wish you happiness";
            answer[2] = "위시 유 해피니스!!";
            answer[3] = "위시 유 해피니스";
            answer[4] = "위시유해피니스!!";
            answer[5] = "위시유해피니스";
            answer[6] = "wishyouhappiness";
        }
        if (randp == 1609 || randp == 1610) {
            hints = "ㅇㅅ!ㅍㅌㅌㅇ!!";
            answer[0] = "Yes! Party Time!!";
            answer[1] = "yes! party time!!";
            answer[2] = "yes party time";
            answer[3] = "예스! 파티 타임!!";
            answer[4] = "예스! 파티 타임";
            answer[5] = "예스파티타임";
            answer[6] = "예스 파티 타임";
        }
        if (randp == 1611 || randp == 1612) {
            hints = "ㅇㅇㅅㅌㅅㅅㅇㅇㅁ";
            answer[0] = "You're stars shine on me";
            answer[1] = "you're stars shine on me";
            answer[2] = "유얼 스타스 샤인 온 미";
            answer[3] = "유얼스타스샤인온미";
            answer[4] = "유얼 스타 샤인 온 미";
            answer[5] = "유얼스타샤인온미";
        }
        if (randp == 1613 || randp == 1614) {
            hints = "ㄱㅇㄷㅇㅈㄷㄷㄷ!";
            answer[0] = "가을다워져 Ding Dong Dang!";
            answer[1] = "가을다워져 딩 동 뎅!";
            answer[2] = "가을다워져 딩 동 댕!";
            answer[3] = "가을다워져 딩 동 뎅";
            answer[4] = "가을다워져딩동뎅";
            answer[5] = "가을다워져딩동댕";
            answer[6] = "가을다워져 ding dong dang";
        }
        if (randp == 1615 || randp == 1616) {
            hints = "ㄱㅅㅇㄴㄱㅇㅎㄷ";
            answer[0] = "갈 수 없는 GO AHEAD";
            answer[1] = "갈수없는goahead";
            answer[2] = "갈 수 없는 고 어헤드";
            answer[3] = "갈수없는고어헤드";
            answer[4] = "갈수없는 go ahead";
            answer[5] = "갈수없는 고 어헤드";
        }
        if (randp == 1617 || randp == 1618) {
            hints = "ㄱㅈㅇㄷㅍㄹㅌㅇ";
            answer[0] = "걸즈 인 더 프론티어";
            answer[1] = "걸즈인더프론티어";
            answer[2] = "걸즈 인더 프론티어";
            answer[3] = "걸즈 인더트론티어";
            answer[4] = "걸즈인 더 프론티어";
            answer[5] = "걸즈인더 프톤디어";
        }
        if (randp == 1619 || randp == 1620) {
            hints = "ㄱㅇㅎㄴㅍㄹㅅㅅ";
            answer[0] = "겨울 하늘 프레셔스";
            answer[1] = "겨울하늘프레셔스";
            answer[2] = "겨울하늘 프레셔스";
            answer[3] = "겨울 하늘프레셔스";
            answer[4] = "겨울하늘프래셔스";
            answer[5] = "겨울 하늘 프래셔스";
        }
        if (randp == 1621 || randp == 1622) {
            hints = "ㄱㅉㄱㅁㅇㅅㅍㄴㄲㅇ";
            answer[0] = "골짜기 밑에서 피는 꽃은";
            answer[1] = "골짜기 밑에서 피는꽃은";
            answer[2] = "골짜기밑에서 피는 꽃은";
            answer[3] = "골짜기밑에서 피는꽃은";
            answer[4] = "골짜기밑에서피는 꽃은";
            answer[5] = "골짜기밑에서피는꽃은";
        }
        if (randp == 1623 || randp == 1624) {
            hints = "ㄱㅅㅌㅅㄱㅎ";
            answer[0] = "공상 탐사 계획";
            answer[1] = "공상탐사 계획";
            answer[2] = "공상 탐사계획";
            answer[3] = "공상탐사계획";
            answer[4] = " 공상탐사계획";
            answer[5] = "공상탐사계획 ";
        }
        if (randp == 1625 || randp == 1626) {
            hints = "ㅈㄱㅇㅍㅌㄴㅇㅌ";
            answer[0] = "즐거운 party night";
            answer[1] = "즐거운 파티 나이트";
            answer[2] = "즐거운파티 나이트";
            answer[3] = "즐거운 파티나이트";
            answer[4] = "즐거운파티나이트";
            answer[5] = "즐거운 partynight";
        }
        if (randp == 1627 || randp == 1628) {
            hints = "ㄲㅂㅇㄹ";
            answer[0] = "꽃봉오리";
            answer[1] = "꽃봉오리";
            answer[2] = "꽃봉오리";
            answer[3] = "꽃봉오리";
            answer[4] = "꽃봉오리";
            answer[5] = "꽃봉우리";
        }
        if (randp == 1629 || randp == 1630) {
            hints = "ㄲㅂㄴㅎㄴㅋㅈㅅ";
            answer[0] = "꽃비녀 HANAKANZASHI";
            answer[1] = "꽃비녀 하나칸자시";
            answer[2] = "꽃비녀HANAKANZASHI";
            answer[3] = "꽃비녀하나칸자시";
            answer[4] = "꽃비녀";
            answer[5] = "하나칸자시";
        }
        if (randp == 1631 || randp == 1632) {
            hints = "ㄲㅇㅁ";
            answer[0] = "꽃의 말";
            answer[1] = "꽃의말";
            answer[2] = "꼬츼말";
            answer[3] = "꽃의 말 ";
            answer[4] = " 꽃의 말";
            answer[5] = "꽃의 말";
        }
        if (randp == 1633 || randp == 1634) {
            hints = "ㄲㅇㄷㅇㄷㅂㄴ";
            answer[0] = "꿈을 들여다보니";
            answer[1] = "꿈을들여다보니";
            answer[2] = "꿈을 들여다보니 ";
            answer[3] = " 꿈을 들여다보니";
            answer[4] = " 꿈을들여다보니";
            answer[5] = "꿈을  들여다보니";
        }
        if (randp == 1635 || randp == 1636) {
            hints = "ㄴㄴㅇㄱㅊㅇㄷㄹㅇㄷ";
            answer[0] = "나는야 고철 안드로이드";
            answer[1] = "나는야고철안드로이드";
            answer[2] = "나는야 고철안드로이드";
            answer[3] = "나는야고철 안드로이드";
            answer[4] = "나는 고철 안드로이드";
            answer[5] = "나는고철안드로이드";
        }
        if (randp == 1637 || randp == 1638) {
            hints = "ㄴㅅㄲㅇㅍㄹㄹㄷ";
            answer[0] = "내 색깔의 프렐류드";
            answer[1] = "내색깔의프렐류드";
            answer[2] = "내색깔의 프렐류드";
            answer[3] = "내색의 프렐류드";
            answer[4] = "내색의 프렐류드";
            answer[5] = "내 색의 프렐류드";
        }
        if (randp == 1639 || randp == 1640) {
            hints = "ㄴㅎㄱ☆ㅅㅍㅌㅋ";
            answer[0] = "냥하고☆스펙타클";
            answer[1] = "냥☆스펙타클";
            answer[2] = "냥하고 스펙타클";
            answer[3] = "냥하고스펙타클";
            answer[4] = "냥 스펙타클";
            answer[5] = "냥스펙타클";
        }
        if (randp == 1641 || randp == 1642) {
            hints = "ㄴㅇㅅㅌㅇㅈㅇㅅ,ㅅㅅㅇ...";
            answer[0] = "너의 스테이지 의상, 사실은…";
            answer[1] = "너의 스테이지 의상, 사실은...";
            answer[2] = "너의스테이지의상,사실은";
            answer[3] = "너의 스테이지의상, 사실은";
            answer[4] = "너의스테이지의상, 사실은";
            answer[5] = "너의 스테이지 의상, 사실은";
            answer[6] = "너의 스테이지 의상 사실은...";
            answer[7] = "너의 스테이지 의상 사실은";
        }
        if (randp == 1643 || randp == 1644) {
            hints = "ㄷㄱㄷㄱㅇㅅㅋㄹㅇㅌ";
            answer[0] = "두근두근 에스컬레이트";
            answer[1] = "두근두근에스컬레이트";
            answer[2] = "도키도키 에스컬레이트";
            answer[3] = "도키도키에스컬레이트";
            answer[4] = "두근두근애스컬래이트";
            answer[5] = "두근두근 애스컬래이트";
        }
        if (randp == 1645 || randp == 1646) {
            hints = "ㄹㅂㄹㅌ";
            answer[0] = "러브레터";
            answer[1] = "러브래터";
            answer[2] = "러브레터";
            answer[3] = " 러브레터";
            answer[4] = "러브레터 ";
            answer[5] = " 러브레터 ";
        }
        if (randp == 1647 || randp == 1648) {
            hints = "ㄹㄷㅅ";
            answer[0] = "레드 솔";
            answer[1] = "레드솔";
            answer[2] = "래드 솔";
            answer[3] = "래드솔";
            answer[4] = " 레드 솔";
            answer[5] = "레드 솔 ";
        }
        if (randp == 1649 || randp == 1650) {
            hints = "ㄹㅌㄹㄷ";
            answer[0] = "리틀 리들";
            answer[1] = "리틀리들";
            answer[2] = " 리틀 리들";
            answer[3] = " 리틀리들";
            answer[4] = "리틀 리들 ";
            answer[5] = "리틀리들";
        }
        if (randp == 1651 || randp == 1652) {
            hints = "ㅁㅅㅈ";
            answer[0] = "메세지";
            answer[1] = "메새지";
            answer[2] = "매세지";
            answer[3] = "매새지";
            answer[4] = "메세지 ";
            answer[5] = " 메세지";
        }
        if (randp == 1653 || randp == 1654) {
            hints = "ㅁㄹㅂㄹㅂ";
            answer[0] = "미러볼 러브";
            answer[1] = "미러볼러브";
            answer[2] = " 미러볼러브";
            answer[3] = "미러볼러브 ";
            answer[4] = " 미러볼 러브";
            answer[5] = "미러볼 러브 ";
        }
        if (randp == 1655 || randp == 1656) {
            hints = "ㅂㄹㅅㅁㄹㄷ";
            answer[0] = "바람색 멜로디";
            answer[1] = "바람색멜로디";
            answer[2] = "바람색 맬로디";
            answer[3] = "바람색맬로디";
            answer[4] = "바람색멜로디 ";
            answer[5] = " 바람색멜로디";
        }
        if (randp == 1657 || randp == 1658) {
            hints = "ㅂㅂ";
            answer[0] = "바벨";
            answer[1] = "바밸";
            answer[2] = " 바벨";
            answer[3] = "바벨 ";
            answer[4] = " 바밸";
            answer[5] = "바밸 ";
        }
        if (randp == 1659 || randp == 1660) {
            hints = "ㅂㅎ";
            answer[0] = "박하";
            answer[1] = " 박하";
            answer[2] = "박하 ";
            answer[3] = "박 하";
            answer[4] = " 박하 ";
            answer[5] = "박하  ";
        }
        if (randp == 1661 || randp == 1662) {
            hints = "ㅂㅉ!ㅁㄱㅅㅁㅇ";
            answer[0] = "반짝! 만개 스마일";
            answer[1] = "반짝 만개 스마일";
            answer[2] = "반짝만개스마일";
            answer[3] = "반짝!만개스마일";
            answer[4] = "반짝! 만개스마일";
            answer[5] = "반짝!만개 스마일";
        }
        if (randp == 1663 || randp == 1664) {
            hints = "ㅂㅊㅎㅋㅂㅅ";
            answer[0] = "발칙한 CANVAS";
            answer[1] = "발칙한CANVAS";
            answer[2] = "발칙한 캔버스";
            answer[3] = "발칙한캔버스";
            answer[4] = "발칙한 canvas";
            answer[5] = "발칙한canvas";
        }
        if (randp == 1665 || randp == 1666) {
            hints = "ㅂㅅㄹㅍㄹㅇ";
            answer[0] = "봄사랑 프레임";
            answer[1] = "봄사랑프레임";
            answer[2] = "봄사랑 프래임";
            answer[3] = "봄사랑프래임";
            answer[4] = " 봄사랑프레임";
            answer[5] = "봄사랑프레임 ";
        }
        if (randp == 1667 || randp == 1668) {
            hints = "ㅂㅌㅎㄱ!ㅅㄷㄹㄹ";
            answer[0] = "부탁할게! 신데렐라";
            answer[1] = "부탁할게신데렐라";
            answer[2] = "오네가이! 신데렐라";
            answer[3] = "오네가이신데렐라";
            answer[4] = "오네신";
            answer[5] = "부탁할게 신데렐라";
        }
        if (randp == 1669 || randp == 1670) {
            hints = "ㅂㅁㅇㅌㅇㄹ";
            answer[0] = "비밀의 트왈렛";
            answer[1] = "비밀의트왈렛";
            answer[2] = "비밀의 트왈랫";
            answer[3] = "비밀의트왈랫";
            answer[4] = " 비밀의 트왈렛";
            answer[5] = "비밀의 트왈렛 ";
        }
        if (randp == 1671 || randp == 1672) {
            hints = "ㅂ→ㅅㅎㅎ→ㅁㄹ";
            answer[0] = "빛→심호흡→미래";
            answer[1] = "빛 심호흡 미래";
            answer[2] = "빛심호흡미래";
            answer[3] = "빛 심호흡미래";
            answer[4] = "빛->심호흡->미래";
            answer[5] = "빛심호흡 미래";
        }
        if (randp == 1673 || randp == 1674) {
            hints = "ㅅㄹㅅㄹㅈㄴ♥";
            answer[0] = "사랑스럽잖니♥";
            answer[1] = "사랑스럽잖니";
            answer[2] = "사랑스럽잔니";
            answer[3] = "사랑스럽잖니";
            answer[4] = "사랑스럽잔ㅎ니";
            answer[5] = "사랑스럽잫니";
        }
        if (randp == 1675 || randp == 1676) {
            hints = "ㅅㅈㅂㄴㅂㅋㄹㅇ";
            answer[0] = "생존본능 발큐리아";
            answer[1] = "생존본능발큐리아";
            answer[2] = "생존본능 발쿠리아";
            answer[3] = "생존본능발쿠리아";
            answer[4] = "생존본능발큐리";
            answer[5] = "생존본능발큐랴";
        }
        if (randp == 1677 || randp == 1678) {
            hints = "ㅅㄴㄷㄹ";
            answer[0] = "서니 드롭";
            answer[1] = "서니드롭";
            answer[2] = "서니 드롭";
            answer[3] = "써니 드롭";
            answer[4] = "써니드롭";
            answer[5] = "선니드롭";
        }
        if (randp == 1679 || randp == 1680) {
            hints = "ㅅㅈㅇㄷㅇㅅ";
            answer[0] = "수줍은 days";
            answer[1] = "수줍은days";
            answer[2] = "수줍은 데이스";
            answer[3] = "수줍은데이스";
            answer[4] = "수줍은 날들";
            answer[5] = "수줍은날들";
        }
        if (randp == 1681 || randp == 1682) {
            hints = "ㅅㄱㅎㅌ☆ㄹㅂㄹㅅ";
            answer[0] = "슈가 하트☆레볼루션";
            answer[1] = "슈가 하트 레볼루션";
            answer[2] = "슈가하트 레볼루션";
            answer[3] = "슈가하트레볼루션";
            answer[4] = "슈가하트☆레볼루션";
            answer[5] = "슈가하트래볼루션";
        }
        if (randp == 1683 || randp == 1684) {
            hints = "ㅅㅌ&ㅅㅋ";
            answer[0] = "스텝&스킵";
            answer[1] = "스텝 스킵";
            answer[2] = "스텝스킵";
            answer[3] = "스텝앤스킵";
            answer[4] = "스텝 앤 스킵";
            answer[5] = "스탭스킵";
        }
        if (randp == 1685 || randp == 1686) {
            hints = "ㅅㄹㅇㄹㅇㅍㅍㅌㅈ";
            answer[0] = "슬로우 라이프 판타지";
            answer[1] = "슬로우라이프 판타지";
            answer[2] = "슬로우 라이프판타지";
            answer[3] = "슬로우라이프판타지";
            answer[4] = "슬로우 라이프 팬터지";
            answer[5] = "슬로우라이프팬터지";
        }
        if (randp == 1687 || randp == 1688) {
            hints = "ㅆㅇㅇㄷㅈㄱ";
            answer[0] = "쌍익의 독주가";
            answer[1] = "쌍익의독주가";
            answer[2] = "쌍익의 아리아";
            answer[3] = "쌍익의아리아";
            answer[4] = "쌍익의 독주가 ";
            answer[5] = " 쌍익의 독주가";
        }
        if (randp == 1689 || randp == 1690) {
            hints = "ㅇㄹㄷㅇㅂㄲㅇㅇㄱㅅ";
            answer[0] = "아름다운 빛깔을 입고서";
            answer[1] = "아름다운빛깔을 입고서";
            answer[2] = "아름다운빛깔을입고서";
            answer[3] = "미에 들어가 색채를 꿰뚫다";
            answer[4] = "미에들어가 색채를 꿰뚫다";
            answer[5] = "미에들어가색채를꿰뚫다";
        }
        if (randp == 1691 || randp == 1692) {
            hints = "ㅇㄴㅇㄷㄹㅁㄷ";
            answer[0] = "안녕 안드로메다";
            answer[1] = "안녕안드로메다";
            answer[2] = "안녕 안드로매다";
            answer[3] = "안녕안드로매다";
            answer[4] = "사요나라 안드로메다";
            answer[5] = "사요나라안드로메다";
        }
        if (randp == 1693 || randp == 1694) {
            hints = "ㅇㄷㄷㄷㅅㄹ";
            answer[0] = "언데드 댄스 록";
            answer[1] = "언데드댄스록";
            answer[2] = "언대드 댄스 록";
            answer[3] = "언대드댄스록";
            answer[4] = "언데드 댄스록";
            answer[5] = "언데드댄스락";
        }
        if (randp == 1695 || randp == 1696) {
            hints = "ㅇㄹㅅㄹ-ㄴㅊㅋㅇ-";
            answer[0] = "여름 사랑 -NATSU KOI-";
            answer[1] = "여름사랑";
            answer[2] = "여름 사랑";
            answer[3] = "나츠코이";
            answer[4] = "나츠 코이";
            answer[5] = "여름사랑나츠코이";
        }
        if (randp == 1697 || randp == 1698) {
            hints = "ㅇㅍ";
            answer[0] = "연풍";
            answer[1] = "사랑바람";
            answer[2] = "사랑 바람";
            answer[3] = "연 풍";
            answer[4] = " 연풍";
            answer[5] = "연풍 ";
        }
        if (randp == 1699 || randp == 1700) {
            hints = "ㅇㄹㅈㅌㅇ";
            answer[0] = "오렌지 타임";
            answer[1] = "오렌지타임";
            answer[2] = "오랜지 타임";
            answer[3] = "오랜지타임";
            answer[4] = "오렌지 타이무";
            answer[5] = "오렌지타이무";
        }
        if (randp == 1701 || randp == 1702) {
            hints = "ㅇㅎㄷㅅㄱ";
            answer[0] = "은하도서관";
            answer[1] = "은하 도서관";
            answer[2] = "깅가토쇼칸";
            answer[3] = "깅가 토쇼칸";
            answer[4] = "은하도서관 ";
            answer[5] = " 은하도서관";
        }
        if (randp == 1703 || randp == 1704) {
            hints = "ㅇㅇㅇㅎㅎㅊㅅ";
            answer[0] = "의용인협 화취설";
            answer[1] = "의용인협화취설";
            answer[2] = "의용인협 꽃보라";
            answer[3] = "의용인협꽃보라";
            answer[4] = "의용인협 하나후부키";
            answer[5] = "의용인협하나후부키";
        }
        if (randp == 1705 || randp == 1706) {
            hints = "ㅇㅎㄴㅇㄹ";
            answer[0] = "이 하늘 아래";
            answer[1] = "이 하늘아래";
            answer[2] = "이하늘 아래";
            answer[3] = "이하늘아래";
            answer[4] = "코노 소라노 시타";
            answer[5] = "코노소라노시타";
        }
        if (randp == 1707 || randp == 1708) {
            hints = "인상";
            answer[0] = "인상";
            answer[1] = "인상";
            answer[2] = "인상";
            answer[3] = "인상쓰지마!";
            answer[4] = "인상";
            answer[5] = "인상";
        }
        if (randp == 1709 || randp == 1710) {
            hints = "ㅇㄹㅈㄴㅅㅌ!";
            answer[0] = "일루저니스타!";
            answer[1] = "일루저니스타";
            answer[2] = "Illusionista!";
            answer[3] = "Illusionista";
            answer[4] = "illusionista!";
            answer[5] = "illusionista";
        }
        if (randp == 1711 || randp == 1712) {
            hints = "ㅈㄸ!";
            answer[0] = "잔뜩!";
            answer[1] = "잔뜩";
            answer[2] = "타쿠상!";
            answer[3] = "타쿠상";
            answer[4] = "잔득";
            answer[5] = "잔득!";
        }
        if (randp == 1713 || randp == 1714) {
            hints = "ㅈㅈㅎㄹ☆ㅅㄴㅇ〜ㅈㅇㅍㄹㅇㄷ〜";
            answer[0] = "전진하라☆소녀여〜jewel parade〜";
            answer[1] = "전진하라 소녀여";
            answer[2] = "전진하라소녀여";
            answer[3] = "쥬엘 퍼레이드";
            answer[4] = "쥬엘퍼레이드";
            answer[5] = "전진하라소녀여쥬엘퍼레이드";
            answer[6] = "전진소녀";
            answer[7] = "쥬얼 퍼레이드";
        }
        if (randp == 1715 || randp == 1716) {
            hints = "ㅈㄹㄱㅅㅇ~?";
            answer[0] = "조르기 Shall We~?";
            answer[1] = "조르기 쉘 위~?";
            answer[2] = "조르기 쉘 위";
            answer[3] = "조르기쉘위~?";
            answer[4] = "조르기쉘위";
            answer[5] = "조르기쉘위?";
        }
        if (randp == 1717 || randp == 1718) {
            hints = "ㅊㅅㅎㅈㅇ";
            answer[0] = "치사하잖아";
            answer[1] = "치사하잔하";
            answer[2] = "치사하잖나";
            answer[3] = "치사하잖아";
            answer[4] = "즈루스기잔";
            answer[5] = "즈루스기쟌";
        }
        if (randp == 1719 || randp == 1720) {
            hints = "ㅋㄹㅇㅈㅋㄹㅇㅈ";
            answer[0] = "크레이지 크레이지";
            answer[1] = "크레이지크레이지";
            answer[2] = "이상해져버려";
            answer[3] = "크래이지크래이지";
            answer[4] = "Crazy Crazy";
            answer[5] = "crazy crazy";
        }
        if (randp == 1721 || randp == 1722) {
            hints = "ㅌㅇㅌㅇㅇㅂㄹ";
            answer[0] = "트윈테일의 바람";
            answer[1] = "트윈테일의바람";
            answer[2] = "트윈태일의 바람";
            answer[3] = "트윈태일의바람";
            answer[4] = "트윙테일의 바람";
            answer[5] = "트윙테일의바람";
        }
        if (randp == 1723 || randp == 1724) {
            hints = "ㅍㄹㅇㅂㅅ";
            answer[0] = "푸른 일번성";
            answer[1] = "푸른일번성";
            answer[2] = "푸른 일등성";
            answer[3] = "푸른일등성";
            answer[4] = "아노 호시노 소바니 아루 아코가레노 바쇼";
            answer[5] = "푸른  일번성";
        }
        if (randp == 1725 || randp == 1726) {
            hints = "ㅍㄹㅎㄴㄹㄹㅇㅅ";
            answer[0] = "푸른 하늘 릴레이션";
            answer[1] = "푸른하늘 릴레이션";
            answer[2] = "푸른 하늘릴레이션";
            answer[3] = "푸른하늘릴레이션";
            answer[4] = "푸른 하늘 릴래이션";
            answer[5] = "푸른하늘릴래이션";
        }
        if (randp == 1727 || randp == 1728) {
            hints = "ㅍㅇㄹㅈㅇ";
            answer[0] = "피어라 Jewel";
            answer[1] = "피어라Jewel";
            answer[2] = "피어라 쥬엘";
            answer[3] = "피어라쥬엘";
            answer[4] = "피어라 jewel";
            answer[5] = "피어라jewel";
        }
        if (randp == 1729 || randp == 1730) {
            hints = "ㅎㅍㄱ!";
            answer[0] = "하피가!";
            answer[1] = "하피가";
            answer[2] = "카와이이가 토모라나이";
            answer[3] = "다레요리모 토모라나이";
            answer[4] = "카와이이가 토메도나이";
            answer[5] = "나니요리모 유즈레나이";
        }
        if (randp == 1731 || randp == 1732) {
            hints = "ㅎㅂㅇㅂㅊ";
            answer[0] = "행복의 법칙";
            answer[1] = "행복의법칙";
            answer[2] = "헹복의 법칙";
            answer[3] = "헹복의법칙";
            answer[4] = "행복의 룰";
            answer[5] = "행복의룰";
        }
        if (randp == 1733 || randp == 1734) {
            hints = "ㅎㄷㄹㄴㅍㄹㄱㅅ";
            answer[0] = "흔들리는 FLAGSHIP";
            answer[1] = "흔들리는FLAGSHIP";
            answer[2] = "흔들리는 플레그쉽";
            answer[3] = "흔들리는플레그쉽";
            answer[4] = "흔들리는flagship";
            answer[5] = "흔들리는 flagship";
        }
        if (randp == 1735 || randp == 1736) {
            hints = "ㄴㄴㅇㅇㄷㅂㅊㅈㅇㄴ";
            answer[0] = "나날이 어드벤처지어니";
            answer[1] = "나날이어드벤처지어니";
            answer[2] = "나날이 어드밴처지어니";
            answer[3] = "나날이어드밴처지어니";
            answer[4] = "나날이 어드벤처져니";
            answer[5] = "나날이어드벤처져니";
        }
        if (randp == 1737 || randp == 1738) {
            hints = "ㄷㄹㅅㅌㅁㄹㄷ";
            answer[0] = "Drastic Melody";
            answer[1] = "drastic melody";
            answer[2] = "드라스틱 멜로디";
            answer[3] = "드라스틱 맬로디";
            answer[4] = "드라스틱멜로디";
            answer[5] = "드라스틱맬로디";
        }
        if (randp == 1739 || randp == 1740) {
            hints = "ㅁㅇㅅㅍ";
            answer[0] = "Myself";
            answer[1] = "myself";
            answer[2] = "마이셀프";
            answer[3] = "마이샐프";
            answer[4] = "자기자신";
            answer[5] = "마이 셀프";
        }
        if (randp == 1741 || randp == 1742) {
            hints = "ㄴㄴㅌㅇㅇㄷ";
            answer[0] = "나는 태양이다";
            answer[1] = "나는태양이다";
            answer[2] = "나는 태양 이다";
            answer[3] = "나는 썬이다";
            answer[4] = "소우 오 솔";
            answer[5] = "소우오솔";
        }if (randp == 1743 || randp == 1744) {
            hints = "ㄷㄱㄱㄹㅇㅃㄱㄱㄷㅇ";
            answer[0] = "두근거림은 빨갛고 달아";
            answer[1] = "두근거림은 빨갛고달아";
            answer[2] = "두근거림은빨갛고달아";
            answer[3] = "두근거림은 뻘겋고 달아";
            answer[4] = "두근거림은 빨갛고 달다";
            answer[5] = "두근거림은뻘겋고달아";
        }if (randp == 1745 || randp == 1746) {
            hints = "ㅅㅎㅅㄱ";
            answer[0] = "성환세계";
            answer[1] = "성환세걔";
            answer[2] = "성환세게";
            answer[3] = "성환세개";
            answer[4] = "성환세상";
            answer[5] = "성환 세계";
        }if (randp == 1747 || randp == 1748) {
            hints = "ㅌㄹㅎㄴㄱㅅ";
            answer[0] = "타락하는 과실";
            answer[1] = "타락하는과실";
            answer[2] = "타락한 과실";
            answer[3] = "타락한과실";
            answer[4] = "타락 과실";
            answer[5] = "타락과실";
        }if (randp == 1749 || randp == 1750) {
            hints = "ㅍㅋㅎㅍㅇㅂㄹ";
            answer[0] = "Packing Her Favorite";
            answer[1] = "packing her favorite";
            answer[2] = "패킹 헐 페이버릿";
            answer[3] = "패킹 헐 패이버릿";
            answer[4] = "패킹헐페이버릿";
            answer[5] = "패킹헐패이버릿";
            answer[6] = "페킹 헐 페이버릿";
            answer[7] = "패킹 헐 페이보릿";
        }if (randp == 1751 || randp == 1752) {
            hints = "ㄹㅍㄹㅌㅂㅇㄹㅁㄴㅇㅅㄴㅇㅌ";
            answer[0] = "Reflective illumination night";
            answer[1] = "reflective illumination night";
            answer[2] = "리플렉티브 일루미네이션 나이트";
            answer[3] = "리플랙티브 일루미네이션 나이트";
            answer[4] = "리플렉티브 일루미네이션나이트";
            answer[5] = "리플랙티브 일루미네이션나이트";
            answer[6] = "리플렉티브일루미네이션나이트";
        }if (randp == 1753 || randp == 1754) {
            hints = "ㅅㅌㄹㅌㄹㅇㅇ";
            answer[0] = "스트리트 런웨이";
            answer[1] = "스트리트 런왜이";
            answer[2] = "스트리트런웨이";
            answer[3] = "street runway";
            answer[4] = "street run way";
            answer[5] = "streetrunway";
        }if (randp == 1755 || randp == 1756) {
            hints = "ㅊㅋㄹ?ㄹㅁㄴㅇㄷ?ㅇㄴㅉ??";
            answer[0] = "초콜릿? 레모네이드? 어느 쪽??";
            answer[1] = "초콜릿?레모네이드?어느쪽??";
            answer[2] = "초콜릿? 레모네이드? 어느쪽??";
            answer[3] = "초콜렛 레모네이드 어느 쪽??";
            answer[4] = "초콜렛 레모네이드 어느쪽??";
            answer[5] = "초콜렛레모네이드어느쪽";
        }if (randp == 1757 || randp == 1758) {
            hints = "ㅇㅈㅎㅈㅈㅇㅇㄷㄱㅊㅇ";
            answer[0] = "인정해주지 않아도 괜찮아";
            answer[1] = "인정해주지않아도괜찮아";
            answer[2] = "인정하지 않아도 괜찮아";
            answer[3] = "인정하지않아도괜찮아";
            answer[4] = "인정 안해줘도 괜찮아";
            answer[5] = "인정안해줘도괜찮아";
        }if (randp == 1759 || randp == 1760) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 1761 || randp == 1762) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }
    }
    if (true) { //샤니 셀렉터
        if (randp == 1001 || randp == 1002) {
            hints = "ㅅㅍㄹㄷㄷㅇㅅ!!";
            answer[0] = "Spread the Wings!!";
            answer[1] = "스프레드더윙스!!";
            answer[2] = "spread the wings";
            answer[3] = "spread the wings!!";
            answer[4] = "스프레드더윙스";
            answer[5] = "스프레드 더 윙스";
            answer[6] = "스프레드 더 윙";
            answer[6] = "spread the wing";
        }
        if (randp == 1003 || randp == 1004) {
            hints = "ㅁㅌㅋㄹㄷㅅㅋㅇ";
            answer[0] = "Multicolored Sky";
            answer[1] = "Multicolored sky";
            answer[2] = "multicolored sky";
            answer[3] = "multicoloredsky";
            answer[4] = "멀티컬러드스카이";
            answer[5] = "멀티컬러드 스카이";
            answer[6] = "멀티칼라드 스카이";
        }
        if (randp == 1005 || randp == 1006) {
            hints = "ㅂㅇㄷㅅㅌㄴㅇㅅ";
            answer[0] = "빛의 destination";
            answer[1] = "빛의destination";
            answer[2] = "빛의 데스티네이션";
            answer[3] = "히카리노 destination";
            answer[4] = "빛의데스티네이션";
            answer[5] = "빛의 목적지";
            answer[6] = "히카리노 데스티네이션";
        }
        if (randp == 1007 || randp == 1008) {
            hints = "ㅁㅈㄱㄱㄷㅇㄹ";
            answer[0] = "무지개가 되어라";
            answer[1] = "무지개가되어라";
            answer[2] = "虹になれ";
            answer[3] = "무지개가되자";
            answer[4] = "무지개가 되자";
            answer[5] = "무지개로 되어라";
        }
        if (randp == 1009 || randp == 1010) {
            hints = "ㅂㅂㅅㅌㄱㄹㅇㅅ";
            answer[0] = "바벨시티 그레이스";
            answer[1] = "바벨시티그레이스";
            answer[2] = "バベルシティ・グレイス";
            answer[3] = "바베루시티 그레이스";
            answer[4] = "바베루시티그레이스";
            answer[5] = "바밸시티 그레이스";
            answer[6] = "바벨시티";
        }
        if (randp == 1011 || randp == 1012) {
            hints = "ㅎㅎㅅㄹㅇ";
            answer[0] = "현혹SILHOUETTE";
            answer[1] = "환혹실루엣";
            answer[2] = "현혹 실루엣";
            answer[3] = "현혹silhouette";
            answer[4] = "환혹 실루엣";
            answer[5] = "현혹실루엣";
            answer[6] = "현혹 silhouette";
        }
        if (randp == 1013 || randp == 1014) {
            hints = "ㄲㅇㅍㄴㅇㅍㅌㅅㅋ";
            answer[0] = "꿈이 피는 After school";
            answer[1] = "꿈이 피는 에프터스쿨";
            answer[2] = "꿈이피는에프터스쿨";
            answer[3] = "꿈이피는 에프터스쿨";
            answer[4] = "꿈이 피는 after school";
            answer[5] = "꿈이 피는 afterschool";
            answer[6] = "꿈이피는 afterschool";
            answer[7] = "꿈이피는 after school";
            answer[8] = "꿈이 피는 애프터스쿨";
        }
        if (randp == 1015 || randp == 1016) {
            hints = "ㅌㅇㅋㅅ";
            answer[0] = "태양 키스";
            answer[1] = "태키";
            answer[2] = "태양키스";
            answer[3] = "태양kiss";
            answer[4] = "태양 kiss";
            answer[5] = "태양 키세스";
        }
        if (randp == 1017 || randp == 1018) {
            hints = "ㅇㅅㅌㄹㅁㄹㅇ";
            answer[0] = "알스트로메리아";
            answer[1] = "알스메";
            answer[2] = "알스트로 메리아";
            answer[3] = "알 스 트 로 메리아";
            answer[4] = "알스트로매리아";
            answer[5] = "텐카가 너무 귀여움";
        }
        if (randp == 1019 || randp == 1020) {
            hints = "ㅎㅍㄹㄹ";
            answer[0] = "해피리리";
            answer[1] = "ハピリリ";
            answer[2] = "해피릴리";
            answer[3] = "해피 리리";
            answer[4] = "해피 릴리";
            answer[5] = "헤피리리";
        }
        if (randp == 1021 || randp == 1022) {
            hints = "ㅇㅂㅅㅅㅇㅂ";
            answer[0] = "Ambitious Eve";
            answer[1] = "AmbitiousEve";
            answer[2] = "ambitious eve";
            answer[3] = "앰비셔스이브";
            answer[4] = "앰비셔스 이브";
            answer[5] = "엠비셔스 이브";
            answer[6] = "ambitiouseve";
            answer[6] = "엠비셔스이브";
        }
        if (randp == 1023 || randp == 1024) {
            hints = "ㅇㅈㄱㅅㅇㄴㄷㅇㅈ";
            answer[0] = "언젠가 Shiny Days";
            answer[1] = "이츠카 Shiny Days";
            answer[2] = "언젠가 shiny days";
            answer[3] = "언젠가 shinydays";
            answer[4] = "언젠가 Shinydays";
            answer[5] = "언젠가 샤이니 데이즈";
            answer[6] = "언젠간 shiny days";
            answer[7] = "언젠가shiny days";
            answer[8] = "이츠카 샤이니 데이즈";
        }
        if (randp == 1025) {
            hints = "ㅇㅋㄱㄴㅇ!";
            answer[0] = "We can go now!";
            answer[1] = "we can go now";
            answer[2] = "we can go now!";
            answer[3] = "위켄고나우!";
            answer[4] = "위 켄 고 나우";
            answer[5] = "위 켄 고 나우!";
            answer[6] = "위켄고나우";
        }
        if (randp == 1026 || randp == 1027) {
            hints = "ㅌㄹㅇㅇㄱ";
            answer[0] = "트라이앵글";
            answer[1] = "トライアングル";
            answer[2] = "트라이엥글";
            answer[3] = "트라이 앵글";
            answer[4] = "트라이 엥글";
            answer[5] = "triangle";
        }
        if (randp == 1028 || randp == 1029) {
            hints = "ㄴㅇㅅㅇㄹㅍㅌㅈ";
            answer[0] = "NEO THEORY FANTASY";
            answer[1] = "neo theory fantasy";
            answer[2] = "neotheoryfantasy";
            answer[3] = "네오세오리판타지";
            answer[4] = "네오 세오리 판타지";
            answer[5] = "네오 데오리 판타지";
            answer[6] = "네오 더리 판타지";
            answer[7] = "네오 써리 판타지";
            answer[8] = "네오 떠리 판타지";
        }
        if (randp == 1030 || randp == 1031) {
            hints = "ㄹㅂㄹㅅㄹㅈㅅㅌㅅ";
            answer[0] = "라비린스 레지스탕스";
            answer[1] = "ラビリンス レジスタンス";
            answer[2] = "라비린스 래지스탕스";
            answer[3] = "라비린스레지스탕스";
            answer[4] = "라비린스래지스탕스";
            answer[5] = "라비린스・레지스탕스";
        }
        if (randp == 1032 || randp == 1033) {
            hints = "ㅂㅊㅂㄹㅇㅂ";
            answer[0] = "비치 브레이버";
            answer[1] = "비치 브래이버";
            answer[2] = "비치브레이버";
            answer[3] = "비치브래이버";
            answer[4] = "beach braver";
            answer[5] = "Beach Braver";
        }
        if (randp == 1034 || randp == 1035) {
            hints = "ㄷㄹㄱㄴㅅㅅ";
            answer[0] = "둘러가는 선셋";
            answer[1] = "よりみちサンセット";
            answer[2] = "둘러가는 선샛";
            answer[3] = "둘러가는선셋";
            answer[4] = "굴러가는 선셋";
            answer[5] = "둘러가는 sunset";
        }
        if (randp == 1036 || randp == 1037) {
            hints = "ㅂㄹㅁ!";
            answer[0] = "Bloomy!";
            answer[1] = "블루미!";
            answer[2] = "블루미";
            answer[3] = "Bloomy";
            answer[4] = "bloomy";
            answer[5] = "텐카 귀여워이";
        }
        if (randp == 1038 || randp == 1039) {
            hints = "ㄹㅂㅇㄷㅅ";
            answer[0] = "Love Addiction";
            answer[1] = "love addiction";
            answer[2] = "러브 어딕션";
            answer[3] = "loveaddiction";
            answer[4] = "러브어딕션";
            answer[5] = "Loveaddiction";
        }
        if (randp == 1040 || randp == 1041) {
            hints = "ㅇㄷㄹㄷㄹㅊㅇㅈ";
            answer[0] = "Wandering Dream Chaser";
            answer[1] = "WanderingDreamChaser";
            answer[2] = "wandering dream chaser";
            answer[3] = "wanderingdreamchaser";
            answer[4] = "원더링드림체이저";
            answer[5] = "원더링 드림 체이저";
            answer[6] = "원더링드림 체이저";
        }
        if (randp == 1042 || randp == 1043) {
            hints = "ㅌㄹㅅㄷㄷㅇㄷ";
            answer[0] = "Transcending The World";
            answer[1] = "transcending the world";
            answer[2] = "트랜센딩 더 월드";
            answer[3] = "트랜센딩더월드";
            answer[4] = "트렌센딩 더 월드";
            answer[5] = "트렌센딩더월드";
            answer[6] = "트렌센딩더 월드";
        }
        if (randp == 1044 || randp == 1045) {
            hints = "ㅅㅇㄴㄱㄹㅍ";
            answer[0] = "샤이노그래피";
            answer[1] = "샤이노그레피";
            answer[2] = "샤이노 그래피";
            answer[3] = "샤이노 그레피";
            answer[4] = "shinyno graphic";
            answer[5] = "샤이니그래피";
            answer[6] = "샤이노그라피";
            answer[7] = "샤이노 그라피";
        }
        if (randp == 1046 || randp == 1047) {
            hints = "ㄷㅇㄷㅅㅋㅇ";
            answer[0] = "Dye the sky.";
            answer[1] = "Dye the sky";
            answer[2] = "dye the sky.";
            answer[3] = "dye the sky";
            answer[4] = "다이 더 스카이";
            answer[5] = "다이더스카이";
            answer[6] = "다이더 스카이";
        }
        if (randp == 1048 || randp == 1049) {
            hints = "ㅌㅇㅋㅇㅇ";
            answer[0] = "Twinkle way";
            answer[1] = "Twinkleway";
            answer[2] = "twinkle way";
            answer[3] = "트윈클웨이";
            answer[4] = "트윙클 웨이";
            answer[5] = "트윈클 웨이";
        }
        if (randp == 1050 || randp == 1051) {
            hints = "ㅎㅍㅍㄴㄹㅋ";
            answer[0] = "Happy Funny Lucky";
            answer[1] = "해피 퍼니 럭키";
            answer[2] = "happy funny lucky";
            answer[3] = "happyfunnylucky";
            answer[4] = "해피퍼니러키";
            answer[5] = "해피 퍼니 러키";
        }
        if (randp == 1052 || randp == 1053) {
            hints = "ㅂㄹㄹㅂㄹ";
            answer[0] = "Black Reverie";
            answer[1] = "black reverie";
            answer[2] = "blackreverie";
            answer[3] = "블랙 리버리";
            answer[4] = "블랙 리베리";
            answer[5] = "블랙리버리";
            answer[6] = "블랙 리비리";
        }
        if (randp == 1054 || randp == 1055) {
            hints = "ㅅㅂㅌㄹㅇㅁㄹㅇ";
            answer[0] = "순백 트로이메라이";
            answer[1] = "순백 트로이매라이";
            answer[2] = "순백트로이메라이";
            answer[3] = "순백트로이매라이";
            answer[4] = "순벡 트로이메라이";
            answer[5] = "순벡 트로이매라이";
        }
        if (randp == 1056 || randp == 1057) {
            hints = "ㄷㅅㅈㄹㅇㅅㄱ";
            answer[0] = "다섯 자리 유성군";
            answer[1] = "다섯자리 유성군";
            answer[2] = "다섯자리유성군";
            answer[3] = "다섯 자리 유성군";
            answer[4] = "마차부자리 유성군";
            answer[5] = "오 자리 유성군";
        }
        if (randp == 1058 || randp == 1059) {
            hints = "ㅎㅈㅎㅁㄷㅌㄱㅈ";
            answer[0] = "학제혁명 동트기 전";
            answer[1] = "학제혁명 동트기전";
            answer[2] = "학제혁명동트기전";
            answer[3] = "학제혁명 트기 전";
            answer[4] = "학제혁명 트기전";
            answer[5] = "학제혁명동트기 전";
        }
        if (randp == 1060 || randp == 1061) {
            hints = "ㄷㅂㅇㅍㅌ";
            answer[0] = "더블 이펙트";
            answer[1] = "더블 이팩트";
            answer[2] = "더블 효과";
            answer[3] = "더블이펙트";
            answer[4] = "더블이팩트";
            answer[5] = "이펙트tv";
        }
        if (randp == 1062 || randp == 1063) {
            hints = "ㅇㄴㅂㅅㄹ";
            answer[0] = "Anniversary";
            answer[1] = "anniversary";
            answer[2] = "애니버서리";
            answer[3] = "에니버서리";
            answer[4] = "anyversary";
            answer[5] = "Anyversary";
        }
        if (randp == 1064 || randp == 1065) {
            hints = "ㅎㅇㄷㅇㅇㅌ";
            answer[0] = "Hide & Attack";
            answer[1] = "하이드앤어택";
            answer[2] = "hide&attack";
            answer[3] = "hide & attack";
            answer[4] = "hide and attack";
            answer[5] = "하이드 앤 어택";
            answer[6] = "하이드 엔 어택";
        }
        if (randp == 1066 || randp == 1067) {
            hints = "ㄷㅅㅌㄴㄷㄹㅇㅂ";
            answer[0] = "Destined Rival";
            answer[1] = "destined rival";
            answer[2] = "DestinedRival";
            answer[3] = "destinedrival";
            answer[4] = "데스티니드라이벌";
            answer[5] = "데스티니드 라이벌";
        }
        if (randp == 1068 || randp == 1069) {
            hints = "ㅇㅈㄹㄷㅇㄹㄷㅇ";
            answer[0] = "언제라도 우리들은";
            answer[1] = "언제나 우리들은";
            answer[2] = "언젠가 우리들은";
            answer[3] = "언제라도 우리는";
            answer[4] = "언제라도우리들은";
            answer[5] = "언제나우리들은";
        }
        if (randp == 1070 || randp == 1071) {
            hints = "ㅈㄲㅊㄹ";
            answer[0] = "저 꽃처럼";
            answer[1] = "그 꽃처럼";
            answer[2] = "저꽃처럼";
            answer[3] = "그꽃처럼";
            answer[4] = "저꽃 처럼";
            answer[5] = "그꽃 처럼";
        }
        if (randp == 1076 || randp == 1077) {
            hints = "ㅅㄴㅇㅍㄹㅇㅋㅁㅁㄹㅅ";
            answer[0] = "SNOW FLAKES MEMORIES";
            answer[1] = "snow flakes memories";
            answer[2] = "스노우프레이크메모리스";
            answer[3] = "snowflakesmemories";
            answer[4] = "스노우 프레이크스 메모리스";
            answer[5] = "스노우 프레이크 메모리";
            answer[6] = "스노우 프레이크 메모리스";
            answer[7] = "snow flake memory";
        }
        if (randp == 1074 || randp == 1075) {
            hints = "ㄹㅊㄱㅇㅊㅅ";
            answer[0] = "Lets get a chance";
            answer[1] = "lets get a chance";
            answer[2] = "렛츠겟어찬스";
            answer[3] = "letsgetachance";
            answer[4] = "렛츠 겟 어 찬스";
            answer[5] = "레츠 겟 어 찬스";
            answer[6] = "let's get a chance";
            answer[7] = "레츠겟어찬스";
        }
        if (randp == 1072 || randp == 1073) {
            hints = "ㅍㅊㄹㅌㅅㅁㅇ";
            answer[0] = "FUTURITY SMILE";
            answer[1] = "FUTURITYSMILE";
            answer[2] = "futurity smile";
            answer[3] = "futurity smile";
            answer[4] = "퓨처리티 스마일";
            answer[5] = "퓨처리티스마일";
        }
        if (randp == 1078 || randp == 1079) {
            hints = "ㅅㅇㅅㅌ";
            answer[0] = "SWEET♡STEP";
            answer[1] = "스윗스텝";
            answer[2] = "sweet step";
            answer[3] = "sweetstep";
            answer[4] = "스위트 스텝";
            answer[5] = "스윗 스텝";
            answer[6] = "스위트스텝";
        }
        if (randp == 1080 || randp == 1081) {
            hints = "ㄹㅈㄴㅅ";
            answer[0] = "Resonance⁺";
            answer[1] = "Resonance";
            answer[2] = "resonance";
            answer[3] = "레조난스";
            answer[4] = "resonance⁺";
            answer[5] = "리조난스";
            answer[6] = "레조넨스";
        }
        if (randp == 1082 || randp == 1083) {
            hints = "ㅋㄹㄷㅇㅅ";
            answer[0] = "Color Days";
            answer[1] = "color days";
            answer[2] = "컬러데이스";
            answer[3] = "colordays";
            answer[4] = "칼라 데이스";
            answer[5] = "컬러 데이스";
            answer[6] = "컬러 데이즈";
            answer[7] = "컬러데이즈";
        }
        if (randp == 1084 || randp == 1085) {
            hints = "ㅍㄹㅈㅇㅈ";
            answer[0] = "PRISISM";
            answer[1] = "prisism";
            answer[2] = "프리지즘";
            answer[3] = "프리즈이즘";
            answer[4] = "프리지즈므";
            answer[5] = "Prisism";
        }
        if (randp == 1086 || randp == 1087) {
            hints = "ㅅㅁㅇㅅㅍㄴㅇ";
            answer[0] = "스마일 심포니아";
            answer[1] = "스마일심포니아";
            answer[2] = "스마일심포니";
            answer[3] = "스마일 심포니";
            answer[4] = "스마일 symphonia";
            answer[5] = "smile symphonia";
        }
        if (randp == 1088 || randp == 1089) {
            hints = "ㅇㅂㅅㅇㅂㅋㅍㄹㅌ";
            answer[0] = "abyss of conflict";
            answer[1] = "abyssofconflict";
            answer[2] = "Abyss of Conflict";
            answer[3] = "어비스 오브 컨플릭트";
            answer[4] = "어비스 오브 콘플릭트";
            answer[5] = "어비스오브컨플릭트";
            answer[6] = "어오컨";
        }
        if (randp == 1090 || randp == 1091) {
            hints = "ㅎㅁㅈㅎㄹ";
            answer[0] = "혁명 진화론";
            answer[1] = "혁명진화론";
            answer[2] = "혁명 진화 론";
            answer[3] = "혁명 진 화 론";
            answer[4] = "혁신진화론";
            answer[5] = "혁신 진화론";
        }
        if (randp == 1092 || randp == 1093) {
            hints = "ㅋㄹㅇㅁㅅㅇㅇㄹㄷ";
            answer[0] = "클라이맥스 아일랜드";
            answer[1] = "클라이맥스아일랜드";
            answer[2] = "클라이막스 아일랜드";
            answer[3] = "클라이맥스 아일렌드";
            answer[4] = "클라이막스 아일렌드";
            answer[5] = "클라이막스아일랜드";
        }
        if (randp == 1094 || randp == 1095) {
            hints = "ㅌㅇㅋㅅㅈㅅㅅ";
            answer[0] = "타임캡슐 전 상서";
            answer[1] = "타임캡슐 전상서";
            answer[2] = "배계 타임캡슐";
            answer[3] = "배계타임캡슐";
            answer[4] = "타임캡슐전상서";
            answer[5] = "전상서 타임캡슐";
        }
        if (randp == 1096 || randp == 1097) {
            hints = "ㅍㅅㅌㅋㄹㅍㅅㅋㄹㅋㄹ";
            answer[0] = "파스텔컬러 파스카라컬러";
            answer[1] = "파스텔칼라 파스카라칼러";
            answer[2] = "파스텔카라 파스카라컬러";
            answer[3] = "파스텔컬라파스카라컬라";
            answer[4] = "파스텔칼라 파스카라칼라";
            answer[5] = "파스텔컬러파스카라컬러";
            answer[6] = "파스텔컬러 파스칼라컬러";
        }
        if (randp == 1098 || randp == 1099) {
            hints = "ㄹㅂㅂㄴㅍㅌ";
            answer[0] = "러브 보나페티";
            answer[1] = "러브 보나패티";
            answer[2] = "러브보나페티";
            answer[3] = "러브보나패티";
            answer[4] = "러브보나 페티";
            answer[5] = "러브 보나 페티";
        }
        if (randp == 1100 || randp == 1101) {
            hints = "ㅇㄴㄷㄹㅍㅇㅈ";
            answer[0] = "Another Rampage";
            answer[1] = "어나더렘페이지";
            answer[2] = "another rampage";
            answer[3] = "어나더 렘페이지";
            answer[4] = "어나덜 렘페이지";
            answer[5] = "어나더 램페이지";
            answer[6] = "어나더 램 페이지";
        }
        if (randp == 1102 || randp == 1103) {
            hints = "ㅌㅇㄹㅅㅅㅌㅅㅌ";
            answer[0] = "Timeless Shooting Star";
            answer[1] = "timeless shooting star";
            answer[2] = "timelessshootingstar";
            answer[3] = "타임리스 슈팅 스타";
            answer[4] = "타임리스슈팅스타";
            answer[5] = "시간없는 슈팅 스타";
        }
        if (randp == 1104 || randp == 1105) {
            hints = "ㅇㄹㄷㅁㅇㅁㄹㅇㅎㄴ";
            answer[0] = "우리들만의 미래의 하늘";
            answer[1] = "우리들만의미래의하늘";
            answer[2] = "우리들만의 미래의하늘";
            answer[3] = "우리들의 미래의 하늘";
            answer[4] = "우리들의 미래의하늘";
            answer[5] = "우리의 미래의 하늘";
        }
        if (randp == 1106 || randp == 1107) {
            hints = "ㅈㄱㅂㅇㅇㄴㅅㄱㅇ";
            answer[0] = "지금밖에 없는 순간을";
            answer[1] = "지금밖에 없는순간을";
            answer[2] = "지금밖에없는순간을";
            answer[3] = "지금뿐인 순간을";
            answer[4] = "지금밖에 없는 순간";
            answer[5] = "지금밖의 없는 순간을";
        }
        if (randp == 1108 || randp == 1109) {
            hints = "ㅇㅁㅇㄱ";
            answer[0] = "OH MY GOD";
            answer[1] = "OHMYGOD";
            answer[2] = "oh my god";
            answer[3] = "ohmygod";
            answer[4] = "오 마이 갓";
            answer[5] = "오마이갓";
            answer[6] = "오마이 갓";
        }
        if (randp == 1110 || randp == 1111) {
            hints = "ㅍㄹㅇㅇㅍㄹㅇ";
            answer[0] = "Fly and Fly";
            answer[1] = "플라이앤플라이";
            answer[2] = "flyandfly";
            answer[3] = "fly and fly";
            answer[4] = "플라이 앤 플라이";
            answer[5] = "플라이 엔 플라이";
        }
        if (randp == 1112 || randp == 1113) {
            hints = "ㅍㄹㄴㅅㅍㅇ~ㅍㄹㄴㅅㅍㅇ~";
            answer[0] = "플래니스피어 ～planisphere～";
            answer[1] = "플래니스피어 ~planisphere~";
            answer[2] = "플래니스피어 planisphere";
            answer[3] = "플래니스피어";
            answer[4] = "planisphere";
            answer[5] = "플레니스피어";
        }
        if (randp == 1114 || randp == 1115) {
            hints = "ㄱㅈㅁㄷㅂㅉㅇㅇㄹ";
            answer[0] = "가진 모든 반짝임으로";
            answer[1] = "가진모든 반짝임으로";
            answer[2] = "가진모든반짝임으로";
            answer[3] = "가진 모든반짝임으로";
            answer[4] = "가진 전부 반짝임으로";
            answer[5] = "가진 모든 것으로";
            answer[6] = "가모반";
        }
        if (randp == 1116 || randp == 1117) {
            hints = "ㅂㅇㅁㅍㄹ";
            answer[0] = "별을 목표로";
            answer[1] = "별을목표로";
            answer[2] = "별을 목적으로";
            answer[3] = "별을 꿈으로";
            answer[4] = "뽕다리뽕다리";
            answer[5] = "아사히수퍼드라이";
        }
        if (randp == 1118 || randp == 1119) {
            hints = "ㄲㄲㄴㅅ";
            answer[0] = "꿈꾸는 새";
            answer[1] = "꿈 꾸는 새";
            answer[2] = "꿈꾸는새";
            answer[3] = "꿈 꾸는새";
            answer[4] = "꿈을 꾸는 새";
            answer[5] = "몽새";
        }
        if (randp == 1120 || randp == 1121) {
            hints = "ㅇㅍㅇㅌㅅㄱㄴ";
            answer[0] = "어포인트 시그널";
            answer[1] = "어포인트 시그날";
            answer[2] = "어포인트시그널";
            answer[3] = "어 포인트 시그널";
            answer[4] = "어 포인트 시그날";
            answer[5] = "어포인트시그날";
        }
        if (randp == 1122 || randp == 1123) {
            hints = "ㅊㅋㄷㅇㅌㅅㄷㅇ";
            answer[0] = "초코데이트 선데이";
            answer[1] = "초코레이트 선데이";
            answer[2] = "초코데이토 선데이";
            answer[3] = "초코데이트선데이";
            answer[4] = "초코레트 선데이";
            answer[5] = "초코데이트 썬데이";
        }
        if (randp == 1124 || randp == 1125) {
            hints = "ㅅㅇㅌㅁㅁㄹㅈ";
            answer[0] = "Sweet Memories";
            answer[1] = "sweet memories";
            answer[2] = "sweetmemories";
            answer[3] = "스위트 메모리즈";
            answer[4] = "스윗 메모리즈";
            answer[5] = "스위트메모리즈";
            answer[6] = "스위트 메모리";
            answer[7] = "sweet memory";
        }
        if (randp == 1126 || randp == 1127) {
            hints = "ㅎㄴㅁㄹㅂㅈ";
            answer[0] = "하나마루 뱃지";
            answer[1] = "하나마루뱃지";
            answer[2] = "하나마루 벳지";
            answer[3] = "하나마루벳지";
            answer[4] = "하나마루 배지";
            answer[5] = "하나마루 베지";
        }
        if (randp == 1128 || randp == 1129) {
            hints = "ㄹㅍㄹㅌㅅㅇ";
            answer[0] = "리플렉트 사인";
            answer[1] = "리플렉트사인";
            answer[2] = "리플랙트 사인";
            answer[3] = "리플랙트사인";
            answer[4] = "reflect sign";
            answer[5] = "리플렉트 싸인";
        }
        if (randp == 1130 || randp == 1131) {
            hints = "ㅎㅎㅇㅇㄷㅌㅌ";
            answer[0] = "황혼 아이덴티티";
            answer[1] = "황혼아이덴치티티";
            answer[2] = "황혼 아이댄티티";
            answer[3] = "황혼아이댄티티";
            answer[4] = "황혼의 아이덴티티";
            answer[5] = "황혼의아이덴티티";
        }
        if (randp == 1132 || randp == 1133) {
            hints = "ㄴㅇㅈㅇㄱㅇㄴㄴㄲ!";
            answer[0] = "나의 주인공은 나니까!";
            answer[1] = "나의 주인공은 나니까";
            answer[2] = "나의주인공은 나니까";
            answer[3] = "나의주인공은 나니까!";
            answer[4] = "나의주인공은나니까";
            answer[5] = "나의주인공은나니까!";
            answer[6] = "나주나";
        }
        if (randp == 1134) {
            hints = "ㄴㅇㄸㅁㄴ";
            answer[0] = "내일 또 만나";
            answer[1] = "내일또 만나";
            answer[2] = "내일 또만나";
            answer[3] = "내일또만나";
            answer[4] = "마타아시타";
            answer[5] = "텐카 너무 귀여워이";
        }
        if (randp == 1135 || randp == 1136) {
            hints = "ㄴㄲㅇㅍㄴㅈㅇ";
            answer[0] = "늘 꽃이 피는 정원";
            answer[1] = "늘꽃이 피는 정원";
            answer[2] = "꽃이 피는 정원";
            answer[3] = "늘꽃이피는정원";
            answer[4] = "늘 꽃이피는 정원";
            answer[5] = "항상 꽃이 피는 정원";
        }
        if (randp == 1137 || randp == 1138) {
            hints = "ㅍㄹㅅㅌㅇㅂㄹㄹ";
            answer[0] = "플라스틱 엄브렐라";
            answer[1] = "플라스틱엄브렐라";
            answer[2] = "플라스틱 엄브랠라";
            answer[3] = "플라스틱 우산";
            answer[4] = "플라스틱엄브랠라";
            answer[5] = "히토 히토 히토";
        }
        if (randp == 1139 || randp == 1140) {
            hints = "ㄱㅇㅁㅇㅇㅇ";
            answer[0] = "Going my way";
            answer[1] = "going my way";
            answer[2] = "goingmyway";
            answer[3] = "고잉 마이 웨이";
            answer[4] = "고잉마이웨이";
            answer[5] = "고잉 마이웨이";
        }
        if (randp == 1141 || randp == 1142) {
            hints = "ㅅㅇㅍㅎ";
            answer[0] = "설・월・풍・화";
            answer[1] = "설월풍화";
            answer[2] = "설 월 풍 화";
            answer[3] = "설월 풍화";
            answer[4] = "키리코는 귀여우니까";
            answer[5] = "설-월-풍-화";
        }
        if (randp == 1143 || randp == 1144) {
            hints = "ㅅㄹㅁㅅ";
            answer[0] = "슬로모션";
            answer[1] = "슬로우모션";
            answer[2] = "슬로우 모션";
            answer[3] = "slow motion";
            answer[4] = "슬로우 motion";
            answer[5] = "slow 모션";
            answer[6] = "슬로 모션";
        }
        if (randp == 1145 || randp == 1146) {
            hints = "ㅊㅇㅇㄹㅇ";
            answer[0] = "천야 아리아";
            answer[1] = "천야아리아";
            answer[2] = "찬야 아리아";
            answer[3] = "천야 아리아";
            answer[4] = "천야 아리아";
            answer[5] = "천야 아리아";
        }
        if (randp == 1147 || randp == 1148) {
            hints = "ㄷㅁㅅㅋㅅㅋㅌㅇ";
            answer[0] = "Damascus Cocktail";
            answer[1] = "damascus cocktail";
            answer[2] = "damascuscocktail";
            answer[3] = "다마스커스 칵테일";
            answer[4] = "다마스커스칵테일";
            answer[5] = "damascus cocktail";
            answer[6] = "다마스커스 칵태일";
        }
        if (randp == 1149 || randp == 1150) {
            hints = "ㄷㄹㅇ!";
            answer[0] = "Darling you!";
            answer[1] = "darling you!";
            answer[2] = "darling you";
            answer[3] = "달링 유";
            answer[4] = "달링 유!";
            answer[5] = "달링유";
            answer[6] = "달링유!";
        }
        if (randp == 1151 || randp == 1152) {
            hints = "ㅍㄹㅎㄴㅅㅇㄷ";
            answer[0] = "푸른하늘 사이다";
            answer[1] = "푸른하늘사이다";
            answer[2] = "푸른하늘 사이다";
            answer[3] = "푸른하늘 사이다";
            answer[4] = "빠빠두빠바";
            answer[5] = "와쿠 와쿠";
        }
        if (randp == 1153 || randp == 1154) {
            hints = "ㅇㅅㅇㅇㅅ";
            answer[0] = "SOS";
            answer[1] = "에스오에스";
            answer[2] = "에스 오 에스";
            answer[3] = "구조요청";
            answer[4] = "sos";
            answer[5] = "Sos";
        }
        if (randp == 1155 || randp == 1156) {
            hints = "ㄱㅅㅅㅂㄹㅊ";
            answer[0] = "과순성 블리치";
            answer[1] = "과순성블리치";
            answer[2] = "과순성 블리치";
            answer[3] = "과순성 블리치";
            answer[4] = "과순성 블리치";
            answer[5] = "과순성 블리치";
        }
        if (randp == 1157 || randp == 1158) {
            hints = "ㅎㄹㅂㄹ!!";
            answer[0] = "HAREBARE!!";
            answer[1] = "harebare!!";
            answer[2] = "harebare";
            answer[3] = "하레바레!!";
            answer[4] = "하레바레";
            answer[5] = "상쾌하게";
        }
        if (randp == 1159 || randp == 1160) {
            hints = "ㅅㅌㅌㅅ";
            answer[0] = "statice";
            answer[1] = "statice";
            answer[2] = "스테티스";
            answer[3] = "스테이티스";
            answer[4] = "스태티스";
            answer[5] = "Statice";
        }
        if (randp == 1161 || randp == 1162) {
            hints = "ㅅㄹㅇㅇ";
            answer[0] = "SOLAR WAY";
            answer[1] = "solar way";
            answer[2] = "solarway";
            answer[3] = "솔라 웨이";
            answer[4] = "솔라웨이";
            answer[5] = "쏠라 웨이";
        }
        if (randp == 1163 || randp == 1164) {
            hints = "ㅅㅇㅈㅇㄷ,ㅁ";
            answer[0] = "신은 죽었다, 며";
            answer[1] = "신은죽었다,며";
            answer[2] = "신은죽었다, 며";
            answer[3] = "신은 죽었다,며";
            answer[4] = "신은죽었다며";
            answer[5] = "신은 죽었다며";
        }
        if (randp == 1165 || randp == 1166) {
            hints = "ㅁㅈㄱㅇㅎㅂ"; //시즌1
            answer[0] = "무지개의 행방";
            answer[1] = "무지개의행방";
            answer[2] = "무지게의 행방";
            answer[3] = "무지게의행방";
            answer[4] = "무지개 행방";
            answer[5] = "무지개행방";
        }
        if (randp == 1167 || randp == 1168) {
            hints = "ㄷㅇㅂㄹㅇㅋㅇㅇㅈ";
            answer[0] = "Daybreak Age";
            answer[1] = "daybreak age";
            answer[2] = "DayBreak Age";
            answer[3] = "daybreakage";
            answer[4] = "데이브레이크 에이지";
            answer[5] = "데이브레이크에이지";
            answer[6] = "데이 브레이크 에이지";
        }
        if (randp == 1169 || randp == 1170) {
            hints = "ㅍㄹㅅ";
            answer[0] = "FELICE";
            answer[1] = "Felice";
            answer[2] = "FELICE";
            answer[3] = "펠리스";
            answer[4] = "팰리스";
            answer[5] = "펠라이스";
        }
        if (randp == 1171 || randp == 1172) {
            hints = "ㅇㄹㅁㄴㅇㅌㅋㅅㅌ";
            answer[0] = "일루미네이트 콘서트";
            answer[1] = "일루미네이트콘서트";
            answer[2] = "일루미내이트 콘서트";
            answer[3] = "일루미내이트콘서트";
            answer[4] = "일루미네이트 컨서트";
            answer[5] = "일루미네이트 컨설트";
        }if (randp == 1173 || randp == 1174) {
            hints = "ㅋㄹ×ㅁㅅ";
            answer[0] = "Killer×Mission";
            answer[1] = "KillerxMission";
            answer[2] = "killerxmission";
            answer[3] = "킬러x미션";
            answer[4] = "킬러 x 미션";
            answer[5] = "killer x mission";
        }if (randp == 1175 || randp == 1176) {
            hints = "ㅇㅇㅇㅇㄱㅋㅅ";
            answer[0] = "아이아이가쿠샤";
            answer[1] = "아이아이가쿠샤";
            answer[2] = "아이아이가쿠샤";
            answer[3] = " 아이아이가쿠샤";
            answer[4] = "아이아이가쿠샤 ";
            answer[5] = " 아이아이가쿠샤 ";
        }if (randp == 1177 || randp == 1178) {
            hints = "ㅅㅋㄹㅇㅌㅍㅇ";
            answer[0] = "Secret utopIA";
            answer[1] = "secret utopIA";
            answer[2] = "secret utopia";
            answer[3] = "시크릿 유토피아";
            answer[4] = "시크릿유토피아";
            answer[5] = "시크릿 유토피에이";
        }if (randp == 1179 || randp == 1180) {
            hints = "ㅎㅂㅇㄴㄱㅇㄲㄷ";
            answer[0] = "한방은 네가 이끈다";
            answer[1] = "한방은 니가 이끈다";
            answer[2] = "한방은네가이끈다";
            answer[3] = "한방은니가이끈다";
            answer[4] = "한니끈";
            answer[5] = "한네끈";
        }if (randp == 1181 || randp == 1182) {
            hints = "ㅋㅅㅋㄷ";
            answer[0] = "캣스쿼드";
            answer[1] = "켓스쿼드";
            answer[2] = "캣 스쿼드";
            answer[3] = "켓 스쿼드";
            answer[4] = "고양이 스쿼드";
            answer[5] = "고양이스쿼드";
        }if (randp == 1183 || randp == 1184) {
            hints = "ㅂㄹㅂㄹㄹㅂ";
            answer[0] = "VERY BERRY LOVE";
            answer[1] = "베리 베리 러브";
            answer[2] = "배리 배리 러브";
            answer[3] = "very berry love";
            answer[4] = "베리 배리 러브";
            answer[5] = "Very Berry Love";
        }if (randp == 1185 || randp == 1186) {
            hints = "ㄱㅂㅁㅅㅁㅇ...";
            answer[0] = "Give me some more...";
            answer[1] = "Give me some more";
            answer[2] = "give me some more";
            answer[3] = "기브 미 섬 모어";
            answer[4] = "기브미섬모어";
            answer[5] = "기브 미 썸 모어";
        }if (randp == 1187 || randp == 1188) {
            hints = "ㅌㄹㅇㅅㄷㅍㄷ";
            answer[0] = "Tracing Defender";
            answer[1] = "tracing defender";
            answer[2] = "트레이싱 디펜더";
            answer[3] = "트레이싱 디팬더";
            answer[4] = "트레이싱디펜터";
            answer[5] = "트레이싱디팬더";
        }if (randp == 1189 || randp == 1190) {
            hints = "ㅇㅂㄷㄹㅇㅂㅇㅁㅅ";
            answer[0] = "Overdrive Emotion";
            answer[1] = "overdrive emotion";
            answer[2] = "오버드라이브 이모션";
            answer[3] = "오버드라이브이모션";
            answer[4] = "오버 드라이브 이모션";
            answer[5] = "오버드라이브 이머션";
        }if (randp == 1191 || randp == 1192) {
            hints = "";
            answer[0] = "Catch the Breeze";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 1193 || randp == 1194) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 1195 || randp == 1196) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 1197 || randp == 1198) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 1199 || randp == 1200) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 1201 || randp == 1202) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }
    }
    if (true) { //본가 셀렉터
        if (randp == 2001 || randp == 2002) {
            //본가 시작
            hints = "ㅇㅎ9ㅅ2ㅂ";
            answer[0] = "9:02pm";
            answer[1] = "9:02";
            answer[2] = "오후 9시 2분";
            answer[3] = "902pm";
            answer[4] = "9:2pm";
            answer[5] = "9:02피엠";
            answer[6] = "9시 2분";
        }
        if (randp == 2003 || randp == 2004) {
            hints = "ㄱㄱㅂ";
            answer[0] = "99 Nights";
            answer[1] = "99Nights";
            answer[2] = "99 nights";
            answer[3] = "99nights";
            answer[4] = "99밤";
            answer[5] = "구구밤";
        }
        if (randp == 2005 || randp == 2006) {
            hints = "ㅇㄹㅇ*";
            answer[0] = "ALRIGHT*";
            answer[1] = "ALRIGHT";
            answer[2] = "alright*";
            answer[3] = "alright";
            answer[4] = "올라잇";
            answer[5] = "올라잇*";
        }
        if (randp == 2007 || randp == 2008) {
            hints = "ㅇㄹㅋㄷㅇ";
            answer[0] = "arcadia";
            answer[1] = "아르카디아";
            answer[2] = "Arcadia";
            answer[3] = "에르카디아";
            answer[4] = "아르카디아";
            answer[5] = "arcadia";
        }
        if (randp == 2009 || randp == 2010) {
            hints = "ㅂㄹㅁㅅㅌ";
            answer[0] = "Blooming Star";
            answer[1] = "blooming star";
            answer[2] = "bloomingstar";
            answer[3] = "블루밍 스타";
            answer[4] = "블루밍스타";
            answer[5] = "블룸밍 스타";
        }
        if (randp == 2011 || randp == 2012) {
            hints = "ㅂㄹㄷㄴㄷㅇ";
            answer[0] = "Brand New Day!";
            answer[1] = "Brand New Day";
            answer[2] = "brand new day!";
            answer[3] = "brand new day";
            answer[4] = "브랜드 뉴 데이";
            answer[5] = "브렌드 뉴 데이";
            answer[6] = "브랜뉴 데이";
            answer[7] = "브랜뉴데이";
        }
        if (randp == 2013 || randp == 2014) {
            hints = "ㅂㄹㅇㅂㅅㅌ";
            answer[0] = "BRAVE STAR";
            answer[1] = "brave star";
            answer[2] = "bravestar";
            answer[3] = "브레이브 스타";
            answer[4] = "브레이브스타";
            answer[5] = "브레이브 스탈";
        }
        if (randp == 2015 || randp == 2016) {
            hints = "ㅊㅇㅈ!!!!";
            answer[0] = "CHANGE!!!!";
            answer[1] = "change!!!!";
            answer[2] = "change";
            answer[3] = "체인지";
            answer[4] = "채인지";
            answer[5] = "체인지!!!!";
            answer[6] = "CHANGE";
        }
        if (randp == 2017 || randp == 2018) {
            hints = "ㅋㄹㅍㄷㅇㅈ";
            answer[0] = "Colorful Days";
            answer[1] = "colorful days";
            answer[2] = "colorfuldays";
            answer[3] = "컬러풀 데이즈";
            answer[4] = "칼라풀 데이즈";
            answer[5] = "컬러풀데이즈";
            answer[6] = "컬러풀 데이스";
            answer[7] = "컬러풀데이스";
        }
        if (randp == 2019 || randp == 2020) {
            hints = "ㅋㅁㅅㅁㅇ";
            answer[0] = "Coming Smile";
            answer[1] = "coming smile";
            answer[2] = "coming smile";
            answer[3] = "컴밍 스마일";
            answer[4] = "커밍 스마일";
            answer[5] = "커밍스마일";
        }
        if (randp == 2021 || randp == 2022) {
            hints = "ㅋㄹㅅㅌㅁㅇㅈ";
            answer[0] = "Crescent Maze";
            answer[1] = "crescent maze";
            answer[2] = "크레센트 메이즈";
            answer[3] = "크레샌트 메이즈";
            answer[4] = "crescent maze";
            answer[5] = "크레센트메이즈";
            answer[6] = "크레샌트메이즈";
            answer[7] = "crescentmaze";
        }
        if (randp == 2023 || randp == 2024) {
            hints = "ㄷㅇㅇㅂㄷㅍㅊ";
            answer[0] = "Day of the future";
            answer[1] = "day of the future";
            answer[2] = "데이 오브 더 퓨처";
            answer[3] = "데이오브더퓨처";
            answer[4] = "미래의 날";
            answer[5] = "dayofthefuture";
        }
        if (randp == 2025 || randp == 2026) {
            hints = "ㄷㅅㅌㄴ";
            answer[0] = "Destiny";
            answer[1] = "destiny";
            answer[2] = "데스티니";
            answer[3] = "대스티니";
            answer[4] = "운명";
            answer[5] = "데스티네이션";
        }
        if (randp == 2027 || randp == 2028) {
            hints = "ㄷㅇㅇㅁㄷ";
            answer[0] = "DIAMOND";
            answer[1] = "diamond";
            answer[2] = "다이아몬드";
            answer[3] = "데이아몬드";
            answer[4] = "dia mond";
            answer[5] = "di amond";
        }
        if (randp == 2029 || randp == 2030) {
            hints = "ㄷㄷㅇ";
            answer[0] = "Do-Dai";
            answer[1] = "do dai";
            answer[2] = "도 다이";
            answer[3] = "두 다이";
            answer[4] = "도 데이";
            answer[5] = "도다이";
        }
        if (randp == 2031 || randp == 2032) {
            hints = "ㅇㄷ";
            answer[0] = "edeN";
            answer[1] = "eden";
            answer[2] = "에덴";
            answer[3] = "애덴";
            answer[4] = "에댄";
            answer[5] = "애댄";
        }
        if (randp == 2033 || randp == 2034) {
            hints = "ㅇㅂㅅㄴ";
            answer[0] = "Ever Sunny";
            answer[1] = "ever sunny";
            answer[2] = "에벌 서니";
            answer[3] = "애벌 서니";
            answer[4] = "에벌서니";
            answer[5] = "애버서니";
            answer[6] = "에버서니";
            answer[7] = "에버 서니";
        }
        if (randp == 2035 || randp == 2036) {
            hints = "ㅍㅇㅌㅇㅂㄷㅇㄷ";
            answer[0] = "Fate of the World";
            answer[1] = "fate of the world";
            answer[2] = "페이트 오브 더 월드";
            answer[3] = "페이트 오브 월드";
            answer[4] = "페이트오브더월드";
            answer[5] = "세상의 운명";
        }
        if (randp == 2037 || randp == 2038) {
            hints = "ㅍㅅㅌㅅㅌ";
            answer[0] = "First Step";
            answer[1] = "first step";
            answer[2] = "퍼스트 스텝";
            answer[3] = "펄스트 스텝";
            answer[4] = "퍼스트스텝";
            answer[5] = "첫 걸음";
        }
        if (randp == 2039 || randp == 2040) {
            hints = "ㅍ";
            answer[0] = "FO(U)R";
            answer[1] = "fo(u)r";
            answer[2] = "4유";
            answer[3] = "폴";
            answer[4] = "포";
            answer[5] = "포유";
        }
        if (randp == 2041 || randp == 2042) {
            hints = "ㅍㄴㄹㅈ";
            answer[0] = "Funny Logic";
            answer[1] = "funny logic";
            answer[2] = "퍼니로직";
            answer[3] = "퍼니 로직";
            answer[4] = "재밌는 논리";
            answer[5] = "funnylogic";
        }
        if (randp == 2043 || randp == 2044) {
            hints = "ㄱㅁㅇㅇㅇ!!";
            answer[0] = "GO MY WAY!!";
            answer[1] = "go my way!!";
            answer[2] = "go my way";
            answer[3] = "고 마이 웨이";
            answer[4] = "고마이웨이";
            answer[5] = "고 마이 웨이!!";
            answer[6] = "고마웨";
        }
        if (randp == 2045 || randp == 2046) {
            hints = "ㅎㅍ!";
            answer[0] = "Happy!";
            answer[1] = "happy!";
            answer[2] = "happy";
            answer[3] = "해피";
            answer[4] = "해피!";
            answer[5] = "헤피";
        }
        if (randp == 2047 || randp == 2048) {
            hints = "ㅎㅌㅇㅅㅇ";
            answer[0] = "HEART AND SOUL";
            answer[1] = "heart and soul";
            answer[2] = "하트 앤 소울";
            answer[3] = "하트 엔 소울";
            answer[4] = "하트앤소울";
            answer[5] = "heartandsoul";
            answer[6] = "하트 엔 소울";
            answer[7] = "하앤소";
        }
        if (randp == 2049 || randp == 2050) {
            hints = "ㅎㅇㅇㄱ!!";
            answer[0] = "Here we go!!";
            answer[1] = "here we go!!";
            answer[2] = "히얼 위 고!!";
            answer[3] = "히얼 위 고";
            answer[4] = "히얼위고";
            answer[5] = "히얼위고!";
            answer[6] = "here we go";
            answer[7] = "Here we go";
        }
        if (randp == 2051 || randp == 2052) {
            hints = "ㅎㄴㅎㅌㅂㅌ";
            answer[0] = "Honey Heartbeat";
            answer[1] = "honey heartbeat";
            answer[2] = "허니 하트비트";
            answer[3] = "허니하트비트";
            answer[4] = "honeyheartbeat";
            answer[5] = "하니 하트비트";
            answer[6] = "honey heart beat";
        }
        if (randp == 2053 || randp == 2054) {
            hints = "ㅎㄱ";
            answer[0] = "HUG";
            answer[1] = "hug";
            answer[2] = "허그";
            answer[3] = "하그";
            answer[4] = "Hug";
            answer[5] = "헉으";
        }
        if (randp == 2055 || randp == 2056) {
            hints = "ㅇㅇㅇㅇㅅ";
            answer[0] = "I'm yours";
            answer[1] = "i'm yours";
            answer[2] = "im yours";
            answer[3] = "아임 유얼스";
            answer[4] = "아임유얼스";
            answer[5] = "imyours";
            answer[6] = "Im yours";
        }
        if (randp == 2057 || randp == 2058) {
            hints = "ㅇㅇ";
            answer[0] = "i";
            answer[1] = "I";
            answer[2] = "아이";
            answer[3] = "어이";
            answer[4] = "응 아잇";
            answer[5] = "아이";
        }
        if (randp == 2059 || randp == 2060) {
            hints = "ㅇㅇㄷㅍㅇㄹㅇㅂㅇ";
            answer[0] = "IDOL POWER RAINBOW";
            answer[1] = "idol power rainbow";
            answer[2] = "아이돌 파워 레인보우";
            answer[3] = "아이돌파워레인보우";
            answer[4] = "idolpowerrainbow";
            answer[5] = "아이돌파워 레인보우";
        }
        if (randp == 2061 || randp == 2062) {
            hints = "ㅇㅇㅅㅍㄹ!";
            answer[0] = "I'm so free!";
            answer[1] = "i'm so free!";
            answer[2] = "아임소프리";
            answer[3] = "im so free";
            answer[4] = "아임 소 프리";
            answer[5] = "아임 소 프리!";
            answer[6] = "Im so free";
            answer[7] = "I'm so free";
            answer[8] = "암소프리";
        }
        if (randp == 2063 || randp == 2064) {
            hints = "ㅇㅊㅅ";
            answer[0] = "It's Show";
            answer[1] = "it's show";
            answer[2] = "its show";
            answer[3] = "잇츠 쇼";
            answer[4] = "잇츠쇼";
            answer[5] = "이츠쇼";
            answer[6] = "잇쇼";
            answer[7] = "이츠 쇼";
        }
        if (randp == 2065 || randp == 2066) {
            hints = "ㅋㅅㅁㅅ,ㅋㅅㅁㅅ";
            answer[0] = "Kosmos, Cosmos";
            answer[1] = "kosmos cosmos";
            answer[2] = "코스모스 코스모스";
            answer[3] = "코스모스, 코스모스";
            answer[4] = "코스모스코스모스";
            answer[5] = "코스모스,코스모스";
        }
        if (randp == 2067 || randp == 2068) {
            hints = "ㅇㅇㅂㅇ";
            answer[0] = "L・O・B・M";
            answer[1] = "lobm";
            answer[2] = "LOBM";
            answer[3] = "엘오비엠";
            answer[4] = "로븜";
            answer[5] = "엘오비앰";
            answer[6] = "로븜";
        }
        if (randp == 2069 || randp == 2070) {
            hints = "ㄹㅇㅌㅇㅇㅅ";
            answer[0] = "Light Year Song";
            answer[1] = "light year song";
            answer[2] = "라이트 이얼 송";
            answer[3] = "라이트이얼송";
            answer[4] = "lightyearsong";
            answer[5] = "라잇트 이얼 송";
        }
        if (randp == 2071 || randp == 2072) {
            hints = "ㄹㅌㅁㅊㄱ";
            answer[0] = "Little Match Girl";
            answer[1] = "little match girl";
            answer[2] = "리틀 매치 걸";
            answer[3] = "리틀매치걸";
            answer[4] = "littlematchgirl";
            answer[5] = "리틀 매치걸";
            answer[6] = "리매걸";
        }
        if (randp == 2073 || randp == 2074) {
            hints = "ㄹㅅㅌ";
            answer[0] = "LOST";
            answer[1] = "lost";
            answer[2] = "로스트";
            answer[3] = "잃다";
            answer[4] = "Lost";
            answer[5] = "러스트";
        }
        if (randp == 2075 || randp == 2076) {
            hints = "ㅁㅅㅌㅍㅅ";
            answer[0] = "M@STERPIECE";
            answer[1] = "m@sterpiece";
            answer[2] = "마스터피스";
            answer[3] = "걸작";
            answer[4] = "Masterpiece";
            answer[5] = "마스터피쓰";
        }
        if (randp == 2077 || randp == 2078) {
            hints = "ㅁㄱㄹ!";
            answer[0] = "MEGARE!";
            answer[1] = "megare";
            answer[2] = "megare!";
            answer[3] = "메가레!";
            answer[4] = "메가레";
            answer[5] = "매가레!";
        }
        if (randp == 2079 || randp == 2080) {
            hints = "ㅁㅌㄷㅅㄴㅇ";
            answer[0] = "Melted Snow";
            answer[1] = "melted snow";
            answer[2] = "멜티드스노우";
            answer[3] = "멜티드 스노우";
            answer[4] = "맬티드스노우";
            answer[5] = "맬티드 스노우";
        }
        if (randp == 2081 || randp == 2082) {
            hints = "ㅁㄹ";
            answer[0] = "Merry";
            answer[1] = "merry";
            answer[2] = "메리";
            answer[3] = "매리";
            answer[4] = "mERRY";
            answer[5] = "MERRY";
        }
        if (randp == 2083 || randp == 2084) {
            hints = "ㅁㄹㅋㄴㅇㅌ";
            answer[0] = "Miracle Night";
            answer[1] = "miracle night";
            answer[2] = "miraclenight";
            answer[3] = "미라클나이트";
            answer[4] = "미라클 나이트";
            answer[5] = "기적밤";
        }
        if (randp == 2085 || randp == 2086) {
            hints = "ㅁㄴ";
            answer[0] = "MOONY";
            answer[1] = "moony";
            answer[2] = "문이";
            answer[3] = "무니";
            answer[4] = "문니";
            answer[5] = "Moony";
        }
        if (randp == 2087 || randp == 2088) {
            hints = "ㅁㅈ♪";
            answer[0] = "MUSIC♪";
            answer[1] = "뮤직";
            answer[2] = "뮤직♪";
            answer[3] = "music";
            answer[4] = "MUSIC";
            answer[5] = "노래";
        }
        if (randp == 2089 || randp == 2090) {
            hints = "ㅁㅇㅅ";
            answer[0] = "my song";
            answer[1] = "mysong";
            answer[2] = "마이송";
            answer[3] = "마이 송";
            answer[4] = "My Song";
            answer[5] = "마이쏭";
        }
        if (randp == 2091 || randp == 2092) {
            hints = "ㅁㅇㅇㅅ";
            answer[0] = "My Wish";
            answer[1] = "my wish";
            answer[2] = "마이 위시";
            answer[3] = "마이위시";
            answer[4] = "마이 위씨";
            answer[5] = "마이위씨";
        }
        if (randp == 2093 || randp == 2094) {
            hints = "ㅇㄹㅁㅇㄴㅌ";
            answer[0] = "ONLY MY NOTE";
            answer[1] = "only my note";
            answer[2] = "온리 마이 노트";
            answer[3] = "온리마이노트";
            answer[4] = "온마노";
            answer[5] = "onlymynote";
        }
        if (randp == 2095 || randp == 2096) {
            hints = "ㅍㄷㅂㅊ";
            answer[0] = "Pon De Beach";
            answer[1] = "pon de beach";
            answer[2] = "폰 데 비치";
            answer[3] = "폰데비치";
            answer[4] = "pondebeach";
            answer[5] = "폰더비치";
        }
        if (randp == 2097 || randp == 2098) {
            hints = "ㅍㅈㅌㅂ!";
            answer[0] = "포지티브!";
            answer[1] = "Positive!";
            answer[2] = "포저티브";
            answer[3] = "포지티브";
            answer[4] = "positive";
            answer[5] = "Positive";
        }
        if (randp == 2099 || randp == 2100) {
            hints = "ㅍㄹㅅㅅㅅㄴㅇㅎㅇㅌ";
            answer[0] = "Princess Snow White";
            answer[1] = "princess snow white";
            answer[2] = "프린세스 스노우 화이트";
            answer[3] = "프린세스스노우화이트";
            answer[4] = "프린새스 스노우 화이트";
            answer[5] = "프린새스스노우화이트";
            answer[6] = "프스화이트";
        }
        if (randp == 2101 || randp == 2102) {
            hints = "ㅍㄹㄹ";
            answer[0] = "Pu-Ru-Ru";
            answer[1] = "pu-ru-ru";
            answer[2] = "pu ru ru";
            answer[3] = "푸루루";
            answer[4] = "푸-루-루";
            answer[5] = "푸 루 루";
        }
        if (randp == 2103 || randp == 2104) {
            hints = "ㄹㄷ!!";
            answer[0] = "READY!!";
            answer[1] = "ready!!";
            answer[2] = "ready";
            answer[3] = "레디";
            answer[4] = "레디!!";
            answer[5] = "Ready!!";
        }
        if (randp == 2105 || randp == 2106) {
            hints = "ㅅㄷㅇㄹㅅ";
            answer[0] = "SHADOWLESS";
            answer[1] = "shadowless";
            answer[2] = "쉐도우리스";
            answer[3] = "쉐도우레스";
            answer[4] = "셰도우리스";
            answer[5] = "셰도우레스";
        }
        if (randp == 2107 || randp == 2108) {
            hints = "ㅅㄱㄹㄹ";
            answer[0] = "Shangri-La";
            answer[1] = "shangri la";
            answer[2] = "샹그리라";
            answer[3] = "샹그릴라";
            answer[4] = "shangrila";
            answer[5] = "샹그리 라";
        }
        if (randp == 2109 || randp == 2110) {
            hints = "ㅅㅇㄴㅅㅁㅇ";
            answer[0] = "shiny smile";
            answer[1] = "shinysmile";
            answer[2] = "샤이니 스마일";
            answer[3] = "샤이니스마일";
            answer[4] = "사이니 스마일";
            answer[5] = "사이니스마일";
        }
        if (randp == 2111 || randp == 2112) {
            hints = "ㅅㄹㅎㅍ!!!";
            answer[0] = "Slapp Happy!!!";
            answer[1] = "slapp happy";
            answer[2] = "slapp happy!!!";
            answer[3] = "슬랩 해피!!!";
            answer[4] = "슬랩 해피";
            answer[5] = "슬랩해피";
        }
        if (randp == 2113 || randp == 2114) {
            hints = "ㅅㅁㅋㅍㄹㅊ";
            answer[0] = "SMOKY FRUITS";
            answer[1] = "smoky fruits";
            answer[2] = "스모키 프루츠";
            answer[3] = "스모키 프루트";
            answer[4] = "스모키프루츠";
            answer[5] = "스모키프루트";
        }
        if (randp == 2115 || randp == 2116) {
            hints = "ㅅㅁㅋㅅㄹ";
            answer[0] = "SMOKY THRILL";
            answer[1] = "smoky thrill";
            answer[2] = "스모키 스릴";
            answer[3] = "스모키스릴";
            answer[4] = "스모키 쓰릴";
            answer[5] = "스모키쓰릴";
        }
        if (randp == 2117 || randp == 2118) {
            hints = "ㅅㅌㅌ!!";
            answer[0] = "START!!";
            answer[1] = "start!!";
            answer[2] = "start";
            answer[3] = "스타트!!";
            answer[4] = "스타트";
            answer[5] = "시작";
        }
        if (randp == 2119 || randp == 2120) {
            hints = "ㅅㅍㅅㅌ";
            answer[0] = "SUPERSTAR";
            answer[1] = "superstar";
            answer[2] = "수퍼스타";
            answer[3] = "슈퍼스타";
            answer[4] = "수퍼스탈";
            answer[5] = "슈퍼스탈";
            answer[6] = "수퍼 스타";
            answer[7] = "슈퍼 스타";
        }
        if (randp == 2121 || randp == 2122) {
            hints = "ㄷㅇㅇㄷㅁㅅㅌ";
            answer[0] = "THE IDOLM@STER";
            answer[1] = "THEIDOLM@STER";
            answer[2] = "더 아이마스터";
            answer[3] = "더아이마스터";
            answer[4] = "the idolm@ster";
            answer[5] = "theidolm@ster";
            answer[6] = "the idolmaster";
        }
        if (randp == 2123 || randp == 2124) {
            hints = "ㄷㅇㅇㅇㅈㅇㅇ!!";
            answer[0] = "The world is all one!!";
            answer[1] = "the world is all one";
            answer[2] = "theworldisallone";
            answer[3] = "더 월드 이즈 올 원!!";
            answer[4] = "더 월드 이즈 올 원";
            answer[5] = "더월드이즈올원";
            answer[6] = "더월드 이즈 올 원";
        }
        if (randp == 2125 || randp == 2126) {
            hints = "ㅌ!!!!!!!!!!!!!";
            answer[0] = "ToP!!!!!!!!!!!!!";
            answer[1] = "top";
            answer[2] = "톱";
            answer[3] = "톱!!!!!!!!!!!!!";
            answer[4] = "탑!!!!!!!!!!!!!";
            answer[5] = "탑";
        }
        if (randp == 2127 || randp == 2128) {
            hints = "ㅌㄹㅇㅇㄷㅅ";
            answer[0] = "TRIAL DANCE";
            answer[1] = "트라이얼 댄스";
            answer[2] = "트라이얼댄스";
            answer[3] = "trial dance";
            answer[4] = "trialdance";
            answer[5] = "트라이알댄스";
        }
        if (randp == 2129 || randp == 2130) {
            hints = "ㅂㅌㄷㅂㄷㄹㅇ!";
            answer[0] = "Vault That Borderline!";
            answer[1] = "볼트 뎃 볼더라인!";
            answer[2] = "볼트 뎃 볼더라인";
            answer[3] = "볼트뎃볼더라인";
            answer[4] = "볼트뎃볼더라인!";
            answer[5] = "vault that borderline";
            answer[6] = "볼트 뎃 보더라인";
            answer[7] = "볼트뎃 보더라인";
            answer[8] = "보더라인";
        }
        if (randp == 2131 || randp == 2132) {
            hints = "ㅂㅂㅋㅇㅇ";
            answer[0] = "VELVET QUIET";
            answer[1] = "velvet quiet";
            answer[2] = "벨벳 콰이엇";
            answer[3] = "벨벳콰이엇";
            answer[4] = "벨벳콰이엣";
            answer[5] = "벨벳 콰이엣";
            answer[6] = "Velvet Quiet";
        }
        if (randp == 2133 || randp == 2134) {
            hints = "ㅇㅈㅅㅌㅅㅌㅌㄷ";
            answer[0] = "We just started";
            answer[1] = "we just started";
            answer[2] = "위 저스트 스타티드";
            answer[3] = "위저스트스타티드";
            answer[4] = "위 저스트 스타트";
            answer[5] = "위저스트스타트";
        }
        if (randp == 2135 || randp == 2136) {
            hints = "ㅈㅇㅂㅍㅊ";
            answer[0] = "zone of fortune";
            answer[1] = "존 오브 포츈";
            answer[2] = "존오브포츈";
            answer[3] = "존오브포춘";
            answer[4] = "존 오브 오춘";
            answer[5] = "운의 구역";
        }
        if (randp == 2137 || randp == 2138) {
            hints = "ㄱㅇ...";
            answer[0] = "곁에...";
            answer[1] = "곁에";
            answer[2] = "겨테...";
            answer[3] = "겨테";
            answer[4] = "곁에서";
            answer[5] = "곁에..";
        }
        if (randp == 2139 || randp == 2140) {
            hints = "ㄱㅇㅎㅂㅇㅅㅇㅇ...";
            answer[0] = "고요한 밤에 소원을...";
            answer[1] = "고요한밤에소원을";
            answer[2] = "고요한밤에소원을...";
            answer[3] = "고요한밤에 소원을...";
            answer[4] = "고요한밤에 소원을";
            answer[5] = "고요한 밤에 소원을";
        }
        if (randp == 2141 || randp == 2142) {
            hints = "ㄱㅂㄹ";
            answer[0] = "곧바로";
            answer[1] = "똑바로";
            answer[2] = "고빠로";
            answer[3] = "まっすぐ";
            answer[4] = "맛스구";
            answer[5] = "마스구";
        }
        if (randp == 2143 || randp == 2144) {
            hints = "ㄱㄴㅇㄴㅁ";
            answer[0] = "그 날의 눈물";
            answer[1] = "그날의 눈물";
            answer[2] = "그날의눈물";
            answer[3] = "그 날 의 눈물";
            answer[4] = "그날 의 눈물";
            answer[5] = "그나래눈물";
        }
        if (randp == 2145 || randp == 2146) {
            hints = "ㄱㄷㄹㄴㅍㄹㅅ";
            answer[0] = "기다리는 프린스";
            answer[1] = "기다리는프린스";
            answer[2] = "기다리는 프린스";
            answer[3] = "待ち受けプリンス";
            answer[4] = "기다리는 푸린스";
            answer[5] = "기다리는푸린스";
        }
        if (randp == 2147 || randp == 2148) {
            hints = "ㄲ";
            answer[0] = "꽃";
            answer[1] = "꽃";
            answer[2] = "꽃";
            answer[3] = "꽃";
            answer[4] = "꽃";
            answer[5] = "꽃";
        }
        if (randp == 2149 || randp == 2150) {
            hints = "ㄴㅈㅁㅎㄴㅅㄴㅂㅇㅇㄷ";
            answer[0] = "날지 못하는 새는 밤에 운다";
            answer[1] = "날지못하는새는밤에운다";
            answer[2] = "날지못하는 새는 밤에 운다";
            answer[3] = "날지 못하는 새는 밤에운다";
            answer[4] = "날지못하는 새는 밤에운다";
            answer[5] = "날지못하는새는 밤에운다";
        }
        if (randp == 2151 || randp == 2152) {
            hints = "ㄴㄴㅁㄹㄷ";
            answer[0] = "너는 멜로디";
            answer[1] = "키미와 메로디";
            answer[2] = "키미와 멜로디";
            answer[3] = "너는멜로디";
            answer[4] = "너는메로디";
            answer[5] = "너는 메로디";
        }
        if (randp == 2153 || randp == 2154) {
            hints = "ㄴㅇ*ㅊㄴ";
            answer[0] = "키미*채널";
            answer[1] = "키미채널";
            answer[2] = "너의 * 채널";
            answer[3] = "너의채널";
            answer[4] = "너의*채널";
            answer[5] = "너의 채널";
        }
        if (randp == 2155 || randp == 2156) {
            hints = "ㄴㄱㄱㄹㄱ";
            answer[0] = "네가 고른 길";
            answer[1] = "네가고른길";
            answer[2] = "네가 고른길";
            answer[3] = "네가 선택한 길";
            answer[4] = "네가 선택한길";
            answer[5] = "네가선택한길";
        }
        if (randp == 2157 || randp == 2158) {
            hints = "ㄴㅇㅁㅈㅊㅅㄱ";
            answer[0] = "눈이 마주친 순간";
            answer[1] = "눈이마주친 순간";
            answer[2] = "눈이마주친순간";
            answer[3] = "눈이 마주친순간";
            answer[4] = "메토메가우";
            answer[5] = "메토메가으";
        }
        if (randp == 2159 || randp == 2160) {
            hints = "ㄷㄱ2010";
            answer[0] = "단결2010";
            answer[1] = "단결이공일공";
            answer[2] = "단결";
            answer[3] = "단결이천십";
            answer[4] = "단결!!";
            answer[5] = "단결";
        }
        if (randp == 2161 || randp == 2162) {
            hints = "ㄷㅇㅂㄲ";
            answer[0] = "달의 벚꽃";
            answer[1] = "달의벚꽃";
            answer[2] = "다레벚꽃";
            answer[3] = "달의버꽃";
            answer[4] = "달의법꽃";
            answer[5] = "달의 법꽃";
        }
        if (randp == 2163 || randp == 2164) {
            hints = "ㄷㄹㅇㅂㅎㅁㅎㅅ!";
            answer[0] = "더 라이브 혁명하SHOW!";
            answer[1] = "혁명데쇼";
            answer[2] = "더라이브혁명하쇼!";
            answer[3] = "더라이브혁명데쇼!";
            answer[4] = "더 라이브 혁명 데쇼!";
            answer[5] = "더라이브혁명데쇼";
            answer[6] = "더 라이브 혁명데show";
            answer[7] = "혁명하쇼";
            answer[8] = "데쇼";
        }
        if (randp == 2165 || randp == 2166) {
            hints = "ㄷㅅㄹㅇㄱㅇ";
            answer[0] = "두 사람의 기억";
            answer[1] = "두사람의기억";
            answer[2] = "두사람의 기억";
            answer[3] = "두 사람의기억";
            answer[4] = "두명의 기억";
            answer[5] = "두 명의 기억";
        }
        if (randp == 2167 || randp == 2168) {
            hints = "ㄷㅂ";
            answer[0] = "등불";
            answer[1] = "등불";
            answer[2] = "등불";
            answer[3] = "등불";
            answer[4] = "좆경";
            answer[5] = "등불";
        }
        if (randp == 2169 || randp == 2170) {
            hints = "ㄸㄷㅎㄴ";
            answer[0] = "따듯한 눈";
            answer[1] = "따듯한눈";
            answer[2] = "뜨듯한 눈";
            answer[3] = "뜨듯한눈";
            answer[4] = "따뜻한 눈";
            answer[5] = "따뜻한눈";
        }
        if (randp == 2171 || randp == 2172) {
            hints = "ㄸㅂㅈ";
            answer[0] = "또 보자";
            answer[1] = "또보자";
            answer[2] = "떠보자 ㅋㅋ";
            answer[3] = "또보자";
            answer[4] = "또 보쥬";
            answer[5] = "또 보죠";
        }
        if (randp == 2173 || randp == 2174) {
            hints = "ㄹㅁㄴㅅㅊㅊ";
            answer[0] = "라무네색 청춘";
            answer[1] = "라무네색청춘";
            answer[2] = "라무내색 청춘";
            answer[3] = "라무내색청춘";
            answer[4] = "라무네색청츈";
            answer[5] = "라무네색청츤";
        }
        if (randp == 2175 || randp == 2176) {
            hints = "ㄹㅇㅅㅌㄹㅇㅌㅍㄹㅅ";
            answer[0] = "로열 스트레이트 플러쉬";
            answer[1] = "로열스트레이트플러쉬";
            answer[2] = "로얄 스트레이트 플러쉬";
            answer[3] = "로얄스트레이트플러쉬";
            answer[4] = "로열 스트레이트 플러시";
            answer[5] = "로열스트레이트플러시";
        }
        if (randp == 2177 || randp == 2178) {
            hints = "ㄹㅈㄹ";
            answer[0] = "리조라";
            answer[1] = "레조라";
            answer[2] = "래조라";
            answer[3] = "리조레";
            answer[4] = "리조래";
            answer[5] = "rizora";
        }
        if (randp == 2179 || randp == 2180) {
            hints = "ㅁㄹㅇㄴㅌㅇㅁㅇ";
            answer[0] = "마리오네트의 마음";
            answer[1] = "마리오네트의마음";
            answer[2] = "마리오내트의 마음";
            answer[3] = "마리오내트의마음";
            answer[4] = "마리오네트의 마음";
            answer[5] = "marionette no kokoro";
            answer[6] = "marionette의 마음";
        }
        if (randp == 2181 || randp == 2182) {
            hints = "ㅁㅇㅅ";
            answer[0] = "맑음색";
            answer[1] = "말금색";
            answer[2] = "맑음색";
            answer[3] = "맑음색";
            answer[4] = "맑음색";
            answer[5] = "맑음색";
        }
        if (randp == 2183 || randp == 2184) {
            hints = "ㅁㅂㅇㄹㄷㅁㅎㅅㅇㅇㅇ";
            answer[0] = "몇 번이라도 말할 수 있어요";
            answer[1] = "몇번이라도말할수있어요";
            answer[2] = "몇번이라도 말할 수 있어요";
            answer[3] = "몇번이라도 말할수 있어요";
            answer[4] = "몇 번이라도 말할수 있어요";
            answer[5] = "몇번이라도말할수 있어요";
        }
        if (randp == 2185 || randp == 2186) {
            hints = "ㅁㅈㄱㅅㅁㄹㅋ";
            answer[0] = "무지개색 미라클";
            answer[1] = "무지개색미라클";
            answer[2] = "무지개섹미라클";
            answer[3] = "무지개섹 미라클";
            answer[4] = "무지게색 미라클";
            answer[5] = "무지게색미라클";
        }
        if (randp == 2187 || randp == 2188) {
            hints = "ㅁㅈㄱㅇㄷㅅㅌㄴㅇㅅ";
            answer[0] = "무지개의 데스티네이션";
            answer[1] = "무지개의데스티네이션";
            answer[2] = "무지개의 대스티네이션";
            answer[3] = "무지개의대스티네이션";
            answer[4] = "무지개의 목적지";
            answer[5] = "무지개의목적지";
        }
        if (randp == 2189 || randp == 2190) {
            hints = "ㅁㅈㅁㅇㄷ";
            answer[0] = "미주 Mind";
            answer[1] = "미주 mind";
            answer[2] = "미주Mind";
            answer[3] = "미주mind";
            answer[4] = "미주 마인드";
            answer[5] = "미주마인드";
            answer[6] = "미주 마인드 ";
        }
        if (randp == 2191 || randp == 2192) {
            hints = "ㅂㄹㅂㅈ";
            answer[0] = "바라봐줘";
            answer[1] = "바라바줘";
            answer[2] = "봐라바줘";
            answer[3] = "봐라봐줘";
            answer[4] = "바라봐줘";
            answer[5] = "바라봐줘";
        }
        if (randp == 2193 || randp == 2194) {
            hints = "ㅂㅎㅈㅇㄴㄱ";
            answer[0] = "변하지 않는 것";
            answer[1] = "변하지 않는것";
            answer[2] = "변하지않는것";
            answer[3] = "변하지않는 것";
            answer[4] = "변하지 않는 것";
            answer[5] = "변하지 않는 것";
        }
        if (randp == 2195 || randp == 2196) {
            hints = "ㅂㅇㅇ,ㅇㄹ";
            answer[0] = "봄이여, 오라";
            answer[1] = "봄이여 오라";
            answer[2] = "봄이여,오라";
            answer[3] = "봄이여오라";
            answer[4] = "봄이여,오라";
            answer[5] = "봄이여, 오라";
        }
        if (randp == 2197 || randp == 2198) {
            hints = "ㅂㄲㅇㅅ";
            answer[0] = "불꽃의 새";
            answer[1] = "불꽃의새";
            answer[2] = "불꽃의새";
            answer[3] = "불꼬츼새";
            answer[4] = "불꽃에새";
            answer[5] = "불꽃에 새";
        }
        if (randp == 2199 || randp == 2200) {
            hints = "ㅂㄹㅅㅌ";
            answer[0] = "블루 스타";
            answer[1] = "블루스타";
            answer[2] = "블루스타";
            answer[3] = "브루스타";
            answer[4] = "브루 스타";
            answer[5] = "블루 스타";
        }
        if (randp == 2201 || randp == 2202) {
            hints = "ㅂㅈㄴㄹ";
            answer[0] = "비죠나리";
            answer[1] = "비죠나리";
            answer[2] = "비죠나리";
            answer[3] = "비죠나리";
            answer[4] = "비죠나리";
            answer[5] = "비죠나리";
        }
        if (randp == 2203 || randp == 2204) {
            hints = "ㅂ";
            answer[0] = "빛";
            answer[1] = "빛";
            answer[2] = "빛";
            answer[3] = "빛";
            answer[4] = "빛";
            answer[5] = "빛";
        }
        if (randp == 2205 || randp == 2206) {
            hints = "ㅅㅂ";
            answer[0] = "세빙";
            answer[1] = "세빙";
            answer[2] = "세빙";
            answer[3] = "세빙";
            answer[4] = "세빙";
            answer[5] = "새빙";
        }
        if (randp == 2207 || randp == 2208) {
            hints = "ㅅㅅㅌㅇㅍ";
            answer[0] = "섹시 타이푼";
            answer[1] = "섹시타이푼";
            answer[2] = "색시타이푼";
            answer[3] = "색시타이푼";
            answer[4] = "섹시태풍";
            answer[5] = "섹시 태풍";
        }
        if (randp == 2209 || randp == 2210) {
            hints = "ㅅㄴ";
            answer[0] = "소나";
            answer[1] = "소나";
            answer[2] = "소나";
            answer[3] = "소나";
            answer[4] = "소나";
            answer[5] = "%기잇";
        }
        if (randp == 2211 || randp == 2212) {
            hints = "ㅅㄴㅇㅋㄸㅇㅍㅇㄹ!!";
            answer[0] = "소녀여 큰 뜻을 품어라!!";
            answer[1] = "소녀여 큰뜻을 품어라!!";
            answer[2] = "소녀여큰뜻을품어라!!";
            answer[3] = "소녀여 큰 뜻을 품어라";
            answer[4] = "소녀여 큰뜻을 품어라";
            answer[5] = "소녀여큰뜻을품어라";
            answer[6] = "오토메여 큰 뜻을 품어라";
        }
        if (randp == 2213 || randp == 2214) {
            hints = "ㅅㅇㅎㄱㅈ";
            answer[0] = "소원 한가지";
            answer[1] = "소원한가지";
            answer[2] = "소원히토츠";
            answer[3] = "소원 히토츠";
            answer[4] = "그래 말해봐";
            answer[5] = "소원 한가지";
        }
        if (randp == 2215 || randp == 2216) {
            hints = "ㅅㅌㅌㅅㅌ";
            answer[0] = "스타→트 스타→";
            answer[1] = "스타트 스타";
            answer[2] = "스타트스타";
            answer[3] = "스타토스타";
            answer[4] = "스타토 스타";
            answer[5] = "스타 트 스타";
        }
        if (randp == 2217 || randp == 2218) {
            hints = "ㅅㅅㅁ!!";
            answer[0] = "신 SUMMER!!";
            answer[1] = "신 서머!!";
            answer[2] = "신 서머";
            answer[3] = "신summer";
            answer[4] = "신서머";
            answer[5] = "신서머!!";
        }
        if (randp == 2219 || randp == 2220) {
            hints = "ㅅㄴㅇㅂㅅㄷㅇ";
            answer[0] = "신님의 Birthday";
            answer[1] = "신님의Birthday";
            answer[2] = "신님의 birthday";
            answer[3] = "신님의birthday";
            answer[4] = "신님의 버스데이";
            answer[5] = "신님의버스데이";
        }
        if (randp == 2221 || randp == 2222) {
            hints = "ㅆㅇㅌㄴㄱㅈ";
            answer[0] = "싹이 트는 계절";
            answer[1] = "싹이 트는계절";
            answer[2] = "싹이트는 계절";
            answer[3] = "싹이트는계절";
            answer[4] = "싸기 트는 계절";
            answer[5] = "싹이 트는 게절";
        }
        if (randp == 2223 || randp == 2224) {
            hints = "ㅇㅁㅌㄹㅅ";
            answer[0] = "아마테라스";
            answer[1] = "아마태라스";
            answer[2] = "그거 아니다";
            answer[3] = "오해하지마라";
            answer[4] = "나루토 그거 아니라고";
            answer[5] = "사실이 아닙니다";
        }
        if (randp == 2225 || randp == 2226) {
            hints = "ㅇㅇㅁㅅㅌㄱ!";
            answer[0] = "아이 MUST GO!";
            answer[1] = "아이 must go!";
            answer[2] = "아이 머스트 고!!";
            answer[3] = "아이 머스트 고";
            answer[4] = "아이머스트고";
            answer[5] = "아이mustgo";
        }
        if (randp == 2227 || randp == 2228) {
            hints = "ㅇㄴㅇㄱㅅㅎ";
            answer[0] = "안녕에 감사해";
            answer[1] = "안녕에감사해";
            answer[2] = "안녕에 감사해";
            answer[3] = "안녕에감사해";
            answer[4] = "나도 안녕";
            answer[5] = "너도 안녕";
        }
        if (randp == 2229 || randp == 2230) {
            hints = "ㅇㅅ";
            answer[0] = "약속";
            answer[1] = "이 장면이";
            answer[2] = "정말 눈물이";
            answer[3] = "나올 수 밖에";
            answer[4] = "없는 부분";
            answer[5] = "이거든요";
        }
        if (randp == 2231 || randp == 2232) {
            hints = "ㅇㄹㅇㅅㅈ";
            answer[0] = "어른의 시작";
            answer[1] = "어른의시작";
            answer[2] = "어덜트의 시작";
            answer[3] = "어덜트의시작";
            answer[4] = "어르늬 시작";
            answer[5] = "어르늬시작";
        }
        if (randp == 2233 || randp == 2234) {
            hints = "ㅇㄷ";
            answer[0] = "업뎃";
            answer[1] = "없뎃";
            answer[2] = "업댓";
            answer[3] = "업뎃";
            answer[4] = "업데";
            answer[5] = "업뎃";
        }
        if (randp == 2235 || randp == 2236) {
            hints = "ㅇㅅ";
            answer[0] = "연심";
            answer[1] = "연심";
            answer[2] = "연심";
            answer[3] = "연심";
            answer[4] = "연심";
            answer[5] = "두유두유";
        }
        if (randp == 2237 || randp == 2238) {
            hints = "ㅇㅇㅅㅋㄹㅇㅅ";
            answer[0] = "연애 서큘레이션";
            answer[1] = "연애서큘레이션";
            answer[2] = "연애서큘";
            answer[3] = "연서큘";
            answer[4] = "이오리쨩";
            answer[5] = "%기잇";
        }
        if (randp == 2239 || randp == 2240) {
            hints = "ㅇㄹㄷㅇㄱㅅㅇㄱㅈ?";
            answer[0] = "우리들은 계속...인거지?";
            answer[1] = "우리들은 계속 인거지?";
            answer[2] = "데쇼";
            answer[3] = "우리들은계속인거지?";
            answer[4] = "우리들은 계속 그렇지?";
            answer[5] = "우리들은 계속 인거죠?";
            answer[6] = "우리는 계속 인거지?";
            answer[7] = "우리데쇼";
        }
        if (randp == 2241 || randp == 2242) {
            hints = "ㅇㅇㅂ";
            answer[0] = "웃어봐";
            answer[1] = "웃어봐";
            answer[2] = "웃어봐";
            answer[3] = "웃어봐";
            answer[4] = "우서봐";
            answer[5] = "웃어보라고";
        }
        if (randp == 2243 || randp == 2244) {
            hints = "ㅇㄱㅂㄲㅂㅌ";
            answer[0] = "일곱빛깔 버튼";
            answer[1] = "일곱빛깔버튼";
            answer[2] = "나나이로 버튼";
            answer[3] = "나나이로버튼";
            answer[4] = "일곱빛색 버튼";
            answer[5] = "일곱빛색버튼";
        }
        if (randp == 2245 || randp == 2246) {
            hints = "ㅈㅅㄹㅅㅌㅌ";
            answer[0] = "자신 REST@RT";
            answer[1] = "자신 rest@rt";
            answer[2] = "자신rest@rt";
            answer[3] = "지분rest@rt";
            answer[4] = "지분 리스타트";
            answer[5] = "자신 리스타트";
            answer[6] = "지분리스타트";
        }
        if (randp == 2247 || randp == 2248) {
            hints = "ㅈㅈㄱ";
            answer[0] = "자전거";
            answer[1] = "자전거";
            answer[2] = "자전거";
            answer[3] = "자전거";
            answer[4] = "자전거";
            answer[5] = "스키다";
        }
        if (randp == 2249 || randp == 2250) {
            hints = "ㅈㅈㄴㄱㅈ";
            answer[0] = "잠자는 공주";
            answer[1] = "잠자는공주";
            answer[2] = "잠자는 공주";
            answer[3] = "잠자는 프린세스";
            answer[4] = "잠자는 공주";
            answer[5] = "굳 슬립~";
        }
        if (randp == 2251 || randp == 2252) {
            hints = "ㅈㅂㄸ!!";
            answer[0] = "준비 땅!!";
            answer[1] = "준비땅!!";
            answer[2] = "준비 땅";
            answer[3] = "준비땅";
            answer[4] = "준비  땅";
            answer[5] = "준비당";
        }
        if (randp == 2253 || randp == 2254) {
            hints = "ㅈㄱㅅㅈㅇㅇ";
            answer[0] = "지금 시작이야";
            answer[1] = "지금시작이야";
            answer[2] = "이마 스타트다요";
            answer[3] = "이마 스타트";
            answer[4] = "지금 시작이야";
            answer[5] = "지금시작이야";
        }
        if (randp == 2255 || randp == 2256) {
            hints = "ㅊㅂㅎㄱㄴㄱㅎㄱ";
            answer[0] = "차분하게 느긋하게";
            answer[1] = "차분하게느긋하게";
            answer[2] = "차분하게  느긋하게";
            answer[3] = "느긋하게 차분하게";
            answer[4] = "느긋하게차분하게";
            answer[5] = "느긋하게  차분하게";
        }
        if (randp == 2257 || randp == 2258) {
            hints = "ㅊㅇㅇㅅㅈ";
            answer[0] = "추억의 시작";
            answer[1] = "추억의시작";
            answer[2] = "추어긔 시작";
            answer[3] = "추어긔시작";
            answer[4] = "추억의  시작";
            answer[5] = "추억의 시작 ";
        }
        if (randp == 2259 || randp == 2260) {
            hints = "ㅋㅌㅋ";
            answer[0] = "커튼콜";
            answer[1] = "커튼콜";
            answer[2] = "진 궁";
            answer[3] = "커튼콜";
            answer[4] = "커튼 콜";
            answer[5] = "커 튼콜";
        }
        if (randp == 2261 || randp == 2262) {
            hints = "ㅋㅍㅎㅈㅇㅇㅁㅈ";
            answer[0] = "커피 한 잔의 이미지";
            answer[1] = "커피 한잔의 이미지";
            answer[2] = "커피한잔의 이미지";
            answer[3] = "커피 한잔의이미지";
            answer[4] = "커피한 잔의 이미지";
            answer[5] = "커피한잔의이미지";
        }
        if (randp == 2263 || randp == 2264) {
            hints = "ㄷㄱ!ㅂㅍㅇㅇㄱ";
            answer[0] = "두근! 뱀파이어 걸";
            answer[1] = "큥! 뱀파이어 걸";
            answer[2] = "두근!뱀파이어걸";
            answer[3] = "큥!뱀파이어걸";
            answer[4] = "큥! 뱀파이어걸";
            answer[5] = "두근! 뱀파이어걸";
            answer[6] = "큥 뱀파이어걸";
            answer[7] = "두근 뱀파이어걸";
            answer[8] = "큥 뱀파이어 걸";
        }
        if (randp == 2265 || randp == 2266) {
            hints = "ㅋㄹㅁㅋㄹㄹ";
            answer[0] = "키라메키라리";
            answer[1] = "반짝 반짝임";
            answer[2] = "반짝반짝임";
            answer[3] = "반짝 반짝 반짝임";
            answer[4] = "반짝 반짝반짝임";
            answer[5] = "반짝반짝";
            answer[6] = "키라매키라리";
        }
        if (randp == 2267 || randp == 2268) {
            hints = "ㅌㅇㅇㅈㄹㅅ";
            answer[0] = "태양의 젤러시";
            answer[1] = "태양의젤러시";
            answer[2] = "태양의 잴러시";
            answer[3] = "태양의잴러시";
            answer[4] = "태양의 젤러시 ";
            answer[5] = "태양의젤러시 ";
        }
        if (randp == 2269 || randp == 2270) {
            hints = "ㅍㄹㅅ";
            answer[0] = "파랑새";
            answer[1] = "파랑새";
            answer[2] = "파랑새 ";
            answer[3] = "파랑새  ";
            answer[4] = " 파랑새";
            answer[5] = " 파랑새 ";
        }
        if (randp == 2271 || randp == 2272) {
            hints = "ㅎㄷㅎㄷㅍㅊ☆";
            answer[0] = "흔들흔들 퓨처☆";
            answer[1] = "후루후루 퓨처";
            answer[2] = "흔들흔들퓨처";
            answer[3] = "후루후루퓨처";
            answer[4] = "흔들흔들 퓨처";
            answer[5] = "푸르푸르 퓨처";
            answer[6] = "프루프루 퓨처";
            answer[7] = "퓨르퓨르 퓨처";
        }
        if (randp == 2273 || randp == 2274) {
            hints = "ㅍㄹㅅㄴㄹㅂ!";
            answer[0] = "플라 소닉 러브!";
            answer[1] = "플라소닉러브!";
            answer[2] = "플라 소닉 러브";
            answer[3] = "플라소닉러브";
            answer[4] = "플라소닉 러브";
            answer[5] = "플라 소닉러브";
        }
        if (randp == 2275 || randp == 2276) {
            hints = "ㅍㅍㅋㄹㄹㅋ";
            answer[0] = "피피카 리리카";
            answer[1] = "피피카리리카";
            answer[2] = "피피카리리카";
            answer[3] = "피피카 리리카 ";
            answer[4] = "피피카리리카 ";
            answer[5] = " 피피카리리카";
        }
        if (randp == 2277 || randp == 2278) {
            hints = "ㅎㄴ";
            answer[0] = "하늘";
            answer[1] = "소라";
            answer[2] = "하늘";
            answer[3] = "소라";
            answer[4] = "하늘";
            answer[5] = "소라";
        }
        if (randp == 2279 || randp == 2280) {
            hints = "ㅎㄲ";
            answer[0] = "함께";
            answer[1] = "잇쇼";
            answer[2] = "잇쇼니";
            answer[3] = "함께";
            answer[4] = "함께";
            answer[5] = "함깨";
        }
        if (randp == 2281 || randp == 2282) {
            hints = "ㅎㅂ";
            answer[0] = "행복";
            answer[1] = "행복";
            answer[2] = "행복";
            answer[3] = " 행복";
            answer[4] = "헹복";
            answer[5] = "행복 ";
        }
        if (randp == 2283 || randp == 2284) {
            hints = "ㅎㄹ";
            answer[0] = "헬로";
            answer[1] = "핼로";
            answer[2] = "헬로";
            answer[3] = "헬로 ";
            answer[4] = " 헬로";
            answer[5] = " 헬로 ";
        }
        if (randp == 2285 || randp == 2286) {
            hints = "ㅎㅂㅇㅇㅂㅇ";
            answer[0] = "홍백응원V";
            answer[1] = "홍백응원브이";
            answer[2] = "홍백응원";
            answer[3] = "홍백응원 브이";
            answer[4] = "홍백응원 V";
            answer[5] = "홍백응원 ";
        }
        if (randp == 2287 || randp == 2288) {
            hints = "ㅁㅈㄷ...!?";
            answer[0] = "마지데...!?";
            answer[1] = "마지데!?";
            answer[2] = "마지데";
            answer[3] = "MAGIC DAY!?";
            answer[4] = "magic day";
            answer[5] = "Magic Day";
        }
        if (randp == 2289 || randp == 2290) {
            hints = "ㅈㅇㅈㅈ";
            answer[0] = "작은 존재";
            answer[1] = "작은존재";
            answer[2] = "작은 존재";
            answer[3] = "작은 존재 ";
            answer[4] = " 작은 존재";
            answer[5] = "작존";
        }
        if (randp == 2291 || randp == 2292) {
            hints = "ㅅㄱㄹ-ㄹ";
            answer[0] = "Shangri-La";
            answer[1] = "shangri-la";
            answer[2] = "Shangri La";
            answer[3] = "shangri la";
            answer[4] = "샹그리라";
            answer[5] = "샹그리-라";
            answer[6] = "샹그리 라";
        }if (randp == 2293 || randp == 2294) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 2295 || randp == 2296) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 2297 || randp == 2298) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 2299 || randp == 2300) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }if (randp == 2301 || randp == 2302) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }
    }
    if (true) { //기타 셀렉터
        if (randp == 3001 || randp == 3002) {
            hints = "ㅍㅅㅌㅋ";
            answer[0] = "1st Call";
            answer[1] = "1st call";
            answer[2] = "first call";
            answer[3] = "First Call";
            answer[4] = "퍼스트 콜";
            answer[5] = "퍼스트콜";
            answer[6] = "firstcall";
            answer[7] = "1stcall";
        }
        if (randp == 3003 || randp == 3004) {
            hints = "ㅇㅂㄹㅇㅈ";
            answer[0] = "EVER RISING";
            answer[1] = "ever rising";
            answer[2] = "에버 라이징";
            answer[3] = "에버라이징";
            answer[4] = "애버 라이징";
            answer[5] = "애버라이징";
            answer[6] = "everrising";
            answer[7] = "Ever Rising";
        }
        if (randp == 3005 || randp == 3006) {
            hints = "ㄱㄹㅌㅌㄷ";
            answer[0] = "GR@TITUDE";
            answer[1] = "gr@titude";
            answer[2] = "그레티튜드";
            answer[3] = "그래티튜드";
            answer[4] = "감사";
            answer[5] = "Gr@titude";
        }
        if (randp == 3007 || randp == 3008) {
            hints = "ㅍㄹㅋㅅㅌ!!!!!";
            answer[0] = "POPLINKS TUNE!!!!!";
            answer[1] = "POPLINKS TUNE";
            answer[2] = "poplinks tune";
            answer[3] = "팝 링크스 튠";
            answer[4] = "팝 링크스 튠!!!!!";
            answer[5] = "팝링크스튠";
            answer[6] = "poplinks tune!!!!!";
            answer[7] = "팝링크스 튠";
            answer[8] = "팝 링크스튠";
        }
        if (randp == 3009 || randp == 3010) {
            hints = "ㅅㅅ!";
            answer[0] = "SESSION!";
            answer[1] = "session!";
            answer[2] = "SESSION";
            answer[3] = "session";
            answer[4] = "세션!";
            answer[5] = "세션";
            answer[6] = "Session";
        }
        if (randp == 3011 || randp == 3012) {
            hints = "ㅁㅂㅇㄱㅇㅈ";
            answer[0] = "몇 번이고 웃자";
            answer[1] = "몇번이고 웃자";
            answer[2] = "몇번이고웃자";
            answer[3] = "몇 번이고웃자";
            answer[4] = "난도데모 와라오";
            answer[5] = "난도데모";
        }
        if (randp == 3013 || randp == 3014) {
            hints = "ㅇㄹㅇㅂ!!";
            answer[0] = "여름의 Bang!!";
            answer[1] = "여름의 bang!!";
            answer[2] = "여름의 bang";
            answer[3] = "여름의 뱅!!";
            answer[4] = "나츠뱅";
            answer[5] = "여름의 뱅";
            answer[6] = "나츠 뱅";
            answer[7] = "여름의뱅";
        }
        if (randp == 3015 || randp == 3016) {
            hints = "ㅂㅇㅈ";
            answer[0] = "VOY@GER";
            answer[1] = "voy@ger";
            answer[2] = "보야져";
            answer[3] = "보야졀";
            answer[4] = "보야절";
            answer[5] = "보에져";
        }
        if (randp == 3017 || randp == 3018) {
            hints = "ㅅㄹㅎㅈㅇㅈㅂ~ㅈㅂㅇㅈㅇㅇㅁ~";
            answer[0] = "사랑해줘의 주박~Je vous aime~";
            answer[1] = "Je vous aime";
            answer[2] = "je vous aime";
            answer[3] = "사랑해줘의주박";
            answer[4] = "사랑해줘의 주박";
            answer[5] = "사랑해줘의 주박 ~Je vous aime~";
            answer[6] = "사랑해줘의 주박 ~je vous aime~";
        }
        if (randp == 3019 || randp == 3020) {
            hints = "ㅈㄹ★ㄷㄹㅁㄱㅈ";
            answer[0] = "전력★드리밍걸즈";
            answer[1] = "전력 드리밍걸즈";
            answer[2] = "전력드리밍걸즈";
            answer[3] = "전력드리밍 걸즈";
            answer[4] = "전력 드리밍 걸즈";
            answer[5] = "전력 드리밍걸";
            answer[6] = "전력 드리밍 걸";
        }
        if (randp == 3021 || randp == 3022) {
            hints = "ㅇㅇㄷ☆ㅎㅌ";
            answer[0] = "IDOL☆HEART";
            answer[1] = "IDOL HEART";
            answer[2] = "IDOLHEART";
            answer[3] = "idol heart";
            answer[4] = "Idol Heart";
            answer[5] = "idolheart";
            answer[6] = "아이돌 하트";
            answer[7] = "아이돌하트";
        }
        if (randp == 3023 || randp == 3024) {
            hints = "ㅋㅇㅇㅇㅈ";
            answer[0] = "KAWAII 워즈";
            answer[1] = "KAWAII워즈";
            answer[2] = "kawaii 워즈";
            answer[3] = "KAWAII WARS";
            answer[4] = "카와이 워즈";
            answer[5] = "카와이워즈";
        }
        if (randp == 3025 || randp == 3026) {
            hints = "ㄷㅅㄷㅅㄷㅅ";
            answer[0] = "댄스 댄스 댄스";
            answer[1] = "덴스 덴스 덴스";
            answer[2] = "댄스댄스댄스";
            answer[3] = "덴스덴스덴스";
            answer[4] = "댄댄댄";
            answer[5] = "덴덴덴";
        }
        if (randp == 3027 || randp == 3028) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }
        if (randp == 3029 || randp == 3030) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }
        if (randp == 3031 || randp == 3032) {
            hints = "";
            answer[0] = "";
            answer[1] = "";
            answer[2] = "";
            answer[3] = "";
            answer[4] = "";
            answer[5] = "";
        }
    }
    var inputText = document.getElementById("input").value; // 입력 값 변수 선언
    //특수 이스터에그 모드 설정
    메인1 = document.getElementById("mainTitle1");
    메인2 = document.getElementById("mainTitle2");
    해설 = document.getElementById("answer");
    본가테그 = document.getElementById("tag1");
    밀리테그 = document.getElementById("tag2");
    데레테그 = document.getElementById("tag3");
    샤니테그 = document.getElementById("tag4");
    기타테그 = document.getElementById("tag5");
    팁창 = document.getElementById("tips");
    바탕화면 = document.body;
    카드바탕 = document.getElementById("card-body");
    뮤직박스 = document.getElementById("music_box");
    이미지 = document.getElementById("image1");
    if (inputText == "") { // 입력이 빈칸일 때 되돌림
        해설.textContent =
            "빈칸에 답을 작성해주세요.";
        return 0;
    } else if (inputText == "vivid_rabbit") { // 모치즈키 다크모드
        메인1.style.backgroundColor = "#7E6CA8";
        메인2.style.backgroundColor = "#7E6CA8";
        해설.style.backgroundColor = "#7E6CA8";
        본가테그.style.color = "white";
        밀리테그.style.color = "white";
        데레테그.style.color = "white";
        샤니테그.style.color = "white";
        기타테그.style.color = "white";
        팁창.style.background = "";
        팁창.style.color = "#ffffff59";
        바탕화면.style.backgroundColor = "#333333";
        카드바탕.style.backgroundColor = "#333333";
        뮤직박스.style.background = "#a88db1";
        document.getElementById("card-body").style.borderColor = "#333333"; // 테두리?
        이미지.src =
            "http://drive.google.com/uc?export=view&id=1m9BSsh_Is5FKxXdowyFHwh-l_dRjpaU8";
        alert("<vivid_rabbit>로 접속합니다.");
        document.getElementById("input").value = "";
        return 0;
    } else if (inputText == "7272") { // 키사라기 블루모드
        메인1.style.backgroundColor = "#2743D2";
        메인2.style.backgroundColor = "#2743D2";
        해설.style.backgroundColor = "#2743D2";
        본가테그.style.color = "black";
        밀리테그.style.color = "black";
        데레테그.style.color = "black";
        샤니테그.style.color = "black";
        기타테그.style.color = "black";
        팁창.style.background = "";
        팁창.style.color = "#00000059";
        바탕화면.style.backgroundColor = "#D3D0F7";
        카드바탕.style.backgroundColor = "#D3D0F7";
        뮤직박스.style.background = "#a0a5fe";
        이미지.src =
            "http://drive.google.com/uc?export=view&id=1U0HfH1BiT9UOnYLHlNz8875D8e9J8VD-";
        alert("?? : 작은 건 나쁜 것이 아닌, 미래 지향적이고 실용적인 것이다");
        document.getElementById("input").value = "";
        return 0;
    } else if (inputText == "/reset") { // 기본으로 되돌리기
        if(hardmode){
            hardmode = 0;
            alert("챌린지모드를 종료합니다.");
        }
        document.getElementById("hintButton").style.visibility = "";
        document.getElementById("surButton").style.visibility = "";
        document.getElementById("linkButton").style.visibility = "";
        메인1.style.backgroundColor = "#16033d";
        메인2.style.backgroundColor = "#16033d";
        해설.style.backgroundColor = "#16033d";
        본가테그.style.color = "black";
        밀리테그.style.color = "black";
        데레테그.style.color = "black";
        샤니테그.style.color = "black";
        기타테그.style.color = "black";
        팁창.style.background = "";
        팁창.style.color = "#00000059";
        바탕화면.style.backgroundColor = "white";
        뮤직박스.style.background = "#d0d0d0";
        카드바탕.style.backgroundColor = "white";
        이미지.src =
            "http://drive.google.com/uc?export=view&id=1YJPk_gbfoiT_95Rv9km-uhK03nqHsPGr";
        document.getElementById("input").value = "";
        return 0;
    } else if (inputText == "nano") { // 호시이 그린모드
        메인1.style.backgroundColor = "#B5DF50";
        메인2.style.backgroundColor = "#B5DF50";
        해설.style.backgroundColor = "#B5DF50";
        본가테그.style.color = "black";
        밀리테그.style.color = "black";
        데레테그.style.color = "black";
        샤니테그.style.color = "black";
        기타테그.style.color = "black";
        팁창.style.background = "";
        팁창.style.color = "#00000059";
        바탕화면.style.backgroundColor = "#fffcce";
        카드바탕.style.backgroundColor = "#fffcce";
        뮤직박스.style.background = "#e2f39a";
        이미지.src =
            "http://drive.google.com/uc?export=view&id=1tNdUlrWk4s9DGXQw1mG1nP13Jm2P5MKN";
        alert("사실 초록색인거나노");
        document.getElementById("input").value = "";
        return 0;
    } else if (inputText == "143cm") { // 바바 핑크모드
        메인1.style.backgroundColor = "#F1BECB";
        메인2.style.backgroundColor = "#F1BECB";
        해설.style.backgroundColor = "#F1BECB";
        본가테그.style.color = "black";
        밀리테그.style.color = "black";
        데레테그.style.color = "black";
        샤니테그.style.color = "black";
        기타테그.style.color = "black";
        팁창.style.background = "";
        팁창.style.color = "#00000059";
        바탕화면.style.backgroundColor = "#fce2f5";
        카드바탕.style.backgroundColor = "#fce2f5";
        뮤직박스.style.background = "#e6d7db";
        이미지.src =
            "http://drive.google.com/uc?export=view&id=1KBG3i3_qWh5vSmsYC3wm6dAMRgA4RVPV";
        alert("합법(?) 섹시레이디 소환");
        document.getElementById("input").value = "";
        return 0;
    } else if (inputText == "ryamu") { // 유메미 모드
        메인1.style.backgroundColor = "#E79BDC";
        메인2.style.backgroundColor = "#E79BDC";
        해설.style.backgroundColor = "#6cedee";
        본가테그.style.color = "black";
        밀리테그.style.color = "black";
        데레테그.style.color = "black";
        샤니테그.style.color = "black";
        기타테그.style.color = "black";
        팁창.style.background = "";
        팁창.style.color = "#ff4f4f59";
        바탕화면.style.backgroundColor = "#f1ffff";
        카드바탕.style.backgroundColor = "#f1ffff";
        뮤직박스.style.background = "#fae3ed";
        이미지.src =
            "http://drive.google.com/uc?export=view&id=1avH9NZiHmd8nSR5yzNtHUDC5275KYaAc";
        alert("?? : 오타쿠 개꿀이네 ㅋㅋ");
        document.getElementById("input").value = "";
        return 0;
    } else if (inputText == "//" && hardmode == 0) { // 힌트 받기 커맨드
        if (hints == "") {
            document.getElementById("answer").textContent =
                "노래 받기를 먼저 눌러주세요.";
            document.getElementById("input").value = "";
        } else {
            document.getElementById("answer").textContent =
                '정답을 입력해주세요. 힌트는 " ' + hints + ' "입니다.';
            document.getElementById("input").value = "";
        }
        return 0;
    } else if (inputText == "/hardmode") { // 챌린지모드 도전
        hardmode = 1;
        hardmode_answer = 0;
        document.getElementById("hintButton").style.visibility = "hidden";
        document.getElementById("surButton").style.visibility = "hidden";
        document.getElementById("linkButton").style.visibility = "hidden";
        alert("[ 챌린지 모드에 들어갑니다. ]");
        document.getElementById("input").value = "";
        return 0;
    }
    switch (inputText) {
        case answer[0]:
        case answer[1]:
        case answer[2]:
        case answer[3]:
        case answer[4]:
        case answer[5]:
        case answer[6]:
        case answer[7]:
        case answer[8]:
            document.getElementById("answer").textContent =
                "< " + answer[0] + " > \n     ' " + inputText + " ' 정답입니다.";
            if(inputText == "날먹하지마요") {
                document.getElementById("answer").textContent =
                    "< 날먹하지말라니까요 > 정답입니다?";
            }
            if(winpoint == 0) winpoint = 1;
            if(winpoint == 1) {
                win++;
                rate = (win / (lose + win)) * 100;
                document.getElementById("your").textContent =
                    "정답:포기:정답률 / " + win + " : " + lose + " : " + rate.toFixed(1) + "%";
                document.getElementById("userMessage").value =
                    "정답:" + win + " 포기:" + lose + " 정답률:" + rate.toFixed(1);
                winpoint = 2;
            }
            break;
        default:
            document.getElementById("answer").textContent = "틀렸습니다.";
    }
}
function answerFocus() {
    document.getElementById("input").focus();
}
function SongChange() {
    if(hardmode){
        hardmode_answer = 0;
        document.getElementById("songchangebutton").style.visibility = "hidden";
    }
    document.getElementById("songchangebutton").className =
        "btn btn-outline-success";
    document.getElementById("answer").textContent = "정답을 입력해주세요.";
    videourl = "";
    randp = Math.floor(Math.random() * 3200);
    if (
        notran.indexOf(randp) != -1 ||
        (randp > 563) & (randp <= 1000) ||
        (randp > 1190 && randp <= 1500) ||
        (randp > 1758 && randp <= 2000) ||
        (randp > 2292 && randp <= 3000) ||
        (randp > 3026 && randp <= 3200)
    ) {
        //alert('중복입니다.');
        SongChange();
        return 0;
    }
    urllink = ""; // 0~1000 -> 밀리, 1001~1500 -> 샤니, 1501 ~ 2000 -> 데레, 2001~3000 -> 본가, 3001~3200 -> 기타
    if (true) { //노래 받기 밀리 컬렉터
        if (randp == 1) {
            urllink = "1CnzDNeZ3QYDCGH-2e06c8KKyBdv6kP9p"; //purple sky
            flag = "밀리";
            videourl = "https://youtu.be/u_-mzOg3WjU";
        } else if (randp == 0) {
            urllink = "1-xxAdug4Hubm6t4Of5DtAue8oWYa0eKX"; //absolute run
            flag = "밀리";
            videourl = "https://youtu.be/cTEgOm11qi4";
        } else if (randp == 2) {
            urllink = "1mLXh-cNKHZvSByE_xntFI7L44XG8_Ujb"; //purple sky
            flag = "밀리";
            videourl = "https://youtu.be/u_-mzOg3WjU";
        } else if (randp == 3) {
            urllink = "1fvLB9u1JFyRRp4IhO9iWhkMhinXgHftG"; //in the name of love
            flag = "밀리";
            videourl = "https://youtu.be/Fr2xFgP-5IA";
        } else if (randp == 4) {
            urllink = "1KZfY7_mmkvvULn-JzhLU4a55diRYuWuB"; //in the name of love
            flag = "밀리";
            videourl = "https://youtu.be/Fr2xFgP-5IA";
        } else if (randp == 5) {
            urllink = "1XtzEtAr8UCCFHDYYoZCHXlZ6UkqTdxDm"; //absolute run
            flag = "밀리";
            videourl = "https://youtu.be/cTEgOm11qi4";
        } else if (randp == 6) {
            urllink = "1hijVAxAVdIia9DPBXEfpQgJj51cAERQl"; //어딕티드
            flag = "밀리";
            videourl = "https://youtu.be/fFGzOqswCMI";
        } else if (randp == 7) {
            urllink = "1MGufFHPiGqadeKc29km66dB2C6ixR61O"; //어딕티드
            flag = "밀리";
            videourl = "https://youtu.be/fFGzOqswCMI";
        } else if (randp == 8) {
            urllink = "1CyUOytYd8NX6OCBIoLKNivPgIkZawcs-"; //어라이브유
            flag = "밀리";
            videourl = "https://youtu.be/M8bFYaCwjgs";
        } else if (randp == 9) {
            urllink = "1MduYrpc5uoXxUI04ZzNONNFatWKropUY"; //어라이브유
            flag = "밀리";
            videourl = "https://youtu.be/M8bFYaCwjgs";
        } else if (randp == 10) {
            urllink = "1m1LXch50Vo_j4x-J1nrFeROA4DjX9b8j"; //아트니드하트비트
            flag = "밀리";
            videourl = "https://youtu.be/2LxlC25JbFk";
        } else if (randp == 11) {
            urllink = "1nY4KGQSrQNBmhabJ8QcowxuuLMHNShvF"; //아트니드하트비트
            flag = "밀리";
            videourl = "https://youtu.be/2LxlC25JbFk";
        } else if (randp == 12) {
            urllink = "1h1s1pkbVPWbzYNyJzQsBhOltfqBpgluw"; //비마이보이
            flag = "밀리";
            videourl = "https://youtu.be/kL06zySqskY";
        } else if (randp == 13) {
            urllink = "1E0yFDi95KJL0WdO5xaY52ykCrC9pGSHK"; //비마이보이
            flag = "밀리";
            videourl = "https://youtu.be/kL06zySqskY";
        } else if (randp == 14) {
            urllink = "1zY-j3ddpoXsLwXDsi6o6aUyQI569D-DK"; //비프라우드
            flag = "밀리";
            videourl = "https://youtu.be/kPklYenpA3k";
        } else if (randp == 15) {
            urllink = "16q0BB_JPmUzckjgtMhN7LJSZoqcmKFEn"; //비프라우드
            flag = "밀리";
            videourl = "https://youtu.be/kPklYenpA3k";
        } else if (randp == 16) {
            urllink = "1Ghz9iaLjSRsIzSNWt2751w8KTU7jwkxC"; //빌리브마이체인지
            flag = "밀리";
            videourl = "https://youtu.be/LJxigXARt88";
        } else if (randp == 17) {
            urllink = "17XEuuhy4ZibmLckDELo2gqjevTuLFAhE"; //빌리브마이체인지
            flag = "밀리";
            videourl = "https://youtu.be/LJxigXARt88";
        } else if (randp == 18) {
            urllink = "18-ThPA1KthiIZxMEHtNsD2stc6iJm8OT"; //버스오브컬러
            flag = "밀리";
            videourl = "https://youtu.be/Z991wUA4I1w";
        } else if (randp == 19) {
            urllink = "1wuylwC44qZT6-XSMnZdzcJdWDDbP-bvk"; //버스오브컬러
            flag = "밀리";
            videourl = "https://youtu.be/Z991wUA4I1w";
        } else if (randp == 20) {
            urllink = "1_5xNrKZlKkRUR8o1bWz3yAIyb9zjiKW9"; //비터스윗
            flag = "밀리";
            videourl = "https://youtu.be/NxHFO_c5QSI";
        } else if (randp == 21) {
            urllink = "152G8Uh19tAXx0ywg55R-goZqiBjnlFx0"; //비터스윗
            flag = "밀리";
            videourl = "https://youtu.be/NxHFO_c5QSI";
        } else if (randp == 22) {
            urllink = "1UfH4E_tygaLvRXfTa-pOp2nM0FspXd3C"; //블랙파티
            flag = "밀리";
            videourl = "https://youtu.be/VsnOiiM0lnk";
        } else if (randp == 23) {
            urllink = "1gF836sdtFyAWRxIseD8gdO9Zf5fc35mV"; //블랙파티
            flag = "밀리";
            videourl = "https://youtu.be/VsnOiiM0lnk";
        } else if (randp == 24) {
            urllink = "1YQAftv3qcjcDuTHDxaGdPfpiJDZtSHqV"; //브랜뉴시어터
            flag = "밀리";
            videourl = "https://youtu.be/nU_rGqwaP8c";
        } else if (randp == 25) {
            urllink = "1XoQXdGbQoj2ONbmxDhipg_nwXV9LF2a6"; //브랜뉴시어터
            flag = "밀리";
            videourl = "https://youtu.be/nU_rGqwaP8c";
        } else if (randp == 26) {
            urllink = "1FJib0pI2-kqrocSEeL3WSe9lcvZRD7Oz"; //브레이브하모니
            flag = "밀리";
            videourl = "https://youtu.be/1zge_j0eo1k";
        } else if (randp == 27) {
            urllink = "1BX9y_uiynKMDp1l7sHo6BdYYXA0dqAUG"; //브레이브하모니
            flag = "밀리";
            videourl = "https://youtu.be/1zge_j0eo1k";
        } else if (randp == 28) {
            urllink = "1RcqMtKg-SK1zdOsCnsI3gpFDRlX-uWuk"; //캣 크로싱
            flag = "밀리";
            videourl = "https://youtu.be/DQ73jYrXS2Q";
        } else if (randp == 29) {
            urllink = "1fDAS9SvCtj1FE-LSEYiQh_8StyRz3VFj"; //캣 크로싱
            flag = "밀리";
            videourl = "https://youtu.be/DQ73jYrXS2Q";
        } else if (randp == 30) {
            urllink = "1xluCGqq1_fINXVZ6VR1OjRid7iA6MOpW"; //체리컬러드러브
            flag = "밀리";
            videourl = "https://youtu.be/wbpMSadhaqk";
        } else if (randp == 31) {
            urllink = "1SI446Fxofx0PWf9PuOr6uShegzrtXRH3"; //체리컬러드러브
            flag = "밀리";
            videourl = "https://youtu.be/wbpMSadhaqk";
        } else if (randp == 32) {
            urllink = "1oZRwedgLRug0j8UMmbaVcHZ_5xZMzlxv"; //컴온어티파티
            flag = "밀리";
            videourl = "https://youtu.be/g9qgxGMScPw";
        } else if (randp == 33) {
            urllink = "1NUfMTfMuNmREWcDeT53MhFL_CRi26Vgj"; //컴온어티파티
            flag = "밀리";
            videourl = "https://youtu.be/g9qgxGMScPw";
        } else if (randp == 34) {
            urllink = "1AMWdn4qG14xCa-_ZFfwikg6WZe--CemL"; //컷컷컷
            flag = "밀리";
            videourl = "https://youtu.be/6KsXL87l5mw";
        } else if (randp == 35) {
            urllink = "1fYrsdKwIAmFrlSFMP6tZKbNvNynaUv14"; //컷컷컷
            flag = "밀리";
            videourl = "https://youtu.be/6KsXL87l5mw";
        } else if (randp == 36) {
            urllink = "1wXDfDvkcBK7suQJKg76Y4IxALyRXKAmv"; //단스 롭스쿠리테
            flag = "밀리";
            videourl = "https://youtu.be/8l2NYlYXRp4";
        } else if (randp == 37) {
            urllink = "1A2lzaqniXCSCA9M2jo28RLP-ex5MF_GF"; //단스 롭스쿠리테
            flag = "밀리";
            videourl = "https://youtu.be/8l2NYlYXRp4";
        } else if (randp == 38) {
            urllink = "14VDAuK5p91xVwXlkvljAbJ-8sF9QEI3c"; //데이에프터에스터데이
            flag = "밀리";
            videourl = "https://youtu.be/zZpSwPEnKJ8";
        } else if (randp == 39) {
            urllink = "10mNFPPimaQVj3PmN3eEfAS31sjcIjWh1"; //데이에프터에스터데이
            flag = "밀리";
            videourl = "https://youtu.be/zZpSwPEnKJ8";
        } else if (randp == 40) {
            urllink = "1fclSDMerNObSYxbZaU7030s8wREhPyM6"; //디어
            flag = "밀리";
            videourl = "https://youtu.be/Q8g4-zdf4lw";
        } else if (randp == 41) {
            urllink = "131QP6KR1DaNn8KHKRhJ6hOVgnXhFhPvx"; //디어
            flag = "밀리";
            videourl = "https://youtu.be/Q8g4-zdf4lw";
        } else if (randp == 42) {
            urllink = "13xCfNxmbLlsxGsEXAwXryg8sje3n7eul"; //딥딥블루
            flag = "밀리";
            videourl = "https://youtu.be/rS7EoVMuBRY";
        } else if (randp == 43) {
            urllink = "1azsv7tqaMD6z0NmulQtOtHmUd3gTX3HO"; //딥딥블루
            flag = "밀리";
            videourl = "https://youtu.be/rS7EoVMuBRY";
        } else if (randp == 44) {
            urllink = "1NMLzN0GOSynblGOuQ1wuhJcrKqFU4tH3"; //다이아몬드조커
            flag = "밀리";
            videourl = "https://youtu.be/NEn8gtevQXs";
        } else if (randp == 45) {
            urllink = "141SCsUbzgr1DaesRdI0CiNPgHNRWXrGS"; //다이아몬드조커
            flag = "밀리";
            videourl = "https://youtu.be/NEn8gtevQXs";
        } else if (randp == 46) {
            urllink = "18EYttYcY_Z289HRwq70pXhZp2a8uoHYy"; //두디아이돌
            flag = "밀리";
            videourl = "https://youtu.be/XtRjwmCqMC8";
        } else if (randp == 47) {
            urllink = "1RVl5q_4NiVVUSlGLa0braGo7zr5X9aIs"; //두디아이돌
            flag = "밀리";
            videourl = "https://youtu.be/XtRjwmCqMC8";
        } else if (randp == 48) {
            urllink = "1HytPdrKGDS8CYR1mB5KVNt2YS0J7VnO9"; //드리밍
            flag = "밀리";
            videourl = "https://youtu.be/BGAkvDB7VnE";
        } else if (randp == 49) {
            urllink = "1ham7xwT86LF304aj5RxOmxsvkD-4SqW0"; //드리밍
            flag = "밀리";
            videourl = "https://youtu.be/BGAkvDB7VnE";
        } else if (randp == 50) {
            urllink = "1LmT3j5BGdCNAkwuGN0wgiqrmnq-2-NHD"; //이터널하모니
            flag = "밀리";
            videourl = "https://youtu.be/RGTa5q9Y9ek";
        } else if (randp == 51) {
            urllink = "1T8xPBzpYwDeu136FpfeyubPXdlbx8j-H"; //이터널하모니
            flag = "밀리";
            videourl = "https://youtu.be/RGTa5q9Y9ek";
        } else if (randp == 52) {
            urllink = "1YxFQIyaXP0E4tZYkJAoVJ3dZ-9rztPaB"; //에버라스팅
            flag = "밀리";
            videourl = "";
        } else if (randp == 53) {
            urllink = "1oGALu52UwMPhMptAuwV7je0ADt0ZLEuw"; //에버라스팅
            flag = "밀리";
            videourl = "";
        } else if (randp == 54) {
            urllink = "1C9TGe3oiAosDaxaF0l_SLtj7YHpXiVzS"; //에브리데이스타
            flag = "밀리";
            videourl = "https://youtu.be/etofjxpF3X4";
        } else if (randp == 55) {
            urllink = "1GIeX0GYI56nToZW-JnZRU7CRmGRlk5BX"; //에브리데이스타
            flag = "밀리";
            videourl = "https://youtu.be/etofjxpF3X4";
        } else if (randp == 56) {
            urllink = "1BGHNLkPyZWWk8rmdHltfPgjRIWZ-PclE"; //페어리테일
            flag = "밀리";
            videourl = "https://youtu.be/1zyyaTvZeVk";
        } else if (randp == 57) {
            urllink = "1648hCvzJKdmnAg291Ds4n2vo4b53p52d"; //페어리테일
            flag = "밀리";
            videourl = "https://youtu.be/1zyyaTvZeVk";
        } else if (randp == 58) {
            urllink = "1Kt23N2QniOb504TZ9EFBJeAx3f2QJds_"; //파인드유어윈드
            flag = "밀리";
            videourl = "https://youtu.be/oQSuqA64Px8";
        } else if (randp == 59) {
            urllink = "1W1kZCnDykdVhelxzJKlviC999sUIFNAt"; //파인드유어윈드
            flag = "밀리";
            videourl = "https://youtu.be/oQSuqA64Px8";
        } else if (randp == 60) {
            urllink = "1I2dc4-KcOyHQhk72xvGKedYLeZi84O8U"; //플루딩
            flag = "밀리";
            videourl = "https://youtu.be/aajt_3s_T_U";
        } else if (randp == 61) {
            urllink = "1WeLIFJ9-8Cb7_xZ5ATy_FWooLa7JQtkV"; //플루딩
            flag = "밀리";
            videourl = "https://youtu.be/aajt_3s_T_U";
        } else if (randp == 62) {
            urllink = "1tZfesnUedZCDyQhqR16IT4mE7ST8FD6P"; //플라이투에브리웨어
            flag = "밀리";
            videourl = "https://youtu.be/APpgQ28jdAo";
        } else if (randp == 63) {
            urllink = "1Ffb4Fo9r0yVNxzfVHIIqstf8bImdj9xS"; //플라이투에브리웨어
            flag = "밀리";
            videourl = "https://youtu.be/APpgQ28jdAo";
        } else if (randp == 64) {
            urllink = "1e9hIutf-Pk4dhLuCgqaQIYHO3cV1xFEP"; //플라이어스
            flag = "밀리";
            videourl = "https://youtu.be/Hi87w65XG8A";
        } else if (randp == 65) {
            urllink = "1-jsqw1LXO2spynoT_fGHdapRiUkZdj1o"; //플라이어스
            flag = "밀리";
            videourl = "https://youtu.be/Hi87w65XG8A";
        } else if (randp == 66) {
            urllink = "1DBTXnfPXaHhWU7kz0v8rs8TyKrUB3PIr"; //플루티 러브
            flag = "밀리";
            videourl = "https://youtu.be/mos1MKJ5eP0";
        } else if (randp == 67) {
            urllink = "1nG71KpL3MRHSEliXtGHSTrnU7N_WUmi1"; //플루티 러브
            flag = "밀리";
            videourl = "https://youtu.be/mos1MKJ5eP0";
        } else if (randp == 68) {
            urllink = "15pO0nQdP-kC3S2AmgTuPcyV8kpE4quDV"; //푸와두와
            flag = "밀리";
            videourl = "https://youtu.be/-Qxn7BdxYTs";
        } else if (randp == 69) {
            urllink = "1Z7wlkxo2orMyyb6mwudGvcQPULq64vSk"; //푸와두와
            flag = "밀리";
            videourl = "https://youtu.be/-Qxn7BdxYTs";
        } else if (randp == 70) {
            urllink = "1o-raB5rgVK5E_XfkPXHlYctNMsEKdimd"; //걸프
            flag = "밀리";
            videourl = "ttps://youtu.be/O2650Eb-aJM";
        } else if (randp == 71) {
            urllink = "1yl6VEf54HbvWozBZEZZ_ZIuFZ3Lsxtmz"; //걸프
            flag = "밀리";
            videourl = "ttps://youtu.be/O2650Eb-aJM";
        } else if (randp == 72) {
            urllink = "1tV_iPAWeBO0ugPREdEq7OmZYDzKFoo5p"; //글로우맵
            flag = "밀리";
            videourl = "https://youtu.be/xjybhcwXUMg";
        } else if (randp == 73) {
            urllink = "1FDd4I3y9pgiTSAXx63MTKBquzveIyoqA"; //글로우맵
            flag = "밀리";
            videourl = "https://youtu.be/xjybhcwXUMg";
        } else if (randp == 74) {
            urllink = "149rEIs94c_wk5FTRwsK1JvGhkt7xZbq7"; //헹인데어
            flag = "밀리";
            videourl = "https://youtu.be/8KFFxiEb7sw";
        } else if (randp == 75) {
            urllink = "1ioAxOutdeNz7oL8ohxB7zV60ofNdBV4l"; //헹인데어
            flag = "밀리";
            videourl = "https://youtu.be/8KFFxiEb7sw";
        } else if (randp == 76) {
            urllink = "1msy8bOmCPpFKfzW294Ivn5blrNwSLoKI"; //해피달링
            flag = "밀리";
            videourl = "https://youtu.be/2Ydsey10ZTg";
        } else if (randp == 77) {
            urllink = "1Z35OocK8AdvL9rMV-E5lsxzr8WTBi8XF"; //해피달링
            flag = "밀리";
            videourl = "https://youtu.be/2Ydsey10ZTg";
        } else if (randp == 78) {
            urllink = "1t1Y8Lz7KGF1hZojPYUUGW4k3gvCEtgA9"; //해피스텝핑드리밍
            flag = "밀리";
            videourl = "https://youtu.be/CCo4oYRml4c";
        } else if (randp == 79) {
            urllink = "1yYiTkQ8sRAULh3uJIN67glv5u1WH76ij"; //해피스텝핑드리밍
            flag = "밀리";
            videourl = "https://youtu.be/CCo4oYRml4c";
        } else if (randp == 80) {
            urllink = "1-i2YqLIAvlED2i15esGxvs1k7vzYWg45"; //하모니포유
            flag = "밀리";
            videourl = "";
        } else if (randp == 81) {
            urllink = "1Fs_1E2gdAUM5soawI9Zxs8oIWPxEyTbr"; //하모니포유
            flag = "밀리";
            videourl = "";
        } else if (randp == 82) {
            urllink = "1SRj8ug5ESYbBCAodiA6Qnk8wbYmM0Y7c"; //홈스윗프렌드쉽
            flag = "밀리";
            videourl = "https://youtu.be/UKIuTb_tvvs";
        } else if (randp == 83) {
            urllink = "1n9TNdQMV57F1Z09woZzWldJQOumJfMRO"; //홈스윗프렌드쉽
            flag = "밀리";
            videourl = "https://youtu.be/UKIuTb_tvvs";
        } else if (randp == 84) {
            urllink = "1hbrvmztDivgJnKghQ1UXknWu4uhiHUAw"; //아이디드아이윌
            flag = "밀리";
            videourl = "https://youtu.be/oTDW5dGuoso";
        } else if (randp == 85) {
            urllink = "1BKd7efNiwYqMxMXsUyig511K62k0BBn3"; //아이디드아이윌
            flag = "밀리";
            videourl = "https://youtu.be/oTDW5dGuoso";
        } else if (randp == 86) {
            urllink = "19DwotzTKsliZCugwD3_o1dRQWCR3qABF"; //이스케이프프롬유토피아
            flag = "밀리";
            videourl = "https://youtu.be/0vYbf7JbCvs";
        } else if (randp == 87) {
            urllink = "1hMKjKaM51gXdyPYZJXsl608iN3fL2O11"; //이스케이프프롬유토피아
            flag = "밀리";
            videourl = "https://youtu.be/0vYbf7JbCvs";
        } else if (randp == 88) {
            urllink = "1jzrlwwBgfPJAjg6L7JB1tB0FII3jeCTH"; //임로코모션
            flag = "밀리";
            videourl = "https://youtu.be/7LGpS_Weip8";
        } else if (randp == 89) {
            urllink = "1Xk1QuKFtLRJtfKyC_xh6lCnYJ0LPgXUg"; //임로코모션
            flag = "밀리";
            videourl = "https://youtu.be/7LGpS_Weip8";
        } else if (randp == 90) {
            urllink = "1pehLFRF5VPg2ggrUg057qyJ5mS5-Ij0R"; //저스트비마이셀프
            flag = "밀리";
            videourl = "https://youtu.be/dedpfL0SJME";
        } else if (randp == 91) {
            urllink = "1T4_-q2Rn7wznmsdm392wKJNqfZJTAoBS"; //저스트비마이셀프
            flag = "밀리";
            videourl = "https://youtu.be/dedpfL0SJME";
        } else if (randp == 92) {
            urllink = "1wZ6Ce266E77vyW-py2jfc-YpdZNM282e"; //저스티스올보이스
            flag = "밀리";
            videourl = "https://youtu.be/R7f6IiqQcJY";
        } else if (randp == 93) {
            urllink = "1ddS-ALDDHk1RGcGhjrArBfr9X4PAsm3u"; //저스티스올보이스
            flag = "밀리";
            videourl = "https://youtu.be/R7f6IiqQcJY";
        } else if (randp == 94) {
            urllink = "12x5ejm5qUh6T6gN2A-aktkrFxMWdkoZd"; //카와이오브더월드
            flag = "밀리";
            videourl = "https://youtu.be/mwsayGuMhBY";
        } else if (randp == 95) {
            urllink = "1j5mw-Uk3vBGxJoqXs16Vo_LtXIPw-PPP"; //카와이오브더월드
            flag = "밀리";
            videourl = "https://youtu.be/mwsayGuMhBY";
        } else if (randp == 96) {
            urllink = "14W2JTdKZ4J1VwySZziS67fhUQGHWlBho"; //리더
            flag = "밀리";
            videourl = "https://youtu.be/jm6cuxX80gw";
        } else if (randp == 97) {
            urllink = "1Q4SiaOKG7AmgS8zNjQrtrEE1lyqZPjP7"; //리더
            flag = "밀리";
            videourl = "https://youtu.be/jm6cuxX80gw";
        } else if (randp == 98) {
            urllink = "1i6cBlk7Q1VldSJZDgGBiI-lnMd7Q075U"; //레전드걸스
            flag = "밀리";
            videourl = "https://youtu.be/6DfWcj9o6uM";
        } else if (randp == 99) {
            urllink = "1E4FvLTmvkm9rFMoH-dPYUpa2uLF5gUH3"; //레전드걸스
            flag = "밀리";
            videourl = "https://youtu.be/6DfWcj9o6uM";
        } else if (randp == 100) {
            urllink = "1qqabLRnbq_ZrMQRDZyqcakfFyyC6M72B"; //멜티판타지아
            flag = "밀리";
            videourl = "https://youtu.be/hSmiV5mGauE";
        } else if (randp == 101) {
            urllink = "1hH0x0jOXztVzEsos40V78ig_vqHLzsB6"; //멜티판타지아
            flag = "밀리";
            videourl = "https://youtu.be/hSmiV5mGauE";
        } else if (randp == 102) {
            urllink = "1f5dBWrsuBahSRyf7OzcM0RqfRo4P4l3x"; //뮤직저니
            flag = "밀리";
            videourl = "https://youtu.be/EKXxMnOrcEo";
        } else if (randp == 103) {
            urllink = "18tOHIfn4z0TMP7WchmnAp4suRwZfFaet"; //뮤직저니
            flag = "밀리";
            videourl = "https://youtu.be/EKXxMnOrcEo";
        } else if (randp == 104) {
            urllink = "1JNPH1H-wK1ba5cYLPCeWOPo0tOyjP_xL"; //온리원세컨드
            flag = "밀리";
            videourl = "";
        } else if (randp == 105) {
            urllink = "14HhYEln6ccEZt--Qq4s49TmE5VSLIMDI"; //온리원세컨드
            flag = "밀리";
            videourl = "";
        } else if (randp == 106) {
            urllink = "1xJOEhb6oPMK65y6GLJYGRZxq4jpcHJ6i"; //피에스 아이러브유
            flag = "밀리";
            videourl = "https://youtu.be/7PkpyGkhMuE";
        } else if (randp == 107) {
            urllink = "1Df2xI4_0GgWE-nczYPtYm5QrxjVn31qH"; //피에스 아이러브유
            flag = "밀리";
            videourl = "https://youtu.be/7PkpyGkhMuE";
        } else if (randp == 108) {
            urllink = "1j0il-b_8hYoOW4_c5zlDu8oJf91uqB5-"; //패러독스오브러브
            flag = "밀리";
            videourl = "";
        } else if (randp == 109) {
            urllink = "1U1f_6VCoouUXivkirxaR05hFsZek4XxR"; //패러독스오브러브
            flag = "밀리";
            videourl = "";
        } else if (randp == 110) {
            urllink = "1K8Ng-8TndNN8ryFmvl_jjP4OdGKY4dNw"; //피스오브케이크
            flag = "밀리";
            videourl = "https://youtu.be/KatGfoP4NDw";
        } else if (randp == 111) {
            urllink = "1VicnFxdalqk82LQdAS7hH-ZtcepJ7ZA0"; //피스오브케이크
            flag = "밀리";
            videourl = "https://youtu.be/KatGfoP4NDw";
        } else if (randp == 112) {
            urllink = "19WsMOQlPkSzmSjStfr5XcwlTzh4FivNL"; //프리티드리머
            flag = "밀리";
            videourl = "https://youtu.be/ilt3eD26dB4";
        } else if (randp == 113) {
            urllink = "1I6XevsSAFcpfci8eiq1O56wl_1fTZOBe"; //프리티드리머
            flag = "밀리";
            videourl = "https://youtu.be/ilt3eD26dB4";
        } else if (randp == 114) {
            urllink = "1t5e2HNjABYSEHdKZkuWB2ttyd6-a2r0t"; //프린세스비엠비셔스
            flag = "밀리";
            videourl = "https://youtu.be/zRGG9SgY0w4";
        } else if (randp == 115) {
            urllink = "1j58zuohGC9OnXu48Z20V-xI4aNMUeWKQ"; //프린세스비엠비셔스
            flag = "밀리";
            videourl = "https://youtu.be/zRGG9SgY0w4";
        } else if (randp == 116) {
            urllink = "19luonISfJtSAxfbbGG86xiHk_r63zzcL"; //레이즈더플레그
            flag = "밀리";
            videourl = "https://youtu.be/W8BNwXkpgjo";
        } else if (randp == 117) {
            urllink = "18Euv8U0QwzQpSPVtsezjZNhsoqgdY1CP"; //레이즈더플레그
            flag = "밀리";
            videourl = "https://youtu.be/W8BNwXkpgjo";
        } else if (randp == 118) {
            urllink = "1rRBGhWH_MXLk9zJQ5ogQfHx5c3LjwTzH"; //리벨리온
            flag = "밀리";
            videourl = "https://youtu.be/LduX2XCaDX4";
        } else if (randp == 119) {
            urllink = "1Eeagq-UGZqt5okoH1D5Zlm03IfwJRxNb"; //리벨리온
            flag = "밀리";
            videourl = "https://youtu.be/LduX2XCaDX4";
        } else if (randp == 120) {
            urllink = "12TyGZCp8-2vZZdFmkhaEddU1hgfEvG_x"; //리테일
            flag = "밀리";
            videourl = "";
        } else if (randp == 121) {
            urllink = "1Te0UhVq5wV7nP8uRFHgT4kQjdNO7zhxM"; //리테일
            flag = "밀리";
            videourl = "";
        } else if (randp == 122) {
            urllink = "11LiHYLHEkHBCHor0JvtaHlS5qUipTN4r"; //사일런트 조커
            flag = "밀리";
            videourl = "https://youtu.be/8VA5cgg5sVI";
        } else if (randp == 123) {
            urllink = "1-XXjYUpmLvjYH7W8dSIbOgTZFGhL-YFV"; //사일런트 조커
            flag = "밀리";
            videourl = "https://youtu.be/8VA5cgg5sVI";
        } else if (randp == 124) {
            urllink = "10U12FUsHIkZOtJChTc5nRBZ81rGvc60s"; //스마일리 데이즈
            flag = "밀리";
            videourl = "https://youtu.be/Y_qj-LFmDFQ";
        } else if (randp == 125) {
            urllink = "1eMHuxLyTgTJGbfOdl6771vb1kIEkmRhr"; //스마일리 데이즈
            flag = "밀리";
            videourl = "https://youtu.be/Y_qj-LFmDFQ";
        } else if (randp == 126) {
            urllink = "1IINj3Sscxcv0AGp5ZKCsmcUnCPD0vl5_"; //스텐딩 얼라이브
            flag = "밀리";
            videourl = "https://youtu.be/rx5jTLLwUGs";
        } else if (randp == 127) {
            urllink = "1ZJo6swdUj5t-0WdajNzSZvV68ElQ2ieu"; //스텐딩 얼라이브
            flag = "밀리";
            videourl = "https://youtu.be/rx5jTLLwUGs";
        } else if (randp == 128) {
            urllink = "14Gez173g81cdO0dfikaaqRLhi0tGEjaN"; //스테리 멜로디
            flag = "밀리";
            videourl = "";
        } else if (randp == 129) {
            urllink = "1j8mow6zSIZcpTf6NyV0QIDSKKHcnpUl8"; //스테리 멜로디
            flag = "밀리";
            videourl = "";
        } else if (randp == 130) {
            urllink = "13v7PJH4m4V0Euko_05TqAppSeM-oFYei"; //스트레오포닉
            flag = "밀리";
            videourl = "https://youtu.be/kwV-C-5_b6s";
        } else if (randp == 131) {
            urllink = "1JTttATVTfoCmjpxNsAZFOZ9iJYYj8mXS"; //스트레오포닉
            flag = "밀리";
            videourl = "https://youtu.be/kwV-C-5_b6s";
        } else if (randp == 132) {
            urllink = "1TSvoDoWiZBNCMMc01fGQFJVE1ifjf6cy"; //수퍼두퍼
            flag = "밀리";
            videourl = "https://youtu.be/VZQ7P12baAs";
        } else if (randp == 133) {
            urllink = "1qeklHubaAHqBqh_Ba04I-4hl3KuRtzKb"; //수퍼두퍼
            flag = "밀리";
            videourl = "https://youtu.be/VZQ7P12baAs";
        } else if (randp == 134) {
            urllink = "1ciYu8bt8vwVYzw2XJks6Z4T0iw23l92j"; //수퍼러버
            flag = "밀리";
            videourl = "https://youtu.be/8eBrZlG8EWg";
        } else if (randp == 135) {
            urllink = "1xYCBDSR5AJCHf2-b1tlUuw3B5A9oc9Ud"; //수퍼러버
            flag = "밀리";
            videourl = "https://youtu.be/8eBrZlG8EWg";
        } else if (randp == 136) {
            urllink = "1IocpIYaJVmBTItgjIAje1Pm7jMfqMmBy"; //스위스윗소울
            flag = "밀리";
            videourl = "https://youtu.be/p5e0e2VCxTQ";
        } else if (randp == 137) {
            urllink = "1gE-9qljy9XlvhXqifhbXn1ynxx5aFMCC"; //스윗스윗소울
            flag = "밀리";
            videourl = "https://youtu.be/p5e0e2VCxTQ";
        } else if (randp == 138) {
            urllink = "1VUYWg67QsS_bcQQ15xvbavxF6A1HW1oW"; //테이크미스페이스
            flag = "밀리";
            videourl = "https://youtu.be/zwxibYcPSEQ";
        } else if (randp == 139) {
            urllink = "1463sM-VDFp8MIPaz8gUb6Dhw2aguzkRB"; //테이크미스페이스
            flag = "밀리";
            videourl = "https://youtu.be/zwxibYcPSEQ";
        } else if (randp == 140) {
            urllink = "1EsmupU71A1QlnIiZFB1cvoYAenxvu1C1"; //땡큐
            flag = "밀리";
            videourl = "https://youtu.be/18EQeIlIaqQ";
        } else if (randp == 141) {
            urllink = "1q4-xdjL388xlf7m1TxVhcbWHSWaxgPXc"; //땡큐
            flag = "밀리";
            videourl = "https://youtu.be/18EQeIlIaqQ";
        } else if (randp == 142) {
            urllink = "1uXfQ91R9ufyw4n0oxcS-lh5R_KdzdIiZ"; //투
            flag = "밀리";
            videourl = "https://youtu.be/KzVlWNGEZwo";
        } else if (randp == 143) {
            urllink = "1FpQv3dn8eTi8VPY8JDvgSLE8PxX8TntY"; //투
            flag = "밀리";
            videourl = "https://youtu.be/KzVlWNGEZwo";
        } else if (randp == 144) {
            urllink = "1H84MpJyUk1OdH3Z-61WO268vPz1RrFCT"; //유니온
            flag = "밀리";
            videourl = "https://youtu.be/K9x8p0vLMEI";
        } else if (randp == 145) {
            urllink = "1RBOWNhu8tQy-u3RYqjYvNLkoWPAAjRzr"; //유니온
            flag = "밀리";
            videourl = "https://youtu.be/K9x8p0vLMEI";
        } else if (randp == 146) {
            urllink = "1Pnae6XwQoYBFHjjq4Y_SJ0yNLEtpk9PI"; //업텐션
            flag = "밀리";
            videourl = "https://youtu.be/DC7JIWAX0wU";
        } else if (randp == 147) {
            urllink = "1yRytIHP6DmFbfDWjMjmM354aoDtl0LBu"; //업텐션
            flag = "밀리";
            videourl = "https://youtu.be/DC7JIWAX0wU";
        } else if (randp == 148) {
            urllink = "1QYV_w4v7y6PTWvdzfsQVwJtzqDw8PhAg"; //비비드컬러
            flag = "밀리";
            videourl = "https://youtu.be/aQ54jI1bJko";
        } else if (randp == 149) {
            urllink = "1Vrq6EXr8pdETqgG5d_gNcwpHaVB2xZ8e"; //비비드컬러
            flag = "밀리";
            videourl = "https://youtu.be/aQ54jI1bJko";
        } else if (randp == 150) {
            urllink = "1TPqWeHUXFN_qQnioXuI4pkgzvDAOohxz"; //웰컴
            flag = "밀리";
            videourl = "https://youtu.be/2Iyl_evVBtA";
        } else if (randp == 151) {
            urllink = "1g15BaDIanMy1t7RJbWcAVqr6YQ39FVHk"; //웰컴
            flag = "밀리";
            videourl = "https://youtu.be/2Iyl_evVBtA";
        } else if (randp == 152) {
            urllink = "1ZdPeSwgxGC8tdqq1zmhrZjrD0UXY877n"; //화이트보우즈
            flag = "밀리";
            videourl = "https://youtu.be/7upzJf4fjqQ";
        } else if (randp == 153) {
            urllink = "1jU2WscrFy_l8nCNWK6piSMKu1cb5OVcS"; //화이트보우즈
            flag = "밀리";
            videourl = "https://youtu.be/7upzJf4fjqQ";
        } else if (randp == 154) {
            urllink = "1X-Fafq18G2wIRJSfWChaoTvZPuGP-Xup"; //와이
            flag = "밀리";
            videourl = "https://youtu.be/vDuTzbZHEXw";
        } else if (randp == 155) {
            urllink = "1SQE9bekUzYYnnf03VYnCpWzgCTGhvHs3"; //와이
            flag = "밀리";
            videourl = "https://youtu.be/vDuTzbZHEXw";
        } else if (randp == 156) {
            urllink = "1_qtbQm53vwJufUsO2YVx5fXiOi2XAXPw"; //월드체인져
            flag = "밀리";
            videourl = "https://youtu.be/3FPd2n47ZH8";
        } else if (randp == 157) {
            urllink = "1xYYgul4EwWRDcrcY_aDaZGOdzAjEU9BZ"; //월드체인져
            flag = "밀리";
            videourl = "https://youtu.be/3FPd2n47ZH8";
        } else if (randp == 158) {
            urllink = "10LjtV89ck30oYSjmJz9lx116bztwvhrW"; //월드와이드댄스
            flag = "밀리";
            videourl = "https://youtu.be/x_P_wG-Bbbw";
        } else if (randp == 159) {
            urllink = "11XNnBOQzbZ_N6HxJQmVvEER2O3C0XMxG"; //월드와이드댄스
            flag = "밀리";
            videourl = "https://youtu.be/x_P_wG-Bbbw";
        } else if (randp == 160) {
            urllink = "157BXHO6GDIDJnySbiNqSvkHRldR3rRBs"; //와우아이니드
            flag = "밀리";
            videourl = "https://youtu.be/k2aqYy9YHYc";
        } else if (randp == 161) {
            urllink = "1BaE3nMW4i1b101HqghnSPRDv0s-8T6Gf"; //와우아이니드
            flag = "밀리";
            videourl = "https://youtu.be/k2aqYy9YHYc";
        } else if (randp == 162) {
            urllink = "1m1ATxO3g2U6RnSq9nc74jHWs9f-bMf7-"; //제타이브레이크
            flag = "밀리";
            videourl = "https://youtu.be/hKuznqe0_yQ";
        } else if (randp == 163) {
            urllink = "10xYne2NnYu5nXrPlV3TG6cggUSFNB97L"; //제타이브레이크
            flag = "밀리";
            videourl = "https://youtu.be/hKuznqe0_yQ";
        } else if (randp == 164) {
            urllink = "1c87YOLrjsCEeH-vLSckocF2L1i4UKIgu"; //가르쳐줘 라스트 노트
            flag = "밀리";
            videourl = "https://youtu.be/tLrKq9ftjyA";
        } else if (randp == 165) {
            urllink = "1eEiP9tCNSVctlVwZymdFcnz3sRQ-ftVI"; //가르쳐줘 라스트 노트
            flag = "밀리";
            videourl = "https://youtu.be/tLrKq9ftjyA";
        } else if (randp == 166) {
            urllink = "1rWhOyKXU5XEWduDFXWifBuEH6dQFa84h"; //거스르는 말씨
            flag = "밀리";
            videourl = "https://youtu.be/AxiD8GR2HuI";
        } else if (randp == 167) {
            urllink = "1RfaZRnPP7uyj93t7oA8mVI7NY9ETS4NI"; //거스르는 말씨
            flag = "밀리";
            videourl = "https://youtu.be/AxiD8GR2HuI";
        } else if (randp == 168) {
            urllink = "1CZ620sJkW-6NkRjHXJXd5MTKd5jvbSjM"; //공상문학소녀
            flag = "밀리";
            videourl = "https://youtu.be/4jcB2e45HBw";
        } else if (randp == 169) {
            urllink = "1BHSIwX8rtuAwe99EuTMAYa0kI5WByiaL"; //공상문학소녀
            flag = "밀리";
            videourl = "https://youtu.be/4jcB2e45HBw";
        } else if (randp == 170) {
            urllink = "1tqnFbulTlymvrTD3kbLkRH6RJnsyhvZD"; //구호는스타트업
            flag = "밀리";
            videourl = "https://youtu.be/lvS9g8VqJuY";
        } else if (randp == 171) {
            urllink = "1t_TpwHRiM3KIKS4O8J1c6Ts13q6x-kwo"; //구호는스타트업
            flag = "밀리";
            videourl = "https://youtu.be/lvS9g8VqJuY";
        } else if (randp == 172) {
            urllink = "1WwU0AnaC6fw-kVCrJN__g5fpICDPSWZt"; //그러므로 입니다
            flag = "밀리";
            videourl = "https://youtu.be/Ij-ia95JefA";
        } else if (randp == 173) {
            urllink = "16ok2dE_QC4nIYm4W9bLZV7aZdodmcm3F"; //그러므로 입니다
            flag = "밀리";
            videourl = "https://youtu.be/Ij-ia95JefA";
        } else if (randp == 174) {
            urllink = "1mLvI_dByKlGOLXmPK-Ymz4x3Ngwv8XSn"; //그로잉 뮤직
            flag = "밀리";
            videourl = "https://youtu.be/T__3Ls3xBj8";
        } else if (randp == 175) {
            urllink = "1GdtYG1vn4G10yXKjApYyo4i0AWTQpS23"; //그로잉 뮤직
            flag = "밀리";
            videourl = "https://youtu.be/T__3Ls3xBj8";
        } else if (randp == 176) {
            urllink = "1seJtoJ1XHVFVuhR2BA1Bci42wyJWd7u5"; //그림책
            flag = "밀리";
            videourl = "https://youtu.be/SjT-isoJcmk";
        } else if (randp == 177) {
            urllink = "1lXmCEmbv_dd9lvF7zHQAt1JK1vo5ZszM"; //그림책
            flag = "밀리";
            videourl = "https://youtu.be/SjT-isoJcmk";
        } else if (randp == 178) {
            urllink = "1HBMnguhS-l4IWZyKLEMm3kNxQAfMtmi7"; //근사한기적
            flag = "밀리";
            videourl = "https://youtu.be/-DcLYvVEDnw";
        } else if (randp == 179) {
            urllink = "1PAZXaCUqre_7FfsAVTFo4b34apByQNb4"; //근사한기적
            flag = "밀리";
            videourl = "https://youtu.be/-DcLYvVEDnw";
        } else if (randp == 180) {
            urllink = "19z_cYEw3o7fn7Ldo0HHah7ofgSPQD6xB"; //기다림의라크리마
            flag = "밀리";
            videourl = "https://youtu.be/9mCVVYdhEg8";
        } else if (randp == 181) {
            urllink = "1VNijUWy9DJBfrdco8XetWCvh2YoMJSoD"; //기다림의라크리마
            flag = "밀리";
            videourl = "https://youtu.be/9mCVVYdhEg8";
        } else if (randp == 182) {
            urllink = "1FbimBO9a6A9yrtAnDIzupOkT2d1OZZb-"; //꽃의 가락
            flag = "밀리";
            videourl = "https://youtu.be/kZmxQmRmQDk";
        } else if (randp == 183) {
            urllink = "1K4utP1_MdjCu0VoO9XKpmZ8rc6EU4OZK"; //꽃의 가락
            flag = "밀리";
            videourl = "https://youtu.be/kZmxQmRmQDk";
        } else if (randp == 184) {
            urllink = "1grrLkeUX71cCOHi551mhYVbDc557bX6f"; //꽃이 만발 위켄드
            flag = "밀리";
            videourl = "https://youtu.be/__C4IFwSpOY";
        } else if (randp == 185) {
            urllink = "1LHw-beBok7RjTuvHzgR3zS3SAun1gF7T"; //꽃이 만발 위켄드
            flag = "밀리";
            videourl = "https://youtu.be/__C4IFwSpOY";
        } else if (randp == 186) {
            urllink = "1M8gwEfTFwzymm76ffX_I_1D4sVS1tybm"; //꽃잎 메모리즈
            flag = "밀리";
            videourl = "https://youtu.be/JU1xi1CIqN0";
        } else if (randp == 187) {
            urllink = "1tl2m4NhWDjxq6LO4EH0vcqfqEEBpxxol"; //꽃잎 메모리즈
            flag = "밀리";
            videourl = "https://youtu.be/JU1xi1CIqN0";
        } else if (randp == 188) {
            urllink = "1AXHLvAv2ZushXevw_ZlsdE-d1rHVM2bz"; //꿈빛 트레인
            flag = "밀리";
            videourl = "https://youtu.be/ay8GFgC-HXE";
        } else if (randp == 189) {
            urllink = "1QA6n0oM9UXp3VsztJsIXIFB4So5an_sS"; //꿈빝 트레인
            flag = "밀리";
            videourl = "https://youtu.be/ay8GFgC-HXE";
        } else if (randp == 190) {
            urllink = "1i4zkWJla0n6TdtZ4AR8Lr9rXHCmSsRxy"; //네 생각 버스데이
            flag = "밀리";
            videourl = "https://youtu.be/s9Zx_f1t3l8";
        } else if (randp == 191) {
            urllink = "1jZcc1Z_SMS7YF2qLkcR6swmLaMM5QDb5"; //네 생각 버스데이
            flag = "밀리";
            videourl = "https://youtu.be/s9Zx_f1t3l8";
        } else if (randp == 192) {
            urllink = "10Qh36EyHSh9BZ6uZeeNteNQHLxDGSR7C"; //네가 해준 말이 있으니까
            flag = "밀리";
            videourl = "https://youtu.be/1k04fm1Utrc";
        } else if (randp == 193) {
            urllink = "1G9jYMhqd3NChtw1qUyOiDcgWbWDHiNiq"; //네가 해준 말이 있으니까
            flag = "밀리";
            videourl = "https://youtu.be/1k04fm1Utrc";
        } else if (randp == 194) {
            urllink = "1fniQZELye5_y4fpg54wQ3YnUKJczovR-"; //눈동자 시리우스
            flag = "밀리";
            videourl = "https://youtu.be/jE7wnQTR4KM";
        } else if (randp == 195) {
            urllink = "1yAOIC0evGiGFGoy5i6XDYx34HDU1YFYs"; //눈동자 시리우스
            flag = "밀리";
            videourl = "https://youtu.be/jE7wnQTR4KM";
        } else if (randp == 196) {
            urllink = "1Oz-VDm1W3FoaQe4SpHtia_kA8uILg6j2"; //다이아몬드 클라
            flag = "밀리";
            videourl = "";
        } else if (randp == 197) {
            urllink = "1lNzxGZnK79B_IbEcsrf4twq22VsdkIAM"; //다이아몬드 클라
            flag = "밀리";
            videourl = "";
        } else if (randp == 198) {
            urllink = "1uTrNKeReEnlRgtvLhC45bOUpprjrQX6M"; //달의 곁에서
            flag = "밀리";
            videourl = "https://youtu.be/vPU6igB3Fvk";
        } else if (randp == 199) {
            urllink = "1lDgKI0RdDCgyOzn0AFIUfDXxuDLMXebl"; //달의 곁에서
            flag = "밀리";
            videourl = "https://youtu.be/vPU6igB3Fvk";
        } else if (randp == 200) {
            urllink = "1k0__tfrQ4t6lbXEIvT_LVkIwlQ5ydX0H"; //당신만의 조각
            flag = "밀리";
            videourl = "https://youtu.be/jUbnWEPy_XU";
        } else if (randp == 201) {
            urllink = "1TgdFtMohplcvOXBPYAD_NCiA-8T2ildh"; //당신만의 조각
            flag = "밀리";
            videourl = "https://youtu.be/jUbnWEPy_XU";
        } else if (randp == 202) {
            urllink = "1i7M9rXpcmrOcX5H1pWrpsJeFoG0stq7P"; //데워드릴까요?
            flag = "밀리";
            videourl = "https://youtu.be/uoy-wYZ9oqQ";
        } else if (randp == 203) {
            urllink = "1LH7IzTZRuYkUwyv10CHwro5Rv5dLzg6g"; //데워드릴까요?
            flag = "밀리";
            videourl = "https://youtu.be/uoy-wYZ9oqQ";
        } else if (randp == 204) {
            urllink = "1oXrgacJrO2kZ7Lxxmxu42U6xyJ20YH5U"; //데코레이션 드리밍
            flag = "밀리";
            videourl = "https://youtu.be/sWqwHQazNyw";
        } else if (randp == 205) {
            urllink = "14JifpTkUkq1g2dRUToXdOLMKhyRj0sU2"; //데코레이션 드리밍
            flag = "밀리";
            videourl = "https://youtu.be/sWqwHQazNyw";
        } else if (randp == 206) {
            urllink = "1p3yclFRU_E7hK5pxJoO-Z_56ebP-xh9l"; //라스트 액트리스
            flag = "밀리";
            videourl = "https://youtu.be/27VRWa58xuc";
        } else if (randp == 207) {
            urllink = "1ZlmG-X-0mNL3UQS952acbHflP9CCSTZu"; //라스트 액트리스
            flag = "밀리";
            videourl = "https://youtu.be/27VRWa58xuc";
        } else if (randp == 208) {
            urllink = "19S5pcjB2gvJFOP5zTu6WVAmPjTrMOD2K"; //라이어루주
            flag = "밀리";
            videourl = "https://youtu.be/SoJOomtA2kg";
        } else if (randp == 209) {
            urllink = "126SBbaPjgKG1KIBKVqJpoyMP206dcAAb"; //라이어루주
            flag = "밀리";
            videourl = "https://youtu.be/SoJOomtA2kg";
        } else if (randp == 210) {
            urllink = "1UwrkxsN8S1PpUZs8GRCAljnb61jG28Ep"; //래빗퍼
            flag = "밀리";
            videourl = "https://youtu.be/TqVXP0a6eEU";
        } else if (randp == 211) {
            urllink = "1AyPsp5s8AexuvIEJ3Oikjux_YwjyhAGU"; //래빗퍼
            flag = "밀리";
            videourl = "https://youtu.be/TqVXP0a6eEU";
        } else if (randp == 212) {
            urllink = "1a97kMSSQkDi2h-ILzQavsz-rsDrdPtOr"; //러닝하잇
            flag = "밀리";
            videourl = "https://youtu.be/4FE148bQIgM";
        } else if (randp == 213) {
            urllink = "1Rk1QxSshb4INm6W-IRrAmQnsfoco6gAw"; //러닝하잇
            flag = "밀리";
            videourl = "https://youtu.be/4FE148bQIgM";
        } else if (randp == 214) {
            urllink = "1qmbvLmP6tDzcjqDvJ3BTWbPFEOIW6-Cd"; //로켓스타
            flag = "밀리";
            videourl = "https://youtu.be/fUTi6CPHW24";
        } else if (randp == 215) {
            urllink = "16Poj7ti6ninK5gT5KvysDtCCSpdomhwH"; //로켓스타
            flag = "밀리";
            videourl = "https://youtu.be/fUTi6CPHW24";
        } else if (randp == 216) {
            urllink = "1ggkmFeYLudYHc9bK-JiKjWMP2IxvY8vI"; //롤링삼각
            flag = "밀리";
            videourl = "https://youtu.be/cDxRIhH7E6U";
        } else if (randp == 217) {
            urllink = "1P3tzGtNmNcyOV1Kntujc-Me3yRS1lVGW"; //롤링삼각
            flag = "밀리";
            videourl = "https://youtu.be/cDxRIhH7E6U";
        } else if (randp == 218) {
            urllink = "1MlncYy6o1CQm5z6zedFCJ6_0ZoDf5Rcg"; //마리오네트는 잠들지
            flag = "밀리";
            videourl = "https://youtu.be/pHFhKpzhARs";
        } else if (randp == 219) {
            urllink = "1uhAcbjthFDPoz__WVcs-Sg5Efy6xeA1s"; //마리오네트는 잠들지
            flag = "밀리";
            videourl = "https://youtu.be/pHFhKpzhARs";
        } else if (randp == 220) {
            urllink = "1Fd7xgK8bzAQpBkaWtBbrQY7qIaKEc18_"; //모순의달
            flag = "밀리";
            videourl = "https://youtu.be/IvxoRAMPsPM";
        } else if (randp == 221) {
            urllink = "16uCbm62NIzmQUwrwoT9DWtOFhstmJwTw"; //모순의달
            flag = "밀리";
            videourl = "https://youtu.be/IvxoRAMPsPM";
        } else if (randp == 222) {
            urllink = "1YucgK0wcAacQgtraEUrOoS9MAkPSX9Vn"; //미소짓기좋은날
            flag = "밀리";
            videourl = "https://youtu.be/0WeNp_VHBeE";
        } else if (randp == 223) {
            urllink = "19ELBMtW_sLlWbm8l1HdUuyDKOH5ohfXN"; //미소짓기좋은날
            flag = "밀리";
            videourl = "https://youtu.be/0WeNp_VHBeE";
        } else if (randp == 224) {
            urllink = "1r1Zsa6ELAcDPcVEJv0rIvQ69AvgQEFVY"; //반짝임진행형
            flag = "밀리";
            videourl = "https://youtu.be/_h0dn7nBQjA";
        } else if (randp == 225) {
            urllink = "1LFvLb3pd3J7qBNFiyg55b2mfxSXxGybY"; //반짝임진행형
            flag = "밀리";
            videourl = "https://youtu.be/_h0dn7nBQjA";
        } else if (randp == 226) {
            urllink = "1sHo-iT-0p4nbq1qaavShqnMckiRBFJGW"; //밤에 빛나는 별자리
            flag = "밀리";
            videourl = "https://youtu.be/v6QnWkuMGVA";
        } else if (randp == 227) {
            urllink = "1Det7fzoYRm0m_A8H7M4tCEdKVG4DbiDX"; //밤에 빛나는 별자리
            flag = "밀리";
            videourl = "https://youtu.be/v6QnWkuMGVA";
        } else if (randp == 228) {
            urllink = "1HxWOHznOAuC3QdjpKljEjkb9zL9grOrN"; //밤하고 불빛하고
            flag = "밀리";
            videourl = "https://youtu.be/avJkdJWguA8";
        } else if (randp == 229) {
            urllink = "1p6vEx-TZuHF_GaJvf1k9UH1wQx6R7B_o"; //밤하고 불빛하고
            flag = "밀리";
            videourl = "https://youtu.be/avJkdJWguA8";
        } else if (randp == 230) {
            urllink = "1JET55dLIkv7516xTwD1UyR8M2VDRw0Qw"; //백화는 월하
            flag = "밀리";
            videourl = "https://youtu.be/NLmc492G7II";
        } else if (randp == 231) {
            urllink = "1qCxXktuV1qi9xYTtQvYg7zxNblQSazO3"; //백화는 월하
            flag = "밀리";
            videourl = "https://youtu.be/NLmc492G7II";
        } else if (randp == 232) {
            urllink = "1Gky7BTvxb9RhcFzQnkJ3m1RcIQfnaPNw"; //별들의 심포니아
            flag = "밀리";
            videourl = "https://youtu.be/AmUmAsd4zmM";
        } else if (randp == 233) {
            urllink = "1-yPfZUHoOgaQd4EGRYgS5iCmvBFzizg_"; //별들의 심포니아
            flag = "밀리";
            videourl = "https://youtu.be/AmUmAsd4zmM";
        } else if (randp == 234) {
            urllink = "1AkqHoCz0O4NbKizROpLoKo1z4H8ThVV7"; //별천지의
            flag = "밀리";
            videourl = "https://youtu.be/vb7zeGlwl34";
        } else if (randp == 235) {
            urllink = "1GEgpx3bEo5b0cLoNee4f1f_NMWtbxWXH"; //별천지의
            flag = "밀리";
            videourl = "https://youtu.be/vb7zeGlwl34";
        } else if (randp == 236) {
            urllink = "1fh9r8YI16D08roQM16ayoNNT8BwkmMfO"; //봄을 기다리는
            flag = "밀리";
            videourl = "https://youtu.be/TK6jlsqB2F4";
        } else if (randp == 237) {
            urllink = "1SKH_Iu0frXuXixE1HB7TUfSUZbHQ4GGk"; //봄을 기다리는
            flag = "밀리";
            videourl = "https://youtu.be/TK6jlsqB2F4";
        } else if (randp == 238) {
            urllink = "1G0tzRWmu7yRIBEd-kZzRMimXeQs42aDC"; //비밀의 메모리즈
            flag = "밀리";
            videourl = "https://youtu.be/h1vfK8buniM";
        } else if (randp == 239) {
            urllink = "1W136yplcayA11659tbpXV2ajPW996_Bq"; //비밀의 메모리즈
            flag = "밀리";
            videourl = "https://youtu.be/h1vfK8buniM";
        } else if (randp == 240) {
            urllink = "1lC2NZMGgIJaTn6t3n7WC2Cie4jXkHgY3"; //빵과필름
            flag = "밀리";
            videourl = "https://youtu.be/TPB0UwnnQMg";
        } else if (randp == 241) {
            urllink = "1OvzhllJcB5zlpfeM2mQRH1wMGivZvzj3"; //빵과필름
            flag = "밀리";
            videourl = "https://youtu.be/TPB0UwnnQMg";
        } else if (randp == 242) {
            urllink = "1pMoTsORnuieW39bu7Ma-KbiGN7gg875h"; //사랑의와워음
            flag = "밀리";
            videourl = "https://youtu.be/55AkNLniEBI";
        } else if (randp == 243) {
            urllink = "1BYhmcybeeE4grDp3NOjK07uYKdx4Mngt"; //사랑의와워음
            flag = "밀리";
            videourl = "https://youtu.be/55AkNLniEBI";
        } else if (randp == 244) {
            urllink = "1GzP4L5WZs_fWvokomUBwKS_LmTtH3WZC"; //서머트리
            flag = "밀리";
            videourl = "https://youtu.be/7VE1OL2igSo";
        } else if (randp == 245) {
            urllink = "1zB5Mevz9aI3zE1UI_ij9eb1YBGEU1M5R"; //서머트리
            flag = "밀리";
            videourl = "https://youtu.be/7VE1OL2igSo";
        } else if (randp == 246) {
            urllink = "1XlKb4y4r4Cn65RFUI3aOu3rQz948ySZf"; //설렘의 음표
            flag = "밀리";
            videourl = "https://youtu.be/bCEpLEvEhvw";
        } else if (randp == 247) {
            urllink = "1Svu-xSfCbWFavc8sE4BCWBCQ4VcEWQOb"; //설렘의 음표
            flag = "밀리";
            videourl = "https://youtu.be/bCEpLEvEhvw";
        } else if (randp == 248) {
            urllink = "1UuSnl4bB1uYefcGR1s2IdDZAEM-bXo72"; //성장츄
            flag = "밀리";
            videourl = "https://youtu.be/8l3UvJMizCk";
        } else if (randp == 249) {
            urllink = "1QlD7tfTgLG8CTLQu9E4MGUi7LwX-yXS6"; //성장츄
            flag = "밀리";
            videourl = "https://youtu.be/8l3UvJMizCk";
        } else if (randp == 250) {
            urllink = "1CUjI39amvrLhMn193UlIC5gIh-Xn_sMb"; //세피아컬러풀
            flag = "밀리";
            videourl = "https://youtu.be/fHdJvpiCvQU";
        } else if (randp == 251) {
            urllink = "1Lc1iIajOVdspi7iggs3lBj5wPGgBdNQG"; //세피아컬러풀
            flag = "밀리";
            videourl = "https://youtu.be/fHdJvpiCvQU";
        } else if (randp == 252) {
            urllink = "1m-yKfdWTBT8PKEuWFvCZHJehvpUmgZXX"; //수중캔디
            flag = "밀리";
            videourl = "https://youtu.be/8PjFmzAeIb4";
        } else if (randp == 253) {
            urllink = "14vbyTuqjk3Wu--VAQJdIJTbGF47KgnNC"; //수중캔디
            flag = "밀리";
            videourl = "https://youtu.be/8PjFmzAeIb4";
        } else if (randp == 254) {
            urllink = "1AlttMSwBR-w-hYa6SW6us7NI7hqC-T7B"; //스노우레터
            flag = "밀리";
            videourl = "https://youtu.be/PYS0yZow6Qw";
        } else if (randp == 255) {
            urllink = "17qLIbOCfOAV4e_XKz38Z_XYj_yPhQZnI"; //스노우레터
            flag = "밀리";
            videourl = "https://youtu.be/PYS0yZow6Qw";
        } else if (randp == 256) {
            urllink = "1kFMqcD3zNUt7vM4iCs7mgEsKFVgJBpf1"; //스타트립
            flag = "밀리";
            videourl = "https://youtu.be/yze7ngSpOBY";
        } else if (randp == 257) {
            urllink = "1tLXnYXVPg-RrbQnQIGagvNSOmNeNFzMr"; //스타트립
            flag = "밀리";
            videourl = "https://youtu.be/yze7ngSpOBY";
        } else if (randp == 258) {
            urllink = "1wYTIpHlzcyUT4HQRQN7IhAJzIGvWW35b"; //스트로베리
            flag = "밀리";
            videourl = "https://youtu.be/HNkYyinIyMU";
        } else if (randp == 259) {
            urllink = "1PZ35Ehic40GtQRWVeGxbWVVMrd-eRkS1"; //스트로베리
            flag = "밀리";
            videourl = "https://youtu.be/HNkYyinIyMU";
        } else if (randp == 260) {
            urllink = "1j4LCXQZpvKKPqMQJLVjEmYNm5PO_qYaS"; //시크릿쥬얼
            flag = "밀리";
            videourl = "";
        } else if (randp == 261) {
            urllink = "1-IC3cdj2UPGqsN0aZZaOsLdXtBOJ5PvY"; //시크릿쥬얼
            flag = "밀리";
            videourl = "";
        } else if (randp == 262) {
            urllink = "1Q7vdOoWKUAxgODoO4fKmvLXvLxjdd4zH"; //심층머메이드
            flag = "밀리";
            videourl = "https://youtu.be/FKxVZ33LYDA";
        } else if (randp == 263) {
            urllink = "1iapA8u2LyC-OT4JzSvDahkWjLrT_CY-4"; //심층머메이드
            flag = "밀리";
            videourl = "https://youtu.be/FKxVZ33LYDA";
        } else if (randp == 264) {
            urllink = "18C_dBmClQayJZ1DK1Yk5qfcYU73tcsu5"; //심홍의 파시온
            flag = "밀리";
            videourl = "";
        } else if (randp == 265) {
            urllink = "1wb9vsTPc7X1IkRDIBOIvSu_a6P1AwLv0"; //심홍의 파시온
            flag = "밀리";
            videourl = "";
        } else if (randp == 266) {
            urllink = "1xGtXRHrElXSQoWx2yXgjipkDgeJZA49s"; //썬리듬
            flag = "밀리";
            videourl = "https://youtu.be/AhCoBQxoiB8";
        } else if (randp == 267) {
            urllink = "1N4kLTdTVVGnMqw1x_qSGRFqLvcT6-jOR"; //썬리듬
            flag = "밀리";
            videourl = "https://youtu.be/AhCoBQxoiB8";
        } else if (randp == 268) {
            urllink = "1yCUoZgZw8nL8bgkqNSoKvtmC45ylYVXg"; //아일
            flag = "밀리";
            videourl = "https://youtu.be/LsgAc9nmCXw";
        } else if (randp == 269) {
            urllink = "10XPR6UEuwdG5UKid8ect762KO2Ypjyvo"; //아일
            flag = "밀리";
            videourl = "https://youtu.be/LsgAc9nmCXw";
        } else if (randp == 270) {
            urllink = "1Pt8w38gZ_X1gSr9Gn2rbWZae5tyGiFGu"; //아침노을
            flag = "밀리";
            videourl = "https://youtu.be/kUln3wGpHl0";
        } else if (randp == 271) {
            urllink = "1j3_pkzBO3RT8EQUjjUMdqVwCWgt6i_C7"; //아침노을
            flag = "밀리";
            videourl = "https://youtu.be/kUln3wGpHl0";
        } else if (randp == 272) {
            urllink = "1xuafbVBW3CHbD48DAsT06aq4y1zQBDvJ"; //애로우
            flag = "밀리";
            videourl = "https://youtu.be/8LUBZK3eEyg";
        } else if (randp == 273) {
            urllink = "1fU7DDoL4b3SAaphLA1ZyyjIeDwjOGBSg"; //애로우
            flag = "밀리";
            videourl = "https://youtu.be/8LUBZK3eEyg";
        } else if (randp == 274) {
            urllink = "1dZjz6XrTNnvhCO6Z-4FH02lSRPW5BPrv"; //애타는 마음
            flag = "밀리";
            videourl = "https://youtu.be/pPUwSqIC2vA";
        } else if (randp == 275) {
            urllink = "1BMZlkNh4Te72EC5Waf92IjzmvrDkbH94"; //애타는 마음
            flag = "밀리";
            videourl = "https://youtu.be/pPUwSqIC2vA";
        } else if (randp == 276) {
            urllink = "18n31Z6AP9X4asUVKSVEFjsGLXeTuY6rl"; //얼라이브
            flag = "밀리";
            videourl = "https://youtu.be/TGJtJVa2oT8";
        } else if (randp == 277) {
            urllink = "1KA2-0usdPGqV3X5eBKu5_uaFxyzxyd3h"; //얼라이브
            flag = "밀리";
            videourl = "https://youtu.be/TGJtJVa2oT8";
        } else if (randp == 278) {
            urllink = "1_8mt0114-WmCXuNUgvsL9AZc0amanCV8"; //에바모요
            flag = "밀리";
            videourl = "https://youtu.be/Rj4gs_Qb-VQ";
        } else if (randp == 279) {
            urllink = "1rGkiGlMBFk9BuSUnnNltgO0rK8A9DW8Q"; //에바모요
            flag = "밀리";
            videourl = "https://youtu.be/Rj4gs_Qb-VQ";
        } else if (randp == 280) {
            urllink = "1GWDYGL-mNlqb9evN742y2kzTLT0E3hFA"; //영원의꽃
            flag = "밀리";
            videourl = "https://youtu.be/sVF1AHkmxRQ";
        } else if (randp == 281) {
            urllink = "1dFWB2niV4KlXfAkUlSgOmulJAmUgDc59"; //영원의꽃
            flag = "밀리";
            videourl = "https://youtu.be/sVF1AHkmxRQ";
        } else if (randp == 282) {
            urllink = "16Zwr_be5bjLQf33-tQ20pksVfDdCNyrU"; //오디너리 클로버
            flag = "밀리";
            videourl = "https://youtu.be/6ygThnMQjsw";
        } else if (randp == 283) {
            urllink = "1m9iEYIxTGeflxJjh1YtWXu7-QysKqc-j"; //오디너리 클로버
            flag = "밀리";
            videourl = "https://youtu.be/6ygThnMQjsw";
        } else if (randp == 284) {
            urllink = "17n--pJHR_7kGn1oBOQS6vk1gEdxQOTli"; //오렌지색 하늘
            flag = "밀리";
            videourl = "https://youtu.be/s1gdAEd1yWE";
        } else if (randp == 285) {
            urllink = "1lFIvIi18eaMMFzQlyUaWma0wr_qb03Fc"; //오렌지색 하늘
            flag = "밀리";
            videourl = "https://youtu.be/s1gdAEd1yWE";
        } else if (randp == 286) {
            urllink = "1xwCInLoS_WTTKSBTpQXlm7IFQXertkBW"; //오리지널 목소리
            flag = "밀리";
            videourl = "https://youtu.be/1PJBdsAK5fY";
        } else if (randp == 287) {
            urllink = "15f2GODqmaVWLT-Mi3E2K4MBmu-KP9HDw"; //오리지널 목소리
            flag = "밀리";
            videourl = "https://youtu.be/1PJBdsAK5fY";
        } else if (randp == 288) {
            urllink = "1h2OIuA1eaaR5WW5M3anR1rX3aLZ5kXJu"; //왜냐면 당신은
            flag = "밀리";
            videourl = "https://youtu.be/A1ygdjDGjOA";
        } else if (randp == 289) {
            urllink = "1CgVWWVLmKGAc5aDGj1XDVfc6qEJgLdBz"; //왜냐면 당신은
            flag = "밀리";
            videourl = "https://youtu.be/A1ygdjDGjOA";
        } else if (randp == 290) {
            urllink = "1NLBgooW_If29CZywaudLRA8Y3eeo5MnW"; //월요일의
            flag = "밀리";
            videourl = "https://youtu.be/D9qNF2F7AJc";
        } else if (randp == 291) {
            urllink = "1q9cDYoRojYc2rUEpBE9TpHG5e4D45XJv"; //월요일의
            flag = "밀리";
            videourl = "https://youtu.be/D9qNF2F7AJc";
        } else if (randp == 292) {
            urllink = "1Ghd4tpQ0bll78F6GZ_y-kDmMRodcFCna"; //유리색 금붕어
            flag = "밀리";
            videourl = "https://youtu.be/EqqodoFdygo";
        } else if (randp == 293) {
            urllink = "1c2Op8VHMSRYid1XJtBYKlD9fPayag7_u"; //유리색 금붕어
            flag = "밀리";
            videourl = "https://youtu.be/EqqodoFdygo";
        } else if (randp == 294) {
            urllink = "1DpkhLyEI3w1F7r0MVjzTzVjrN-AGo9hL"; //유성군
            flag = "밀리";
            videourl = "https://youtu.be/iAvrTAQk9fw";
        } else if (randp == 295) {
            urllink = "1r0G00q9HiNl-0G-eHQ4GHRJSRHAddldq"; //유성군
            flag = "밀리";
            videourl = "https://youtu.be/iAvrTAQk9fw";
        } else if (randp == 296) {
            urllink = "1YP99MVizseB6ua7M5Syd_xYiluhIoOAS"; //인빈시블
            flag = "밀리";
            videourl = "https://youtu.be/hVvnDqzVQOA";
        } else if (randp == 297) {
            urllink = "1wYTguENNRChxemPa35qgkxWQfHdWAJf6"; //인빈시블
            flag = "밀리";
            videourl = "https://youtu.be/hVvnDqzVQOA";
        } else if (randp == 298) {
            urllink = "11qgy-g5O1FoIdf9aq3Um69e7Pp_0gstr"; //전별의 새
            flag = "밀리";
            videourl = "https://youtu.be/njLtObI9CQo";
        } else if (randp == 299) {
            urllink = "1ACL3ntSpvxvChjRDI9fScmZods_wCcHB"; //전별의 새
            flag = "밀리";
            videourl = "https://youtu.be/njLtObI9CQo";
        } else if (randp == 300) {
            urllink = "1JTdm1Pgi4Zh4Dkzv4vhrqwXmabxiesHj"; //절대적 퍼포머
            flag = "밀리";
            videourl = "https://youtu.be/qb-gOHaQz-E";
        } else if (randp == 301) {
            urllink = "1VID_ZrPqvi3XZ27u25FflyUpkayJzGvq"; //절대적 퍼포머
            flag = "밀리";
            videourl = "https://youtu.be/qb-gOHaQz-E";
        } else if (randp == 302) {
            urllink = "160rFuAkaDr-EKhRJx-1DS0meRoZhZTll"; //종이접기 이야기
            flag = "밀리";
            videourl = "https://youtu.be/LXznNYiOecc";
        } else if (randp == 303) {
            urllink = "1d_m8garlAZV592KgJVi__xOU4CCKLm1a"; //종이접기 이야기
            flag = "밀리";
            videourl = "https://youtu.be/LXznNYiOecc";
        } else if (randp == 304) {
            urllink = "1rvfyKvwCnWevgkaqfxSoTF9t3_jiXvhj"; //주말뿐인 할리퀸
            flag = "밀리";
            videourl = "https://youtu.be/qSC_Dcwxx3I";
        } else if (randp == 305) {
            urllink = "1-fb5tIkrSDtmgW1mT666_T25ODpJIct5"; //주말뿐인 할리퀸
            flag = "밀리";
            videourl = "https://youtu.be/qSC_Dcwxx3I";
        } else if (randp == 306) {
            urllink = "1S1aKTYk1V36Qz9wkcUepiV1NYSj9d_c2"; //주문
            flag = "밀리";
            videourl = "https://youtu.be/1GIxJQMo98o";
        } else if (randp == 307) {
            urllink = "1WzO7Nrl9oqlptH7cmWRdXc0XLG3KAr-B"; //주문
            flag = "밀리";
            videourl = "https://youtu.be/1GIxJQMo98o";
        } else if (randp == 308) {
            urllink = "1lpvhb0RfGmyrxMEbNzBJHnNk3pYEfGc6"; //첫사랑 버터플라이
            flag = "밀리";
            videourl = "https://youtu.be/u5oTntUOCsc";
        } else if (randp == 309) {
            urllink = "14l_bqHD3tXRNvNeO-b-npg2YYy39k0Hd"; //첫사랑 버터플라이
            flag = "밀리";
            videourl = "https://youtu.be/u5oTntUOCsc";
        } else if (randp == 310) {
            urllink = "1qGC73Bqpwi5BcQ-m1WLI1n4OIQEkMVCu"; //첫울음과 클럽
            flag = "밀리";
            videourl = "";
        } else if (randp == 311) {
            urllink = "1HFy7gHgLG0X_DeG3HjUvX4oupw1-MdfD"; //첫울음과 클럽
            flag = "밀리";
            videourl = "";
        } else if (randp == 312) {
            urllink = "1tzbV-hwT3xrJrZjOfRnhEkacJY3CMSTn"; //초자연현상
            flag = "밀리";
            videourl = "https://youtu.be/80bsTjlbR9Q";
        } else if (randp == 313) {
            urllink = "1MsHH7gRcuZv_96OcU19VSLEbT2tBOXMM"; //초자연현상
            flag = "밀리";
            videourl = "https://youtu.be/80bsTjlbR9Q";
        } else if (randp == 314) {
            urllink = "1QsMhk-bjq9g4nHWS2BTuxlsybbtBrjzz"; //카니발 자포네스크
            flag = "밀리";
            videourl = "https://youtu.be/g6jHcg8wocI";
        } else if (randp == 315) {
            urllink = "1Myy6TjLpqPcOEU6rYzQz1rAZY3cgcEpL"; //카니발 자포네스크
            flag = "밀리";
            videourl = "https://youtu.be/g6jHcg8wocI";
        } else if (randp == 316) {
            urllink = "1L9yapkdspdJE2tsT8uQkW0eZ-oI5MMzL"; //투명한 프롤로그
            flag = "밀리";
            videourl = "https://youtu.be/CbH3hT8DsA8";
        } else if (randp == 317) {
            urllink = "16i7kkFo7FhgcMY0Rda4lNdZmaEc4ib3R"; //투명한 프롤로그
            flag = "밀리";
            videourl = "https://youtu.be/CbH3hT8DsA8";
        } else if (randp == 318) {
            urllink = "12mGdQLfv6uj0uGQPNvslz6T1y3hGH-oB"; //페스타 일루
            flag = "밀리";
            videourl = "https://youtu.be/-5FI41msQa0";
        } else if (randp == 319) {
            urllink = "14MeGMlxGBL3CaVbRw5YDIF26QVDV5TnW"; //페스타 일루
            flag = "밀리";
            videourl = "https://youtu.be/-5FI41msQa0";
        } else if (randp == 320) {
            urllink = "1pinqT8O32s7pVHqlaj1wG4tdg-0ErFjf"; //프랄린
            flag = "밀리";
            videourl = "https://youtu.be/Y7N_6J-aESs";
        } else if (randp == 321) {
            urllink = "10icvwOIIL4AkISMBjd8n8Y5A2mB_f_Xq"; //프랄린
            flag = "밀리";
            videourl = "https://youtu.be/Y7N_6J-aESs";
        } else if (randp == 322) {
            urllink = "162bfAxOW1Z8oxouynPyU9NP1HG_Wx2dP"; //프리뮬러
            flag = "밀리";
            videourl = "https://youtu.be/7qe5ejqavmw";
        } else if (randp == 323) {
            urllink = "1AaOh1avmTYWY79FQ0IUYiG_feLljw2QR"; //프리뮬러
            flag = "밀리";
            videourl = "https://youtu.be/7qe5ejqavmw";
        } else if (randp == 324) {
            urllink = "19f5FjizxCeA7KLFHBFPXJdtdEzk23fbF"; //피는것은속세의
            flag = "밀리";
            videourl = "https://youtu.be/9u4y-kDmSvc";
        } else if (randp == 325) {
            urllink = "1D_KY2ZjygjCh75PgjFPiflxp1M7HWZYV"; //피는것은속세의
            flag = "밀리";
            videourl = "https://youtu.be/9u4y-kDmSvc";
        } else if (randp == 326) {
            urllink = "1lkWZtb-4ebTWLF1SM3G2aZ5nPWKnHnxk"; //피코피코
            flag = "밀리";
            videourl = "https://youtu.be/IQgQZsnEh9c";
        } else if (randp == 327) {
            urllink = "1GVFb18QiFJqr2SfmZT2BUnoZsAdHTwd4"; //피코피코
            flag = "밀리";
            videourl = "https://youtu.be/IQgQZsnEh9c";
        } else if (randp == 328) {
            urllink = "1gc-_eCKRpLjTvgMTgXQZ1XxTWe8-Xdpy"; //하모닉스
            flag = "밀리";
            videourl = "https://youtu.be/--O-nW2vkT8";
        } else if (randp == 329) {
            urllink = "1B7yiCDHmxFTUxD6_HHZh9zdIXzXSeJxG"; //하모닉스
            flag = "밀리";
            videourl = "https://youtu.be/--O-nW2vkT8";
        } else if (randp == 330) {
            urllink = "1NkkrRGlsebDQJX_uLJH_0zXK3gKPZIBH"; //한여름의 다이아
            flag = "밀리";
            videourl = "https://youtu.be/2MN90kwnpIo";
        } else if (randp == 331) {
            urllink = "1mf67ZEyZkxInJYW6Y1sriwmxHIslb4EO"; //한여름의 다이아
            flag = "밀리";
            videourl = "https://youtu.be/2MN90kwnpIo";
        } else if (randp == 332) {
            urllink = "1-XRZmQtpEHliVNAnobOHdVWcf350FufC"; //한탄의 프렉션
            flag = "밀리";
            videourl = "https://youtu.be/O9E_xoVQnLM";
        } else if (randp == 333) {
            urllink = "1M2WBLf20-Do14LofskuhTbLR4YTDp4wZ"; //한탄의 프렉션
            flag = "밀리";
            videourl = "https://youtu.be/O9E_xoVQnLM";
        } else if (randp == 334) {
            urllink = "1GraaP7ssrTrBZ_RQwBm56jOniq5MMoFR"; //해피마이가든
            flag = "밀리";
            videourl = "https://youtu.be/lsiMQ_o_S6o";
        } else if (randp == 335) {
            urllink = "1QP4DvnQ_NiHFsJ2MDQW4ICoPvtYZyPIn"; //해피마이가든
            flag = "밀리";
            videourl = "https://youtu.be/lsiMQ_o_S6o";
        } else if (randp == 336) {
            urllink = "17wIUUVEH_aRYLRxhSvcw-5RexF0a1SMw"; //해피이펙트
            flag = "밀리";
            videourl = "https://youtu.be/eeH-Qgvgrs4";
        } else if (randp == 337) {
            urllink = "1TvvnxzLfODWRc8HwFsaCRqzHXxkIFYtd"; //해피이펙트
            flag = "밀리";
            videourl = "https://youtu.be/eeH-Qgvgrs4";
        } else if (randp == 338) {
            urllink = "1OIg_apqv5Wi-PC-RquKYAg6kxyAotg1r"; //허밍로드
            flag = "밀리";
            videourl = "https://youtu.be/lacbHUBy2as";
        } else if (randp == 339) {
            urllink = "1SS-GFbBFtaqtDUTcqBJn3eb2X3nNBx9J"; //허밍로드
            flag = "밀리";
            videourl = "https://youtu.be/lacbHUBy2as";
        } else if (randp == 340) {
            urllink = "1wkZVM2BMmoCXffZZVWyD-lJIhr73OuJB"; //허밍버드
            flag = "밀리";
            videourl = "https://youtu.be/Mk2GE3k-V7o";
        } else if (randp == 341) {
            urllink = "1w2y4Z_ITK6DDsiu1yO7I8ME3TJEoMAkf"; //허밍버드
            flag = "밀리";
            videourl = "https://youtu.be/Mk2GE3k-V7o";
        } else if (randp == 342) {
            urllink = "1KZ0pRcAGrO020bF_-kmZu3KZQpu2L4XX"; //협기난무
            flag = "밀리";
            videourl = "https://youtu.be/IgbLWtaNUuc";
        } else if (randp == 343) {
            urllink = "19PkbQMULZ20UBNSV8B4mexr5zOYqgHSI"; //협기난무
            flag = "밀리";
            videourl = "https://youtu.be/IgbLWtaNUuc";
        } else if (randp == 344) {
            urllink = "1KR-Ir_1jKuFJgs6NxJB38cgAzMkH4SqA"; //데이트 퍼레이드 ++
            flag = "밀리";
            videourl = "https://youtu.be/O--YcLJNe60";
        } else if (randp == 345) {
            urllink = "1xzAtcsZn-J5ssWZYMhBuoKuaduZ2p6Bc"; //데이트 퍼레이드
            flag = "밀리";
            videourl = "https://youtu.be/O--YcLJNe60";
        } else if (randp == 346) {
            urllink = "193uA35v12MQJzqJRpYaxn94cwLYEWacY"; //샴록 비바스
            flag = "밀리";
            videourl = "https://youtu.be/t2u3O2iJr2k";
        } else if (randp == 347) {
            urllink = "1yfDbOe4Oqmfc_lnLcCo1IyGDblat_rGM"; //샴록 비바스
            flag = "밀리";
            videourl = "https://youtu.be/t2u3O2iJr2k";
        } else if (randp == 348) {
            urllink = "1iXgOTpRpuPa4JsYRYCbV2zL8xUxUr210"; //듀얼
            flag = "밀리";
            videourl = "https://youtu.be/y0qzE4Nc4nw";
        } else if (randp == 349) {
            urllink = "1dFLESIx61Ot_rwy2WQSC0ptGBUdYx-Rq"; //듀얼
            flag = "밀리";
            videourl = "https://youtu.be/y0qzE4Nc4nw";
        } else if (randp == 350) {
            urllink = "1nWkAvmVl8tYIlB37RS_4XEYRTiOpd-gS"; //너에게 비치는
            flag = "밀리";
            videourl = "https://youtu.be/uQR5u51fZzo";
        } else if (randp == 351) {
            urllink = "193d8KWqSdXpaDefaoaL6cbru2m9pghsH"; //너에게 비치는
            flag = "밀리";
            videourl = "https://youtu.be/uQR5u51fZzo";
        } else if (randp == 352) {
            urllink = "1ruVGNm-lYgcQftaP61W7MwMrvYRPIkir"; //네가 한가운데
            flag = "밀리";
            videourl = "https://youtu.be/FtDv9t1pdOs";
        } else if (randp == 353) {
            urllink = "1mcFxnee28QfwsyniqXMs3UPJs7Bv7sxO"; //네가 한가운데
            flag = "밀리";
            videourl = "https://youtu.be/FtDv9t1pdOs";
        } else if (randp == 354) {
            urllink = "1sl00vgCMS4i1-40_GIb-McK3kluNa0Uz"; //반짝 픽업
            flag = "밀리";
            videourl = "https://youtu.be/dXrv0ys18jQ";
        } else if (randp == 355) {
            urllink = "1iTFnb-1V14aMf52nxOpn-uP3odzcljY3"; //반짝 픽업
            flag = "밀리";
            videourl = "https://youtu.be/dXrv0ys18jQ";
        } else if (randp == 356) {
            urllink = "1GzXaJa9rfIbzaVm49_NWygu39cd_DFnF"; //아이돌은 이렇게
            flag = "밀리";
            videourl = "";
        } else if (randp == 357) {
            urllink = "1Ru-OF03ut2MW_XYPy6XpzqeRQH4msF4s"; //아이돌은 이렇게
            flag = "밀리";
            videourl = "";
        } else if (randp == 358) {
            urllink = "1ifWhOi8ct4bqgq_tvOEe9CXybCPVBfy5"; //용기의
            flag = "밀리";
            videourl = "https://youtu.be/iNytTYQ75v4";
        } else if (randp == 359) {
            urllink = "16VpEYzyDKJC4-D8aNjL0173C_hyH7j9H"; //용기의
            flag = "밀리";
            videourl = "https://youtu.be/iNytTYQ75v4";
        } else if (randp == 360) {
            urllink = "1HywLM_5VNCpHjEeMfO7I6msS284-Kw7m"; //뷰티풀 빌리버
            flag = "밀리";
            videourl = "";
        } else if (randp == 361) {
            urllink = "1PzW1ajYCLFzi56db5BcmnmWKDR22aAoh"; //뷰티풀 빌리버
            flag = "밀리";
            videourl = "";
        } else if (randp == 362) {
            urllink = "16273IJblaViR3wYLEYC0US9ChjsY6e0U"; //collier
            flag = "밀리";
            videourl = "";
        } else if (randp == 363) {
            urllink = "1i7dd272lwtRac4697tjgdWqsOOynJKlT"; //collier
            flag = "밀리";
            videourl = "";
        } else if (randp == 364) {
            urllink = "1qsKQkPZfilijRmrSDGgj9o115pRygXTX"; //Cross the future
            flag = "밀리";
            videourl = "";
        } else if (randp == 365) {
            urllink = "13vZRIIpiLunyGAJEKA4hfTM_mBvHGbOX"; //Cross the future
            flag = "밀리";
            videourl = "";
        } else if (randp == 366) {
            urllink = "1pgXTyaSQMKWZVlTemRoyeG6LYWjiVKiJ"; //이표심층심리
            flag = "밀리";
            videourl = "";
        } else if (randp == 367) {
            urllink = "1PP1f4ST-8KgyALhshryzFxNorPZOfMHk"; //이표심층심리
            flag = "밀리";
            videourl = "";
        } else if (randp == 368) {
            urllink = "1HaZ3X9Dy_Sd0zxoZX6aZBtCS7qIDd-2V"; //플루메리아의 꽃
            flag = "밀리";
            videourl = "";
        } else if (randp == 369) {
            urllink = "1M1oZnY2oT0YnzQZ7kZAmytlXRZWZi4rG"; //플루메리아의 꽃
            flag = "밀리";
            videourl = "";
        } else if (randp == 370) {
            urllink = "1Ne3-32K58Rzoiejwu1CJi10uL2a7r8f8"; //러브이즈겜
            flag = "밀리";
            videourl = "https://youtu.be/O5Teb02I8Po";
        } else if (randp == 371) {
            urllink = "1RxNsyUgYYbFG0M0Wn6znJ4t5c1Wtgyj6"; //러브이즈겜
            flag = "밀리";
            videourl = "https://youtu.be/O5Teb02I8Po";
        } else if (randp == 372) {
            urllink = "1U2QFYsHdyPkLh2TP-gg6hFQw1pnJHmO4"; //미래 비행
            flag = "밀리";
            videourl = "https://youtu.be/5-fP0W1J51A";
        } else if (randp == 373) {
            urllink = "1m0o87M-sCJvu6EEE7d-t16JApDgRhBe2"; //미래 비행
            flag = "밀리";
            videourl = "https://youtu.be/5-fP0W1J51A";
        } else if (randp == 374) {
            urllink = "106NWmacssTzOxqSivpL8Ol8LIicAXHpc"; //미래계 드리머
            flag = "밀리";
            videourl = "https://youtu.be/Fuy3xknAsEs";
        } else if (randp == 375) {
            urllink = "1azL7Nzz8qmtsGl-nxG_BwvLh6HypLfsm"; //미래계 드리머
            flag = "밀리";
            videourl = "https://youtu.be/Fuy3xknAsEs";
        } else if (randp == 376) {
            urllink = "13o1uv2vnjaAc3KQKaWkqk4cUTvHIgHzs"; //Precious Grain
            flag = "밀리";
            videourl = "https://youtu.be/1MzOJDiSKcg";
        } else if (randp == 377) {
            urllink = "1vktOvTASXD-F_Duet4Kgc8avUJnnWL1C"; //Precious Grain
            flag = "밀리";
            videourl = "https://youtu.be/1MzOJDiSKcg";
        } else if (randp == 378) {
            urllink = "1gaYYTx4mlQEY2tLz9Vt0sqOab5frxG1E"; //Catch my dream
            flag = "밀리";
            videourl = "https://youtu.be/zg44NdDaNOo";
        } else if (randp == 379) {
            urllink = "1oOyVP-eiA41pYeAf-TLhnTJ2TNsnZJBt"; //Catch my dream
            flag = "밀리";
            videourl = "https://youtu.be/zg44NdDaNOo";
        } else if (randp == 380) {
            urllink = "1EhkOKeMwA8gTHoWAVY7jIcTEeGzBffWu"; //SING MY SONG
            flag = "밀리";
            videourl = "https://youtu.be/8ylJMoKn5ag";
        } else if (randp == 381) {
            urllink = "158vUZcELZCgWoXfD1Q5hM310niAHIT8O"; //SING MY SONG
            flag = "밀리";
            videourl = "https://youtu.be/8ylJMoKn5ag";
        } else if (randp == 382) {
            urllink = "1nruQKwqy4fBK8DOtkRzPAocon83wCM2F"; //사랑의 Lesson 초급편
            flag = "밀리";
            videourl = "https://youtu.be/aOVI5eCWRek";
        } else if (randp == 383) {
            urllink = "13sDFc5Kb2lHmjHQi9dHJHyygXHPWkhCQ"; //사랑의 Lesson 초급편
            flag = "밀리";
            videourl = "https://youtu.be/aOVI5eCWRek";
        } else if (randp == 384) {
            urllink = "1AcdeyvkZMxEJ1BTkS0AjRB5eh8KvAIC1"; //아침노을의 크레센도
            flag = "밀리";
            videourl = "https://youtu.be/kUln3wGpHl0";
        } else if (randp == 385) {
            urllink = "13fC1pw0TJXBfKUDPIjbyi76Iq4QwCPIR"; //아침노을의 크레센도
            flag = "밀리";
            videourl = "https://youtu.be/kUln3wGpHl0";
        } else if (randp == 386) {
            urllink = "1Uz6ItxiRfp8PI67JpakbtbWPl9sCK9vh"; //진정한 나
            flag = "밀리";
            videourl = "https://youtu.be/md6cTKuOLIA";
        } else if (randp == 387) {
            urllink = "1nbuMh5aNrZ9rUxneH0kmVOdB1od0MHXC"; //진정한 나
            flag = "밀리";
            videourl = "https://youtu.be/md6cTKuOLIA";
        } else if (randp == 388) {
            urllink = "1H1Mobk7pzhnmwnVP69U45y97qeQeArFD"; //Hearty!!
            flag = "밀리";
            videourl = "https://youtu.be/ITvgx50r-mI";
        } else if (randp == 389) {
            urllink = "1yFjNBV53EkUZtN0ws-Q3A_pj6yboo0YN"; //Hearty!!
            flag = "밀리";
            videourl = "https://youtu.be/ITvgx50r-mI";
        } else if (randp == 390) {
            urllink = "1WqdDj7JiQYv14Mc5u5f4VlERLClMkq0G"; //애프터 스쿨 파티 타임
            flag = "밀리";
            videourl = "https://youtu.be/aO1nAPWP4EY";
        } else if (randp == 391) {
            urllink = "1FgleY9RZcMXJY1h55kPFUjSgF84Ht_UX"; //애프터 스쿨 파티 타임
            flag = "밀리";
            videourl = "https://youtu.be/aO1nAPWP4EY";
        } else if (randp == 392) {
            urllink = "1-nrqa6KoLhUHTCjr5Xd0gYJmt3m8szn8"; //프로즌 워드
            flag = "밀리";
            videourl = "https://youtu.be/1Nq9K8GCtk0";
        } else if (randp == 393) {
            urllink = "1nrw7UxJaerriSsdC4OY5ETKTG3TICbIg"; //프로즌 워드
            flag = "밀리";
            videourl = "https://youtu.be/1Nq9K8GCtk0";
        } else if (randp == 394) {
            urllink = "10mmSVAtpndJmhp6tFkY8Kc0Emo9waJsf"; //마음은 Carnaval
            flag = "밀리";
            videourl = "https://youtu.be/2WdrDqo3n2Q";
        } else if (randp == 395) {
            urllink = "1-zMN9TNf4B92b0BFJJONk_S7r5Mm_va0"; //마음은 Carnaval
            flag = "밀리";
            videourl = "https://youtu.be/2WdrDqo3n2Q";
        } else if (randp == 396) {
            urllink = "1QFIxvX-PHhEthJPi_FmZ5XKc4ua1AuJX"; //판타지스타 카니발
            flag = "밀리";
            videourl = "https://youtu.be/il8Udk-4gfk";
        } else if (randp == 397) {
            urllink = "10If8OvnKKidyrgIb_hcnIRfPn8XqytGs"; //판타지스타 카니발
            flag = "밀리";
            videourl = "https://youtu.be/il8Udk-4gfk";
        } else if (randp == 398) {
            urllink = "1Fw-PKkXylfP8187LZV7Kho3mCswW_xuc"; //프린세스 아라모드
            flag = "밀리";
            videourl = "https://youtu.be/wN10I1rUxwc";
        } else if (randp == 399) {
            urllink = "1GX15TCFl_-qgPRC6JdXPj7TCRhgVvgUV"; //프린세스 아라모드
            flag = "밀리";
            videourl = "https://youtu.be/wN10I1rUxwc";
        } else if (randp == 400) {
            urllink = "1M8veKyASTYJZDE8-DT-6eUyF7JJGrEWE"; //Maria Trap
            flag = "밀리";
            videourl = "https://youtu.be/T_PxnnggQIA";
        } else if (randp == 401) {
            urllink = "1OXwlFJYvFf74or-kpLlyo2y5P-doNQG7"; //Maria Trap
            flag = "밀리";
            videourl = "https://youtu.be/T_PxnnggQIA";
        } else if (randp == 402) {
            urllink = "1vca84UpI2d_7PCMuJfeATkXSt4YrOrXq"; //새장 스크립쳐
            flag = "밀리";
            videourl = "https://youtu.be/U9MPfI2vhsM";
        } else if (randp == 403) {
            urllink = "1u9LMNMptuDROHQ5knd9xiq_dlee_2vGj"; //새장 스크립쳐
            flag = "밀리";
            videourl = "https://youtu.be/U9MPfI2vhsM";
        } else if (randp == 404) {
            urllink = "1eMIuNLBVgV7s5M6IIfrTUgLPguD12T6K"; //Heart♡・데이즈・Night☆
            flag = "밀리";
            videourl = "https://youtu.be/-8EWTTE4xgM";
        } else if (randp == 405) {
            urllink = "1kgxk9oYhvv6gIw-SYBu_L_Ww9nuzN0Qv"; //Heart♡・데이즈・Night☆
            flag = "밀리";
            videourl = "https://youtu.be/-8EWTTE4xgM";
        } else if (randp == 406) {
            urllink = "1-bGMk55xbbgvXf67pAv1ZE7R40FavT0W"; //프리티~~~잇→ 냥냥!
            flag = "밀리";
            videourl = "https://youtu.be/b5FWzrwuXfQ";
        } else if (randp == 407) {
            urllink = "1MybAu0_tM3JwuGht3sGr8sSaqK50yl57"; //프리티~~~잇→ 냥냥!
            flag = "밀리";
            videourl = "https://youtu.be/b5FWzrwuXfQ";
        } else if (randp == 408) {
            urllink = "1oWsBBEXj9xHsVgsBfRqg0_MY-SNF9PFf"; //AIKANE?
            flag = "밀리";
            videourl = "https://youtu.be/nDVkDF8Hm3c";
        } else if (randp == 409) {
            urllink = "1pTHumVmnM3-M7bzlbp-ZrOSnU-mZfKnL"; //AIKANE?
            flag = "밀리";
            videourl = "https://youtu.be/nDVkDF8Hm3c";
        } else if (randp == 410) {
            urllink = "1psMKa8thwxESL8OWhz2CTxNgSeWE-9i5"; //Get My Shinin'
            flag = "밀리";
            videourl = "https://youtu.be/P1TI5cFK-F0";
        } else if (randp == 411) {
            urllink = "1g_t6x5F8cGTFT9ytcchgcGb76cXhhL7s"; //Get My Shinin'
            flag = "밀리";
            videourl = "https://youtu.be/P1TI5cFK-F0";
        } else if (randp == 412) {
            urllink = "1tQixzQPra15ZIRMmVV8Z_F14B4HIqRa8"; //유니존☆비트
            flag = "밀리";
            videourl = "https://youtu.be/FKs88_-iJKc";
        } else if (randp == 413) {
            urllink = "15vwtca7ua6DAFMXv8TtZG2vEPszbnobk"; //유니존☆비트
            flag = "밀리";
            videourl = "https://youtu.be/FKs88_-iJKc";
        } else if (randp == 414) {
            urllink = "1cd2fFZqT8aXcGZ5_0j0_UBEhG982rAoU"; //Oli Oli DISCO
            flag = "밀리";
            videourl = "https://youtu.be/6nFqLCrJtN4";
        } else if (randp == 415) {
            urllink = "1-HLRKZvHPyr3l9bhalTcu6ZLVZg9Rsf4"; //Oli Oli DISCO
            flag = "밀리";
            videourl = "https://youtu.be/6nFqLCrJtN4";
        } else if (randp == 416) {
            urllink = "19xc6A2cJ9qkwqE1iTmwox0Nu6xMbKhSc"; //저기, 들어줬으면 하는게 있어
            flag = "밀리";
            videourl = "https://youtu.be/uN81uI8Dv4c";
        } else if (randp == 417) {
            urllink = "1wjN63fAEpDI_24wWxvjbtec1iYUUy_2s"; //저기, 들어줬으면 하는게 있어
            flag = "밀리";
            videourl = "https://youtu.be/uN81uI8Dv4c";
        } else if (randp == 418) {
            urllink = "1YAIkr9p7WltK0GX7nSitU0soVX54JJrd"; //사과의 마치
            flag = "밀리";
            videourl = "https://youtu.be/7H_sVYE0i0U";
        } else if (randp == 419) {
            urllink = "1GTVxT9ARIIN-Z8y47I3TLaNvOEMf_SaS"; //사과의 마치
            flag = "밀리";
            videourl = "https://youtu.be/7H_sVYE0i0U";
        } else if (randp == 420) {
            urllink = "1X4LhOa1MmSzvtW0AwBKz6xPitB49Tpp3"; //마음☆엑서사이즈
            flag = "밀리";
            videourl = "https://youtu.be/NmeU5Nz3a9g";
        } else if (randp == 421) {
            urllink = "1mL6qHhg2BUVuX278WUGu1hwGXbNqnsjj"; //마음☆엑서사이즈
            flag = "밀리";
            videourl = "https://youtu.be/NmeU5Nz3a9g";
        } else if (randp == 422) {
            urllink = "11LPADJkQB5h1sBLo3xYH5hW_1amUe2sg"; //POKER POKER
            flag = "밀리";
            videourl = "https://youtu.be/mNzGb7c6jLs";
        } else if (randp == 423) {
            urllink = "1785_jkf68EWFwJLP3gJ9egLJMsNOGAGt"; //POKER POKER
            flag = "밀리";
            videourl = "https://youtu.be/mNzGb7c6jLs";
        } else if (randp == 424) {
            urllink = "1Y70MVFpvgkSf2aGzw0XMQWvD92go-iJO"; //홉♪ 스텝♪ 레인보우♪
            flag = "밀리";
            videourl = "https://youtu.be/8U-gpPLAE2g";
        } else if (randp == 425) {
            urllink = "1NeCMNutT6m5_OHp0rGvuGm9_BXMcqctq"; //홉♪ 스텝♪ 레인보우♪
            flag = "밀리";
            videourl = "https://youtu.be/8U-gpPLAE2g";
        } else if (randp == 426) {
            urllink = "1deBKrqfW77LOCk7AE6JLB9kGmunhkvM2"; //BOUNCING♪ SMILE!
            flag = "밀리";
            videourl = "https://youtu.be/hadxYP_pJL8";
        } else if (randp == 427) {
            urllink = "1Xw6us91FQC_rHpDujdBHGaj6nOUFREO-"; //BOUNCING♪ SMILE!
            flag = "밀리";
            videourl = "https://youtu.be/hadxYP_pJL8";
        } else if (randp == 428) {
            urllink = "12WZmxBw8fTuOyq9t9pseX1E8xBcQEDoQ"; //탐험 모험☆하이호-대
            flag = "밀리";
            videourl = "https://youtu.be/NRZz8kU3sRY";
        } else if (randp == 429) {
            urllink = "1ggPfHaTJdJ3Veu82KjgWziMtxdsnfD03"; //탐험 모험☆하이호-대
            flag = "밀리";
            videourl = "https://youtu.be/NRZz8kU3sRY";
        } else if (randp == 430) {
            urllink = "1F6JC9tHEgpuNNt1IVab60E5vNmkHU2In"; //비기너즈☆스트라이크
            flag = "밀리";
            videourl = "https://youtu.be/FmwPyWjAEXQ";
        } else if (randp == 431) {
            urllink = "1x7XvfC3ROncXFqXMuEpP2vAe_rwR4nrt"; //비기너즈☆스트라이크
            flag = "밀리";
            videourl = "https://youtu.be/FmwPyWjAEXQ";
        } else if (randp == 432) {
            urllink = "1Vzn_hI55L6XJSGmTmyLdKz4WQYm3_bFr"; //HOME RUN SONG♪
            flag = "밀리";
            videourl = "https://youtu.be/9gjcg5lcDeM";
        } else if (randp == 433) {
            urllink = "1ff8qlVysWLcFFtm2YjkqgL4njCMCz0l6"; //HOME RUN SONG♪
            flag = "밀리";
            videourl = "https://youtu.be/9gjcg5lcDeM";
        } else if (randp == 434) {
            urllink = "1RAqJwZoiVOzfySXVA-AMH1SMvT6VDyl6"; //후와리즘
            flag = "밀리";
            videourl = "https://youtu.be/76cAA437TyQ";
        } else if (randp == 435) {
            urllink = "1pGxUWhX37k0_0nyRQOlj_qRaXe4ddcnR"; //후와리즘
            flag = "밀리";
            videourl = "https://youtu.be/76cAA437TyQ";
        } else if (randp == 436) {
            urllink = "1ZA8uHaygpKNfnCKN9Hxu6zPODPMFhjdW"; //해피☆러키☆제트 머신
            flag = "밀리";
            videourl = "https://youtu.be/3iyUvLNXcfc";
        } else if (randp == 437) {
            urllink = "159kxPWQqeJzyN_F2tsdO7obtjKv017vN"; //해피☆러키☆제트 머신
            flag = "밀리";
            videourl = "https://youtu.be/3iyUvLNXcfc";
        } else if (randp == 438) {
            urllink = "1jjWZ2oP543IOEL-BuPtRqFuvW-GiSBL7"; //Super Lover
            flag = "밀리";
            videourl = "https://youtu.be/8eBrZlG8EWg";
        } else if (randp == 439) {
            urllink = "1PcZB0kdmGdwv5PxhqyvrBqNZa4VKURvb"; //Super Lover
            flag = "밀리";
            videourl = "https://youtu.be/8eBrZlG8EWg";
        } else if (randp == 440) {
            urllink = "1-2syOqwqRhx-ihX_sRuRRy1ykjIHnVcK"; //Home is a coming now!
            flag = "밀리";
            videourl = "https://youtu.be/KOtf6T9UoPc";
        } else if (randp == 441) {
            urllink = "1pNnbeL7Lvb7-CRukon5J0QJktLNuwDow"; //Home is a coming now!
            flag = "밀리";
            videourl = "https://youtu.be/KOtf6T9UoPc";
        } else if (randp == 442) {
            urllink = "1_9OCL_DuE2fL9_nmNM1VtSr16No4xiwz"; //스타 트립
            flag = "밀리";
            videourl = "https://youtu.be/yze7ngSpOBY";
        } else if (randp == 443) {
            urllink = "1vTIHUg5SWT6emCHIV41ueZqx2pv39tGS"; //스타 트립
            flag = "밀리";
            videourl = "https://youtu.be/yze7ngSpOBY";
        } else if (randp == 444) {
            urllink = "1yi9bbY9-wKSP2DlaOJhsXXuI0ECdeqkR"; //최고의 스마일
            flag = "밀리";
            videourl = "https://youtu.be/nTzhx29imLM";
        } else if (randp == 445) {
            urllink = "1y-hUtpAvHr71gg34LKHAq0ihuOw2o1AT"; //최고의 스마일
            flag = "밀리";
            videourl = "https://youtu.be/nTzhx29imLM";
        } else if (randp == 446) {
            urllink = "1TkAUHa_TFvd8iFlRlPfuDZywGUy-m6eG"; //SUPER SIZE LOVE!!
            flag = "밀리";
            videourl = "https://youtu.be/-RMXgJB8Buw";
        } else if (randp == 447) {
            urllink = "1W0tTjD9VxsAarzISkaGzMdpH1l4srLSv"; //SUPER SIZE LOVE!!
            flag = "밀리";
            videourl = "https://youtu.be/-RMXgJB8Buw";
        } else if (randp == 448) {
            urllink = "16xRe3ZNqZwL1JvFaDn0gHd9pHoCQ2fkx"; //만복 지극 풀코오스
            flag = "밀리";
            videourl = "https://youtu.be/TCaOX22I7eg";
        } else if (randp == 449) {
            urllink = "1UzFeQTZHtMEPr71hwGtX6N4jU5-zfSJG"; //만복 지극 풀코오스
            flag = "밀리";
            videourl = "https://youtu.be/TCaOX22I7eg";
        } else if (randp == 450) {
            urllink = "1uRjKBK_qFYZhqV1EmZFD7opp2Pvw3usA"; //지구본에 없는 나라
            flag = "밀리";
            videourl = "https://youtu.be/YvcC7DRSFEU";
        } else if (randp == 451) {
            urllink = "13dJKxxtOWx7sxa3Ev9HA0FD6xPkKFqnz"; //지구본에 없는 나라
            flag = "밀리";
            videourl = "https://youtu.be/YvcC7DRSFEU";
        } else if (randp == 452) {
            urllink = "1R-LzP344992cuTEHxeU1mHC9-Y2fx0EG"; //VIVID 이매지네이션
            flag = "밀리";
            videourl = "https://youtu.be/zsKTXVFk3BE";
        } else if (randp == 453) {
            urllink = "1owCnrrYx5fwfcKQjMMnhz27ZbL1U34vS"; //VIVID 이매지네이션
            flag = "밀리";
            videourl = "https://youtu.be/zsKTXVFk3BE";
        } else if (randp == 454) {
            urllink = "1iqvt10msYdySx2Uub_XUXsUL91A6Iq2s"; //ENTER→PLEASURE
            flag = "밀리";
            videourl = "https://youtu.be/gfOpjTZNkCI";
        } else if (randp == 455) {
            urllink = "1raxqGSVavEa8l_UEimA0Io7N2IyGECyH"; //ENTER→PLEASURE
            flag = "밀리";
            videourl = "https://youtu.be/gfOpjTZNkCI";
        } else if (randp == 456) {
            urllink = "15d4DOmKNIZLfpvKL6rtIPFpzkocguRmt"; //연정의 매스커레이드
            flag = "밀리";
            videourl = "https://youtu.be/zXCqTm42K1I";
        } else if (randp == 457) {
            urllink = "1q2qUf4SRCRyRGIbtJz3ZelCGyeHYvidG"; //연정의 매스커레이드
            flag = "밀리";
            videourl = "https://youtu.be/zXCqTm42K1I";
        } else if (randp == 458) {
            urllink = "1wVXoAif5rMJgIvXE8exSuxNy5Pv-5ZBq"; //사랑의 음색 라인
            flag = "밀리";
            videourl = "https://youtu.be/hephcw_UcjA";
        } else if (randp == 459) {
            urllink = "11N3KSOxUvpnQxAGlIJsB6S786yYGRy-V"; //사랑의 음색 라인
            flag = "밀리";
            videourl = "https://youtu.be/hephcw_UcjA";
        } else if (randp == 460) {
            urllink = "1ti1NsO3aaD_N9pgsO9WJKfoRbL44Orzs"; //문 골드
            flag = "밀리";
            videourl = "https://youtu.be/Al75ApIm8AU";
        } else if (randp == 461) {
            urllink = "1VOvXloLNlgwuNPZM7JGHgINUIjyc5gmQ"; //문 골드
            flag = "밀리";
            videourl = "https://youtu.be/Al75ApIm8AU";
        } else if (randp == 462) {
            urllink = "1ixK0N5V1ynxj5NFAV3W-vrU4e3YlfcJs"; //굿 데이 선샤인!
            flag = "밀리";
            videourl = "https://youtu.be/irhWedAwec4";
        } else if (randp == 463) {
            urllink = "1SFN64mxyHj9K6IJhMyIjbiWd0cVhUNKN"; //굿 데이 선샤인!
            flag = "밀리";
            videourl = "https://youtu.be/irhWedAwec4";
        } else if (randp == 464) {
            urllink = "1BRn6_49SG6vzIt3IB9taCR_VFvcW23nX"; //애니멀☆스테이션!
            flag = "밀리";
            videourl = "https://youtu.be/PR2ZYKtoVmE";
        } else if (randp == 465) {
            urllink = "1oafFOaC3JU7nLiuyoevAvyGR2tlyyGPp"; //애니멀☆스테이션!
            flag = "밀리";
            videourl = "https://youtu.be/PR2ZYKtoVmE";
        } else if (randp == 466) {
            urllink = "1QeasHS5vTBO-BCbeyiAHO05l-CZIcM8h"; //가끔은 시소
            flag = "밀리";
            videourl = "https://youtu.be/Njecpg87niE";
        } else if (randp == 467) {
            urllink = "1-ng9K-WblNPJoW7J3pmoXUQJICLtEWmP"; //가끔은 시소
            flag = "밀리";
            videourl = "https://youtu.be/Njecpg87niE";
        } else if (randp == 468) {
            urllink = "1m3j4s1FlSuPHnTAouBeP7c5cO78yjIuq"; //Border LINE→→→♡
            flag = "밀리";
            videourl = "https://youtu.be/CtxnOF32M3Y";
        } else if (randp == 469) {
            urllink = "1R7uBWECwCRiKWlaKV6nosCRYKDO2Mg1u"; //Border LINE→→→♡
            flag = "밀리";
            videourl = "https://youtu.be/CtxnOF32M3Y";
        } else if (randp == 470) {
            urllink = "16Q7jh2nijuU-7ePmJgmEFn1n0ymzJw-t"; //기도의 날개
            flag = "밀리";
            videourl = "https://youtu.be/UyRrtaM_BLg";
        } else if (randp == 471) {
            urllink = "1PA5uj9PoVhOxNBdJYzFuknsly0oqee44"; //기도의 날개
            flag = "밀리";
            videourl = "https://youtu.be/UyRrtaM_BLg";
        } else if (randp == 472) {
            urllink = "1in4IyPTP547010cAGJp06tg0u4IewBwX"; //비에다 노래하자♪
            flag = "밀리";
            videourl = "https://youtu.be/ONtRy59FFyA";
        } else if (randp == 473) {
            urllink = "1ai40UL98qiA-m4ZWjyieo74RT21XKSvk"; //비에다 노래하자♪
            flag = "밀리";
            videourl = "https://youtu.be/ONtRy59FFyA";
        } else if (randp == 474) {
            urllink = "1mdyNE5-nEFcctH-DTnz_Y-D19bX7hc3M"; //MY STYLE! OUR STYLE!!!!
            flag = "밀리";
            videourl = "https://youtu.be/yB5axTMLDJw";
        } else if (randp == 475) {
            urllink = "1MLgqLiBP4AHBsktoYMuFC3_kNET-s2uq"; //MY STYLE! OUR STYLE!!!!
            flag = "밀리";
            videourl = "https://youtu.be/yB5axTMLDJw";
        } else if (randp == 476) {
            urllink = "1gUf410BxnVDKxMkYwygDgFc8aNeJpHtL"; //작은 사랑의 발소리
            flag = "밀리";
            videourl = "https://youtu.be/79gSZ3LGHsc";
        } else if (randp == 477) {
            urllink = "1hmYkOoOG1-Xhpc4PceNHeFYaAPqfhkRY"; //작은 사랑의 발소리
            flag = "밀리";
            videourl = "https://youtu.be/79gSZ3LGHsc";
        } else if (randp == 478) {
            urllink = "12qegyGXYf-zkUfEi2ABSNX871xxQcVT-"; //저녁바람의 멜로디
            flag = "밀리";
            videourl = "https://youtu.be/dnAqGbshnoc";
        } else if (randp == 479) {
            urllink = "13WSYWGTlFFWV4idw62RK2mubaFJSQgy0"; //저녁바람의 멜로디
            flag = "밀리";
            videourl = "https://youtu.be/dnAqGbshnoc";
        } else if (randp == 480) {
            urllink = "1dcDXQ1_F6BSnyvR-iVTwZPhIaDam4ToP"; //마이페이스☆마이웨이
            flag = "밀리";
            videourl = "https://youtu.be/zoGzsFnzTzw";
        } else if (randp == 481) {
            urllink = "1HtrnW1NUdqaH9kuOCH2-fxUTf8BIDldU"; //마이페이스☆마이웨이
            flag = "밀리";
            videourl = "https://youtu.be/zoGzsFnzTzw";
        } else if (randp == 482) {
            urllink = "17ovcgfawJhjeacWqTcjObv7SjPw6EDKz"; //바람 VS 마이 퓨처
            flag = "밀리";
            videourl = "https://youtu.be/AD_7JzYt_9g";
        } else if (randp == 483) {
            urllink = "1oqH7kJF0A-oF9rZqFwTgM6FPr120kBaD"; //바람 VS 마이 퓨처
            flag = "밀리";
            videourl = "https://youtu.be/AD_7JzYt_9g";
        } else if (randp == 484) {
            urllink = "1g7q4ZOf8y1m0ZY_G0IbZmmhG7xhQAwA1"; //WE ARE ONE!!
            flag = "밀리";
            videourl = "https://youtu.be/RqgKg5yXgLg";
        } else if (randp == 485) {
            urllink = "1R4aD9UwOP4zYuZjDIK0oxIIZTE79FMzh"; //WE ARE ONE!!
            flag = "밀리";
            videourl = "https://youtu.be/RqgKg5yXgLg";
        } else if (randp == 486) {
            urllink = "1G5gqUOxxLQ1rwungSpdnQY4rrGxwftte"; //네가 있어 꿈이 되어
            flag = "밀리";
            videourl = "https://youtu.be/bPyNPX-nNmI";
        } else if (randp == 487) {
            urllink = "1VYImND0Ef_w1umyJbGwvXGJAOKrPIf1w"; //네가 있어 꿈이 되어
            flag = "밀리";
            videourl = "https://youtu.be/bPyNPX-nNmI";
        } else if (randp == 488) {
            urllink = "1gLORs6fsSPMJ50V9wnTkf-TiImJqZv82"; //Snow White
            flag = "밀리";
            videourl = "";
        } else if (randp == 489) {
            urllink = "1Z9eLhlOKfwH-iOfUt4B7U9QyYC_orb-U"; //Snow White
            flag = "밀리";
            videourl = "";
        } else if (randp == 490) {
            urllink = "1IdHEHSe8eWwJmEfMSNyND5QMe4D4dst6"; //추억의 샌드글라스
            flag = "밀리";
            videourl = "";
        } else if (randp == 491) {
            urllink = "1lEC_RId81jCuLZOv2xw6pQ5d9JX_3P-0"; //추억의 샌드글라스
            flag = "밀리";
            videourl = "";
        } else if (randp == 492) {
            urllink = "1-Vh6mu47S6p6fqD3b6Nb2nPp4GRaRTVJ"; //FAKE SELF×TRUE SELF
            flag = "밀리";
            videourl = "";
        } else if (randp == 493) {
            urllink = "1GvrYLkENkyinxV1lwXXYtcR4VCE-kO9B"; //FAKE SELF×TRUE SELF
            flag = "밀리";
            videourl = "";
        } else if (randp == 494) {
            urllink = "1LQe70LXeWMrKQUSA82OOwJH9NrXafNAC"; //Impervious Resolution
            flag = "밀리";
            videourl = "";
        } else if (randp == 495) {
            urllink = "1VCSg3YKFmjVsGaZD4_BxnPDCEi_mN93b"; //Impervious Resolution
            flag = "밀리";
            videourl = "";
        } else if (randp == 496) {
            urllink = "1en1nyFFnPpCQjpGTIW8HG4ybHXwC-Ys9"; //하트 워밍
            flag = "밀리";
            videourl = "";
        } else if (randp == 497) {
            urllink = "1txOp-KpxNXpUinVBb722igHFm3UyDhZW"; //하트 워밍
            flag = "밀리";
            videourl = "";
        } else if (randp == 498) {
            urllink = "1gimI1cAFW3INaOu3UnFD5H4WB0Sz31nt"; //스트로베리・큐피트
            flag = "밀리";
            videourl = "";
        } else if (randp == 499) {
            urllink = "1aBmXpBEhR1zWmcD2THj-mXXa0CfK4Z7Q"; //스트로베리・큐피트
            flag = "밀리";
            videourl = "";
        } else if (randp == 500) {
            urllink = "1TQqXAT_dong-jkQLvvpNaHhburi2RsmP"; //프라이빗 로드쇼
            flag = "밀리";
            videourl = "";
        } else if (randp == 501) {
            urllink = "1U_5O8_N8jzVO2EO1ESMGpxMMLtozW5Fo"; //프라이빗 로드쇼
            flag = "밀리";
            videourl = "";
        } else if (randp == 502) {
            urllink = "1gQqVq7KDWD0Z0x3WwW36ZrZQudVoeqKW"; //지구 미러볼
            flag = "밀리";
            videourl = "";
        } else if (randp == 503) {
            urllink = "1mBhvx575abPoHkcQeRpl00bkbbyuZEHz"; //지구 미러볼
            flag = "밀리";
            videourl = "";
        } else if (randp == 504) {
            urllink = "18gsSxyaCDYhbkgscK7HIPvQoffePoJuK"; //사랑의 꽃
            flag = "밀리";
            videourl = "";
        } else if (randp == 505) {
            urllink = "1GSwbUwXy7OSxox09_mO-2vrPTPo7fgO3"; //사랑의 꽃
            flag = "밀리";
            videourl = "";
        } else if (randp == 506) {
            urllink = "1emmMQWLTKe_YjUCVXHHRKevxMjuZNLm2"; //교차하는 계절
            flag = "밀리";
            videourl = "";
        } else if (randp == 507) {
            urllink = "1UYjUrpSzp1OBKCyypAOWJCM7VTef5fvQ"; //교차하는 계절
            flag = "밀리";
            videourl = "";
        } else if (randp == 508) {
            urllink = "1Dz6htkLYac07qcugt6BDLO_w9r0B_EDd"; //GREEDY GIRL
            flag = "밀리";
            videourl = "";
        } else if (randp == 509) {
            urllink = "1Wwr8OazPbxbMSwU_HG8hCQ0tZTJ5fbbm"; //GREEDY GIRL
            flag = "밀리";
            videourl = "";
        } else if (randp == 510) {
            urllink = "1OU5wl842lLQHLIJCfSY5BZc2SxYvMqLK"; //Liar's good bye
            flag = "밀리";
            videourl = "";
        } else if (randp == 511) {
            urllink = "1Ys8sxvyiJlrZLTLegGEd4ZMBh9BRd9c3"; //Liar's good bye
            flag = "밀리";
            videourl = "";
        } else if (randp == 512) {
            urllink = "1m5V-F4yVu_pi-Ndjo866IQfE-X2ZHo_D"; //미소지었기에, 알아챈거야.
            flag = "밀리";
            videourl = "";
        } else if (randp == 513) {
            urllink = "17skVk3FWGYr-XuW3q2OIUbBpVm3BJ-oD"; //미소지었기에, 알아챈거야.
            flag = "밀리";
            videourl = "";
        } else if (randp == 514) {
            urllink = "1VGlBm_zv-s6b16mRUfAXpyXbcLFIXFFM"; //타임머신에 뛰어오르자!
            flag = "밀리";
            videourl = "";
        } else if (randp == 515) {
            urllink = "1wzyTrnA3RW8QGXBeJBFozBZ4GnN5kN42"; //타임머신에 뛰어오르자!
            flag = "밀리";
            videourl = "";
        } else if (randp == 516) {
            urllink = "1zXhPXM8V5Dmq34NbXt_QJkk4lWrvxEJI"; //DETECTIVE HIGH! ~사랑탐정 이야기~
            flag = "밀리";
            videourl = "";
        } else if (randp == 517) {
            urllink = "15M9lz4K8jW3ZmqgNfARVv-WtQ2T8FIgV"; //DETECTIVE HIGH! ~사랑탐정 이야기~
            flag = "밀리";
            videourl = "";
        } else if (randp == 518) {
            urllink = "1h0KSc_AXmnm5jxZfj2la6uvp9RHPO6Kt"; //유니크 스타 플레이어!
            flag = "밀리";
            videourl = "";
        } else if (randp == 519) {
            urllink = "1xe6-iKZakrn5U33zsjEEug5FzoJ8GOQh"; //유니크 스타 플레이어!
            flag = "밀리";
            videourl = "";
        } else if (randp == 520) {
            urllink = "1-oxzsnlaVw_tc3OVL4bhgO3l9TwXNisE"; //나 르네상스
            flag = "밀리";
            videourl = "";
        } else if (randp == 521) {
            urllink = "1jjzV-PQCTPiKBgUBpFOUvk68pzIIQN4D"; //나 르네상스
            flag = "밀리";
            videourl = "";
        } else if (randp == 522) {
            urllink = "1Zmlp059uRhrMaE7gwvpjrwcXDPBoQIEe"; //쉘 위 댄
            flag = "밀리";
            videourl = "";
        } else if (randp == 523) {
            urllink = "1SR-LNxqv2tTG2oNriAfj2JvS4HXGSsjq"; //쉘 위 댄
            flag = "밀리";
            videourl = "";
        } else if (randp == 524) {
            urllink = "1Brw9YVYLg2GXTUa6LA5ejJYS29xvCboP"; //우는 하늘 뒤에
            flag = "밀리";
            videourl = "";
        } else if (randp == 525) {
            urllink = "19WrNpA7pVecBGYuw0WyEwr7ptfA3TH9h"; //우는 하늘 뒤에
            flag = "밀리";
            videourl = "";
        } else if (randp == 526) {
            urllink = "13KnVRQ5pmu_FtcQ2WnL_CzNduz5QMZ-n"; //문라이즈 빌리프
            flag = "밀리";
            videourl = "";
        } else if (randp == 527) {
            urllink = "1T7E4Mq-SOdVSiExmhzs-Itc1UZhxhwF4"; //moonrise belief
            flag = "밀리";
            videourl = "";
        } else if (randp == 528) {
            urllink = "1EkL_7mxGVPJ2p1JiMwzxoe4pVO7EpBlB"; //치얼 업 허트 업
            flag = "밀리";
            videourl = "";
        } else if (randp == 529) {
            urllink = "1oph8E1YRjIVOkkZiPcc73h1EQJvg9c0u"; //cheer up heart up
            flag = "밀리";
            videourl = "";
        } else if (randp == 530) {
            urllink = "1dEz5DKayll4_Q2HsnL6JV7sfuFBgDKMI"; // 하늘색 버스데이
            flag = "밀리";
            videourl = "";
        } else if (randp == 531) {
            urllink = "1JtGt4DuQ36PWaXjZPl6X6USk-DcoQiEq"; // 하늘색 버스데이
            flag = "밀리";
            videourl = "";
        } else if (randp == 532) {
            urllink = "13ji4U6F_muNkQ_zIr2ICCYz8eSYWrsv2"; //it's me
            flag = "밀리";
            videourl = "";
        } else if (randp == 533) {
            urllink = "180XSlamsYebGt4iIWQirjKuCqGbK2fDT"; //이츠 미
            flag = "밀리";
            videourl = "";
        } else if (randp == 534) {
            urllink = "193ftBHI9C5XiaOTNfwlwfwftVsSJClec"; //플레이 고 라운드
            flag = "밀리";
            videourl = "";
        } else if (randp == 535) {
            urllink = "1yNKHtZoenFw0AMiwUR29ns3RDKImMpex"; //플레이 고 라운드
            flag = "밀리";
            videourl = "";
        } else if (randp == 536) {
            urllink = "1X5IkP6T9koA-EVlG7b73KKIvNfavMN56"; //수퍼 펀키 피스
            flag = "밀리";
            videourl = "";
        } else if (randp == 537) {
            urllink = "1xrI4xn7OkGtk8ig_LOQnxcNpeKhVAwZs"; //수퍼 펀키 피스
            flag = "밀리";
            videourl = "";
        } else if (randp == 538) {
            urllink = "1KQ-6v_MCw769Ol0Y8_EH97J-KTFd4Kn9"; //퍼펙트 게임
            flag = "밀리";
            videourl = "";
        } else if (randp == 539) {
            urllink = "1TXbd7l4xcOBXVBIv8zYLY3vmvpoHI_4j"; //퍼펙트 게임
            flag = "밀리";
            videourl = "";
        } else if (randp == 540) {
            urllink = "1nsk4decw-pEdV887rqQhoxcrIK89tV_G"; //행복 엔드 롤
            flag = "밀리";
            videourl = "";
        } else if (randp == 541) {
            urllink = "1v8oe5AuRD1g1RE4QCSmqIwKCx2tc70v9"; //행복 엔드 롤
            flag = "밀리";
            videourl = "";
        } else if (randp == 542) {
            urllink = "1nwFd8_sz-QbwEkMRyqAlcGtHK6t4yxfE"; //꿈 레인보우
            flag = "밀리";
            videourl = "";
        } else if (randp == 543) {
            urllink = "1uUg_pmj7kyu3Zj2kOEHT7UF0S03rIESX"; //꿈 레인보우
            flag = "밀리";
            videourl = "";
        } else if (randp == 544) {
            urllink = "14a5hS0sqkHljVokfJfIjqshJUMys3YM-"; //미미미 빌드
            flag = "밀리";
            videourl = "";
        } else if (randp == 545) {
            urllink = "1bPXdRQJjY8n58jgzspVXCbpqDkJSnMal"; //미!미!미! 빌드
            flag = "밀리";
            videourl = "";
        } else if (randp == 546) {
            urllink = "1v241AgnJp0y6Q0QJOprowCJT5cc_sbSW"; //constrastet
            flag = "밀리";
            videourl = "";
        } else if (randp == 547) {
            urllink = "1-oijboHTpXnp3xg5ghwg090BRNSr98t8"; //constrastet
            flag = "밀리";
            videourl = "";
        } else if (randp == 548) {
            urllink = "15d4Kv_HpkQ7s5_BzNK4dddjrDedUoqXf"; //온 스테이지 플레이어
            flag = "밀리";
            videourl = "";
        } else if (randp == 549) {
            urllink = "1_P769R66geHcQ-O3pHk-HtSWScDm-yaS"; //온 스테이지 플레이어
            flag = "밀리";
            videourl = "";
        } else if (randp == 550) {
            urllink = "1R7_L8Nsf7JdZXnOX5pj58dzLaIbyGqfa"; //사랑의 매직! 원스 어게인
            flag = "밀리";
            videourl = "";
        } else if (randp == 551) {
            urllink = "1wuCfMRnTOuoFVLFJbZav83-Xh0ss58vr"; //사랑의 매직 원스 어게인
            flag = "밀리";
            videourl = "";
        } else if (randp == 552) {
            urllink = "1f8N5vpMKAtYtYeD42TidM7ZVEsJ0DGTf"; //핑크 로즈 어폴로즈
            flag = "밀리";
            videourl = "";
        } else if (randp == 553) {
            urllink = "1igEkMdBP8wOBJ9h9VGUcp78ZgzXktKFQ"; //핑크 로즈 어폴로즈
            flag = "밀리";
            videourl = "";
        } else if (randp == 554) {
            urllink = "1HdqsQPhLmnDEBVz3fbmQVB1-sjZso1GF"; //번개 스피릿
            flag = "밀리";
            videourl = "";
        } else if (randp == 555) {
            urllink = "1eXtwsBQsBNkm5NJ8VRIJ9kNbYSAfh_IB"; //번개 스피릿
            flag = "밀리";
            videourl = "";
        } else if (randp == 556) {
            urllink = "1Y5kgOfvcI65uF3nHPDZEi0eoeNMEVNv0"; //walking on the squa
            flag = "밀리";
            videourl = "";
        } else if (randp == 557) {
            urllink = "1dyDf_tjuG4hrACqLJzFIcdGbkIbYRF1A"; //Walking on the squa
            flag = "밀리";
            videourl = "";
        } else if (randp == 558) {
            urllink = "1zrdl16ECDrl15dHsB8y9fIX62qKSrDPk"; //변덕스러운 유머
            flag = "밀리";
            videourl = "";
        } else if (randp == 559) {
            urllink = "1gje5Ds9oEYCoMQ823X1nFqv1TWFYWyZX"; //변덕스러운 유머레스크
            flag = "밀리";
            videourl = "";
        } else if (randp == 560) {
            urllink = "1_XHcXDYs3sfWJkoRIQaYFXYmrw7yYstv"; //I Do
            flag = "밀리";
            videourl = "";
        } else if (randp == 561) {
            urllink = "1g799yLLMmD8y6S9HihudrQC20rrJuTXQ"; //I Do
            flag = "밀리";
            videourl = "";
        } else if (randp == 562) {
            urllink = "1z5e2t3PmH4LrrUNo6pV9JUOYE7ZWqcpF"; //둘이서 잇는 별자리
            flag = "밀리";
            videourl = "";
        } else if (randp == 563) {
            urllink = "1nZMoTdFjeTPOXUmzbpEWZbbNzMXmKF_E"; //둘이서 잇는 별자리
            flag = "밀리";
            videourl = "";
        } else if (randp == 564) {
            urllink = ""; //
            flag = "밀리";
            videourl = "";
        } else if (randp == 565) {
            urllink = ""; //
            flag = "밀리";
            videourl = "";
        } else if (randp == 566) {
            urllink = ""; //
            flag = "밀리";
            videourl = "";
        } else if (randp == 567) {
            urllink = ""; //
            flag = "밀리";
            videourl = "";
        } else if (randp == 568) {
            urllink = ""; //
            flag = "밀리";
            videourl = "";
        } else if (randp == 569) {
            urllink = ""; //
            flag = "밀리";
            videourl = "";
        } else if (randp == 570) {
            urllink = ""; //
            flag = "밀리";
            videourl = "";
        } else if (randp == 571) {
            urllink = ""; //
            flag = "밀리";
            videourl = "";
        }
    }
    if (true) { //노래 받기 샤니 컬렉터
        if (randp == 1003) {
            urllink = "1EVBxoO9Zt53f5KS9UcY_blFc4H2E_Rhi"; //멀티컬러드스카이
            flag = "샤니";
            videourl = "https://youtu.be/m4Ha1KO8KIA";
        } else if (randp == 1004) {
            urllink = "1Al5vVa7k96h-zyuHE_fhBvDzOrRT6lQH"; //멀티컬러드스카이
            flag = "샤니";
            videourl = "https://youtu.be/m4Ha1KO8KIA";
        } else if (randp == 1001) {
            urllink = "18hnrYF-MTXy_-vtMyeo8yj0bTLc_rFpL"; //스프레드더윙스
            flag = "샤니";
            videourl = "https://youtu.be/Zybkjunkwcw";
        } else if (randp == 1002) {
            urllink = "1QkUz_AMLw7p-BHxIPsSX_lUpTVSPQdb8"; //스프레드더윙스
            flag = "샤니";
            videourl = "https://youtu.be/Zybkjunkwcw";
        } else if (randp == 1005) {
            urllink = "14ehjIRbILO2QLr04U6F3Wu0SaKffmiBD"; //빛의 데스티네이션
            flag = "샤니";
            videourl = "https://youtu.be/NvwPX_JqXVE";
        } else if (randp == 1006) {
            urllink = "1qnLri5Zqpx_KZB-wsdlLRNb24MT6tbhD"; //빛의 데스티네이션
            flag = "샤니";
            videourl = "https://youtu.be/NvwPX_JqXVE";
        } else if (randp == 1007) {
            urllink = "1055IUqjmXvEYa1alSrWlt__H7-UW1sHZ"; //무지개가되어라
            flag = "샤니";
            videourl = "https://youtu.be/t0tpzo6KepY";
        } else if (randp == 1008) {
            urllink = "14_F9QqqMn9Qgp8-RktKBy0SZ2NGdmFk6"; //무지개가되어라
            flag = "샤니";
            videourl = "https://youtu.be/t0tpzo6KepY";
        } else if (randp == 1009) {
            urllink = "1MogvbeFVNmxQBPfvmuVwla8ozQKnkqNL"; //바벨시티그레이스
            flag = "샤니";
            videourl = "https://youtu.be/z0VIQV1Uvfo";
        } else if (randp == 1010) {
            urllink = "1Ca8GynmQeJRYPg3JS48lHRwNjW6NklPe"; //바벨시티그레이스
            flag = "샤니";
            videourl = "https://youtu.be/z0VIQV1Uvfo";
        } else if (randp == 1011) {
            urllink = "1ubc3UMNDjYUBPIhA2v-SN2OvFdGSVIld"; //현혹실루엣
            flag = "샤니";
            videourl = "https://youtu.be/z7pqt8PkFZE";
        } else if (randp == 1012) {
            urllink = "1f0Ns1U4JUAwrUsOhS3-ic4djAKVYh08y"; //현혹실루엣
            flag = "샤니";
            videourl = "https://youtu.be/z7pqt8PkFZE";
        } else if (randp == 1013) {
            urllink = "1QjAM9iKfAnBlT7llMBpM_FOqT2MGVwjm"; //꿈이피는 에프터스쿨
            flag = "샤니";
            videourl = "https://youtu.be/7y9XeBR32sY";
        } else if (randp == 1014) {
            urllink = "16OfGxvtkNOP5tflJqZ9Q0-eMBsIuf-uG"; //꿈이피는 에프터스쿨
            flag = "샤니";
            videourl = "https://youtu.be/7y9XeBR32sY";
        } else if (randp == 1015) {
            urllink = "1dKJ94o4QSyW5s7QguXjUFJ6WElWe9LsB"; //태양키스
            flag = "샤니";
            videourl = "https://youtu.be/rYGl8edFMpU";
        } else if (randp == 1016) {
            urllink = "1WLmKxh9bXFFcgL7y2uU0L0W0DeAWpy-n"; //태양키스
            flag = "샤니";
            videourl = "https://youtu.be/rYGl8edFMpU";
        } else if (randp == 1017) {
            urllink = "1LEeLSh0RITx_UJzJZ4SDOLwqWLXVi25-"; //알스트로메리아
            flag = "샤니";
            videourl = "https://youtu.be/-aZJ1A2g1sw";
        } else if (randp == 1018) {
            urllink = "1riOsktfH25BtugZthxLQ-uMJeGwk0W8O"; //알스트로메리아
            flag = "샤니";
            videourl = "https://youtu.be/-aZJ1A2g1sw";
        } else if (randp == 1019) {
            urllink = "1jRmBvT2tB5ngOE1VBttAhwFQP2jzA9Gp"; //해피리리
            flag = "샤니";
            videourl = "https://youtu.be/m1ad0Xekh-w";
        } else if (randp == 1020) {
            urllink = "1XjKO9SdbkfRv4vGQf0AdWpp2OVbvlndA"; //해피리리
            flag = "샤니";
            videourl = "https://youtu.be/m1ad0Xekh-w";
        } else if (randp == 1021) {
            urllink = "1GJV5hJ7jGpSDv6xDYUp9YisnYbM-KRMH"; //앰비셔스 이브
            flag = "샤니";
            videourl = "https://youtu.be/PoWRbMqfeXI";
        } else if (randp == 1022) {
            urllink = "19dCsJ28L8sPBxTqa5_gCRjCn2pTeulZC"; //앰비셔스 이브
            flag = "샤니";
            videourl = "https://youtu.be/PoWRbMqfeXI";
        } else if (randp == 1023) {
            urllink = "1UeFBO7qL5pk9OrTSDcaFuI2ba1JY4cm5"; //언젠가 샤이니데이즈
            flag = "샤니";
            videourl = "https://youtu.be/b6JLw4deSoA";
        } else if (randp == 1024) {
            urllink = "1evJV165llmJwLmCEX7lQxR84IMGLIFEt"; //언젠가 샤이니데이즈
            flag = "샤니";
            videourl = "https://youtu.be/b6JLw4deSoA";
        } else if (randp == 1025) {
            urllink = "144khC2bDVIwM8t27QhAizPYrrfgIiULr"; //위켄고나우
            flag = "샤니";
            videourl = "https://youtu.be/YoW6PsGucYk";
        } else if (randp == 1026) {
            urllink = "15_k9yBl67u02UKTa7pxXlvJEos6xboqn"; //트라이앵글
            flag = "샤니";
            videourl = "https://youtu.be/vvFE6v2d5JE";
        } else if (randp == 1027) {
            urllink = "1INuN1PMyLdH07mO8en30TYvmTiEXRmjV"; //트라이앵글
            flag = "샤니";
            videourl = "https://youtu.be/vvFE6v2d5JE";
        } else if (randp == 1028) {
            urllink = "1IWOYunLxh2tEFkmA2Nhi2z3oQYp727go"; //네오세오리판타지
            flag = "샤니";
            videourl = "https://youtu.be/wqYZqwWE2lw";
        } else if (randp == 1029) {
            urllink = "1F34DTG_i7l4T_eupPIfVttqDnaKOVIgR"; //네오세오리판타지
            flag = "샤니";
            videourl = "https://youtu.be/wqYZqwWE2lw";
        } else if (randp == 1030) {
            urllink = "1vsB1WDJE_-8HIz1zZF4vFPVUxx5w53IZ"; //라비린스 레지스탕스
            flag = "샤니";
            videourl = "https://youtu.be/tVvau6Sm60k";
        } else if (randp == 1031) {
            urllink = "1JaOPVZkdAdDpDfTJrGqxJfoYdUJ4H5Pg"; //라비린스 레지스탕스
            flag = "샤니";
            videourl = "https://youtu.be/tVvau6Sm60k";
        } else if (randp == 1032) {
            urllink = "1ivKiGjqcY6Xv5jPgggBgpHrjTqSMnhGd"; //비치브레이버
            flag = "샤니";
            videourl = "https://youtu.be/uuOup6Ka6Sk";
        } else if (randp == 1033) {
            urllink = "11mb8tJY947vICZ4B7AEV81pg9qsm7B4r"; //비치브레이버
            flag = "샤니";
            videourl = "https://youtu.be/uuOup6Ka6Sk";
        } else if (randp == 1034) {
            urllink = "1QEN8CPS5ewR7KR33asJH2TF9cg9y5miW"; //둘러가는 선셋
            flag = "샤니";
            videourl = "https://youtu.be/Nwlej1e-asg";
        } else if (randp == 1035) {
            urllink = "1HmNtx5yVZM32Ldtqc9FyM1IOK6mHQ5pc"; //둘러가는 선셋
            flag = "샤니";
            videourl = "https://youtu.be/Nwlej1e-asg";
        } else if (randp == 1036) {
            urllink = "1RLCQvUuex9r4GedgqIpi9KT1OdIejsyw"; //블루미
            flag = "샤니";
            videourl = "https://youtu.be/8DoG9COi3Hc";
        } else if (randp == 1037) {
            urllink = "1x00FPnaO8ByZ6P16koTJpIfMZc6Pd2H-"; //블루미
            flag = "샤니";
            videourl = "https://youtu.be/8DoG9COi3Hc";
        } else if (randp == 1038) {
            urllink = "1HCsK__YnnugjU7vHqoFwMKSJAlVCXL37"; //러브어딕션
            flag = "샤니";
            videourl = "https://youtu.be/0Ef8b5V2sJY";
        } else if (randp == 1039) {
            urllink = "1ojYG1VUUNZc41SsSVFF5A3eG-jzT_51X"; //러브어딕션
            flag = "샤니";
            videourl = "https://youtu.be/0Ef8b5V2sJY";
        } else if (randp == 1040) {
            urllink = "1OpCVXUdp5yR0h5Z3jEiXy9GfcNNiIP9j"; //원더링 드림 체이져
            flag = "샤니";
            videourl = "https://youtu.be/o_TYQYuzeRs";
        } else if (randp == 1041) {
            urllink = "1992kcJpi-PmkUoPfVJKdc-Rvxq0LXW3B"; //원더링 드림 체이져
            flag = "샤니";
            videourl = "https://youtu.be/o_TYQYuzeRs";
        } else if (randp == 1042) {
            urllink = "1jKX173a33hHjR7lJkvT4EiUjthhG3mgy"; //트렌센딩 더 월드
            flag = "샤니";
            videourl = "https://youtu.be/KbBimKir0Oc";
        } else if (randp == 1043) {
            urllink = "1PdH3eg7oX16S2FjRVR92ilaMkbWgHVPL"; //트렌센딩 더 월드
            flag = "샤니";
            videourl = "https://youtu.be/KbBimKir0Oc";
        } else if (randp == 1044) {
            urllink = "1hhb3KyVtM_xvaYTlUy01zjWFIEebFZE0"; //샤이노그래피
            flag = "샤니";
            videourl = "https://youtu.be/rDqggZWda2U";
        } else if (randp == 1045) {
            urllink = "1j_d5SAcL8xpgUOgpc-zEBhQLpY3v4Uzi"; //샤이노그래피
            flag = "샤니";
            videourl = "https://youtu.be/rDqggZWda2U";
        } else if (randp == 1046) {
            urllink = "1CldPP4Hov74tUo5n2iW1LR51IrlG_ykJ"; //다이더스카이
            flag = "샤니";
            videourl = "https://youtu.be/ldkOjZvjHXM";
        } else if (randp == 1047) {
            urllink = "1MttFY-_Sp16KfnuARXxxV5ttCRstXmTO"; //다이더스카이
            flag = "샤니";
            videourl = "https://youtu.be/ldkOjZvjHXM";
        } else if (randp == 1048) {
            urllink = "1k5RKs3k0VbN4YI7frv2gSwdGI3KvnKU6"; //트윈클웨이
            flag = "샤니";
            videourl = "https://youtu.be/pikJCUGc1zU";
        } else if (randp == 1049) {
            urllink = "1ZC4aI6WjdsiYwxn3gnIZgR7cXJBz055I"; //트윈클웨이
            flag = "샤니";
            videourl = "https://youtu.be/pikJCUGc1zU";
        } else if (randp == 1050) {
            urllink = "1WohJ_ViWI1sVZ_jegSTeZ1_EJg4w3etw"; //해피퍼니러키
            flag = "샤니";
            videourl = "https://youtu.be/sMFbOCsGuic";
        } else if (randp == 1051) {
            urllink = "1yu4jUGWJZrVo2mSzpJSNc2BMDAhj4_U-"; //해피퍼니러키
            flag = "샤니";
            videourl = "https://youtu.be/sMFbOCsGuic";
        } else if (randp == 1052) {
            urllink = "1wIqNvUBJrYYCBL2lJ_xvRMBNPXZbnHlt"; //블랙리버리
            flag = "샤니";
            videourl = "https://youtu.be/L-Ig5UKrTQk";
        } else if (randp == 1053) {
            urllink = "1NBXNR7mX99lwbloUwCRok5RIFRJOdis6"; //블랙리버리
            flag = "샤니";
            videourl = "https://youtu.be/L-Ig5UKrTQk";
        } else if (randp == 1054) {
            urllink = "1LXfeegJ2jYhGfOq6Z9mS3EXSp_dWulyR"; //순백트로이메라이
            flag = "샤니";
            videourl = "https://youtu.be/SXD1wlVEywg";
        } else if (randp == 1055) {
            urllink = "1VW606z2bpFrMa1GRs7DkD22peYcBQYTG"; //순백트로이메라이
            flag = "샤니";
            videourl = "https://youtu.be/SXD1wlVEywg";
        } else if (randp == 1056) {
            urllink = "1aW92ODJ3AtadOSgx8zZt4yXrC2gYwdLk"; //다섯자리 유성군
            flag = "샤니";
            videourl = "https://youtu.be/JIlo9U3f7HE";
        } else if (randp == 1057) {
            urllink = "1l2PiGmXG_1ai2l5ho5-aPmT9X9ZPxAEd"; //다섯자리 유성군
            flag = "샤니";
            videourl = "https://youtu.be/JIlo9U3f7HE";
        } else if (randp == 1058) {
            urllink = "1AKJAfTV3RbajjfgdIiFuzmRBEKL2IlKO"; //학제혁명 동트기 전
            flag = "샤니";
            videourl = "https://youtu.be/zMAch_UuPFs";
        } else if (randp == 1059) {
            urllink = "1yiWwNK_kI-aguCzzR8K3ZwzS4qPLWA9k"; //학제혁명 동트기 전
            flag = "샤니";
            videourl = "https://youtu.be/zMAch_UuPFs";
        } else if (randp == 1060) {
            urllink = "1BurStrxSfQhXGxnAme0yb3Cz9B9B65JK"; //더블 이펙트
            flag = "샤니";
            videourl = "https://youtu.be/nDJNFe89DtQ";
        } else if (randp == 1061) {
            urllink = "11Kc2pecTXuCgEfXTui1ChKMbcU7yD08M"; //더블 이펙트
            flag = "샤니";
            videourl = "https://youtu.be/nDJNFe89DtQ";
        } else if (randp == 1062) {
            urllink = "1cEWxvjsSPJeRNIsZQMTDvobHuOocBtPT"; //애니버서리
            flag = "샤니";
            videourl = "https://youtu.be/_67Ov_CZvls";
        } else if (randp == 1063) {
            urllink = "1VXIDw3iVdBEkYFNQWWflt0Nd-cKl91rf"; //애니버서리
            flag = "샤니";
            videourl = "https://youtu.be/_67Ov_CZvls";
        } else if (randp == 1064) {
            urllink = "1mr7jV6iIieciobjU67FDydtKbnmRRYn3"; //하이드앤어택
            flag = "샤니";
            videourl = "https://youtu.be/GEGr0FFPm9Y";
        } else if (randp == 1065) {
            urllink = "19m5JQiQ8834r_e_sE8JMnwSw_hO06-vM"; //하이드앤어택
            flag = "샤니";
            videourl = "https://youtu.be/GEGr0FFPm9Y";
        } else if (randp == 1066) {
            urllink = "1VTYWNFHIRAM3wE3y7TL8qTnmMEnoP641"; //데스티니드라이벌
            flag = "샤니";
            videourl = "https://youtu.be/4O0VkrVsFeE";
        } else if (randp == 1067) {
            urllink = "1FjI7_ozWBnmRvuQquEYHWgB2baP1pe0O"; //데스티니드라이벌
            flag = "샤니";
            videourl = "https://youtu.be/4O0VkrVsFeE";
        } else if (randp == 1068) {
            urllink = "1lr9n_uiX21WhM4ybLtMh2hDaReoqRoiL"; //언제라도 우리들은
            flag = "샤니";
            videourl = "https://youtu.be/-t9t_aDj5gM";
        } else if (randp == 1069) {
            urllink = "1pNcoLHKAmlrMU6Yo4d8DXKCIWo_GKdyd"; //언제라도 우리들은
            flag = "샤니";
            videourl = "https://youtu.be/-t9t_aDj5gM";
        } else if (randp == 1070) {
            urllink = "1blSt_brrxeaSLDgFCiwFmC6UrzmtYqtJ"; //저 꽃처럼
            flag = "샤니";
            videourl = "https://youtu.be/p5jQosnFYLM";
        } else if (randp == 1071) {
            urllink = "1VOp160SHIWn_ekmDIdtPNXgyETrHizJ_"; //저 꽃처럼
            flag = "샤니";
            videourl = "https://youtu.be/p5jQosnFYLM";
        } else if (randp == 1072) {
            urllink = "1dMI6WrxbDAV2j9skVSCVYd1oLSX3tdVV"; //퓨처리티 스마일
            flag = "샤니";
            videourl = "https://youtu.be/m12TEr2ivfQ";
        } else if (randp == 1073) {
            urllink = "1VWz9fi_WXbmihPI7xsl9_Npvq4MYDLTz"; //퓨처리티 스마일
            flag = "샤니";
            videourl = "https://youtu.be/m12TEr2ivfQ";
        } else if (randp == 1074) {
            urllink = "1spOVONqOWtGYquVwIH8cJOiHE-nyRlvb"; //렛츠겟어찬스
            flag = "샤니";
            videourl = "https://youtu.be/SDk5RGdA0dc";
        } else if (randp == 1075) {
            urllink = "1O9-pvgwbxtgsiKCKeoOfZsP8-AbB2H6a"; //렛츠겟어찬스
            flag = "샤니";
            videourl = "https://youtu.be/SDk5RGdA0dc";
        } else if (randp == 1076) {
            urllink = "1TnkHrXuddQSMfwaECbK0RtmQjzeUfEA5"; //스노우 프레이크
            flag = "샤니";
            videourl = "https://youtu.be/MHqc1vszd5k";
        } else if (randp == 1077) {
            urllink = "19z9AsMg9ejBll4nbZs6H-bnT1JZGqQti"; //스노우 프레이크
            flag = "샤니";
            videourl = "https://youtu.be/MHqc1vszd5k";
        } else if (randp == 1078) {
            urllink = "1I9y5ZlbhiR0AaC6R4oyNxsx4paRdPEvS"; //스윗스텝
            flag = "샤니";
            videourl = "https://youtu.be/JWRfwMCTMwU";
        } else if (randp == 1079) {
            urllink = "1hiQybqtoIjU-urE7J26oHgE8hkyOnnXv"; //스윗스텝
            flag = "샤니";
            videourl = "https://youtu.be/JWRfwMCTMwU";
        } else if (randp == 1080) {
            urllink = "1qEl1qrZOFyeGII3R0r6NIetbyphO39nH"; //레조난스
            flag = "샤니";
            videourl = "https://youtu.be/utXf8CdgFgk"; // 영상 문제 발생
        } else if (randp == 1081) {
            urllink = "1U03Ulx4eIm_ldL_Q5a3oBAQKhYAW-DMg"; //레조난스
            flag = "샤니";
            videourl = "https://youtu.be/utXf8CdgFgk"; // 영상 문제 발생
        } else if (randp == 1082) {
            urllink = "1spMre_4yQvKGfwPRRH1-msalG6n_F9nI"; //컬러데이즈
            flag = "샤니";
            videourl = "https://youtu.be/QY49Qn-Yo1g";
        } else if (randp == 1083) {
            urllink = "1mcGNbvOBQ84JrxXLvR2wbNv0a7gEru8f"; //컬러데이즈
            flag = "샤니";
            videourl = "https://youtu.be/QY49Qn-Yo1g";
        } else if (randp == 1084) {
            urllink = "10wFz-xtnL7oRx1txrbW6664lSJT0i4V5"; //프리즈이즘
            flag = "샤니";
            videourl = "https://youtu.be/uJ_GeNq_AxA";
        } else if (randp == 1085) {
            urllink = "1FRwys_FTGSSusvJkCuBIhAh0FnR1n4TV"; //프리즈이즘
            flag = "샤니";
            videourl = "https://youtu.be/uJ_GeNq_AxA";
        } else if (randp == 1086) {
            urllink = "1hWPrlE_qbUm4s13_L3szoBIeXEz5D_8l"; //스마일 심포니아
            flag = "샤니";
            videourl = "https://youtu.be/uJ_GeNq_AxA";
        } else if (randp == 1087) {
            urllink = "1j9KE4_r4232BjCvpYJkwU-aPp33Kfcos"; //스마일 심포니아
            flag = "샤니";
            videourl = "https://youtu.be/uJ_GeNq_AxA";
        } else if (randp == 1088) {
            urllink = "1C4_cpglY14C6bmp6FzNcDrCYs45rublk"; //어비스오브
            flag = "샤니";
            videourl = "https://www.youtube.com/watch?v=G4cZVz-dnTo";
        } else if (randp == 1089) {
            urllink = "19qDcMTwqem3sVO7LxHdOctF4H2v3_D0a"; //어비스오브
            flag = "샤니";
            videourl = "https://www.youtube.com/watch?v=G4cZVz-dnTo";
        } else if (randp == 1090) {
            urllink = "1okyoiNTtnoUJjH5_adyUbRDcAHT3oj_p"; //혁명론
            flag = "샤니";
            videourl = "https://youtu.be/e1aeHK3f3Cw";
        } else if (randp == 1091) {
            urllink = "1ngsxupAcFu2l0eWW9ZpKRau-PUiTVq4S"; //혁명론
            flag = "샤니";
            videourl = "https://youtu.be/e1aeHK3f3Cw";
        } else if (randp == 1092) {
            urllink = "1gbi1m3hebcFGUaJG8i18__gJnlnaDAQV"; //클라이막스
            flag = "샤니";
            videourl = "https://youtu.be/VZK26WBX23g";
        } else if (randp == 1093) {
            urllink = "158al2NFToRu9GCQWM40kmUlFklbuzHuG"; //클라이막스
            flag = "샤니";
            videourl = "https://youtu.be/VZK26WBX23g";
        } else if (randp == 1094) {
            urllink = "1i3Y1MBvQUIElfH-biL1tabe4mX7u4EFT"; //전상서
            flag = "샤니";
            videourl = "https://youtu.be/b2QPr1zBlDo";
        } else if (randp == 1095) {
            urllink = "1aKqweE5kNOvTTpwi2OozNFgHOIhN324X"; //전상서
            flag = "샤니";
            videourl = "https://youtu.be/b2QPr1zBlDo";
        } else if (randp == 1096) {
            urllink = "10pSH15swXvZ9fQuDrR8GFsQm2eC-0VHZ"; //파스텔칼라
            flag = "샤니";
            videourl = "https://youtu.be/_ASfLXsgGmc";
        } else if (randp == 1097) {
            urllink = "1fbXrVKmhIgEk-X4qGazUA8BWsOEA7R3y"; //파스텔칼라
            flag = "샤니";
            videourl = "https://youtu.be/_ASfLXsgGmc";
        } else if (randp == 1098) {
            urllink = "17D9Fu48om2knpummz-ndPsV-7Wn4VZF1"; //러브 보나페티
            flag = "샤니";
            videourl = "https://youtu.be/1ma9Rsw-LIE";
        } else if (randp == 1099) {
            urllink = "1ARBTVVd8Q8e0NbR7MG0fK5sjFGh5lCVd"; //러브 보나페티
            flag = "샤니";
            videourl = "https://youtu.be/1ma9Rsw-LIE";
        } else if (randp == 1100) {
            urllink = "1qLQCohF7_Vu3yBmepS8pkNnliPNTFIzl"; //어나더렘페이지
            flag = "샤니";
            videourl = "https://youtu.be/9fqSMUwzYjc";
        } else if (randp == 1101) {
            urllink = "1txmoaDrBtfAXsw7FAsVGiNzX-PA5Mq7F"; //어나더렘페이지
            flag = "샤니";
            videourl = "https://youtu.be/9fqSMUwzYjc";
        } else if (randp == 1102) {
            urllink = "1FQRuoAo3NsATlGALDjHmTYRUKROjtZQ9"; //타임리스
            flag = "샤니";
            videourl = "https://youtu.be/I0QZ9Cba288";
        } else if (randp == 1103) {
            urllink = "1Z5_I3ZicdONLitCn4g5cbCw_6KqOS0UR"; //타임리스
            flag = "샤니";
            videourl = "https://youtu.be/I0QZ9Cba288";
        } else if (randp == 1104) {
            urllink = "1LAkzMIGUf0hq8LuXZaoiwDeWQtmio2Cp"; //우리들만의 미래의 하늘
            flag = "샤니";
            videourl = "https://youtu.be/Zc6GSKdq5GU";
        } else if (randp == 1105) {
            urllink = "1b0RIRDgjrJIicDrv3wUKLHp15HJQnpfV"; //우리들만의 미래의 하늘
            flag = "샤니";
            videourl = "https://youtu.be/Zc6GSKdq5GU";
        } else if (randp == 1106) {
            urllink = "1bU-zZNMmYizR45YJNT_uR23kA9wNVf2n"; //지금밖에 없는 순간을
            flag = "샤니";
            videourl = "https://youtu.be/ZGzxzNsk90c";
        } else if (randp == 1107) {
            urllink = "1aFDuUpCEkafmQOKF-hCsMW6q4tMn8IM6"; //지금밖에 없는 순간을
            flag = "샤니";
            videourl = "https://youtu.be/ZGzxzNsk90c";
        } else if (randp == 1108) {
            urllink = "1ktx8Q3WlXyqOoK1l19g0UIeegJeXDxgO"; //오마이갓
            flag = "샤니";
            videourl = "https://youtu.be/tiyrjZVyvM8";
        } else if (randp == 1109) {
            urllink = "1hlL6Uxr053ufBY7bZ1KxLCwewtX-ATir"; //오마이갓
            flag = "샤니";
            videourl = "https://youtu.be/tiyrjZVyvM8";
        } else if (randp == 1110) {
            urllink = "1f4hpXQtA17udvZSe0BfOrtrElDFt9sPc"; //Fly and Fly
            flag = "샤니";
            videourl = "https://youtu.be/0NoCOksOKzw";
        } else if (randp == 1111) {
            urllink = "1YbVIXGnMCq5A56SvziPE7WTvaKKQuEHu"; //Fly and Fly
            flag = "샤니";
            videourl = "https://youtu.be/0NoCOksOKzw";
        } else if (randp == 1112) {
            urllink = "1gyBv5RugCgLQXA3y95HarRTLEH4wViu9"; //플래니스피아
            flag = "샤니";
            videourl = "https://youtu.be/tAIes0OvufI";
        } else if (randp == 1113) {
            urllink = "1stcaNWKZYajCiBYQII-9emVNjhL-81kS"; //플래니스피아
            flag = "샤니";
            videourl = "https://youtu.be/tAIes0OvufI";
        } else if (randp == 1114) {
            urllink = "1BWOEbwCzsPmVCQ8pUFMro8bnrh4Q13kk"; //가진모든반짝임
            flag = "샤니";
            videourl = "https://youtu.be/pWUiJwvGrKk";
        } else if (randp == 1115) {
            urllink = "1tghEtajbWia1A7sXsjPu02Q4J5r6rsok"; //가진모든반짝임
            flag = "샤니";
            videourl = "https://youtu.be/pWUiJwvGrKk";
        } else if (randp == 1116) {
            urllink = "1i8J7BPISLd73-2-7QN-I2cS2FaYLuHRR"; //별을 목표로
            flag = "샤니";
            videourl = "https://youtu.be/GNK-INDllXY";
        } else if (randp == 1117) {
            urllink = "171B53hHyKlAZGl8TH_2x3I1-I96T5iYN"; //별을 목표로
            flag = "샤니";
            videourl = "https://youtu.be/GNK-INDllXY";
        } else if (randp == 1118) {
            urllink = "1FhQvG2m_BmArVwtXg6f1irkC73ZWk-Td"; //꿈꾸는새
            flag = "샤니";
            videourl = "https://youtu.be/l_R0JAdkQc4";
        } else if (randp == 1119) {
            urllink = "1xwIr_WoRU7L2lFUnUndOqH8F6FwjYb4N"; //꿈꾸는새
            flag = "샤니";
            videourl = "https://youtu.be/l_R0JAdkQc4";
        } else if (randp == 1120) {
            urllink = "1iBo07OZLarliwIHY8L0HuNQs2s4SXsBx"; //어포인트
            flag = "샤니";
            videourl = "https://youtu.be/HwLMNE5oo6I";
        } else if (randp == 1121) {
            urllink = "11Cb42ej76p8zqAK5Wr2Ohon2KsWd7Fsc"; //어포인트
            flag = "샤니";
            videourl = "https://youtu.be/HwLMNE5oo6I";
        } else if (randp == 1122) {
            urllink = "1esPpAjx_XV4qPr6fe48GGlUx1EoUt_V4"; //초코데이트 선데이
            flag = "샤니";
            videourl = "https://youtu.be/Qw0kL5zzJp8";
        } else if (randp == 1123) {
            urllink = "1CsKwRmxOf6yAh1si0pZPYDLUhh36wLEm"; //초코데이트 선데이
            flag = "샤니";
            videourl = "https://youtu.be/Qw0kL5zzJp8";
        } else if (randp == 1124) {
            urllink = "1hwib5bA0k3bwbFoP3lsbKWtOTdwCUO2q"; //스위트 메모리즈
            flag = "샤니";
            videourl = "https://youtu.be/26DXmnag6hE";
        } else if (randp == 1125) {
            urllink = "1LLNvFP9m_k4Se2e8ip8fRChmWG4XGUk6"; //스위트 메모리즈
            flag = "샤니";
            videourl = "https://youtu.be/26DXmnag6hE";
        } else if (randp == 1126) {
            urllink = "16tKJfv3iL8jIZ2jHKj2uuKOfx8F99Cfi"; //하나마루 뱃지
            flag = "샤니";
            videourl = "https://youtu.be/PTZeXl5DRoo";
        } else if (randp == 1127) {
            urllink = "1cQKJvcW3dpeCoOPvDjLLdojh97zpCR_b"; //하나마루 뱃지
            flag = "샤니";
            videourl = "https://youtu.be/PTZeXl5DRoo";
        } else if (randp == 1128) {
            urllink = "1ihsoDemAn9W_QwwbvCnDCfok4suLY7iz"; //리플렉트 사인
            flag = "샤니";
            videourl = "https://youtu.be/EDlfbfQYVcE";
        } else if (randp == 1129) {
            urllink = "1UIH3cRsYYXCJHz1m_Geo-BE_KaypYZHc"; //리플렉트 사인
            flag = "샤니";
            videourl = "https://youtu.be/EDlfbfQYVcE";
        } else if (randp == 1130) {
            urllink = "1lnplzD-yke8-x0_zjiM2-R4LlRpXZ_2_"; //황혼아이덴티티
            flag = "샤니";
            videourl = "https://youtu.be/yq_FUILcHUg";
        } else if (randp == 1131) {
            urllink = "15hxOv1R3a4Vt5Zv6_rv-c8UUJ2qtIPDY"; //황혼아이덴티티
            flag = "샤니";
            videourl = "https://youtu.be/yq_FUILcHUg";
        } else if (randp == 1132) {
            urllink = "1a6ZnNPptPO_2ZX5ygpyAu8c8DwwqztJv"; //나의주인공은
            flag = "샤니";
            videourl = "https://youtu.be/PXE2TvXM09Y";
        } else if (randp == 1133) {
            urllink = "147VPgppBxd4jxWjZmyruB24ud3ktIDU3"; //나의주인공은
            flag = "샤니";
            videourl = "https://youtu.be/PXE2TvXM09Y";
        } else if (randp == 1134) {
            urllink = "1k7tz6esVsOlbJYLN6EtMQe4JK-tTNpLM"; //내일 또 만나
            flag = "샤니";
            videourl = "https://youtu.be/7phvBUfLAqE";
        } else if (randp == 1135) {
            urllink = "1VE5fupeoCJI5okStaFU3B8tFRosYAGhJ"; //늘 꽃이 피는
            flag = "샤니";
            videourl = "https://youtu.be/Gz-fNZHZr40";
        } else if (randp == 1136) {
            urllink = "1EMqoQKeYjXyYCG5N1YT8axQQjlsNIvXa"; //늘 꽃이 피는
            flag = "샤니";
            videourl = "https://youtu.be/Gz-fNZHZr40";
        } else if (randp == 1137) {
            urllink = "1-XakO0WZILwqt44yGE4wQvFf5Qlcy71e"; //플라스틱 우산
            flag = "샤니";
            videourl = "https://youtu.be/U9S3mf4fAnA";
        } else if (randp == 1138) {
            urllink = "1iUfRaLNp0nie7GWUhxcM-y40KIfSRBIY"; //플라스틱 우산
            flag = "샤니";
            videourl = "https://youtu.be/U9S3mf4fAnA";
        } else if (randp == 1139) {
            urllink = "15b7jl6Kj6yTejLu0ul8clLPrDdVWnGLI"; //고잉 마이 웨이
            flag = "샤니";
            videourl = "https://youtu.be/-3Wnj_-DGs0";
        } else if (randp == 1140) {
            urllink = "16RMvBek6P31AbIydNlcABMTZCcunFHCp"; //고잉 마이 웨이
            flag = "샤니";
            videourl = "https://youtu.be/-3Wnj_-DGs0";
        } else if (randp == 1141) {
            urllink = "1qRU8OZWqPOpbnAzoisYs1q1_OZzx24Gr"; //설월풍화
            flag = "샤니";
            videourl = "https://youtu.be/cm_z1t3qQtY";
        } else if (randp == 1142) {
            urllink = "1GeQ4f-GsoAi0p-B5x08f6nqkSr1sVASd"; //설월풍화
            flag = "샤니";
            videourl = "https://youtu.be/cm_z1t3qQtY";
        } else if (randp == 1143) {
            urllink = "1OGPjAX7_BrfPJncJ84obUmIVqA4TrbDB"; //슬로모션
            flag = "샤니";
            videourl = "https://youtu.be/UOzM3lLRldo";
        } else if (randp == 1144) {
            urllink = "1Dd5TLv5VzCU2lr3op0cJitaV5vAatxq1"; //슬로모션
            flag = "샤니";
            videourl = "https://youtu.be/UOzM3lLRldo";
        } else if (randp == 1145) {
            urllink = "107lDTgdoCoC_idp1sq1UI7FKEUKjyzbC"; //천야 아리아
            flag = "샤니";
            videourl = "https://youtu.be/WzsaX1E15Xc";
        } else if (randp == 1146) {
            urllink = "1jN8Uhm11ZMVEpJLOxf_iZLnJGkpAAK_z"; //천야 아리아
            flag = "샤니";
            videourl = "https://youtu.be/WzsaX1E15Xc";
        } else if (randp == 1147) {
            urllink = "1cALsD0Wx_CXCuehdbaSpTwvjdtwVQaFX"; //칵테일
            flag = "샤니";
            videourl = "https://youtu.be/PQqqWgMO0VI";
        } else if (randp == 1148) {
            urllink = "1XEebFgMdY9Aw3QtzPJb9phd7PSqkEzlA"; //칵테일
            flag = "샤니";
            videourl = "https://youtu.be/PQqqWgMO0VI";
        } else if (randp == 1149) {
            urllink = "1nD-E0lgLq6bGnFR9wonmDKQm4IMKiKT2"; //달링 유
            flag = "샤니";
            videourl = "https://youtu.be/cuMUFLoC4pQ";
        } else if (randp == 1150) {
            urllink = "1QLTFR0L4fspsPBFNL7Oen30blQxryOL5"; //달링 유
            flag = "샤니";
            videourl = "https://youtu.be/cuMUFLoC4pQ";
        } else if (randp == 1151) {
            urllink = "1AZHgwsCofq_qPrUehFvE9fNN25l5na_Z"; //푸른하늘
            flag = "샤니";
            videourl = "https://youtu.be/LrRjxQHZfiE";
        } else if (randp == 1152) {
            urllink = "17cKU1PyNHxMgwcraUtfTLEbXwFZw3xBe"; //푸른하늘
            flag = "샤니";
            videourl = "https://youtu.be/LrRjxQHZfiE";
        } else if (randp == 1153) {
            urllink = "1X0CoeMj9x1Wld-2OBgafjcckcmcqVHBb"; //에스오에스
            flag = "샤니";
            videourl = "https://youtu.be/TTXiLttMlo4";
        } else if (randp == 1154) {
            urllink = "1aTTVPjQVqrIUQEwAdfknE8aw-ijPT7lz"; //에스오에스
            flag = "샤니";
            videourl = "https://youtu.be/TTXiLttMlo4";
        } else if (randp == 1155) {
            urllink = "1XcTPsdeFdDsR8zc5arYCZ_aRanORn-J5"; //과순성
            flag = "샤니";
            videourl = "https://youtu.be/surtdJYzIkE";
        } else if (randp == 1156) {
            urllink = "1J4yWLWEL9VlTEbEgYOiOZdB7dqlKhMVR"; //과순성
            flag = "샤니";
            videourl = "https://youtu.be/surtdJYzIkE";
        } else if (randp == 1157) {
            urllink = "1skbtGaTQj1x9-A5zEFy9q8fGXSFaFRTz"; //하레바레
            flag = "샤니";
            videourl = "https://youtu.be/-EXyiyOrObw";
        } else if (randp == 1158) {
            urllink = "1ddXlurj7iNKnwC48YHh70BqxtvgMRgMH"; //하레바레
            flag = "샤니";
            videourl = "https://youtu.be/-EXyiyOrObw";
        } else if (randp == 1159) {
            urllink = "14_fZ55SzsbjCt1TbjDOuTGW0fBCVkFWP"; //스테티스
            flag = "샤니";
            videourl = "https://youtu.be/j5pz_NV6yqE";
        } else if (randp == 1160) {
            urllink = "195jU13WdUhnH5XOFdSytZqPVHXp_2ogP"; //스테티스
            flag = "샤니";
            videourl = "https://youtu.be/j5pz_NV6yqE";
        } else if (randp == 1161) {
            urllink = "1eS4HcAVblHFcGC9Y0lm0LyhO7_MTSBv-"; //솔라웨이
            flag = "샤니";
            videourl = "https://youtu.be/Uj1Cn0cEpbs";
        } else if (randp == 1162) {
            urllink = "10YJQ5EM7gYQHlHFM8snyMhNY0F9RAwii"; //솔라웨이
            flag = "샤니";
            videourl = "https://youtu.be/Uj1Cn0cEpbs";
        } else if (randp == 1163) {
            urllink = "107GkSUyTh5wTtOVBqh2GTOnTn3baBjGJ"; //신은 죽었다, 며
            flag = "샤니";
            videourl = "";
        } else if (randp == 1164) {
            urllink = "12EkyQeJEY1a5ELgIT_PVEVRb0cUpQeMO"; //신은 죽었다, 며
            flag = "샤니";
            videourl = "";
        } else if (randp == 1165) {
            urllink = "1bAfpH7y5ar9BFVN_mHPyAz4q3TiaIWSi"; //시즌1
            flag = "샤니";
            videourl = "";
        } else if (randp == 1166) {
            urllink = "1LkPmW90SHaxT46eaFk1GdCvWAhWw9Hhu"; //시즌1
            flag = "샤니";
            videourl = "";
        } else if (randp == 1167) {
            urllink = "1p46xm8jr1ln2ErymWM-wUu0HiLaXiA0G"; //데이브레이크에이지
            flag = "샤니";
            videourl = "";
        } else if (randp == 1168) {
            urllink = "1Re4Yo3St6VEPio0_XWBJS6MZh776C9de"; //데이브레이크에이지
            flag = "샤니";
            videourl = "";
        } else if (randp == 1169) {
            urllink = "1w2hOtQr-FUz4FAJHyMSNQgJudeyfNn_y"; //Felice
            flag = "샤니";
            videourl = "";
        } else if (randp == 1170) {
            urllink = "1OD2wqNoHT0EfBRUHJaGNVdJ7v0uxtyJ1"; //felice
            flag = "샤니";
            videourl = "";
        } else if (randp == 1171) {
            urllink = "1T9zAl_xhr_NutcUD9Jr1XPUfyZ4mCyav"; //일루미네이션 콘서트
            flag = "샤니";
            videourl = "";
        } else if (randp == 1172) {
            urllink = "1PeJWq_6zZFTipKMFHsujzQCkglflgZMp"; //일루미네이션 콘서트
            flag = "샤니";
            videourl = "";
        } else if (randp == 1173) {
            urllink = "16iVzwcyQzE2JuoNRaeyOjAMzkrGY5klD"; //킬러 미션
            flag = "샤니";
            videourl = "";
        } else if (randp == 1174) {
            urllink = "12JhRBN06vyJyYFBMsB9skkSWwpzysYCT"; //킬러 미션
            flag = "샤니";
            videourl = "";
        } else if (randp == 1175) {
            urllink = "1klXOL3fUWIAKKvCeYTydq_VJQgaiwPum"; //아이아이카쿠샤
            flag = "샤니";
            videourl = "";
        } else if (randp == 1176) {
            urllink = "1ev_A_zmN9BGnxl60u2usZ-cTuUgleTP8"; //아이아이카쿠샤
            flag = "샤니";
            videourl = "";
        } else if (randp == 1177) {
            urllink = "1BL0VvF980AqP6TmW11yfhFVG9rhJrgQg"; //시크릿 유토피아
            flag = "샤니";
            videourl = "";
        } else if (randp == 1178) {
            urllink = "1OdHvBxRHaBFFc466wub4efXBXNjRjSXF"; //시크릿 유토피아
            flag = "샤니";
            videourl = "";
        } else if (randp == 1179) {
            urllink = "1KfXuNzpoVUfSF0sycA_siGgZD03krtNm"; //한방은 네가
            flag = "샤니";
            videourl = "";
        } else if (randp == 1180) {
            urllink = "1uzYZBoV_RYVUhNbeirsJPpZDfFukvO6p"; //한방은 네가
            flag = "샤니";
            videourl = "";
        } else if (randp == 1181) {
            urllink = "16YbPOWn6ZiHUm1eOQLGtvGYsPGFEgzHd"; //캣스쿼드
            flag = "샤니";
            videourl = "";
        } else if (randp == 1182) {
            urllink = "1O0dTLt8KKvQWgch25NmP47npGmaZNAKf"; //캣스쿼드
            flag = "샤니";
            videourl = "";
        } else if (randp == 1183) {
            urllink = "1NhXtKcZLHquWTq88krzv2yh6qi8GQMjg"; //베리 배리 러브
            flag = "샤니";
            videourl = "";
        } else if (randp == 1184) {
            urllink = "1MFs_NUw6T7bQ8kyaojEVgwwSzRNpQef9"; //베리 배리 러브
            flag = "샤니";
            videourl = "";
        } else if (randp == 1185) {
            urllink = "1cYf3t0nwyF5pdhLBkKAxo7fY_eowmnPT"; //기브 미 섬 모어
            flag = "샤니";
            videourl = "";
        } else if (randp == 1186) {
            urllink = "1uhmmtVeFVwSYdhCcPU2K3RM3ts8zWFJX"; //기브 미 섬 모어
            flag = "샤니";
            videourl = "";
        } else if (randp == 1187) {
            urllink = "1GIdmqnpg4w37H-oaav7zFbLNRUxmZXzp"; //Tracing Defender
            flag = "샤니";
            videourl = "";
        } else if (randp == 1188) {
            urllink = "1tGfE98DyKelder5iKn6zPSO5QmXj8t6k"; //Tracing Defender
            flag = "샤니";
            videourl = "";
        } else if (randp == 1189) {
            urllink = "1Rex1W9cHpwFRd443d5qGnSfk9JivamkK"; //Overdrive Emotion
            flag = "샤니";
            videourl = "";
        } else if (randp == 1190) {
            urllink = "1t3tiZmPYN8KET2EtffLN8-rakUatXHoO"; //Overdrive Emotion
            flag = "샤니";
            videourl = "";
        } else if (randp == 1191) {
            urllink = ""; //
            flag = "샤니";
            videourl = "";
        }
    }
    if (true) { //노래 받기 데레 셀렉터
        if (randp == 1501) {
            urllink = "118Z-MV_qR1UGpkppTDf5CowNtnmxwCWm"; //헤드샷
            flag = "데레";
            videourl = "https://youtu.be/veJ9FEEfc8Q";
        } else if (randp == 1502) {
            urllink = "1JEMzJPhnnv1bTQGdrgxNnKMZO3RHAVMC"; //헤드샷
            flag = "데레";
            videourl = "https://youtu.be/veJ9FEEfc8Q";
        } else if (randp == 1503) {
            urllink = "1isF-2fSCSUEpjda7r-oh75XcyRfBGpHd"; //엔서
            flag = "데레";
            videourl = "https://youtu.be/pJs0eq1JPcc";
        } else if (randp == 1504) {
            urllink = "1CzRK9OQYC4sBjI65Uwp8hiXQEIQCYVwU"; //엔서
            flag = "데레";
            videourl = "https://youtu.be/pJs0eq1JPcc";
        } else if (randp == 1505) {
            urllink = "1BUpcNBmd0WM-sxWpl9A-TzZw1Vh_7dOP"; //세컨드 사이드
            flag = "데레";
            videourl = "https://youtu.be/E7WyrpY1rRI";
        } else if (randp == 1506) {
            urllink = "1ZLFxlAt8-O9HYePBGxB5kTJp5RMb09i3"; //세컨드 사이드
            flag = "데레";
            videourl = "https://youtu.be/E7WyrpY1rRI";
        } else if (randp == 1507) {
            urllink = "1XJglYPFWgxHPAvREO_Z20AZbj6r_XY_q"; //14평방의
            flag = "데레";
            videourl = "https://youtu.be/CceBLuBZePE";
        } else if (randp == 1508) {
            urllink = "1pqIUbm3zr4saHLP3-Qr5aHhgp49h852C"; //14평방의
            flag = "데레";
            videourl = "https://youtu.be/CceBLuBZePE";
        } else if (randp == 1509) {
            urllink = "1tX9enTnerwQ_Uf2p_ZJ4TH_1zBHG3TN7"; //아타나시야
            flag = "데레";
            videourl = "https://youtu.be/3VqvHw8OQzo";
        } else if (randp == 1510) {
            urllink = "1CeGUHYgoToInw6CRXWNhDsRAmH2nrj4Y"; //아타나시야
            flag = "데레";
            videourl = "https://youtu.be/3VqvHw8OQzo";
        } else if (randp == 1511) {
            urllink = "1R2FxCJIkl4UexZGsiarTW5FfltTQi5KB"; //비욘드
            flag = "데레";
            videourl = "https://youtu.be/-Dnr1zTCrqg";
        } else if (randp == 1512) {
            urllink = "1tEwv-4t4L7SLvboJfs9Bt82OSzCLEQs9"; //비욘드
            flag = "데레";
            videourl = "https://youtu.be/-Dnr1zTCrqg";
        } else if (randp == 1513) {
            urllink = "1FQ-YCq5kGz3YZxF85O3XGz7cmUY-YGOs"; //블레싱
            flag = "데레";
            videourl = "https://youtu.be/7vaAfJtql_4";
        } else if (randp == 1514) {
            urllink = "1zXk8gcli9jWXxrZXOwWgE90_YrvrarNM"; //블레싱
            flag = "데레";
            videourl = "https://youtu.be/7vaAfJtql_4";
        } else if (randp == 1515) {
            urllink = "1g4awbg51JCCAhWs5SfXF_ZRem-t92plf"; //블루밍 데이
            flag = "데레";
            videourl = "https://youtu.be/BzNK9wmyh-w";
        } else if (randp == 1516) {
            urllink = "1CIlIV9EpMUOMVP0ysT8zcYtpoNTn5STc"; //블루밍 데이
            flag = "데레";
            videourl = "https://youtu.be/BzNK9wmyh-w";
        } else if (randp == 1517) {
            urllink = "1nslhFkmI-cHPs9xZeu2psG2jYWct9ZDM"; //브랜뉴
            flag = "데레";
            videourl = "https://youtu.be/NpxG_iHd5YY";
        } else if (randp == 1518) {
            urllink = "1HD3S9gs1yIp9n4ctNAKQ6Gn5Tf_kYAP3"; //브랜뉴
            flag = "데레";
            videourl = "https://youtu.be/NpxG_iHd5YY";
        } else if (randp == 1519) {
            urllink = "1WIOteOQJgfEj7tlJ8cBG5cYHXL3Etl4z"; //체리 메리 체리
            flag = "데레";
            videourl = "https://youtu.be/rTP5gPLFd3w";
        } else if (randp == 1520) {
            urllink = "1bU7pHG9UCAc9LqIJe-0s84mEd3IKw0oW"; //체리 메리 체리
            flag = "데레";
            videourl = "https://youtu.be/rTP5gPLFd3w";
        } else if (randp == 1521) {
            urllink = "1HKKKS-8b66-mmO4OpkVZH8w2dZXOe60S"; //클로우 마이 하트
            flag = "데레";
            videourl = "https://youtu.be/gDxQzAPBrD8";
        } else if (randp == 1522) {
            urllink = "1-tzxzcrj7kgXkyhIoxlQ0px_B2LnsUn5"; //클로우 마이 하트
            flag = "데레";
            videourl = "https://youtu.be/gDxQzAPBrD8";
        } else if (randp == 1523) {
            urllink = "147bsq41SPCW5yCjzczT5bmKmY6VFr_Yu"; //코믹 코스믹
            flag = "데레";
            videourl = "https://youtu.be/f6M3ZMlCD7Q";
        } else if (randp == 1524) {
            urllink = "1vdD4DFT8VCEy1oMHXmGGgpDVVXVvEaFy"; //코믹 코스믹
            flag = "데레";
            videourl = "https://youtu.be/f6M3ZMlCD7Q";
        } else if (randp == 1525) {
            urllink = "18KzLvICXcZGukliqNN7xfhAD7cbOOiMN"; //에버모어
            flag = "데레";
            videourl = "";
        } else if (randp == 1526) {
            urllink = "1K_lDb-quQr3rT0ImmuzWjYbJXbbNNdbO"; //에버모어
            flag = "데레";
            videourl = "";
        } else if (randp == 1527) {
            urllink = "10QNXlvAu-FM7fPrhBTMyBV_1lr7YMTxG"; //플립 플롭
            flag = "데레";
            videourl = "";
        } else if (randp == 1528) {
            urllink = "1I9dEEibuj40aFdGrqjw0U3qlOyYH_xV1"; //플립 플롭
            flag = "데레";
            videourl = "";
        } else if (randp == 1529) {
            urllink = "13wTNrWaz9V66zJymItFEIxqZy8nFsouB"; //프로스트
            flag = "데레";
            videourl = "https://youtu.be/zDFas-a63CM";
        } else if (randp == 1530) {
            urllink = "1rAOvX1NnCzkk6TM1vrGHVjr6nsQAhOHr"; //프로스트
            flag = "데레";
            videourl = "https://youtu.be/zDFas-a63CM";
        } else if (randp == 1531) {
            urllink = "14CjQskRH8O7OPILk6q3bsIU2Zw8RJHw3"; //고저스트고
            flag = "데레";
            videourl = "https://youtu.be/g2CUvJhBOqE";
        } else if (randp == 1532) {
            urllink = "1DeWrQSi1sU4I_W4mioaDIuVl7Sij7SMe"; //고저스트고
            flag = "데레";
            videourl = "https://youtu.be/g2CUvJhBOqE";
        } else if (randp == 1533) {
            urllink = "1ZXZiGtbXtBCOJa2xe2SmbypPZPVYWNWu"; //가십 클럽
            flag = "데레";
            videourl = "https://youtu.be/o_rXPq21WLk";
        } else if (randp == 1534) {
            urllink = "17OmmKJR67upJn5VBXSu1kJC4G7AWWhda"; //가십 클럽
            flag = "데레";
            videourl = "https://youtu.be/o_rXPq21WLk";
        } else if (randp == 1535) {
            urllink = "1CKNCh-EgR8AdBw8aLXOPeo-5IkK0vk2O"; //호텔 문사이드
            flag = "데레";
            videourl = "https://youtu.be/BJK33YgpXG0";
        } else if (randp == 1536) {
            urllink = "1QbqjS-ATE4jbfHCoEMSuK_d6xqp8iYse"; //호텔 문사이드
            flag = "데레";
            videourl = "https://youtu.be/BJK33YgpXG0";
        } else if (randp == 1537) {
            urllink = "12zq3-CS1baJVX1QfEQC2O0XPJoV7Vk3j"; //조커
            flag = "데레";
            videourl = "https://youtu.be/F7ysiulAu8o";
        } else if (randp == 1538) {
            urllink = "1u67lMjI9DRYbsVptEvr5tbZ7ZLx1kqUI"; //조커
            flag = "데레";
            videourl = "https://youtu.be/F7ysiulAu8o";
        } else if (randp == 1539) {
            urllink = "1qyjLYddH4VEa3ncTqu1q-LUbH4Nc27bj"; //카와이 메이크 마데이
            flag = "데레";
            videourl = "https://youtu.be/HXuIWAbCDZI";
        } else if (randp == 1540) {
            urllink = "11s-2k3DFWfO2MPbpkOv2w46sTWqAelC0"; //카와이 메이크 마데이
            flag = "데레";
            videourl = "https://youtu.be/HXuIWAbCDZI";
        } else if (randp == 1541) {
            urllink = "1HciK24XlpIJW67RVZ2UyjSZCQdAF0aaX"; //라이프이즈하
            flag = "데레";
            videourl = "";
        } else if (randp == 1542) {
            urllink = "1nrSwrmNvq7Y-CssjC0dc6eHmEroWl-Iy"; //라피으이즈하
            flag = "데레";
            videourl = "";
        } else if (randp == 1543) {
            urllink = "1Y7iKK_j_mZD8qWARxEU84N9-Chr5b2ai"; //러브데스티니
            flag = "데레";
            videourl = "https://youtu.be/xVjwYU0MsYM";
        } else if (randp == 1544) {
            urllink = "1FXZtRCK396-ZoxI5EOS_TzGv2qJ6NXaU"; //러브데스티니
            flag = "데레";
            videourl = "https://youtu.be/xVjwYU0MsYM";
        } else if (randp == 1545) {
            urllink = "1A_iwH7Ycxik7vilhMZ0iztPyUwDyjH4C"; //맥스비트
            flag = "데레";
            videourl = "https://youtu.be/fEDweBgdRwI";
        } else if (randp == 1546) {
            urllink = "1c56mQJWVejI07T2Jctp4Tm5neVU34OBO"; //맥스비트
            flag = "데레";
            videourl = "https://youtu.be/fEDweBgdRwI";
        } else if (randp == 1547) {
            urllink = "1NY_moPUa0jxp40Ppnn2SgqfwohPXMFCp"; //네오뷰티풀페인
            flag = "데레";
            videourl = "";
        } else if (randp == 1548) {
            urllink = "1f42n0iUdj4HGheoZ8kTnoo2m8a8-vSOX"; //네오뷰티풀페인
            flag = "데레";
            videourl = "";
        } else if (randp == 1549) {
            urllink = "1pdEosOGCVC_Xt-A9Uz6DPzGIf1baYdfC"; //네버엔드
            flag = "데레";
            videourl = "";
        } else if (randp == 1550) {
            urllink = "1zpJSFRl8ng2pmDkJlSFuFj6UBGrLLNG5"; //네버엔드
            flag = "데레";
            videourl = "";
        } else if (randp == 1551) {
            urllink = "1TuQ_h324hD0MGV4iUt7MsP_3jeL86Oxu"; //낫씽벗유
            flag = "데레";
            videourl = "https://youtu.be/Sm_4j1iUGEQ";
        } else if (randp == 1552) {
            urllink = "1Y5SDmCgcz1oPWlJmlyPFdhPCumGwxUNT"; //낫씽벗유
            flag = "데레";
            videourl = "https://youtu.be/Sm_4j1iUGEQ";
        } else if (randp == 1553) {
            urllink = "1WLwn9eQZz_o3KQY5So0KqgpmmwJBhQUC"; //누디
            flag = "데레";
            videourl = "https://youtu.be/3HcDWYEVol8";
        } else if (randp == 1554) {
            urllink = "1oCC59SP9BNGBAHqF5pfrRjU1CFn_rJy7"; //누디
            flag = "데레";
            videourl = "https://youtu.be/3HcDWYEVol8";
        } else if (randp == 1555) {
            urllink = "1eK7fkW1q05OUR2Pd4vhH8fkYb-vhFeaX"; //오쿠리모노
            flag = "데레";
            videourl = "https://youtu.be/iMb8VnRKuWY";
        } else if (randp == 1556) {
            urllink = "1wdVGVzduP5dyhag0q6hYqNO6kFlIUTpw"; //오쿠리모노
            flag = "데레";
            videourl = "https://youtu.be/iMb8VnRKuWY";
        } else if (randp == 1557) {
            urllink = "1aeneaGsR8XNm1JbGAw1tFZkJvSkkaj3D"; //오렌지사파이어
            flag = "데레";
            videourl = "https://youtu.be/phOCwP7eAvY";
        } else if (randp == 1558) {
            urllink = "1lGRt5Qal0q7ZSbvtG94BB04BDIwkTPpn"; //오렌지사파이어
            flag = "데레";
            videourl = "https://youtu.be/phOCwP7eAvY";
        } else if (randp == 1559) {
            urllink = "1po-yBba0TXcJjXU_iJZm_LoNxNwjJCtT"; //오타헨
            flag = "데레";
            videourl = "https://youtu.be/TIjobAKdhW4";
        } else if (randp == 1560) {
            urllink = "1j-fLMIeM4Yx8q_IgcHprBO8RXmyorvVb"; //오타헨앤섬
            flag = "데레";
            videourl = "https://youtu.be/TIjobAKdhW4";
        } else if (randp == 1561) {
            urllink = "179WEKCFFv4m6TZLmt-ZJM-vjSSltiF7I"; //팔레트
            flag = "데레";
            videourl = "https://youtu.be/qTH6xSO81yY";
        } else if (randp == 1562) {
            urllink = "1lYagqtZMXAG_REImmAuKk6XqSvgrtY3f"; //팔레트
            flag = "데레";
            videourl = "https://youtu.be/qTH6xSO81yY";
        } else if (randp == 1563) {
            urllink = "17BlJSZ1IaL-qgVPXPjwarrW8PUHW12uW"; //프리티라이어
            flag = "데레";
            videourl = "https://youtu.be/JmFkpHQvMrA";
        } else if (randp == 1564) {
            urllink = "17evLrdlDKk4yYNdIL8T6xpEIyuIPaIdm"; //프리티라이어
            flag = "데레";
            videourl = "https://youtu.be/JmFkpHQvMrA";
        } else if (randp == 1565) {
            urllink = "1L34CjjpmpIz9yTLIlSicGIoekNGb6Ohw"; //프라이베이트사인
            flag = "데레";
            videourl = "https://youtu.be/rAoIHAodxF0";
        } else if (randp == 1566) {
            urllink = "17v7PiabBtHowsVv60zAp3pNCQo-9YP0s"; //프라이베이트사인
            flag = "데레";
            videourl = "https://youtu.be/rAoIHAodxF0";
        } else if (randp == 1567) {
            urllink = "1oC4geSqUiQscJQCrJAt1zWS6WFzGCtla"; //프루스트이펙트
            flag = "데레";
            videourl = "https://youtu.be/p13Mg8Od4VI";
        } else if (randp == 1568) {
            urllink = "1rMuW9mA-hbuO-B-HdRPMvVt54URn9c5k"; //프루스트이펙트
            flag = "데레";
            videourl = "https://youtu.be/p13Mg8Od4VI";
        } else if (randp == 1569) {
            urllink = "1r38hfS_OVa3cSRXYBxLKnoF1lBHNBpls"; //라디오해피
            flag = "데레";
            videourl = "https://youtu.be/1noWWbi0hJc";
        } else if (randp == 1570) {
            urllink = "1I99fFqwFU190qnnumOQpe5hGRyj_g7gV"; //라디오해피
            flag = "데레";
            videourl = "https://youtu.be/1noWWbi0hJc";
        } else if (randp == 1571) {
            urllink = "1qYseVWeKc5oLn2qLFKETWh2uJv5KyDDK"; //레이지 오브 더스트
            flag = "데레";
            videourl = "";
        } else if (randp == 1572) {
            urllink = "19_OQzC64bl1bYQSuZzVQhtZINgeqTH81"; //레이지 오브 더스트
            flag = "데레";
            videourl = "";
        } else if (randp == 1573) {
            urllink = "1koLoaKAL1ldY2mkFJDQ6mKR5lmEx6YRj"; //로만틱 나우
            flag = "데레";
            videourl = "https://youtu.be/CLE3PcUDmsU";
        } else if (randp == 1574) {
            urllink = "1qAc8VSxmdoBsFre330HAieehpzwqCJ5v"; //로만틱 나우
            flag = "데레";
            videourl = "https://youtu.be/CLE3PcUDmsU";
        } else if (randp == 1575) {
            urllink = "1IQaHgCRF6achgEaLIDf3RW221D5w8aUz"; //스마일링
            flag = "데레";
            videourl = "https://youtu.be/nzyNiESkhs4";
        } else if (randp == 1576) {
            urllink = "1wGnDzB_pnZa3L2hwtm7ZIhcLmP6ruSLS"; //스마일링
            flag = "데레";
            videourl = "https://youtu.be/nzyNiESkhs4";
        } else if (randp == 1577) {
            urllink = "1c5SNE8n3kMvT7WifaIK8RXEA3nfTyKzN"; //싱더프롤로그
            flag = "데레";
            videourl = "https://youtu.be/KFX-Ced7r_M";
        } else if (randp == 1578) {
            urllink = "1WKAztObnUzwVHZ598RziKOs5N5Eqftrp"; //싱더프롤로그
            flag = "데레";
            videourl = "https://youtu.be/KFX-Ced7r_M";
        } else if (randp == 1579) {
            urllink = "1lGPk5F3uJ7qbLtCQ2WIPQ-DXJGCkxT0h"; //스노우윙
            flag = "데레";
            videourl = "https://youtu.be/wBXDxZoeo84";
        } else if (randp == 1580) {
            urllink = "1TAAVUIDi-PAGTA55K6pyyYSBxbK4IByM"; //스노우윙
            flag = "데레";
            videourl = "https://youtu.be/wBXDxZoeo84";
        } else if (randp == 1581) {
            urllink = "1kWJj1Dhqg7jgFwVLvuwJ6ykvWuksFwZ6"; //스노우러브
            flag = "데레";
            videourl = "https://youtu.be/4ksVZStFPao";
        } else if (randp == 1582) {
            urllink = "1CZKZ7E5fDvIxrzNjIpOm3bnKRu718KSu"; //스노우러브
            flag = "데레";
            videourl = "https://youtu.be/4ksVZStFPao";
        } else if (randp == 1583) {
            urllink = "1ewSbD3X9bER8xK7yq7dxnc6iLpICBlOx"; //스프링스크림
            flag = "데레";
            videourl = "https://youtu.be/jvdch_tWj_E";
        } else if (randp == 1584) {
            urllink = "1mpANCKN78_U7FGVGXK6QBmpjUA7c7b7I"; //스프링스크림
            flag = "데레";
            videourl = "https://youtu.be/jvdch_tWj_E";
        } else if (randp == 1585) {
            urllink = "1Fr-STGr8KGws45LNlckv0_Az6ot1_OiG"; //스테이지바이스
            flag = "데레";
            videourl = "";
        } else if (randp == 1586) {
            urllink = "1IdEbMMQ-9sD9OtJcXL9rvwBVisxj0dTt"; //스테이지바이
            flag = "데레";
            videourl = "";
        } else if (randp == 1587) {
            urllink = "1Gxy0x7mN2Y0ESl-fo2NcUnkpYgXv31HM"; //선 플라워
            flag = "데레";
            videourl = "https://youtu.be/G2aRlBeBAJU";
        } else if (randp == 1588) {
            urllink = "1DWusvhP01NGie-4951HPpDbrSe68_Upk"; //선 플라워
            flag = "데레";
            videourl = "https://youtu.be/G2aRlBeBAJU";
        } else if (randp == 1589) {
            urllink = "1FFkKWgZ2lpcx3FC3MWoxQggH8RNGTQm_"; //선샤인시메이
            flag = "데레";
            videourl = "https://youtu.be/AHYo0VaRVVM";
        } else if (randp == 1590) {
            urllink = "1TdiL0p77vrk2Bz37Ah_bUE3BX0D6_sFU"; //선샤인시메이
            flag = "데레";
            videourl = "https://youtu.be/AHYo0VaRVVM";
        } else if (randp == 1591) {
            urllink = "1Qgzt1dIoecppCnBKKLL8wBFasTHpJtYy"; //타카마리 클라이막스
            flag = "데레";
            videourl = "https://youtu.be/seSvPo1rSCk";
        } else if (randp == 1592) {
            urllink = "1y6vyBVxfOfJAZIl8XpwA2hs1k_3elZTW"; //타카마리 클라이맥스
            flag = "데레";
            videourl = "https://youtu.be/seSvPo1rSCk";
        } else if (randp == 1593) {
            urllink = "1vfAPloSTpMowysRs0R9VKjSuYfIL0FB-"; //트리니티필드
            flag = "데레";
            videourl = "https://youtu.be/3UP1dnz8Sxc";
        } else if (randp == 1594) {
            urllink = "1bmwvWxqyiO3KQLr7aDOvUvimEO4kzMkD"; //트리니티필드
            flag = "데레";
            videourl = "https://youtu.be/3UP1dnz8Sxc";
        } else if (randp == 1595) {
            urllink = "1SrItiNycaCcVpVps_sJB4fYu36ji-N9h"; //트루컬러스
            flag = "데레";
            videourl = "https://youtu.be/5k5NQjxLp-0";
        } else if (randp == 1596) {
            urllink = "10YrHSdSJAGwDrPiSleY_uSPmeif_ivvP"; //틀루칼라스
            flag = "데레";
            videourl = "https://youtu.be/5k5NQjxLp-0";
        } else if (randp == 1597) {
            urllink = "1ulFMUTAknmxiuzoXdqPR-vrlmh0bE-xf"; //트러스트미
            flag = "데레";
            videourl = "";
        } else if (randp == 1598) {
            urllink = "1JefNu2Qmqcocu828jNWjV8qpPOWI1Qtt"; //트러스트미
            flag = "데레";
            videourl = "";
        } else if (randp == 1599) {
            urllink = "1a3PS35Ei3vIj9qTTMvYQW7Z5NJMj05Xj"; //튤립
            flag = "데레";
            videourl = "https://youtu.be/jLLNseBjh1I";
        } else if (randp == 1600) {
            urllink = "1OtTWcicQ5YVXZAaZvwR_Jp1phfOmpaQ2"; //튤립
            flag = "데레";
            videourl = "https://youtu.be/jLLNseBjh1I";
        } else if (randp == 1601) {
            urllink = "1l6hvkB3ZzCxPneVRpEzj47uR3H_G6KxU"; //트윈클테일
            flag = "데레";
            videourl = "https://youtu.be/BWbUr7BRYgE";
        } else if (randp == 1602) {
            urllink = "1okSGEP6LAaUe-X9wTmxntdavEmcNaVBw"; //트윈클테일
            flag = "데레";
            videourl = "https://youtu.be/BWbUr7BRYgE";
        } else if (randp == 1603) {
            urllink = "1CErB3leFJjbGBKMjGI-k5YakjcfajiO2"; //보야쥐
            flag = "데레";
            videourl = "https://youtu.be/8lPD8JnbRDI";
        } else if (randp == 1604) {
            urllink = "1yQFLOnW6tIEgr7A7-qlBbEa5kRiS8QE1"; //보야쥐
            flag = "데레";
            videourl = "https://youtu.be/8lPD8JnbRDI";
        } else if (randp == 1605) {
            urllink = "1maUsRZ-ToNEFQA6cr4Ijiw83Lc4P92oG"; //화이트 어게인
            flag = "데레";
            videourl = "https://youtu.be/JGwSxV4gUjs";
        } else if (randp == 1606) {
            urllink = "1eLWmVQUHShqfcizUA2vNhc0Yf-Iyruto"; //화이트 어게인
            flag = "데레";
            videourl = "https://youtu.be/JGwSxV4gUjs";
        } else if (randp == 1607) {
            urllink = "1InJA0_u5ozWMdBvwpT5rpoh-QIZlN09U"; //위시 유 해피니스
            flag = "데레";
            videourl = "https://youtu.be/5HUZCdlDZzA";
        } else if (randp == 1608) {
            urllink = "1bqPyAUGmar5p8wIOYZ4NR4S-ddPllWnI"; //위시 유 해피니스
            flag = "데레";
            videourl = "https://youtu.be/5HUZCdlDZzA";
        } else if (randp == 1609) {
            urllink = "1aCWMzDSncSPewhx2iue3JIEiQyBPO-Vp"; //예스 파티 타임
            flag = "데레";
            videourl = "";
        } else if (randp == 1610) {
            urllink = "1C9R8RALAfDh8J2SqfkglLD6_PDqRT5Ry"; //예스 파티 타임
            flag = "데레";
            videourl = "";
        } else if (randp == 1611) {
            urllink = "1wMa3ixMyHwkgC7NDiKNQSbao0RYS0LyE"; //유어 스타
            flag = "데레";
            videourl = "https://youtu.be/fNVVI8I01d4";
        } else if (randp == 1612) {
            urllink = "1JoNluptdYzup3Bu1r-68tbnBlmMwRqrL"; //유어 스타
            flag = "데레";
            videourl = "https://youtu.be/fNVVI8I01d4";
        } else if (randp == 1613) {
            urllink = "1L6Y0ZYdzIXG4WD9m7v0W9VEqFqtxM477"; //가을다워져
            flag = "데레";
            videourl = "https://youtu.be/Wi4rpa-58m8";
        } else if (randp == 1614) {
            urllink = "17ximI-VR33cbQACs737k2evyt1AR6Ng8"; //가을다워져
            flag = "데레";
            videourl = "https://youtu.be/Wi4rpa-58m8";
        } else if (randp == 1615) {
            urllink = "1CNd8-zX8wF2-kGd-oOxhZIx1BUFL5oSA"; //갈수없는
            flag = "데레";
            videourl = "https://youtu.be/K6dG6TstsxM";
        } else if (randp == 1616) {
            urllink = "1u3E25mP8OSY2rUGwlnAOJ2yaD0PyMKyj"; //갈수없는
            flag = "데레";
            videourl = "https://youtu.be/K6dG6TstsxM";
        } else if (randp == 1617) {
            urllink = "1pOTDKIBM7awZedHbQAgPPHrNMrIO3yXr"; //걸즈인더
            flag = "데레";
            videourl = "";
        } else if (randp == 1618) {
            urllink = "1sqF1NtoTXGFeVzRsuz4YJ2VpOpqGgTcy"; //걸즈인더
            flag = "데레";
            videourl = "";
        } else if (randp == 1619) {
            urllink = "15PtNYVSx4lL1kJ2qvYIGNejSmJD-1m8z"; //겨울하늘
            flag = "데레";
            videourl = "https://youtu.be/gvKD7zmShpg";
        } else if (randp == 1620) {
            urllink = "1beTRPRFeJ3IoOBJApYJ4v1vRZA12aiD4"; //겨울하늘
            flag = "데레";
            videourl = "https://youtu.be/gvKD7zmShpg";
        } else if (randp == 1621) {
            urllink = "15IRrmZCwhrxH5g2Vm5MRGprjErbdy3x3"; //골짜기 밑에
            flag = "데레";
            videourl = "https://youtu.be/p1C7kHm8apw";
        } else if (randp == 1622) {
            urllink = "1gvPCVHnqyfuRmFuD3jTiGhtTw5R8tnLy"; //골짜기 밑에
            flag = "데레";
            videourl = "https://youtu.be/p1C7kHm8apw";
        } else if (randp == 1623) {
            urllink = "1ZBQt7WPEI29gp2ppg8aPm5stlPnxIq29"; //공상 탐사
            flag = "데레";
            videourl = "https://youtu.be/b1GgM5_VvCU";
        } else if (randp == 1624) {
            urllink = "1gzRsgv9GeUSXqPaJc8621_WU9TfZCa-a"; //공상 탐사
            flag = "데레";
            videourl = "https://youtu.be/b1GgM5_VvCU";
        } else if (randp == 1625) {
            urllink = "1DKM9EElnGA_qs6ZE4R44tVS2hhmx0Dqh"; //기분 파티나이트
            flag = "데레";
            videourl = "";
        } else if (randp == 1626) {
            urllink = "1RCJjAU_VOAz91pTzePIXr7oo6xtJYN4V"; //기분파티나이트
            flag = "데레";
            videourl = "";
        } else if (randp == 1627) {
            urllink = "1JDPnquI2Pj-kEUPlqOBZtdDY0-wli_vF"; //꽃봉오리
            flag = "데레";
            videourl = "";
        } else if (randp == 1628) {
            urllink = "1M5MYuB3q12TTilD5O1zyskL3t3UyfE6t"; //꽃봉오리
            flag = "데레";
            videourl = "";
        } else if (randp == 1629) {
            urllink = "1aFfNFbrMKzwTRHAeBHK5kOJPx3qZhOsp"; //꽃비녀
            flag = "데레";
            videourl = "https://youtu.be/ude6pcpQ3nE";
        } else if (randp == 1630) {
            urllink = "1gfJL-71D_zlPGhGtNH1Yv_hF96ERnkkS"; //꽃비녀
            flag = "데레";
            videourl = "https://youtu.be/ude6pcpQ3nE";
        } else if (randp == 1631) {
            urllink = "1zJvM0f3RQDgdGaDW8Dzmi_quOtkDIyc4"; //꽃의 말
            flag = "데레";
            videourl = "https://youtu.be/lrxUU17zMEw";
        } else if (randp == 1632) {
            urllink = "1UMuec1zLR_y0qOnvjqIca_HsEbHJTNvK"; //꽃의 말
            flag = "데레";
            videourl = "https://youtu.be/lrxUU17zMEw";
        } else if (randp == 1633) {
            urllink = "1gnz6gv-z3TgAyXp5h3__Cfl-_ScSBDZj"; //꿈을 들여다
            flag = "데레";
            videourl = "";
        } else if (randp == 1634) {
            urllink = "1uqVT-I-PHE_nuKFZ2DD-n-6C7Wf16kvR"; //꿈을 들여다
            flag = "데레";
            videourl = "";
        } else if (randp == 1635) {
            urllink = "1_Q_28pt30aLzhvacHibVPZvV-s2d3SYT"; //나는 고철
            flag = "데레";
            videourl = "https://youtu.be/y1LeOSv0XQ8";
        } else if (randp == 1636) {
            urllink = "1Fms2LjBsjUBzCBdIDI_4VnB4EKZX5NNV"; //나는 고철
            flag = "데레";
            videourl = "https://youtu.be/y1LeOSv0XQ8";
        } else if (randp == 1637) {
            urllink = "1HbqOkNEXH0LlmpdClPT1-Ko2BxpLbnge"; //내 색깔 프렐
            flag = "데레";
            videourl = "";
        } else if (randp == 1638) {
            urllink = "1WaciuMaB43qWn2k4lvASXv_Qwf2xgS5T"; //내 색깔 프렐
            flag = "데레";
            videourl = "";
        } else if (randp == 1639) {
            urllink = "1vjuh50xxloXqOkEHS1u75pvui3FOB19k"; //냥하고
            flag = "데레";
            videourl = "https://youtu.be/CTp37Xn5MTA";
        } else if (randp == 1640) {
            urllink = "1rER-r0zGFeRR35xFjXCZaJpeV0UqT-8r"; //냥하고
            flag = "데레";
            videourl = "https://youtu.be/CTp37Xn5MTA";
        } else if (randp == 1641) {
            urllink = "1DCOsdqAinbon2WyT4HOBMlw0rxKui5HN"; //너의 스테이지
            flag = "데레";
            videourl = "";
        } else if (randp == 1642) {
            urllink = "1etq58F_g75hSznRqAEA7kamNkkaMiSOP"; //너의 스테이지
            flag = "데레";
            videourl = "";
        } else if (randp == 1643) {
            urllink = "1i-Z0f-lLSf1dXYX5J1lanMJmSax-7Q-0"; //두근두근 에스
            flag = "데레";
            videourl = "https://youtu.be/6U6T9TpFCHU";
        } else if (randp == 1644) {
            urllink = "1t4HDai54m3PvZydNrw3OfwkViW0Ybz6h"; //두근두근 에스
            flag = "데레";
            videourl = "https://youtu.be/6U6T9TpFCHU";
        } else if (randp == 1645) {
            urllink = "1KVYOyDbUTD8E7rAhm9aI-pZKN5etPNcy"; //러브레터
            flag = "데레";
            videourl = "https://youtu.be/DD_RUaIbZZE";
        } else if (randp == 1646) {
            urllink = "1GYNfSV-pT5taXU9eQb9j1i9UckXr43zf"; //러브레터
            flag = "데레";
            videourl = "https://youtu.be/DD_RUaIbZZE";
        } else if (randp == 1647) {
            urllink = "1S6OpZ7kkzyOMPzhJWuRpXJzHD14X8T-D"; //레드솔
            flag = "데레";
            videourl = "";
        } else if (randp == 1648) {
            urllink = "1hfg_68_46zBxaxGEQJg3rr1KnxxeqoBA"; //레드솔
            flag = "데레";
            videourl = "";
        } else if (randp == 1649) {
            urllink = "1ocpB8AAOC5aiBxOtTcrDifFwD8odDdOJ"; //리틀리들
            flag = "데레";
            videourl = "https://youtu.be/DPPbFpFIWwQ";
        } else if (randp == 1650) {
            urllink = "1KS3jKwIZOD5-OxEgtS6Qs72Xf0tXM6mZ"; //리틀리들
            flag = "데레";
            videourl = "https://youtu.be/DPPbFpFIWwQ";
        } else if (randp == 1651) {
            urllink = "19ZfkSiV3znx08Hk9fdw-OGXdJrs5KXQO"; //메세지
            flag = "데레";
            videourl = "";
        } else if (randp == 1652) {
            urllink = "1_wbZEbJQljn7N3o3wKsT_6I8-k25IRFe"; //메세지
            flag = "데레";
            videourl = "";
        } else if (randp == 1653) {
            urllink = "1W3vUvqe98KEEatbTM7_VkAPG93SkB_L1"; //미러볼러브
            flag = "데레";
            videourl = "https://youtu.be/Z6HRwdjpkac";
        } else if (randp == 1654) {
            urllink = "1N9N4vT2Sv-JtdaxKUVgaaikIW7zLTHzA"; //미러볼러브
            flag = "데레";
            videourl = "https://youtu.be/Z6HRwdjpkac";
        } else if (randp == 1655) {
            urllink = "1NnDhiPYK6PZ8G_65jIDKSBiJFkkrcM9h"; //바람색 멜로디
            flag = "데레";
            videourl = "https://youtu.be/C0MIo9bFb6M";
        } else if (randp == 1656) {
            urllink = "1neUF692HHdj984y0C64drJG5Y9zXMWVs"; //바람색 멜로디
            flag = "데레";
            videourl = "https://youtu.be/C0MIo9bFb6M";
        } else if (randp == 1657) {
            urllink = "1LcEKOol16lFnWWfK5JOocZBaaMVInxJc"; //바벨
            flag = "데레";
            videourl = "https://youtu.be/enWldNwqKA4";
        } else if (randp == 1658) {
            urllink = "1AvxVY6bdMk9pMaY3ZZbboetJbG4uevUw"; //바벨
            flag = "데레";
            videourl = "https://youtu.be/enWldNwqKA4";
        } else if (randp == 1659) {
            urllink = "1aGfbejpjM6EWKPyDwcVSDcHtVxdrQk4F"; //박하
            flag = "데레";
            videourl = "https://youtu.be/RvFFa_J7vds";
        } else if (randp == 1660) {
            urllink = "1ozvftXJBmHs3bY91crQHe_K-hmzTBTsJ"; //박하
            flag = "데레";
            videourl = "https://youtu.be/RvFFa_J7vds";
        } else if (randp == 1661) {
            urllink = "1zwdoe96vDGiRXS1StWGEtB_BzcL6wqy2"; //반짝 만개
            flag = "데레";
            videourl = "https://youtu.be/QX9cq4jYK7Y";
        } else if (randp == 1662) {
            urllink = "1qrtlusxmXn6zy7jn7vCzo3VnC2u2RFJs"; //반짝 만개
            flag = "데레";
            videourl = "https://youtu.be/QX9cq4jYK7Y";
        } else if (randp == 1663) {
            urllink = "1L5QpwcfQh3s8vx5aC0euckCyJELFFoPj"; //발칙한
            flag = "데레";
            videourl = "https://youtu.be/m7CSmgYbBBs";
        } else if (randp == 1664) {
            urllink = "1G9iIM9-pJLNYtEIjFCAXmpVNLkzXMjvJ"; //발직한
            flag = "데레";
            videourl = "https://youtu.be/m7CSmgYbBBs";
        } else if (randp == 1665) {
            urllink = "1Tbg5bLI7tyyZY8ltuFvHIf-bu2ZCruWV"; //봄사랑
            flag = "데레";
            videourl = "";
        } else if (randp == 1666) {
            urllink = "1IE4-4hPzS3RdOztI_c--EqJE81vwBsIG"; //봄사랑
            flag = "데레";
            videourl = "";
        } else if (randp == 1667) {
            urllink = "19jD138hWKVM9SdHaJbZL0srDCq-BCNmW"; //오네가이
            flag = "데레";
            videourl = "";
        } else if (randp == 1668) {
            urllink = "1yvBeKIDhKB4DLED8lRekxv8OXNr8xnWQ"; //오네가이
            flag = "데레";
            videourl = "";
        } else if (randp == 1669) {
            urllink = "1XVHoE3qFoo33aXVFwkVH62rDRstjDJLe"; //비밀의 투왈렛
            flag = "데레";
            videourl = "https://youtu.be/S1rawqDj-wk";
        } else if (randp == 1670) {
            urllink = "1xX3ckS2OWBJAJdikxv4rRw-CrlHC2kM8"; //비밀의 투왈렛
            flag = "데레";
            videourl = "https://youtu.be/S1rawqDj-wk";
        } else if (randp == 1671) {
            urllink = "1iVU3Orwx7bnsxpGWJeuJaHJpiUh0x7jg"; //빛 심호흡
            flag = "데레";
            videourl = "https://youtu.be/N9TGQXYMwqc";
        } else if (randp == 1672) {
            urllink = "1EJiDHr0gRzdikv8-jxwmMy0Nsub8LKLI"; //빛 심호흡
            flag = "데레";
            videourl = "https://youtu.be/N9TGQXYMwqc";
        } else if (randp == 1673) {
            urllink = "18Us_qXzorvkXDiQwHmzIY4pY7aMNRLKQ"; //사랑스럽잖니
            flag = "데레";
            videourl = "https://youtu.be/bftvXZiOOX0";
        } else if (randp == 1674) {
            urllink = "1kwCuchhz1axqXCsk3wodIbIius_Lcs3W"; //사랑스럽잖니
            flag = "데레";
            videourl = "https://youtu.be/bftvXZiOOX0";
        } else if (randp == 1675) {
            urllink = "1WfvwhtPDDfNOWufSM78FEwctY6QHbuZO"; //생존본능
            flag = "데레";
            videourl = "https://youtu.be/0W5eB9RyS2w";
        } else if (randp == 1676) {
            urllink = "1oN-VTYP731Wnk1U_VJVWOzA8xPYRCzQE"; //생존본능
            flag = "데레";
            videourl = "https://youtu.be/0W5eB9RyS2w";
        } else if (randp == 1677) {
            urllink = "1360YnmB3Osiq9-qGr0lj_vrFl11-N9pU"; //서니드롭
            flag = "데레";
            videourl = "";
        } else if (randp == 1678) {
            urllink = "1qt159c0rLDXnzAAjDUwtUEFKOVVQEs2F"; //서니드롭
            flag = "데레";
            videourl = "";
        } else if (randp == 1679) {
            urllink = "1U2U-qnywIsaNAfkCQxRNi2uBppJS90Kn"; //수줍은
            flag = "데레";
            videourl = "https://youtu.be/ryAwi0h3LCc";
        } else if (randp == 1680) {
            urllink = "1aj_1P9rlfnnhaTDzckPbuCaWUNAA7O-k"; //수줍은
            flag = "데레";
            videourl = "https://youtu.be/ryAwi0h3LCc";
        } else if (randp == 1681) {
            urllink = "1HGSTBrLvyqJqxyeKZMloD_5KsrUo4Mhv"; //슈가하트
            flag = "데레";
            videourl = "https://youtu.be/hunsXGzNdr0";
        } else if (randp == 1682) {
            urllink = "1-yNJvv96uvGi_FiE5D8-j5h3ne59msP9"; //슈가하트
            flag = "데레";
            videourl = "https://youtu.be/hunsXGzNdr0";
        } else if (randp == 1683) {
            urllink = "1NxzXEnYoQlvDGPBCRH_xvfaFSQZCqoRf"; //스텝스킵
            flag = "데레";
            videourl = "https://youtu.be/sf_E3J5B7Cs";
        } else if (randp == 1684) {
            urllink = "1umcSsrVIFxYJQ7By9gL7sLjQeyJjHXRJ"; //스텝스킵
            flag = "데레";
            videourl = "https://youtu.be/sf_E3J5B7Cs";
        } else if (randp == 1685) {
            urllink = "1F3u8QXHISijW6feMRXMheWlxMiE0SAD8"; //슬로우라이프
            flag = "데레";
            videourl = "https://youtu.be/dXqqSW8ScCg";
        } else if (randp == 1686) {
            urllink = "1sI3P9LuhA11GPELgPQATmeBA4RFMHD_y"; //슬로우라이프
            flag = "데레";
            videourl = "https://youtu.be/dXqqSW8ScCg";
        } else if (randp == 1687) {
            urllink = "1T_QOeLHji55jwAd4G1jPzVEGWvFUaYUL"; //쌍익의 독주가
            flag = "데레";
            videourl = "https://youtu.be/SkFpNTnrG6o";
        } else if (randp == 1688) {
            urllink = "1yxjMVRRyi7IVf7d98xrZw6C7xZTbt-k9"; //쌍익의 독주가
            flag = "데레";
            videourl = "https://youtu.be/SkFpNTnrG6o";
        } else if (randp == 1689) {
            urllink = "1llu_vwTIaZSjDkIXOOABENrKuTiKJv9l"; //아름다운빛깔
            flag = "데레";
            videourl = "https://youtu.be/g9UnZZfCbhs";
        } else if (randp == 1690) {
            urllink = "1BPXQYHW5azleq4nczzxgTbmwOO9rOBeZ"; //아름다운빛깔
            flag = "데레";
            videourl = "https://youtu.be/g9UnZZfCbhs";
        } else if (randp == 1691) {
            urllink = "1eD2uJsCxb30cLkwMFsRnmvM-b9v9IMo2"; //안녕 안드로메다
            flag = "데레";
            videourl = "https://youtu.be/Mf2t8BVkesA";
        } else if (randp == 1692) {
            urllink = "1Ga-JLvZ-1EvBdtkDHqTpoMIIONsihQav"; //안녕 안드로메다
            flag = "데레";
            videourl = "https://youtu.be/Mf2t8BVkesA";
        } else if (randp == 1693) {
            urllink = "1TquTFNpXolUaCN9-uc3X7pk9leBVWyn9"; //언데드 댄스
            flag = "데레";
            videourl = "";
        } else if (randp == 1694) {
            urllink = "15IZipTwCWT2_G8-CFFD0y066bpjtwuRB"; //언데드 댄스
            flag = "데레";
            videourl = "";
        } else if (randp == 1695) {
            urllink = "1d4S5orGXRYxe-rbV95cz1YeXMRXmr4rw"; //나츠 코이
            flag = "데레";
            videourl = "https://youtu.be/4E-ymuQtFns";
        } else if (randp == 1696) {
            urllink = "11ph_MIA9QUCdn18Npe9ANVPpGRLS1e7F"; //나츠 코이
            flag = "데레";
            videourl = "https://youtu.be/4E-ymuQtFns";
        } else if (randp == 1697) {
            urllink = "1K4_TCCkFPRMk7Q6Mp_ZZQCPoMPClhmoH"; //연풍
            flag = "데레";
            videourl = "https://youtu.be/Qzwh4cAKCD0";
        } else if (randp == 1698) {
            urllink = "1tCK_lVRxXHWuqgcH-lGal8Eab1zx0wjm"; //연풍
            flag = "데레";
            videourl = "https://youtu.be/Qzwh4cAKCD0";
        } else if (randp == 1699) {
            urllink = "1lmbq_lANqGnW5v8x9U-qE1YOeX3wsc89"; //오렌지 타임
            flag = "데레";
            videourl = "https://youtu.be/8xCeG30GZWo";
        } else if (randp == 1700) {
            urllink = "1xmPrlEMpSaUCMN6JTnY3i2QNxnB-seOo"; //오렌지 타임
            flag = "데레";
            videourl = "https://youtu.be/8xCeG30GZWo";
        } else if (randp == 1701) {
            urllink = "1n0zVcQdbo9k0q_uOfpn4MN-o_J6-E8Vk"; //은하도서관
            flag = "데레";
            videourl = "https://youtu.be/giX67zX1suI";
        } else if (randp == 1702) {
            urllink = "1jh33zSI80xJ5w9LZM-i7JaZoGiFUVlWp"; //은하도서관
            flag = "데레";
            videourl = "https://youtu.be/giX67zX1suI";
        } else if (randp == 1703) {
            urllink = "1SI5le4JZJfiOHtUv1jDnF8dgQbpFqPkc"; //의용인협
            flag = "데레";
            videourl = "https://youtu.be/M-j_gUnAAV8";
        } else if (randp == 1704) {
            urllink = "1_oJyEm-4tbJOXQ6jorn78Nq-i4SLtr3o"; //의용인협
            flag = "데레";
            videourl = "https://youtu.be/M-j_gUnAAV8";
        } else if (randp == 1705) {
            urllink = "1vyB2zlgdSSceaq2BZMQQtNbrJoh5y0JK"; //이 하늘 아래
            flag = "데레";
            videourl = "";
        } else if (randp == 1706) {
            urllink = "13gpyV5H6FV_tCN-1fPwak6he81u4pGdN"; //이 하늘 아래
            flag = "데레";
            videourl = "";
        } else if (randp == 1707) {
            urllink = "13GlmaIY77i1SdczmhPnQwARLMVOri1He"; //인상
            flag = "데레";
            videourl = "https://youtu.be/LEcfWpnF_aU";
        } else if (randp == 1708) {
            urllink = "1AisuVlR-1M3ZbxC7lehgvpZoMkmiUITC"; //인상
            flag = "데레";
            videourl = "https://youtu.be/LEcfWpnF_aU";
        } else if (randp == 1709) {
            urllink = "1CxdrmYNhgn5ZAMmYIeM6X8viBezPWzDE"; //일루저니스타
            flag = "데레";
            videourl = "";
        } else if (randp == 1710) {
            urllink = "1TClkDE2SVSUQXGsdwpG5TmeV_bWNYFIl"; //일루저니스타
            flag = "데레";
            videourl = "";
        } else if (randp == 1711) {
            urllink = "1jXAoUh7Yi205CdkgcBIBIakKnzeMWeJq"; //잔뜩
            flag = "데레";
            videourl = "https://youtu.be/xgPNzkbTcAs";
        } else if (randp == 1712) {
            urllink = "1hW5Uc05TFWQvR2fEYuILiSBBkmHrppiR"; //잔뜩
            flag = "데레";
            videourl = "https://youtu.be/xgPNzkbTcAs";
        } else if (randp == 1713) {
            urllink = "1Iy7tp-HqnNpkKeZV4JmL-XcxAUdwfLzI"; //전진하라 소녀
            flag = "데레";
            videourl = "";
        } else if (randp == 1714) {
            urllink = "1li-UdtU0NjwL23POreT557i0LO29c-Ur"; //전진하라 소녀
            flag = "데레";
            videourl = "";
        } else if (randp == 1715) {
            urllink = "10zzwnUvjrUhysOtPgnUYI2NhFBmoY1ai"; //조르기 쉘위
            flag = "데레";
            videourl = "https://youtu.be/U2AjHRiCGxQ";
        } else if (randp == 1716) {
            urllink = "11X2ewdbqUxfyHaBKx0Ho03YOp3eJBxvW"; //조르기 쉘위
            flag = "데레";
            videourl = "https://youtu.be/U2AjHRiCGxQ";
        } else if (randp == 1717) {
            urllink = "1EycZsjB-C366ErN4-OK29uF4O8RRLpRl"; //치사하잖아
            flag = "데레";
            videourl = "https://youtu.be/eUrnl0TFTFU";
        } else if (randp == 1718) {
            urllink = "1jEGL6lPMrv3hsApsLXY6Uau1sdRILKe-"; //치사하잖아
            flag = "데레";
            videourl = "https://youtu.be/eUrnl0TFTFU";
        } else if (randp == 1719) {
            urllink = "1cjITsPItcwROTPE8PPApMvnraxsIelnu"; //크레이지크레이지
            flag = "데레";
            videourl = "https://youtu.be/uNuPdKwYvTc";
        } else if (randp == 1720) {
            urllink = "1Ymr_RjSCeIjsIwx53was6lFLhzveDJe_"; //크레이지크레이지
            flag = "데레";
            videourl = "https://youtu.be/uNuPdKwYvTc";
        } else if (randp == 1721) {
            urllink = "1ZtPRLRv_LlHKOw8Jw9oGS-Aw5QkPRoz-"; //트윈테일의 바람
            flag = "데레";
            videourl = "https://youtu.be/z-nPNctjfMA";
        } else if (randp == 1722) {
            urllink = "1_Vm3bqOb-lb2p7M0QCV-R1THoa2LDnMe"; //트윈테일의 바람
            flag = "데레";
            videourl = "https://youtu.be/z-nPNctjfMA";
        } else if (randp == 1723) {
            urllink = "1A7QOJv0Eb6bYX0SHt_DOvU0_-JwM34sz"; //푸른 일번성
            flag = "데레";
            videourl = "https://youtu.be/Q3wL2YdURnY";
        } else if (randp == 1724) {
            urllink = "17RGQTDs6tTtPuVa_d557D6yAx5lWoyoO"; //푸른 일번성
            flag = "데레";
            videourl = "https://youtu.be/Q3wL2YdURnY";
        } else if (randp == 1725) {
            urllink = "1R-NrpOIbGjp71xXqCfk-dcw1zStErCG1"; //푸른 하늘 릴레이션
            flag = "데레";
            videourl = "https://youtu.be/EnccMCg1QnY";
        } else if (randp == 1726) {
            urllink = "1ZVdjdIYgo_iCcwGBgsKZQhetCcTVAULR"; //푸른 하늘 릴레이션
            flag = "데레";
            videourl = "https://youtu.be/EnccMCg1QnY";
        } else if (randp == 1727) {
            urllink = "11Zqz0pbNf2KKDS7hx1nEBwuTGTkqLA5p"; //피어라 쥬엘
            flag = "데레";
            videourl = "https://youtu.be/uNhyzTTis1w";
        } else if (randp == 1728) {
            urllink = "1OIDxB9TlkbxJEKQGVkv-8EVhqIq52ORc"; //피어라 쥬엘
            flag = "데레";
            videourl = "https://youtu.be/uNhyzTTis1w";
        } else if (randp == 1729) {
            urllink = "1Eqaabz14ZXb35qB-94MiK9uDnC2TVCWK"; //하피가
            flag = "데레";
            videourl = "https://youtu.be/3KOFCjsz6Ug";
        } else if (randp == 1730) {
            urllink = "1wNr2xfZEK-fzLjgKPJru0CIs1ZUepLvv"; //하피가
            flag = "데레";
            videourl = "https://youtu.be/3KOFCjsz6Ug";
        } else if (randp == 1731) {
            urllink = "1z_VBlGBoGArK4VijW0XHYW-TH4SMpvB9"; //행복의 법칙
            flag = "데레";
            videourl = "https://youtu.be/69lMeOj7evc";
        } else if (randp == 1732) {
            urllink = "19y9e8jEkTiW7yW8BAa1MK18mMRhEjQgH"; //행복의 법칙
            flag = "데레";
            videourl = "https://youtu.be/69lMeOj7evc";
        } else if (randp == 1733) {
            urllink = "1rgVjvhYUlEKZulDWw2itMQqfDBIjGANC"; //흔들리는 플레그쉽
            flag = "데레";
            videourl = "https://youtu.be/_5nFZH-ivpY";
        } else if (randp == 1734) {
            urllink = "1bogyTkrZwNXwXImlJr5aLg-zRHvRo04K"; //흔들리는 플레그쉽
            flag = "데레";
            videourl = "https://youtu.be/_5nFZH-ivpY";
        } else if (randp == 1735) {
            urllink = "1wpLNoiHp8VxXQw_QcolLm4n8WDZ3wyjx"; //나날이 어드밴티지
            flag = "데레";
            videourl = "https://youtu.be/844PA3srgIQ";
        } else if (randp == 1736) {
            urllink = "1RprQEf3Fx4R0TuKvu4W5sf0ZzsXyAect"; //나날이 어드밴티지
            flag = "데레";
            videourl = "https://youtu.be/844PA3srgIQ";
        } else if (randp == 1737) {
            urllink = "1enxHK1780uZipEDEDJuVFDVGQJRZy7AD"; //드라스틱
            flag = "데레";
            videourl = "";
        } else if (randp == 1738) {
            urllink = "1rBQnWm0JDnNmIDrCVWsZ01440SUwIlNl"; //드라스틱
            flag = "데레";
            videourl = "";
        } else if (randp == 1739) {
            urllink = "1apb1AhL07ZtO7see54LH12nXUq15hbOK"; //마이셀프
            flag = "데레";
            videourl = "";
        } else if (randp == 1740) {
            urllink = "1Imu8MrLqkJia7aNy2kK77Tp4-aIFyOY4"; //마이셀프
            flag = "데레";
            videourl = "";
        } else if (randp == 1741) {
            urllink = "1UvL_oC83Fu8x05DRQUHM7VqqSxtQihzY"; //나는 태양이다
            flag = "데레";
            videourl = "";
        } else if (randp == 1742) {
            urllink = "1l7pya3y-Ab5lLifjjB2koyaKGYdUh5lD"; //나는 태양이다
            flag = "데레";
            videourl = "";
        } else if (randp == 1743) {
            urllink = "1wC1ldOEl0P6jWPHflyY_zf4ov5-AFYHn"; //두른거림은
            flag = "데레";
            videourl = "";
        } else if (randp == 1744) {
            urllink = "1O2Gj87TYhj8aqhFE9ImrAJCcEvFQxhiE"; //두근거림은
            flag = "데레";
            videourl = "";
        } else if (randp == 1745) {
            urllink = "1Et3S4j70aJHduo8bIgxtI6aG0XQrDywz"; //성환세계
            flag = "데레";
            videourl = "";
        } else if (randp == 1746) {
            urllink = "1PYlzRTW9YeDB_-sWhubG5XoNxCRmEJaM"; //성환세계
            flag = "데레";
            videourl = "";
        } else if (randp == 1747) {
            urllink = "1a-AMImKtzykRDEEwojnVgUAFgXFeGVoJ"; //타락한 과실
            flag = "데레";
            videourl = "";
        } else if (randp == 1748) {
            urllink = "1hatyzXnRYnetp1riUQojuxv021j-xWjw"; //타락한 과실
            flag = "데레";
            videourl = "";
        } else if (randp == 1749) {
            urllink = "1M1-u0nG5__gP3VzapFwcfY6umcCywqbn"; //패킹 헐 페이버릿
            flag = "데레";
            videourl = "";
        } else if (randp == 1750) {
            urllink = "1BWFPxRbd9dfQsXDFofc4MHztkU_hXxVm"; //패킹 헐 페이버릿
            flag = "데레";
            videourl = "";
        } else if (randp == 1751) {
            urllink = "1b1QcBWhrFH0axwbPaxmFH2YFFNcTYDne"; //리플렉티브 일루미네이션 나이트
            flag = "데레";
            videourl = "";
        } else if (randp == 1752) {
            urllink = "1SAm4uCE5ADVu5dBVeCOjMC1ixrDAOPio"; //리플렉티브 왜이렇게 길어
            flag = "데레";
            videourl = "";
        } else if (randp == 1753) {
            urllink = "1NZwv857HOtmg6OyPV9K4ogD1nylP7peQ"; //스트리트 런웨이
            flag = "데레";
            videourl = "";
        } else if (randp == 1754) {
            urllink = "1Q5jNr_BZllNNWjVbYMQooFXTiqflej7e"; //스트리트 런웨이
            flag = "데레";
            videourl = "";
        } else if (randp == 1755) {
            urllink = "1fUmBd56UeQ73r2UuTNw0gIqMDr-eMM2t"; //초콜릿? 레모네이드? 어느 쪽??
            flag = "데레";
            videourl = "";
        } else if (randp == 1756) {
            urllink = "10XRGJKdLITylppspVXOkAk5OBjnurbN3"; //초콜릿? 레모네이드? 어느 쪽??
            flag = "데레";
            videourl = "";
        } else if (randp == 1757) {
            urllink = "176cnXiVcqQCUWtIoR_dNCckxcVW1oGI6"; //인정해주지 않아도 괜찮아
            flag = "데레";
            videourl = "";
        } else if (randp == 1758) {
            urllink = "1ZyLZsTSibte5hyRrE_R9S_-7xBEQ-10x"; //인정해주지 않아도 괜찮아
            flag = "데레";
            videourl = "";
        } else if (randp == 1759) {
            urllink = ""; //
            flag = "데레";
            videourl = "";
        } else if (randp == 1760) {
            urllink = ""; //
            flag = "데레";
            videourl = "";
        } else if (randp == 1761) {
            urllink = ""; //
            flag = "데레";
            videourl = "";
        }
    }
    if (true) { //노래 받기 본가 셀렉터
        if (randp == 2001) {
            urllink = "1vhqibiPw4swQf9t9BmgRJ8uKKIqJlpMj"; //9:02pm
            flag = "본가";
            videourl = "https://youtu.be/Q1Xh6gSGQfE";
        } else if (randp == 2002) {
            urllink = "1X0hGk4AnmHLe_AZyaGeBwKuXsp6pqMvD"; //9:02pm
            flag = "본가";
            videourl = "https://youtu.be/Q1Xh6gSGQfE";
        } else if (randp == 2003) {
            urllink = "1DTIgo3EIE5qI-o2yR4yooPotFepc7goe"; //구구밤
            flag = "본가";
            videourl = "https://youtu.be/XjXEqA1Ql14";
        } else if (randp == 2004) {
            urllink = "1i9UpiKfcWT7y0-stDNdDsovKifGSV4HB"; //구구밤
            flag = "본가";
            videourl = "https://youtu.be/XjXEqA1Ql14";
        } else if (randp == 2005) {
            urllink = "1AFIH2EBe_i0OjrzlpvM54ShyP7Jqjk74"; //올라잇
            flag = "본가";
            videourl = "https://youtu.be/0xDPxU-zPe4";
        } else if (randp == 2006) {
            urllink = "19PumqDBcno3rNN69cJ9VFo_NJnmXN2ek"; //올라잇
            flag = "본가";
            videourl = "https://youtu.be/0xDPxU-zPe4";
        } else if (randp == 2007) {
            urllink = "19h3YDP01lH3TYpkpb05RvZZLfhXHNFbz"; //아르카디아
            flag = "본가";
            videourl = "https://youtu.be/wCj2jnJ9iGw";
        } else if (randp == 2008) {
            urllink = "177QmKyVzQLH155csdbW14-yg5R-0U6--"; //아르카디아
            flag = "본가";
            videourl = "https://youtu.be/wCj2jnJ9iGw";
        } else if (randp == 2009) {
            urllink = "17xgjRgCdsnknIHNeAbkYAregsKKQPnnz"; //블루밍
            flag = "본가";
            videourl = "";
        } else if (randp == 2010) {
            urllink = "16KwCp-DaQG9OY7Etu2d9tTHJpBP4lgjS"; //블루밍
            flag = "본가";
            videourl = "";
        } else if (randp == 2011) {
            urllink = "1lHvyJ3gEFymJRePvzL4v8Eexz9eKEIjG"; //브랜뉴데이
            flag = "본가";
            videourl = "";
        } else if (randp == 2012) {
            urllink = "1H9bHJqVKOTlkN7pDgqCz-29ZMgxMxCHR"; //브랜뉴데이
            flag = "본가";
            videourl = "";
        } else if (randp == 2013) {
            urllink = "13gd_kCbOt6lSWrsqKIEwFfgR4f6nkYRk"; //브레이브스타
            flag = "본가";
            videourl = "";
        } else if (randp == 2014) {
            urllink = "17O1DsTkTEJmVDmXI-ahhThYKHS0USmOf"; //브레이브스타
            flag = "본가";
            videourl = "";
        } else if (randp == 2015) {
            urllink = "1J5ATMpWQialqi_kDbE3DjcQRypSxuCNK"; //체인지
            flag = "본가";
            videourl = "https://youtu.be/882H4rt9IrY";
        } else if (randp == 2016) {
            urllink = "1coOGnJsV_dd1xbyKAmpzrRycJ7FYLo1P"; //체인지
            flag = "본가";
            videourl = "https://youtu.be/882H4rt9IrY";
        } else if (randp == 2017) {
            urllink = "1rHlk850G391St4JOZohdhH60wehByaif"; //컬러풀데이즈
            flag = "본가";
            videourl = "";
        } else if (randp == 2018) {
            urllink = "1zX1Nr16uQv1p0cf35fuRnEmQJmefCDxL"; //컬러풀데이즈
            flag = "본가";
            videourl = "";
        } else if (randp == 2019) {
            urllink = "129J8H8j89d1k5dG-YEMBBrbwj8p-oz-y"; //커밍스마일
            flag = "본가";
            videourl = "";
        } else if (randp == 2020) {
            urllink = "1Rg03V7hvJcPddR2Uxm4uCUu9-QdOpbZf"; //커밍스마일
            flag = "본가";
            videourl = "";
        } else if (randp == 2021) {
            urllink = "1UsnjoD_BllyHp_oMeo-Tbw6t6LDUvPPZ"; //크레센트 메이즈
            flag = "본가";
            videourl = "";
        } else if (randp == 2022) {
            urllink = "1HhbnfoXuLeya2Z_ZC4oV81q7bkCnwC_Z"; //크레센트 메이즈
            flag = "본가";
            videourl = "";
        } else if (randp == 2023) {
            urllink = "1TbC8-nA8vVUBFdlXtOPioXEHd2VSzIQf"; //데이 오브 더 퓨처
            flag = "본가";
            videourl = "";
        } else if (randp == 2024) {
            urllink = "1yzuDcWKzM8YN8T3dgzdrijmUFOA7ayyv"; //데이 오브 더 퓨처
            flag = "본가";
            videourl = "";
        } else if (randp == 2025) {
            urllink = "14X_bHfa0WvlCzBzvA00CejDW0YLAq7UQ"; //데스티니
            flag = "본가";
            videourl = "https://youtu.be/DW4Yui8cQ2s";
        } else if (randp == 2026) {
            urllink = "1PZDHoOyWmIQusIwYXm_kwFVvmREgfYA4"; //데스티니
            flag = "본가";
            videourl = "https://youtu.be/DW4Yui8cQ2s";
        } else if (randp == 2027) {
            urllink = "11wp2XNm3c78DYRcgrSZx9kobVEBBMtSM"; //다이아몬드
            flag = "본가";
            videourl = "https://youtu.be/RNe7RGaDuQ8";
        } else if (randp == 2028) {
            urllink = "1bqxM36awzzx011JBAg7r4Bq83bRGhiVN"; //다이아몬드
            flag = "본가";
            videourl = "https://youtu.be/RNe7RGaDuQ8";
        } else if (randp == 2029) {
            urllink = "10yTG5RclFf94fu3GHGJfH3tZUtAsWo7p"; //도다이
            flag = "본가";
            videourl = "https://youtu.be/VQpLpBa_cUs";
        } else if (randp == 2030) {
            urllink = "1PnV4-RwePHuEVi4iWwtmwMYdCE98sC7A"; //도다이
            flag = "본가";
            videourl = "https://youtu.be/VQpLpBa_cUs";
        } else if (randp == 2031) {
            urllink = "1zoxaDBzuFc6eDwta5swDVzpt8rk4yo1q"; //에덴
            flag = "본가";
            videourl = "https://youtu.be/0Oz3kH6vp6I";
        } else if (randp == 2032) {
            urllink = "1HXw9_jiEfliRhSKZ27XNdYOasBf5G5AO"; //에덴
            flag = "본가";
            videourl = "https://youtu.be/0Oz3kH6vp6I";
        } else if (randp == 2033) {
            urllink = "1mx1KNHxZKwNFIml5LtYdbhlzwKIjo_Sv"; //애벌서니
            flag = "본가";
            videourl = "https://youtu.be/u6OK8xLGZng";
        } else if (randp == 2034) {
            urllink = "1OWBr1gNL-oiiz1ZMcZmwPv4V1W9DwdCi"; //애벌서니
            flag = "본가";
            videourl = "https://youtu.be/u6OK8xLGZng";
        } else if (randp == 2035) {
            urllink = "1YkNBlm_WysxRQ-DpfFEhRg-icR9MjnZu"; //페이트오브더월드
            flag = "본가";
            videourl = "";
        } else if (randp == 2036) {
            urllink = "1BDEWcWbqZHU6ZykPYXgVREuaauWkoW3q"; //페이트오브더월드
            flag = "본가";
            videourl = "";
        } else if (randp == 2037) {
            urllink = "1AzaGTJhnYI5ADqU_BGBRSQNs9w3ZKp4C"; //퍼스트스텝
            flag = "본가";
            videourl = "https://youtu.be/OMD9742PksE";
        } else if (randp == 2038) {
            urllink = "1Maphdy8oZ32YNtWF8OmNIqV9LdrMvVUz"; //퍼스트스텝
            flag = "본가";
            videourl = "https://youtu.be/OMD9742PksE";
        } else if (randp == 2039) {
            urllink = "1hVa2KRnViW2oNeQBE-i7dwNV2hwFRTLX"; //포
            flag = "본가";
            videourl = "";
        } else if (randp == 2040) {
            urllink = "1e-fCkFd2sTJoov3xTm1XJCRzWH3z_XXx"; //포
            flag = "본가";
            videourl = "";
        } else if (randp == 2041) {
            urllink = "1_2BGm2A7A2Zx0B5seefePQ9sn3Mtiz2_"; //퍼니로직
            flag = "본가";
            videourl = "https://youtu.be/i4QM01P3AP8";
        } else if (randp == 2042) {
            urllink = "1cT-5OwAJ6PI-hEQaVIkc0tAn4SGCAjA7"; //퍼니로직
            flag = "본가";
            videourl = "https://youtu.be/i4QM01P3AP8";
        } else if (randp == 2043) {
            urllink = "1yMISG8z1AqRfsZ6nu7GiUysKbQXp1l1y"; //고마이웨이
            flag = "본가";
            videourl = "https://youtu.be/7ZuqUG55bTE";
        } else if (randp == 2044) {
            urllink = "1cg-fswNBHAErUfu3vlz_X1kyO3miRvAZ"; //고마이웨이
            flag = "본가";
            videourl = "https://youtu.be/7ZuqUG55bTE";
        } else if (randp == 2045) {
            urllink = "1X38dI2WqbTVaDFYkoEQc9oz5TM05_XS_"; //해피
            flag = "본가";
            videourl = "https://youtu.be/96c9GM4tzfk";
        } else if (randp == 2046) {
            urllink = "1DhUOqfE6qvh1ciARN9ukFoqLZ75TP-iO"; //해피
            flag = "본가";
            videourl = "https://youtu.be/96c9GM4tzfk";
        } else if (randp == 2047) {
            urllink = "1WqSpz-VacMEbFBNMoV-QtJNzRsZdf_OG"; //하트앤소울
            flag = "본가";
            videourl = "https://youtu.be/ZBNn-78XV7w";
        } else if (randp == 2048) {
            urllink = "1jQ6NHEoqZ0V_ZVz0u6mxJX1T24pEbjwS"; //하트앤소울
            flag = "본가";
            videourl = "https://youtu.be/ZBNn-78XV7w";
        } else if (randp == 2049) {
            urllink = "1E8J1xPX-PuvvrE0JVlZwNl6IpXPQQwks"; //히얼위고
            flag = "본가";
            videourl = "https://youtu.be/NzND_9fey1I";
        } else if (randp == 2050) {
            urllink = "1bb6QE8FTz0mjJabMSE1TKSqPEkQC7UrJ"; //히얼위고
            flag = "본가";
            videourl = "https://youtu.be/NzND_9fey1I";
        } else if (randp == 2051) {
            urllink = "1v7xOjYSK44Rs9YMV59t9QxMasE_hK917"; //허니하트비트
            flag = "본가";
            videourl = "https://youtu.be/dFnlfdbElwg";
        } else if (randp == 2052) {
            urllink = "13a8vHmd8VDbfAHJbmlYJDuVKUAmIcYtA"; //허니하트비트
            flag = "본가";
            videourl = "https://youtu.be/dFnlfdbElwg";
        } else if (randp == 2053) {
            urllink = "1JBFzKzHCODDwudmcaaitTUnk4qLAiI5W"; //허그
            flag = "본가";
            videourl = "https://youtu.be/Jqtz_wlQ-iI";
        } else if (randp == 2054) {
            urllink = "1wWHPe9lQbiAP4jYW87LIr9M_FufUVnGp"; //허그
            flag = "본가";
            videourl = "https://youtu.be/Jqtz_wlQ-iI";
        } else if (randp == 2055) {
            urllink = "1kHdGSHmxbsmp4kTLMuHMa3HJoYZSCcYN"; //아임유얼스
            flag = "본가";
            videourl = "https://youtu.be/nCnVfU9vwiY";
        } else if (randp == 2056) {
            urllink = "1dFm3qbH7CpJCADfyfGgUGxkeIO7709-X"; //아임유얼스
            flag = "본가";
            videourl = "https://youtu.be/nCnVfU9vwiY";
        } else if (randp == 2057) {
            urllink = "1UfzPdY-KQ13I9dMxh9NaPeqW_JKXdfeS"; //아이
            flag = "본가";
            videourl = "https://youtu.be/rUfg951rhaw";
        } else if (randp == 2058) {
            urllink = "1rwryd3_tXFCED1XPIG__11j4bQL4iRlj"; //아이
            flag = "본가";
            videourl = "https://youtu.be/rUfg951rhaw";
        } else if (randp == 2059) {
            urllink = "1FQ8KJkYl_pk1asDNPSlUvwNnCWkN_aDs"; //아이돌파워레인보우
            flag = "본가";
            videourl = "";
        } else if (randp == 2060) {
            urllink = "1gMk2W86IpTBGnzlZ7Ta4HaghMP7KqdlX"; //아이돌파워레인보우
            flag = "본가";
            videourl = "";
        } else if (randp == 2061) {
            urllink = "1ok7K9RJ7C4qGyvjFIavOgC14jCtRHSCR"; //아임소프리
            flag = "본가";
            videourl = "https://youtu.be/OHl59gfg8HI";
        } else if (randp == 2062) {
            urllink = "1S1vnxpiQC3NpRp1xttcWDV0AzIk2wgP-"; //아임소프리
            flag = "본가";
            videourl = "https://youtu.be/OHl59gfg8HI";
        } else if (randp == 2063) {
            urllink = "14_rCsWuEXfaJHwGTuGU78KyU0mKAu-Rs"; //잇츠쇼
            flag = "본가";
            videourl = "https://youtu.be/d2jH-1pviVA";
        } else if (randp == 2064) {
            urllink = "1Lj9guFk-8WH2LbciqLyJmJOr14zOpDlx"; //잇츠쇼
            flag = "본가";
            videourl = "https://youtu.be/d2jH-1pviVA";
        } else if (randp == 2065) {
            urllink = "1vXjXJ2wYhiIL9FWvXBClfg2xEzJ-R4Mx"; //코스모스코스모스
            flag = "본가";
            videourl = "https://youtu.be/ZzROlZm5558";
        } else if (randp == 2066) {
            urllink = "1hTnA3tf4XJ6BQzerSycurfmWWr5KkeA7"; //코스모스코스모스
            flag = "본가";
            videourl = "https://youtu.be/ZzROlZm5558";
        } else if (randp == 2067) {
            urllink = "121Ao3b9ziqR4y5inMHm-1NTCV8qC-l4X"; //엘오비엠
            flag = "본가";
            videourl = "https://youtu.be/JmS50J4vAMA";
        } else if (randp == 2068) {
            urllink = "1vxrE3FovoXcrGsKel1RDSu4olT3HQBL0"; //엘오비엠
            flag = "본가";
            videourl = "https://youtu.be/JmS50J4vAMA";
        } else if (randp == 2069) {
            urllink = "1I1uWZKHGBXN5RIeazton9E9sfV9VFRtr"; //라잇이얼송
            flag = "본가";
            videourl = "https://youtu.be/_A7yZ3GUhLs";
        } else if (randp == 2070) {
            urllink = "1rJ_6RzFNdqHycfydZc5fiFCrwfuTviEu"; //라잇이얼송
            flag = "본가";
            videourl = "https://youtu.be/_A7yZ3GUhLs";
        } else if (randp == 2071) {
            urllink = "1q1D9EebweOKElBgPv70t5C45QVgGkmvY"; //리틀매치걸
            flag = "본가";
            videourl = "https://youtu.be/MQX_FXOhDVM";
        } else if (randp == 2072) {
            urllink = "1TcddEbmHqvNbangB-jxR5nnv1jR9lEkG"; //리틀매치걸
            flag = "본가";
            videourl = "https://youtu.be/MQX_FXOhDVM";
        } else if (randp == 2073) {
            urllink = "1HBODuVKAhgWJzJYZwCZCMZsp2i7m9L2A"; //로스트
            flag = "본가";
            videourl = "https://youtu.be/L4aVKdOqzoU";
        } else if (randp == 2074) {
            urllink = "1R9FD6GkL7bOKqrJlSv3GQO8W6aQ4OMwE"; //로스트
            flag = "본가";
            videourl = "https://youtu.be/L4aVKdOqzoU";
        } else if (randp == 2075) {
            urllink = "1HEmAEvwu0Jv9MjNypzratDk-2nLQWETn"; //마스터피스
            flag = "본가";
            videourl = "https://youtu.be/SQG01OsBn7o";
        } else if (randp == 2076) {
            urllink = "1lGpXwckuyOdCZVVyiZlCa1xSHbKFMcJv"; //마스터피스
            flag = "본가";
            videourl = "https://youtu.be/SQG01OsBn7o";
        } else if (randp == 2077) {
            urllink = "19dtIRQMDW4WQ8lninsIzwEMKEP7DFfHt"; //메가레
            flag = "본가";
            videourl = "";
        } else if (randp == 2078) {
            urllink = "1Ojd21nwl56YF1QjlutAVi8ODkMpUzED2"; //메가레
            flag = "본가";
            videourl = "";
        } else if (randp == 2079) {
            urllink = "1akrY6wngtElDnqV6hf6kD6RNyC3uqfDg"; //멜티드 스노우
            flag = "본가";
            videourl = "https://youtu.be/Q4yV2cZQ_34";
        } else if (randp == 2080) {
            urllink = "1OaHCUFt8WGmFV0whPGZ8Gju2AyNtDkDq"; //멜티드 스노우
            flag = "본가";
            videourl = "https://youtu.be/Q4yV2cZQ_34";
        } else if (randp == 2081) {
            urllink = "1miYPjYb8BBrIJ9lE0iO9o6vFfYDzU6zE"; //메리
            flag = "본가";
            videourl = "https://youtu.be/NK5Dj1mNofY";
        } else if (randp == 2082) {
            urllink = "1bkHZA29AfqiJDYqfScoAM3VfkFnu2Lko"; //메리
            flag = "본가";
            videourl = "https://youtu.be/NK5Dj1mNofY";
        } else if (randp == 2083) {
            urllink = "1-3J7DE9A6xHo77jZSWc4stytFQdahLe3"; //미라클 나이트
            flag = "본가";
            videourl = "https://youtu.be/VQjTcqVREcM";
        } else if (randp == 2084) {
            urllink = "1yuosC4U6RD98d4PyMSibt9ee0ucBSMO6"; //미라클 나이트
            flag = "본가";
            videourl = "https://youtu.be/VQjTcqVREcM";
        } else if (randp == 2085) {
            urllink = "1HDlsoK7jsd4Af8ZSSpzKp5dtYX5kNBId"; //무니
            flag = "본가";
            videourl = "https://youtu.be/EP2vLhJN-PI";
        } else if (randp == 2086) {
            urllink = "1nRsbAoQqvL5w9R88WzMY5wWHS3rBntF5"; //무니
            flag = "본가";
            videourl = "https://youtu.be/EP2vLhJN-PI";
        } else if (randp == 2087) {
            urllink = "1iYCHeoSALX0X9FMvB3aynEFLbm7UN5aM"; //뮤직
            flag = "본가";
            videourl = "https://youtu.be/aeTTVP5QNI4";
        } else if (randp == 2088) {
            urllink = "1tJ459RyqaYnuzJ5yZ4gRgx_9ZBP2_ArK"; //뮤직
            flag = "본가";
            videourl = "https://youtu.be/aeTTVP5QNI4";
        } else if (randp == 2089) {
            urllink = "1itcUIqYAFCnqYZb98-GM7Jpjfe_QFEWP"; //마이송
            flag = "본가";
            videourl = "https://youtu.be/cjtuIm8HGPQ";
        } else if (randp == 2090) {
            urllink = "1dzBWKE8_aFnBnPBcjV0Hl5OyVpDM96hh"; //마이송
            flag = "본가";
            videourl = "https://youtu.be/cjtuIm8HGPQ";
        } else if (randp == 2091) {
            urllink = "1XCviqX0b6CXwbl3TsIB6CaXZMBfiJhVP"; //마이위시
            flag = "본가";
            videourl = "";
        } else if (randp == 2092) {
            urllink = "1VZnDl2xrGxo3tEm-tVanFGZCsP5KnhgD"; //마이위시
            flag = "본가";
            videourl = "";
        } else if (randp == 2093) {
            urllink = "1bYynw1sbSXl1IUQ82v7ynXviIVrjMNAV"; //온리마이놑츠
            flag = "본가";
            videourl = "https://youtu.be/iqth9b4tgxY";
        } else if (randp == 2094) {
            urllink = "1Elf2bsgnBuXqDjI-V6TJPKdJt-Bu5Nby"; //온리마이놑츠
            flag = "본가";
            videourl = "https://youtu.be/iqth9b4tgxY";
        } else if (randp == 2095) {
            urllink = "1FY16vBBmzpoAcww5lPjpPbkZDwsBYQWK"; //폰데 비치
            flag = "본가";
            videourl = "https://youtu.be/k2JW1bzaCKk";
        } else if (randp == 2096) {
            urllink = "1MS10-uDR0oFiXDcz-KpRp-XuRcgTraMI"; //폰데 비치
            flag = "본가";
            videourl = "https://youtu.be/k2JW1bzaCKk";
        } else if (randp == 2097) {
            urllink = "1bYvPLa3DcvBc-FDVskMChzb-1LaDWkRQ"; //포지티브
            flag = "본가";
            videourl = "";
        } else if (randp == 2098) {
            urllink = "1B1ZE3Kx8u3auWWd8UPERqhVAIOW0o7Bw"; //포지티브
            flag = "본가";
            videourl = "";
        } else if (randp == 2099) {
            urllink = "16nE5o7J6kqWjd-NbMm57V3P-Q3jfjWDe"; //princess snow white
            flag = "본가";
            videourl = "https://youtu.be/cgXWIGB-w3Y";
        } else if (randp == 2100) {
            urllink = "1GlfHp88yzQt-csz6lTeoHEd8qCQ_1CTv"; //princess snow white
            flag = "본가";
            videourl = "https://youtu.be/cgXWIGB-w3Y";
        } else if (randp == 2101) {
            urllink = "1OC4m-V_QBREDNnLr0_6S9R1gfccYxAML"; //푸루루
            flag = "본가";
            videourl = "https://youtu.be/TzFqLB_kseo";
        } else if (randp == 2102) {
            urllink = "1hoZKbpOTow2bGg12pj3FY9uDgrM_zYI9"; //푸루루
            flag = "본가";
            videourl = "https://youtu.be/TzFqLB_kseo";
        } else if (randp == 2103) {
            urllink = "12dXyZzD7dxiMFB5onkvG18NW_Tsc16Re"; //레디
            flag = "본가";
            videourl = "https://youtu.be/SA1kA0NmeF8";
        } else if (randp == 2104) {
            urllink = "1O16LOYdOInSZ4ASZLz3NWmDiOXF-Uzig"; //레디
            flag = "본가";
            videourl = "https://youtu.be/SA1kA0NmeF8";
        } else if (randp == 2105) {
            urllink = "11R8Dy1WqGkPURipYdqvkgQX4Qu5ycBkH"; //쉐도우리스
            flag = "본가";
            videourl = "https://youtu.be/eXJNhKtL5QQ";
        } else if (randp == 2106) {
            urllink = "1_B4C9UhyjvPJpyjBz4Olwmn60dMkUiCS"; //쉐도우리스
            flag = "본가";
            videourl = "https://youtu.be/eXJNhKtL5QQ";
        } else if (randp == 2107) {
            urllink = "1me-ZR9ZrFNpPE1L-9m9EC7T5PRbVi2U-"; //샹그릴라
            flag = "본가";
            videourl = "https://youtu.be/gFlLkHXSeTo";
        } else if (randp == 2108) {
            urllink = "1dXUoBIFgH-vFQ-qK9o8K2MhCLJQHRf8j"; //샹그릴라
            flag = "본가";
            videourl = "https://youtu.be/gFlLkHXSeTo";
        } else if (randp == 2109) {
            urllink = "1uFs597_Tu00lwrmEVi0pqPbY_OA1SEDp"; //샤이니스마일
            flag = "본가";
            videourl = "https://youtu.be/YkThQt74YhQ";
        } else if (randp == 2110) {
            urllink = "1MqrnKiiUHBGkFj-e0jGzlLkX-CongVJa"; //샤이니스마일
            flag = "본가";
            videourl = "https://youtu.be/YkThQt74YhQ";
        } else if (randp == 2111) {
            urllink = "1yHuuP7sStDfIrTP14IG2HlZRdTLbCimY"; //슬랩해피
            flag = "본가";
            videourl = "https://youtu.be/BNR9M266SkU";
        } else if (randp == 2112) {
            urllink = "1TpTk6dCA9hl2un5TxfxLCeHeuvFdKkdb"; //슬랩해피
            flag = "본가";
            videourl = "https://youtu.be/BNR9M266SkU";
        } else if (randp == 2113) {
            urllink = "1_Jm966Mc6rNRviL4fhKvQT9EKyADsWsw"; //스모키프루트
            flag = "본가";
            videourl = "";
        } else if (randp == 2114) {
            urllink = "1OqL5Vy8TtI8MzPgKQYMYxaH0Dq2rN_7L"; //스모키프루트
            flag = "본가";
            videourl = "";
        } else if (randp == 2115) {
            urllink = "1Qr6dD-bpRGlw1K2jhzOYyBH7tayTVo7z"; //스모키 스릴
            flag = "본가";
            videourl = "https://youtu.be/oc-ElaG44mQ";
        } else if (randp == 2116) {
            urllink = "1JIYx2SlmUf0827wo407gTn6BbYR1sg3Y"; //스모키 스릴
            flag = "본가";
            videourl = "https://youtu.be/oc-ElaG44mQ";
        } else if (randp == 2117) {
            urllink = "10-v7QDprenGCtTGOLEQxmEjZe8AIMynU"; //스타트
            flag = "본가";
            videourl = "";
        } else if (randp == 2118) {
            urllink = "1TQrtxaNla6peNw_xjek_CmTMR9MOZHoS"; //스타트
            flag = "본가";
            videourl = "";
        } else if (randp == 2119) {
            urllink = "1xsP7AOd-gLjrpWcdt0kLeww8jI6jqbTT"; //슈퍼스타
            flag = "본가";
            videourl = "";
        } else if (randp == 2120) {
            urllink = "1oBxBwBIFZpBeKDng7vfk7frJt_-6z5Uv"; //슈퍼스타
            flag = "본가";
            videourl = "";
        } else if (randp == 2121) {
            urllink = "1cElaWZ4eip37CWXJBEJzUa5vZtP7kjB0"; //더아이돌마스터
            flag = "본가";
            videourl = "";
        } else if (randp == 2122) {
            urllink = "12E6s5HZOE3XBOnjdYv2P4hJYPQ6LIYhu"; //더아이돌마스터
            flag = "본가";
            videourl = "";
        } else if (randp == 2123) {
            urllink = "1vXShHkQAfsGM2LKzZ5Plf9WzmEqFctGz"; //더 월드 이즈 올 원!!
            flag = "본가";
            videourl = "https://www.youtube.com/watch?v=2EtVdEcr6ME";
        } else if (randp == 2124) {
            urllink = "1D7KHTtr4rDVPJvfErYpAdot5IbNQRAZl"; //더 월드 이즈 올 원!!
            flag = "본가";
            videourl = "https://www.youtube.com/watch?v=2EtVdEcr6ME";
        } else if (randp == 2125) {
            urllink = "14FJhxR3fN7px1s-GR0TxsIsIDzetajdu"; //톱!!!
            flag = "본가";
            videourl = "https://youtu.be/-QtG-j-NxT0";
        } else if (randp == 2126) {
            urllink = "1eYRY1bAdesmLpYOK5gmwLzZArAFhqUoo"; //톱!!!
            flag = "본가";
            videourl = "https://youtu.be/-QtG-j-NxT0";
        } else if (randp == 2127) {
            urllink = "12QdreZLZI7VpCcKbOJ-xCWA8zK9gopF1"; //트라이얼 댄스
            flag = "본가";
            videourl = "https://youtu.be/f4YJ68LQVuA";
        } else if (randp == 2128) {
            urllink = "16PQCNVQ1qjfXCuiKTRhZozk6JqIqNkJM"; //트라이얼 댄스
            flag = "본가";
            videourl = "https://youtu.be/f4YJ68LQVuA";
        } else if (randp == 2129) {
            urllink = "1A28eyQGCM3xHQfvJVcenhtoG84R4w6gI"; //볼트 더 볼더라인
            flag = "본가";
            videourl = "https://youtu.be/njS6i4xtTGA";
        } else if (randp == 2130) {
            urllink = "1bvGiC38yytZ0IMr0QgRyTdH75jvzynye"; //볼트 더 볼더라인
            flag = "본가";
            videourl = "https://youtu.be/njS6i4xtTGA";
        } else if (randp == 2131) {
            urllink = "10Ol0Yl2xKN-q-ZxaQyponcyOEMRKNhV7"; //벨벳 콰이엇
            flag = "본가";
            videourl = "https://youtu.be/d__3OIumR1I";
        } else if (randp == 2132) {
            urllink = "1ZeVh-fbrLKJMZiBjpUiKZlPmfSgOD4b7"; //벨벳 콰이엇
            flag = "본가";
            videourl = "https://youtu.be/d__3OIumR1I";
        } else if (randp == 2133) {
            urllink = "164xgtR09R_WHrrxawyr3dn71NtAxcPbC"; //위 저스트 스타트
            flag = "본가";
            videourl = "";
        } else if (randp == 2134) {
            urllink = "1FO-8Fwry-3aohGusxCAnemdIj9Y24S8L"; //위 저스트 스타트
            flag = "본가";
            videourl = "";
        } else if (randp == 2135) {
            urllink = "1yunNyF6YDP-NMON2aIzh1AbLDC_HbTdO"; //존 오브 포츈
            flag = "본가";
            videourl = "https://youtu.be/etuMTsoMNwM";
        } else if (randp == 2136) {
            urllink = "1JFzxsg3kmOPWIDGSiV2-2STnYsN9kiiC"; //존 오브 포츈
            flag = "본가";
            videourl = "https://youtu.be/etuMTsoMNwM";
        } else if (randp == 2137) {
            urllink = "10RwvFkVVgcmm6BL8Ty319fZkE0qA_kBD"; //곁에
            flag = "본가";
            videourl = "https://youtu.be/_wTYWw3YHmU";
        } else if (randp == 2138) {
            urllink = "1g7NcMgXx-QljW9BJqnBYP_Ali48tMPcJ"; //곁에
            flag = "본가";
            videourl = "https://youtu.be/_wTYWw3YHmU";
        } else if (randp == 2139) {
            urllink = "1Zxz8v7r09thfx2HaGE27a_i8vn3mVJDs"; //고요한 밤에
            flag = "본가";
            videourl = "https://youtu.be/n5B_SnOcGQM";
        } else if (randp == 2140) {
            urllink = "1Ox5gksZ0QcHRTYvtAU5gunl0Hyylwohz"; //고요한 밤에
            flag = "본가";
            videourl = "https://youtu.be/n5B_SnOcGQM";
        } else if (randp == 2141) {
            urllink = "14xK8kW_xohzwyPbm96eyRg4M2oQPNgYm"; //곧바로
            flag = "본가";
            videourl = "";
        } else if (randp == 2142) {
            urllink = "1yifTtACJgCk_-rrvSIf3WgCJ6m2_2szO"; //곧바로
            flag = "본가";
            videourl = "";
        } else if (randp == 2143) {
            urllink = "1MvdW3-tAiHnIl27waYAMkMGSavd9MANw"; //그날의 눈물
            flag = "본가";
            videourl = "https://youtu.be/JMVctOt5l4E";
        } else if (randp == 2144) {
            urllink = "12ZEX8XW74nV7SHkSD8-8PX1Vaa2CkrtY"; //그날의 눈물
            flag = "본가";
            videourl = "https://youtu.be/JMVctOt5l4E";
        } else if (randp == 2145) {
            urllink = "1SIIUjsRSCcsLdFA2zgdw_r7hAwllNti3"; //기다리는 프린스
            flag = "본가";
            videourl = "https://youtu.be/V6cQwZh8EQs";
        } else if (randp == 2146) {
            urllink = "1WDi9db5rqM6G_w3ifUxx3IyDpvDT7t1_"; //기다리는 프린스
            flag = "본가";
            videourl = "https://youtu.be/V6cQwZh8EQs";
        } else if (randp == 2147) {
            urllink = "1gaSul_bz7VHQ4-Lb8L2QcAPZnV6RQ86_"; //꽃
            flag = "본가";
            videourl = "https://youtu.be/eErWY5g3CCQ";
        } else if (randp == 2148) {
            urllink = "17yDl3oTggpR3iTEiefNiY8hHXxbWKf-k"; //꽃
            flag = "본가";
            videourl = "https://youtu.be/eErWY5g3CCQ";
        } else if (randp == 2149) {
            urllink = "1YAKnO8o6O4ArP9dJeI6s0jOQb71BIZV4"; //날지 못하는 새
            flag = "본가";
            videourl = "";
        } else if (randp == 2150) {
            urllink = "1F7OYTF8Hgg6g6E-GVSdaUio-c3n9Mbiu"; //날지 못하는 새
            flag = "본가";
            videourl = "";
        } else if (randp == 2151) {
            urllink = "1sqQ_stcBXUmnOFu5elcUgt1Hcv_3F-MH"; //너는 멜로디
            flag = "본가";
            videourl = "";
        } else if (randp == 2152) {
            urllink = "1k8Mv0cL_YcFUGadevjY2-v2vv41KpNZQ"; //너는 멜로디
            flag = "본가";
            videourl = "";
        } else if (randp == 2153) {
            urllink = "1kMv7lqdYZSmdiXCVIgI_GAGGxPmjJ5jE"; //너의 채널
            flag = "본가";
            videourl = "";
        } else if (randp == 2154) {
            urllink = "1IP5NCpFHQRcyjny74DWggEUcLDNQiOnO"; //너의 채널
            flag = "본가";
            videourl = "";
        } else if (randp == 2155) {
            urllink = "1M0FyJDot7jY4i-xKHVDyxX63DVD9vGHh"; //네가 고른길
            flag = "본가";
            videourl = "";
        } else if (randp == 2156) {
            urllink = "1tYreVluCZ6bYnB4RiHJy_Ox1xa-wRSAO"; //네가 고른길
            flag = "본가";
            videourl = "";
        } else if (randp == 2157) {
            urllink = "1ZPfilbY6drvFdgK9CpkvyZxti3_McKBH"; //눈이 마주친 순간
            flag = "본가";
            videourl = "";
        } else if (randp == 2158) {
            urllink = "18J2VgjXqypJK6-sAnlidozPPUSmK2IeC"; //눈이 마주친 순간
            flag = "본가";
            videourl = "";
        } else if (randp == 2159) {
            urllink = "1bZXeMA9gq2Px5M0pf6jM1Ala0cblPDrc"; //단결
            flag = "본가";
            videourl = "";
        } else if (randp == 2160) {
            urllink = "1VQpEqQy0VilY4ynl6ESQtwuM-yH1hVZd"; //단결
            flag = "본가";
            videourl = "";
        } else if (randp == 2161) {
            urllink = "19pDO4JqdtVHas6vEJ4sQiTMb7zAVHyDN"; //달의 벚꽃
            flag = "본가";
            videourl = "";
        } else if (randp == 2162) {
            urllink = "17ke02Zly_m7BQxz-0Fh0v6NvXKRD5Dkv"; //달의 벚꽃
            flag = "본가";
            videourl = "";
        } else if (randp == 2163) {
            urllink = "14GbBm4u19p0CeCMm5yPC0IfEwL__utWg"; //더 라이브
            flag = "본가";
            videourl = "";
        } else if (randp == 2164) {
            urllink = "12UQFfxzmV3Si_crFBCuxsph-tgsiL8UB"; //더 라이브
            flag = "본가";
            videourl = "";
        } else if (randp == 2165) {
            urllink = "1EI_nL_lMrT7sHENxtOJ7SWHyxTA1vp8-"; // 두 사람의
            flag = "본가";
            videourl = "";
        } else if (randp == 2166) {
            urllink = "1PmDKsC_HbIuf7Vc0rFMq0UkQIVJHWW5k"; // 두 사람의
            flag = "본가";
            videourl = "";
        } else if (randp == 2167) {
            urllink = "1Q3cnZTRxGN--_i2vWhHKLUXOrFlSowHQ"; // 등불
            flag = "본가";
            videourl = "";
        } else if (randp == 2168) {
            urllink = "1gndyP9dwIVeAaqFBbQKRVEKZheVkmlsu"; //등불
            flag = "본가";
            videourl = "";
        } else if (randp == 2169) {
            urllink = "1xvyn4BY7AgcB0PgYp4re_EdyLxWD5P0Q"; //따뜻한 눈
            flag = "본가";
            videourl = "";
        } else if (randp == 2170) {
            urllink = "1bBAQn9v4xJ3SHBcQ4hRIUaEZtfJ6o5zF"; //따뜻한 눈
            flag = "본가";
            videourl = "";
        } else if (randp == 2171) {
            urllink = "14NYz0bDO4i8hYuEr2CxstA6FFPTIxhjx"; //또 보자
            flag = "본가";
            videourl = "";
        } else if (randp == 2172) {
            urllink = "19H_QgAh8coC_n0rDyJBXtbkfq_toa3cb"; //또 보자
            flag = "본가";
            videourl = "";
        } else if (randp == 2173) {
            urllink = "16DBYv0qi6_tXaxBBH19bip8i3bop2ClV"; //라무네색
            flag = "본가";
            videourl = "";
        } else if (randp == 2174) {
            urllink = "1Z-EblkIvLemP6L5w5w3VWmimJH3lcE3-"; //라무네색
            flag = "본가";
            videourl = "";
        } else if (randp == 2175) {
            urllink = "1BbMs0kGrE4GTIcBt83cxdKQktbE0zn_6"; //로열스트레이트
            flag = "본가";
            videourl = "";
        } else if (randp == 2176) {
            urllink = "1e9xgUjuXD7p_AIsSUq687W2eQBqRiXaP"; //로열스트레이트
            flag = "본가";
            videourl = "";
        } else if (randp == 2177) {
            urllink = "13ff67CeBSCZhtOkkkZMEVwPwsGSb84z-"; //리조라
            flag = "본가";
            videourl = "";
        } else if (randp == 2178) {
            urllink = "12Ce3qyWqfuU4leIKWtK7VhPLjB1DlzXA"; //리조라
            flag = "본가";
            videourl = "";
        } else if (randp == 2179) {
            urllink = "1f6oMQ1TXusF0P6mvWBCsSaz8pi45wK2-"; //마리오네트 마음
            flag = "본가";
            videourl = "";
        } else if (randp == 2180) {
            urllink = "1m855M2yy3dUmEyUus20_Hw_vzpi3FRAD"; //마리오네트 마음
            flag = "본가";
            videourl = "";
        } else if (randp == 2181) {
            urllink = "1W4wpMRc7sIdOnv_nKepBZFtrb_TvuEIT"; //맑음색
            flag = "본가";
            videourl = "";
        } else if (randp == 2182) {
            urllink = "1_01YtSkFI1RdYJ3UF-KewgTlUHZVLE2z"; //맑음색
            flag = "본가";
            videourl = "";
        } else if (randp == 2183) {
            urllink = "1GfQLllU7dP_Hlo-nOGPw25AiOZvnfDSx"; //몇번이라도
            flag = "본가";
            videourl = "";
        } else if (randp == 2184) {
            urllink = "1QwUFn59LM5G0PlJHqlOwW3xdTx1OUqsd"; //몇번이라도
            flag = "본가";
            videourl = "";
        } else if (randp == 2185) {
            urllink = "1EBiRfAHM-NWZh7VhYQOUfQ9i30u1yMnw"; //무지개색
            flag = "본가";
            videourl = "";
        } else if (randp == 2186) {
            urllink = "17H0CbOUEM9cyulCb7Fv8HGU1iTfh96Wr"; //무지개색
            flag = "본가";
            videourl = "";
        } else if (randp == 2187) {
            urllink = "1PDPiaUvsUKhdqLhXcIpDFh1h2ZFLSlhU"; //무개지의 데스티
            flag = "본가";
            videourl = "";
        } else if (randp == 2188) {
            urllink = "1OXRA-rB9iuEDyo1vQi1tKMjOH9DjZPTj"; //무지개의 데스티
            flag = "본가";
            videourl = "";
        } else if (randp == 2189) {
            urllink = "1E12hIl2A2ZfFFQrullVTzDlh-6dFaIGk"; //미주마인드
            flag = "본가";
            videourl = "";
        } else if (randp == 2190) {
            urllink = "1PLuIXVJGlDtLZdbK3N6QnjVvDAihKQBg"; //미주마인드
            flag = "본가";
            videourl = "";
        } else if (randp == 2191) {
            urllink = "1REx7s038IoyYihvV9g1OmkfHa6tp4kJc"; //바라봐줘
            flag = "본가";
            videourl = "";
        } else if (randp == 2192) {
            urllink = "1RWNDYlQjTTS_GZnNiEvpYqEuFzf4THkH"; //바라봐줘
            flag = "본가";
            videourl = "";
        } else if (randp == 2193) {
            urllink = "1njcI6a639WU-jUN-X-bth_ImNIl0nc2s"; //변하지 않는것
            flag = "본가";
            videourl = "";
        } else if (randp == 2194) {
            urllink = "1Gsd4F5f1K28MBJnGXMnAqZk5BDTvAr69"; //변하지 않는것
            flag = "본가";
            videourl = "";
        } else if (randp == 2195) {
            urllink = "1zWQxGahu8dS2Lt1J5IEwR7noZ6kFp5eS"; //봄이여
            flag = "본가";
            videourl = "";
        } else if (randp == 2196) {
            urllink = "1mzUm3RXgefPqARmAxABRNL5RMe9IHuno"; //봄이여
            flag = "본가";
            videourl = "";
        } else if (randp == 2197) {
            urllink = "108EzAMWJPAWjay9K023GvIDIzIbjd0ZJ"; //불꽃의
            flag = "본가";
            videourl = "";
        } else if (randp == 2198) {
            urllink = "1ZiIgXBKCvUj5NH82F7_DG_MCbandbCif"; //불꽃의
            flag = "본가";
            videourl = "";
        } else if (randp == 2199) {
            urllink = "1Eu_7za0-ubWYE0AvaYWeogoRDTYjNShv"; //블루스
            flag = "본가";
            videourl = "";
        } else if (randp == 2200) {
            urllink = "1TPf_8HbCg8vqc9znyHgTlZq_ZEq6vDZU"; //블루스
            flag = "본가";
            videourl = "";
        } else if (randp == 2201) {
            urllink = "16wdvO-s9E6220j5-ZwT2k27m5uOzz41l"; //비죠나리
            flag = "본가";
            videourl = "";
        } else if (randp == 2202) {
            urllink = "1ARApf4_kEkLB66LVuNMX_y6ttGBdqqgz"; //비죠나리
            flag = "본가";
            videourl = "";
        } else if (randp == 2203) {
            urllink = "1FN8W52EeSSnsVnTVwPBr56T7hIChz__x"; //빛
            flag = "본가";
            videourl = "";
        } else if (randp == 2204) {
            urllink = "1_ypwCuSaFi7f63cWyIgN00T5vygzr6-7"; //빛
            flag = "본가";
            videourl = "";
        } else if (randp == 2205) {
            urllink = "15qrk6D2ay0JTKTDhFBXQZXb3QzIB0SAU"; //세빙
            flag = "본가";
            videourl = "";
        } else if (randp == 2206) {
            urllink = "1p8mANqqHgfFMCaLkpbC5hFwbI1m1dJTW"; //세빙
            flag = "본가";
            videourl = "";
        } else if (randp == 2207) {
            urllink = "1Yn0L5NjaXDpFskprJB41DiXlTBPwdi4F"; //섹시타이푼
            flag = "본가";
            videourl = "";
        } else if (randp == 2208) {
            urllink = "1t3LEmX2jxu8AmSmuPlWiI0--GjG3z-Db"; //섹시타이푼
            flag = "본가";
            videourl = "";
        } else if (randp == 2209) {
            urllink = "1nzQ4qLWPeC0RmC-xElodBL4mQtXf1mkb"; //소나
            flag = "본가";
            videourl = "";
        } else if (randp == 2210) {
            urllink = "1tf49a1D_pHChzPD8mSPp6rvfRkedmlLl"; //소나
            flag = "본가";
            videourl = "";
        } else if (randp == 2211) {
            urllink = "133fnAx2ZsYbGltPFtqSWNUfnmZ6kKuCf"; //소녀여 큰뜻을
            flag = "본가";
            videourl = "";
        } else if (randp == 2212) {
            urllink = "1xtyWtNbm3k38YiiEfs_RSLOnGZkQbnZO"; //소녀여 큰뜻을
            flag = "본가";
            videourl = "";
        } else if (randp == 2213) {
            urllink = "1jnjVBNnitzx6B2-u9NP-daDX8_wVefoT"; //소원 한가지
            flag = "본가";
            videourl = "";
        } else if (randp == 2214) {
            urllink = "1aH71KVF3RrzVmcFq-elJMFK9mzCfhPSL"; //소원 한가지
            flag = "본가";
            videourl = "";
        } else if (randp == 2215) {
            urllink = "1-_2DNVDdKjRAsKLTTf4vYfkgf9yYiMva"; //스타트스타
            flag = "본가";
            videourl = "";
        } else if (randp == 2216) {
            urllink = "1i6WpsBYPFSjjvMGtSwf6Xj2QY-pcsnuM"; //스타트스타
            flag = "본가";
            videourl = "";
        } else if (randp == 2217) {
            urllink = "1wx1zyVqIyysbmj80Nya1vH_eMt4gwM2l"; //신서머
            flag = "본가";
            videourl = "";
        } else if (randp == 2218) {
            urllink = "19InqKWoj0U1IhN5VcvHYUiPnogcJ-Jh-"; //신서머
            flag = "본가";
            videourl = "";
        } else if (randp == 2219) {
            urllink = "14Rxy80-ksWH9JOCUOHCeyqjL5A1MPAo9"; //신님의버스데이
            flag = "본가";
            videourl = "";
        } else if (randp == 2220) {
            urllink = "1S1R9ETj5kWTWzRvKL6YfE7o9kr-hnEJp"; //신님의버스데이
            flag = "본가";
            videourl = "";
        } else if (randp == 2221) {
            urllink = "1JUuDivgme8dJZo-fBC3H1GeUcvtIaRAn"; //싹이 트는 계절
            flag = "본가";
            videourl = "";
        } else if (randp == 2222) {
            urllink = "17c4IEuM84a0LM7xdBgpnsw0tAchLIPbO"; //싹이 트는 계절
            flag = "본가";
            videourl = "";
        } else if (randp == 2223) {
            urllink = "1FulgRyLa5AzqUcXpAXlvxJdRZ_AeyrxC"; //아마테라스
            flag = "본가";
            videourl = "";
        } else if (randp == 2224) {
            urllink = "13KH08JlOKHU84FefIIG5nPsZJMfMvibk"; //아마테라스
            flag = "본가";
            videourl = "";
        } else if (randp == 2225) {
            urllink = "13UPPn3p-1CtCOXFmv9RJTT3idRnTBq2v"; //아이 머스트 고
            flag = "본가";
            videourl = "";
        } else if (randp == 2226) {
            urllink = "1vBYug87XgHJbpXyHhiwJbRUzaUAsNzrz"; //아이 머스트 고
            flag = "본가";
            videourl = "";
        } else if (randp == 2227) {
            urllink = "1tNODpULSuBuaVzDvb8zM93IUULZH4wSz"; //안녕에 감사해
            flag = "본가";
            videourl = "";
        } else if (randp == 2228) {
            urllink = "1Vw7VyE8nvX9ApDVNV5UXZ1BQPXfuj0kx"; //안녕에 감사해
            flag = "본가";
            videourl = "";
        } else if (randp == 2229) {
            urllink = "1HhHwjX5ovb9657uQwxl4hY-9yo9hvBlE"; //약속
            flag = "본가";
            videourl = "";
        } else if (randp == 2230) {
            urllink = "1KIzCVMpIs5N782aQb9nUVFnmgOFSfRrM"; //약속
            flag = "본가";
            videourl = "";
        } else if (randp == 2231) {
            urllink = "16kQFNFMvwPcsFH-usUzOt6CfBfgMU39I"; //어른의 시작
            flag = "본가";
            videourl = "";
        } else if (randp == 2232) {
            urllink = "1j77yoQLe2DJ1m3rG9yfqrXThT9RWCOWt"; //어른의 시작
            flag = "본가";
            videourl = "";
        } else if (randp == 2233) {
            urllink = "12ykRQkWu0hXppwKxoKt721a0IONIdipG"; //업뎃
            flag = "본가";
            videourl = "";
        } else if (randp == 2234) {
            urllink = "1jwbMPSVyHreuRPP5p086513LNV9RNAfr"; //업뎃
            flag = "본가";
            videourl = "";
        } else if (randp == 2235) {
            urllink = "1k9SRqDqsxBkSmqZDnbF3YclMgDzZA6Ps"; //연심
            flag = "본가";
            videourl = "";
        } else if (randp == 2236) {
            urllink = "1lfPvIp2-9mkf1XQ53dpd1FTc1iyOjgY9"; //연심
            flag = "본가";
            videourl = "";
        } else if (randp == 2237) {
            urllink = "14nVsNeVmIm64-foxY1JR6fgzHkJZcMsA"; //연애 서큘
            flag = "본가";
            videourl = "";
        } else if (randp == 2238) {
            urllink = "19kpQSUpYPojN5N6odqjVN7ZjlKKdymuX"; //연애 서큘
            flag = "본가";
            videourl = "";
        } else if (randp == 2239) {
            urllink = "1mgimbuV3NOoYU351AVQA7AV2LuKdLm8d"; //우리 데쇼
            flag = "본가";
            videourl = "";
        } else if (randp == 2240) {
            urllink = "1kHkklw6l1PLM91wgwWfBci106CZaObm_"; //우리는 데쇼
            flag = "본가";
            videourl = "";
        } else if (randp == 2241) {
            urllink = "1OiYbMXy8bfCH5Uwdq0hRZUCpbq3wIoeD"; //웃어봐
            flag = "본가";
            videourl = "";
        } else if (randp == 2242) {
            urllink = "1dZieFM0moihuykHWClMjDCcl618DH4fC"; //웃어봐
            flag = "본가";
            videourl = "";
        } else if (randp == 2243) {
            urllink = "1YNPZZbjQIGd8kBdqc1QEnFPSe2R-3zo2"; //나나이로버튼
            flag = "본가";
            videourl = "";
        } else if (randp == 2244) {
            urllink = "1ky1OymcMT_HQno3OXjaGOVMazBcvNsMe"; //나나이로 버튼
            flag = "본가";
            videourl = "";
        } else if (randp == 2245) {
            urllink = "1ckuRSweITrLb2iGpjQmyWUBdXrXzoGCF"; //지분리
            flag = "본가";
            videourl = "";
        } else if (randp == 2246) {
            urllink = "1cDEXzofpoVh8HX0YQ0_cc7zBS5qC219V"; //지분리
            flag = "본가";
            videourl = "";
        } else if (randp == 2247) {
            urllink = "1rKjVdwq_8Q2dx1az3AUkFw804uTr3gMK"; //자전거
            flag = "본가";
            videourl = "";
        } else if (randp == 2248) {
            urllink = "1nsiEOeMp9hL1G0VSlo9uocfMdHvhasnk"; //자전거
            flag = "본가";
            videourl = "";
        } else if (randp == 2249) {
            urllink = "11Kv_rYyDp2b51ipRo8MWjTlLyiF5KhEt"; //잠자는 공주
            flag = "본가";
            videourl = "";
        } else if (randp == 2250) {
            urllink = "1j_YFKZQmwDR32TBZJG4qWqNUEfauhM9L"; //잠자는 공주
            flag = "본가";
            videourl = "";
        } else if (randp == 2251) {
            urllink = "1EYj4RD06aLtUlcrLU9Yj8M8rL1cbGf5N"; //준비땅
            flag = "본가";
            videourl = "";
        } else if (randp == 2252) {
            urllink = "1MBBCVVE1rVNHtfDpAsdPiAAUWPMnMSkc"; //준비땅
            flag = "본가";
            videourl = "";
        } else if (randp == 2253) {
            urllink = "1g-rFgwWUhBrUPqUPWUmyfOJnFKhBjlo7"; //지금 시작이야
            flag = "본가";
            videourl = "";
        } else if (randp == 2254) {
            urllink = "1t9C1_PSH2nZt3K-ZcFmLDOf7ksKuRx-F"; //지금 시작이야
            flag = "본가";
            videourl = "";
        } else if (randp == 2255) {
            urllink = "1mMVW4NQmAfsYzOJkROUE8mwEnbjBF-vE"; //차분하게 느긋하게
            flag = "본가";
            videourl = "";
        } else if (randp == 2256) {
            urllink = "1YsvMaDnHGd2HYqRFXNlnbs97FLgSM19U"; //차분하게 느긋하게
            flag = "본가";
            videourl = "";
        } else if (randp == 2257) {
            urllink = "11sH4mYFzkVWEq4gFDVGlR2pRuR_ncD35"; //추억의 시작
            flag = "본가";
            videourl = "";
        } else if (randp == 2258) {
            urllink = "1EWabX7MYTO4grwn28_dIb_K9oLLnhBUX"; //추억의 시작
            flag = "본가";
            videourl = "";
        } else if (randp == 2259) {
            urllink = "1DL8WcgeGAoC9u-GvP9-bmmP-XuBDrGU3"; //커튼콜
            flag = "본가";
            videourl = "";
        } else if (randp == 2260) {
            urllink = "1dxHHlP3GoFijSV98alCsP1jEwQpygREu"; //커튼콜
            flag = "본가";
            videourl = "";
        } else if (randp == 2261) {
            urllink = "1Iiw1-KyH67zNpy_4xQxH9lPIaeRDG9O8"; //커피 한잔의
            flag = "본가";
            videourl = "";
        } else if (randp == 2262) {
            urllink = "1n7tC00I6C-7-tKQ5q9Bz1oUotXYPosXo"; //커피 한잔의
            flag = "본가";
            videourl = "";
        } else if (randp == 2263) {
            urllink = "11HWKM-ouCKVlwZh2vyk6FxkZ4_M_vFe9"; //큥 뱀파이어
            flag = "본가";
            videourl = "";
        } else if (randp == 2264) {
            urllink = "15C0XdrBqaeXywwwz2Pk_Z8fn5fuz3GuP"; //큥 뱀파이어
            flag = "본가";
            videourl = "";
        } else if (randp == 2265) {
            urllink = "1yUJaWpVa4UV9TT-3zy7okbhNd4GPXkgz"; //키라메키라리
            flag = "본가";
            videourl = "";
        } else if (randp == 2266) {
            urllink = "10KeSY--dipDyMsPIkZSlgX3OTe5NXrQ2"; //키라메키라리
            flag = "본가";
            videourl = "";
        } else if (randp == 2267) {
            urllink = "1MeXay9Vww7MFKaNhqQSkuTlJb47-D_eo"; //태양의 젤러시
            flag = "본가";
            videourl = "";
        } else if (randp == 2268) {
            urllink = "1gjQH2-5T_-m81DJHsjyYctj6X4gfm0hA"; //태양의 젤러시
            flag = "본가";
            videourl = "";
        } else if (randp == 2269) {
            urllink = "1otsI6B9lkPLaqfLH6JMPq-RFBkmk9vo4"; //파랑새
            flag = "본가";
            videourl = "";
        } else if (randp == 2270) {
            urllink = "1yJQabjA3Pb1_cI_um6GTlpGBdCcqQbly"; //파랑새
            flag = "본가";
            videourl = "";
        } else if (randp == 2271) {
            urllink = "1JSxesxKq_MsbybXlVKK-r91sz7_QTa1D"; //푸르푸르퓨처
            flag = "본가";
            videourl = "";
        } else if (randp == 2272) {
            urllink = "1BpTqhhBhuH-l_4KyWGeFVgurmZ_S5KU9"; //푸르푸르퓨처
            flag = "본가";
            videourl = "";
        } else if (randp == 2273) {
            urllink = "1aCXC3IvZFk4-Xj5yIMdheP3MTBtAUgR7"; //풀라소닉러브
            flag = "본가";
            videourl = "";
        } else if (randp == 2274) {
            urllink = "1ownpC9XsGk1zGLU2wyLdt0EggJAofG1r"; //플라소닉러브
            flag = "본가";
            videourl = "";
        } else if (randp == 2275) {
            urllink = "1yFkg-bmAhpoe8vbbsUG8Itfh3OG_2MHF"; //피피카 리리카
            flag = "본가";
            videourl = "";
        } else if (randp == 2276) {
            urllink = "1h34QPbVVaj-2V3c2ZbnCac9F8SUsk3zO"; //피피카 리리카
            flag = "본가";
            videourl = "";
        } else if (randp == 2277) {
            urllink = "1_BVyOaoazwguD-DXM5c02H1LOUBJ84xO"; //하늘
            flag = "본가";
            videourl = "";
        } else if (randp == 2278) {
            urllink = "1TEWUgh8c5CrIptWdmzza-leksVObB-3v"; //하늘
            flag = "본가";
            videourl = "";
        } else if (randp == 2279) {
            urllink = "1IyDZBxKvUrZm19YF57v4602ZzlkxuicR"; //함께
            flag = "본가";
            videourl = "";
        } else if (randp == 2280) {
            urllink = "1aG1GiM2BbvTrAokxUJDIO8Ar8JJGszya"; //함께
            flag = "본가";
            videourl = "";
        } else if (randp == 2281) {
            urllink = "1DJ54vqjmBG-jqFWRAMYA7SQpbD6a0nch"; //행복
            flag = "본가";
            videourl = "";
        } else if (randp == 2282) {
            urllink = "1BPjupC8piQtyse89Cjfc5IIx6qjdw0yy"; //행복
            flag = "본가";
            videourl = "";
        } else if (randp == 2283) {
            urllink = "1gfYXvL6SDbJGCJ4UZ24dU8jfP29OgVVm"; //헬로
            flag = "본가";
            videourl = "";
        } else if (randp == 2284) {
            urllink = "11k54kBWx89CBCE2OUDASyGh4mvg7hf5e"; //헬로
            flag = "본가";
            videourl = "";
        } else if (randp == 2285) {
            urllink = "1qbsLs0tfI5mQ6SH3U_rZ5_txE3Kz0rLU"; //홍백응원
            flag = "본가";
            videourl = "";
        } else if (randp == 2286) {
            urllink = "1N_1YkJwSD_tXiRX4SLUPwXzdvm6IjmQU"; //홍백응원
            flag = "본가";
            videourl = "";
        } else if (randp == 2287) {
            urllink = "1kWbTcXSDrdx8374mcRa7ZMUn9oRcV-VJ"; //마지데
            flag = "본가";
            videourl = "";
        } else if (randp == 2288) {
            urllink = "11gEJuGxtJXsnFQYulASNGeB62UHh5tfA"; //마지데 マジで…！？
            flag = "본가";
            videourl = "";
        } else if (randp == 2289) {
            urllink = "15j4kLYoctFmxuEAMRCQOAuxY-jUF9ylA"; //작은 존재
            flag = "본가";
            videourl = "";
        } else if (randp == 2290) {
            urllink = "18xHER2tkrf-NeJRE9ihXwljuc_J0FwRV"; //작은 존재
            flag = "본가";
            videourl = "";
        } else if (randp == 2291) {
            urllink = "1RPDWey1Mp_zh1gKLUkMksLkhYWOEMv92"; //샹그리라
            flag = "본가";
            videourl = "";
        } else if (randp == 2292) {
            urllink = "13sxdmdwe8iueLoqXTfcss3aVIKX3HuHI"; //샹그리라
            flag = "본가";
            videourl = "";
        } else if (randp == 2293) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        } else if (randp == 2294) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        } else if (randp == 2295) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        } else if (randp == 2296) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        } else if (randp == 2297) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        } else if (randp == 2298) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        } else if (randp == 2299) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        } else if (randp == 2300) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        } else if (randp == 2301) {
            urllink = ""; //
            flag = "본가";
            videourl = "";
        }
    }
    if (true) { //노래 받기 기타 셀렉터
        if (randp == 3001) {
            urllink = "1FbtD6kFEb-exmTjy--Epo5vUqyAi_ajO"; //1st call
            flag = "기타";
            videourl = "";
        } else if (randp == 3002) {
            urllink = "1eE6ro_dr9kWEAD5WOWkEY2XmD8SkP7fa"; //1st call
            flag = "기타";
            videourl = "";
        } else if (randp == 3003) {
            urllink = "1G8MHyUUjh9IG1yMja0mX_cfL6Pb7Zo0m"; //에버 라이징
            flag = "기타";
            videourl = "";
        } else if (randp == 3004) {
            urllink = "1PawEOwfUibGU89gITHMypeHvIffTQj71"; //에버 라이징
            flag = "기타";
            videourl = "";
        } else if (randp == 3005) {
            urllink = "1oqctQXrS_igML9PcmjPmyyX01hD5oNmR"; //그레티튜드
            flag = "기타";
            videourl = "";
        } else if (randp == 3006) {
            urllink = "1h_JWpsnDp3ROO0RcMo2vlM4Y8_PX3CIV"; //그레티튜드
            flag = "기타";
            videourl = "";
        } else if (randp == 3007) {
            urllink = "1UrffItOylAan_FS-qql1hsSnEpr_BLLu"; //팝 링크스 튠
            flag = "기타";
            videourl = "";
        } else if (randp == 3008) {
            urllink = "1_0AWkuoE4ld6XOGRRgy850Yf9107I4QK"; //팝 링크스 튠
            flag = "기타";
            videourl = "";
        } else if (randp == 3009) {
            urllink = "1z5mrZZifxyFYJuvsJWcF0PTfVcnO3zzO"; //세션
            flag = "기타";
            videourl = "";
        } else if (randp == 3010) {
            urllink = "1YOwRVDnQXkCO1O7wVZRx21E-LXJiA9kJ"; //세션
            flag = "기타";
            videourl = "";
        } else if (randp == 3011) {
            urllink = "17mFeJqk6BY2bwiZC_kAftdkl2ya32sW7"; //몇번이고 웃자
            flag = "기타";
            videourl = "";
        } else if (randp == 3012) {
            urllink = "12Z5Uw_mVxHSewT1zb62_dHos_JaFdtjq"; //몇번이고 웃자
            flag = "기타";
            videourl = "";
        } else if (randp == 3013) {
            urllink = "1kUnOZdH-k8418-tqKB87mRXBQj6jeh1v"; //나츠뱅
            flag = "기타";
            videourl = "";
        } else if (randp == 3014) {
            urllink = "108e_qyyKY6zcloV_t7Ed570dIU--G9LQ"; //나츠뱅
            flag = "기타";
            videourl = "";
        } else if (randp == 3015) {
            urllink = "1AI7917fb2TmgXlW4L3TQo-FPRXl3UnvE"; //보야져
            flag = "기타";
            videourl = "";
        } else if (randp == 3016) {
            urllink = "1sx5J02iAncDmw4BJrPnnbD6lyoceHJFy"; //보야져
            flag = "기타";
            videourl = "";
        } else if (randp == 3017) {
            urllink = "1Ap1QiilLVU1QDKzj0apDdywHPc3fVJPY"; //사랑 주박
            flag = "기타";
            videourl = "";
        } else if (randp == 3018) {
            urllink = "1PsPraH29fkwVPV_hMAfrOiK0GOkyq6rr"; //사랑 주박
            flag = "기타";
            videourl = "";
        } else if (randp == 3019) {
            urllink = "1060A4qsmd3Wh5TfeMdNQOfbSFZfsq0k8"; //전력
            flag = "기타";
            videourl = "";
        } else if (randp == 3020) {
            urllink = "1GWkRveTP_EKIbIg5g2Rx4q72pERXsnYu"; //전력
            flag = "기타";
            videourl = "";
        } else if (randp == 3021) {
            urllink = "1_XOtDdOmzL-oQTBmpQd7dgiLGs9WgHDp"; //아이돌하트
            flag = "기타";
            videourl = "";
        } else if (randp == 3022) {
            urllink = "1TPq--k_UpAa60HEiYZrA0tjm2V4N8fgR"; //아이돌하트
            flag = "기타";
            videourl = "";
        } else if (randp == 3023) {
            urllink = "1MY6sI4qPwc6tKLcGwh8sAHuk8xVs3Bfo"; //카와이워즈
            flag = "기타";
            videourl = "";
        } else if (randp == 3024) {
            urllink = "1W2VLMqqLaXGeO4-D9qRGbKSC_AJLNy0G"; //카와이워즈
            flag = "기타";
            videourl = "";
        } else if (randp == 3025) {
            urllink = "1HPFUWXVdSvMG2RpOKeI8UmIGyLD5DMlG"; //댄댄댄
            flag = "기타";
            videourl = "";
        } else if (randp == 3026) {
            urllink = "1OWdomFYuT4vHvvzPgG2d6up3LHA1clLQ"; //댄댄댄
            flag = "기타";
            videourl = "";
        } else if (randp == 3027) {
            urllink = ""; //
            flag = "기타";
            videourl = "";
        } else if (randp == 3028) {
            urllink = ""; //
            flag = "기타";
            videourl = "";
        } else if (randp == 3029) {
            urllink = ""; //
            flag = "기타";
            videourl = "";
        } else if (randp == 3030) {
            urllink = ""; //
            flag = "기타";
            videourl = "";
        } else if (randp == 3031) {
            urllink = ""; //
            flag = "기타";
            videourl = "";
        }
    }
    if (videourl == "") {
        videourl =
            "https://www.youtube.com/channel/UCdpsEqPeAXVGlgN_79yp5Ng/playlists";
    }
    flagO = document.getElementById("본가").checked;
    flagM = document.getElementById("밀리").checked;
    flagD = document.getElementById("데레").checked;
    flagS = document.getElementById("샤니").checked;
    flagA = document.getElementById("기타").checked;
    if (flag == "본가" && flagO == false) {
        //alert('체크가 안되어있습니다.');
        SongChange();
        return 0;
    }
    if (flag == "밀리" && flagM == false) {
        //alert('체크가 안되어있습니다.');
        SongChange();
        return 0;
    }
    if (flag == "데레" && flagD == false) {
        //alert('체크가 안되어있습니다.');
        SongChange();
        return 0;
    }
    if (flag == "샤니" && flagS == false) {
        //alert('체크가 안되어있습니다.');
        SongChange();
        return 0;
    }
    if (flag == "기타" && flagA == false) {
        //alert('체크가 안되어있습니다.');
        SongChange();
        return 0;
    }
    if(beta_mode){
        beta_randp = Math.floor(Math.random() * 2);
        if(beta_randp == 0){
            submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans1').textContent = answer[0];
            randp = Math.floor(Math.random() * 3200);
    if (
        notran.indexOf(randp) != -1 ||
        (randp > 563) & (randp <= 1000) ||
        (randp > 1190 && randp <= 1500) ||
        (randp > 1758 && randp <= 2000) ||
        (randp > 2292 && randp <= 3000) ||
        (randp > 3026 && randp <= 3200)
    ) {
        //alert('중복입니다.');
        SongChange();
        return 0;
    }submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans2').textContent = answer[0];
            randp = Math.floor(Math.random() * 3200);
    if (
        notran.indexOf(randp) != -1 ||
        (randp > 563) & (randp <= 1000) ||
        (randp > 1190 && randp <= 1500) ||
        (randp > 1758 && randp <= 2000) ||
        (randp > 2292 && randp <= 3000) ||
        (randp > 3026 && randp <= 3200)
    ) {
        //alert('중복입니다.');
        SongChange();
        return 0;
    }submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans3').textContent = answer[0];
            cor_ans = 1;
        }
        if(beta_randp == 1){
            submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans2').textContent = answer[0];
            randp = Math.floor(Math.random() * 3200);
    if (
        notran.indexOf(randp) != -1 ||
        (randp > 563) & (randp <= 1000) ||
        (randp > 1190 && randp <= 1500) ||
        (randp > 1758 && randp <= 2000) ||
        (randp > 2292 && randp <= 3000) ||
        (randp > 3026 && randp <= 3200)
    ) {
        //alert('중복입니다.');
        SongChange();
        return 0;
    }submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans1').textContent = answer[0];
            randp = Math.floor(Math.random() * 3200);
    if (
        notran.indexOf(randp) != -1 ||
        (randp > 563) & (randp <= 1000) ||
        (randp > 1190 && randp <= 1500) ||
        (randp > 1758 && randp <= 2000) ||
        (randp > 2292 && randp <= 3000) ||
        (randp > 3026 && randp <= 3200)
    ) {
        //alert('중복입니다.');
        SongChange();
        return 0;
    }submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans3').textContent = answer[0];
            cor_ans = 2;
        }
        if(beta_randp == 2){
            submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans3').textContent = answer[0];
            randp = Math.floor(Math.random() * 3200);
    if (
        notran.indexOf(randp) != -1 ||
        (randp > 563) & (randp <= 1000) ||
        (randp > 1190 && randp <= 1500) ||
        (randp > 1758 && randp <= 2000) ||
        (randp > 2292 && randp <= 3000) ||
        (randp > 3026 && randp <= 3200)
    ) {
        //alert('중복입니다.');
        SongChange();
        return 0;
    }submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans2').textContent = answer[0];
            randp = Math.floor(Math.random() * 3200);
    if (
        notran.indexOf(randp) != -1 ||
        (randp > 563) & (randp <= 1000) ||
        (randp > 1190 && randp <= 1500) ||
        (randp > 1758 && randp <= 2000) ||
        (randp > 2292 && randp <= 3000) ||
        (randp > 3026 && randp <= 3200)
    ) {
        //alert('중복입니다.');
        SongChange();
        return 0;
    }submit();
            document.getElementById("input").value = "///";
            document.getElementById('ans1').textContent = answer[0];
            cor_ans = 3;
        }
    }
    const temp1 = document.getElementById("input");
    temp1.value = "";
    if (winpoint == 0) {
        if(hardmode){
            alert("정답은 " + answer[0] +"입니다.");
        }
        lose++;
    } else winpoint = 0;
    rate = (win / (lose + win)) * 100;
    document.getElementById("your").textContent =
        "정답:포기:정답률 / " + win + " : " + lose + " : " + rate.toFixed(1) + "%";
    document.getElementById("userMessage").value =
        "사용자 기록" + win + ":" + lose + ":" + rate.toFixed(1);
    notran.push(randp); //한번 나온 곡 저장해두기
    url = "https://docs.google.com/uc?export=open&id=" + urllink;
    //url = "https://drive.google.com/file/d/"+ urllink +"/preview";
    document.getElementById("song").src = url;
    answerFocus();
}
function surrend() {
    submit();
    document.getElementById("answer").textContent =
        " 정답은 < " + answer[0] + " > 입니다.";
}
function hint() {
    submit();
    if (hints == "") {
        document.getElementById("answer").textContent =
            "노래 받기를 먼저 눌러주세요.";
        return 0;
    }
    document.getElementById("answer").textContent =
        '정답을 입력해주세요. 힌트는 " ' + hints + ' "입니다.';
}
function videolink() {
    var win = window.open(videourl, "_blank");
    win.focus();
}
function modalpopup() {
    modal.style.display = "flex";
}
function close_modal() {
    modal.style.display = "none";
}
function record() {
    if (document.getElementById("userName").value != "" && win != 0) {
        alert("기록추가가 정상적으로 요청되었습니다.(몇 분 후 추가됩니다))");
    } else {
        alert("오류가 발생했습니다.");
    }
}
function ans1s(){
    if(cor_ans == 1){
        document.getElementById("answer").textContent = "정답입니다!";
        if(winpoint == 0) winpoint = 1;
            if(winpoint == 1) {
                win++;
                rate = (win / (lose + win)) * 100;
                document.getElementById("your").textContent =
                    "정답:포기:정답률 / " + win + " : " + lose + " : " + rate.toFixed(1) + "%";
                document.getElementById("userMessage").value =
                    "정답:" + win + " 포기:" + lose + " 정답률:" + rate.toFixed(1);
                winpoint = 2;
            }
    }
    else{
        document.getElementById("answer").textContent = "틀렸습니다.";
        SongChange();
    }
}
function ans2s(){
    if(cor_ans == 2){
        document.getElementById("answer").textContent = "정답입니다!";
        if(winpoint == 0) winpoint = 1;
            if(winpoint == 1) {
                win++;
                rate = (win / (lose + win)) * 100;
                document.getElementById("your").textContent =
                    "정답:포기:정답률 / " + win + " : " + lose + " : " + rate.toFixed(1) + "%";
                document.getElementById("userMessage").value =
                    "정답:" + win + " 포기:" + lose + " 정답률:" + rate.toFixed(1);
                winpoint = 2;
            }
    }
    else{
        document.getElementById("answer").textContent = "틀렸습니다.";
        SongChange();
    }
}
function ans3s(){
    if(cor_ans == 3){
        document.getElementById("answer").textContent = "정답입니다!";
        if(winpoint == 0) winpoint = 1;
            if(winpoint == 1) {
                win++;
                rate = (win / (lose + win)) * 100;
                document.getElementById("your").textContent =
                    "정답:포기:정답률 / " + win + " : " + lose + " : " + rate.toFixed(1) + "%";
                document.getElementById("userMessage").value =
                    "정답:" + win + " 포기:" + lose + " 정답률:" + rate.toFixed(1);
                winpoint = 2;
            }
    }
    else{
        document.getElementById("answer").textContent = "틀렸습니다.";
        SongChange();
    }
}
