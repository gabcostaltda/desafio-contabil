const ContaBancariaService = require("./ContaBancariaService.js")
const EntradaService = require("./EntradaService.js")

module.exports = {
    contaBancariaService: (() => new ContaBancariaService())(),
    entradaService: (() => new EntradaService())(),
}