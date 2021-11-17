function inserirLinhaTabela() {



    if (document.getElementById("VlrParUm").value == 0) {
        let eDois = document.getElementById('parcela1');

        eDois.style.display = 'flex';
        calculaTotal()

        //return 0
    }
    if (document.getElementById("VlrParUm").value != 0) {
        let eDois = document.getElementById('parcela2');

        eDois.style.display = 'flex';
        calculaTotal()

        //return 0

    } if (document.getElementById("VlrParDois").value != 0) {
        let eDois = document.getElementById('parcela3');

        eDois.style.display = 'flex';
        calculaTotal()

        //return 0

    }
}

function calculaTotal() {

    var VlrTot = 0;

    var VlrTot1 = document.getElementById("VlrParUm").value
    var VlrTot2 = document.getElementById("VlrParDois").value
    var VlrTot3 = document.getElementById("VlrParTres").value

    if (VlrTot1 != 0) {
        VlrTot = parseFloat(VlrTot1)
    }if ((VlrTot1 != 0) && (VlrTot2 != 0)) {
        VlrTot = parseFloat(VlrTot1) + parseFloat(VlrTot2)
    }if ((VlrTot1 != 0) && (VlrTot2 != 0) && (VlrTot3 != 0)) {
        VlrTot = parseFloat(VlrTot1) + parseFloat(VlrTot2) + parseFloat(VlrTot3)
    }
    document.getElementById("TotalPagarPar").value = VlrTot

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
            const DatSol = map.get("DatSol");
            const Fornec = map.get("Fornec");
            const Cnpj = map.get("Cnpj");
            const Proj = map.get("Proj");
            const ConFin = map.get("ConFin");
            const CenCus = map.get("CenCus");
           // const VlrTot = map.get("VlrTot");
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
            const TotalPagarPar = map.get("TotalPagarPar");
            const ForPagBanco = map.get("ForPagBanco");
            const ForPagAgencia = map.get("ForPagAgencia");
            const ForPagConta = map.get("ForPagConta");
            const ForPagCodBarBoleto = map.get("ForPagCodBarBoleto");
            const ForPagChavePix = map.get("ForPagChavePix");
           /* const NomSuper = map.get("NomSuper");
            const SupAproJusti = map.get("SupAproJusti");
            const NomDir = map.get("NomDir");
            const DirAproJusti = map.get("DirAproJusti");*/


            document.getElementById("selectTipFor").setAttribute("value", selectTipFor);
            document.getElementById("DatSol").setAttribute("value", DatSol);
            document.getElementById("Fornec").setAttribute("value", Fornec);
            document.getElementById("Cnpj").setAttribute("value", Cnpj);
            document.getElementById("Proj").setAttribute("value", Proj);
            document.getElementById("ConFin").setAttribute("value", ConFin);
            document.getElementById("CenCus").setAttribute("value", CenCus);
           // document.getElementById("VlrTot").setAttribute("value", VlrTot);
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
            document.getElementById("TotalPagarPar").setAttribute("value", TotalPagarPar);
            document.getElementById("ForPagBanco").setAttribute("value", ForPagBanco);
            document.getElementById("ForPagAgencia").setAttribute("value", ForPagAgencia);
            document.getElementById("ForPagConta").setAttribute("value", ForPagConta);
            document.getElementById("ForPagCodBarBoleto").setAttribute("value", ForPagCodBarBoleto);
            document.getElementById("ForPagChavePix").setAttribute("value", ForPagChavePix);
          /*  document.getElementById("NomSuper").setAttribute("value", NomSuper);
            document.getElementById("SupAproJusti").setAttribute("value", SupAproJusti);
            document.getElementById("NomDir").setAttribute("value", NomDir);
            document.getElementById("DirAproJusti").setAttribute("value", DirAproJusti);*/
        }
    });
}

// Essa função é chamada quando o usuário clicar no botão 'Enviar'
function _saveData(data, info) {
    /*if (!isFormValid()) {
        document.getElementById("gridCheck").setAttribute("class", "form-check-input is-invalid");
        throw new Error("Os dados informados não são válidos.");
    }*/

    calculaTotal()
    let newData = {};
    let selectForm = document.getElementById("selectTipFor");
    newData.selectTipFor = selectForm.options[selectForm.selectedIndex].value;

    newData.DatSol = document.getElementById("DatSol").value;
    newData.Fornec = document.getElementById("Fornec").value;
    newData.Cnpj = document.getElementById("Cnpj").value;
    newData.Proj = document.getElementById("Proj").value;
    newData.ConFin = document.getElementById("ConFin").value;
    newData.CenCus = document.getElementById("CenCus").value;
   // newData.VlrTot = document.getElementById("VlrTot").value;
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
    newData.TotalPagarPar = document.getElementById("TotalPagarPar").value;
    newData.ForPagBanco = document.getElementById("ForPagBanco").value;
    newData.ForPagAgencia = document.getElementById("ForPagAgencia").value;
    newData.ForPagConta = document.getElementById("ForPagConta").value;
    newData.ForPagCodBarBoleto = document.getElementById("ForPagCodBarBoleto").value;
    newData.ForPagChavePix = document.getElementById("ForPagChavePix").value;
  /*  newData.NomSuper = document.getElementById("NomSuper").value;
    newData.SupAproJusti = document.getElementById("SupAproJusti").value;
    newData.NomDir = document.getElementById("NomDir").value;
    newData.DirAproJusti = document.getElementById("DirAproJusti").value;*/

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

/*function isFormValid() {
    const isChecked = document.getElementById("gridCheck").checked;
    return isChecked;
}*/

// Handler de eventos do checkbox
/*function onSelect() {
    const isNull = document.getElementById("gridCheck").checked;
    if (isChecked) {
        document.getElementById("gridCheck").setAttribute("class", "form-check-input is-valid");
    } 
}*/

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
