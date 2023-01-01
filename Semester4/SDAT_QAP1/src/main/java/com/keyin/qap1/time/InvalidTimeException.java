package com.keyin.qap1.time;

public class InvalidTimeException extends Exception {

    public InvalidTimeException(String errorMessage) {
        super(errorMessage);
    }

    public InvalidTimeException(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }
}
