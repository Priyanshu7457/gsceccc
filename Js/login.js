const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAoqu8jzmu-bi1BVQWw9-n6r7BLVRTVXGA",
  authDomain: "gsce-data-a9a6e.firebaseapp.com",
  projectId: "gsce-data-a9a6e",
  storageBucket: "gsce-data-a9a6e.appspot.com",
  messagingSenderId: "917605106647",
  appId: "1:917605106647:web:aed86e58a170d8a95f4192",
  measurementId: "G-DWZ8WY4VQR",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const form = document.querySelector("form");
const Load = document.getElementById("load-box");
const Login = document.getElementById("login-box");

const Loading = () => {
  Load.classList.remove("hide");
  Load.classList.add("loader");
  Login.classList.add("hide");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  readData();
  return false;
});

const readData = () => {
  const UserId = document.getElementById("fetch").value;

  if (UserId != "") {
    Loading();
    setTimeout(() => {
      db.collection("ccc")
        .get()
        .then((data) => {
          let a = data.docs.map((item) => {
            return {
              ...item.data(),
              id: item.id,
            };
          });
          return a;
        })

        .then((a) => {
          let Id;
          let found = false;
          for (let i = 0; i < a.length; i++) {
            Id = a[i].id;
            // console.log(Id);
            if (Id == UserId) {
              Load.classList.add("hide");
              document.querySelector(".home-box").hidden = false;
              Login.hidden = true;
              found = true;
              break;
            }
          }
          if (!found) {
            alert("Data Cannot Found\nInvalid User Id");
            window.location.reload();
          }
        })
        .catch((err) => {
          alert(`Unable to Fetch Data ${err}`);
        });
    }, 2000);
  } else {
    alert("Enter The UserId");
  }
  return false;
};

const run = () => {
  document.querySelector(".box1").hidden = false;
  document.querySelector(".home-box").hidden = true;
  document.querySelector(".pdf-box").hidden = true;
  document.querySelector(".box2").hidden = true;
  document.querySelector(".frame-box").hidden = true;
};

const run2 = () => {
  alert('To get Good Score in booster series\nPlease Complete Chapterwise series\n');
  document.querySelector(".box1").hidden = true;
  document.querySelector(".home-box").hidden = true;
  document.querySelector(".pdf-box").hidden = true;
  document.querySelector(".box2").hidden = false;
  document.querySelector(".frame-box").hidden = true;
};
// Chapter Wise 
const test = (testfile) => {
  let confirmBox = confirm("Do you want to Start Test");

  if (confirmBox) {
    document.querySelector("iframe").src = `./Test/CCC/CCC ${testfile}`;
    document.querySelector(".frame-box").hidden = false;
    document.querySelector(".box1").hidden = true;
    document.querySelector(".box2").hidden = true;
    document.querySelector(".pdf-box").hidden = true;
  }
};



// Random Question Test 

const random_test = (testfile) => {
  let confirmBox = confirm("Do you want to Start Test");

  if (confirmBox) {
    document.querySelector("iframe").src = `./Combine Test/CCC/CCC ${testfile}`;
    document.querySelector(".frame-box").hidden = false;
    document.querySelector(".box1").hidden = true;
    document.querySelector(".box2").hidden = true;
    document.querySelector(".pdf-box").hidden = true;
  }
};








const pdfstart = (pdffile) => {
  document.querySelector(".pdf-frame").src = `PDF viewer/CCC pdf/${pdffile}`;
  document.querySelector(".home-box").hidden = true;
  document.querySelector(".frame-box").hidden = true;
  document.querySelector(".pdf-box").hidden = false;
  document.querySelector(".box1").hidden = true;
  document.querySelector(".box2").hidden = true;
};

const logout = () => {
  window.location.reload();
};

const aboutccc = () => {
  document.querySelector(".box1").hidden = true;
  document.querySelector(".box2").hidden = true;
  document.querySelector(".home-box").hidden = false;
  document.querySelector(".pdf-box").hidden = true;
};
