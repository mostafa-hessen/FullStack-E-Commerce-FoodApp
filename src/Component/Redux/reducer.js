const InitialValues = {
    currentFilter:"all"
  }
   
  
  
 const  reducer = ( state =InitialValues,action) => {
      switch(action.type){
          case "FILER":
              return{
                  ...state,
                  currentFilter:action.payload  
              }
      }}

export default reducer