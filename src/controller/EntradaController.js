const {entradaEventEmitter} = window.contabilizeApi;

const EntradaController = () => ({
    getEntradas: entradaEventEmitter.obterEntradasDaConta,
    criarEntrada: entradaEventEmitter.criarEntrada,
    getTiposDeEntrada: entradaEventEmitter.obterTiposDeEntrada,
})

export default EntradaController();