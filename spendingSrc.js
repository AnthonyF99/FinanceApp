import { CreateTextField, CreateSubmitBtn, openForm } from "./form.js";
import { CloseModal } from "./modal.js";
import { addData, removeData } from "./chartManager.js"
import { chartSpending } from './chart.js';  // Importation de l'instance du chart


const category = document.querySelector('.spending-category');
const actualSpendingPerCategory = document.querySelector('.actual-spending');
const spendingItem = document.querySelector('.spending-item');
const spendingInfo = document.querySelector('.spending-info');
const spendingList = document.querySelector('.spending-list');
let exist = false;


export function SpendingsSource() {
    //Nom, Placeholder, Id
      CreateTextField("Your Spendings Source", "Enter your Spendings source", "setSpendingsSrc");
      CreateTextField("Your Spendings", "Enter your actual Spendings from the source", "setActualSrcSpendings");
      CreateSubmitBtn("src-btn")

      // Récupérer les id des inputs
      let setSpendingsSrc = document.getElementById("setSpendingsSrc")
      let setActualSrcSpendings = document.getElementById("setActualSrcSpendings")
      let srcBtn = document.getElementById("src-btn")

     
      // Function pour gérer l'envoie des données des nouveaux objectifs
      srcBtn.onclick = function() {
        try {
          if (exist === false) {
            let newSpendingSrc = document.createElement("p");
            let newActualSpending = document.createElement("p");
            let newSpendingItem = document.createElement("li");
            let newSpendingInfo = document.createElement("div");

            //Set the class of the elements
            newSpendingItem.classList.add("spending-item");
            newSpendingInfo.classList.add("spending-info");
            newSpendingSrc.classList.add("spending-category");
            newActualSpending.classList.add("actual-spending");

            //Add the new values
            newSpendingSrc.innerText = setSpendingsSrc.value;
            newActualSpending.innerText = setActualSrcSpendings.value;

            //Append all the new values
            newSpendingInfo.appendChild(newSpendingSrc);
            newSpendingInfo.appendChild(newActualSpending);
            newSpendingItem.appendChild(newSpendingInfo);
            spendingList.appendChild(newSpendingItem);
          } else {
            // Récupère le contneu des éléments span et enlève les espaces et les virgules avant de convertir en nombre
            setSpendingsSrc.value = category.textContent
            setActualSrcSpendings.value = parseInt(actualSpendingPerCategory.textContent.replace(/[, ]/g, ''), 10);
            
            // Mise à jour des spans avec les nouvelles valeurs soumises
            category.innerHTML = `${setSpendingsSrc.value}`;
            actualSpendingPerCategory.innerHTML = `${setActualSrcSpendings.value}`;
          }
          CloseModal();
      } catch (error) {
          console.log(error);
      }
      }
}