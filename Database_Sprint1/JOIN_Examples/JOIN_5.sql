-- Muitlple JOIN Example:

-- Selecting customer ID and first and last as Full_Name with amount from payment.
SELECT "Customer"."Customer_ID", "Cust_FirstName" || ' ' || "Cust_LastName" AS "Full_Name", 
"Payment"."Amount", "Orders"."Order_ID", "Orders"."Quantity" FROM public."Customer"

-- SELECT "Quantity" FROM public."Orders" 

-- INNER JOIN With Payment on Customer_ID and Payment_ID
INNER JOIN "Payment" ON "Customer"."Customer_ID" = "Payment"."Payment_ID"
-- Then we JOIN INNER JOIN With Orders on payment ID and order ID
INNER JOIN "Orders" ON "Payment"."Payment_ID" = "Orders"."Order_ID"

-- Max of 5 characters in length for Customer First Name.
WHERE LENGTH("Cust_FirstName") BETWEEN 0 AND 5

GROUP BY "Customer"."Customer_ID", "Payment"."Amount", "Orders"."Order_ID"
ORDER BY "Payment"."Amount"