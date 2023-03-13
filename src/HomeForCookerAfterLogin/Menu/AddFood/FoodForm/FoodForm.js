/*

1) validation => regex (done) - satedata  (done) - stateErr (done) - show err - show success 
Name
cateogru
images
textarea
price

2) multible image => 3 images max - add and elete every image  
 
 
 */

import "./FoodForm.css";
import { uploadBytes, listAll, list } from "firebase/storage";
import { v4 } from "uuid";
import imageForm1 from "../../../../assets/potatoKofta.jpg";
import imageForm2 from "../../../../assets/kofta.jpg";
import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db, myserverTimestamp, storage } from "../../../../firebase";
import { async } from "@firebase/util";

function FoodForm(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [ImageUrlsFromFireBase, setImageUrlsFromFireBase] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [myimages, setmyimages] = useState([]);
  const textarea = useRef('')
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;//2 images file

    if(selectedFiles.length<=3)
    {

    console.log(selectedFiles);
    const selectedFilesArray = Array.from(selectedFiles);
    //console.log(selectedFilesArray);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray)); // 2 urls 
    setmyimages((previousImages) => previousImages.concat(selectedFilesArray));// 2 files
    event.target.value = "";
  }

  else{
    alert("you must choos only three images")
    console.log(myimages);
  }
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e, i) => i !== image));
    setmyimages(myimages.filter((e, i) => i !== image));
    URL.revokeObjectURL(image);
  }

  let rgex = {
    foodName:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
    foodTextarea:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{30,200}$/i,
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
      console.log("j");
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
    } else if (e.target.name == "cateogry") {
      setData({
        ...data,
        cateogry: e.target.value,
      });
      console.log("dsa", e.target.value);
      setMessage({
        ...errorMessage,
        cateogryErr:
          e.target.value.length === 0 ? "يجب أن تختر نوع الاكله" : null,
      });
    } else if (e.target.name == "foodTextarea") {
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
    } else if (e.target.name == "images") {
      onSelectFile(e); //2 urls and 2 files 

      setData({
        ...data,
        images: myimages,// 2 files
      });
      // console.log(myimages);
      setMessage({
        ...errorMessage,
        imagesErr:
          selectedImages.lenght === 1 ? "يجب أن تختر 3 صور بحد أقصي " : "",
      });
    } else if (e.target.name == "bigPrice") {
      setData({
        ...data,
        bigPrice: e.target.value,
      });

      setMessage({
        ...errorMessage,
        bigPriceErr: e.target.value.lenght == 0 ? "يجب تدخل السعر " : "",
      });
    } else if (e.target.name == "middlePrice") {
      setData({
        ...data,
        middlePrice: e.target.value,
      });

      setMessage({
        ...errorMessage,
        middlePriceErr: e.target.value.lenght == 0 ? "يجب تدخل السعر " : "",
      });
    } else if (e.target.name == "smallPrice") {
      setData({
        ...data,
        smallPrice: e.target.value,
      });

      setMessage({
        ...errorMessage,
        smallPriceErr: e.target.value === 0 ? "يجب تدخل السعر " : "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vaildition());
    if (vaildition()) {
      try {
        props.clickFun()
        let x = `${data.foodName}${v4()}`;
        setDoc(doc(db, "foods", x), {
          foodName: data.foodName,
          foodCateogry: data.cateogry,
          bigPrice: data.bigPrice,
          smallPrice: data.smallPrice,
          middlePrice: data.middlePrice,
          foodDiscription:data.foodTextarea,
          timestamP: myserverTimestamp,
          cookerName: user.displayName,
          userid: user.uid,
          foodId:x,
          quantity:1
          
        });

     
        myimages.map((ele) => {
          const imageRef = ref(storage, `foodimages/${ele.name + v4()}`);
          uploadBytes(imageRef, ele).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
              await updateDoc(doc(db, "foods", x), {
                foodImg: arrayUnion(url),
              });
            });
          });
        });

        for(let i=0;i<8;i++){
          // console.log(e.target[i].value='');
          if(e.target[i].name!=('btnremove')){

           e.target[i].value=""
           
          }
        }
          setData({
            foodName: "",
            foodTextarea: "",
            cateogry: "",
            bigPrice: 0,
            middlePrice: 0,
            smallPrice: 0,
            images: [],
          })
          setSelectedImages([])
          textarea.current.value=""
       //  console.log(     textarea.current.textContent, textarea, textarea.current,textarea.textContent)
      }
       catch {
        console.log("errrrrrrrrrrrrrrrrrrrrr");
      }
    } else {
      console.log("notvalid");
      !selectedImages == []
        ? setMessage({
            ...errorMessage,
            imagesErr: selectedImages.length == 0 ? "يجب أن تختر صوره " : "",
          })
        : console.log("F");
      console.log(data.foodName == "");
      data.foodName == ""
        ? setMessage({
            ...errorMessage,
            foodNameErr: "يجب ان تكتب اسم الاكله",
          })
        : data.cateogry == ""
        ? setMessage({
            ...errorMessage,
            cateogryErr: "يجب أن تختر أكلتك ",
          })
        : !data.images
        ? setMessage({
            ...errorMessage,
            imagesErr: selectedImages.length == 0 ? "يجب أن تختر صوره " : "",
          })
        : data.foodTextarea == ""
        ? setMessage({
            ...errorMessage,
            foodTextareaErr: "يجب ان تدخل وصف   الاكله",
          })
        : data.bigPrice == 0
        ? setMessage({
            ...errorMessage,
            bigPriceErr: "يجب أن تدخل السعر لكل حجم",
          })
        : data.middlePrice == 0
        ? setMessage({
            ...errorMessage,
            middlePriceErr: "يجب أن تدخل السعر لكل حجم",
          })
        : data.smallPrice == 0
        ? setMessage({
            ...errorMessage,
            smallPriceErr: "يجب أن تدخل السعر لكل حجم",
          })
        : console.log("done");
    }
    console.log("hi nadeen", vaildition());
  };

  const vaildition = () => {
    if (
      rgex["foodName"].test(data.foodName) &&
      rgex["foodTextarea"].test(data.foodTextarea) &&
      data.cateogry.length !== 0 &&
      selectedImages.length !== 0 &&
      data.bigPrice != 0 &&
      data.middlePrice != 0 &&
      data.smallPrice != 0

      // data.kindUser.length !== 0 &&
    ) {
      return true;
    } else {
      return false;
    }
  };
  // console.log(ImageUrlsFromFireBase)
  return (
    <div className="baseFoodForm">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">🤤اضف اكله جديده </span>
          {/* <span className="title">add</span> */}
          {/* <img src=""/> */}

          <form onSubmit={handleSubmit}>
            <input
              name="foodName"
              type="text"
              placeholder="اسم الاكله"
              onChange={(e) => changeData(e)}
            />
            <small className="text-danger">{errorMessage.foodNameErr}</small>

            {/* <label htmlFor="Cateogry">تصنيف الاكله  </label> */}
            <select
              name="cateogry"
              id="Cateogry"
              onChange={(e) => changeData(e)}
            >
              <option value=""> تصنيف الاكله</option>
              <option value="pizza">بيتزا</option>
              <option value="chicken">فراخ</option>
              <option value="meet">لحمه</option>
              <option value="chees">جبن</option>
            </select>
            <small className="text-danger">{errorMessage.cateogryErr}</small>

            <div className="imageForm">
              <div className="prevImg">
                {/* style={{,backgroundImage:`url(${imageForm1})`}} */}
                {/* <img src={imageForm1} />  */}

                <label htmlFor="file" className="file">
                  {/* <img src={Add} alt="" /> */}
                  <input
                    name="images"
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    disabled={selectedImages.length >= 3}
                    multiple="multiple"
                    onChange={(e) => changeData(e)}
                    accept="image/*"
                  />
                  <p>
                    <i className="fa-solid fa-cloud-arrow-up"></i>

                    {selectedImages.length >= 3 ? (
                      <p className="text-danger">الحد الاقصي للصور 3</p>
                    ) : (
                      <p>ارفع الصوره</p>
                    )}
                  </p>
                </label>
              </div>
              <small className="text-danger">{errorMessage.imagesErr}</small>

              <div
                className="foodImages"
                style={{ display: "flex", margin: "10px", direction: "rtl" }}
              >
                {/*      

{

}
          <img src={imageForm2} height={'80px'} width={'100px'} style={{margin:'10px' ,borderRadius:'6px'}}/>
          <img src={imageForm1} height={'80px'} width={'100px'} style={{margin:'10px',borderRadius:'6px'}}/>
          <img src={imageForm2} height={'80px'} width={'100px'} style={{margin:'10px',borderRadius:'6px'}}/> */}

                {selectedImages &&
                  selectedImages.map((ele, index) => (
                    <div className="d-flex flex-column " key={index}>
                      <div className="img">
                        <img src={ele} key={index} />
                      </div>
                      <button
                      name="btnremove"
                        className="btn bg-danger mt-2 "
                        onClick={() => deleteHandler(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            <textarea
              name="foodTextarea"
              form="usrform"
              onChange={(e) => changeData(e)}
              ref={textarea}
              placeholder="تفاصيل الاكله"
           >
              {/* تفاصيل الاكله */}
            </textarea>
            <small className="text-danger">
              {errorMessage.foodTextareaErr}
            </small>

            {/* <input required type="" placeholder="password" /> */}
            <div className="price">
              <div className="pricee ">
                <label htmlFor="price1">عائلي : </label>
                <input
                  type="number"
                  name="bigPrice"
                  placeholder="1"
                  min={1}
                  onChange={(e) => changeData(e)}
                />
              </div>

              <div className="pricee  ">
                <label htmlFor="price2">وسط : </label>
                <input
                  type="number"
                  name="middlePrice"
                  placeholder="1"
                  min={1}
                  onChange={(e) => changeData(e)}
                />
              </div>

              <div className="pricee  ">
                <label htmlFor="price3">صغير : </label>
                <input
                  type="number"
                  name="smallPrice"
                  placeholder="1"
                  min={1}
                  onChange={(e) => changeData(e)}
                />
              </div>
            </div>

            <small className="text-danger">
              {errorMessage.smallPriceErr ||
                errorMessage.middlePriceErr ||
                errorMessage.bigPriceErr}
            </small>

            <button >حـــــــفـــــــظ </button>
            {/* {loading && "Uploading and compressing the image please wait..."} */}
            {/* {err && <span>Something went wrong</span>} */}
          </form>

          {/* {!err ? console.log("done") : console.log("you have errore")} */}
        </div>
      </div>
    </div>
  );
}
export default FoodForm;
