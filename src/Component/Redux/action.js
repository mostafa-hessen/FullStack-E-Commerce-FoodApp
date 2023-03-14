export const filter=(payload)=>{
    return {
        type: "FILER",
        payload
    }
}


export const authStatuesForUser=(payload)=>{
    return {
        type: "AUTH-USER",
        payload
    }
}



export const authStatuesForCooker=(payload)=>{
    return {
        type: "AUTH-COOKER",
        payload
    }
}


export const totalPrice=(payload)=>{
    return {
        type: "TOTAL-PRICE",
        payload
    }
}
export const myCartOrderAction=(payload)=>{
    return {
        type: "MYCART-ORDERES",
        payload
    }
}


export const myAllorders=(payload)=>{
    return {
        type: "MYORDERS",
        payload
    }
}