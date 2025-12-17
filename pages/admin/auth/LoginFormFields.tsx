
import React, { useState } from 'react';
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail } from 'lucide-react';
import { loginFormSchema } from './loginFormSchema';
import * as z from "zod";

interface LoginFormFieldsProps {
  form: UseFormReturn<z.infer<typeof loginFormSchema>>;
}

const LoginFormFields = ({ form }: LoginFormFieldsProps) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <div className="relative">
              <FormControl>
                <Input 
                  placeholder="admin@example.com" 
                  {...field} 
                  className="pl-10"
                />
              </FormControl>
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate" />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <div className="relative">
              <FormControl>
                <Input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  {...field} 
                  className="pr-10"
                />
              </FormControl>
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate hover:text-primary"
                tabIndex={-1} // So it doesn't interfere with form navigation
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default LoginFormFields;
