const firstnameError = document.querySelector(".firstname-error")
const lastnameError = document.querySelector(".lastname-error")
const emailError = document.querySelector(".email-error")
const queryError = document.querySelector(".query-error")
const messageError = document.querySelector(".message-error")
const consentError = document.querySelector(".consent-error")


const form = document.querySelector(".form")
const firstNameInput = document.getElementById("first-name")
const lastNameInput = document.getElementById("last-name")
const emailInput = document.getElementById("email")
const queryType = () => document.querySelector("input[name='queryType']:checked")
const messageInput = document.getElementById("message")
const consentCheckbox = document.getElementById("check")
const success = document.querySelector(".success")

const ERROR_COLOR = "hsl(0, 66%, 54%)";
const SUCCESS_COLOR = "hsl(169, 82%, 27%)";


function validateField(target){
    const field = target.name;
    const value = target.value.trim();
    let isValid= true;

    switch(field){
        case "first-name":
            if (value === "") {
                firstnameError.textContent = "This field is required";
                target.style.borderColor = ERROR_COLOR;
                firstnameError.style.color = ERROR_COLOR;
                isValid = false;
            } else {
                firstnameError.textContent = "";
                target.style.borderColor = SUCCESS_COLOR;
            }
            break;


            case "last-name":
            if (value === "") {
                lastnameError.textContent = "This field is required";
                target.style.borderColor = ERROR_COLOR;
                lastnameError.style.color = ERROR_COLOR;
                isValid = false;
            } else {
                lastnameError.textContent = "";
                target.style.borderColor = SUCCESS_COLOR;
            }
            break;


            case "email":
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                emailError.textContent = "Please enter a valid email address";
                target.style.borderColor = ERROR_COLOR;
                emailError.style.color = ERROR_COLOR;
                isValid = false;
            } else {
                emailError.textContent = "";
                target.style.borderColor = SUCCESS_COLOR;
            }
            break;


            case "message":
                if (value === "") {
                    messageError.textContent = "This field is required";
                    target.style.borderColor = ERROR_COLOR;
                    messageError.style.color = ERROR_COLOR;
                    isValid = false;
                } else {
                    messageError.textContent = "";
                    target.style.borderColor = SUCCESS_COLOR;
                }
                break;
    
            default:
                break;
        }
        return isValid
    }

    form.addEventListener("input", (e) => {
        if (["first-name", "last-name", "email", "message"].includes(e.target.name)) {
            validateField(e.target);
        }
    });


const radioButtons = document.querySelectorAll("input[name='queryType']");
radioButtons.forEach((radio) => {
  radio.addEventListener("input", () => {
    queryError.textContent = "";
   
  });
});
    
consentCheckbox.addEventListener("input", () => {
    if (consentCheckbox.checked) {
      consentError.textContent = "";
      consentCheckbox.parentElement.style.backgroundColor = SUCCESS_BG_COLOR;
    }
  });

form.addEventListener('submit', function (e){
    e.preventDefault()

    firstnameError.textContent='';
    lastnameError.textContent='';
    emailError.textContent='';
    queryError.textContent='';
    messageError.textContent='';
    consentError.textContent='';
    let isValid= true;

 


    if (!validateField(firstNameInput)) isValid = false;
    if (!validateField(lastNameInput)) isValid = false;
    if (!validateField(emailInput)) isValid = false;
    if (!validateField(messageInput)) isValid = false;


    if (!queryType()) {
        queryError.textContent = "Please select a query type";
        queryError.style.color = ERROR_COLOR;
        isValid = false;
    }

    if (!consentCheckbox.checked) {
        consentError.textContent = "To submit this form,please consent to being contacted";
        consentError.style.color = ERROR_COLOR;
        isValid = false;
    }

    if (isValid) {
        success.style.display = "block"
        form.reset();

        [firstNameInput, lastNameInput, emailInput, messageInput].forEach((input) => {
            input.style.borderColor = "";
        });

        setTimeout(() => {
            success.style.display = "none";
        }, 3000);
    }

})
