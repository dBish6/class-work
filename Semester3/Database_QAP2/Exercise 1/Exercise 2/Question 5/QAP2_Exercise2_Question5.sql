CREATE TABLE "Sauce  " (
  "sauce_id" serial NOT NULL,
  "type" character varying(16) NOT NULL,
  "price" integer NOT NULL,
  PRIMARY KEY ("sauce_id")
);

CREATE TABLE "Toppings" (
  "topping_id" serial NOT NULL,
  "type" character varying(16) NOT NULL,
  "price" integer NOT NULL,
  PRIMARY KEY ("topping_id")
);

CREATE TABLE "Size" (
  "size_id" serial NOT NULL,
  "size" character varying(3) NOT NULL,
  "price" integer NOT NULL,
  PRIMARY KEY ("size_id")
);

CREATE TABLE "Pizza" (
  "pizza_id" serial NOT NULL,
  "topping_id" serial NOT NULL,
  "sauce_id" serial NOT NULL,
  "size_id" serial NOT NULL,
  "pizza_title" character varying(32) NOT NULL,
  "total_price" integer NOT NULL,
  PRIMARY KEY ("pizza_id"),
  CONSTRAINT "FK_Pizza.sauce_id"
    FOREIGN KEY ("sauce_id")
      REFERENCES "Sauce  "("sauce_id"),
  CONSTRAINT "FK_Pizza.topping_id"
    FOREIGN KEY ("topping_id")
      REFERENCES "Toppings"("topping_id"),
  CONSTRAINT "FK_Pizza.size_id"
    FOREIGN KEY ("size_id")
      REFERENCES "Size"("size_id")
);

CREATE TABLE "DeliveryMethod" (
  "delivery_id" serial NOT NULL,
  "method" character varying(24) NOT NULL,
  "delivery_date" date NOT NULL,
  PRIMARY KEY ("delivery_id")
);

CREATE TABLE "Customer " (
  "customer_id" serial NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  "phone_num" character varying(11) NOT NULL,
  "cus_address" character varying(50) NOT NULL,
  PRIMARY KEY ("customer_id")
);

CREATE TABLE "Employee" (
  "employee_id" serial NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  "email" character varying(50) NOT NULL,
  "emp_address" character varying(50) NOT NULL,
  PRIMARY KEY ("employee_id")
);

CREATE TABLE "Payment" (
  "payment_id" serial NOT NULL,
  "customer_id" serial NOT NULL,
  "payment_date" date NOT NULL,
  "amount" integer NOT NULL,
  PRIMARY KEY ("payment_id"),
  CONSTRAINT "FK_Payment.customer_id"
    FOREIGN KEY ("customer_id")
      REFERENCES "Customer "("customer_id")
);

CREATE TABLE "Order" (
  "order_id" serial NOT NULL,
  "payment_id" serial NOT NULL,
  "delivery_id" serial NOT NULL,
  "customer_id" serial NOT NULL,
  "employee_id" serial NOT NULL,
  "quantity" integer NOT NULL,
  PRIMARY KEY ("order_id"),
  CONSTRAINT "FK_Order.payment_id"
    FOREIGN KEY ("payment_id")
      REFERENCES "Payment"("payment_id"),
  CONSTRAINT "FK_Order.delivery_id"
    FOREIGN KEY ("delivery_id")
      REFERENCES "DeliveryMethod"("delivery_id"),
  CONSTRAINT "FK_Order.customer_id"
    FOREIGN KEY ("customer_id")
      REFERENCES "Customer "("customer_id"),
  CONSTRAINT "FK_Order.employee_id"
    FOREIGN KEY ("employee_id")
      REFERENCES "Employee"("employee_id")
);

CREATE TABLE "Side" (
  "side_id" serial NOT NULL,
  "type" character varying(16) NOT NULL,
  "price" integer NOT NULL,
  PRIMARY KEY ("side_id")
);

CREATE TABLE "Menu" (
  "menu_id" serial NOT NULL,
  "pizza_id" serial NOT NULL,
  "side_id" serial NOT NULL,
  PRIMARY KEY ("menu_id"),
  CONSTRAINT "FK_Menu.side_id"
    FOREIGN KEY ("side_id")
      REFERENCES "Side"("side_id"),
  CONSTRAINT "FK_Menu.pizza_id"
    FOREIGN KEY ("pizza_id")
      REFERENCES "Pizza"("pizza_id")
);

