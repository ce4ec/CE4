let loop; // loop 변수를 전역으로 선언
let UPT = 1;
let fc = 1;
let fc2 = 0;

function UPT1_1() {
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




function UPT2_1() {
  const target = document.querySelector("h2#upt1cw2");
  let displayText;

  if (fc === 0) {
      // fc가 0일 때는 '0개'로 표시
      displayText = "가격 : 0개";
  } else if (fc < 1000) {
      // fc가 1000 미만일 때는 소수점 없이 표시
      displayText = "가격 : " + fc.toFixed(0) + "개";
  } else {
      // fc가 1000 이상일 때
      // 소수점 없이 지수 표기법으로 변환
      displayText = "가격 : " + fc.toExponential().replace(/e\+/, 'e').replace(/e0/, 'e').replace(/(\.\d*[^0])0+e/, 'e') + "개";
  }

  target.innerHTML = displayText;
}


function UPT3_1() {
  const target = document.querySelector("h2#upt1cw3");
  let displayText;

  if (fc2 === 0) {
      // fc2가 0일 때는 '0개'로 표시
      displayText = "현재 소유량 : 0개";
  } else if (fc2 < 1000) {
      // fc2가 1000 미만일 때는 소수점 없이 표시
      displayText = "현재 소유량 : " + fc2.toFixed(0) + "개";
  } else {
      // fc2가 1000 이상일 때
      // 소수점 없이 지수 표기법으로 변환
      displayText = "현재 소유량 : " + fc2.toExponential().replace(/e\+/, 'e').replace(/e0/, 'e').replace(/(\.\d*[^0])0+e/, 'e');
  }

  target.innerHTML = displayText;
}
  
function UPT4_1() {
    const target = document.querySelector("h2#upt1cw4");
    let multiplier;
  
    if (fc2 < 10) {
        multiplier = 1.03; // fc2가 10 미만일 때 배율 1.03배
    } else {
        // fc2가 10 이상일 때 배율을 2배씩 증가
        let baseMultiplier = 1.03; // 초기 배율
        let increment = 10; // 배율을 2배씩 증가시키는 시작 범위
  
        while (fc2 >= increment) {
            baseMultiplier *= 2; // 배율을 2배씩 증가
            increment += 10; // 범위는 10씩 증가
        }
        multiplier = baseMultiplier;
    }
  
    let displayText;
    if (multiplier < 1000) {
        // 배율이 1000 미만일 때는 소수점 둘째 자리까지 표시
        displayText = "현재 배율 : " + multiplier.toFixed(2) + "배";
    } else {
        // 배율이 1000 이상일 때는 지수 표기법으로 변환하되 소수점 둘째 자리까지 반올림
        let exponent = Math.floor(Math.log10(multiplier));
        let mantissa = multiplier / Math.pow(10, exponent);
  
        // 소수점 둘째 자리까지 반올림
        mantissa = mantissa.toFixed(2);
  
        displayText = `현재 배율 : ${mantissa}e${exponent}배`;
    }
  
    target.innerHTML = displayText;
  }
  
function UPT5_1() {
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




loop1 = setInterval(() => { UPT1_1(); UPT2_1(); UPT3_1(); UPT4_1(); UPT5_1();}, 1);
