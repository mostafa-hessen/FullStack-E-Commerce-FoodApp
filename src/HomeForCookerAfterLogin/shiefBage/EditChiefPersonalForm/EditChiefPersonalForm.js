import React from 'react'
import './EditChiefPersonalForm.css'
import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { validate } from 'uuid';
import PopUpEditCheifPerson from './PopUpEditCheifPerson';
import { uploadBytes, listAll, list } from "firebase/storage";
import { v4 } from "uuid";

import { db } from "../../../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";


import { async } from "@firebase/util";
export default function (props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const ArbicCategorycook = { am: "صَبَاحًا", pm: "مَساءً" }
  const textarea = useRef('')
  let rgex = {
    namecooker:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
    typeofworkcooker:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{5,200}$/i,
    detailscooker:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{20,200}$/i,
    addresscooker:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
    phonecooker: /^01[0125][0-9]{8}$/,
  };
  const [data, setData] = useState({
    namecooker: props.cookerpersonal.fullName,
    typeofworkcooker: props.cookerpersonal.typeofworkcooker ? props.cookerpersonal.typeofworkcooker : "طباخ",
    detailscooker:props.cookerpersonal.detailscooker ? props.cookerpersonal.detailscooker : "معلومات عني",
    addresscooker: props.cookerpersonal.address,
    phonecooker: props.cookerpersonal.phone,
    amcooker: props.cookerpersonal.amcooker ? props.cookerpersonal.amcooker : "3",
    pmcooker: props.cookerpersonal.pmcooker ? props.cookerpersonal.pmcooker : "11",
    amcookerselect: props.cookerpersonal.amcookerselect ? props.cookerpersonal.amcookerselect : "am",
    pmcookerselect: props.cookerpersonal.pmcookerselect ? props.cookerpersonal.pmcookerselect : "pm",
  });
  const [errorMessage, setMessage] = useState({
    namecookerErr: "",
    typeofworkcookerErr: "",
    detailscookerErr: "",
    addresscookerErr: "",
    phonecookerErr: "",
    amcookerErr: "",
    pmcookerErr: "",
    amcookerselectErr: "",
    pmcookerselectErr: ""
  });
  //Validation
  const changeData = (e) => {
    if (e.target.name === "namecooker") {
      setData({
        ...data,
        namecooker: e.target.value,
      });
      rgex["namecooker"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        namecookerErr:
          e.target.value.length === 0
            ? "يجب أن تدخل الاسم"
            : rgex["namecooker"].test(e.target.value)
              ? null
              : "الاسم يجب أن لا يقل عن ٣ أحرف",
      });
    } else if (e.target.name == "typeofworkcooker") {
      setData({
        ...data,
        typeofworkcooker: e.target.value,
      });
      rgex["typeofworkcooker"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        typeofworkcookerErr:
          e.target.value.length === 0
            ? "يجب أن تدخل الوصف"
            : rgex["typeofworkcooker"].test(e.target.value)
              ? null
              : "الوصف يجب أن لا يقل عن 5  كلمات",
      });
    } else if (e.target.name == "detailscooker") {
      setData({
        ...data,
        detailscooker: e.target.value,
      });
      rgex["detailscooker"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        detailscookerErr:
          e.target.value.length === 0
            ? "يجب أن تدخل  وصف الاكله"
            : e.target.value.length <= 200 && e.target.value.length >= 30
              ? null
              : "يجب أن يكون الوصف لايزيد  عن 200 حرف  ولايقل عن 30  حرف",
      });
    }
    else if (e.target.name == "phonecooker") {
      setData({
        ...data,
        phonecooker: e.target.value,
      });
      rgex["phonecooker"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        phonecookerErr:
          e.target.value.length === 0
            ? "يجب أن تدخل رقم الموبايل"
            : rgex["phonecooker"].test(e.target.value)
              ? null
              : "رقم الموبايل غير صحيح",
      });
    } else if (e.target.name == "addresscooker") {
      setData({
        ...data,
        addresscooker: e.target.value,
      });
      rgex["addresscooker"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        addresscookerErr:
          e.target.value.length === 0
            ? "يجب أن تدخل العنوان"
            : rgex["addresscooker"].test(e.target.value)
              ? null
              : "العنوان غير صحيح",
      });
    }
    else if (e.target.name == "amcooker") {
      setData({
        ...data,
        amcooker: e.target.value,
      });

      setMessage({
        ...errorMessage,
        amcookerErr: e.target.value<= 0 || e.target.value >=13 ? "يجب تدخل المعاد المتاح لك  من 1 حتي 12" : "",
      });
    } else if (e.target.name == "pmcooker") {
      setData({
        ...data,
        pmcooker: e.target.value,
      });

      setMessage({
        ...errorMessage,
        pmcookerErr:  e.target.value<= 0 || e.target.value >=13 ? "يجب تدخل المعاد المتاح لك  من 1 حتي 12" : "",
      });
    }
    else if (e.target.name == "amcookerselect") {
      setData({
        ...data,
        amcookerselect: e.target.value,
      });
      console.log("dsa", e.target.value);
      setMessage({
        ...errorMessage,
        amcookerselectErr:
          e.target.value.length === 0 ? "يجب أن تختر  صباحا او مساء" : null,
      });
    }
    else if (e.target.name == "pmcookerselect") {
      setData({
        ...data,
        pmcookerselect: e.target.value,
      });
      console.log("dsa", e.target.value);
      setMessage({
        ...errorMessage,
        pmcookerselectErr:
          e.target.value.length === 0 ? "يجب أن تختر  صباحا او مساء" : null,
      });
    }
  };
  const onSubmitefunction = (e) => {
    e.preventDefault()
    console.log(vaildition() + "done")

    if (vaildition()) {
      try {
        //
        updateDoc(doc(db, "cookers", `${JSON.parse(localStorage.getItem("user")).uid}`), {

          fullName: data.namecooker,
          typeofworkcooker: data.typeofworkcooker,
          detailscooker: data.detailscooker,
          address: data.addresscooker,
          phone: data.phonecooker,
          amcooker: data.amcooker,
          pmcooker: data.pmcooker,
          amcookerselect: data.amcookerselect,
          pmcookerselect: data.pmcookerselect


        });
        console.log('bbbbbbbbb')


            for(let i=0;i<8;i++){
              // console.log(e.target[i].value='');
              if(e.target[i].name!=('btnremove')){

               e.target[i].value=""

              }
            }
              setData(   {
                namecooker: "",
                typeofworkcooker: "",
                detailscooker:"",
                addresscooker: "",
                phonecooker: "",
                amcooker: 0,
                pmcooker:0,
                amcookerselect: "",
                pmcookerselect:"",
              })
            
              textarea.current.value=""
        //  console.log(     textarea.current.textContent, textarea, textarea.current,textarea.textContent)



      } catch (err) {
        console.log(err);
      }
    }
    else {
      console.log("notvalid");
      console.log(data.foodName == "");
      data.namecooker == ""
        ? setMessage({
          ...errorMessage,
          namecookerErr: "يجب ان تدخل الاسم ",
        })
        : data.addresscooker == ""
          ? setMessage({
            ...errorMessage,
            addresscookerErr: " العنوان ",
          })
          : data.detailscooker == ""
            ? setMessage({
              ...errorMessage,
              detailscookerErr: "يجب ان تدخل نبذة عنك",
            })
            : data.amcooker <=0 || data.amcooker >=13
              ? setMessage({
                ...errorMessage,
                amcookerErr: " يجب أن تدخل المعاد المتاح الصحيح" ,
              })
              : data.pmcooker <= 0 || data.pmcooker >=13
                ? setMessage({
                  ...errorMessage,
                  pmcookerErr:  " يجب أن تدخل المعاد المتاح الصحيح" ,
                })
                : data.phonecooker == ""
                  ? setMessage({
                    ...errorMessage,
                    phonecookerErr: "يجب أن تدخل رقم التليفون",
                  }) : data.amcookerselect == ""
                    ? setMessage({
                      ...errorMessage,
                      amcookerselectErr: "يجب أن تختر  صباحا او مساءا ",
                    }) : data.pmcookerselect == ""
                      ? setMessage({
                        ...errorMessage,
                        pmcookerselectErr: "يجب أن تختر  صباحا او مساءا ",
                      })
                      : console.log("done");
    }
  }
  const vaildition = () => {
    if (
      rgex["namecooker"].test(data.namecooker) &&
      rgex["detailscooker"].test(data.detailscooker) &&
      rgex["phonecooker"].test(data.phonecooker) &&
      rgex["typeofworkcooker"].test(data.typeofworkcooker) &&
      rgex["addresscooker"].test(data.addresscooker) &&
      data.amcookerselect.length !== 0 &&
      data.pmcookerselect.length !== 0 &&
      data.amcooker >0 && data.amcooker<13 &&
      data.pmcooker >0 && data.pmcooker<13 


    ) {
      return true;

    } else {
      return false;
    }

  };
  return (

    <div className="ChiefPersonal">
      {console.log(props.cookerpersonal)}
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">تعديل معلوماتي الشخصية <MdEdit style={{ fontSize: 30 }}></MdEdit></span>


          <form onSubmit={onSubmitefunction}>
            <input
              name="namecooker"

              type="text"
              defaultValue={data.namecooker}
              placeholder=" اسمك ثلاثي"
              onChange={(e) => changeData(e)}
            />
            <small className="text-danger">{errorMessage.namecookerErr}</small>

            <input
              name="typeofworkcooker"
              defaultValue={data.typeofworkcooker}
              type="text"
              placeholder=" ماذا تقدم"
              onChange={(e) => changeData(e)}
            />
            <small className="text-danger">{errorMessage.typeofworkcookerErr}</small>

            <input
              name="addresscooker"
              defaultValue={data.addresscooker}
              type="text"
              placeholder=" عنوانك بالكامل"
              onChange={(e) => changeData(e)}
            />
            <small className="text-danger">{errorMessage.addresscookerErr}</small>
            <input
              name="phonecooker"
              defaultValue={data.phonecooker}
              type="text"
              placeholder=" رقم تليفونك"
              onChange={(e) => changeData(e)}
            />
            <small className="text-danger">{errorMessage.phonecookerErr}</small>


            <textarea
              name="detailscooker"
              form="usrform"
              onChange={(e) => changeData(e)}
              ref={textarea}
              placeholder=" نبذة عنك وعن ما تقدمه"
            >
              {data.detailscooker}
            </textarea>
            <small className="text-danger">
              {errorMessage.detailscookerErr}
            </small>


            <div style={{ direction: "rtl", display: 'flex' }}>
              <label>مواعيد العمل المتاحه لك </label>
              <br />
              <label >: من </label>
              <input type="number" className='mx-2' defaultValue={data.amcooker} name="amcooker" min="1" max="12" style={{ width: "45px" }} onChange={(e) => changeData(e)} />
              <select onChange={(e) => changeData(e)} name="amcookerselect">
                <option selected disabled hidden>
                  {ArbicCategorycook[`${data.amcookerselect}`]}
                </option>
                <option value="am">
                  صَبَاحًا
                </option>
                <option value="pm" >
                  مَساءً
                </option>
              </select>
              <label>:الي </label>

              <input type="number" className='mx-4' defaultValue={data.pmcooker} name="pmcooker" min="1" max="12" style={{ width: "45px" }} onChange={(e) => changeData(e)} />
              <select onChange={(e) => changeData(e)} name="pmcookerselect">
                <option selected disabled hidden>
                  {ArbicCategorycook[`${data.pmcookerselect}`]}
                </option>
                <option value="pm">
                  مَساءً
                </option>
                <option value="am">
                  صَبَاحًا
                </option>
              </select>
            </div>
            <small className="text-danger">
              {errorMessage.amcookerErr ||
                errorMessage.pmcookerErr ||
                errorMessage.pmcookerselectErr ||
                errorMessage.amcookerselectErr
              }
            </small>


            <button>حـــــــفـــــــظ </button>

          </form>


        </div>
      </div>
    </div>
  );
}
