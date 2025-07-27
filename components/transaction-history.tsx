import { Filter } from "lucide-react";
import React from "react";

const TransactionHistory = () => {
  const recentActivities = [
    {
      id: 1,
      title: "Payment Received",
      date: "25 jan 2025",
      amount: "+$780.00",
      status: "Completed",
      type: "Transfer",
      cardNumber: "1234 ****",
      time: "2 hours ago",
      icon: <Filter className="text-green-600" />,
      iconBg: "bg-green-100",
    },
    {
      id: 2,
      type: "Service",
      date: "25 jan 2025",
      title: "Mobile Service",
      status: "Pending",
      amount: "-$340.00",
      time: "5 hours ago",
      cardNumber: "1234 ****",
      icon: <Filter className="text-red-600" />,
      iconBg: "bg-red-100",
    },
    {
      id: 3,
      type: "Shopping",
      status: "Pending",
      date: "25 jan 2025",
      title: "Spotify Subscription",
      amount: "-$150.00",
      cardNumber: "1234 ****",
      time: "Yesterday",
      icon: <Filter className="text-blue-600" />,
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <div className="mx-auto">
      {/* Recent Activity */}
      <div className="rounded-2xl shadow-xs bg-card p-4">
        {/* Transactions List */}
        <div className="">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="rounded-lg p-3 hover:shadow-md transition-shadow">
              {/* Mobile View */}
              <div className="sm:hidden">
                <div className="flex items-start mb-3">
                  <div className={`p-2 rounded-full me-3 ${activity.iconBg}`}>{activity.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-800">{activity.title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Type:</span> {activity.type}
                  </div>
                  <div>
                    <span className="text-gray-500">Card:</span> {activity.cardNumber}
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span> {activity.status}
                  </div>
                  <div className={`font-medium ${activity.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                    <span className="text-gray-500">Amount:</span> {activity.amount}
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden sm:grid grid-cols-12 gap-4 items-center">
                <div className="col-span-4 flex items-center">
                  <div className={`p-3 rounded-2xl ltr:me-3 rtl:ms-3  ${activity.iconBg}`}>{activity.icon}</div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-800 dark:text-gray-200">{activity.title}</h3>
                    <h3 className="font-medium mt-2 text-sm text-gray-400">{activity.date}</h3>
                  </div>
                </div>
                <div className="col-span-2 text-gray-400">{activity.type}</div>
                <div className="col-span-2 text-gray-400">{activity.cardNumber}</div>
                <div className="col-span-2">
                  <span className={`inline-flex text-gray-400 items-center px-2 py-1 rounded-full text-sm`}>{activity.status}</span>
                </div>
                <div
                  className={`col-span-2 text-right font-medium ${
                    activity.amount.startsWith("+") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {activity.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
