function receivesAFunction(cbf){
    cbf();
}

function returnsANamedFunction(){
    function iHaveName(){
        1+1;
    }
    return iHaveName;
}

function returnsAnAnonymousFunction(){
    return function(){
        1+1;
    }
}