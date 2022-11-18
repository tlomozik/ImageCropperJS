let image = document.querySelector("#frame");

//ToolBox buttons

let zoomIn = document.querySelector("#zoomIn");
let zoomOut = document.querySelector("#zoomOut");

let flip = document.querySelector("#flip");

// Toolbox buttons end
let hiddenUpload = document.querySelector("#input_image");
function upload() {
  var file = hiddenUpload.files[0];
  var url = window.URL.createObjectURL(new Blob([file], { type: "image/png" }));
  image.src = url;

  let options = {
    dragMode: "move",
    viewMode: 2,
    modal: false,
    responsive: true,
    background: false,
    ready: function () {
      let flipX = -1;

      zoomIn.onclick = () => cropper.zoom(0.1);
      zoomOut.onclick = () => cropper.zoom(-0.1);

      flip.onclick = () => {
        cropper.scale(flipX, 1);
        flipX = -flipX;
      };
    },
  };

  let cropper = new Cropper(image, options);
}

function clearImage() {
  // document.getElementById("formFile").value = null;
  image.src = null;
  cropper.clear();
}
