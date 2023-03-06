import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../../../firebase';

import "./Signup.css";
import { ElementFlags } from "typescript";
import { Alert, Button } from "react-bootstrap";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { doc, setDoc } from "@firebase/firestore";
import { useHistory } from "react-router-dom";

// import { doc } from "prettier";
// import { log } from 'console';

export default function Signup() {
  let navigate= useHistory()
  let rgex = {
    fName: /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
    lastName:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
    email: /^[a-z0-9._]+@gmail\?|.com|.org|.net|.edu|.eg$/,
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}/,
    address:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,20}$/i,
    phone: /^01[0125][0-9]{8}$/,
  };
  const [show, setShow] = useState(false);

  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    country: "",
    kindUser: "",
    photo: "",
  });
  const [errorMessage, setMessage] = useState({
    FNameErr: null,
    LNameErr: null,
    emailErr: null,
    passwordErr: null,
    phoneErr: null,
    addressErr: null,
    kindUserErr: null,
    countryErr: null,
    photoErr: null,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("d");
    console.log("func", vaildition());

    if (vaildition()) {
      ///sernd to firebase
      //auth=getauth() , creatWithEmailAndPAsword(auth,email,password)

      try {

        // ==== auth ==== 
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );


        console.log(res.user);

        // mostafa.png sohail.png sohaila166389189209202.png => 
        let date = Date.now()

        // ==== upload img and get this  url 
        const storageRef = ref(storage, `${data.lName}${date}`);

        const uploadTask = uploadBytesResumable(storageRef, data.photo);

        uploadTask.on(
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await console.log(downloadURL);

            await updateProfile(res.user, {
              displayName: `${data.fName} ${data.lName}@${data.kindUser}`,
              photoURL: downloadURL,
            });

            localStorage.setItem("user",JSON.stringify(res.user))

              if (data.kindUser == "cook") {
                await setDoc(doc(db, "cookers", res.user.uid), {
                  userid: res.user.uid,
                  fullName: data.fName + " " + data.lName,
                  email: data.email,
                  phone: data.phone,
                  address: data.address,
                  country: data.country,
                  kindUser: data.kindUser,
                  photo: downloadURL,

              });
            } else {
              await setDoc(doc(db, "users", res.user.uid), {
                userid: res.user.uid,
                fullName: data.fName +" "+data.lName,
                email: data.email,
                phone: data.phone,
                address:data.address,
                country: data.country,
                kindUser:data.kindUser,
                photo: downloadURL,
                cart: [],
                favourite: [],
              });
            }
           await setShow(true)
           await data.kindUser == 'user' ? navigate.push("/HomeUser") : navigate.push("/HomeCooker")
  
            });
             data.kindUser == 'user' ? navigate.push("/HomeUser") : navigate.push("/HomeCooker")

             
          }
          

        );

      }
      catch (err){ 
        console.log(err)
        setMessage({
          ...errorMessage,
          emailErr:"البريد الإلكتروني مسجل سابقاً"
        });

      }

    } else {
      data.kindUser == ""
        ? setMessage({
          ...errorMessage,
          kindUserErr: "يجب أن تختر نوع حسابك",
        })
        : data.country == ""
          ? setMessage({
            ...errorMessage,
            countryErr: "يجب أن تختر بلدتك ",
          })
          : !data.photo
            ? setMessage({
              ...errorMessage,
              photoErr: !e.target.files ? "يجب أن تختر صوره " : "",
            })
            : console.log("done");

      console.log(e.target.files);
    }
  };


  const changeData = (e) => {
    if (e.target.name === "fName") {
      setData({
        ...data,
        fName: e.target.value,
      });
      rgex["fName"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        FNameErr:
          e.target.value.length === 0
            ? "يجب أن تدخل الاسم"
            : rgex["fName"].test(e.target.value)
              ? null
              : "الاسم يجب أن لا يقل عن ٣ أحرف",
      });
    } else if (e.target.name == "lName") {
      setData({
        ...data,
        lName: e.target.value,
      });
      rgex["lastName"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        LNameErr:
          e.target.value.length === 0
            ? "يجب أن تدخل الاسم"
            : rgex["lastName"].test(e.target.value)
              ? null
              : "الاسم يجب أن لا يقل عن ٣  أحرف",
      });
    } else if (e.target.name == "email") {
      setData({
        ...data,
        email: e.target.value,
      });
      rgex["email"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        emailErr:
          e.target.value.length === 0
            ? "يجب أن تدخل البريد الإلكتروني"
            : rgex["email"].test(e.target.value)
              ? null
              : "البريد الإلكتروني غير صحيح",
      });
    } else if (e.target.name == "password") {
      setData({
        ...data,
        password: e.target.value,
      });
      rgex["password"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        passwordErr:
          e.target.value.length === 0
            ? "يجب أن تدخل كلمة المرور"
            : rgex["password"].test(e.target.value)
              ? null
              : "كلمة المرور يجب أن تحتوي علي الأقل ٨ أحرف إنجليزية، حرف كبير علي الأقل، حرف صغير علي الأقل، رقم واحد علي الأقل، علامة ترقيم واحدة علي الأقل.",
      });
    } else if (e.target.name == "phone") {
      setData({
        ...data,
        phone: e.target.value,
      });
      rgex["phone"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        phoneErr:
          e.target.value.length === 0
            ? "يجب أن تدخل رقم الموبايل"
            : rgex["phone"].test(e.target.value)
              ? null
              : "رقم الموبايل غير صحيح",
      });
    } else if (e.target.name == "street-address") {
      setData({
        ...data,
        address: e.target.value,
      });
      rgex["address"].test(e.target.value)
        ? (e.target.style.border = "1px solid #5b8d61")
        : (e.target.style.border = "1px solid red");
      setMessage({
        ...errorMessage,
        addressErr:
          e.target.value.length === 0
            ? "يجب أن تدخل العنوان"
            : rgex["address"].test(e.target.value)
              ? null
              : "العنوان غير صحيح",
      });
    } else if (e.target.name == "country") {
      setData({
        ...data,
        country: e.target.value,
      });
      setMessage({
        ...errorMessage,
        countryErr: e.target.value.length === 0 ? "يجب أن تختر بلدتك  " : "",
      });
    } else if (e.target.name == "kindUser") {
      setData({
        ...data,
        kindUser: e.target.value,
      });
      setMessage({
        ...errorMessage,
        kindUserErr:
          e.target.value.length === 0 ? "يجب أن تختر نوع الحساب " : "",
      });
    } else if (e.target.name == "photo") {
      setData({
        ...data,
        photo: e.target.files[0],
      });

      setMessage({
        ...errorMessage,
        photoErr: !e.target.files[0] ? "يجب أن تختر صوره " : "",
      });
    }
  };

  const vaildition = () => {
    if (
      rgex["fName"].test(data.fName) &&
      rgex["lastName"].test(data.lName) &&
      rgex["email"].test(data.email) &&
      rgex["password"].test(data.password) &&
      rgex["address"].test(data.address) &&
      rgex["phone"].test(data.phone) &&
      data.country.length !== 0 &&
      data.kindUser.length !== 0 &&
      data.photo.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <>
      {
        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>success</Alert.Heading>
          {/* <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button> */}
        </Alert>
      }
      <div className="formContainer">

        <div className="formWrapper1">
          <span className="logo">الاكيله</span>
          <form onSubmit={handleClick}>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column" style={{ width: "49%" }}>
                <input
                  required
                  type="text"
                  placeholder="الاسم الثاني "
                  autoComplete="name"
                  name="lName"
                  style={{ width: "100%" }}
                  onChange={(e) => changeData(e)}
                />
                <small className="text-danger">{errorMessage.LNameErr}</small>
              </div>
              <div className="d-flex flex-column" style={{ width: "49%" }}>
                <input
                  required
                  type="text"
                  placeholder="الاسم الأول"
                  autoComplete="name"
                  name="fName"
                  value={data.fName}
                  style={{ width: "100%" }}
                  onChange={(e) => changeData(e)}
                />
                <small className="text-danger " style={{ textAlign: "right" }}>
                  {errorMessage.FNameErr}
                </small>
              </div>
            </div>
            <input
              required
              type="email"
              placeholder="البريد الإلكتروني"
              name="email"
              onChange={(e) => changeData(e)}
            />
            <small className="text-danger" style={{ textAlign: "right" }}>
              {errorMessage.emailErr}
            </small>
            <input
              required
              type="password"
              placeholder="كلمة المرور"
              name="password"
              onChange={(e) => changeData(e)}
            />
            <small
              className="text-danger"
              style={{
                textAlign: "right",
                fontSize: "12px",
                maxWidth: "320px",
                marginLeft: "auto",
              }}
            >
              {errorMessage.passwordErr}
            </small>
            <input
              required
              type="tel"
              placeholder=" رقم التليفون"
              name="phone"
              onChange={(e) => changeData(e)}
            />
            <small className="text-danger" style={{ textAlign: "right" }}>
              {errorMessage.phoneErr}
            </small>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column" style={{ width: "49%" }}>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  placeholder="العنوان"
                  style={{ width: "100%" }}
                  onChange={(e) => changeData(e)}
                ></input>
                <small className="text-danger" style={{ textAlign: "right" }}>
                  {errorMessage.addressErr}
                </small>
              </div>

              <div style={{ width: "49%" }} className="d-flex flex-column">
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  style={{ width: "100%" }}
                  onChange={(e) => changeData(e)}
                >
                  <option>الغربية</option>
                  <option>الإسكندرية</option>
                  <option>الإسماعيلية</option>
                  <option>كفر الشيخ</option>
                  <option>أسوان</option>
                  <option>أسيوط</option>
                  <option>الأقصر</option>
                  <option>الوادي الجديد</option>
                  <option>شمال سيناء</option>
                  <option>البحيرة</option>
                  <option>بني سويف</option>
                  <option>بورسعيد</option>
                  <option>البحر الأحمر</option>
                  <option>الجيزة</option>
                  <option>الدقهلية</option>
                  <option>جنوب سيناء</option>
                  <option>دمياط</option>
                  <option>سوهاج</option>
                  <option>السويس</option>
                  <option>الشرقية</option>
                  <option>الغربية</option>
                  <option>الفيوم</option>
                  <option>القاهرة</option>
                  <option>القليوبية</option>
                  <option>قنا</option>
                  <option>مطروح</option>
                  <option>المنوفية</option>
                  <option>المنيا</option>
                </select>
                <small className="text-danger" style={{ textAlign: "right" }}>
                  {errorMessage.countryErr}
                </small>
              </div>
            </div>

          <label htmlFor="kindUser">نوع الحساب:</label>
          <select
            name="kindUser"
            id="kindUser"
            onChange={(e) => changeData(e)}
            required
          >
           <option value="" >اختر نوع حسابك</option>

            <option value="user">عميل</option>
            <option value="cook">طباخ</option>
          </select>
          <small className="text-danger" style={{ textAlign: "right" }}>
            {errorMessage.kindUserErr}
          </small>

            <input
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              id="file"
              name="photo"
              onChange={(e) => changeData(e)}
            />
            <label htmlFor="file">
              <span className="d-flex align-items-center">
                <i
                  className="fa-solid fa-camera-retro"
                  style={{ fontSize: "25px", color: "#5b8d61" }}
                ></i>{" "}
                إرفع صورتك
              </span>
            </label>
            <small className="text-danger" style={{ textAlign: "right" }}>
              {errorMessage.photoErr}
            </small>

            <input type="submit" value="إنشاء حساب" />
          </form>
        </div>
      </div>
    </>
  );
}
