const formContent = document.querySelector(".form-content");
const test1 = document.getElementById('test1');


// Function to manage formtype (add or delete)
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
    dynamicInput.setAttribute("value", "");  // Optionnel: valeur par défaut
    // Append the input field to the form
    formContent.appendChild(text1);
    formContent.appendChild(dynamicInput);
    
      // For Income Goal, set the type to number
      if (name === "Income Goal" || name === "Actual Income") {
        dynamicInput.setAttribute("type", "number");
        dynamicInput.setAttribute("min", "0");  // Optional: set a minimum value (0 in this case)
      } else {
        dynamicInput.setAttribute("type", "text");
      }
  }
  
  // Function to clear the form (for resetting the modal)
  export async function ClearForm() {
    formContent.innerHTML = "";  // Efface tout le contenu du formulaire
  }
  
  export async function CreateSubmitBtn(id) {
    let submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Envoyez");
    submitBtn.setAttribute("id", id);
    formContent.appendChild(submitBtn);
  }