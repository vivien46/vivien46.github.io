// ====== Js pour l'ajout de la date au format Français lors de l'appui sur le bouton telecherger ====== //

document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("download-cv");
  
    if (!downloadBtn) return;
  
    downloadBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Empêche l'ouverture du PDF dans un nouvel onglet
  
      const url = downloadBtn.getAttribute("href");
  
      // 🧠 Fait une requête pour récupérer le fichier PDF en blob
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const blobUrl = URL.createObjectURL(blob);
          const date = new Date();
          const formattedDate = date.toLocaleDateString("fr-FR").replace(/\//g, "-");
          const filename = `CV_Vivien_VLAD_${formattedDate}.pdf`;
  
          const tempLink = document.createElement("a");
          tempLink.href = blobUrl;
          tempLink.setAttribute("download", filename);
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
  
          // Libération de l'URL blob
          URL.revokeObjectURL(blobUrl);
        })
        .catch(error => {
          console.error("Erreur lors du téléchargement du fichier :", error);
        });
    });
  });
  
  
  