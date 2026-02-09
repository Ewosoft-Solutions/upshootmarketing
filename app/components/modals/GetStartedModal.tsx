'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface GetStartedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GetStartedModal({ open, onOpenChange }: Readonly<GetStartedModalProps>) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let’s talk about your brand</DialogTitle>
        </DialogHeader>

        <div className='space-y-4'>
          <Input placeholder='Name' />
          <Input placeholder='Email' />
          <Input placeholder='Company' />
          <Button className='w-full'>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
