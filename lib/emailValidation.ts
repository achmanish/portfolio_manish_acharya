
/**
 * Email validation utility
 * Provides comprehensive email validation for frontend applications
 */

// List of common disposable email domains to block
const disposableDomains = [
  '10minutemail.com',
  'tempmail.com',
  'guerrillamail.com',
  'mailinator.com',
  'yopmail.com',
  'fakeinbox.com',
  'temp-mail.org',
  'dispostable.com',
  'maildrop.cc',
  'throwawaymail.com',
  'sharklasers.com',
  'trashmail.com',
  'temp-mail.ru',
  'tempmail.net',
];

// Allowed email providers
const allowedProviders = [
  'gmail.com',
  'apple.com',
  'icloud.com',
  'me.com',
  'microsoft.com',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'yahoo.com',
];

/**
 * Comprehensive email validation function
 * Checks format, disposable domains, and allowed providers
 */
export const validateEmail = (email: string): { isValid: boolean; message: string } => {
  // Simple email check
  if (!email) {
    return { isValid: false, message: "Email is required" };
  }

  // Comprehensive format check with regex
  // This regex validates the email format following RFC 5322 standard
  const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
  
  if (!emailRegex.test(email)) {
    return { 
      isValid: false, 
      message: "Please enter a valid email address with proper format" 
    };
  }

  // Check for disposable email domains
  const domain = email.split('@')[1].toLowerCase();
  if (disposableDomains.includes(domain)) {
    return { 
      isValid: false, 
      message: "Please use a non-disposable email address" 
    };
  }

  // Check if the email provider is in the allowed list
  if (!allowedProviders.some(provider => domain.endsWith(provider))) {
    return {
      isValid: false,
      message: "Please use an email from Google, Apple, Microsoft, or Yahoo"
    };
  }

  // Check for minimum domain requirements
  if (!domain.includes('.') || domain.split('.')[1].length < 2) {
    return {
      isValid: false,
      message: "Email must contain a valid domain with extension"
    };
  }

  return { isValid: true, message: "" };
};

/**
 * This function integrates with the useAuth hook's email verification
 * but works with the current localStorage implementation
 */
export const isEmailVerified = (email: string): boolean => {
  // Just a wrapper for localStorage check - will be replaced with real backend check
  return localStorage.getItem('email-verified') === 'true';
};
