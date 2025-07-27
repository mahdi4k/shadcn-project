import { Filter } from "lucide-react";
import React from "react";

const TransactionHistory = () => {
  const recentActivities = [
    {
      id: 1,
      title: "Payment Received",
      description: "From Emily Wilson",
      amount: "+$780.00",
      time: "2 hours ago",
      icon: <Filter className="text-green-600" />,
      iconBg: "bg-green-100",
    },
    {
      id: 2,
      title: "Mobile Service",
      description: "Monthly subscription",
      amount: "-$340.00",
      time: "5 hours ago",
      icon: <Filter className="text-red-600" />,
      iconBg: "bg-red-100",
    },
    {
      id: 3,
      title: "Spotify Subscription",
      description: "Renewal payment",
      amount: "Pending",
      time: "Yesterday",
      icon: <Filter className="text-blue-600" />,
      iconBg: "bg-blue-100",
    },
  ];
  return (
    <div className="col-span-12 lg:col-span-8">
      <div className="mx-auto">
        {/* Recent Activity */}
        <div className="  rounded-2xl shadow-xs bg-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">View All</button>
          </div>

          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className={`p-3 rounded-full mr-4 ${activity.iconBg}`}>{activity.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h3 className="font-medium text-gray-800">{activity.title}</h3>
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">{activity.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                  <p
                    className={`font-medium mt-1 ${
                      activity.amount.startsWith("+")
                        ? "text-green-600"
                        : activity.amount.startsWith("-")
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {activity.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
