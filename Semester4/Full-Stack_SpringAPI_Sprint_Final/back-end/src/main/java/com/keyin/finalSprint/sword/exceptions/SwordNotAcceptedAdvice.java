package com.keyin.finalSprint.sword.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

// Configuration of exception.
public class SwordNotAcceptedAdvice {

    @ResponseBody
    @ExceptionHandler(SwordNotAcceptedException.class)
    @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
    String swordNotAcceptedHandler(SwordNotAcceptedException e) {
        return e.getMessage();
    }
}
