package com.keyin.finalSprint.sword.exceptions;

public class SwordNotFoundException extends RuntimeException {

    public SwordNotFoundException() {
        super("ERROR: No product(s) were found.");
    }

    public SwordNotFoundException(Long id) {
        super("ERROR: Could not find product with Id " + id + ".");
    }
}
