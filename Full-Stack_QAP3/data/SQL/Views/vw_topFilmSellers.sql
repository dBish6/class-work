CREATE OR REPLACE VIEW public."vw_topFilmSellers"
 AS
 SELECT film.title,
    store.store_id,
    sum(payment.amount) AS sum
   FROM film
     JOIN inventory USING (film_id)
     JOIN rental USING (inventory_id)
     JOIN payment USING (rental_id)
     JOIN store USING (store_id)
  GROUP BY film.title, store.store_id
  ORDER BY (sum(payment.amount)) DESC
 LIMIT 10;

ALTER TABLE public."vw_topFilmSellers"
    OWNER TO "dBish";
COMMENT ON VIEW public."vw_topFilmSellers"
    IS 'Displays the top ten rental films by rental dollars earned.';