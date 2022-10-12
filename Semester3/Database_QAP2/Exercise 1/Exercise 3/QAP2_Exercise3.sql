CREATE TABLE "Usage" (
  "usage_id" serial NOT NULL,
  "rate" numeric NOT NULL,
  "date" date NOT NULL,
  PRIMARY KEY ("usage_id")
);

CREATE TABLE "Type" (
  "type_id" serial NOT NULL,
  "type_name" character varying(32) NOT NULL,
  "format" character varying(16) NOT NULL,
  PRIMARY KEY ("type_id")
);

CREATE TABLE "Employee" (
  "employee_id" serial NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  "email" character varying(50) NOT NULL,
  "address" character varying(50) NOT NULL,
  PRIMARY KEY ("employee_id")
);

CREATE TABLE "Author" (
  "author_id" serial NOT NULL,
  "employee_id" character varying(32) NOT NULL,
  PRIMARY KEY ("author_id"),
  CONSTRAINT "FK_Author.employee_id"
    FOREIGN KEY ("employee_id")
      REFERENCES "Employee"("employee_id")
);

CREATE TABLE "Publication" (
  "publication_id" serial NOT NULL,
  "author_id" serial NOT NULL,
  "type_id" serial NOT NULL,
  "usage_id" serial NOT NULL,
  "title" character varying(32) NOT NULL,
  "creation_date" date NOT NULL,
  "publisher" character varying(32) NOT NULL,
  PRIMARY KEY ("publication_id"),
  CONSTRAINT "FK_Publication.usage_id"
    FOREIGN KEY ("usage_id")
      REFERENCES "Usage"("usage_id"),
  CONSTRAINT "FK_Publication.type_id"
    FOREIGN KEY ("type_id")
      REFERENCES "Type"("type_id"),
  CONSTRAINT "FK_Publication.author_id"
    FOREIGN KEY ("author_id")
      REFERENCES "Author"("author_id")
);

