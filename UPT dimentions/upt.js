let loop; // loop 변수를 전역으로 선언
let UPT = 1;
let fc = 1;
let fc2 = 0;

function UPT1() {
  const target = document.querySelector("h2#Title2");
  let displayText;

  if (UPT === 0) {
      // UPT가 0일 때는 '0.0개'로 표시
      displayText = "UPT 0.0개를 보유중입니다.";
  } else if (UPT < 1000) {
      // UPT가 1000 미만일 때는 소수점 한 자리까지 표시
      displayText = "UPT " + UPT.toFixed(1) + "개를 보유중입니다.";
  } else {
      // UPT가 1000 이상일 때
      // 소수 첫째 자리까지 반올림
      let roundedUPT = Math.round(UPT / 10) * 10;
      let exponent = Math.floor(Math.log10(roundedUPT));
      let mantissa = roundedUPT / Math.pow(10, exponent);

      // 소수 첫째 자리까지 반올림
      mantissa = Math.round(mantissa * 10) / 10;
      
      // 지수 표기법으로 변환
      displayText = `UPT ${mantissa}e${exponent}개를 보유중입니다.`;
  }

  target.innerHTML = displayText;
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
  const target = document.querySelector("h2#upt1cw4");
  let multiplier;

  if (fc2 < 10) {
    multiplier = 1.03; // fc2가 10 미만일 때 배율 1.03배
  } else if (fc2 >= 10 && fc2 < 20) {
    multiplier = 2.06; // fc2가 10 이상 20 미만일 때 배율 2.06배
  } else if (fc2 >= 20 && fc2 < 30) {
    multiplier = 4.12; // fc2가 20 이상 30 미만일 때 배율 4.12배
  } else {
    // 30 이상부터 적용
    let baseMultiplier = 4.12; // 기본 배율 (30 이상부터 시작)
    let increment = 30; // 시작 범위

    // fc2가 30 이상일 때 배율을 2배씩 증가
    while (fc2 >= increment) {
      baseMultiplier *= 2; // 배율은 2배씩 증가
      increment += 10; // 범위는 10씩 증가
    }
    multiplier = baseMultiplier;
  }

  target.innerHTML = "현재 배율 : " + multiplier.toFixed(2) + "배"; // 배율 소수점 두 자리로 표시
}



function UPT5() {
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
        if (fc == 1){
          fc += 9;
        }
        else{
          fc += 10;
        }
        fc2 += 1;
    }
}

function upt1cwhp() {
  let baseIncrement = 10; // 초기 범위 시작 값
  let multiplier = 0.1; // 초기 증분 값

  if (fc2 < baseIncrement) {
    // fc2가 10 미만일 때 배율을 1.03배로 적용
    UPT += (multiplier * fc2 * 1.03);
  } else {
    let increment = baseIncrement;
    let currentMultiplier = 1.03; // 초기 배율

    // 각 구간에서 배율이 2배씩 증가하도록 설정
    while (fc2 >= increment) {
      if (fc2 < increment + 10) {
        // 해당 범위에 맞는 multiplier를 적용하여 UPT를 계산
        UPT += (multiplier * fc2 * currentMultiplier);
        break;
      }
      increment += 10; // 각 구간은 10씩 증가
      currentMultiplier *= 2; // 각 구간마다 배율을 2배로 증가
    }
  }
}







// UPT 상태 업데이트를 매 1ms마다 실행
loop1 = setInterval(() => { UPT1(); UPT2(); UPT3(); UPT4(); UPT5();}, 1);
