const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value")//outro valor

    console.log(currencySelect.value)
   
    const dolarToday = 6.17
    const euroToday = 6.51
   

    const convertedValue = inputCurrencyValue


   

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)

}



function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
   

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dólar americano"
        currencyImage.src ="./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


