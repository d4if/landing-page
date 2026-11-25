import type { ProjectCategory } from "../../data/students";

export type NavCategory = ProjectCategory | "all";

interface NavItem {
  id: NavCategory;
  label: string;
  icon: React.ReactNode;
  description: string;
}

interface HeaderProps {
  activeCategory: NavCategory;
  onCategoryChange: (category: NavCategory) => void;
  counts: Record<NavCategory, number>;
}

export default function Header({
  activeCategory,
  onCategoryChange,
  counts,
}: HeaderProps) {
  const navItems: NavItem[] = [
    {
      id: "all",
      label: "Semua",
      icon: <GridIcon />,
      description: "Semua karya mahasiswa",
    },
    {
      id: "website",
      label: "Website",
      icon: <WebsiteIcon />,
      description: "Aplikasi & platform berbasis web",
    },
    {
      id: "iot",
      label: "IoT",
      icon: <IoTIcon />,
      description: "Perangkat & sistem embedded",
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: <MobileIcon />,
      description: "Aplikasi berbasis mobile",
    },
    {
      id: "algorithm",
      label: "Algoritma",
      icon: <AlgorithmIcon />,
      description: "Penerapan algoritma & AI/ML",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              <img
                className="w-full rounded-full object-cover" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TCnmsDXnyYVqXn-hwVL9HuE7e_0my12Pwg-Gtl_URg&s=10" 
                alt="" 
              />
            </div>
            <div>
              {/* <span className="font-bold text-gray-900 dark:text-white text-base tracking-tight">
                Universitas Logistik dan Bisnis Internasional
              </span>
              <span className="ml-1.5 text-xs font-medium px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                Universitas Logistik dan Bisnis Internasional
              </span> */}
            </div>
          </div>

          {/* Total count */}
          <span className="hidden sm:inline text-xs text-gray-500 dark:text-gray-400">
            {counts.all} karya dipamerkan
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-1 pb-0 -mb-px overflow-x-auto scrollbar-hide">
          {navItems.map((item) => {
            const isActive = activeCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onCategoryChange(item.id)}
                className={[
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                  isActive
                    ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={[
                    "transition-colors",
                    isActive
                      ? "text-indigo-500 dark:text-indigo-400"
                      : "text-gray-400 dark:text-gray-500",
                  ].join(" ")}
                >
                  {item.icon}
                </span>
                {item.label}
                {counts[item.id] > 0 && (
                  <span
                    className={[
                      "ml-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                      isActive
                        ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400",
                    ].join(" ")}
                  >
                    {counts[item.id]}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

/* ── Icons ── */

function GridIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function IoTIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M6.3 6.3a8 8 0 0 0 0 11.4" />
      <path d="M17.7 6.3a8 8 0 0 1 0 11.4" />
      <path d="M3.5 3.5a14 14 0 0 0 0 17" />
      <path d="M20.5 3.5a14 14 0 0 1 0 17" />
    </svg>
  );
}

function AlgorithmIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}