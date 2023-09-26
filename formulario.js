        function validarFormulario() {
            // Obter os valores dos campos A e B
            const campoA = parseInt(document.getElementById("campoA").value)
            const campoB = parseInt(document.getElementById("campoB").value)

            // Verificar se B é maior que A
            if (campoB > campoA) {
                // Exibir mensagem positiva
                document.getElementById("mensagem").innerHTML = "Formulário válido. B é maior que A.";
            } else {
                // Exibir mensagem negativa
                document.getElementById("mensagem").innerHTML = "Formulário inválido. B deve ser maior que A.";
            }

            // Impedir que o formulário seja enviado
            return false;
        }