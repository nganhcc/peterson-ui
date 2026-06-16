import { Search, UserCircle } from "lucide-react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-search">
        <Search size={18} />
        <input type="text" placeholder="Tìm kiếm" />
      </div>

      <button className="header-avatar">
        <UserCircle size={32} />
      </button>
    </header>
  );
}