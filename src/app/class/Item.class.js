module.exports = class Item {
    /**
     *
     * @param codigo
     * @param descricao
     * @param un
     * @param qtde
     * @param vlrUnit
     */
    constructor(codigo, descricao, un, qtde, vlrUnit) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.un = un;
        this.qtde = qtde;
        this.vlr_unit = vlrUnit;
    }
}