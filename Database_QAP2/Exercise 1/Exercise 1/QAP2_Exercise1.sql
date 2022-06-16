CREATE TABLE "Province" (
  "province_id" serial NOT NULL,
  "province" character varying(4) NOT NULL,
  PRIMARY KEY ("province_id")
);

CREATE TABLE "City" (
  "city_id" serial NOT NULL,
  "city" character varying(50) NOT NULL,
  "province_id" serial NOT NULL,
  PRIMARY KEY ("city_id"),
  CONSTRAINT "FK_City.province_id"
    FOREIGN KEY ("province_id")
      REFERENCES "Province"("province_id")
);