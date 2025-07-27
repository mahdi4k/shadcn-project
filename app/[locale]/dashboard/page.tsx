import { AppSidebar } from "@/components/app-sidebar";
import CreditCard from "@/components/credit-card";
import RecentTransactions from "@/components/recent-transactions";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import TransactionHistory from "@/components/transaction-history";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import WeeklyTransactionChart from "@/components/weekly-transaction-chart";
import { useTranslations } from 'next-intl';

export default function Page() {
    const t = useTranslations('Home');

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-[var(--header)] text-[var(--header-foreground)]">
          <div className="flex gap-2 items-center justify-between px-3 w-full">
            <div className="flex items-center">
              <SidebarTrigger />
              <h1 className="text-base font-medium ms-3.5">Accounts</h1>
               <h1>{t('title')}</h1>
            </div>

            <Separator orientation="vertical" className="mr-2 h-4" />
            <SiteHeader />
          </div>
        </header>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
            </div>
            <div className="grid grid-cols-12 gap-6 p-4 sm:p-6">
              <div className="col-span-12 lg:col-span-8">
                <p className="text-2xl font-medium mb-4">Last Transaction</p>
                <TransactionHistory />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-medium mb-4">My Card</p>
                  <p className="text-lg font-medium mb-4">See All</p>
                </div>
                <CreditCard />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6 p-4 sm:p-6">
              <div className="col-span-12 lg:col-span-8">
                <p className="text-2xl font-medium mb-4">Debit & Credit Overview</p>
                <WeeklyTransactionChart />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-medium mb-4">Invoices Sent</p>
                </div>
                <RecentTransactions />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
