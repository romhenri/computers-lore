import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2>
          Next
        </h2>
        
        <Button variant="outline" size="sm">
          Button
        </Button>
      </div>
    </main>
  );
}
