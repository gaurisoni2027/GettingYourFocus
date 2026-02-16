import { Bell, Lock, Eye, Database } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="space-y-4 max-w-2xl">
        {/* Notifications */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Bell className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Notifications</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Manage how you receive notifications
                </p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Lock className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Privacy</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Control your privacy settings
                </p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Eye className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Appearance</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Customize your interface
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Database className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Data</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Manage your data and exports
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
