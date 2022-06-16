CREATE TABLE "Type" (
  "type_id" serial,
  "style" character varying(24) NOT NULL,
  "material" character varying(16) NOT NULL,
  "height" character varying(10) NOT NULL,
  "width" character varying(10) NOT NULL,
  "weight" character varying(10) NOT NULL,
  PRIMARY KEY ("type_id")
);

CREATE TABLE "Gallery" (
  "gallery_id" serial NOT NULL,
  "gall_name" character varying(50) NOT NULL,
  "address" character varying(32) NOT NULL,
  PRIMARY KEY ("gallery_id")
);

CREATE TABLE "Artist" (
  "artist_id" serial NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  "age" integer NOT NULL,
  "birth_place" character varying(32) NOT NULL,
  "birth_date" date NOT NULL,
  "deceased" boolean NOT NULL,
  PRIMARY KEY ("artist_id")
);

CREATE TABLE "Art" (
  "art_id" serial NOT NULL,
  "artist_id" serial NOT NULL,
  "type_id" serial NOT NULL,
  "title" character varying(50) NOT NULL,
  "creation_date" date NOT NULL,
  "value" integer NOT NULL,
  "description" character varying(100),
  "gallery_id" serial NOT NULL,
  PRIMARY KEY ("art_id"),
  CONSTRAINT "FK_Art.type_id"
    FOREIGN KEY ("type_id")
      REFERENCES "Type"("type_id"),
  CONSTRAINT "FK_Art.artist_id"
    FOREIGN KEY ("artist_id")
      REFERENCES "Artist"("artist_id"),
  CONSTRAINT "FK_Art.gallery_id"
    FOREIGN KEY ("gallery_id")
      REFERENCES "Gallery"("gallery_id")
);