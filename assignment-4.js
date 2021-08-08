//problem-1
/*function seerToMon(seer) {
    if (typeof seer !='number') {
       return 'please input integer value!!!' ;
    }
    if (seer<1) {
        return 'please input positive value!!!!';
        
    }
  const  Mon= seer/40;
  return Mon;
    
}

const result=seerToMon(100);
console.log(result);

*/

//problem-2

/* 
function totalSales(shirt_quantity,pant_quantity,shoe_quantity) {
    if (typeof shirt_quantity  !='number') {
        return 'please input integer value of shirt_quantity';
        
    }
    else if (typeof pant_quantity  !='number') {
        return 'please input integer value of pant_quantity ';
        
    }
    else if (typeof shoe_quantity  !='number') {
        return 'please input integer value of shoe_quantity';
        
    }
    if (shirt_quantity<1) {
        return ' please input positive value of shirt_quantity';
        
    }
   else if (pant_quantity<1) {
        return ' please input positive value of pant_quantity';
        
    }
    else if (shoe_quantity<1) {
        return ' please input positive value of shirt_quantity of shoe_quantity';
        
    }
  const  shirt_price=100;
  const   pant_price=200;
  const   shoe_price=500;
 let total_shirt_price=shirt_quantity*shirt_price;
 let total_pant_price=pant_quantity*pant_price;
 let total_shoe_price=shoe_quantity*shoe_price;

 totalSales=total_shirt_price+total_pant_price+ total_shoe_price;
 return totalSales;

    
}

const result=totalSales(1,2,3);
console.log(result);

*/

//problem-3


/*
 function deliveryCost(tshirt_delivery_quantity) {
    if (typeof tshirt_delivery_quantity !='number' ) {
        return 'please input integer value !!!!!';
        
    }
    else if (tshirt_delivery_quantity<1) {
        return 'please input positive integer value !!!!!';
        
    }
    if (tshirt_delivery_quantity<=100) {
        tshirt_delivery_cost=100*tshirt_delivery_quantity;
        return tshirt_delivery_cost;
        
    }
    else if (100 <= tshirt_delivery_quantity && tshirt_delivery_quantity <= 200) {
            const first_cost=100*100;
            const rest_cost=80*(tshirt_delivery_quantity-100);
          
            tshirt_delivery_cost=rest_cost+first_cost;

        return tshirt_delivery_cost;
        
    }
    else if (tshirt_delivery_quantity >200) {
        const first_cost=100*100;
        const mid_rest_cost=80*100;
        const last_rest_cost=50*(tshirt_delivery_quantity-200);
        
         tshirt_delivery_cost=first_cost+mid_rest_cost+last_rest_cost;

     return tshirt_delivery_cost;
           
          
    }
    
}

const result=deliveryCost(0);
console.log(result);

*/