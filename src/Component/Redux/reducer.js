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
    //console.log("=>",action.payload  , action.type);
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
  //console.log("=>",action.payload  , action.type);
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


  // ===== total price =======
  const InitialValue4 = {
    price:0
  }
   
  export  function TotalPrice (state = InitialValue4, action)  {
   // console.log("=>",action.payload  , action.type);
    switch (action.type) {
        case "TOTAL-PRICE":
            return{
                ...state,
                price:action.payload  
            }
        
      default:
        return state;
    }
  };


    // ===== my cart orders  =======
    const InitialValue5 = {
      MyCartOrders:0
    }
     
    export  function MyCart (state = InitialValue4, action)  {
      //console.log("=>",action.payload  , action.type);
      switch (action.type) {
          case "MYCART-ORDERES":
              return{
                  ...state,
                  MyCartOrders:action.payload  
              }
          
        default:
          return state;
      }
    };
    // ===== my MYORDERS =======
    const InitialValue6 = {
      MYORDERS:0
    }
     
    export  function MYORDERS (state = InitialValue5, action)  {
      //console.log("=>",action.payload  , action.type);
      switch (action.type) {
          case "MYORDERS":
              return{
                  ...state,
                  MYORDERS:action.payload  
              }
          
        default:
          return state;
      }
    };