const InitialValue1 = {
    currentFilter:"all"
  }
   
  

  // ====== Filter Item ======
  
  export  function FilterItem  ( state =InitialValue1,action) {
      switch(action.type){
          case "FILER":
              return{
                  ...state,
                  currentFilter:action.payload  
              }
              default:
                return state;
            
             
      }
    }





// ===== UserStatues =======
const InitialValue2 = {
    userStatues:null
  }
   
export  function AuthStatuesForUser (state = InitialValue2, action)  {
    console.log("=>",action.payload  , action.type);
    switch (action.type) {
        case "AUTH-USER":
            return{
                ...state,
                userStatues:action.payload  
            }
        
      default:
        return state;
    }
  };



  // ===== CookerStatues =======
const InitialValue3 = {
  cookerStatues:null
}
 
export  function AuthStatuesForCooker (state = InitialValue3, action)  {
  console.log("=>",action.payload  , action.type);
  switch (action.type) {
      case "AUTH-COOKER":
          return{
              ...state,
              cookerStatues:action.payload  
          }
      
    default:
      return state;
  }
};