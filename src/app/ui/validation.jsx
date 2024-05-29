import { object, string } from "yup";

let qScheme = object({
  q: string()
    .required("Bir cevap işaretle")
    .equals(["A"], "Maalesef,yanlış cevap"),
});
export default qScheme;
