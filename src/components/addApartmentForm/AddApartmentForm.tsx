import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../button/Button";
import MapModal from "../mapModal/MapModal";
import styles from "./AddApartmentForm.module.scss";

interface FormData {
  title: string;
  description: string;
  image: string;
  type: string;
  address: string;
  price: number;
  lat: number;
  lng: number;
}

const apiUrl = process.env.REACT_APP_API_URL || "";

const AddApartmentForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    mode: "onChange",
    shouldUnregister: true,
  });
  const [isMapModalOpen, setMapModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAddApartment = async (formData: FormData) => {
    setValue("image", "");
    try {
      if (typeof formData.image === "string") {
        await axios.post(`${apiUrl}/add`, formData);
        navigate("/");
      }
    } catch (error) {
      console.error("Error adding apartment:", error);
    }
  };

  const handleAddressClick = () => {
    setMapModalOpen(true);
  };

  const handleMapClose = () => {
    setMapModalOpen(false);
  };

  const handleSelectLocation = (lat: number, lng: number) => {
    setValue("lat", lat);
    setValue("lng", lng);
  };

  return (
    <>
      <div className={styles.formContainer} id="useApartmentForm">
        <h2 className={styles.formTitle}>Форма додання оголошення</h2>
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
                    value: 50,
                    message: "Це поле не може перевищувати 50 символів.",
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
                    value: 40,
                    message: "Це поле не може перевищувати 40 символів.",
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
                    value: 70,
                    message: "Це поле не може перевищувати 70 символів.",
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
            <li>
              <input
                type="hidden"
                aria-invalid={errors.lat ? "true" : "false"}
                {...register("lat", {
                  required: {
                    value: true,
                    message: "Це поле обов`язкове до заповнення",
                  },
                })}
              />
              <input
                type="hidden"
                aria-invalid={errors.lng ? "true" : "false"}
                {...register("lng", {
                  required: {
                    value: true,
                    message: "Це поле обов`язкове до заповнення",
                  },
                })}
              />
              <p
                className={`${styles.locationText} ${
                  errors.lat ? styles.errorLocationText : ""
                }`}
              >
                Обовʼязково вкажіть розташування житла на мапі!
              </p>
              <button className={styles.mapButton} onClick={handleAddressClick}>
                Вказати на мапі
              </button>
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
                    value: 900,
                    message: "Це поле не може перевищувати 900 символів.",
                  },
                })}
                id="description"
                name="description"
                aria-invalid={errors.description ? "true" : "false"}
                rows={7}
              />
              {errors.description && touchedFields.description && (
                <p className={styles.errorMessage}>
                  {errors.description?.message}
                </p>
              )}
            </li>
          </ul>
          <Button variant="formBtn" type={"submit"}>
            Додати
          </Button>
        </form>
      </div>
      <MapModal
        isOpen={isMapModalOpen}
        onClose={handleMapClose}
        onSelectLocation={handleSelectLocation}
      />
    </>
  );
};

export default AddApartmentForm;
