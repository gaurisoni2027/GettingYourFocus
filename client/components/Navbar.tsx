import { useState } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-sidebar-background/50 backdrop-blur-sm border-b border-sidebar-border z-20">
      <div className="h-full px-6 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button className="p-2 rounded-lg hover:bg-card transition-colors duration-200 relative">
            <Bell className="w-5 h-5 text-sidebar-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </button>

          {/* Avatar Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">
                  GS
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-sidebar-foreground" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-card border border-border shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-border">
                  <p className="text-sm font-medium text-foreground">
                    Gauri Soni
                  </p>
                  <p className="text-xs text-muted-foreground">
                    gauri@focusflow.com
                  </p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-sidebar-accent transition-colors">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-sidebar-accent transition-colors">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-sidebar-accent transition-colors border-t border-border mt-2 pt-2">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
