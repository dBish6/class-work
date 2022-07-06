-- Product, Supplier, Company, Brand & Inventory JOIN Example

-- Selecting Product_ID from Product; Inventory_ID, Quantity, from Inventory.
-- Selecting Brand_ID, Brand_Name from Brand; Supplier_ID, Supplier_name from Supplier.
-- Aswell as Company Name from Company!
SELECT "Product"."Product_ID", "Inventory"."Inventory_ID", "Inventory"."Quantity",
"Brand"."Brand_ID", "Brand"."Brand_Name", "Supplier"."Supplier_ID", 
"Supplier"."Supplier_name", "Company"."Comp_Name" FROM public."Product"

-- INNER JOIN with Supplier on Product_Id and Supplier_ID.
INNER JOIN "Supplier" ON "Product"."Product_ID" = "Supplier"."Supplier_ID"
-- INNER JOIN with Company on Supplier_ID and Company_ID.
INNER JOIN "Company" ON "Supplier"."Supplier_ID" = "Company"."Company_ID"
-- INNER JOIN with Brand on Product_ID and Brand_ID.
INNER JOIN "Brand" ON "Product"."Product_ID" = "Brand"."Brand_ID"
-- INNER JOIN with Inventory on Product_ID and Inventory_ID.
INNER JOIN "Inventory" ON "Product"."Product_ID" = "Inventory"."Inventory_ID"

ORDER BY "Inventory"."Quantity"
