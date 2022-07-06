INSERT INTO public."Location"(
	"Location_ID", "Country", "Address", "City", "Province\State", "Postal\Zip")
	VALUES (DEFAULT, 'Canada', '49 Shearstown Rd', 'Bay Roberts', 'NL', 'A0A1G0'),
	(DEFAULT, 'Canada', '51 Dogwood Dr', 'Gander', 'NL', 'A4TF45'),
	(DEFAULT, 'Canada', '8 Merrymeeting Rd', 'St. Johns', 'NL', 'A1E4E1'),
	(DEFAULT, 'Canada', '69 Frigmont St', 'Edmonton', 'AB', 'T7X3Y3'),
	(DEFAULT, 'Canada', '78 Lincoln Rd', 'Grand Falls-Windsor', 'NL', 'A5G4F3'),
	(DEFAULT, 'Canada', '1405 Bloor St W', 'Toronto', 'ON', 'L0S1E6'),
	(DEFAULT, 'Canada', '2601 Broadway Ave', 'Saskatoon', 'SK', 'S7K8A5'),
	(DEFAULT, 'Romaina', '1820 Traian Mosoiu', 'Transylvania', 'RO', '077065'),
	(DEFAULT, 'Canada', '9085 Rue Hochelaga', 'Montréal', 'QC', 'H2S1K6'),
	(DEFAULT, 'Canada', '458 W Broadway', 'Vancouver', 'BC', 'V6B1B6'),
	(DEFAULT, 'Canada', '342 Freshwater Rd', 'St. Johns', 'NL', 'A1E6Y2'),
	(DEFAULT, 'Canada', '47 Harvey Rd', 'St. Johns', 'NL', 'A1E1T3'),
	(DEFAULT, 'Canada', '160 Water St', 'St. Johns', 'NL', 'A1E2S4'),
	(DEFAULT, 'Canada', '9 Bonaventure Ave', 'St. Johns', 'NL', 'A1E1E3'),
	(DEFAULT, 'Canada', '220 Water St', 'St. Johns', 'NL', 'A1E5U3'),
	(DEFAULT, 'Canada', '1 Military Rd', 'St. Johns', 'NL', 'A1E2K0'),
	(DEFAULT, 'Canada', '2381 Rue Beaubien Est', 'Montréal', 'QC', 'H2S1M8'),
	(DEFAULT, 'Canada', '7899 Templeton Station Rd', 'Richmond', 'BC', 'V2Y1A2'),
	(DEFAULT, 'Canada', 'St-Jean-sur-Richelieu', 'Montréal', 'QC', 'J7V0H1'),
	(DEFAULT, 'Canada', '2673 Chemin Sainte-Foy', 'Sainte-Foy', 'QC', 'H3X 2J7'),
	(DEFAULT, 'Canada', '2121 Boulevard le Carrefour', 'Laval', 'QC', 'G1E0A4'),
	(DEFAULT, 'Canada', '91374 Alaska Hwy', 'Whitehorse', 'YT', 'Y0B1A0'),
	(DEFAULT, 'Canada', '227 Advance Bl', 'Brampton', 'ON', 'L7R4B6');
	
INSERT INTO public."Customer"(
	"Customer_ID", "Cust_FirstName", "Cust_LastName", "Cust_PhoneNum", "Cust_Email", "Location_ID")
	VALUES (DEFAULT, 'David', 'Bishop', '7096802021', 'davidbish2002@hotmail.com', 1),
	(DEFAULT, 'Jacob', 'Pritchett', '7096805456', 'jacobpritch2002@gmail.com', 2),
	(DEFAULT, 'Alex', 'Frizzel', '7096882121', 'alexFriz@gmail.com', 3),
	(DEFAULT, 'Bobby', 'Joe', '6754564567', 'bobby69@hotmail.com', 4),
	(DEFAULT, 'Cowboy', 'Sam', '7096784567', 'yeeehaww2@hotmail.com', 5),
	(DEFAULT, 'Dougie', 'Gilmour', '4167926000', 'doug125@gmail.com', 6),
	(DEFAULT, 'Vlad', 'Impaler', '3063439551', 'blackblack1@gmail.com', 7),
	(DEFAULT, 'Count', 'Dracula', '9026592238', 'BLOOD666@hotmail.com', 8),
	(DEFAULT, 'Frederick', 'Dumpling', '5143532035', 'dump76@gmail.com', 9),
	(DEFAULT, 'Yusuf', 'Wellington', '6048768687', 'yusufW_@hotmail.com', 10);
	
INSERT INTO public."Employee"(
	"Employee_ID", "Emp_name", "Emp_PhoneNum", "Emp_Email", "Location_ID")
	VALUES (DEFAULT, 'Kimbo Klice', '7097658988', 'KimboKlice78@gmail.com', 11),
	(DEFAULT, 'Finn Lee', '7096510278', 'FinnLee70@hotmail.com', 12),
	(DEFAULT, 'Luke Skywalker', '7094321898', 'LukeSkywalker108@gamil.com', 13),
	(DEFAULT, 'Obi Wan Kanobi', '7099876543', 'ObiWanKanobi56@gmail.com', 14),
	(DEFAULT, 'Leonardo Dicaprio', '7092351738', 'LeonardoDicaprio77@gmail.com', 15),
	(DEFAULT, 'Steve Rogers', '7094241668', 'SteveRogers86@gmail.com', 16);
	
INSERT INTO public."Company"(
	"Company_ID", "Comp_Name", "Contact_Manager", "Location_ID")
	VALUES (DEFAULT, 'DB Trucks Co', 'Fred Homebrew', 21),
	(DEFAULT, 'United Noways', 'Crimson Crusader', 22),
	(DEFAULT, 'Brand Man Provincial', 'BudTubs Pool', 23);
	
INSERT INTO public."Supplier"(
	"Supplier_ID", "Supplier_name", "Company_ID")
	VALUES (DEFAULT, 'Hue White', 3),
	(DEFAULT, 'Jacob Norman', 1),
	(DEFAULT, 'Johnny Bradbury', 3),
	(DEFAULT, 'Will Wikins', 2),
	(DEFAULT, 'John Gordano', 1);
	
INSERT INTO public."Brand"(
	"Brand_ID", "Brand_Name", "Contact_Manager", "Location_ID")
	VALUES (DEFAULT, 'Reebok', 'Grace Montero', 17),
	(DEFAULT, 'Nike', 'John Donahoe', 18),
	(DEFAULT, 'CCM', 'Catherine Beaulieu', 19),
	(DEFAULT, 'Sher-Wood', 'Anthony Fisher', 20);
	
INSERT INTO public."Shipping"(
	"Shipping_ID", "Method_Type", "Delivery_Date")
	VALUES (DEFAULT, 'Canada Post Regular', '2022-05-01'),
	(DEFAULT, 'Canada Post Xpresspost', '2022-05-16'),
	(DEFAULT, 'Canada Post Priority', '2022-05-23'),
	(DEFAULT, 'Canada Post Regular', '2022-05-24'),
	(DEFAULT, 'Canada Post Regular', '2022-06-02'),
	(DEFAULT, 'Purolator Ground', '2022-06-03');
	
INSERT INTO public."Product"(
	"Product_ID", "Supplier_ID", "Brand_ID", "Prouduct_Name", "Category", "Size", "Prod_Price")
	VALUES (DEFAULT, 1, 2, 'Nike Athletics Hoodie', 'Clothes/Sport', 'L', 39.99),
	(DEFAULT, 2, 1, 'Reebok Supreme Hockey Pants', 'Hockey/Gear', 'XL', 59.99),
	(DEFAULT, 3, 3, 'CMM Logo Hockey Cap', 'Clothes/Causal', 'OSFA', 14.99),
	(DEFAULT, 4, 4, 'Sher-Wood Cripplin Wood Stick', 'Hockey/Sticks', 'Sr', 79.99),
	(DEFAULT, 4, 4, 'Sher-Wood Good Ol Gloves', 'Hockey/Gloves', 'L', 49.99),
	(DEFAULT, 5, 2, 'Nike Next Gen Shen Pads', 'Hockey/Pads', 'L', 49.99);
	
INSERT INTO public."Inventory"(
	"Inventory_ID", "Product_ID", "Quantity")
	VALUES (DEFAULT, 1, 49),
	(DEFAULT, 2, 19),
	(DEFAULT, 3, 49),
	(DEFAULT, 4, 9),
	(DEFAULT, 5, 27),
	(DEFAULT, 6, 24);
	
INSERT INTO public."Payment"(
	"Payment_ID", "Customer_ID", "Payment_Date", "Amount")
	VALUES (DEFAULT, 1, '2022-04-30', 49.99),
	(DEFAULT, 3, '2022-05-14', 74.49),
	(DEFAULT, 2, '2022-05-21', 49.69),
	(DEFAULT, 4, '2022-05-23', 89.99),
	(DEFAULT, 4, '2022-06-01', 61.69),
	(DEFAULT, 5, '2022-06-02', 59.99);
	
INSERT INTO public."Orders"(
	"Order_ID", "Product_ID", "Shipping_ID", "Payment_ID", "Customer_ID", "Employee_ID", "Quantity")
	VALUES (DEFAULT, 1, 1, 1, 1, 1, 1),
	(DEFAULT, 2, 2, 2, 3, 2, 1),
	(DEFAULT, 3, 3, 3, 2, 3, 2),
	(DEFAULT, 4, 4, 4, 4, 4, 1),
	(DEFAULT, 5, 5, 5, 4, 5, 1),
	(DEFAULT, 6, 6, 6, 5, 6, 1);