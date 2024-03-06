import Header from '@/components/comp/Header';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen flex-col p-24">
        <Header />

        <Button variant="outline" size="sm">
          Button
        </Button>
    </main>
  );
}
