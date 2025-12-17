
import * as z from "zod";
import { validateEmail } from '@/lib/emailValidation';

// Define the form validation schema with enhanced email validation
export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .refine((email) => {
      const { isValid, message } = validateEmail(email);
      if (!isValid) {
        throw new Error(message);
      }
      return isValid;
    }, { message: "Please enter a valid email from Google, Apple, Microsoft, or Yahoo" }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Define the type for form values
export type FormValues = z.infer<typeof formSchema>;
