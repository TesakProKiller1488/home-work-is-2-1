function calculateTotal() {
    // Получаем значения из формы
    const oilChangeQuantity = document.getElementById('oil-change-quantity').value;
    const oilChangePrice = document.getElementById('oil-change-price').value;
    const brakePadReplacementQuantity = document.getElementById('brake-pad-replacement-quantity').value;
    const brakePadReplacementPrice = document.getElementById('brake-pad-replacement-price').value;
    const engineRepairQuantity = document.getElementById('engine-repair-quantity').value;
    const engineRepairPrice = document.getElementById('engine-repair-price').value;

    // Рассчитываем общую стоимость
    const totalCost = (oilChangeQuantity * oilChangePrice) +
                       (brakePadReplacementQuantity * brakePadReplacementPrice) +
                       (engineRepairQuantity * engineRepairPrice);

    // Отображаем результат
    document.getElementById('total-cost').textContent = `Общая стоимость услуг: ${totalCost} руб.`;
}
