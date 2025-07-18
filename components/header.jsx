import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs"
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Span } from "next/dist/trace";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";




const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50
    supports-[backdrop-filter]:bg-background/60">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href='/'>
            <Image src="/logo.png" alt="Sensai Logo" width={200} height={60}
            className="h-12 py-1 w-auto  object-contain"/>
            </Link>
            <div className="flex items-center space-x-2 md:space-x-4">
              <SignedIn>
                <Link href={"/dashboard"}>
                <Button  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Industry Insights
                  
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
                </Link>
              
  <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Button className="flex items-center gap-2">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4"/>
                  
                </Button>

  </DropdownMenuTrigger>
  <DropdownMenuContent align="end"className="w-48">
    
    <DropdownMenuItem asChild>
      <Link href={"/resume"} className="flex items-center gap-2 ">
      <FileText className="h-4 w-4" />
                  Build Resume
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild><Link href={"/ai-cover-letter"} className="flex items-center gap-2 ">
      <PenBox className="h-4 w-4" />
                  Cover Letter
      </Link></DropdownMenuItem>
    <DropdownMenuItem asChild><Link href={"/interview"} className="flex items-center gap-2 ">
      <GraduationCap className="h-4 w-4" />
                  Interview prep
      </Link></DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
</SignedIn>
<SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>



<SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>



            </div>
          </nav>
       
    </header>
  );
};

export default Header