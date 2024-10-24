import { CreateTextField, CreateSubmitBtn, openForm } from "./form.js";
import { CloseModal } from "./modal.js";
import { addData, removeData } from "./chartManager.js"
import { chartIncome } from './chart.js';  // Importation de l'instance du chart


export function IncomeSource() {
    //Nom, Placeholder, Id
    CreateTextField("Your Income Source Name", "Enter your income source", "setIncomeSrc");
    CreateTextField("Your Income", "Enter your actual income from the source", "setActualSrcIncome");
    CreateSubmitBtn("src-btn");

    // Récupérer les id des inputs
    let setIncomeSrc = document.getElementById("setIncomeSrc");
    let setActualSrcIncome = document.getElementById("setActualSrcIncome");
    let srcBtn = document.getElementById("src-btn");

    // Function pour gérer l'envoie des données des nouveaux objectifs
    srcBtn.onclick = function() {
        try {
            let newIncomeSrc = setIncomeSrc.value;
            let newActualIncome = setActualSrcIncome.value;

            // Vérifie que les valeurs existent et sont correctes
            if(newIncomeSrc && newActualIncome){
                addData(chartIncome, newIncomeSrc, newActualIncome);  // Mise à jour des données du chart
                CloseModal();
            }
        } catch (error) {
            console.log(error);
        }
    };
}