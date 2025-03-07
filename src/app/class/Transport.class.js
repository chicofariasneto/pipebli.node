const DadosEtiqueta = require('./Tag.class');
const Volume = require('./Volume.class');

/**
 * This is a function to creates an array of Volume's object
 *
 * @param volumes
 * @returns {[Volume]}
 */
const createVolumes = (volumes) => {
    const volumesObj = [];

    volumes.forEach(element => {
        if (element !== undefined)
            volumesObj.push(new Volume(element.servico, element.codigoRastreamento));
    })

    return volumesObj;
}

module.exports = class Transporte {
    /**
     * Constructor to creates a Transporte
     *
     * @param transportadora
     * @param tipoFrete
     * @param servicoCorreios
     * @param dadosEtiqueta
     * @param volumes
     */
    constructor(transportadora, tipoFrete, servicoCorreios, dadosEtiqueta, volumes) {
        this.transportadora = transportadora;
        this.tipo_frete = tipoFrete;
        this.servico_correios = servicoCorreios;

        if (dadosEtiqueta !== undefined)
            this.dados_etiquetas = new DadosEtiqueta(dadosEtiqueta.nome, dadosEtiqueta.endereco, dadosEtiqueta.numero,
                dadosEtiqueta.complemento, dadosEtiqueta.municipio, dadosEtiqueta.uf, dadosEtiqueta.cep, dadosEtiqueta.bairro);

        this.volumes = createVolumes(volumes);
    }
}