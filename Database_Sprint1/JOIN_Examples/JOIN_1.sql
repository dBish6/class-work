-- Customer & Location JOIN Example

-- Selecting Customer_ID and first and last as Full_Name, Phone, Email from Customer.
-- Selecting Location attributes aswell; ID, Country, Address, City.
SELECT "Customer_ID", "Cust_FirstName" || ' ' || "Cust_LastName" AS "Full_Name", "Cust_PhoneNum", "Cust_Email", 
"Location"."Location_ID", "Location"."Country", "Location"."Address", "Location"."City" FROM public."Customer"

-- INNER JOIN with Location on Customer_ID and Location_ID.
INNER JOIN "Location" ON "Customer"."Customer_ID" = "Location"."Location_ID"

GROUP BY "Customer_ID", "Location"."Location_ID"