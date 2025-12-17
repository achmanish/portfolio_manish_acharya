
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from './contactFormSchema';
import { Mail, Apple, Laptop, MessageSquare } from 'lucide-react';

interface ContactFormFieldsProps {
  form: UseFormReturn<FormValues>;
}

const ContactFormFields = ({ form }: ContactFormFieldsProps) => {
  return (
    <div className="space-y-4 md:space-y-6 w-full">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="text-muted-foreground text-sm md:text-base">
              Name <span className="text-destructive" aria-label="required">*</span>
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="Your name" 
                className="bg-background border border-input focus:border-primary w-full min-h-[44px] text-base md:text-sm" 
                aria-describedby="name-error"
                maxLength={100}
                {...field} 
              />
            </FormControl>
            <FormMessage id="name-error" />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="text-muted-foreground text-sm md:text-base">
              Email <span className="text-destructive" aria-label="required">*</span>
            </FormLabel>
            <FormControl>
              <div className="relative w-full">
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background border border-input focus:border-primary w-full min-h-[44px] text-base md:text-sm"
                  aria-describedby="email-error email-help"
                  maxLength={254}
                  {...field} 
                />
              </div>
            </FormControl>
            <div className="flex flex-col mt-2 space-y-2" id="email-help">
              <span className="text-xs text-muted-foreground">Only emails from these providers are accepted:</span>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <div className="flex items-center gap-1">
                  <Mail size={14} className="text-muted-foreground" aria-hidden="true" />
                  <span className="text-xs">Google</span>
                </div>
                <div className="flex items-center gap-1">
                  <Apple size={14} className="text-muted-foreground" aria-hidden="true" />
                  <span className="text-xs">Apple</span>
                </div>
                <div className="flex items-center gap-1">
                  <Laptop size={14} className="text-muted-foreground" aria-hidden="true" />
                  <span className="text-xs">Microsoft</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare size={14} className="text-muted-foreground" aria-hidden="true" />
                  <span className="text-xs">Yahoo</span>
                </div>
              </div>
            </div>
            <FormMessage id="email-error" />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="text-muted-foreground text-sm md:text-base">
              Message <span className="text-destructive" aria-label="required">*</span>
            </FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Your message (minimum 10 characters)"
                className="bg-background border border-input focus:border-primary resize-none min-h-[120px] md:min-h-[150px] w-full text-base md:text-sm" 
                aria-describedby="message-error"
                maxLength={1000}
                {...field} 
              />
            </FormControl>
            <div className="text-xs text-muted-foreground mt-1">
              {field.value?.length || 0}/1000 characters
            </div>
            <FormMessage id="message-error" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ContactFormFields;
