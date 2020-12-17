/**
 *
 * @param cliente
 * @returns {string}
 */
const client = (cliente) => {
    try {
        const {
            nome, endereco, cpf_cnpj,
            ie, numero, complemento,
            bairro, cep, cidade,
            uf, fone, email
        } = cliente;

        return `<cliente>
                <nome>${nome ? nome : ''}</nome>
                <endereco>${endereco ? endereco : ''}</endereco>
                <cpf_cnpj>${cpf_cnpj ? cpf_cnpj : ''}</cpf_cnpj>
                <ie>${ie ? ie : ''}</ie>
                <numero>${numero ? numero : ''}</numero>
                <complemento>${complemento ? complemento : ''}</complemento>
                <bairro>${bairro ? bairro : ''}</bairro>
                <cep>${cep ? cep : ''}</cep>
                <cidade>${cidade ? cidade : ''}</cidade>
                <uf>${uf ? uf : ''}</uf>
                <fone>${fone ? fone : ''}</fone>
                <email>${email ? email : ''}</email>
            </cliente>`
    } catch (error) {
        return `<cliente></cliente>`;
    }
};

/**
 *
 * @param transporte
 * @returns {string}
 */
const transport = (transporte) => {
    try {
        const {
            transportadora,
            tipo_frete,
            servico_correios,
            dados_etiquetas,
            volumes
        } = transporte;

        const {
            nome, endereco, numero,
            complemento, municipio,
            uf, cep, bairro
        } = dados_etiquetas;

        let volume = '';
        for (const volumeRow of volumes) {
            const {servico, codigoRastreamento} = volumeRow;
            volume += `<volume><servico>${servico ? servico : ''}</servico><codigoRastreamento>${codigoRastreamento ? codigoRastreamento : ''}</codigoRastreamento></volume>`;
        }

        return `<transporte>
                    <transportadora>${transportadora ? transportadora : ''}</transportadora>
                    <tipo_frete>${tipo_frete ? tipo_frete : ''}</tipo_frete>
                    <servico_correios>${servico_correios ? servico_correios : ''}</servico_correios>
                    <dados_etiqueta>
                        <nome>${nome ? nome : ''}</nome>
                        <endereco>${endereco ? endereco : ''}</endereco>
                        <numero>${numero ? numero : ''}</numero>
                        <complemento>${complemento ? complemento : ''}</complemento>
                        <municipio>${municipio ? municipio : ''}</municipio>
                        <uf>${uf ? uf : ''}</uf>
                        <cep>${cep ? cep : ''}</cep>
                        <bairro>${bairro ? bairro : ''}</bairro>
                    </dados_etiqueta>
                    <volumes>${volume ? volume : ''}</volumes>
                </transporte>`
    } catch (error) {
        return `<transporte></transporte>`
    }
};

/**
 *
 * @param items
 * @returns {string}
 */
const items = (items) => {
    try {
        let item = '';
        for (const itemRow of items) {
            const {codigo, descricao, un, qtde, vlr_unit} = itemRow;
            item += `<item>
                        <codigo>${codigo ? codigo : ''}</codigo>
                        <descricao>${descricao ? descricao : ''}</descricao>
                        <un>${un ? un : ''}</un>
                        <qtde>${qtde ? qtde : ''}</qtde>
                        <vlr_unit>${vlr_unit ? vlr_unit : ''}</vlr_unit>
                     </item>`;
        }

        return `<itens>${item ? item : ''}</itens>`;
    } catch (error) {
        return `<itens></itens>`;
    }
};

/**
 *
 * @param parcelas
 * @returns {string}
 */
const portions = (parcelas) => {
    try {
        let parcela = '';
        for (const parcelaRow of parcelas) {
            const {data, vlr, obs} = parcelaRow;
            parcela += `<parcela><data>${data ? data : ''}</data><vlr>${vlr ? vlr : ''}</vlr><obs>${obs ? obs : ''}</obs></parcela>`;
        }

        return `<parcelas>${parcela ? parcela : ''}</parcelas>`
    } catch (error) {
        return `<parcelas></parcelas>`;
    }
}

/**
 *
 * @param pedido
 * @returns {string}
 */
const createXml = (pedido) => {
    const {
        cliente, transporte,
        itens, parcelas,
        vlr_frete, vlr_desconto,
        obs, obs_internas
    } = pedido;

    let xmlStr = '<?xml version="1.0" encoding="ISO-8859-1"?><pedido>';

    xmlStr += client(cliente) + transport(transporte) + items(itens) + portions(parcelas);
    xmlStr += `<vlr_frete>${vlr_frete ? vlr_frete : ''}</vlr_frete>
               <vlr_desconto>${vlr_desconto ? vlr_desconto : ''}</vlr_desconto>
               <obs>${obs ? obs : ''}</obs>
               <obs_internas>${obs_internas ? obs_internas : ''}</obs_internas>
               </pedido>`

    return xmlStr;
};

module.exports = {
    createXml
}