({
	everyPerm : function(component, helper) {
        var output = new Array();
        
        var a = component.get("v.numbers");
        //var printString = [];
        console.log(typeof a);
        var copyArray = new Array();
        //copyArray.push("Nice");
        //console.log(copyArray.toString());
        
        for(var i = 0; i < a.length; i++){
            var copy = a;
            var tmp = copy[i];
            copy[i] = copy[0];
            copy[0] = tmp;
            console.log(copy[i])
            this.recursive(copy, 1, output);
        }
        component.set("v.perm", output);
        console.log(output);
	},
    
    recursive : function(a, i, o){
        console.log(a.toString());
        //console.log(typeof printString);
        o.push(a.toString());
        if(a.length-1 > i){
            var tmp = a[i];
            a[i] = a[i+1];
            a[i+1] = tmp;
            this.recursive(a, i+1, o);
        }
    }
})