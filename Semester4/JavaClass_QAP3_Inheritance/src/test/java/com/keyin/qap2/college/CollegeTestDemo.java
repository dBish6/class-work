package com.keyin.qap2.college;

import com.keyin.qap2.college.exceptions.InvalidInputException;

public class CollegeTestDemo {

    public static void main(String[] args) throws InvalidInputException {

        Student lynne = new Student("Lynne Brooke", 16, 'F', 1584, 3.5);
        System.out.println(lynne);
        Teacher mrJava = new Teacher("Duke Java", 34, 'M', "Computer Science", 50000);
        System.out.println(mrJava);
        CollegeStudent ima = new CollegeStudent("Ima Frosh", 18, 'F', 1236, 4.0,
                "English", 1);
        System.out.println(ima);
    }
}
