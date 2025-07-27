import { AppSidebar } from "@/components/app-sidebar";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import TransactionHistory from "@/components/TransactionHistory";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Filter } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-[var(--header)] text-[var(--header-foreground)]">
          <div className="flex gap-2 items-center justify-between px-3 w-full">
            <div className="flex items-center">
              <SidebarTrigger />
              <h1 className="text-base font-medium ms-3.5">Accounts</h1>
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
              <TransactionHistory />
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
              <div className="w-full max-w-md">
                {/* Card Container */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-indigo-200 font-medium">Balance</p>
                        <h2 className="text-3xl font-bold text-white mt-1">$5,756</h2>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="bg-white bg-opacity-30 backdrop-blur-sm rounded-full w-12 h-8"></div>
                        <div className="mt-2 bg-white bg-opacity-30 backdrop-blur-sm rounded-full w-8 h-8"></div>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-indigo-200 font-medium tracking-wider">CARD HOLDER</p>
                        <p className="text-lg font-medium text-white mt-1">Eddy Cusuma</p>
                      </div>
                      <div>
                        <p className="text-xs text-indigo-200 font-medium tracking-wider">VALID THRU</p>
                        <p className="text-lg font-medium text-white mt-1">12/22</p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center">
                      <div className="bg-yellow-400 rounded-full w-10 h-6"></div>
                      <div className="bg-red-400 rounded-full w-6 h-6 -ml-3"></div>
                      <div className="ml-4">
                        <p className="text-xl font-bold tracking-widest text-white">3778 **** **** 1234</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="bg-black bg-opacity-20 px-6 py-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-indigo-200">VISA</p>
                      <div className="flex space-x-2">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-8 h-8"></div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-8 h-8"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <button className="bg-white text-indigo-600 font-medium py-3 px-6 rounded-xl hover:bg-gray-100 transition-all">
                    Show Details
                  </button>
                  <button className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-xl hover:bg-indigo-700 transition-all">
                    Pay Now
                  </button>
                </div>

                {/* Card Info */}
                <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-2xl p-6">
                  <h3 className="text-white font-medium mb-4">Recent Transactions</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Amazon", date: "May 12", amount: "-$120", icon: "🛒" },
                      { name: "Netflix", date: "May 10", amount: "-$15", icon: "📺" },
                      { name: "Salary", date: "May 1", amount: "+$3,500", icon: "💰" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white mr-3">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-white font-medium">{item.name}</p>
                            <p className="text-gray-400 text-sm">{item.date}</p>
                          </div>
                        </div>
                        <p className={`font-medium ${item.amount.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                          {item.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
