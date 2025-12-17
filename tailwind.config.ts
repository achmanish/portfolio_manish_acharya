
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '0.75rem',
				sm: '1rem',
				md: '1.5rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '2rem'
			},
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '320px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1400px',
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Brand colors using HSL format
				navy: {
					light: 'hsl(216, 45%, 35%)',
					DEFAULT: 'hsl(216, 66%, 20%)',
					dark: 'hsl(216, 80%, 10%)',
				},
				slate: {
					light: 'hsl(220, 26%, 75%)',
					DEFAULT: 'hsl(220, 18%, 65%)',
					dark: 'hsl(220, 15%, 50%)',
				},
				cyan: {
					light: 'hsl(188, 100%, 70%)',
					DEFAULT: 'hsl(200, 95%, 65%)',
					dark: 'hsl(210, 75%, 55%)',
				},
				// Legacy color support
				charcoal: 'hsl(180, 10%, 15%)',
				'soft-white': 'hsl(0, 0%, 96%)',
				'text-dark': 'hsl(0, 0%, 13%)',
				teal: 'hsl(174, 62%, 47%)',
				'light-gray': 'hsl(200, 18%, 70%)',
				// Skills section semantic colors
				'skill-name': 'var(--color-skill-name)',
				'skill-score': 'var(--color-skill-score)',
				'skill-level': 'var(--color-skill-level)',
				'skill-badge': 'var(--color-skill-badge)',
				'skill-category': 'var(--color-skill-category)',
				'skill-category-bg': 'var(--color-skill-category-bg)',
				'skill-border': 'var(--color-skill-border)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-light': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'soft-bounce': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-8px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'float': 'float 5s ease-in-out infinite',
				'pulse-light': 'pulse-light 3s ease-in-out infinite',
				'soft-bounce': 'soft-bounce 3s ease-in-out infinite',
			},
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				signature: ['Dancing Script', 'cursive'],
				nepali: ['Noto Sans Devanagari', 'sans-serif'],
			},
			fontSize: {
				'heading': '24px',
				'body': '16px',
			},
			gradientColorStops: {
				'primary-gradient-start': 'hsl(174, 62%, 47%)',
				'primary-gradient-end': 'hsl(177, 66%, 42%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
