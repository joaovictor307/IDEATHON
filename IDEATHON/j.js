function verificarPH() {
      const vinagre = document.getElementById('vinagre').checked;
      const bicarbonato = document.getElementById('bicarbonato').checked;
      const phValue = parseFloat(document.getElementById('phValue').value);
      let resultado = "";

      // Caso 1: Usuário informou valor da tira de pH
      if (!isNaN(phValue)) {
        if (phValue < 5.5) {
          resultado = `pH = ${phValue} → Solo MUITO ÁCIDO. Recomendado corrigir com calcário.`;
        } else if (phValue >= 5.5 && phValue < 6.5) {
          resultado = `pH = ${phValue} → Solo ÁCIDO, mas adequado para culturas como café, morango e batata.`;
        } else if (phValue >= 6.5 && phValue <= 7.5) {
          resultado = `pH = ${phValue} → Solo NEUTRO. Ideal para a maioria das culturas.`;
        } else {
          resultado = `pH = ${phValue} → Solo ALCALINO. Pode prejudicar algumas culturas. Avaliar correção.`;
        }
      }
      // Caso 2: Teste caseiro com vinagre/bicarbonato
      else if (vinagre && !bicarbonato) {
        resultado = "Reagiu com vinagre → Solo ALCALINO (pH acima de 7).";
      } else if (!vinagre && bicarbonato) {
        resultado = "Reagiu com bicarbonato → Solo ÁCIDO (pH abaixo de 7).";
      } else if (!vinagre && !bicarbonato) {
        resultado = "Nenhuma reação → Solo NEUTRO (pH em torno de 7).";
      } else {
        resultado = "Teste inconclusivo. Marque apenas uma reação ou informe o pH da tira.";
      }

      document.getElementById('resultado').innerText = resultado;
    }