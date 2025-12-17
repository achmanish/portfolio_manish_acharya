
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Trash2, Search } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Message } from '@/lib/messageStorage';

interface MessageTableProps {
  messages: Message[];
  searchQuery: string;
  onSearch: (query: string) => void;
  onViewMessage: (message: Message) => void;
  onDeleteMessage: (id: string) => void;
}

const MessageTable = ({ 
  messages, 
  searchQuery, 
  onSearch, 
  onViewMessage, 
  onDeleteMessage 
}: MessageTableProps) => {
  
  return (
    <>
      <div className="flex items-center space-x-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      {messages.length === 0 ? (
        <div className="text-center p-8">
          <p className="text-slate">
            {searchQuery ? "No messages found matching your search" : "No messages yet"}
          </p>
        </div>
      ) : (
        <Table>
          <TableCaption>A list of your received messages.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message Preview</TableHead>
              <TableHead>Received</TableHead>
              <TableHead className="w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell className="font-medium">{message.name}</TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell className="truncate max-w-xs">
                  {message.message.length > 50 
                    ? `${message.message.substring(0, 50)}...` 
                    : message.message}
                </TableCell>
                <TableCell>{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onViewMessage(message)}
                    >
                      View
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                      onClick={() => onDeleteMessage(message.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default MessageTable;
