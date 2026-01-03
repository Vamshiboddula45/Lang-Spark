import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, User, Phone, Pencil } from 'lucide-react';
import { Toaster, toast } from '@/components/ui/sonner';
import api from '@/api/client';

const Settings = () => {
  const navigate = useNavigate();
  const { user, signOut, updateProfile, refreshProfile, loading: authLoading } = useAuth();
  const fileInputRef = useRef(null);

  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [profileLoading, setProfileLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch profile data
  useEffect(() => {
    if (user) {
      setDisplayName(user.username || '');
      setPhone(user.phone || '');
      setAvatarUrl(user.avatar_url || '');
      setProfileLoading(false);
    }
  }, [user]);

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    navigate('/auth');
    return null;
  }

  const getInitials = (name) => {
    if (!name) return user.email?.charAt(0).toUpperCase() || 'U';
    return name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  const handleUpdateProfile = async (e) => {
    if (e) e.preventDefault();

    if (!displayName.trim()) {
      toast.error("Name required", { description: "Please enter your name." });
      return;
    }

    setLoading(true);

    try {
      const { error } = await updateProfile({
        username: displayName.trim(),
        phone: phone.trim()
      });

      if (error) throw new Error(error);

      // Force context refresh just in case
      refreshProfile({ username: displayName.trim(), phone: phone.trim() });

      toast.success("Profile updated", { description: "Your profile has been updated successfully." });
      setIsEditing(false);
    } catch (error) {
      toast.error("Error", { description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Invalid file type", { description: "Please upload an image file." });
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("File too large", { description: "Please upload an image smaller than 2MB." });
      return;
    }

    const loadToast = toast.loading("Uploading avatar...");

    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const { data } = await api.post('/auth/avatar', formData);

      setAvatarUrl(data.avatar_url);
      refreshProfile({ avatar_url: data.avatar_url });

      toast.dismiss(loadToast);
      toast.success("Avatar updated");
    } catch (error) {
      toast.dismiss(loadToast);
      toast.error("Error uploading avatar", { description: error.message || "Failed to upload" });
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Toaster />

      <main className="container max-w-2xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Learning
        </button>

        <h1 className="text-3xl font-bold text-foreground mb-1">Settings</h1>
        <p className="text-muted-foreground mb-8">Manage your account settings</p>

        {/* Profile Section */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground">Profile</h2>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (isEditing) handleUpdateProfile();
                else setIsEditing(true);
              }}
              disabled={loading}
              className="gap-2"
            >
              {isEditing ? (
                loading ? "Saving..." : "Save Changes"
              ) : (
                <>
                  <Pencil className="w-4 h-4" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-6 -mt-4">Your profile information</p>

          <div className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-lg">
              <div className="relative group cursor-pointer" onClick={handleAvatarClick}>
                <Avatar className="h-16 w-16 border-2 border-background shadow-sm">
                  <AvatarImage src={avatarUrl} alt={displayName} />
                  <AvatarFallback className="bg-primary/20 text-primary text-xl font-bold">
                    {getInitials(displayName)}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Pencil className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground">Profile Picture</p>
                <p className="text-xs text-muted-foreground">Click picture to change</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName" className="text-sm font-medium text-foreground">
                  Display Name
                </Label>
                <Input
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  disabled={!isEditing}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Mobile Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isEditing}
                    className="pl-9 bg-background"
                    placeholder="+1234567890"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Used for account recovery via SMS.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Change Password & Other Actions (kept simplistic as per request for "like this") */}
        <div className="mt-8 flex gap-4">
          <Button variant="outline" onClick={signOut} className="text-destructive hover:text-destructive">
            Sign Out
          </Button>
        </div>

      </main>
    </div>
  );
};

export default Settings;