import Vue from 'vue';
import moment from 'moment';

let lang = localStorage.getItem('lang') || 'pt-BR'
moment.locale(lang.toLowerCase());
Vue.prototype.$moment = moment

Vue.filter('real', function(v) {
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    let preco = formatter.format(v)

    return preco
});

Vue.filter('moeda', function(v) {
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    let preco = formatter.format(v).split(',')

    return preco[0]
});

Vue.filter('centavos', function(v) {
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    let preco = formatter.format(v).split(',')

    return preco[1]
});

Vue.filter('moedaDolar', function(v) {
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });
    return formatter.format(v);
});

Vue.filter('dia', function(v) {
    let res = moment(v).format('DD')
    return res
});

Vue.filter('mesano', function(v) {
    let res = moment(v).format('MM/YYYY')
    return res
});

Vue.filter('hora', function(v) {
    let res = moment(v).format('LT')
    return res
});

Vue.filter('data',function(v){
    let res = moment(v).format('DD/MM/YYYY')
    return res
});
Vue.filter('date',function(v){
    let res = moment(v).format('DD.MM.YYYY')
    return res
});

Vue.filter('data_string',function(v){
    let res = moment(v).format('ll')
    return res
});

Vue.filter('data_hora',function(v){
    let res = moment(v).format('LLL')
    return res
});

Vue.filter('uppercase', function(v) {
    if(v){
        return v.toUpperCase();
    }
    return '[NAME_ESTATIUM_NO_PARAM]'
})

Vue.filter('lowercase', function(v) {
    return v.toString().toLowerCase();
})

Vue.filter('trim', function(v) {
    return v.toString().trim();
})

Vue.filter('inicial', function(v) {
    return v.toString().charAt(0);
})

Vue.filter('removeLetras', function(v) {
    return v.toString().replace(/\D+/g, '');
})

Vue.filter('removeAcentos', function(v) {
    return v.toString().normalize("NFD").replace(/[^a-zA-Zs]/g, "");
})

Vue.filter('tamanho', function(v) {
    return v.toString().length;
})

Vue.filter('formatDate', function(v) {
    var data = v

    if(typeof data == 'string' && data !== undefined) {
        return (
        data.substring(8, 10) +
        '/' +
        data.substring(5, 7) +
        '/' +
        data.substring(0, 4)
        )
    }

    if(typeof data == 'object' && data !== undefined) {
        return (
        data[0].substring(8, 10) +
        '/' +
        data[0].substring(5, 7) +
        '/' +
        data[0].substring(0, 4)
        )
    }

    return    
})

Vue.filter('formatDateHour', function(v) {

    var teste = v

    if(typeof teste == 'string' && teste !== undefined) {
        return (
        teste.substring(8, 10) +
        '/' +
        teste.substring(5, 7) +
        '/' +
        teste.substring(0, 4) +
        ' - ' +
        teste.substring(11, 16)
        )
    }

    if(typeof teste == 'object' && teste !== undefined) {
        return (
        teste[0].substring(8, 10) +
        '/' +
        teste[0].substring(5, 7) +
        '/' +
        teste[0].substring(0, 4) +
        ' - ' +
        teste[0].substring(11, 16)
        )
    }

    return
    
})
