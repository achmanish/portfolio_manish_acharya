
import React from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ContactFormFields from './ContactFormFields';
import { useContactForm } from './useContactForm';

const ContactForm = () => {
  const { 
    form, 
    handleSubmit, 
    isSubmitting, 
    submitSuccess,
    submitError
  } = useContactForm();

  return (
    <section className="bg-card rounded-lg p-4 md:p-6 border border-border shadow-lg w-full" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-lg font-semibold text-foreground mb-4">Send Message</h3>
      
      <p className="mb-6 text-muted-foreground text-sm leading-relaxed">
        I'm currently open to new opportunities and collaborations. 
        Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(handleSubmit)} 
          className="space-y-4 md:space-y-6 w-full"
          noValidate
          aria-describedby={submitSuccess ? "success-message" : submitError ? "error-message" : undefined}
        >
          <ContactFormFields form={form} />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full group flex items-center justify-center bg-transparent hover:bg-primary/10 text-primary border border-primary px-6 py-3 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
            aria-describedby="button-status"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" aria-hidden="true"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </>
            )}
          </Button>
          
          <div id="button-status" className="sr-only">
            {isSubmitting ? "Form is being submitted" : "Form ready to submit"}
          </div>
          
          {submitSuccess && (
            <Alert id="success-message" className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800" role="status">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              <AlertDescription>
                Thanks for your message! I'll get back to you soon.
              </AlertDescription>
            </Alert>
          )}
          
          {submitError && (
            <Alert id="error-message" className="bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800" role="alert">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              <AlertDescription>
                {submitError}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
