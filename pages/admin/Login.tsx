
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { Lock } from 'lucide-react';
import { loginFormSchema } from './auth/loginFormSchema';
import LoginFormFields from './auth/LoginFormFields';
import { LoginButton } from './auth/LoginButton';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    try {
      // For demo: admin login with hardcoded credentials
      if (values.email === "admin@example.com" && values.password === "Password123!") {
        localStorage.setItem("admin-authenticated", "true");
        navigate("/admin/messages");
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
        return;
      }
      
      // If credentials don't match
      throw new Error("Invalid credentials");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg border border-border shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold">Manish's Login</h2>
          <p className="text-slate mt-2">Sign in to access the admin dashboard</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <LoginFormFields form={form} />
            <LoginButton isSubmitting={form.formState.isSubmitting} />
          </form>
        </Form>
        
        <div className="text-center text-sm text-slate pt-4 border-t border-border">
          <p>Demo credentials: admin@example.com / Password123!</p>
          <p className="mt-2">
            <Link to="/" className="text-primary hover:underline">
              Return to home page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
