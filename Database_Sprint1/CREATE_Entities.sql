CREATE TABLE "Location" (
  "Location_ID" Serial NOT NULL,
  "Country" character varying(24) NOT NULL,
  "Address" character varying(32) NOT NULL,
  "City" character varying(50) NOT NULL,
  "Province\State" character varying(4) NOT NULL,
  "Postal\Zip" character varying(10) NOT NULL,
  PRIMARY KEY ("Location_ID")
);

CREATE TABLE "Employee" (
  "Employee_ID" Serial NOT NULL,
  "Emp_name" character varying(32) NOT NULL,
  "Emp_PhoneNum" character varying(11) NOT NULL,
  "Emp_Email" character varying(45) NOT NULL,
  "Location_ID" Serial NOT NULL,
  PRIMARY KEY ("Employee_ID"),
  CONSTRAINT "FK_Employee.Location_ID"
    FOREIGN KEY ("Location_ID")
      REFERENCES "Location"("Location_ID")
);

CREATE TABLE "Customer" (
  "Customer_ID" Serial NOT NULL,
  "Cust_FirstName" character varying(32) NOT NULL,
  "Cust_LastName" character varying(32) NOT NULL,
  "Cust_PhoneNum" character varying(11) NOT NULL,
  "Cust_Email" character varying(45) NOT NULL,
  "Location_ID" Serial NOT NULL,
  PRIMARY KEY ("Customer_ID"),
  CONSTRAINT "FK_Customer.Location_ID"
    FOREIGN KEY ("Location_ID")
      REFERENCES "Location"("Location_ID")
);

CREATE TABLE "Payment" (
  "Payment_ID" Serial NOT NULL,
  "Customer_ID" Serial NOT NULL,
  "Payment_Date" Date NOT NULL,
  "Amount" numeric(5,2) NOT NULL,
  PRIMARY KEY ("Payment_ID"),
  CONSTRAINT "FK_Payment.Customer_ID"
    FOREIGN KEY ("Customer_ID")
      REFERENCES "Customer"("Customer_ID")
);

CREATE TABLE "Shipping" (
  "Shipping_ID" Serial NOT NULL,
  "Method_Type" character varying(32) NOT NULL,
  "Delivery_Date" Date NOT NULL,
  PRIMARY KEY ("Shipping_ID")
);

CREATE TABLE "Company" (
  "Company_ID" Serial NOT NULL,
  "Comp_Name" character varying(45) NOT NULL,
  "Contact_Manager" character varying(32) NOT NULL,
  "Location_ID" Serial NOT NULL,
  PRIMARY KEY ("Company_ID"),
  CONSTRAINT "FK_Company.Location_ID"
    FOREIGN KEY ("Location_ID")
      REFERENCES "Location"("Location_ID")
);

CREATE TABLE "Supplier" (
  "Supplier_ID" Serial NOT NULL,
  "Supplier_name" character varying(32) NOT NULL,
  "Company_ID" Serial NOT NULL,
  PRIMARY KEY ("Supplier_ID"),
  CONSTRAINT "FK_Supplier.Company_ID"
    FOREIGN KEY ("Company_ID")
      REFERENCES "Company"("Company_ID")
);

CREATE TABLE "Brand" (
  "Brand_ID" Serial NOT NULL,
  "Brand_Name" character varying(45) NOT NULL,
  "Contact_Manager" character varying(32) NOT NULL,
  "Location_ID" Serial NOT NULL,
  PRIMARY KEY ("Brand_ID"),
  CONSTRAINT "FK_Brand.Location_ID"
    FOREIGN KEY ("Location_ID")
      REFERENCES "Location"("Location_ID")
);

CREATE TABLE "Product" (
  "Product_ID" Serial NOT NULL,
  "Supplier_ID" Serial NOT NULL,
  "Brand_ID" Serial NOT NULL,
  "Prouduct_Name" character varying(32) NOT NULL,
  "Category" character varying(32) NOT NULL,
  "Size" character varying(4) NOT NULL,
  "Prod_Price" numeric(5,2) NOT NULL,
  PRIMARY KEY ("Product_ID"),
  CONSTRAINT "FK_Product.Supplier_ID"
    FOREIGN KEY ("Supplier_ID")
      REFERENCES "Supplier"("Supplier_ID"),
  CONSTRAINT "FK_Product.Brand_ID"
    FOREIGN KEY ("Brand_ID")
      REFERENCES "Brand"("Brand_ID")
);

CREATE TABLE "Inventory" (
  "Inventory_ID" Serial NOT NULL,
  "Product_ID" Serial NOT NULL,
  "Quantity" Integer NOT NULL,
  PRIMARY KEY ("Inventory_ID"),
  CONSTRAINT "FK_Inventory.Product_ID"
    FOREIGN KEY ("Product_ID")
      REFERENCES "Product"("Product_ID")
);

CREATE TABLE "Orders" (
  "Order_ID" Serial NOT NULL,
  "Product_ID" Serial NOT NULL,
  "Shipping_ID" Serial NOT NULL,
  "Payment_ID" Serial NOT NULL,
  "Customer_ID" Serial NOT NULL,
  "Employee_ID" Serial NOT NULL,
  "Quantity" Integer NOT NULL,
  PRIMARY KEY ("Order_ID"),
  CONSTRAINT "FK_Order.Shipping_ID"
    FOREIGN KEY ("Shipping_ID")
      REFERENCES "Shipping"("Shipping_ID"),
  CONSTRAINT "FK_Order.Payment_ID"
    FOREIGN KEY ("Payment_ID")
      REFERENCES "Payment"("Payment_ID"),
  CONSTRAINT "FK_Order.Customer_ID"
    FOREIGN KEY ("Customer_ID")
      REFERENCES "Customer"("Customer_ID"),
  CONSTRAINT "FK_Order.Employee_ID"
    FOREIGN KEY ("Employee_ID")
      REFERENCES "Employee"("Employee_ID"),
  CONSTRAINT "FK_Order.Product_ID"
    FOREIGN KEY ("Product_ID")
      REFERENCES "Product"("Product_ID")
);
