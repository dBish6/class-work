CREATE TABLE "Vehicle" (
  "vehicle_id" serial NOT NULL,
  "manufacturer" character varying(16) NOT NULL,
  "model" character varying(16) NOT NULL,
  "type" character varying(16) NOT NULL,
  "year" integer NOT NULL,
  "colour" character varying(10) NOT NULL,
  PRIMARY KEY ("vehicle_id")
);

CREATE TABLE "Licence" (
  "licence_id" serial NOT NULL,
  "expiry_date" date NOT NULL,
  "class" character varying(10) NOT NULL,
  "image" bytea NOT NULL,
  PRIMARY KEY ("licence_id")
);

CREATE TABLE "Driver" (
  "driver_id" serial NOT NULL,
  "licence_id" serial NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  "address" character varying(32) NOT NULL,
  "postal_code" character varying(6) NOT NULL,
  "birth_date" date NOT NULL,
  PRIMARY KEY ("driver_id"),
  CONSTRAINT "FK_Driver.licence_id"
    FOREIGN KEY ("licence_id")
      REFERENCES "Licence"("licence_id")
);

CREATE TABLE "Registration" (
  "registration_id" serial NOT NULL,
  "driver_id" serial NOT NULL,
  "vehicle_id" serial NOT NULL,
  "slip_type" character varying(16) NOT NULL,
  "amount" integer NOT NULL,
  "expiry_date" date NOT NULL,
  PRIMARY KEY ("registration_id"),
  CONSTRAINT "FK_Registration.vehicle_id"
    FOREIGN KEY ("vehicle_id")
      REFERENCES "Vehicle"("vehicle_id"),
  CONSTRAINT "FK_Registration.driver_id"
    FOREIGN KEY ("driver_id")
      REFERENCES "Driver"("driver_id")
);