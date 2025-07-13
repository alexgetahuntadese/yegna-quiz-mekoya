
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { AuthContext } from "@/App";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, { message: "Password is required." }),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Login values:", values);
    const success = login(values.email, values.password);
    
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome back to QuizPlatform!",
      });
      navigate("/");
    } else {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Welcome Section */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 text-center lg:text-left animate-fade-in">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <BookOpen className="w-8 h-8 text-white"/>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Continue your personalized learning journey. Access your progress, customize your experience, and master new concepts.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-medium">Track Progress</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm font-medium">Personalized</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm font-medium">Achievements</div>
            </div>
          </div>
        </div>

        <Card className="w-full max-w-md mx-auto lg:mx-0 shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-scale-in">
          <CardHeader className="text-center space-y-1">
            <div className="flex items-center gap-2 justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600"/>
              <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            </div>
            <CardDescription className="text-base">
              Enter your credentials to continue learning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
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
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full !mt-6 h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover-scale">
                  Sign In
                </Button>
              </form>
            </Form>
            <div className="mt-6 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 underline font-medium story-link">
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
