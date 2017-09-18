var e1 = {
    id:1001,ename:"Dev",job:"Architect",salary:12500};

console.log(e1.id + " " + e1.ename + " " + e1.job + " " + e1.salary) ; 

var product = {
    id : 1001 , 
    prod : "Apple Iphone 8" , 
    price : 75000 , 
    comp : "Apple"
}; 

console.log(product.id + " " + product.prod + " " + product.price + " " + product.comp + " ")

var employees = [
    {id:1001,ename:"Dev",job:"Consultant",salary:12500},
    {id:1002,ename:"Fattu",job:"Comedian",salary:11500},
    {id:1003,ename:"Monika",job:"Actress",salary:10000},
    {id:1004,ename:"Nitin",job:"Footballer",salary:13500},
    {id:1005,ename:"Bhandari",job:"Servant",salary:500},
];

    employees.forEach(function(e1)
    {   
        console.log(e1.id + " " + e1.ename + " " + e1.job + " " + e1.salary) ; 
    }) ;