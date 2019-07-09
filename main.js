function isNumInRange (start, end) {
    if(start>=1 && end<=1000){
        return true;
    }else{
        return false;
    }
}
function isStartSmallerOrEqualEnd(start,end){
    return start<=end;
}
function CreateMultiplyTableTest(start,end,isSmall,isInRange){
    if(isSmall==false){
        return null;
    }
    if(isInRange==false){
        return "Number out of range";
    }
    var result=[];
    var result_child=[];
    for(var i=start;i<=end;i++){
        for(var j=start;j<=i;j++){
            result_child.push(j+"*"+i+"="+(i*j));
        }
        result.push(result_child.join(' '));
        result_child=[];
    }
    return result.join('\n');
    
}

module.exports = {
    isNumInRange,
    isStartSmallerOrEqualEnd,
    CreateMultiplyTableTest  
}
