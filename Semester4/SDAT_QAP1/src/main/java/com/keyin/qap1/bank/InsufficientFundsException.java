package com.keyin.qap1.bank;

public class InsufficientFundsException extends Exception {

    public InsufficientFundsException(String errorMessage) {
        super(errorMessage);
    }

    public InsufficientFundsException(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }
}
