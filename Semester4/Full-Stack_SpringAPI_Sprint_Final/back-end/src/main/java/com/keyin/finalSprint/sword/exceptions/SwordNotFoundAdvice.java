package com.keyin.finalSprint.sword.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

// Configuration of exception.
@ControllerAdvice
class SwordNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(SwordNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String employeeNotFoundHandler(SwordNotFoundException e) {
        return e.getMessage();
    }
}
