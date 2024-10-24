import { CreateTextField, CreateSubmitBtn, openForm } from "./form.js";
import { CloseModal } from "./modal.js";
import { addData, removeData } from "./chartManager.js"
import { chartAsset } from './chart.js';  // Importation de l'instance du chart

let exist = false;
let assetType = document.querySelector('.assets-type');

export function Assets() {
    //Nom, Placeholder, Id
      CreateTextField("Your Assets Source", "Enter your Assets source", "setAssetsSrc");
      CreateTextField("Your Asset Income", "Enter your actual Asset Income from the source", "setActualSrcAssets");
      CreateSubmitBtn("src-btn")

      // Récupérer les id des inputs
      let setAssetsSrc = document.getElementById("setAssetsSrc")
      let setActualSrcAssets = document.getElementById("setActualSrcAssets")
      let srcBtn = document.getElementById("src-btn")

      // Function pour gérer l'envoie des données des nouveaux objectifs
      srcBtn.onclick = function() {
        try {
          //Gère l'ajout de nouvelle charte
          let newChartAssetSrc = setAssetsSrc.value;
          let newActualChartAsset = setActualSrcAssets.value;

          //Créez les nouveau elements textuelle sous la chart
          let newAssetSrc = document.createElement("p");
          let newActualAsset = document.createElement("p");
          let newAssetDiv = document.createElement("div");

          //Set the class of the elements
          newAssetDiv.classList.add("asset");
          newAssetSrc.classList.add("asset-category");
          newActualAsset.classList.add("actual-asset");

          //Add the new values
          newAssetSrc.innerText = setAssetsSrc.value;
          newActualAsset.innerText = setActualSrcAssets.value;

          //Append all the new values
          newAssetDiv.appendChild(newAssetSrc);
          newAssetDiv.appendChild(newActualAsset);
          assetType.appendChild(newAssetDiv);
          // Vérifie que les valeurs existent et sont correctes
          if(newChartAssetSrc && newActualChartAsset){
              addData(chartAsset, newChartAssetSrc, newActualChartAsset);  // Mise à jour des données du chart
              CloseModal();
          }
      } catch (error) {
          console.log(error);
      }
 
      }
}