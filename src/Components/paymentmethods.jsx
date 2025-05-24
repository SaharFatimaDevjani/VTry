import React from 'react';

const PaymentVerifiedSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 bg-white w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Section - Payment Methods */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Payment Methods */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2 p-6">Payment Methods</h3>
              <div className="flex items-center gap-3">
                <img 
                  src="https://img.lazcdn.com/us/domino/78355368-8518-4b88-9f8e-e5751ee0863a_PK-140-84.png" 
                  alt="Visa" 
                  className="h-6"
                />
                <img 
                  src="https://img.lazcdn.com/us/domino/7237a412-04cc-4571-a200-44f6f847a9da_PK-144-84.png" 
                  alt="Installment" 
                  className="h-6"
                />
                <span className="text-xs text-gray-500">Monthly Installment?</span>
                <img 
                  src="https://img.lazcdn.com/us/domino/75489476-3c86-44ed-bf81-8b0579d56e1c_PK-139-84.png" 
                  alt="Browse Marks" 
                  className="h-6"
                />
              </div>
            </div>

            {/* Verified By - Now on same line */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Verified by</h3>
              <img 
                src="//img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png" 
                alt="Verified" 
                className="h-4"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Empty in reference image */}
        <div className="md:w-1/4"></div>
      </div>
    </div>
  );
};

export default PaymentVerifiedSection;