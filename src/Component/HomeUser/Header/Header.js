// import "./Header.css";
// function Header() {
//   return (
//     <>
//       <div className="row   header">
//         <div className="col-3 ">
//             <div class="image d-lg-none">
//               <img   src="https://via.placeholder.com/50/09f/fff.png " alt="D" />
//             </div>
            

//         </div>

//         <div className="col-9 col-lg-5  d-flex">
//           <div className="search-box d-flex align-items-center">
//             <div className="search-btn  me-1">
//               <i className="fas fa-search"></i>
//             </div>
//             <input type="text" placeholder="ابحث عن اكلتك" />
//           </div>
//           <h3 className=" text"> 🤤 مرحبا بك في الاكيله</h3>
        
//         </div>
//       </div>
//     </>
//   );
// }
// export default Header;

import './Header.css'
function Header() {


    return (

        <>
            <div className="row header py-5   align-items-center" >

                <div className="col-9 d-flex justify-content-between align-items-center">
                     <div class="image  d-flex align-items-center">
                           <img  className='d-lg-none' src="https://via.placeholder.com/50/09f/fff.png " alt="D" />
                           <i className=" ms-3 fa-regular fa-bell fa-lg "></i>
                     </div>
                    <div className="search-box d-flex align-items-center">
                        <div className="search-btn">
                            <i className="fas fa-search "></i>
                        </div>
                        <input type="text" placeholder="ابحث عن اكلتك" />
                    </div>
                    
                   
                    
                </div>

                <div className="col-3 text-center myHeaderText">
                    <p >   مرحبا بك في 
                    </p>
                    <p>🤤الاكيله</p>
                </div>



          

            </div>




        </>
    )




}
export default Header