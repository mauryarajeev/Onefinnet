import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaTable, FaTh } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { useState } from 'react';

// Define types for menu items
interface SubmenuItem {
  id: number;
  name: string;
  link: string;
  submenu?: SubmenuItem[]; // Nested submenu
}

interface MenuItem {
  id: number;
  name: string;
  icon: JSX.Element;
  submenu?: SubmenuItem[];
}

// Define menu items
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Dashboards',
    icon: <FaTh className="w-5 h-5" />,
    submenu: [
      { id: 11, name: 'Analytics', link: '/dashboards/analytics' },
      { id: 12, name: 'Sales', link: '/dashboards/sales' },
    ],
  },
  {
    id: 2,
    name: 'Pages',
    icon: <FaTable className="w-5 h-5" />,
    submenu: [
      { id: 21, name: 'Profile', link: '/pages/profile' },
      { id: 22, name: 'Users', link: '/pages/users' },
      { id: 23, name: 'Account', link: '/pages/account' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<number | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const handleSubmenuToggle = (id: number) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  const handleNestedSubmenuToggle = (id: number) => {
    setActiveNestedSubmenu(activeNestedSubmenu === id ? null : id);
  };

  return (
    <div className="lg:w-64 w-full h-screen bg-gray-800 text-gray-200 flex flex-col p-4 overflow-y-auto" style={{ overflowX: 'hidden' }}>
      {/* Main Menu */}
      <div className="flex flex-col gap-4 w-full">
        {menuItems.map((item) => (
          <div key={item.id} className="w-full">
            {/* Main menu item */}
            <div
              className="flex items-center justify-between text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer"
              onClick={() => handleSubmenuToggle(item.id)}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <p className="text-sm font-medium">{item.name}</p>
              </div>
              <MdArrowDropDown className={`ml-auto transition-transform ${activeSubmenu === item.id ? 'rotate-180' : ''}`} />
            </div>

            {/* Submenu items */}
            {item.submenu && activeSubmenu === item.id && (
              <div className="ml-6 mt-2 flex flex-col gap-2">
                {item.submenu.map((subItem) => (
                  <div key={subItem.id}>
                    {/* Main submenu item */}
                    <Link
                      to={subItem.link}
                      className={`text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md ${pathname === subItem.link ? 'bg-gray-600 text-white' : ''}`}
                    >
                      {subItem.name}
                    </Link>

                    {/* If there are nested submenu items */}
                    {subItem.submenu && (
                      <div>
                        <MdArrowDropDown
                          className={`ml-auto transition-transform ${activeNestedSubmenu === subItem.id ? 'rotate-180' : ''}`}
                          onClick={() => handleNestedSubmenuToggle(subItem.id)}
                        />
                        {activeNestedSubmenu === subItem.id && (
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {subItem.submenu.map((nestedSubItem) => (
                              <Link
                                key={nestedSubItem.id}
                                to={nestedSubItem.link || '#'}
                                className={`text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md ${pathname === nestedSubItem.link ? 'bg-gray-600 text-white' : ''}`}
                              >
                                {nestedSubItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
