function ExibeBoleto() {
    if (document.getElementById("selectFormPag").value == 'Boleto') {

        if (document.getElementById("VlrParUm").value != 0) {

            let eBol1 = document.getElementById('parcela1Bol');

            eBol1.style.display = 'flex';
        }

        if (document.getElementById("VlrParDois").value != 0) {

            let eBol2 = document.getElementById('parcela2Bol');

            eBol2.style.display = 'flex';
        }

        if (document.getElementById("VlrParTres").value != 0) {

            let eBol3 = document.getElementById('parcela3Bol');

            eBol3.style.display = 'flex';
        }

        if (document.getElementById("VlrParQuatro").value != 0) {

            let eBol4 = document.getElementById('parcela4Bol');

            eBol4.style.display = 'flex';
        }

        if (document.getElementById("VlrParCinco").value != 0) {

            let eBol5 = document.getElementById('parcela5Bol');

            eBol5.style.display = 'flex';
        }

        if (document.getElementById("VlrParSeis").value != 0) {

            let eBol6 = document.getElementById('parcela6Bol');

            eBol6.style.display = 'flex';
        }

        if (document.getElementById("VlrParSete").value != 0) {

            let eBol7 = document.getElementById('parcela7Bol');

            eBol7.style.display = 'flex';
        }

        if (document.getElementById("VlrParOito").value != 0) {

            let eBol8 = document.getElementById('parcela8Bol');

            eBol8.style.display = 'flex';
        }

        if (document.getElementById("VlrParNove").value != 0) {

            let eBol9 = document.getElementById('parcela9Bol');

            eBol9.style.display = 'flex';
        }

        if (document.getElementById("VlrParDez").value != 0) {

            let eBol10 = document.getElementById('parcela10Bol');

            eBol10.style.display = 'flex';
        }

        if (document.getElementById("VlrParOnze").value != 0) {

            let eBol11 = document.getElementById('parcela11Bol');

            eBol11.style.display = 'flex';
        }

        if (document.getElementById("VlrParDoze").value != 0) {

            let eBol12 = document.getElementById('parcela12Bol');

            eBol12.style.display = 'flex';
        }

    }
}

function ExibirFormaPagamento() {

    if (document.getElementById("selectFormPag").value == 'Pix') {
        let eVal2 = document.getElementById('PagPix');

        eVal2.style.display = 'flex';

        let eVal = document.getElementById('PagBanco');

        eVal.style.display = 'none';

        let eVal1 = document.getElementById('PagBancoAge');

        eVal1.style.display = 'none';

        let eBol1 = document.getElementById('parcela1Bol');
        eBol1.style.display = 'none';
        let eBol2 = document.getElementById('parcela2Bol');
        eBol2.style.display = 'none';
        let eBol3 = document.getElementById('parcela3Bol');
        eBol3.style.display = 'none';
        let eBol4 = document.getElementById('parcela4Bol');
        eBol4.style.display = 'none';
        let eBol5 = document.getElementById('parcela5Bol');
        eBol5.style.display = 'none';
        let eBol6 = document.getElementById('parcela6Bol');
        eBol6.style.display = 'none';
        let eBol7 = document.getElementById('parcela7Bol');
        eBol7.style.display = 'none';
        let eBol8 = document.getElementById('parcela8Bol');
        eBol8.style.display = 'none';
        let eBol9 = document.getElementById('parcela9Bol');
        eBol9.style.display = 'none';
        let eBol10 = document.getElementById('parcela10Bol');
        eBol10.style.display = 'none';
        let eBol11 = document.getElementById('parcela11Bol');
        eBol11.style.display = 'none';
        let eBol12 = document.getElementById('parcela12Bol');
        eBol12.style.display = 'none';

    }
    if (document.getElementById("selectFormPag").value == 'Depósito') {
        let eVal = document.getElementById('PagBanco');

        eVal.style.display = 'flex';

        let eVal1 = document.getElementById('PagBancoAge');

        eVal1.style.display = 'flex';

        let eVal2 = document.getElementById('PagPix');

        eVal2.style.display = 'none';

        let eBol1 = document.getElementById('parcela1Bol');
        eBol1.style.display = 'none';
        let eBol2 = document.getElementById('parcela2Bol');
        eBol2.style.display = 'none';
        let eBol3 = document.getElementById('parcela3Bol');
        eBol3.style.display = 'none';
        let eBol4 = document.getElementById('parcela4Bol');
        eBol4.style.display = 'none';
        let eBol5 = document.getElementById('parcela5Bol');
        eBol5.style.display = 'none';
        let eBol6 = document.getElementById('parcela6Bol');
        eBol6.style.display = 'none';
        let eBol7 = document.getElementById('parcela7Bol');
        eBol7.style.display = 'none';
        let eBol8 = document.getElementById('parcela8Bol');
        eBol8.style.display = 'none';
        let eBol9 = document.getElementById('parcela9Bol');
        eBol9.style.display = 'none';
        let eBol10 = document.getElementById('parcela10Bol');
        eBol10.style.display = 'none';
        let eBol11 = document.getElementById('parcela11Bol');
        eBol11.style.display = 'none';
        let eBol12 = document.getElementById('parcela12Bol');
        eBol12.style.display = 'none';
    }

    if (document.getElementById("selectFormPag").value == 'Boleto') {
        let eVal2 = document.getElementById('PagPix');

        eVal2.style.display = 'none';

        let eVal = document.getElementById('PagBanco');

        eVal.style.display = 'none';

        let eVal1 = document.getElementById('PagBancoAge');

        eVal1.style.display = 'none';


        /*
                let eBol = document.getElementById('parcela1Bol');
        
                eBol.style.display = 'flex';
        
                if (document.getElementById("CodBolUm").value != '') {
        
                    let eBol2 = document.getElementById('parcela2Bol');
        
                    eBol2.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolDois").value != 0) {
        
                    let eBol3 = document.getElementById('parcela3Bol');
        
                    eBol3.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolTres").value != 0) {
        
                    let eBol4 = document.getElementById('parcela4Bol');
        
                    eBol4.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolQuatro").value != 0) {
        
                    let eBol5 = document.getElementById('parcela5Bol');
        
                    eBol5.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolCinco").value != 0) {
        
                    let eBol6 = document.getElementById('parcela6Bol');
        
                    eBol6.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolSeis").value != 0) {
        
                    let eBol7 = document.getElementById('parcela7Bol');
        
                    eBol7.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolSete").value != 0) {
        
                    let eBol8 = document.getElementById('parcela8Bol');
        
                    eBol8.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolOito").value != 0) {
        
                    let eBol9 = document.getElementById('parcela9Bol');
        
                    eBol9.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolNove").value != 0) {
        
                    let eBol10 = document.getElementById('parcela10Bol');
        
                    eBol10.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolDez").value != 0) {
        
                    let eBol11 = document.getElementById('parcela11Bol');
        
                    eBol11.style.display = 'flex';
                }
        
                if (document.getElementById("CodBolOnze").value != 0) {
        
                    let eBol12 = document.getElementById('parcela12Bol');
        
                    eBol12.style.display = 'flex';
                }*/
        ExibeBoleto()
    }
}



function inserirLinhaTabela() {

    if (document.getElementById("VlrParUm").value == 0) {
        let eVal = document.getElementById('parcela1');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela1Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParUm").value != 0) {
        let eVal = document.getElementById('parcela2');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela2Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParDois").value != 0) {
        let eVal = document.getElementById('parcela3');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela3Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParTres").value != 0) {
        let eVal = document.getElementById('parcela4');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela4Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParQuatro").value != 0) {
        let eVal = document.getElementById('parcela5');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela5Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParCinco").value != 0) {
        let eVal = document.getElementById('parcela6');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela6Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParSeis").value != 0) {
        let eVal = document.getElementById('parcela7');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela7Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParSete").value != 0) {
        let eVal = document.getElementById('parcela8');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela8Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParOito").value != 0) {
        let eVal = document.getElementById('parcela9');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela9Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParNove").value != 0) {
        let eVal = document.getElementById('parcela10');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela10Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParDez").value != 0) {
        let eVal = document.getElementById('parcela11');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela11Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
    if (document.getElementById("VlrParOnze").value != 0) {
        let eVal = document.getElementById('parcela12');

        eVal.style.display = 'flex';

        if (document.getElementById("selectFormPag").value == 'Boleto') {
            let eBol = document.getElementById('parcela12Bol');

            eBol.style.display = 'flex';
        }
        calculaTotal()
    }
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};
function mascaraMoeda(campo, evento) {
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor = campo.value.replace(/[^\d]+/gi, '').reverse();
    var resultado = "";
    var mascara = "##.###.###,##".reverse();
    for (var x = 0, y = 0; x < mascara.length && y < valor.length;) {
        if (mascara.charAt(x) != '#') {
            resultado += mascara.charAt(x);
            x++;
        } else {
            resultado += valor.charAt(y);
            y++;
            x++;
        }
    }
    campo.value = resultado.reverse();
    calculaTotal()
}

function retornaInteiro(Vlr) {
    var vlrTot = 0;
    auxSomaInt = '';
    auxSomaDec = '';

    var TamVlr = Vlr.length;

    for (var i = 0; i < TamVlr; i++) {
        var SomaInt = Vlr.substring(i, i + 1)
        if (SomaInt == ',') {
            break
        } else {

            auxSomaInt = auxSomaInt + SomaInt
        }
    }

    auxSomaInt = auxSomaInt.replace(".", "");

    parseFloat(auxSomaInt)

    for (var i = 0; i < TamVlr; i++) {
        var SomaDec = Vlr.substring(i, i + 1)
        if (SomaDec == ',') {
            var SomaDec = Vlr.substring(i + 1, i + 2)
            auxSomaDec = auxSomaDec + SomaDec
            var SomaDec = Vlr.substring(i + 2, i + 3)
            auxSomaDec = auxSomaDec + SomaDec
            break
        }
    }
    if (auxSomaDec != '') {
        auxSomaDec = "." + auxSomaDec;
    }
    parseFloat(auxSomaDec)
    return vlrTot = auxSomaInt + auxSomaDec

}

function calculaTotal() {

    var VlrTotSum = 0;
    var VlrTotConvert = "";


    var VlrTot1 = document.getElementById("VlrParUm").value
    var VlrTot2 = document.getElementById("VlrParDois").value
    var VlrTot3 = document.getElementById("VlrParTres").value
    var VlrTot4 = document.getElementById("VlrParQuatro").value
    var VlrTot5 = document.getElementById("VlrParCinco").value
    var VlrTot6 = document.getElementById("VlrParSeis").value
    var VlrTot7 = document.getElementById("VlrParSete").value
    var VlrTot8 = document.getElementById("VlrParOito").value
    var VlrTot9 = document.getElementById("VlrParNove").value
    var VlrTot10 = document.getElementById("VlrParDez").value
    var VlrTot11 = document.getElementById("VlrParOnze").value
    var VlrTot12 = document.getElementById("VlrParDoze").value

    if (VlrTot1 != 0) {
        VlrTotSum = retornaInteiro(VlrTot1)
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot2))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot3))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot4))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0) && (VlrTot5 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot5))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0) && (VlrTot5 != 0) && (VlrTot6 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot6))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0) && (VlrTot5 != 0) && (VlrTot6 != 0) && (VlrTot7 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot7))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0) && (VlrTot5 != 0) && (VlrTot6 != 0) && (VlrTot7 != 0) && (VlrTot8 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot8))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0) && (VlrTot5 != 0) && (VlrTot6 != 0) && (VlrTot7 != 0) && (VlrTot8 != 0) && (VlrTot9 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot9))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0) && (VlrTot5 != 0) && (VlrTot6 != 0) && (VlrTot7 != 0) && (VlrTot8 != 0) && (VlrTot9 != 0) && (VlrTot10 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot10))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0) && (VlrTot5 != 0) && (VlrTot6 != 0) && (VlrTot7 != 0) && (VlrTot8 != 0) && (VlrTot9 != 0) && (VlrTot10 != 0) && (VlrTot11 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot11))
    }
    if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0) && (VlrTot4 != 0) && (VlrTot5 != 0) && (VlrTot6 != 0) && (VlrTot7 != 0) && (VlrTot8 != 0) && (VlrTot9 != 0) && (VlrTot10 != 0) && (VlrTot11 != 0) && (VlrTot12 != 0)) {
        VlrTotSum = parseFloat(VlrTotSum) + parseFloat(retornaInteiro(VlrTot12))
    }


    VlrTotSum = VlrTotSum

    var VlrTotSumConvert = parseFloat(VlrTotSum).toLocaleString('pt-br', { minimumFractionDigits: 2 });

    document.getElementById("TotalPagarPar").value = VlrTotSumConvert

}



//Inicialização da API do workflow
this.workflowCockpit = workflowCockpit({
    init: _init,
    onSubmit: _saveData,
    onError: _rollback,
});

// Função init é chamada ao abrir o formulário
function _init(data, info) {

    // Caso seja executado algum serviço externo ao abrir o formulário e o retorno dele seja atribuído a variáveis de execução
    // essas variáveis serão preenchidas
    const { initialVariables } = data.loadContext;
    console.log(initialVariables);

    info
        .getUserData()
        .then(function () {
            info.getPlatformData().then(function (platformData) {
                // Informações da G7
                console.log(platformData);
            });
        });

    // Retorna os dados que já foram previamente preenchidos no formulário
    info.getInfoFromProcessVariables().then(function (data) {
        // Somente recupera os dados caso não seja a criação de uma tarefa (somente se estiver tratando a tarefa)
        if (!info.isRequestNew() && Array.isArray(data)) {
            var map = new Map();
            var i;
            for (i = 0; i < data.length; i++) {
                map.set(data[i].key, data[i].value);
            }

            console.log("Carregando Dados", map);
            const selectTipFor = map.get("selectTipFor");
            const selectFormPag = map.get("selectFormPag");
            const DatSol = map.get("DatSol");
            const Fornec = map.get("Fornec");
            const Cnpj = map.get("Cnpj");
            const Proj = map.get("Proj");
            const ConFin = map.get("ConFin");
            const CenCus = map.get("CenCus");
            const DatPag = map.get("DatPag");
            const NumNf = map.get("NumNf");
            const DatPre = map.get("DatPre");
            const ObsPag = map.get("ObsPag");

            const DescParUm = map.get("DescParUm");
            const VlrParUm = map.get("VlrParUm");
            const DatParUm = map.get("DatParUm");
            const CodBolUm = map.get("CodBolUm");

            const DescParDois = map.get("DescParDois");
            const VlrParDois = map.get("VlrParDois");
            const DatParDois = map.get("DatParDois");
            const CodBolDois = map.get("CodBolDois");

            const DescParTres = map.get("DescParTres");
            const VlrParTres = map.get("VlrParTres");
            const DatParTres = map.get("DatParTres");
            const CodBolTres = map.get("CodBolTres");

            const DescParQuatro = map.get("DescParQuatro");
            const VlrParQuatro = map.get("VlrParQuatro");
            const DatParQuatro = map.get("DatParQuatro");
            const CodBolQuatro = map.get("CodBolQuatro");

            const DescParCinco = map.get("DescParCinco");
            const VlrParCinco = map.get("VlrParCinco");
            const DatParCinco = map.get("DatParCinco");
            const CodBolCinco = map.get("CodBolCinco");

            const DescParSeis = map.get("DescParSeis");
            const VlrParSeis = map.get("VlrParSeis");
            const DatParSeis = map.get("DatParSeis");
            const CodBolSeis = map.get("CodBolSeis");

            const DescParSete = map.get("DescParSete");
            const VlrParSete = map.get("VlrParSete");
            const DatParSete = map.get("DatParSete");
            const CodBolSete = map.get("CodBolSete");

            const DescParOito = map.get("DescParOito");
            const VlrParOito = map.get("VlrParOito");
            const DatParOito = map.get("DatParOito");
            const CodBolOito = map.get("CodBolOito");

            const DescParNove = map.get("DescParNove");
            const VlrParNove = map.get("VlrParNove");
            const DatParNove = map.get("DatParNove");
            const CodBolNove = map.get("CodBolNove");

            const DescParDez = map.get("DescParDez");
            const VlrParDez = map.get("VlrParDez");
            const DatParDez = map.get("DatParDez");
            const CodBolDez = map.get("CodBolDez");

            const DescParOnze = map.get("DescParOnze");
            const VlrParOnze = map.get("VlrParOnze");
            const DatParOnze = map.get("DatParOnze");
            const CodBolOnze = map.get("CodBolOnze");

            const DescParDoze = map.get("DescParDoze");
            const VlrParDoze = map.get("VlrParDoze");
            const DatParDoze = map.get("DatParDoze");
            const CodBolDoze = map.get("CodBolDoze");

            const TotalPagarPar = map.get("TotalPagarPar");
            const ForPagBanco = map.get("ForPagBanco");
            const ForPagAgencia = map.get("ForPagAgencia");
            const ForPagConta = map.get("ForPagConta");
            const ForPagChavePix = map.get("ForPagChavePix");



            document.getElementById("selectTipFor").value = selectTipFor;
            document.getElementById("selectFormPag").value = selectFormPag;
            document.getElementById("DatSol").setAttribute("value", DatSol);
            document.getElementById("Fornec").setAttribute("value", Fornec);
            document.getElementById("Cnpj").setAttribute("value", Cnpj);
            document.getElementById("Proj").setAttribute("value", Proj);
            document.getElementById("ConFin").setAttribute("value", ConFin);
            document.getElementById("CenCus").setAttribute("value", CenCus);
            document.getElementById("DatPag").setAttribute("value", DatPag);
            document.getElementById("NumNf").setAttribute("value", NumNf);
            document.getElementById("DatPre").setAttribute("value", DatPre);
            document.getElementById("ObsPag").setAttribute("value", ObsPag);

            document.getElementById("DescParUm").setAttribute("value", DescParUm);
            document.getElementById("VlrParUm").setAttribute("value", VlrParUm);
            document.getElementById("DatParUm").setAttribute("value", DatParUm);
            document.getElementById("CodBolUm").setAttribute("value", CodBolUm);

            document.getElementById("DescParDois").setAttribute("value", DescParDois);
            document.getElementById("VlrParDois").setAttribute("value", VlrParDois);
            document.getElementById("DatParDois").setAttribute("value", DatParDois);
            document.getElementById("CodBolDois").setAttribute("value", CodBolDois);

            document.getElementById("DescParTres").setAttribute("value", DescParTres);
            document.getElementById("VlrParTres").setAttribute("value", VlrParTres);
            document.getElementById("DatParTres").setAttribute("value", DatParTres);
            document.getElementById("CodBolTres").setAttribute("value", CodBolTres);

            document.getElementById("DescParQuatro").setAttribute("value", DescParQuatro);
            document.getElementById("VlrParQuatro").setAttribute("value", VlrParQuatro);
            document.getElementById("DatParQuatro").setAttribute("value", DatParQuatro);
            document.getElementById("CodBolQuatro").setAttribute("value", CodBolQuatro);

            document.getElementById("DescParCinco").setAttribute("value", DescParCinco);
            document.getElementById("VlrParCinco").setAttribute("value", VlrParCinco);
            document.getElementById("DatParCinco").setAttribute("value", DatParCinco);
            document.getElementById("CodBolCinco").setAttribute("value", CodBolCinco);

            document.getElementById("DescParSeis").setAttribute("value", DescParSeis);
            document.getElementById("VlrParSeis").setAttribute("value", VlrParSeis);
            document.getElementById("DatParSeis").setAttribute("value", DatParSeis);
            document.getElementById("CodBolSeis").setAttribute("value", CodBolSeis);

            document.getElementById("DescParSete").setAttribute("value", DescParSete);
            document.getElementById("VlrParSete").setAttribute("value", VlrParSete);
            document.getElementById("DatParSete").setAttribute("value", DatParSete);
            document.getElementById("CodBolSete").setAttribute("value", CodBolSete);

            document.getElementById("DescParOito").setAttribute("value", DescParOito);
            document.getElementById("VlrParOito").setAttribute("value", VlrParOito);
            document.getElementById("DatParOito").setAttribute("value", DatParOito);
            document.getElementById("CodBolOito").setAttribute("value", CodBolOito);

            document.getElementById("DescParNove").setAttribute("value", DescParNove);
            document.getElementById("VlrParNove").setAttribute("value", VlrParNove);
            document.getElementById("DatParNove").setAttribute("value", DatParNove);
            document.getElementById("CodBolNove").setAttribute("value", CodBolNove);

            document.getElementById("DescParDez").setAttribute("value", DescParDez);
            document.getElementById("VlrParDez").setAttribute("value", VlrParDez);
            document.getElementById("DatParDez").setAttribute("value", DatParDez);
            document.getElementById("CodBolDez").setAttribute("value", CodBolDez);

            document.getElementById("DescParOnze").setAttribute("value", DescParOnze);
            document.getElementById("VlrParOnze").setAttribute("value", VlrParOnze);
            document.getElementById("DatParOnze").setAttribute("value", DatParOnze);
            document.getElementById("CodBolOnze").setAttribute("value", CodBolOnze);

            document.getElementById("DescParDoze").setAttribute("value", DescParDoze);
            document.getElementById("VlrParDoze").setAttribute("value", VlrParDoze);
            document.getElementById("DatParDoze").setAttribute("value", DatParDoze);
            document.getElementById("CodBolDoze").setAttribute("value", CodBolDoze);

            document.getElementById("TotalPagarPar").setAttribute("value", TotalPagarPar);
            document.getElementById("ForPagBanco").setAttribute("value", ForPagBanco);
            document.getElementById("ForPagAgencia").setAttribute("value", ForPagAgencia);
            document.getElementById("ForPagConta").setAttribute("value", ForPagConta);
            document.getElementById("ForPagChavePix").setAttribute("value", ForPagChavePix);

        }
    });
}

// Essa função é chamada quando o usuário clicar no botão 'Enviar'
function _saveData(data, info) {
    if (!isFormValid()) {
        throw new Error("Ainda falta ser preenchidos alguns campos");
    }

    calculaTotal()
    let newData = {};
    let selectForm = document.getElementById("selectTipFor");
    newData.selectTipFor = selectForm.options[selectForm.selectedIndex].value;

    let selectFormPagamento = document.getElementById("selectFormPag");
    newData.selectFormPag = selectFormPagamento.options[selectFormPagamento.selectedIndex].value;

    newData.DatSol = document.getElementById("DatSol").value;
    newData.Fornec = document.getElementById("Fornec").value;
    newData.Cnpj = document.getElementById("Cnpj").value;
    newData.Proj = document.getElementById("Proj").value;
    newData.ConFin = document.getElementById("ConFin").value;
    newData.CenCus = document.getElementById("CenCus").value;
    newData.DatPag = document.getElementById("DatPag").value;
    newData.NumNf = document.getElementById("NumNf").value;
    newData.DatPre = document.getElementById("DatPre").value;
    newData.ObsPag = document.getElementById("ObsPag").value;

    newData.DescParUm = document.getElementById("DescParUm").value;
    newData.VlrParUm = document.getElementById("VlrParUm").value;
    newData.DatParUm = document.getElementById("DatParUm").value;
    newData.CodBolUm = document.getElementById("CodBolUm").value;

    newData.DescParDois = document.getElementById("DescParDois").value;
    newData.VlrParDois = document.getElementById("VlrParDois").value;
    newData.DatParDois = document.getElementById("DatParDois").value;
    newData.CodBolDois = document.getElementById("CodBolDois").value;

    newData.DescParTres = document.getElementById("DescParTres").value;
    newData.VlrParTres = document.getElementById("VlrParTres").value;
    newData.DatParTres = document.getElementById("DatParTres").value;
    newData.CodBolTres = document.getElementById("CodBolTres").value;

    newData.DescParQuatro = document.getElementById("DescParQuatro").value;
    newData.VlrParQuatro = document.getElementById("VlrParQuatro").value;
    newData.DatParQuatro = document.getElementById("DatParQuatro").value;
    newData.CodBolQuatro = document.getElementById("CodBolQuatro").value;

    newData.DescParCinco = document.getElementById("DescParCinco").value;
    newData.VlrParCinco = document.getElementById("VlrParCinco").value;
    newData.DatParCinco = document.getElementById("DatParCinco").value;
    newData.CodBolCinco = document.getElementById("CodBolCinco").value;

    newData.DescParSeis = document.getElementById("DescParSeis").value;
    newData.VlrParSeis = document.getElementById("VlrParSeis").value;
    newData.DatParSeis = document.getElementById("DatParSeis").value;
    newData.CodBolSeis = document.getElementById("CodBolSeis").value;

    newData.DescParSete = document.getElementById("DescParSete").value;
    newData.VlrParSete = document.getElementById("VlrParSete").value;
    newData.DatParSete = document.getElementById("DatParSete").value;
    newData.CodBolSete = document.getElementById("CodBolSete").value;

    newData.DescParOito = document.getElementById("DescParOito").value;
    newData.VlrParOito = document.getElementById("VlrParOito").value;
    newData.DatParOito = document.getElementById("DatParOito").value;
    newData.CodBolOito = document.getElementById("CodBolOito").value;

    newData.DescParNove = document.getElementById("DescParNove").value;
    newData.VlrParNove = document.getElementById("VlrParNove").value;
    newData.DatParNove = document.getElementById("DatParNove").value;
    newData.CodBolNove = document.getElementById("CodBolNove").value;

    newData.DescParDez = document.getElementById("DescParDez").value;
    newData.VlrParDez = document.getElementById("VlrParDez").value;
    newData.DatParDez = document.getElementById("DatParDez").value;
    newData.CodBolDez = document.getElementById("CodBolDez").value;

    newData.DescParOnze = document.getElementById("DescParOnze").value;
    newData.VlrParOnze = document.getElementById("VlrParOnze").value;
    newData.DatParOnze = document.getElementById("DatParOnze").value;
    newData.CodBolOnze = document.getElementById("CodBolOnze").value;

    newData.DescParDoze = document.getElementById("DescParDoze").value;
    newData.VlrParDoze = document.getElementById("VlrParDoze").value;
    newData.DatParDoze = document.getElementById("DatParDoze").value;
    newData.CodBolDoze = document.getElementById("CodBolDoze").value;

    newData.TotalPagarPar = document.getElementById("TotalPagarPar").value;
    newData.ForPagBanco = document.getElementById("ForPagBanco").value;
    newData.ForPagAgencia = document.getElementById("ForPagAgencia").value;
    newData.ForPagConta = document.getElementById("ForPagConta").value;
    newData.ForPagChavePix = document.getElementById("ForPagChavePix").value;

    console.log(newData);
    return {
        formData: newData,
    };
}

function _rollback(data, info) {
    /*data: ({
         error: obj
         processInstanceId: int
      })*/
}


function isFormValid() {
    var retornaResultado = 0
    //--------------------------------------------------TIPO DA REQUISIÇÃO--------------------------------------------------
    //Tipo de Formulario
    var isNullSelectTipFor = document.getElementById("selectTipFor").value;
    if ((isNullSelectTipFor == '') || (isNullSelectTipFor == 'Selecione o tipo do formulário')) {
        document.getElementById("selectTipFor").setAttribute("class", "form-select is-invalid");
    }
    if ((isNullSelectTipFor != '') && (isNullSelectTipFor != 'Selecione o tipo do formulário')) {
        document.getElementById("selectTipFor").setAttribute("class", "form-select is-valid");
        retornaResultado++
    }

    //Data Solicitação
    var isNullDatSol = document.getElementById("DatSol").value;
    if (isNullDatSol == '') {
        document.getElementById("DatSol").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
    } else {
        document.getElementById("DatSol").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
        retornaResultado++
    }

    //Fornecedor
    var isNullFornec = document.getElementById("Fornec").value;
    if (isNullFornec == '') {
        document.getElementById("Fornec").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("Fornec").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }
    //CNPJ
    var isNullCnpj = document.getElementById("Cnpj").value;
    if (isNullCnpj == '') {
        document.getElementById("Cnpj").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("Cnpj").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }

    //Projeto
    var isNullProj = document.getElementById("Proj").value;
    if (isNullProj == '') {
        document.getElementById("Proj").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("Proj").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }

    //Conta Financeira
    var isNullConFin = document.getElementById("ConFin").value;
    if (isNullConFin == '') {
        document.getElementById("ConFin").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("ConFin").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }

    //Centro de Custo
    var isNullCenCus = document.getElementById("CenCus").value;
    if (isNullCenCus == '') {
        document.getElementById("CenCus").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
    } else {
        document.getElementById("CenCus").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        retornaResultado++
    }

    //--------------------------------------------------DADOS PAGAMENTO--------------------------------------------------
    //Data Pagamento
    var isNullDatPag = document.getElementById("DatPag").value;
    if (isNullDatPag == '') {
        document.getElementById("DatPag").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
    } else {
        document.getElementById("DatPag").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
        retornaResultado++
    }

    //Número da NF
    var isNullNumNf = document.getElementById("NumNf").value;
    if (isNullNumNf == '') {
        document.getElementById("NumNf").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
    } else {
        document.getElementById("NumNf").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
        retornaResultado++
    }

    //Data Prevista Recebimento NF
    var isNullDatPre = document.getElementById("DatPre").value;
    if (isNullDatPre == '') {
        document.getElementById("DatPre").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
    } else {
        document.getElementById("DatPre").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
        retornaResultado++
    }

    //Observação
    document.getElementById("ObsPag").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
    retornaResultado++

    //--------------------------------------------------FORMA DO PAGAMENTO--------------------------------------------------
    //Forma de Pagamento
    var isNullSelectFormPag = document.getElementById("selectFormPag").value;
    if ((isNullSelectFormPag == '') || (isNullSelectFormPag == 'Selecione a Forma de Pagamento')) {
        document.getElementById("selectFormPag").setAttribute("class", "form-select is-invalid");
    }
    if ((isNullSelectFormPag != '') && (isNullSelectFormPag != 'Selecione a Forma de Pagamento')) {
        document.getElementById("selectFormPag").setAttribute("class", "form-select is-valid");
        retornaResultado++
    }

    if (document.getElementById("selectFormPag").value == 'Pix') {

        document.getElementById("ForPagBanco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("ForPagAgencia").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("ForPagConta").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");

        var isNullForPagChavePix = document.getElementById("ForPagChavePix").value;
        if (isNullForPagChavePix == '') {
            document.getElementById("ForPagChavePix").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("ForPagChavePix").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("selectFormPag").value == 'Depósito') {

        document.getElementById("ForPagChavePix").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("CodBolDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");

        var isNullForPagBanco = document.getElementById("ForPagBanco").value;
        if (isNullForPagBanco == '') {
            document.getElementById("ForPagBanco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("ForPagBanco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }

        var isNullForPagAgencia = document.getElementById("ForPagAgencia").value;
        if (isNullForPagAgencia == '') {
            document.getElementById("ForPagAgencia").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("ForPagAgencia").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }

        var isNullForPagConta = document.getElementById("ForPagConta").value;
        if (isNullForPagConta == '') {
            document.getElementById("ForPagConta").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("ForPagConta").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("selectFormPag").value == 'Boleto') {

        document.getElementById("ForPagBanco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("ForPagAgencia").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("ForPagConta").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");
        document.getElementById("ForPagChavePix").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required");


        if (document.getElementById("VlrParUm").value != 0) {
            var isNullCodBolUm = document.getElementById("CodBolUm").value;
            if (isNullCodBolUm == '') {
                document.getElementById("CodBolUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParDois").value != 0) {
            var isNullCodBolDois = document.getElementById("CodBolDois").value;
            if (isNullCodBolDois == '') {
                document.getElementById("CodBolDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParTres").value != 0) {
            var isNullCodBolTres = document.getElementById("CodBolTres").value;
            if (isNullCodBolTres == '') {
                document.getElementById("CodBolTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParQuatro").value != 0) {
            var isNullCodBolQuatro = document.getElementById("CodBolQuatro").value;
            if (isNullCodBolQuatro == '') {
                document.getElementById("CodBolQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParCinco").value != 0) {
            var isNullCodBolCinco = document.getElementById("CodBolCinco").value;
            if (isNullCodBolCinco == '') {
                document.getElementById("CodBolCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParSeis").value != 0) {
            var isNullCodBolSeis = document.getElementById("CodBolSeis").value;
            if (isNullCodBolSeis == '') {
                document.getElementById("CodBolSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParSete").value != 0) {
            var isNullCodBolSete = document.getElementById("CodBolSete").value;
            if (isNullCodBolSete == '') {
                document.getElementById("CodBolSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParOito").value != 0) {
            var isNullCodBolOito = document.getElementById("CodBolOito").value;
            if (isNullCodBolOito == '') {
                document.getElementById("CodBolOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParNove").value != 0) {
            var isNullCodBolNove = document.getElementById("CodBolNove").value;
            if (isNullCodBolNove == '') {
                document.getElementById("CodBolNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParDez").value != 0) {
            var isNullCodBolDez = document.getElementById("CodBolDez").value;
            if (isNullCodBolDez == '') {
                document.getElementById("CodBolDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }

        if (document.getElementById("VlrParOnze").value != 0) {
            var isNullCodBolOnze = document.getElementById("CodBolOnze").value;
            if (isNullCodBolOnze == '') {
                document.getElementById("CodBolOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }
        if (document.getElementById("VlrParDoze").value != 0) {
            var isNullCodBolDoze = document.getElementById("CodBolDoze").value;
            if (isNullCodBolDoze == '') {
                document.getElementById("CodBolDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
            } else {
                document.getElementById("CodBolDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
                retornaResultado++
            }
        }
    }
    //--------------------------------------------------DESCRIÇÃO DE PAGAMENTO / PARCELAMENTO--------------------------------------------------  
    if (document.getElementById("VlrParUm").value == 0) {
        //Valor Parcela 1
        document.getElementById("VlrParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        //Descrição Parcela 1
        var isNullDescParUm = document.getElementById("DescParUm").value;
        if (isNullDescParUm == '') {
            document.getElementById("DescParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 1
        var isNullDatParUm = document.getElementById("DatParUm").value;
        if (isNullDatParUm == '') {
            document.getElementById("DatParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }



    if (document.getElementById("VlrParUm").value != 0) {
        //Valor Parcela 1
        document.getElementById("VlrParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 1
        var isNullDescParUm = document.getElementById("DescParUm").value;
        if (isNullDescParUm == '') {
            document.getElementById("DescParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 1
        var isNullDatParUm = document.getElementById("DatParUm").value;
        if (isNullDatParUm == '') {
            document.getElementById("DatParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParUm").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }


    if (document.getElementById("VlrParDois").value != 0) {
        //Valor Parcela 2
        document.getElementById("VlrParDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 2
        var isNullDescParDois = document.getElementById("DescParDois").value;
        if (isNullDescParDois == '') {
            document.getElementById("DescParDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 2
        var isNullDatParDois = document.getElementById("DatParDois").value;
        if (isNullDatParDois == '') {
            document.getElementById("DatParDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParDois").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParTres").value != 0) {
        //Valor Parcela 3
        document.getElementById("VlrParTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 3
        var isNullDescParTres = document.getElementById("DescParTres").value;
        if (isNullDescParTres == '') {
            document.getElementById("DescParTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 3
        var isNullDatParTres = document.getElementById("DatParTres").value;
        if (isNullDatParTres == '') {
            document.getElementById("DatParTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParTres").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParQuatro").value != 0) {
        //Valor Parcela 4
        document.getElementById("VlrParQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 4
        var isNullDescParQuatro = document.getElementById("DescParQuatro").value;
        if (isNullDescParQuatro == '') {
            document.getElementById("DescParQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 4
        var isNullDatParQuatro = document.getElementById("DatParQuatro").value;
        if (isNullDatParQuatro == '') {
            document.getElementById("DatParQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParQuatro").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParCinco").value != 0) {
        //Valor Parcela 5
        document.getElementById("VlrParCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 5
        var isNullDescParCinco = document.getElementById("DescParCinco").value;
        if (isNullDescParCinco == '') {
            document.getElementById("DescParCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 5
        var isNullDatParCinco = document.getElementById("DatParCinco").value;
        if (isNullDatParCinco == '') {
            document.getElementById("DatParCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParCinco").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParSeis").value != 0) {
        //Valor Parcela 6
        document.getElementById("VlrParSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 6
        var isNullDescParSeis = document.getElementById("DescParSeis").value;
        if (isNullDescParSeis == '') {
            document.getElementById("DescParSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 6
        var isNullDatParSeis = document.getElementById("DatParSeis").value;
        if (isNullDatParSeis == '') {
            document.getElementById("DatParSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParSeis").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParSete").value != 0) {
        //Valor Parcela 7
        document.getElementById("VlrParSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 7
        var isNullDescParSete = document.getElementById("DescParSete").value;
        if (isNullDescParSete == '') {
            document.getElementById("DescParSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 7
        var isNullDatParSete = document.getElementById("DatParSete").value;
        if (isNullDatParSete == '') {
            document.getElementById("DatParSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParSete").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParOito").value != 0) {
        //Valor Parcela 8
        document.getElementById("VlrParOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 8
        var isNullDescParOito = document.getElementById("DescParOito").value;
        if (isNullDescParOito == '') {
            document.getElementById("DescParOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 8
        var isNullDatParOito = document.getElementById("DatParOito").value;
        if (isNullDatParOito == '') {
            document.getElementById("DatParOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParOito").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParNove").value != 0) {
        //Valor Parcela 9
        document.getElementById("VlrParNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 9
        var isNullDescParNove = document.getElementById("DescParNove").value;
        if (isNullDescParNove == '') {
            document.getElementById("DescParNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 9
        var isNullDatParNove = document.getElementById("DatParNove").value;
        if (isNullDatParNove == '') {
            document.getElementById("DatParNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParNove").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParDez").value != 0) {
        //Valor Parcela 10
        document.getElementById("VlrParDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 10
        var isNullDescParDez = document.getElementById("DescParDez").value;
        if (isNullDescParDez == '') {
            document.getElementById("DescParDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 10
        var isNullDatParDez = document.getElementById("DatParDez").value;
        if (isNullDatParDez == '') {
            document.getElementById("DatParDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParDez").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    if (document.getElementById("VlrParOnze").value != 0) {
        //Valor Parcela 11
        document.getElementById("VlrParOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 11
        var isNullDescParOnze = document.getElementById("DescParOnze").value;
        if (isNullDescParOnze == '') {
            document.getElementById("DescParOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 11
        var isNullDatParOnze = document.getElementById("DatParOnze").value;
        if (isNullDatParOnze == '') {
            document.getElementById("DatParOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParOnze").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }
    if (document.getElementById("VlrParDoze").value != 0) {
        //Valor Parcela 12
        document.getElementById("VlrParDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
        //Descrição Parcela 12
        var isNullDescParDoze = document.getElementById("DescParDoze").value;
        if (isNullDescParDoze == '') {
            document.getElementById("DescParDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-invalid");
        } else {
            document.getElementById("DescParDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-scope ng-empty ng-valid-pattern ng-valid ng-valid-required is-valid");
            retornaResultado++
        }
        //Data Parcela 12
        var isNullDatParDoze = document.getElementById("DatParDoze").value;
        if (isNullDatParDoze == '') {
            document.getElementById("DatParDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-invalid");
        } else {
            document.getElementById("DatParDoze").setAttribute("class", "form-control ng-pristine ng-untouched ng-isolate-scope ng-empty ng-valid-pattern ng-valid-mask ng-valid ng-valid-required ng-valid-date is-valid");
            retornaResultado++
        }
    }

    //--------------------------------------------------RETORNO FUNÇÃO--------------------------------------------------  
    var TotalCampos = 0
    if ((document.getElementById("selectFormPag").value == 'Pix') || (document.getElementById("selectFormPag").value == 'Depósito')) {
        if (document.getElementById("selectFormPag").value == 'Depósito') {
            TotalCampos = 15
        } else {
            TotalCampos = 13
        }

        TotalCampos = TotalCampos + 3

        if (document.getElementById("VlrParDois").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParTres").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParQuatro").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParCinco").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParSeis").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParSete").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParOito").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParNove").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParDez").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParOnze").value != 0) {
            TotalCampos = TotalCampos + 3
        }
        if (document.getElementById("VlrParDoze").value != 0) {
            TotalCampos = TotalCampos + 3
        }

    }

    if (document.getElementById("selectFormPag").value == 'Boleto') {

        TotalCampos = 12

        TotalCampos = TotalCampos + 4

        if (document.getElementById("VlrParDois").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParTres").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParQuatro").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParCinco").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParSeis").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParSete").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParOito").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParNove").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParDez").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParOnze").value != 0) {
            TotalCampos = TotalCampos + 4
        }
        if (document.getElementById("VlrParDoze").value != 0) {
            TotalCampos = TotalCampos + 4
        }

    }

    console.log(TotalCampos)
    console.log(retornaResultado)
    if (TotalCampos == retornaResultado) {
        return true
    }
}

// Disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();
