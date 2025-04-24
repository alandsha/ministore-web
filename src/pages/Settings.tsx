import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Settings as SettingsIcon, Mail, Lock, Bell, CreditCard, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface Profile {
  subscription_status: string;
  subscription_end_date: string | null;
  email: string;
}

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/');
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        toast.error('Error loading profile');
        return;
      }

      setProfile(profile);
      setNewEmail(user.email || '');
      setLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const updateEmail = async () => {
    try {
      const { error } = await supabase.auth.updateUser({ email: newEmail });
      if (error) throw error;
      toast.success('Email update request sent. Please check your email.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updatePassword = async () => {
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      toast.success('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cancelSubscription = async () => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ 
          subscription_status: 'cancelled',
          subscription_end_date: new Date().toISOString()
        })
        .eq('id', profile?.id);
      
      if (error) throw error;
      toast.success('Subscription cancelled successfully');
      
      // Refresh profile data
      const { data: updatedProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', profile?.id)
        .single();
      
      setProfile(updatedProfile);
    } catch (error) {
      toast.error('Error cancelling subscription');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto mt-8">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="flex items-center mb-8">
          <SettingsIcon className="h-8 w-8 text-purple-500 mr-3" />
          <h1 className="text-3xl font-bold text-white">Account Settings</h1>
        </div>

        <div className="grid gap-8">
          {/* Subscription Status */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <CreditCard className="h-5 w-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Subscription</h2>
            </div>
            <div className="mb-4">
              <p className="text-gray-300">
                Status: <span className="text-white font-medium">{profile?.subscription_status}</span>
              </p>
              {profile?.subscription_end_date && (
                <p className="text-gray-300">
                  Ends: <span className="text-white font-medium">
                    {new Date(profile.subscription_end_date).toLocaleDateString()}
                  </span>
                </p>
              )}
            </div>
            {profile?.subscription_status === 'active' && (
              <button
                onClick={cancelSubscription}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Cancel Subscription
              </button>
            )}
          </div>

          {/* Email Settings */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Email Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={updateEmail}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Update Email
              </button>
            </div>
          </div>

          {/* Password Settings */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <Lock className="h-5 w-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Password Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={updatePassword}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Update Password
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Notification Settings</h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-purple-600 rounded border-gray-700 bg-gray-800 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-300">Email notifications for updates</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-purple-600 rounded border-gray-700 bg-gray-800 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-300">Promotional emails</span>
              </label>
            </div>
          </div>

          {/* Delete Account */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <Trash2 className="h-5 w-5 text-red-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Delete Account</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                  // Handle account deletion
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;