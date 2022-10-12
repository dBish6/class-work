CREATE TABLE "Type" (
  "type_id" serial NOT NULL,
  "name" character varying(32) NOT NULL,
  "material" character varying(10) NOT NULL,
  "height" character varying(10) NOT NULL,
  "width" character varying(10) NOT NULL,
  "weight" character varying(10) NOT NULL,
  PRIMARY KEY ("type_id")
);

CREATE TABLE "Furniture" (
  "furniture_id" serial NOT NULL,
  "type_id" serial NOT NULL,
  "colour" character varying(10) NOT NULL,
  PRIMARY KEY ("furniture_id"),
  CONSTRAINT "FK_Furniture.type_id"
    FOREIGN KEY ("type_id")
      REFERENCES "Type"("type_id")
);

CREATE TABLE "Household" (
  "household_id" serial NOT NULL,
  "furniture_id" serial NOT NULL,
  "address" character varying(50) NOT NULL,
  "city" character varying(24) NOT NULL,
  "province" character varying(4) NOT NULL,
  "postal_code" character varying(6) NOT NULL,
  PRIMARY KEY ("household_id"),
  CONSTRAINT "FK_Household.furniture_id"
    FOREIGN KEY ("furniture_id")
      REFERENCES "Furniture"("furniture_id")
);

