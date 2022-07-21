CREATE OR REPLACE VIEW public."vw_missingRentals"
 AS
 SELECT customer.customer_id,
    (customer.first_name::text || ' '::text) || customer.last_name::text AS full_name,
    rental.rental_date,
    rental.return_date,
    film.title
   FROM customer
     JOIN rental USING (customer_id)
     JOIN inventory USING (inventory_id)
     JOIN film USING (film_id)
  WHERE rental.return_date IS NULL
  ORDER BY rental.rental_date;

ALTER TABLE public."vw_missingRentals"
    OWNER TO "dBish";
COMMENT ON VIEW public."vw_missingRentals"
    IS 'Displays every customer that has missing returns.';