const mod = {};

mod.abs = function (a) {
    if(a>0){
        return a;
    }
    else{
        return a*-1;
    }
};

mod.circle = function(r){
    return 3.14*r*r;
};


module.exports = mod;
