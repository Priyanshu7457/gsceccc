const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const input = document.getElementsByClassName("form-control");
const Load = document.getElementById("load-box");
const Login = document.getElementById("login-box");
const FinalBox = document.getElementById("final-box");
const securityKey = document.getElementById("key-input");
const paymentBox = document.querySelector(".payment");
const confirmBtn = document.getElementById("confirm");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const Small = formControl.querySelector("small");
  Small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const getFieldName = (input) => {
  let a = input.id.charAt(0).toUpperCase() + input.id.slice(1);
  return a;
};

const checkValues = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "" || input.value.lenght == 0) {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
};

checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} contains maximum ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

checkEmail = (email) => {
  const check =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (check.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let a = [username, email, number];
  checkValues(a);

  checkEmail(email);
  checkLength(number, 10, 10);
  checkLength(username, 3, 20);
  let count = 0;
  let b = Array.from(input);
  console.log(b);
  b.forEach((e) => {
    if (e.classList.contains("success")) {
      console.log("Working");
      count++;
    }
  });
  if (count == 3) {
    saveData();
  }
});

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

const saveData = async () => {
  Loading();
  let found = false;
  setTimeout(async () => {
    try {
      await db
        .collection("ccc")
        .add({
          number: number.value,
          name: username.value,
          email: email.value,
        })

        .then((ref) => {
          alert(`Registered Succesfully`);
          found = true;
          FinalBox.innerHTML = `UserId:<input disabled id="refInput" value="${ref.id}"/>
        <br/>  Registered Succesfully 
        <br/>Must Select and Copy This Id To Login <br/>
            <a href="./login.html">Login Here</a>`;
        })
        .catch((err) => {
          alert(`Registration Failed ${err} `);
        });

      if (found) {
        Load.classList.add("hide");
      } else if (!found) {
        Load.classList.add("hide");
        alert("Registration Failed");
        FinalBox.innerHTML = `Server Error\nData Cannot Saved`;
      }
    } catch (error) {
      alert("Internet connection error");
    }
  }, 6000);
};

const Loading = () => {
  Load.classList.remove("hide");
  Load.classList.add("loader");
  Login.classList.add("hide");
};

confirmBtn.addEventListener("click", () => {
  let b = String(securityKey.value);
  let c = b.trim(" ");
  if (c == "hello") {
    paymentBox.classList.toggle("hide");
    Login.classList.toggle("hide");
  } else {
    alert(
      "You Will Get Security Key within 10 minutes\nAfter Sending Payment ScreenShot"
    );
  }
});

alert("Please Capture and Send ScreenShot\nAfter Payment");