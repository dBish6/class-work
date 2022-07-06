-- Customer & Orders JOIN Example

-- Selecting Customer_ID and first and last as Full_Name from Customer, and Order_ID from Orders .
SELECT "Customer"."Customer_ID", "Cust_FirstName" || ' ' || "Cust_LastName" AS "Full_Name", "Orders"."Order_ID" FROM public."Customer"

-- LEFT JOIN with Orders on Customer_ID and Order_ID, LEFT JOIN shows everything on the left side even if they're null values.
LEFT JOIN "Orders" ON "Customer"."Customer_ID" = "Orders"."Order_ID"

GROUP BY "Customer"."Customer_ID", "Orders"."Order_ID"
