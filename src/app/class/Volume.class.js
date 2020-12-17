module.exports = class Volume {
    /**
     * Constructor to creates a Volume
     *
     * @param servico
     * @param codigoRastreamento
     */
    constructor(servico, codigoRastreamento) {
        this.servico = servico;
        this.codigoRastreamento = codigoRastreamento;
    }
}