
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Message } from '@/lib/messageStorage';
import { Mail, User, MessageSquare, Calendar, Trash2 } from 'lucide-react';

interface MessageDetailDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  message: Message | null;
  onDelete: (id: string) => void;
}

const MessageDetailDialog = ({ 
  isOpen, 
  setIsOpen, 
  message, 
  onDelete 
}: MessageDetailDialogProps) => {
  if (!message) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Message Details</DialogTitle>
          <DialogDescription>
            Full message information
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <User className="h-4 w-4 text-muted-foreground mt-1" />
            <div>
              <p className="text-sm font-medium">From</p>
              <p>{message.name}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Mail className="h-4 w-4 text-muted-foreground mt-1" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p>{message.email}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
            <div>
              <p className="text-sm font-medium">Received</p>
              <p>{new Date(message.createdAt).toLocaleString()}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
            <div>
              <p className="text-sm font-medium">Message</p>
              <p className="mt-1 whitespace-pre-wrap">{message.message}</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <Button 
              variant="destructive" 
              onClick={() => {
                onDelete(message.id);
                setIsOpen(false);
              }}
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MessageDetailDialog;
