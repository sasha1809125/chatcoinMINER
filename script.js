let minedCHC = 0;
const miningSpeed = 180 / 24; // 1 CHC за 24 часа
const miningInterval = 1000; // Обновление каждую секунду

document.getElementById("startMining").addEventListener("click", function() {
    setInterval(() => {
        minedCHC += miningSpeed / (60 * 60); // Конвертируем в часы
        document.getElementById("miningStatus").innerText = `Добыто: ${minedCHC.toFixed(4)} CHC`;
    }, miningInterval);
    
    // Отправляем данные на сервер каждый час (это будет потом, если потребуется)
    // setInterval(() => {
    //     sendMinedData(minedCHC);
    // }, 3600000); // 1 час
});