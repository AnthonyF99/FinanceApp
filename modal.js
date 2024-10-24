import { IncomeGoalA } from "./incomeGoal.js";
import { ClearForm, openForm } from "./form.js";
import { IncomeSource } from "./incomeSrc.js";
import { SpendingsSource } from "./spendingSrc.js";
import { Assets } from "./assets.js"

// Get the modal
const modal = document.getElementById("myModal");
const ModalTitle = document.querySelector(".modal-title");
const choiceButton = document.querySelector('.modal-btns');
const modalTriggers = document.querySelectorAll('[data-modal-type]');
const deleteButton = document.getElementById('delete-btn');
const addButton = document.getElementById('add-btn');

// Function to initialize event listeners after DOM is loaded
function initModal() {
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalType = trigger.getAttribute('data-modal-type');
      OpenModal(modalType);
    });
  });


  deleteButton.addEventListener('click', () => {
    openForm('delete'); // Ouvre le formulaire de suppression
  });

  addButton.addEventListener('click', () => {
    openForm('add'); // Ouvre le formulaire d'ajout
  });

  // Close the modal when the <span> is clicked
  span.onclick = CloseModal;

  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      CloseModal();
    }
  };
}

// Open Modal Function
export async function OpenModal(type) {
  await ModalManager(type);
  modal.style.display = "block";
}

// Close Modal Function
export function CloseModal() {
  modal.style.display = "none";
  ClearForm(); // Assure-toi que cette fonction existe
}
// Function to manage modal content
async function ModalManager(type) {
  let title;

  switch (type) {
    case 'incomeGoal':
      title = "Income Goal";
      IncomeGoalA(); // Assure-toi que cette fonction ne nécessite pas de paramètres
      break;
    case 'incomeSrc':
      title = "Income Source";
      IncomeSource();
      break;
    case 'spendingsSrc':
      title = "Spendings";
      SpendingsSource();
      break;
    case 'assets':
      title = "Assets";
      Assets()
      break;
    default:
      title = "Unknown Type";
  }

  // Check the type to display the add and delete btns or not
  choiceButton.style.display = (type === "incomeGoal") ? "none" : "flex";
  
  // Set the modal title
  ModalTitle.innerHTML = title;
}

// Initialize the modal event listeners
document.addEventListener("DOMContentLoaded", initModal);
