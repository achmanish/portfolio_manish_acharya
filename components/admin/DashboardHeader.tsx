
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, RefreshCcw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DashboardHeaderProps {
  onRefresh: () => void;
  onLogout: () => void;
}

const DashboardHeader = ({ onRefresh, onLogout }: DashboardHeaderProps) => {
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    onRefresh();
    
    // Show a toast notification
    toast({
      title: "Refreshed",
      description: "Messages have been refreshed successfully.",
    });
    
    // Reset the refreshing state after a brief delay for visual feedback
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You'll be redirected to the login page.",
    });
    
    // Small delay to show toast before logout
    setTimeout(() => {
      onLogout();
    }, 500);
  };

  return (
    <header className="mb-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          onClick={handleRefresh} 
          disabled={isRefreshing}
          className="flex items-center gap-2"
        >
          <RefreshCcw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </Button>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="flex items-center gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
