CREATE TABLE public.customers
(
    customer_id integer NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email character varying NOT NULL,
    address character varying NOT NULL,
    PRIMARY KEY (customer_id)
);

ALTER TABLE IF EXISTS public.customers
    OWNER to postgres;