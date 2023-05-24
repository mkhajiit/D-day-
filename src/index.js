const clockTitle = document.querySelector(".js-clock");

function dday(){
    const CHRISTMAS = new Date("2023-12-25");
    const TODAY = new Date();
    const DDAY = CHRISTMAS - TODAY;
    console.log(DDAY);

    const DAY = String(Math.floor(DDAY / (1000*60*60*24)));
    const HOURS = String(Math.floor(DDAY / (1000*60*60)%24)).padStart(2,"0"); //다음 단위값을 구할때 나누고 남은 나머지 값을 구해야함 => 즉, 다음 단위값을 구할때 나누는 값으로 나머지연산
    const MINUTES = String(Math.floor(DDAY / (1000*60)%60)).padStart(2,"0");
    const SECONDS = String(Math.floor(DDAY / 1000 % 60)).padStart(2,"0");
    
    clockTitle.innerHTML = `${DAY}d ${HOURS}h ${MINUTES}m ${SECONDS}s`
}

dday();
setInterval(dday,1000);