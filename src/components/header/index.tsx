import { useAuth } from "@/contexts";
import { Button } from "../ui/button";
import { CalendarIcon } from "@/assets";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import LoginForm from "../login-form";

export default function Header() {
  const { token, roles, manageLogin } = useAuth();

  const handleLogout = () => {
    manageLogin(null, null);
  };

  return (
    <header className="sticky top-0 backdrop-blur border-b border-b-black/10">
      <div className="flex items-center gap-5 p-2 bg-black/5">
        <CalendarIcon className="w-16 h-16" data-testid="app-logo" />

        <h1 className="flex-grow text-4xl font-bold" data-testid="app-name">
          ERS
        </h1>

        {token && roles?.includes("moderator") && <Button>Create New</Button>}

        {token ? (
          <Button onClick={handleLogout} data-testid="button-logout">
            Logout
          </Button>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="min-w-20" data-testid="button-login">
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="justify-center gap-10">
              <LoginForm />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </header>
  );
}
