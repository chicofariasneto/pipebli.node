module.exports = class DadosEtiqueta {
    /**
     *
     * @param nome
     * @param endereco
     * @param numero
     * @param complemento
     * @param municipio
     * @param uf
     * @param cep
     * @param bairro
     */
    constructor(nome, endereco, numero, complemento, municipio, uf, cep, bairro) {
        this.nome = nome;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.municipio = municipio;
        this.uf = uf;
        this.cep = cep;
        this.bairro = bairro;
    }
}