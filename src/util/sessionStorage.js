/**
 * setItem => key -- recebe o nome do storage e value -- recebe os valores de JSON.stringfy({})
 */
    export function setItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
    }
    
    export function getItem(key) {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    
    export function removeItem(key) {
        sessionStorage.removeItem(key);
    }