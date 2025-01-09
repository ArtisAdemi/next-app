"use client";
import React, { useState, useTransition } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { loginAction } from '../actions/auth';
import { IoCheckmark } from "react-icons/io5";
import Image from "next/image";
import Navbar from "@/components/globals/Navbar";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const response = await loginAction({
          email: formData.get('email') as string,
          password: formData.get('password') as string
        });

        if (response?.success) {
          router.push('/admin/dashboard');
        } else {
          setErrors({
            password: response?.message || 'Login failed'
          });
        }
      } catch {
        setErrors({
          password: 'An error occurred during login'
        });
      }
    });
  };



  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar />
      </div>

    <div className="min-h-screen bg-[#333333] flex flex-col lg:flex-row">
      {/* Left Side - Background Image */}
      <div className="hidden lg:block lg:w-[55%] relative">
        <Image
          src="/images/background-hero.jpg"
          alt="Login Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-16 space-y-8">
          <h2 className="text-5xl font-bold text-white">
            Log In
          </h2>
          <p className="text-xl text-[#D3D3D3] max-w-md">
            Secure access to your professional dashboard. Manage your projects with precision.
          </p>
          <div className="flex items-center space-x-4">
            <div className="rounded-full p-3 bg-[#4682B4]/20">
              <IoCheckmark color="#4682B4" size={30} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Secure Access</h3>
              <p className="text-[#D3D3D3]">Advanced protection for your professional workspace</p>
            </div>
          </div>
        </div>
      </div>
  
      {/* Right Side - Login Form */}
      <div className="w-full lg:w-[45%] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-2">Sign In</h2>
            <p className="text-[#C0C0C0]">Enter your credentials to access your account</p>
          </div>
          <form action={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#C0C0C0] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[#4682B4]/10 border border-[#4682B4]/30 rounded-lg text-white 
                    placeholder-[#C0C0C0] focus:outline-none focus:ring-2 focus:ring-[#FF8C00] 
                    transition duration-300 ease-in-out"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-[#FF8C00]">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#C0C0C0] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 bg-[#4682B4]/10 border border-[#4682B4]/30 rounded-lg text-white 
                      placeholder-[#C0C0C0] focus:outline-none focus:ring-2 focus:ring-[#FF8C00] 
                      transition duration-300 ease-in-out pr-10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#C0C0C0] hover:text-white"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-[#FF8C00]">{errors.password}</p>
                )}
              </div>
            </div>
  
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3 bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white 
                font-semibold rounded-lg transition-colors duration-300 
                focus:outline-none focus:ring-2 focus:ring-[#4682B4]
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
