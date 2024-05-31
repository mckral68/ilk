"use client";
import { useModel } from "../../context/modelContext";
import { useFormik } from "formik";
import validations from "./validation";
function Modal() {
  const { setShow } = useModel();
  const {
    handleSubmit,
    handleChange,
    isSubmitting,
    errors,
    validateOnChange,
    submitCount,
  } = useFormik({
    initialValues: {
      q: "",
    },
    onSubmit: (values, bag) => {
      values.q === "A" ? setShow(false) : "";
      bag.resetForm();
    },
    validationSchema: validations,
    validateOnChange: false,
  });
  const cevap = [
    { value: "A" },
    { value: "B" },
    { value: "C" },
    { value: "D" },
    { value: "E" },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 bg-black overflow-y-auto text-white h-full w-full flex items-center justify-center">
        <div className="p-4 border w-96 shadow-lg rounded-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold ">Merhaba</h3>
            <div className="mt-2 px-7 py-3">
              <h3 className="mb-4 font-semibold  dark:text-white">
                Sorunun cevabını işaretleyip kontrol edebilirsin.
              </h3>
              <ul className="text-sm font-medium  bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {cevap.map((a) => (
                  <li
                    key={a.value}
                    className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                  >
                    <div className="flex items-center ps-3">
                      <input
                        id="q"
                        type="radio"
                        onChange={handleChange("q")}
                        value={a.value}
                        name="q"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="q"
                        className="w-full py-3 ms-2 text-sm font-medium dark:text-gray-300"
                      >
                        {a.value}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center mt-4">
              {/* Navigates back to the base URL - closing the modal */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Kontrol Et
              </button>
            </div>
            {errors.q ? <p>{errors.q}</p> : ""}
          </div>
        </div>
      </div>
    </form>
  );
}
export default Modal;
