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