let contabilizeApi = window.contabilizeApi;

const EntradaController = () => ({
    getEntradas: contabilizeApi.obterEntradasDaConta,
    criarEntrada: contabilizeApi.criarEntrada
})

export default EntradaController();