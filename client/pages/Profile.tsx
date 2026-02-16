export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground mt-2">
          Manage your profile information and preferences.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">
              GS
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Gauri Soni</h2>
            <p className="text-muted-foreground">gauri@focusflow.com</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Gauri Soni"
              className="w-full bg-sidebar-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="gauri@focusflow.com"
              className="w-full bg-sidebar-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              disabled
            />
          </div>

          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
