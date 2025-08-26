import Sidebar from "@/components/ui/navbar/Sidebar";
export function NavBarDesktop() {
  return (
    <nav className="hidden sm:flex">
      <Sidebar />
      <span>hjem</span>
    </nav>
  );
}
