
import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup
                .string()
                .trim()
                .min(4, "Username must be at least 4 characters")
                .required("Username is required"),
    firstName: yup
                .string()
                .trim()
                .min(3, "First Name must be at least 3 characters")
                .required("A First Name is required"),

    lastName: yup
                .string()
                .trim()
                .min(3, "Last Name must be at least 3 characters")
                .required("A Last Name is required"),

    businessName: yup
                    .string()
                    .trim()
                    .min(3, "Business Name must be at least 3 characters")
                    .required("A Business Name is required"),

    jobTitle: yup
                    .string()
                    .trim()
                    .min(3, "Job Title must be at least 3 characters")
                    .required("A Job Title is required"),

    password: yup
                    .string()
                    .trim()
                    .min(8, "Business Name must be at least 8 characters")
                    .required("A Password is required"),

    productName: yup
                    .string()
                    .trim()
                    .min(3, "Product Name must be at least 3 characters")
                    .required("A Product Name is required"),

    productDescription: yup
                    .string()
                    .trim()
                    .min(3, "Product Description must be at least 3 characters")
                    .required("A Production Description is required"),

    productPrice: yup
                    .string()
                    .trim()
                    .min(3, "Product Product must be at least 3 characters")
                    .required("A Product is required"),
    location:yup
                .string()
                .oneOf(["North-Africa", "Central-Africa", "South-Africa"], "Location is required")
                .required("A Location is required")
})

export default formSchema;













































