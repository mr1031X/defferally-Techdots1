import SideNav from '@/src/app/ui/dashboard/sidenav';
import TopNav from '../ui/dashboard/topnav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-1/4 flex-none md:w-64">
        <SideNav />
      </div>
      <div className="w-3/4 flex-none pr-2 md:overflow-y-auto md:pr-6">
        <TopNav />
        <div>{children}</div>
      </div>
      {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
    </div>
  );
}