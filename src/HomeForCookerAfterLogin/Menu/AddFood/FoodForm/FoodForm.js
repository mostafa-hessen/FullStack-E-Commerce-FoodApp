 import './FoodForm.css'
 import imageForm1 from '../../../../assets/potatoKofta.jpg'
 import imageForm2 from '../../../../assets/kofta.jpg'

 
 function FoodForm(){
     


    return(
        <>
        <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">🤤اضف اكله جديده </span>
        {/* <span className="title">add</span> */}
        {/* <img src=""/> */}


        <form >
          <input required type="text" placeholder="اسم الاكله" />

          {/* <label htmlFor="Cateogry">تصنيف الاكله  </label> */}
          <select name="kindUser" id="Cateogry" >
            <option value="pizza"> تصنيف الاكله</option>
            <option value="pizza">بيتزا</option>
            <option value="chicken">فراخ</option>
            <option value="meet">لحمه</option>
            <option value="chees">جبن</option>
          </select>
          <div className='imageForm'>
          <div className='prevImg' > 
          {/* style={{,backgroundImage:`url(${imageForm1})`}} */}
           {/* <img src={imageForm1} />  */}

           <label htmlFor="file" className='file'>
            {/* <img src={Add} alt="" /> */}
            <input required style={{ display: "none" }} type="file" id="file" />
            <p><i class="fa-solid fa-cloud-arrow-up"></i>
            
            <p>ارفع الصوره</p>
             </p>
           
           
          </label>
          

          </div>
          

          <div className='foodImages' style={{display:"flex" , margin:'10px' ,direction:"rtl"}}>

         
          <img src={imageForm2} height={'80px'} width={'100px'} style={{margin:'10px' ,borderRadius:'6px'}}/>
          <img src={imageForm1} height={'80px'} width={'100px'} style={{margin:'10px',borderRadius:'6px'}}/>
          <img src={imageForm2} height={'80px'} width={'100px'} style={{margin:'10px',borderRadius:'6px'}}/>

          

         
         
          </div>

          
          </div>
         

          <textarea name="comment" form="usrform">تفاصيل الاكله</textarea>

        
          {/* <input required type="" placeholder="password" /> */}
          <div className='price'>

            <div className='pricee'>
            <label htmlFor="price1">عائلي :  </label>
             <input type="number" placeholder="1" min="1" />
             </div>

             <div className='pricee'>
             <label htmlFor="price2">وسط :  </label>
             <input type="number" placeholder="1" min="1" />
             </div>

             <div className='pricee'>
             <label htmlFor="price3">صغير :  </label>
             <input type="number" placeholder="1" min="1" />
             </div>

          </div>
         

          
          

          <button>حـــــــفـــــــظ </button>
          {/* {loading && "Uploading and compressing the image please wait..."} */}
          {/* {err && <span>Something went wrong</span>} */}
        </form>

        {/* {!err ? console.log("done") : console.log("you have errore")} */}
      </div>
    </div>
        
        
        
        
        </>
    )

 }
 export default FoodForm