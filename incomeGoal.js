import { CreateTextField, CreateSubmitBtn, openForm } from "./form.js";
import { CloseModal } from "./modal.js";


const userIncomeGoal = document.getElementById('user-income-goal');
const userActualIncome = document.getElementById('user-actual-income');
const progressBar = document.getElementById('myBar');
const percentage = document.getElementById('percentage');
const monthProgress = document.getElementById('month-progress');
const userGoal = document.getElementById('text-income-goal');
const userName = document.getElementById('username')

export function IncomeGoalA() {
      CreateTextField("Income Goal", "Enter your income goal", "setIncomeGoal");
      CreateTextField("Actual Income", "Enter your actual income", "setActualIncome");
      CreateSubmitBtn("goal-btn")

      // Récupérer les id des inputs
      let setIncomeGoal = document.getElementById("setIncomeGoal")
      let setActualIncome = document.getElementById("setActualIncome")
      let goalBtn = document.getElementById("goal-btn")

      // Récupère le contenu des éléments span et enlève les espaces et les virgules avant de convertir en nombre
      setIncomeGoal.value = parseInt(userIncomeGoal.textContent.replace(/[, ]/g, ''), 10);
      setActualIncome.value = parseInt(userActualIncome.textContent.replace(/[, ]/g, ''), 10);
      // Function pour gérer l'envoie des données des nouveaux objectifs
      goalBtn.onclick = function() {
        try {
          // Mise à jour des spans avec les nouvelles valeurs soumises
          userActualIncome.innerHTML = `${setActualIncome.value}`;
          userIncomeGoal.innerHTML = `${setIncomeGoal.value}`;
          
          // Calcul et mise à jour de la barre de progression
          const progressBarPercentage = (parseFloat(setActualIncome.value) / parseFloat(setIncomeGoal.value)) * 100;
          percentage.textContent = progressBarPercentage + '%';
          progressBar.style.width = progressBarPercentage + '%';
          if (progressBarPercentage >= 100) {
            monthProgress.textContent = "Etablissez de nouveaux objectifs !"
            percentage.textContent = 'Félicitations !';
            userGoal.textContent = userName.textContent;
          } else {
            monthProgress.textContent = "Progress to month"
          }
          CloseModal();
        } catch (error) {
          console.log(error)
        }
 
      }
}