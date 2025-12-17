
import { v4 as uuidv4 } from 'uuid';
import { validateEmail } from './emailValidation';

export type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date | string;
};

// Get messages from local storage
export const getMessages = (): Message[] => {
  const messagesString = localStorage.getItem('contact-messages');
  if (!messagesString) return [];
  
  try {
    const parsedData = JSON.parse(messagesString);
    return parsedData.map((message: any) => ({
      ...message,
      createdAt: message.createdAt
    }));
  } catch (error) {
    // Return empty array if parsing fails
    return [];
  }
};

// Save a new message with email validation
export const saveMessage = (messageData: Omit<Message, 'id' | 'createdAt'>): Message => {
  const emailValidation = validateEmail(messageData.email);
  if (!emailValidation.isValid) {
    throw new Error(emailValidation.message);
  }

  const newMessage: Message = {
    id: uuidv4(),
    ...messageData,
    createdAt: new Date().toISOString()
  };
  
  const existingMessages = getMessages();
  const updatedMessages = [newMessage, ...existingMessages];
  
  localStorage.setItem('contact-messages', JSON.stringify(updatedMessages));
  return newMessage;
};

// Delete a message
export const deleteMessage = (id: string): void => {
  const messages = getMessages();
  const updatedMessages = messages.filter(message => message.id !== id);
  localStorage.setItem('contact-messages', JSON.stringify(updatedMessages));
};

// For development/testing - clear all messages
export const clearAllMessages = () => {
  localStorage.removeItem('contact-messages');
};
