// components/RecentTransactions.tsx
import React from 'react';
import { 
  Gamepad, 
  User, 
  Apple, 
  DollarSign,
} from 'lucide-react';

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      title: "Apple Store",
      time: "5h ago",
      amount: "$450",
      icon: <Apple className="text-gray-700" size={20} />,
      iconBg: "bg-blue-100"
    },
    {
      id: 2,
      title: "Michael",
      time: "2 days ago",
      amount: "$160",
      icon: <User className="text-gray-700" size={20} />,
      iconBg: "bg-green-100"
    },
    {
      id: 3,
      title: "Playstation",
      time: "5 days ago",
      amount: "$1085",
      icon: <Gamepad className="text-gray-700" size={20} />,
      iconBg: "bg-purple-100"
    },
    {
      id: 4,
      title: "William",
      time: "10 days ago",
      amount: "$90",
      icon: <User className="text-gray-700" size={20} />,
      iconBg: "bg-yellow-100"
    }
  ];

  return (
    <div className="bg-card rounded-2xl shadow-sm p-6">
 
      <div className="space-y-5">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id} 
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center">
              <div className={`${transaction.iconBg} p-3 rounded-2xl  me-4  `}>
                {transaction.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-500">{transaction.title}</h3>
                <p className="text-sm text-emerald-600 mt-1">{transaction.time}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-400">{transaction.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;