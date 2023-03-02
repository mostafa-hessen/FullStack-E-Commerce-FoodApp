/*

1) validation => regex (done) - satedata  (done) - stateErr (done) - show err - show success 
Name
cateogru
images
textarea
price

2) multible image => 3 images max - add and elete every image  
 
 
 */





import './FoodForm.css'
import {

  uploadBytes,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";
import imageForm1 from '../../../../assets/potatoKofta.jpg'
import imageForm2 from '../../../../assets/kofta.jpg'
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, myserverTimestamp, storage } from "../../../../firebase";
import { async } from '@firebase/util';

function FoodForm() {
  const user = JSON.parse(localStorage.getItem("user"))
  const [ImageUrlsFromFireBase, setImageUrlsFromFireBase] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [myimages, setmyimages] = useState([])
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    console.log(selectedFiles);
    const selectedFilesArray = Array.from(selectedFiles);
    console.log(selectedFilesArray);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });



    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setmyimages((previousImages) => previousImages.concat(selectedFilesArray));

    // FOR BUG IN CHROME


    // selectedImages.lenght>3? console.log("true") : console.log("false", selectedImages.len)

    event.target.value = "";
  };


  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e, i) => i !== image));
    setmyimages(myimages.filter((e, i) => i !== image));
    URL.revokeObjectURL(image);
  }

  let rgex = {
    foodName: /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
    foodTextarea: /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{30,200}$/i,
  };

  const [data, setData] = useState({
    foodName: "",
    foodTextarea: "",
    cateogry: "",
    bigPrice: 0,
    middlePrice: 0,
    smallPrice: 0,
    images: [],
  });
  const [errorMessage, setMessage] = useState({
    fooNameErr: null,
    foodTextareaErr: null,
    cateogryErr: null,
    priceErr: null,
    imagesErr: null,
    bigPriceErr: null,
    middlePriceErr: null,
    smallPriceErr: null,

  });


  const changeData = (e) => {
    console.log(e.target.name);
    if (e.target.name === "foodName") {
      console.log('j');
      setData({
        ...data,
        foodName: e.target.value,
      });
      rgex["foodName"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        foodNameErr:
          e.target.value.length === 0
            ? "  يجب أن تدخل اسم الاكله"
            : rgex["foodName"].test(e.target.value)
              ? null
              : "الاسم يجب أن لا يقل عن ٣ أحرف",
      });
    }
    else if (e.target.name == "cateogry") {
      setData({
        ...data,
        cateogry: e.target.value,
      });
      console.log('dsa', e.target.value);
      setMessage({
        ...errorMessage,
        cateogryErr:
          e.target.value.length === 0
            ? "يجب أن تختر نوع الاكله" : null
      });
    }
    else if (e.target.name == "foodTextarea") {
      setData({
        ...data,
        foodTextarea: e.target.value,
      });
      rgex["foodTextarea"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        foodTextareaErr:
          e.target.value.length === 0
            ? "يجب أن تدخل  وصف الاكله"
            : e.target.value.length <= 200 && e.target.value.length >= 30
              ? null
              : "يجب أن يكون الوصف لايزيد  عن 200 حرف  ولايقل عن 30  حرف",
      });
    }

    else if (e.target.name == "images") {
      onSelectFile(e)

      setData({
        ...data,
        images: myimages,
      });
      // console.log(myimages);
      setMessage({
        ...errorMessage,
        imagesErr: selectedImages.lenght === 1 ? "يجب أن تختر 3 صور بحد أقصي " : "",
      });

    }
    else if (e.target.name == "bigPrice") {
      setData({
        ...data,
        bigPrice: e.target.value,
      });

      setMessage({
        ...errorMessage,
        bigPriceErr: e.target.value.lenght == 0 ? "يجب تدخل السعر " : "",
      });
    }

    else if (e.target.name == "middlePrice") {

      setData({
        ...data,
        middlePrice: e.target.value,
      });

      setMessage({
        ...errorMessage,
        middlePriceErr: e.target.value.lenght == 0 ? "يجب تدخل السعر " : "",
      });
    }

    else if (e.target.name == "smallPrice") {

      setData({
        ...data,
        smallPrice: e.target.value,
      });

      setMessage({
        ...errorMessage,
        smallPriceErr: e.target.value === 0 ? "يجب تدخل السعر " : "",
      });
    }
    // } else if (e.target.name == "password") {
    //   setData({
    //     ...data,
    //     password: e.target.value,
    //   });
    //   rgex["password"].test(e.target.value)
    //     ? (e.target.style.border = "1px solid #5b8d61")
    //     : (e.target.style.border = "1px solid red");
    //   setMessage({
    //     ...errorMessage,
    //     passwordErr:
    //       e.target.value.length === 0
    //         ? "يجب أن تدخل كلمة المرور"
    //         : rgex["password"].test(e.target.value)
    //         ? null
    //         : "كلمة المرور يجب أن تحتوي علي الأقل ٨ أحرف إنجليزية، حرف كبير علي الأقل، حرف صغير علي الأقل، رقم واحد علي الأقل، علامة ترقيم واحدة علي الأقل.",
    //   });
    // } else if (e.target.name == "phone") {
    //   setData({
    //     ...data,
    //     phone: e.target.value,
    //   });
    //   rgex["phone"].test(e.target.value)
    //     ? (e.target.style.border = "1px solid #5b8d61")
    //     : (e.target.style.border = "1px solid red");
    //   setMessage({
    //     ...errorMessage,
    //     phoneErr:
    //       e.target.value.length === 0
    //         ? "يجب أن تدخل رقم الموبايل"
    //         : rgex["phone"].test(e.target.value)
    //         ? null
    //         : "رقم الموبايل غير صحيح",
    //   });
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(vaildition());

    if (vaildition()) {
      // // console.log(data.images);

      // // console.log(selectedImages,myimages);
      // const date = Date.now();//71y271y371y3781y1w3
      // console.log(date);
      // // code storage to store image
      // const storageRef = ref(storage, `${data.foodName}${date}`);

      // const uploadTask = uploadBytesResumable(storageRef, foodImg);

      // uploadTask.on(
      //   (error) => {
      //     console.log(error);
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //         console.log(downloadURL);

      //       await setDoc(doc(db, "foods",`${data.foodName}${date}`), {

      //         // foodName,
      //         // foodCateogry,
      //         // foodPrice,
      //         // foodImg: downloadURL,
      //         // timestamP: myserverTimestamp,
      //         // userName: user.displayName,
      //         // userid:user.uid

      //       });
      //     });
      //   }
      // )

      //upload multi images
          
        myimages. map(ele => {
        const imageRef = ref(storage, `foodimages/${ele.name + v4()}`);
        uploadBytes(imageRef, ele).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageUrlsFromFireBase((prev) => [...prev, url]);
          });
        });
      })
      
      // const SendToDb=()=>{}

     
        

     setDoc(doc(db, "foods", `${data.foodName}${v4()}`), {

          foodName: data.foodName,
          // foodCateogry: data.foodCateogry,
          bigPrice: data.bigPrice,
          smallPrice: data.smallPrice,
          middlePrice: data.middlePrice,

          foodImg: ImageUrlsFromFireBase,
          timestamP: myserverTimestamp,
          userName: user.displayName,
          userid: user.uid


        });
    
    
    }
    else {
      console.log('notvalid');
      !selectedImages == []
        ? setMessage({
          ...errorMessage,
          imagesErr: selectedImages.length == 0 ? "يجب أن تختر صوره " : "",
        }) : console.log("F");
      console.log(data.foodName == "");
      data.foodName == "" ? setMessage({
        ...errorMessage,
        foodNameErr: "يجب ان تكتب اسم الاكله",
      }) :
        data.cateogry == "" ? setMessage({
          ...errorMessage,
          cateogryErr: "يجب أن تختر أكلتك "
        }) : !data.images
          ? setMessage({
            ...errorMessage,
            imagesErr: selectedImages.length == 0 ? "يجب أن تختر صوره " : "",
          })

          : data.foodTextarea == "" ? setMessage({
            ...errorMessage,
            foodTextareaErr: "يجب ان تدخل وصف   الاكله",
          }) : data.bigPrice == 0 ? setMessage({
            ...errorMessage,
            bigPriceErr: "يجب أن تدخل السعر لكل حجم",
          }) : data.middlePrice == 0 ? setMessage({
            ...errorMessage,
            middlePriceErr: "يجب أن تدخل السعر لكل حجم",
          }) : data.smallPrice == 0 ? setMessage({
            ...errorMessage,
            smallPriceErr: "يجب أن تدخل السعر لكل حجم",
          }) : console.log("done")

    }
    console.log("hi nadeen", vaildition());


  }


  const vaildition = () => {
    if (
      rgex["foodName"].test(data.foodName) &&
      rgex["foodTextarea"].test(data.foodTextarea) &&
      data.cateogry.length !== 0
      && selectedImages.length !== 0
      && data.bigPrice != 0
      && data.middlePrice != 0
      && data.smallPrice != 0

      // data.kindUser.length !== 0 &&
    ) {
      return true;
    }
    else {
      return false;
    }

  };
  console.log(ImageUrlsFromFireBase)
  return (
    <div className='baseFoodForm'>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">🤤اضف اكله جديده </span>
          {/* <span className="title">add</span> */}
          {/* <img src=""/> */}


          <form onSubmit={handleSubmit} >
            <input name='foodName' type="text" placeholder="اسم الاكله" onChange={(e) => changeData(e)} />
            <small className="text-danger">{errorMessage.foodNameErr}</small>

            {/* <label htmlFor="Cateogry">تصنيف الاكله  </label> */}
            <select name="cateogry" id="Cateogry" onChange={(e) => changeData(e)}>
              <option value="" > تصنيف الاكله</option>
              <option value="pizza">بيتزا</option>
              <option value="chicken">فراخ</option>
              <option value="meet">لحمه</option>
              <option value="chees">جبن</option>
            </select>
            <small className="text-danger">{errorMessage.cateogryErr}</small>

            <div className='imageForm'>
              <div className='prevImg' >
                {/* style={{,backgroundImage:`url(${imageForm1})`}} */}
                {/* <img src={imageForm1} />  */}

                <label htmlFor="file" className='file'>
                  {/* <img src={Add} alt="" /> */}
                  <input name='images' style={{ display: "none" }} type="file" id="file" disabled={selectedImages.length >= 3} multiple="multiple" onChange={(e) => changeData(e)} />
                  <p><i class="fa-solid fa-cloud-arrow-up"></i>

                    {selectedImages.length >= 3 ? <p className="text-danger">الحد الاقصي للصور 3</p> : <p>ارفع الصوره</p>}
                  </p>

                </label>



              </div>
              <small className="text-danger">{errorMessage.imagesErr}</small>

              <div className='foodImages' style={{ display: "flex", margin: '10px', direction: "rtl" }}>
                {/*      

{

}
          <img src={imageForm2} height={'80px'} width={'100px'} style={{margin:'10px' ,borderRadius:'6px'}}/>
          <img src={imageForm1} height={'80px'} width={'100px'} style={{margin:'10px',borderRadius:'6px'}}/>
          <img src={imageForm2} height={'80px'} width={'100px'} style={{margin:'10px',borderRadius:'6px'}}/> */}

                {selectedImages && selectedImages.map((ele, index) =>
                  <div className="d-flex flex-column " key={index}>
                    <div className='img'  >
                      <img src={ele} key={index} />
                    </div>
                    <button className="btn bg-danger mt-2 " onClick={() => deleteHandler(index)}>X</button>
                  </div>
                )}
              </div>



            </div>


            <textarea name="foodTextarea" form="usrform" onChange={(e) => changeData(e)}>تفاصيل الاكله</textarea>
            <small className="text-danger">{errorMessage.foodTextareaErr}</small>


            {/* <input required type="" placeholder="password" /> */}
            <div className='price'>

              <div className='pricee '>
                <label htmlFor="price1">عائلي :  </label>
                <input type="number" name="bigPrice" placeholder="1" min={1} onChange={(e) => changeData(e)} />
              </div>

              <div className='pricee  '>
                <label htmlFor="price2">وسط :  </label>
                <input type="number" name="middlePrice" placeholder="1" min={1} onChange={(e) => changeData(e)} />
              </div>

              <div className='pricee  '>
                <label htmlFor="price3">صغير :  </label>
                <input type="number" name="smallPrice" placeholder="1" min={1} onChange={(e) => changeData(e)} />
              </div>


            </div>

            <small className="text-danger">{errorMessage.smallPriceErr || errorMessage.middlePriceErr || errorMessage.bigPriceErr}</small>






            <button>حـــــــفـــــــظ </button>
            {/* {loading && "Uploading and compressing the image please wait..."} */}
            {/* {err && <span>Something went wrong</span>} */}
          </form>

          {/* {!err ? console.log("done") : console.log("you have errore")} */}
        </div>
      </div>




    </div>
  )

}
export default FoodForm