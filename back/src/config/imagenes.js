import multer from "multer";

const storage = multer.diskStorage({
  destination: function (res, img, cb) {
    cb(null, "public/img");
  },
  filename: function (res, img, cb) {
    cb(null, img.originalname);
  },
});

// ejecuta la funcion para cargar las imagenes
const upload = multer({ storage: storage });
export const cargarImagen = upload.single("img");