package com.keyin.finalSprint.sword.exceptions;

public class SwordNotAcceptedException extends RuntimeException {

    public SwordNotAcceptedException() {
        super("ERROR: No product should have empty fields.");
    }

    public SwordNotAcceptedException(String msg) {
        super(msg);
    }
}
