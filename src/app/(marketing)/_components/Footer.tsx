
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-zinc-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
      <h1 className="text-zinc-800 font-bold text-2xl ">StackTrack</h1>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};