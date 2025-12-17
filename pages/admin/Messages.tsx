
import React, { useEffect } from 'react';
import DashboardHeader from '@/components/admin/DashboardHeader';
import MessageTable from '@/components/admin/MessageTable';
import MessageDetailDialog from '@/components/admin/MessageDetailDialog';
import DeleteConfirmDialog from '@/components/admin/DeleteConfirmDialog';
import { useAuth } from '@/hooks/useAuth';
import { useMessages } from '@/hooks/useMessages';

const Messages = () => {
  const { isAuthenticated, isCheckingAuth, handleLogout } = useAuth();
  const {
    messages,
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
  } = useMessages();
  
  // Load messages when the component mounts and user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadMessages();
    }
  }, [isAuthenticated, loadMessages]);
  
  // Show loading state while checking authentication
  if (isCheckingAuth || !isAuthenticated) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader onRefresh={loadMessages} onLogout={handleLogout} />
        
        <div className="bg-card rounded-lg border border-border shadow-lg p-6">
          <h2 className="text-xl font-medium mb-6">Contact Messages</h2>
          
          <MessageTable 
            messages={messages}
            searchQuery={searchQuery}
            onSearch={handleSearch}
            onViewMessage={openMessageDialog}
            onDeleteMessage={confirmDelete}
          />
        </div>
      </div>
      
      {/* Message Detail Dialog */}
      <MessageDetailDialog 
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        message={selectedMessage}
        onDelete={confirmDelete}
      />
      
      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog 
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        onConfirm={handleDeleteMessage}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default Messages;
