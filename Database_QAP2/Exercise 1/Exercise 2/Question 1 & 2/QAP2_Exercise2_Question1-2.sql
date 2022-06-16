CREATE TABLE "Department" (
  "department_id" serial NOT NULL,
  "dep_name" character varying(32) NOT NULL,
  "location" character varying(24) NOT NULL,
  PRIMARY KEY ("department_id")
);

CREATE TABLE "FacultyMembers" (
  "faculty_id" serial NOT NULL,
  "department_id" serial NOT NULL,
  "job_title" character varying(32) NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  "fac_email" character varying(50) NOT NULL,
  "fac_address" character varying(32) NOT NULL,
  PRIMARY KEY ("faculty_id"),
  CONSTRAINT "FK_FacultyMembers.department_id"
    FOREIGN KEY ("department_id")
      REFERENCES "Department"("department_id")
);

CREATE TABLE "Professor" (
  "professor_id" serial NOT NULL,
  "faculty_id" serial NOT NULL,
  "description" character varying(100),
  PRIMARY KEY ("professor_id"),
  CONSTRAINT "FK_Professor.faculty_id"
    FOREIGN KEY ("faculty_id")
      REFERENCES "FacultyMembers"("faculty_id")
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
  "professor_id" serial NOT NULL,
  PRIMARY KEY ("class_id"),
  CONSTRAINT "FK_Class.course_id"
    FOREIGN KEY ("course_id")
      REFERENCES "Course"("course_id"),
  CONSTRAINT "FK_Class.professor_id"
    FOREIGN KEY ("professor_id")
      REFERENCES "Professor"("professor_id")
);

CREATE TABLE "Mark" (
  "exam_id" serial NOT NULL,
  "exam_name" character varying(32) NOT NULL,
  "total_marks" integer NOT NULL,
  PRIMARY KEY ("exam_id")
);

CREATE TABLE "Students" (
  "student_num" serial NOT NULL,
  "class_id" serial NOT NULL,
  "exam_name" serial NOT NULL,
  "first_name" character varying(32) NOT NULL,
  "last_name" character varying(32) NOT NULL,
  "stud_email" character varying(50) NOT NULL,
  "stud_address" character varying(32) NOT NULL,
  PRIMARY KEY ("student_num"),
  CONSTRAINT "FK_Students.class_id"
    FOREIGN KEY ("class_id")
      REFERENCES "Class"("class_id"),
  CONSTRAINT "FK_Students.exam_id"
    FOREIGN KEY ("exam_id")
      REFERENCES "Mark"("exam_id")
);