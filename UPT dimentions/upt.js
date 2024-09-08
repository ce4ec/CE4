let loop; // loop 변수를 전역으로 선언
let UPT = 1;
let fc = 1;
let fc2 = 0;

function UPT1() {
    const target = document.querySelector("h2#Title2");
    target.innerHTML = "UPT " + UPT.toFixed(1) + "개를 보유중입니다.";
}

function UPT2() {
    const target = document.querySelector("h2#upt1cw2");
    target.innerHTML = "가격 : " + fc + "개";
}

function UPT3() {
    const target = document.querySelector("h2#upt1cw3");
    target.innerHTML = "현재 소유량 : " + fc2 + "개";
}

function UPT4() {
    if (UPT >= fc) {
        const a = document.querySelector("img#upt10");
        a.setAttribute("src", "upt.webp");
    } else if (UPT < fc) {
        const a = document.querySelector("img#upt10");
        a.setAttribute("src", "glerm.webp");
    }
}

function upt1cw() {
    if (UPT < fc) {
        alert("UPT가 부족합니다!");
    } else if (UPT >= fc) {
        UPT -= fc;
        // 이미 실행 중인 loop가 있으면 중단
        if (loop) {
            clearInterval(loop);
        }
        // 새로운 loop 시작
        loop = setInterval(() => { upt1cwhp(); }, 100);
        fc += 10;
        fc2 += 1;
    }
}

function upt1cwhp() {
  let baseIncrement = 10; // 초기 범위 시작 값
  let multiplier = 0.1; // 초기 증분 값

  if (fc2 < baseIncrement) {
    // fc2가 10 미만일 때
    UPT += (multiplier * fc2);
  } else {
    // fc2가 10 이상일 때
    let increment = baseIncrement;
    let currentMultiplier = multiplier * 2;

    while (fc2 >= increment) {
      if (fc2 < increment * 2) {
        UPT += (0.1 * fc2 * currentMultiplier);
        break;
      }
      increment *= 2; // 범위를 두 배로 증가
      currentMultiplier *= 2; // 증분 값도 두 배로 증가
    }
  }
}




// UPT 상태 업데이트를 매 1ms마다 실행
loop1 = setInterval(() => { UPT1(); UPT2(); UPT3(); UPT4(); }, 1);
