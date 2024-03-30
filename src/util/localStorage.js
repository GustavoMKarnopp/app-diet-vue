/**
 * setItem => key -- recebe o nome do storage e value -- recebe os valores de JSON.stringfy({})
 */
    export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    }
    
    export function getItem(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    
    export function removeItem(key) {
        localStorage.removeItem(key);
    }

    export function setItemLocalSession(key, newValue) {
        // Recupera o valor atual do localStorage para a chave específica
        const currentValue = localStorage.getItem(key);
        
        let valueToUpdate = {};
      
        if (currentValue) {
          // Se já existe algo armazenado nessa chave, converte de volta para objeto
          valueToUpdate = JSON.parse(currentValue);
        }
      
        // Atualiza o objeto com o novo valor, mantendo os valores existentes
        valueToUpdate = { ...valueToUpdate, ...newValue };
      
        // Salva o objeto atualizado de volta ao localStorage, convertendo-o para string
        localStorage.setItem(key, JSON.stringify(valueToUpdate));
      }