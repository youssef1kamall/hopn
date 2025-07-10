import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Home, Wallet, Info, Phone, ChevronDown, Menu, X, User, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AutheriseContext'; // Assuming this path is correct
import LoginModel from './LoginModel';

const Navbar = () => {
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Destructure 'logout' from useAuth()
  const { isAuthorized, signOut, user } = useAuth();

  const dropdownRef = useRef(null);
  const location = useLocation();

  const isRTL = language === 'ar';

  const commonLinks = [
    { path: '/', label: { en: 'Home', ar: 'الرئيسية' }, icon: Home },
    { path: '/membership', label: { en: 'Membership plan', ar: 'الأسعار' }, icon: Wallet },
    { path: '/About', label: { en: 'About', ar: 'معلومات' }, icon: Info },
    { path: '/contact', label: { en: 'Contact', ar: 'تواصل' }, icon: Phone },
  ];

  const authLinks = [
  { path: '/profile', label: { en: 'Profile', ar: 'الملف الشخصي' }, icon: User },
  { path: '/dashboard', label: { en: 'Dashboard', ar: 'لوحة التحكم' }, icon: BarChart3 }
];
  const navLinks = isAuthorized ? authLinks : commonLinks;

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);    // Apply RTL to document
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Set initial RTL on component mount
  useEffect(() => {
    // Apply RTL or LTR based on initial language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]); // Depend on 'language' to re-run if it changes
  const isActivePage = (path) => location.pathname === path;

  return (
    <>
      <nav className=" top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse group transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-emerald-200/50 transition-all duration-300">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                {language === 'en' ? 'FitPass' : 'فيت باس'}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`
                    flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300
                    ${isActivePage(path)
                      ? 'bg-emerald-50 text-emerald-700 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-40 hover:text-emerald-600'
                    }
                    hover:scale-100 hover:shadow-md
                  `}
                >
                  <Icon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'} transition-transform duration-300`} />
                  <span className="font-semibold">{label[language]}</span>
                </Link>
              ))}
            </div>
            {/* Language Dropdown & Auth/Mobile Menu Button */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Language Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  {language === 'en' ? (
                    <>
                      <span className="text-lg mr-2 flex -mt-1">🇺🇸</span>
                      <span>English</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg mr-2 flex items-center">🇸🇦</span>
                      <span>العربية</span>
                    </>
                  )}
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Language Dropdown Menu */}
                <div className={`
                  absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100
                  transition-all duration-300 transform origin-top
                  ${dropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                `}>
                  <div className="py-2">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`
                        w-full px-4 py-3 text-left hover:bg-emerald-50 flex items-center transition-all duration-200
                        ${language === 'en' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:text-emerald-600'}
                      `}
                    >
                      <span className="text-lg mr-3">🇺🇸</span>
                      <span className="font-medium">English</span>
                    </button>
                    <button
                      onClick={() => handleLanguageChange('ar')}
                      className={`
                        w-full px-4 py-3 text-left hover:bg-emerald-50 flex items-center transition-all duration-200
                        ${language === 'ar' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:text-emerald-600'}
                      `}
                    >
                      <span className="text-lg mr-3">🇸🇦</span>
                      <span className="font-medium">العربية</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Auth Buttons (Desktop) */}
              {isAuthorized ? (
                <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="h-8 w-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                  <button
                    onClick={signOut}
                    className="px-4 py-2 text-sm font-medium text-white ml-8 bg-emerald-600 rounded-lg hover:text-emerald-600 transition-colors"
                  >
                    {language === 'en' ? 'Logout' : 'تسجيل الخروج'}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)} // Use setIsLoginModalOpen
                  className='hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors'
                >
                  {language === 'en' ? 'Sign In' : 'تسجيل الدخول'}
                </button>
              )}

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {  menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /> }
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    flex items-center space-x-2 px-3 py-2 rounded-md font-medium text-base transition-colors
                    ${isActivePage(path) ? 'bg-emerald-50 text-emerald-700'
                    :'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span >{label[language]}</span> {/* Corrected for bilingual support */}
                </Link>
              ))}
              {isAuthorized ? (
                <button
                    onClick={() => {
                    setMenuOpen(false); // Close mobile menu on logout
                    signOut();
                  }}
                  className="flex items-center px-3 py-2 rounded-md font-medium text-red-600 hover:bg-red-50 w-full text-left
                    transition-colors"
                >
                  {language === 'en' ? 'Logout' : 'تسجيل الخروج'}
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMenuOpen(false); // Close mobile menu when opening login modal
                    setIsLoginModalOpen(true); // Use setIsLoginModalOpen
                  }}
                  className="w-full text-left bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2
                    rounded-md font-medium transition-colors"
                >
                  {language === 'en' ? 'Sign In' : 'تسجيل الدخول'}
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Placeholder for Login Modal (You would integrate your actual LoginModal component here) */}
      {isLoginModalOpen && (
        <LoginModel onClose={() => setIsLoginModalOpen(false)}/>
      )}
    </>
  );
};

export default Navbar;