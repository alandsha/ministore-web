import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, User, Globe2, Settings, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import AuthModal from './AuthModal';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setProfile(profile);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success(t('auth.success.signOut'));
      navigate('/');
    } catch (error) {
      toast.error(t('auth.error.signOut'));
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              SnapVoice
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.features')}
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.howItWorks')}
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.faq')}
            </a>

            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-800 rounded-lg p-1">
                <Globe2 size={18} className="text-purple-400 ml-2" />
                <LanguageSwitcher />
              </div>

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    <User size={18} className="text-purple-400" />
                    <span className="text-gray-300">{user.email}</span>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-1 border border-gray-700">
                      <div className="px-4 py-2 border-b border-gray-700">
                        <p className="text-sm text-gray-400">Subscription</p>
                        <p className="text-sm font-medium text-white capitalize">{profile?.subscription_status || 'Free'}</p>
                      </div>
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings size={16} className="mr-2" />
                        Settings
                      </Link>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors text-left"
                      >
                        {t('nav.signOut')}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium flex items-center"
                >
                  <User size={18} className="mr-2" />
                  {t('nav.signIn')}
                </button>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center justify-center bg-gray-800 rounded-lg p-2 mb-4">
                <Globe2 size={18} className="text-purple-400 mr-2" />
                <LanguageSwitcher />
              </div>

              <a 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.features')}
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.howItWorks')}
              </a>
              <a 
                href="#pricing" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.pricing')}
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.faq')}
              </a>

              {user ? (
                <>
                  <div className="py-2 border-t border-gray-800">
                    <p className="text-sm text-gray-400">Subscription</p>
                    <p className="text-sm font-medium text-white capitalize">{profile?.subscription_status || 'Free'}</p>
                  </div>
                  <Link
                    to="/settings"
                    className="text-gray-300 hover:text-white transition-colors py-2 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings size={16} className="mr-2" />
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-300 hover:text-white transition-colors py-2 text-left"
                  >
                    {t('nav.signOut')}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium flex items-center justify-center"
                >
                  <User size={18} className="mr-2" />
                  {t('nav.signIn')}
                </button>
              )}
            </nav>
          </div>
        </div>
      )}

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
};

export default Header;