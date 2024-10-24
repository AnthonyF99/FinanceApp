const formContent = document.querySelector(".form-content");
const test1 = document.getElementById('test1');


// WIP Function to manage formtype (add or delete)
export async function openForm(formType) {
  let title = ""
    switch (formType) {
      case 'add':
        title="ajout";
        break;
      case 'delete':
        title="supprimer";
        break;
        default:
          title="Uknown type";
    }
    test1.innerHTML = title
  }
  
  
  // Function to create a dynamic text field
  export async function CreateTextField(name, placeholder, id) {
    // Create input element
    let dynamicInput = document.createElement("input");
    let text1 = document.createElement("p")
    
    text1.innerHTML = name + ' : '
    dynamicInput.setAttribute("type", "text");
    dynamicInput.setAttribute("name", name);
    dynamicInput.setAttribute("placeholder", placeholder);
    dynamicInput.setAttribute("id", id);
    dynamicInput.setAttribute("value", "");  // Facultative: default value
    // Append the input field to the form
    formContent.appendChild(text1);
    formContent.appendChild(dynamicInput);
    
   // Use Set pour for much better performance
  const numberFields = new Set(["Income Goal", "Actual Income"]);
  const numberIds = new Set(["setActualSrcIncome", "setActualSrcSpendings", "setActualSrcAssets"]);

  // Checking if the id match
  if (numberFields.has(name) || numberIds.has(id)) {
    dynamicInput.type = "number";
    dynamicInput.min = "0"; // min value
  } else {
    dynamicInput.type = "text";
  }

  }
  
  // Function to clear the form (for resetting the modal)
  export async function ClearForm() {
    formContent.innerHTML = "";  // clean the form
  }
  
  export async function CreateSubmitBtn(id) {
    let submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Envoyez");
    submitBtn.setAttribute("id", id);
    formContent.appendChild(submitBtn);
  }