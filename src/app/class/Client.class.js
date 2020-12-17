module.exports = class Cliente {
    /**
     * Constructor of a Cliente
     *
     * @param nome
     * @param tipoPessoa
     * @param endereco
     * @param cpfCnpj
     * @param ie
     * @param numero
     * @param complemento
     * @param bairro
     * @param cep
     * @param cidade
     * @param uf
     * @param fone
     * @param email
     */
    constructor(nome, tipoPessoa, endereco, cpfCnpj, ie, numero,
                complemento, bairro, cep, cidade, uf, fone, email) {
        this.nome = nome;
        this.tipoPessoa = tipoPessoa;
        this.endereco = endereco;
        this.cpf_cnpj = cpfCnpj;
        this.ie = ie
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cep = cep;
        this.cidade = cidade;
        this.uf = uf;
        this.fone = fone;
        this.email = email;
    }
}