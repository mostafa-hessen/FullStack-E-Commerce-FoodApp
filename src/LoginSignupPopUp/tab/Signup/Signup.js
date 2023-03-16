import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, storage, db, myserverTimestamp } from '../../../firebase';
//import { useDropzone } from 'react-dropzone';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, storage, db, myserverTimestamp } from "../../../firebase";
import { useDropzone } from "react-dropzone";
import "./Signup.css";
import { Alert } from "react-bootstrap";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { doc, setDoc } from "@firebase/firestore";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  authStatuesForCooker,
  authStatuesForUser,
} from "../../../Component/Redux/action";

export default function Signup(props) {
  /*const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  });*/
  /*let n = 0;
  const acceptedFileItems = acceptedFiles.map(file => (
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });
  let n = 0;
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
*/
 // const fileRejectionItems = fileRejections.map(({ file, errors }) => (

    /*<li key={file.path}>
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));*/

 // console.log(fileRejectionItems)
  console.log(fileRejectionItems);

  const dispatch = useDispatch();
  let navigate = useHistory();
  let rgex = {
    fName: /^[a-zA-Z\u0600-\u06FF]{2,20}$/i,
    lastName: /^[a-zA-Z\u0600-\u06FF]{2,20}$/i,
    email: /^[a-z0-9._]+@gmail\?|.com|.org|.net|.edu|.eg$/,
    password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}/,
    address:
      /^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,50}$/i,
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
    fNameErr: null,
    lNameErr: null,
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
    // console.log("d");
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

        // console.log(res.user);

        // mostafa.png sohail.png sohaila166389189209202.png =>
        let date = Date.now();

        // ==== upload img and get this  url
        const storageRef = ref(storage, `${data.lName}${date}`);

        const uploadTask = uploadBytesResumable(storageRef, data.photo);

        uploadTask.on(
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await console.log(downloadURL);

                await updateProfile(res.user, {
                  displayName: `${data.fName} ${data.lName}@${data.kindUser}`,
                  photoURL: downloadURL,
                });

                console.log("res.kindUser", data.kindUser);
                await setDoc(
                  doc(
                    db,
                    `${data.kindUser == "cook" ? "cookers" : "users"}`,
                    res.user.uid
                  ),
                  {
                    userid: res.user.uid,
                    fullName: data.fName + " " + data.lName,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                    country: data.country,
                    kindUser: data.kindUser,
                    photo: downloadURL,
                    registerTime: myserverTimestamp,
                  }
                );

                localStorage.setItem("user", JSON.stringify(res.user));

                await setShow(true);
                (await data.kindUser) == "user"
                  ? navigate.push("/HomeUser")
                  : navigate.push("/HomeCooker");
              }
            );
            // data.kindUser == 'user' ? navigate.push("/HomeUser") : navigate.push("/HomeCooker")

          }
        );

        onAuthStateChanged(auth, (user) => {
          if (user.displayName.split("@")[1] == "user") {
            console.log(user);

            dispatch(authStatuesForUser(true))
            sessionStorage.setItem('authUser', true)
            sessionStorage.removeItem('authCooker')

          }

          else if (user.displayName.split('@')[1] == "cook") {
            dispatch(authStatuesForCooker(true))
            sessionStorage.setItem('authCooker', true)
            sessionStorage.removeItem('authUser')
          }
          else {
            dispatch(authStatuesForUser(true));
            sessionStorage.setItem("authUser", true);
            sessionStorage.removeItem("authCooker");
          } else if (user.displayName.split("@")[1] == "cook") {
            dispatch(authStatuesForCooker(true));
            sessionStorage.setItem("authCooker", true);
            sessionStorage.removeItem("authUser");
          } else {
            console.log("else", user);
          }
        });
      } catch (err) {
        console.log(err);
        setMessage({
          ...errorMessage,
          emailErr: "البريد الإلكتروني مسجل سابقاً",
        });
      }
    } else {
    /*  let check =[]
      for (const item in data){
        
        if (data[item]== ""){
          check.push(item)
        }
      // let check =[]
      // for (const item in data){

      //   if (data[item]== ""){
      //     check.push(item)
      //   }

      // }


      console.log(check)
      let variable =''

      check.map(ele=>{
        variable=`${ele}Err`
        // setMessage({
        //       ...errorMessage,
        //       variable :  "يجب أن تكمل البيانات الناقصه  " ,
        //     })
         errorMessage[variable]="يجب أن تكمل البيانات الناقصه  "
         
        console.log(variable ,'vvvvvvvvvvv')
      })
*/

      // !data.photo
      //   ? setMessage({
      //     ...errorMessage,
      //     photoErr: !e.target.files ? "يجب أن تختر صوره " : "",
      //   })
      //   :
      //   data.kindUser == ""
      //     ? setMessage({
      //       ...errorMessage,
      //       fNameErr: "يجب أن تدخل الاسم الاول ",
      //     })
      //     : data.lName == ""
      //       ? setMessage({
      //         ...errorMessage,
      //        lNameErr: "يجب أن تدخل الاسم الثاني ",
      //       }) : data.email == ""
      //         ? setMessage({
      //           ...errorMessage,
      //           emailErr: "يجب أن تدخل البريد الالكتروني  ",
      //         })
      //         :
      //         data.password == ""
      //           ? setMessage({
      //             ...errorMessage,
      //             passwordErr: "يجب أن تختر نوع حسابك",
      //           })
      //           :
      //           data.phone == ""
      //             ? setMessage({
      //               ...errorMessage,
      //               phoneErr: "يجب أن تختر تليفونك ",
      //             })
      //             : data.address == ""
      //               ? setMessage({
      //                 ...errorMessage,
      //                 addressErrِ: "يجب أن تختر عنوانك ",
      //               })
      //               :
      //               data.kindUser == ""
      //                 ? setMessage({
      //                   ...errorMessage,
      //                   kindUserErr: "يجب أن تختر نوع حسابك",
      //                 })
      //                 : data.country == ""
      //                   ? setMessage({
      //                     ...errorMessage,
      //                     countryErr: "يجب أن تختر بلدتك ",
      //                   })
      //                   : console.log("done");

      //fnma
      // console.log(check)
      // let variable =''
      // check.map(ele=>{
      //   variable=`${ele}Err`
      //   // `set${ele}Err`
      //   //  errorMessage[variable]="يجب أن تكمل البيانات الناقصه  "
      //   setMessage({
      //      fNameErr:"يجب أن تكمل البيانات الناقص",
      //     //  [variable] :"يجب أن تكمل البيانات الناقص",
      //      kindUserErr :"يجب أن تكمل البيانات الناقص",
      //      passwordErr :"يجب أن تكمل البيانات الناقص",
      //      phoneErr :"يجب أن تكمل البيانات الناقص",
      //      photoErr :"يجب أن تكمل البيانات الناقص",
      //      addressErr :"يجب أن تكمل البيانات الناقص",
      //      countryErr :"يجب أن تكمل البيانات الناقص",
      //     //  Err :"يجب أن تكمل البيانات الناقص",
      //   });
      //   console.log(errorMessage ,'vvvvvvvvvvv')
      // })

      !data.photo
        ? setMessage({
            ...errorMessage,
            photoErr: !e.target.files ? "يجب أن تختر صوره " : "",
          })
        : data.kindUser == ""
        ? setMessage({
            ...errorMessage,
            fNameErr: "يجب أن تدخل الاسم الاول ",
          })
        : data.lName == ""
        ? setMessage({
            ...errorMessage,
            lNameErr: "يجب أن تدخل الاسم الثاني ",
          })
        : data.email == ""
        ? setMessage({
            ...errorMessage,
            emailErr: "يجب أن تدخل البريد الالكتروني  ",
          })
        : data.password == ""
        ? setMessage({
            ...errorMessage,
            passwordErr: "يجب أن تختر نوع حسابك",
          })
        : data.phone == ""
        ? setMessage({
            ...errorMessage,
            phoneErr: "يجب أن تختر تليفونك ",
          })
        : data.address == ""
        ? setMessage({
            ...errorMessage,
            addressErrِ: "يجب أن تختر عنوانك ",
          })
        : data.kindUser == ""
        ? setMessage({
            ...errorMessage,
            kindUserErr: "يجب أن تختر نوع حسابك",
          })
        : data.country == ""
        ? setMessage({
            ...errorMessage,
            countryErr: "يجب أن تختر بلدتك ",
          })
        : console.log("done");

      // console.log(e.target.files);
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
        fNameErr:
          e.target.value.length === 0
            ? "يجب أن تدخل الاسم"
            : rgex["fName"].test(e.target.value)
            ? null
            : "الاسم يجب أن لا يقل عن 2 أحرف",
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
        lNameErr:
          e.target.value.length === 0
            ? "يجب أن تدخل الاسم"
            : rgex["lastName"].test(e.target.value)
            ? null
            : "الاسم يجب أن لا يقل عن 2  أحرف",
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
        photoErr: e.target.files[0].length == 0 ? "يجب أن تختر صوره " : data.photo.type != 'image/jpeg' || data.photo.type != 'image/png' ? 'يجب ان تختار صوره فقط' : "",
        photoErr: !e.target.files[0]
          ? "يجب أن تختر صوره "
          : data.photo.type != "image/jpeg" || data.photo.type != "image/png"
          ? "يجب ان تختار صوره فقط"
          : "",
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
      data.fName.length !== 0 &&
      data.lName.length !== 0 &&
      data.email.length !== 0 &&
      data.password.length !== 0 &&
      data.address.length !== 0 &&
      data.phone.length !== 0 &&
      data.country.length !== 0 &&
      data.kindUser.length !== 0 &&
      data.photo.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  //console.log(data.photo.type, 'pppppppppppppppppppp')
  // console.log(data.photo.type, 'pppppppppppppppppppp')

  return (
    <>
      {
        <Alert
          show={show}
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
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
                  type="text"
                  placeholder="الاسم الثاني "
                  autoComplete="name"
                  name="lName"
                  style={{ width: "100%" }}
                  onChange={(e) => changeData(e)}
                />
                <small className="text-danger">{errorMessage.lNameErr}</small>
              </div>
              <div className="d-flex flex-column" style={{ width: "49%" }}>
                <input
                  type="text"
                  placeholder="الاسم الأول"
                  autoComplete="name"
                  name="fName"
                  value={data.fName}
                  style={{ width: "100%" }}
                  onChange={(e) => changeData(e)}
                />
                <small className="text-danger " style={{ textAlign: "right" }}>
                  {errorMessage.fNameErr}
                </small>
              </div>
            </div>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              name="email"
              onChange={(e) => changeData(e)}
            />
            <small className="text-danger" style={{ textAlign: "right" }}>
              {errorMessage.emailErr}
            </small>
            <input
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
            >
              <option value="" hidden>
                اختر نوع حسابك
              </option>

              <option value="user">عميل</option>
              <option value="cook">طباخ</option>
            </select>
            <small className="text-danger" style={{ textAlign: "right" }}>
              {errorMessage.kindUserErr}
            </small>

            <input
              style={{ display: "none" }}
              type="file"
              accept="image/png,image/jpeg"
              id="file"
              name="photo"
              onChange={(e) => changeData(e)}
              // {...getInputProps()}
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
            <small className="text-success" style={{ textAlign: "right" }}>
              {/* <ul>{acceptedFileItems}</ul> */}
            </small>
            <small className="text-danger" style={{ textAlign: "right" }}>
              {errorMessage.photoErr}
              {/* <ul>{fileRejectionItems}</ul> */}
            </small>
            {/* {  console.log(fileRejectionItems)}  */}

            <input type="submit" value="إنشاء حساب" className="mybtn" />
          </form>
        </div>
      </div>
    </>
  );
}
