
import Link from "next/link";

function Footer() {
  return (
     <footer className="border-t py-6 md:py-0">
          <div className="container mx-auto px-4 md:px-6 h-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} TableTop - Restaurant Menu & Management System. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:underline">Privacy</Link>
              <Link href="#" className="hover:underline">Terms</Link>
            </div>
          </div>
        </footer>
  );
}

export default Footer;