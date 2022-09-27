export const addItemCart =(bag,product)=>{
   const exist = bag.find(item=>item.id===product.id);
        console.log(exist);
   if(exist){
    return bag.map(item=>item.id === exist.id ? {
        ...item,
        quantity:item.quantity + 1,
    }: item
    )
   }
   return [...bag,{ ...product ,quantity:1}]
}
