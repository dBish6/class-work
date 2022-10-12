CREATE TABLE "Mark" (
  "exam_id" serial NOT NULL,
  "exam_name" character varying(32) NOT NULL,
  "total_marks" integer NOT NULL,
  PRIMARY KEY ("exam_id")
);

CREATE TABLE "Course" (
  "course_id" serial NOT NULL,
  "course_title" character varying(32) NOT NULL,
  "description" character varying(100),
  PRIMARY KEY ("course_id")
);

CREATE TABLE "Class" (
  "class_id" serial NOT NULL,
  "course_id" serial NOT NULL,
  "class_title" character varying(32) NOT NULL,
  "description" character varying(100),
  PRIMARY KEY ("class_id"),
  CONSTRAINT "FK_Class.course_id"
    FOREIGN KEY ("course_id")
      REFERENCES "Course"("course_id")
);

CREATE TABLE "Students" (
  "student_num" serial NOT NULL,
  "class_id" serial NOT NULL,
  "exam_id" serial NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  "stud_email" character varying(50) NOT NULL,
  "address" character varying(50) NOT NULL,
  PRIMARY KEY ("student_num"),
  CONSTRAINT "FK_Students.exam_id"
    FOREIGN KEY ("exam_id")
      REFERENCES "Mark"("exam_id"),
  CONSTRAINT "FK_Students.class_id"
    FOREIGN KEY ("class_id")
      REFERENCES "Class"("class_id")
);

