import { object, string } from "yup";

let qScheme = object({
  q: string().required().equals(["A"], "Maalesef,yanlış cevap"),
});
export default qScheme;
