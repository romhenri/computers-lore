import { Button } from '@/components/ui/button';

import ToggleTheme from '@/components/comp/ToggleTheme';

export default function Home() {
  return (
    <main className="">
        {/* <Button variant="outline" size="sm">
          Button
        </Button> */}

        <ToggleTheme />
    </main>
  );
};