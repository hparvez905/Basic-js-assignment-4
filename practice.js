
function deliveryCost(tshirt_delivery_quantity) {
    if (tshirt_delivery_quantity<=100) {
        tshirt_delivery_cost=100*tshirt_delivery_quantity;
        return tshirt_delivery_cost;
        
    }
    else if (100<= tshirt_delivery_quantity && tshirt_delivery_quantity <=201) {
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

const result=deliveryCost(210);
console.log(result);