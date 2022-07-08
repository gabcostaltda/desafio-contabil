const INITIAL_STATE = "0,00";

export default function textToCurrencyString(text) {
    text = text === "" ? INITIAL_STATE : text;
    const inputNumber = parseInt(text.replace(/\D/, "").toString().replace("/\D/g", ""));
    return (inputNumber / 100).toFixed(2).replace(".", ",");
}