import { useForm } from "react-hook-form";
import styles from "./AddApartmentForm.module.scss";

interface FormData {
  title: string;
  description: string;
  image: string;
  type: string;
  address: string;
  price: number;
}

const AddApartmentForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors, touchedFields },
  } = useForm<FormData>({
    mode: "onChange",
    shouldUnregister: true,
  });

  const handleAddApartment = async (formData: FormData) => {
    console.log("formData", formData);
  };

  return (
    <>
      <div className={styles.formContainer} id="useApartmentForm">
        <h2 className={styles.formTitle}>Add Apartment Form</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleAddApartment)}
        >
          <ul>
            <li className={styles.inputContainer}>
              <label className={styles.label} htmlFor="title">
                Заголовок
              </label>
              <input
                className={`${styles.input} ${
                  errors.title && touchedFields.title ? styles.errorInput : ""
                }`}
                {...register("title", {
                  required: {
                    value: true,
                    message: "Це поле обов`язкове до заповнення",
                  },
                  minLength: {
                    value: 2,
                    message: "Це поле має бути довшим за 2 символи.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Це поле не може перевищувати 30 символів.",
                  },
                })}
                type="text"
                id="title"
                name="title"
                aria-invalid={errors.title ? "true" : "false"}
              />
              {errors.title && touchedFields.title && (
                <p className={styles.errorMessage}>{errors.title?.message}</p>
              )}
            </li>
            <li className={styles.inputContainer}>
              <label className={styles.label} htmlFor="description">
                Опис
              </label>
              <textarea
                className={`${styles.input} ${
                  errors.description && touchedFields.description
                    ? styles.errorInput
                    : ""
                }`}
                {...register("description", {
                  maxLength: {
                    value: 300,
                    message: "Це поле не може перевищувати 300 символів.",
                  },
                })}
                id="description"
                name="description"
                aria-invalid={errors.description ? "true" : "false"}
              />
              {errors.description && touchedFields.description && (
                <p className={styles.errorMessage}>
                  {errors.description?.message}
                </p>
              )}
            </li>
            <li className={styles.inputContainer}>
              <label className={styles.label} htmlFor="image">
                Фото
              </label>
              <input
                className={`${styles.input} ${
                  errors.image && touchedFields.image ? styles.errorInput : ""
                }`}
                {...register("image", {})}
                type="file"
                id="image"
                name="image"
                aria-invalid={errors.image ? "true" : "false"}
              />
              {errors.image && touchedFields.image && (
                <p className={styles.errorMessage}>{errors.image?.message}</p>
              )}
            </li>
            <li className={styles.inputContainer}>
              <label className={styles.label} htmlFor="type">
                Тип житла
              </label>
              <input
                className={`${styles.input} ${
                  errors.type && touchedFields.type ? styles.errorInput : ""
                }`}
                {...register("type", {
                  required: {
                    value: true,
                    message: "Це поле обов`язкове до заповнення",
                  },
                  minLength: {
                    value: 2,
                    message: "Це поле має бути довшим за 2 символи.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Це поле не може перевищувати 30 символів.",
                  },
                })}
                type="text"
                id="type"
                name="type"
                aria-invalid={errors.type ? "true" : "false"}
              />
              {errors.type && touchedFields.type && (
                <p className={styles.errorMessage}>{errors.type?.message}</p>
              )}
            </li>
            <li className={styles.inputContainer}>
              <label className={styles.label} htmlFor="address">
                Адреса
              </label>
              <input
                className={`${styles.input} ${
                  errors.address && touchedFields.address
                    ? styles.errorInput
                    : ""
                }`}
                {...register("address", {
                  required: {
                    value: true,
                    message: "Це поле обов`язкове до заповнення",
                  },
                  minLength: {
                    value: 2,
                    message: "Це поле має бути довшим за 2 символи.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Це поле не може перевищувати 30 символів.",
                  },
                })}
                type="text"
                id="address"
                name="address"
                aria-invalid={errors.address ? "true" : "false"}
              />
              {errors.address && touchedFields.address && (
                <p className={styles.errorMessage}>{errors.address?.message}</p>
              )}
            </li>
            <li className={styles.inputContainer}>
              <label className={styles.label} htmlFor="price">
                Ціна
              </label>
              <input
                className={`${styles.input} ${
                  errors.price && touchedFields.price ? styles.errorInput : ""
                }`}
                {...register("price", {
                  required: {
                    value: true,
                    message: "Це поле обов`язкове до заповнення",
                  },
                  maxLength: {
                    value: 30,
                    message: "Це поле не може перевищувати 30 символів.",
                  },
                })}
                type="number"
                id="price"
                name="price"
                aria-invalid={errors.price ? "true" : "false"}
              />
              {errors.price && touchedFields.price && (
                <p className={styles.errorMessage}>{errors.price?.message}</p>
              )}
            </li>
          </ul>
          <button className={styles.button} type={"submit"} disabled={!isValid}>
            Додати
          </button>
        </form>
      </div>
    </>
  );
};

export default AddApartmentForm;
