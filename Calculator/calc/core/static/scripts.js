function val(valnum){
    if (valnum == 'add'){
        valnum = '+'
    }else if(valnum == 'sub'){
        valnum = '-'
    }else if(valnum == 'mul'){
        valnum = '*'
    }else if(valnum == 'divi'){
        valnum = '/'
    }else if(valnum == 'mod'){
        valnum = '%'
    }
    var current = (document.getElementById("screens").value+valnum)
    document.getElementById("screens").value+=valnum
    var len = current.length
    if (current[len-2]== '-' || '+' || '*' || '/' || '%'){
        var cur = document.getElementById("screens").value
        res = eval(cur)
        document.getElementById("screens2").value = res
    }
    
}
function clears(){
    document.getElementById("screens").value="";
    document.getElementById("screens2").value="";
}
function result(){
    document.getElementById("screens").value = res
    document.getElementById("screens2").value = " "
}