CREATE TABLE public."order"
(
    order_id integer NOT NULL,
    customer_id integer NOT NULL,
    amount numeric NOT NULL,
    PRIMARY KEY (order_id)
);

ALTER TABLE IF EXISTS public."order"
    OWNER to postgres;