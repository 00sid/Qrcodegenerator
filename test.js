const { renderQr, DEFAULT_QR_SIZE } = require("./qr.js"); // Import from qr.js
const fs = require("fs");

const qrData = "{name:Bibek gc, address:ghorahi}"; // The data to encode in the QR code
const qrOpts = {
  width: DEFAULT_QR_SIZE,
};

console.log("Starting QR code generation...");
renderQr("png", "utf8", qrData, qrOpts)
  .then((qrBuffer) => {
    console.log("QR Code generated successfully!");
    // Save the generated QR code as an image file
    fs.writeFileSync("qrcode.png", qrBuffer);
    console.log("QR Code saved as qrcode.png");
  })
  .catch((err) => {
    console.error("Error generating QR Code:", err);
  });
