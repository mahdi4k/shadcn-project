import React from "react";

const CreditCard = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br">
        <div className="w-full">
          {/* Card Container */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-300 rounded-2xl shadow-2xl overflow-hidden">
            {/* Card Content */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-indigo-200 font-medium">Balance</p>
                  <h2 className="text-xl font-bold text-white mt-1">$5,756</h2>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-white bg-opacity-30 backdrop-blur-sm rounded-full w-12 h-8"></div>
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
            </div>

            {/* Card Footer */}
            <div className="bg-blue-400 bg-opacity-20 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-xl font-bold tracking-widest text-white">3778 **** **** 1234</p>
                  </div>
                </div>
                <div className="flex  -space-x-4">
                  <div className="bg-white/50 bg-opacity-20 rounded-full w-8 h-8"></div>
                  <div className="bg-white/30 bg-opacity-20 rounded-full w-8 h-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
