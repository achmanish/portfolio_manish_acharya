
import { useState, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Message, getMessages, deleteMessage } from '@/lib/messageStorage';

export const useMessages = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Message loading functionality
  const loadMessages = useCallback(() => {
    const storedMessages = getMessages();
    setMessages(storedMessages);
    setFilteredMessages(storedMessages);
  }, []);
  
  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredMessages(messages);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const filtered = messages.filter(message => 
      message.name.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredMessages(filtered);
  };
  
  // Message viewing functionality
  const openMessageDialog = (message: Message) => {
    setSelectedMessage(message);
    setIsDialogOpen(true);
  };
  
  // Message deletion functionality
  const confirmDelete = (id: string) => {
    setMessageToDelete(id);
    setIsDeleteDialogOpen(true);
  };
  
  const handleDeleteMessage = () => {
    if (messageToDelete) {
      deleteMessage(messageToDelete);
      loadMessages(); // Reload messages after deletion
      setIsDeleteDialogOpen(false);
      setMessageToDelete(null);
      
      toast({
        title: "Message deleted",
        description: "The message has been removed successfully.",
      });
    }
  };
  
  const handleCancelDelete = () => {
    setMessageToDelete(null);
    setIsDeleteDialogOpen(false);
  };

  return {
    messages: filteredMessages,
    allMessages: messages,
    selectedMessage,
    isDialogOpen,
    setIsDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    searchQuery,
    loadMessages,
    openMessageDialog,
    confirmDelete,
    handleDeleteMessage,
    handleCancelDelete,
    handleSearch,
  };
};
