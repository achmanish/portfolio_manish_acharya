
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { saveMessage } from '@/lib/messageStorage';
import { validateEmail } from '@/lib/emailValidation';
import { formSchema, FormValues } from './contactFormSchema';

export const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Define form with validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    try {
      // Additional client-side validation
      if (!values.name.trim()) {
        throw new Error("Name is required");
      }
      
      if (!values.email.trim()) {
        throw new Error("Email is required");
      }
      
      if (!values.message.trim()) {
        throw new Error("Message is required");
      }
      
      if (values.message.trim().length < 10) {
        throw new Error("Message must be at least 10 characters long");
      }
      
      // Validate email once more before submission
      const emailValidation = validateEmail(values.email);
      if (!emailValidation.isValid) {
        throw new Error(emailValidation.message || "Invalid email address");
      }

      // Extract domain for provider-specific messages
      const domain = values.email.split('@')[1].toLowerCase();
      let providerName = "email provider";
      
      if (domain.includes('gmail')) {
        providerName = "Google";
      } else if (domain.includes('apple') || domain.includes('icloud') || domain.includes('me.com')) {
        providerName = "Apple";
      } else if (domain.includes('microsoft') || domain.includes('outlook') || domain.includes('hotmail') || domain.includes('live.com')) {
        providerName = "Microsoft";
      } else if (domain.includes('yahoo')) {
        providerName = "Yahoo";
      }
      
      // Save the message to local storage with explicit typing
      const savedMessage = saveMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      
      // Show success message
      setSubmitSuccess(true);
      form.reset();
      
      toast({
        title: "Message sent!",
        description: `Thank you for reaching out from your ${providerName} account. I'll get back to you soon.`,
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Your message couldn't be sent. Please try again.";
      setSubmitError(errorMessage);
      
      toast({
        title: "Something went wrong",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    handleSubmit,
    isSubmitting,
    submitSuccess,
    submitError
  };
};
