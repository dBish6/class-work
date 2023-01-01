package com.keyin.qap2.creditCardUser.exceptions;

public class ExceedLimitException extends Exception {

    public ExceedLimitException(String errorMessage) {
        super(errorMessage);
    }
}
