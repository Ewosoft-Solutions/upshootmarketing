import { Button } from '@/components/ui/button';

export default function GetFeaturedPage() {
  return (
    <main className='container-px pb-20 pt-32 md:pt-36'>
      <section className='mx-auto max-w-4xl space-y-5'>
        <h1 className='text-4xl font-bold md:text-6xl'>Get Featured</h1>
        <p className='text-muted-foreground'>
          Want your work or brand story featured by Upshoot? Share your details and we will review.
        </p>
        <Button variant='outline'>Submit Request</Button>
      </section>
    </main>
  );
}
