-- Employee & Location JOIN Example

-- Selecting Employee_ID, Emp_name, Phone, Email from Employee.
-- Selecting Location attributes aswell; ID, Country, Address, City.
SELECT "Employee_ID", "Emp_name", "Emp_PhoneNum", "Emp_Email", 
"Location"."Location_ID", "Location"."Country", "Location"."Address", "Location"."City" FROM public."Employee"

-- INNER JOIN with Location on Employee_ID and Location_ID.
INNER JOIN "Location" ON "Employee"."Employee_ID" = "Location"."Location_ID"

GROUP BY "Employee_ID", "Location"."Location_ID"