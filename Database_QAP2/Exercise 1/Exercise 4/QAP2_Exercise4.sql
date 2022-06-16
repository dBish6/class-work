CREATE TABLE "Genre" (
  "genre_id" serial NOT NULL,
  "type_name" character varying(16) NOT NULL,
  PRIMARY KEY ("genre_id")
);

CREATE TABLE "Author" (
  "author_id" serial NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  PRIMARY KEY ("author_id")
);

CREATE TABLE "eBook" (
  "ebook_id" serial NOT NULL,
  "author_id" serial NOT NULL,
  "genre_id" serial NOT NULL,
  PRIMARY KEY ("ebook_id"),
  CONSTRAINT "FK_eBook.genre_id"
    FOREIGN KEY ("genre_id")
      REFERENCES "Genre"("genre_id"),
  CONSTRAINT "FK_eBook.author_id"
    FOREIGN KEY ("author_id")
      REFERENCES "Author"("author_id")
);

CREATE TABLE "User" (
  "user_id" serial NOT NULL,
  "username" character varying(50) NOT NULL,
  "home_email" character varying(50) NOT NULL,
  "work_email" character varying(50),
  "school_email" character varying(50),
  PRIMARY KEY ("user_id")
);

CREATE TABLE "Search" (
  "user_id" serial NOT NULL,
  "ebook_id" serial NOT NULL,
  CONSTRAINT "FK_Search.ebook_id"
    FOREIGN KEY ("ebook_id")
      REFERENCES "eBook"("ebook_id"),
  CONSTRAINT "FK_Search.user_id"
    FOREIGN KEY ("user_id")
      REFERENCES "User"("user_id")
);

